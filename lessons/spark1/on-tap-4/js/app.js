/* ============ DỮ LIỆU ============ */
const CHAPTERS = [
  {icon:"🏭", name:"Xưởng Chữ",
   text:"Cô giáo giao cho lớp 4 làm <b>áp phích</b> cho Ngày hội Sáng tạo. Robot Bíp dẫn Mi đến <b>Xưởng Chữ</b> – nơi các chữ cái được “thay áo mới”!"},
  {icon:"📚", name:"Thư viện Tài liệu",
   text:"Áp phích xong rồi! Bíp đưa Mi vào <b>Thư viện Tài liệu</b>, nơi cất giữ hàng nghìn tập tin điện tử. Mỗi tập tin đều có tên gọi riêng đó!"},
  {icon:"🎀", name:"Tháp Ruy-băng",
   text:"Trên đỉnh <b>Tháp Ruy-băng</b> có thanh thẻ (Tab) thần kỳ của phần mềm Word. Ai biết lệnh nằm ở đâu thì mới mở được cửa tháp!"},
  {icon:"🎭", name:"Sân khấu Trình chiếu",
   text:"Ngày hội sắp bắt đầu! Mi phải chọn đúng <b>công cụ</b> để kể cho cả lớp nghe về kì nghỉ hè và buổi cắm trại của mình."},
  {icon:"⌨️", name:"Thung lũng Bàn phím",
   text:"Chặng cuối cùng! Mi lạc vào <b>Thung lũng Bàn phím</b>, nơi mỗi phím có một phép thuật riêng. Hãy giúp Mi dùng đúng phím nhé!"}
];

