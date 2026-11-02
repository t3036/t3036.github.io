/* ---------- tiện ích chung ---------- */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]} return a };
const esc = s => String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function toast(msg){
  let t=$('#toast'); if(!t){ t=document.createElement('div'); t.id='toast'; t.className='toast'; document.body.appendChild(t); }
  t.textContent=msg; t.classList.add('on'); clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('on'),2200);
}

/* ---------- Mô phỏng Microsoft Word ----------
   Mọi thao tác của học sinh được ghi vào this.log (did/mark) hoặc đọc thẳng từ DOM của tài liệu (this.doc). */
const PICS = {dog:['🐶','Chú chó'], cake:['🎂','Bánh kem'], balloon:['🎈','Bóng bay'], gift:['🎁','Hộp quà'], camera:['📷','Máy ảnh']};
const SIZES = [10,12,14,16,18,24,32,40,48,60,72];

class WordSim{
  constructor(host){
    this.host=host; this.log=new Set(); this.onchange=()=>{}; this.selFig=null;
    host.innerHTML=`
    <div class="win w-win">
      ${winTitle('w','word','Tài liệu1 – Word')}
      <div class="tabs w-tabs">
        <button class="dis file">File</button><button data-tab="home" class="on">Home</button><button data-tab="insert">Insert</button>
        <button class="dis">Draw</button><button class="dis">Design</button><button class="dis">Layout</button>
        <button data-tab="refs">References</button><button class="dis">Review</button><button class="dis">View</button>
        <button data-tab="pic" class="w-pictab" hidden>Picture Format</button>
        <button class="w-share" data-cmd="share">${ic('share',16)}<span>Share</span></button>
      </div>
      <div class="rib w-rib" data-panel="home">
        ${grp(bigBtn('','paste','Paste','dis')+stack(smBtn('','cut','Cut','dis'),smBtn('','copy','Copy','dis'),smBtn('','brush','Format','dis')),'Clipboard')}
        ${grp(stack(
          `<span class="box wide">Calibri (Body) ▾</span><span class="box sz"><b id="wSize">18</b> ▾</span>
           <button class="cmd txt" data-cmd="sizeUp" title="Increase Font Size (Ctrl+Shift+&gt;)">A<small>▲</small></button>
           <button class="cmd txt" data-cmd="sizeDown" title="Decrease Font Size (Ctrl+Shift+&lt;)">A<small>▼</small></button>`,
          `<button class="cmd txt" data-cmd="bold" title="Bold (Ctrl+B)"><b>B</b></button>
           <button class="cmd txt" data-cmd="italic" title="Italic (Ctrl+I)"><i>I</i></button>
           <button class="cmd txt" data-cmd="underline" title="Underline (Ctrl+U)"><u>U</u></button>
           ${smBtn('','strike','','dis')}${smBtn('','sub','','dis')}${smBtn('','sup','','dis')}${smBtn('','highlight','','dis')}
           <span class="split"><button class="cmd" data-cmd="color" title="Font Color">${ic('fontcolor',18)}</button><button class="cmd arrow" data-menu="color">▾</button></span>`),'Font')}
        ${grp(stack(
          `<span class="split"><button class="cmd" data-cmd="bullet" title="Bullets">${ic('bullets')}</button><button class="cmd arrow" data-menu="bullet">▾</button></span>
           <span class="split"><button class="cmd" data-cmd="number" title="Numbering">${ic('numbers')}</button><button class="cmd arrow" data-menu="number">▾</button></span>
           ${smBtn('','indentL','','dis')}${smBtn('','indentR','','dis')}`,
          `<button class="cmd" data-cmd="left" title="Align Left">${ic('alignL')}</button><button class="cmd" data-cmd="center" title="Center">${ic('alignC')}</button>
           <button class="cmd" data-cmd="right" title="Align Right">${ic('alignR')}</button><button class="cmd" data-cmd="justify" title="Justify">${ic('alignJ')}</button>`),'Paragraph')}
        ${grp(`<button class="cmd sty" data-cmd="style:p"><span class="aa">AaBbCc</span><small>Normal</small></button>
           <button class="cmd sty" data-cmd="style:h1"><span class="aa t">AaBbC</span><small>Title</small></button>
           <button class="cmd sty" data-cmd="style:h2"><span class="aa h">AaBbC</span><small>Heading 1</small></button>`,'Styles')}
        ${grp(bigBtn('data-cmd="replace"','replace','Replace'),'Editing')}
      </div>
      <div class="rib w-rib" data-panel="insert" hidden>
        ${grp(bigBtn('data-cmd="table"','table','Table'),'Tables')}
        ${grp(bigBtn('data-menu="picture"','picture','Pictures'),'Illustrations')}
      </div>
      <div class="rib w-rib" data-panel="refs" hidden>
        ${grp(bigBtn('data-cmd="caption"','caption','Insert Caption'),'Captions')}
      </div>
      <div class="rib w-rib" data-panel="pic" hidden>
        ${grp(bigBtn('data-cmd="border"','border','Picture Border'),'Picture Styles')}
        ${grp(bigBtn('data-cmd="rotate"','rotate','Rotate'),'Arrange')}
        ${grp(bigBtn('data-cmd="crop"','crop','Crop'),'Size')}
      </div>
      <div class="w-area"><div class="w-page"><div class="w-margin" title="Vùng chọn (Selection Area)"></div>
        <div class="w-doc" contenteditable="true" spellcheck="false"></div></div></div>
      <div class="sbar w-status"><span>Page 1 of 1</span><span id="wCount">0 từ</span><span class="r">Tiếng Việt &nbsp; 100%</span></div>
      <div class="pop" hidden></div>
      <div class="dlg-bg" hidden><div class="dlg"></div></div>
    </div>`;
    this.win=$('.w-win',host); this.doc=$('.w-doc',host); this.pop=$('.pop',host);
    this.bind();
  }

