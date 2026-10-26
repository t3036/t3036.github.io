/* ---------- tiện ích ---------- */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]} return a };

const STEPS = [
  {id:'trang',  e:'📄', n:'Trang',     c:'#2fa8ff'},
  {id:'tieude', e:'🏷️', n:'Tiêu đề',   c:'#19c08a'},
  {id:'demuc',  e:'📑', n:'Đề mục',    c:'#8b6cf6'},
  {id:'doan',   e:'💬', n:'Đoạn văn',  c:'#ff5d6c'},
  {id:'canle',  e:'↔️', n:'Căn lề',    c:'#ff9f1c'},
  {id:'ds',     e:'📝', n:'Danh sách', c:'#f25ca8'},
  {id:'ai',     e:'🤖', n:'Dùng AI',   c:'#00b8d9'},
  {id:'vd',     e:'🏆', n:'Vận dụng',  c:'#e6a800'}
];
const KEY='k4b15';
const state={cur:0,done:[],read:[],chk:[],note:'',all:false};
try{ Object.assign(state, JSON.parse(localStorage.getItem(KEY)||'{}')); state.all=false; }catch(e){}
state.p=state.p||{}; state.cur=+state.cur||0;
state.done=state.done.filter(id=>STEPS.some(x=>x.id===id));
state.read=(state.read||[]).filter(id=>STEPS.some(x=>x.id===id));
/* lưu mọi bước: trạm đang học, thẻ đã đọc, câu đang làm, cửa sổ mô phỏng, Vận dụng… để tải lại vẫn học tiếp */
let QP={}, SPS={};   // tiến độ (câu hỏi / cửa sổ) của trạm hiện tại
const save=()=>{ try{localStorage.setItem(KEY,JSON.stringify({done:state.done,read:state.read,chk:state.chk,note:state.note,cur:state.cur,p:state.p,qdone:state.qdone,vtab:state.vtab}))}catch(e){} };

/* ---------- khung ---------- */
const open = i => i===0 || state.all || state.done.includes(STEPS[i-1].id);
if(!open(state.cur)||state.cur>=STEPS.length) state.cur=0;
function drawRail(){
  $('#rail').innerHTML = STEPS.map((s,i)=>`<button class="st ${i===state.cur?'on':''} ${state.done.includes(s.id)?'ok':''} ${open(i)?'':'lk'}" style="--c:${s.c}" data-i="${i}"><span class="no">${open(i)?s.e:'🔒'}</span><span class="nm">${s.n}</span></button>`).join('');
  $$('.st').forEach(b=>b.onclick=()=>{ const i=+b.dataset.i; if(!open(i)){ b.classList.add('shake'); setTimeout(()=>b.classList.remove('shake'),400); return; } go(i); });
  $('#sc').textContent=state.done.length;
}
function go(i){ state.cur=i; save(); drawRail(); const s=STEPS[i]; const st=$('#stage');
  st.style.setProperty('--c',s.c); st.style.animation='none'; st.offsetHeight; st.style.animation='';
  st.innerHTML=''; VIEW[s.id](st,s); scrollTo({top:0,behavior:'smooth'}); }
function head(s,title,sub,hint){ return `<div class="head"><div class="big">${s.e}</div><h2>${title} ${sub?`<small>${sub}</small>`:''}</h2><div class="hint">${hint}</div></div>`; }
function navBar(root,s){
  const i=STEPS.findIndex(x=>x.id===s.id), ok=state.done.includes(s.id)||state.all;
  const d=document.createElement('div'); d.className='nav';
  d.innerHTML=`<button class="btn ghost" ${i===0?'style="visibility:hidden"':''} id="pv">◀ Trước</button><button class="btn ${ok?'pulse':''}" id="nx" ${ok?'':'disabled'} ${i===STEPS.length-1?'hidden':''}>Tiếp ▶</button>`;
  root.append(d);
  $('#pv',d).onclick=()=>go(i-1); $('#nx',d).onclick=()=>go(i+1);
}
function finish(id){
  const nx=$('#nx'); if(nx){ nx.disabled=false; nx.classList.add('pulse'); }
  if(state.done.includes(id)) return;
  state.done.push(id); save(); drawRail(); confetti();
}
function confetti(){
  const box=$('#confetti');
  for(let i=0;i<26;i++){ const s=document.createElement('span'); s.textContent=['⭐','✨','🎈','🎉','💛'][i%5];
    s.style.left=Math.random()*100+'%'; s.style.animationDelay=Math.random()*.5+'s'; box.append(s); setTimeout(()=>s.remove(),2600); }
}

/* ---------- câu hỏi chọn nhanh (dùng lại) ---------- */
function quiz(box,items,opts,onDone){
  const P=QP; let i=P.fin?items.length:Math.min(P.i||0,items.length);
  const draw=()=>{
    if(i>=items.length){ box.innerHTML='<div class="qdone">🎉 Giỏi quá!</div>'; P.fin=true; P.i=i; save(); onDone&&onDone(); return; }
    P.i=i; save();
    const it=items[i], op=it.o||opts;
    box.innerHTML=`<div class="qdots">${items.map((_,k)=>`<i class="${k<i?'ok':k===i?'on':''}"></i>`).join('')}</div>
      <div class="qitem">${it.q}</div>
      <div class="qopts">${op.map((o,k)=>`<button class="qbtn" data-k="${k}" style="--c:${o.c}">${o.t}</button>`).join('')}</div>
      <div class="qfb"></div>`;
    $$('.qbtn',box).forEach(b=>b.onclick=()=>{
      const k=+b.dataset.k, fb=$('.qfb',box);
      if(k===it.a){ $$('.qbtn',box).forEach(x=>x.disabled=true); b.classList.add('ok');
        fb.innerHTML=`<span>✅ ${it.why||'Đúng rồi!'}</span><button class="btn" style="padding:0 16px;font-size:1rem">${i===items.length-1?'Xong ✔':'Tiếp ▶'}</button>`;
        $('button',fb).onclick=()=>{i++;draw()};
      }else{ P.w=(P.w||0)+1; save(); b.classList.add('bad','shake'); setTimeout(()=>b.classList.remove('shake'),400); fb.innerHTML='<span>🤔 Thử lại nhé!</span>'; }
    });
  };
  draw();
}

/* ---------- đọc từng thẻ nhỏ: mỗi thẻ 1 ý + 1 câu kiểm tra (đáp án đầu tiên là đúng, được xáo trộn) ---------- */
function reader(box,segs,already,onAll,P){
  let i=Math.min(P.i||0,segs.length-1); const ok=(!already&&P.ok&&P.ok.length===segs.length)?P.ok.slice():segs.map(()=>already);
  const draw=()=>{
    P.i=i; P.ok=ok; save();
    const g=segs[i], last=i===segs.length-1;
    const opts=shuffle(g.c.o.map((t,k)=>({t,k})));
    box.innerHTML=`<div class="rdots">${segs.map((_,k)=>`<button class="rd-dot ${k===i?'on':''} ${ok[k]?'ok':''}" data-k="${k}">${ok[k]?'✔':k+1}</button>`).join('')}</div>
      <div class="seg"><div class="sv">${g.v}</div><h3 class="sh">${g.h}</h3><p class="sp">${g.p}</p></div>
      <div class="cq ${ok[i]?'solved':''}"><div class="cqq">${ok[i]?'✔ Em đã hiểu thẻ này':'🧐 '+g.c.q}</div>
        ${ok[i]?'':`<div class="cqo">${opts.map(o=>`<button class="cob" data-k="${o.k}">${o.t}</button>`).join('')}</div>`}<div class="cfb"></div></div>
      <div class="rnav"><button class="btn ghost" id="sp" ${i?'':'style="visibility:hidden"'}>◀</button>
        <button class="btn ${ok[i]&&!(last&&already)?'pulse':''}" id="sn" ${ok[i]&&!(last&&already)?'':'disabled'}>${last?(already?'✔ Đã đọc xong':'✔ Em đã đọc xong'):'Tiếp ▶'}</button></div>`;
    $$('.rd-dot',box).forEach(b=>b.onclick=()=>{ const k=+b.dataset.k; if(ok[k]||k<i){ i=k; draw(); } });
    $$('.cob',box).forEach(b=>b.onclick=()=>{
      if(+b.dataset.k===0){ ok[i]=true; draw(); }
      else{ b.classList.add('bad','shake'); setTimeout(()=>b.classList.remove('shake'),400); $('.cfb',box).textContent='👆 Đọc lại thẻ phía trên nhé!'; }
    });
    $('#sp',box).onclick=()=>{ i--; draw(); };
    $('#sn',box).onclick=()=>{ if(!last){ i++; draw(); } else if(!already){ already=true; ok.fill(true); onAll(); draw(); } };
  };
  draw();
}