const Q = [
 // ---- Chặng 1
 {ch:0, who:"🤖", say:"Bíp có 3 việc làm với chữ. Việc nào là <b>định dạng</b> (làm chữ trông khác đi), việc nào thì không?",
  type:"yesno", prompt:"Em hãy chọn <b>Có</b> nếu đó là ví dụ về định dạng văn bản hoặc <b>Không</b> nếu không phải.",
  rows:[["In đậm văn bản.",true],["Xóa một phần của đoạn văn bản.",false],["Thay đổi kích cỡ và màu sắc của văn bản.",true]],
  explain:"In đậm, đổi cỡ chữ, đổi màu chữ là <b>định dạng</b> – làm chữ trông khác đi. Xóa chữ là <b>sửa nội dung</b>, không phải định dạng."},
 {ch:0, who:"👧", say:"Mi đang soạn lời giới thiệu cho áp phích bằng một tài liệu văn bản. Mi có thể làm gì với nó nhỉ?",
  type:"multi", pick:2, prompt:"Em hãy chọn những thao tác có thể thực hiện với tài liệu văn bản (Text Document)?",
  options:["Tăng kích thước phông chữ (Font Size).","Thay đổi mật khẩu (Password) Email của em.","Làm nổi bật (Highlight) văn bản."], answer:[0,2],
  explain:"Trong tài liệu văn bản, em có thể <b>tăng cỡ chữ</b> và <b>tô nổi bật (Highlight)</b>. Đổi mật khẩu Email là việc của tài khoản Email, không làm trong tài liệu."},
 {ch:0, who:"👧", say:"Tiêu đề áp phích trông chán quá! Mi muốn các chữ cái và chữ số có hình dáng thật đẹp.",
  type:"mc", prompt:"Em đang tạo một áp phích trên máy tính. Em nên thay đổi điều gì để thay đổi giao diện của các chữ cái và số trong tiêu đề áp phích đó?",
  options:["Phông chữ (Font)","Lề (Margin)","Dãn cách đoạn văn (Paragraph Spacing)","Kích thước trang (Page Size)"], answer:0,
  explain:"<b>Phông chữ (Font)</b> quyết định hình dáng của chữ cái và chữ số. Lề, dãn cách, kích thước trang chỉ thay đổi bố cục trang."},
 {ch:0, who:"🤖", say:"Ngày xưa người ta gõ chữ bằng <b>máy đánh chữ</b> lạch cạch. Bây giờ thì sao nhỉ?",
  type:"mc", prompt:"Em hãy cho biết, cần sử dụng phần mềm ứng dụng nào để tạo ra các chữ cái tiêu chuẩn thay vì sử dụng máy đánh chữ?",
  options:["Một ứng dụng xử lý văn bản.","Một ứng dụng bảng tính.","Một ứng dụng CAD.","Một ứng dụng trình chiếu."], answer:0,
  explain:"<b>Ứng dụng xử lý văn bản</b> (ví dụ Microsoft Word) dùng để gõ thư, bài viết – thay cho máy đánh chữ."},
 // ---- Chặng 2
 {ch:1, who:"🤖", say:"Bíp tìm thấy tập tin này trên kệ sách. Nó có ảnh, có lời chào “Dear…” và chữ ký “Sincerely”.",
  type:"mc", img:"img/thu.png", prompt:"Em hãy cho biết, đây là loại tập tin gì?",
  options:["Một tài liệu (Document)","Một trang tính (Spreadsheet)","Một trang Web (Web Page)","Một bài trình chiếu (Presentation)"], answer:0,
  explain:"Đây là một lá thư – một <b>tài liệu (Document)</b> được tạo bằng phần mềm xử lý văn bản."},
 {ch:1, who:"👧", say:"Thư viện này không có tờ giấy nào cả, tất cả đều nằm trong máy tính!",
  type:"mc", prompt:"Em hãy cho biết, tài liệu điện tử có đặc điểm gì?",
  options:["Không có điều nào ở trên.","Là những tài liệu đã được in và phân phối.","Phải luôn luôn được in.","Giúp bảo vệ môi trường bằng cách giảm lãng phí giấy."], answer:3, fixedOrder:true,
  explain:"Tài liệu điện tử đọc được ngay trên máy, không cần in → <b>tiết kiệm giấy, bảo vệ môi trường</b>."},
 {ch:1, who:"🤖", say:"Ôi không! Các nhãn tên bị rơi hết rồi. Em giúp Bíp dán lại đúng chỗ nhé!",
  type:"match", prompt:"Em hãy ghép mỗi thuật ngữ với định nghĩa tương ứng.",
  pairs:[
   ["Trình chiếu (Presentation)","Một phần mềm được sử dụng để hiển thị thông tin trong trình chiếu."],
   ["Phông chữ (Font)","Một tập hợp các ký tự có thể in hoặc hiển thị được; xác định hình dạng, kích thước và sự xuất hiện của các chữ cái, số và ký tự đặc biệt."],
   ["Tài liệu (Document)","Một loại tập tin được tạo bởi một phần mềm ứng dụng; có thể được thao tác bởi ứng dụng đó."],
   ["Định dạng (Formatting)","Cách thông tin sẽ trông như thế nào trên bản in hoặc hiển thị trên màn hình."],
   ["Hình ảnh (Image)","Một hình ảnh hoặc đồ họa được lưu trữ dưới dạng điện tử."]],
  explain:"Tuyệt! Em đã nhớ đúng nghĩa của 5 thuật ngữ quan trọng."},
 // ---- Chặng 3
 {ch:2, who:"🤖", say:"Mi viết xong lá thư và muốn <b>đóng</b> tài liệu lại. Lệnh <b>Đóng (Close)</b> trốn ở thẻ nào?",
  type:"tabs", prompt:"Em sẽ tìm thấy lệnh Đóng (Close) trên thẻ (Tab) nào? Hãy bấm vào thẻ đó.",
  answer:"A",
  explain:"Lệnh <b>Close</b> nằm trong thẻ <b>File (A)</b> – cùng chỗ với Save, Open, Print."},
 {ch:2, who:"👧", say:"Mi muốn đổi phông chữ cho <b>cả lá thư</b> một lần. Phải chọn hết chữ trước đã!",
  type:"mc", prompt:"Em hãy cho biết, tổ hợp phím nào sau đây được sử dụng để chọn tất cả văn bản trong cùng một tài liệu?",
  options:["Shift + A","Alt + A","Ctrl + A","Tab + A"], answer:2,
  explain:"<b>Ctrl + A</b> = chọn tất cả (A là chữ đầu của <i>All</i> – tất cả)."},
 // ---- Chặng 4
 {ch:3, who:"👧", say:"Mi có rất nhiều ảnh, bản đồ và video của kì nghỉ hè ở biển 🏖️. Mi muốn cả lớp cùng xem!",
  type:"mc", prompt:"Em nên sử dụng ứng dụng nào để hiển thị ảnh, bản đồ và Video từ kì nghỉ hè của mình cho các bạn trong lớp học cùng xem?",
  options:["Áp phích (Poster)","Bài trình chiếu (Slide Presentation)","Trang tính (Spreadsheet)","Tài liệu (Document)"], answer:1,
  explain:"<b>Bài trình chiếu</b> chứa được ảnh, bản đồ và cả video, chiếu lên màn hình lớn cho cả lớp cùng xem."},
 {ch:3, who:"🤖", say:"Bạn Nam cũng muốn khoe ảnh, bản đồ và video của buổi cắm trại ⛺. Bíp nên khuyên Nam dùng gì?",
  type:"mc", prompt:"Em nên sử dụng định dạng nào để hiển thị ảnh, bản đồ và Video từ buổi cắm trại của mình cho các bạn trong lớp cùng xem?",
  options:["Một tài liệu (Document)","Một bài trình chiếu (Slide Presentation)","Một trang tính (Spreadsheet)","Một áp phích (Poster)"], answer:1,
  explain:"Vẫn là <b>bài trình chiếu</b>! Áp phích và tài liệu không phát được video."},
 {ch:3, who:"👧", say:"Mi sẽ lên sân khấu nói chuyện với cả trường. Bài trình chiếu sẽ giúp Mi lúc nào?",
  type:"mc", prompt:"Em hãy cho biết, tùy chọn nào là phù hợp nhất để sử dụng bài trình chiếu kĩ thuật số (Digital Presentation)?",
  options:["Phát biểu trước khán giả.","Viết một bài luận cho trường học.","Gửi tin nhắn văn bản cho một nhóm người."], answer:0,
  explain:"Bài trình chiếu giúp người nói khi <b>phát biểu trước khán giả</b> – khán giả vừa nghe vừa nhìn slide."},
 {ch:3, who:"🤖", say:"Cô giáo còn giao bài tập: mỗi bạn viết một bài dài kể về Ngày hội Sáng tạo.",
  type:"mc", prompt:"Em hãy cho biết, trong tình huống nào thì một tài liệu (Document) sẽ hữu ích hơn một bản trình chiếu (Presentation)?",
  options:["Phát biểu trước khán giả.","Viết một bài luận cho trường học.","Gửi tin nhắn văn bản cho một nhóm người."], answer:1,
  explain:"Bài luận có nhiều chữ, nhiều đoạn → dùng <b>tài liệu (Document)</b> là phù hợp nhất."},
 // ---- Chặng 5
 {ch:4, who:"👧", say:"Bạn Vy đang viết báo cáo và cần <b>thụt lề dòng đầu tiên</b> của mỗi đoạn vào nửa inch.",
  type:"keys", pick:1, prompt:"Vy nên nhấn phím nào (một lần) để thụt lề chính xác dòng đầu tiên? Hãy bấm vào phím đó.",
  answer:["Tab"],
  explain:"Nhấn phím <b>Tab</b> một lần sẽ thụt lề dòng đầu tiên vào nửa inch."},
 {ch:4, who:"🤖", say:"Gõ xong một đoạn rồi, Bíp muốn xuống dòng để bắt đầu <b>đoạn mới</b>.",
  type:"mc", prompt:"Em nên nhấn phím đặc biệt nào trên bàn phím tiêu chuẩn để bắt đầu một đoạn mới trong tài liệu văn bản?",
  options:["Backspace/Delete","Esc","Enter/Return","Tab","Caps Lock"], answer:2,
  explain:"Phím <b>Enter/Return</b> đưa con trỏ xuống dòng, bắt đầu đoạn mới."},
 {ch:4, who:"👧", say:"Bạn Thu đăng ký một trang web và muốn viết hoa <b>chỉ chữ cái đầu</b> trong tên mình: “Thu”.",
  type:"keys", pick:2, prompt:"Thu nên giữ phím nào trong khi gõ để chỉ viết hoa chữ cái đầu tiên trong tên của bạn ấy?",
  answer:["ShiftL","ShiftR"],
  explain:"Giữ phím <b>Shift</b> rồi gõ chữ → chữ đó viết hoa. Bàn phím có <b>2 phím Shift</b> ở hai bên."},
 {ch:4, who:"🤖", say:"Thử thách ghép phím! Mỗi phím phép thuật cần về đúng nhà của mình.",
  type:"match", prompt:"Em hãy ghép mỗi phím với cách sử dụng thích hợp.",
  pairs:[
   ["Tab","Di chuyển giữa các mục hoặc di chuyển về phía trước 5 ký tự (tùy nhiệm vụ)."],
   ["Enter/Return","Đưa con trỏ đến đầu dòng tiếp theo; cũng dùng để thực hiện một lệnh."],
   ["Esc","Phím ở trên cùng bên trái bàn phím; dùng để hủy bỏ hoặc đóng một hoạt động."],
   ["Caps Lock","Giúp nhập các chữ cái viết hoa liên tục."],
   ["Backspace/Delete","Xóa ký tự trước / sau vị trí hiện tại của con trỏ."]],
  explain:"Xuất sắc! Em đã thuộc phép thuật của 5 phím đặc biệt."}
];

