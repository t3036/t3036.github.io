/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 4 — Các vấn đề liên quan đến ứng dụng (App)
   (gom các câu hỏi của bai-04.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s1: ''    // Ôn tập
};

const LESSON = {
  id:    'bai4-app-on-tap',
  icon:  '📱',
  title: 'Ôn tập Bài 4 — Các vấn đề liên quan đến ứng dụng (App)',

  sections: [
    {
      id: 's1',
      title: 'Ôn tập',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy chọn thuật ngữ tiếng Anh đúng với mỗi cách mua ứng dụng: Dùng thử là ___ Mua thêm tính năng lúc đang dùng là ___',
          blanks: [
            { options: ['App Subscriptions', 'App Purchases', 'App Trials'], correctAnswer: 2 },
            { options: ['In-App Purchases', 'Pre-installed Apps', 'App Trials'], correctAnswer: 0 }
          ],
          hint: 'Dùng thử (Trial). Bên trong ứng dụng (In-App).',
          explain: 'App Trials là dùng thử ứng dụng trong thời gian ngắn. In-App Purchases là mua hàng ngay bên trong ứng dụng đang dùng.'
        },
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
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
          type: 'quiz_multiple',
          topic: 'Ôn tập',
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
          topic: 'Ôn tập',
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
        /* Slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 4!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};
