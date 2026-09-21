/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 5: MÁY TÍNH VÀ CÁC THIẾT BỊ NHẬP, XUẤT (1)
   (IC3 GS6 Spark — Level 2 — Chủ đề: Căn bản về công nghệ)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Nguồn: PDF gốc K4_B05-06_ThietBiNhapVaXuat gộp chung 2 bài (Bài 5
   và Bài 6). File này chỉ chứa Bài 5 (trang 1-28 của PDF gốc —
   chủ đề "Các loại máy tính" + "Thiết bị nhập"); Bài 6 nằm ở file
   lesson data riêng (bai-06.js).

   Đây là BẢN THỬ đầu tiên — bạn xem qua câu chữ / mật khẩu và
   chỉnh lại nếu cần.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: 'B0501',   // Phần 1 — Các loại máy tính
  s2: 'B0502',   // Phần 2 — Thiết bị nhập
  s3: 'B0503'    // Phần 3 — Ôn tập
};

const LESSON = {
  id:    'bai5-nhapxuat1',
  icon:  '⌨️',
  title: 'Bài 5 — Máy tính và các thiết bị nhập, xuất (1)',

  sections: [

    /* ============================================================
       PHẦN 1 — Các loại máy tính (mật khẩu: B0501)
       ============================================================ */
    {
      id: 's1',
      title: 'Các loại máy tính',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 30) */
        {
          type: 'info',
          topic: 'Phần 1 · Các loại máy tính',
          title: 'Các loại máy tính',
          content: 'Máy tính có nhiều hình dạng và kích cỡ khác nhau, phù hợp với từng nhu cầu sử dụng:',
          imageUrl: null,
          things: [
            { icon: '🖥️', name: 'Máy tính để bàn', en: 'Desktop — thân máy và màn hình rời' },
            { icon: '🖳', name: 'Máy tính All-in-one', en: 'Màn hình và thân máy gộp chung 1 khối' },
            { icon: '💻', name: 'Máy tính xách tay', en: 'Laptop — gọn nhẹ, mang theo được' },
            { icon: '📱', name: 'Máy tính bảng', en: 'Tablet — màn hình cảm ứng, rất di động' },
            { icon: '📲', name: 'Điện thoại thông minh', en: 'Smartphone — nhỏ gọn nhất, luôn mang theo' }
          ]
        },

        /* Slide 2 (Trang 2 / 30) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là một lợi thế lớn của máy tính bảng?',
          options: ['Khả năng lưu trữ', 'Bộ nhớ', 'Sức mạnh', 'Tính di động'],
          correctAnswer: 3,
          hint: 'Máy tính bảng nhỏ gọn, dễ mang theo hơn hẳn máy tính để bàn hay laptop.',
          explain: 'Lợi thế lớn nhất của máy tính bảng là tính di động — nhỏ gọn, nhẹ, dễ mang theo bên mình.'
        },

        /* Slide 3 (Trang 3 / 30) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
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
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Thiết bị nhập (mật khẩu: B0502)
       ============================================================ */
    {
      id: 's2',
      title: 'Thiết bị nhập',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 4 (Trang 4 / 30) */
        {
          type: 'info',
          topic: 'Phần 2 · Thiết bị nhập',
          title: 'Thiết bị nhập là gì?',
          content: '<b>Thiết bị nhập (Input Device)</b> là những thiết bị giúp em <b>gửi, truyền, nhập</b> thông tin vào máy tính.',
          imageUrl: null,
          remember: 'Thiết bị nhập = Thiết bị đầu vào.'
        },

        /* Slide 5 (Trang 5 / 30) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, thiết bị nhập có chức năng gì?',
          options: ['Nhập dữ liệu', 'Gửi dữ liệu', 'Truyền dữ liệu', 'Cả 3 chức năng trên'],
          correctAnswer: 3,
          hint: 'Xem lại định nghĩa vừa học — thiết bị nhập giúp em làm những gì với thông tin?',
          explain: 'Thiết bị nhập giúp em vừa nhập, vừa gửi, vừa truyền thông tin vào máy tính — cả 3 chức năng đều đúng.'
        },

        /* Slide 6 (Trang 6 / 30) */
        {
          type: 'info',
          topic: 'Phần 2 · Thiết bị nhập',
          title: 'Bàn phím (Keyboard)',
          content: 'Sử dụng để nhập các kí tự văn bản và các lệnh vào máy tính.',
          imageUrl: null
        },

        /* Slide 7 (Trang 7 / 30) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, thiết bị nhập nào có các phím kí tự và số?',
          options: ['Bàn di chuột (Touchpad)', 'Chuột (Mouse)', 'Bàn phím (Keyboard)', 'Thiết bị ghi hình (Camera)'],
          correctAnswer: 2,
          hint: 'Thiết bị nào có các phím chữ cái A-Z và số 0-9?',
          explain: 'Bàn phím (Keyboard) có đầy đủ các phím kí tự chữ và số để em gõ văn bản.'
        },

        /* Slide 8 (Trang 8 / 30) */
        {
          type: 'info',
          topic: 'Phần 2 · Thiết bị nhập',
          title: 'Chuột máy tính (Mouse)',
          content: 'Dùng để chọn và kích hoạt các tính năng trên màn hình.',
          imageUrl: null
        },

        /* Slide 9 (Trang 9 / 30) */
        {
          type: 'info',
          topic: 'Phần 2 · Thiết bị nhập',
          title: 'Bàn di chuột (Touchpad)',
          content: 'Sử dụng ngón tay của mình để di chuyển con trỏ chuột trên màn hình.',
          imageUrl: null
        },

        /* Slide 10 (Trang 10 / 30) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là thiết bị nhập (Input Device)?',
          options: ['Màn hình (Monitor)', 'Bàn di chuột (Touchpad)', 'Thân máy (Case)', 'Máy in (Printer)'],
          correctAnswer: 1,
          hint: 'Màn hình và Máy in là thiết bị xuất; Thân máy chỉ là vỏ chứa linh kiện.',
          explain: 'Bàn di chuột (Touchpad) là thiết bị nhập — dùng để điều khiển con trỏ, giống như chuột.'
        },

        /* Slide 11 (Trang 11 / 30) */
        {
          type: 'info',
          topic: 'Phần 2 · Thiết bị nhập',
          title: 'Bút cảm ứng (Stylus)',
          content: 'Truyền thao tác chạm vào màn hình cảm ứng.',
          imageUrl: null
        },

        /* Slide 12 (Trang 12 / 30) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, thiết bị chuột trên máy tính bảng đã được thay thế bằng những tùy chọn nào sau đây? (Chọn 2)',
          options: ['Bút chì (Pencil)', 'Màn hình cảm ứng (Touch Screen)', 'Bút cảm ứng (Stylus)', 'Chuột kĩ thuật số (Digital Mouse)'],
          correctAnswers: [1, 2],
          hint: 'Trên máy tính bảng, em chạm/vẽ trực tiếp lên màn hình hoặc dùng bút chuyên dụng.',
          explain: 'Máy tính bảng dùng Màn hình cảm ứng (chạm trực tiếp) và Bút cảm ứng (Stylus) để thay thế vai trò của chuột.'
        },

        /* Slide 13 (Trang 13 / 30) */
        {
          type: 'info',
          topic: 'Phần 2 · Thiết bị nhập',
          title: 'Micro (Microphone)',
          content: 'Ghi lại âm thanh và chuyển đổi chúng thành định dạng kĩ thuật số để sử dụng trên máy tính.',
          imageUrl: null
        },

        /* Slide 14 (Trang 14 / 30) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, thiết bị nhập nào dùng để ghi lại âm thanh và chuyển đổi thành định dạng kĩ thuật số?',
          options: ['Micrô (Microphone)', 'Máy ghi hình (Camera)', 'Chuột (Mouse)', 'Bàn phím (Keyboard)'],
          correctAnswer: 0,
          hint: 'Thiết bị nào "nghe" và ghi lại âm thanh?',
          explain: 'Micrô (Microphone) ghi lại âm thanh và chuyển đổi thành dữ liệu kĩ thuật số.'
        },

        /* Slide 15 (Trang 15 / 30) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là một thiết bị đầu vào (Input Device)?',
          options: ['Microphone', 'Loa (Speakers)', 'Máy in (Printer)', 'Máy chiếu (Projector)'],
          correctAnswer: 0,
          hint: 'Loa, Máy in, Máy chiếu đều là thiết bị xuất (đưa thông tin ra ngoài).',
          explain: 'Microphone là thiết bị đầu vào — nhận âm thanh và gửi vào máy tính. Ba lựa chọn còn lại đều là thiết bị đầu ra.'
        },

        /* Slide 16 (Trang 16 / 30) */
        {
          type: 'info',
          topic: 'Phần 2 · Thiết bị nhập',
          title: 'Thiết bị ghi hình (Camera)',
          content: 'Dùng để ghi và lưu lại những hình ảnh.',
          imageUrl: null
        },

        /* Slide 17 (Trang 17 / 30) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
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

        /* Slide 18 (Trang 18 / 30) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, thiết bị nào sau đây KHÔNG có chức năng nhập dữ liệu?',
          options: ['Bàn phím (Keyboard)', 'Micrô (Microphone)', 'Chuột (Mouse)', 'Máy in (Printer)'],
          correctAnswer: 3,
          hint: 'Thiết bị này in dữ liệu RA giấy — vậy nó đưa thông tin ra hay vào máy tính?',
          explain: 'Máy in là thiết bị xuất (đưa thông tin từ máy tính ra ngoài), không có chức năng nhập dữ liệu vào máy tính.'
        },

        /* Slide 19 (Trang 19 / 30) — slide hoàn thành RIÊNG cho bài học
           chính (2 phần lý thuyết + luyện tập), tách biệt với slide hoàn
           thành của phần Ôn tập ở cuối bài. */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 5!',
          content: 'Em đã biết các loại máy tính phổ biến và các thiết bị nhập (bàn phím, chuột, touchpad, bút cảm ứng, micro, camera) cùng chức năng của từng thiết bị.',
          imageUrl: null,
          remember: 'Muốn ôn lại toàn bộ câu hỏi của bài, bấm "Tiếp theo" để sang phần <b>Ôn tập</b> ngay sau đây.'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Ôn tập (mật khẩu: B0503)
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 2 phần
       trên để học sinh luyện lại. Đáp án làm ở đây độc lập hoàn
       toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's3',
      title: 'Ôn tập',
      password: PASSWORDS.s3,
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

        /* Slide 30 (Trang 30 / 30) — slide hoàn thành RIÊNG của phần Ôn tập.
           resetScope:'section' báo cho app.js biết: nút ở đây chỉ làm lại
           10 câu của phần Ôn tập (giữ nguyên tiến trình 2 phần trước), và
           điểm số hiển thị cũng chỉ tính trong phạm vi phần này. */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 5!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút "Làm lại phần này" — các đáp án của 2 phần học trước sẽ không bị ảnh hưởng.',
          imageUrl: null
        }
      ]
    }
  ]
};


