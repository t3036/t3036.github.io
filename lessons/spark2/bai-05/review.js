/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 5 — Máy tính và các thiết bị nhập, xuất (1)
   (tách từ phần Ôn tập của bai-05.js; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'bai5-nhapxuat1-on-tap',
  icon:  '⌨️',
  title: 'Ôn tập Bài 5 — Máy tính và các thiết bị nhập, xuất (1)',

  sections: [
    /* ============================================================
       PHẦN 3 — Ôn tập
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 2 phần
       trên để học sinh luyện lại. Đáp án làm ở đây độc lập hoàn
       toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's3',
      title: 'Ôn tập',
      slides: [
        /* Slide 20 (Trang 20 / 30) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là một lợi thế lớn của máy tính bảng?',
          options: ['Khả năng lưu trữ', 'Bộ nhớ', 'Sức mạnh', 'Tính di động'],
          correctAnswer: 3,
          hint: 'Máy tính bảng nhỏ gọn, dễ mang theo hơn hẳn máy tính để bàn hay laptop.',
          explain: 'Lợi thế lớn nhất của máy tính bảng là tính di động — nhỏ gọn, nhẹ, dễ mang theo bên mình.'
        },

        /* Slide 21 (Trang 21 / 30) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, hạn chế của máy tính bảng so với máy tính xách tay là gì?',
          options: [
            'Không thể chỉnh sửa tài liệu.',
            'Không thể thực hiện cuộc gọi Video.',
            'Không có quyền truy cập Email.',
            'Một số ứng dụng sẽ không cài đặt được trên máy tính bảng.'
          ],
          correctAnswer: 3,
          hint: 'Máy tính bảng vẫn chỉnh sửa tài liệu, gọi video, dùng email được — chỉ là không cài được MỌI phần mềm như laptop.',
          explain: 'Một số phần mềm (đặc biệt phần mềm chuyên dụng, nặng) chỉ chạy được trên máy tính để bàn/laptop, không cài được trên máy tính bảng.'
        },

        /* Slide 22 (Trang 22 / 30) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, thiết bị nhập có chức năng gì?',
          options: ['Nhập dữ liệu', 'Gửi dữ liệu', 'Truyền dữ liệu', 'Cả 3 chức năng trên'],
          correctAnswer: 3,
          hint: 'Xem lại định nghĩa — thiết bị nhập giúp em làm những gì với thông tin?',
          explain: 'Thiết bị nhập giúp em vừa nhập, vừa gửi, vừa truyền thông tin vào máy tính — cả 3 chức năng đều đúng.'
        },

        /* Slide 23 (Trang 23 / 30) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, thiết bị nhập nào có các phím kí tự và số?',
          options: ['Bàn di chuột (Touchpad)', 'Chuột (Mouse)', 'Bàn phím (Keyboard)', 'Thiết bị ghi hình (Camera)'],
          correctAnswer: 2,
          hint: 'Thiết bị nào có các phím chữ cái A-Z và số 0-9?',
          explain: 'Bàn phím (Keyboard) có đầy đủ các phím kí tự chữ và số để em gõ văn bản.'
        },

        /* Slide 24 (Trang 24 / 30) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là thiết bị nhập (Input Device)?',
          options: ['Màn hình (Monitor)', 'Bàn di chuột (Touchpad)', 'Thân máy (Case)', 'Máy in (Printer)'],
          correctAnswer: 1,
          hint: 'Màn hình và Máy in là thiết bị xuất; Thân máy chỉ là vỏ chứa linh kiện.',
          explain: 'Bàn di chuột (Touchpad) là thiết bị nhập — dùng để điều khiển con trỏ, giống như chuột.'
        },

        /* Slide 25 (Trang 25 / 30) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, thiết bị chuột trên máy tính bảng đã được thay thế bằng những tùy chọn nào sau đây? (Chọn 2)',
          options: ['Bút chì (Pencil)', 'Màn hình cảm ứng (Touch Screen)', 'Bút cảm ứng (Stylus)', 'Chuột kĩ thuật số (Digital Mouse)'],
          correctAnswers: [1, 2],
          hint: 'Trên máy tính bảng, em chạm/vẽ trực tiếp lên màn hình hoặc dùng bút chuyên dụng.',
          explain: 'Máy tính bảng dùng Màn hình cảm ứng (chạm trực tiếp) và Bút cảm ứng (Stylus) để thay thế vai trò của chuột.'
        },

        /* Slide 26 (Trang 26 / 30) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, thiết bị nhập nào dùng để ghi lại âm thanh và chuyển đổi thành định dạng kĩ thuật số?',
          options: ['Micrô (Microphone)', 'Máy ghi hình (Camera)', 'Chuột (Mouse)', 'Bàn phím (Keyboard)'],
          correctAnswer: 0,
          hint: 'Thiết bị nào "nghe" và ghi lại âm thanh?',
          explain: 'Micrô (Microphone) ghi lại âm thanh và chuyển đổi thành dữ liệu kĩ thuật số.'
        },

        /* Slide 27 (Trang 27 / 30) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là một thiết bị đầu vào (Input Device)?',
          options: ['Microphone', 'Loa (Speakers)', 'Máy in (Printer)', 'Máy chiếu (Projector)'],
          correctAnswer: 0,
          hint: 'Loa, Máy in, Máy chiếu đều là thiết bị xuất (đưa thông tin ra ngoài).',
          explain: 'Microphone là thiết bị đầu vào — nhận âm thanh và gửi vào máy tính. Ba lựa chọn còn lại đều là thiết bị đầu ra.'
        },

        /* Slide 28 (Trang 28 / 30) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Thiết bị nào KHÔNG có camera?',
          options: [
            'Chuông cửa thông minh (Smart doorbell)',
            'Google Chromebook',
            'Apple iPhone',
            'Tai nghe Bluetooth (Bluetooth Headset)'
          ],
          correctAnswer: 3,
          hint: 'Tai nghe chỉ liên quan tới âm thanh, không có chức năng ghi hình.',
          explain: 'Tai nghe Bluetooth chỉ dùng để nghe/nói, không tích hợp camera. Ba thiết bị còn lại đều có camera.'
        },

        /* Slide 29 (Trang 29 / 30) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, thiết bị nào sau đây KHÔNG có chức năng nhập dữ liệu?',
          options: ['Bàn phím (Keyboard)', 'Micrô (Microphone)', 'Chuột (Mouse)', 'Máy in (Printer)'],
          correctAnswer: 3,
          hint: 'Thiết bị này in dữ liệu RA giấy — vậy nó đưa thông tin ra hay vào máy tính?',
          explain: 'Máy in là thiết bị xuất (đưa thông tin từ máy tính ra ngoài), không có chức năng nhập dữ liệu vào máy tính.'
        },

        /* Slide 30 — slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 5!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};
