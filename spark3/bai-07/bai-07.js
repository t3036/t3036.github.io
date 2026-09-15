/* ============================================================
   0. THÔNG TIN BÀI HỌC
   ============================================================ */
const CONFIG = {
  icon:  '⚙️',
  title: 'Bài 7 — Các tính năng trên trình duyệt Web'
};

/* ============================================================
   1. DỮ LIỆU BÀI HỌC
   ============================================================ */
const slidesData = [
  {
    type: 'info',
    topic: 'Khởi động',
    title: 'An toàn khi lướt Web',
    content: 'Khi dùng trình duyệt Web, em có từng thắc mắc: Chế độ duyệt Web riêng tư (ẩn danh) có giúp em an toàn tuyệt đối không?',
    imageUrl: null,
    things: [
      { icon: '🕵️', name: 'Ẩn danh', en: 'Duyệt web riêng tư' },
      { icon: '🍪', name: 'Cookies', en: 'Dữ liệu trang web' }
    ],
    remember: 'Hôm nay chúng ta sẽ tìm hiểu các nút lệnh phổ biến, chế độ duyệt web riêng tư và cách dùng AI an toàn nhé!'
  },
  {
    type: 'info',
    topic: 'Phần 1 · Các tính năng phổ biến',
    title: 'Công cụ điều hướng',
    content: 'Trình duyệt Web cung cấp các nút lệnh giúp em duyệt web dễ dàng hơn:',
    imageUrl: null,
    things: [
      { icon: '⬅️', name: 'Back & Forward', en: 'Quay lại / Đi tới trang tiếp theo' },
      { icon: '🔄', name: 'Reload (Refresh)', en: 'Tải lại trang hiện tại' },
      { icon: '🏠', name: 'Home', en: 'Quay về trang chủ' },
      { icon: '➕', name: 'New tab', en: 'Mở thẻ (tab) mới' }
    ],
    remember: 'Thanh địa chỉ dùng để nhập trực tiếp URL (ví dụ: www.google.com). Thanh tìm kiếm dùng để nhập từ khóa em muốn tìm.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Nút lệnh nào sau đây của trình duyệt Web cho phép em mở nhiều trang Web cùng một lúc mà không cần phải mở nhiều cửa sổ?',
    options: [
      'Nút lệnh Home',
      'Nút lệnh Back',
      'Nút lệnh Forward',
      'Nút lệnh New tab'
    ],
    correctAnswer: 3,
    hint: 'Nút này có biểu tượng dấu cộng (+) nằm phía trên cùng của trình duyệt.',
    explain: 'Nút New tab (Thẻ mới) giúp em mở thêm nhiều trang web trên cùng một cửa sổ.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Tên nút lệnh nào sau đây trên các trình duyệt Web cho phép người dùng tải lại trang Web hiện tại?',
    options: [
      'Nút lệnh Reload this page',
      'Nút lệnh Refresh',
      'Nút lệnh Reload current page',
      'Tất cả các nút lệnh trên'
    ],
    correctAnswer: 3,
    hint: 'Tùy thuộc vào loại trình duyệt (Chrome, Edge, Firefox...), tính năng này có thể có tên gọi khác nhau nhưng chung một chức năng.',
    explain: 'Cả 3 tên gọi trên đều đúng và đều có tác dụng tải lại (làm mới) trang web hiện tại.'
  },
  {
    type: 'info',
    topic: 'Phần 2 · Duyệt Web riêng tư',
    title: 'Chế độ riêng tư & Cookies',
    content: '<b>Chế độ duyệt Web riêng tư (Incognito/InPrivate)</b> giúp em không ghi lại lịch sử duyệt web. Trình duyệt sẽ không lưu Cookie hay thông tin biểu mẫu.',
    imageUrl: null,
    things: [
      { icon: '🍪', name: 'Cookies', en: 'Các bit dữ liệu nhỏ theo dõi hoạt động Web' },
      { icon: '🚫', name: 'Không lưu', en: 'Lịch sử Web, Cookies sau khi đóng' },
      { icon: '✅', name: 'Vẫn lưu', en: 'Các tệp tải xuống và Dấu trang (Bookmark)' }
    ],
    remember: 'Phím tắt mở chế độ riêng tư trên Chrome/Edge là: <b>Ctrl + Shift + N</b>.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Tùy chọn nào sau đây là ĐÚNG khi nói về chế độ duyệt Web riêng tư?',
    options: [
      'Bảo vệ máy tính khỏi phần mềm độc hại.',
      'Che giấu mọi hoạt động của em với những người sử dụng khác trên cùng máy tính.',
      'Tăng tốc độ duyệt Web.',
      'Cho phép truy cập vào các trang Web bị chặn.'
    ],
    correctAnswer: 1,
    hint: 'Nhà trường hay nhà cung cấp mạng vẫn có thể thấy em truy cập gì, nó chỉ giấu với người dùng chung thiết bị thôi.',
    explain: 'Chế độ riêng tư không lưu lịch sử, nên người dùng máy tính chung với em sẽ không thấy em đã xem gì.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Thuật ngữ nào chỉ các bit dữ liệu nhỏ được thu thập bởi trang Web mà em truy cập?',
    options: [
      'Cookies',
      'Dữ kiện',
      'Bảng tính',
      'Tấn công xâm nhập (Hacking)'
    ],
    correctAnswer: 0,
    hint: 'Từ này giống tên một loại bánh quy.',
    explain: 'Cookies là những tập tin nhỏ được lưu trên máy tính để theo dõi các hoạt động trên Web của em.'
  },
  {
    type: 'info',
    topic: 'Phần 3 · Công cụ AI',
    title: 'Chế độ trò chuyện AI tạm thời',
    content: 'Một số công cụ AI (như ChatGPT, Gemini) có <b>Chế độ trò chuyện tạm thời (Temporary Chat)</b> giúp không lưu lịch sử phiên làm việc.',
    imageUrl: null,
    things: [
      { icon: '✔️', name: 'Nên làm', en: 'Học hỏi, tìm hiểu, ôn tập và sáng tạo' },
      { icon: '❌', name: 'Không nên', en: 'Nhập thông tin cá nhân (Mật khẩu, địa chỉ)' }
    ],
    remember: 'Tuyệt đối <b>KHÔNG</b> truy cập nội dung độc hại, bạo lực hay nhập dữ liệu nhạy cảm vào các công cụ AI, kể cả khi dùng chế độ tạm thời!'
  },
  {
    type: 'info',
    final: true,
    topic: 'Hoàn thành',
    title: 'Chúc mừng em đã học xong Bài 7!',
    content: 'Em đã biết cách sử dụng các nút điều hướng (Back, Forward, Reload...), hiểu được Cookies là gì, tác dụng thực sự của Tab ẩn danh (Duyệt web riêng tư) và nguyên tắc an toàn khi dùng công cụ AI.',
    imageUrl: null,
    remember: 'Hãy thử áp dụng những kiến thức này để duyệt web thông minh và an toàn hơn mỗi ngày nhé!'
  }
];