/* ============================================================
   MẪU KHAI BÁO CÁC DẠNG SLIDE (tham khảo khi thêm nội dung mới)
   ------------------------------------------------------------
   Đặt bên trong mảng "slides" của bất kỳ section nào ở trên.
   Toàn bộ các dạng đều bắt buộc trả lời đúng mới bấm "Tiếp theo"
   được, trừ dạng "info".

   Slide "hoàn thành" cuối 1 phần/bài: thêm final:true để hiện điểm số
   và đổi nút cuối trang. Nếu muốn nút đó chỉ làm lại RIÊNG phần chứa
   slide này (không đụng các phần khác) thay vì học lại từ đầu cả bài,
   thêm resetScope:'section' — điểm số hiển thị cũng chỉ tính trong
   phần đó (dùng cho các phần "Ôn tập" gộp câu hỏi từ nhiều phần khác).

   Ngược lại, slide hoàn thành của BÀI CHÍNH (đứng trước phần Ôn tập)
   nên khai báo scoreSections:[0,1] (liệt kê đúng chỉ số các phần
   chính, bắt đầu từ 0) để không cộng nhầm điểm của các câu Ôn tập vào.
   ============================================================ */

// { type:'info', topic:'', title:'', content:'', imageUrl:null,
//   things:[{icon:'',name:'',en:''}], remember:'' }

// { type:'quiz_single', topic:'', question:'', options:['','','',''],
//   correctAnswer:0, hint:'', explain:'' }

// { type:'quiz_multiple', topic:'', question:'', options:['','','',''],
//   correctAnswers:[0,2], hint:'', explain:'' }

// { type:'quiz_dragdrop', topic:'', question:'',
//   zones:[{label:'',item:''}], hint:'', explain:'' }

// { type:'quiz_dropdown', topic:'', question:'... ___ ...',
//   blanks:[{options:['','',''],correctAnswer:0}], hint:'', explain:'' }

// { type:'quiz_matching', topic:'', question:'',
//   pairs:[{icon:'',left:'',right:''}], hint:'', explain:'' }

// { type:'quiz_hotspot', topic:'', question:'', imageUrl:null,
//   spots:[{label:'',x:10,y:15,w:25,h:25,correct:true}], hint:'', explain:'' }
