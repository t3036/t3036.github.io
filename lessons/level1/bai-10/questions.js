/* ============================================================
   BỘ CÂU HỎI — Level 1 · Bài 10: Làm quen với trình duyệt Web
   Dùng chung cho bài học (lesson.js) và ôn tập (review.html).

   Nguồn: tmp/K6_B10_TrinhDuyetWeb.pptx
   • Nhóm "GỐC": 5 câu vận dụng trong file (slide 5–7, 11–12; phần ôn tập cuối
     file lặp lại đúng 5 câu này nên đã gộp). Đề và phương án GIỮ NGUYÊN.
     File gốc không ghi sẵn đáp án (đáp án hiện bằng hiệu ứng), đã đối chiếu
     với nội dung bài học:
       – needBrowser  : cần dùng Trình duyệt Web (C)
       – notBrowser   : OneNote (ứng dụng ghi chú) và Rover (không phải trình duyệt)
       – tfBasic      : Sai – Sai – Đúng – Đúng
       – urlWhat      : Địa chỉ của một trang Web (B)
       – wwwSystem    : WWW (A)
   • Nhóm "BỔ SUNG": file gốc có nội dung nhưng chưa có câu vận dụng
     (thanh địa chỉ, thẻ, nút điều khiển cửa sổ, siêu liên kết, AI chạy trên
     trình duyệt, kiểm tra liên kết an toàn) nên thêm câu mới bám sát slide.
   ============================================================ */