/* ---------- cửa sổ mô phỏng Word: chọn dòng → bấm công cụ → đạt mục tiêu ---------- */
function miniDoc(box,cfg,done){
  const L=cfg.lines.map(l=>({fs:12,font:'Arial',bold:false,al:'left',style:'normal',list:null,...l}));
  const S=SPS; if(S.L) S.L.forEach((f,k)=>L[k]&&Object.assign(L[k],f));
  const sel=new Set(); let fin=!!S.fin;
  const draw=()=>{
    S.L=L.map(l=>({fs:l.fs,font:l.font,bold:l.bold,al:l.al,style:l.style,list:l.list})); save();
    let n=0, prevNum=false;
    const rows=L.map((l,i)=>{
      let pre='';
      if(l.list==='b'){ pre='<span class="lm">●</span>'; prevNum=false; }
      else if(l.list==='n'){ n=prevNum?n+1:1; prevNum=true; pre=`<span class="lm">${n}.</span>`; } else prevNum=false;
      const st=`text-align:${l.al};font-family:'${l.font}',sans-serif;font-size:${l.fs/12}em;${l.bold?'font-weight:800;':''}`;
      return `<div class="dl s-${l.style} ${l.fixed?'fx':''} ${sel.has(i)?'sel':''}" data-i="${i}" style="${st}">${pre}<span>${l.t}</span></div>`;
    }).join('');
    const gs=cfg.goals.map(g=>({t:g.t,ok:g.ok(L)}));
    box.innerHTML=`<div class="task">🎯 ${cfg.task}</div>
      <div class="win mw" style="--c:#2b5db8" tabindex="0"><div class="bar"><b>W</b> ${cfg.name||'Tài liệu – Word'}<span style="margin-left:auto">— ▢ ✕</span></div>
        <div class="mtools">${cfg.tools.map((t,k)=>`<button class="tb" data-k="${k}" title="${t.key||''}">${t.label}</button>`).join('')}</div>
        <div class="mpage">${rows}</div></div>
      <div class="goals">${gs.map(g=>`<div class="gl ${g.ok?'on':''}"><i>${g.ok?'✔':''}</i>${g.t}</div>`).join('')}</div>`;
    const win=$('.mw',box);
    const apply=t=>{ if(!sel.size){ win.classList.add('shake'); setTimeout(()=>win.classList.remove('shake'),400); $('.task',box).innerHTML='☝️ Chọn dòng trước khi dùng công cụ nhé!'; return; } sel.forEach(i=>t.fn(L[i])); draw(); };
    $$('.dl',box).forEach(d=>d.onclick=()=>{ const i=+d.dataset.i; if(L[i].fixed) return; sel.has(i)?sel.delete(i):sel.add(i); draw(); });
    $$('.tb',box).forEach(b=>b.onclick=()=>apply(cfg.tools[+b.dataset.k]));
    win.onkeydown=e=>{ if(!e.ctrlKey) return; const t=cfg.tools.find(t=>t.key&&t.key.toLowerCase()==='ctrl+'+e.key.toLowerCase()); if(t){ e.preventDefault(); apply(t); } };
    if(gs.every(g=>g.ok)){ box.insertAdjacentHTML('beforeend','<div class="qdone">🎉 Em làm được rồi!</div>'); if(!fin){ fin=true; S.fin=true; save(); done(); } }
  };
  draw();
}

/* ---------- mô phỏng: chatbot AI ---------- */
function simAI(box,done){
  const IDEAS=['Mở mang kiến thức','Giúp em tập trung','Mở rộng vốn từ','Thư giãn đầu óc','Viết văn hay hơn'];
  const S=SPS; let sent=!!S.sent; const keep=new Set(S.keep||[]); let txt=S.txt||'', fin=!!S.fin;
  const sv=()=>{ S.sent=sent; S.keep=[...keep]; S.txt=txt; save(); };
  const draw=()=>{
    sv();
    const k=keep.size, g1=sent, g2=k>=2&&k<=3, g3=txt.trim().length>=10;
    box.innerHTML=`<div class="task">🎯 Gửi lệnh cho AI, chọn 2–3 ý em thích, rồi viết lại bằng lời của em</div>
    <div class="win mw" style="--c:#00a3c4"><div class="bar">🤖 Chatbot AI</div>
      <div class="chat"><div class="cb me">Viết danh sách 5 lợi ích của việc đọc sách, ngắn gọn dễ hiểu</div>
      ${sent?`<div class="cb ai"><b>🤖 Gợi ý của AI:</b>${IDEAS.map((t,i)=>`<button class="idea ${keep.has(i)?'on':''}" data-i="${i}">${keep.has(i)?'✔':'○'} ${t}</button>`).join('')}</div>
      <div class="cb me2"><label>✍️ Viết lại bằng lời của em:</label><textarea id="mytxt" placeholder="Đọc sách giúp em…">${txt.replace(/</g,'&lt;')}</textarea></div>`:`<button class="btn" id="snd" style="align-self:flex-end;padding:2px 18px">Gửi ▶</button>`}</div></div>
    <div class="goals"><div class="gl ${g1?'on':''}"><i>${g1?'✔':''}</i>Gửi lệnh cho AI</div><div class="gl ${g2?'on':''}"><i>${g2?'✔':''}</i>Chọn 2–3 ý phù hợp, bỏ ý không cần</div><div class="gl ${g3?'on':''}"><i>${g3?'✔':''}</i>Viết lại bằng lời của em</div></div>`;
    const s=$('#snd',box); if(s) s.onclick=()=>{ sent=true; draw(); };
    $$('.idea',box).forEach(b=>b.onclick=()=>{ const i=+b.dataset.i; keep.has(i)?keep.delete(i):keep.add(i); draw(); });
    const t=$('#mytxt',box); if(t){ t.oninput=e=>{ txt=e.target.value; sv(); const on=txt.trim().length>=10; $$('.gl',box)[2].classList.toggle('on',on); $$('.gl i',box)[2].textContent=on?'✔':''; chk(); }; }
    chk();
  };
  const chk=()=>{ if(sent && keep.size>=2 && keep.size<=3 && txt.trim().length>=10){ if(!$('.qdone',box)) box.insertAdjacentHTML('beforeend','<div class="qdone">🎉 Em làm được rồi!</div>'); if(!fin){ fin=true; S.fin=true; save(); done(); } } };
  draw();
}

/* ---------- một trạm = Đọc từng thẻ (trái) → "Em đã đọc xong" → Làm (phải) ---------- */
/* TẠM ẨN phần "Thực hành trên cửa sổ" (code các cửa sổ mô phỏng vẫn còn nguyên, chỉ không hiển thị). Bật lại: SHOW_SIM=true */
const SHOW_SIM=false;

