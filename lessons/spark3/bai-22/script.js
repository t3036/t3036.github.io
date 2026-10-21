/* ---------- tiện ích ---------- */
const $ = (s, r=document) => r.querySelector(s);
const el = (html) => { const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; };
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]} return a };
const stars = n => '⭐'.repeat(n) + '☆'.repeat(3-n);

const LESSON_NAME="Các tính năng tiện ích";

/* ---------- 5 thẻ học: nội dung, hình minh họa, bài tập nhỏ ---------- */
const THEORY=[
 {i:"✏️",h:"Tự động sửa lỗi (Autocorrect)",
  t:"<b>Tự động sửa lỗi (Autocorrect)</b> là tính năng tự động sửa lỗi <b>chính tả</b> hoặc <b>gõ sai</b> để cải thiện độ chính xác và dễ đọc. Tính năng này có trong các phần mềm <b>xử lí văn bản</b> và <b>ứng dụng nhắn tin</b> văn bản.",
  e:"Nếu em vô tình gõ “tshi” thay vì “this”, tính năng tự động sửa lỗi sẽ thay bằng từ đúng là “this”."},
 {i:"💡",h:"Tự động hoàn thành (Autocomplete)",
  t:"<b>Tự động hoàn thành (Autocomplete)</b> giúp em hoàn thành từ hoặc cụm từ <b>nhanh hơn</b> khi gõ, bằng việc <b>dự đoán</b> và <b>gợi ý</b> các từ tiếp theo dựa trên những kí tự đã nhập.",
  e:"Khi tìm kiếm trên Internet, công cụ tìm kiếm đề xuất “Tự động hoàn thành” khi em gõ “Tự động”."},
 {i:"⌨️",h:"Phím tắt phổ biến",
  t:"<b>Phím tắt</b> là cách nhấn <b>hai phím cùng lúc</b> để làm việc nhanh hơn mà không cần dùng chuột. Mỗi phím tắt thường dùng chữ cái đầu của việc cần làm trong tiếng Anh.",
  e:"Copy → C · Paste → V · Save → S · Undo → Z · Cut → X (nhấn cùng phím Ctrl)."},
 {i:"🍎",h:"Phím tắt trên Windows và macOS",
  t:"Trên <b>Windows</b> em dùng phím <b>Ctrl</b>. Trên máy <b>macOS</b> em dùng phím <b>CMD</b> thay cho Ctrl. Để chuyển lần lượt sang các ứng dụng đang mở khác, em nhấn <b>Alt + Tab</b> (hoặc <b>CMD + Tab</b>).",
  e:"Ctrl + C hoặc CMD + C: sao chép · Ctrl + V hoặc CMD + V: dán."},
 {i:"🤖",h:"Rà soát lỗi văn bản với AI",
  t:"Tính năng sửa lỗi AI giúp <b>tiết kiệm thời gian</b> nhưng <b>cần kiểm tra</b>. Không chấp nhận mọi gợi ý sửa lỗi nếu <b>chưa hiểu</b>. <b>Người viết</b> chịu trách nhiệm với văn bản cuối cùng.",
  e:"AI có thể gợi ý đổi cả ý của câu. Em hãy đọc lại và chỉ nhận gợi ý nào đúng ý mình."},
 {i:"🔁",h:"Nhắc lại Bài 21: đạo văn và trích dẫn",
  t:"<b>Đạo văn (Plagiarism)</b> là dùng tác phẩm của người khác mà <b>không ghi nguồn</b>. <b>Trích dẫn (Citation)</b> là <b>nêu rõ nguồn</b> lấy thông tin.",
  e:""},
];

const VIS=[
 /* 1 autocorrect */
 `<div class="steps"><div class="st vbox no"><div class="big">⌨️</div>Em gõ: <b>tshi</b></div><div class="ar">→</div><div class="st vbox ok"><div class="big">✨</div>Máy sửa: <b>this</b></div></div>
  <div class="steps" style="margin-top:10px"><div class="st vbox no"><div class="big">💬</div>Em gõ: <b>àv</b></div><div class="ar">→</div><div class="st vbox ok"><div class="big">✨</div>Máy sửa: <b>và</b></div></div>`,
 /* 2 autocomplete */
 `<div class="paper"><div style="font-weight:800">🔍 Tự động</div>
   <div class="vbox ok" style="text-align:left;margin-top:8px">💡 Tự động <b>hoàn thành</b></div>
   <div class="vbox" style="text-align:left;margin-top:6px">Tự động <b>sửa lỗi</b></div></div>
  <div class="cap">Em gõ vài kí tự đầu, máy gợi ý phần còn lại</div>
  <table class="tbl" style="margin-top:10px"><tr><th>Tính năng gần giống</th><th>Làm gì?</th></tr><tr><td>Spellcheck</td><td>Gạch chân từ sai để em tự sửa</td></tr><tr><td>Grammarcheck</td><td>Kiểm tra ngữ pháp</td></tr><tr><td>Text prediction</td><td>Gợi ý từ tiếp theo (gần giống Autocomplete)</td></tr></table>`,
 /* 3 phím tắt */
 `<table class="tbl"><tr><th>Việc cần làm</th><th>Phím tắt</th></tr><tr><td>Sao chép (Copy)</td><td><span class="kcap">Ctrl</span> + <span class="kcap">C</span></td></tr><tr><td>Cắt (Cut)</td><td><span class="kcap">Ctrl</span> + <span class="kcap">X</span></td></tr><tr><td>Dán (Paste)</td><td><span class="kcap">Ctrl</span> + <span class="kcap">V</span></td></tr><tr><td>Hoàn tác (Undo)</td><td><span class="kcap">Ctrl</span> + <span class="kcap">Z</span></td></tr><tr><td>Lưu (Save)</td><td><span class="kcap">Ctrl</span> + <span class="kcap">S</span></td></tr></table>`,
 /* 4 Windows & Mac */
 `<div class="steps"><div class="st vbox te"><div class="big">🪟</div><b>Windows</b><br><span class="kcap">Ctrl</span> + <span class="kcap">C</span><br><span class="kcap">Alt</span> + <span class="kcap">Tab</span></div>
   <div class="ar">=</div><div class="st vbox te"><div class="big">🍎</div><b>macOS</b><br><span class="kcap">CMD</span> + <span class="kcap">C</span><br><span class="kcap">CMD</span> + <span class="kcap">Tab</span></div></div>`,
 /* 5 AI */
 `<div class="chat"><div class="chead"><span class="cav">✦</span><b>Trợ lý AI</b></div><div class="cbody">
   <div class="bub u">Rà soát lỗi giúp mình: “Hôm nay em đi hoc ở trường.”</div><div class="bub">Gợi ý: sửa “hoc” thành “học”.</div></div></div>
  <div class="steps" style="margin-top:10px"><div class="st vbox ok">✔ Đọc từng gợi ý, hiểu rồi mới chấp nhận</div><div class="st vbox ok">✔ Người viết chịu trách nhiệm</div><div class="st vbox no">✘ Chấp nhận mọi gợi ý khi chưa hiểu</div></div>`,
 /* 6 nhắc lại bài 21 */
 `<div class="steps"><div class="st vbox no"><div class="big">🚨</div><b>Đạo văn</b><br>Giấu nguồn</div><div class="st vbox ok"><div class="big">📌</div><b>Trích dẫn</b><br>Nêu rõ nguồn</div></div>`,
];

