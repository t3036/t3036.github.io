/* ---------- tiện ích ---------- */
const $ = (s, r=document) => r.querySelector(s);
const el = (html) => { const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; };
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]} return a };
const stars = n => '⭐'.repeat(n) + '☆'.repeat(3-n);

const LESSON_NAME="Giao tiếp kĩ thuật số";
const pic=(f,alt)=>'<img class="pic" src="img/'+f+'" alt="'+alt+'">';

/* ---------- câu hỏi lấy từ PPTX (bài tập) và DOCX (trắc nghiệm), giữ nguyên lời câu hỏi ---------- */
const Q_DEF={q:"Em hãy cho biết, định nghĩa của giao tiếp kĩ thuật số giữa các cá nhân là gì?",o:["Sử dụng các thiết bị kĩ thuật số để trò chuyện với bạn bè và gia đình","Cách các máy tính nói chuyện với nhau","Xem Video trực tuyến","Nói chuyện với trợ lí ảo hoặc Robot"],a:0,why:"Giao tiếp kĩ thuật số giữa các cá nhân là chia sẻ hoặc kết nối với mọi người bằng các thiết bị kĩ thuật số."};
const TF_STEM="Với mỗi câu phát biểu, em hãy chọn <b>Có</b> nếu đó là ví dụ về hoạt động giao tiếp kĩ thuật số giữa các cá nhân hoặc chọn <b>Không</b> nếu không phải.";
const Q_TF1={q:TF_STEM,lab:["Có","Không"],tf:["Một bình luận trên mạng xã hội trả lời câu hỏi từ một người bạn","Một cuộc gọi điện thoại cho gia sư của em để nhờ trợ giúp về một bài tập","Một cuộc trò chuyện Video giữa em và bạn cùng lớp"],a:[true,true,true],why:"Cả ba đều là em kết nối với một người khác bằng thiết bị kĩ thuật số."};
const Q_TF2={q:TF_STEM,lab:["Có","Không"],tf:["Một Email em gửi cho giáo viên để đặt câu hỏi về bài tập được giao","Một tin nhắn văn bản giữa em và bạn cùng lớp","Một hội thảo Video giữa các thành viên trong nhóm của em với một nhóm ở trường học khác"],a:[true,true,true],why:"Email, tin nhắn và hội thảo Video đều là giao tiếp kĩ thuật số giữa các cá nhân."};
const Q_TF3={q:TF_STEM,lab:["Có","Không"],tf:["Viết ghi chú trong một ứng dụng nhật kí trên máy tính bảng của em","Sử dụng máy ghi âm để thu lại khi em đọc một bài phát biểu","Quay Video chính mình đọc thuộc lòng một kịch bản"],a:[false,false,false],why:"Cả ba việc em chỉ làm một mình, chưa chia sẻ hay kết nối với ai nên chưa phải giao tiếp giữa các cá nhân."};
const Q_ASYNC={q:"Em hãy cho biết, tùy chọn nào dưới đây là ví dụ về giao tiếp không đồng bộ (Asynchronous Communication)?",o:["Gửi và nhận tin nhắn văn bản","Có một cuộc trò chuyện trực tiếp","Chủ trì cuộc họp Video cho một nhóm người","Nói chuyện điện thoại với ai đó ở múi giờ khác"],a:0,why:"Giao tiếp không đồng bộ mất một thời gian trước khi đến người nhận và không cần phản hồi ngay, như tin nhắn văn bản hay Email."};
const Q_TECH={q:"Em hãy di chuyển danh sách công nghệ ở bên trái với cách sử dụng phù hợp ở bên phải tương ứng.",sort:{bins:[['Email'],['Cloud Storage (Lưu trữ đám mây)'],['Calendars & Scheduling Software (Phần mềm quản lý lịch)'],['Video Conferencing (Hội nghị truyền hình)']],items:[['Nhân viên có thể gửi và nhận thông tin liên lạc mọi lúc, mọi nơi',0],['Các tập tin có thể được truy cập từ bất cứ nơi nào có kết nối Internet',1],['Người dùng có thể luôn tổ chức và quản lý công việc giữa nhiều người',2],['Mọi người có thể cộng tác và chia sẻ thông tin theo thời gian thực, bất kể vị trí địa lí.',3]],why:"Email: liên lạc mọi lúc, mọi nơi · Lưu trữ đám mây: truy cập tập tin ở bất cứ đâu · Quản lý lịch: tổ chức công việc · Hội nghị truyền hình: cộng tác thời gian thực."}};
const Q_PLAT={q:"Với mỗi ví dụ về giao tiếp, em hãy chọn nền tảng giao tiếp kĩ thuật số thích hợp.",sort:{bins:[['Tin nhắn trực tiếp'],['Thư điện tử (Email)'],['Hội thảo Video']],items:[['Em cần gửi cho giáo viên một danh sách các câu hỏi lưu trong tập tin tài liệu Word.',1],['Họp nhóm trực tuyến với các bạn cùng lớp để cùng thực hiện một bài tập nhóm và để mỗi người đều có thể thấy được phần làm của người khác.',2],['Em có một câu hỏi ngắn cho bạn của mình và muốn được trả lời ngay.',0]],why:"Gửi tập tin cho giáo viên: Email · Họp nhóm thấy nhau: Hội thảo Video · Câu hỏi ngắn cần trả lời ngay: Tin nhắn trực tiếp."}};
const Q_VC={q:"Em sẽ sử dụng hội nghị truyền hình như thế nào để cộng tác kĩ thuật số trong một dự án nhóm?",o:["Để gửi các tập tin lớn cho các thành viên trong nhóm","Để thảo luận về nghiên cứu của mỗi thành viên đã thu thập","Để bỏ phiếu ẩn danh về một chủ đề dự án","Để theo dõi bất kì liên kết hoặc trang Web hữu ích nào"],a:1,why:"Hội nghị truyền hình giúp cả nhóm nói chuyện và thảo luận với nhau theo thời gian thực."};
const Q_PURP={q:"Với mỗi câu phát biểu về cộng tác kĩ thuật số, hãy chọn <b>Mục đích học tập</b> hoặc <b>Mục đích giải trí</b> để xác định trường hợp sử dụng đúng.",lab:["Học tập","Giải trí"],tf:["Thêm Emoji mặt cười vào tin nhắn của bạn","Tham gia hội thảo Video với giáo viên và các bạn cùng lớp","Chia sẻ Video hài hước cho bạn cùng lớp về một con gấu tuyết bị trượt trên băng"],a:[false,true,false],why:"Họp Video với giáo viên và các bạn là để học. Emoji và Video hài hước là để vui, giải trí."};

