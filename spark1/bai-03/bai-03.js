
/* ============================================================
   0. THÔNG TIN BÀI HỌC
   ============================================================ */
const CONFIG = {
  icon:  '💻',
  title: 'Bài 3 — Phần mềm và các loại phần mềm'
};

/* ============================================================
   1. DỮ LIỆU BÀI HỌC
   ============================================================ */
const slidesData = [
  {
    type: 'info',
    topic: 'Phần 1 · Khái niệm',
    title: 'Phần mềm là gì?',
    content: '<b>Phần mềm máy tính (Software)</b> là những chương trình do trí tuệ con người tạo ra nhằm phục vụ cho mục đích sử dụng của con người.',
    imageUrl: null,
    things: [
      { icon: 'P', name: 'Microsoft PowerPoint', en: 'Tạo bài trình chiếu' },
      { icon: 'W', name: 'Microsoft Word', en: 'Xử lí văn bản' },
      { icon: '🌐', name: 'Google Chrome', en: 'Tìm kiếm thông tin trên Internet' }
    ],
    remember: 'Để máy tính thực thi công việc, con người tạo ra các chương trình (program) bằng cách viết các tập hợp lệnh hoặc mã (code).'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Phần mềm là gì?',
    options: [
      'Là những chương trình do trí tuệ con người tạo ra nhằm phục vụ cho mục đích sử dụng của con người.',
      'Là những thiết bị máy tính do trí tuệ con người tạo ra nhằm phục vụ cho mục đích sử dụng của con người.',
      'Là những chương trình do máy tính tạo ra nhằm phục vụ cho mục đích sử dụng của con người.'
    ],
    correctAnswer: 0,
    hint: 'Phần mềm không phải là "thiết bị" cầm nắm được, và máy tính không tự tạo ra chúng.',
    explain: 'Phần mềm (Software) là sản phẩm trí tuệ của con người, gồm các chương trình phục vụ nhiều mục đích khác nhau.'
  },
  {
    type: 'quiz_dropdown',
    topic: 'Luyện tập',
    question: 'Hãy phân loại các mục sau đây vào đúng nhóm: Cơ sở dữ liệu (Database) là ___. Chuột (Mouse) là ___. Bàn phím (Keyboard) là ___. Thư điện tử (Email) là ___. Máy in (Printer) là ___.',
    blanks: [
      { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 0 },
      { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 1 },
      { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 1 },
      { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 0 },
      { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 1 }
    ],
    hint: 'Phần cứng là những thứ em có thể chạm tay vào được. Phần mềm thì không.',
    explain: 'Chuột, Bàn phím, Máy in là thiết bị vật lí (Phần cứng). Database và Email là chương trình/dịch vụ (Phần mềm).'
  },
  {
    type: 'info',
    topic: 'Phần 2 · Phân loại phần mềm',
    title: 'Phần mềm mã nguồn mở & Độc quyền',
    content: 'Dựa theo quyền hạn can thiệp vào mã nguồn, phần mềm được chia làm hai loại chính:',
    imageUrl: null,
    things: [
      { icon: '🔓', name: 'Mã nguồn mở (Open Source)', en: 'Dùng miễn phí, xem, sửa và chia sẻ mã nguồn. (VD: Linux)' },
      { icon: '🔒', name: 'Độc quyền (Proprietary)', en: 'Bán/phân phối có giấy phép, không được xem/sửa mã nguồn. (VD: Windows, MS Office)' }
    ],
    remember: 'Hệ điều hành Windows 10 mà em thường dùng trên máy tính là một <b>phần mềm độc quyền</b> và cần có giấy phép sử dụng.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Phát biểu nào đúng về phần mềm mã nguồn mở (Open Source)?',
    options: [
      'Là phần mềm được phân phối mã nguồn miễn phí cho người dùng.',
      'Là phần mềm được bán hoặc phân phối với một loại giấy phép cụ thể.',
      'Là phần mềm được phân phối mã nguồn miễn phí trong một thời gian nhất định.'
    ],
    correctAnswer: 0,
    hint: 'Từ "mở" mang nghĩa người dùng có thể tự do xem và thay đổi mã nguồn.',
    explain: 'Phần mềm mã nguồn mở cho phép người dùng sử dụng miễn phí, có thể xem, sửa đổi và chia sẻ mã nguồn (ví dụ: Linux).'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Phát biểu nào đúng về phần mềm độc quyền (Proprietary)?',
    options: [
      'Là phần mềm được phân phối mã nguồn miễn phí cho người dùng.',
      'Là phần mềm được bán hoặc phân phối với một loại giấy phép phần mềm cụ thể.',
      'Là phần mềm được phân phối mã nguồn miễn phí cho người dùng trong một thời gian nhất định.'
    ],
    correctAnswer: 1,
    hint: 'Từ "độc quyền" có nghĩa là thuộc sở hữu riêng và phải mua hoặc có giấy phép.',
    explain: 'Phần mềm độc quyền được bán hoặc cấp phép bởi người/công ty tạo ra nó, người dùng không thể can thiệp vào mã nguồn.'
  },
  {
    type: 'quiz_dropdown',
    topic: 'Luyện tập',
    question: 'Chọn Đúng hoặc Sai: Windows 10 là phần mềm độc quyền ___. Linux là phần mềm độc quyền ___. Người dùng phải trả phí để dùng phần mềm độc quyền ___.',
    blanks: [
      { options: ['Đúng', 'Sai'], correctAnswer: 0 },
      { options: ['Đúng', 'Sai'], correctAnswer: 1 },
      { options: ['Đúng', 'Sai'], correctAnswer: 0 }
    ],
    hint: 'Windows là độc quyền, Linux là mã nguồn mở.',
    explain: 'Windows 10 là phần mềm độc quyền và thường phải trả phí để có giấy phép. Linux là mã nguồn mở nên miễn phí.'
  },
  {
    type: 'info',
    topic: 'Phần 3 · Các khái niệm liên quan',
    title: 'Program, Application và App',
    content: 'Cùng là phần mềm nhưng chúng được gọi tên khác nhau tùy vào quy mô và thiết bị hoạt động.',
    imageUrl: null,
    things: [
      { icon: '🖥️', name: 'Desktop Application', en: 'Phần mềm ứng dụng cài trên máy tính (VD: MS Word)' },
      { icon: '🌐', name: 'Web Application', en: 'Ứng dụng hoạt động trên Internet (VD: Gmail, Google Docs)' },
      { icon: '📱', name: 'App', en: 'Phiên bản nhẹ chạy trên điện thoại/máy tính bảng' }
    ],
    remember: '<b>Program</b> (Chương trình) là bất kì tập hợp lệnh nào máy tính thực thi. <b>Application</b> (Ứng dụng) dùng để thực hiện nhiều chức năng.'
  },
  {
    type: 'quiz_matching',
    topic: 'Luyện tập',
    question: 'Hãy nối các thuật ngữ với định nghĩa tương ứng của chúng.',
    pairs: [
      { icon: '🧩', left: 'Application', right: 'Được thiết kế để thực hiện nhiều chức năng khác nhau.' },
      { icon: '💻', left: 'Desktop Application', right: 'Phải được cài đặt trên máy tính trước khi có thể chạy.' },
      { icon: '📱', left: 'App', right: 'Phiên bản nhẹ của phần mềm, thiết kế cho điện thoại thông minh.' }
    ],
    hint: 'Desktop = Máy tính để bàn (cần cài đặt). App = Ứng dụng điện thoại.',
    explain: 'Application là ứng dụng nói chung; Desktop App cần cài trên PC; App là ứng dụng gọn nhẹ trên di động.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Phát biểu nào đúng nhất về phần mềm ứng dụng trên máy tính để bàn (Desktop Application)?',
    options: [
      'Phần mềm phải được cài đặt trên máy tính của em trước khi em có thể khởi chạy.',
      'Máy tính của em phải được kết nối với Internet để chạy phần mềm.',
      'Phần mềm không yêu cầu bất kì dung lượng lưu trữ nào trên máy tính.',
      'Em có thể đăng nhập vào phần mềm từ bất kỳ thiết bị nào.'
    ],
    correctAnswer: 0,
    hint: 'Trái ngược với Ứng dụng Web (Web Application), ứng dụng Desktop cần nằm trên máy của em.',
    explain: 'Ứng dụng trên máy tính để bàn (Desktop App) yêu cầu phải được tải về và cài đặt trực tiếp lên ổ cứng máy tính trước khi sử dụng.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Thuật ngữ nào là phần mềm chạy trên điện thoại hoặc máy tính bảng?',
    options: [
      'App',
      'Program',
      'Icon',
      'Widget'
    ],
    correctAnswer: 0,
    hint: 'Là tên gọi rút gọn quen thuộc khi em dùng smartphone.',
    explain: 'App (viết tắt của Application) là các phiên bản ứng dụng gọn nhẹ dành cho thiết bị di động.'
  },
  {
    type: 'info',
    topic: 'Phần 4 · Công cụ AI',
    title: 'Công cụ AI và Phần mềm',
    content: '<b>Công cụ AI</b> là một loại phần mềm đặc biệt, giúp máy tính xử lí thông tin, tự học hỏi và trả lời yêu cầu của người dùng.',
    imageUrl: null,
    things: [
      { icon: '🌐', name: 'Trình duyệt Web', en: 'Mở AI (như ChatGPT, Gemini) trực tiếp trên Web' },
      { icon: '📚', name: 'Ứng dụng học tập', en: 'Tích hợp AI trợ lý để gợi ý, giải thích bài học' }
    ],
    remember: 'Công cụ AI có thể hỗ trợ em học tập (gợi ý ý tưởng, tạo câu hỏi), nhưng <b>không thể thay thế</b> việc học và suy nghĩ của chính em!'
  },
  {
    type: 'info',
    final: true,
    topic: 'Hoàn thành',
    title: 'Chúc mừng em đã học xong Bài 3!',
    content: 'Em đã biết phần mềm là gì, phân biệt phần mềm mã nguồn mở với phần mềm độc quyền, hiểu các khái niệm Program, Application, App và vai trò của Công cụ AI.',
    imageUrl: null,
    remember: 'Hãy thử kể tên 3 phần mềm em đang dùng trên máy tính và 3 App em đang dùng trên điện thoại nhé!'
  }
];