  /* --- trạng thái & ghi nhận --- */
  did(k){ return this.log.has(k); }
  mark(k){ this.log.add(k); this.touch(); }
  q(sel){ return $$(sel,this.doc); }
  get text(){ return this.doc.innerText; }
  touch(){
    const w=this.text.trim().split(/\s+/).filter(Boolean).length;
    $('#wCount',this.host).textContent=w+' từ'; this.onchange();
  }
  snapshot(){ const c=this.doc.cloneNode(true); $$('.sel',c).forEach(e=>e.classList.remove('sel')); return {h:c.innerHTML,log:[...this.log]}; }
  restore(s){ this.doc.innerHTML=s.h; this.log=new Set(s.log); this.select(null); this.touch(); }
  reset(html){ this.log.clear(); this.doc.innerHTML=html; this.select(null); this.touch(); }

  /* --- sự kiện --- */
  bind(){
    const win=this.win;
    win.addEventListener('mousedown',e=>{ if(e.target.closest('.cmd,.w-share,.tabs button')) e.preventDefault(); });
    win.addEventListener('click',e=>{
      const t=e.target.closest('[data-tab]'); if(t) return this.tab(t.dataset.tab);
      const m=e.target.closest('[data-menu]'); if(m) return this.menu(m.dataset.menu,m);
      const c=e.target.closest('[data-cmd]'); if(c) { this.pop.hidden=true; return this.run(c.dataset.cmd); }
      if(!e.target.closest('.pop')) this.pop.hidden=true;
    });
    this.doc.addEventListener('input',()=>this.touch());
    this.doc.addEventListener('keyup',()=>this.sync());
    this.doc.addEventListener('mouseup',()=>this.sync());
    this.doc.addEventListener('keydown',e=>{
      if(e.ctrlKey&&e.key.toLowerCase()==='b') this.mark('key:bold');
      if(e.ctrlKey&&e.key.toLowerCase()==='u') this.mark('key:underline');
      if(e.ctrlKey&&e.key.toLowerCase()==='i') this.mark('key:italic');
      if(e.ctrlKey&&e.key.toLowerCase()==='h'){ e.preventDefault(); this.run('replace'); }
      if(e.ctrlKey&&e.shiftKey&&(e.key==='>'||e.key==='.')){ e.preventDefault(); this.sizeStep(1); }
      if(e.ctrlKey&&e.shiftKey&&(e.key==='<'||e.key===',')){ e.preventDefault(); this.sizeStep(-1); }
      setTimeout(()=>this.touch());
    });
    this.doc.addEventListener('mousedown',e=>{
      const part=e.target.closest('[data-part]'); if(part) this.mark('click:'+part.dataset.part);
      const fig=e.target.closest('.fig');
      if(fig){ this.select(fig); if(!e.target.closest('.cap')) this.startMove(e,fig); } else this.select(null);
    });
    this.doc.addEventListener('contextmenu',e=>{
      const fig=e.target.closest('.fig'); if(!fig) return;
      e.preventDefault(); this.select(fig);
      const r=this.win.getBoundingClientRect();
      this.pop.innerHTML=`<div class="mn"><button data-cmd="ctx-caption">🏷️ Insert Caption…</button><button data-cmd="delpic">🗑️ Xóa hình</button></div>`;
      this.place(e.clientX-r.left,e.clientY-r.top);
    });
    $('.w-margin',this.host).addEventListener('mousedown',e=>this.margin(e));
    document.addEventListener('selectionchange',()=>{ if(this.host.isConnected) this.sync(); });
  }
  tab(n){
    this.pop.hidden=true;
    $$('.w-tabs button[data-tab]',this.host).forEach(b=>b.classList.toggle('on',b.dataset.tab===n));
    $$('.w-rib',this.host).forEach(p=>p.hidden=p.dataset.panel!==n);
  }
  /* cập nhật hộp "kiểu" và "cỡ chữ" theo vị trí con trỏ */
  sync(){
    const s=getSelection(); if(!s.rangeCount||!this.doc.contains(s.anchorNode)) return;
    const el=s.anchorNode.nodeType===1?s.anchorNode:s.anchorNode.parentElement;
    $('#wSize',this.host).textContent=Math.round(parseFloat(getComputedStyle(el).fontSize));
    const b=el.closest('h1,h2,p,li'), cur={H1:'style:h1',H2:'style:h2'}[b&&b.tagName]||'style:p';
    $$('.sty',this.host).forEach(x=>x.classList.toggle('on',x.dataset.cmd===cur));
  }
  inDoc(){ const s=getSelection(); return s.rangeCount&&this.doc.contains(s.anchorNode); }
  focusDoc(){
    if(this.inDoc()) return;
    this.doc.focus(); const r=document.createRange(); r.selectNodeContents(this.doc); r.collapse(false);
    const s=getSelection(); s.removeAllRanges(); s.addRange(r);
  }

