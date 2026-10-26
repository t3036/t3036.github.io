/* Báo Tường Spark — ôn tập Chủ đề 4 (SparkLV3_QLesson_SangTaoNoiDung)
   3 trang báo = 3 bài: 21 Trích dẫn · 22 Tính năng tiện ích · 23 Trực quan hóa dữ liệu
   Tổng 1000 điểm, từ 900 là ĐẠT. Mỗi tin chỉ trả lời 1 lần (sai là xem đáp án). Cả game có 3 lượt gợi ý.
   Kiểu câu: single | multi | tf | match                                                   */

/* MODE "test" (kiem-tra.html): không chia trang, xáo trộn cả 19 câu, không có gợi ý. */
const TEST = window.MODE === "test";

const ICON = {
  pie:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><circle cx="24" cy="24" r="19" fill="#fff"/><path d="M24 24V5A19 19 0 0 1 41.4 31.6Z" fill="var(--accent)"/><path d="M24 24L41.4 31.6A19 19 0 0 1 12 38Z" fill="var(--hl)"/></svg>',
  line:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"><path d="M6 6V42H44"/><path d="M10 34L19 21L28 29L41 10" stroke="var(--accent)" stroke-width="3.5"/><circle cx="19" cy="21" r="2.5" fill="#fff"/><circle cx="28" cy="29" r="2.5" fill="#fff"/><circle cx="41" cy="10" r="2.5" fill="#fff"/></svg>',
  bar:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6V42H44"/><rect x="6" y="9" width="30" height="7" fill="var(--accent)"/><rect x="6" y="21" width="20" height="7" fill="var(--hl)"/><rect x="6" y="33" width="35" height="6" fill="var(--accent)"/></svg>',
  column:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6V42H44"/><rect x="11" y="22" width="7" height="20" fill="var(--accent)"/><rect x="22" y="10" width="7" height="32" fill="var(--hl)"/><rect x="33" y="28" width="7" height="14" fill="var(--accent)"/></svg>',
  scatter:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6V42H44"/><g fill="var(--accent)"><circle cx="13" cy="35" r="3"/><circle cx="19" cy="28" r="3"/><circle cx="25" cy="31" r="3"/><circle cx="30" cy="20" r="3"/><circle cx="38" cy="14" r="3"/></g></svg>',
  hist:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M4 42H44"/><rect x="7" y="32" width="7" height="10" fill="var(--accent)"/><rect x="14" y="19" width="7" height="23" fill="var(--hl)"/><rect x="21" y="8" width="7" height="34" fill="var(--accent)"/><rect x="28" y="22" width="7" height="20" fill="var(--hl)"/><rect x="35" y="34" width="7" height="8" fill="var(--accent)"/></svg>',
  table:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="6" y="8" width="36" height="32" fill="#fff"/><rect x="6" y="8" width="36" height="9" fill="var(--hl)"/><path d="M6 28.5H42M18 8V40M30 8V40"/></svg>'
};