const QUIZ=[
 {q:"Em hãy cho biết, hình thức giao tiếp kĩ thuật số nào sau đây phù hợp nhất để nộp bài tập cho giáo viên?",o:["Gọi điện thoại.","Viết Blog.","Gửi Email.","Đăng bài trên Facebook."],a:2,why:"Email gửi được tập tin bài tập và giáo viên đọc khi thuận tiện."},
 {q:"Em hãy cho biết, hình thức giao tiếp kĩ thuật số nào sau đây phù hợp nhất để chia sẻ thông tin về một sự kiện khẩn cấp?",o:["Viết Blog.","Gửi Email.","Đăng bài trên Facebook.","Gọi điện thoại ."],a:3,why:"Việc gấp cần trao đổi trực tiếp và nhận phản hồi ngay, nên gọi điện thoại là phù hợp nhất."},
 {q:"Em hãy cho biết, lợi ích nào sau đây của giao tiếp kĩ thuật số đóng góp quan trọng cho sự phát triển của doanh nghiệp?",o:["Kết nối với bạn bè và gia đình.","Chia sẻ thông tin và kiến thức cá nhân.","Giải trí và thư giãn sau giờ làm việc.","Tiếp cận khách hàng tiềm năng và quảng bá sản phẩm."],a:3,why:"Doanh nghiệp dùng giao tiếp kĩ thuật số để tiếp cận khách hàng và quảng bá sản phẩm. Ba ý còn lại là việc cá nhân."},
 {q:"Em hãy cho biết, phương tiện nào sau đây KHÔNG phải là phương tiện truyền thông kĩ thuật số?",o:["Skype.","VoIP.","Gmail.","Chrome."],a:3,why:"Chrome là trình duyệt Web. Skype, VoIP và Gmail dùng để gọi, nhắn tin và gửi thư."},
 {q:"Em hãy cho biết, lợi ích nào sau đây KHÔNG phải là lợi ích của giao tiếp kĩ thuật số?",o:["Kết nối mọi người trên toàn thế giới.","Tiết kiệm thời gian và tiền bạc.","Gây nghiện và ảnh hưởng đến sức khỏe tinh thần.","Chia sẻ thông tin và kiến thức một cách nhanh chóng."],a:2,why:"Gây nghiện và ảnh hưởng sức khỏe tinh thần là điều bất lợi, không phải lợi ích."}
];

/* ---------- 5 thẻ học: nội dung, hình minh họa, bài tập nhỏ ---------- */
const THEORY=[
 {i:"💬",h:"Giao tiếp kĩ thuật số là gì?",
  t:"<b>Giao tiếp kĩ thuật số giữa các cá nhân</b> là việc <b>chia sẻ hoặc kết nối với mọi người</b> bằng các <b>thiết bị kĩ thuật số</b>.",
  e:"",
  v:'<div class="rdwrap"><button class="btn rd" id="rd">➕ Xem thêm ví dụ</button><span class="rdn" id="rdn"></span></div><div class="exs" id="exs"></div>',
  after:readExamples},
 {i:"⏱️",h:"Thời gian thực và thời gian có độ trễ",
  t:"Khi chúng ta hỏi một câu và được trả lời ngay, đó là <b>giao tiếp thời gian thực</b> (<b>giao tiếp đồng bộ</b>). Còn khi chúng ta để lại lời nhắn và phải đợi một lúc sau mới có câu trả lời, đó gọi là <b>giao tiếp có độ trễ</b> (<b>giao tiếp không đồng bộ</b>).</p><p>Hãy cùng tìm hiểu kỹ hơn về hai cách giao tiếp này nhé!",
  e:"",
  v:'<div class="exs" id="rcs"></div>',
  after:readCompare},
 {i:"🛠️",h:"Công nghệ hỗ trợ giao tiếp",
  t:"Mỗi công nghệ giúp ích theo một cách riêng. Hãy xem một số ví dụ.",
  e:"",
  v:'<div class="tcs" id="gcs"></div>',
  after:readTech},
 {i:"🎯",h:"Chọn phương tiện phù hợp",
  t:"Hãy chọn phương tiện giao tiếp kĩ thuật số <b>phù hợp với mục đích giao tiếp</b>. Mục đích có thể là <b>học tập</b> hoặc <b>giải trí</b>.",
  e:"Việc gấp → gọi thoại · Hỏi ngắn → tin nhắn nhanh · Có tập tin đính kèm → Email · Họp nhóm → họp Video.",
  v:pic('chon-pt.jpg','Email, tin nhắn nhanh, họp Video, gọi thoại, mạng xã hội')},
 {i:"🤖",h:"AI hỗ trợ gợi ý nội dung",
  t:"AI có thể hỗ trợ <b>chỉnh giọng điệu</b> hay gợi ý nội dung tin nhắn, nhưng em phải <b>kiểm tra trước khi gửi</b>. <b>Không dùng AI để mạo danh</b> hoặc làm tổn thương người khác.",
  e:"AI gợi ý – em đọc lại – rồi mới gửi.",
  v:pic('ai.png','Gemini gợi ý nội dung tin nhắn hỏi bài cô giáo')+'<div class="tags"><span class="tag ok">✔ Kiểm tra trước khi gửi</span><span class="tag no">✘ Mạo danh người khác</span><span class="tag no">✘ Làm tổn thương người khác</span></div>'}
];
const PRACT=[
 [Q_DEF,Q_TF1,Q_TF2,Q_TF3],
 [{q:"Em hãy phân loại mỗi hình thức giao tiếp vào đúng nhóm: giao tiếp thời gian thực hay giao tiếp có độ trễ.",sort:{bins:[['Thời gian thực (đồng bộ)'],['Có độ trễ (không đồng bộ)']],items:[['Gọi điện thoại',0],['Video call',0],['Hội nghị truyền hình',0],['Gửi Email',1],['Nhắn tin văn bản',1]],why:"Gọi điện thoại, Video call, hội nghị truyền hình cần phản hồi ngay nên là thời gian thực. Email và tin nhắn văn bản mất một thời gian mới đến người nhận nên có độ trễ."}},Q_ASYNC],
 [Q_TECH],
 [Q_PLAT,Q_VC,Q_PURP],
 [{q:"AI gợi ý một tin nhắn cho em gửi cô giáo. Việc em <b>cần làm</b> trước khi gửi là gì?",o:["Gửi ngay, không cần đọc lại","Đọc lại và kiểm tra nội dung","Dùng AI giả làm bạn khác để nhắn","Nhờ AI viết lời chê bạn"],a:1,why:"AI có thể hỗ trợ chỉnh giọng điệu nhưng em phải kiểm tra trước khi gửi, và không dùng AI để mạo danh hay làm tổn thương người khác."}]
];

