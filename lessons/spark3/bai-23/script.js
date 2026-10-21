/* ---------- tiện ích ---------- */
const $ = (s, r=document) => r.querySelector(s);
const el = (html) => { const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; };
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]} return a };
const stars = n => '⭐'.repeat(n) + '☆'.repeat(3-n);

const LESSON_NAME="Trực quan hóa dữ liệu";

/* ---------- hình biểu đồ vẽ bằng SVG / CSS ---------- */
function chart(t,lbl){
  const ax='<line x1="12" y1="6" x2="12" y2="98" stroke="#27323a" stroke-width="2"/><line x1="12" y1="98" x2="152" y2="98" stroke="#27323a" stroke-width="2"/>';
  const svg=b=>'<svg viewBox="0 0 160 106" width="150" role="img" aria-label="'+(lbl||'biểu đồ')+'" style="display:block;margin:0 auto">'+b+'</svg>';
  if(t==='pie') return '<div role="img" aria-label="'+(lbl||'biểu đồ tròn')+'" style="width:104px;height:104px;border-radius:50%;margin:0 auto;border:3px solid #27323a;background:conic-gradient(#0e7c86 0 40%,#f08a24 0 65%,#6b4fc8 0 85%,#2e9e5b 0 100%)"></div>';
  if(t==='column') return svg(ax+[[22,60,'#0e7c86'],[50,30,'#f08a24'],[78,74,'#6b4fc8'],[106,46,'#2e9e5b']].map(c=>'<rect x="'+c[0]+'" y="'+(98-c[1])+'" width="20" height="'+c[1]+'" fill="'+c[2]+'"/>').join(''));
  if(t==='bar') return svg(ax+[[10,100,'#0e7c86'],[31,64,'#f08a24'],[52,120,'#6b4fc8'],[73,82,'#2e9e5b']].map(c=>'<rect x="14" y="'+c[0]+'" width="'+c[1]+'" height="17" fill="'+c[2]+'"/>').join(''));
  if(t==='line') return svg(ax+'<polyline points="18,80 44,58 70,66 96,34 122,44 148,14" fill="none" stroke="#0e7c86" stroke-width="4" stroke-linejoin="round"/>'+[[18,80],[44,58],[70,66],[96,34],[122,44],[148,14]].map(p=>'<circle cx="'+p[0]+'" cy="'+p[1]+'" r="5" fill="#f08a24"/>').join(''));
  if(t==='hist') return svg(ax+[[16,16],[34,40],[52,64],[70,80],[88,58],[106,34],[124,14]].map(c=>'<rect x="'+(c[0]+4)+'" y="'+(98-c[1])+'" width="18" height="'+c[1]+'" fill="#6b4fc8" stroke="#fff" stroke-width="1"/>').join(''));
  if(t==='scatter') return svg(ax+[[24,84],[36,72],[48,76],[60,58],[72,60],[84,44],[96,40],[108,28],[120,30],[134,14],[52,64],[90,52]].map(p=>'<circle cx="'+p[0]+'" cy="'+p[1]+'" r="4.5" fill="#d6453d"/>').join(''));
  return '';
}

/* ---------- 8 thẻ học: nội dung, hình minh họa, bài tập nhỏ ---------- */
const THEORY=[
 {i:"▦",h:"Khái niệm bảng",
  t:"<b>Bảng (Table)</b> là dạng dữ liệu được sắp xếp có cấu trúc theo <b>Hàng</b> và <b>Cột</b>. Bảng dùng để trình bày thông tin bằng số hoặc văn bản theo một định dạng <b>có tổ chức</b> và <b>dễ đọc</b>. <b>Ô (Cell)</b> là chỗ gặp nhau của một hàng và một cột.",
  e:"Hàng nằm ngang · Cột nằm dọc · Ô là chỗ hàng và cột gặp nhau."},
 {i:"🥧",h:"Biểu đồ và biểu đồ tròn",
  t:"<b>Biểu đồ (Chart)</b> là dạng thông tin hoặc dữ liệu được biểu diễn <b>một cách trực quan</b> bằng cách sử dụng các <b>đường, thanh và biểu tượng</b>. <b>Biểu đồ tròn (Pie chart)</b> thể hiện <b>phần trăm</b> hoặc <b>tỉ lệ</b> của các phần khác nhau một cách dễ dàng và trực quan.",
  e:"Dùng biểu đồ tròn để thấy phần trăm điểm mỗi người chơi so với tổng số điểm cả mùa giải."},
 {i:"📈",h:"Biểu đồ đường",
  t:"<b>Biểu đồ đường (Line chart)</b> biểu diễn <b>sự thay đổi</b> hoặc <b>xu hướng</b> của một dữ liệu qua các đơn vị <b>thời gian</b> (giờ, ngày, tháng, năm).",
  e:"Ví dụ: nhiệt độ thay đổi trong 7 ngày."},
 {i:"📊",h:"Biểu đồ cột và biểu đồ thanh",
  t:"<b>Biểu đồ cột (Column chart)</b> biểu diễn sự <b>so sánh</b> giữa các giá trị hoặc nhóm giá trị khác nhau. Các cột được biểu diễn <b>thẳng đứng</b>. <b>Biểu đồ thanh (Bar chart)</b> cũng để so sánh, nhưng các thanh được biểu diễn <b>nằm ngang</b>.",
  e:"Bảng giúp thông tin rõ ràng, dễ đọc. Biểu đồ giúp dễ quan sát và so sánh hơn."},
 {i:"🔵",h:"Biểu đồ tần suất và biểu đồ phân tán",
  t:"<b>Biểu đồ tần suất (Histogram)</b> là một loại đặc biệt của biểu đồ cột, dùng cho <b>dữ liệu liên tục</b>, còn biểu đồ cột thường dùng cho <b>dữ liệu rời rạc</b>. <b>Biểu đồ phân tán (Scatter plot)</b> dùng để quan sát <b>mối tương quan</b> và <b>sự phân tán</b> dữ liệu.",
  e:""},
 {i:"📉",h:"Khái niệm đồ thị",
  t:"<b>Đồ thị (Graph)</b> là một biểu đồ đặc biệt, thường dùng <b>đường hoặc điểm</b> để thể hiện sự thay đổi, mối quan hệ hoặc xu hướng. Đồ thị là một sơ đồ thể hiện các dữ liệu <b>dạng số</b> một cách có tổ chức.",
  e:"Ví dụ: đồ thị đường gấp khúc cho thấy nhiệt độ thay đổi trong 7 ngày."},
 {i:"🧮",h:"Ứng dụng trực quan hóa dữ liệu",
  t:"<b>Trực quan hóa dữ liệu</b> là cách biến dữ liệu thành <b>hình ảnh hoặc biểu đồ</b> để dễ quan sát và dễ hiểu hơn. <b>Phần mềm bảng tính</b> giúp nhập, sắp xếp, tính toán, xử lí dữ liệu và tạo biểu đồ.",
  e:"Không phải bảng tính: PowerPoint (trình chiếu) · Word, Pages, TextEdit (soạn thảo) · Photoshop, Illustrator (đồ họa) · Teams (họp trực tuyến)."},
 {i:"🤖",h:"Trực quan hóa dữ liệu với AI",
  t:"AI có thể <b>gợi ý biểu đồ</b> nhưng dữ liệu phải được <b>kiểm tra</b>. <b>Không dùng dữ liệu cá nhân thật</b> nếu chưa được phép.",
  e:"Dùng dữ liệu mẫu hoặc tên giả như Bạn A, Bạn B."},
 {i:"🔁",h:"Nhắc lại Bài 21: đạo văn và trích dẫn",
  t:"<b>Đạo văn (Plagiarism)</b> là dùng một nguồn mà <b>không nói nguồn đến từ đâu</b>. <b>Trích dẫn (Citation)</b> là <b>nêu rõ nguồn</b> lấy thông tin.",
  e:"Khi em dùng biểu đồ hay số liệu của người khác, hãy ghi rõ nguồn."},
];

