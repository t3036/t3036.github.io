/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 8 — Kết nối các thiết bị
   (tách từ phần Ôn tập của bai-08.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s5: ''   // Phần 5 — Ôn tập
};

const LESSON = {
  id:    'bai8-ketnoi-on-tap',
  icon:  '🔌',
  title: 'Ôn tập Bài 8 — Kết nối các thiết bị',

  sections: [
    /* ============================================================
       PHẦN 5 — Ôn tập (mật khẩu: KN05)
       ============================================================ */
    {
      id: 's5',
      title: 'Ôn tập',
      password: PASSWORDS.s5,
      slides: [
        /* Slide 19 (Trang 19 / 26) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Bluetooth là gì?',
          options: ['Một loại công nghệ cần dùng dây cáp để kết nối với một thiết bị.', 'Công nghệ không dây khoảng cách gần dùng để kết nối với một thiết bị.', 'Một loại công nghệ dùng phần mềm để kết nối với từ 3 thiết bị trở lên.', 'Một quy trình cài đặt để kết nối hai thiết bị với nhau.'],
          correctAnswer: 1,
          hint: 'Bluetooth là kết nối KHÔNG dây và chỉ hiệu quả ở khoảng cách gần.',
          explain: 'Bluetooth là công nghệ không dây khoảng cách gần, dùng sóng vô tuyến để truyền dữ liệu giữa các thiết bị.'
        },

        /* Slide 20 (Trang 20 / 26) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Với mỗi câu phát biểu về cáp và kết nối không dây, hãy chọn Đúng hoặc Sai: Có thể dùng cáp USB để cấp dữ liệu và nguồn điện cho một thiết bị. ___ Có thể dùng kết nối Bluetooth để cấp dữ liệu và nguồn điện cho một thiết bị. ___ Có thể dùng bộ chia USB hub để cắm nhiều thiết bị vào cùng một cổng USB duy nhất. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'USB vừa truyền dữ liệu vừa cấp điện; Bluetooth chỉ truyền dữ liệu.',
          explain: 'Cáp USB cấp được cả dữ liệu và nguồn điện (Đúng). Bluetooth không cấp nguồn điện (Sai). USB hub gom nhiều thiết bị vào một cổng (Đúng).'
        },

        /* Slide 21 (Trang 21 / 26) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Có thể dùng loại kết nối nào để kết nối tai nghe không dây với máy tính xách tay?',
          options: ['USB', 'Intranet', 'HDMI', 'Bluetooth'],
          correctAnswer: 3,
          hint: 'Tai nghe "không dây" cần một kết nối không dây gần.',
          explain: 'Tai nghe không dây kết nối với máy tính xách tay bằng Bluetooth.'
        },

        /* Slide 22 (Trang 22 / 26) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Tùy chọn nào dưới đây có thể được sử dụng để truyền dữ liệu không dây giữa hai thiết bị gần nhau?',
          options: ['Bluetooth', 'Firewall', 'Modem', 'Ethernet'],
          correctAnswer: 0,
          hint: 'Firewall là tường lửa, Modem là thiết bị nối mạng, Ethernet là cáp mạng có dây.',
          explain: 'Bluetooth giúp truyền dữ liệu không dây giữa hai thiết bị ở gần nhau.'
        },

        /* Slide 23 (Trang 23 / 26) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là những thiết bị có thể được ghép nối không dây với máy tính? (Chọn 4)',
          options: ['CD Drive', 'Wired Router', 'Wireless Keyboard', 'Wireless Mouse', 'Driver', 'Wireless Printer', 'Bluetooth Speakers'],
          correctAnswers: [2, 3, 5, 6],
          hint: 'Chọn những thiết bị có chữ "Wireless" hoặc "Bluetooth" — CD Drive, Wired Router (có dây) và Driver (phần mềm) thì không.',
          explain: 'Bàn phím, chuột, máy in không dây và loa Bluetooth đều ghép nối không dây được với máy tính. CD Drive và Wired Router là thiết bị có dây, còn Driver là phần mềm điều khiển.'
        },

        /* Slide 24 (Trang 24 / 26) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, loại giao tiếp nào sau đây cho phép hai thiết bị giao tiếp bằng cách đặt chúng cách nhau trong vòng 2 inch?',
          options: ['Ethernet', 'Bluetooth', 'WiFi', 'NFC (Near Field Communication)'],
          correctAnswer: 3,
          hint: '2 inch chỉ khoảng 5 cm — rất gần.',
          explain: 'NFC (Near Field Communication) cho phép hai thiết bị giao tiếp khi đặt cách nhau trong vòng 2 inch (khoảng 5 cm).'
        },

        /* Slide 25 (Trang 25 / 26) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, loại kết nối không dây nào sau đây sẽ cho phép em tải hình ảnh từ máy ảnh vào máy tính?',
          options: ['HDMI', 'RCA', 'Bluetooth', 'VGA'],
          correctAnswer: 2,
          hint: 'HDMI, RCA, VGA đều là kết nối có dây.',
          explain: 'Trong 4 lựa chọn chỉ có Bluetooth là kết nối không dây, cho phép tải ảnh từ máy ảnh vào máy tính.'
        },

        /* Slide 26 — slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 8!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};