/* ---------- phần luyện tập: 9 câu trong lớp (A) + 5 câu trắc nghiệm (B) ---------- */
const PRACTICE=[
 ...[Q_DEF,Q_TF1,Q_TF2,Q_TF3,Q_ASYNC,Q_TECH,Q_PLAT,Q_VC,Q_PURP].map(q=>({q,p:'A'})),
 ...QUIZ.map(q=>({q,p:'B'}))
];

/* ---------- trạng thái ---------- */
const N=THEORY.length;
const state={view:-1, read:new Array(N).fill(false), stars:null, prac:null, pq:{}, po:{}};   // pq: câu đang làm của bài tập nhỏ mỗi bài; prac: {order,qi,wrong} để làm tiếp phần luyện tập   // view: -1 mở đầu, 0..N-1 bài học, N luyện tập, N+1 kết quả
try{ const s=JSON.parse(localStorage.getItem('k5b24v2')||'null'); if(s&&s.read&&s.read.length===N){ state.read=s.read; state.stars=s.stars; state.prac=s.prac||null; state.pq=s.pq||{}; state.po=s.po||{}; if(s.stars!==null&&s.stars!==undefined) state.view=N+1; else { const f=s.read.indexOf(false); state.view=f<0?N:f; } } }catch(e){}
let TEACH=false; try{ TEACH=localStorage.getItem('k5b24_teach')==='1'; }catch(e){}
const save=()=>{ try{localStorage.setItem('k5b24v2',JSON.stringify({read:state.read,stars:state.stars,prac:state.prac,pq:state.pq,po:state.po}))}catch(e){} };
const allRead=()=>state.read.every(Boolean);
const unlockedTo=()=>{ if(TEACH) return N; const i=state.read.indexOf(false); return i<0?N:i; };   // bài cuối được mở; N = đã mở phần luyện tập
function restart(force){
  if(!force && !confirm('Em muốn làm lại từ đầu? Tiến độ đã lưu sẽ bị xóa.')) return;
  state.read=new Array(N).fill(false); state.stars=null; state.prac=null; state.pq={}; state.po={}; state.view=-1; save(); render();
}
const toast=m=>{ const t=el('<div class="toast">'+m+'</div>'); document.body.appendChild(t); setTimeout(()=>t.remove(),2200); };
let fresh=-2, keepScroll=false;   // chỉ số mục vừa được mở khóa (để chạy hiệu ứng)
function fb(node,kind,html){ node.className='fb show '+kind; node.innerHTML=html; }

function renderInbox(){
  const box=$('#inbox'), u=unlockedTo();
  box.innerHTML='<h4>📥 Bài học</h4>';
  const lockedMsg=n=>toast('🔒 Hoàn thành '+n+' để mở khóa bài này nhé!');
  const mk=(cls,icon,title,sub,st,idx,go,lockedBy)=>{
    const lk=cls.includes('locked');
    const b=el('<button class="mail '+cls+(fresh===idx?' fresh':'')+'"><span class="av">'+icon+'</span><span class="tx"><b>'+title+'</b><small>'+sub+'</small></span><span class="st">'+st+'</span></button>');
    b.onclick=()=>{ if(lk){ b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); lockedMsg(lockedBy); return; } go(); };
    return b;
  };
  THEORY.forEach((c,i)=>{
    const lk=i>u, rd=state.read[i];
    box.appendChild(mk((state.view===i?'cur ':'')+(rd?'done ':'')+(lk?'locked':''),c.i,c.h,'',rd?'✅':lk?'🔒':'🔓',i,()=>{ state.view=i; render(); },i>0?'“'+THEORY[i-1].h+'”':''));
  });
  box.insertAdjacentHTML('beforeend','<h4>🎯 Luyện tập</h4>');
  const done=state.stars!==null, open=allRead()||TEACH;
  box.appendChild(mk((state.view>=N?'cur ':'')+(done?'done ':'')+(open?'':'locked'),'🎯','Ôn tập và trắc nghiệm',PRACTICE.length+' câu',done?'✅':open?'🔓':'🔒',N,()=>{ state.view=done?N+1:N; render(); },'cả 5 bài học'));
  fresh=-2;
  $('#starCount').textContent=state.stars||0;
}
function render(){
  renderInbox();
  const v=$('#view'); v.innerHTML=''; if(!keepScroll) window.scrollTo({top:0,behavior:'smooth'}); keepScroll=false;
  if(state.view<0) return intro(v);
  if(state.view<N) return lesson(v,state.view);
  if(state.view===N) return practice(v);
  finale(v);
}

/* ---------- mở đầu ---------- */
function intro(v){
  v.innerHTML=`<div class="hero"><div class="big">💬</div><h2>Giao tiếp kĩ thuật số</h2>
  <div id="cbhost"></div>
  <div class="plan"><div><b>📖 Học (15 phút)</b><br>5 bài ngắn, mỗi bài có bài tập nhỏ</div><div><b>🎯 Luyện tập (15 phút)</b><br>9 câu ôn tập và 5 câu trắc nghiệm</div><div><b>⭐ Sao</b><br>Ít sai thì được nhiều sao, tối đa 3 ⭐</div></div>
  <p class="meta" style="justify-content:center">Chọn bài ở danh sách bên trái. Đọc xong bài trước mới mở bài sau. Tiến độ được lưu trên máy của em.</p>
  <button class="btn go" id="go">Bắt đầu học ▶</button></div>`;
  introChat($('#cbhost'));
  $('#go').onclick=()=>{ state.view=0; render(); };
}