function station(root,s,o){
  const sim=SHOW_SIM?o.sim:null;   // đặt SHOW_SIM=true để hiện lại phần "Thực hành trên cửa sổ"
  const id=s.id, P=state.p[id]||(state.p[id]={}); P.q=P.q||{}; P.s=P.s||{};
  root.innerHTML=head(s,o.title,o.sub,'Đọc từng thẻ nhé!')+`<div class="split">
    <section class="pane rd"><div class="ptag">📖 Đọc</div><div id="rdr"></div></section>
    <section class="pane wk locked" id="wk"><div class="ptag">🎯 Làm</div>
      <div class="lockv"><div class="padl">🔒</div><div class="skel"><i></i><i></i><i></i></div><b>Đọc hết các thẻ sẽ mở khoá!</b></div>
      <div class="wkin" id="wkin"></div></section></div>`;
  const wk=$('#wk',root); let qOK=!!P.q.fin, sOK=!sim||!!P.s.fin;
  const check=()=>{ if(qOK&&sOK) finish(id); };
  const unlock=anim=>{
    wk.classList.remove('locked'); if(anim) wk.classList.add('opening');
    $('#wkin',wk).innerHTML=`
      <section class="wcard c1" id="wc1"><div class="wh"><b class="wn">1</b><div><div class="wt">Trả lời câu hỏi</div><small>Chọn đáp án đúng</small></div><button class="wrs" data-r="q" title="Làm lại phần này" aria-label="Làm lại">↻</button><span class="wok">✔</span></div><div id="wq"></div></section>
      ${sim?`<section class="wcard c2" id="wc2"><div class="wh"><b class="wn">2</b><div><div class="wt">Thực hành trên cửa sổ</div><small>Làm theo yêu cầu, tự kiểm tra mục tiêu</small></div><button class="wrs" data-r="s" title="Làm lại phần này" aria-label="Làm lại">↻</button><span class="wok">✔</span></div><div id="ws"></div></section>`:''}`;
    const runQ=()=>{ QP=P.q; $('#wc1',wk).classList.toggle('fin',!!P.q.fin); o.ex($('#wq',wk),()=>{ qOK=true; $('#wc1',wk).classList.add('fin'); check(); }); };
    const runS=()=>{ SPS=P.s; $('#wc2',wk).classList.toggle('fin',!!P.s.fin); sim($('#ws',wk),()=>{ sOK=true; $('#wc2',wk).classList.add('fin'); check(); }); };
    runQ(); if(sim) runS();
    /* nút ↻: làm lại riêng phần này (xoá tiến độ đã lưu của phần đó) */
    $('[data-r="q"]',wk).onclick=()=>{ P.q={}; qOK=false; save(); $('#wc1',wk).classList.remove('fin'); $('#wq',wk).innerHTML=''; runQ(); };
    const rs=$('[data-r="s"]',wk); if(rs) rs.onclick=()=>{ P.s={}; sOK=false; save(); $('#wc2',wk).classList.remove('fin'); $('#ws',wk).innerHTML=''; runS(); };
    if(anim) setTimeout(()=>wk.scrollIntoView({behavior:'smooth',block:'start'}),150);
  };
  const was=state.read.includes(id);
  reader($('#rdr',root),o.segs,was,()=>{ state.read.push(id); save(); unlock(true); },P.r||(P.r={}));
  if(was) unlock(false);
  navBar(root,s);
}

/* ---------- các màn ---------- */
const VIEW={};
const O2=[{t:'📽️ Slide',c:'#2fa8ff'},{t:'📄 Page',c:'#19c08a'}];
const filmV=`<div class="win" style="--c:#2fa8ff"><div class="bar"><s></s><s></s><s></s> Bài trình chiếu</div><div class="body"><div class="film"><span>🏞️</span><span class="cur">🌍</span><span>🌳</span><span>📊</span><span>…</span></div></div></div>`;
const pageV=`<div class="two"><div class="win" style="--c:#19c08a"><div class="bar"><s></s><s></s><s></s> khoahocvui.vn</div><div class="body"><div class="ln m"></div><div class="ln"></div><div class="ln s"></div></div></div><div class="a4"><b>BÁO CÁO</b><div class="ln"></div><div class="ln m"></div><div class="ln s"></div></div></div>`;

VIEW.trang=(root,s)=>station(root,s,{title:'Trang chiếu & Trang',
  segs:[
    {v:filmV,h:'Trang chiếu (Slide)',p:'Một trang trong bài trình chiếu. Mỗi slide có chữ, hình, biểu đồ…',c:{q:'Trong bài trình chiếu có nhiều…',o:['Trang chiếu (Slide)','Trang web']}},
    {v:pageV,h:'Trang (Page)',p:'Một màn hình nội dung trên trình duyệt, hoặc một mặt giấy khi in.',c:{q:'Một mặt giấy A4 trong Word là…',o:['Page (trang)','Slide (trang chiếu)']}},
    {v:`<div class="vs"><div class="vsb" style="--c:#2fa8ff">📽️<b>Bài trình chiếu</b><small>nhiều slide</small></div><div class="vsx">VS</div><div class="vsb" style="--c:#19c08a">🌐📃<b>Website, tài liệu</b><small>nhiều page</small></div></div>`,h:'Hai bên khác nhau',p:'Slide thuộc về bài trình chiếu. Page thuộc về website hoặc tài liệu in.',c:{q:'Trang khoahocvui.vn thuộc về…',o:['Website (nhiều page)','Bài trình chiếu (nhiều slide)']}}
  ],
  ex:(box,done)=>quiz(box,[
    {q:'🎞️ Một trang trong Google Slides',a:0,why:'Slide thuộc về bài trình chiếu'},
    {q:'🌐 Trang khoahocvui.vn',a:1,why:'Page thuộc về website'},
    {q:'📃 Một mặt giấy A4 trong Word',a:1,why:'Page là một mặt giấy'},
    {q:'🖥️ Một màn hình trong PowerPoint',a:0,why:'Slide chứa chữ, hình, biểu đồ'}
  ],O2,done),
});

