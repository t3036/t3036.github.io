/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 7 — Các tính năng trên trình duyệt Web
   (gom các câu hỏi của bai-07.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s1: ''   // Ôn tập
};

const LESSON = {
  id:    'l3-bai7-on-tap',
  icon:  '⚙️',
  title: 'Ôn tập Bài 7 — Các tính năng trên trình duyệt Web',

  sections: [
    {
      id: 's1',
      title: 'Ôn tập',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
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
          topic: 'Ôn tập',
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
          type: 'quiz_single',
          topic: 'Ôn tập',
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
          topic: 'Ôn tập',
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
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 7!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
    ]
    }
  ]
};
