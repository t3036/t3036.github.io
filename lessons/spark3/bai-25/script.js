/* ---------- tiện ích ---------- */
const $ = (s, r=document) => r.querySelector(s);
const el = (html) => { const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; };
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]} return a };
const stars = n => '⭐'.repeat(n) + '☆'.repeat(3-n);

const LESSON_NAME="Thư điện tử";
/* biểu tượng thật (Material Design Icons, Google, giấy phép Apache 2.0) */
const svgIc=(d,c,s)=>'<svg class="ic" viewBox="0 0 24 24" width="'+s+'" height="'+s+'" fill="'+c+'" aria-hidden="true"><path d="'+d+'"/></svg>';
const IC_REPLY='M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z', IC_ALL='M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z', IC_FWD='M12 8V4l8 8-8 8v-4H4V8z';
const gate={a:false,b:false,c:false,cmp:false,pre:false,rep:false};   // bài 1: đã xong sơ đồ địa chỉ / đã nối logo / đã tạo địa chỉ
const okCheck=()=>{ const ok=$('#ok'); if(!ok) return; const v=state.view; ok.hidden=!(TEACH||(v===0?gate.a&&gate.b&&gate.c : v===1?gate.cmp&&gate.pre : v===2?gate.rep : true)); };
const openGate=okCheck;
const pic=(f,alt)=>'<img class="pic" src="img/'+f+'" alt="'+alt+'">';

/* ---------- câu hỏi lấy từ PPTX (Vận dụng), giữ nguyên lời câu hỏi; câu bổ sung bám theo ghi chú bài giảng ---------- */
const Q_FROM={q:"Em nên tìm thông tin người soạn Email ở vị trí nào?",o:["From","Bcc","Cc","To"],a:0,why:"From (Từ) cho biết ai là người soạn và gửi Email. To là người nhận chính, Cc và Bcc là người nhận bản sao."};
const Q_PURP={q:"Em hãy cho biết, mục đích của việc đưa chủ đề vào Email là gì?",o:["Để chỉ ra chủ đề và mục đích chính của nội dung Email","Để bao gồm một nhận xét kết thúc","Để viết lời chào","Để tóm tắt chủ đề Email"],a:0,why:"Chủ đề (Subject) cho người nhận biết ngay Email nói về việc gì và vì sao được gửi."};
const Q_SIG={q:"Em sẽ tìm tên và thông tin liên hệ của ai đó ở đâu trong Email?",o:["Chữ kí (Signature)","Chủ đề (Subject)","Nội dung (Body)","Địa chỉ (Address)"],a:0,why:"Chữ kí ở cuối thư thường có tên, lớp, số điện thoại hoặc Email liên hệ."};
const Q_MAIL={q:"Em viết Email cho một công ty để yêu cầu họ giúp đỡ về dự án ở trường. Đây là dạng Email có văn phong chuyên nghiệp. Em hãy chọn các tùy chọn đúng trong hộp thoại cho Email này.",form:[{l:"Tới (To):",o:["thebeautysalonnet@gmail.com","myhealthyeats.com","@wintersportsc","@companypronet.com","companypro.net@gmail.com"],a:4},{l:"Chủ đề (Subject):",o:["Hãy giúp ngay","Cần hỗ trợ dự án của trường"],a:1}],why:"Địa chỉ nhận phải là một địa chỉ Email đầy đủ của công ty: companypro.net@gmail.com. Chủ đề nên ngắn gọn, rõ nội dung và lịch sự: “Cần hỗ trợ dự án của trường”."};
const Q_SUBJ_T={q:"Em đang viết Email cho giáo viên để hỏi về điểm của mình. Ví dụ nào sẽ là dòng chủ đề thích hợp nhất?",o:["Câu hỏi về điểm","Chào thầy,","Vì sao?","CÓ LỖI RỒI THẦY ƠI"],a:0,why:"“Câu hỏi về điểm” ngắn gọn, đúng nội dung và lịch sự. Lời chào thuộc phần nội dung, còn chữ in hoa kiểu hét lên thì không lịch sự."};
const Q_ADDR={q:"Em hãy chọn địa chỉ thư điện tử viết đúng.",o:["abc@gmail.com","abc.gmail.com","@abc gmail.com","abc@"],a:0,why:"Địa chỉ thư điện tử có dạng tên hộp thư + @ + tên miền, ví dụ abc@gmail.com."};
const Q_APP={q:"Em hãy cho biết, ứng dụng nào dưới đây KHÔNG phải là ứng dụng thư điện tử?",o:["Gmail","Outlook","Apple Mail","Google Chrome"],a:3,why:"Google Chrome là trình duyệt Web. Gmail, Outlook và Apple Mail là các ứng dụng thư điện tử phổ biến."};
const Q_IMP={fixed:1,q:"Em gửi một Email rất khẩn cấp cho giáo viên. Em nên đánh dấu mức quan trọng nào?",o:["Thấp (Low)","Trung bình (Normal)","Cao (High)"],a:2,why:"Có 3 mức: thấp (Low), trung bình (Normal) và cao (High). Thư khẩn cấp nên chọn mức cao."};
const Q_PRE={q:"Trước khi bấm Gửi, em nên làm gì?",o:["Gửi ngay cho nhanh","Kiểm tra lỗi chính tả và nội dung đã đầy đủ, rõ ràng chưa","Thêm thật nhiều biểu tượng và từ viết tắt","Viết thật dài cho đủ ý"],a:1,why:"Em cần viết rõ ràng, dùng từ lịch sự và kiểm tra kĩ trước khi gửi."};
const Q_PARTS={q:"Em hãy kéo mỗi phần của địa chỉ thư điện tử vào đúng nhóm.",sort:{bins:[['Tên hộp thư'],['Kí hiệu thư điện tử'],['Tên miền nhà cung cấp dịch vụ']],items:[['abc123',0],['iigvietnam',0],['@',1],['gmail.com',2],['outlook.com',2]],why:"Địa chỉ thư điện tử gồm: tên hộp thư, kí hiệu @ và tên miền của nhà cung cấp dịch vụ."}};
const Q_FIELD={q:"Em hãy xếp mỗi mô tả vào đúng ô nhập người nhận.",sort:{bins:[['Đến (To)'],['Cc'],['Bcc']],items:[['Nhập địa chỉ người nhận chính',0],['Gửi bản sao cho người cần theo dõi nội dung',1],['Gửi bản sao ẩn danh, người nhận khác không thấy địa chỉ này',2]],why:"To là người nhận chính, Cc là bản sao cho người cần theo dõi, Bcc là bản sao ẩn danh."}};
const Q_REPLY={q:"Em hãy chọn cách phản hồi thư phù hợp với mỗi tình huống.",sort:{bins:[['Trả lời (Reply)'],['Trả lời tất cả (Reply All)'],['Chuyển tiếp (Forward)']],items:[['Chỉ muốn trả lời người gửi Email',0],['Tất cả mọi người có mặt trong Email cần xem câu trả lời của em',1],['Muốn gửi một Email đã nhận cho người khác',2]],why:"Reply: chỉ trả lời người gửi. Reply All: trả lời tất cả mọi người trong thư. Forward: gửi thư đã nhận cho người khác."}};
const Q_SAFE={q:"Với mỗi việc làm, em hãy chọn <b>Nên</b> hoặc <b>Không nên</b> khi dùng Email và AI.",lab:["Nên","Không nên"],tf:["Nhờ AI sửa lỗi chính tả và viết lời lịch sự hơn","Nhập mật khẩu hoặc mã xác minh vào AI","Kiểm tra liên kết và tệp đính kèm trước khi mở","Trả lời Email lạ đang hỏi mật khẩu của em"],a:[true,false,true,false],why:"AI giúp chỉnh Email nhưng không được nhập thông tin nhạy cảm. Email hỏi mật khẩu, mã xác minh, tiền hoặc thông tin riêng tư thì em phải hỏi giáo viên hoặc người lớn trước khi trả lời."};
const Q_AI={q:"Em nhận được một Email lạ yêu cầu gửi mật khẩu tài khoản. Em nên làm gì?",o:["Gửi mật khẩu ngay","Nhờ AI trả lời giúp và đưa mật khẩu cho AI","Không trả lời, hỏi giáo viên hoặc người lớn","Bấm vào liên kết trong thư để xem"],a:2,why:"Không cung cấp tài khoản, mật khẩu hay mã xác minh. Em cần hỏi giáo viên hoặc người lớn trước khi trả lời."};

