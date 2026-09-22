/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 6: MÁY TÍNH VÀ CÁC THIẾT BỊ NHẬP, XUẤT (2)
   (IC3 GS6 Spark — Level 2 — Chủ đề: Căn bản về công nghệ)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Nguồn: PDF gốc K4_B05-06_ThietBiNhapVaXuat gộp chung 2 bài (Bài 5
   và Bài 6). File này chỉ chứa Bài 6 (trang 29-79 của PDF gốc —
   chủ đề "Thiết bị xuất" + "Thiết bị vừa nhập vừa xuất" + "Tương
   tác với AI bằng thiết bị nhập, xuất"); Bài 5 nằm ở file riêng
   (bai-05.js).

   Ghi chú: PDF gốc còn có 2 trang "VẬN DỤNG" (hoạt động quan sát
   thiết bị quanh em / thử nghiệm với AI) — đây là hoạt động mở,
   không có đáp án đúng/sai cụ thể nên mình đưa vào dạng slide
   thông tin (đọc, không chấm điểm) ở cuối Phần 3, thay vì làm
   thành câu hỏi.

   Đây là BẢN THỬ đầu tiên — bạn xem qua câu chữ / mật khẩu và
   chỉnh lại nếu cần.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: '',   // Phần 1 — Thiết bị xuất
  s2: '',   // Phần 2 — Thiết bị vừa nhập vừa xuất
  s3: '',   // Phần 3 — Tương tác với AI bằng thiết bị nhập, xuất
  s4: ''    // Phần 4 — Ôn tập
};

