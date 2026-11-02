const KEY='k4vp1521';
let cur=0, phase='learn', card=0, sims={}, done=[], prog={}, hintOn=false, mounted=false, timer=null;
try{ prog=JSON.parse(localStorage.getItem(KEY)||'{}'); }catch(e){}
const save=()=>{ try{ localStorage.setItem(KEY,JSON.stringify(prog)); }catch(e){} };
const OPEN=/[?&]mo=1/.test(location.search);   // ?mo=1 : giáo viên mở khóa tất cả các bài
const topbar=$('#top'), view=$('#view'), host=$('#sim');
const APPS={w:['Word','W','#2b579a'],x:['Excel','X','#1e7145'],p:['PowerPoint','P','#c43e1c']};
const EMO=['👀','💡','🔑','🌟','✏️','📌'];
const ORDER=['learn','practice','quiz','result'];
const P=i=>prog[STATIONS[i].id]||(prog[STATIONS[i].id]={});
const stat=()=>P(cur);
const isDone=i=>{ const p=P(i); return !!(p.prac&&p.quiz); };
const unlocked=i=>OPEN||i===0||isDone(i-1);
const allowed=(i,ph)=>{ const p=P(i); return OPEN||ph==='learn'||(ph==='practice'&&p.learn)||(ph==='quiz'&&p.prac)||(ph==='result'&&p.quiz); };

/* ---------- vào trạm ---------- */
function go(i,ph='learn'){
  i=Math.max(0,Math.min(i,STATIONS.length-1));
  while(i>0&&!unlocked(i)) i--;
  while(ph!=='learn'&&!allowed(i,ph)) ph=ORDER[ORDER.indexOf(ph)-1];
  flush();
  cur=i; card=0; hintOn=false;
  const st=STATIONS[i], sd=P(i).sd??(P(i).prac?st.steps.length:0); done=st.steps.map((_,j)=>j<sd);   // sd = số bước đã xong (đã lưu)
  document.documentElement.style.setProperty('--c',st.c);
  mountSim(st); setPhase(ph);
}
function setPhase(p){
  phase=p; prog._last={i:cur,ph:p}; save();
  $('.main').classList.toggle('prac',p==='practice'); drawTop(); drawView(); host.hidden=p!=='practice'; if(p==='practice') refresh();
}
const lockMsg=()=>toast('🔒 Hãy hoàn thành phần trước nhé!');

/* ---------- mô phỏng: dựng lại từ phần đã lưu ---------- */
function mountSim(st){
  mounted=false; host.innerHTML=''; sims={};
  const snap=P(cur).sim, seed=st.seed();
  const mk=(Cls,box,saved,sd)=>{ const s=new Cls(box); s.onchange=()=>{ refresh(); if(mounted) queueSave(); }; saved?s.restore(saved):s.reset(sd); return s; };
  if(st.app==='word') sims.s=mk(WordSim,host,snap,seed);
  else if(st.app==='excel') sims.s=mk(ExcelSim,host,snap,seed);
  else if(st.app==='ppt') sims.s=mk(PptSim,host,snap,seed);
  else{
    host.innerHTML=`<div class="simtabs">${Object.entries(APPS).map(([k,[n,l,c]])=>`<button data-k="${k}" style="--c:${c}"><b>${l}</b> ${n}</button>`).join('')}</div>
      <div class="sb" data-k="w"></div><div class="sb" data-k="x"></div><div class="sb" data-k="p"></div>`;
    const box=k=>$(`.sb[data-k="${k}"]`,host), sv=snap||{};
    sims={w:mk(WordSim,box('w'),sv.w,seed.w),x:mk(ExcelSim,box('x'),sv.x,seed.x),p:mk(PptSim,box('p'),sv.p,seed.p)};
    $$('.simtabs button',host).forEach(b=>b.onclick=()=>showApp(b.dataset.k));
    showApp('w');
  }
  mounted=true;
}
function showApp(k){
  $$('.sb',host).forEach(b=>b.hidden=b.dataset.k!==k);
  $$('.simtabs button',host).forEach(b=>b.classList.toggle('on',b.dataset.k===k));
}
const simArg=st=>st.app==='project'?sims:sims.s;

/* lưu trạng thái cửa sổ mô phỏng (chậm 0,3 giây cho đỡ ghi liên tục) */
let pend=null;
function queueSave(){ pend={id:STATIONS[cur].id,st:STATIONS[cur],sims}; clearTimeout(timer); timer=setTimeout(flush,300); }
function flush(){
  clearTimeout(timer); if(!pend) return;
  const {id,st,sims:sm}=pend; pend=null;
  const o=prog[id]||(prog[id]={});
  o.sim=st.app==='project'?{w:sm.w.snapshot(),x:sm.x.snapshot(),p:sm.p.snapshot()}:sm.s.snapshot();
  save();
}
addEventListener('pagehide',flush); addEventListener('visibilitychange',()=>{ if(document.hidden) flush(); });

