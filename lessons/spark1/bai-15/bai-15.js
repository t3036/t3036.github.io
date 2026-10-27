/* Bài 15 – Trang Web và trình duyệt Web (2): Thẻ trình duyệt (Spark 1 · Chủ đề 3)
   Nguồn: K3_B15_TrinhDuyetWeb(2)-TheTrinhDuyet.pptx (không có câu hỏi) + CauHoiBoSungB13-16.docx
   Docx thiếu hình biểu tượng ở các đáp án → bổ sung ký hiệu ＋ (thẻ mới) và ✕ (đóng thẻ).
   Câu hỏi “thẻ nằm ở vị trí nào trong hình” được vẽ lại bằng trình duyệt giả lập có đánh số 1–4. */
const tabsRow = '<span style="display:inline-flex;gap:6px;margin:6px 0">' + ['#ff7a59', '#2bb673', '#8b5cf6', '#f5a623'].map((c, i) => `<span style="background:${c};color:#fff;border-radius:12px 12px 0 0;padding:4px 16px;font-weight:800">Tab ${i + 1}</span>`).join('') + '</span>';
const KEYS = ['Ctrl+T', 'Ctrl+W', 'Ctrl+Tab'];
window.LESSON = {
  id: 'b15', no: 15, title: 'Thẻ trình duyệt (Tab)', emoji: '🗂️', color: '#f97316', color2: '#ffe9d6',
  secs: [
    { n: 'Thẻ là gì?', e: '🗂️' }, { n: 'Mở thẻ', e: '➕' }, { n: 'Đóng thẻ', e: '❌' }, { n: 'Chuyển thẻ', e: '🔀' }, { n: 'Ôn tập', e: '🏆' },
  ],
  steps: [
    { t: 'hero', sec: 0, goals: [['🗂️', 'Thẻ (Tab)'], ['➕', 'Mở thẻ mới'], ['❌', 'Đóng thẻ'], ['🔀', 'Chuyển giữa các thẻ']] },
    { t: 'learn', sec: 0, h: 'Thẻ trình duyệt (Tab)', lead: 'Em có thể mở <span class="mark">nhiều trang Web cùng lúc</span> trong một trình duyệt nhờ các thẻ.<br>' + tabsRow, cards: [
      { ic: '📄', t: 'Mỗi thẻ = một trang Web', d: 'Giống như các ngăn trong một chiếc tủ.', c: '#fff1d6' },
      { ic: '🐢', t: 'Lưu ý', d: 'Mở quá nhiều thẻ làm máy tính chạy chậm hơn.', c: '#ffe9e1' },
    ] },
    { t: 'q', sec: 0, ref: 'tabPos' },
    { t: 'learn', sec: 1, h: 'Mở thẻ mới', lead: 'Có <b>2 cách</b> để thêm thẻ trình duyệt mới:', cards: [
      { ic: '🖱️', t: 'Cách 1', d: 'Nhấp chuột trái vào dấu cộng <b>＋</b>', c: '#e4f8e9' },
      { ic: '⌨️', t: 'Cách 2', d: 'Nhấn tổ hợp phím <kbd>Ctrl</kbd> + <kbd>T</kbd>', c: '#e0efff' },
    ], after: '⚠️ Khi làm bài tập, em <b>nhấp chuột vào nút Ctrl trên màn hình</b> – không bấm phím thật nhé!' },
    { t: 'sim', sec: 1, h: 'Mở thẻ mới', spot: { tabs: ['truong-em.edu.vn'], keys: KEYS, view: 230 }, goals: [
      { text: 'Bấm dấu ＋ để mở một thẻ mới', ev: 'newtab', via: 'click' },
      { text: 'Nhấp nút Ctrl+T ở dưới trình duyệt để mở thêm thẻ', ev: 'newtab', via: 'key' },
    ] },
    { t: 'q', sec: 1, ref: 'open' },
    { t: 'learn', sec: 2, h: 'Đóng thẻ', lead: 'Cũng có <b>2 cách</b> để đóng một thẻ:', cards: [
      { ic: '🖱️', t: 'Cách 1', d: 'Nhấp chuột trái vào dấu <b>✕</b> trên thẻ', c: '#ffe9e1' },
      { ic: '⌨️', t: 'Cách 2', d: 'Nhấn tổ hợp phím <kbd>Ctrl</kbd> + <kbd>W</kbd>', c: '#e0efff' },
    ] },
    { t: 'sim', sec: 2, h: 'Đóng thẻ', spot: { tabs: ['hoctap.vn', 'daiduong.vn', 'thuvien.vn', 'netpc.vn'], keys: KEYS, view: 230 }, goals: [
      { text: 'Bấm dấu ✕ trên một thẻ để đóng nó', ev: 'closetab', via: 'click' },
      { text: 'Nhấp nút Ctrl+W ở dưới trình duyệt để đóng thẻ đang xem', ev: 'closetab', via: 'key' },
    ] },
    { t: 'q', sec: 2, ref: 'close' },
    { t: 'learn', sec: 3, h: 'Di chuyển giữa các thẻ', lead: 'Muốn sang thẻ khác:', cards: [
      { ic: '🖱️', t: 'Cách 1', d: 'Nhấp chuột vào thẻ muốn đến', c: '#e4f8e9' },
      { ic: '⌨️', t: 'Cách 2', d: 'Nhấn tổ hợp phím <kbd>Ctrl</kbd> + <kbd>Tab</kbd>', c: '#e0efff' },
    ] },
    { t: 'sim', sec: 3, h: 'Chuyển thẻ', spot: { tabs: ['hoctap.vn', 'daiduong.vn', 'thuvien.vn'], keys: KEYS, view: 230 }, goals: [
      { text: 'Nhấp chuột vào một thẻ khác', ev: 'switchtab', via: 'click' },
      { text: 'Nhấp nút Ctrl+Tab ở dưới trình duyệt để sang thẻ kế tiếp', ev: 'switchtab', via: 'key' },
    ] },
    { t: 'q', sec: 3, ref: 'move' },
    { t: 'q', sec: 3, extra: true, q: { q: 'Ghép phím tắt với việc làm.', m: [['Ctrl + T', 'Mở thẻ mới'], ['Ctrl + W', 'Đóng thẻ'], ['Ctrl + Tab', 'Chuyển sang thẻ kế tiếp']] } },
    { t: 'sim', sec: 3, extra: true, h: 'Thử thách tổng hợp', spot: { tabs: ['hoctap.vn'], keys: KEYS, view: 230 }, goals: [
      { text: 'Mở một thẻ mới', ev: 'newtab' },
      { text: 'Trong thẻ mới, gõ daiduong.vn rồi nhấn Enter', ev: 'navigate', url: 'daiduong.vn' },
      { text: 'Quay lại thẻ đầu tiên (hoctap.vn)', ev: 'switchtab' },
      { text: 'Đóng thẻ đang xem', ev: 'closetab' },
    ] },
    { t: 'q', sec: 3, ref: 'tf' },
    { t: 'review', sec: 4 },
  ],
  bank: {
    tabPos: { q: 'Em hãy cho biết, thẻ (Tab) trình duyệt nằm ở vị trí nào trong hình sau? (bấm vào đúng vị trí)', spot: { tabs: ['hoctap.vn', 'daiduong.vn'], badges: { winbtns: '1', tab: '2', address: '3', bookmarks: '4' }, view: 120 }, a: 'tab', why: 'Thẻ (Tab) là các ô nằm ngay phía trên thanh địa chỉ – vị trí số 2.' },
    open: { q: 'Em hãy cho biết, tùy chọn nào dưới đây dùng để tạo một thẻ (Tab) trình duyệt mới?', o: ['Sử dụng tổ hợp phím Ctrl + T', 'Nhấp chọn biểu tượng ＋ trên thẻ (Tab) trình duyệt', 'Nhấp chọn biểu tượng ✕ trên thẻ (Tab) trình duyệt', 'Sử dụng tổ hợp phím Ctrl + W'], a: [0, 1] },
    close: { q: 'Em hãy cho biết, tùy chọn nào sau đây dùng để đóng một thẻ (Tab) trình duyệt?', o: ['Sử dụng tổ hợp phím Ctrl + T', 'Nhấp chọn biểu tượng ＋ trên thẻ (Tab) trình duyệt', 'Nhấp chọn biểu tượng ✕ trên thẻ (Tab) trình duyệt', 'Sử dụng tổ hợp phím Ctrl + W'], a: [2, 3] },
    move: { q: 'Em hãy cho biết, tùy chọn nào sau đây là thao tác di chuyển giữa các thẻ (Tab) trình duyệt?', o: ['Sử dụng tổ hợp phím Ctrl + T', 'Nhấp chuột vào thẻ (Tab)', 'Sử dụng tổ hợp phím Ctrl + Tab', 'Sử dụng tổ hợp phím Ctrl + W'], a: [1, 2] },
    tf: { q: 'Em hãy chọn Đúng hoặc Sai với các phát biểu sau:', tf: [['Em có thể truy cập nhiều trang Web cùng một lúc với các thẻ (Tab) trình duyệt.', true], ['Mỗi trình duyệt Web chỉ có một thẻ (Tab) duy nhất.', false], ['Mở nhiều thẻ trên trình duyệt để truy cập các trang Web cùng một lúc sẽ làm cho máy tính của em hoạt động chậm hơn.', true]] },
  },
};
