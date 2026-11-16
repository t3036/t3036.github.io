/* Spark 3 · Chủ đề 7 — bộ máy bài học tương tác. Dữ liệu nằm ở data.js của từng bài. */
(function(){
'use strict';
const L=window.LESSON;L.cheer=L.cheer||['Chưa đúng rồi, nhưng em làm được!','Gần đúng rồi, thử lại nhé!','Không sao đâu, sai là để học mà!','Cố lên, em sắp làm được rồi!'];L.praise=L.praise||['Giỏi lắm!','Tuyệt vời!','Chuẩn rồi!','Em thật thông minh!'];
const KEY='k5s3_'+L.id, TKEY=KEY+'_teacher';
const h=(t,a,...c)=>{const e=document.createElement(t);if(a)for(const k in a){const v=a[k];if(k==='class')e.className=v;else if(k==='html')e.innerHTML=v;else if(k.slice(0,2)==='on')e.addEventListener(k.slice(2),v);else if(v!==false&&v!=null)e.setAttribute(k,v===true?'':v)}c.flat(9).forEach(x=>{if(x==null||x===false)return;e.append(x.nodeType?x:document.createTextNode(x))});return e};
const esc=s=>String(s).replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
const fmt=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<mark>$1</mark>').replace(/\n/g,'<br>');
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const $=s=>document.querySelector(s);
const LET='ABCDEF';

/* ---------- lưu trữ ---------- */
const lsGet=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
const lsSet=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const lsDel=k=>{try{localStorage.removeItem(k)}catch(e){}};
const fresh=()=>({done:{},pos:{s:0,j:0},miss:{},badges:{},gameStars:0,cardsDone:false,started:false});
let S=fresh();try{const r=JSON.parse(lsGet(KEY));if(r&&r.done)S=Object.assign(fresh(),r)}catch(e){}
let TEACH=lsGet(TKEY)==='1';
const save=()=>lsSet(KEY,JSON.stringify(S));

/* ---------- âm thanh & đọc ---------- */
let sndOn=lsGet('k5snd')!=='0',AC=null;
function beep(seq){if(!sndOn)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();let t=AC.currentTime;seq.forEach(([f,d])=>{const o=AC.createOscillator(),g=AC.createGain();o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(.12,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+d);t+=d*.8})}catch(e){}}
const sOK=()=>beep([[660,.12],[880,.18]]),sNO=()=>beep([[220,.2],[170,.25]]),sWIN=()=>beep([[523,.12],[659,.12],[784,.12],[1046,.3]]),sTAP=()=>beep([[500,.05]]);
let viVoice=null;
function findVoice(){try{const v=window.speechSynthesis.getVoices();viVoice=v.find(x=>/^vi/i.test(x.lang))||null}catch(e){}const b=$('#readBtn');if(b){b.disabled=!viVoice;b.title=viVoice?'Đọc to nội dung':'Máy chưa có giọng đọc tiếng Việt'}const t=$('#tRead');if(t)t.disabled=!viVoice}
function speak(txt){if(!viVoice)return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(txt);u.voice=viVoice;u.lang=viVoice.lang;u.rate=.92;speechSynthesis.speak(u)}catch(e){}}