const VIS=[
 /* 1 bảng */
 `<div class="vgrid"><table class="tbl"><tr><th>Tên</th><th>Điểm</th></tr><tr><td>Lan</td><td>9</td></tr><tr><td>Nam</td><td class="hc">8</td></tr><tr><td>Mai</td><td>10</td></tr></table>
  <div class="legend"><div class="lg">➡️ <b>Hàng</b>: dãy ô nằm ngang.</div><div class="lg">⬇️ <b>Cột</b>: dãy ô nằm dọc.</div><div class="lg">🟧 <b>Ô</b>: nơi hàng “Nam” gặp cột “Điểm” (số 8).</div></div></div>`,
 /* 2 biểu đồ & tròn */
 `<div class="steps"><div class="st vbox te"><div class="big">📊</div>Thanh</div><div class="st vbox te"><div class="big">📈</div>Đường</div><div class="st vbox te"><div class="big">🥧</div>Biểu tượng, hình tròn</div></div>
  <div class="steps" style="margin-top:10px"><div class="st vbox ok"><div class="big">🧮</div><b>Bảng tính (Spreadsheet)</b><br>Chương trình máy tính dùng để thu thập và xử lí dữ liệu</div></div>
  <div style="margin-top:12px">${chart('pie','biểu đồ tròn')}<div class="cap">Biểu đồ tròn: phần trăm hoặc tỉ lệ của từng phần</div></div>`,
 /* 3 đường */
 `${chart('line','biểu đồ đường')}<div class="cap">Biểu đồ đường: thay đổi theo thời gian</div>`,
 /* 4 cột & thanh */
 `<div class="steps"><div class="st vbox te">${chart('column','biểu đồ cột')}<b>CỘT</b> (thẳng đứng)</div><div class="st vbox te">${chart('bar','biểu đồ thanh')}<b>THANH</b> (nằm ngang)</div></div>
  <div class="steps" style="margin-top:10px"><div class="st vbox te"><div class="big">▦</div><b>BẢNG</b><br>hàng và cột, dễ đọc</div><div class="st vbox te"><div class="big">📊</div><b>BIỂU ĐỒ</b><br>hình ảnh, dễ so sánh</div></div>`,
 /* 5 histogram & scatter */
 `<div class="steps"><div class="st vbox te">${chart('hist','biểu đồ tần suất')}<b>Histogram</b><br>dữ liệu liên tục</div><div class="st vbox te">${chart('scatter','biểu đồ phân tán')}<b>Scatter plot</b><br>mối tương quan</div></div>
  <div class="steps" style="margin-top:10px"><div class="st vbox te"><b>Liên tục</b><br>Đo được: chiều cao, nhiệt độ</div><div class="st vbox te"><b>Rời rạc</b><br>Đếm được: số quyển sách</div></div>`,
 /* 6 đồ thị */
 `${chart('line','đồ thị đường')}<div class="cap">Đồ thị: nhiệt độ thay đổi trong 7 ngày</div>`,
 /* 7 ứng dụng */
 `<div class="steps"><div class="st vbox te"><div class="big">🔢</div>Dữ liệu</div><div class="ar">→</div><div class="st vbox ok"><div class="big">📊</div>Biểu đồ dễ hiểu</div></div>
  <table class="tbl" style="margin-top:10px"><tr><th>Ứng dụng</th><th>Nhà phát hành</th></tr><tr><td>🟢 Microsoft Excel</td><td>Microsoft</td></tr><tr><td>🔢 Apple Numbers</td><td>Apple</td></tr><tr><td>🔴 WPS Spreadsheet</td><td>Kingsoft</td></tr><tr><td>🟩 Google Sheets</td><td>Google</td></tr></table>`,
 /* 8 AI */
 `<div class="chat"><div class="chead"><span class="cav">✦</span><b>Trợ lý AI</b></div><div class="cbody">
   <div class="bub u">Mình có điểm của 4 bạn. Nên vẽ biểu đồ gì?</div><div class="bub">Gợi ý: biểu đồ cột để so sánh điểm giữa các bạn.</div></div></div>
  <div class="steps" style="margin-top:10px"><div class="st vbox ok">✔ Kiểm tra dữ liệu AI dùng</div><div class="st vbox ok">✔ Dùng dữ liệu mẫu hoặc tên giả</div><div class="st vbox no">✘ Đưa tên, địa chỉ thật khi chưa được phép</div></div>`,
 /* 9 nhắc lại bài 21 */
 `<div class="steps"><div class="st vbox no"><div class="big">🚨</div><b>Đạo văn</b><br>Giấu nguồn</div><div class="st vbox ok"><div class="big">📌</div><b>Trích dẫn</b><br>Nêu rõ nguồn</div></div>`,
];

