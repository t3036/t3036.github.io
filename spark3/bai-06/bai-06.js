/* ============================================================
   0. THÔNG TIN BÀI HỌC
   ============================================================ */
const CONFIG = {
  icon:  '🌐',
  title: 'Bài 6 — Trình duyệt Web'
};

/* ============================================================
   1. DỮ LIỆU BÀI HỌC
   ============================================================ */
const slidesData = [
  {
    type: 'info',
    topic: 'Khởi động',
    title: 'Trình duyệt Web',
    content: 'Em thường dùng ứng dụng nào để mở một trang Web trên máy tính hoặc điện thoại?',
    imageUrl: null,
    things: [
      { icon: '🌍', name: 'Truy cập thông tin', en: 'Tìm kiếm kiến thức mỗi ngày' },
      { icon: '📱', name: 'Đa nền tảng', en: 'Dùng trên máy tính và thiết bị di động' }
    ],
    remember: 'Hôm nay chúng ta sẽ tìm hiểu Trình duyệt Web là gì, cách hoạt động và tính năng AI nhé!'
  },
  {
    type: 'info',
    topic: 'Phần 1 · Khái niệm',
    title: 'Trình duyệt Web là gì?',
    content: '<b>Trình duyệt Web (Web Browser)</b> là một loại phần mềm ứng dụng cho phép em tìm và xem các trang Web trên Internet.',
    imageUrl: null,
    things: [
      { icon: '🔵', name: 'Google Chrome', en: 'Trình duyệt của Google' },
      { icon: '🦊', name: 'Mozilla Firefox', en: 'Trình duyệt mã nguồn mở' },
      { icon: '🌊', name: 'Microsoft Edge', en: 'Trình duyệt của Microsoft' },
      { icon: '🧭', name: 'Apple Safari', en: 'Trình duyệt trên máy Mac/iPhone' }
    ],
    remember: 'Chức năng chính của trình duyệt là giúp em truy cập và hiển thị các trang Web.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Tùy chọn nào sau đây là đúng khi nói về trình duyệt Web?',
    options: [
      'Một loại phần mềm ứng dụng cho phép em tìm và xem các trang Web trên Internet',
      'Một loại phần mềm diệt Virus',
      'Một loại phần mềm chỉnh sửa hình ảnh',
      'Một loại phần mềm quản lí tài chính cá nhân'
    ],
    correctAnswer: 0,
    hint: 'Nhớ lại khái niệm ở trang trước, trình duyệt giúp em lướt web nhé.',
    explain: 'Trình duyệt Web là phần mềm để tìm và xem trang Web trên Internet.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Ứng dụng nào sau đây KHÔNG phải là một trình duyệt Web?',
    options: [
      'Google Chrome',
      'Mozilla Firefox',
      'Microsoft Word',
      'Safari'
    ],
    correctAnswer: 2,
    hint: 'Hãy tìm một phần mềm dùng để soạn thảo văn bản chứ không phải để lướt Web.',
    explain: 'Microsoft Word là phần mềm soạn thảo văn bản, không dùng để duyệt Web.'
  },
  {
    type: 'info',
    topic: 'Phần 2 · Hoạt động',
    title: 'Cách trình duyệt hoạt động',
    content: 'Để mở một trang Web, quá trình diễn ra qua 3 bước chính:',
    imageUrl: null,
    things: [
      { icon: '🔗', name: '1. Gửi yêu cầu', en: 'Nhập URL, trình duyệt gửi yêu cầu đến Máy chủ' },
      { icon: '🏢', name: '2. Máy chủ phản hồi', en: 'Máy chủ Web gửi dữ liệu trang Web về máy tính' },
      { icon: '🖥️', name: '3. Hiển thị', en: 'Trình duyệt nhận và hiển thị nội dung cho em xem' }
    ],
    remember: 'Hệ thống DNS sẽ giúp phân giải URL thành địa chỉ IP để thiết lập kết nối đến Máy chủ Web.'
  },
  {
    type: 'quiz_dropdown',
    topic: 'Luyện tập',
    question: 'Hãy mô tả các bước lấy thông tin trực tuyến: Kết nối được thiết lập đến ___. ___ được gửi đến máy tính của người dùng. Sau đó, ___ hiển thị trang Web.',
    blanks: [
      { options: ['Máy chủ Web (Web Server)', 'Trang (Webpage)', 'Địa chỉ IP'], correctAnswer: 0 },
      { options: ['Máy chủ Web', 'Trang (Webpage)', 'Trình duyệt Web'], correctAnswer: 1 },
      { options: ['Máy chủ Web', 'Trình duyệt Web (Web Browser)', 'Địa chỉ IP'], correctAnswer: 1 }
    ],
    hint: 'Mạng lưới kết nối đến nơi lưu trữ (Máy chủ), tải dữ liệu (Trang web) và dùng phần mềm để xem (Trình duyệt).',
    explain: 'Tuyệt vời! Máy chủ lưu trữ Web, Trang Web là dữ liệu được tải về, và Trình duyệt là phần mềm hiển thị nó.'
  },
  {
    type: 'quiz_multiple',
    topic: 'Luyện tập',
    question: 'Những bước nào liên quan đến việc lấy thông tin trực tuyến (BẮT BUỘC có)?',
    options: [
      'Nhập URL',
      'Khởi động lại thiết bị',
      'Thông tin từ máy chủ trả về và hiển thị trên trình duyệt',
      'URL phân giải thành địa chỉ IP'
    ],
    correctAnswers: [0, 2, 3],
    hint: 'Có 1 bước em không cần thiết phải làm mỗi khi muốn xem Web (như khởi động lại máy).',
    explain: 'Chính xác! Khởi động lại thiết bị không phải là một bước để mở trang Web.'
  },
  {
    type: 'info',
    topic: 'Phần 3 · Tính năng AI',
    title: 'AI trên trình duyệt Web',
    content: 'Hiện nay, các trình duyệt tích hợp sẵn trợ lý AI (như Copilot, Gemini) để hỗ trợ em:',
    imageUrl: null,
    things: [
      { icon: '📝', name: 'Tóm tắt nội dung', en: 'Hiểu nhanh ý chính trang Web' },
      { icon: '❓', name: 'Trả lời câu hỏi', en: 'Hỏi đáp trực tiếp về nội dung đang đọc' },
      { icon: '✍️', name: 'Hỗ trợ viết', en: 'Giúp diễn đạt ngắn gọn, gợi ý tìm kiếm' }
    ],
    remember: '<b>Lưu ý:</b> Luôn đọc lại nội dung gốc, kiểm tra thông tin với nguồn đáng tin cậy và <b>KHÔNG</b> nhập thông tin riêng tư vào khung chat.'
  },
  {
    type: 'info',
    final: true,
    topic: 'Hoàn thành',
    title: 'Chúc mừng em đã hoàn thành Bài 6!',
    content: 'Em đã nắm vững Trình duyệt Web là gì, phân biệt được với các phần mềm khác, hiểu quy trình tải một trang Web từ máy chủ và biết cách sử dụng AI an toàn trên trình duyệt.',
    imageUrl: null,
    remember: 'Nhiệm vụ: Em hãy mở máy tính ở nhà và xem gia đình mình đang dùng trình duyệt Web nào nhé!'
  }
];