const GOOD_LINES = ["Giỏi quá!","Chính xác!","Tuyệt vời!","Đúng rồi, siêu ghê!","Bíp-bíp! Hoàn hảo!"];

/* ============ CHẾ ĐỘ ============ */
/* test.html đặt window.TEST_MODE = true trước khi nạp file này:
   làm bài không hiện đúng/sai, không hiện đáp án, chỉ xem kết quả khi nộp bài */
const TEST = !!window.TEST_MODE;

/* ============ TRẠNG THÁI ============ */
const MAX = 1000;
let state = {i:0, results:[], sound:true, shownChapter:-1};
const $ = s => document.querySelector(s);
const stage = $("#stage");
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]} return a; };
/* xáo trộn thứ tự câu trong từng chặng, giữ nguyên thứ tự các chặng */
/* ---- lưu tiến độ vào trình duyệt ---- */
const SAVE_KEY = TEST ? "snowt-k4-cd4-test-v1" : "snowt-k4-cd4-v1";
const ORIGINAL = [...Q];
let saving = true;   // tắt khi mở bằng #q=N
function save(){
  if(!saving) return;
  try{ localStorage.setItem(SAVE_KEY, JSON.stringify({order:Q.map(q=>ORIGINAL.indexOf(q)), results:state.results, i:state.i})); }catch(e){}
}
function clearSave(){ try{ localStorage.removeItem(SAVE_KEY); }catch(e){} }
function loadSave(){
  try{
    const d = JSON.parse(localStorage.getItem(SAVE_KEY));
    if(!d || !Array.isArray(d.order) || d.order.length!==ORIGINAL.length) return false;
    if([...d.order].sort((a,b)=>a-b).some((v,k)=>v!==k)) return false;
    Q.length = 0; d.order.forEach(k=>Q.push(ORIGINAL[k]));
    state.results = Array.isArray(d.results) ? d.results : [];
    state.i = Math.min(Math.max(d.i|0,0), Q.length);
    // vào thẳng câu đang làm, trừ khi đó là câu đầu tiên của một chặng
    state.shownChapter = state.i>0 && state.i<Q.length && Q[state.i-1].ch===Q[state.i].ch ? Q[state.i].ch : -1;
    return true;
  }catch(e){ return false; }
}
function shuffleByChapter(){
  const out = CHAPTERS.flatMap((_,c)=>shuffle(Q.filter(q=>q.ch===c)));
  Q.length = 0; out.forEach(q=>Q.push(q));
}
const score = () => Math.round(state.results.reduce((t,x)=>t+(x||0),0) * MAX / Q.length);

