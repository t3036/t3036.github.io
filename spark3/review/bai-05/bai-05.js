/* ============================================================
   0. THÔNG TIN BÀI HỌC
   ============================================================ */
const CONFIG = {
  icon:  '🔗',
  title: 'Bài 5 — URL: Bộ định vị tài nguyên thống nhất'
};

/* ============================================================
   1. DỮ LIỆU BÀI HỌC
   ============================================================ */
const slidesData = [
  {
    type: 'info',
    topic: 'Khởi động',
    title: 'Địa chỉ trên mạng',
    content: 'Để tìm được nhà của một người bạn, em cần có địa chỉ nhà. Trên Internet cũng vậy, để mở được một trang Web, máy tính cần một địa chỉ cụ thể. Đó chính là <b>URL</b>.',
    imageUrl: null,
    things: [
      { icon: '🏠', name: 'Địa chỉ nhà', en: 'Số nhà, tên đường, quận, thành phố' },
      { icon: '🌐', name: 'URL (Địa chỉ Web)', en: 'Ví dụ: https://www.google.com' }
    ],
    remember: 'Hôm nay chúng ta sẽ tìm hiểu URL là gì, cấu trúc của nó và cách nhận diện một URL an toàn nhé!'
  },
  {
    type: 'info',
    topic: 'Phần 1 · Khái niệm',
    title: 'URL là gì?',
    content: '<b>Bộ định vị tài nguyên thống nhất (URL - Uniform Resource Locator)</b> là địa chỉ duy nhất để định vị và truy cập đến các tài nguyên trên Internet (như trang Web, hình ảnh, tài liệu).',
    imageUrl: null,
    things: [
      { icon: '🔗', name: 'URL', en: 'Địa chỉ của một trang Web' },
      { icon: '🎯', name: 'Duy nhất', en: 'Không có 2 trang web nào có cùng 1 địa chỉ URL' }
    ],
    remember: 'Ví dụ: <i>https://ic3review.iigvietnam.edu.vn/index.html</i> là một URL.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'URL (Uniform Resource Locator) là gì?',
    options: [
      'Tác giả của một trang Web',
      'Nhà phát hành của một trang Web',
      'Địa chỉ của một trang Web',
      'Tên của một trang Web'
    ],
    correctAnswer: 2,
    hint: 'Nó đóng vai trò như "số nhà" trên môi trường mạng.',
    explain: 'URL là địa chỉ duy nhất để truy cập đến một tài nguyên (ví dụ: trang Web) trên Internet.'
  },
  {
    type: 'info',
    topic: 'Phần 2 · Cấu trúc',
    title: 'Các thành phần của URL',
    content: 'Một URL đầy đủ như <b>https://www.example.com</b> thường có 3 phần chính:',
    imageUrl: null,
    things: [
      { icon: '🔒', name: '1. Giao thức (Protocol)', en: 'https:// (cách máy tính và Web giao tiếp)' },
      { icon: '🌐', name: '2. Tên miền phụ (Subdomain)', en: 'www. (thành phần trước tên miền chính)' },
      { icon: '🏢', name: '3. Tên miền (Domain)', en: 'example.com (địa chỉ chính để tìm trang Web)' }
    ],
    remember: 'Giao thức <b>https://</b> được mã hóa và an toàn hơn so với <b>http://</b> (thường dùng cho ngân hàng, đăng nhập).'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Giao thức nào đảm bảo kết nối an toàn và được mã hóa giữa trình duyệt và trang Web?',
    options: [
      'HTTP',
      'FTP',
      'SMTP',
      'HTTPS'
    ],
    correctAnswer: 3,
    hint: 'Chữ "S" ở cuối viết tắt của từ "Secure" (Bảo mật).',
    explain: 'HTTPS (Hypertext Transfer Protocol Secure) giúp mã hóa dữ liệu, đảm bảo an toàn khi truyền tải trên Internet.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Tùy chọn nào dưới đây KHÔNG phải là một phần của URL?',
    options: [
      'Địa chỉ IP (IP Address)',
      'Tên miền (Domain Name)',
      'Giao thức (Protocol)',
      'Tên miền phụ (Subdomain)'
    ],
    correctAnswer: 0,
    hint: 'URL là chữ (như google.com), còn cái kia là số (như 192.168...).',
    explain: 'Địa chỉ IP là một dãy số (định danh thiết bị) và không nằm trực tiếp trong một chuỗi địa chỉ URL mà con người thường đọc.'
  },
  {
    type: 'info',
    topic: 'Phần 3 · Đuôi tên miền',
    title: 'Giải thích cấu trúc Tên miền',
    content: 'Tên miền thường kết thúc bằng một "Top-level Domain" (Tên miền cấp cao nhất). Dựa vào phần đuôi này, em có thể biết trang web đó thuộc tổ chức nào:',
    imageUrl: null,
    things: [
      { icon: '🛒', name: '.com', en: 'Thương mại (Commercial)' },
      { icon: '🎓', name: '.edu', en: 'Giáo dục (Education)' },
      { icon: '🏛️', name: '.gov', en: 'Chính phủ (Government)' },
      { icon: '🤝', name: '.org', en: 'Phi lợi nhuận (Organization)' }
    ],
    remember: 'Trang web của trường học thường dùng đuôi <b>.edu</b>, trang web của bộ máy nhà nước dùng đuôi <b>.gov</b>.'
  },
  {
    type: 'quiz_dropdown',
    topic: 'Luyện tập',
    question: 'Em định quyên góp cho một quỹ từ thiện, đuôi trang web chính thức thường là ___. Nếu tìm thông tin du lịch đáng tin cậy của nhà nước thì chọn ___.',
    blanks: [
      { options: ['.edu', '.com', '.org', '.net'], correctAnswer: 2 },
      { options: ['.com', '.gov', '.xyz', '.net'], correctAnswer: 1 }
    ],
    hint: '.org dành cho tổ chức phi lợi nhuận. .gov dành cho chính phủ.',
    explain: 'Quỹ từ thiện (phi lợi nhuận) dùng đuôi .org. Thông tin chính thống từ nhà nước dùng đuôi .gov.'
  },
  {
    type: 'info',
    topic: 'Phần 4 · Nhận diện URL',
    title: 'Nhận dạng URL hợp lệ',
    content: '<b>URL hợp lệ</b> là chuỗi kí tự tuân theo đúng cấu trúc để chỉ vị trí trên Internet. Nếu sai cú pháp, thiếu giao thức hoặc thiếu dấu chấm ".", URL sẽ <b>không hợp lệ</b> và bị báo lỗi (VD: Error 404).',
    imageUrl: null,
    things: [
      { icon: '✅', name: 'Đúng', en: 'https://www.iigvietnam.com/baithi' },
      { icon: '❌', name: 'Thiếu đuôi .com', en: 'https://www.iigvietnam/baithi' },
      { icon: '❌', name: 'Thiếu chấm (www.)', en: 'https://.iigvietnam.com/baithi' }
    ],
    remember: 'Một số URL còn có thêm <b>Đường dẫn</b> (/baitap), <b>Chuỗi truy vấn</b> (?id=5) và <b>Neo</b> (#cau1).'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Địa chỉ URL nào sau đây có định dạng đúng?',
    options: [
      'http://www.companypro/test',
      'https://www.companypro.net/test',
      'https://www.companypro/net/test',
      'https://.companypro.net/test'
    ],
    correctAnswer: 1,
    hint: 'Cần có giao thức (https://), tên miền phụ (www.), tên miền chính và Tên miền cấp cao nhất (đuôi .net).',
    explain: 'Đáp án B có đầy đủ cấu trúc: Giao thức (https://) + Tên miền phụ (www.) + Tên miền chính (companypro) + Đuôi (.net) + Đường dẫn (/test).'
  },
  {
    type: 'info',
    topic: 'Phần 5 · Ứng dụng AI',
    title: 'Dùng AI để tìm địa chỉ Web',
    content: 'Em có thể dùng chatbot AI để gợi ý các trang Web học tập. Tuy nhiên, AI có thể đưa ra URL sai hoặc không còn tồn tại.',
    imageUrl: null,
    things: [
      { icon: '🤖', name: '1. Hỏi AI', en: 'Ví dụ: "Gợi ý cho mình các web học tập"' },
      { icon: '🔍', name: '2. Kiểm tra', en: 'Xem kĩ tên miền (VD: .edu, .gov là uy tín)' },
      { icon: '✅', name: '3. Truy cập', en: 'Chỉ mở khi đã xác nhận an toàn' }
    ],
    remember: '<b>Tuyệt đối không:</b> Bấm vội vào liên kết mà AI vừa đưa ra nếu chưa kiểm tra tên miền.'
  },
  {
    type: 'info',
    final: true,
    topic: 'Hoàn thành',
    title: 'Chúc mừng em đã học xong Bài 5!',
    content: 'Em đã hiểu rõ cấu trúc của một địa chỉ mạng (URL), biết nhận diện các thành phần (Giao thức, Tên miền), phân biệt được các đuôi mở rộng (.com, .edu, .gov) và biết cách sử dụng AI an toàn khi tìm kiếm trang Web.',
    imageUrl: null,
    remember: 'Lần tới lướt Web, hãy thử nhìn lên thanh địa chỉ xem trang web đó đang dùng giao thức bảo mật HTTPS không nhé!'
  }
];