const titleMocks=play=>{
  const c=ok=>play?'hot':(ok?'hot found':'');
  const a=ok=>ok?'data-ok="1"':'';
  return `<div class="duo2 ${play?'':'cols2'}">
    <figure class="fig">
      <div class="rw word">
        <div class="wr-title"><b class="app-ico">W</b><span class="autosave">AutoSave <i class="tg"><s></s>Off</i></span><span class="qa">▣ ↶ ↷</span><span class="docn">Document1 - Word</span><span class="srch">⌕ Search</span></div>
        <div class="wr-tabs"><span>File</span><span class="on">Home</span><span>Insert</span><span>Design</span><span>Layout</span><span>References</span><span>Mailings</span><span>Review</span><span>View</span></div>
        <div class="wr-rib">
          <div class="grp g1"><div class="gbody"><div class="paste"><span class="pi">📋</span><b>Paste</b></div><div class="mini"><span>✂</span><span>⧉</span><span>🖌</span></div></div><div class="gn">Clipboard</div></div>
          <div class="grp g2"><div class="gbody col"><div class="r"><span class="fn">Aptos (Body) ▾</span><span class="fs">12 ▾</span><span class="ic">A˄ A˅ Aa</span></div><div class="r"><b>B</b><i>I</i><u>U</u><s>ab</s><span class="ic">x₂ x²</span><span class="ic tx">A</span><span class="ic hl">✎</span><span class="ic fc">A</span></div></div><div class="gn">Font</div></div>
          <div class="grp g3"><div class="gbody col"><div class="r"><span class="ic">☰ ☷</span><span class="ic">⇤ ⇥</span><span class="ic">A↓ ¶</span></div><div class="r"><span class="ic al on">≡</span><span class="ic al">☰</span><span class="ic al">≣</span><span class="ic al">▤</span><span class="ic">↕</span><span class="ic">◧</span></div></div><div class="gn">Paragraph</div></div>
        </div>
        <div class="rw-desk"><div class="rw-sheet">
          <div class="${c(1)} wtitle" ${a(1)}>BẢO VỆ MÔI TRƯỜNG</div>
          <div class="${c(0)} wbody"><div class="ln"></div><div class="ln m"></div><div class="ln"></div><div class="ln s"></div></div>
        </div></div>
        <div class="rw-status">Page 1 of 1 &nbsp;·&nbsp; 24 words</div>
      </div>
      <figcaption>📘 Tài liệu: tiêu đề ở <b>đầu trang</b></figcaption>
    </figure>
    <figure class="fig">
      <div class="rw br">
        <div class="br-tabs"><span class="dots"><s></s><s></s><s></s></span>
          <span class="${c(1)} btab" ${a(1)}>🍃 Năng lượng mặt trời <em>✕</em></span><span class="btab off">＋</span></div>
        <div class="br-addr"><span class="nv">←</span><span class="nv">→</span><span class="nv">⟳</span><span class="url">🔒 www.khoahocvui.vn</span><span class="nv">☆</span><span class="nv">⋮</span></div>
        <div class="br-site"><div class="site-nav"><b>KHOA HỌC VUI</b><span>☰</span></div>
          <div class="site-body"><div class="${c(0)} h1s">Năng lượng mặt trời</div><span class="sun">☀️</span>
            <div class="ln" style="grid-column:1/-1"></div><div class="ln m" style="grid-column:1/-1"></div></div></div>
      </div>
      <figcaption>🌐 Trang web: tiêu đề trên <b>tab trình duyệt</b></figcaption>
    </figure>
  </div>`;
};
VIEW.tieude=(root,s)=>station(root,s,{title:'Tiêu đề',sub:'(Title)',
  segs:[
    {v:'<div class="bigword">🏷️ Tiêu đề</div>',h:'Tiêu đề (Title)',p:'Tên ngắn gọn nói lên nội dung chính của tài liệu, trang web hoặc bài trình chiếu.',c:{q:'Tiêu đề cho em biết…',o:['Chủ đề của tài liệu','Tài liệu có mấy trang']}},
    {v:titleMocks(false),h:'Tiêu đề nằm ở đâu?',p:'Tài liệu: đầu trang. Trang web: trên tab của trình duyệt.',c:{q:'Tiêu đề trang web hiện ở…',o:['Tab trình duyệt','Thanh công cụ Word']}},
    {v:'<div class="quote">“Các khái niệm cơ bản trong sáng tạo nội dung”</div>',h:'Ví dụ: tiêu đề của bài này',p:'Tiêu đề thường đặt ở đầu trang, to và nổi bật hơn phần còn lại.',c:{q:'Tiêu đề thường…',o:['To, nổi bật, ở đầu trang','Nhỏ, ở cuối trang']}}
  ],
  ex:(box,done)=>{
    const Q=QP;
    box.innerHTML=`<div class="lbl2">👆 Chạm vào Tiêu đề (có 2 chỗ)</div>`+titleMocks(true);
    let n=0;
    if(Q.fin){ $$('.hot[data-ok]',box).forEach(h=>h.classList.add('found')); box.insertAdjacentHTML('beforeend','<div class="qdone">🎉 Giỏi quá!</div>'); done(); return; }
    $$('.hot',box).forEach(h=>h.onclick=()=>{
      if(!h.dataset.ok){ h.classList.add('shake'); setTimeout(()=>h.classList.remove('shake'),400); return; }
      if(h.classList.contains('found')) return;
      h.classList.add('found'); if(++n===2){ Q.fin=true; save(); box.insertAdjacentHTML('beforeend','<div class="qdone">🎉 Giỏi quá!</div>'); done(); }
    });
  },
  sim:(box,done)=>miniDoc(box,{task:'Chọn dòng tiêu đề ▶ bấm A+ và B để tiêu đề to, nổi bật',
    lines:[{t:'BẢO VỆ MÔI TRƯỜNG'},{t:'Trái Đất là ngôi nhà chung của chúng ta.'},{t:'Hãy cùng nhau giữ môi trường xanh – sạch – đẹp.'}],
    tools:[{label:'A+ Cỡ chữ',fn:l=>l.fs=Math.min(28,l.fs+4)},{label:'<b>B</b> In đậm',fn:l=>l.bold=!l.bold}],
    goals:[{t:'Tiêu đề có cỡ chữ lớn',ok:L=>L[0].fs>=20},{t:'Tiêu đề được in đậm',ok:L=>L[0].bold}]},done)});

const docV=`<div class="doc">
  <div class="dt"><span>BẢO VỆ MÔI TRƯỜNG</span><span class="tag t0">Tiêu đề</span></div>
  <div class="hrow l1"><b>1. Vì sao cần bảo vệ môi trường?</b><span class="tag t1">Heading 1</span></div><div class="ln"></div>
  <div class="hrow l2"><b>1.1. Giữ không khí trong lành</b><span class="tag t2">Heading 2</span></div><div class="ln s"></div>
  <div class="hrow l2"><b>1.2. Giữ nguồn nước sạch</b><span class="tag t2">Heading 2</span></div>
</div>`;
VIEW.demuc=(root,s)=>station(root,s,{title:'Đề mục',sub:'(Heading)',
  segs:[
    {v:'<div class="bigword">📑 Đề mục</div>',h:'Đề mục (Heading)',p:'Từ, cụm từ hoặc câu ngắn giới thiệu phần tiếp theo. Thường in đậm, chữ lớn hơn.',c:{q:'Đề mục giúp em…',o:['Xác định các phần khác nhau trong tài liệu','Đổi tên tệp tài liệu']}},
    {v:docV,h:'Có nhiều cấp',p:'Heading 1 cho đề mục lớn, Heading 2 cho đề mục nhỏ. Trong Word: Home ▶ Styles.',c:{q:'Đề mục nhỏ hơn (cấp 2) là…',o:['Heading 2','Heading 1']}},
    {v:`<div class="vs"><div class="vsb" style="--c:#19c08a">🏷️<b>Tiêu đề</b><small>cả tài liệu · chỉ có một</small></div><div class="vsx">VS</div><div class="vsb" style="--c:#8b6cf6">📑<b>Đề mục</b><small>từng phần · có nhiều</small></div></div>`,h:'Tiêu đề khác Đề mục',p:'Tiêu đề là tên cả tài liệu. Đề mục là tên từng phần.',c:{q:'Một tài liệu có thể có nhiều…',o:['Đề mục','Tiêu đề']}}
  ],
  ex:(box,done)=>quiz(box,[
    {q:'Tên của từng phần, có thể có nhiều',a:1,why:'Đề mục: có thể có nhiều'},
    {q:'Tên của toàn bộ tài liệu, chỉ có một',a:0,why:'Tiêu đề: chỉ có một'}
  ],[{t:'🏷️ Tiêu đề',c:'#19c08a'},{t:'📑 Đề mục',c:'#8b6cf6'}],done),
  sim:(box,done)=>miniDoc(box,{task:'Chọn dòng ▶ bấm kiểu đề mục phù hợp (Heading 1 hoặc Heading 2)',name:'Bảo vệ môi trường – Word',
    lines:[{t:'BẢO VỆ MÔI TRƯỜNG',fixed:true,bold:true,al:'center',fs:16},{t:'Vì sao cần bảo vệ môi trường?'},{t:'Môi trường sạch giúp con người khỏe mạnh.'},{t:'Giữ nguồn nước sạch'},{t:'Nước sạch rất quan trọng cho sinh hoạt.'}],
    tools:[{label:'Normal',fn:l=>l.style='normal'},{label:'Heading 1',fn:l=>l.style='h1'},{label:'Heading 2',fn:l=>l.style='h2'}],
    goals:[{t:'“Vì sao cần bảo vệ môi trường?” là Heading 1',ok:L=>L[1].style==='h1'},{t:'“Giữ nguồn nước sạch” là Heading 2',ok:L=>L[3].style==='h2'},{t:'Hai đoạn văn vẫn là Normal',ok:L=>L[2].style==='normal'&&L[4].style==='normal'}]},done)});

const PA={A:'Cây xanh rất quan trọng đối với cuộc sống.',B:' Cây xanh cung cấp không khí trong lành, tạo bóng mát và làm đẹp môi trường. Nhờ có cây xanh, con người và các loài sinh vật được sống trong môi trường trong lành hơn.',
  C:'Chúng ta cần bảo vệ cây xanh.',D:' Hãy trồng cây, chăm sóc cây và không chặt phá cây. Mỗi việc làm nhỏ hôm nay sẽ giúp môi trường xanh – sạch – đẹp cho mai sau.'};