const STAGES = [
{
  no:"Bài 21", name:"Trích dẫn nguồn thông tin", desk:"Bàn Kiểm chứng", icon:"🔎",
  lede:"Mọi tin đều phải có nguồn. Em hãy soi nguồn thật kĩ!",
  tips:[
    "<b>Trích dẫn</b> là nêu rõ nguồn. Giấu nguồn là <b>đạo văn</b>.",
    "Ảnh trên mạng thuộc về <b>người tạo và tải lên</b>.",
    "Trích dẫn sách: <b>tác giả, tiêu đề, nhà xuất bản</b>."
  ],
  toy:"cite",
  qs:[
  {h:"Ai tạo ra nội dung này?",t:"match",q:"Em đang cố xác định người tạo sản phẩm gốc của một số loại nội dung đa phương tiện trực tuyến khác nhau. Em hãy di chuyển chủ sở hữu từ danh sách ở bên phải sang loại đa phương tiện tương ứng ở bên trái.",
   pairs:[["Tác phẩm nghệ thuật số gốc","Họa sĩ minh họa"],["Bài đăng trên Blog","Tác giả"],["Email","Người gửi"]],
   why:"Người tạo ra sản phẩm gốc là <mark>chủ sở hữu</mark>:<br>• Tác phẩm nghệ thuật số gốc → <mark>Họa sĩ minh họa</mark> vẽ ra.<br>• Bài đăng trên Blog → <mark>Tác giả</mark> viết ra.<br>• Email → <mark>Người gửi</mark> soạn và gửi đi."},
  {h:"Bức ảnh này của ai?",t:"single",q:"Em hãy cho biết, ai có quyền sở hữu đối với hình ảnh mà em tìm thấy trên Internet?",
   o:["Người đã tạo và tải lên hình ảnh.","Người viết chú thích cho hình ảnh trực tuyến.","Công cụ tìm kiếm em đã sử dụng để tìm hình ảnh.","Trang Web nơi hình ảnh được hiển thị."],a:0,
   why:"Công cụ tìm kiếm và trang Web chỉ hiển thị ảnh; chủ sở hữu là <mark>người đã tạo và tải ảnh lên</mark>."},
  {h:"Tác giả trang Web ở đâu?",t:"single",q:"Em hãy cho biết, tùy chọn nào sau đây sẽ cho em biết tác giả của một trang Web?",
   o:["Số điện thoại ở mục liên hệ với chúng tôi","URL","Trang hỗ trợ khách hàng","Trang giới thiệu"],a:3,
   why:"<mark>Trang Giới thiệu (About)</mark> thường nói trang Web do ai tạo ra. URL chỉ là địa chỉ."},
  {h:"Cần ghi nguồn hay không?",t:"tf",q:"Em đang chuẩn bị một bài trình chiếu để trình bày trước lớp. Với mỗi phát biểu, em hãy chọn Có nếu cần trích dẫn nguồn hoặc Không nếu không cần.",
   lab:["Có","Không"],rows:[["Em dùng chữ Chúc mừng sinh nhật trong bài trình chiếu của mình.",false],["Em dùng hình ảnh về một siêu anh hùng do một tác giả nổi tiếng tạo ra.",true],["Em trích dẫn một đoạn về số lượng cá voi từ một bài nghiên cứu do National Geographic xuất bản.",true]],
   why:"• Chúc mừng sinh nhật → <mark>Không</mark>: lời chúc quen thuộc là của chung.<br>• Hình siêu anh hùng → <mark>Có</mark>: nhân vật do một tác giả tạo ra.<br>• Bài nghiên cứu của National Geographic → <mark>Có</mark>: là sản phẩm của người khác nên phải ghi nguồn."},
  {h:"Khi nào phải trích dẫn?",t:"single",q:"Em hãy cho biết, tình huống mà em nên dùng trích dẫn?",
   o:["Khi em đăng nội dung gốc của người khác trên mạng xã hội.","Khi em được phỏng vấn cho một bài báo.","Khi em tạo ra bản thiết kế trang phục mới cho trường học.","Khi em tạo ra một tác phẩm hội họa mới trên lớp."],a:0,
   why:"Ba tình huống còn lại là em tự tạo ra sản phẩm của mình. Chỉ khi dùng <mark>nội dung gốc của người khác</mark> mới cần trích dẫn."},
  {h:"Trích dẫn một cuốn sách",t:"single",q:"Em hãy cho biết, thông tin nào nên được đưa vào trích dẫn cho một cuốn sách?",
   o:["Tên sách và tên tác giả.","Tên của thư viện và ngày em đọc sách.","Bìa sách trông như thế nào và có bao nhiêu trang.","Tên của người đã giới thiệu cuốn sách cho em."],a:0,
   why:"Trích dẫn trả lời “của ai, tên gì”: <mark>tên sách và tên tác giả</mark> (cùng <mark>nhà xuất bản</mark>, năm)."},
  {h:"Đọc hiểu một trích dẫn",t:"multi",q:"Em hãy cho biết, thông tin nào có trong trích dẫn? (Chọn 3)",quote:"Em có các trích dẫn sau:<br>Orson, D: 2010. Sách mẫu. (Tái bản lần thứ 2). Companypro.",
   o:["Số trang (Number of Pages)","URL (Uniform Resource Locator)","Tập tin (File)","Tác giả (Author)","Tiêu đề (Title)","Nhà xuất bản (Publisher)"],a:[3,4,5],
   why:"Orson, D = <mark>tác giả</mark> · Sách mẫu = <mark>tiêu đề</mark> · Companypro = <mark>nhà xuất bản</mark>. Trích dẫn này không có số trang, URL hay tập tin."}
  ]
},
{
  no:"Bài 22", name:"Tính năng tiện ích", desk:"Phòng Tốc ký", icon:"⌨️",
  lede:"Báo sắp lên khuôn, hãy gõ thật nhanh!",
  tips:[
    "<b>Autocorrect</b> sửa lỗi khi gõ; <b>Autocomplete</b> gợi ý từ.",
    "<b>Ctrl + C / X / V / Z / S</b>: chép, cắt, dán, hoàn tác, lưu.",
    "Đổi ứng dụng: <b>Alt + Tab</b>. Máy Mac dùng <b>CMD</b>."
  ],
  toy:"keys",
  qs:[
  {h:"Máy tự sửa lỗi gõ",t:"single",q:"Em hãy cho biết, tính năng tự động sửa lỗi chính tả khi gõ là gì?",
   o:["Chú thích cuối trang (Footnote)","Tự động sửa (Autocorrect)","Tự động hoàn thành (Autocomplete)","Dữ liệu (Data)"],a:1,
   why:"<mark>Autocorrect = tự sửa lỗi lúc gõ</mark>. Autocomplete chỉ gợi ý để hoàn thành từ."},
  {h:"Định nghĩa đúng hay sai?",t:"tf",q:"Với mỗi câu phát biểu, em hãy chọn Đúng nếu định nghĩa đó là chính xác hoặc chọn Sai nếu không phải.",
   lab:["Đúng","Sai"],rows:[["Đạo văn (Plagiarism) là sao chép tác phẩm của người khác và giả vờ như đó là của em.",true],["Tự động hoàn thành (AutoComplete) là khi máy tính tự động gợi ý từ ngữ trong khi em gõ.",true],["Tự sửa (AutoCorrect) là khi máy tính tự động sửa đáp án của những bài toán cho em.",false]],
   why:"• Đạo văn → <mark>Đúng</mark>: sao chép tác phẩm của người khác và giả vờ là của mình.<br>• AutoComplete → <mark>Đúng</mark>: máy tính gợi ý từ ngữ trong khi em gõ.<br>• AutoCorrect → <mark>Sai</mark>: máy chỉ sửa lỗi chính tả khi gõ, không giải bài toán giúp em."},
  {h:"Dán bằng một tổ hợp phím",t:"single",q:"Em có thể sử dụng phím tắt nào để dán thông tin sau khi sao chép hoặc cắt?",
   o:["Ctrl + Z","Ctrl + V","Ctrl + X","Ctrl + C"],a:1,
   why:"<mark>Ctrl + V</mark> là Dán (Paste). Ctrl + C là sao chép, Ctrl + X là cắt: hai lệnh này lấy nội dung ra, còn Ctrl + V đặt nội dung vào."},
  {h:"Hoàn tác trong một nháy mắt",t:"single",q:"Em có thể sử dụng phím tắt nào để hoàn tác nội dung cuối cùng em đã nhập trong tài liệu?",
   o:["Ctrl + C","Ctrl + V","Ctrl + Z","Ctrl + X"],a:2,
   why:"<mark>Ctrl + Z</mark> là Hoàn tác (Undo), lệnh “cứu hộ” khi em lỡ tay."},
  {h:"Phím tắt và hành động",t:"match",q:"Em hãy di chuyển từng hành động từ danh sách ở bên phải sang phím tắt tương ứng ở bên trái.",
   pairs:[["Ctrl + C","Sao chép (Copy)"],["Ctrl + X","Cắt (Cut)"],["Ctrl + S","Lưu (Save)"],["Ctrl + V","Dán (Paste)"],["Ctrl + Z","Hoàn tác (Undo)"]],
   why:"• <mark>Ctrl + C</mark> → Sao chép (Copy).<br>• <mark>Ctrl + X</mark> → Cắt (Cut), hình chiếc kéo.<br>• <mark>Ctrl + S</mark> → Lưu (Save).<br>• <mark>Ctrl + V</mark> → Dán (Paste).<br>• <mark>Ctrl + Z</mark> → Hoàn tác (Undo)."},
  {h:"Dùng phím nào lúc nào?",t:"match",q:"Em hãy di chuyển từng phím tắt từ danh sách ở bên phải sang trường hợp sử dụng tương ứng ở bên trái.",
   pairs:[["Sao chép văn bản hoặc tập tin","Ctrl + C hoặc CMD + C"],["Dán văn bản hoặc tập tin","Ctrl + V hoặc CMD + V"],["Chuyển lần lượt sang các ứng dụng đang mở khác","Alt + Tab hoặc CMD + Tab"]],
   why:"• Sao chép → <mark>Ctrl + C</mark> hoặc CMD + C.<br>• Dán → <mark>Ctrl + V</mark> hoặc CMD + V.<br>• Chuyển ứng dụng đang mở → <mark>Alt + Tab</mark> hoặc CMD + Tab.<br>Windows dùng Ctrl/Alt, máy Mac dùng CMD."}
  ]
},
{
  no:"Bài 23", name:"Trực quan hóa dữ liệu", desk:"Phòng Dữ liệu", icon:"📊",
  lede:"Trang cuối là chuyên mục số liệu. Chọn đúng bảng hay biểu đồ nhé!",
  tips:[
    "<b>Bảng tính</b> (như Google Sheets) thu thập dữ liệu; <b>bảng</b> xếp theo hàng và cột.",
    "<b>Biểu đồ</b> dùng đường, thanh, biểu tượng để trình bày trực quan.",
    "<b>Biểu đồ tròn</b> cho thấy phần trăm trên tổng."
  ],
  toy:"charts",
  qs:[
  {h:"Bảng tính, biểu đồ, bảng",t:"match",q:"Em hãy di chuyển mỗi loại dữ liệu từ danh sách ở bên phải sang mô tả tương ứng ở bên trái.",
   pairs:[["Một chương trình máy tính được dùng để thu thập dữ liệu.","Bảng tính (Spreadsheet)"],["Một dạng dữ liệu bao gồm đường, thanh, và biểu tượng để chia sẻ thông tin một cách trực quan.","Biểu đồ (Chart)"],["Một dạng dữ liệu bao gồm các hàng và cột theo thứ tự nhất định.","Bảng (Table)"]],
   why:"• Chương trình thu thập dữ liệu → <mark>Bảng tính (Spreadsheet)</mark>.<br>• Đường, thanh, biểu tượng để chia sẻ thông tin trực quan → <mark>Biểu đồ (Chart)</mark>.<br>• Các hàng và cột theo thứ tự → <mark>Bảng (Table)</mark>."},
  {h:"Ai ghi nhiều điểm nhất?",t:"single",q:"Em đang tạo một biểu đồ thể hiện tỷ lệ phần trăm số điểm mỗi người chơi ghi được so với tổng số điểm đã ghi được trong mùa. Em nên sử dụng loại biểu đồ nào cho dạng so sánh này?",
   o:["Biểu đồ đường (Line Chart)","Biểu đồ tròn (Pie Chart)","Biểu đồ thanh (Bar Chart)","Biểu đồ cột (Column Chart)"],ic:["line","pie","bar","column"],a:1,
   why:"Mỗi người chơi là một “lát bánh” trong tổng số điểm của cả mùa, đúng sở trường của <mark>biểu đồ tròn</mark>."},
  {h:"So sánh các nhóm dữ liệu",t:"single",q:"Em hãy cho biết, loại trực quan hóa dữ liệu nào là tốt nhất để so sánh các danh mục hoặc nhóm dữ liệu khác nhau?",
   o:["Biểu đồ phân tán (Scatter Plot)","Biểu đồ Histogram","Biểu đồ đường (Line Graphs)","Bảng (Table)"],ic:["scatter","hist","line","table"],a:1,
   why:"Histogram <mark>chia dữ liệu thành các nhóm</mark> và so sánh độ cao của từng nhóm. Biểu đồ đường thiên về thay đổi theo thời gian."},
  {h:"Nơi lập bảng tính",t:"single",q:"Em sẽ sử dụng ứng dụng nào để tạo và quản lí bảng tính (Spreadsheet)?",
   o:["Microsoft PowerPoint","Google Sheets","Adobe Illustrator","Apple Pages"],a:1,
   why:"<mark>Google Sheets là ứng dụng bảng tính</mark>. PowerPoint là trình chiếu, Illustrator là đồ họa, Pages là soạn thảo văn bản."},
  {h:"Hàng, cột và biểu đồ",t:"single",q:"Ứng dụng nào cho phép hiển thị dữ liệu theo hàng, cột và tạo biểu đồ từ các giá trị?",
   o:["Adobe Photoshop","Microsoft Teams","Google Sheets","Apple TextEdit"],a:2,
   why:"<mark>Chỉ Google Sheets</mark> (bảng tính) xếp dữ liệu theo hàng, cột và vẽ biểu đồ từ các ô giá trị."},
  {h:"Gọi đúng tên thuật ngữ",t:"match",q:"Em hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang mô tả tương ứng ở bên trái.",
   pairs:[["Thông tin được sắp xếp và trình bày theo hàng và cột.","Bảng (Table)"],["Sử dụng một nguồn và không chia sẻ nguồn này đến từ đâu.","Đạo văn (Plagiarism)"],["Nêu rõ nguồn lấy thông tin.","Trích dẫn (Citation)"],["Một sơ đồ thể hiện các dữ liệu dạng số một cách có tổ chức.","Đồ thị (Graph)"]],
   why:"• Hàng và cột → <mark>Bảng (Table)</mark>.<br>• Dùng nguồn mà không nói nguồn từ đâu → <mark>Đạo văn (Plagiarism)</mark>.<br>• Nêu rõ nguồn lấy thông tin → <mark>Trích dẫn (Citation)</mark>.<br>• Sơ đồ thể hiện dữ liệu dạng số có tổ chức → <mark>Đồ thị (Graph)</mark>."}
  ]
}
];

