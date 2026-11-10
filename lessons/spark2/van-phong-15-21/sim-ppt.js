/* ---------- Mô phỏng Microsoft PowerPoint ----------
   this.slides: [{title, body, objs:[{id,type,emo}], trans, anims:[{target,label,effect,dur}]}] */
const TRANS = ['None','Fade','Push','Wipe','Split'];
const ANIMS = ['Appear','Fly In','Zoom','Fade'];
let _pid=0;

class PptSim{
  constructor(host){
    this.host=host; this.log=new Set(); this.onchange=()=>{}; this.cur=0; this.sel=null; this.slides=[];
    host.innerHTML=`
    <div class="win p-win">
      ${winTitle('p','powerpoint','Bài trình chiếu1 – PowerPoint')}
      <div class="tabs p-tabs">
        <button class="dis file">File</button><button data-tab="home" class="on">Home</button><button data-tab="insert">Insert</button><button class="dis">Draw</button>
        <button data-tab="design">Design</button><button data-tab="trans">Transitions</button><button data-tab="anim">Animations</button>
        <button data-tab="show">Slide Show</button><button class="dis">Review</button><button class="dis">View</button>
      </div>
      <div class="rib p-rib" data-panel="home">
        ${grp(bigBtn('','paste','Paste','dis')+stack(smBtn('','cut','Cut','dis'),smBtn('','copy','Copy','dis')),'Clipboard')}
        ${grp(bigBtn('data-cmd="newslide"','newslide','New Slide')+stack(smBtn('','slide','Layout','dis'),smBtn('','rotate','Reset','dis')),'Slides')}
        ${grp(stack(`<span class="box wide">Calibri ▾</span><span class="box sz"><b>18</b> ▾</span>`,`<button class="cmd txt dis"><b>B</b></button><button class="cmd txt dis"><i>I</i></button><button class="cmd txt dis"><u>U</u></button>`),'Font')}
        ${grp(stack(`${smBtn('','bullets','','dis')}${smBtn('','numbers','','dis')}`,`${smBtn('','alignL','','dis')}${smBtn('','alignC','','dis')}${smBtn('','alignR','','dis')}`),'Paragraph')}
      </div>
      <div class="rib p-rib" data-panel="insert" hidden>
        ${grp(bigBtn('data-cmd="picture"','picture','Pictures'),'Images')}
        ${grp(bigBtn('data-cmd="video"','video','Video'),'Media')}
      </div>
      <div class="rib p-rib" data-panel="design" hidden>
        ${grp(bigBtn('data-cmd="theme"','theme','Themes'),'Themes')}
      </div>
      <div class="rib p-rib" data-panel="trans" hidden>
        ${grp('<div class="gal" id="pTr"></div>','Transition to This Slide')}
        ${grp(`<label class="lab">Duration<select id="pTdur"><option>00.50</option><option selected>01.00</option><option>02.00</option></select></label>`+bigBtn('data-cmd="applyall"','all','Apply To All'),'Timing')}
      </div>
      <div class="rib p-rib" data-panel="anim" hidden>
        ${grp('<div class="gal" id="pAn"></div>','Animation')}
        ${grp(`<label class="lab">Duration<select id="pAdur"><option>01.00</option><option selected>02.00</option><option>03.00</option></select></label>
          ${stack(smBtn('data-cmd="earlier"','up','Move Earlier'),smBtn('data-cmd="later"','down','Move Later'))}`,'Timing')}
      </div>
      <div class="rib p-rib" data-panel="show" hidden>
        ${grp(bigBtn('data-cmd="show0"','play','From Beginning')+bigBtn('data-cmd="showcur"','playcur','From Current Slide'),'Start Slide Show')}
      </div>
      <div class="p-body">
        <div class="p-thumbs"></div>
        <div class="p-main"><div class="p-slide"></div>
          <div class="p-pane" hidden><b>Animation Pane</b><ol></ol></div>
          <div class="p-notes">Click to add notes</div></div>
      </div>
      <div class="sbar p-status"><span>Slide <b id="pNo">1</b> of <b id="pTot">3</b></span><span class="r">Notes &nbsp; 100%</span></div>
      <div class="p-show" hidden></div>
    </div>`;
    this.win=$('.p-win',host); this.thumbs=$('.p-thumbs',host); this.slide=$('.p-slide',host); this.paneEl=$('.p-pane',host);
    $('#pTr',host).innerHTML=TRANS.map(t=>`<button class="cmd g" data-tr="${t}">${ic('trans',24)}<span>${t}</span></button>`).join('');
    $('#pAn',host).innerHTML=ANIMS.map(t=>`<button class="cmd g" data-an="${t}">${ic('star',24)}<span>${t}</span></button>`).join('');
    this.bind();
  }
  did(k){ return this.log.has(k); }
  mark(k){ this.log.add(k); this.onchange(); }
  reset(slides){
    this.log.clear(); this.cur=0; this.sel=null;
    this.slides=slides.map(s=>({objs:[],trans:'None',anims:[],...s,id:++_pid}));
    this.tab('home'); this.draw(); this.onchange();
  }
  snapshot(){ return {slides:this.slides,cur:this.cur,log:[...this.log]}; }
  restore(s){
    this.slides=JSON.parse(JSON.stringify(s.slides)); this.cur=Math.min(s.cur,this.slides.length-1); this.sel=null; this.log=new Set(s.log);
    this.slides.forEach(x=>{ if(x.id>_pid) _pid=x.id; }); this.tab('home'); this.draw(); this.onchange();
  }
  get s(){ return this.slides[this.cur]; }