  /* --- vùng chọn bên trái trang: 1 lần = dòng, 2 lần = đoạn, 3 lần = cả tài liệu --- */
  margin(e){
    e.preventDefault(); this.doc.focus();
    const s=getSelection(), r=document.createRange();
    if(e.detail>=3){ r.selectNodeContents(this.doc); this.mark('sel-all'); }
    else{
      const d=this.doc.getBoundingClientRect();
      const el=document.elementFromPoint(d.left+24,e.clientY);
      const blk=el&&el.closest('.w-doc > *, li'); if(!blk) return;
      r.selectNodeContents(blk);
    }
    s.removeAllRanges(); s.addRange(r); this.touch();
  }

  /* --- lệnh --- */
  run(c){
    const ex=(n,v)=>{ this.focusDoc(); document.execCommand(n,false,v); this.touch(); };
    switch(true){
      case c==='undo': return ex('undo');
      case c==='redo': return ex('redo');
      case c==='bold': this.mark('key:bold'); return ex('bold');
      case c==='italic': this.mark('key:italic'); return ex('italic');
      case c==='underline': this.mark('key:underline'); return ex('underline');
      case c==='color': this.mark('color'); return ex('foreColor','#e02020');
      case c==='sizeUp': return this.sizeStep(1);
      case c==='sizeDown': return this.sizeStep(-1);
      case c==='left': return ex('justifyLeft');
      case c==='center': this.mark('align'); return ex('justifyCenter');
      case c==='right': this.mark('align'); return ex('justifyRight');
      case c==='justify': this.mark('align'); return ex('justifyFull');
      case c==='bullet': return this.list('insertUnorderedList');
      case c==='number': return this.list('insertOrderedList');
      case c.startsWith('style:'): this.mark('style'); return ex('formatBlock',c.slice(6));
      case c==='replace': return this.replaceDlg();
      case c==='table': return this.insertTable();
      case c==='share': return this.shareDlg();
      case c==='caption': case c==='ctx-caption':
        if(c==='ctx-caption') this.mark('ctx-caption');
        return this.selFig ? this.captionDlg() : toast('Hãy nhấp chọn một hình ảnh trước nhé!');
      case c==='delpic': if(this.selFig){ this.selFig.remove(); this.select(null); this.touch(); } return;
      case c==='crop': return this.crop();
      case c==='rotate': return this.rotate();
      case c==='border': if(this.selFig){ this.selFig.classList.toggle('bd'); this.mark('border'); } return;
    }
  }
  list(cmd,type){
    this.focusDoc(); document.execCommand(cmd);
    if(type){
      const s=getSelection(), n=s.anchorNode&&(s.anchorNode.nodeType===1?s.anchorNode:s.anchorNode.parentElement);
      const l=n&&n.closest('ul,ol'); if(l) l.style.listStyleType=type;
      this.mark('liststyle:'+type);
    }
    this.touch();
  }
  sizeStep(dir){
    const s=getSelection();
    if(!this.inDoc()||s.isCollapsed) return toast('Hãy bôi đen chữ cần đổi cỡ trước nhé!');
    const el=s.anchorNode.nodeType===1?s.anchorNode:s.anchorNode.parentElement;
    const cur=parseFloat(getComputedStyle(el).fontSize);
    const next=dir>0 ? SIZES.find(x=>x>cur+.5) : [...SIZES].reverse().find(x=>x<cur-.5);
    if(!next) return;
    document.execCommand('fontSize',false,'7');
    $$('font[size="7"]',this.doc).forEach(f=>{ const sp=document.createElement('span'); sp.style.fontSize=next+'px'; sp.innerHTML=f.innerHTML; f.replaceWith(sp); });
    this.mark(dir>0?'size-up':'size-down'); this.sync();
  }