/* ---------------- tiện ích ---------------- */
const $ = s => document.querySelector(s);
const same = (a, b) => a.every((x, i) => x === b[i]);
const shuffleDiff = (a, ...avoid) => { let r, n = 0; do { r = shuffle(a); n++; } while (a.length > 1 && n < 20 && avoid.some(v => same(r, v))); return r; };
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const LET = "ABCDEF";
function keycaps(t) {
  if (!/^(Ctrl|Alt|CMD)/.test(t)) return t;
  return t.split(/\s+(hoặc)\s+/).map(p => p === "hoặc" ? '<span class="or">hoặc</span>'
    : p.split(" + ").map(k => `<kbd>${k}</kbd>`).join('<b class="pl">+</b>')).join(" ");
}
const HINTS = [
 ["Người tạo ra sản phẩm gốc chính là chủ sở hữu: họa sĩ với tranh, tác giả với bài viết, còn email thì do ai gửi?",
  "Công cụ tìm kiếm và trang Web chỉ hiển thị ảnh, không phải nơi tạo ra ảnh.",
  "Trang nào của một Website thường kể về người hoặc nhóm đã tạo ra trang đó?",
  "Lời chúc quen thuộc là của chung. Nhân vật, bài nghiên cứu do người khác tạo thì sao?",
  "Ba tình huống kia em tự tạo ra sản phẩm. Trích dẫn chỉ cần khi dùng sản phẩm của ai?",
  "Trích dẫn trả lời câu hỏi “của ai, tên gì?”. Thư viện hay bìa sách không nằm trong đó.",
  "Nhìn vào chuỗi: tên người viết, tên sách, và tên công ty phát hành. Không có số trang hay đường dẫn."],
 ["“Auto” là tự động, còn “Correct” nghĩa là gì?",
  "Hãy đọc kĩ dòng cuối: máy tính có giải bài toán giúp em không?",
  "Chữ V nằm bên cạnh chữ C trên bàn phím. Một phím chép, một phím dán.",
  "Z là chữ cái cuối cùng. Phím này giúp “quay lại” một bước.",
  "X giống chiếc kéo, S là Save, C là Copy. Còn lại V và Z.",
  "Windows dùng Ctrl/Alt, máy Mac dùng CMD. Tab giúp nhảy qua lại giữa các cửa sổ."],
 ["Phần mềm, hình vẽ và hàng cột: mỗi mô tả ứng với đúng một thuật ngữ.",
  "“Tỷ lệ phần trăm trên tổng” giống chia một chiếc bánh thành các lát.",
  "Loại biểu đồ này chia dữ liệu thành các nhóm liền kề, đặt cạnh nhau để so sánh.",
  "Tên ứng dụng có chữ Sheet (tờ giấy kẻ ô).",
  "Hàng, cột và vẽ biểu đồ thì cần ứng dụng giống Google Sheets, không phải ứng dụng ảnh hay họp.",
  "Hai thuật ngữ đối lập nhau: một giấu nguồn, một nêu rõ nguồn."]
];
STAGES.forEach((S, i) => S.qs.forEach((q, j) => { q.hint = HINTS[i][j]; q.id = j; q.lesson = S.no; }));
const LESSONS = STAGES.map(S => ({ no: S.no, name: S.name, desk: S.desk, icon: S.icon }));
if (TEST) {
  const all = STAGES.flatMap(S => S.qs);
  STAGES.splice(0, STAGES.length, { no: "Kiểm tra", name: "Kiểm tra Chủ đề 4", desk: "Bài kiểm tra", icon: "📝", qs: all });
  all.forEach((q, i) => q.id = i);
}
const ORIG = STAGES.map(S => S.qs.slice());
const TOTAL_Q = STAGES.reduce((n, s) => n + s.qs.length, 0);
const SCORE = 1000, PASS = 900, HINT_MAX = TEST ? 0 : 3;
/* Điểm mỗi câu (tổng đúng 1000): 12 câu 53 điểm + 7 câu 52 điểm. Đúng một phần được điểm một phần, nhưng luôn nhỏ hơn điểm tối đa. */
{ let k = 0; STAGES.forEach(S => S.qs.forEach(q => { q.w = Math.floor(SCORE / TOTAL_Q) + (k++ < SCORE % TOTAL_Q ? 1 : 0); })); }
const pointsOf = (q, f) => f >= 1 ? q.w : Math.min(q.w - 1, Math.round(f * q.w));
const KEY = TEST ? "sparkOnTap4TestBest" : "sparkOnTap4Best2";
const blank = () => STAGES.map(s => s.qs.map(() => null));
const app = { s: 0, qi: 0, hints: HINT_MAX, pts: blank(), sc: blank() };
const add = a => a.reduce((x, y) => x + (y || 0), 0);
const total = () => add(app.sc.flat());
const stageScore = s => add(app.sc[s]);
const stageMax = s => add(STAGES[s].qs.map(q => q.w));
const fullN = s => app.pts[s].filter(p => p === 1).length;
const starsOf = r => r === 1 ? 3 : r >= .66 ? 2 : r > 0 ? 1 : 0;
const stageDone = s => app.pts[s].every(p => p !== null);

