/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 4 — Mạng máy tính
   (gom các câu hỏi của bai-04.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s1: ''   // Ôn tập
};

const LESSON = {
  id:    'l3-bai4-on-tap',
  icon:  '🌐',
  title: 'Ôn tập Bài 4 — Mạng máy tính',

  sections: [
    {
      id: 's1',
      title: 'Ôn tập',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Hãy nối các khái niệm với đúng ý nghĩa của nó.',
          pairs: [
            { icon: '💻', left: 'Mạng máy tính', right: 'Hệ thống kết nối các thiết bị để làm việc cùng nhau.' },
            { icon: '🌍', left: 'Internet', right: 'Mạng lưới toàn cầu gồm các thiết bị kết nối với nhau.' },
            { icon: '🖨️', left: 'Thiết bị mạng', right: 'Máy tính, điện thoại, máy in...' }
          ],
          hint: 'Cái nào có chữ "toàn cầu"? Cái nào chỉ nhắc tới việc "kết nối để làm việc"?',
          explain: 'Internet là mạng toàn cầu, Mạng máy tính là hệ thống kết nối cục bộ, còn máy in là một ví dụ về thiết bị được kết nối.'
        },
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: '___ là một bộ quy tắc được máy tính sử dụng để giao tiếp. Trong khi đó, ___ giúp xác định vị trí trang Web và thiết bị trên mạng.',
          blanks: [
            { options: ['Địa chỉ IP', 'Giao thức (Protocol)', 'Trang Web'], correctAnswer: 1 },
            { options: ['Giao thức (Protocol)', 'Máy in', 'Địa chỉ IP'], correctAnswer: 2 }
          ],
          hint: 'Quy tắc giao tiếp = Giao thức. Xác định vị trí = IP.',
          explain: 'Giao thức là tập hợp các quy tắc (luật lệ), còn Địa chỉ IP dùng để xác định thiết bị và vị trí trang web trên Internet.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
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
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
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
