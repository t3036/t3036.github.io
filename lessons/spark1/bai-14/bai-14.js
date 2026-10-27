/* Bài 14 – Trang Web và trình duyệt Web (1) (Spark 1 · Chủ đề 3)
   Nguồn: K3_B14_TrinhDuyetWeb(1).pptx + CauHoiBoSungB14.. trong CauHoiBoSungB13-16.docx
   Các câu hỏi dạng hình (đóng cửa sổ, nhập URL) được vẽ lại bằng trình duyệt giả lập để bấm trực tiếp.
   Câu “URL là gì?” trong PPTX thiếu đáp án đúng → đã bổ sung lựa chọn “Địa chỉ duy nhất của một trang Web”. */
window.LESSON = {
  id: 'b14', no: 14, title: 'Trang Web & Trình duyệt Web (1)', emoji: '🧭', color: '#16a34a', color2: '#dcf7e5',
  secs: [
    { n: 'Trình duyệt Web', e: '🧭' },
    { n: 'Các bộ phận', e: '🧩' },
    { n: 'Địa chỉ & AI an toàn', e: '🔗' },
    { n: 'Ôn tập', e: '🏆' },
  ],
  steps: [
    { t: 'hero', sec: 0, goals: [['🧭', 'Trình duyệt Web'], ['🧩', 'Các bộ phận'], ['🔗', 'Thanh địa chỉ & URL'], ['🤖', 'Mở AI an toàn']] },
    { t: 'learn', sec: 0, h: 'Trình duyệt Web', cols: 4, lead: '<span class="mark">Trình duyệt Web (Web Browser)</span> là chương trình giúp em vào các trang Web để tìm thông tin, học tập, giải trí.', cards: [
      { ic: '<img src="img/chrome.png" alt="chrome" style="height:64px">', t: 'Chrome', d: 'của Google', c: '#e4f8e9' }, { ic: '<img src="img/edge.png" alt="edge" style="height:64px">', t: 'Microsoft Edge', d: 'của Microsoft', c: '#e0efff' },
      { ic: '<img src="img/safari.png" alt="safari" style="height:64px">', t: 'Safari', d: 'của Apple', c: '#eef0f6' }, { ic: '<img src="img/firefox.png" alt="firefox" style="height:64px">', t: 'Firefox', d: 'của Mozilla', c: '#ffe9d6' },
    ] },
    { t: 'q', sec: 0, ref: 'publishers' },
    { t: 'q', sec: 0, ref: 'notBrowser' },
    { t: 'q', sec: 0, ref: 'match1' },
    { t: 'tour', sec: 1, h: 'Tìm các bộ phận của trình duyệt', spot: { tabs: ['hoctap.vn'], bookmarks: ['hoctap.vn'] }, need: ['tab', 'address', 'back', 'bookmarks', 'close'], short: { tab: 'Thẻ (Tab)', address: 'Thanh địa chỉ (cũng là khung tìm kiếm)', back: 'Các nút điều hướng ◀ ▶ ⟳', bookmarks: 'Thanh Bookmarks', close: 'Các nút lệnh ─ ▢ ✕ của cửa sổ' }, hint: { tab: 'ô ghi tên trang Web, nằm trên cùng', address: 'ô dài ghi địa chỉ https://… – gõ từ khóa vào đây cũng để tìm kiếm', back: 'ba nút tròn bên trái thanh địa chỉ', bookmarks: 'hàng nằm dưới thanh địa chỉ', close: 'ba nút ở góc trên bên phải' } },
    { t: 'q', sec: 1, ref: 'close' },
    { t: 'learn', sec: 1, h: 'Thanh địa chỉ & URL', cards: [
      { ic: '⌨️', t: 'Thanh địa chỉ', d: 'Nơi gõ địa chỉ trang Web. Nằm ở đầu cửa sổ.', c: '#e4f8e9' },
      { ic: '🏷️', t: 'URL', d: 'Mỗi trang Web có một địa chỉ duy nhất gọi là URL.', c: '#e0efff' },
      { ic: '✅', t: 'Gõ đúng + Enter', d: 'Gõ chính xác URL rồi nhấn Enter để vào trang.', c: '#fff1d6' },
    ] },
    { t: 'sim', sec: 1, h: 'Thử gõ URL', spot: { tabs: ['truong-em.edu.vn'], view: 250 }, goals: [
      { text: 'Xóa địa chỉ https://truong-em.edu.vn trên thanh địa chỉ', ev: 'addrclear' },
      { text: 'Gõ hoctap.vn rồi nhấn Enter', ev: 'navigate', url: 'hoctap.vn' },
    ] },
    { t: 'q', sec: 1, ref: 'enterUrl' },
    { t: 'q', sec: 1, ref: 'urlDef' },
    { t: 'learn', sec: 2, h: 'Trang Web có đáng tin?', lead: 'Muốn biết một trang Web tin cậy không, hãy xem:', cards: [
      { ic: '📰', t: 'Tiêu đề (Title)', d: 'Mô tả đúng, ngắn gọn nội dung trang.', c: '#e0efff' },
      { ic: '✍️', t: 'Tác giả (Author)', d: 'Ai viết ra thông tin này?', c: '#e4f8e9' },
      { ic: '📅', t: 'Ngày (Date)', d: 'Thông tin có còn mới không?', c: '#fff1d6' },
    ], after: '<b>Ví dụ:</b> trang Web này có đủ cả 3 yếu tố, nên em có thể tin tưởng hơn 👇<div style="margin-top:10px;border:3px solid #cfdcf3;border-radius:20px;overflow:hidden;font-size:.8em"><div style="background:#e4ebf8;padding:6px 16px;font-size:.7em">🔒 https://khoahoc-nhi.vn/dai-duong</div><div style="padding:14px 20px"><div style="font-size:1.25em;font-weight:800">🌊 Vì sao nước biển lại mặn?<span style="background:#2563eb;color:#fff;border-radius:99px;padding:2px 14px;font-size:.62em;font-weight:800;margin-left:10px;white-space:nowrap">① Tiêu đề</span></div><div style="margin:6px 0">✍️ Tác giả: Cô Lan Anh – giáo viên Khoa học<span style="background:#16a34a;color:#fff;border-radius:99px;padding:2px 14px;font-size:.62em;font-weight:800;margin-left:10px;white-space:nowrap">② Tác giả</span></div><div style="margin:6px 0">📅 Ngày đăng: 12/09/2025<span style="background:#f59e0b;color:#fff;border-radius:99px;padding:2px 14px;font-size:.62em;font-weight:800;margin-left:10px;white-space:nowrap">③ Ngày</span></div><div style="color:#5d6b8f">Muối trong đất đá được nước mưa và sông cuốn ra biển…</div></div></div>' },
    { t: 'q', sec: 2, ref: 'reliable' },
    { t: 'learn', sec: 2, h: 'Mở công cụ AI bằng trình duyệt', lead: 'Một số công cụ AI mở bằng trình duyệt Web. Chỉ vào địa chỉ <b>giáo viên hoặc người lớn cho phép</b>. Hãy quan sát:', cards: [
      { ic: '🔗', t: '1. Địa chỉ trên thanh địa chỉ', c: '#e0efff' }, { ic: '🏷️', t: '2. Tên trang Web', c: '#e4f8e9' },
      { ic: '🖼️', t: '3. Biểu tượng quen thuộc', c: '#fff1d6' }, { ic: '🚨', t: '4. Dấu hiệu lạ', d: 'Tên lạ, sai chính tả, quá dài, đòi thông tin cá nhân.', c: '#ffe9e1' },
    ], after: 'Không phải trang nào có chữ “AI” cũng an toàn!' },
    { t: 'sort', sec: 2, extra: true, h: 'An toàn hay Cần cẩn thận?', labels: ['✅ An toàn', '🚨 Cẩn thận'], items: [['Địa chỉ do cô giáo đưa cho cả lớp', 0], ['Trang tên lạ, sai chính tả, rất dài', 1], ['Trang đòi nhập họ tên và mật khẩu', 1], ['Trang quen thuộc, có biểu tượng đúng', 0]] },
    { t: 'q', sec: 2, extra: true, q: { q: 'Một công cụ AI hiện ra với địa chỉ như hình, giáo viên chưa cho phép. Em nên làm gì?', img: '<div style="background:#ffecec;border:3px solid #ff5a5f;border-radius:99px;padding:8px 22px;margin:0 0 20px;font-size:.9em;font-weight:700;word-break:break-all">🔒 https://ai-mien-phi-nhan-qua-111.xyz/dang-nhap?ten=em&matkhau=</div>', o: ['Vào thử ngay cho vui', 'Không vào, hỏi giáo viên hoặc người lớn', 'Nhập tên và mật khẩu để nhận quà'], a: 1, why: 'Địa chỉ có tên lạ, quá dài và đòi thông tin cá nhân – đó là dấu hiệu nguy hiểm. Em không vào nếu chưa được cho phép.' } },
    { t: 'review', sec: 3 },
  ],

  bank: {
    /* ---- PPTX ---- */
    match1: { q: 'Em hãy ghép mỗi thuật ngữ với định nghĩa tương ứng.', m: [['Trình duyệt Web (Web Browser)', 'Phần mềm em dùng để xem mọi thứ trên Internet.'], ['Trang Web (Web Page)', 'Một tài liệu có văn bản và hình ảnh em nhìn thấy và đọc trên Internet.'], ['Công cụ tìm kiếm (Search Engine)', 'Phần mềm em dùng để tìm mọi thứ trên Internet.']] },
    close: { q: 'Em nên nhấp vào biểu tượng nào để đóng (Close) cửa sổ trình duyệt đang hiển thị?', spot: { tabs: ['truong-em.edu.vn'] }, a: 'close', why: 'Nút ✕ ở góc trên bên phải dùng để đóng cả cửa sổ.' },
    addrArea: { q: 'Em hãy cho biết, khu vực ở đầu cửa sổ trình duyệt hiển thị URL trang Web được gọi là gì?', o: ['Thanh địa chỉ (Address bar)', 'Bookmark/Favorite', 'Thẻ trình duyệt (Tab)', 'Thanh tiêu đề (Title bar)'], a: 0, fixed: true },
    comp3: { q: 'Em hãy chọn những thành phần thuộc giao diện của trình duyệt Web.', o: ['Thẻ (Tab)', 'Công cụ tìm kiếm (Search Engine)', 'Thanh địa chỉ (Address Bar)', 'Tác giả trang Web (Site Author)', 'Cửa sổ (Window)', 'Các ứng dụng (Applications)'], a: [0, 2, 4], why: 'Công cụ tìm kiếm, tác giả trang Web và ứng dụng không phải bộ phận của giao diện trình duyệt.' },
    ie: { q: 'Em hãy cho biết, tùy chọn nào dưới đây cho phép truy cập và duyệt thông tin trên Internet?', o: ['Internet Explorer', 'Server (Máy chủ)', 'Client (Máy khách)', 'Cloud Storage (Lưu trữ đám mây)'], a: 0, why: 'Internet Explorer là một trình duyệt Web.' },
    match2: { q: 'Em hãy ghép mỗi thuật ngữ với định nghĩa tương ứng.', m: [['Website', 'Tập hợp các trang Web có thể truy cập công khai và chia sẻ một tên miền duy nhất'], ['Công cụ tìm kiếm (Search Engine)', 'Chương trình hoặc phần mềm dùng để tìm kiếm thông tin, thường là trên World Wide Web'], ['Trình duyệt (Web browser)', 'Chương trình phần mềm dùng để điều hướng trên World Wide Web']] },
    findUrl: { q: 'Em có thể tìm thấy URL của một trang Web ở đâu để sao chép và dán?', o: ['Trong thanh địa chỉ.', 'Một Tab mới.', 'Một cửa sổ mới.'], a: 0, fixed: true },
    enterUrl: { q: 'Trên trang Web đang hiển thị, em nên nhập URL mới vào đâu?', spot: { tabs: ['truong-em.edu.vn'] }, a: 'address', why: 'URL mới được gõ vào thanh địa chỉ.' },
    urlDef: { q: 'Em hãy cho biết, URL là gì?', o: ['Tập hợp các trang Web được liên kết với nhau, dùng chung một tên miền.', 'Một hình thức nhắn tin giữa người này với người khác qua Internet.', 'Một trang Web hoặc Email giả được thiết kế trông có vẻ đáng tin cậy.', 'Địa chỉ duy nhất của một trang Web.'], a: 3, why: 'URL (Uniform Resource Locator) là địa chỉ duy nhất của mỗi trang Web. Ba ý còn lại nói về Website, tin nhắn và trang giả mạo.' },
    webApp: { q: 'Em hãy cho biết, tùy chọn nào là một ứng dụng Web (Web Application)?', o: ['Một chương trình email như Gmail, Yahoo, Hotmail.', 'Trang web của một trường học.', 'Một trò chơi được tải xuống trên máy tính để bàn.'], a: 0, fixed: true, why: 'Ứng dụng Web chạy ngay trong trình duyệt, như Gmail.' },
    reliable: { q: 'Em có thể dùng những thông tin nào để kiểm tra độ tin cậy của một trang Web?', o: ['Cách trình bày (Layout)', 'Tiêu đề (Title)', 'Ngày (Date)', 'Tác giả (Author)'], a: [1, 2, 3] },
    /* ---- Word ---- */
    display: { q: 'Em hãy cho biết, tùy chọn nào sau đây được sử dụng để hiển thị nội dung trang Web?', o: ['Trình duyệt Web (Web Browser)', 'Giao thức (Protocol)', 'Công cụ tìm kiếm (Search Engine)', 'Máy chủ (Server)'], a: 0 },
    publishers: { q: 'Em hãy ghép nối các trình duyệt Web với nhà phát hành tương ứng.', m: [['<img src="img/edge.png" alt="edge" style="height:36px"> Microsoft Edge', 'Microsoft'], ['<img src="img/safari.png" alt="safari" style="height:36px"> Safari', 'Apple'], ['<img src="img/chrome.png" alt="chrome" style="height:36px"> Chrome', 'Google'], ['<img src="img/firefox.png" alt="firefox" style="height:36px"> Firefox', 'Mozilla']] },
    notBrowser: { q: 'Em hãy cho biết, tùy chọn nào sau đây KHÔNG PHẢI là trình duyệt Web?', o: ['Firefox', 'Chrome', 'Internet Explorer', 'Facebook'], a: 3, fixed: true, why: 'Facebook là mạng xã hội, không phải trình duyệt.' },
    browserDef: { q: 'Em hãy cho biết, Trình duyệt Web (Web Browser) là gì?', o: ['Là tập hợp nhiều trang thông tin có chứa nội dung như hình ảnh, âm thanh, video… được lưu trữ và truy cập thông qua Internet.', 'Là một trang thông tin của Webpage.', 'Là các chương trình máy tính giúp em truy cập các trang Web để tìm kiếm thông tin, học tập, giải trí…', 'Là việc tìm kiếm thông tin trên Internet.'], a: 2 },
    unique: { q: 'Em hãy cho biết, mỗi trang Web đều có một địa chỉ duy nhất được gọi là gì?', o: ['IP (Internet Protocol)', 'URL (Uniform Resource Locator)', 'Source', 'Hyperlink'], a: 1, fixed: true },
  },
};
