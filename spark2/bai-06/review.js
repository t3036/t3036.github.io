/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 6 — Máy tính và các thiết bị nhập, xuất (2)
   (tách từ phần Ôn tập của bai-06.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s4: ''    // Phần 4 — Ôn tập
};

const LESSON = {
  id:    'bai6-nhapxuat2-on-tap',
  icon:  '🖨️',
  title: 'Ôn tập Bài 6 — Máy tính và các thiết bị nhập, xuất (2)',

  sections: [
    /* ============================================================
       PHẦN 4 — Ôn tập (mật khẩu: B0604)
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 3 phần
       trên để học sinh luyện lại. Đáp án làm ở đây độc lập hoàn
       toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's4',
      title: 'Ôn tập',
      password: PASSWORDS.s4,
      slides: [
        /* Slide 18 (Trang 18 / 22) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy chọn hai thiết bị xuất (Chọn 2)',
          options: ['Chuột (Mouse)', 'Bàn di chuột (Touchpad)', 'Màn hình (Monitor)', 'Bàn phím (Keyboard)', 'Máy in (Printer)'],
          correctAnswers: [2, 4],
          hint: 'Chuột, Touchpad, Bàn phím đều là thiết bị nhập.',
          explain: 'Màn hình và Máy in đều đưa kết quả xử lí từ máy tính ra ngoài, nên là thiết bị xuất.'
        },

        /* Slide 19 (Trang 19 / 22) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Trong các tùy chọn sau, tùy chọn nào là các thiết bị đầu ra (Output Device)? (Chọn 3)',
          options: ['Loa (Speakers)', 'Bàn di chuột cảm ứng (Touchpad)', 'Bàn phím (Keyboard)', 'Tai nghe (Headphones)', 'Chuột (Mouse)', 'Máy in (Printer)'],
          correctAnswers: [0, 3, 5],
          hint: 'Touchpad, Bàn phím, Chuột đều là thiết bị nhập — loại bỏ 3 lựa chọn này.',
          explain: 'Loa, Tai nghe và Máy in đều đưa thông tin từ máy tính ra ngoài cho con người, nên là thiết bị đầu ra (Output Device).'
        },

        /* Slide 20 (Trang 20 / 22) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy phân loại mỗi thiết bị sau là thiết bị đầu vào (Input) hay thiết bị đầu ra (Output): Chuột (Mouse) là ___ Bàn di chuột (Touchpad) là ___ Màn hình (Screen) là ___ Bàn phím (Keyboard) là ___ Máy in (Printer) là ___ Máy chiếu (Projector) là ___',
          blanks: [
            { options: ['Input', 'Output'], correctAnswer: 0 },
            { options: ['Input', 'Output'], correctAnswer: 0 },
            { options: ['Input', 'Output'], correctAnswer: 1 },
            { options: ['Input', 'Output'], correctAnswer: 0 },
            { options: ['Input', 'Output'], correctAnswer: 1 },
            { options: ['Input', 'Output'], correctAnswer: 1 }
          ],
          hint: 'Input = đưa thông tin VÀO máy tính. Output = đưa thông tin TỪ máy tính RA ngoài.',
          explain: 'Chuột, Touchpad, Bàn phím đưa thông tin vào máy tính (Input). Màn hình, Máy in, Máy chiếu đưa thông tin từ máy tính ra ngoài (Output).'
        },

        /* Slide 21 (Trang 21 / 22) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy điền vào chỗ trống để hoàn thành phát biểu sau đây: "___ có thể được xem là một thiết bị đặc biệt với tính chất của cả thiết bị nhập (Input Device) và thiết bị xuất (Output Device)."',
          options: ['Màn hình cảm ứng', 'Bàn phím', 'Máy in', 'Tai nghe'],
          correctAnswer: 0,
          hint: 'Thiết bị nào vừa để chạm chọn (nhập), vừa để xem hình ảnh (xuất)?',
          explain: 'Màn hình cảm ứng vừa là thiết bị nhập (chạm để chọn, giống chuột) vừa là thiết bị xuất (hiển thị hình ảnh).'
        },

        /* Slide 22 — slide hoàn thành */
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