/* ---------- thanh trên: bài + 3 chặng (mỗi mục khóa đến khi xong mục trước) ---------- */
function drawTop(){
  const p=stat();
  const dots=STATIONS.map((s,i)=>{ const ok=isDone(i), lk=!unlocked(i);
    return `<button class="dot ${i===cur?'on':''} ${ok?'ok':''} ${lk?'lk':''}" data-i="${i}" title="${s.no}: ${esc(s.title)}${lk?' (đang khóa)':''}" style="--c:${s.c}">${ok?'✓':lk?'🔒':s.e}</button>`; }).join('');
  const ph=[['learn','1','📖 Học'],['practice','2','🛠️ Thực hành'],['quiz','3','❓ Trắc nghiệm']];
  const isOk={learn:!!p.learn,practice:!!p.prac,quiz:!!p.quiz};
  topbar.innerHTML=`<a class="back" href="../../../spark-lv2.html" title="Về danh sách bài">←</a><div class="dots">${dots}</div>
    <div class="phases">${ph.map(([k,n,l])=>{ const lk=!allowed(cur,k);
      return `<button class="ph ${phase===k||(phase==='result'&&k==='quiz')?'on':''} ${isOk[k]?'ok':''} ${lk?'lk':''}" data-p="${k}"><b>${isOk[k]?'✓':lk?'🔒':n}</b>${l}</button>`; }).join('')}
      <button class="ph clr" id="clr" title="Xóa toàn bộ tiến độ">🗑️</button></div>`;
  $$('.dot',topbar).forEach(b=>b.onclick=()=>{ const i=+b.dataset.i; unlocked(i)?go(i,i===cur?phase:'learn'):lockMsg(); });
  $$('.ph[data-p]',topbar).forEach(b=>b.onclick=()=>{ const k=b.dataset.p; if(!allowed(cur,k)) return lockMsg(); card=0; setPhase(k==='quiz'&&p.quiz&&phase==='result'?'result':k); });
  $('#clr').onclick=()=>{ if(confirm('Xóa toàn bộ tiến độ và làm lại từ đầu?')){ prog={}; save(); pend=null; go(0); } };
}

/* ---------- nội dung từng chặng ---------- */
function drawView(){
  const st=STATIONS[cur];
  view.className='view'+(phase==='practice'?'':' full');
  if(phase==='learn') return drawLearn(st);
  if(phase==='practice') return drawStepBar(st);
  if(phase==='quiz'){
    const p=stat(); view.innerHTML='';
    return mountQuiz(view,pickQuestions(st.quiz),(r,t)=>{ p.quiz={r,t}; delete p.qp; save(); setPhase('result'); },
      p.qp||{i:0,r:0},(i,r)=>{ p.qp={i,r}; save(); });
  }
  drawResult(st);
}

/* 1. Học: mỗi thẻ một ý, chữ to */
function cards(st){
  const parts=st.learn.split(/(?<=[.!?])\s+/).filter(Boolean);
  return [...parts.map((h,i)=>({e:EMO[i%EMO.length],h})),{goal:true,h:st.mission}];
}
function drawLearn(st){
  const cs=cards(st), c=cs[card], last=card===cs.length-1;
  view.innerHTML=`<div class="learn"><div class="no">${st.e} ${st.no}</div><h1>${esc(st.title)}</h1>
    <div class="lcard ${c.goal?'goal':''}">${c.goal?`<div class="big">🎯</div><div class="tag">Nhiệm vụ của em</div>`:`<div class="big">${c.e}</div>`}<p>${c.h}</p></div>
    <div class="lpips">${cs.map((_,i)=>`<i class="${i===card?'on':''}"></i>`).join('')}</div>
    <div class="row-b"><button class="btn alt" id="lPrev" ${card===0?'disabled':''}>‹ Quay lại</button>
      ${last?`<button class="btn" id="lGo">🛠️ Bắt đầu thực hành</button>`:`<button class="btn" id="lNext">Tiếp theo ›</button>`}</div></div>`;
  $('#lPrev').onclick=()=>{ card--; drawLearn(st); };
  const n=$('#lNext'); if(n) n.onclick=()=>{ card++; drawLearn(st); };
  const g=$('#lGo'); if(g) g.onclick=()=>{ stat().learn=true; save(); setPhase('practice'); };
}