  /* --- menu nhỏ (popup) --- */
  place(x,y){ this.pop.style.left=Math.min(x,this.win.clientWidth-210)+'px'; this.pop.style.top=y+'px'; this.pop.hidden=false; }
  menu(kind,btn){
    const r=btn.getBoundingClientRect(), w=this.win.getBoundingClientRect();
    const html={
      color:['#e02020','#f5a300','#19a45b','#2b6fd6','#7a3fd0'].map(c=>`<button class="sw" data-col="${c}" style="background:${c}"></button>`).join(''),
      bullet:[['disc','•  Chấm tròn'],['circle','○  Vòng tròn'],['square','■  Hình vuông']].map(([t,l])=>`<button data-lst="ul:${t}">${l}</button>`).join(''),
      number:[['decimal','1. 2. 3.'],['lower-alpha','a. b. c.'],['upper-roman','I. II. III.']].map(([t,l])=>`<button data-lst="ol:${t}">${l}</button>`).join(''),
      picture:Object.entries(PICS).map(([k,[e,n]])=>`<button data-pic="${k}"><span style="font-size:22px">${e}</span> ${n}</button>`).join('')
    }[kind];
    this.pop.innerHTML=`<div class="mn ${kind==='color'?'sws':''}">${html}</div>`;
    this.place(r.left-w.left,r.bottom-w.top+2);
    this.pop.onclick=e=>{
      const b=e.target.closest('button'); if(!b) return; this.pop.hidden=true;
      if(b.dataset.col){ this.focusDoc(); document.execCommand('foreColor',false,b.dataset.col); this.mark('color'); }
      if(b.dataset.lst){ const [k,t]=b.dataset.lst.split(':'); this.list(k==='ul'?'insertUnorderedList':'insertOrderedList',t); }
      if(b.dataset.pic) this.insertPic(b.dataset.pic);
    };
  }