const LESSON = {
  id:    'bai6-nhapxuat2',
  icon:  '🖨️',
  title: 'Bài 6 — Máy tính và các thiết bị nhập, xuất (2)',

  sections: [

    /* ============================================================
       PHẦN 1 — Thiết bị xuất (mật khẩu: B0601)
       ============================================================ */
    {
      id: 's1',
      title: 'Thiết bị xuất',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 22) */
        {
          type: 'info',
          topic: 'Phần 1 · Thiết bị xuất',
          title: 'Thiết bị xuất là gì?',
          content: '<b>Thiết bị xuất (Output Device)</b> là những thiết bị đưa kết quả xử lí của máy tính đến con người.',
          imageUrl: null,
          remember: 'Thiết bị xuất = Thiết bị đầu ra.'
        },

        /* Slide 2 (Trang 2 / 22) */
        {
          type: 'info',
          topic: 'Phần 1 · Thiết bị xuất',
          title: 'Màn hình (Monitor)',
          content: 'Lấy hình ảnh từ máy tính để hiển thị ra ngoài.',
          imageUrl: null
        },

        /* Slide 3 (Trang 3 / 22) */
        {
          type: 'info',
          topic: 'Phần 1 · Thiết bị xuất',
          title: 'Loa (Speakers)',
          content: 'Lấy âm thanh từ máy tính phát ra ngoài.',
          imageUrl: null
        },

        /* Slide 4 (Trang 4 / 22) */
        {
          type: 'info',
          topic: 'Phần 1 · Thiết bị xuất',
          title: 'Tai nghe (Headphones)',
          content: 'Lấy âm thanh từ máy tính phát ra ngoài.',
          imageUrl: null
        },

        /* Slide 5 (Trang 5 / 22) */
        {
          type: 'info',
          topic: 'Phần 1 · Thiết bị xuất',
          title: 'Máy chiếu (Projector)',
          content: 'Lấy hình ảnh từ máy tính và hiển thị lên một màn hình lớn hoặc bề mặt phẳng khác.',
          imageUrl: null
        },

        /* Slide 6 (Trang 6 / 22) */
        {
          type: 'info',
          topic: 'Phần 1 · Thiết bị xuất',
          title: 'Máy in (Printer)',
          content: 'Dùng để in dữ liệu từ máy tính ra ngoài giấy.',
          imageUrl: null
        },

        /* Slide 7 (Trang 7 / 22) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Em hãy chọn hai thiết bị xuất (Chọn 2)',
          options: ['Chuột (Mouse)', 'Bàn di chuột (Touchpad)', 'Màn hình (Monitor)', 'Bàn phím (Keyboard)', 'Máy in (Printer)'],
          correctAnswers: [2, 4],
          hint: 'Chuột, Touchpad, Bàn phím đều là thiết bị nhập.',
          explain: 'Màn hình và Máy in đều đưa kết quả xử lí từ máy tính ra ngoài, nên là thiết bị xuất.'
        },

        /* Slide 8 (Trang 8 / 22) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Trong các tùy chọn sau, tùy chọn nào là các thiết bị đầu ra (Output Device)? (Chọn 3)',
          options: ['Loa (Speakers)', 'Bàn di chuột cảm ứng (Touchpad)', 'Bàn phím (Keyboard)', 'Tai nghe (Headphones)', 'Chuột (Mouse)', 'Máy in (Printer)'],
          correctAnswers: [0, 3, 5],
          hint: 'Touchpad, Bàn phím, Chuột đều là thiết bị nhập — loại bỏ 3 lựa chọn này.',
          explain: 'Loa, Tai nghe và Máy in đều đưa thông tin từ máy tính ra ngoài cho con người, nên là thiết bị đầu ra (Output Device).'
        },

        /* Slide 9 (Trang 9 / 22)
           Ghi chú: PDF gốc trình bày dạng bảng 2 cột (Input/Output) với
           6 thiết bị. Mình chuyển thành dạng "chọn từ trong ô" (giống
           cách đã làm ở các bài trước) — mỗi thiết bị có 1 ô chọn Input
           hoặc Output. */
        {
          type: 'quiz_dropdown',
          topic: 'Luyện tập',
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
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Thiết bị vừa nhập vừa xuất (mật khẩu: B0602)
       ============================================================ */
    {
      id: 's2',
      title: 'Thiết bị vừa nhập vừa xuất',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 10 (Trang 10 / 22) */
        {
          type: 'info',
          topic: 'Phần 2 · Vừa nhập vừa xuất',
          title: 'Màn hình cảm ứng (Touch Screen)',
          content: 'Vừa đóng vai trò của chuột máy tính (<b>nhập</b> thông tin), vừa đóng vai trò hiển thị hình ảnh từ máy tính ra ngoài (<b>xuất</b> thông tin).',
          imageUrl: null
        },

        /* Slide 11 (Trang 11 / 22) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy điền vào chỗ trống để hoàn thành phát biểu sau đây: "___ có thể được xem là một thiết bị đặc biệt với tính chất của cả thiết bị nhập (Input Device) và thiết bị xuất (Output Device)."',
          options: ['Màn hình cảm ứng', 'Bàn phím', 'Máy in', 'Tai nghe'],
          correctAnswer: 0,
          hint: 'Thiết bị nào vừa để chạm chọn (nhập), vừa để xem hình ảnh (xuất)?',
          explain: 'Màn hình cảm ứng vừa là thiết bị nhập (chạm để chọn, giống chuột) vừa là thiết bị xuất (hiển thị hình ảnh).'
        },

        /* Slide 12 (Trang 12 / 22) */
        {
          type: 'info',
          topic: 'Phần 2 · Vừa nhập vừa xuất',
          title: 'Tai nghe đàm thoại (Headset)',
          content: 'Vừa giữ vai trò của Micro (<b>nhập</b> âm thanh), vừa giữ vai trò của tai nghe (Headphone — <b>xuất</b>/phát âm thanh ra ngoài).',
          imageUrl: null
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Tương tác với AI bằng thiết bị nhập, xuất
       (mật khẩu: B0603)
       ============================================================ */
    {
      id: 's3',
      title: 'Tương tác với AI bằng thiết bị nhập, xuất',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 13 (Trang 13 / 22) */
        {
          type: 'info',
          topic: 'Phần 3 · Tương tác với AI',
          title: 'Dùng thiết bị NHẬP để tương tác với AI',
          content: 'Các thiết bị nhập giúp em gửi yêu cầu (prompt) đến công cụ AI:',
          imageUrl: null,
          things: [
            { icon: '⌨️', name: 'Bàn phím', en: 'Gõ câu hỏi hoặc yêu cầu (prompt) gửi cho AI' },
            { icon: '🖱️', name: 'Chuột / Touchpad', en: 'Chọn nút gửi, chọn tùy chọn, điều hướng giao diện AI' },
            { icon: '🎙️', name: 'Micrô', en: 'Nói yêu cầu thay vì gõ (voice input); AI chuyển giọng nói thành văn bản' },
            { icon: '📷', name: 'Camera', en: 'Tải ảnh lên để AI nhận dạng, phân tích hoặc mô tả nội dung ảnh' }
          ]
        },

        /* Slide 14 (Trang 14 / 22) */
        {
          type: 'info',
          topic: 'Phần 3 · Tương tác với AI',
          title: 'Dùng thiết bị XUẤT để nhận kết quả từ AI',
          content: 'Khi dùng công cụ AI, thiết bị xuất giúp em nhận kết quả mà AI trả về:',
          imageUrl: null,
          things: [
            { icon: '🖥️', name: 'Màn hình', en: 'Hiển thị văn bản, câu trả lời, hình ảnh AI tạo ra, giao diện chatbot' },
            { icon: '🔊', name: 'Loa / Tai nghe', en: 'Phát giọng đọc câu trả lời (text-to-speech) khi AI đọc to nội dung' },
            { icon: '🖨️', name: 'Máy in', en: 'In ra câu trả lời của AI, bài văn AI hỗ trợ viết, nội dung AI tạo ra' },
            { icon: '📽️', name: 'Máy chiếu', en: 'Trình chiếu kết quả AI tạo ra cho cả lớp cùng xem trong bài học' }
          ]
        },

        /* Slide 15 (Trang 15 / 22) */
        {
          type: 'info',
          topic: 'Vận dụng',
          title: 'Hoạt động 1 — Quan sát thiết bị của em',
          content: 'Quan sát thiết bị của em (máy tính hoặc điện thoại), sau đó hoàn thành bảng sau vào vở:',
          imageUrl: null,
          things: [
            { icon: '📝', name: 'Liệt kê 3 thiết bị nhập', en: 'Ghi rõ chức năng của mỗi thiết bị' },
            { icon: '📝', name: 'Liệt kê 2 thiết bị xuất', en: 'Ghi rõ chức năng tương ứng' }
          ]
        },

        /* Slide 16 (Trang 16 / 22) */
        {
          type: 'info',
          topic: 'Vận dụng',
          title: 'Hoạt động 2 — Quan sát phòng học & thử nghiệm với AI',
          content: 'Quan sát thiết bị xung quanh em và hoàn thành bài tập: liệt kê 3 thiết bị xuất em nhìn thấy trong phòng học, xác định thiết bị nào vừa nhập vừa xuất, và mô tả chức năng từng thiết bị.',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Hỏi AI: "Kể tên 3 thiết bị xuất thông dụng"', en: 'Em thấy kết quả hiện trên thiết bị nào?' },
            { icon: '2️⃣', name: 'Bật tính năng đọc to (text-to-speech) nếu có', en: 'Em nghe qua thiết bị nào?' },
            { icon: '3️⃣', name: 'Ghi lại kết quả', en: 'Khi dùng AI, em đã sử dụng bao nhiêu thiết bị xuất khác nhau?' }
          ]
        },

        /* Slide 17 (Trang 17 / 22) — slide hoàn thành RIÊNG cho bài học
           chính (3 phần lý thuyết + luyện tập), tách biệt với slide hoàn
           thành của phần Ôn tập ở cuối bài. */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 6!',
          content: 'Em đã biết các thiết bị xuất phổ biến (màn hình, loa, tai nghe, máy chiếu, máy in), các thiết bị vừa nhập vừa xuất (màn hình cảm ứng, tai nghe đàm thoại), và cách dùng thiết bị nhập/xuất để tương tác với AI.',
          imageUrl: null,
          remember: 'Muốn ôn lại toàn bộ câu hỏi của bài, bấm "Tiếp theo" để sang phần <b>Ôn tập</b> ngay sau đây.'
        }
      ]
    },

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

        /* Slide 22 (Trang 22 / 22) — slide hoàn thành RIÊNG của phần Ôn tập.
           resetScope:'section' báo cho app.js biết: nút ở đây chỉ làm lại
           4 câu của phần Ôn tập (giữ nguyên tiến trình 3 phần trước), và
           điểm số hiển thị cũng chỉ tính trong phạm vi phần này. */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 6!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút "Làm lại phần này" — các đáp án của 3 phần học trước sẽ không bị ảnh hưởng.',
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
   nên khai báo scoreSections:[0,1,2] (liệt kê đúng chỉ số các phần
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