VIEW.doan=(root,s)=>station(root,s,{title:'Đoạn văn',sub:'(Paragraph)',
  segs:[
    {v:'<div class="bigword">💬 Đoạn văn</div>',h:'Đoạn văn (Paragraph)',p:'Một nhóm câu cùng nói về một ý hoặc một chủ đề duy nhất.',c:{q:'Các câu trong một đoạn văn nói về…',o:['Một ý duy nhất','Nhiều chủ đề khác nhau']}},
    {v:'<div class="para"><p>Đoạn 1 … <span class="caret"></span></p><div class="newp">Đoạn mới</div><p>Đoạn 2 …</p></div><div class="enter" style="justify-content:center;margin-top:8px"><kbd>Enter ↵</kbd></div>',h:'Xuống đoạn mới',p:'Mỗi đoạn bắt đầu trên một dòng mới. Trong Word, Google Docs: nhấn Enter.',c:{q:'Muốn xuống đoạn mới, em nhấn…',o:['Enter','Esc']}},
    {v:`<div class="para good"><p><span class="mk1">${PA.A}</span> <span class="mk2">Cây xanh cung cấp không khí trong lành…</span></p></div><div class="legend"><span style="background:#ffe27a">💡 ý chính</span><span style="background:#c9f0b0">📝 giải thích</span></div>`,h:'Đoạn văn tốt',p:'Câu mở đầu nêu ý chính. Các câu sau giải thích hoặc cho ví dụ.',c:{q:'Câu mở đầu của đoạn văn tốt nêu…',o:['Ý chính','Lời chào']}}
  ],
  ex:(box,done)=>{
    const Q=QP, split=()=>`<p>${PA.A}${PA.B}</p><div class="newp">Đoạn mới</div><p>${PA.C}${PA.D}</p>`;
    box.innerHTML=`<div class="lbl2">⌨️ Nhấn Enter ngay chỗ nhấp nháy</div>
      <div class="para" id="pa"><p>${PA.A}${PA.B} <span class="caret"></span>${PA.C}${PA.D}</p></div>
      <div class="enter" style="margin-top:12px;justify-content:center"><kbd id="en" style="cursor:pointer">Enter ↵</kbd></div>`;
    const fin=()=>{ $('#pa',box).innerHTML=split(); box.insertAdjacentHTML('beforeend','<div class="qdone">🎉 Giỏi quá! Có 2 đoạn văn</div>'); done(); };
    if(Q.fin){ fin(); return; }
    $('#en',box).onclick=()=>{ if(!$('.caret',$('#pa',box))) return; Q.fin=true; save(); fin(); };
  },
  sim:(box,done)=>miniDoc(box,{task:'Nhóm Paragraph/Font: đổi font chữ và cỡ chữ riêng cho đoạn thứ hai',
    lines:[{t:'Cây xanh rất quan trọng đối với cuộc sống. Cây xanh cung cấp không khí trong lành và tạo bóng mát.'},{t:'Chúng ta cần bảo vệ cây xanh. Hãy trồng cây, chăm sóc cây và không chặt phá cây.'}],
    tools:[{label:'Arial',fn:l=>l.font='Arial'},{label:'Georgia',fn:l=>l.font='Georgia'},{label:'Comic Sans MS',fn:l=>l.font='Comic Sans MS'},{label:'Cỡ 12',fn:l=>l.fs=12},{label:'Cỡ 16',fn:l=>l.fs=16},{label:'Cỡ 20',fn:l=>l.fs=20}],
    goals:[{t:'Đoạn 2 đổi font chữ',ok:L=>L[1].font!=='Arial'},{t:'Đoạn 2 đổi cỡ chữ',ok:L=>L[1].fs!==12},{t:'Đoạn 1 giữ nguyên',ok:L=>L[0].font==='Arial'&&L[0].fs===12}]},done)});

VIEW.canle=(root,s)=>{
  const T=[
    {k:'l',n:'Căn trái',c:'#2fa8ff',key:'Ctrl+L',al:'left',u:'Thường dùng cho đoạn văn',t:'Hành tinh Trái Đất của chúng ta rất đặc biệt.<br>Nó có không khí, nước và sự sống.'},
    {k:'c',n:'Căn giữa',c:'#19c08a',key:'Ctrl+E',al:'center',u:'Thường dùng cho tiêu đề',t:'Trái Đất tươi đẹp<br>Là ngôi nhà chung<br>Của muôn loài.'},
    {k:'r',n:'Căn phải',c:'#ff9f1c',key:'Ctrl+R',al:'right',u:'Ít dùng hơn',t:'Hãy tiết kiệm điện.<br>Hãy tiết kiệm nước.<br>Hành động nhỏ,<br>Ý nghĩa lớn!'},
    {k:'j',n:'Căn đều hai bên',c:'#8b6cf6',key:'Ctrl+J',al:'justify',u:'Dùng trong sách, báo',t:'Bảo vệ môi trường là trách nhiệm của mỗi chúng ta. Hãy bắt đầu từ những việc nhỏ hàng ngày như không xả rác bừa bãi.'}
  ];
  const card=i=>{ const t=T[i]; return `<div class="alc" style="--c:${t.c}"><div class="alh"><span class="ali ${t.k}"><i></i><i></i><i></i><i></i></span><b>${t.n}</b><kbd>${t.key}</kbd></div><div class="sample" style="text-align:${t.al}"><div>${t.t}</div></div><div class="alu">➡️ ${t.u}</div></div>`; };
  const AL=[{t:'Căn trái',c:'#2fa8ff'},{t:'Căn giữa',c:'#19c08a'},{t:'Căn phải',c:'#ff9f1c'},{t:'Căn đều 2 bên',c:'#8b6cf6'}];
  station(root,s,{title:'Căn lề',sub:'(Alignment)',
  segs:[
    {v:`<div class="two2">${card(0)}${card(1)}</div>`,h:'Căn trái · Căn giữa',p:'Căn trái: thẳng hàng bên trái. Căn giữa: chữ ở giữa trang.',c:{q:'Tiêu đề thường được…',o:['Căn giữa','Căn phải']}},
    {v:`<div class="two2">${card(2)}${card(3)}</div>`,h:'Căn phải · Căn đều hai bên',p:'Căn phải: thẳng hàng bên phải. Căn đều: thẳng đều cả hai lề.',c:{q:'Sách, báo thường được…',o:['Căn đều hai bên','Căn giữa']}},
    {v:'<div class="keys"><kbd>Ctrl+L</kbd><kbd>Ctrl+E</kbd><kbd>Ctrl+R</kbd><kbd>Ctrl+J</kbd></div><div class="reminder"><span style="font-size:1.6rem">🔔</span><b>Chọn đoạn văn trước!</b></div>',h:'Phím tắt & ghi nhớ',p:'L = trái, E = giữa, R = phải, J = đều. Nhớ chọn đoạn văn trước khi căn lề.',c:{q:'Trước khi căn lề, em phải…',o:['Chọn đoạn văn','Tắt máy tính']}}
  ],
  ex:(box,done)=>quiz(box,[
    {q:'🏷️ Tiêu đề thường được…',a:1,why:'Căn giữa (Ctrl+E)'},
    {q:'📰 Văn bản trong sách, báo thường được…',a:3,why:'Căn đều hai bên (Ctrl+J)'},
    {q:'⌨️ Ctrl+L là…',a:0,why:'Căn trái'}
  ],AL,done),
  sim:(box,done)=>miniDoc(box,{task:'Chọn dòng ▶ bấm nút căn lề (hoặc phím tắt Ctrl+…)',
    lines:[{t:'BẢO VỆ MÔI TRƯỜNG',bold:true,fs:16},{t:'Bảo vệ môi trường là trách nhiệm của mỗi chúng ta. Hãy bắt đầu từ những việc nhỏ hàng ngày như không xả rác bừa bãi, trồng cây xanh và tiết kiệm tài nguyên.'}],
    tools:[{label:'⬅ Trái',key:'Ctrl+L',fn:l=>l.al='left'},{label:'↔ Giữa',key:'Ctrl+E',fn:l=>l.al='center'},{label:'➡ Phải',key:'Ctrl+R',fn:l=>l.al='right'},{label:'☰ Đều 2 bên',key:'Ctrl+J',fn:l=>l.al='justify'}],
    goals:[{t:'Tiêu đề được căn giữa',ok:L=>L[0].al==='center'},{t:'Đoạn văn được căn đều hai bên',ok:L=>L[1].al==='justify'}]},done)});
};