  bind(){
    const win=this.win;
    win.addEventListener('mousedown',e=>{ if(e.target.closest('.cmd,.tabs button')) e.preventDefault(); });
    win.addEventListener('click',e=>{
      const t=e.target.closest('[data-tab]'); if(t) return this.tab(t.dataset.tab);
      const tr=e.target.closest('[data-tr]'); if(tr){ this.s.trans=tr.dataset.tr; this.mark('trans:'+tr.dataset.tr); return this.draw(); }
      const an=e.target.closest('[data-an]'); if(an) return this.addAnim(an.dataset.an);
      const c=e.target.closest('[data-cmd]'); if(c) this.run(c.dataset.cmd);
      const th=e.target.closest('.p-th'); if(th&&this.dragged){ this.dragged=false; return; }
      if(th){ this.cur=+th.dataset.i; this.sel=null; this.draw(); }
    });
    $('#pAdur',this.host).onchange=e=>{ const a=this.selAnim(); if(!a) return toast('Hãy chọn một đối tượng đã có hiệu ứng nhé!'); a.dur=e.target.value; this.mark('anim-time'); this.draw(); };
    $('#pTdur',this.host).onchange=()=>this.mark('trans-time');
    /* kéo–thả sắp xếp lại slide */
    this.thumbs.addEventListener('pointerdown',e=>this.dragStart(e));
    $('.p-show',this.host).addEventListener('click',e=>{
      if(e.target.closest('[data-x]')) return this.endShow();
      this.showIdx++; this.showIdx>=this.slides.length ? this.endShow() : this.showDraw();
    });
    addEventListener('keydown',e=>{ if(!$('.p-show',this.host).hidden){ if(e.key==='Escape') this.endShow(); else if(e.key==='ArrowRight'||e.key===' '){ this.showIdx++; this.showIdx>=this.slides.length?this.endShow():this.showDraw(); } else if(e.key==='ArrowLeft'&&this.showIdx>0){ this.showIdx--; this.showDraw(); } } });
  }
  /* kéo–thả slide bằng chuột hoặc cảm ứng: nhấn giữ một slide, kéo lên/xuống rồi thả vào vị trí mới */
  dragStart(e){
    const t=e.target.closest('.p-th'); if(!t||e.button>0) return;
    const from=+t.dataset.i, y0=e.clientY; let to=from, on=false; this.dragged=false;
    const slot=y=>{ const r=$$('.p-th',this.thumbs).map(x=>x.getBoundingClientRect()); const i=r.findIndex(b=>y<b.bottom); return i<0?r.length-1:i; };
    const mv=ev=>{
      if(!on&&Math.abs(ev.clientY-y0)<6) return;
      if(!on){ on=true; t.classList.add('lift'); this.thumbs.classList.add('dragging'); }
      to=slot(ev.clientY);
      $$('.p-th',this.thumbs).forEach((x,i)=>x.classList.toggle('into',i===to&&to!==from));
    };
    const up=()=>{
      removeEventListener('pointermove',mv); removeEventListener('pointerup',up); removeEventListener('pointercancel',up);
      if(!on) return;
      this.dragged=true;
      if(to!==from){ const [m]=this.slides.splice(from,1); this.slides.splice(to,0,m); this.cur=to; this.mark('move-slide'); }
      this.draw();
    };
    addEventListener('pointermove',mv); addEventListener('pointerup',up); addEventListener('pointercancel',up);
  }
  tab(n){
    $$('.p-tabs button[data-tab]',this.host).forEach(b=>b.classList.toggle('on',b.dataset.tab===n));
    $$('.p-rib',this.host).forEach(p=>p.hidden=p.dataset.panel!==n);
    this.paneEl.hidden=n!=='anim';
  }

