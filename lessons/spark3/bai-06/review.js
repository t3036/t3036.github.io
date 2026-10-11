/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 6 — Trình duyệt Web
   (gom các câu hỏi của bai-06.js; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'l3-bai6-on-tap',
  icon:  '🌐',
  title: 'Ôn tập Bài 6 — Trình duyệt Web',

  sections: [
    {
      id: 's1',
      title: 'Ôn tập',
      slides: [
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
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
          topic: 'Ôn tập',
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
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
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
          topic: 'Ôn tập',
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
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 6!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
    ]
    }
  ]
};
