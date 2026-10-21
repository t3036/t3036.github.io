/* ---------- tiện ích ---------- */
const $ = (s, r=document) => r.querySelector(s);
const el = (html) => { const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; };
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]} return a };
const stars = n => '⭐'.repeat(n) + '☆'.repeat(3-n);

const LESSON_NAME="Trích dẫn nguồn thông tin";

/* ---------- 7 thẻ học: nội dung, hình minh họa, bài tập nhỏ ---------- */
const THEORY=[
 {i:"👤",h:"Chủ sở hữu thông tin",
  t:"Mỗi sản phẩm đều có <b>người tạo ra</b> nó. Hãy luôn tìm hiểu <b>chủ sở hữu</b> và <b>xin phép</b> trước khi chỉnh sửa, chia sẻ hoặc sử dụng thông tin đó.",
  e:"Email → người gửi · Bài blog → tác giả · Tranh số gốc → họa sĩ minh họa."},
 {i:"📌",h:"Trích dẫn là gì? Khi nào cần?",
  t:"<b>Trích dẫn (Citation)</b> là cho biết thông tin em dùng <b>đến từ đâu</b>, để ghi công cho tác giả và <b>tránh đạo văn</b>. Kiến thức phổ biến ai cũng biết thì không cần trích dẫn.",
  e:""},
 {i:"🧾",h:"Một trích dẫn gồm những gì?",
  t:"Trích dẫn thường có: <b>tác giả</b>, <b>tiêu đề</b>, <b>nhà xuất bản</b>, <b>ngày (năm) xuất bản</b>, <b>phiên bản</b>… Chúng ta lấy các thông tin này từ trang tên sách.",
  e:"Orson, D: 2010. Sách mẫu. (Tái bản lần thứ 2). Companypro."},
 {i:"🌐",h:"Các cách trích dẫn phù hợp",
  t:"Em có thể ghi nguồn bằng <b>tên tác giả</b>, bằng <b>địa chỉ trang Web</b>, hoặc nói rõ <b>số liệu lấy từ cơ quan nào</b>. Tác giả trang Web thường nằm ở <b>trang giới thiệu</b>.",
  e:""},
 {i:"📚",h:"Tài liệu tham khảo & chú thích",
  t:"<b>Tài liệu tham khảo (Reference)</b> là danh sách các nguồn em đã dùng: sách, báo, trang Web, video… <b>Chú thích chân trang (Footnote)</b> ở cuối mỗi trang. <b>Chú thích cuối tài liệu (Endnote)</b> ở cuối tài liệu.",
  e:"Số nhỏ ¹ trong bài sẽ dẫn đến phần chú thích tương ứng."},
 {i:"🚨",h:"Đạo văn và cách tránh",
  t:"<b>Đạo văn (Plagiarism)</b> là sao chép, dùng tác phẩm của người khác và <b>giả vờ như của mình</b>, hoặc dùng thông tin mà <b>không trích dẫn nguồn</b>. Muốn tránh: luôn ghi tên tác giả và nguồn.",
  e:"Không nên: chép thông tin không ghi nguồn · dùng ảnh, bài viết của người khác mà không ghi tên tác giả."},
 {i:"🤖",h:"Ghi nguồn khi dùng sản phẩm AI",
  t:"Nội dung AI hỗ trợ cũng cần được <b>kiểm tra</b> và <b>minh bạch</b>. Đừng sao chép nguyên văn AI để nộp như bài của mình. Kết quả AI có thể <b>sai, thiếu nguồn</b>, hoặc giống nội dung khác.",
  e:"Nên: ghi chú có AI hỗ trợ, tự chỉnh sửa, bổ sung nguồn đáng tin, hỏi giáo viên nếu chưa rõ cách ghi nguồn."},
];