function plates() {
  if (TEST) {
    const n = STAGES[0].qs.length, d = app.pts[0].filter(p => p !== null).length;
    $("#plates").className = "plates one";
    $("#plates").innerHTML = `<div class="plate now"><b>Đã làm ${d}/${n} câu</b><div class="dots">${app.pts[0].map((p, k) => `<i class="${p === null ? (k === app.qi ? "cur" : "") : p === 1 ? "ok" : p > 0 ? "mid" : "bad"}">${p === null ? "" : p === 1 ? "✔" : p > 0 ? "◐" : "✘"}</i>`).join("")}</div></div>`;
  } else $("#plates").innerHTML = STAGES.map((s, i) => {
    const d = stageDone(i), now = i === app.s && !d;
    return `<div class="plate ${d ? "done" : now ? "now" : ""}"><small>Trang ${i + 1} · ${s.no}</small><b>${s.desk}</b><span class="st">${d ? "✔" : ""}</span></div>`;
  }).join("");
  $("#scoreline").textContent = TEST ? "" : total() + " / " + SCORE + " điểm" + (HINT_MAX ? " · 💡 " + app.hints : "");
  document.body.dataset.stage = app.s;
}
function mount(html) { const el = $("#stage"); el.innerHTML = html; plates(); window.scrollTo({ top: 0, behavior: "smooth" }); return el; }

