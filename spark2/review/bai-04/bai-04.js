/* ============================================================
   0. THÔNG TIN BÀI HỌC (hiện ở thanh trên cùng)
   ============================================================ */
const CONFIG = {
  icon:  '📱',
  title: 'Bài 4 — Các vấn đề liên quan đến ứng dụng (App)'
};

/* ============================================================
   1. DỮ LIỆU BÀI HỌC
   ============================================================ */
const slidesData = [
  {
    type: 'info',
    topic: 'Khởi động',
    title: 'Thế giới ứng dụng (App)',
    content: 'Khi sử dụng điện thoại hay máy tính, em thường xuyên tương tác với các ứng dụng. Vậy làm sao để có được chúng và cần lưu ý gì khi sử dụng?',
    imageUrl: null,
    things: [
      { icon: '🛒', name: 'Tải ứng dụng', en: 'App Store / Google Play' },
      { icon: '🔒', name: 'Lưu ý bảo mật', en: 'Quyền riêng tư' },
      { icon: '🤖', name: 'Công cụ AI', en: 'Lựa chọn ứng dụng phù hợp' }
    ],
    remember: 'Trong bài này, chúng ta sẽ tìm hiểu cách sử dụng ứng dụng an toàn và cách lựa chọn công cụ AI hợp lí.'
  },

  {
    type: 'info',
    topic: 'Phần 1 · Tải và Mua',
    title: 'Cách để sử dụng ứng dụng',
    content: 'Dưới đây là những cách phổ biến để em có thể sử dụng các ứng dụng trên thiết bị của mình.',
    imageUrl: null,
    things: [
      { icon: '📲', name: 'Ứng dụng cài sẵn', en: 'Có sẵn khi mua máy (ví dụ: Camera, Máy tính)' },
      { icon: '⏳', name: 'Dùng thử (App Trials)', en: 'Trải nghiệm miễn phí trong thời gian ngắn' },
      { icon: '💳', name: 'Mua một lần (App Purchases)', en: 'Trả tiền 1 lần để dùng vĩnh viễn' }
    ],
    remember: 'Ngoài ra còn có <b>Mua theo định kì (App Subscriptions)</b>: trả tiền hàng tháng/năm, và <b>Mua trong ứng dụng (In-App Purchases)</b>: mua thêm tính năng lúc đang dùng.'
  },

  {
    type: 'quiz_dropdown',
    topic: 'Luyện tập',
    question: 'Em hãy chọn thuật ngữ tiếng Anh đúng với mỗi cách mua ứng dụng: Dùng thử là ___. Mua thêm tính năng lúc đang dùng là ___.',
    blanks: [
      { options: ['App Subscriptions', 'App Purchases', 'App Trials'], correctAnswer: 2 },
      { options: ['In-App Purchases', 'Pre-installed Apps', 'App Trials'], correctAnswer: 0 }
    ],
    hint: 'Dùng thử (Trial). Bên trong ứng dụng (In-App).',
    explain: 'App Trials là dùng thử ứng dụng trong thời gian ngắn. In-App Purchases là mua hàng ngay bên trong ứng dụng đang dùng.'
  },

  {
    type: 'quiz_matching',
    topic: 'Vận dụng',
    question: 'Hãy ghép tên cách sử dụng ứng dụng với mô tả tương ứng.',
    pairs: [
      { icon: '💳', left: 'App Purchases', right: 'Mua đứt ứng dụng một lần.' },
      { icon: '📅', left: 'App Subscriptions', right: 'Trả tiền theo tháng hoặc theo năm.' },
      { icon: '📲', left: 'Pre-installed Apps', right: 'Được cài đặt sẵn từ lúc mới mua máy.' }
    ],
    hint: 'Purchase = Mua. Subscription = Đăng kí định kì. Pre-installed = Cài sẵn.',
    explain: 'Đây là các thuật ngữ tiếng Anh tương ứng với các hình thức tải và trả phí ứng dụng.'
  },

  {
    type: 'info',
    topic: 'Phần 2 · Vấn đề lưu ý',
    title: 'Lưu ý khi sử dụng ứng dụng',
    content: 'Để thiết bị chạy mượt mà và thông tin cá nhân được an toàn, em cần quan tâm đến các vấn đề sau:',
    imageUrl: null,
    things: [
      { icon: '⭐', name: 'Chất lượng', en: 'Ổn định, chạy mượt, xem đánh giá của người dùng' },
      { icon: '🔒', name: 'Bảo mật', en: 'Tải từ kho chính thức, có mã hóa dữ liệu' },
      { icon: '👁️', name: 'Quyền riêng tư', en: 'Kiểm tra xem app thu thập thông tin gì' }
    ],
    remember: '<b>Luôn đọc kĩ:</b> Ứng dụng yêu cầu quyền gì (truy cập vị trí, danh bạ...) trước khi ấn nút Đồng ý.'
  },

  {
    type: 'quiz_multiple',
    topic: 'Luyện tập',
    question: 'Để đảm bảo an toàn cho bản thân khi sử dụng ứng dụng, em cần lưu ý những vấn đề nào sau đây? (Chọn 3)',
    options: [
      'Bảo mật',
      'Thẩm mỹ (ứng dụng đẹp)',
      'Quyền riêng tư',
      'Cập nhật và hỗ trợ'
    ],
    correctAnswers: [0, 2, 3],
    hint: 'Cái đẹp không phải là yếu tố đảm bảo an toàn cho thiết bị.',
    explain: 'Em cần quan tâm đến Bảo mật, Quyền riêng tư và khả năng Cập nhật/Hỗ trợ của ứng dụng để đảm bảo an toàn.'
  },

  {
    type: 'quiz_multiple',
    topic: 'Luyện tập',
    question: 'Tùy chọn nào sau đây giúp bảo vệ thông tin cá nhân và quyền riêng tư? (Chọn 2)',
    options: [
      'Cài đặt các ứng dụng đảm bảo về bảo mật trên cửa hàng ứng dụng chính thức.',
      'Cung cấp thông tin tài khoản qua một ứng dụng nhận quà trúng thưởng.',
      'Kiểm tra giấy phép, quyền riêng tư và đánh giá của ứng dụng trước khi cài đặt.',
      'Cài đặt các ứng dụng được quảng cáo kiếm tiền trên mạng.'
    ],
    correctAnswers: [0, 2],
    hint: 'Không bao giờ tin vào các ứng dụng hứa hẹn tặng quà hoặc kiếm tiền dễ dàng.',
    explain: 'Chỉ nên cài từ cửa hàng chính thức (App Store, Google Play) và luôn đọc kĩ các đánh giá, quyền riêng tư trước khi cài.'
  },

  {
    type: 'info',
    topic: 'Phần 3 · Công cụ AI',
    title: 'Lựa chọn công cụ AI phù hợp',
    content: 'Hiện nay có rất nhiều công cụ Trí tuệ nhân tạo (AI). Mỗi công cụ có một thế mạnh riêng, em cần chọn đúng "thợ" cho đúng "việc".',
    imageUrl: null,
    things: [
      { icon: '🤖', name: 'Chatbot AI', en: 'ChatGPT, Gemini, Copilot (hỗ trợ viết, hỏi đáp)' },
      { icon: '🎨', name: 'Tạo hình ảnh', en: 'Canva AI, Adobe Firefly' },
      { icon: '📝', name: 'Sửa văn bản', en: 'Grammarly (kiểm tra chính tả, ngữ pháp)' }
    ],
    remember: 'Các ứng dụng học tập như Duolingo hay Khan Academy cũng đã tích hợp AI để giúp em học tốt hơn.'
  },

  // {
  //   type: 'quiz_dragdrop',
  //   topic: 'Vận dụng',
  //   question: 'Hãy kéo tên công cụ AI vào tình huống sử dụng phù hợp.',
  //   zones: [
  //     { label: 'Em muốn kiểm tra lỗi chính tả và ngữ pháp tiếng Anh.', item: 'Grammarly' },
  //     { label: 'Em muốn hỏi cách giải một bài toán đố.', item: 'ChatGPT / Gemini' },
  //     { label: 'Em muốn tạo một bức ảnh phi hành gia bay trên sao Hỏa.', item: 'Canva AI' }
  //   ],
  //   hint: 'Công cụ nào chuyên vẽ? Công cụ nào chuyên sửa lỗi chữ?',
  //   explain: 'Grammarly chuyên sửa lỗi văn bản. ChatGPT/Gemini là Chatbot để hỏi đáp. Canva AI là công cụ thiết kế hình ảnh.'
  // },

  {
    type: 'info',
    final: true,
    topic: 'Hoàn thành',
    title: 'Chúc mừng em đã học xong Bài 4!',
    content: 'Em đã nắm được cách ứng dụng được phân phối (Dùng thử, Mua, Đăng kí...), biết cách bảo vệ bản thân qua các lưu ý Bảo mật và Quyền riêng tư, đồng thời biết lựa chọn đúng công cụ AI.',
    imageUrl: null,
    remember: 'Ghi nhớ quan trọng: AI là <b>trợ thủ</b> để gợi ý và giải thích, không phải là công cụ để làm bài tập thay cho em. Hãy là người học thông minh!'
  }
];