const VIS=[
 /* 1 chủ sở hữu */
 `<div class="steps"><div class="st vbox te"><div class="big">✉️</div><b>Email</b></div><div class="ar">→</div><div class="st vbox ok"><div class="big">🧑</div><b>Người gửi</b></div></div>
  <div class="steps" style="margin-top:10px"><div class="st vbox te"><div class="big">📝</div><b>Bài đăng trên blog</b></div><div class="ar">→</div><div class="st vbox ok"><div class="big">✍️</div><b>Tác giả</b></div></div>
  <div class="steps" style="margin-top:10px"><div class="st vbox te"><div class="big">🖼️</div><b>Tác phẩm nghệ thuật số gốc</b></div><div class="ar">→</div><div class="st vbox ok"><div class="big">🎨</div><b>Họa sĩ minh họa</b></div></div>`,
 /* 2 trích dẫn */
 `<div class="steps">
   <div class="st vbox ok"><div class="big">🦸</div>Ảnh siêu anh hùng của tác giả nổi tiếng<br><b>✔ Cần trích dẫn</b></div>
   <div class="st vbox ok"><div class="big">🐋</div>Số liệu cá voi của National Geographic<br><b>✔ Cần trích dẫn</b></div>
   <div class="st vbox no"><div class="big">🎂</div>Chữ “Chúc mừng sinh nhật”<br><b>✘ Không cần</b></div>
   <div class="st vbox no"><div class="big">🌍</div>Trái Đất quay quanh Mặt Trời<br><b>✘ Không cần</b></div></div>`,
 /* 3 thông tin trích dẫn */
 `<div class="bk">
   <div class="bk-cover"><div class="au"><span class="hl">Orson, D</span></div>
     <div><div class="orn">📘</div><div class="ti"><span class="hl">Sách mẫu</span></div></div>
     <div class="pb"><span class="hl">Nhà xuất bản Companypro</span></div></div>
   <div class="bk-page"><h5>Trang thông tin sách</h5>
     <div><span class="hl">Tái bản lần thứ 2</span></div>
     <div><span class="hl">Năm xuất bản: 2010</span></div>
     <div>ISBN 978-0-00-000000-0</div><div>240 trang</div><div>Giá: 99.000đ</div>
     <div class="ft">© Companypro</div></div></div>
  <div class="cap">Orson, D: 2010. Sách mẫu. (Tái bản lần thứ 2). Companypro.</div>`,
 /* 4 cách trích dẫn */
 `<div class="steps">
   <div class="st vbox te"><div class="big">📖</div>“Có hai con mèo ngồi bên cửa sổ” <b>của tác giả Nguyễn Nhật Ánh</b></div>
   <div class="st vbox te"><div class="big">🌐</div>“Thông tin từ <b>www.dongvathoangda.org</b>”</div>
   <div class="st vbox te"><div class="big">📊</div>“Số liệu này từ <b>cơ quan bảo tồn môi trường</b>.”</div>
   <div class="st vbox te"><div class="big">📰</div>“Ý kiến này được trích từ <b>bài báo News</b>.”</div></div>`,
 /* 5 tài liệu tham khảo */
 `<div class="vgrid" style="grid-template-columns:minmax(0,3fr) minmax(0,2fr)"><div class="paper" style="min-height:300px;display:flex;flex-direction:column"><h4 style="margin:0 0 6px;font-size:1.25rem">Cá voi xanh – loài lớn nhất hành tinh</h4>
   <div style="font-size:1rem;line-height:1.6">Cá voi xanh sống ở các đại dương trên khắp thế giới. Chúng ăn những sinh vật nhỏ gọi là nhuyễn thể và có thể ăn hàng tấn mỗi ngày. Cá voi xanh dài tới 30 mét<span class="sup">1</span>, là loài động vật lớn nhất từng được biết đến.</div>
   <div style="margin-top:auto;padding-top:14px"><div class="fn" style="margin-top:0"><span class="sup">1</span> Nguồn: National Geographic, bài “Cá voi xanh”.</div><div style="text-align:center;color:var(--muted);font-size:.85rem;margin-top:6px">Trang 3</div></div></div>
  <div class="legend"><div class="lg"><span class="nb">¹</span><div><b>Chú thích chân trang</b><br>Ở cuối mỗi trang.</div></div><div class="lg"><span class="nb" style="background:var(--red)">📕</span><div><b>Chú thích cuối tài liệu</b><br>Ở cuối tài liệu.</div></div><div class="lg"><span class="nb" style="background:var(--green)">📚</span><div><b>Tài liệu tham khảo</b><br>Danh sách các nguồn đã dùng.</div></div></div></div>
  <div class="paper" style="margin-top:14px"><b>📕 Ví dụ chú thích cuối tài liệu (Endnote)</b>
   <div style="font-size:1rem;margin-top:6px">Trong bài: “Cá voi xanh dài tới 30 mét<span class="sup">1</span>. Chúng ăn nhuyễn thể<span class="sup">2</span>.”</div>
   <div class="fn" style="margin-top:10px;width:100%;font-size:.95rem"><b>Chú thích (cuối tài liệu)</b><br><span class="sup">1</span> National Geographic, bài “Cá voi xanh”.<br><span class="sup">2</span> Thế giới cá voi, www.dongvathoangda.org.</div></div>`,
 /* 6 đạo văn */
 `<div class="steps"><div class="st vbox te"><div class="big">📄</div>Bài của người khác</div><div class="ar">→ chép →</div>
   <div class="st vbox no"><div class="big">🚨</div>Bài “của em” nhưng <b>không ghi nguồn</b><br><b>= Đạo văn</b></div></div>
  <div class="steps" style="margin-top:10px"><div class="st vbox te"><div class="big">📄</div>Bài của người khác</div><div class="ar">→ ghi nguồn →</div>
   <div class="st vbox ok"><div class="big">✅</div>Bài của em, có <b>trích dẫn</b><br><b>= Đúng cách</b></div></div>`,
 /* 7 AI */
 `<div class="chat"><div class="chead"><span class="cav">✦</span><b>Trợ lý AI</b></div><div class="cbody">
   <div class="bub u">Gợi ý dàn ý bài về cá voi.</div><div class="bub">1) Giới thiệu 2) Nơi sống 3) Thức ăn…</div></div></div>
  <div class="steps" style="margin-top:10px"><div class="st vbox ok">✔ Kiểm tra, viết lại bằng lời của em</div><div class="st vbox ok">✔ Ghi chú “có AI hỗ trợ” + nguồn tin cậy</div><div class="st vbox no">✘ Chép nguyên văn rồi nộp như bài của mình</div></div>`,
];