/* bài tập nhỏ cho từng thẻ (o/a = chọn, tf = đúng/sai theo dòng, sort = ghép vào ô, html+key = chạm vào hình) */
const PRACT=[
 [{q:"Em hãy cho biết, tính năng <b>tự động sửa lỗi chính tả khi gõ</b> là gì?",o:["Tự động sửa (Autocorrect)","Chú thích cuối trang (Footnote)","Tự động hoàn thành (Autocomplete)","Dữ liệu (Data)"],a:0,why:"Tự động sửa (Autocorrect) là tính năng tự sửa lỗi chính tả khi em gõ."},
  {q:"Theo em, tính năng tự động sửa lỗi thường xuất hiện ở <b>đâu</b>?",o:["Trong sách giáo khoa","Trong vở ghi chép","Trên phần mềm soạn thảo văn bản (ví dụ như Word, Google Docs)","Trong video trên mạng"],a:2,why:"Tự động sửa lỗi có trong phần mềm soạn thảo văn bản như Word, Google Docs và ứng dụng nhắn tin."}],
 [{q:"Em hãy cho biết, tính năng nào giúp em <b>hoàn thành câu hoặc từ</b> khi bạn gõ một vài kí tự đầu tiên?",o:["Autocorrect","Spellcheck","Autocomplete","Text prediction"],a:2,why:"Autocomplete giúp hoàn thành từ hoặc câu khi em mới gõ vài kí tự đầu."},
  {q:"Với mỗi câu phát biểu, em hãy chọn <b>Đúng</b> nếu định nghĩa đó là chính xác hoặc chọn <b>Sai</b> nếu không phải.",tf:["Đạo văn (Plagiarism) là sao chép tác phẩm của người khác và giả vờ như đó là của em.","Tự động hoàn tất (AutoComplete) là khi máy tính tự động gợi ý từ ngữ trong khi em gõ.","Tự sửa (AutoCorrect) là khi máy tính tự động sửa đáp án của những bài toán cho em."],a:[true,true,false],why:"AutoComplete gợi ý từ khi em gõ. AutoCorrect sửa lỗi chính tả, không sửa đáp án toán."}],
 [{q:"Em có thể sử dụng <b>phím tắt nào</b> để <b>dán</b> thông tin sau khi sao chép hoặc cắt?",o:["Ctrl + V","Ctrl + Z","Ctrl + C","Ctrl + X"],a:0,why:"Ctrl + V là phím tắt để dán."},
  {q:"Em có thể sử dụng <b>phím tắt nào</b> để <b>hoàn tác</b> nội dung cuối cùng em đã nhập trong tài liệu?",o:["Ctrl + Z","Ctrl + V","Ctrl + C","Ctrl + X"],a:0,why:"Ctrl + Z là phím tắt để hoàn tác (Undo)."},
  {q:"Em hãy hoàn thành từng hành động: <b>chạm thẻ phím tắt, rồi chạm vào hành động</b> tương ứng.",sort:{bins:[['Sao chép (Copy)'],['Cắt (Cut)'],['Dán (Paste)'],['Lưu (Save)'],['Hoàn tác (Undo)']],items:[['Ctrl + C',0],['Ctrl + X',1],['Ctrl + V',2],['Ctrl + S',3],['Ctrl + Z',4]],why:"Copy = Ctrl + C · Cut = Ctrl + X · Paste = Ctrl + V · Save = Ctrl + S · Undo = Ctrl + Z."}}],
 [{q:"Em hãy di chuyển từng <b>phím tắt</b> sang <b>trường hợp sử dụng</b> tương ứng.",sort:{bins:[['Chuyển lần lượt sang các ứng dụng đang mở khác'],['Sao chép văn bản hoặc tập tin'],['Dán văn bản hoặc tập tin']],items:[['Alt + Tab hoặc CMD + Tab',0],['Ctrl + C hoặc CMD + C',1],['Ctrl + V hoặc CMD + V',2]],why:"Alt + Tab chuyển ứng dụng. Ctrl + C sao chép. Ctrl + V dán."}},
  {q:"Trên máy Mac, phím nào thường được dùng <b>thay cho Ctrl</b> trong các phím tắt?",o:["CMD","Esc","Enter","Shift"],a:0,why:"Trên macOS dùng CMD thay cho Ctrl, ví dụ CMD + C để sao chép."}],
 [{q:"AI gợi ý sửa một câu mà em <b>chưa hiểu</b>. Em nên làm gì?",o:["Chấp nhận ngay cho nhanh","Tìm hiểu hoặc hỏi giáo viên trước khi quyết định","Xóa cả bài","Nhờ bạn nộp bài thay"],a:1,why:"Không chấp nhận mọi gợi ý nếu chưa hiểu. Hãy tìm hiểu hoặc hỏi giáo viên."},
  {q:"Việc làm nào là <b>nên</b>, việc nào <b>không nên</b> khi dùng AI rà soát lỗi?",lab:["Nên","Không nên"],tf:["Đọc lại từng gợi ý của AI","Chấp nhận mọi gợi ý mà không đọc","Tự chịu trách nhiệm với bài viết cuối cùng"],a:[true,false,true],why:"Em đọc và kiểm tra gợi ý, và chịu trách nhiệm với bài cuối cùng."}],
 [{q:"Ví dụ nào là <b>đạo văn</b>, ví dụ nào là <b>trích dẫn</b>?",lab:["Đạo văn","Trích dẫn"],tf:["Sử dụng tác phẩm của người khác như là của mình","Cung cấp thông tin về hình ảnh em lấy từ Internet và dùng trong bài tập của mình"],a:[true,false],why:"Giấu nguồn là đạo văn. Nêu rõ nguồn là trích dẫn."}],
];

/* ---------- 3 nhiệm vụ, học bài và trắc nghiệm ---------- */
const MISSIONS = [
{icon:"📖",label:"Học bài",run:theory,steps:["Chạm vào một thẻ để <b>lật</b> và đọc.","Đọc xong, bấm <b>“Em đã hiểu ✓”</b>.","Một <b>cửa sổ bài tập nhỏ</b> sẽ hiện ra. Trả lời đúng để <b>mở khóa</b> thẻ tiếp theo 🔓.","Mở hết các thẻ rồi sang phần luyện tập."],tip:"Em có thể chạm vào thẻ đã đọc để đọc lại."},
{icon:"✏️",label:"Sửa & gợi ý",run:m1,steps:["Bước 1: <b>chạm vào một thẻ</b>, rồi chạm vào ô tính năng. Hoặc kéo thả.","Bấm <b>Kiểm tra</b>. Thẻ đúng sẽ xanh, thẻ sai quay về khay.","Bước 2: đọc câu hỏi màu xanh, rồi <b>chạm đúng chỗ</b> trên màn hình.","Tìm đủ 3 manh mối để hoàn thành."],tip:"Autocorrect = tự sửa từ sai · Autocomplete = gợi ý để hoàn thành."},
{icon:"⌨️",label:"Phím tắt",run:m2,steps:["Bước 1: ghép <b>phím tắt</b> với trường hợp sử dụng.","Bước 2: đọc yêu cầu, rồi <b>chạm vào đúng phím</b> trên bàn phím.","Mỗi lần chạm đúng, em sẽ biết thêm một phím tắt.","Chạm đủ 5 phím để hoàn thành."],tip:"C = Copy · V = Paste · X = Cut · Z = Undo · S = Save."},
{icon:"🤖",label:"AI rà soát lỗi",run:m3,steps:["Đọc từng <b>gợi ý của AI</b> và các tình huống.","Chọn một nút cho mỗi tình huống.","Chọn sai thì đọc gợi ý rồi thử lại.","Làm đúng hết để hoàn thành."],tip:"AI gợi ý – em kiểm tra – người viết chịu trách nhiệm."},
{icon:"🌍",label:"Việc thật",run:real,steps:["Đọc <b>tình huống</b> em gặp ngoài đời.","Chọn cách xử lí đúng, ghép thẻ hoặc chạm các bước theo thứ tự.","Chọn sai thì đọc gợi ý rồi thử lại.","Bấm <b>“Tình huống tiếp”</b> cho đến hết."],tip:"Máy sửa giúp em nhưng em vẫn phải đọc lại trước khi gửi."},
{icon:"✅",label:"Trắc nghiệm",run:quiz,steps:["Đọc kỹ câu hỏi.","Chạm vào đáp án em chọn.","Đúng: đáp án xanh và có lời giải thích. Sai: đáp án đỏ – hãy chọn lại.","Bấm <b>“Câu tiếp”</b> để làm tiếp."],tip:"Đọc cả các đáp án trước khi chọn."},
];