VIEW.ds=(root,s)=>station(root,s,{title:'Danh sách',sub:'(List)',
  segs:[
    {v:'<div class="bigword">📝 Danh sách</div>',h:'Danh sách (List)',p:'Chuỗi các mục có ký hiệu hoặc số ở đầu mỗi dòng. Giúp ý ngắn gọn, dễ đọc, dễ nhớ.',c:{q:'Mỗi mục trong danh sách có…',o:['Ký hiệu hoặc số ở đầu','Một bức tranh']}},
    {v:'<div class="note" style="--c:#2fa8ff"><ul><li>Bút chì</li><li>Thước kẻ</li><li>Tẩy</li></ul></div>',h:'Danh sách có ký hiệu',p:'Mỗi mục có dấu chấm tròn ●. Dùng khi thứ tự không quan trọng.',c:{q:'Đồ dùng học tập: bút, thước, tẩy → dùng danh sách…',o:['Có ký hiệu','Có số']}},
    {v:'<div class="note" style="--c:#19c08a"><ol><li>Rửa tay</li><li>Mở sách</li><li>Làm bài</li></ol></div>',h:'Danh sách có số',p:'Mỗi mục có số 1, 2, 3… Dùng khi cần làm theo thứ tự.',c:{q:'Các bước làm theo thứ tự → dùng danh sách…',o:['Có số','Có ký hiệu']}}
  ],
  ex:(box,done)=>quiz(box,[
    {q:'🎒 Đồ trong cặp: vở, hộp bút, thước',a:0,why:'Thứ tự không quan trọng'},
    {q:'🪥 Các bước đánh răng',a:1,why:'Cần làm theo thứ tự'},
    {q:'🍎 Trái cây em thích: cam, xoài, nho',a:0,why:'Thứ tự không quan trọng'},
    {q:'🌱 Các bước trồng cây',a:1,why:'Cần làm theo thứ tự'}
  ],[{t:'● Ký hiệu',c:'#2fa8ff'},{t:'1 2 3 Số',c:'#19c08a'}],done),
  sim:(box,done)=>miniDoc(box,{task:'Chọn các dòng (chạm nhiều dòng) ▶ bấm ● hoặc 1. cho đúng',name:'Danh sách – Word',
    lines:[{t:'Đồ dùng học tập:',fixed:true,bold:true},{t:'Bút chì'},{t:'Thước kẻ'},{t:'Tẩy'},{t:'Các bước chuẩn bị học:',fixed:true,bold:true},{t:'Rửa tay'},{t:'Mở sách'},{t:'Làm bài'}],
    tools:[{label:'● Ký hiệu',fn:l=>l.list='b'},{label:'1. Số',fn:l=>l.list='n'},{label:'✖ Bỏ',fn:l=>l.list=null}],
    goals:[{t:'Đồ dùng học tập: danh sách có ký hiệu',ok:L=>[1,2,3].every(i=>L[i].list==='b')},{t:'Các bước chuẩn bị học: danh sách có số',ok:L=>[5,6,7].every(i=>L[i].list==='n')}]},done)});

VIEW.ai=(root,s)=>{
  const O1=[{t:'📋 Chép nguyên văn',c:'#00b8d9'},{t:'✍️ Chọn ý hay, viết lại bằng lời em',c:'#8b6cf6'}];
  const O2b=[{t:'🗑️ Bỏ ý đó đi',c:'#00b8d9'},{t:'📌 Giữ lại cho đủ bài',c:'#8b6cf6'}];
  station(root,s,{title:'Dùng AI tạo nội dung có cấu trúc',
  segs:[
    {v:`<div class="tiles"><div class="tile"><i style="background:#2fa8ff">📄</i>Dàn ý</div><div class="tile"><i style="background:#19c08a">T</i>Tiêu đề, đề mục</div><div class="tile"><i style="background:#ff9f1c">☰</i>Danh sách ý</div><div class="tile"><i style="background:#8b6cf6">▦</i>Cách sắp xếp</div></div>`,h:'AI giúp em gợi ý',p:'Dàn ý, tiêu đề, đề mục, danh sách ý tưởng và cách sắp xếp nội dung hợp lí.',c:{q:'AI có thể giúp em…',o:['Gợi ý dàn ý, tiêu đề, danh sách','Làm bài thay em']}},
    {v:`<div class="prompts1"><div class="bubble b1">Hãy tạo dàn ý gồm tiêu đề và 3 đề mục về chủ đề rừng mưa nhiệt đới cho học sinh lớp 4”</div><div class="bubble b2">Viết danh sách 5 lợi ích của việc đọc sách, ngắn gọn dễ hiểu”</div></div>`,h:'Gõ lệnh rõ ràng',p:'Nói rõ em cần gì (dàn ý, danh sách), chủ đề gì và cho ai đọc.',c:{q:'Em gõ “Viết danh sách 5 lợi ích của việc đọc sách”. AI sẽ…',o:['Tạo một danh sách','Vẽ một bức tranh']}},
    {v:`<div class="rules"><div class="rule"><i>🔍</i>Chọn ý phù hợp</div><div class="rule"><i>✍️</i>Viết lại bằng lời em</div><div class="rule"><i>⚠️</i>Không sai sự thật, không xúc phạm</div></div>`,h:'Quy tắc dùng AI',p:'Đọc kỹ, bỏ ý không cần, viết lại bằng lời của em. Không tạo nội dung sai sự thật, xúc phạm hoặc không liên quan bài học.',c:{q:'Sau khi AI gợi ý, em nên…',o:['Chọn ý hay và viết lại bằng lời của em','Chép nguyên văn']}}
  ],
  ex:(box,done)=>quiz(box,[
    {q:'AI gợi ý xong, em sẽ…',o:O1,a:1,why:'Viết lại bằng lời của em'},
    {q:'AI viết một ý không liên quan bài học, em sẽ…',o:O2b,a:0,why:'Chọn ý phù hợp, bỏ ý không cần'}
  ],null,done),
  sim:simAI});
};

const MATCH=[
  {ins:'Em ghép nối từng thuật ngữ về tạo nội dung với định nghĩa tương ứng.',
   terms:['Đoạn văn (Paragraph)','Tiêu đề (Title)','Căn lề (Alignment)'],
   defs:[['Tính năng cho phép người dùng căn đều từng dòng văn bản.',2],['Tóm tắt (các) ý chính trong nội dung của em.',1],['Một chuỗi các câu nói về một luận điểm hoặc chủ đề cụ thể.',0]]},
  {ins:'Em hãy ghép nối từng thuật ngữ với định nghĩa tương ứng.',
   terms:['Căn lề (Alignment)','Trang chiếu (Slide)','Trang (Page)','Tiêu đề (Title)'],
   defs:[['Một đoạn mô tả ngắn về trang Web xuất hiện ở phía trên đầu của cửa sổ trình duyệt.',3],['Một trang đơn lẻ của một bài trình chiếu.',1],['Cách sắp xếp hoặc đặt vị trí văn bản.',0],['Một tài liệu có thể hiện bằng trình duyệt.',2]]},
  {ins:'Em hãy ghép nối từng thuật ngữ với định nghĩa tương ứng.',
   terms:['Căn lề (Alignment)','Đề mục (Heading)','Danh sách (List)','Đoạn văn bản (Paragraph)'],
   defs:[['Một chuỗi các câu đều liên quan đến một chủ đề duy nhất.',3],['Một từ, cụm từ hoặc câu tóm tắt nội dung sẽ trình bày ở phần.',1],['Kiểm soát cách hiển thị và hướng của một mục, ví dụ như đoạn văn hoặc hình ảnh.',0],['Một chuỗi các mục có kí hiệu hoặc số ở đầu. ',2]]}
];
const TASK1=['Gõ tiêu đề cho tài liệu: "Động vật em yêu thích"','Tạo 2 đề mục: "Tên và đặc điểm" và "Nơi sống"','Viết 1–2 câu dưới mỗi đề mục ','Tạo danh sách 3 điều thú vị về con vật đó','Thử căn tiêu đề vào giữa trang'];
const TASK2=['Mở chatbot AI và nhập:','Đọc kết quả AI gợi ý','Chọn những phần phù hợp và viết lại bằng lời của em vào Word hoặc Google Docs'];
const PROMPT='Tạo dàn ý về chủ đề “Động vật em yêu thích” gồm tiêu đề, 2 đề mục và các ý chính, phù hợp với học sinh lớp 4.';