  /* --- hình ảnh --- */
  insertPic(kind){
    this.focusDoc();
    const fig=WordSim.fig(kind);
    const s=getSelection(); let r=s.getRangeAt(0); r.collapse(false); r.insertNode(fig);
    r=document.createRange(); r.setStartAfter(fig); r.collapse(true); s.removeAllRanges(); s.addRange(r);
    this.mark('pic:'+kind); this.select(fig);
  }
  /* tạo phần tử hình ảnh (dùng cả khi chèn và khi nạp tài liệu mẫu) */
  static fig(kind,size=110){
    const [emo,name]=PICS[kind];
    const f=document.createElement('span'); f.className='fig'; f.contentEditable='false';
    f.innerHTML=`<span class="pic" data-pic="${kind}" title="${name}" style="width:${size}px;height:${size}px"><i style="font-size:${size*.72}px">${emo}</i>`+
      ['nw','ne','sw','se'].map(h=>`<b class="hd" data-h="${h}"></b>`).join('')+`<b class="rot" title="Rotate Handle">⟳</b></span>`;
    return f;
  }
  static figHTML(kind,size){ return WordSim.fig(kind,size).outerHTML; }
  select(fig){
    this.$$figs().forEach(f=>f.classList.toggle('sel',f===fig));
    this.selFig=fig;
    const tab=$('.w-pictab',this.host); tab.hidden=!fig;
    if(fig){ this.tab('pic'); this.mark('select-pic'); }
    else if(!tab.hidden||$('.w-tabs .on',this.host)?.dataset.tab==='pic') this.tab('home');
  }
  $$figs(){ return $$('.fig',this.doc); }
  fig(){ return this.selFig; }
  rotate(){
    const f=this.selFig; if(!f) return toast('Hãy chọn một hình ảnh trước nhé!');
    const d=((+f.dataset.rot||0)+15)%360; f.dataset.rot=d; $('i',f).style.transform=`rotate(${d}deg)`; this.mark('rotate');
  }
  crop(){
    const f=this.selFig; if(!f) return toast('Hãy chọn một hình ảnh trước nhé!');
    const n=((+f.dataset.crop||0)+1)%4; f.dataset.crop=n;
    $('i',f).style.clipPath=`inset(0 0 ${n*18}% 0)`; if(n) this.mark('crop');
  }
  /* kéo tay cầm để đổi kích thước; kéo thân hình để di chuyển sang đoạn khác */
  startMove(e,fig){
    const pic=fig.firstChild;
    const h=e.target.closest('.hd'), rot=e.target.closest('.rot');
    if(rot){ e.preventDefault(); return this.rotate(); }
    e.preventDefault();
    const x0=e.clientX, y0=e.clientY, w0=pic.offsetWidth, h0=pic.offsetHeight; let moved=false;
    const mv=ev=>{
      const dx=ev.clientX-x0, dy=ev.clientY-y0;
      if(h){
        const k=h.dataset.h, w=Math.max(40,w0+(k.includes('e')?dx:-dx)), ht=Math.max(40,h0+(k.includes('s')?dy:-dy));
        pic.style.width=w+'px'; pic.style.height=ht+'px'; pic.firstChild.style.fontSize=Math.min(w,ht)*.72+'px'; moved=true;
      }else if(Math.hypot(dx,dy)>6){
        moved=true; const r=document.caretRangeFromPoint&&document.caretRangeFromPoint(ev.clientX,ev.clientY);
        if(r&&this.doc.contains(r.startContainer)&&!fig.contains(r.startContainer)) r.insertNode(fig);
      }
    };
    const up=()=>{ removeEventListener('pointermove',mv); removeEventListener('pointerup',up);
      if(moved) this.mark(h?'resize':'move'); };
    addEventListener('pointermove',mv); addEventListener('pointerup',up);
  }