const QUIZ=[
 {q:"Em hãy cho biết, tính năng <b>tự động sửa lỗi chính tả khi gõ</b> là gì?",o:["Tự động sửa (Autocorrect)","Chú thích cuối trang (Footnote)","Tự động hoàn thành (Autocomplete)","Dữ liệu (Data)"],a:0,why:"Tự động sửa (Autocorrect) là tính năng tự sửa lỗi chính tả khi em gõ."},
 {q:"Theo em, tính năng tự động sửa lỗi thường xuất hiện ở <b>đâu</b>?",o:["Trong sách giáo khoa","Trong vở ghi chép","Trên phần mềm soạn thảo văn bản (ví dụ như Word, Google Docs)","Trong video trên mạng"],a:2,why:"Tự động sửa lỗi có trong phần mềm xử lí văn bản như Word, Google Docs."},
 {q:"Khi em gõ một từ sai chính tả trên điện thoại hoặc máy tính, <b>tính năng nào</b> giúp sửa lỗi và <b>thay thế</b> từ sai bằng từ đúng?",o:["Autocomplete","Autocorrect","Spellcheck","Grammarcheck"],a:1,why:"Autocorrect tự động thay thế từ sai bằng từ đúng."},
 {q:"Em hãy cho biết, tính năng nào giúp em <b>hoàn thành câu hoặc từ</b> khi bạn gõ một vài kí tự đầu tiên?",o:["Autocorrect","Spellcheck","Autocomplete","Text prediction"],a:2,why:"Autocomplete giúp hoàn thành từ hoặc câu khi em mới gõ vài kí tự đầu."},
 {q:"Với mỗi câu phát biểu, em hãy chọn <b>Đúng</b> nếu định nghĩa đó là chính xác hoặc chọn <b>Sai</b> nếu không phải.",tf:["Đạo văn (Plagiarism) là sao chép tác phẩm của người khác và giả vờ như đó là của em.","Tự động hoàn tất (AutoComplete) là khi máy tính tự động gợi ý từ ngữ trong khi em gõ.","Tự sửa (AutoCorrect) là khi máy tính tự động sửa đáp án của những bài toán cho em."],a:[true,true,false],why:"AutoComplete gợi ý từ khi em gõ. AutoCorrect sửa lỗi chính tả, không sửa đáp án toán."},
 {q:"Em hãy nối các <b>thuật ngữ</b> với <b>ví dụ</b> phù hợp: chạm thẻ ví dụ, rồi chạm vào thuật ngữ.",sort:{bins:[['Đạo văn (Plagiarism)'],['Trích dẫn (Citation)'],['Tự sửa (AutoCorrect)'],['Tự động hoàn tất (AutoComplete)']],items:[['Sử dụng tác phẩm của người khác như là của mình',0],['Cung cấp thông tin về hình ảnh em lấy từ Internet và dùng trong bài tập của mình',1],['Khi em soạn một tin nhắn để gửi cho giáo viên của mình, máy tính sửa àv thành và',2],['Khi tìm kiếm trên Internet, công cụ tìm kiếm đề xuất chó so với mèo khi em gõ đến đoạn chó so vớ',3]],why:"Nhận của người khác là của mình là đạo văn. Nêu rõ nguồn là trích dẫn. àv→và là AutoCorrect. Gợi ý khi gõ dở là AutoComplete."}},
 {q:"Em có thể sử dụng <b>phím tắt nào</b> để <b>dán</b> thông tin sau khi sao chép hoặc cắt?",o:["Ctrl + V","Ctrl + Z","Ctrl + C","Ctrl + X"],a:0,why:"Ctrl + V là phím tắt để dán."},
 {q:"Em có thể sử dụng <b>phím tắt nào</b> để <b>hoàn tác</b> nội dung cuối cùng em đã nhập trong tài liệu?",o:["Ctrl + Z","Ctrl + V","Ctrl + C","Ctrl + X"],a:0,why:"Ctrl + Z là phím tắt để hoàn tác (Undo)."},
 {q:"Em hãy hoàn thành từng hành động: chạm thẻ phím tắt, rồi chạm vào hành động tương ứng.",sort:{bins:[['Sao chép (Copy)'],['Cắt (Cut)'],['Dán (Paste)'],['Lưu (Save)'],['Hoàn tác (Undo)']],items:[['Ctrl + C',0],['Ctrl + X',1],['Ctrl + V',2],['Ctrl + S',3],['Ctrl + Z',4]],why:"Copy = Ctrl + C · Cut = Ctrl + X · Paste = Ctrl + V · Save = Ctrl + S · Undo = Ctrl + Z."}},
 {q:"Em hãy di chuyển từng <b>phím tắt</b> sang <b>trường hợp sử dụng</b> tương ứng.",sort:{bins:[['Chuyển lần lượt sang các ứng dụng đang mở khác'],['Sao chép văn bản hoặc tập tin'],['Dán văn bản hoặc tập tin']],items:[['Alt + Tab hoặc CMD + Tab',0],['Ctrl + C hoặc CMD + C',1],['Ctrl + V hoặc CMD + V',2]],why:"Alt + Tab chuyển ứng dụng. Ctrl + C sao chép. Ctrl + V dán."}},
 {q:"Tính năng sửa lỗi AI giúp tiết kiệm thời gian. Em cần làm gì khi AI gợi ý sửa lỗi?",o:["Kiểm tra, chỉ chấp nhận gợi ý em hiểu và đúng ý mình","Chấp nhận mọi gợi ý, không cần đọc","Nhờ AI chịu trách nhiệm về bài viết","Xóa văn bản gốc"],a:0,why:"Không chấp nhận mọi gợi ý nếu chưa hiểu. Người viết chịu trách nhiệm với văn bản cuối cùng."},
];