/* ---------- khung trang ---------- */
document.documentElement.style.setProperty('--h',L.hue);if(L.pale)document.documentElement.classList.add('pale');
document.title=L.emoji+' Bài '+L.no+' · '+L.title;
let fs=parseInt(lsGet('k5fs'))||20;const setFs=n=>{fs=Math.max(15,Math.min(30,n));document.documentElement.style.setProperty('--fs',fs+'px');lsSet('k5fs',fs)};setFs(fs);
const setTheme=t=>{document.documentElement.dataset.theme=t;lsSet('k5theme',t)};
setTheme(lsGet('k5theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));

const app=$('#app');
app.innerHTML='';
const titleEl=h('div',{class:'ttl'},h('h1',null,L.emoji+' Bài '+L.no+' · '+L.title),h('small',null,L.en+' · Chủ đề 7: An toàn và bảo mật'));
const btnSnd=h('button',{class:'ib',title:'Bật/tắt âm thanh',onclick:()=>{sndOn=!sndOn;lsSet('k5snd',sndOn?'1':'0');btnSnd.textContent=sndOn?'🔊':'🔇';sTAP()}},sndOn?'🔊':'🔇');
const btnTheme=h('button',{class:'ib',title:'Đổi sáng/tối',onclick:()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark')},'🌓');
const top=h('header',{class:'top'},
  h('a',{class:'back',href:'../../../spark-lv3.html'},'←',h('span',null,' Danh sách bài')),titleEl,
  h('div',{class:'tools'},
    h('button',{class:'ib',title:'Chữ nhỏ lại',onclick:()=>setFs(fs-2)},'A−'),
    h('button',{class:'ib',title:'Chữ to lên',onclick:()=>setFs(fs+2)},'A+'),btnTheme,btnSnd,
    h('button',{class:'ib',title:'Toàn màn hình',onclick:()=>{try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}catch(e){}}},'⛶'),
    h('button',{class:'ib',title:'Học lại từ đầu',onclick:askRestart},'🔄')));
const mapEl=h('nav',{class:'map','aria-label':'Bản đồ bài học'});
const stage=h('section',{class:'stage'});
const side=h('aside',{class:'side'});
app.append(top,mapEl,stage);

/* mở khóa giáo viên: nhấp chuột phải 2 lần / giữ 3 giây trên tiêu đề (không có gợi ý nào hiển thị) */
(function(){let last=0,tm=null;
 const on=()=>{if(TEACH)return;TEACH=true;lsSet(TKEY,'1');renderMap();renderSide();};
 titleEl.addEventListener('contextmenu',e=>{e.preventDefault();const n=Date.now();if(n-last<600){on();last=0}else last=n});
 titleEl.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'||e.pointerType==='pen'){clearTimeout(tm);tm=setTimeout(on,3000)}});
 ['pointerup','pointercancel','pointerleave'].forEach(ev=>titleEl.addEventListener(ev,()=>clearTimeout(tm)));
})();

/* ---------- tiện ích giao diện ---------- */
function modal(msg,yes,no,yesLabel){const m=h('div',{class:'modal'},h('div',null,h('p',null,msg),h('div',{class:'cta'},h('button',{class:'btn',onclick:()=>m.remove()},no||'Không'),h('button',{class:'btn warn',onclick:()=>{m.remove();yes()}},yesLabel||'Có'))));document.body.append(m)}
function askRestart(){modal('Em có chắc muốn học lại từ đầu không? Sao và huy hiệu của bài này sẽ bị xóa.',()=>{S=fresh();save();go('start')},'Ở lại','Học lại từ đầu')}
function boom(){const b=h('div',{class:'boom'});const e=['⭐','🎉','✨','🏅','🌟','🎈'];for(let i=0;i<26;i++)b.append(h('i',{style:`left:${Math.random()*100}%;animation-delay:${Math.random()*.9}s`},e[i%e.length]));document.body.append(b);setTimeout(()=>b.remove(),3600)}
const starStr=n=>h('span',{class:'stars'},[1,2,3].map(i=>h('span',{class:i<=n?'':'off'},'⭐')));
const totalStations=L.stations.length;
const doneCount=()=>Object.keys(S.done).length;
const allDone=()=>doneCount()>=totalStations;
const gameOpen=()=>TEACH||allDone();
const cardsOpen=()=>TEACH||S.gameStars>0;
const finalOpen=()=>TEACH||(S.cardsDone);
const stOpen=i=>TEACH||i===0||S.done[i-1]!=null;
const sumStars=()=>Object.values(S.done).reduce((a,b)=>a+b,0)+(S.gameStars||0);
const maxStars=()=>(totalStations+1)*3;

/* ---------- bản đồ trái ---------- */
let view='start',cur=-1;
function renderMap(){
  mapEl.innerHTML='';mapEl.append(h('h3',null,'🗺️ Bản đồ nhiệm vụ'));
  const p=h('div',{class:'path'});
  const node=(ic,t,sub,open,isDone,isCur,fn,st)=>p.append(h('button',{class:'node'+(isDone?' done':'')+(isCur?' cur':''),disabled:!open,onclick:fn},h('span',{class:'ic'},open?ic:'🔒'),h('span',{class:'tx'},t,h('small',null,sub)),h('span',{class:'st'},st||'')));
  node('🏁','Xuất phát','Giới thiệu bài',true,S.started,view==='start',()=>go('start'));
  L.stations.forEach((s,i)=>{const d=S.done[i];node(s.emoji,s.title,d!=null?'Đã xong':(stOpen(i)?'Sẵn sàng':'Hoàn thành trạm trước'),stOpen(i),d!=null,view==='station'&&cur===i,()=>go('station',i),d!=null?'⭐'.repeat(d):'')});
  node('🎮','Trò chơi: '+L.game.name,gameOpen()?(S.gameStars?'Đã chơi':'Sẵn sàng'):'Xong các trạm để mở',gameOpen(),S.gameStars>0,view==='game',()=>go('game'),'⭐'.repeat(S.gameStars||0));
  node('🃏','Thẻ ghi nhớ',cardsOpen()?'Lật thẻ ôn bài':'Thắng trò chơi để mở',cardsOpen(),S.cardsDone,view==='cards',()=>go('cards'));
  node('🏆','Tổng kết','Huy hiệu & câu cần ôn',finalOpen(),false,view==='final',()=>go('final'));
  mapEl.append(p);
}

/* ---------- cột phải ---------- */
let say='Chào em! Cùng khám phá nhé!';
function renderSide(){
  return;
  side.innerHTML='';
  const miss=Object.keys(S.miss).length;
  side.append(
    h('div',{class:'mascot'},h('span',{class:'face'},L.mascot.e),h('b',null,L.mascot.name),h('div',{class:'say',id:'say'},say)),
    h('div',{class:'sum'},h('div',null,'⭐ '+sumStars()+'/'+maxStars(),h('small',null,'Sao')),h('div',null,'🎯 '+doneCount()+'/'+totalStations,h('small',null,'Trạm xong'))),
    h('h3',null,'🏅 Huy hiệu'),
    h('div',{class:'badges'},L.stations.map((s,i)=>h('span',{class:'bd'+(S.done[i]!=null?'':' lock'),title:s.badge[1]},s.badge[0])),
      h('span',{class:'bd'+(S.gameStars?'':' lock'),title:'Nhà vô địch phản xạ'},'🎮'),h('span',{class:'bd'+(S.done&&allDone()&&Object.values(S.done).every(v=>v===3)?'':' lock'),title:'Ba sao mọi trạm'},'👑')),
    h('div',{class:'sep'}),h('h3',null,'📖 Từ khóa (chạm để nghe giải thích)'),
    h('div',{class:'gl'},L.glossary.map(g=>h('button',{onclick:()=>{talk('**'+g.t+'** ('+g.en+'): '+g.d);speak(g.t+'. '+g.d)}},g.t))),
    h('div',{class:'sep'}),h('h3',null,'📝 Câu cần ôn: '+miss),
    h('div',{style:'font-size:.7rem;color:var(--mute);font-weight:600'},miss?'Các câu này sẽ quay lại để em luyện tập.':'Chưa có câu nào sai. Giỏi lắm!'));
}
function talk(m){say=m;const e=$('#say');if(e)e.innerHTML=fmt(m)}

/* ---------- điều hướng ---------- */
function go(v,i){try{window.speechSynthesis.cancel()}catch(e){}view=v;cur=i==null?-1:i;renderMap();
  ({start:vStart,station:()=>runStation(i),done:()=>{},game:vGame,cards:vCards,final:vFinal}[v])();renderSide();}

function shell(chip,withFoot){
  stage.innerHTML='';
  const dots=h('div',{class:'dots'});
  const rb=h('button',{class:'read',id:'readBtn',onclick:()=>speak($('#sbody').innerText)},'🔊 Nghe');
  stage.append(h('div',{class:'shead'},h('span',{class:'chip'},chip),dots,rb));
  const body=h('div',{class:'sbody',id:'sbody'});stage.append(body);
  let fb,acts,main,hint;
  if(withFoot){fb=h('div',{class:'fb',id:'fb'});main=h('button',{class:'btn go',id:'mainBtn'},'Tiếp →');hint=h('button',{class:'btn',id:'hintBtn',style:'display:none'},'💡 Gợi ý');acts=h('div',{class:'acts'},hint,main);stage.append(h('div',{class:'sfoot'},fb,acts))}
  findVoice();return {dots,body,fb,main,hint};
}
const inn=(...c)=>h('div',{class:'in'},c);

/* ---------- màn hình xuất phát ---------- */
function vStart(){
  const {body,}=shell('🏁 Xuất phát',false);
  const cont=S.started&&!(allDone()&&S.cardsDone);
  const btns=[];
  if(S.started){btns.push(h('button',{class:'btn go',onclick:resume},'Tiếp tục'),h('button',{class:'btn',onclick:askRestart},'Học lại từ đầu'))}
  else btns.push(h('button',{class:'btn go',onclick:()=>{S.started=true;save();go('station',0)}},'Bắt đầu'));
  body.append(inn(h('div',{class:'hero'},h('span',{class:'big'},L.emoji),h('h2',null,L.title),h('div',{class:'en'},L.en),
    h('p',null,L.intro),h('ul',{class:'goals'},L.goals.map(g=>h('li',null,h('span',null,g[0]),g[1]))),h('div',{class:'cta'},btns))));
  talk(L.mascot.hello);
}
function resume(){const p=S.pos;if(p&&p.s!=null&&stOpen(p.s)&&S.done[p.s]==null)go('station',p.s);else{let n=L.stations.findIndex((s,i)=>S.done[i]==null);if(n>=0)go('station',n);else if(!S.gameStars)go('game');else if(!S.cardsDone)go('cards');else go('final')}}

/* ---------- chạy một trạm ---------- */
let run=null;
function runStation(si){
  const st=L.stations[si];
  run={si,steps:st.steps.map((s,k)=>Object.assign({},s,{_key:si+'.'+k})),j:(S.pos.s===si?S.pos.j:0),miss:[],redo:false,firstMiss:0,tries:0};
  if(run.j>=run.steps.length)run.j=0;
  showStep();
}
function showStep(){
  const st=L.stations[run.si],step=run.steps[run.j];
  S.pos={s:run.si,j:run.redo?0:run.j};save();
  const sh=shell(st.emoji+' '+st.title,true);
  sh.dots.append(...run.steps.map((_,k)=>h('i',{class:k<run.j?'on':(k===run.j?'cur':'')})));
  const ctx=mkCtx(sh,step);
  const r=R[step.k];r(step,ctx,sh.body);
  $('#sbody').scrollTop=0;
}
function mkCtx(sh,step){
  const c={
    fb(kind,msg,icon){sh.fb.className='fb '+kind;sh.fb.innerHTML='';if(kind)sh.fb.append(h('span',{class:'fi'},icon||({ok:'✓',no:'✕',hint:'💡'}[kind])),h('span',{html:fmt(msg||'')}))},
    btn(label,en,fn){sh.main.textContent=label;sh.main.disabled=!en;sh.main.onclick=fn},
    hint(txt){if(!txt){sh.hint.style.display='none';return}sh.hint.style.display='';sh.hint.onclick=()=>{c.fb('hint',txt);talk(txt)}},
    next,
    miss(){if(!run.redo&&!run.missedNow){run.firstMiss++}run.missedNow=true;S.miss[step._key]={q:step.q||step.title||'',a:step.ans||''};if(!run.miss.includes(step))run.miss.push(step);save();renderSide()},
    good(){if(run.redo){delete S.miss[step._key];run.miss=run.miss.filter(x=>x!==step);save();renderSide()}},
    say:talk};
  run.missedNow=false;return c;
}
function next(){
  run.j++;
  if(run.j>=run.steps.length){
    if(!run.redo&&run.miss.length){run.redo=true;run.steps.push({k:'banner',emoji:'🔁',title:'Ôn lại nhé!',lines:['Có '+run.miss.length+' câu em chưa đúng.','Mình làm lại để nhớ lâu hơn nào!']},...run.miss);return showStep()}
    return finishStation();
  }
  showStep();
}
function finishStation(){
  const si=run.si,st=L.stations[si],m=run.firstMiss,stars=m===0?3:(m<=2?2:1);
  S.done[si]=Math.max(S.done[si]||0,stars);S.pos={s:Math.min(si+1,totalStations-1),j:0};save();
  const sh=shell('🎉 Hoàn thành!',true);sh.dots.append(...[...Array(8)].map(()=>h('i',{class:'on'})));
  sh.body.append(inn(h('div',{class:'hero'},h('span',{class:'big'},st.badge[0]),h('h2',null,'Em nhận huy hiệu “'+st.badge[1]+'”!'),starStr(stars),
    h('p',null,m===0?'Tuyệt vời! Em không sai câu nào.':(m<=2?'Rất tốt! Em chỉ sai '+m+' câu.':'Cố gắng tốt! Mình sẽ ôn lại các câu sai sau.')))));
  const c=mkCtx(sh,{});c.fb('ok',st.recap,'★');
  const last=si===totalStations-1;
  c.btn(last?'Đến trò chơi 🎮':'Trạm tiếp theo →',true,()=>last?go('game'):go('station',si+1));
  boom();sWIN();renderMap();renderSide();talk('Giỏi quá! '+st.recap);
}

/* ---------- các loại bước ---------- */
const R={};
R.banner=(st,c,b)=>{b.append(inn(h('div',{class:'learn'},h('span',{class:'big'},st.emoji),h('h2',null,st.title),st.lines.map(l=>h('p',{class:'ln'},l)))));c.btn('Bắt đầu ôn →',true,c.next)};

R.learn=(st,c,b)=>{
  b.append(inn(h('div',{class:'learn'},st.extra&&h('span',{class:'tag'},'⭐ Luyện thêm'),h('div',null,h('span',{class:'big'},st.emoji)),h('h2',{html:fmt(st.title)}),
    st.lines.map((l,i)=>h('p',{class:'ln'+(i===0&&st.key?' k':''),html:fmt(l)})),(st.en||[]).map(e=>h('span',{class:'en'},e)))));
  c.btn('Tiếp →',true,c.next);talk(st.say||st.lines[0]);
};

R.reveal=(st,c,b)=>{
  let n=0;const tot=st.cards.length;
  const upd=()=>c.btn(n<tot?'Lật hết thẻ ('+n+'/'+tot+')':'Tiếp →',n>=tot,c.next);
  b.append(inn(st.extra&&h('span',{class:'tag'},'⭐ Luyện thêm'),h('p',{class:'q',html:fmt(st.title)}),
    h('div',{class:'flips'},st.cards.map(cd=>{const f=h('button',{class:'flip',onclick:()=>{if(!f.classList.contains('on')){f.classList.add('on');n++;sTAP();upd();c.fb('hint',cd.b,cd.e)}}},h('div',{class:'fc'},h('div',{class:'f'},h('span',{class:'em'},cd.e),cd.f,h('small',null,'Chạm để lật')),h('div',{class:'b',html:fmt(cd.b)})));return f}))));
  upd();
};

R.chat=(st,c,b)=>{
  let i=0;const box=h('div',{class:'chat'});
  b.append(inn(h('p',{class:'q',html:fmt(st.title)}),box));
  const add=()=>{const m=st.msgs[i++];box.append(h('div',{class:'bub '+m.w},m.av&&h('span',{class:'av'},m.av),h('span',{html:fmt(m.t)})));box.scrollIntoView({block:'nearest'});sTAP();upd()};
  const upd=()=>{i<st.msgs.length?c.btn('Xem tiếp 💬',true,add):c.btn('Tiếp →',true,c.next)};
  add();
};

/* khung hỏi chung: o={ready,check,reveal,reset,lock} */
function ask(st,c,o){
  let tries=0;
  const upd=()=>c.btn('Kiểm tra',o.ready(),check);
  function check(){tries++;
    if(o.check()){o.lock(true);if(tries===1)sOK();else sOK();c.fb('ok',st.why||'Đúng rồi!');c.good();talk(st.why||'Đúng rồi!');c.btn('Tiếp →',true,c.next);c.hint(null)}
    else{c.miss();sNO();
      if(tries>=2){o.reveal();o.lock(false);c.fb('no','Đáp án đúng đã hiện ra. '+(st.why||''));c.btn('Tiếp →',true,c.next);c.hint(null)}
      else{c.fb('no',L.cheer[Math.random()*L.cheer.length|0]+' '+(st.hint?'Gợi ý: '+st.hint:''));o.mark&&o.mark();c.btn('Thử lại',true,()=>{o.reset();c.fb('');upd()})}}
  }
  upd();c.hint(st.hint);return upd;
}
const qHead=st=>[st.extra&&h('span',{class:'tag'},'⭐ Luyện thêm'),h('p',{class:'q',html:fmt(st.q)},st.sub&&h('span',{class:'sub'},st.sub))];

R.single=R.multi=(st,c,b)=>{
  const multi=st.k==='multi',ans=multi?st.a:[st.a];st.ans=ans.map(i=>st.opts[i].t||st.opts[i]).join('; ');
  const order=shuf(st.opts.map((_,i)=>i));let sel=new Set();const els={};
  const tiles=st.opts.some(o=>o.e&&o.tile);
  const wrap=h('div',{class:'opts'+(tiles?' tiles grid2':'')});
  order.forEach((oi,k)=>{const o=st.opts[oi],txt=o.t||o;const e=h('button',{class:'opt',onclick:()=>{if(e.disabled)return;sTAP();if(multi){sel.has(oi)?sel.delete(oi):sel.add(oi)}else sel=new Set([oi]);paint();upd()}},
    !tiles&&h('span',{class:'ab'},LET[k]),o.e&&h('span',{class:'em'},o.e),h('span',null,txt),h('span',{class:'mk'}));els[oi]=e;wrap.append(e)});
  const paint=()=>Object.keys(els).forEach(i=>els[i].classList.toggle('sel',sel.has(+i)));
  b.append(inn(qHead(st),multi&&h('p',{class:'q sub',style:'font-size:.7rem;color:var(--mute)'},'Chọn '+ans.length+' đáp án'),wrap));
  const upd=ask(st,c,{ready:()=>multi?sel.size===ans.length:sel.size===1,
    check:()=>sel.size===ans.length&&ans.every(i=>sel.has(i)),
    mark(){[...sel].forEach(i=>{if(!ans.includes(i)){els[i].classList.add('wrong');els[i].querySelector('.mk').textContent='✕'}})},
    reveal(){Object.keys(els).forEach(i=>{els[i].classList.remove('wrong','sel');if(ans.includes(+i)){els[i].classList.add('right');els[i].querySelector('.mk').textContent='✓'}})},
    reset(){sel=new Set();Object.values(els).forEach(e=>{e.classList.remove('wrong','sel','right');e.querySelector('.mk').textContent=''})},
    lock(ok){Object.values(els).forEach(e=>e.disabled=true);if(ok)ans.forEach(i=>{els[i].classList.remove('sel');els[i].classList.add('right');els[i].querySelector('.mk').textContent='✓'})}});
};
R.pick=(st,c,b)=>{st.opts=st.opts.map(o=>Object.assign({tile:true},o));st.k='multi';R.multi(st,c,b)};

R.yn=(st,c,b)=>{
  const labs=st.labels||['Có','Không'];let left=st.items.length,bad=0;
  st.ans=st.items.map(i=>i.t+' → '+labs[i.a]).join(' | ');
  const rows=h('div',{class:'rows'});
  shuf(st.items).forEach(it=>{
    const r=h('div',{class:'row'},h('span',{class:'t',html:fmt(it.t)}),h('span',{class:'bs'},labs.map((lb,k)=>h('button',{onclick:()=>pick(k)},lb))),h('span',{class:'rm'}));
    function pick(k){if(r.dataset.d)return;r.dataset.d=1;const bts=r.querySelectorAll('button');const ok=k===it.a;bts.forEach(x=>x.disabled=true);
      bts[it.a].classList.add('right');if(!ok)bts[k].classList.add('wrong');r.classList.add(ok?'ok':'bad');r.querySelector('.rm').textContent=ok?'✓':'✕';
      if(ok)sOK();else{sNO();bad++}
      left--;if(it.why)c.fb(ok?'ok':'no',(ok?'Đúng! ':'Chưa đúng. ')+it.why);else c.fb(ok?'ok':'no',ok?'Đúng rồi! '+L.praise[Math.random()*L.praise.length|0]:L.cheer[Math.random()*L.cheer.length|0]+' Đáp án đúng là “'+labs[it.a]+'”.');
      if(left===0){if(bad){c.miss()}else c.good();setTimeout(()=>{c.fb(bad?'no':'ok',(bad?'Em sai '+bad+' ý. ':'Cả '+st.items.length+' ý đều đúng! ')+(st.why||''))},900);c.btn('Tiếp →',true,c.next);c.hint(null)}}
    rows.append(r)});
  b.append(inn(qHead(st),rows));c.btn('Chọn từng ý ('+left+' ý nữa)',false);c.hint(st.hint);
};

R.order=(st,c,b)=>{
  const n=st.items.length;st.ans=st.items.join(' → ');
  let arr=shuf(st.items.map((_,i)=>i));if(arr.every((v,i)=>v===i))arr.reverse();
  let selI=-1,locked=false;const box=h('div',{class:'ord'});
  const draw=(res)=>{box.innerHTML='';arr.forEach((v,pos)=>{
    const row=h('div',{class:'oi'+(pos===selI?' sel':'')+(res?(v===pos?' ok':' bad'):''),draggable:!locked,
      ondragstart:e=>e.dataTransfer.setData('text',pos),ondragover:e=>e.preventDefault(),ondrop:e=>{e.preventDefault();const f=+e.dataTransfer.getData('text');if(locked||isNaN(f))return;swap(f,pos)}},
      h('span',{class:'n'},pos+1),h('button',{class:'tx',disabled:locked,onclick:()=>{if(locked)return;sTAP();if(selI<0)selI=pos;else{if(selI!==pos)swap(selI,pos);else selI=-1}draw()}},st.items[v]),
      h('button',{class:'mv',title:'Lên',disabled:locked||pos===0,onclick:()=>swap(pos,pos-1)},'▲'),h('button',{class:'mv',title:'Xuống',disabled:locked||pos===n-1,onclick:()=>swap(pos,pos+1)},'▼'),res&&h('span',{class:'rm',style:'font-weight:900;font-size:1.3rem'},v===pos?'✓':'✕'));
    box.append(row)})};
  const swap=(a,bb)=>{[arr[a],arr[bb]]=[arr[bb],arr[a]];selI=-1;draw();};
  b.append(inn(qHead(st),h('p',{style:'font-size:.7rem;color:var(--mute);font-weight:600;margin:-6px 0 10px'},'🖐 Kéo thả, bấm ▲▼ hoặc chạm hai bước để đổi chỗ.'),box));draw();
  ask(st,c,{ready:()=>true,check:()=>arr.every((v,i)=>v===i),mark(){draw(true)},
    reveal(){arr=st.items.map((_,i)=>i);draw(true)},reset(){draw()},lock(ok){locked=true;draw(ok)}});
};

R.fill=(st,c,b)=>{
  const parts=st.text.split('___');const nb=parts.length-1;st.ans=st.answers.join(', ');
  const vals=Array(nb).fill(null);let selChip=-1,locked=false;
  const bank=h('div',{class:'bank'});const sent=h('div',{class:'sent'});
  const terms=shuf(st.terms);
  const draw=(res)=>{sent.innerHTML='';parts.forEach((p,i)=>{sent.append(h('span',{html:fmt(p)}));if(i<nb){
    const bl=h('span',{class:'blank'+(res&&vals[i]!=null?(vals[i]===st.answers[i]?' ok':' bad'):''),tabindex:0,
      onclick:()=>{if(locked)return;if(selChip>=0){place(i,terms[selChip]);selChip=-1}else if(vals[i]!=null){vals[i]=null;drawAll()}},
      ondragover:e=>{e.preventDefault();bl.classList.add('over')},ondragleave:()=>bl.classList.remove('over'),ondrop:e=>{e.preventDefault();const t=e.dataTransfer.getData('text');if(!locked&&t)place(i,t)}},vals[i]==null?'…':vals[i]);sent.append(bl)}});
    bank.innerHTML='';terms.forEach((t,k)=>bank.append(h('button',{class:'chipw'+(selChip===k?' sel':'')+(vals.includes(t)?' used':''),draggable:!locked,disabled:locked,ondragstart:e=>e.dataTransfer.setData('text',t),onclick:()=>{if(locked)return;sTAP();selChip=selChip===k?-1:k;if(selChip>=0){const e=vals.indexOf(null);if(e>=0&&nb===1){place(e,t);selChip=-1;return}}drawAll()}},t)))};
  const place=(i,t)=>{const o=vals.indexOf(t);if(o>=0)vals[o]=null;vals[i]=t;selChip=-1;drawAll()};
  const drawAll=(res)=>{draw(res);if(typeof upd==='function')upd()};
  b.append(inn(qHead(st),h('p',{style:'font-size:.7rem;color:var(--mute);font-weight:600;margin:-6px 0 10px'},'🖐 Kéo từ vào ô trống, hoặc chạm từ rồi chạm ô.'),sent,bank));
  let upd;draw();
  upd=ask(st,c,{ready:()=>vals.every(v=>v!=null),check:()=>vals.every((v,i)=>v===st.answers[i]),mark(){draw(true)},
    reveal(){st.answers.forEach((a,i)=>vals[i]=a);locked=true;draw(true)},reset(){vals.fill(null);selChip=-1;draw()},lock(ok){locked=true;draw(ok)}});
};

R.match=(st,c,b)=>{
  const pairs=st.pairs;st.ans=pairs.map(p=>p[0]+' = '+p[1]).join(' | ');
  const L1=shuf(pairs.map((_,i)=>i)),R1=shuf(pairs.map((_,i)=>i));let selL=-1,left=pairs.length,bad=0;
  const lb={},rb={};
  const colL=h('div',{style:'display:grid;gap:12px'}),colR=h('div',{style:'display:grid;gap:12px'});
  L1.forEach(i=>{lb[i]=h('button',{onclick:()=>{if(lb[i].classList.contains('done'))return;sTAP();Object.values(lb).forEach(x=>x.classList.remove('sel'));selL=i;lb[i].classList.add('sel')}},pairs[i][0]);colL.append(lb[i])});
  R1.forEach(i=>{rb[i]=h('button',{onclick:()=>{if(selL<0||rb[i].classList.contains('done'))return;
    if(selL===i){lb[i].classList.remove('sel');lb[i].classList.add('done');rb[i].classList.add('done');sOK();left--;selL=-1;c.fb('ok',pairs[i][0]+' ↔ '+pairs[i][1]);
      if(!left){if(bad)c.miss();else c.good();c.btn('Tiếp →',true,c.next);c.hint(null);setTimeout(()=>c.fb(bad?'no':'ok',(bad?'Em ghép sai '+bad+' lần. ':'Ghép đúng hết! ')+(st.why||'')),1200)}}
    else{bad++;sNO();rb[i].classList.add('err');setTimeout(()=>rb[i].classList.remove('err'),420);c.fb('no',L.cheer[Math.random()*L.cheer.length|0]+' Thử ghép cặp khác nhé.')}}},pairs[i][1]);colR.append(rb[i])});
  b.append(inn(qHead(st),h('div',{class:'mt'},colL,colR)));c.btn('Ghép hết các cặp',false);c.hint(st.hint);
};

/* ---------- trò chơi phản xạ ---------- */
function vGame(){
  const sh=shell('🎮 '+L.game.name,false);
  const items=shuf(L.game.items).slice(0,10);let i=0,lives=3,score=0;
  const track=h('div',{class:'track'},h('span',null,L.mascot.e),h('em',null,'🏁'));
  const hud=h('div',{class:'hud'});const card=h('div',{class:'gcard'});const bt=h('div',{class:'gbt'});
  const box=inn(h('div',{class:'hero'},h('h2',null,L.game.name),h('p',null,L.game.how)),hud,track,card,bt);
  sh.body.append(box);const fb=h('p',{style:'text-align:center;font-weight:800;min-height:1.6em;margin-top:12px'});box.append(fb);
  const draw=()=>{hud.innerHTML='';hud.append(h('span',null,'Câu '+Math.min(i+1,items.length)+'/'+items.length),h('span',null,'❤️'.repeat(lives)+'🖤'.repeat(3-lives)),h('span',null,'🎯 '+score));track.firstChild.style.left=(5+90*i/items.length)+'%';
    if(i>=items.length||lives<=0)return end();card.textContent=items[i].t;bt.innerHTML='';L.game.labels.forEach((lb,k)=>bt.append(h('button',{onclick:()=>ans(k)},lb)))};
  const ans=k=>{const ok=k===items[i].a;if(ok){score++;sOK();fb.textContent='✓ Đúng! '+L.praise[Math.random()*L.praise.length|0]}else{lives--;sNO();fb.textContent='✕ Chưa đúng. Đáp án: '+L.game.labels[items[i].a]}i++;bt.querySelectorAll('button').forEach(x=>x.disabled=true);setTimeout(draw,900)};
  const end=()=>{const win=lives>0;if(win){S.gameStars=Math.max(S.gameStars||0,lives);save()}track.firstChild.style.left='95%';bt.innerHTML='';card.innerHTML='';
    card.append(h('div',null,h('div',{style:'font-size:3rem'},win?'🏆':'💪'),win?'Em vượt qua rồi!':'Hết tim rồi, thử lại nhé!',h('div',null,win?starStr(lives):null)));
    bt.append(h('button',{onclick:()=>go('game')},'🔁 Chơi lại'),win?h('button',{onclick:()=>go('cards')},'🃏 Thẻ ghi nhớ →'):h('button',{onclick:()=>go('station',0)},'📚 Xem lại bài'));
    if(win){boom();sWIN()}renderMap();renderSide()};
  draw();
}

/* ---------- thẻ ghi nhớ ---------- */
function vCards(){
  const sh=shell('🃏 Thẻ ghi nhớ',false);let i=0,seen=new Set();const holder=h('div');
  const draw=()=>{holder.innerHTML='';const cd=L.cards[i];seen.add(i);
    const f=h('button',{class:'flip fcard',onclick:()=>f.classList.toggle('on')},h('div',{class:'fc'},h('div',{class:'f'},h('span',{class:'em',style:'font-size:4rem'},cd.e),cd.f,h('small',null,'Chạm để lật')),h('div',{class:'b',html:fmt(cd.b)})));
    holder.append(h('div',{class:'hud'},h('span',null,'Thẻ '+(i+1)+'/'+L.cards.length)),f,h('div',{class:'cta'},h('button',{class:'btn',disabled:i===0,onclick:()=>{i--;draw()}},'← Trước'),
      i<L.cards.length-1?h('button',{class:'btn go',onclick:()=>{i++;draw()}},'Sau →'):h('button',{class:'btn go',onclick:()=>{S.cardsDone=true;save();go('final')}},'Xong, xem tổng kết 🏆')));
  };
  sh.body.append(inn(h('div',{class:'hero'},h('h2',null,'Lật thẻ để nhớ bài'),h('p',null,'Đọc mặt trước, đoán đáp án, rồi lật xem!')),holder));draw();
}

/* ---------- tổng kết ---------- */
function vFinal(){
  const sh=shell('🏆 Tổng kết',false);const miss=Object.values(S.miss);
  S.cardsDone=true;save();
  sh.body.append(inn(h('div',{class:'hero'},h('span',{class:'big'},'🏆'),h('h2',null,'Bài '+L.no+' hoàn thành!'),starStr(Math.round(sumStars()/maxStars()*3)),h('p',null,'Em được '+sumStars()+'/'+maxStars()+' sao.'),
    h('div',{class:'badges',style:'justify-content:center;margin:12px 0'},L.stations.map((s,i)=>h('span',{class:'bd'+(S.done[i]!=null?'':' lock'),title:s.badge[1]},s.badge[0]))),
    h('h3',null,miss.length?'📝 Những câu em cần ôn':'🌟 Em không còn câu sai nào!'),
    h('div',{class:'mlist'},miss.map(m=>h('div',null,'❓ '+m.q,m.a&&h('div',{style:'color:var(--ok);margin-top:4px'},'✓ '+m.a)))),
    h('div',{class:'cta'},miss.length?h('button',{class:'btn go',onclick:()=>{const k=Object.keys(S.miss)[0].split('.')[0];S.pos={s:+k,j:0};save();go('station',+k)}},'Luyện lại câu sai'):null,h('button',{class:'btn',onclick:()=>go('game')},'🎮 Chơi lại'),h('button',{class:'btn',onclick:askRestart},'Học lại từ đầu')))));
  boom();renderMap();renderSide();talk('Em đã làm rất tốt! '+L.mascot.bye);
}

if('speechSynthesis' in window){try{speechSynthesis.onvoiceschanged=findVoice}catch(e){}}
renderMap();renderSide();go('start');
})();