/* ghép nối: bấm thuật ngữ rồi bấm định nghĩa (M.defs = [văn bản, chỉ số thuật ngữ đúng]) */
function matchGame(mb,M,onWin){
  const order=shuffle(M.defs.map((d,i)=>i)); let sel=null; const got=new Set();
  mb.innerHTML=`<div class="minst">${M.ins}</div><div class="match"><div class="mcol" id="tc">${M.terms.map((t,i)=>`<button class="mi term" data-i="${i}">${t}</button>`).join('')}</div><div class="mcol" id="dc">${order.map(di=>`<button class="mi" data-d="${di}">${M.defs[di][0]}</button>`).join('')}</div></div>`;
  $$('.term',mb).forEach(b=>b.onclick=()=>{ if(b.classList.contains('done')) return; $$('.term',mb).forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); sel=+b.dataset.i; });
  $$('#dc .mi',mb).forEach(b=>b.onclick=()=>{
    if(b.classList.contains('done')) return;
    if(sel===null){ b.classList.add('shake'); setTimeout(()=>b.classList.remove('shake'),400); return; }
    if(M.defs[+b.dataset.d][1]===sel){ const t=$(`.term[data-i="${sel}"]`,mb); const k='k'+(sel%4); [t,b].forEach(x=>{x.classList.remove('sel');x.classList.add('done',k)}); sel=null; got.add(b.dataset.d);
      if(got.size===M.defs.length) onWin();
    }else{ b.classList.add('shake'); setTimeout(()=>b.classList.remove('shake'),400); }
  });
}

/* ---------- trang chúc mừng khi hoàn thành cả bài ---------- */
const finishedAll=()=>STEPS.slice(0,-1).every(x=>state.done.includes(x.id)) && (state.qdone||[]).length>0 && state.qdone.every(Boolean);
function showCongrats(){
  const st=$('#stage'); st.style.setProperty('--c','#e6a800');
  st.innerHTML=`<div class="cong">
    <div class="cg-top">${$('.mascot').outerHTML}<div class="cg-cup">🏆</div></div>
    <h2 class="cg-h">Chúc mừng em đã hoàn thành bài học!</h2>
    <p class="cg-sub">Các khái niệm cơ bản trong sáng tạo nội dung</p>
    <div class="cg-stars">${STEPS.map(x=>`<div class="cg-st" style="--c:${x.c}"><span>${x.e}</span><b>${x.n}</b><i>⭐</i></div>`).join('')}</div>
    <p class="cg-msg">Em đã biết Trang, Tiêu đề, Đề mục, Đoạn văn, Căn lề, Danh sách và cách dùng AI để tạo nội dung có cấu trúc. Giỏi lắm! 🎉</p>
    <div class="cg-btn"><button class="btn ghost" id="cgb">◀ Xem lại bài</button><button class="btn" id="cgr">🔄 Học lại từ đầu</button></div>
  </div>`;
  $('#cgb').onclick=()=>go(STEPS.length-1);
  $('#cgr').onclick=()=>{ if(confirm('Học lại từ đầu? Tiến độ hiện tại sẽ được xoá.')) resetAll(); };
  confetti(); setTimeout(confetti,700); setTimeout(confetti,1500); scrollTo({top:0,behavior:'smooth'});
}

/* TẠM ẨN tab "Thực hành" của Vận dụng (code còn nguyên). Bật lại: SHOW_PRACTICE=true */
const SHOW_PRACTICE=false;

VIEW.vd=(root,s)=>{
  const QS=[...MATCH,...BS], N=QS.length;
  if(!state.qdone||state.qdone.length!==N) state.qdone=QS.map(()=>false);
  const qd=state.qdone;
  root.innerHTML=head(s,'Vận dụng','','Cố lên nào!')+`<div class="mtabs" id="mt"></div><div id="mb"></div><div class="rnav qn" id="qn"></div>
  <div class="sec" id="tk"></div>`;
  let cur=Math.min(+state.vtab||0,SHOW_PRACTICE?N:N-1);
  const tasksDone=()=>!SHOW_PRACTICE||TASK1.every((_,i)=>state.chk.includes('a'+i))&&TASK2.every((_,i)=>state.chk.includes('b'+i));
  const allDone=()=>qd.every(Boolean)&&tasksDone();   // nút làm lại chỉ hiện khi đã làm xong TẤT CẢ bài trong Vận dụng
  const drawTabs=()=>{ $('#mt').innerHTML=QS.map((_,i)=>`<button class="mt ${i===cur?'on':''} ${qd[i]?'ok':''}" data-i="${i}">Câu ${i+1}${qd[i]?' ✔':''}</button>`).join('')+(SHOW_PRACTICE?`<button class="mt ${cur===N?'on':''}" data-i="${N}">✏️ Thực hành</button>`:'')+`${allDone()?'<button class="mt rs" id="vrs" title="Làm lại toàn bộ phần Vận dụng">↻ Làm lại tất cả</button>':''}`;
    $$('.mt[data-i]',root).forEach(b=>b.onclick=()=>{cur=+b.dataset.i;draw()});
    const rb=$('#vrs',root); if(rb) rb.onclick=()=>{ qd.fill(false); state.chk=state.chk.filter(k=>!/^[ab]\d/.test(k)); state.note=''; cur=0; save(); draw(); }; };
  /* nút Câu trước / Câu tiếp ▶ (Câu tiếp sáng lên khi câu hiện tại đã xong) */
  const drawQNav=()=>{ const qn=$('#qn',root); if(cur>=N){ qn.innerHTML=''; return; }
    const last=cur===N-1, ok=qd[cur];
    qn.innerHTML=`<button class="btn ghost" id="qp" ${cur?'':'style="visibility:hidden"'}>◀ Câu trước</button>${last?(finishedAll()?'<button class="btn pulse" id="qx">🏆 Hoàn thành</button>':''):`<button class="btn ${ok?'pulse':''}" id="qx" ${ok?'':'disabled'}>Câu tiếp ▶</button>`}`;
    const p=$('#qp',qn); if(p) p.onclick=()=>{ cur--; draw(); }; const x=$('#qx',qn); if(x) x.onclick=()=>{ if(last) showCongrats(); else { cur++; draw(); } }; };
  const draw=()=>{ state.vtab=cur; save(); drawTabs(); drawQNav(); cur<N?drawQ():drawTasks(); };
  const check=()=>{ if(qd.every(Boolean)&&tasksDone()) finish('vd'); };
  const win=()=>{ const was=state.done.includes('vd'); qd[cur]=true; save(); drawTabs(); drawQNav(); check(); confetti();
    if(!was && finishedAll()) setTimeout(showCongrats,1300); };
  function drawQ(){
    $('#tk').innerHTML=''; const B=QS[cur], bb=$('#mb');
    if(!B.t){ matchGame(bb,B,win); return; }
    if(B.t==='match'){ matchGame(bb,B,win); return; }
    bb.innerHTML='<div class="quiz" id="bq"></div>';
    const qq=$('#bq');
    qq.innerHTML=`<div class="qitem">${B.q}</div>${B.img?`<img class="qimg" src="${B.img}" alt="">`:''}
      <div class="qopts col">${B.o.map((t,k)=>`<button class="qbtn" data-k="${k}" style="--c:${BCOL[k]}">${t}</button>`).join('')}</div><div class="qfb"></div>`;
    $$('.qbtn',qq).forEach(b=>b.onclick=()=>{
      const fb=$('.qfb',qq);
      if(+b.dataset.k===B.a){ $$('.qbtn',qq).forEach(x=>x.disabled=true); b.classList.add('ok'); fb.innerHTML=`<span>✅ ${B.why}</span>`; if(!qd[cur]) win(); }
      else{ b.classList.add('bad','shake'); setTimeout(()=>b.classList.remove('shake'),400); fb.innerHTML='<span>🤔 Thử lại nhé!</span>'; }
    });
  }
  function drawTasks(){
    $('#mb').innerHTML=''; const tk=$('#tk');
    const row=(g,list,off=0)=>list.map((t,i)=>`<button class="chk" data-k="${g+(i+off)}"><i></i><span>${t}</span></button>`).join('');
    tk.innerHTML=`<div class="tasks">
      <div class="card task" style="--c:#2fa8ff"><h3><span>Câu 1</span></h3><div style="font-size:.95rem;margin-bottom:4px">Tạo một tài liệu đơn giản trong Word hoặc Google Docs:</div>${row('a',TASK1)}</div>
      <div class="card task" style="--c:#8b6cf6"><h3><span>Câu 2</span></h3><div style="font-size:.95rem;margin-bottom:4px">Dùng AI tạo nội dung có cấu trúc:</div>
        <button class="chk" data-k="b0"><i></i><span>${TASK2[0]}</span></button>
        <div class="promptbox">${PROMPT}</div><button class="chip copy" id="cp">📋 Sao chép</button>
        ${row('b',TASK2.slice(1),1)}
      </div></div>
    <div class="card" style="margin-top:16px;--c:#ff9f1c"><b><span class="star">*</span> So sánh tài liệu của em ở Câu 1 với kết quả AI ở Câu 2: Em đã thay đổi hoặc bổ sung những gì?</b>
      <textarea id="nt" placeholder="✍️ …">${(state.note||'').replace(/</g,'&lt;')}</textarea></div>
    <div class="qfb" id="pg" style="justify-content:center;font-family:'Nunito';font-size:1.1rem"></div>`;
    $$('.chk',tk).forEach(b=>{ const on=state.chk.includes(b.dataset.k); b.classList.toggle('on',on); $('i',b).textContent=on?'✔':''; b.onclick=()=>{ const k=b.dataset.k; const i=state.chk.indexOf(k); i<0?state.chk.push(k):state.chk.splice(i,1); save(); drawTasks(); drawTabs(); check(); }; });
    $('#cp').onclick=()=>{ const t=$('#cp'); (navigator.clipboard?navigator.clipboard.writeText(PROMPT):Promise.reject()).then(()=>t.textContent='✅ Đã chép',()=>{ const r=document.createRange(); r.selectNodeContents($('.promptbox')); const sl=getSelection(); sl.removeAllRanges(); sl.addRange(r); t.textContent='Đã chọn – nhấn Ctrl+C'; }); };
    $('#nt').oninput=e=>{ state.note=e.target.value; save(); };
    const total=TASK1.length+TASK2.length, n=state.chk.length;
    $('#pg').textContent=`${n>=total?'🎉':'📌'} ${n}/${total}`;
  }
  draw();
  navBar(root,s);
};