/* ---------------- màn hình ---------------- */
/* ---- lưu tiến độ: câu đã trả lời được đánh dấu (pts !== null), tải lại trang không làm lại được ---- */
const SAVE = TEST ? "sparkOnTap4TestState" : "sparkOnTap4State";
function save() {
  try { localStorage.setItem(SAVE, JSON.stringify({ order: STAGES.map(S => S.qs.map(q => q.id)), pts: app.pts, sc: app.sc, hints: app.hints, hint: app.hint || null, at: app.at || null, snap: app.snap || null })); } catch (e) {}
}
function clearSave() { try { localStorage.removeItem(SAVE); } catch (e) {} }
function load() {
  try {
    const d = JSON.parse(localStorage.getItem(SAVE));
    if (!d || !Array.isArray(d.order) || d.order.length !== STAGES.length) return false;
    const ok = STAGES.every((S, i) => d.order[i].length === S.qs.length && [...d.order[i]].sort().join() === S.qs.map((_, k) => k).join()
      && d.pts[i].length === S.qs.length && d.sc[i].length === S.qs.length);
    if (!ok) return false;
    STAGES.forEach((S, i) => S.qs = d.order[i].map(id => ORIG[i][id]));
    app.pts = d.pts; app.sc = d.sc; app.hints = d.hints; app.hint = d.hint; app.at = d.at; app.snap = d.snap;
    return true;
  } catch (e) { return false; }
}
const startStage = st => { if (TEST) { app.s = st; app.qi = 0; question(); } else stageIntro(st); };

function resume() {
  const at = app.at;
  if (at && app.snap && app.pts[at.s] && app.pts[at.s][at.qi] !== null && at.qi < STAGES[at.s].qs.length) {
    app.s = at.s; app.qi = at.qi; return question(true);
  }
  for (let st = 0; st < STAGES.length; st++) {
    const qi = app.pts[st].indexOf(null);
    if (qi < 0) continue;
    if (qi === 0) return startStage(st);
    app.s = st; app.qi = qi; return question();
  }
  final();
}

function welcome() {
  clearSave(); app.hint = null;
  STAGES.forEach(S => S.qs = shuffle(S.qs));
  app.s = 0; app.qi = 0; app.hints = HINT_MAX; app.pts = blank(); app.sc = blank();
  let best = ""; try { const b = localStorage.getItem(KEY); if (b) best = `<p class="kicker">Kỷ lục của em: ${b}/${SCORE} điểm</p>`; } catch (e) {}
  mount(`<section class="sheet">
        <h2>${TEST ? "Bài <i>kiểm tra</i> Chủ đề 4" : "Em là người <i>lên khuôn</i> số báo!"}</h2>
    <p class="lede">${TEST ? `${TOTAL_Q} câu hỏi từ Bài 21, 22 và 23, xáo trộn ngẫu nhiên.` : "3 trang báo, 3 bài học. Mỗi câu hỏi là một <b>tin</b> cần em duyệt."}</p>
    <div class="cols">
      <p><b>Cách chấm.</b> <b>1000 điểm</b>, đạt từ <b>900</b>. Mỗi câu chỉ trả lời <b>một lần</b>. Đúng một phần vẫn được điểm một phần.</p>
      ${TEST ? "<p><b>Không có gợi ý.</b> Em hãy tự làm bài nhé!</p>" : "<p><b>Gợi ý.</b> Cả game có <b>3 lượt 💡</b>, hãy dùng khôn ngoan.</p>"}
      ${TEST ? "<p><b>Tiếp tục.</b> Nếu tải lại trang, em sẽ quay về đúng câu đang làm.</p>" : "<p><b>Mở khóa.</b> Xong trang này mới sang trang sau.</p>"}
    </div>
    ${best}
    <button class="btn" id="go">${TEST ? "Bắt đầu làm bài →" : "Nhận ca trực →"}</button>
  </section>`);
  $("#go").onclick = () => { save(); startStage(0); };
}

function stageIntro(s) {
  app.s = s; app.qi = 0;
  const S = STAGES[s];
  const toyTitle = { cite: "Soi từng mảnh của một trích dẫn", keys: "Bàn phím thử nghiệm", charts: "Triển lãm biểu đồ" }[S.toy];
  const el = mount(`<section class="sheet">
        <h2>Trang ${s + 1}: <i>${S.name}</i></h2>
    <p class="lede">${S.lede}</p>
    <div class="toy"><h3>${toyTitle}</h3><div id="toy"></div><p class="cap" id="cap"></p></div>
    <div class="cols">${S.tips.map(t => `<p>${t}</p>`).join("")}</div>
    <button class="btn" id="go">Bắt đầu duyệt ${S.qs.length} tin →</button>
  </section>`);
  TOYS[S.toy]();
  $("#go").onclick = () => { stopKeys(); question(); };
}