/* bài tập nhỏ cho từng thẻ (kiểu: o/a = chọn 1 hoặc nhiều, tf = đúng/sai theo dòng, html+key = chạm vào hình) */
const PRACT=[
 [{q:"Đúng hay Sai?",tf:["Chủ sở hữu của một email là người gửi email.","Chủ sở hữu bài đăng trên blog là họa sĩ minh họa.","Chủ sở hữu tác phẩm nghệ thuật số gốc là họa sĩ minh họa."],a:[true,false,true],why:"Email → người gửi · Blog → tác giả · Tranh số gốc → họa sĩ minh họa."},
  {q:"Ai có quyền sở hữu đối với hình ảnh mà em tìm thấy trên Internet?",o:["Người đã tạo và tải lên hình ảnh","Người viết chú thích cho hình ảnh trực tuyến","Trang Web nơi hình ảnh được hiển thị","Công cụ tìm kiếm em đã sử dụng để tìm hình ảnh"],a:0,why:"Người tạo ra hình ảnh mới là chủ sở hữu."}],
 [{q:"Tình huống nào em <b>cần</b> trích dẫn, tình huống nào <b>không</b>?",lab:["Cần trích dẫn","Không cần"],tf:["Em dùng chữ “Chúc mừng sinh nhật” trong bài trình chiếu","Em dùng hình ảnh siêu anh hùng do một tác giả nổi tiếng tạo ra","Em lấy đoạn về số lượng cá voi từ một bài nghiên cứu của National Geographic"],a:[false,true,true],why:"Ảnh và số liệu của người khác phải ghi nguồn. Câu chúc quen thuộc thì không cần."},
  {q:"Khi nào em <b>không</b> cần phải trích dẫn?",o:["Khi em lấy một đoạn văn từ cuốn sách yêu thích đưa vào bài văn của mình.","Khi em lấy thông tin từ một trang Web.","Khi em sử dụng một kiến thức chung chung, phổ biến mà ai cũng biết.","Khi em sử dụng hình ảnh của một họa sĩ không nổi tiếng."],a:2,why:"Kiến thức phổ biến (ví dụ Trái Đất quay quanh Mặt Trời) thì không cần trích dẫn. Sách, trang Web và ảnh của họa sĩ dù không nổi tiếng đều là sản phẩm của người khác."}],
 [{q:"Chạm vào <b>tên nhà xuất bản</b> trên cuốn sách.",html:`<div class="bk"><div class="bk-cover"><div class="au tapz" data-k="au">Orson, D</div><div><div class="orn">📘</div><div class="ti tapz" data-k="ti">Sách mẫu</div></div><div class="pb tapz" data-k="pub">Nhà xuất bản Companypro</div></div><div class="bk-page"><h5>Trang thông tin sách</h5><div class="tapz" data-k="ed">Tái bản lần thứ 2</div><div class="tapz" data-k="yr">Năm xuất bản: 2010</div><div class="tapz" data-k="isbn">ISBN 978-0-00-000000-0</div><div class="ft">© Companypro</div></div></div>`,key:"pub",why:"Companypro là nhà xuất bản."},
  {q:"Thông tin nào nên được đưa vào trích dẫn cho một cuốn sách?",o:["Tên sách và tên tác giả","Tên của thư viện và ngày em đọc sách","Tên của người đã giới thiệu cuốn sách cho em","Bìa sách trông như thế nào và có bao nhiêu trang"],a:0,why:"Trích dẫn cần cho biết sách nào và do ai viết."}],
 [{q:"Câu nào là một trích dẫn <b>phù hợp</b> cho thông tin lấy từ trang Web?",o:["“Thông tin từ www.dongvathoangda.org”","“Em thấy ở đâu đó trên mạng.”","“Ai cũng biết thế mà.”","“Em nhớ là có đọc rồi.”"],a:0,why:"Trích dẫn tốt nói rõ nguồn cụ thể, ví dụ địa chỉ trang Web."},
  {q:"Mục nào trên trang Web cho em biết <b>tác giả</b> của trang?",o:["Trang giới thiệu","Trang hỗ trợ khách hàng","Số điện thoại ở mục “Liên hệ với chúng tôi”","URL"],a:0,why:"Tác giả của một trang Web thường được tìm thấy ở trang giới thiệu."}],
 [{q:"Mỗi chú thích đặt ở đâu?",lab:["Cuối mỗi trang","Cuối tài liệu"],tf:["Chú thích chân trang (Footnote)","Chú thích cuối tài liệu (Endnote)"],a:[true,false],why:"Footnote ở cuối mỗi trang, Endnote ở cuối cả tài liệu."},
  {q:"Danh sách các sách, báo, trang Web, video em đã dùng để làm bài được gọi là gì?",o:["Tài liệu tham khảo (Reference)","Đạo văn (Plagiarism)","Chú thích chân trang","Tiêu đề trang"],a:0,why:"Tài liệu tham khảo là danh sách các nguồn em đã dùng."}],
 [{q:"Đúng hay Sai? “Đạo văn (Plagiarism) là sao chép tác phẩm của người khác và giả vờ như đó là của em.”",o:["Đúng","Sai"],a:0,why:"Đó chính là định nghĩa của đạo văn."},
  {q:"Ví dụ nào là <b>đạo văn</b>, ví dụ nào là <b>trích dẫn</b>?",lab:["Đạo văn","Trích dẫn"],tf:["Cung cấp thông tin về hình ảnh em lấy từ Internet và dùng trong bài tập của mình","Sử dụng tác phẩm của người khác như là của mình"],a:[false,true],why:"Nêu rõ nguồn là trích dẫn. Giấu nguồn, nhận là của mình là đạo văn."}],
 [{q:"Việc làm nào là <b>nên</b>, việc nào <b>không nên</b> khi dùng AI?",lab:["Nên","Không nên"],tf:["Kiểm tra lại kết quả AI và bổ sung nguồn tin cậy","Sao chép nguyên văn AI rồi nộp như bài của mình","Ghi chú nội dung có AI hỗ trợ và tự chỉnh sửa"],a:[true,false,true],why:"AI là trợ lý, không phải tác giả thay em."},
  {q:"Em chưa rõ cách ghi nguồn cho nội dung có AI hỗ trợ. Em nên làm gì?",o:["Bỏ qua, không ghi nguồn","Hỏi giáo viên","Giấu việc đã dùng AI","Nhờ AI nộp bài giúp"],a:1,why:"Chưa rõ thì hỏi giáo viên."}],
];