/* ---------- trạng thái ---------- */
const state = {cur:0, got:MISSIONS.map(()=>null), intro:true};
try{ const s=JSON.parse(localStorage.getItem('k5b22')||'null'); if(s&&s.got&&s.got.length===MISSIONS.length){ state.got=s.got; state.read=s.read||[]; const f=s.got.findIndex(x=>x===null); state.cur=f<0?MISSIONS.length:f; state.intro=state.cur===0; } }catch(e){}
let TEACH=false; try{ TEACH=localStorage.getItem('k5b22_teach')==='1'; }catch(e){}
function save(){ try{localStorage.setItem('k5b22',JSON.stringify({got:state.got,read:state.read||[]}))}catch(e){} }
function restart(force){
  if(!force && !confirm('Em muốn làm lại từ đầu? Tiến độ đã lưu sẽ bị xóa.')) return;
  state.got=MISSIONS.map(()=>null); state.read=[]; state.cur=0; state.intro=true; save(); render();
}
function renderMap(){
  const map=$('#map'); map.innerHTML='';
  MISSIONS.forEach((m,i)=>{
    const unlocked = TEACH || i===0 || state.got[i-1]!==null;
    const b=el(`<button ${unlocked?'':'disabled'} class="${state.got[i]!==null?'done':''} ${i===state.cur&&!state.intro?'cur':''}"><span class="n">${state.got[i]!==null?'✅':m.icon}</span><span class="l">${m.label}</span></button>`);
    b.onclick=()=>{state.cur=i;state.intro=false;render()};
    map.appendChild(b);
  });
  $('#starCount').textContent = state.got.reduce((a,b)=>a+(b||0),0);
}
function render(){
  renderMap();
  const hw=$('#howto'), lay=$('#layout'), cm=MISSIONS[state.cur];
  if(state.intro||!cm){ hw.style.display='none'; lay.classList.add('solo'); }
  else { lay.classList.remove('solo'); hw.style.display='';
    hw.innerHTML='<h3>📝 Cách làm bài</h3><ol>'+cm.steps.map(x=>'<li>'+x+'</li>').join('')+'</ol><p class="tip">💡 '+cm.tip+'</p>'; }
  const st=$('#stage'); st.innerHTML='';
  window.scrollTo({top:0,behavior:'smooth'});
  if(state.intro) return intro(st);
  if(state.cur>=MISSIONS.length) return finale(st);
  MISSIONS[state.cur].run(st);
}
function brief(icon,title,text){
  return `<div class="brief"><div class="bh"><span class="badge">${icon}</span><h2>${title}</h2></div><p>${text}</p></div>`;
}
function fb(node,kind,html){ node.className='fb show '+kind; node.innerHTML=html; }
function finish(st,stars_,box){
  state.got[state.cur] = Math.max(state.got[state.cur]||0, stars_);
  save(); renderMap();
  const last = state.cur===MISSIONS.length-1;
  box.insertAdjacentHTML('beforeend',`<div class="row" style="margin-top:14px;justify-content:space-between"><b>Kết quả: ${stars(stars_)}</b><button class="btn orange" id="next">${last?'Xem hồ sơ thám tử 🏅':'Nhiệm vụ tiếp theo ▶'}</button></div>`);
  $('#next').onclick=()=>{state.cur++;render()};
}
const starsFor = w => w===0?3:w<=2?2:1;

/* ---------- câu hỏi dùng chung ---------- */
function askQ(Q, host, onWrong, onDone){
  host.innerHTML='<div class="qtext">'+Q.q+'</div><div class="ops"></div><div class="fb"></div>';
  const ops=host.querySelector('.ops'), f=host.querySelector('.fb'); let done=false;
  const win=()=>{ done=true; fb(f,'ok','✔ Đúng rồi! '+(Q.why||'')); onDone(f); };
  const lose=msg=>{ onWrong(); fb(f,'no',msg); };
  if(Q.html){
    ops.innerHTML=Q.html;
    ops.querySelectorAll('[data-k]').forEach(z=>z.onclick=e=>{ e.stopPropagation(); if(done||z.classList.contains('bad')) return;
      if(z.dataset.k===Q.key){ z.classList.add('good'); win(); } else { z.classList.add('bad'); lose('Chưa đúng, hãy chạm vào chỗ khác.'); } });
  } else if(Q.sort){
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
  } else if(Array.isArray(Q.a)){
    const chosen=new Set();
    Q.o.forEach((t,k)=>{ const b=el('<button class="opt"><b>'+'ABCDEF'[k]+'.</b> '+t+'</button>');
      b.onclick=e=>{ e.stopPropagation(); if(done) return; chosen.has(k)?chosen.delete(k):chosen.add(k); b.classList.toggle('sel'); b.classList.remove('bad'); };
      ops.appendChild(b); });
    const chk=el('<button class="btn">Kiểm tra</button>'); ops.appendChild(chk);
    chk.onclick=e=>{ e.stopPropagation(); if(done) return;
      if(chosen.size!==Q.a.length) return fb(f,'info','Câu này cần chọn '+Q.a.length+' đáp án.');
      const ok=Q.a.every(k=>chosen.has(k));
      if(ok){ ops.querySelectorAll('.opt').forEach((b,k)=>{ if(chosen.has(k)){ b.classList.remove('sel'); b.classList.add('good'); } }); chk.disabled=true; win(); }
      else { ops.querySelectorAll('.opt').forEach((b,k)=>{ if(chosen.has(k)&&!Q.a.includes(k)) b.classList.add('bad'); }); lose('Chưa đúng. Hãy đọc lại và chọn lại.'); } };
  } else {
    Q.o.forEach((t,k)=>{ const b=el('<button class="opt"><b>'+'ABCD'[k]+'.</b> '+t+'</button>');
      b.onclick=e=>{ e.stopPropagation(); if(done||b.classList.contains('bad')) return;
        if(k===Q.a){ b.classList.add('good'); win(); } else { b.classList.add('bad'); lose('Chưa đúng, hãy chọn lại.'); } };
      ops.appendChild(b); });
  }
}
/* xáo trộn thứ tự đáp án (trừ câu Đúng/Sai 2 lựa chọn) */
function shuffleQ(Q){
  if(!Q.o || Q.o.length<3) return Q;
  const idx=shuffle(Q.o.map((_,i)=>i)), a=Array.isArray(Q.a)?Q.a.map(x=>idx.indexOf(x)):idx.indexOf(Q.a);
  return Object.assign({},Q,{o:idx.map(i=>Q.o[i]),a});
}