/* ---------------- 3 góc thực hành ---------------- */
let keyHandler = null;
const stopKeys = () => { if (keyHandler) { document.removeEventListener("keydown", keyHandler); keyHandler = null; } };
const TOYS = {
  cite() {
    const parts = [["Orson, D","Tác giả (Author): người viết ra cuốn sách."],[": 2010. ","Năm xuất bản: cuốn sách ra đời năm nào."],["Sách mẫu","Tiêu đề (Title): tên của cuốn sách."],[". (Tái bản lần thứ 2). ","Lần tái bản: đây là bản in lần thứ hai."],["Companypro","Nhà xuất bản (Publisher): đơn vị phát hành cuốn sách."]];
    $("#toy").innerHTML = `<div class="cite">${parts.map((p, i) => i % 2 === 1 ? `<span>${p[0]}</span>` : `<button data-i="${i}">${p[0]}</button>`).join("")}</div>`;
    $("#cap").textContent = "Chạm vào từng phần được gạch vàng để biết nó là thông tin gì.";
    $("#toy").onclick = e => {
      const b = e.target.closest("button"); if (!b) return;
      document.querySelectorAll(".cite button").forEach(x => x.classList.remove("on")); b.classList.add("on");
      $("#cap").textContent = parts[b.dataset.i][1];
    };
  },
  keys() {
    const MAP = { "Ctrl+C":"Sao chép (Copy)","Ctrl+X":"Cắt (Cut)","Ctrl+V":"Dán (Paste)","Ctrl+Z":"Hoàn tác (Undo)","Ctrl+S":"Lưu (Save)","Alt+Tab":"Chuyển sang ứng dụng đang mở khác" };
    let mod = null, key = null;
    const caps = (arr, g) => arr.map(k => `<button class="kc" data-g="${g}" data-k="${k}">${k}</button>`).join("");
    $("#toy").innerHTML = `<div class="keys">${caps(["Ctrl","Alt"], "m")}<span class="sep"></span>${caps(["C","X","V","Z","S","Tab"], "k")}</div>`;
    const show = () => {
      document.querySelectorAll(".kc").forEach(b => b.classList.toggle("on", b.dataset.k === mod || b.dataset.k === key));
      $("#cap").innerHTML = !mod && !key ? "Bấm một phím điều khiển (Ctrl, Alt) rồi một phím chữ. Em cũng có thể gõ trên bàn phím thật: Ctrl + C, Ctrl + V, Ctrl + Z…"
        : !mod || !key ? "Chọn thêm một phím nữa để tạo tổ hợp." : MAP[mod + "+" + key] ? `<kbd>${mod}</kbd><b class="pl">+</b><kbd>${key}</kbd> → <b>${MAP[mod + "+" + key]}</b>` : "Tổ hợp này không nằm trong bài học, hãy thử cái khác.";
    };
    $("#toy").onclick = e => {
      const b = e.target.closest(".kc"); if (!b) return;
      if (b.dataset.g === "m") mod = mod === b.dataset.k ? null : b.dataset.k; else key = key === b.dataset.k ? null : b.dataset.k;
      show();
    };
    keyHandler = e => {
      if (!(e.ctrlKey || e.metaKey) || e.key.length !== 1) return;
      const k = e.key.toUpperCase(); if (!"CXVZS".includes(k)) return;
      if (k === "S") e.preventDefault();
      mod = "Ctrl"; key = k; show();
    };
    document.addEventListener("keydown", keyHandler);
    show();
  },
  charts() {
    const L = [["pie","Tròn","Biểu đồ tròn: cho thấy mỗi phần chiếm bao nhiêu phần trăm trên tổng."],["line","Đường","Biểu đồ đường: theo dõi dữ liệu thay đổi qua thời gian."],["column","Cột","Biểu đồ cột: so sánh các hạng mục với nhau bằng các cột dọc."],["bar","Thanh","Biểu đồ thanh: giống biểu đồ cột nhưng các thanh nằm ngang."],["scatter","Phân tán","Biểu đồ phân tán: xem hai loại số liệu có liên quan với nhau không."],["hist","Histogram","Histogram: chia dữ liệu thành các nhóm và so sánh số lượng ở từng nhóm."],["table","Bảng","Bảng: xếp dữ liệu theo hàng và cột để tra cứu chính xác."]];
    $("#toy").innerHTML = `<div class="gal">${L.map((x, i) => `<button data-i="${i}">${ICON[x[0]]}${x[1]}</button>`).join("")}</div>`;
    $("#cap").textContent = "Chạm vào một biểu đồ để xem nó dùng khi nào.";
    $("#toy").onclick = e => {
      const b = e.target.closest("button"); if (!b) return;
      document.querySelectorAll(".gal button").forEach(x => x.classList.remove("on")); b.classList.add("on");
      $("#cap").textContent = L[b.dataset.i][2];
    };
  }
};

/* ---------------- câu hỏi ---------------- */
let Q = null; // trạng thái câu hiện tại
const SNAP = ["ord", "bad", "pick", "sel", "ans", "state", "rows", "chips", "slot", "st"];
const snapQ = () => { const o = {}; SNAP.forEach(k => { if (Q[k] !== undefined) o[k] = Q[k] instanceof Set ? { set: [...Q[k]] } : Q[k]; }); return o; };
const unsnap = o => SNAP.forEach(k => { if (o[k] !== undefined) Q[k] = o[k] && o[k].set ? new Set(o[k].set) : o[k]; });

function question(restore) {
  const S = STAGES[app.s], q = S.qs[app.qi];
  Q = { q, done: false, hinted: !!(app.hint && app.hint.s === app.s && app.hint.qi === app.qi), fb: "", warn: false };
  if (q.t === "single") { Q.ord = shuffle(q.o.map((_, i) => i)); Q.bad = new Set(); Q.pick = null; }
  if (q.t === "multi") { Q.ord = shuffle(q.o.map((_, i) => i)); Q.sel = new Set(); }
  if (q.t === "tf") { Q.ord = shuffleDiff(q.rows.map((_, i) => i), q.rows.map((_, i) => i)); Q.ans = q.rows.map(() => null); Q.state = q.rows.map(() => ""); }
  if (q.t === "match") {
    const idx = q.pairs.map((_, i) => i);
    Q.rows = shuffleDiff(idx, idx); Q.chips = shuffleDiff(idx, idx, Q.rows);
    Q.slot = q.pairs.map(() => null); Q.st = q.pairs.map(() => ""); Q.sel = null;
  }
  mount(`<section class="sheet" id="sheet">
    <div class="qhead"><span>Câu ${app.qi + 1}/${S.qs.length}</span><span></span></div>

    <h3 class="q">${q.q}</h3>
    ${q.quote ? `<div class="quote">${q.quote}</div>` : ""}
    <div id="body"></div>
    <div class="act"><button class="btn" id="submit">Đóng dấu duyệt</button><button class="btn ghost" id="hint"></button><span class="fb" id="fb"></span></div>
    <div id="hintbox"></div>
    <div id="note"></div>
  </section>`);
  $("#body").onclick = onBody;
  $("#submit").onclick = submit;
  $("#hint").onclick = useHint;
  if (Q.hinted) showHint();
  if (restore) {
    unsnap(app.snap); Q.done = true; draw();
    return showResult(app.pts[app.s][app.qi], app.sc[app.s][app.qi]);
  }
  app.at = { s: app.s, qi: app.qi }; app.snap = null; save();
  draw();
}