/* ---------- 3 nhiệm vụ, học bài và trắc nghiệm ---------- */
const MISSIONS = [
{icon:"📖",label:"Học bài",run:theory,steps:["Chạm vào một thẻ để <b>lật</b> và đọc.","Đọc xong, bấm <b>“Em đã hiểu ✓”</b>.","Một <b>cửa sổ bài tập nhỏ</b> sẽ hiện ra. Trả lời đúng để <b>mở khóa</b> thẻ tiếp theo 🔓.","Mở hết các thẻ rồi sang phần luyện tập."],tip:"Em có thể chạm vào thẻ đã đọc để đọc lại."},
{icon:"👤",label:"Tìm chủ sở hữu",run:m1,steps:["Bước 1: <b>chạm vào một thẻ</b>, rồi chạm vào ô loại nội dung để đặt chủ sở hữu vào. Hoặc kéo thả.","Bấm <b>Kiểm tra</b>. Thẻ đúng sẽ xanh, thẻ sai quay về khay.","Bước 2: đọc câu hỏi màu xanh, rồi <b>chạm đúng chỗ</b> trên trang Web, email hoặc bài đăng.","Tìm đủ 3 manh mối để hoàn thành."],tip:"Email → người gửi · Blog → tác giả · Tranh số gốc → họa sĩ."},
{icon:"🧾",label:"Lập trích dẫn",run:m2,steps:["Bước 1: phân loại từng tình huống vào <b>Cần trích dẫn</b> hoặc <b>Không cần</b>.","Bước 2: đọc yêu cầu, <b>chạm vào đúng thông tin</b> trên trang tên sách.","Mỗi lần chạm đúng, thông tin tự <b>ghép vào dòng trích dẫn</b>.","Ghép đủ 5 phần để hoàn thành trích dẫn."],tip:"Tác giả · Năm · Tiêu đề · Phiên bản · Nhà xuất bản."},
{icon:"🚨",label:"Bắt đạo văn",run:m3,steps:["Đọc <b>bài làm của bạn Nam</b>.","<b>Chạm vào câu</b> em cho là đạo văn – câu đó sẽ có nền vàng. Chạm lần nữa để bỏ chọn.","Bấm <b>Kiểm tra</b>. Nếu chưa đúng, đọc gợi ý rồi thử lại.","Sau đó chọn cách xử lí đúng cho <b>các tình huống dùng AI</b>."],tip:"Đạo văn = lấy của người khác mà không ghi nguồn hoặc giả vờ là của mình."},
{icon:"✅",label:"Trắc nghiệm",run:quiz,steps:["Đọc kỹ câu hỏi.","Chạm vào đáp án em chọn.","Đúng: đáp án xanh và có lời giải thích. Sai: đáp án đỏ – hãy chọn lại.","Bấm <b>“Câu tiếp”</b> để làm tiếp."],tip:"Đọc cả các đáp án trước khi chọn."},
];