const OPTS_PIE=[chart('column','các cột thẳng đứng'),chart('line','đường nối các điểm theo thời gian'),chart('pie','hình tròn chia thành 4 phần'),chart('bar','các thanh nằm ngang')];
const OPTS_BAR=[chart('pie','hình tròn chia thành 4 phần'),chart('bar','các thanh nằm ngang'),chart('line','đường nối các điểm theo thời gian'),chart('column','các cột thẳng đứng')];

/* bài tập nhỏ cho từng thẻ */
const PRACT=[
 [{q:"Em hãy chọn <b>tên gọi</b> đúng: chạm thẻ mô tả, rồi chạm vào ô tên gọi.",sort:{bins:[['Hàng'],['Cột'],['Ô']],items:[['Dãy ô nằm ngang',0],['Dãy ô nằm dọc',1],['Chỗ gặp nhau của một hàng và một cột, chứa một dữ liệu',2]],why:"Hàng nằm ngang, cột nằm dọc, ô là chỗ một hàng và một cột gặp nhau."}},
  {q:"Chạm vào <b>ô</b> cho biết điểm của <b>Nam</b>.",html:'<table class="tbl"><tr><th data-k="h1">Tên</th><th data-k="h2">Điểm</th></tr><tr><td data-k="lan">Lan</td><td data-k="lan9">9</td></tr><tr><td data-k="nam">Nam</td><td data-k="nam8">8</td></tr><tr><td data-k="mai">Mai</td><td data-k="mai10">10</td></tr></table>',key:"nam8",why:"Hàng Nam gặp cột Điểm ở ô có số 8."}],
 [{q:"Em hãy di chuyển mỗi <b>loại dữ liệu</b> sang <b>mô tả</b> tương ứng.",sort:{bins:[['Bảng (Table)'],['Biểu đồ (Chart)'],['Bảng tính (Spreadsheet)']],items:[['Một dạng dữ liệu bao gồm các hàng và cột theo thứ tự nhất định.',0],['Một dạng dữ liệu bao gồm đường, thanh, và biểu tượng để chia sẻ thông tin một cách trực quan.',1],['Một chương trình máy tính được dùng để thu thập dữ liệu.',2]],why:"Bảng: hàng và cột. Biểu đồ: đường, thanh, biểu tượng. Bảng tính: chương trình thu thập dữ liệu."}},
  {q:"Em hãy cho biết, tùy chọn nào sau đây là <b>biểu đồ tròn</b>?",o:OPTS_PIE,a:2,why:"Biểu đồ tròn là hình tròn được chia thành các phần."},
  {q:"Em đang tạo một biểu đồ thể hiện <b>tỷ lệ phần trăm</b> số điểm mỗi người chơi ghi được so với tổng số điểm đã ghi được trong mùa. Em nên sử dụng loại biểu đồ nào cho dạng so sánh này?",o:["Biểu đồ tròn (Pie Chart)","Biểu đồ thanh (Bar Chart)","Biểu đồ đường (Line Chart)","Biểu đồ cột (Column Chart)"],a:0,why:"Biểu đồ tròn thể hiện phần trăm hay tỉ lệ so với tổng."}],
 [{q:"Em hãy cho biết, biểu đồ nào sau đây là phù hợp nhất để biểu diễn <b>sự thay đổi hoặc xu hướng</b> của một dữ liệu <b>theo thời gian</b>?",o:["Biểu đồ cột","Biểu đồ đường","Biểu đồ phân tán","Biểu đồ tròn"],a:1,why:"Biểu đồ đường cho thấy sự thay đổi qua thời gian."}],
 [{q:"Em hãy cho biết, tùy chọn nào sau đây là <b>biểu đồ thanh</b>?",o:OPTS_BAR,a:1,why:"Biểu đồ thanh có các thanh nằm ngang."},
  {q:"Mô tả nào là của <b>biểu đồ cột</b>, mô tả nào của <b>biểu đồ thanh</b>?",lab:["Biểu đồ cột","Biểu đồ thanh"],tf:["Các cột được biểu diễn thẳng đứng","Các thanh được biểu diễn nằm ngang"],a:[true,false],why:"Cột: thẳng đứng. Thanh: nằm ngang. Cả hai dùng để so sánh."}],
 [{q:"Em hãy cho biết, loại trực quan hóa dữ liệu nào là tốt nhất để <b>so sánh các danh mục hoặc nhóm dữ liệu</b> khác nhau?",o:["Biểu đồ Histogram","Biểu đồ phân tán (Scatter Plot)","Bảng (Table)","Biểu đồ đường (Line Graphs)"],a:0,why:"Histogram là dạng đặc biệt của biểu đồ cột nên dùng để so sánh các nhóm dữ liệu. Biểu đồ phân tán xem mối tương quan, biểu đồ đường xem xu hướng theo thời gian."}],
 [{q:"Em hãy di chuyển từng <b>thuật ngữ</b> sang <b>mô tả</b> tương ứng.",sort:{bins:[['Đồ thị (Graph)'],['Bảng (Table)']],items:[['Một sơ đồ thể hiện các dữ liệu dạng số một cách có tổ chức.',0],['Thông tin được sắp xếp và trình bày theo hàng và cột.',1]],why:"Đồ thị là sơ đồ dữ liệu dạng số. Bảng là thông tin theo hàng và cột."}}],
 [{q:"Em sẽ sử dụng ứng dụng nào để <b>tạo và quản lí bảng tính</b> (Spreadsheet)?",o:["Google Sheets","Microsoft PowerPoint","Adobe Illustrator","Apple Pages"],a:0,why:"Google Sheets là ứng dụng bảng tính. PowerPoint là trình chiếu, Illustrator là đồ họa, Pages là soạn thảo văn bản."},
  {q:"Ứng dụng nào cho phép hiển thị dữ liệu theo <b>hàng, cột</b> và <b>tạo biểu đồ</b> từ các giá trị?",o:["Google Sheets","Adobe Photoshop","Apple TextEdit","Microsoft Teams"],a:0,why:"Google Sheets hiển thị dữ liệu theo hàng, cột và tạo biểu đồ."}],
 [{q:"AI gợi ý một biểu đồ cho dữ liệu của em. Việc em <b>cần làm</b> là gì?",o:["Dùng ngay, không cần xem","Kiểm tra dữ liệu và xem biểu đồ có hợp lí không","Xóa dữ liệu của mình","Đưa thêm thông tin cá nhân thật"],a:1,why:"AI có thể gợi ý biểu đồ nhưng dữ liệu phải được kiểm tra."},
  {q:"Việc làm nào là <b>nên</b>, việc làm nào <b>không nên</b> khi nhờ AI vẽ biểu đồ?",lab:["Nên","Không nên"],tf:["Kiểm tra lại số liệu mà AI dùng","Đưa tên và số điện thoại thật của bạn bè khi chưa được phép","Dùng dữ liệu mẫu hoặc tên giả"],a:[true,false,true],why:"Kiểm tra dữ liệu và bảo vệ thông tin cá nhân."}],
 [{q:"Em hãy di chuyển từng <b>thuật ngữ</b> sang <b>mô tả</b> tương ứng.",sort:{bins:[['Đạo văn (Plagiarism)'],['Trích dẫn (Citation)']],items:[['Sử dụng một nguồn và không chia sẻ nguồn này đến từ đâu.',0],['Nêu rõ nguồn lấy thông tin.',1]],why:"Đạo văn giấu nguồn, trích dẫn nêu rõ nguồn."}}],
];