/* ---------- Học bài (flashcard mở khóa dần) ---------- */
function theory(st){
  const n=THEORY.length; const read=(state.read&&state.read.length===n)?state.read:new Array(n).fill(false); state.read=read;
  st.innerHTML = brief('📖','Học bài: '+LESSON_NAME,'Lật từng thẻ để đọc. Đọc xong bấm “Em đã hiểu”, một cửa sổ bài tập nhỏ sẽ hiện ra. Làm đúng để mở thẻ tiếp theo.')+
    '<div class="prog"><i id="pg" style="width:0"></i></div><div class="cards" id="cards"></div><div class="fb" id="fb"></div>';
  const box=$('#cards'), f=$('#fb');
  const unlockedUpTo=()=>{ if(TEACH) return n; const i=read.indexOf(false); return i<0?n:i; };
  function draw(){
    box.innerHTML='';
    const u=unlockedUpTo();
    THEORY.forEach((c,i)=>{
      const locked=i>u, flipped=box._open===i;
      let d;
      if(locked) d=el('<div class="fc locked"><div class="em">🔒</div><h3>Thẻ '+(i+1)+'</h3><small>Đọc thẻ trước để mở khóa</small></div>');
      else if(flipped){
        d=el('<div class="fc back"><p>'+c.t+'</p>'+(VIS[i]?'<div class="vwrap">'+VIS[i]+'</div>':'')+''+(c.e?'<div class="eg">💡 '+c.e+'</div>':'')+'<button class="btn">'+(read[i]?'Đóng thẻ':'Em đã hiểu ✓')+'</button></div>');
        d.querySelector('button').onclick=ev=>{
          ev.stopPropagation();
          if(read[i]){ box._open=-1; draw(); return; }
          const list=PRACT[i]; let qn=0;
          const mq=el('<div class="modal-back"><div class="modal"><div class="mh"><span>✏️ Bài tập nhỏ <span class="cnt"></span></span><button class="mx">✕ Quay lại thẻ</button></div><div class="mb"><p class="mi">Em đã đọc xong thẻ “'+c.h+'”. Hãy trả lời để mở thẻ tiếp theo nhé!</p><div class="qhost"></div></div></div></div>');
          const closeM=()=>{ mq.remove(); document.body.style.overflow=''; };
          mq.querySelector('.mx').onclick=closeM;
          const host=mq.querySelector('.qhost');
          const next=()=>{
            mq.querySelector('.cnt').textContent=list.length>1?'(Câu '+(qn+1)+'/'+list.length+')':'';
            askQ(list[qn],host,()=>{},fx=>{
              const last=qn===list.length-1;
              fx.insertAdjacentHTML('beforeend','<div style="margin-top:10px"><button class="btn orange" id="cont">'+(last?'Tiếp tục ▶':'Câu tiếp ▶')+'</button></div>');
              fx.querySelector('#cont').onclick=e3=>{ e3.stopPropagation();
                if(!last){ qn++; next(); } else { closeM(); read[i]=true; save(); box._open=-1; draw(); update(i); } };
            });
          };
          document.body.appendChild(mq); document.body.style.overflow='hidden'; next();
        };
      } else {
        d=el('<div class="fc'+(read[i]?' read':'')+'"><div class="em">'+c.i+'</div><h3>'+c.h+'</h3><small>'+(read[i]?'✔ Đã đọc – chạm để đọc lại':'Chạm để lật thẻ')+'</small></div>');
        d.onclick=()=>{ box._open=i; draw(); };
      }
      box.appendChild(d);
    });
  }
  function update(i){
    const cnt=read.filter(Boolean).length;
    $('#pg').style.width=(cnt/n*100)+'%';
    if(cnt===n){
      fb(f,'ok','🎉 Em đã đọc hết '+n+' thẻ! Sang phần luyện tập nhé.');
      if(state.got[state.cur]===null){ state.got[state.cur]=0; save(); renderMap(); }
      if(!$('#next')) f.insertAdjacentHTML('beforeend','<div style="margin-top:10px"><button class="btn orange" id="next">Sang phần luyện tập ▶</button></div>');
      $('#next').onclick=()=>{state.cur++;render()};
    } else if(i<n-1){
      const t=box.children[i+1]; if(t) t.scrollIntoView({behavior:'smooth',block:'nearest'});
    }
  }
  box._open=-1; draw(); $('#pg').style.width=(read.filter(Boolean).length/n*100)+'%';
}