const QUIZ = {

  /* ===================== GỐC ===================== */
  needBrowser: {
    type: 'single', src: 'goc', topic: 'Trình duyệt Web',
    question: 'Em hãy cho biết, để truy cập đến một trang Web người dùng cần phải sử dụng tùy chọn nào dưới đây?',
    options: ['WWW', 'HTTP', 'Trình duyệt Web (Web Browser)', 'Công cụ tìm kiếm (Search Engine)'],
    answer: 2,
    hint: 'Hãy nhớ lại: phần mềm nào cho phép truy cập, xem và điều hướng các trang Web?',
    explain: 'Trình duyệt Web (Web Browser) là phần mềm ứng dụng cho phép người dùng truy cập, xem và điều hướng các trang Web trên Internet.'
  },
  notBrowser: {
    type: 'multi', src: 'goc', topic: 'Trình duyệt Web',
    question: 'Em hãy cho biết, các tùy chọn nào dưới đây không phải là trình duyệt Web? (Chọn 2)',
    options: ['Microsoft Edge', 'Google Chrome', 'OneNote', 'Rover', 'Mozilla Firefox'],
    answer: [2, 3],
    hint: 'Edge, Chrome, Firefox là các trình duyệt quen thuộc. Còn hai tên kia thì sao?',
    explain: 'OneNote là ứng dụng ghi chú và Rover không phải là trình duyệt Web. Microsoft Edge, Google Chrome và Mozilla Firefox đều là trình duyệt Web.'
  },
  tfBasic: {
    type: 'tf', src: 'goc', topic: 'Trình duyệt Web',
    question: 'Đối với mỗi câu liên quan đến các chức năng cơ bản của trình duyệt Web, hãy chọn Đúng hoặc Sai cho mỗi phát biểu dưới đây.',
    statements: [
      { text: 'Trình duyệt Web là Internet', answer: false, why: 'Internet là mạng toàn cầu; trình duyệt chỉ là phần mềm để vào xem các trang Web.' },
      { text: 'Trình duyệt Web là công cụ tìm kiếm', answer: false, why: 'Công cụ tìm kiếm là một trang Web giúp tìm thông tin; em mở nó bằng trình duyệt.' },
      { text: 'Trình duyệt Web là các ứng dụng phần mềm nhận và trình bày thông tin từ World Wide Web', answer: true },
      { text: 'Trình duyệt Web sử dụng URL để kết nối các tài nguyên như trang Web, Hình Ảnh và Video', answer: true }
    ],
    hint: 'Trình duyệt là một phần mềm. Nó không phải là cả mạng Internet và cũng không phải công cụ tìm kiếm.',
    explain: 'Trình duyệt Web là phần mềm nhận và hiển thị thông tin từ World Wide Web, dùng URL để tìm đến trang Web, hình ảnh, video. Nó không phải là Internet và không phải là công cụ tìm kiếm.'
  },
  urlWhat: {
    type: 'single', src: 'goc', topic: 'Thanh địa chỉ & URL',
    question: 'Em hãy cho biết, URL là gì?',
    options: [
      'Hệ thống gắn thẻ các tập tin văn bản để thêm hiệu ứng cho các trang Web',
      'Địa chỉ của một trang Web',
      'Một bảng kiểu xếp tầng',
      'Một loại trình duyệt Web'
    ],
    answer: 1,
    hint: 'Em gõ URL vào Thanh địa chỉ để đến đúng trang Web, giống như viết địa chỉ nhà.',
    explain: 'URL là địa chỉ của một trang Web. Thanh địa chỉ hiển thị URL của trang Web em đang duyệt.'
  },
  wwwSystem: {
    type: 'single', src: 'goc', topic: 'Thanh địa chỉ & URL',
    question: 'Em hãy cho biết, hệ thống nào cho phép truy cập thông tin trên Internet?',
    options: ['WWW', 'Webpage', 'Hyperlink', 'Hypertext'],
    answer: 0,
    hint: 'Viết tắt của World Wide Web.',
    explain: 'WWW (World Wide Web) là hệ thống cho phép truy cập thông tin trên Internet. Trình duyệt Web là phần mềm giúp em vào xem thông tin ấy.'
  },

  /* ===================== BỔ SUNG ===================== */
  whereUrl: {
    type: 'single', src: 'bosung', topic: 'Thanh địa chỉ & URL',
    question: 'Để truy cập vào một trang Web, em chỉ cần nhập địa chỉ trang Web (URL) vào vị trí nào trên trình duyệt Web?',
    options: ['Thanh địa chỉ (Address Bar)', 'Thẻ trình duyệt (Tab)', 'Nút Close', 'Thanh tác vụ'],
    answer: 0,
    hint: 'Nơi hiển thị URL của trang Web em đang duyệt.',
    explain: 'Em nhập URL vào Thanh địa chỉ (Address Bar). Đây cũng là nơi hiển thị URL của trang Web em đang duyệt.'
  },
  tabWhat: {
    type: 'single', src: 'bosung', topic: 'Thẻ & nút điều khiển',
    question: 'Khi em khởi động một trình duyệt, trang Web hiện ra để em tìm kiếm thông tin được gọi là gì?',
    options: ['Thẻ trình duyệt (Tab)', 'Thanh địa chỉ (Address Bar)', 'Siêu liên kết (Hyperlink)', 'Công cụ tìm kiếm (Search Engine)'],
    answer: 0,
    hint: 'Nó nằm ở hàng trên cùng của cửa sổ trình duyệt, hiển thị tên trang.',
    explain: 'Trang Web xuất hiện khi mở trình duyệt được gọi là thẻ trình duyệt (Tab).'
  },
  ctrlMatch: {
    type: 'match', src: 'bosung', topic: 'Thẻ & nút điều khiển',
    question: 'Ghép mỗi nút điều khiển ở góc trên bên phải cửa sổ trình duyệt với chức năng của nó.',
    pairs: [
      { sym: '—', left: 'Minimize', right: 'Tạm thời đóng cửa sổ, thay thế nó như một nút trên thanh tác vụ' },
      { sym: '☐', left: 'Maximize', right: 'Hiển thị toàn màn hình cửa sổ' },
      { sym: '❐', left: 'Restore Down', right: 'Khôi phục cửa sổ với kích thước trước khi nó được tối đa' },
      { sym: '✕', left: 'Close', right: 'Đóng cửa sổ' }
    ],
    hint: 'Nhìn biểu tượng: gạch ngang là thu nhỏ, ô vuông là phóng to, hai ô chồng nhau là khôi phục, dấu X là đóng.',
    explain: 'Minimize thu cửa sổ xuống thanh tác vụ; Maximize phóng to toàn màn hình; Restore Down trả về kích thước cũ; Close đóng cửa sổ.'
  },
  linkWhat: {
    type: 'single', src: 'bosung', topic: 'Siêu liên kết',
    question: 'Siêu liên kết (Hyperlink) là gì?',
    options: [
      'Những dòng văn bản có màu sắc khác hoặc được gạch dưới, khi bấm vào sẽ chuyển sang một trang mới',
      'Phần mềm dùng để xem các trang Web',
      'Địa chỉ của một trang Web',
      'Công cụ dùng để tìm kiếm thông tin trên Internet'
    ],
    answer: 0,
    hint: 'Khi rê chuột vào, con trỏ biến thành hình bàn tay.',
    explain: 'Siêu liên kết là những dòng văn bản có màu sắc khác hoặc được gạch dưới; bấm vào sẽ chuyển hướng sang một trang mới.'
  },
  aiBrowser: {
    type: 'single', src: 'bosung', topic: 'AI trên trình duyệt',
    question: 'Nhiều công cụ AI hiện nay hoạt động trên trình duyệt. Điều đó có nghĩa là gì?',
    options: [
      'Người dùng không cần cài đặt phần mềm mà có thể truy cập qua địa chỉ Web',
      'Người dùng bắt buộc phải cài đặt phần mềm riêng cho từng công cụ AI',
      'Công cụ AI chỉ chạy được khi không có Internet',
      'Công cụ AI thay thế hoàn toàn trình duyệt Web'
    ],
    answer: 0,
    hint: 'Chỉ cần mở trình duyệt và gõ địa chỉ Web.',
    explain: 'Nhiều công cụ AI chạy ngay trên trình duyệt nên người dùng không cần cài đặt phần mềm, chỉ cần truy cập qua địa chỉ Web.'
  },
  safeLink: {
    type: 'multi', src: 'bosung', topic: 'Liên kết an toàn',
    question: 'AI có thể gợi ý liên kết, nhưng không phải liên kết nào cũng an toàn. Trước khi mở một liên kết, em nên làm những việc nào? (Chọn 4)',
    options: [
      'Xem tên miền của liên kết',
      'Xem mục đích của trang (học tập hay quảng cáo / lừa đảo)',
      'Xem nguồn gửi (AI gửi hay người lạ gửi)',
      'Mở ngay vì AI đã gợi ý thì luôn đúng',
      'Nhập thông tin cá nhân nếu trang yêu cầu',
      'Hỏi giáo viên khi chưa chắc chắn'
    ],
    answer: [0, 1, 2, 5],
    hint: 'Có 3 bước kiểm tra và 1 việc cần làm khi vẫn còn băn khoăn.',
    explain: 'Trước khi mở liên kết: (1) xem tên miền, (2) xem mục đích, (3) xem nguồn gửi, và hỏi giáo viên khi chưa chắc chắn. AI có thể gợi ý sai, và không bao giờ nhập thông tin cá nhân vào trang lạ.'
  },
  domainSort: {
    type: 'tf', src: 'bosung', topic: 'Liên kết an toàn',
    question: 'Em là "cảnh sát tên miền". Với mỗi liên kết dưới đây, hãy chọn cách xử lý phù hợp.',
    sub: 'Gợi ý: .edu, .gov là tên miền đáng tin cậy; .com lạ hoặc đuôi lạ thì cần kiểm tra.',
    labels: ['Tin cậy', 'Cần kiểm tra'],
    statements: [
      { text: 'thuvien.edu.vn', answer: true, why: 'Đuôi .edu là của tổ chức giáo dục, mục đích học tập.' },
      { text: 'nhan-qua-mien-phi.com', answer: false, why: '.com lạ, hứa quà miễn phí: cần kiểm tra và hỏi giáo viên.' },
      { text: 'truong-em.edu.vn', answer: true, why: 'Tên miền giáo dục quen thuộc của trường.' },
      { text: 'trung-thuong-iphone.xyz', answer: false, why: 'Đuôi lạ, nội dung giống quảng cáo / lừa đảo: không mở.' }
    ],
    hint: 'Nhìn kỹ tên miền: đuôi .edu / .gov hay một đuôi lạ?',
    explain: 'Tên miền chỉ là bước kiểm tra đầu tiên. Vẫn cần xem mục đích và nguồn gửi, và hỏi giáo viên khi chưa chắc chắn.'
  }
};

/* Ôn tập: chỉ gồm 5 câu gốc trong file pptx (các câu bổ sung chỉ dùng trong bài học) */
const REVIEW_KEYS = [
  'needBrowser', 'notBrowser', 'tfBasic', 'urlWhat', 'wwwSystem'
];