/* ---------- một bài học: đọc rồi làm bài tập nhỏ ---------- */
function lesson(v,i){
  const c=THEORY[i];
  v.innerHTML='<div class="path">'+THEORY.map((_,k)=>(k?'<i class="ln'+(state.read[k-1]?' done':'')+'"></i>':'')+'<span class="nd'+(state.read[k]?' done':k===i?' cur':'')+'">'+(state.read[k]?'✓':k+1)+'</span>').join('')+'</div>'+'<div class="meta">'+(state.read[i]?'<span>✅ Đã hoàn thành</span>':'')+'</div><h2>'+c.i+' '+c.h+'</h2><div class="prog"><i style="width:'+(state.read.filter(Boolean).length/N*100)+'%"></i></div>'+
    '<div class="msg"><p>'+c.t+'</p>'+(c.v||'')+(c.e?'<div class="eg">💡 '+c.e+'</div>':'')+'</div><div id="pr"></div><div class="row" id="act" style="margin-top:14px;justify-content:center"></div>';
  const pq0=state.pq[i]||0;
  if(c.after) c.after(state.read[i]||pq0>0);
  const act=$('#act');
  const nextBtn=()=>{ const last=i===N-1; act.innerHTML='<button class="btn go" id="nx">'+(last?'Sang phần luyện tập ▶':'Tiếp tục ▶')+'</button>'; $('#nx').onclick=()=>{ state.view=last?N:i+1; render(); }; };
  if(state.read[i]){   // đã xong: vẫn hiện bài tập, ở dạng đã giải
    $('#pr').innerHTML='<div class="practice"><div class="ph"><span>✏️ Bài tập nhỏ</span><span>✅ Đã làm xong</span></div><div class="pb" id="ph"></div></div>';
    const L=PRACT[i], ph=$('#ph'); let si=0;
    const show=()=>{
      ph.innerHTML='<div class="solved"></div>'+(L.length>1?'<div class="snav"><button class="btn" id="sp"'+(si?'':' disabled')+'>◀ Câu trước</button><b>Câu '+(si+1)+'/'+L.length+'</b><button class="btn" id="sn"'+(si<L.length-1?'':' disabled')+'>Câu sau ▶</button></div>':'');
      solvedQ(L[si],ph.firstChild);
      if(L.length>1){ $('#sp').onclick=()=>{ si--; show(); }; $('#sn').onclick=()=>{ si++; show(); }; }
    };
    show();
    return nextBtn();
  }
  const startPractice=()=>{
    act.innerHTML=''; if(!state.po[i]) state.po[i]=shuffle(PRACT[i].map((_,k)=>k)); const list=state.po[i].map(k=>PRACT[i][k]); let qn=Math.min(pq0,list.length-1); const pr=$('#pr');
    pr.innerHTML='<div class="practice"><div class="ph"><span>✏️ Bài tập nhỏ</span><span id="cnt"></span></div><div class="pb" id="ph"></div></div>';
    const next=()=>{
      state.pq[i]=qn; save();
      $('#cnt').textContent=list.length>1?'Câu '+(qn+1)+'/'+list.length:'';
      askQ(list[qn],$('#ph'),()=>{},fx=>{
        const last=qn===list.length-1;
        fx.insertAdjacentHTML('afterend','<div class="nxrow"><button class="btn go" id="c">'+(last?'Hoàn thành bài ✔':'Câu tiếp ▶')+'</button></div>');
        $('#c').onclick=()=>{ if(!last){ qn++; next(); } else { state.read[i]=true; delete state.pq[i]; delete state.po[i]; save(); fresh=i+1; keepScroll=true; render(); toast(i<N-1?"🔓 Đã mở khóa: "+THEORY[i+1].h:"🔓 Đã mở khóa phần Luyện tập!"); } };
      });
    };
    next(); if(!pq0) pr.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  act.innerHTML='<button class="btn" id="ok">Em đã hiểu ✓</button>';
  if(i===0||i===2) $('#ok').hidden=true;   // bài 1 và 3: chỉ hiện sau khi xem hết ví dụ
  $('#ok').onclick=startPractice;
  if(pq0>0) startPractice();   // đang làm dở bài tập: mở lại đúng câu
}

/* ---------- luyện tập: ôn tập + trắc nghiệm gộp một mạch ---------- */
function practice(v){
  if(!state.prac){ const A=PRACTICE.map((_,i)=>i).filter(i=>PRACTICE[i].p==='A'), B=PRACTICE.map((_,i)=>i).filter(i=>PRACTICE[i].p==='B'); state.prac={order:shuffle(A.concat(B)),qi:0,wrong:0}; save(); }
  const qs=state.prac.order.map(i=>({q:shuffleQ(PRACTICE[i].q),p:PRACTICE[i].p})); let qi=Math.min(state.prac.qi,qs.length-1), wrong=state.prac.wrong;
  const PN={A:'Ôn tập và trắc nghiệm',B:'Ôn tập và trắc nghiệm'};
  function draw(){
    v.innerHTML='<div class="chead"><h2 style="margin:0">🎯 Luyện tập</h2><span class="part">'+PN[qs[qi].p]+'</span></div><div class="meta">Câu '+(qi+1)+'/'+qs.length+'</div><div class="prog"><i style="width:'+(qi/qs.length*100)+'%"></i></div><div id="qh"></div>';
    askQ(qs[qi].q,$('#qh'),()=>{wrong++; state.prac.wrong=wrong; save();},f=>{
      if(qi<qs.length-1){ f.insertAdjacentHTML('afterend','<div class="nxrow"><button class="btn go" id="nq">Câu tiếp ▶</button></div>'); $('#nq').onclick=()=>{qi++; state.prac.qi=qi; save(); draw();}; }
      else { state.stars=wrong<=3?3:wrong<=8?2:1; state.prac=null; save(); f.insertAdjacentHTML('afterend','<div class="nxrow"><b>Em đã làm xong! Số lần chọn sai: '+wrong+'.</b> <button class="btn go" id="nq">Xem kết quả 🏅</button></div>'); $('#nq').onclick=()=>{ state.view=N+1; render(); }; }
    });
  }
  draw();
}
function finale(v){
  const s=state.stars||0, rank=s>=3?'Bạn giao tiếp số xuất sắc':s>=2?'Bạn giao tiếp số giỏi':'Bạn giao tiếp số tập sự';
  v.innerHTML=`<div class="hero"><div class="big">🏅</div><h2>${rank}</h2><p><b>${'⭐'.repeat(s)}${'☆'.repeat(3-s)}</b></p>
  <div class="plan"><div><b>Khái niệm</b><br>Chia sẻ hoặc kết nối với mọi người bằng thiết bị kĩ thuật số.</div><div><b>Thời gian thực</b><br>Đồng bộ, cần phản hồi ngay: gọi điện thoại, Video call.</div><div><b>Có độ trễ</b><br>Không đồng bộ: Email, tin nhắn văn bản.</div><div><b>Chọn phương tiện</b><br>Gấp → gọi thoại · Hỏi ngắn → tin nhắn · Có tập tin → Email · Họp nhóm → Video.</div><div><b>AI</b><br>Em kiểm tra trước khi gửi; không mạo danh, không làm tổn thương người khác.</div></div>
  <button class="btn" id="again">Học lại từ đầu</button></div>`;
  $('#again').onclick=()=>restart(true);
}

/* ---------- câu hỏi dùng chung ---------- */
function askQ(Q, host, onWrong, onDone){
  host.innerHTML='<div class="qtext">'+Q.q+'</div><div class="ops"></div><div class="fb"></div>';
  const ops=host.querySelector('.ops'), f=host.querySelector('.fb'); let done=false;
  const win=()=>{ done=true; fb(f,'ok','✔ Đúng rồi! '+(Q.why||'')); onDone(f); };
  const lose=msg=>{ onWrong(); fb(f,'no',msg); };
  if(Q.sort){
    sortGame(ops,Q.sort,()=>onWrong(),sf=>{ done=true; onDone(sf); });
  } else if(Q.tf){
    const sel=Q.tf.map(()=>null), rows=[]; const LB=Q.lab||['Đúng','Sai'];
    Q.tf.forEach((s,k)=>{
      const r=el('<div class="tfrow"><div class="s">'+s+'</div><button class="chip" data-v="1">'+LB[0]+'</button><button class="chip" data-v="0">'+LB[1]+'</button></div>');
      r.querySelectorAll('.chip').forEach(b=>b.onclick=e=>{ e.stopPropagation(); if(done) return; sel[k]=b.dataset.v==='1';
        r.querySelectorAll('.chip').forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); r.classList.remove('bad'); });
      rows.push(r); ops.appendChild(r); });
    const chk=el('<button class="btn">Kiểm tra</button>'); ops.appendChild(chk);
    chk.onclick=e=>{ e.stopPropagation(); if(done) return;
      if(sel.some(v=>v===null)) return fb(f,'info','Hãy chọn đáp án cho tất cả các dòng.');
      let bad=0; rows.forEach((r,k)=>{ const ok=sel[k]===Q.a[k]; r.classList.toggle('good',ok); r.classList.toggle('bad',!ok); if(!ok) bad++; });
      if(bad) lose('Có '+bad+' dòng chưa đúng (viền đỏ). Hãy sửa lại.'); else { chk.disabled=true; win(); } };
  } else {
    Q.o.forEach((t,k)=>{ const b=el('<button class="opt"><b>'+'ABCD'[k]+'.</b> '+t+'</button>');
      b.onclick=e=>{ e.stopPropagation(); if(done||b.classList.contains('bad')) return;
        if(k===Q.a){ b.classList.add('good'); win(); } else { b.classList.add('bad'); lose('Chưa đúng, hãy chọn lại.'); } };
      ops.appendChild(b); });
  }
}
/* câu hỏi ở dạng đã giải (bài đã hoàn thành) */
function solvedQ(Q,host){
  let h='<div class="qtext">'+Q.q+'</div><div class="ops">';
  if(Q.sort){
    h+='<div class="bins '+(Q.sort.bins.length===2||Q.sort.bins.length===4?'c2':'c3')+'">'+Q.sort.bins.map((b,i)=>'<div class="bin"><h3>'+b[0]+'</h3><small>'+(b[1]||'')+'</small><div class="in">'+Q.sort.items.filter(x=>x[1]===i).map(x=>'<span class="chip good">'+x[0]+'</span>').join('')+'</div></div>').join('')+'</div>';
  } else if(Q.tf){
    const LB=Q.lab||['Đúng','Sai'];
    h+=Q.tf.map((t,k)=>'<div class="tfrow good"><div class="s">'+t+'</div><span class="chip'+(Q.a[k]?' sel':'')+'">'+LB[0]+'</span><span class="chip'+(Q.a[k]?'':' sel')+'">'+LB[1]+'</span></div>').join('');
  } else {
    h+=Q.o.map((t,k)=>'<div class="opt'+(k===Q.a?' good':'')+'"><b>'+'ABCD'[k]+'.</b> '+t+'</div>').join('');
  }
  host.innerHTML=h+'</div><div class="fb show ok">✔ '+(Q.why||'')+'</div>';
}
/* xáo trộn thứ tự đáp án */
function shuffleQ(Q){
  if(!Q.o || Q.o.length<3) return Q;
  const idx=shuffle(Q.o.map((_,i)=>i));
  return Object.assign({},Q,{o:idx.map(i=>Q.o[i]),a:idx.indexOf(Q.a)});
}