/* ---------- trò chơi phân loại: chạm thẻ rồi chạm ô, hoặc kéo thả ---------- */
function sortGame(host, cfg, onWrong, onDone){
  const items=shuffle(cfg.items.map(([t,b],id)=>({id,t,b,loc:'pool',locked:false})));
  let picked=null;
  host.innerHTML=`<div class="pool" id="pool"></div><div class="bins ${cfg.bins.length===2||cfg.bins.length===4?'c2':'c3'}" id="bins">${shuffle(cfg.bins.map((b,i)=>[b,i])).map(([b,i])=>`<div class="bin" data-b="${i}"><h3>${b[0]}</h3><small>${b[1]||''}</small><div class="in"></div></div>`).join('')}</div>
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

/* ---------- chạm vào trang: lần lượt từng manh mối ---------- */
function clueGame(host, cfg, onWrong, onDone){
  host.innerHTML=(cfg.pre||'')+'<div class="clue-q" id="cq"></div><div id="pg2">'+cfg.page+'</div><div class="fb" id="cfb"></div>';
  const cq=host.querySelector('#cq'), f=host.querySelector('#cfb'); let k=0;
  const show=()=>{ const n=cfg.clues.length; cq.innerHTML='🔎 '+(k==n-1?'Manh mối cuối cùng (đã tìm '+k+'/'+n+', còn 1 manh mối nữa)':'Manh mối '+(k+1)+'/'+n+' (đã tìm '+k+'/'+n+')')+': '+cfg.clues[k].q; cq.classList.remove('pop'); void cq.offsetWidth; cq.classList.add('pop'); };
  show();
  host.querySelectorAll('[data-k]').forEach(z=>z.onclick=e=>{
    e.stopPropagation(); if(k>=cfg.clues.length||z.classList.contains('good')||z.classList.contains('bad')) return;
    const c=cfg.clues[k];
    if(z.dataset.k===c.key){ z.classList.add('good'); fb(f,'ok','✔ '+c.why); if(cfg.onHit) cfg.onHit(c,host); k++;
      if(k<cfg.clues.length) show(); else { cq.innerHTML='🏅 Tìm đủ manh mối!'; onDone(f); } }
    else { z.classList.add('bad'); onWrong(); fb(f,'no',c.miss||'Chưa đúng, hãy nhìn kỹ lại rồi chạm chỗ khác.'); setTimeout(()=>z.classList.remove('bad'),700); }
  });
}

/* ---------- chọn nút cho từng tình huống ---------- */
function judge(host, intro, labels, list, onWrong, onDone){
  host.innerHTML='<p class="tip">'+intro+'</p><div class="jl"></div><div class="fb"></div>';
  const box=host.querySelector('.jl'), f=host.querySelector('.fb'); let done=0;
  list.forEach(s=>{
    const d=el('<div class="scn">'+s.t+'<div class="row"><button class="chip" data-a="1">'+labels[0]+'</button><button class="chip" data-a="0">'+labels[1]+'</button></div></div>');
    d.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{
      if(d.dataset.fin) return;
      if((b.dataset.a==='1')===s.ok){ d.dataset.fin=1; d.classList.add('right'); b.classList.add('good'); d.insertAdjacentHTML('beforeend','<div style="margin-top:6px;font-size:1rem">✔ '+s.why+'</div>');
        if(++done===list.length) onDone(f);
      } else { onWrong(); b.classList.add('bad'); setTimeout(()=>b.classList.remove('bad'),600); fb(f,'no','Chưa đúng, hãy đọc lại tình huống và nghĩ xem em đã kiểm tra, hiểu và đúng ý mình chưa.'); }
    });
    box.appendChild(d);
  });
}

/* ---------- Nhiệm vụ 1: sửa lỗi & gợi ý ---------- */
function m1(st){
  let wrong=0;
  st.innerHTML=brief('✏️','Nhiệm vụ 1: Sửa lỗi và gợi ý','Phân biệt tự động sửa lỗi và tự động hoàn thành.')+'<h3>Bước 1 · Đây là tính năng nào?</h3><p class="hint">Chạm vào thẻ, rồi chạm vào ô. Hoặc kéo thả thẻ vào ô.</p><div id="g1"></div><div id="g2"></div>';
  sortGame($('#g1'),{
    bins:[['✏️ Tự động sửa lỗi','Autocorrect: sửa từ gõ sai'],['💡 Tự động hoàn thành','Autocomplete: gợi ý khi gõ dở']],
    items:[['Em gõ “tshi”, máy thay bằng “this”',0],['Em gõ “àv”, máy thay bằng “và”',0],['Em gõ “Tự động”, máy đề xuất “Tự động hoàn thành”',1],['Em gõ “chó so vớ”, máy gợi ý “chó so với mèo”',1]],
    why:'Autocorrect thay từ sai bằng từ đúng. Autocomplete gợi ý phần còn lại khi em mới gõ vài kí tự.'
  },()=>wrong++,()=>{
    const g2=$('#g2');
    g2.innerHTML='<h3 style="margin-top:20px">Bước 2 · Điều tra trên màn hình</h3><div id="cg"></div>';
    clueGame($('#cg'),{
      page:`<div class="win"><div class="wtop"><span class="tl"><i></i><i></i><i></i></span><div class="wtab"><span>📝</span><span class="tt">Bài làm của em – Soạn thảo văn bản</span></div></div>
        <div class="art"><h4>Tin nhắn gửi cô giáo</h4>
        <div class="mail"><div class="mb">Em đã làm xong bài <span class="tapz" data-k="av">àv</span> <span class="tapz" data-k="nop">nộp</span> <span class="tapz" data-k="ra">rồi</span> ạ.</div></div>
        <h4>Ô tìm kiếm</h4>
        <div class="picpost"><div class="pc"><div class="tapz" data-k="box"><b>🔍 Tự động</b></div><div class="tapz" data-k="sug" style="background:#e3f6ea;margin-top:6px">💡 Tự động <b>hoàn thành</b><br>Tự động <b>sửa lỗi</b><br>Tự động <b>lưu</b></div><div class="tapz" data-k="btn" style="margin-top:6px">[Tìm kiếm]</div></div></div>
        <h4>Tính năng tự động sửa lỗi thường có ở:</h4>
        <div class="tapbox"><div class="tapz" data-k="book">📕 Sách giáo khoa</div><div class="tapz" data-k="note">📓 Vở ghi chép</div><div class="tapz" data-k="word">📝 Phần mềm soạn thảo văn bản (Word, Google Docs)</div><div class="tapz" data-k="vid">🎬 Video trên mạng</div></div></div></div>`,
      clues:[
        {q:'Chạm vào <b>từ gõ sai</b> mà Autocorrect sẽ sửa thành “và”.',key:'av',why:'“àv” là lỗi gõ sai của “và”, Autocorrect tự sửa lại.',miss:'Từ nào nhìn không giống tiếng Việt?'},
        {q:'Chạm vào <b>khung gợi ý</b> do Autocomplete đưa ra khi em gõ “Tự động”.',key:'sug',why:'Khung gợi ý hiện bên dưới ô gõ khi em mới gõ dở.',miss:'Gợi ý hiện ra bên dưới chữ em đang gõ.'},
        {q:'Tính năng tự động sửa lỗi <b>thường xuất hiện ở đâu</b>? Chạm vào đáp án đúng.',key:'word',why:'Autocorrect có trong phần mềm soạn thảo văn bản như Word, Google Docs.',miss:'Cần nơi có bàn phím để gõ chữ. Thử chỗ khác nhé.'}
      ]
    },()=>wrong++,f=>{ fb(f,'ok','🏅 Hoàn thành! Em đã phân biệt được Autocorrect và Autocomplete.'); finish(st,starsFor(wrong),g2); });
  });
}

/* bàn phím đơn giản: chỉ các phím cần dùng chạm được */
function kbd(){
  const live={tab:'Tab',x:'X',c:'C',v:'V',z:'Z',s:'S',ctrl:'Ctrl',alt:'Alt',cmd:'CMD'};
  const k=(t,w)=>{ const id=t.toLowerCase(); return live[id]
    ? '<span class="kb tapz'+(w?' '+w:'')+'" data-k="'+id+'">'+t+'</span>'
    : '<span class="kb off'+(w?' '+w:'')+'">'+t+'</span>'; };
  const row=(s,pad)=>'<div class="kbr"'+(pad?' style="padding-left:'+pad+'"':'')+'>'+s.map(x=>k(x)).join('')+'</div>';
  return '<div class="kbd">'+
    '<div class="kbr">'+k('Tab','w2')+'QWERTYUIOP'.split('').map(x=>k(x)).join('')+'</div>'+
    row('ASDFGHJKL'.split(''),'28px')+
    '<div class="kbr">'+'ZXCVBNM'.split('').map(x=>k(x)).join('')+'</div>'+
    '<div class="kbr">'+k('Ctrl','w2')+k('Alt','w2')+k('CMD','w2')+'<span class="kb off sp"></span></div></div>';
}

/* ---------- Nhiệm vụ 2: phím tắt ---------- */
function m2(st){
  let wrong=0;
  st.innerHTML=brief('⌨️','Nhiệm vụ 2: Phím tắt','Ghép phím tắt với việc cần làm, rồi tìm phím trên bàn phím.')+'<h3>Bước 1 · Ghép phím tắt với trường hợp sử dụng</h3><p class="hint">Chạm vào thẻ, rồi chạm vào ô. Hoặc kéo thả.</p><div id="g1"></div><div id="g2"></div>';
  sortGame($('#g1'),{
    bins:[['🔁 Chuyển ứng dụng','Chuyển lần lượt sang các ứng dụng đang mở'],['📋 Sao chép','Sao chép văn bản hoặc tập tin'],['📥 Dán','Dán văn bản hoặc tập tin']],
    items:[['Alt + Tab hoặc CMD + Tab',0],['Ctrl + C hoặc CMD + C',1],['Ctrl + V hoặc CMD + V',2]],
    why:'Alt + Tab chuyển ứng dụng. Ctrl + C sao chép. Ctrl + V dán. Trên Mac dùng CMD thay Ctrl.'
  },()=>wrong++,()=>{
    const g2=$('#g2');
    g2.innerHTML='<h3 style="margin-top:20px">Bước 2 · Tìm phím trên bàn phím</h3><div id="cg"></div>';
    clueGame($('#cg'),{
      page:kbd(),
      clues:[
        {q:'Em đã sao chép một đoạn văn. Để <b>dán</b>, nhấn <b>Ctrl</b> cùng với phím nào?',key:'v',why:'Ctrl + V là phím tắt để dán.',miss:'Chưa đúng. V giống mũi tên chỉ xuống để “đặt” vào.'},
        {q:'Để <b>hoàn tác</b> (Undo), nhấn <b>Ctrl</b> cùng với phím nào?',key:'z',why:'Ctrl + Z là phím tắt để hoàn tác.',miss:'Undo = quay lại một bước. Thử phím khác nhé.'},
        {q:'Để <b>cắt</b> (Cut), nhấn <b>Ctrl</b> cùng với phím nào?',key:'x',why:'Ctrl + X là phím tắt để cắt.',miss:'Cut giống cây kéo, hình chữ X.'},
        {q:'Để <b>lưu</b> (Save), nhấn <b>Ctrl</b> cùng với phím nào?',key:'s',why:'Ctrl + S là phím tắt để lưu.',miss:'Save bắt đầu bằng chữ S.'},
        {q:'Trên máy <b>Mac</b>, phím nào dùng <b>thay cho Ctrl</b>?',key:'cmd',why:'Trên macOS dùng CMD thay cho Ctrl.',miss:'Phím này cũng có tên trong ví dụ CMD + C.'}
      ]
    },()=>wrong++,f=>{ fb(f,'ok','🏅 Hoàn thành! Em đã biết các phím tắt phổ biến trên Windows và macOS.'); finish(st,starsFor(wrong),g2); });
    /* ngón tay nhấn phím khi chạm */
    const kb=g2.querySelector('.kbd'), fg=el('<span class="finger">👆</span>'); kb.appendChild(fg);
    const hold=el('<span class="finger hold">👆</span>'); kb.appendChild(hold);
    const placeHold=()=>{ const c=kb.querySelector('[data-k="ctrl"]'), r=c.getBoundingClientRect(), b=kb.getBoundingClientRect();
      hold.style.left=(r.left-b.left+r.width*0.8)+'px'; hold.style.top=(r.top-b.top+r.height*0.8)+'px'; };
    placeHold(); window.addEventListener('resize',placeHold);
    kb.querySelectorAll('.kb.tapz').forEach(z=>z.addEventListener('click',()=>{
      const r=z.getBoundingClientRect(), b=kb.getBoundingClientRect();
      fg.style.left=(r.left-b.left+r.width*0.8)+'px'; fg.style.top=(r.top-b.top+r.height*0.8)+'px';
      fg.classList.remove('go'); void fg.offsetWidth; fg.classList.add('go');
      z.classList.remove('press'); void z.offsetWidth; z.classList.add('press');
    }));
  });
}

/* ---------- Nhiệm vụ 3: AI rà soát lỗi ---------- */
function m3(st){
  let wrong=0;
  st.innerHTML=brief('🤖','Nhiệm vụ 3: AI rà soát lỗi','Em nhờ AI rà soát câu: “Hôm nay em đi hoc ở trường.”')+'<h3>Bước 1 · Có nên chấp nhận gợi ý của AI?</h3><div id="g1"></div><div id="g2"></div>';
  judge($('#g1'),'Với mỗi gợi ý của AI, chọn: <b>Chấp nhận</b> hay <b>Chưa nên chấp nhận</b>.',['✅ Chấp nhận','🚫 Chưa nên'],[
    {t:'AI gợi ý sửa “hoc” thành “học”. Em đọc lại thấy đúng ý mình.',ok:true,why:'Đã kiểm tra và đúng ý mình thì có thể chấp nhận.'},
    {t:'AI gợi ý đổi cả câu thành “Hôm nay tôi đến lớp.” Câu này đổi ý của em.',ok:false,why:'Gợi ý làm đổi ý của em thì không nên nhận.'},
    {t:'AI gợi ý một cách sửa mà em chưa hiểu.',ok:false,why:'Không chấp nhận gợi ý nếu chưa hiểu. Hãy tìm hiểu hoặc hỏi giáo viên.'}
  ],()=>wrong++,()=>{
    const g2=$('#g2');
    g2.innerHTML='<h3 style="margin-top:20px">Bước 2 · Cách dùng AI rà soát lỗi</h3><div id="j2"></div>';
    judge($('#j2'),'Với mỗi việc làm, chọn: <b>Đúng cách</b> hay <b>Chưa đúng</b>.',['👍 Đúng cách','👎 Chưa đúng'],[
      {t:'Đọc lại từng gợi ý của AI trước khi nhận.',ok:true,why:'AI cần được kiểm tra.'},
      {t:'Bấm chấp nhận mọi gợi ý mà không đọc.',ok:false,why:'Không chấp nhận mọi gợi ý nếu chưa hiểu.'},
      {t:'Tự chịu trách nhiệm với văn bản cuối cùng.',ok:true,why:'Người viết chịu trách nhiệm với văn bản cuối cùng.'},
      {t:'Nghĩ rằng AI luôn đúng nên không cần xem lại.',ok:false,why:'AI giúp tiết kiệm thời gian nhưng cần kiểm tra.'}
    ],()=>wrong++,f=>{ fb(f,'ok','🏅 Hoàn thành! AI gợi ý – em kiểm tra – người viết chịu trách nhiệm.'); finish(st,starsFor(wrong),$('#j2')); });
  });
}

const REAL=[
 {icon:"📱",title:"Nhắn tin cho cô giáo",story:"Em nhắn tin báo bài cho cô. Em gõ “Cô ơi, bạn Linh nộp bài rồi ạ.” nhưng điện thoại tự sửa tên bạn:<div class='rwm'>💬 Cô ơi, bạn <b>Lính</b> nộp bài rồi ạ.</div>",
  Q:{q:"Trước khi bấm gửi, em nên làm gì?",o:["Đọc lại tin nhắn và sửa chỗ máy tự sửa sai","Gửi ngay vì máy luôn sửa đúng","Gửi rồi mới đọc lại","Nhờ bạn gửi hộ"],a:0,why:"Autocorrect giúp sửa lỗi nhưng đôi khi sửa sai, nhất là tên riêng. Em luôn đọc lại trước khi gửi."}},
 {icon:"🔍",title:"Gõ tìm kiếm trên máy",story:"Em đang soạn bài và tìm kiếm thông tin. Hãy xem máy làm gì trong từng trường hợp.",
  Q:{q:"Mỗi trường hợp là tính năng nào? Chạm thẻ rồi chạm ô.",sort:{bins:[['✏️ Tự động sửa lỗi (Autocorrect)'],['💡 Tự động hoàn thành (Autocomplete)']],items:[['Em gõ “khoong”, máy đổi thành “không”',0],['Em gõ “thời tiết”, ô tìm kiếm gợi ý “thời tiết hôm nay”',1],['Em nhắn “hom nay”, máy đổi thành “hôm nay”',0],['Em gõ “cách làm diều”, máy gợi ý “cách làm diều giấy”',1]],why:"Autocorrect thay từ gõ sai bằng từ đúng. Autocomplete gợi ý phần còn lại khi em mới gõ dở."}}},
 {icon:"⏱️",title:"Soạn bài văn trong giờ học",story:"Em đang soạn bài văn trên máy tính ở lớp, sắp hết giờ. Có vài việc cần làm thật nhanh mà không dùng chuột.",
  Q:{q:"Chọn phím tắt phù hợp cho mỗi tình huống.",sort:{bins:[['Ctrl + Z'],['Ctrl + S'],['Alt + Tab'],['Ctrl + C rồi Ctrl + V']],items:[['Lỡ xóa nhầm cả đoạn văn vừa viết',0],['Sắp hết giờ, muốn giữ lại bài làm',1],['Muốn chuyển sang trang web đang mở để xem thông tin',2],['Muốn chép một câu sang chỗ khác mà không gõ lại',3]],why:"Hoàn tác = Ctrl + Z · Lưu = Ctrl + S · Chuyển ứng dụng = Alt + Tab · Sao chép rồi dán = Ctrl + C rồi Ctrl + V."}}},
 {icon:"🍎",title:"Dùng máy Mac ở thư viện",story:"Thư viện trường cho em mượn một máy Mac. Em nhấn Ctrl + C để sao chép đoạn văn nhưng không như mọi khi.",
  Q:{q:"Trên máy Mac, em nên nhấn phím tắt nào để sao chép?",o:["CMD + C","Ctrl + C","Esc + C","Shift + C"],a:0,why:"Trên macOS, phím CMD dùng thay cho Ctrl: CMD + C sao chép, CMD + V dán."}},
 {icon:"📋",title:"Lấy thông tin từ web vào bài làm",story:"Em tìm được một đoạn thông tin hay trên trang Web và muốn đưa vào bài làm của mình, đúng cách và có ghi nguồn (Bài 21).",
  order:{screens:(()=>{
    const TXT='Cá voi xanh là loài động vật lớn nhất từng sống trên Trái Đất.';
    const web=(sel,cls,toast)=>xBrowser('baikhoahoc.example/ca-voi','Cá voi xanh','<h5>Cá voi xanh</h5>'+(sel?'<span class="xsel">'+TXT+'</span>':TXT)+' Chúng sống ở mọi đại dương và ăn các sinh vật phù du nhỏ.',cls,toast);
    const doc=(page,cls,saved)=>xDocs('Bài làm của em',page,cls,saved);
    const P='<p style="margin:0">'+TXT+'</p>', S='<p class="xsrc">Nguồn: baikhoahoc.example/ca-voi</p>';
    return [
      web(0,'act')+doc('<span class="xcaret"></span>','dim'),
      web(1,'act')+doc('<span class="xcaret"></span>','dim'),
      web(1,'act','📋 Đã sao chép')+doc('<span class="xcaret"></span>','dim'),
      web(1,'dim')+doc('<span class="xcaret"></span>','act'),
      web(1,'dim')+doc(P,'act'),
      web(1,'dim')+doc(P+S,'act'),
      web(1,'dim')+doc(P+S,'act',true)];
  })(),q:"Chạm các bước theo <b>thứ tự đúng</b>. Xem màn hình bên dưới thay đổi sau mỗi bước.",steps:["Bôi đen đoạn thông tin cần dùng","Nhấn Ctrl + C để sao chép","Nhấn Alt + Tab để sang bài làm","Nhấn Ctrl + V để dán","Ghi nguồn của đoạn thông tin","Nhấn Ctrl + S để lưu bài"],miss:"Nghĩ xem phải chọn rồi mới sao chép, và phải sang bài làm rồi mới dán.",why:"Chọn → Sao chép → Chuyển ứng dụng → Dán → Ghi nguồn → Lưu."}},
 {icon:"🤖",title:"AI rà soát bài văn",story:"Em viết: “Em rất yêu quý cô giáo của em.” AI gợi ý đổi thành:<div class='rwm'>🤖 “Em phải nghe lời cô giáo của em.”</div>",
  Q:{q:"Em nên làm gì với gợi ý này?",o:["Không nhận vì gợi ý đã đổi ý của em, giữ câu của mình","Chấp nhận ngay cho nhanh","Chấp nhận mọi gợi ý của AI trong bài","Nhờ bạn chọn hộ"],a:0,why:"Người viết chịu trách nhiệm với văn bản cuối cùng. Gợi ý làm đổi ý thì không nên nhận."}},
];

/* ---------- Trắc nghiệm ---------- */
function quiz(st){
  const qs=shuffle(QUIZ).map(shuffleQ); let qi=0, wrong=0;
  function draw(){
    st.innerHTML = brief('✅','Trắc nghiệm: Câu '+(qi+1)+'/'+qs.length,'Đọc kỹ rồi chọn đáp án đúng.')+
      '<div class="prog"><i style="width:'+(qi/qs.length*100)+'%"></i></div><div id="qh"></div>';
    askQ(qs[qi],$('#qh'),()=>{wrong++},f=>{
      if(qi<qs.length-1){ f.insertAdjacentHTML('beforeend','<div style="margin-top:10px"><button class="btn orange" id="nq">Câu tiếp ▶</button></div>'); $('#nq').onclick=()=>{qi++;draw()}; }
      else { st.insertAdjacentHTML('beforeend','<p style="margin-top:12px"><b>Em đã trả lời xong!</b> Số lần chọn sai: '+wrong+'.</p>'); finish(st,wrong<=2?3:wrong<=6?2:1,st); }
    });
  }
  draw();
}

/* ---------- mở đầu & kết thúc ---------- */
function intro(st){
  st.innerHTML = `
  <div class="final">
    <div class="big">⌨️</div>
    <h2 style="font-size:2rem;color:var(--teal-d)">Bài 22: Các tính năng tiện ích</h2>
    <p>Máy tính có nhiều tính năng tiện ích giúp em gõ nhanh và đúng hơn.</p>
    <div class="recap"><div><b>Em sẽ học</b><br>Autocorrect · Autocomplete · phím tắt Windows và macOS · AI rà soát lỗi</div><div><b>Em sẽ luyện</b><br>Phân biệt tính năng · tìm phím tắt · kiểm tra gợi ý của AI</div><div><b>Cách chơi</b><br>Học bài → 3 nhiệm vụ → Trắc nghiệm.</div></div>
    <p class="tip" style="text-align:left">Em sẽ học qua <b>thẻ flashcard</b>, làm <b>3 nhiệm vụ</b>, rồi làm <b>trắc nghiệm</b>. Mỗi nhiệm vụ cho tối đa 3 ⭐. Em trả lời càng ít lần sai thì càng được nhiều sao. Bên trái màn hình luôn có khung <b>“Cách làm bài”</b>. Tiến độ được lưu lại trên máy của em.</p>
    <button class="btn" id="go">Bắt đầu ▶</button>
  </div>`;
  $('#go').onclick=()=>{state.intro=false;render()};
}
function finale(st){
  const total=state.got.reduce((a,b)=>a+(b||0),0);
  const rank = total>=12?'Trợ thủ xuất sắc':total>=9?'Trợ thủ giỏi':'Trợ thủ tập sự';
  st.innerHTML=`<div class="final"><div class="big">🏅</div><h2 style="font-size:2rem;color:var(--teal-d)">${rank}</h2>
  <p>Em đạt <b>${total} / 15 ⭐</b></p>
  <div class="recap"><div><b>Tự động sửa lỗi</b><br>Autocorrect sửa lỗi chính tả hoặc gõ sai, ví dụ “tshi” → “this”.</div><div><b>Tự động hoàn thành</b><br>Autocomplete dự đoán và gợi ý từ khi em gõ vài kí tự đầu.</div><div><b>Phím tắt</b><br>Ctrl + C sao chép · Ctrl + X cắt · Ctrl + V dán · Ctrl + Z hoàn tác · Ctrl + S lưu · Alt + Tab chuyển ứng dụng. Mac: CMD thay Ctrl.</div><div><b>AI rà soát lỗi</b><br>Tiết kiệm thời gian nhưng cần kiểm tra. Không nhận gợi ý nếu chưa hiểu. Người viết chịu trách nhiệm.</div></div>
  <div class="row" style="justify-content:center"><button class="btn ghost" id="again">Chơi lại từ đầu</button></div></div>`;
  $('#again').onclick=()=>restart(true);
}


let fsz=18; try{ fsz=+localStorage.getItem('k5fontsize')||18 }catch(e){}
const setSize=px=>{ fsz=Math.max(16,Math.min(28,px)); document.documentElement.style.fontSize=fsz+'px'; try{localStorage.setItem('k5fontsize',fsz)}catch(e){} };
setSize(fsz);
$('#fsm').onclick=()=>setSize(fsz-2); $('#fbg').onclick=()=>setSize(fsz+2);
$('#restart').onclick=()=>restart();
/* Nhấp chuột phải hai lần liên tiếp vào ⭐ góc trên bên phải: giáo viên mở/khóa tất cả */
(function(){
  let last=0;
  $('.stars').addEventListener('contextmenu',e=>{
    e.preventDefault();
    const now=Date.now(); if(now-last>=600){ last=now; return; }
    last=0; TEACH=!TEACH; try{ localStorage.setItem('k5b22_teach',TEACH?'1':'0'); }catch(x){}
    render();
    const t=el('<div style="position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#333;color:#fff;padding:10px 18px;border-radius:12px;z-index:9999;font-weight:700">'+(TEACH?'🔓 Đã mở khóa tất cả':'🔒 Đã khóa lại')+'</div>');
    document.body.appendChild(t); setTimeout(()=>t.remove(),1800);
  });
})();
render();