/* ---------- 3 nhiệm vụ, học bài và trắc nghiệm ---------- */
const MISSIONS = [
{icon:"📖",label:"Học bài",run:theory,steps:["Chạm vào một thẻ để <b>lật</b> và đọc.","Đọc xong, bấm <b>“Em đã hiểu ✓”</b>.","Một <b>cửa sổ bài tập nhỏ</b> sẽ hiện ra. Trả lời đúng để <b>mở khóa</b> thẻ tiếp theo 🔓.","Mở hết các thẻ rồi sang phần luyện tập."],tip:"Em có thể chạm vào thẻ đã đọc để đọc lại."},
{icon:"▦",label:"Đọc bảng",run:m1,steps:["Bước 1: ghép <b>mô tả</b> với hàng, cột hoặc ô. Chạm vào thẻ rồi chạm vào ô, hoặc kéo thả.","Bấm <b>Kiểm tra</b>. Thẻ đúng sẽ xanh, thẻ sai quay về khay.","Bước 2: đọc câu hỏi màu xanh rồi <b>chạm đúng chỗ</b> trên bảng điểm.","Tìm đủ 3 manh mối để hoàn thành."],tip:"Hàng nằm ngang · cột nằm dọc · ô là chỗ gặp nhau."},
{icon:"📊",label:"Chọn biểu đồ",run:m2,steps:["Bước 1: ghép <b>tình huống</b> với loại biểu đồ phù hợp.","Bấm <b>Kiểm tra</b>. Thẻ sai quay về khay để em xếp lại.","Bước 2: đọc yêu cầu rồi <b>chạm vào đúng biểu đồ</b>.","Tìm đủ 5 biểu đồ để hoàn thành."],tip:"Phần trăm → tròn · thời gian → đường · so sánh → cột hoặc thanh."},
{icon:"🧮",label:"Bảng tính & AI",run:m3,steps:["Bước 1: ghép <b>ứng dụng bảng tính</b> với nhà phát hành.","Bước 2: chọn <b>nên</b> hay <b>không nên</b> khi nhờ AI vẽ biểu đồ.","Chọn sai thì đọc gợi ý rồi thử lại.","Làm đúng hết để hoàn thành."],tip:"AI gợi ý – em kiểm tra – không đưa dữ liệu cá nhân thật."},
{icon:"🌍",label:"Việc thật",run:real,steps:["Đọc <b>tình huống</b> em gặp ngoài đời.","Chọn cách xử lí đúng, ghép thẻ hoặc chạm các bước theo thứ tự.","Chọn sai thì đọc gợi ý rồi thử lại.","Bấm <b>“Tình huống tiếp”</b> cho đến hết."],tip:"Phần trăm → tròn · thời gian → đường · so sánh → cột · không đưa dữ liệu cá nhân thật cho AI."},
{icon:"✅",label:"Trắc nghiệm",run:quiz,steps:["Đọc kỹ câu hỏi.","Chạm vào đáp án em chọn.","Đúng: đáp án xanh và có lời giải thích. Sai: đáp án đỏ – hãy chọn lại.","Bấm <b>“Câu tiếp”</b> để làm tiếp."],tip:"Đọc cả các đáp án trước khi chọn."},
];