const QUIZ=[Q_ADDR,Q_APP,Q_IMP,Q_PRE,Q_AI];

/* luyện phân biệt Đến (To) · Cc · Bcc, đặt ngay trước nút "Em đã hiểu" của bài "Soạn thư" */
const PRE=[
 {q:"Em gửi Email nộp bài cho cô Hoa. Em muốn bạn Lan <b>theo dõi nội dung</b> thư, và muốn lớp trưởng nhận <b>một bản sao ẩn danh</b>. Em hãy kéo từng địa chỉ email ở bên phải thả vào đúng ô trong thư.",mail:{bins:[['Đến (To)'],['Cc'],['Bcc']],items:[['hoa.nt@hoabinh.edu.vn (cô Hoa)',0],['lan.tt@hoabinh.edu.vn (bạn Lan)',1],['loptruong@hoabinh.edu.vn (lớp trưởng)',2]],why:"Cô Hoa là người nhận chính nên ở ô Đến. Lan cần theo dõi nội dung nên ở ô Cc. Lớp trưởng nhận bản sao ẩn danh nên ở ô Bcc."}},
 {q:"Em nhập địa chỉ của bạn Nam vào ô <b>Cc</b>. Khi cô Hoa mở thư, cô có nhìn thấy địa chỉ của Nam không?",o:["Không, vì địa chỉ ở ô Cc được giấu đi","Có, vì địa chỉ ở ô Cc hiện cho mọi người cùng thấy","Chỉ thấy khi cô bấm vào nút “Hiện”"],a:1,why:"Cc (Carbon copy) gửi bản sao để người đó theo dõi nội dung, và mọi người nhận thư đều thấy địa chỉ trong ô Cc."},
 {q:"Em nhập địa chỉ của lớp trưởng vào ô <b>Bcc</b>. Ai sẽ <b>không</b> nhìn thấy địa chỉ này?",o:["Tất cả mọi người đều thấy","Chỉ có em là không thấy","Cô Hoa và những người nhận khác không thấy địa chỉ này"],a:2,why:"Bcc (Blind carbon copy) là bản sao ẩn danh: những người nhận khác không thấy địa chỉ trong ô Bcc."},
 {q:"Với mỗi tình huống, em hãy chọn ô <b>Cc</b> hoặc ô <b>Bcc</b> cho phù hợp.",lab:["Cc","Bcc"],tf:["Em muốn bạn Lan cùng theo dõi nội dung thư và ai cũng biết Lan nhận thư","Em muốn gửi bản sao cho bố mẹ mà không để các bạn khác biết","Em muốn cô chủ nhiệm nhận bản sao để cùng theo dõi, ai cũng thấy"],a:[true,false,true],why:"Cc cho người cần theo dõi và ai cũng thấy. Bcc để gửi bản sao ẩn danh, không để người khác biết."}
];

/* câu hỏi tình huống cho bài "Nhận và phản hồi thư" */
const Q_SIT1={q:"Cô Hoa gửi một Email báo giờ họp nhóm cho cả nhóm 3 bạn. Em muốn trả lời “Em đã nhận được ạ” để <b>cả nhóm cùng thấy</b>. Em nên chọn nút nào?",o:["Chuyển tiếp (Forward)","Trả lời (Reply)","Trả lời tất cả (Reply All)"],a:2,why:"Reply All gửi câu trả lời cho tất cả mọi người có mặt trong Email. Reply chỉ gửi cho người gửi, còn Forward dùng để gửi thư cho người khác."};
const Q_SIT2={q:"Bạn Lan gửi riêng cho em một Email hỏi mượn vở Toán. Em chỉ muốn nhắn lại cho Lan. Em nên chọn nút nào?",o:["Trả lời (Reply)","Trả lời tất cả (Reply All)","Chuyển tiếp (Forward)"],a:0,why:"Em chỉ muốn trả lời người gửi nên chọn Trả lời (Reply)."};
const Q_SIT3={q:"Em nhận được Email của cô thông báo lịch học thêm. Bạn Nam không có trong thư và cần biết lịch này. Em nên làm gì?",o:["Chọn Trả lời (Reply) và nhập địa chỉ của Nam","Chọn Chuyển tiếp (Forward) rồi nhập địa chỉ của Nam vào ô “Đến”","Chọn Trả lời tất cả (Reply All)"],a:1,why:"Chuyển tiếp (Forward) dùng khi em muốn gửi một Email đã nhận cho người khác."};
const Q_SIT4={q:"Cô Hoa gửi Email cho cả nhóm. Em muốn nhắn riêng với cô: “Em xin nghỉ buổi học mai ạ”. Chọn Trả lời tất cả có phù hợp không?",o:["Phù hợp, vì như vậy cô sẽ đọc nhanh hơn","Phù hợp, vì Trả lời tất cả luôn tốt hơn","Không phù hợp, vì cả nhóm sẽ thấy tin nhắn riêng của em"],a:2,why:"Reply All gửi cho tất cả mọi người trong thư. Tin nhắn riêng chỉ nên gửi cho cô bằng Trả lời (Reply)."};

