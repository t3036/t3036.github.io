/* Bài 16 – Trang Web và trình duyệt Web (3): Lịch sử & dấu trang (Spark 1 · Chủ đề 3)
   Nguồn: K3_B16_TrinhDuyetWeb(3)-LichSuVaDauTrang.pptx + CauHoiBoSungB13-16.docx
   PPTX có đáp án “Tác giả trang Web” lạc sang câu hỏi lịch sử trình duyệt → đã bỏ khỏi câu hỏi giáo viên kiểm tra. */
const SPOT = { tabs: ['hoctap.vn'], history: [['hoctap.vn', '08:40'], ['daiduong.vn', '08:52'], ['thuvien.vn', '09:05']], view: 240 };
window.LESSON = {
  id: 'b16', no: 16, title: 'Lịch sử duyệt Web & Dấu trang', emoji: '⭐', color: '#8b5cf6', color2: '#ece4ff',
  secs: [{ n: 'Lịch sử duyệt Web', e: '🕘' }, { n: 'Dấu trang', e: '⭐' }, { n: 'Lưu an toàn', e: '🛡️' }, { n: 'Ôn tập', e: '🏆' }],
  steps: [
    { t: 'hero', sec: 0, goals: [['🕘', 'Lịch sử duyệt Web'], ['⭐', 'Dấu trang'], ['⌨️', 'Ctrl+H, Ctrl+D'], ['🛡️', 'Lưu an toàn']] },
    { t: 'learn', sec: 0, h: 'Lịch sử duyệt Web', lead: 'Làm sao xem lại những trang Web em đã vào?', cards: [
      { ic: '🕘', t: 'Browsing History', d: 'Là danh sách các trang Web mà em đã truy cập.', c: '#ece4ff' },
      { ic: '📋', t: 'Trong lịch sử có', d: 'Ngày truy cập · Giờ truy cập · Danh sách trang đã vào.', c: '#e0efff' },
    ] },
    { t: 'q', sec: 0, ref: 'teacher' },
    { t: 'learn', sec: 0, h: 'Mở lịch sử duyệt Web', lead: 'Có <b>2 cách</b>:', cards: [
      { ic: '⌨️', t: 'Cách 1', d: 'Nhấn <kbd>Ctrl</kbd> + <kbd>H</kbd>', c: '#e0efff' },
      { ic: '⋮', t: 'Cách 2', d: 'B1: Nhấp vào <b>ba chấm</b> ⋮ · B2: Nhấp <b>History</b>', c: '#fff1d6' },
    ] },
    { t: 'sim', sec: 0, h: 'Mở lịch sử', spot: Object.assign({ keys: ['Ctrl+H', 'Ctrl+D'] }, SPOT), goals: [
      { text: 'Nhấp nút Ctrl+H ở dưới trình duyệt để mở lịch sử', ev: 'history', via: 'key' },
      { text: 'Nhấp nút Ctrl+H lần nữa để đóng', ev: 'historyclose' },
      { text: 'Bấm ⋮ rồi chọn History để mở lại', ev: 'history', via: 'menu' },
    ] },
    { t: 'q', sec: 0, ref: 'ctrlH' },
    { t: 'learn', sec: 1, h: 'Dấu trang', lead: '<span class="mark">Dấu trang</span> giúp em quay lại trang Web hay vào nhanh chóng. Nó lưu <b>liên kết</b> của trang Web.', cards: [
      { ic: '<img src="img/chrome.png" alt="chrome" style="height:64px;vertical-align:middle;margin-right:8px">', t: 'Google Chrome', d: 'gọi là <b>Bookmarks</b>', c: '#e4f8e9' },
      { ic: '<img src="img/edge.png" alt="edge" style="height:64px;vertical-align:middle;margin-right:8px">', t: 'Microsoft Edge', d: 'gọi là <b>Favorites</b>', c: '#e0efff' },
    ] },
    { t: 'q', sec: 1, ref: 'fast3' },
    { t: 'q', sec: 1, ref: 'saves' },
    { t: 'learn', sec: 1, h: 'Tạo dấu trang', cards: [
      { ic: '⭐', t: 'Bước 1', d: 'Nhấp vào ngôi sao <b>☆</b> hoặc nhấn <kbd>Ctrl</kbd> + <kbd>D</kbd>', c: '#fff1d6' },
      { ic: '✏️', t: 'Bước 2', d: 'Cửa sổ hiện ra: <b>đặt tên</b> cho dấu trang (ví dụ: Bài học của em)', c: '#e0efff' },
      { ic: '✅', t: 'Bước 3', d: 'Nhấp chọn <b>Done</b>', c: '#e4f8e9' },
    ] },
    { t: 'sim', sec: 1, h: 'Tạo dấu trang', spot: { tabs: ['hoctap.vn'], keys: ['Ctrl+D'], view: 240 }, goals: [
      { text: 'Nhấp vào ngôi sao ☆ trên thanh địa chỉ', ev: 'bookmark', via: 'click' },
      { text: 'Đặt tên mới cho dấu trang (ví dụ: Bài học), rồi nhấp Done', ev: 'bookmark-done', named: true },
      { text: 'Gõ thuvien.vn vào thanh địa chỉ rồi Enter', ev: 'navigate', url: 'thuvien.vn' },
      { text: 'Nhấp nút Ctrl+D ở dưới trình duyệt để đánh dấu trang này', ev: 'bookmark', via: 'key' },
      { text: 'Đặt tên cho dấu trang (ví dụ: Thư viện), rồi nhấp Done', ev: 'bookmark-done', named: true },
      { text: 'Nhấp vào dấu trang em đặt tên đầu tiên để quay lại trang học tập', ev: 'navigate', url: 'hoctap.vn' },
    ] },
    { t: 'q', sec: 1, ref: 'ctrlD' },
    { t: 'q', sec: 1, ref: 'tool' },
    { t: 'learn', sec: 2, h: 'Lưu trang học tập an toàn', lead: 'Lịch sử, dấu trang và cuộc trò chuyện AI đều có thể <b>để lại dấu vết</b> hoạt động trực tuyến.', cards: [
      { ic: '✅', t: 'Nên đánh dấu', d: 'Trang LMS hoặc công cụ học tập được giáo viên cho phép.', c: '#e4f8e9' },
      { ic: '🚫', t: 'Không đánh dấu', d: 'Trang quảng cáo · Trang lạ · Công cụ AI chưa được cho phép.', c: '#ffe9e1' },
    ] },
    { t: 'sort', sec: 2, extra: true, h: 'Nên lưu hay Không?', labels: ['✅ Nên lưu', '🚫 Không lưu'], items: [['Trang bài giảng cô giáo cho phép', 0], ['Trang quảng cáo nhấp nháy', 1], ['Trang học tập an toàn của lớp', 0], ['Trang lạ chưa ai biết', 1]] },
    { t: 'learn', sec: 2, h: 'Trò chuyện với AI', lead: 'Có thể lưu, ghim, đặt tên cuộc trò chuyện – nhưng chỉ lưu <b>nội dung học tập an toàn</b>.<br>Không viết vào cuộc trò chuyện AI:', cards: [
      { ic: '🪪', t: 'Họ và tên đầy đủ', c: '#ffe9e1' }, { ic: '🏫', t: 'Lớp học', c: '#ffe9e1' }, { ic: '🏠', t: 'Địa chỉ', c: '#ffe9e1' },
      { ic: '🔑', t: 'Mật khẩu', c: '#ffe9e1' }, { ic: '👨‍👩‍👧', t: 'Thông tin gia đình', c: '#ffe9e1' }, { ic: '📷', t: 'Ảnh riêng tư', c: '#ffe9e1' },
    ] },
    { t: 'q', sec: 2, extra: true, q: { q: 'Em muốn nhờ AI giúp làm bài. Em có thể gửi thông tin nào?', o: ['Câu hỏi về bài học', 'Mật khẩu tài khoản của em', 'Địa chỉ nhà và họ tên đầy đủ'], a: 0, why: 'Chỉ chia sẻ nội dung học tập, không chia sẻ thông tin cá nhân.' } },
    { t: 'review', sec: 3 },
  ],
  bank: {
    /* ---- PPTX ---- */
    teacher: { q: 'Giáo viên bảo học sinh nghiên cứu một chủ đề trên máy tính bảng trong 30 phút. Khi hỏi, bạn ấy nói là có làm. Giáo viên có thể biết bạn ấy nói thật hay không bằng cách nào?', o: ['Kiểm tra thời lượng pin còn lại của máy tính bảng', 'Kiểm tra lịch sử trình duyệt của học sinh', 'Hỏi những học sinh khác ngồi gần trong thời gian nghiên cứu', 'Kiểm tra xem có thẻ trình duyệt nào đang mở trên máy tính bảng hay không'], a: 1, why: 'Lịch sử duyệt Web ghi lại những trang đã truy cập.' },
    fast3: { q: 'Theo em, cách nào là nhanh nhất để lưu một trang Web để em có thể quay lại sau này?', o: ['Tạo dấu trang (Bookmark)', 'Viết địa chỉ trang Web trên một tờ giấy', 'Chụp ảnh màn hình của trang Web'], a: 0, why: 'Dấu trang lưu liên kết, chỉ cần một cú nhấp để quay lại.' },
    fast4: { q: 'Theo em, cách nào nhanh nhất để lưu trang Web đang xem để có thể quay lại sau?', o: ['Tạo dấu trang (Bookmark)', 'Viết địa chỉ trang Web trên một tờ giấy', 'Lưu địa chỉ trang Web trong một tập tin', 'Lưu trang Web vào màn hình máy tính của bạn'], a: 0 },
    tool: { q: 'Em hãy cho biết, công cụ nào của trình duyệt cho phép truy cập vào các trang Web yêu thích?', o: ['Back', 'Settings', 'Home', 'Bookmarks'], a: 3, fixed: true },
    purpose: { q: 'Em hãy cho biết, mục đích của dấu trang/mục yêu thích (Bookmarks/Favorites) là gì?', o: ['Đây là một cách nhanh chóng để lưu URL và quay lại trang Web sau.', 'Nó giúp việc in URL của một trang Web trở nên dễ dàng hơn.', 'Đó là cách tốt nhất để chia sẻ URL với bạn cùng lớp hoặc giáo viên.'], a: 0, fixed: true },
    saves: { q: 'Em có thể lưu gì trong tính năng Bookmarks/Favorites của trình duyệt Web?', o: ['Cài đặt trang Web (Webpage Settings)', 'Cookie trang Web (Webpage Cookies)', 'Hình ảnh trang Web (Webpage Images)', 'Liên kết trang Web (Webpage Links)'], a: 3, fixed: true },
    /* ---- Word ---- */
    historyDef: { q: 'Em hãy cho biết, lịch sử duyệt Web (Browsing History) là gì?', o: ['Là tập hợp nhiều trang thông tin có chứa nội dung như hình ảnh, âm thanh, Video… được lưu trữ và truy cập thông qua Internet.', 'Là một trang thông tin của Webpage.', 'Là danh sách các trang Web mà em đã truy cập.', 'Là danh sách các trình duyệt Web (Web Browser) mà em đã sử dụng.'], a: 2 },
    tool2: { q: 'Em hãy cho biết, tùy chọn nào sau đây là tính năng của trình duyệt Web cho phép em nhanh chóng truy cập vào các trang yêu thích?', o: ['Back', 'Forward', 'Bookmarks/Favorites', 'Save as'], a: 2, fixed: true },
    ctrlH: { q: 'Trong các tùy chọn dưới đây, tùy chọn nào là tổ hợp phím dùng để mở lịch sử duyệt Web?', o: ['Shift + H', 'Ctrl + H', 'Alt + H', 'Windows + H'], a: 1, fixed: true },
    names: { q: 'Trong các phát biểu sau đây, phát biểu nào đúng khi nói về tính năng đánh dấu trang của trình duyệt Web?', o: ['<img src="img/edge.png" alt="edge" style="height:28px;vertical-align:middle;margin-right:8px">Trên trình duyệt Web Microsoft Edge thì tính năng đánh dấu trang là “Favorites”.', '<img src="img/edge.png" alt="edge" style="height:28px;vertical-align:middle;margin-right:8px">Trên trình duyệt Web Microsoft Edge thì tính năng đánh dấu trang là “Bookmarks”.', '<img src="img/chrome.png" alt="chrome" style="height:28px;vertical-align:middle;margin-right:8px">Trên trình duyệt Web Google Chrome thì tính năng đánh dấu trang là “Favorites”.', '<img src="img/chrome.png" alt="chrome" style="height:28px;vertical-align:middle;margin-right:8px">Trên trình duyệt Web Google Chrome thì tính năng đánh dấu trang là “Bookmarks”.'], a: [0, 3] },
    ctrlD: { q: 'Trong các tùy chọn dưới đây, tùy chọn nào là tổ hợp phím dùng để đánh dấu trang?', o: ['Windows + D', 'Shift + D', 'Ctrl + D', 'Alt + D'], a: 2, fixed: true },
  },
};