const QUIZ=[
 {q:"Em hãy cho biết, tùy chọn nào sau đây là <b>biểu đồ tròn</b>?",o:OPTS_PIE,a:2,why:"Biểu đồ tròn là hình tròn được chia thành các phần."},
 {q:"Em đang tạo một biểu đồ thể hiện <b>tỷ lệ phần trăm</b> số điểm mỗi người chơi ghi được so với tổng số điểm đã ghi được trong mùa. Em nên sử dụng loại biểu đồ nào cho dạng so sánh này?",o:["Biểu đồ tròn (Pie Chart)","Biểu đồ thanh (Bar Chart)","Biểu đồ đường (Line Chart)","Biểu đồ cột (Column Chart)"],a:0,why:"Biểu đồ tròn thể hiện phần trăm hay tỉ lệ so với tổng."},
 {q:"Em hãy cho biết, biểu đồ nào sau đây là phù hợp nhất để biểu diễn <b>sự thay đổi hoặc xu hướng</b> của một dữ liệu <b>theo thời gian</b>?",o:["Biểu đồ cột","Biểu đồ đường","Biểu đồ phân tán","Biểu đồ tròn"],a:1,why:"Biểu đồ đường cho thấy sự thay đổi qua thời gian."},
 {q:"Em hãy cho biết, tùy chọn nào sau đây là <b>biểu đồ thanh</b>?",o:OPTS_BAR,a:1,why:"Biểu đồ thanh có các thanh nằm ngang."},
 {q:"Em hãy cho biết, loại trực quan hóa dữ liệu nào là tốt nhất để <b>so sánh các danh mục hoặc nhóm dữ liệu</b> khác nhau?",o:["Biểu đồ Histogram","Biểu đồ phân tán (Scatter Plot)","Bảng (Table)","Biểu đồ đường (Line Graphs)"],a:0,why:"Histogram là dạng đặc biệt của biểu đồ cột nên dùng để so sánh các nhóm dữ liệu."},
 {q:"Em hãy di chuyển mỗi <b>loại dữ liệu</b> sang <b>mô tả</b> tương ứng.",sort:{bins:[['Bảng (Table)'],['Biểu đồ (Chart)'],['Bảng tính (Spreadsheet)']],items:[['Một dạng dữ liệu bao gồm các hàng và cột theo thứ tự nhất định.',0],['Một dạng dữ liệu bao gồm đường, thanh, và biểu tượng để chia sẻ thông tin một cách trực quan.',1],['Một chương trình máy tính được dùng để thu thập dữ liệu.',2]],why:"Bảng: hàng và cột. Biểu đồ: đường, thanh, biểu tượng. Bảng tính: chương trình thu thập dữ liệu."}},
 {q:"Em hãy di chuyển từng <b>thuật ngữ</b> sang <b>mô tả</b> tương ứng.",sort:{bins:[['Đồ thị (Graph)'],['Bảng (Table)']],items:[['Một sơ đồ thể hiện các dữ liệu dạng số một cách có tổ chức.',0],['Thông tin được sắp xếp và trình bày theo hàng và cột.',1]],why:"Đồ thị là sơ đồ dữ liệu dạng số. Bảng là thông tin theo hàng và cột."}},
 {q:"Em hãy di chuyển từng <b>thuật ngữ</b> sang <b>mô tả</b> tương ứng.",sort:{bins:[['Đạo văn (Plagiarism)'],['Đồ thị (Graph)'],['Trích dẫn (Citation)'],['Bảng (Table)']],items:[['Sử dụng một nguồn và không chia sẻ nguồn này đến từ đâu.',0],['Một sơ đồ thể hiện các dữ liệu dạng số một cách có tổ chức.',1],['Nêu rõ nguồn lấy thông tin.',2],['Thông tin được sắp xếp và trình bày theo hàng và cột.',3]],why:"Đạo văn giấu nguồn, trích dẫn nêu rõ nguồn; đồ thị là sơ đồ dữ liệu số; bảng là hàng và cột."}},
 {q:"Em sẽ sử dụng ứng dụng nào để <b>tạo và quản lí bảng tính</b> (Spreadsheet)?",o:["Google Sheets","Microsoft PowerPoint","Adobe Illustrator","Apple Pages"],a:0,why:"Google Sheets là ứng dụng bảng tính."},
 {q:"Ứng dụng nào cho phép hiển thị dữ liệu theo <b>hàng, cột</b> và <b>tạo biểu đồ</b> từ các giá trị?",o:["Google Sheets","Adobe Photoshop","Apple TextEdit","Microsoft Teams"],a:0,why:"Google Sheets hiển thị dữ liệu theo hàng, cột và tạo biểu đồ."},
 {q:"AI gợi ý một biểu đồ cho dữ liệu của em. Việc em <b>cần làm</b> là gì?",o:["Dùng ngay, không cần xem","Kiểm tra dữ liệu và xem biểu đồ có hợp lí không","Xóa dữ liệu của mình","Đưa thêm thông tin cá nhân thật"],a:1,why:"AI có thể gợi ý biểu đồ nhưng dữ liệu phải được kiểm tra."},
];

/* ---------- trạng thái ---------- */
const state = {cur:0, got:MISSIONS.map(()=>null), intro:true};
try{ const s=JSON.parse(localStorage.getItem('k5b23')||'null'); if(s&&s.got&&s.got.length===MISSIONS.length){ state.got=s.got; state.read=s.read||[]; const f=s.got.findIndex(x=>x===null); state.cur=f<0?MISSIONS.length:f; state.intro=state.cur===0; } }catch(e){}
let TEACH=false; try{ TEACH=localStorage.getItem('k5b23_teach')==='1'; }catch(e){}
function save(){ try{localStorage.setItem('k5b23',JSON.stringify({got:state.got,read:state.read||[]}))}catch(e){} }
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