function draw() {
  const { q } = Q;
  const reveal = !TEST; /* kiểm tra: không lộ đáp án, chỉ hiện đúng/sai */
  const hb = $("#hint"); hb.textContent = `💡 Gợi ý (còn ${app.hints})`;
  hb.disabled = Q.done || Q.hinted || app.hints <= 0; hb.classList.toggle("hidden", Q.done || !HINT_MAX);
  let h = "";
  if (q.t === "single") h = `<div class="opts">${Q.ord.map((i, n) => {
    const cls = reveal && Q.done && i === q.a ? "ok" : reveal && Q.bad.has(i) ? "no" : Q.pick === i ? "pick" : "";
    return `<button class="opt ${cls}" data-i="${i}" ${Q.done ? "disabled" : ""}><span class="mk">${LET[n]}</span>${q.ic ? `<span class="ic">${ICON[q.ic[i]]}</span>` : ""}<span>${keycaps(q.o[i])}</span></button>`;
  }).join("")}</div>`;
  if (q.t === "multi") h = `<div class="opts">${Q.ord.map((i, n) => {
    const sel = Q.sel.has(i), right = q.a.includes(i);
    const cls = Q.done && reveal ? (right ? "ok" : sel ? "no" : "") : sel ? "pick" : "";
    return `<button class="opt multi ${cls}" data-i="${i}" ${Q.done ? "disabled" : ""}><span class="mk">${sel || (Q.done && reveal && right) ? "✓" : LET[n]}</span><span>${q.o[i]}</span></button>`;
  }).join("")}</div>`;
  if (q.t === "tf") h = `<div class="tf">${Q.ord.map(i => { const r = q.rows[i]; return `<div class="tfrow ${reveal ? Q.state[i] : ""}"><span>${r[0]}</span><div class="sw">${q.lab.map((l, k) => `<button data-r="${i}" data-k="${k}" class="${Q.ans[i] === k ? "on" : ""}" ${Q.state[i] === "ok" || Q.done ? "disabled" : ""}>${l}</button>`).join("")}</div></div>`; }).join("")}</div>`;
  if (q.t === "match") {
    const used = new Set(Q.slot);
    h = `<div class="match">${Q.rows.map((pi, j) => {
      const c = Q.slot[j];
      return `<div class="mrow"><div class="l">${keycaps(q.pairs[pi][0])}</div><button class="slot ${(reveal ? Q.st[j] : "") || (c !== null ? "full" : Q.sel !== null ? "hot" : "")}" data-j="${j}">${c !== null ? `<span class="chip">${keycaps(q.pairs[c][1])}</span>` : "Đặt mảnh vào đây"}</button></div>`;
    }).join("")}</div>${Q.done ? "" : `<div class="pool">${Q.chips.filter(c => !used.has(c)).map(c => `<button class="chip ${Q.sel === c ? "sel" : ""}" data-c="${c}">${keycaps(q.pairs[c][1])}</button>`).join("")}</div>`}`;
  }
  $("#body").innerHTML = h;
  const fb = $("#fb"); fb.textContent = Q.fb; fb.className = "fb" + (Q.warn ? " warn" : "");
  const sb = $("#submit");
  sb.classList.toggle("hidden", Q.done);
  sb.disabled = q.t === "single" ? Q.pick === null : q.t === "multi" ? Q.sel.size === 0 : q.t === "tf" ? Q.ans.some((a, i) => a === null && Q.state[i] !== "ok") : q.t === "match" ? Q.slot.some(c => c === null) : false;
}

function onBody(e) {
  if (Q.done) return;
  const { q } = Q;
  if (q.t === "single") {
    const b = e.target.closest(".opt"); if (!b) return;
    const i = +b.dataset.i;
    Q.pick = i; Q.fb = ""; draw();
  }
  if (q.t === "multi") {
    const b = e.target.closest(".opt"); if (!b) return;
    const i = +b.dataset.i; Q.sel.has(i) ? Q.sel.delete(i) : Q.sel.add(i); Q.fb = ""; draw();
  }
  if (q.t === "tf") {
    const b = e.target.closest("button"); if (!b) return;
    const r = +b.dataset.r; Q.ans[r] = +b.dataset.k; Q.state[r] = ""; Q.fb = ""; draw();
  }
  if (q.t === "match") {
    const c = e.target.closest(".chip"), s = e.target.closest(".slot");
    if (s) {
      const j = +s.dataset.j;
      if (Q.st[j] === "ok") return;
      if (Q.slot[j] !== null && Q.sel === null) { Q.slot[j] = null; Q.st[j] = ""; }
      else if (Q.sel !== null) { Q.slot[j] = Q.sel; Q.st[j] = ""; Q.sel = null; }
      Q.fb = ""; draw();
    } else if (c && c.dataset.c !== undefined) {
      const k = +c.dataset.c; Q.sel = Q.sel === k ? null : k; draw();
    }
  }
}

function useHint() {
  if (Q.done || Q.hinted || app.hints <= 0) return;
  app.hints--; Q.hinted = true; app.hint = { s: app.s, qi: app.qi }; save(); plates();
  showHint(); draw();
}
function showHint() { $("#hintbox").innerHTML = `<div class="note hintnote"><b>💡 Gợi ý</b>${Q.q.hint}</div>`; }

function submit() {
  if (Q.done) return;
  const { q } = Q;
  let f = 0;
  if (q.t === "single") { f = Q.pick === q.a ? 1 : 0; if (!f) Q.bad.add(Q.pick); }
  if (q.t === "multi") {
    const hit = [...Q.sel].filter(i => q.a.includes(i)).length, extra = Q.sel.size - hit;
    f = Math.max(0, hit - extra) / q.a.length;
  }
  if (q.t === "tf") {
    q.rows.forEach((r, i) => Q.state[i] = Q.ans[i] === (r[1] ? 0 : 1) ? "ok" : "no");
    f = Q.state.filter(x => x === "ok").length / q.rows.length;
  }
  if (q.t === "match") {
    Q.slot.forEach((c, j) => Q.st[j] = c === Q.rows[j] ? "ok" : "no");
    f = Q.st.filter(x => x === "ok").length / q.pairs.length;
  }
  finish(f);
}

function finish(f) {
  Q.done = true; Q.warn = false; Q.fb = "";
  const pt = pointsOf(Q.q, f);
  app.pts[app.s][app.qi] = f; app.sc[app.s][app.qi] = pt;
  app.at = { s: app.s, qi: app.qi }; app.snap = snapQ(); save();
  draw(); showResult(f, pt);
}

