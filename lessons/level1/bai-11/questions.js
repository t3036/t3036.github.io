/* ============================================================
   BỘ CÂU HỎI — Level 1 · Bài 11: Các trình duyệt Web phổ biến và quản lí dấu trang
   Dùng chung cho bài học (lesson.js) và ôn tập (review.html).

   Nguồn: tmp/K6_B11_TrinhDuyetWebVaDauTrang.pptx
   • Nhóm "GỐC": 5 câu vận dụng trong file (slide 9, 17–19, 27; phần ôn tập
     cuối file lặp lại đúng 5 câu này nên đã gộp). Đề và phương án GIỮ NGUYÊN.
     File gốc không ghi sẵn đáp án (hiện bằng hiệu ứng), đã đối chiếu nội dung:
       – matchLogo    : Chrome / Opera / Safari / Firefox / Edge theo biểu tượng
       – saveList     : Mục yêu thích hoặc Dấu trang (A)
       – chromeMark   : Bookmark (C)
       – bookmarkFn   : Điều hướng nhanh đến các trang Web thường truy cập (D)
       – toolMatch    : Hộp địa chỉ – Nút quay lại – Lịch sử – Nút làm mới
   • Nhóm "BỔ SUNG": nội dung có trong slide nhưng chưa có câu vận dụng
     (nhà phát triển, độc quyền / mã nguồn mở, các nút điều hướng, các bước
     thêm – xóa dấu trang, dấu trang an toàn khi dùng AI, phím tắt Lịch sử).

   Lưu ý khi đối chiếu slide:
   – Slide 4, 5 ghi Chrome / Edge "mã nguồn mở". Thực tế cả hai được xây trên
     nền Chromium (mã nguồn mở) nhưng bản Chrome, Edge là sản phẩm của Google,
     Microsoft. Bài học nói rõ "dựa trên nền Chromium mã nguồn mở" và không
     đặt câu hỏi phụ thuộc vào chi tiết này.
   – Slide 12 ghi Forward "chuyển đến trang trước đã truy cập" dễ gây hiểu
     nhầm; bài học diễn đạt: đi tiếp tới trang em vừa quay lại từ đó.
   ============================================================ */