/* ---------- chạm vào trang: lần lượt từng manh mối ---------- */
function clueGame(host, cfg, onWrong, onDone){
  host.innerHTML=(cfg.pre||'')+'<div class="clue-q" id="cq"></div><div id="pg2">'+cfg.page+'</div><div class="fb" id="cfb"></div>';
  const cq=host.querySelector('#cq'), f=host.querySelector('#cfb'); let k=0;
  const show=()=>{ cq.innerHTML='🔎 Manh mối '+(k+1)+'/'+cfg.clues.length+': '+cfg.clues[k].q; cq.classList.remove('pop'); void cq.offsetWidth; cq.classList.add('pop'); };
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

/* ---------- Nhiệm vụ 1: đọc bảng ---------- */
function m1(st){
  let wrong=0;
  st.innerHTML=brief('▦','Nhiệm vụ 1: Đọc bảng','Nhận biết hàng, cột, ô và tìm dữ liệu trong bảng.')+'<h3>Bước 1 · Hàng, cột hay ô?</h3><p class="hint">Chạm vào thẻ, rồi chạm vào ô. Hoặc kéo thả thẻ vào ô.</p><div id="g1"></div><div id="g2"></div>';
  sortGame($('#g1'),{
    bins:[['➡️ Hàng','Row'],['⬇️ Cột','Column'],['🟧 Ô','Cell']],
    items:[['Dãy ô nằm ngang',0],['Dãy ô nằm dọc',1],['Chỗ gặp nhau của một hàng và một cột',2],['Hàng ghi tên “Lan”',0],['Cột ghi các điểm số',1],['Một ô chứa đúng một dữ liệu',2]],
    why:'Hàng nằm ngang, cột nằm dọc, ô là chỗ hàng và cột gặp nhau.'
  },()=>wrong++,()=>{
    const g2=$('#g2');
    g2.innerHTML='<h3 style="margin-top:20px">Bước 2 · Điều tra bảng điểm</h3><div id="cg"></div>';
    clueGame($('#cg'),{
      page:`<table class="tbl"><tr><th data-k="hn">Tên</th><th data-k="ht">Toán</th><th data-k="hv">Tiếng Việt</th></tr>
        <tr><td data-k="lan">Lan</td><td data-k="lan_t">9</td><td data-k="lan_v">7</td></tr>
        <tr><td data-k="nam">Nam</td><td data-k="nam_t">8</td><td data-k="nam_v">10</td></tr>
        <tr><td data-k="mai">Mai</td><td data-k="mai_t">10</td><td data-k="mai_v">9</td></tr></table>`,
      clues:[
        {q:'Chạm vào <b>ô</b> cho biết điểm <b>Toán</b> của <b>Nam</b>.',key:'nam_t',why:'Hàng Nam gặp cột Toán ở ô có số 8.',miss:'Tìm hàng của Nam, rồi nhìn sang cột Toán.'},
        {q:'Chạm vào <b>ô</b> cho biết điểm <b>Tiếng Việt</b> của <b>Lan</b>.',key:'lan_v',why:'Hàng Lan gặp cột Tiếng Việt ở ô có số 7.',miss:'Tìm hàng của Lan, rồi nhìn sang cột Tiếng Việt.'},
        {q:'Chạm vào <b>tên</b> của bạn có điểm Toán <b>cao nhất</b>.',key:'mai',why:'Mai có điểm Toán 10, cao nhất.',miss:'So sánh các số ở cột Toán, rồi nhìn sang tên ở cùng hàng.'}
      ]
    },()=>wrong++,f=>{ fb(f,'ok','🏅 Hoàn thành! Em đã biết đọc dữ liệu trong bảng.'); finish(st,starsFor(wrong),g2); });
  });
}

/* ---------- Nhiệm vụ 2: chọn biểu đồ ---------- */
function m2(st){
  let wrong=0;
  st.innerHTML=brief('📊','Nhiệm vụ 2: Chọn biểu đồ','Chọn loại biểu đồ phù hợp, rồi tìm biểu đồ đó.')+'<h3>Bước 1 · Tình huống nào dùng biểu đồ nào?</h3><p class="hint">Chạm vào thẻ, rồi chạm vào ô. Hoặc kéo thả.</p><div id="g1"></div><div id="g2"></div>';
  sortGame($('#g1'),{
    bins:[['🥧 Biểu đồ tròn','Phần trăm, tỉ lệ'],['📈 Biểu đồ đường','Thay đổi theo thời gian'],['📊 Biểu đồ cột','So sánh các giá trị']],
    items:[['Phần trăm số điểm mỗi người chơi so với cả mùa',0],['Tỉ lệ các môn thể thao lớp em thích',0],['Nhiệt độ thay đổi trong 7 ngày',1],['Chiều cao của em qua các năm',1],['So sánh số quyển sách đọc của 4 bạn',2],['So sánh số học sinh của các lớp',2]],
    why:'Tròn cho phần trăm, đường cho thay đổi theo thời gian, cột cho so sánh.'
  },()=>wrong++,()=>{
    const g2=$('#g2');
    g2.innerHTML='<h3 style="margin-top:20px">Bước 2 · Tìm đúng biểu đồ</h3><div id="cg"></div>';
    const tile=(k,t)=>`<div class="vbox tapz" data-k="${k}" style="min-width:150px">${chart(k,'')}<div style="margin-top:4px;opacity:0">.</div></div>`;
    clueGame($('#cg'),{
      page:`<div class="steps">${['pie','column','scatter','line','bar','hist'].map(k=>tile(k)).join('')}</div>`,
      clues:[
        {q:'Chạm vào <b>biểu đồ tròn</b>.',key:'pie',why:'Biểu đồ tròn là hình tròn chia thành các phần.',miss:'Tìm hình giống chiếc bánh chia miếng.'},
        {q:'Chạm vào biểu đồ cho thấy <b>xu hướng theo thời gian</b>: biểu đồ <b>đường</b>.',key:'line',why:'Biểu đồ đường nối các điểm theo thời gian.',miss:'Tìm hình có đường gấp khúc nối các điểm.'},
        {q:'Chạm vào <b>biểu đồ cột</b> (các cột <b>thẳng đứng</b>).',key:'column',why:'Biểu đồ cột có các cột thẳng đứng.',miss:'Cột phải đứng thẳng, không nằm ngang.'},
        {q:'Chạm vào <b>biểu đồ thanh</b> (các thanh <b>nằm ngang</b>).',key:'bar',why:'Biểu đồ thanh có các thanh nằm ngang.',miss:'Thanh nằm ngang, đi từ trái sang phải.'},
        {q:'Chạm vào <b>biểu đồ phân tán</b> (nhiều điểm rời nhau, để xem mối tương quan).',key:'scatter',why:'Biểu đồ phân tán dùng để quan sát mối tương quan và sự phân tán dữ liệu.',miss:'Tìm hình chỉ gồm các chấm tròn rời nhau.'}
      ]
    },()=>wrong++,f=>{ fb(f,'ok','🏅 Hoàn thành! Em đã biết chọn và nhận ra các loại biểu đồ.'); finish(st,starsFor(wrong),g2); });
  });
}

/* ---------- Nhiệm vụ 3: ứng dụng bảng tính & AI ---------- */
function m3(st){
  let wrong=0;
  st.innerHTML=brief('🧮','Nhiệm vụ 3: Bảng tính và AI','Biết các ứng dụng bảng tính và dùng AI vẽ biểu đồ đúng cách.')+'<h3>Bước 1 · Ứng dụng của ai?</h3><p class="hint">Chạm vào thẻ ứng dụng, rồi chạm vào nhà phát hành. Hoặc kéo thả.</p><div id="g1"></div><div id="g2"></div>';
  sortGame($('#g1'),{
    bins:[['Microsoft'],['Apple'],['Kingsoft'],['Google']],
    items:[['Microsoft Excel',0],['Apple Numbers',1],['WPS Spreadsheet',2],['Google Sheets',3]],
    why:'Excel – Microsoft · Numbers – Apple · WPS – Kingsoft · Sheets – Google.'
  },()=>wrong++,()=>{
    const g2=$('#g2');
    g2.innerHTML='<h3 style="margin-top:20px">Bước 2 · Nhờ AI vẽ biểu đồ</h3><div id="j2"></div>';
    judge($('#j2'),'Với mỗi việc làm, chọn: <b>Nên</b> hay <b>Không nên</b> khi nhờ AI gợi ý biểu đồ.',['👍 Nên','👎 Không nên'],[
      {t:'Kiểm tra lại số liệu mà AI dùng.',ok:true,why:'AI có thể gợi ý biểu đồ nhưng dữ liệu phải được kiểm tra.'},
      {t:'Đưa tên và số điện thoại thật của bạn bè khi chưa được phép.',ok:false,why:'Không dùng dữ liệu cá nhân thật nếu chưa được phép.'},
      {t:'Dùng dữ liệu mẫu hoặc tên giả như Bạn A, Bạn B.',ok:true,why:'Dữ liệu mẫu giúp bảo vệ thông tin cá nhân.'},
      {t:'Dùng ngay biểu đồ AI gợi ý mà không xem lại.',ok:false,why:'Em cần kiểm tra dữ liệu và xem biểu đồ có hợp lí không.'}
    ],()=>wrong++,f=>{ fb(f,'ok','🏅 Hoàn thành! AI gợi ý – em kiểm tra – không dùng dữ liệu cá nhân thật.'); finish(st,starsFor(wrong),$('#j2')); });
  });
}

const REAL=[
 {icon:"🍜",title:"Khảo sát món ăn yêu thích của lớp",story:"Lớp 5A (30 bạn) khảo sát món ăn yêu thích. Em cần làm một biểu đồ để <b>thấy mỗi món chiếm bao nhiêu phần trăm</b> của cả lớp.<div class='rwm'><table class='tbl'><tr><th>Món</th><th>Số bạn</th></tr><tr><td>Phở</td><td>12</td></tr><tr><td>Cơm tấm</td><td>9</td></tr><tr><td>Bún chả</td><td>6</td></tr><tr><td>Mì</td><td>3</td></tr></table></div>",
  Q:{q:"Em nên chọn loại biểu đồ nào?",o:["Biểu đồ tròn","Biểu đồ đường","Biểu đồ phân tán","Bảng không cần biểu đồ"],a:0,why:"Biểu đồ tròn cho thấy phần trăm hay tỉ lệ của từng phần so với tổng."}},
 {icon:"🌱",title:"Theo dõi cây đậu",story:"Em trồng một cây đậu và đo chiều cao mỗi tuần. Em muốn cho cả lớp thấy cây <b>thay đổi như thế nào theo thời gian</b>.<div class='rwm'><table class='tbl'><tr><th>Tuần</th><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr><td>Cao (cm)</td><td>2</td><td>5</td><td>9</td><td>14</td></tr></table></div>",
  Q:{q:"Loại biểu đồ nào phù hợp nhất?",o:["Biểu đồ đường","Biểu đồ tròn","Biểu đồ phân tán","Không dùng biểu đồ nào"],a:0,why:"Biểu đồ đường cho thấy xu hướng thay đổi qua thời gian."}},
 {icon:"📊",title:"Chọn biểu đồ cho từng việc",story:"Cô giáo giao bốn bài toán số liệu khác nhau cho các nhóm. Mỗi nhóm cần chọn đúng loại biểu đồ.",
  Q:{q:"Chạm thẻ tình huống rồi chạm loại biểu đồ phù hợp.",sort:{bins:[['🥧 Biểu đồ tròn'],['📈 Biểu đồ đường'],['📊 Biểu đồ cột hoặc thanh'],['🔵 Biểu đồ phân tán']],items:[['Tỉ lệ phần trăm bạn đi học bằng xe đạp, xe buýt, đi bộ',0],['Nhiệt độ ở trường mỗi ngày trong một tuần',1],['So sánh số sách đọc của 4 tổ',2],['Xem chiều cao và cân nặng của các bạn có liên quan nhau không',3]],why:"Tròn: phần trăm · Đường: thay đổi theo thời gian · Cột, thanh: so sánh · Phân tán: mối liên hệ giữa hai đại lượng."}}},
 {icon:"▦",title:"Đọc bảng điểm",story:"Cô gửi cho em bảng điểm của ba bạn. Em cần đọc đúng hàng, cột và ô.<div class='rwm'><table class='tbl'><tr><th></th><th>Toán</th><th>Tiếng Việt</th><th>Khoa học</th></tr><tr><td>Minh</td><td>9</td><td>8</td><td>10</td></tr><tr><td>Lan</td><td>8</td><td>9</td><td>7</td></tr><tr><td>Hùng</td><td>7</td><td>7</td><td>9</td></tr></table></div>",
  Q:{q:"Với mỗi câu, chọn <b>Đúng</b> hoặc <b>Sai</b>.",tf:["Hàng của Lan có các điểm 8, 9, 7","Cột Toán có các điểm 9, 8, 7","Ô gặp nhau của hàng Hùng và cột Khoa học là 7","Minh có điểm Khoa học cao nhất trong ba bạn"],a:[true,true,false,true],why:"Ô của Hùng và Khoa học là 9, không phải 7. Các ý còn lại đều đúng."}},
 {icon:"🧮",title:"Vẽ biểu đồ trong Google Sheets",story:"Em có số liệu khảo sát và muốn vẽ biểu đồ trong ứng dụng bảng tính Google Sheets.",
  order:{screens:(()=>{
    const D=[['Món','Số bạn'],['Phở','12'],['Cơm tấm','9'],['Bún chả','6']], T='Tiêu đề biểu đồ';
    const col='<div class="xcol"><i style="height:78px;background:#4285f4"></i><i style="height:58px;background:#4285f4"></i><i style="height:38px;background:#4285f4"></i></div>';
    const chart=(inner,title,extra)=>'<div class="xchart"><div class="ct">'+title+'</div>'+inner+(extra||'')+'</div>';
    const edit=(hot)=>'<div class="xedit"><div class="eh">Trình chỉnh sửa biểu đồ</div>'+['Biểu đồ cột','Biểu đồ đường','Biểu đồ tròn'].map(n=>'<div class="ty'+(n===hot?' hot':'')+'">'+n+'</div>').join('')+'</div>';
    return [
      xSheets('Khảo sát món ăn',[]),
      xSheets('Khảo sát món ăn',D),
      xSheets('Khảo sát món ăn',D,{sel:[0,0,3,1]}),
      xSheets('Khảo sát món ăn',D,{sel:[0,0,3,1],menu:true,right:chart(col,T)}),
      xSheets('Khảo sát món ăn',D,{sel:[0,0,3,1],right:chart('<div class="xpie"></div>',T)+edit('Biểu đồ tròn')}),
      xSheets('Khảo sát món ăn',D,{sel:[0,0,3,1],right:chart('<div class="xpie"></div>','Món ăn yêu thích lớp 5A')}),
      xSheets('Khảo sát món ăn',D,{right:chart('<div class="xpie"></div>','Món ăn yêu thích lớp 5A','<span class="xok">✔ 12 + 9 + 6 khớp bảng</span>')})];
  })(),q:"Chạm các bước theo <b>thứ tự đúng</b>. Xem màn hình bên dưới thay đổi sau mỗi bước.",steps:["Nhập dữ liệu vào các hàng và cột","Chọn vùng dữ liệu cần vẽ","Chọn Chèn → Biểu đồ","Chọn loại biểu đồ phù hợp","Đặt tiêu đề và nhãn cho biểu đồ","Kiểm tra biểu đồ có đúng số liệu không"],miss:"Phải có dữ liệu trước rồi mới chọn và vẽ được. Kiểm tra là bước cuối.",why:"Nhập dữ liệu → Chọn vùng → Chèn biểu đồ → Chọn loại → Đặt tiêu đề → Kiểm tra."}},
 {icon:"🔒",title:"Nhờ AI vẽ biểu đồ nhưng có thông tin cá nhân",story:"Bảng khảo sát của em có họ tên, số điện thoại và địa chỉ của các bạn. Em muốn nhờ trợ lý AI gợi ý biểu đồ.",
  Q:{q:"Em nên làm gì?",o:["Thay tên bằng Bạn A, Bạn B và bỏ thông tin không cần, rồi kiểm tra biểu đồ AI gợi ý","Dán nguyên bảng có cả số điện thoại cho AI","Gửi cả địa chỉ để AI vẽ cho chính xác","Dùng ngay biểu đồ AI gợi ý không cần xem lại"],a:0,why:"Không đưa dữ liệu cá nhân thật cho AI. Dùng tên giả, rồi kiểm tra kết quả."}},
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
    <div class="big">📊</div>
    <h2 style="font-size:2rem;color:var(--teal-d)">Bài 23: Trực quan hóa dữ liệu</h2>
    <p>Bảng và biểu đồ biến những con số thành hình ảnh dễ nhìn, dễ hiểu.</p>
    <div class="recap"><div><b>Em sẽ học</b><br>Bảng · biểu đồ · đồ thị · ứng dụng bảng tính · AI gợi ý biểu đồ</div><div><b>Em sẽ luyện</b><br>Đọc bảng · chọn biểu đồ · ứng dụng bảng tính · dùng AI đúng cách</div><div><b>Cách chơi</b><br>Học bài → 3 nhiệm vụ → Trắc nghiệm.</div></div>
    <p class="tip" style="text-align:left">Em sẽ học qua <b>thẻ flashcard</b>, làm <b>3 nhiệm vụ</b>, rồi làm <b>trắc nghiệm</b>. Mỗi nhiệm vụ cho tối đa 3 ⭐. Em trả lời càng ít lần sai thì càng được nhiều sao. Bên trái màn hình luôn có khung <b>“Cách làm bài”</b>. Tiến độ được lưu lại trên máy của em.</p>
    <button class="btn" id="go">Bắt đầu ▶</button>
  </div>`;
  $('#go').onclick=()=>{state.intro=false;render()};
}
function finale(st){
  const total=state.got.reduce((a,b)=>a+(b||0),0);
  const rank = total>=12?'Họa sĩ dữ liệu xuất sắc':total>=9?'Họa sĩ dữ liệu giỏi':'Họa sĩ dữ liệu tập sự';
  st.innerHTML=`<div class="final"><div class="big">🏅</div><h2 style="font-size:2rem;color:var(--teal-d)">${rank}</h2>
  <p>Em đạt <b>${total} / 15 ⭐</b></p>
  <div class="recap"><div><b>Bảng</b><br>Dữ liệu xếp theo hàng (ngang) và cột (dọc). Ô là chỗ hàng và cột gặp nhau.</div><div><b>Biểu đồ</b><br>Tròn: phần trăm · Đường: thay đổi theo thời gian · Cột, thanh: so sánh · Phân tán: mối tương quan.</div><div><b>Đồ thị</b><br>Sơ đồ thể hiện dữ liệu dạng số, thường dùng đường hoặc điểm.</div><div><b>Bảng tính & AI</b><br>Excel, Numbers, WPS, Google Sheets giúp tạo biểu đồ. AI gợi ý, em kiểm tra, không dùng dữ liệu cá nhân thật.</div></div>
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
    last=0; TEACH=!TEACH; try{ localStorage.setItem('k5b23_teach',TEACH?'1':'0'); }catch(x){}
    render();
    const t=el('<div style="position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#333;color:#fff;padding:10px 18px;border-radius:12px;z-index:9999;font-weight:700">'+(TEACH?'🔓 Đã mở khóa tất cả':'🔒 Đã khóa lại')+'</div>');
    document.body.appendChild(t); setTimeout(()=>t.remove(),1800);
  });
})();
render();
