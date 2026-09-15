const CONFIG = {
  icon:  '🌐',
  title: 'Bài 4 — Mạng máy tính'
};

const slidesData = [

  /* ---------- 1. Khởi động ---------- */
  {
    type: 'info',
    topic: 'Khởi động',
    title: 'Dữ liệu trên trang Web đến từ đâu?',
    content: 'Khi em mở một trang Web để xem phim hay đọc báo, dữ liệu đó không tự nhiên sinh ra trong máy tính của em, mà được "chở" từ một nơi khác đến. Làm sao chúng tìm được đúng máy tính của em? Chúng ta cùng tìm hiểu nhé!',
    imageUrl: null,
    things: [
      { icon: '💻', name: 'Mạng máy tính', en: 'Kết nối nội bộ' },
      { icon: '🌍', name: 'Internet', en: 'Mạng lưới toàn cầu' },
      { icon: '🏠', name: 'Địa chỉ IP', en: 'Cách tìm đúng thiết bị' }
    ],
    remember: 'Hôm nay chúng ta sẽ học về Mạng máy tính, Địa chỉ IP, Máy chủ và cách AI hoạt động qua Internet.'
  },

  /* ---------- 2. Mạng máy tính & Internet ---------- */
  {
    type: 'info',
    topic: 'Phần 1 · Khái niệm',
    title: 'Mạng máy tính và Internet',
    content: '<b>Mạng máy tính</b> là hệ thống giúp các thiết bị như máy tính, điện thoại, máy in... kết nối với nhau bằng dây hoặc không dây để chia sẻ thông tin và làm việc cùng nhau.<br><br><b>Internet</b> là hệ thống mạng toàn cầu gồm các máy tính và thiết bị được kết nối với nhau, cho phép truy cập và chia sẻ thông tin, dữ liệu và tài nguyên.',
    imageUrl: null,
    things: [
      { icon: '🔗', name: 'Kết nối', en: 'Bằng cáp hoặc Wi-Fi' },
      { icon: '🔄', name: 'Chia sẻ', en: 'Trao đổi dữ liệu với nhau' },
      { icon: '🌐', name: 'Toàn cầu', en: 'Internet phủ sóng thế giới' }
    ],
    remember: 'Mạng máy tính có thể nhỏ gọn (như phòng tin học), còn Internet là mạng kết nối toàn thế giới.'
  },

  /* ---------- 3. Nối cặp (Mạng & Internet) ---------- */
  {
    type: 'quiz_matching',
    topic: 'Vận dụng',
    question: 'Hãy nối các khái niệm với đúng ý nghĩa của nó.',
    pairs: [
      { icon: '💻', left: 'Mạng máy tính', right: 'Hệ thống kết nối các thiết bị để làm việc cùng nhau.' },
      { icon: '🌍', left: 'Internet', right: 'Mạng lưới toàn cầu gồm các thiết bị kết nối với nhau.' },
      { icon: '🖨️', left: 'Thiết bị mạng', right: 'Máy tính, điện thoại, máy in...' }
    ],
    hint: 'Cái nào có chữ "toàn cầu"? Cái nào chỉ nhắc tới việc "kết nối để làm việc"?',
    explain: 'Internet là mạng toàn cầu, Mạng máy tính là hệ thống kết nối cục bộ, còn máy in là một ví dụ về thiết bị được kết nối.'
  },

  /* ---------- 4. Giao thức mạng ---------- */
  {
    type: 'info',
    topic: 'Phần 2 · Định danh và Giao tiếp',
    title: 'Giao thức (Protocol)',
    content: 'Để các máy tính hiểu được nhau, chúng cần một "ngôn ngữ" chung. <br><b>Giao thức mạng (Protocol)</b> là tập hợp các quy tắc hoặc quy định được thiết lập để quản lí và điều khiển việc truyền thông giữa các thiết bị trong một hệ thống mạng.',
    imageUrl: null,
    things: [
      { icon: '📜', name: 'Bộ quy tắc', en: 'Quy định cách truyền dữ liệu' },
      { icon: '🤝', name: 'Giao tiếp chung', en: 'Giúp các máy hiểu được nhau' },
      { icon: '🔒', name: 'Bảo mật (SSL)', en: 'Bảo vệ dữ liệu khi truyền đi' }
    ],
    remember: 'Giao thức mạng giống như luật giao thông. Nếu không có quy tắc chung, các thiết bị sẽ không thể truyền thông tin cho nhau (Giao thức ≈ Giao tiếp).'
  },

  /* ---------- 5. Địa chỉ IP ---------- */
  {
    type: 'info',
    topic: 'Phần 2 · Định danh và Giao tiếp',
    title: 'Địa chỉ IP là gì?',
    content: '<b>Địa chỉ IP (Internet Protocol)</b> là một dãy số duy nhất được gán cho mỗi thiết bị (máy tính, điện thoại...) khi kết nối với Internet hoặc mạng máy tính khác.<br><br><b>Mục đích của IP:</b> Xác định các thiết bị hỗ trợ Internet và xác định vị trí của một trang Web.',
    imageUrl: null,
    things: [
      { icon: '🏷️', name: 'Dãy số duy nhất', en: 'Ví dụ: 192.168.1.10' },
      { icon: '🏠', name: 'Định vị thiết bị', en: 'Đóng vai trò như "số nhà"' },
      { icon: '🌐', name: 'Định vị Web', en: 'Ví dụ Google là 142.250.4.100' }
    ],
    remember: 'Nhờ có địa chỉ IP (số nhà trên mạng), dữ liệu từ Internet mới biết đường gửi kết quả chính xác về máy tính của em.'
  },

  /* ---------- 6. Điền từ (Giao thức & IP) ---------- */
  {
    type: 'quiz_dropdown',
    topic: 'Vận dụng',
    question: '___ là một bộ quy tắc được máy tính sử dụng để giao tiếp. Trong khi đó, ___ giúp xác định vị trí trang Web và thiết bị trên mạng.',
    blanks: [
      { options: ['Địa chỉ IP', 'Giao thức (Protocol)', 'Trang Web'], correctAnswer: 1 },
      { options: ['Giao thức (Protocol)', 'Máy in', 'Địa chỉ IP'], correctAnswer: 2 }
    ],
    hint: 'Quy tắc giao tiếp = Giao thức. Xác định vị trí = IP.',
    explain: 'Giao thức là tập hợp các quy tắc (luật lệ), còn Địa chỉ IP dùng để xác định thiết bị và vị trí trang web trên Internet.'
  },

  /* ---------- 7. Trắc nghiệm (Mục đích IP) ---------- */
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Em hãy cho biết, mục đích quan trọng nhất của địa chỉ IP là gì?',
    options: [
      'Điều khiển các thiết bị ngoại vi của máy tính.',
      'Gửi và nhận Email thay cho tài khoản.',
      'Xác định các thiết bị hỗ trợ Internet và vị trí trang Web.',
      'Xác định thông tin cá nhân (họ tên, tuổi) của người dùng.'
    ],
    correctAnswer: 2,
    hint: 'Hãy nhớ lại ví dụ về "số nhà" trên mạng.',
    explain: 'Địa chỉ IP dùng để xác định các thiết bị có kết nối Internet trên mạng và định vị nơi đặt trang Web.'
  },

  /* ---------- 8. Máy chủ (Server) ---------- */
  {
    type: 'info',
    topic: 'Phần 3 · Quản lí mạng',
    title: 'Máy chủ (Server) & Máy chủ Web',
    content: '<b>Máy chủ (Server)</b> là máy tính đặc biệt có nhiệm vụ cung cấp tài nguyên và dịch vụ cho các máy tính khác (gọi là máy khách - Client) trong mạng. <br><br>Ví dụ: Máy chủ của giáo viên trong phòng tin học có thể chia sẻ dữ liệu cho máy của học sinh.',
    imageUrl: null,
    things: [
      { icon: '🗄️', name: 'Máy chủ (Server)', en: 'Cung cấp tài nguyên/dịch vụ' },
      { icon: '💻', name: 'Máy khách (Client)', en: 'Thiết bị của người dùng' },
      { icon: '🌍', name: 'Máy chủ Web', en: 'Lưu trữ và gửi trang Web' }
    ],
    remember: 'Khi em gõ tên một trang Web (ví dụ YouTube), máy khách sẽ gửi yêu cầu, và <b>Máy chủ Web</b> sẽ gửi video về cho em xem.'
  },

  /* ---------- 9. Kéo thả (Mô hình Client - Server) ---------- */
  // {
  //   type: 'quiz_dragdrop',
  //   topic: 'Vận dụng',
  //   question: 'Hãy kéo các thiết bị vào đúng vai trò của nó trong mạng.',
  //   zones: [
  //     { label: 'Máy tính đặc biệt cung cấp tài nguyên/dịch vụ cho máy khác.', item: 'Máy chủ (Server)' },
  //     { label: 'Máy tính/Điện thoại của em dùng để gửi yêu cầu.', item: 'Máy khách (Client)' },
  //     { label: 'Máy chủ đặc biệt chỉ dùng để lưu trữ và gửi trang Web.', item: 'Máy chủ Web (Web Server)' }
  //   ],
  //   hint: 'Server là người phục vụ (cung cấp), Client là khách hàng (gửi yêu cầu).',
  //   explain: 'Máy chủ (Server) cung cấp tài nguyên, Máy khách (Client) nhận tài nguyên, Máy chủ Web chuyên cung cấp dữ liệu web.'
  // },

  /* ---------- 10. AI trên Máy chủ ---------- */
  {
    type: 'info',
    topic: 'Phần 4 · Công cụ AI',
    title: 'Công cụ AI hoạt động trên Máy chủ',
    content: 'Các công cụ AI (như ChatGPT, Gemini) cần máy tính cực mạnh để suy nghĩ. Vì vậy, chúng thường không nằm trên máy của em mà nằm trên <b>máy chủ AI</b>.',
    imageUrl: null,
    things: [
      { icon: '✍️', name: '1. Nhập yêu cầu', en: 'Ví dụ: "Viết đoạn văn về cây xanh"' },
      { icon: '🌐', name: '2. Gửi qua Internet', en: 'Yêu cầu đi đến máy chủ AI' },
      { icon: '📩', name: '3. Trả kết quả', en: 'Máy chủ AI xử lí rồi gửi lại câu trả lời' }
    ],
    remember: 'Dù AI rất thông minh, nhưng em <b>tuyệt đối không chia sẻ</b> mật khẩu, địa chỉ nhà, số điện thoại hay ảnh riêng tư cho AI.'
  },

  /* ---------- 11. Chọn nhiều đáp án (An toàn AI) ---------- */
  {
    type: 'quiz_multiple',
    topic: 'Vận dụng',
    question: 'Khi sử dụng các công cụ AI, em KHÔNG ĐƯỢC nhập những thông tin nào dưới đây để đảm bảo an toàn riêng tư?',
    options: [
      'Câu hỏi nhờ giải bài tập Toán',
      'Mật khẩu tài khoản và địa chỉ nhà',
      'Số điện thoại và ảnh riêng tư của em',
      'Thông tin lịch sử về một vị anh hùng'
    ],
    correctAnswers: [1, 2],
    hint: 'Em không được chia sẻ thông tin bí mật và cá nhân với bất kì công cụ trực tuyến nào.',
    explain: 'Để đảm bảo an toàn, tuyệt đối không nhập Mật khẩu, Số điện thoại, Địa chỉ nhà, hay Ảnh riêng tư vào các công cụ AI.'
  },

  /* ---------- 12. Kết thúc ---------- */
  {
    type: 'info',
    final: true,
    topic: 'Hoàn thành',
    title: 'Tuyệt vời! Em đã hoàn thành bài Mạng máy tính!',
    content: 'Em đã hiểu rõ cách các thiết bị kết nối qua Internet, phân biệt được Giao thức, định vị bằng Địa chỉ IP, vai trò của Máy chủ và nguyên lí hoạt động của AI trên Internet.',
    imageUrl: null,
    remember: 'Hãy thử quan sát trong nhà xem có bao nhiêu thiết bị (điện thoại, TV, máy tính) đang cùng kết nối chung một mạng Wi-Fi nhé!'
  }
];