/* ---------- trò chơi phân loại: chạm thẻ rồi chạm ô, hoặc kéo thả ---------- */
function sortGame(host, cfg, onWrong, onDone){
  const items=shuffle(cfg.items.map(([t,b],id)=>({id,t,b,loc:'pool',locked:false})));
  let picked=null;
  host.innerHTML=`<div class="pool" id="pool"></div><div class="bins ${cfg.bins.length===2||cfg.bins.length===4?'c2':'c3'}" id="bins">${cfg.bins.map((b,i)=>`<div class="bin" data-b="${i}"><h3>${b[0]}</h3><small>${b[1]||''}</small><div class="in"></div></div>`).join('')}</div>
    <div class="row" style="margin-top:12px"><button class="btn" id="chk" disabled>Kiểm tra</button></div><div class="fb" id="sfb"></div>`;
  const pool=host.querySelector('#pool'), bins=[...host.querySelectorAll('.bin')], chk=host.querySelector('#chk'), f=host.querySelector('#sfb');
  function chipEl(it){
    const c=el('<button class="chip'+(picked===it.id?' sel':'')+(it.locked?' good':'')+'">'+it.t+'</button>');
    if(!it.locked){
      c.draggable=true;
      c.ondragstart=e=>{ e.dataTransfer.setData('text/plain',it.id); picked=it.id; };
      c.onclick=e=>{ e.stopPropagation(); if(it.loc==='pool'){ picked=picked===it.id?null:it.id; } else { it.loc='pool'; picked=null; } draw(); };
    }
    return c;
  }
  function draw(){
    pool.innerHTML=''; items.filter(i=>i.loc==='pool').forEach(i=>pool.appendChild(chipEl(i)));
    pool.classList.toggle('empty',!items.some(i=>i.loc==='pool'));
    bins.forEach(b=>{ const inn=b.querySelector('.in'); inn.innerHTML=''; items.filter(i=>i.loc===+b.dataset.b).forEach(i=>inn.appendChild(chipEl(i))); b.classList.toggle('hot',picked!==null); });
    chk.disabled = items.some(i=>i.loc==='pool');
  }
  function place(id,to){ const it=items.find(x=>x.id==id); if(!it||it.locked) return; it.loc=to; picked=null; draw(); }
  bins.forEach(b=>{
    b.onclick=()=>{ if(picked!==null) place(picked,+b.dataset.b); };
    b.ondragover=e=>{ e.preventDefault(); b.classList.add('over'); };
    b.ondragleave=()=>b.classList.remove('over');
    b.ondrop=e=>{ e.preventDefault(); b.classList.remove('over'); place(e.dataTransfer.getData('text/plain'),+b.dataset.b); };
  });
  pool.ondragover=e=>e.preventDefault();
  pool.ondrop=e=>{ e.preventDefault(); place(e.dataTransfer.getData('text/plain'),'pool'); };
  chk.onclick=()=>{
    let bad=0; items.forEach(it=>{ if(it.loc===it.b) it.locked=true; else bad++; });
    if(!bad){ draw(); chk.disabled=true; fb(f,'ok','✔ Đúng hết rồi! '+(cfg.why||'')); onDone(f); }
    else { onWrong(); fb(f,'no','Có '+bad+' thẻ chưa đúng. Thẻ đúng đã được khóa màu xanh, các thẻ còn lại quay về khay để em xếp lại.');
      chk.disabled=true; bins.forEach(b=>b.querySelectorAll('.chip:not(.good)').forEach(c=>c.classList.add('bad')));
      setTimeout(()=>{ items.forEach(it=>{ if(!it.locked) it.loc='pool'; }); draw(); },900); }
  };
  draw();
}