  /* --- bảng --- */
  insertTable(){
    this.focusDoc();
    const t=document.createElement('table'); t.className='w-tbl';
    t.innerHTML=Array(3).fill('<tr><td></td><td></td><td></td></tr>').join('');
    const s=getSelection(), r=s.getRangeAt(0); r.collapse(false); r.insertNode(t);
    this.mark('table'); const c=$('td',t); if(c){ const rr=document.createRange(); rr.selectNodeContents(c); s.removeAllRanges(); s.addRange(rr); }
  }

  /* --- hộp thoại --- */
  dialog(html,wire){
    const bg=$('.dlg-bg',this.host), d=$('.dlg',this.host);
    d.innerHTML=html+`<button class="dx" data-x>✕</button>`; bg.hidden=false;
    bg.onclick=e=>{ if(e.target===bg||e.target.closest('[data-x]')) bg.hidden=true; };
    wire(d,()=>{ bg.hidden=true; });
  }
  replaceDlg(){
    this.dialog(`<h4>Find and Replace</h4><label>Find what <input id="rF"></label><label>Replace with <input id="rR"></label>
      <p class="dm" id="rM"></p><div class="rw"><button class="btn-o" id="rA">Replace All</button></div>`,(d)=>{
      $('#rF',d).focus();
      $('#rA',d).onclick=()=>{
        const f=$('#rF',d).value, r=$('#rR',d).value; if(!f) return $('#rM',d).textContent='Hãy nhập từ cần tìm.';
        let n=0; const tw=document.createTreeWalker(this.doc,NodeFilter.SHOW_TEXT); const nodes=[]; while(tw.nextNode()) nodes.push(tw.currentNode);
        nodes.forEach(t=>{ const parts=t.nodeValue.split(f); if(parts.length>1){ n+=parts.length-1; t.nodeValue=parts.join(r); } });
        $('#rM',d).textContent=n?`Đã thay ${n} chỗ.`:'Không tìm thấy từ này.';
        if(n) this.mark('replace');
      };
    });
  }
  captionDlg(){
    this.dialog(`<h4>Caption</h4><label>Caption <input id="cT" value="Hình 1: "></label><div class="rw"><button class="btn-o" id="cOk">OK</button></div>`,(d,close)=>{
      const i=$('#cT',d); i.focus(); i.setSelectionRange(i.value.length,i.value.length);
      $('#cOk',d).onclick=()=>{
        const f=this.selFig; if(!f) return close();
        let c=$('.cap',f); if(!c){ c=document.createElement('span'); c.className='cap'; c.contentEditable='true'; f.appendChild(c); }
        c.textContent=i.value; close(); this.mark('caption');
      };
    });
  }
  shareDlg(){
    this.dialog(`<h4>Chia sẻ tài liệu</h4><label>Gửi đến <input value="ban.cua.em@lop.vn"></label>
      <div class="rd"><label><input type="radio" name="sp" value="comment"> Tạo nhận xét (Make Comments)</label>
      <label><input type="radio" name="sp" value="edit"> Chỉnh sửa tài liệu (Edit Document)</label>
      <label><input type="radio" name="sp" value="view"> Xem tài liệu (View Document)</label></div>
      <div class="rw"><button class="btn-o" id="sS">Gửi</button></div>`,(d,close)=>{
      $('#sS',d).onclick=()=>{ const p=$('input[name=sp]:checked',d); if(!p) return toast('Hãy chọn một quyền nhé!'); close(); this.mark('share:'+p.value); toast('Đã chia sẻ ✔'); };
    });
  }
}