/* 2. Thực hành: các bước làm lần lượt, bước sau khóa đến khi xong bước trước */
function drawStepBar(st){
  const n=done.length, k=done.findIndex(d=>!d), all=k<0, s=st.steps[all?n-1:k];
  view.innerHTML=`<div class="side"><p class="mission">🎯 ${st.mission}</p>
    ${all?`<div class="curstep done"><div class="sno">🎉<b>Xong!</b></div><div class="stxt">Em đã làm xong tất cả các bước! Giỏi lắm!</div></div>
           <div class="sbtns"><button class="btn" id="toQuiz">Làm trắc nghiệm ➜</button></div>`
         :`<div class="curstep"><div class="sno">Bước<b>${k+1}/${n}</b></div><div class="stxt">${s.t}</div></div>
           <div class="sbtns"><button class="btn y sm" id="bHint">💡 Gợi ý</button><button class="btn alt sm" id="bReset">↺ Làm lại</button></div>
           <div class="hintbox ${hintOn?'hien':''}" id="goi">💡 ${s.hint}</div>`}
    <ol class="buoc">${st.steps.map((x,i)=>`<li class="${done[i]?'ok':i===k?'now':'lk'}" ${i>k&&k>=0?'data-lk="1"':''}>${x.a?`<em class="ap" style="background:${APPS[x.a][2]}">${APPS[x.a][1]}</em>`:''}<span class="o"></span><span>${x.t}</span></li>`).join('')}</ol></div>`;
  const q=$('#toQuiz'); if(q) q.onclick=()=>{ card=0; setPhase('quiz'); };
  $$('[data-lk]',view).forEach(li=>li.onclick=lockMsg);
  if(!all){ $('#bHint').onclick=hint;
    $('#bReset').onclick=()=>{ if(confirm('Làm lại bài thực hành này từ đầu?')){ delete stat().sim; delete stat().sd; pend=null; save(); go(cur,'practice'); } }; }
  if(s.a&&!all) showApp(s.a);
}
function refresh(){
  const st=STATIONS[cur]; if(!st||phase!=='practice') return;
  const arg=simArg(st), before=done.join();
  let k=done.findIndex(d=>!d);                      // chỉ xét bước hiện tại; xong mới sang bước kế
  const all=st.app==='project'?Object.values(sims):[sims.s];
  while(k>=0){ let ok=false; try{ ok=!!st.steps[k].check(arg); }catch(e){}
    if(!ok) break; done[k]=true; k=done.findIndex(d=>!d);
    all.forEach(m=>m.log.clear()); }               // thao tác cũ không tính cho bước sau: phải làm sau khi bước đó hiện ra
  if(done.join()===before) return;
  stat().sd=done.filter(Boolean).length; save();
  hintOn=false;
  if(done.every(Boolean)&&!stat().prac){ stat().prac=true; save(); confetti(); drawTop(); }
  drawStepBar(st);
}
function hint(){
  const st=STATIONS[cur], i=done.findIndex(d=>!d); if(i<0) return;
  const s=st.steps[i]; hintOn=true; $('#goi').classList.add('hien');
  if(s.a) showApp(s.a);
  if(s.target){ const el=$(s.target,st.app==='project'?$(`.sb[data-k="${s.a}"]`,host):host);
    if(el){ el.classList.add('goi-y'); setTimeout(()=>el.classList.remove('goi-y'),3500); } }
}

/* 3. Kết quả */
function drawResult(st){
  const q=stat().quiz, pct=q.r/q.t, stars=pct>=.85?'⭐⭐⭐':pct>=.6?'⭐⭐☆':'⭐☆☆', last=cur===STATIONS.length-1;
  view.innerHTML=`<div class="res"><div class="stars">${stars}</div><h3>Em đúng ngay lần đầu ${q.r}/${q.t} câu!</h3>
    <p>${pct>=.85?'Xuất sắc! Em nắm bài rất chắc.':pct>=.6?'Khá lắm! Hãy đọc lại phần Học để giỏi hơn nhé.':'Đừng nản! Em hãy đọc lại phần Học và thử lại nhé.'}</p>
    ${last?finalHTML():''}
    <div class="row-b"><button class="btn alt" id="rL">📖 Học lại</button><button class="btn alt" id="rQ">🔁 Làm lại trắc nghiệm</button>
      ${last?'':`<button class="btn" id="rN">Bài tiếp theo ➜</button>`}</div></div>`;
  $('#rL').onclick=()=>{ card=0; setPhase('learn'); };
  $('#rQ').onclick=()=>{ delete stat().qp; setPhase('quiz'); };
  const nx=$('#rN'); if(nx) nx.onclick=()=>go(cur+1);
  confetti();
}
function finalHTML(){
  const rows=STATIONS.map((s,i)=>{ const p=P(i); return `<div><span>${s.e} ${s.no} – ${esc(s.title)}</span><b>${p.prac?'✓':'—'} · ${p.quiz?p.quiz.r+'/'+p.quiz.t:'—'}</b></div>`; }).join('');
  const all=STATIONS.every((_,i)=>isDone(i));
  return `<div class="cert"><h4>${all?'🏅 Chúc mừng em hoàn thành tất cả!':'📋 Bảng tổng kết (thực hành · trắc nghiệm)'}</h4>${rows}</div>`;
}

function confetti(){
  const box=$('#confetti'), em=['⭐','🎉','✨','🎈','🌟'];
  for(let n=0;n<22;n++){ const e=document.createElement('i'); e.textContent=em[n%em.length];
    e.style.left=Math.random()*100+'vw'; e.style.animationDelay=Math.random()*.6+'s'; box.appendChild(e); setTimeout(()=>e.remove(),3200); }
}

/* mở bài: theo #số (vd #3 hoặc #3.practice); không có thì tiếp tục chỗ đang học dở */
const hs=location.hash.slice(1).split('.');
if(hs[0]!==''&&!isNaN(parseInt(hs[0]))) go(parseInt(hs[0]), ORDER.includes(hs[1])?hs[1]:'learn');
else if(prog._last) go(prog._last.i, prog._last.ph);
else go(0);