/* ============ ÂM THANH ============ */
let ac;
function tone(freqs, dur=0.12){
  if(!state.sound) return;
  try{
    ac = ac || new (window.AudioContext||window.webkitAudioContext)();
    freqs.forEach((f,k)=>{
      const o=ac.createOscillator(), g=ac.createGain();
      o.type="triangle"; o.frequency.value=f;
      const t=ac.currentTime+k*dur;
      g.gain.setValueAtTime(.18,t); g.gain.exponentialRampToValueAtTime(.001,t+dur*1.6);
      o.connect(g).connect(ac.destination); o.start(t); o.stop(t+dur*1.7);
    });
  }catch(e){}
}
const sGood = ()=>tone([523,659,784]);
const sBad  = ()=>tone([220,180],.15);
const sClick= ()=>tone([440],.05);
$("#btnSound").onclick = ()=>{state.sound=!state.sound; $("#btnSound").textContent=state.sound?"🔊":"🔇";};
$("#btnReset").onclick = ()=>{
  if(!confirm("Em có chắc muốn làm lại từ đầu? Điểm hiện tại sẽ bị xóa.")) return;
  clearSave(); location.hash=""; location.reload();
};

/* ============ BẢN ĐỒ & ĐIỂM ============ */
function drawMap(){
  const cur = state.i < Q.length ? Q[state.i].ch : CHAPTERS.length;
  $("#map").innerHTML = CHAPTERS.map((c,k)=>
    `<div class="stop ${k<cur?'done':k===cur?'on':''}"><div class="dot">${k<cur?'✅':c.icon}</div><span>${c.name}</span></div>`
  ).join("") + `<div class="stop ${cur>=CHAPTERS.length?'on':''}"><div class="dot">🏆</div><span>Về đích</span></div>`;
}
function setScore(){
  if(TEST){ $("#starBox").textContent = state.i < Q.length ? `📝 Câu ${state.i+1} / ${Q.length}` : `🏅 ${score()} / ${MAX}`; return; }
  $("#starCount").textContent = score();
}

/* ============ MÀN HÌNH ============ */
function showIntro(){
  drawMap();
  stage.innerHTML = `
  <section class="card intro">
    <div class="cast">👧🤖</div>
    <h1>Mi & Bíp và Ngày hội Sáng tạo<small>${TEST?"Kiểm tra":"Ôn tập"} CD4 · Sáng tạo nội dung · Lớp 4</small></h1>
    ${TEST?`<p><b>📝 Bài kiểm tra</b> gồm <b>${Q.length} câu</b>. Mỗi câu em chọn đáp án rồi bấm <b>“Chốt đáp án”</b> – đã chốt thì không sửa được. Trong lúc làm bài sẽ <b>không hiện đúng/sai</b>. Làm xong em mới biết điểm và xem lại đáp án. Điểm tối đa là <b>${MAX} điểm</b>.</p>
    <button class="big" id="startBtn">Bắt đầu làm bài 📝</button>`:`<p>Bạn <b>Mi</b> học lớp 4 cùng chú robot <b>Bíp</b> phải vượt qua <b>5 chặng</b> để chuẩn bị cho Ngày hội Sáng tạo của trường. Mỗi câu em chỉ được trả lời <b>một lần</b>, đúng hay sai đều sang câu tiếp theo. Điểm tối đa là <b>${MAX} điểm</b>!</p>
    <button class="big" id="startBtn">Bắt đầu phiêu lưu 🚀</button>`}
  </section>`;
  $("#startBtn").onclick = ()=>{ sClick(); shuffleByChapter(); state.i=0; state.results=[]; save(); next(); };
}