/* ---------- 5 thẻ học: nội dung, hình minh họa, bài tập nhỏ ---------- */
const THEORY=[
 {i:"📮",h:"Địa chỉ thư điện tử",
  t:"<b>Địa chỉ thư điện tử</b> là một <b>định danh duy nhất</b> dùng để xác định một <b>hộp thư điện tử</b> trên mạng Internet.",
  e:"",
  v:'<div class="addr" id="addr"></div><div class="apx locked" id="apx"></div><div class="apx locked" id="mk"></div>',
  after:all=>{ gate.a=gate.b=gate.c=false; readAddress(all); readApps(all); readMake(all); }},
 {i:"✍️",h:"Soạn thư",
  t:"Khi soạn Email, em cần điền đúng từng phần.<br>Em hãy bấm vào ô đang nhấp nháy để xem giải thích bên phải.",
  e:"",
  v:'<div class="pts" id="pts"></div><div class="apx locked" id="pre"></div>',
  after:all=>{ gate.pre=false; readCompose(all); readPre(all); }},
 {i:"📨",h:"Nhận và phản hồi thư",
  t:"Có 3 cách phản hồi khi em nhận được thư.<br>Em hãy bấm vào nút đang nhấp nháy để xem giải thích bên phải.",
  e:"",
  v:'<div class="pts" id="rpl"></div>',
  after:readReply},
 {i:"🌟",h:"Kĩ năng khi sử dụng Email",
  t:"Em cần viết Email <b>rõ ràng</b>, dùng từ <b>lịch sự</b>, <b>phản hồi đúng lúc</b> và <b>kiểm tra kĩ trước khi gửi</b>.",
  e:"Chủ đề ngắn gọn · Ít biểu tượng, ít từ viết tắt · Soát lỗi chính tả rồi mới bấm Gửi.",
  v:pic('ky-nang.png','5 kĩ năng sử dụng Email')},
 {i:"🤖",h:"Phản hồi thư điện tử với AI",
  t:"AI có thể giúp gợi ý chủ đề, viết lại cho rõ ràng, kiểm tra lỗi chính tả hoặc đề xuất câu trả lời lịch sự. Nhưng <b>không nhập thông tin nhạy cảm</b> và luôn <b>kiểm tra liên kết, tệp đính kèm</b> trong Email.",
  e:"Email hỏi tài khoản, mật khẩu, tiền hay mã xác minh → hỏi giáo viên hoặc người lớn trước khi trả lời.",
  v:pic('ai.png','Gmail với Gemini và Outlook với Copilot gợi ý thư trả lời')+'<div class="tags"><span class="tag ok">✔ Đọc lại thư AI gợi ý</span><span class="tag ok">✔ Kiểm tra liên kết và tệp đính kèm</span><span class="tag no">✘ Nhập mật khẩu, mã xác minh cho AI</span></div>'}
];
const PRACT=[
 [Q_ADDR,Q_PARTS,Q_APP],
 [Q_FROM,Q_FIELD,Q_PURP,Q_SIG,Q_IMP],
 [Q_REPLY,Q_SIT1,Q_SIT2,Q_SIT3,Q_SIT4],
 [Q_SUBJ_T,Q_MAIL,Q_PRE],
 [Q_SAFE,Q_AI]
];

/* ---------- phần luyện tập: 5 câu Vận dụng của bài giảng ---------- */
const PRACTICE=[Q_SUBJ_T,Q_FROM,Q_MAIL,Q_PURP,Q_SIG].map(q=>({q,p:'A'}));