const QUIZ = {

  /* ===================== GỐC ===================== */
  matchLogo: {
    type: 'match', src: 'goc', topic: 'Trình duyệt phổ biến',
    question: 'Ghép nối từng tên trình duyệt Web ở bên phải với biểu tượng tương ứng ở bên trái.',
    pairs: [
      { leftImg: 'img/chrome.png', leftAlt: 'Biểu tượng hình tròn đỏ, vàng, xanh lá với tâm xanh dương', right: 'Google Chrome' },
      { leftImg: 'img/opera.png', leftAlt: 'Biểu tượng chữ O màu đỏ', right: 'Opera' },
      { leftImg: 'img/safari.png', leftAlt: 'Biểu tượng la bàn màu xanh dương', right: 'Safari' },
      { leftImg: 'img/firefox.png', leftAlt: 'Biểu tượng con cáo lửa quấn quanh quả cầu', right: 'Firefox' },
      { leftImg: 'img/edge.png', leftAlt: 'Biểu tượng làn sóng xanh dương và xanh lá', right: 'Microsoft Edge' }
    ],
    hint: 'Chrome có ba màu đỏ – vàng – xanh lá; Safari là chiếc la bàn; Firefox là con cáo; Opera là chữ O đỏ; Edge là làn sóng xanh.',
    explain: 'Chrome (tròn nhiều màu), Opera (chữ O đỏ), Safari (la bàn), Firefox (cáo lửa), Microsoft Edge (làn sóng xanh).'
  },
  saveList: {
    type: 'single', src: 'goc', topic: 'Dấu trang',
    question: 'Bạn cần lưu danh sách các trang Web để có thể dễ dàng quay trở lại vào lần sau. Bạn nên sử dụng tính năng nào của trình duyệt Web?',
    options: ['Mục yêu thích hoặc Dấu trang', 'Duyệt đa trang một lúc', 'Lịch sử hoặc Dòng thời gian', 'Hộp địa chỉ'],
    answer: 0,
    hint: 'Tính năng giúp lưu các trang Web để dễ quay lại, tên tiếng Anh là Bookmarks / Favorites.',
    explain: 'Dấu trang (Bookmarks / Favorites) giúp lưu các trang Web để dễ dàng quay lại vào lần sau.'
  },
  chromeMark: {
    type: 'single', src: 'goc', topic: 'Dấu trang',
    question: 'Em hãy cho biết, tính năng nào sau đây dùng để đánh dấu một trang Web trên trình duyệt Google Chrome?',
    options: ['Favorite', 'New tab', 'Bookmark', 'History'],
    answer: 2,
    hint: 'Trên Chrome, biểu tượng ngôi sao ☆ ở thanh địa chỉ dùng để làm việc này.',
    explain: 'Trên Google Chrome, tính năng đánh dấu trang Web là Bookmark (Favorite là cách gọi trên một số trình duyệt khác như Edge).'
  },
  bookmarkFn: {
    type: 'single', src: 'goc', topic: 'Dấu trang',
    question: 'Em hãy cho biết, tùy chọn nào dưới đây là đúng khi nói về chức năng của Bookmark?',
    options: [
      'Cho phép tải thông tin nhanh chóng bằng cách lưu trữ dữ liệu trang Web trên máy tính',
      'Lưu trữ thông tin về những trang Web đã được truy cập gần đây',
      'Tùy chỉnh cá nhân hóa cho giao diện của trình duyệt',
      'Điều hướng một cách nhanh chóng đến các trang Web mà em muốn truy cập thường xuyên',
      'Tải lại nội dung mới nhất của trang Web'
    ],
    answer: 3,
    hint: 'Dấu trang là danh sách các trang em chủ động lưu để quay lại dễ dàng.',
    explain: 'Bookmark giúp điều hướng nhanh đến các trang Web em muốn truy cập thường xuyên. Lưu thông tin trang đã xem gần đây là Lịch sử; tải lại nội dung mới nhất là Refresh.'
  },
  toolMatch: {
    type: 'match', src: 'goc', topic: 'Công cụ trình duyệt',
    question: 'Bạn cần xác định mục đích của các công cụ trình duyệt Web phổ biến. Để trả lời, hãy ghép từng công cụ với hành động tương ứng.',
    pairs: [
      { left: 'Hiển thị URL của trang Web hiện tại', right: 'Hộp địa chỉ (Address box)' },
      { left: 'Hiển thị lại một trang Web đã truy cập trước đó', right: 'Nút quay lại (Back button)' },
      { left: 'Liệt kê các trang Web bạn đã truy cập gần đây', right: 'Lịch sử (History)' },
      { left: 'Tải lại trang Web hiện tại', right: 'Nút làm mới (Refresh button)' }
    ],
    hint: 'Hộp địa chỉ có URL; Back là quay lại; History là danh sách đã xem; Refresh là tải lại.',
    explain: 'Hộp địa chỉ hiển thị URL; nút Back hiển thị lại trang vừa xem; Lịch sử liệt kê các trang đã truy cập gần đây; nút Refresh tải lại trang hiện tại.'
  },

  /* ===================== BỔ SUNG ===================== */
  devMatch: {
    type: 'match', src: 'bosung', topic: 'Trình duyệt phổ biến',
    question: 'Ghép mỗi trình duyệt với đơn vị đã phát triển ra nó.',
    pairs: [
      { left: 'Google Chrome', right: 'Google' },
      { left: 'Microsoft Edge', right: 'Microsoft' },
      { left: 'Safari', right: 'Apple' },
      { left: 'Firefox', right: 'Mozilla' },
      { left: 'Opera', right: 'Opera Software' }
    ],
    hint: 'Tên một số trình duyệt gợi ý luôn tên công ty.',
    explain: 'Chrome – Google; Edge – Microsoft; Safari – Apple; Firefox – Mozilla; Opera – công ty Opera Software.'
  },
  browserFacts: {
    type: 'tf', src: 'bosung', topic: 'Trình duyệt phổ biến',
    question: 'Chọn Đúng hoặc Sai cho mỗi phát biểu về các trình duyệt Web.',
    statements: [
      { text: 'Safari là trình duyệt độc quyền do Apple phát triển', answer: true },
      { text: 'Mozilla Firefox là trình duyệt mã nguồn mở do Mozilla phát triển', answer: true },
      { text: 'Microsoft Edge do Google phát triển', answer: false, why: 'Edge do Microsoft phát triển; Google phát triển Chrome.' },
      { text: 'Opera là trình duyệt Web miễn phí', answer: true }
    ],
    hint: 'Nhớ lại: ai phát triển trình duyệt nào, và trình duyệt nào miễn phí hay mã nguồn mở.',
    explain: 'Safari (Apple, độc quyền), Firefox (Mozilla, mã nguồn mở), Opera (miễn phí, Opera Software). Edge là của Microsoft.'
  },
  navIconMatch: {
    type: 'match', src: 'bosung', topic: 'Điều hướng',
    question: 'Ghép mỗi nút điều hướng của trình duyệt với chức năng của nó.',
    pairs: [
      { sym: '←', left: 'Back', right: 'Quay lại trang vừa xem trước đó' },
      { sym: '→', left: 'Forward', right: 'Đi tiếp tới trang em vừa quay lại từ đó' },
      { sym: '✕', left: 'Stop', right: 'Ngừng tải một trang Web' },
      { sym: '⌂', left: 'Home', right: 'Chuyển tới trang chủ' }
    ],
    hint: 'Mũi tên trái là lùi, mũi tên phải là tiến, dấu X là dừng, ngôi nhà là trang chủ.',
    explain: 'Back quay lại trang vừa xem; Forward đi tiếp; Stop ngừng tải trang; Home về trang chủ.'
  },
  forwardWhen: {
    type: 'single', src: 'bosung', topic: 'Điều hướng',
    question: 'Em vừa bấm Back để quay lại trang trước. Muốn trở lại trang vừa rời đi, em bấm nút nào?',
    options: ['Forward', 'Home', 'Stop', 'Refresh'],
    answer: 0,
    hint: 'Nút này chỉ sáng lên sau khi em đã bấm Back.',
    explain: 'Nút Forward (→) đưa em đi tiếp tới trang em vừa quay lại từ đó.'
  },
  slowPage: {
    type: 'single', src: 'bosung', topic: 'Điều hướng',
    question: 'Một trang Web tải rất lâu và em muốn ngừng tải. Em bấm nút nào?',
    options: ['Stop', 'Home', 'Forward', 'Bookmark'],
    answer: 0,
    hint: 'Khi trang đang tải, nút Refresh sẽ biến thành dấu ✕.',
    explain: 'Nút Stop cho phép ngừng tải một trang Web.'
  },
  addSteps: {
    type: 'single', src: 'bosung', topic: 'Dấu trang',
    question: 'Em muốn thêm dấu trang cho trang Web đang xem. Thứ tự các bước nào là đúng?',
    options: [
      'Nhấp vào biểu tượng ngôi sao → Đặt tên cho dấu trang → Chọn “Done”',
      'Đặt tên cho dấu trang → Chọn “Done” → Nhấp vào biểu tượng ngôi sao',
      'Chọn “Done” → Nhấp vào biểu tượng ngôi sao → Đặt tên cho dấu trang',
      'Nhấp phải vào dấu trang → Chọn Delete → Chọn “Done”'
    ],
    answer: 0,
    hint: 'B1: nhấp ngôi sao. B2: đặt tên. B3: Done.',
    explain: 'Thêm dấu trang: B1 nhấp vào ngôi sao ☆; B2 đặt tên cho dấu trang; B3 chọn “Done”.'
  },
  delSteps: {
    type: 'single', src: 'bosung', topic: 'Dấu trang',
    question: 'Để xóa một dấu trang, em làm thế nào?',
    options: ['Nhấp phải vào dấu trang rồi chọn Delete', 'Nhấp vào nút Home', 'Bấm tổ hợp phím Ctrl + H', 'Nhấp vào nút Stop'],
    answer: 0,
    hint: 'Hai bước: nhấp chuột phải, rồi chọn lệnh xóa.',
    explain: 'Xóa dấu trang: B1 nhấp phải vào dấu trang; B2 chọn Delete.'
  },
  aiBookmark: {
    type: 'multi', src: 'bosung', topic: 'Dấu trang an toàn',
    question: 'Khi dùng AI, dấu trang giúp tránh gõ sai địa chỉ hoặc vào nhầm trang giả mạo. Học sinh KHÔNG nên tự lưu những trang nào? (Chọn 3)',
    options: [
      'Trang AI lạ',
      'Trang quảng cáo',
      'Trang yêu cầu thông tin cá nhân không rõ mục đích',
      'Trang AI tin cậy do thầy cô hướng dẫn',
      'Trang thư viện của trường'
    ],
    answer: [0, 1, 2],
    hint: 'Ba loại trang đáng ngờ: lạ, quảng cáo, và đòi thông tin cá nhân.',
    explain: 'Học sinh không nên tự lưu các trang AI lạ, trang quảng cáo hoặc trang yêu cầu thông tin cá nhân không rõ mục đích. Chỉ lưu các trang đáng tin cậy.'
  },
  historyKey: {
    type: 'single', src: 'bosung', topic: 'Lịch sử duyệt Web',
    question: 'Em có thể mở Lịch sử duyệt Web (History) bằng tổ hợp phím tắt nào?',
    options: ['Ctrl + H', 'Ctrl + P', 'Ctrl + S', 'Ctrl + C'],
    answer: 0,
    hint: 'H là chữ cái đầu của History.',
    explain: 'Bấm Ctrl + H, hoặc nhấp vào ba chấm ⋮ rồi chọn History.'
  },
  historyVsBookmark: {
    type: 'single', src: 'bosung', topic: 'Lịch sử duyệt Web',
    question: 'Hôm qua em xem một trang Web rất hay nhưng quên không lưu lại. Hôm nay em có thể tìm lại trang đó ở đâu?',
    options: ['Lịch sử duyệt Web (History)', 'Nút Stop', 'Nút Home', 'Nút Forward'],
    answer: 0,
    hint: 'Danh sách các trang Web em đã truy cập, có cả ngày và giờ.',
    explain: 'Lịch sử duyệt Web là danh sách các trang em đã truy cập, kèm ngày và khung giờ. Còn dấu trang chỉ có khi em chủ động lưu.'
  }
};

/* Ôn tập: chỉ gồm 5 câu gốc trong file pptx (các câu bổ sung chỉ dùng trong bài học) */
const REVIEW_KEYS = [
  'matchLogo', 'saveList', 'chromeMark', 'bookmarkFn', 'toolMatch'
];