const QUIZ=[
 {q:"Mục nào sau đây sẽ cho em biết <b>tác giả</b> của một trang Web?",o:["Trang giới thiệu","Trang hỗ trợ khách hàng","Số điện thoại ở mục “Liên hệ với chúng tôi”","URL"],a:0,why:"Tác giả của một trang Web thường được tìm thấy ở trang giới thiệu."},
 {q:"Em xác định người tạo ra sản phẩm gốc. Hãy chọn Đúng hoặc Sai cho từng ý.",tf:["Email → Người gửi","Bài đăng trên blog → Họa sĩ minh họa","Tác phẩm nghệ thuật số gốc → Họa sĩ minh họa","Bài đăng trên blog → Tác giả"],a:[true,false,true,true],why:"Email → người gửi · Blog → tác giả · Tranh số gốc → họa sĩ minh họa."},
 {q:"Ai có quyền sở hữu đối với hình ảnh mà em tìm thấy trên Internet?",o:["Người đã tạo và tải lên hình ảnh","Người viết chú thích cho hình ảnh trực tuyến","Trang Web nơi hình ảnh được hiển thị","Công cụ tìm kiếm em đã sử dụng để tìm hình ảnh"],a:0,why:"Người tạo ra hình ảnh mới là chủ sở hữu."},
 {q:"Tình huống nào em <b>nên</b> dùng trích dẫn?",o:["Khi em đăng nội dung gốc của người khác trên mạng xã hội","Khi em tạo ra một tác phẩm hội họa mới trên lớp","Khi em tự viết một câu chuyện của riêng mình"],a:0,why:"Nội dung gốc của người khác thì phải ghi nguồn."},
 {q:"Em có trích dẫn: <i>Orson, D: 2010. Sách mẫu. (Tái bản lần thứ 2). Companypro.</i> Thông tin nào có trong trích dẫn? (Chọn 3)",o:["Tiêu đề (Title)","Nhà xuất bản (Publisher)","Tác giả (Author)","Số trang (Number of Pages)","URL (Uniform Resource Locator)","Tập tin (File)"],a:[0,1,2],why:"Trích dẫn có Tiêu đề, Nhà xuất bản và Tác giả."},
 {q:"Khi nào em <b>không</b> cần phải trích dẫn?",o:["Khi em lấy một đoạn văn từ cuốn sách yêu thích đưa vào bài văn của mình.","Khi em lấy thông tin từ một trang Web.","Khi em sử dụng một kiến thức chung chung, phổ biến mà ai cũng biết.","Khi em sử dụng hình ảnh của một họa sĩ không nổi tiếng."],a:2,why:"Kiến thức phổ biến ai cũng biết thì không cần trích dẫn."},
 {q:"Em chuẩn bị bài trình chiếu. Với mỗi phát biểu, chọn <b>Có</b> nếu cần trích dẫn nguồn hoặc <b>Không</b> nếu không cần.",lab:["Có","Không"],tf:["Em dùng chữ “Chúc mừng sinh nhật” trong bài trình chiếu của mình","Em dùng hình ảnh về một siêu anh hùng do một tác giả nổi tiếng tạo ra","Em trích dẫn một đoạn về số lượng cá voi từ một bài nghiên cứu do National Geographic xuất bản"],a:[false,true,true],why:"Ảnh và số liệu của người khác phải ghi nguồn."},
 {q:"Thông tin nào nên được đưa vào trích dẫn cho một cuốn sách?",o:["Tên sách và tên tác giả","Tên của thư viện và ngày em đọc sách","Tên của người đã giới thiệu cuốn sách cho em","Bìa sách trông như thế nào và có bao nhiêu trang"],a:0,why:"Trích dẫn cần cho biết sách nào và do ai viết."},
 {q:"Hãy nối thuật ngữ với ví dụ phù hợp.",lab:["Đạo văn","Trích dẫn"],tf:["Cung cấp thông tin về hình ảnh em lấy từ Internet và dùng trong bài tập của mình","Sử dụng tác phẩm của người khác như là của mình"],a:[false,true],why:"Nêu rõ nguồn là trích dẫn. Nhận của người khác là của mình là đạo văn."},
 {q:"Hãy nối thuật ngữ với mô tả tương ứng.",lab:["Đạo văn","Trích dẫn"],tf:["Sử dụng một nguồn và không chia sẻ nguồn này đến từ đâu.","Nêu rõ nguồn lấy thông tin."],a:[true,false],why:"Đạo văn là giấu nguồn, trích dẫn là nêu rõ nguồn."},
 {q:"Đúng hay Sai? “Đạo văn (Plagiarism) là sao chép tác phẩm của người khác và giả vờ như đó là của em.”",o:["Đúng","Sai"],a:0,why:"Đó chính là định nghĩa của đạo văn."},
 {q:"Em dùng AI để làm bài. Việc nào sau đây là <b>đúng</b>?",o:["Kiểm tra lại kết quả, tự chỉnh sửa và ghi chú có AI hỗ trợ","Sao chép nguyên văn kết quả AI rồi nộp như bài của mình","Tin ngay kết quả AI, không cần kiểm tra","Giấu việc đã dùng AI"],a:0,why:"AI hỗ trợ cần được kiểm tra và minh bạch."},
];