/* ---------- câu hỏi bổ sung (gộp vào Vận dụng) ---------- */
const BS=[
  {t:'match',ins:'Em hãy ghép mỗi thuật ngữ ở cột bên trái với một định nghĩa phù hợp ở cột bên phải.',
   terms:['Trang','Tiêu đề','Đề mục','Danh sách'],
   defs:[['Là phần thể hiện nội dung trên một mặt của trang giấy khi được in ấn',0],['Mô tả ngắn gọn nội dung của tài liệu',1],['Giúp xác định các thành phần khác nhau trong tài liệu',2],['Là một bảng liệt kê các mục',3]]},
  {t:'match',ins:'Em hãy ghép mỗi thuật ngữ ở cột bên trái với tên tiếng Anh phù hợp ở cột bên phải.',
   terms:['Trang','Tiêu đề','Đề mục','Đoạn văn'],
   defs:[['Page',0],['Title',1],['Heading',2],['Paragraph',3]]},
  {t:'mc',q:'Em hãy cho biết, phát biểu nào sau đây là SAI?',a:3,
   o:['Danh sách (List) là một bảng liệt kê các mục.','Đề mục (Heading) giúp em có thể xác định những phần khác nhau trong tài liệu.','Trong bài trình chiếu sẽ bao gồm nhiều trang chiếu, tiếng Anh gọi là Slide.','Tiêu đề (Title) là một phần ngắn của văn bản, thường gồm nhiều câu có liên quan với nhau hoàn chỉnh về ngữ nghĩa.'],
   why:'Đó là định nghĩa của Đoạn văn (Paragraph), không phải Tiêu đề!'},
  {t:'mc',q:'Em hãy cho biết, trong hình ảnh văn bản được canh lề gì?',img:'img/q4.png',a:0,o:['Lề trái','Lề phải','Căn đều 2 lề','Chưa canh lề'],why:'Các dòng thẳng hàng bên trái.'},
  {t:'mc',q:'Em hãy cho biết, nội dung trong hình ảnh sau gồm bao nhiêu đoạn văn (Paragraph)?',img:'img/q5.png',a:2,o:['1','2','3','4'],why:'Mỗi đoạn bắt đầu trên một dòng mới.'}
];
const BCOL=['#2fa8ff','#19c08a','#ff9f1c','#8b6cf6'];

/* ---------- cỡ chữ + làm lại ---------- */
let fsz=18; try{ fsz=+localStorage.getItem('k4fontsize')||18 }catch(e){}
const setSize=px=>{ fsz=Math.max(16,Math.min(28,px)); document.documentElement.style.fontSize=fsz+'px'; try{localStorage.setItem('k4fontsize',fsz)}catch(e){} };
setSize(fsz);
$('#fsm').onclick=()=>setSize(fsz-2); $('#fbg').onclick=()=>setSize(fsz+2);
function resetAll(){ state.done=[];state.read=[];state.chk=[];state.note='';state.qdone=null;state.p={};state.vtab=0; state.cur=0; save(); go(0); }
$('#reset').onclick=()=>{ if(confirm('Làm lại từ đầu?')) resetAll(); };

go(state.cur);

/* giáo viên: nhấp đúp vào bút chì để mở khoá tất cả các trạm (xem trước bài) */
$('.mascot').ondblclick=()=>{ state.all=!state.all; drawRail(); go(state.cur); };

/* ---------- gọn chữ: dính 2 từ cuối bằng khoảng trắng không ngắt để không bị 1 từ lẻ loi xuống dòng ---------- */
const TIDY='.sp,.sh,.qitem,.cqq,.task,.gl,.alu,.fact>span,.wt,.wh small,.qfb span,.minst,.cob,.qbtn,.rule,.tile,.bubble,.lbl2,.ex>span:last-child,.vsb small';
function tidy(root){ $$(TIDY,root).forEach(e=>{ if(e.dataset.t||e.children.length) return; e.dataset.t=1;
  const t=e.textContent.trim(); if(t.length<14) return; const i=t.lastIndexOf(' '); if(i>0) e.textContent=t.slice(0,i)+' '+t.slice(i+1); }); }
let tq=0; new MutationObserver(()=>{ cancelAnimationFrame(tq); tq=requestAnimationFrame(()=>tidy($('#stage'))); }).observe($('#stage'),{childList:true,subtree:true});

/* ---------- tự động toàn màn hình (trình duyệt chỉ cho phép sau lần chạm/bấm đầu tiên) ---------- */
const FS=document.documentElement;
const inFS=()=>!!document.fullscreenElement;
const enterFS=()=>{ if(!inFS()&&FS.requestFullscreen) FS.requestFullscreen({navigationUI:'hide'}).catch(()=>{}); };
enterFS();
let fsDone=false;
const firstGesture=()=>{ if(fsDone) return; fsDone=true; enterFS(); ['pointerdown','keydown'].forEach(ev=>removeEventListener(ev,firstGesture,true)); };
['pointerdown','keydown'].forEach(ev=>addEventListener(ev,firstGesture,true));
$('#fs').onclick=()=>{ fsDone=true; inFS()?document.exitFullscreen():enterFS(); };
document.addEventListener('fullscreenchange',()=>{ $('#fs').textContent=inFS()?'🗗':'⛶'; });