function next(){
  if(state.i >= Q.length) return showEnd();
  const q = Q[state.i];
  if(q.ch !== state.shownChapter) return showChapter(q.ch);
  showQuestion();
}

function showChapter(ch){
  state.shownChapter = ch; drawMap();
  const c = CHAPTERS[ch];
  stage.innerHTML = `
  <section class="card splash pop">
    <span class="tag">Chặng ${ch+1} / ${CHAPTERS.length}</span>
    <div class="icon">${c.icon}</div>
    <h2>${c.name}</h2>
    <p>${c.text}</p>
    <button class="big alt" id="goCh">Vào chặng ${ch+1} ➜</button>
  </section>`;
  $("#goCh").onclick = ()=>{ sClick(); showQuestion(); };
  $("#goCh").focus();
}

function showQuestion(){
  drawMap(); setScore();
  const q = Q[state.i];
  const pickTxt = q.pick>1 ? `<span class="pick">Chọn ${q.pick}</span>` : "";
  stage.innerHTML = `
  <section class="card">
    <div class="story"><div class="who">${q.who}</div><div class="bubble">${q.say}</div></div>
    <div class="qnum">Câu ${state.i+1} / ${Q.length}</div>
    <div class="prompt">${q.prompt}${pickTxt}</div>
    ${q.img?`<div class="with-img"><img class="qimg" src="${q.img}" alt="Hình minh họa câu hỏi"><div id="area"></div></div>`:`<div id="area"></div>`}
    <div id="fbBox"></div>
    <div class="actions" id="acts"></div>
  </section>`;
  ({mc:renderMC, multi:renderMulti, yesno:renderYesNo, match:renderMatch, tabs:renderTabs, keys:renderKeys})[q.type](q);
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ---- chấm điểm (chỉ 1 lần) rồi cho sang câu tiếp ---- */
function finish(frac){
  if(TEST){   // ghi nhận im lặng, sang câu tiếp ngay, không lộ đúng/sai
    state.results[state.i] = frac; state.i++; save(); next(); return;
  }
  const q = Q[state.i];
  const before = score();
  state.results[state.i] = frac;
  state.i++; save(); state.i--;   // tải lại trang sẽ vào câu kế tiếp
  const gain = score() - before;
  setScore(); $("#starBox").classList.remove("pop"); void $("#starBox").offsetWidth; $("#starBox").classList.add("pop");
  $("#area").querySelectorAll("button,.def").forEach(b=>{ b.disabled=true; b.onclick=null; b.onkeydown=null; b.style.cursor="default"; });
  let cls, face, head;
  if(frac===1){ sGood(); cls="good"; face="🤩"; head=GOOD_LINES[Math.random()*GOOD_LINES.length|0]; }
  else if(frac>0){ sBad(); cls="try"; face="🙂"; head="Đúng một phần!"; }
  else { sBad(); cls="try"; face="😅"; head="Chưa đúng rồi! Cùng xem đáp án nhé."; }
  $("#fbBox").innerHTML = `<div class="fb ${cls} pop"><div class="face">${face}</div><div><b>${head} +${gain} điểm</b><br>${q.explain}</div></div>`;
  const last = state.i === Q.length-1;
  $("#acts").innerHTML = `<button class="big go" id="nextBtn">${last?"Về đích 🏆":"Câu tiếp theo ➜"}</button>`;
  $("#nextBtn").onclick = ()=>{ sClick(); state.i++; next(); };
  $("#nextBtn").focus({preventScroll:true});
}
function checkBtn(fn){
  const last = state.i === Q.length-1;
  $("#acts").innerHTML = `<button class="big" id="chk" disabled>${TEST?(last?"Chốt đáp án & nộp bài 📨":"Chốt đáp án ➜"):"Kiểm tra ✔"}</button>`;
  $("#chk").onclick = ()=>{ sClick(); fn(); };
}
const enableCheck = on => { const b=$("#chk"); if(b) b.disabled=!on; };
/* chế độ kiểm tra: câu chọn 1 → chọn trước, bấm “Chốt đáp án” sau (tránh bấm nhầm) */
function pickOne(els, isOk){
  checkBtn(()=>{ const s=els.find(e=>e.classList.contains("sel")); finish(s&&isOk(s)?1:0); });
  els.forEach(b=>b.onclick=()=>{ sClick(); els.forEach(x=>x.classList.remove("sel")); b.classList.add("sel"); enableCheck(true); });
}
/* câu chọn nhiều: (số chọn đúng − số chọn sai) / số đáp án, không âm */
const multiFrac = (sel, ans) => Math.max(0, sel.filter(x=>ans.includes(x)).length - sel.filter(x=>!ans.includes(x)).length) / ans.length;

/* ---- trắc nghiệm 1 đáp án ---- */
function renderMC(q){
  const order = q.fixedOrder ? q.options.map((_,k)=>k) : shuffle(q.options.map((_,k)=>k));
  $("#area").innerHTML = `<div class="opts">${order.map((k,n)=>
    `<button class="opt" data-k="${k}"><span class="k">${"ABCDE"[n]}</span><span>${q.options[k]}</span></button>`).join("")}</div>`;
  const opts = [...$("#area").querySelectorAll(".opt")];
  if(TEST) return pickOne(opts, b=>+b.dataset.k===q.answer);
  opts.forEach(b=>b.onclick=()=>{
    const ok = +b.dataset.k===q.answer;
    if(!ok) b.classList.add("bad","shake");
    opts.find(x=>+x.dataset.k===q.answer).classList.add("ok","pop");
    finish(ok?1:0);
  });
}

/* ---- chọn nhiều ---- */
function renderMulti(q){
  const order = shuffle(q.options.map((_,k)=>k));
  $("#area").innerHTML = `<div class="opts">${order.map((k,n)=>
    `<button class="opt" data-k="${k}"><span class="k">${"ABCDE"[n]}</span><span>${q.options[k]}</span></button>`).join("")}</div>`;
  const opts = [...$("#area").querySelectorAll(".opt")];
  checkBtn(()=>{
    const sel = opts.filter(b=>b.classList.contains("sel")).map(b=>+b.dataset.k);
    opts.forEach(b=>{ const k=+b.dataset.k; b.classList.remove("sel");
      if(q.answer.includes(k)) b.classList.add("ok"); else if(sel.includes(k)) b.classList.add("bad"); });
    finish(multiFrac(sel, q.answer));
  });
  opts.forEach(b=>b.onclick=()=>{
    sClick();
    if(!b.classList.contains("sel") && opts.filter(x=>x.classList.contains("sel")).length>=q.pick) return;
    b.classList.toggle("sel");
    enableCheck(opts.filter(x=>x.classList.contains("sel")).length===q.pick);
  });
}

/* ---- Có / Không ---- */
function renderYesNo(q){
  $("#area").innerHTML = `<div class="yn">${q.rows.map((r,k)=>
    `<div class="yn-row" data-k="${k}"><span class="t">${r[0]}</span><button class="y" data-v="1">✔ Có</button><button class="n" data-v="0">✘ Không</button></div>`).join("")}</div>`;
  const rows = [...$("#area").querySelectorAll(".yn-row")];
  const val = r => { const s=r.querySelector(".sel"); return s?s.dataset.v==="1":null; };
  checkBtn(()=>{
    let n=0;
    rows.forEach(r=>{
      const right = q.rows[r.dataset.k][1], ok = val(r)===right;
      r.classList.add(ok?"ok":"bad"); if(ok) n++;
      else { r.querySelectorAll("button").forEach(x=>x.classList.remove("sel")); r.querySelector(right?".y":".n").classList.add("sel"); }
    });
    finish(n/rows.length);
  });
  rows.forEach(r=>r.querySelectorAll("button").forEach(b=>b.onclick=()=>{
    sClick(); r.querySelectorAll("button").forEach(x=>x.classList.remove("sel")); b.classList.add("sel");
    enableCheck(rows.every(x=>val(x)!==null));
  }));
}

/* ---- Ghép đôi ---- */
function renderMatch(q){
  const defOrder = shuffle(q.pairs.map((_,k)=>k));
  const chipOrder = shuffle(q.pairs.map((_,k)=>k));
  $("#area").innerHTML = `
    <p class="hint-sm">👉 Bấm vào một nhãn màu vàng, rồi bấm vào ô định nghĩa phù hợp. Bấm vào nhãn đã đặt để lấy ra.</p>
    <div class="tray" id="tray">${chipOrder.map(k=>`<button class="chip" data-k="${k}">${q.pairs[k][0]}</button>`).join("")}</div>
    <div class="defs">${defOrder.map(k=>`<div class="def" role="button" tabindex="0" data-k="${k}"><div class="slot">thả nhãn vào đây</div><div>${q.pairs[k][1]}</div></div>`).join("")}</div>`;
  let picked = null;
  const tray = $("#tray");
  const defs = [...$("#area").querySelectorAll(".def")];
  const update = ()=> enableCheck(defs.every(d=>d.querySelector(".slot .chip")));
  tray.querySelectorAll(".chip").forEach(c => c.onclick = e=>{
    e.stopPropagation(); sClick();
    if(c.parentElement.classList.contains("slot")){ // trả về khay
      const slot=c.parentElement; tray.appendChild(c); slot.innerHTML="thả nhãn vào đây"; c.classList.remove("sel"); picked=null; update(); return;
    }
    if(picked===c){ c.classList.remove("sel"); picked=null; return; }
    picked?.classList.remove("sel"); picked=c; c.classList.add("sel");
  });
  const place = d=>{
    if(!picked) return; sClick();
    const slot=d.querySelector(".slot"); const old=slot.querySelector(".chip");
    if(old) tray.appendChild(old);
    slot.innerHTML=""; slot.appendChild(picked); picked.classList.remove("sel"); picked=null; update();
  };
  defs.forEach(d=>{ d.onclick=()=>place(d); d.onkeydown=e=>{ if(e.key==="Enter"||e.key===" "){e.preventDefault();place(d);} }; });
  checkBtn(()=>{
    let n=0;
    defs.forEach(d=>{
      const c=d.querySelector(".slot .chip"), sl=d.querySelector(".slot");
      if(c.dataset.k===d.dataset.k){ d.classList.add("ok"); c.classList.add("ok"); n++; }
      else {
        d.classList.add("bad");
        sl.style.cssText="display:flex;flex-direction:column;gap:3px;padding:4px";
        sl.insertAdjacentHTML("beforeend",`<span style="font-size:13px;color:#0a7a45;font-weight:800">Đúng là: ${q.pairs[d.dataset.k][0]}</span>`);
      }
    });
    finish(n/defs.length);
  });
}

/* ---- Thanh thẻ Word ---- */
function renderTabs(q){
  const tabs = [["A","File"],["B","Home"],["C","Insert"],["D","Design"],[null,"Layout"],[null,"References"],[null,"Mailings"],[null,"Review"],["E","View"],[null,"Help"]];
  $("#area").innerHTML = `<div class="ribbon">${tabs.map(([l,t])=> l
      ? `<button class="tab lab" data-l="${l}"><span class="badge">${l}</span>${t}</button>`
      : `<span class="tab plain">${t}</span>`).join("")}</div><div class="ruler"></div>`;
  const tabsEl = [...$("#area").querySelectorAll(".tab.lab")];
  if(TEST) return pickOne(tabsEl, b=>b.dataset.l===q.answer);
  tabsEl.forEach(b=>b.onclick=()=>{
    const ok = b.dataset.l===q.answer;
    if(!ok) b.classList.add("bad","shake");
    tabsEl.find(x=>x.dataset.l===q.answer).classList.add("ok");
    finish(ok?1:0);
  });
}

/* ---- Bàn phím ---- */
const KB = [
  [["Esc",1,"Esc"],..."F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12".split(" ").map(f=>[f,1]),["Delete",1.1,"Delete"]],
  [["`"],["1"],["2"],["3"],["4"],["5"],["6"],["7"],["8"],["9"],["0"],["-"],["="],["⟵ Backspace",2,"Backspace"]],
  [["Tab ⇥",1.5,"Tab"],..."QWERTYUIOP".split("").map(c=>[c]),["["],["]"],["\\",1.5]],
  [["Caps Lock",1.85,"CapsLock"],..."ASDFGHJKL".split("").map(c=>[c]),[";"],["'"],["↵ Enter",2.15,"Enter"]],
  [["⇧ Shift",2.4,"ShiftL"],..."ZXCVBNM".split("").map(c=>[c]),[","],["."],["/"],["⇧ Shift",2.6,"ShiftR"]],
  [["Ctrl",1.3,"CtrlL"],["Fn",1],["⊞",1],["Alt",1.3,"AltL"],["",6.2,"Space"],["Alt",1.3,"AltR"],["Ctrl",1.3,"CtrlR"],["←",1],["↑↓",1],["→",1]]
];
function renderKeys(q){
  $("#area").innerHTML = `<div class="kb">${KB.map((row,ri)=>`<div class="kr">${row.map(([label,w=1,id])=>
    `<button class="key ${ri===0?'sm':''}" style="flex:${w}" data-id="${id||label}">${label}</button>`).join("")}</div>`).join("")}</div>
    <p class="kb-tip">${q.pick>1?`Bấm chọn ${q.pick} phím rồi bấm “${TEST?"Chốt đáp án":"Kiểm tra"}”.`:TEST?"Bấm chọn phím rồi bấm “Chốt đáp án”.":"Bấm vào phím đúng trên bàn phím."}</p>`;
  const keys = [...$("#area").querySelectorAll(".key")];
  const reveal = sel => keys.forEach(k=>{ k.classList.remove("sel");
    if(q.answer.includes(k.dataset.id)) k.classList.add("ok"); else if(sel.includes(k.dataset.id)) k.classList.add("bad"); });
  if(q.pick===1 && TEST) return pickOne(keys, k=>q.answer.includes(k.dataset.id));
  if(q.pick===1){
    keys.forEach(k=>k.onclick=()=>{ reveal([k.dataset.id]); finish(q.answer.includes(k.dataset.id)?1:0); });
    return;
  }
  checkBtn(()=>{
    const sel = keys.filter(k=>k.classList.contains("sel")).map(k=>k.dataset.id);
    reveal(sel); finish(multiFrac(sel, q.answer));
  });
  keys.forEach(k=>k.onclick=()=>{
    sClick();
    if(!k.classList.contains("sel") && keys.filter(x=>x.classList.contains("sel")).length>=q.pick) return;
    k.classList.toggle("sel");
    enableCheck(keys.filter(x=>x.classList.contains("sel")).length===q.pick);
  });
}

/* ---- Kết thúc ---- */
function showEnd(){
  drawMap();
  const s = score(), pct = s/MAX;
  const medal = pct===1?"🏆":pct>=.8?"🥇":pct>=.6?"🥈":"🥉";
  const title = pct===1?"Siêu Nhà Sáng Tạo":pct>=.8?"Nhà Sáng Tạo Xuất Sắc":pct>=.6?"Nhà Sáng Tạo Chăm Chỉ":"Nhà Sáng Tạo Tập Sự";
  const correct = state.results.filter(x=>x===1).length;
  const missList = Q.map((_,i)=>i).filter(i=>state.results[i]!==1);
  stage.innerHTML = `
  <section class="card end pop">
    <h2 style="font-size:30px">${TEST?"📨 Em đã nộp bài kiểm tra!":"🎉 Ngày hội Sáng tạo thành công rực rỡ!"}</h2>
    <p style="font-size:17px">Nhờ có em, Mi và Bíp đã vượt qua cả 5 chặng.</p>
    <div class="end-grid">
      <div class="cert">
        <div class="medal">${medal}</div>
        <h2>${title}</h2>
        <div class="st">${s} / ${MAX} điểm</div>
        <p>Đúng hoàn toàn ${correct} / ${Q.length} câu</p>
        <p>${TEST?"Kiểm tra ":""}CD4 · Sáng tạo nội dung · Lớp 4</p>
      </div>
      <div class="review">
        <h3>📊 Kết quả từng câu</h3>
        <div class="tiles">${Q.map((_,i)=>{ const r=state.results[i]||0, pts=Math.round(r*MAX/Q.length);
          return `<div class="tile ${r===1?'t-ok':r>0?'t-part':'t-bad'}"><b>Câu ${i+1}</b><span>${r===1?'✔':r>0?'½':'✘'} ${pts}đ</span></div>`; }).join("")}</div>
        ${missList.length?`<h3>📝 Những câu em nên xem lại</h3><div class="miss">${missList.map(i=>
          `<div class="miss-item"><div class="mq"><b>Câu ${i+1}.</b> ${Q[i].prompt}</div><div class="ma">💡 ${Q[i].explain}</div></div>`).join("")}</div>`
          :`<p style="font-size:18px"><b>Em trả lời đúng tất cả. Quá đỉnh! 🤖💯</b></p>`}
      </div>
    </div>
    <div class="actions"><button class="big" id="again">${TEST?"Làm lại bài kiểm tra 📝":"Chơi lại từ đầu 🚀"}</button></div>
  </section>`;
  confetti(pct>=.6?60:25);
  setScore();
  $("#again").onclick = ()=>{ sClick(); Object.assign(state,{i:0,results:[],shownChapter:-1}); setScore(); shuffleByChapter(); save(); next(); };
}

function confetti(n){
  const em=["🎉","⭐","🎈","✨","🎊","💜"];
  for(let k=0;k<n;k++){
    const d=document.createElement("div"); d.className="confetti";
    d.textContent=em[k%em.length]; d.style.left=Math.random()*100+"vw";
    d.style.animationDuration=(2.5+Math.random()*2.5)+"s"; d.style.animationDelay=Math.random()*1.2+"s";
    document.body.appendChild(d); setTimeout(()=>d.remove(),6500);
  }
  tone([523,659,784,1047],.14);
}

const jump = !TEST && location.hash.match(/q=(\d+)/);
if(jump){ saving=false; state.i=Math.min(Math.max(+jump[1]-1,0),Q.length-1); state.shownChapter=Q[state.i].ch; showQuestion(); }
else if(loadSave()){ setScore(); next(); }
else showIntro();
