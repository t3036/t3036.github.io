/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 8 — Mạng và Internet
   (tách từ phần Ôn tập của bai-08.js; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'l1-bai8-mang-internet-on-tap',
  icon:  '🌐',
  title: 'Ôn tập Bài 8 — Mạng và Internet',

  sections: [
    /* ============================================================
       PHẦN 7 — Ôn tập
       ============================================================ */
    {
      id: 's7',
      title: 'Ôn tập',
      slides: [
        /* Slide 21 (Trang 21 / 30) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, máy tính để bàn có thể sử dụng loại thiết bị nào để kết nối Internet?',
          options: ['Một thiết bị hiển thị (Display Device).', 'Một thiết bị Wi-Fi (Wi-Fi Device).', 'Một thiết bị đa phương tiện (Media Device).', 'Một thiết bị lưu trữ (Storage Device).'],
          correctAnswer: 1,
          hint: 'Máy tính để bàn cần phần cứng hỗ trợ Wi-Fi, ví dụ Card Wi-Fi gắn bên trong.',
          explain: 'Máy tính để bàn có thể kết nối Internet không dây nếu có một thiết bị Wi-Fi (như Card Wi-Fi gắn bên trong) hỗ trợ.'
        },

        /* Slide 22 (Trang 22 / 30) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, điện thoại thông minh có thể kết nối với Internet bằng những cách nào? (Chọn 2)',
          options: ['Gói dữ liệu từ nhà cung cấp dịch vụ di động', 'Wi-Fi', 'USB', 'Ethernet'],
          correctAnswers: [0, 1],
          hint: 'Điện thoại kết nối Internet không dây: qua sóng Wi-Fi hoặc qua sóng di động 3G/4G/5G.',
          explain: 'Điện thoại thông minh kết nối Internet bằng gói dữ liệu di động (3G/4G/5G) hoặc Wi-Fi. USB và Ethernet là cách kết nối có dây, không dùng trực tiếp cho điện thoại.'
        },

        /* Slide 23 (Trang 23 / 30) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em cần kết nối máy tính bảng với Internet. Em nên sử dụng phương tiện gì dưới đây?',
          options: ['Printer Cable', 'Wi-Fi', 'Monitor Cable', 'Bluetooth'],
          correctAnswer: 1,
          hint: 'Printer Cable và Monitor Cable là cáp cho máy in/màn hình; Bluetooth chỉ để kết nối thiết bị gần nhau.',
          explain: 'Máy tính bảng kết nối Internet bằng Wi-Fi (hoặc gói dữ liệu di động). Cáp máy in và cáp màn hình không dùng để kết nối Internet, còn Bluetooth dùng để kết nối giữa các thiết bị gần nhau.'
        },

        /* Slide 24 (Trang 24 / 30) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là những cách có thể sử dụng để kết nối máy tính bảng với Internet? (Chọn 2)',
          options: ['Sử dụng kết nối Wi-Fi công cộng', 'Sử dụng gói dữ liệu từ nhà cung cấp dịch vụ di động', 'Cắm cáp Ethernet vào thiết bị và tường'],
          correctAnswers: [0, 1],
          hint: 'Máy tính bảng kết nối không dây, không cắm cáp Ethernet.',
          explain: 'Máy tính bảng kết nối Internet bằng Wi-Fi hoặc gói dữ liệu di động. Cáp Ethernet không phù hợp với máy tính bảng.'
        },

        /* Slide 25 (Trang 25 / 30) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, trong các tùy chọn sau, tùy chọn nào là phát biểu đúng nhất về Internet? (Chọn 2)',
          options: ['Internet là Wi-Fi.', 'Internet là mạng máy tính toàn cầu.', 'Internet là hệ thống các máy tính ở khắp nơi trên toàn thế giới được kết nối với nhau để chia sẻ (truyền và nhận) thông tin.'],
          correctAnswers: [1, 2],
          hint: 'Wi-Fi chỉ là một cách kết nối vào Internet, không phải Internet.',
          explain: 'Internet là mạng máy tính toàn cầu, gồm các máy tính khắp thế giới kết nối để chia sẻ thông tin. Wi-Fi chỉ là một cách để kết nối vào Internet, không phải là Internet.'
        },

        /* Slide 26 (Trang 26 / 30) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, trong các tùy chọn sau, tùy chọn nào là thiết bị có thể kết nối với Internet? (Chọn 4)',
          options: ['Máy tính để bàn (Desktop Computer)', 'Điện thoại thông minh (Smartphone)', 'Máy tính xách tay (Laptop Computer)', 'Máy tính Bảng (Tablet)', 'Chuột máy tính không dây (Wireless Mouse)'],
          correctAnswers: [0, 1, 2, 3],
          hint: 'Chuột không dây chỉ là thiết bị nhập, nó kết nối với máy tính chứ không tự kết nối Internet.',
          explain: 'Máy tính để bàn, điện thoại thông minh, máy tính xách tay và máy tính bảng đều kết nối được với Internet. Chuột không dây chỉ kết nối với máy tính, không kết nối Internet.'
        },

        /* Slide 27 (Trang 27 / 30) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy lựa chọn Đúng (T) hoặc Sai (F) với các phát biểu sau: Hệ thống các điện thoại được kết nối với nhau để truyền và nhận thông tin được gọi là mạng điện thoại. ___ Hệ thống các máy tính được kết nối với nhau để truyền và nhận thông tin được gọi là mạng máy tính. ___ Mạng là hệ thống các thiết bị kĩ thuật số được đặt tại vị trí gần nhau. ___ Mạng là hệ thống kết nối các thiết bị kĩ thuật số để chia sẻ (truyền và nhận) thông tin. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Mạng được định nghĩa bởi việc KẾT NỐI để truyền/nhận thông tin, không phụ thuộc vị trí đặt gần hay xa.',
          explain: 'Mạng điện thoại và mạng máy tính đều đúng (Đúng, Đúng). Mạng không nhất thiết các thiết bị phải đặt gần nhau — điều quan trọng là chúng được kết nối để chia sẻ thông tin (Sai). Định nghĩa cuối cùng là đúng (Đúng).'
        },

        /* Slide 28 (Trang 28 / 30) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, các máy tính và điện thoại thông minh được kết nối với Internet bằng hình thức nào?',
          options: ['Chỉ kết nối có dây', 'Chỉ kết nối không dây', 'Kết nối có dây và kết nối không dây', 'Không kết nối được'],
          correctAnswer: 2,
          hint: 'Có cả cách dùng dây (như máy tính để bàn) và cách không dây (như điện thoại).',
          explain: 'Các thiết bị được kết nối Internet bằng cả hình thức có dây lẫn không dây, tùy loại thiết bị và nhu cầu.'
        },

        /* Slide 29 (Trang 29 / 30) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, trong các tùy chọn sau tùy chọn nào là thiết bị mạng? (Chọn 3)',
          options: ['Card mạng (Network Card)', 'Máy tính xách tay (Laptop)', 'Hub', 'Router'],
          correctAnswers: [0, 2, 3],
          hint: 'Máy tính xách tay là thiết bị dùng để làm việc, không phải thiết bị giúp truyền thông tin trong mạng.',
          explain: 'Card mạng, Hub và Router là các thiết bị mạng giúp truyền thông tin trong mạng. Máy tính xách tay là thiết bị người dùng, không phải thiết bị mạng.'
        },

        /* Slide 30 — slide hoàn thành */
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
