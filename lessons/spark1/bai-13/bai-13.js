/* Bài 13 – Thông tin trực tuyến (Spark 1 · Chủ đề 3)
   Nguồn: K3_B13_ThongTinTrucTuyen.pptx + CauHoiBoSungB13-16.docx
   bank = toàn bộ câu hỏi PPTX (pptx) + Word (docx) → xuất hiện ở phần Ôn tập.
   Bài tập "extra" chỉ có trong bài giảng, không đưa vào ôn tập. */
window.LESSON = {
  id: 'b13', no: 13, title: 'Thông tin trực tuyến', emoji: '🌐', color: '#1e88ff', color2: '#e0efff',
  secs: [
    { n: 'Website & Webpage', e: '🏠' },
    { n: 'Sự thật hay ý kiến?', e: '🔍' },
    { n: 'Tìm kiếm & AI', e: '🤖' },
    { n: 'Ôn tập', e: '🏆' },
  ],
  steps: [
    { t: 'hero', sec: 0, goals: [['🏠', 'Website'], ['📄', 'Webpage'], ['🔍', 'Dữ kiện & ý kiến'], ['🔎', 'Công cụ tìm kiếm']] },
    { t: 'learn', sec: 0, h: 'Website là gì?', lead: 'Internet có rất nhiều thông tin. Thông tin nằm ở đâu?', cards: [
      { ic: '🏠', t: 'Website', d: 'Cả “ngôi nhà” gồm nhiều trang thông tin: chữ, hình ảnh, âm thanh, video…', c: '#e0efff', ex: 'Ví dụ: Website IIG Việt Nam' },
      { ic: '📄', t: 'Webpage', d: 'Mỗi trang thông tin là một “căn phòng” – gọi là Webpage.', c: '#fff1d6' },
      { ic: '🔗', t: '1 Website = nhiều Webpage', d: 'Website chứa nhiều Webpage.', c: '#e4f8e9' },
    ] },
    { t: 'q', sec: 0, extra: true, q: { q: 'Nếu Website là một quyển sách thì Webpage giống như…', o: ['Một trang sách', 'Cái bìa sách', 'Cả thư viện'], a: 0, why: 'Một quyển sách có nhiều trang – một Website có nhiều Webpage.' } },
    { t: 'q', sec: 0, ref: 'wpEx' },
    { t: 'q', sec: 0, ref: 'netpc' },
    { t: 'q', sec: 0, ref: 'tfDocx' },
    { t: 'learn', sec: 1, h: 'Nghiên cứu: dữ kiện & quan điểm', lead: '<span class="mark">Nghiên cứu (Research)</span> là tìm thông tin để hiểu rõ một vấn đề.', cards: [
      { ic: '📏', t: 'Dữ kiện (Sự thật)', d: 'Quan sát, đếm hoặc đo được.', c: '#e4f8e9', ex: 'Nhà hàng có 10 loại pizza. Nhà hàng cách trường 1 dãy nhà.' },
      { ic: '💭', t: 'Quan điểm (Ý kiến)', d: 'Điều một người nghĩ, thấy hay thích.', c: '#ffe9e1', ex: 'Món tráng miệng tuyệt đỉnh! Máy chơi game rất vui!' },
    ] },
    { t: 'sort', sec: 1, extra: true, h: 'Dữ kiện hay Quan điểm?', labels: ['📏 Dữ kiện', '💭 Quan điểm'], items: [['Lớp em có 30 bạn.', 0], ['Môn Toán thật chán!', 1], ['Trái Đất quay quanh Mặt Trời.', 0], ['Mèo là con vật dễ thương nhất.', 1], ['Một tuần có 7 ngày.', 0]] },
    { t: 'q', sec: 1, ref: 'tfFact' },
    { t: 'q', sec: 1, ref: 'tfOpin' },
    { t: 'q', sec: 1, ref: 'ocean' },
    { t: 'q', sec: 1, ref: 'resto' },
    { t: 'learn', sec: 2, h: 'Công cụ tìm kiếm', lead: 'Muốn tìm thông tin trên Internet, em dùng <span class="mark">Công cụ tìm kiếm (Search Engine)</span>.', cards: [
      { ic: '🔎', t: 'Google.com', d: 'Trang Web chuyên để tìm kiếm.', c: '#e0efff' },
      { ic: '🔍', t: 'Bing.com', d: 'Cũng là công cụ tìm kiếm.', c: '#e4f8e9' },
      { ic: '⚠️', t: 'Lưu ý', d: 'Tìm trên Internet – không phải tìm trong máy tính của em.', c: '#fff1d6' },
    ] },
    { t: 'sim', sec: 2, h: 'Em là thám tử tìm kiếm!', spot: { tabs: ['google.com'], view: 270 }, goals: [
      { text: 'Gõ “đại dương” vào ô tìm kiếm rồi nhấn Enter', ev: 'search' },
      { text: 'Bấm vào kết quả “Đại dương kỳ diệu”', ev: 'navigate', url: 'daiduong.vn' },
    ] },
    { t: 'q', sec: 2, ref: 'engines' },
    { t: 'learn', sec: 2, h: 'Công cụ tìm kiếm và AI', cards: [
      { ic: '🔎', t: 'Công cụ tìm kiếm', d: 'Tìm các trang Web, bài viết, hình ảnh, video có sẵn.', c: '#e0efff' },
      { ic: '🤖', t: 'Công cụ AI', d: 'Tạo câu trả lời mới theo câu hỏi của em.', c: '#f1e6ff' },
      { ic: '⚠️', t: 'AI có thể sai!', d: 'Hãy kiểm tra lại với sách, giáo viên hoặc Web đáng tin cậy.', c: '#ffe9e1' },
    ], after: '<b>3 bước:</b> ① Cần xem nguồn → dùng tìm kiếm. ② Cần gợi ý, giải thích → dùng AI. ③ Chưa hiểu thì <b>không</b> chép nguyên văn.' },
    { t: 'q', sec: 2, extra: true, q: { q: 'AI trả lời rất nhanh. Em nên làm gì với câu trả lời đó?', o: ['Chép nguyên văn vào bài', 'Kiểm tra lại với sách hoặc giáo viên', 'Tin ngay, không cần xem lại'], a: 1, why: 'AI đôi khi sai hoặc thiếu thông tin, nên em cần kiểm tra lại.' } },
    { t: 'q', sec: 2, ref: 'matchTerm' },
    { t: 'review', sec: 3 },
  ],

  bank: {
    /* ---- PPTX ---- */
    wpEx: { q: 'Em hãy cho biết, tùy chọn nào là ví dụ về một trang Web (Webpage)?', o: ['Trang chủ trên trang Web của trường học', 'Một ứng dụng được tải xuống trên điện thoại thông minh', 'Một Email giữa các học sinh ở các trường khác nhau'], a: 0, why: 'Trang chủ của Website trường là một Webpage.' },
    netpc: { q: 'Em sẽ nhấp vào đâu để truy cập các trang khác của trang Web Net PC trong cửa sổ trình duyệt?', spot: { tabs: ['netpc.vn'] }, a: 'nav', why: 'Menu của trang Web giúp em đi tới các Webpage khác.' },
    text: { q: 'Em thường tìm thấy điều gì trong ứng dụng máy tính để bàn và trên các trang Web?', o: ['Nút đặt hàng', 'Giỏ hàng', 'Thanh địa chỉ', 'Đoạn văn bản'], a: 3, why: 'Cả ứng dụng máy tính và trang Web đều có đoạn văn bản. Thanh địa chỉ chỉ có trong trình duyệt.' },
    tfFact: { q: 'Em hãy chọn Đúng nếu là phát biểu về sự thật (Fact), hoặc chọn Sai nếu không phải.', tf: [['Có 24 giờ trong một ngày.', true], ['Nhảy dù rất nguy hiểm.', false], ['Thật là một ngày tuyệt vời.', false]], why: '“Nguy hiểm” và “tuyệt vời” là cảm nghĩ của mỗi người nên là ý kiến.' },
    tfOpin: { q: 'Em hãy chọn Có nếu là ý kiến (Opinion), hoặc chọn Không nếu không phải.', yes: 'Có', no: 'Không', tf: [['Có 24 giờ trong một ngày.', false], ['Nhảy dù rất nguy hiểm.', true], ['Thật là một ngày tuyệt vời.', true]] },
    ocean: { q: 'Em đang nghiên cứu về đại dương. Giáo viên yêu cầu ít nhất ba sự kiện và không có ý kiến. Tùy chọn nào sau đây là một ý kiến?', o: ['Đại dương tối tăm và đáng sợ.', 'Nhiều loại động vật sống trong đại dương.', 'Cá sống trong đại dương.', 'Đại dương luôn chuyển động.'], a: 0, why: '“Tối tăm và đáng sợ” là cảm giác của một người.' },
    resto: { q: 'Em đọc bài đánh giá trực tuyến về một nhà hàng nhưng chưa chắc có nên tin không. Em hãy chọn Thực tế hoặc Ý kiến cho mỗi phát biểu.', yes: 'Thực tế', no: 'Ý kiến', tf: [['Nhà hàng có một khu trò chơi điện tử thực sự thú vị.', false], ['Nhà hàng có các món tráng miệng ngon nhất.', false], ['Nhà hàng chỉ cách trường học một dãy nhà.', true], ['Nhà hàng có mười loại Pizza khác nhau.', true]] },
    vy: { q: 'Vy chỉ muốn đọc các bài báo trực tuyến dựa trên sự thật, không phải ý kiến. Câu hỏi nào giúp Vy xác định bài báo dựa trên sự thật?', o: ['Ai đã viết bài báo?', 'Kiểu phông chữ nào đã được sử dụng?', 'Bài viết có hình ảnh không?', 'Bài viết dài bao nhiêu?'], a: 0, fixed: true, why: 'Biết tác giả là ai giúp em kiểm tra độ tin cậy của thông tin.' },
    matchTerm: { q: 'Ghép mỗi thuật ngữ với định nghĩa đúng.', m: [['Nghiên cứu (Research)', 'Thu thập thông tin về một chủ đề'], ['Trang Web (Web page)', 'Tài liệu siêu văn bản có thể được hiển thị bằng trình duyệt Web'], ['Công cụ tìm kiếm (Search Engine)', 'Chương trình hoặc phần mềm dùng để tìm kiếm thông tin, thường là trên World Wide Web']] },
    /* ---- Word ---- */
    website: { q: 'Em hãy cho biết, Website là gì?', o: ['Là tập hợp nhiều trang thông tin có chứa nội dung như hình ảnh, âm thanh, Video… được lưu trữ và truy cập thông qua Internet.', 'Là một trang thông tin của Webpage.', 'Là mạng máy tính toàn cầu.', 'Là một phần mềm được cài đặt trong máy tính.'], a: 0 },
    engines: { q: 'Trong các tùy chọn sau, tùy chọn nào là công cụ tìm kiếm thông tin trên Internet?', o: ['Google.com', '<img src="img/firefox.png" alt="firefox" style="height:28px;vertical-align:middle;margin-right:8px">Firefox', 'Bing.com', '<img src="img/chrome.png" alt="chrome" style="height:28px;vertical-align:middle;margin-right:8px">Google Chrome'], a: [0, 2], why: 'Firefox và Chrome là trình duyệt Web, không phải công cụ tìm kiếm.' },
    webpage: { q: 'Em hãy cho biết, Webpage là gì?', o: ['Là một trang thông tin của Website.', 'Là công cụ tìm kiếm.', 'Là phần mềm tìm kiếm.', 'Là tập hợp nhiều trang thông tin có chứa nội dung như hình ảnh, âm thanh, Video… được lưu trữ và truy cập thông qua Internet.'], a: 0 },
    tfDocx: { q: 'Em hãy chọn Đúng hoặc Sai với các phát biểu sau:', tf: [['Webpage là tên gọi khác của Website.', false], ['Một Website có nhiều Webpage.', true], ['Nghiên cứu (Research) là tìm hiểu thông tin để hiểu rõ về một vấn đề nào đó.', true], ['Công cụ tìm kiếm (Search Engine) giúp tìm kiếm thông tin được lưu trữ trong máy tính.', false]] },
    engineDef: { q: 'Em hãy cho biết, công cụ tìm kiếm (Search Engine) là gì?', o: ['Là một phần mềm được cài đặt trên máy tính.', 'Là các trang Web chuyên dụng để tìm kiếm thông tin trên Internet.', 'Là một thiết bị điện tử có chức năng tìm kiếm đồ vật trong nhà em.'], a: 1 },
  },
};