function showResult(f, pt) {
  plates();
  const last = app.qi === STAGES[app.s].qs.length - 1;
  if (TEST) {
    const ok = f === 1 ? "ok" : f > 0 ? "mid" : "bad";
    $("#note").innerHTML = `<div class="verdict ${ok}">${f === 1 ? "✔ Đúng" : f > 0 ? "◐ Đúng một phần" : "✘ Sai"}</div>
    <div class="act"><button class="btn" id="next">${last ? "Xem kết quả →" : "Câu tiếp theo →"}</button></div>`;
  } else $("#note").innerHTML = `<div class="note"><b>${f === 1 ? "Chính xác" : f > 0 ? "Đúng một phần" : "Chưa đúng"} · +${pt}/${Q.q.w} điểm</b><p class="why">${Q.q.why}</p></div>
    <div class="act"><button class="btn" id="next">${last ? "In trang báo →" : "Tin tiếp theo →"}</button></div>`;
  $("#next").onclick = () => { if (last) { app.snap = null; save(); TEST ? final() : stageEnd(); } else { app.qi++; question(); } };
  $("#note").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ---------------- kết trang & trang nhất ---------------- */
function stageEnd() {
  const s = app.s, S = STAGES[s], pts = app.pts[s], mx = S.qs.length, r = stageScore(s) / stageMax(s);
  const stars = starsOf(r);
  const last = s === STAGES.length - 1;
  mount(`<section class="sheet">
        <h2>Xong trang ${s + 1}!</h2>
    <div class="stars">${"★".repeat(stars)}<span class="off">${"★".repeat(3 - stars)}</span></div>
    <p class="lede"><b>${stageScore(s)}/${stageMax(s)} điểm</b> · đúng hoàn toàn ${fullN(s)}/${mx} câu ở ${S.no}. ${stars === 3 ? "Trang báo sạch, không một lỗi nào!" : stars === 2 ? "Trang báo khá đẹp, nhưng vẫn có tin bị gỡ." : "Trang báo còn nhiều tin bị gỡ. Hãy xem lại các câu sai ở cuối bài!"}</p>
    <div class="pagebox"><div class="ph"><span>Trang ${s + 1} · ${S.desk}</span><span>${S.no}</span></div>
      <div class="tiles">${S.qs.map((q, i) => `<div class="tile p${pts[i] === 1 ? 2 : pts[i] > 0 ? 1 : 0}" style="animation-delay:${i * 120}ms"><h4>${q.h}</h4><p></p></div>`).join("")}</div></div>
    <div class="row"><button class="btn" id="next">${last ? "Xem trang nhất →" : `Sang trang ${s + 2}: ${STAGES[s + 1].desk} →`}</button></div>
  </section>`);
  $("#next").onclick = () => last ? final() : stageIntro(s + 1);
}

function groups() {
  if (!TEST) return STAGES.map((S, i) => ({ S, got: stageScore(i), max: stageMax(i) }));
  return LESSONS.map(L => {
    let got = 0, max = 0;
    STAGES[0].qs.forEach((q, j) => { if (q.lesson === L.no) { got += app.sc[0][j] || 0; max += q.w; } });
    return { S: L, got, max };
  });
}

function final() {
  app.s = 0;
  const tot = total(), pass = tot >= PASS;
  const rank = tot >= SCORE ? "Tổng biên tập" : pass ? "Chủ bút" : tot >= 600 ? "Phóng viên" : "Thực tập sinh";
  const msg = tot >= SCORE ? "Số báo hoàn hảo! Cả tòa soạn đứng dậy vỗ tay." : pass ? "Số báo đạt chuẩn và được lên kệ. Xem lại các câu bên dưới để hoàn hảo hơn nhé." : `Em cần ${PASS} điểm để lên kệ, còn thiếu ${PASS - tot} điểm. Xem lại các câu bên dưới rồi chơi lại nhé!`;
  let best = tot; try { const b = +localStorage.getItem(KEY) || 0; best = Math.max(b, tot); localStorage.setItem(KEY, best); } catch (e) {}
  const full = STAGES.reduce((n, _, i) => n + fullN(i), 0);
  const wrong = [];
  STAGES.forEach((S, i) => S.qs.forEach((q, j) => { if (app.pts[i][j] < 1) wrong.push({ S: { no: q.lesson }, q }); }));
  const review = wrong.length ? `<h3 class="rvh">Các câu cần xem lại (${wrong.length})</h3>
    <div class="rv">${wrong.map(({ S, q }) => `<details open><summary><span class="rvt">${S.no}</span>${q.q}</summary>
      ${q.quote ? `<div class="quote">${q.quote}</div>` : ""}<p class="why">${q.why}</p></details>`).join("")}</div>`
    : `<p class="lede">Em trả lời đúng cả ${TOTAL_Q} câu, không có câu nào cần xem lại!</p>`;
  mount(`<section class="sheet">
        <h2>${TEST ? (pass ? "Em đã <i>đạt</i>!" : "Em <i>chưa đạt</i>") : (pass ? "Số báo đã <i>lên kệ</i>!" : "Số báo <i>chưa đạt</i>")}</h2>
    <div class="bigscore">${tot}<small> / ${SCORE} điểm</small></div>
    <p class="lede">Đúng hoàn toàn <b>${full}/${TOTAL_Q}</b> câu · cần xem lại <b>${TOTAL_Q - full}</b> câu</p>
    <div class="rank">${rank}</div>
    <p class="lede">${msg} (Kỷ lục: ${best}/${SCORE})</p>
    <div class="pagebox"><div class="ph"><span>Mục lục</span><span>${TEST ? TOTAL_Q + " câu" : "3 trang · " + TOTAL_Q + " tin · còn " + app.hints + " gợi ý"}</span></div>
      <div class="tiles">${groups().map((g, i) => {
        const S = g.S, st = starsOf(g.got / g.max);
        return `<div class="tile fin p${g.got / g.max >= .66 ? 2 : 1}" style="animation-delay:${i * 150}ms"><h4>${S.icon} ${S.desk}</h4><p style="text-transform:none;letter-spacing:0;font-size:13px">${S.no}: ${S.name}<br><span class="stars" style="font-size:20px;letter-spacing:2px">${"★".repeat(st)}<span class="off">${"★".repeat(3 - st)}</span></span> ${g.got}/${g.max} điểm</p></div>`;
      }).join("")}</div></div>
    <div class="row"><button class="btn" id="again">Làm lại</button><a class="btn ghost" style="text-decoration:none" href="../../../spark-lv3.html">Về danh sách bài</a></div>
    ${review}
  </section>`);
  $("#again").onclick = () => { welcome(); save(); startStage(0); };
}

if (load()) resume(); else welcome();