/* ---------- trạng thái ---------- */
const state = {cur:0, got:MISSIONS.map(()=>null), intro:true};
try{ const s=JSON.parse(localStorage.getItem('k5b21')||'null'); if(s&&s.got&&s.got.length===MISSIONS.length){ state.got=s.got; state.read=s.read||[]; const f=s.got.findIndex(x=>x===null); state.cur=f<0?MISSIONS.length:f; state.intro=state.cur===0; } }catch(e){}
let TEACH=false; try{ TEACH=localStorage.getItem('k5b21_teach')==='1'; }catch(e){}
function save(){ try{localStorage.setItem('k5b21',JSON.stringify({got:state.got,read:state.read||[]}))}catch(e){} }
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
  host.innerHTML=`<div class="pool" id="pool"></div><div class="bins ${cfg.bins.length===3?'c3':'c2'}" id="bins">${cfg.bins.map((b,i)=>`<div class="bin" data-b="${i}"><h3>${b[0]}</h3><small>${b[1]||''}</small><div class="in"></div></div>`).join('')}</div>
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

/* ---------- Nhiệm vụ 1: tìm chủ sở hữu ---------- */
function m1(st){
  let wrong=0;
  st.innerHTML=brief('👤','Nhiệm vụ 1: Tìm chủ sở hữu','Xác định ai là người tạo ra từng loại nội dung.')+'<h3>Bước 1 · Ghép chủ sở hữu với loại nội dung</h3><p class="hint">Chạm vào thẻ, rồi chạm vào ô. Hoặc kéo thả thẻ vào ô.</p><div id="g1"></div><div id="g2"></div>';
  sortGame($('#g1'),{
    bins:[['✉️ Email'],['📝 Bài đăng trên Blog'],['🎨 Tác phẩm nghệ thuật số gốc']],
    items:[['Người gửi',0],['Tác giả',1],['Họa sĩ minh họa',2]],
    why:'Email → người gửi · Blog → tác giả · Tranh số gốc → họa sĩ minh họa.'
  },()=>wrong++,()=>{
    const g2=$('#g2');
    g2.innerHTML='<h3 style="margin-top:20px">Bước 2 · Điều tra thực tế</h3><div id="cg"></div>';
    clueGame($('#cg'),{
      pre:'',
      page:`<div class="win"><div class="wtop"><span class="tl"><i></i><i></i><i></i></span><div class="wtab"><span>🐋</span><span class="tt">Thế giới cá voi – www.dongvathoangda.org</span></div></div>
        <div class="wtool"><span class="nv">←</span><span class="nv">→</span><div class="waddr">🔒 www.dongvathoangda.org/ca-voi-xanh</div></div>
        <div class="sh"><b>🐋 Động vật hoang dã</b><span class="tapz" data-k="home">Trang chủ</span><span class="tapz" data-k="about">Giới thiệu</span><span class="tapz" data-k="support">Hỗ trợ khách hàng</span><span class="tapz" data-k="contact">Liên hệ: 0123 456 789</span></div>
        <div class="art"><h4>Cá voi xanh – loài lớn nhất hành tinh</h4><div class="picpost"><div class="pic">🐋</div><div class="pc"><span class="tapz" data-k="cap">Chú thích: Cá voi xanh bơi giữa đại dương</span><br><span class="tapz" data-k="artist">Tranh do họa sĩ Minh Thư vẽ và đăng tải</span><br><span class="tapz" data-k="se">Ảnh hiển thị trên trang www.dongvathoangda.org</span></div></div></div></div>
        <div class="mail"><div class="mh">✉️ <span class="tapz" data-k="from"><b>Từ: Lan Anh &lt;lananh@example.com&gt;</b></span><br><span class="tapz" data-k="to">Đến: Cô giáo &lt;co@example.com&gt;</span></div><div class="mb">Cô ơi, em gửi cô bài về cá voi ạ.</div></div>`,
      clues:[
        {q:'Em muốn biết <b>tác giả của trang Web</b>. Hãy chạm vào mục trên thanh trên cùng.',key:'about',why:'Tác giả của một trang Web thường được tìm thấy ở trang giới thiệu.',miss:'Chưa đúng. Mục nào giới thiệu về người làm ra trang Web?'},
        {q:'Ai là <b>chủ sở hữu của bức tranh</b> cá voi? Chạm vào dòng nói về người tạo ra nó.',key:'artist',why:'Người tạo ra và tải lên hình ảnh mới là chủ sở hữu, không phải trang Web hay chú thích.',miss:'Chú thích và trang Web chỉ hiển thị hình ảnh. Ai là người đã vẽ nó?'},
        {q:'Ai là <b>chủ sở hữu của email</b> này? Chạm vào dòng cho biết người đó.',key:'from',why:'Chủ sở hữu email là người gửi.',miss:'Người nhận không phải chủ sở hữu. Hãy tìm người gửi.'}
      ]
    },()=>wrong++,f=>{ fb(f,'ok','🏅 Hoàn thành! Em đã biết cách tìm chủ sở hữu của thông tin.'); finish(st,starsFor(wrong),g2); });
  });
}

/* ---------- Nhiệm vụ 2: lập trích dẫn ---------- */
function m2(st){
  let wrong=0;
  st.innerHTML=brief('🧾','Nhiệm vụ 2: Lập trích dẫn','Chọn khi nào cần trích dẫn, rồi ghép một trích dẫn cho cuốn sách.')+'<h3>Bước 1 · Cần trích dẫn hay không?</h3><p class="hint">Chạm vào thẻ, rồi chạm vào ô. Hoặc kéo thả.</p><div id="g1"></div><div id="g2"></div>';
  sortGame($('#g1'),{
    bins:[['✅ Cần trích dẫn','Dùng thông tin / tác phẩm của người khác'],['❌ Không cần trích dẫn','Tự làm, hoặc kiến thức ai cũng biết']],
    items:[['Chép một đoạn văn từ cuốn sách yêu thích',0],['Lấy số liệu từ một trang Web',0],['Dùng hình ảnh của một họa sĩ không nổi tiếng',0],['Nói “Trái Đất quay quanh Mặt Trời”',1],['Viết chữ “Chúc mừng sinh nhật”',1],['Vẽ một bức tranh do chính em sáng tạo',1]],
    why:'Sản phẩm của người khác thì phải ghi nguồn. Kiến thức phổ biến hoặc do em tự làm thì không cần.'
  },()=>wrong++,()=>{
    const g2=$('#g2');
    g2.innerHTML='<h3 style="margin-top:20px">Bước 2 · Ghép trích dẫn từ trang tên sách</h3><div class="cite-line" id="cl"><em>Trích dẫn của em sẽ hiện ở đây…</em></div><div id="cg"></div>';
    const parts=[];
    clueGame($('#cg'),{
      page:`<div class="bk">
        <div class="bk-cover"><div class="au tapz" data-k="au">Orson, D</div><div><div class="orn">📘</div><div class="ti tapz" data-k="ti">Sách mẫu</div></div><div class="pb tapz" data-k="pub">Nhà xuất bản Companypro</div></div>
        <div class="bk-page"><h5>Trang thông tin sách</h5><div class="tapz" data-k="ed">Tái bản lần thứ 2</div><div class="tapz" data-k="yr">Năm xuất bản: 2010</div><div class="tapz" data-k="isbn">ISBN 978-0-00-000000-0</div><div class="tapz" data-k="pg">240 trang · Giá 99.000đ</div><div class="ft">© Companypro</div></div></div>`,
      clues:[
        {q:'Chạm vào <b>tên tác giả</b>.',key:'au',add:'Orson, D',why:'Trích dẫn thường bắt đầu bằng tên tác giả.'},
        {q:'Chạm vào <b>năm xuất bản</b>.',key:'yr',add:'2010',why:'Năm xuất bản cho biết sách ra đời khi nào.'},
        {q:'Chạm vào <b>tiêu đề</b> của sách.',key:'ti',add:'Sách mẫu',why:'Tiêu đề là tên sách.'},
        {q:'Chạm vào <b>phiên bản</b> của sách.',key:'ed',add:'(Tái bản lần thứ 2)',why:'Phiên bản cho biết đây là lần tái bản thứ mấy.'},
        {q:'Chạm vào <b>nhà xuất bản</b>.',key:'pub',add:'Companypro',why:'Nhà xuất bản là nơi phát hành sách.'}
      ],
      onHit:(c)=>{ parts.push(c.add); const cl=$('#cl'); const s=parts.map((p,i)=>'<span class="p">'+p+'</span>');
        cl.innerHTML=s[0]+(s[1]?': '+s[1]+'.':'')+(s[2]?' '+s[2]+'.':'')+(s[3]?' '+s[3]+'.':'')+(s[4]?' '+s[4]+'.':''); }
    },()=>wrong++,f=>{ fb(f,'ok','🏅 Em đã ghép xong trích dẫn: <b>Orson, D: 2010. Sách mẫu. (Tái bản lần thứ 2). Companypro.</b> Số trang, giá tiền, ISBN không cần cho trích dẫn này.'); finish(st,starsFor(wrong),g2); });
  });
}

/* ---------- Nhiệm vụ 3: bắt đạo văn & dùng AI ---------- */
function m3(st){
  const sents=[
    {t:'Trái Đất quay quanh Mặt Trời.',n:'Kiến thức phổ biến ai cũng biết.',bad:false},
    {t:'“Có hai con mèo ngồi bên cửa sổ.”',n:'Nam chép nguyên câu này từ sách của Nguyễn Nhật Ánh và không ghi tên tác giả.',bad:true},
    {t:'Số lượng cá voi xanh còn rất ít.',n:'Nam ghi thêm: “Số liệu này từ cơ quan bảo tồn môi trường.”',bad:false},
    {t:'Hình minh họa siêu anh hùng ở trang bìa.',n:'Nam lấy từ Internet và để như tranh do mình vẽ, không ghi tên tác giả.',bad:true},
    {t:'Đoạn giới thiệu bản thân của em.',n:'Nam tự viết bằng lời của mình.',bad:false},
  ];
  const scn=[
    {t:'Nam hỏi AI gợi ý dàn ý, rồi tự viết lại bằng lời của mình và ghi chú “có AI hỗ trợ”.',ok:true,why:'Tự chỉnh sửa và minh bạch là cách dùng AI đúng.'},
    {t:'Nam sao chép nguyên văn câu trả lời của AI rồi nộp như bài do mình viết.',ok:false,why:'Không được nhận kết quả AI là hoàn toàn của mình.'},
    {t:'Nam tin ngay kết quả AI, không kiểm tra và không có nguồn.',ok:false,why:'Kết quả AI có thể sai hoặc thiếu nguồn, cần kiểm tra lại.'},
    {t:'Nam chưa rõ cách ghi nguồn nên hỏi giáo viên.',ok:true,why:'Chưa rõ thì hỏi giáo viên là đúng.'},
  ];
  let wrong=0, phase=1;
  st.innerHTML=brief('🚨','Nhiệm vụ 3: Bắt đạo văn','Tìm các câu là đạo văn trong bài làm của bạn Nam.')+
  `<div class="howsel"><div class="hand">👆</div><div><b>Hướng dẫn:</b> Đọc từng câu và ghi chú màu tím. <b>Chạm vào cả câu</b> em cho là đạo văn, câu đó sẽ đổi sang nền vàng. Chọn nhầm thì chạm lần nữa.</div><div class="cnt" id="cnt">Đã chọn: 0 câu</div></div>
   <div class="essay" id="es"></div><div class="row" style="margin-top:12px"><button class="btn" id="chk">Kiểm tra</button></div><div class="fb" id="fb"></div><div id="more"></div>`;
  const f=$('#fb'), marked=new Set();
  sents.forEach((s,i)=>{ const d=el(`<div class="sent">${s.t}<small>📝 ${s.n}</small></div>`);
    d.onclick=()=>{ if(phase!==1) return; marked.has(i)?marked.delete(i):marked.add(i); d.classList.toggle('flag'); $('#cnt').textContent='Đã chọn: '+marked.size+' câu'; };
    s._s=d; $('#es').appendChild(d); });
  $('#chk').onclick=()=>{
    if(phase!==1) return;
    const bad=sents.filter((s,i)=>s.bad!==marked.has(i)).length;
    if(bad){ wrong++; return fb(f,'no','Chưa đúng hẳn. Gợi ý: đạo văn là lấy của người khác mà <b>không ghi nguồn</b> hoặc giả vờ là của mình. Kiến thức phổ biến và nội dung có ghi nguồn thì không phải đạo văn.'); }
    phase=2; $('#chk').disabled=true;
    sents.forEach(s=>{ s._s.classList.remove('flag'); s._s.classList.add(s.bad?'right':'ok'); });
    fb(f,'ok','Tuyệt! Hai câu đỏ là đạo văn vì dùng sản phẩm của người khác mà không ghi nguồn. Còn lại là đúng cách.');
    f.insertAdjacentHTML('beforeend','<div style="margin-top:10px"><button class="btn orange" id="toai">Sang phần dùng AI ▼</button></div>');
    $('#toai').onclick=()=>{ $('#toai').disabled=true; ai(); };
  };
  function ai(){
    const m=$('#more');
    m.innerHTML='<h3 style="margin-top:18px">Nam dùng AI để làm bài</h3><p class="tip">Với mỗi tình huống, chọn: <b>Đúng cách</b> hay <b>Chưa đúng</b>.</p><div id="sc"></div>';
    let done=0;
    scn.forEach(s=>{
      const d=el(`<div class="scn">${s.t}<div class="row"><button class="chip" data-a="1">👍 Đúng cách</button><button class="chip" data-a="0">👎 Chưa đúng</button></div></div>`);
      d.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{
        if(d.dataset.fin) return;
        if((b.dataset.a==='1')===s.ok){ d.dataset.fin=1; d.classList.add('right'); b.classList.add('good'); d.insertAdjacentHTML('beforeend',`<div style="margin-top:6px;font-size:1rem">✔ ${s.why}</div>`);
          if(++done===scn.length){ fb(f,'ok','🏅 Hoàn thành! Em đã biết cách tránh đạo văn và dùng AI minh bạch.'); finish(st,starsFor(wrong),m); }
        } else { wrong++; b.classList.add('bad'); setTimeout(()=>b.classList.remove('bad'),600); fb(f,'no','Chưa đúng, hãy nghĩ xem Nam có kiểm tra, ghi chú và tự chỉnh sửa không.'); }
      });
      $('#sc').appendChild(d);
    });
    m.scrollIntoView({behavior:'smooth',block:'start'});
  }
}

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
    <div class="big">🕵️‍♀️</div>
    <h2 style="font-size:2rem;color:var(--teal-d)">Bài 21: Trích dẫn nguồn thông tin</h2>
    <p>Dùng ảnh, câu văn hay số liệu của người khác mà không ghi nguồn là <b>đạo văn</b>.</p>
    <div class="recap"><div><b>Em sẽ học</b><br>Chủ sở hữu · trích dẫn · tài liệu tham khảo · chú thích · đạo văn · ghi nguồn AI</div><div><b>Em sẽ luyện</b><br>Tìm chủ sở hữu · lập trích dẫn · bắt đạo văn · dùng AI đúng cách</div><div><b>Cách chơi</b><br>Học bài → 3 nhiệm vụ → Trắc nghiệm.</div></div>
    <p class="tip" style="text-align:left">Em sẽ học qua <b>thẻ flashcard</b>, làm <b>3 nhiệm vụ</b>, rồi làm <b>trắc nghiệm</b>. Mỗi nhiệm vụ cho tối đa 3 ⭐. Em trả lời càng ít lần sai thì càng được nhiều sao. Bên trái màn hình luôn có khung <b>“Cách làm bài”</b>. Tiến độ được lưu lại trên máy của em.</p>
    <button class="btn" id="go">Bắt đầu ▶</button>
  </div>`;
  $('#go').onclick=()=>{state.intro=false;render()};
}
function finale(st){
  const total=state.got.reduce((a,b)=>a+(b||0),0);
  const rank = total>=10?'Thám tử xuất sắc':total>=7?'Thám tử giỏi':'Thám tử tập sự';
  st.innerHTML=`<div class="final"><div class="big">🏅</div><h2 style="font-size:2rem;color:var(--teal-d)">${rank}</h2>
  <p>Em đạt <b>${total} / 12 ⭐</b></p>
  <div class="recap"><div><b>Chủ sở hữu</b><br>Email → người gửi · Blog → tác giả · Tranh số → họa sĩ.</div><div><b>Trích dẫn</b><br>Ghi tác giả, tiêu đề, nhà xuất bản, năm, phiên bản. Kiến thức phổ biến thì không cần.</div><div><b>Tài liệu tham khảo</b><br>Danh sách nguồn đã dùng. Footnote ở cuối trang, Endnote ở cuối tài liệu.</div><div><b>Đạo văn & AI</b><br>Không chép rồi nhận là của mình. Với AI: kiểm tra, ghi chú, tự chỉnh sửa, hỏi giáo viên khi chưa rõ.</div></div>
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
    last=0; TEACH=!TEACH; try{ localStorage.setItem('k5b21_teach',TEACH?'1':'0'); }catch(x){}
    render();
    const t=el('<div style="position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#333;color:#fff;padding:10px 18px;border-radius:12px;z-index:9999;font-weight:700">'+(TEACH?'🔓 Đã mở khóa tất cả':'🔒 Đã khóa lại')+'</div>');
    document.body.appendChild(t); setTimeout(()=>t.remove(),1800);
  });
})();
render();