let fsz=22; try{ fsz=+localStorage.getItem('k5b24fontsize')||22 }catch(e){}
const setSize=px=>{ fsz=Math.max(18,Math.min(30,px)); document.documentElement.style.fontSize=fsz+'px'; try{localStorage.setItem('k5b24fontsize',fsz)}catch(e){} };
setSize(fsz);
$('#fsm').onclick=()=>setSize(fsz-2); $('#fbg').onclick=()=>setSize(fsz+2);
$('#restart').onclick=()=>restart();
/* Chế độ giáo viên: hiện luôn đáp án đúng (viền cam + chữ ✅) */
(function(){
  const oAsk=askQ, oSort=sortGame;
  askQ=function(Q,host,w,d){
    oAsk(Q,host,w,d); if(!TEACH) return;
    if(Q.tf) host.querySelectorAll('.tfrow').forEach((r,k)=>{ const c=r.querySelector('[data-v="'+(Q.a[k]?1:0)+'"]'); if(c) c.classList.add('tkey'); });
    else if(Q.o) host.querySelectorAll('.opt').forEach((b,k)=>{ if(k===Q.a) b.classList.add('tkey'); });
  };
  sortGame=function(host,cfg,w,d){
    oSort(host,cfg,w,d); if(!TEACH) return;
    host.insertAdjacentHTML('beforeend','<div class="tkey-box"><b>✅ Đáp án:</b> '+cfg.bins.map((b,i)=>'<div><b>'+b[0]+':</b> '+cfg.items.filter(x=>x[1]===i).map(x=>x[0]).join(' · ')+'</div>').join('')+'</div>');
  };
})();
/* Nhấp chuột phải hai lần liên tiếp vào ⭐ góc trên bên phải: giáo viên mở/khóa tất cả */
(function(){
  let last=0;
  $('#score').addEventListener('contextmenu',e=>{
    e.preventDefault();
    const now=Date.now(); if(now-last>=600){ last=now; return; }
    last=0; TEACH=!TEACH; try{ localStorage.setItem('k5b24_teach',TEACH?'1':'0'); }catch(x){}
    render();
    const t=el('<div style="position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#333;color:#fff;padding:10px 18px;border-radius:12px;z-index:9999;font-weight:700">'+(TEACH?'🔓 Đã mở khóa tất cả':'🔒 Đã khóa lại')+'</div>');
    document.body.appendChild(t); setTimeout(()=>t.remove(),1800);
  });
})();
render();
/* chế độ sáng / tối */
(function(){
  const root=document.documentElement, b=$('#theme');
  const paint=()=>{ b.textContent=root.dataset.theme==='dark'?'☀️ Sáng':'🌙 Tối'; };
  b.onclick=()=>{ root.dataset.theme=root.dataset.theme==='dark'?'light':'dark'; try{ localStorage.setItem('k5theme',root.dataset.theme); }catch(e){} paint(); };
  paint();
})();