  /* --- vẽ --- */
  draw(){
    this.thumbs.innerHTML=this.slides.map((s,i)=>`<div class="p-th ${i===this.cur?'on':''}" data-i="${i}"><span class="no">${i+1}</span>
      <div class="mini"><b>${esc(s.title)}</b><small>${esc(s.body)}</small>${s.objs.map(o=>o.type==='video'?'🎬':o.emo).join('')}</div>${s.trans!=='None'?'<em title="Transition">★</em>':''}</div>`).join('');
    const s=this.s;
    this.slide.innerHTML=`
      <div class="ob ob-t ${this.sel==='title'?'sel':''}" data-o="title" contenteditable="true">${esc(s.title)}</div>
      <div class="ob ob-b ${this.sel==='body'?'sel':''}" data-o="body" contenteditable="true">${esc(s.body)}</div>
      ${s.objs.map((o,i)=>`<div class="ob ob-x ${this.sel===o.id?'sel':''}" data-o="${o.id}" style="left:${8+i*30}%">${o.type==='video'?'<div class="vid">▶ Video</div>':`<span class="emo">${o.emo}</span>`}</div>`).join('')}
      ${s.anims.length?`<span class="an-badge">✨ ${s.anims.length}</span>`:''}`;
    $$('.ob',this.slide).forEach(el=>{
      el.onmousedown=()=>{ if(this.sel!==el.dataset.o){ this.sel=el.dataset.o; $$('.ob',this.slide).forEach(x=>x.classList.toggle('sel',x===el)); } };
      el.oninput=()=>{ const o=el.dataset.o; if(o==='title'||o==='body'){ this.s[o]=el.innerText; this.thumbsOnly(); this.onchange(); } };
    });
    $$('#pTr .cmd',this.host).forEach(b=>b.classList.toggle('on',b.dataset.tr===s.trans));
    $('#pNo',this.host).textContent=this.cur+1; $('#pTot',this.host).textContent=this.slides.length;
    this.drawPane(); this.onchange();
  }
  /* chỉ cập nhật chữ ở khung nhỏ, không vẽ lại để giữ con trỏ đang gõ */
  thumbsOnly(){
    $$('.p-th',this.thumbs).forEach((t,i)=>{ $('b',t).textContent=this.slides[i].title; $('small',t).textContent=this.slides[i].body; }); }
  label(o){ return o==='title'?'Tiêu đề':o==='body'?'Nội dung':(this.s.objs.find(x=>x.id==o)?.type==='video'?'Video':'Hình ảnh'); }
  selAnim(){ return this.s.anims.find(a=>a.target==this.sel); }
  drawPane(){
    $('ol',this.paneEl).innerHTML=this.s.anims.map((a,i)=>`<li class="${a.target==this.sel?'on':''}"><b>${i+1}</b> ${a.effect} · ${esc(this.label(a.target))} <small>${a.dur}s</small></li>`).join('')||'<li class="empty">Chưa có hiệu ứng. Chọn một đối tượng rồi chọn hiệu ứng.</li>';
  }

  /* --- lệnh --- */
  run(c){
    const s=this.s;
    if(c==='newslide'){ this.slides.splice(this.cur+1,0,{id:++_pid,title:'Tiêu đề mới',body:'Nhập nội dung…',objs:[],trans:'None',anims:[]}); this.cur++; this.mark('newslide'); return this.draw(); }
    if(c==='video'){ s.objs.push({id:'o'+(++_pid),type:'video'}); this.mark('video'); return this.draw(); }
    if(c==='picture'){ s.objs.push({id:'o'+(++_pid),type:'pic',emo:['🎂','🍪','🧁','🍩'][s.objs.length%4]}); this.mark('picture'); return this.draw(); }
    if(c==='theme'){ this.win.classList.toggle('alt'); return this.mark('theme'); }
    if(c==='applyall'){
      if(s.trans==='None') return toast('Hãy chọn một hiệu ứng chuyển slide trước, rồi bấm Apply To All!');
      this.slides.forEach(x=>x.trans=s.trans); this.mark('apply-all'); return this.draw();
    }
    if(c==='earlier'||c==='later'){
      const i=s.anims.findIndex(a=>a.target==this.sel); if(i<0) return toast('Hãy chọn đối tượng đã có hiệu ứng nhé!');
      const j=c==='earlier'?i-1:i+1; if(j<0||j>=s.anims.length) return;
      [s.anims[i],s.anims[j]]=[s.anims[j],s.anims[i]]; this.mark('anim-order'); return this.draw();
    }
    if(c==='show0'||c==='showcur'){ this.showIdx=c==='show0'?0:this.cur; $('.p-show',this.host).hidden=false; this.showDraw(); this.mark('slideshow'); }
  }
  addAnim(effect){
    if(!this.sel) return toast('Hãy nhấp chọn tiêu đề hoặc một đối tượng trên slide trước nhé!');
    const s=this.s, dur=$('#pAdur',this.host).value, ex=this.selAnim();
    if(ex){ ex.effect=effect; ex.dur=dur; } else s.anims.push({target:this.sel,effect,dur});
    this.mark('anim:'+effect); this.draw();
  }
  showDraw(){
    const s=this.slides[this.showIdx], box=$('.p-show',this.host);
    box.innerHTML=`<button class="x" data-x>✕ Thoát (Esc)</button><div class="p-slide big ${s.trans!=='None'?'tr-'+s.trans:''}">
      <div class="ob ob-t">${esc(s.title)}</div><div class="ob ob-b">${esc(s.body)}</div>
      ${s.objs.map((o,i)=>`<div class="ob ob-x" style="left:${8+i*30}%">${o.type==='video'?'<div class="vid">▶ Video</div>':`<span class="emo">${o.emo}</span>`}</div>`).join('')}</div>
      <p class="hn">Nhấp chuột hoặc phím → để sang slide kế (${this.showIdx+1}/${this.slides.length})</p>`;
  }
  endShow(){ $('.p-show',this.host).hidden=true; }
}