/* ---------- trạng thái ---------- */
const N=THEORY.length;
const state={view:-1, read:new Array(N).fill(false), stars:null, prac:null, pq:{}, po:{}, ui:{}, done:{}};   // pq: câu đang làm của bài tập nhỏ mỗi bài; prac: {order,qi,wrong} để làm tiếp phần luyện tập   // view: -1 mở đầu, 0..N-1 bài học, N luyện tập, N+1 kết quả
try{ const s=JSON.parse(localStorage.getItem('k5b25v2')||'null'); if(s&&s.read&&s.read.length===N){ state.read=s.read; state.stars=s.stars; state.prac=(s.prac&&s.prac.order&&s.prac.order.length===PRACTICE.length&&s.prac.order.every(i=>PRACTICE[i]))?s.prac:null; state.pq=s.pq||{}; state.po=s.po||{}; state.ui=s.ui||{}; state.done=s.done||{}; if(s.stars!==null&&s.stars!==undefined) state.view=N+1; else { const f=s.read.indexOf(false); state.view=f<0?N:f; } } }catch(e){}
let TEACH=false; try{ TEACH=localStorage.getItem('k5b25_teach')==='1'; }catch(e){}
const save=()=>{ try{localStorage.setItem('k5b25v2',JSON.stringify({read:state.read,stars:state.stars,prac:state.prac,pq:state.pq,po:state.po,ui:state.ui,done:state.done}))}catch(e){} };
const allRead=()=>state.read.every(Boolean);
const unlockedTo=()=>{ if(TEACH) return N; const i=state.read.indexOf(false); return i<0?N:i; };   // bài cuối được mở; N = đã mở phần luyện tập
function restart(force){
  if(!force && !confirm('Em muốn làm lại từ đầu? Tiến độ đã lưu sẽ bị xóa.')) return;
  state.read=new Array(N).fill(false); state.stars=null; state.prac=null; state.pq={}; state.po={}; state.ui={}; state.done={}; state.view=-1; save(); render();
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
  box.appendChild(mk((state.view>=N?'cur ':'')+(done?'done ':'')+(open?'':'locked'),'🎯','Vận dụng',PRACTICE.length+' câu',done?'✅':open?'🔓':'🔒',N,()=>{ state.view=done?N+1:N; render(); },'cả 5 bài học'));
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
  v.innerHTML=`<div class="hero">
  <div id="cbhost"></div>
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
  if(c.after) c.after(state.read[i]||state.pq[i]!==undefined);
  if(TEACH) document.querySelectorAll('.apx.locked').forEach(x=>x.classList.remove('locked'));   // chế độ giáo viên: mở khóa tất cả
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
    act.innerHTML=''; if(!state.po[i]) state.po[i]=shuffle(PRACT[i].map((_,k)=>k)); const list=state.po[i].map(k=>shuffleQ(PRACT[i][k])); let qn=Math.min(pq0,list.length-1); const pr=$('#pr');
    pr.innerHTML='<div class="practice"><div class="ph"><span>✏️ Bài tập nhỏ</span><span id="cnt"></span></div><div class="pb" id="ph"></div></div>';
    const next=()=>{
      state.pq[i]=qn; save();
      $('#cnt').textContent=list.length>1?'Câu '+(qn+1)+'/'+list.length:'';
      const key='m'+i+'_'+qn;
      const after=fx=>{
        const last=qn===list.length-1;
        fx.insertAdjacentHTML('afterend','<div class="nxrow"><button class="btn go" id="c">'+(last?'Hoàn thành bài ✔':'Câu tiếp ▶')+'</button></div>');
        $('#c').onclick=()=>{ if(!last){ qn++; next(); } else { Object.keys(state.done).forEach(k=>{ if(k.startsWith('m'+i+'_')) delete state.done[k]; }); state.read[i]=true; delete state.pq[i]; delete state.po[i]; save(); fresh=i+1; keepScroll=true; render(); toast(i<N-1?"🔓 Đã mở khóa: "+THEORY[i+1].h:"🔓 Đã mở khóa phần Luyện tập!"); } };
      };
      if(state.done[key]){ solvedQ(list[qn],$('#ph')); after($('#ph .fb')); }   // đã làm xong câu này trước khi tải lại: hiện kết quả
      else askQ(list[qn],$('#ph'),()=>{},fx=>{ state.done[key]=1; save(); after(fx); });
    };
    next(); if(!pq0) pr.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  act.innerHTML='<button class="btn" id="ok">Em đã hiểu ✓</button>';
  if(i<=2){ $('#ok').hidden=true; okCheck(); }   // bài 1, 2, 3: chỉ hiện sau khi xem hết các phần
  $('#ok').onclick=startPractice;
  if(state.pq[i]!==undefined) startPractice();   // đang làm dở bài tập: mở lại đúng câu
}

/* ---------- luyện tập: ôn tập + trắc nghiệm gộp một mạch ---------- */
function practice(v){
  if(!state.prac){ const A=PRACTICE.map((_,i)=>i).filter(i=>PRACTICE[i].p==='A'), B=PRACTICE.map((_,i)=>i).filter(i=>PRACTICE[i].p==='B'); state.prac={order:shuffle(A.concat(B)),qi:0,wrong:0}; save(); }
  const qs=state.prac.order.map(i=>({q:shuffleQ(PRACTICE[i].q),p:PRACTICE[i].p})); let qi=Math.min(state.prac.qi,qs.length-1), wrong=state.prac.wrong;
  const PN={A:'Vận dụng',B:'Vận dụng'};
  function draw(){
    v.innerHTML='<div class="chead"><h2 style="margin:0">🎯 Luyện tập</h2><span class="part">'+PN[qs[qi].p]+'</span></div><div class="meta">Câu '+(qi+1)+'/'+qs.length+'</div><div class="prog"><i style="width:'+(qi/qs.length*100)+'%"></i></div><div id="qh"></div>';
    const after=f=>{
      if(qi<qs.length-1){ f.insertAdjacentHTML('afterend','<div class="nxrow"><button class="btn go" id="nq">Câu tiếp ▶</button></div>'); $('#nq').onclick=()=>{qi++; state.prac.qi=qi; save(); draw();}; }
      else { state.stars=wrong<=1?3:wrong<=3?2:1; state.prac=null; Object.keys(state.done).forEach(k=>{ if(k[0]==='p') delete state.done[k]; }); save(); f.insertAdjacentHTML('afterend','<div class="nxrow"><b>Em đã làm xong! Số lần chọn sai: '+wrong+'.</b> <button class="btn go" id="nq">Xem kết quả 🏅</button></div>'); $('#nq').onclick=()=>{ state.view=N+1; render(); }; }
    };
    if(state.done['p'+qi]){ solvedQ(qs[qi].q,$('#qh')); after($('#qh .fb')); }   // đã làm xong câu này trước khi tải lại: hiện kết quả
    else askQ(qs[qi].q,$('#qh'),()=>{wrong++; state.prac.wrong=wrong; save();},f=>{ state.done['p'+qi]=1; save(); after(f); });
  }
  draw();
}
function finale(v){
  const s=state.stars||0, rank=s>=3?'Em dùng Email xuất sắc':s>=2?'Em dùng Email giỏi':'Em dùng Email tập sự';
  v.innerHTML=`<div class="hero"><div class="big">🏅</div><h2>${rank}</h2><p><b>${'⭐'.repeat(s)}${'☆'.repeat(3-s)}</b></p>
  <div class="plan"><div><b>Địa chỉ</b><br>Tên hộp thư + @ + tên miền, ví dụ abc@gmail.com.</div><div><b>Soạn thư</b><br>To, Cc, Bcc, Chủ đề, Nội dung, Chữ kí và mức quan trọng.</div><div><b>Phản hồi</b><br>Reply · Reply All · Forward.</div><div><b>Kĩ năng</b><br>Rõ ràng, lịch sự, đúng lúc, kiểm tra kĩ trước khi gửi.</div><div><b>AI</b><br>Không nhập thông tin nhạy cảm; kiểm tra liên kết và tệp đính kèm.</div></div>
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
  } else if(Q.mail){
    mailGame(ops,Q.mail,()=>onWrong(),sf=>{ done=true; onDone(sf); });
  } else if(Q.form){
    const sel=Q.form.map(()=>null), rows=[];
    Q.form.forEach((F,k)=>{
      const r=el('<div class="tfrow frow"><div class="s"><b>'+F.l+'</b></div><div class="fo"></div></div>');
      F.o.forEach((t,j)=>{ const b=el('<button class="chip" data-j="'+j+'">'+t+'</button>');
        b.onclick=e=>{ e.stopPropagation(); if(done) return; sel[k]=j; r.querySelectorAll('.chip').forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); r.classList.remove('bad'); };
        r.querySelector('.fo').appendChild(b); });
      rows.push(r); ops.appendChild(r); });
    const chk=el('<button class="btn">Kiểm tra</button>'); ops.appendChild(chk);
    chk.onclick=e=>{ e.stopPropagation(); if(done) return;
      if(sel.some(v=>v===null)) return fb(f,'info','Hãy chọn đáp án cho tất cả các dòng.');
      let bad=0; rows.forEach((r,k)=>{ const ok=sel[k]===Q.form[k].a; r.classList.toggle('good',ok); r.classList.toggle('bad',!ok); if(!ok) bad++; });
      if(bad) lose('Có '+bad+' dòng chưa đúng (viền đỏ). Hãy sửa lại.'); else { chk.disabled=true; win(); } };
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
    let pick=null; const bs=[];
    const sub=el('<button class="btn" disabled>Gửi đáp án</button>');
    Q.o.forEach((t,k)=>{ const b=el('<button class="opt"><b>'+'ABCD'[k]+'.</b> '+t+'</button>');
      b.onclick=e=>{ e.stopPropagation(); if(done||b.classList.contains('bad')) return;
        pick=k; bs.forEach((x,j)=>x.classList.toggle('sel',j===k)); sub.disabled=false; f.className='fb'; };
      bs.push(b); ops.appendChild(b); });
    ops.appendChild(sub);
    sub.onclick=e=>{ e.stopPropagation(); if(done||pick===null) return;
      const b=bs[pick];
      if(pick===Q.a){ b.classList.remove('sel'); b.classList.add('good'); sub.disabled=true; win(); }
      else { b.classList.remove('sel'); b.classList.add('bad'); pick=null; sub.disabled=true; lose('Chưa đúng, hãy chọn lại.'); } };
  }
}
/* câu hỏi ở dạng đã giải (bài đã hoàn thành) */
function solvedQ(Q,host){
  let h='<div class="qtext">'+Q.q+'</div><div class="ops">';
  if(Q.sort){
    h+='<div class="bins '+(Q.sort.bins.length===2||Q.sort.bins.length===4?'c2':'c3')+'">'+Q.sort.bins.map((b,i)=>'<div class="bin"><h3>'+b[0]+'</h3><small>'+(b[1]||'')+'</small><div class="in">'+Q.sort.items.filter(x=>x[1]===i).map(x=>'<span class="chip good">'+x[0]+'</span>').join('')+'</div></div>').join('')+'</div>';
  } else if(Q.mail){
    h+='<div class="cw mgw">'+mailRows(Q.mail,true)+'</div>';
  } else if(Q.form){
    h+=Q.form.map(F=>'<div class="tfrow good frow"><div class="s"><b>'+F.l+'</b></div><div class="fo">'+F.o.map((t,j)=>'<span class="chip'+(j===F.a?' sel':'')+'">'+t+'</span>').join('')+'</div></div>').join('');
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
  if(!Q.o || Q.o.length<3 || Q.fixed) return Q;
  const idx=shuffle(Q.o.map((_,i)=>i));
  return Object.assign({},Q,{o:idx.map(i=>Q.o[i]),a:idx.indexOf(Q.a)});
}

/* ---------- kéo địa chỉ email thả vào đúng ô Đến / Cc / Bcc của cửa sổ thư (thư bên trái, địa chỉ bên phải) ---------- */
function mailRows(cfg,solved){
  const rows=cfg.bins.map((b,i)=>'<div class="cwr"><label>'+b[0].replace(/ \(.*\)/,'')+'</label><div class="mgs" data-b="'+i+'">'+(solved?cfg.items.filter(x=>x[1]===i).map(x=>'<span class="chip good">'+x[0]+'</span>').join(''):'')+'</div></div>').join('');
  return '<div class="cwt"><span>✉️ Thư mới</span><span>– ⤢ ✕</span></div>'+rows
    +'<div class="cwr mgd"><label>Chủ đề</label><span>Báo cáo tiến độ và nộp bài tập nhóm</span></div>'
    +'<div class="cwb mgd">Kính gửi cô Hoa,<br>Nhóm 1 xin gửi cô bài tập nhóm…</div>'
    +'<div class="cwd"><span class="cws">Gửi ➤</span></div>';
}
function mailGame(host,cfg,onWrong,onDone){
  const items=shuffle(cfg.items.map(([t,b],id)=>({id,t,b,loc:'pool',locked:false})));
  let picked=null;
  host.innerHTML='<div class="cwl mgl"><div class="cw mgw">'+mailRows(cfg,false)+'</div><aside class="mgp"><b class="mgh">📇 Địa chỉ email</b><div class="pool" id="mpool"></div><button class="btn" id="mchk" disabled>Kiểm tra</button></aside></div><div class="fb" id="mfb"></div>';
  const pool=host.querySelector('#mpool'), zones=[...host.querySelectorAll('.mgs')], chk=host.querySelector('#mchk'), f=host.querySelector('#mfb');
  const chipEl=it=>{
    const c=el('<button class="chip'+(picked===it.id?' sel':'')+(it.locked?' good':'')+'">'+it.t+'</button>');
    if(!it.locked){
      c.draggable=true;
      c.ondragstart=e=>{ e.dataTransfer.setData('text/plain',it.id); picked=it.id; };
      c.onclick=e=>{ e.stopPropagation(); if(it.loc==='pool'){ picked=picked===it.id?null:it.id; } else { it.loc='pool'; picked=null; } draw(); };
    }
    return c;
  };
  const draw=()=>{
    pool.innerHTML=''; items.filter(i=>i.loc==='pool').forEach(i=>pool.appendChild(chipEl(i)));
    pool.classList.toggle('empty',!items.some(i=>i.loc==='pool'));
    zones.forEach(z=>{ z.innerHTML=''; items.filter(i=>i.loc===+z.dataset.b).forEach(i=>z.appendChild(chipEl(i))); z.classList.toggle('hot',picked!==null); });
    chk.disabled=items.some(i=>i.loc==='pool');
  };
  const place=(id,to)=>{ const it=items.find(x=>x.id==id); if(!it||it.locked) return; it.loc=to; picked=null; draw(); };
  zones.forEach(z=>{
    z.onclick=()=>{ if(picked!==null) place(picked,+z.dataset.b); };
    z.ondragover=e=>{ e.preventDefault(); z.classList.add('over'); };
    z.ondragleave=()=>z.classList.remove('over');
    z.ondrop=e=>{ e.preventDefault(); z.classList.remove('over'); place(e.dataTransfer.getData('text/plain'),+z.dataset.b); };
  });
  pool.ondragover=e=>e.preventDefault();
  pool.ondrop=e=>{ e.preventDefault(); place(e.dataTransfer.getData('text/plain'),'pool'); };
  chk.onclick=()=>{
    let bad=0; items.forEach(it=>{ if(it.loc===it.b) it.locked=true; else bad++; });
    if(!bad){ draw(); chk.disabled=true; fb(f,'ok','✔ Đúng hết rồi! '+(cfg.why||'')); onDone(f); }
    else { onWrong(); fb(f,'no','Có '+bad+' địa chỉ chưa đúng chỗ. Địa chỉ đúng đã được khóa màu xanh, các địa chỉ còn lại quay về bên phải để em thả lại.');
      chk.disabled=true; zones.forEach(z=>z.querySelectorAll('.chip:not(.good)').forEach(c=>c.classList.add('bad')));
      setTimeout(()=>{ items.forEach(it=>{ if(!it.locked) it.loc='pool'; }); draw(); },900); }
  };
  draw();
  if(TEACH) host.insertAdjacentHTML('beforeend','<div class="tkey-box"><b>✅ Đáp án:</b> '+cfg.bins.map((b,i)=>'<div><b>'+b[0]+':</b> '+cfg.items.filter(x=>x[1]===i).map(x=>x[0]).join(' · ')+'</div>').join('')+'</div>');
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


let fsz=22; try{ fsz=+localStorage.getItem('k5b25fontsize')||22 }catch(e){}
const setSize=px=>{ fsz=Math.max(18,Math.min(30,px)); document.documentElement.style.fontSize=fsz+'px'; try{localStorage.setItem('k5b25fontsize',fsz)}catch(e){} };
setSize(fsz);
$('#fsm').onclick=()=>setSize(fsz-2); $('#fbg').onclick=()=>setSize(fsz+2);
$('#restart').onclick=()=>restart();
/* Chế độ giáo viên: hiện luôn đáp án đúng (viền cam + chữ ✅) */
(function(){
  const oAsk=askQ, oSort=sortGame;
  askQ=function(Q,host,w,d){
    oAsk(Q,host,w,d); if(!TEACH) return;
    if(Q.tf) host.querySelectorAll('.tfrow').forEach((r,k)=>{ const c=r.querySelector('[data-v="'+(Q.a[k]?1:0)+'"]'); if(c) c.classList.add('tkey'); });
    else if(Q.form) host.querySelectorAll('.frow').forEach((r,k)=>{ const c=r.querySelector('[data-j="'+Q.form[k].a+'"]'); if(c) c.classList.add('tkey'); });
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
    last=0; TEACH=!TEACH; try{ localStorage.setItem('k5b25_teach',TEACH?'1':'0'); }catch(x){}
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
    them('Chào em! Cô muốn gửi kết quả bài kiểm tra cho em bằng Email.',()=>them('Em cho cô xin địa chỉ email nhé!',()=>chips([
      ['an.nguyen@gmail.com','Cảm ơn em! Địa chỉ có tên hộp thư, kí hiệu @ và tên miền. Giờ cô và em cùng học tiếp nhé! 🎉',true,'Dạ, địa chỉ của em là an.nguyen@gmail.com ạ.'],
      ['an.nguyen.gmail.com','Địa chỉ này thiếu kí hiệu @ rồi em. Em thử lại nhé!',false,'Dạ, địa chỉ của em là an.nguyen.gmail.com ạ.'],
      ['@an nguyen gmail','Địa chỉ không có dấu cách và còn thiếu tên miền. Em thử lại nhé!',false,'Dạ, địa chỉ của em là @an nguyen gmail ạ.']
    ],()=>{})));
  }});
}

/* ---------- bài 1: bấm lần lượt từng phần của địa chỉ thư điện tử ---------- */
function readAddress(all){
  const P=[
    {c:'green',t:'abc123',i:'🧒',h:'1) Tên hộp thư',d:'Ví dụ: Abc, IIGVietnam,…'},
    {c:'blue',t:'@',i:'@',h:'2) Kí hiệu thư điện tử',d:'@'},
    {c:'violet',t:'gmail.com',i:'🌐',h:'3) Tên miền nhà cung cấp dịch vụ',d:'Ví dụ: Gmail.com, Yahoo.com, Outlook.com,…'}
  ];
  const box=$('#addr'); let k=0;
  box.innerHTML='<div class="eg adh" id="adh">👇 Em hãy bấm vào từng ô <b>?</b> để xem cấu trúc của một địa chỉ thư điện tử nhé!</div><div class="dg">'+P.map((p,i)=>'<div class="dc c'+i+'"><button class="ap '+p.c+'"><span>?</span></button><i class="ar '+p.c+'">⬇</i><div class="ad '+p.c+'"><span class="adi">'+p.i+'</span><b>'+p.h+'</b><small>'+p.d+'</small></div></div>').join('')+'</div>';
  const cs=[...box.querySelectorAll('.dc')], bs=cs.map(c=>c.querySelector('.ap'));
  const arm=()=>{ if(k<P.length) bs[k].classList.add('next'); };
  const reveal=()=>{
    const p=P[k], b=bs[k]; b.classList.remove('next'); b.classList.add('on'); b.innerHTML='<span>'+p.t+'</span>'; cs[k].classList.add('open'); k++; state.ui.adr=k; save();
    if(k<P.length) arm(); else { $('#adh').hidden=true; $('#apx').classList.remove('locked'); gate.a=true; openGate(); }
  };
  bs.forEach((b,i)=>b.onclick=()=>{ if(i===k) reveal(); });
  arm();
  if(all) while(k<P.length) reveal(); else { let n=state.ui.adr||0; while(n-- > 0 && k<P.length) reveal(); }
}

/* ---------- bài 1 (tiếp): chọn logo, rồi chọn đúng tên ứng dụng ---------- */
function readApps(all){
  const A=[['gmail.svg','Gmail'],['outlook.svg','Outlook'],['apple-mail.svg','Apple Mail']];
  const box=$('#apx'); let picked=null, left=A.length;
  box.innerHTML='<div class="aplock"><span>🔒</span><b>Hoàn thành phần trên để mở khóa!</b></div><p class="aph"><b>Một số ứng dụng thư điện tử phổ biến:</b></p><div class="eg adh">👇 Em hãy kéo tên ứng dụng thả vào ô trống dưới mỗi logo nhé!<br><i>(Hoặc bấm vào tên, rồi bấm vào ô trống.)</i></div><div class="alg">'+A.map((a,i)=>'<div class="al" data-i="'+i+'"><img src="img/'+a[0]+'" alt="Logo ứng dụng thư điện tử"><div class="slot">Thả tên vào đây</div></div>').join('')+'</div><div class="anm"></div><div class="fb" id="afb"></div>';
  const ls=[...box.querySelectorAll('.al')], nm=box.querySelector('.anm'), f=$('#afb');
  const solve=i=>{ state.ui.apps=[...new Set([...(state.ui.apps||[]),i])]; save(); const s=ls[i].querySelector('.slot'); s.textContent=A[i][1]; s.classList.add('ok'); ls[i].classList.add('ok'); const c=nm.querySelector('[data-i="'+i+'"]'); if(c) c.remove(); if(--left===0){ gate.b=true; box.querySelector('.adh').hidden=true; $('#mk').classList.remove('locked'); openGate(); } };
  const drop=(i,id)=>{
    if(id===null||ls[i].classList.contains('ok')) return;
    if(+id===i){ solve(i); picked=null; fb(f,'ok',left?'✔ Đúng rồi! Em xếp tiếp nhé.':'✔ Giỏi quá! Em đã nhận ra cả 3 ứng dụng thư điện tử.'); }
    else { picked=null; nm.querySelectorAll('.chip').forEach(c=>c.classList.remove('sel')); ls[i].classList.remove('shake'); void ls[i].offsetWidth; ls[i].classList.add('shake'); fb(f,'no','Chưa đúng, em thử lại nhé!'); }
  };
  shuffle(A.map((_,i)=>i)).forEach(i=>{ const c=el('<button class="chip" draggable="true" data-i="'+i+'">'+A[i][1]+'</button>');
    c.ondragstart=e=>{ e.dataTransfer.setData('text/plain',i); picked=i; };
    c.onclick=()=>{ picked=picked===i?null:i; nm.querySelectorAll('.chip').forEach(x=>x.classList.toggle('sel',+x.dataset.i===picked)); f.className='fb'; };
    nm.appendChild(c); });
  ls.forEach((b,i)=>{
    b.onclick=()=>drop(i,picked);
    b.ondragover=e=>{ e.preventDefault(); b.classList.add('over'); };
    b.ondragleave=()=>b.classList.remove('over');
    b.ondrop=e=>{ e.preventDefault(); b.classList.remove('over'); drop(i,e.dataTransfer.getData('text/plain')); };
  });
  if(all){ A.forEach((_,i)=>solve(i)); } else (state.ui.apps||[]).slice().forEach(i=>{ if(A[i]) solve(i); });
}

/* ---------- bài 1 (tiếp): tự tạo một địa chỉ thư điện tử hoàn chỉnh từ 3 phần ---------- */
function readMake(all){
  const S=[{c:'green',h:'Tên hộp thư'},{c:'blue',h:'Kí hiệu @'},{c:'violet',h:'Tên miền'}];
  const C=[['abc123',0],['minh.an',0],['@',1],['gmail.com',2],['outlook.com',2]];
  const box=$('#mk'); let picked=null; const filled=[null,null,null];
  box.innerHTML='<div class="aplock"><span>🔒</span><b>Hoàn thành phần trên để mở khóa!</b></div><p class="aph"><b>Em hãy tự tạo một địa chỉ thư điện tử hoàn chỉnh:</b></p><div class="eg adh" id="mkh">👇 Kéo mỗi mảnh ghép thả vào đúng ô: tên hộp thư, kí hiệu @ và tên miền nhé!<br><i>(Hoặc bấm vào mảnh ghép, rồi bấm vào ô trống.)</i></div><div class="mkg">'+S.map((s,i)=>'<div class="mks '+s.c+'" data-t="'+i+'"><small>'+s.h+'</small><div class="mkv">Thả vào đây</div></div>').join('')+'</div><div class="mkp" id="mkp"></div><div class="fb" id="mkf"></div><div class="mkr" id="mkr" hidden></div>';
  const ss=[...box.querySelectorAll('.mks')], pool=$('#mkp'), f=$('#mkf'), res=$('#mkr');
  const done=()=>{ const a=filled.map(i=>C[i][0]).join(''); $('#mkh').hidden=true; pool.hidden=true; f.className='fb'; res.hidden=false;
    res.innerHTML='<div class="mka">'+a+'</div><div>✔ Giỏi quá! Em đã tạo xong một địa chỉ thư điện tử hoàn chỉnh!</div><button class="btn" id="mkagain">🔄 Tạo địa chỉ khác</button>';
    $('#mkagain').onclick=()=>{ filled.fill(null); state.ui.mk=[null,null,null]; save(); res.hidden=true; pool.hidden=false; $('#mkh').hidden=false; draw(); };
    gate.c=true; openGate(); };
  function draw(){
    ss.forEach((s,t)=>{ const v=s.querySelector('.mkv'), i=filled[t]; v.textContent=i===null?'Thả vào đây':C[i][0]; v.classList.toggle('ok',i!==null); s.classList.toggle('on',i!==null); });
    pool.innerHTML=''; C.forEach((c,i)=>{ if(filled.includes(i)) return;
      const b=el('<button class="chip'+(picked===i?' sel':'')+'" draggable="true">'+c[0]+'</button>');
      b.ondragstart=e=>{ e.dataTransfer.setData('text/plain',i); picked=i; };
      b.onclick=()=>{ picked=picked===i?null:i; draw(); }; pool.appendChild(b); });
  }
  function put(t,i){
    if(i===null||filled[t]!==null) return;
    if(C[+i][1]!==t){ picked=null; draw(); ss[t].classList.remove('shake'); void ss[t].offsetWidth; ss[t].classList.add('shake'); return fb(f,'no','Mảnh ghép này chưa đúng chỗ, em thử lại nhé!'); }
    filled[t]=+i; state.ui.mk=filled.slice(); save(); picked=null; f.className='fb'; draw(); if(filled.every(x=>x!==null)) done();
  }
  ss.forEach((s,t)=>{
    s.onclick=()=>put(t,picked);
    s.ondragover=e=>{ e.preventDefault(); s.classList.add('over'); };
    s.ondragleave=()=>s.classList.remove('over');
    s.ondrop=e=>{ e.preventDefault(); s.classList.remove('over'); put(t,e.dataTransfer.getData('text/plain')===''?null:+e.dataTransfer.getData('text/plain')); };
  });
  draw();
  if(all){ [0,2,3].forEach((i,t)=>{ filled[t]=i; }); draw(); done(); }
  else if(Array.isArray(state.ui.mk)){ state.ui.mk.forEach((v,t)=>{ if(t<3 && C[v] && C[v][1]===t) filled[t]=v; }); draw(); if(filled.every(x=>x!==null)) done(); }
}

/* hai cột: cửa sổ thư ở bên trái (các vị trí lần lượt nhấp nháy), lời giải thích ở bên phải (luôn nằm trong tầm nhìn) */
function readHot(boxSel,key,win,P,all,onAll){
  const box=$(boxSel), seen=new Set(); gate[key]=false;
  box.innerHTML='<div class="cwl"><div class="cw">'+win+'</div><aside class="cwside"><div class="ptd"><span class="cwh">👈</span> Em hãy bấm vào vị trí <b>đang nhấp nháy</b> trong thư để xem giải thích ở đây nhé!</div><div class="meta"></div></aside></div>';
  const hs=[]; box.querySelectorAll('.hs').forEach(h=>{ hs[+h.dataset.p]=h; });
  const d=box.querySelector('.ptd'), c=box.querySelector('.meta');
  const paint=()=>{ const now=hs.findIndex((_,i)=>!seen.has(i)); hs.forEach((h,i)=>{ h.classList.toggle('seen',seen.has(i)); h.classList.toggle('now',i===now); h.dataset.n=i+1; }); };
  const mark=i=>{ seen.add(i); state.ui[key]=[...seen]; save(); paint(); c.textContent='Đã xem '+seen.size+'/'+P.length; if(seen.size===P.length){ gate[key]=true; if(onAll) onAll(); okCheck(); } };
  hs.forEach((h,i)=>h.onclick=()=>{
    if(!seen.has(i) && !h.classList.contains('now')) return void (d.innerHTML='<span class="cwh">👈</span> Em hãy bấm vào vị trí <b>đang nhấp nháy</b> trước nhé!');
    d.innerHTML='<span class="cwh">'+P[i][0]+'</span><b>'+P[i][1]+'</b><p>'+P[i][2]+'</p>';
    if(!seen.has(i)) mark(i); });
  c.textContent='Đã xem 0/'+P.length; paint();
  if(all) P.forEach((_,i)=>mark(i)); else (state.ui[key]||[]).slice().forEach(i=>{ if(P[i]) mark(i); });
}

/* ---------- bài 2: bấm từng phần của cửa sổ soạn thư ---------- */
function readCompose(all){
  const P=[
    ['📩','Đến (To)','Nhập địa chỉ Email của người nhận chính.'],
    ['👥','Cc (Carbon copy)','Nhập địa chỉ người nhận bản sao, để người đó theo dõi nội dung.'],
    ['🕶️','Bcc (Blind carbon copy)','Nhập địa chỉ người nhận bản sao ẩn danh; người nhận khác không thấy địa chỉ này.'],
    ['📝','Chủ đề (Subject)','Tóm tắt ngắn gọn nội dung chính của Email.'],
    ['📄','Nội dung (Body)','Nơi soạn nội dung Email, có thể kèm hình ảnh, liên kết hoặc tệp.'],
    ['✒️','Chữ kí (Signature)','Thông tin cuối thư như tên, lớp, số điện thoại hoặc Email liên hệ.'],
    ['❗','Mức quan trọng','Có 3 mức: thấp (Low), trung bình (Normal) và cao (High).']
  ];
  const win='<div class="cwt"><span>✉️ Thư mới</span><span>– ⤢ ✕</span></div>'
    +'<div class="cwr"><label>Đến</label><span class="cwf hs" data-p="0"><i class="cwc">hoa.nt@hoabinh.edu.vn ✕</i></span></div>'
    +'<div class="cwr"><label>Cc</label><span class="cwf hs" data-p="1"><i class="cwc">lan.tt@hoabinh.edu.vn ✕</i> <i class="cwc">nam.lv@hoabinh.edu.vn ✕</i></span></div>'
    +'<div class="cwr"><label>Bcc</label><span class="cwf hs" data-p="2"><i class="cwc">loptruong@hoabinh.edu.vn ✕</i></span></div>'
    +'<div class="cwr"><label>Chủ đề</label><span class="cwf hs" data-p="3">Báo cáo tiến độ và nộp bài tập nhóm</span></div>'
    +'<div class="cwb hs" data-p="4">Kính gửi cô Hoa,<br>Nhóm 1 xin báo cáo tiến độ bài tập nhóm: cả nhóm đã hoàn thành phần nội dung chính.<br>Em xin gửi cô bài tập nhóm trong tập tin đính kèm.<br>Em cảm ơn cô!<br><span class="cwa">📎 bai-tap-nhom-1.docx</span></div>'
    +'<div class="cwg hs" data-p="5"><b>Nguyễn Minh An</b><br>Học sinh lớp 5A · Trường Tiểu học Hòa Bình<br>minhan@hoabinh.edu.vn</div>'
    +'<div class="cwd"><span class="cws">Gửi ➤</span><span class="cwo">A 📎 🔗 🙂 🖼️</span><span class="cwi hs" data-p="6">❗ ▾</span><span class="cwo">🗑️</span></div>';
  readHot('#pts','cmp',win,P,all,()=>$('#pre').classList.remove('locked'));
}

/* ---------- bài 2 (tiếp): luyện phân biệt Đến · Cc · Bcc; xong mới hiện nút "Em đã hiểu" ---------- */
function readPre(all){
  const box=$('#pre'); gate.pre=false;
  box.innerHTML='<div class="aplock"><span>🔒</span><b>Hoàn thành phần trên để mở khóa!</b></div><p class="aph"><b>Luyện tập: phân biệt Đến (To), Cc và Bcc</b></p><div class="practice"><div class="ph"><span>✏️ Câu hỏi tình huống</span><span id="pcnt"></span></div><div class="pb" id="pbx"></div></div>';
  /* thứ tự câu hỏi được xáo trộn (và lưu lại để tải lại trang vẫn đúng thứ tự); thứ tự đáp án cũng được xáo trộn */
  if(!Array.isArray(state.ui.preo)||state.ui.preo.length!==PRE.length||!state.ui.preo.every(i=>PRE[i])){ state.ui.preo=shuffle(PRE.map((_,i)=>i)); state.ui.pre=0; Object.keys(state.done).forEach(k=>{ if(k[0]==='x') delete state.done[k]; }); save(); }
  const QS=state.ui.preo.map(i=>shuffleQ(PRE[i]));
  const pb=$('#pbx'), cnt=$('#pcnt'); let qn=Math.min(state.ui.pre||0,QS.length-1);
  if(all){ cnt.textContent='✅ Đã làm xong'; QS.forEach(Q=>{ const h=el('<div class="solved"></div>'); pb.appendChild(h); solvedQ(Q,h); }); gate.pre=true; okCheck(); return; }
  const show=()=>{
    state.ui.pre=qn; save(); cnt.textContent='Câu '+(qn+1)+'/'+QS.length;
    const last=qn===QS.length-1, key='x'+qn;
    const after=f=>{
      if(last){ gate.pre=true; okCheck(); f.insertAdjacentHTML('afterend','<div class="nxrow"><b>Giỏi quá! Em đã phân biệt được Đến, Cc và Bcc. 🎉</b></div>'); }
      else { f.insertAdjacentHTML('afterend','<div class="nxrow"><button class="btn go" id="pnx">Câu tiếp ▶</button></div>'); $('#pnx').onclick=()=>{ qn++; show(); }; }
    };
    if(state.done[key]){ solvedQ(QS[qn],pb); after(pb.querySelector('.fb')); }
    else askQ(QS[qn],pb,()=>{},f=>{ state.done[key]=1; save(); after(f); });
  };
  show();
}

/* ---------- bài 3: bấm từng nút phản hồi của một thư nhận được ---------- */
function readReply(all){
  const P=[
    [svgIc(IC_REPLY,'#d93025',44),'Trả lời (Reply)','Dùng khi em chỉ muốn trả lời người gửi Email. Ở thư này, chỉ có cô Hoa nhận được câu trả lời của em.'],
    [svgIc(IC_ALL,'#188038',44),'Trả lời tất cả (Reply All)','Dùng khi tất cả mọi người có mặt trong Email cần xem câu trả lời của em. Ở thư này, cô Hoa, Lan và Nam đều nhận được.'],
    [svgIc(IC_FWD,'#1a73e8',44),'Chuyển tiếp (Forward)','Dùng khi em muốn gửi một Email đã nhận cho người khác. Em chọn người nhận mới ở ô “Đến”.']
  ];
  const win='<div class="cwt"><span>📥 Hộp thư đến</span><span>– ⤢ ✕</span></div>'
    +'<div class="cwr cwsub"><b>Kết quả bài tập nhóm</b><span class="cwtag">Hộp thư đến</span></div>'
    +'<div class="cwr cwfrom"><span class="cwav">👩</span><div><b>Cô Hoa</b> &lt;hoa.nt@hoabinh.edu.vn&gt;<br><small>đến tôi, lan.tt, nam.lv</small></div></div>'
    +'<div class="cwb">Chào các em,<br>Cô đã nhận được bài tập nhóm. Cả nhóm làm rất tốt!<br>Chúc các em học tập vui vẻ.<br>Cô Hoa</div>'
    +'<div class="cwd cwbtn"><span class="cwr2 hs" data-p="0">'+svgIc(IC_REPLY,'#d93025',18)+' Trả lời</span><span class="cwr2 hs" data-p="1">'+svgIc(IC_ALL,'#188038',18)+' Trả lời tất cả</span><span class="cwr2 hs" data-p="2">'+svgIc(IC_FWD,'#1a73e8',18)+' Chuyển tiếp</span></div>';
  readHot('#rpl','rep',win,P,all);
}