/* ---------- khung chat: tin nhắn có giờ, dấu ✓✓, đang soạn tin, trả lời nhanh bằng thẻ chọn ---------- */
function chatBox(host,o){
  host.innerHTML='<div class="cb"><div class="cbh"><span class="cba">'+o.avatar+'</span><div><b>'+o.name+'</b><small><i class="dot"></i> '+o.status+'</small></div></div><div class="cbm" id="cbm" aria-live="polite"></div><div class="cbq" id="cbq"></div><div class="cbi"><span>Chọn một câu trả lời bên trên…</span><b>➤</b></div></div>';
  const m=host.querySelector('#cbm'), q=host.querySelector('#cbq');
  const clock=()=>{ const d=new Date(); return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'); };
  const add=(side,text)=>{ const d=el('<div class="bub '+(side==='me'?'r':'l')+'">'+text+'<span class="tm">'+clock()+(side==='me'?' ✓✓':'')+'</span></div>'); m.appendChild(d); m.scrollTop=m.scrollHeight; return d; };
  const typing=()=>{ const d=el('<div class="bub l typing"><i></i><i></i><i></i></div>'); m.appendChild(d); m.scrollTop=m.scrollHeight; return d; };
  const them=(text,cb)=>{ const t=typing(); setTimeout(()=>{ t.remove(); add('them',text); if(cb) cb(); },800); };
  o.start(them,add,q);
}
function introChat(host){
  chatBox(host,{avatar:'👩‍🏫',name:'Cô Lan',status:'đang hoạt động',start:(them,add,q)=>{
    const chips=(list,done)=>{ q.innerHTML=''; list.forEach(([t,reply,ok,msg])=>{ const b=el('<button class="chip">'+t+'</button>'); b.onclick=()=>{ q.innerHTML=''; add('me',msg||t); them(reply,ok?done:()=>chips(list,done)); }; q.appendChild(b); }); };
    them('Chào em! Cô cần em nộp bài tập Toán hôm nay.',()=>them('Em sẽ gửi bài cho cô bằng cách nào nhỉ?',()=>chips([
      ['📧 Gửi Email','Giỏi lắm! Em gửi Email kèm tập tin bài làm, cô sẽ nhận được và đọc ngay khi có thời gian. Giờ mình cùng học tiếp nhé! 🎉',true,'Dạ em sẽ gửi Email cho cô ạ.'],
      ['📞 Gọi điện thoại','Gọi điện thì bài tập chưa đến tay cô được. Em thử cách khác nhé!',false,'Dạ em sẽ gọi điện thoại cho cô ạ.'],
      ['📣 Đăng bài lên Facebook','Đăng công khai chưa phù hợp để nộp bài. Em thử cách khác nhé!',false,'Dạ em sẽ đăng bài lên Facebook cho cô ạ.']
    ],()=>{})));
  }});
}

/* ---------- bài 3: xem từng ví dụ theo hướng dẫn, mỗi bước có lời nhắc; xong ví dụ này mới mở ví dụ sau ---------- */
function readTech(all){
  const ROW=(l,v,b)=>'<div class="gmr"><i>'+l+'</i><'+(b?'b':'span')+'>'+v+'</'+(b?'b':'span')+'></div>';
  const TECH=[
    {i:'📧',h:'Email',u:'Nhân viên có thể gửi và nhận thông tin liên lạc mọi lúc, mọi nơi',
     wrap:'<div class="gm"><div class="gmt"><span>✉️ Thư mới</span><span class="gmx">_ ⤢ ✕</span></div><div class="gslot"></div></div>',
     steps:[
      {h:ROW('Từ','An Nguyễn &lt;an.nguyen@truonghoc.edu.vn&gt;')+ROW('Đến','cô Lan &lt;co.lan@truonghoc.edu.vn&gt;'),tip:'Bước 1: An điền địa chỉ Email của cô Lan vào ô “Đến”.'},
      {h:ROW('Chủ đề','Nộp bài tập Toán - An lớp 5A',1),tip:'Bước 2: An ghi chủ đề ngắn gọn để cô biết thư nói về việc gì.'},
      {h:'<div class="gmb"><p>Kính gửi cô Lan,</p><p>Em gửi cô bài tập Toán hôm nay của em ạ. Em cảm ơn cô!</p><p>Học sinh An</p></div>',tip:'Bước 3: An viết nội dung thư lịch sự.'},
      {h:'<div class="gmf"><span class="gmatt"><span class="gmic">W</span><span><b>bai-toan.docx</b><small>24 KB</small></span></span></div>',tip:'Bước 4: An đính kèm tập tin bài làm vào thư.'},
      {h:'<div class="gms"><b>Gửi</b><span>📎 🙂 🖼️</span></div>',tip:'Bước 5: An bấm “Gửi”. Cô Lan đọc thư lúc nào cũng được, ở đâu cũng được. Đó là lợi ích của Email.'}]},
    {i:'☁️',h:'Cloud Storage (Lưu trữ đám mây)',u:'Các tập tin có thể được truy cập từ bất cứ nơi nào có kết nối Internet',
     wrap:'<div class="gslot gcol"></div>',
     steps:[
      {h:'<div class="bub l">Mình đã tải bài nhóm lên Drive rồi, bạn bấm vào đường dẫn này nhé!<div class="lnk"><span class="lnki">☁️</span><span><b>bao-cao-nhom.docx</b><small>drive.google.com/file/d/1AbC-bao-cao-nhom</small></span></div></div>',tip:'Bước 1: Bạn của em tải tập tin lên đám mây và gửi đường dẫn (link) cho cả nhóm.'},
      {h:'<div class="bub r">Mình mở được ở nhà rồi, cảm ơn bạn!</div>',tip:'Bước 2: Em có Internet là mở được tập tin, dù đang ở nhà hay ở trường.'}]},
    {i:'📅',h:'Calendars &amp; Scheduling Software (Phần mềm quản lý lịch)',u:'Người dùng có thể luôn tổ chức và quản lý công việc giữa nhiều người',
     wrap:'<div class="gslot gcol"></div>',
     steps:[
      {h:'<div class="bub l">Khi nào cả nhóm họp được nhỉ?</div>',tip:'Bước 1: Cả nhóm cần chọn một giờ họp chung.'},
      {h:'<div class="bub r">Mình đã tạo lịch cho cả nhóm rồi!<div class="att">📅 Họp nhóm · Thứ Năm, 15:00 · 🔔 Nhắc trước 10 phút</div></div>',tip:'Bước 2: Phần mềm quản lý lịch giúp tổ chức công việc và nhắc mọi người đúng giờ.'}]},
    {i:'🎥',h:'Video Conferencing (Hội nghị truyền hình)',u:'Mọi người có thể cộng tác và chia sẻ thông tin theo thời gian thực, bất kể vị trí địa lí.',
     wrap:'<div class="gslot gcol"></div>',
     steps:[
      {h:'<div class="vc"><div class="vct"><span>🔒 Họp nhóm Khoa học · 5A</span><span class="vcr">● 12:34</span></div><div class="vcs"><div class="vsh"><div class="vsb">🖥️ Cô Hoa đang chia sẻ màn hình</div><div class="vsl"><b>Vòng tuần hoàn của nước</b><span>☀️ Bay hơi → ☁️ Ngưng tụ → 🌧️ Mưa</span></div></div><div class="vcg"><div class="vt sp"><i style="background:#8d6cc9">👩</i><b>Cô Hoa</b></div><div class="vt"><i style="background:#f4a261">👧</i><b>Lan (em)</b></div><div class="vt"><i style="background:#2a9d8f">👦</i><b>Nam</b></div><div class="vt"><i style="background:#e76f51">🧒</i><b>Minh</b><u class="off">🔇</u></div></div></div><div class="vcb"><span>🎤</span><span>📷</span><span>🖥️ Chia sẻ</span><span>✋</span><span>💬</span><span class="end">📞 Rời</span></div></div>',tip:''}]}
  ];
  const box=$('#gcs'); let done=0;
  const finish=()=>{ const ok=$('#ok'); if(ok) ok.hidden=false; };
  const openCard=(ci,quiet)=>{
    const T=TECH[ci];
    const c=el('<div class="tc"><div class="tch"><span>'+T.i+'</span><div><b>'+T.h+'</b><small>'+T.u+'</small></div><span class="gck"></span></div><div class="mini">'+T.wrap+'</div><div class="gnav"><button class="btn exbtn">👀 Xem ví dụ</button></div></div>');
    box.appendChild(c);
    const slot=c.querySelector('.gslot'), btn=c.querySelector('.exbtn');
    btn.onclick=()=>{
      slot.innerHTML=T.steps.map(S=>S.h).join('');
      btn.parentNode.remove(); c.querySelector('.gck').textContent='✅'; done++;
      if(!quiet) slot.scrollIntoView({behavior:'smooth',block:'nearest'});
      if(ci<TECH.length-1) openCard(ci+1,quiet); else finish();
    };
    if(quiet) btn.onclick();
  };
  openCard(0,!!all);
}

/* ---------- bài 2: hai thẻ (nửa trái / nửa phải của real-delay.png), bấm vào mới hiện ---------- */
function readCompare(all){
  const CD=[{t:'Thời gian thực',pos:'0 0'},{t:'Thời gian có độ trễ',pos:'100% 0'}];
  const box=$('#rcs');
  const open=(i,slot,quiet)=>{
    const d=el('<div class="ex"><div class="exi" role="img" aria-label="'+CD[i].t+'" style="aspect-ratio:744/318;background-image:url(img/real-delay.png);background-size:200% auto;background-position:'+CD[i].pos+'"></div></div>');
    slot.replaceWith(d); if(!quiet) d.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  CD.forEach((c,i)=>{
    const s=el('<div class="ex empty next"><div class="exe"><span>'+(i+1)+'</span>'+c.t+'<small>Bấm vào đây để xem</small></div></div>');
    s.onclick=()=>open(i,s,false); box.appendChild(s);
    if(all) open(i,s,true);
  });
}

/* ---------- bài 1: bấm "Xem thêm" để lần lượt hiện từng ví dụ vào 3 khung có sẵn (ảnh cắt từ vi-du.jpg) ---------- */
function readExamples(all){
  const EX=[
    {t:'Email cho giáo viên',d:'Hỏi về bài tập',c:'green',bg:'310% auto',pos:'1.9% 0'},
    {t:'Cuộc họp Video',d:'Trao đổi giữa hai nhóm',c:'blue',bg:'323% auto',pos:'50.3% 0'},
    {t:'Tin nhắn văn bản',d:'Giữa bố và mẹ',c:'violet',bg:'315% auto',pos:'98% 0'}
  ];
  const b=$('#rd'), box=$('#exs'), n=$('#rdn'); let k=0, quiet=false;
  b.hidden=true;   // nút "Xem thêm ví dụ" được thay bằng chính khung trống kế tiếp
  n.textContent='0/'+EX.length;
  EX.forEach((_,i)=>box.appendChild(el('<div class="ex empty"><div class="exe"><span>'+(i+1)+'</span>Ví dụ '+(i+1)+'<small>Bấm vào đây để xem ví dụ</small></div></div>')));
  const arm=()=>{ const s=box.children[k]; if(s&&s.classList.contains('empty')){ s.classList.add('next'); s.onclick=b.onclick; } };
  b.onclick=()=>{
    if(k>=EX.length) return;
    const x=EX[k++], slot=box.children[k-1];
    const d=el('<div class="ex '+x.c+'"><div class="exi" role="img" aria-label="'+x.t+'" style="background-image:url(img/vi-du.jpg);background-size:'+x.bg+';background-position:'+x.pos+'"></div><div class="ext"><span class="exn">Ví dụ '+k+'</span><b>'+x.t+'</b><small>'+x.d+'</small></div></div>');
    slot.replaceWith(d); if(!quiet) d.scrollIntoView({behavior:'smooth',block:'nearest'});
    n.textContent=k+'/'+EX.length;
    if(k<EX.length) arm(); else { const ok=$('#ok'); if(ok) ok.hidden=false; }
  };
  arm();
  if(all){ quiet=true; EX.forEach(()=>b.onclick()); quiet=false; }   // đã xem rồi: hiện đủ 3 ví dụ
}
