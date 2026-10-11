/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 8: MẠNG VÀ INTERNET
   (IC3 GS6 Spark — Level 1 — Chủ đề: Căn bản về công nghệ)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Nguồn: PPTX gốc K3_B08_MangVaInternet.pptx (40 slide).
   LƯU Ý: đây là Bài 8 của LEVEL 1, khác với "Bài 8 — Kết nối các
   thiết bị" của Level 2 (cùng tên file bai-08.js). Đặt vào đúng
   thư mục level-1 của bạn.

   ĐÁP ÁN: lấy trực tiếp từ file PPTX (không tự suy luận):
   - Câu trắc nghiệm: đáp án là ô được animation đổi sang màu xanh.
   - Câu Đúng/Sai: đáp án là ô "Đúng"/"Sai" được animation nhấn mạnh.

   Ghi chú:
   - Câu "thiết bị mạng (Chọn 3)" ở slide 6 gốc có các lựa chọn là
     hình ảnh (Card mạng, Laptop, Hub, Router); mình ghi tên từng
     thiết bị bằng chữ. Đáp án theo file: Card mạng, Hub, Router.
   - 2 slide gốc "Tìm kiếm thông tin" bị tác giả ẩn; nội dung đã gộp
     vào slide Internet.
   - Phần Thiết bị đa phương tiện không có câu hỏi trong file gốc.
   - "Đọc thêm" về AI là slide đọc, không chấm điểm.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: '',  // Phần 1 — Mạng là gì?
  s2: '',  // Phần 2 — Internet
  s3: '',  // Phần 3 — Kết nối máy tính, điện thoại thông minh với Internet
  s4: '',  // Phần 4 — Gói dữ liệu di động
  s5: '',  // Phần 5 — Thiết bị đa phương tiện
  s6: '',  // Phần 6 — Trực tuyến cùng AI
};

const LESSON = {
  id:    'l1-bai8-mang-internet',
  icon:  '🌐',
  title: 'Bài 8 — Mạng và Internet',

  sections: [
    /* ============================================================
       PHẦN 1 — Mạng là gì? (mật khẩu: MI01)
       ============================================================ */
    {
      id: 's1',
      title: 'Mạng là gì?',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 30) */
        {
          type: 'info',
          topic: 'Phần 1 · Mạng là gì?',
          title: 'Mạng là gì?',
          content: '<b>Mạng</b> là một hệ thống để truyền thông tin. Có nhiều loại mạng khác nhau: mạng di động, mạng điện thoại, Internet, …',
          // imageUrl: 'null',
          // imageUrls: [
          //   'https://www.phucanh.vn/media/news/0511_meo-su-dung-google-dich.jpg',
          //   'https://www.phucanh.vn/media/news/0511_meo-su-dung-google-dich.jpg',
          //   'https://www.phucanh.vn/media/news/0511_meo-su-dung-google-dich.jpg',
          // ],
          things: [
            { icon: '💻💻💻', name: 'Mạng máy tính', en: 'Các máy tính được kết nối với nhau' },
            { icon: '📱📱📱', name: 'Mạng di động', en: 'Các điện thoại được kết nối với nhau' }
          ],
        },

        /* Slide 2 (Trang 2 / 30) */
        {
          type: 'info',
          topic: 'Phần 1 · Mạng là gì?',
          title: 'Thiết bị kết nối mạng',
          content: 'Để truyền thông tin trong mạng, em phải sử dụng các <b>thiết bị mạng</b>. Một số thiết bị mạng cơ bản:',
          imageUrl: 'img/slide2.png',
          things: [
            { icon: '🔌', name: 'Card mạng', en: 'Cho máy tính kết nối vào mạng' },
            { icon: '🔀', name: 'Hub', en: 'Chia tín hiệu mạng đến nhiều thiết bị' },
            { icon: '📡', name: 'Router', en: 'Kết nối các mạng và phát tín hiệu' }
          ]
        },

        /* Slide 3 (Trang 3 / 30) */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, trong các tùy chọn sau tùy chọn nào là thiết bị mạng? (Chọn 3)',
          options: ['Card mạng (Network Card)', 'Máy tính xách tay (Laptop)', 'Hub', 'Router'],
          correctAnswers: [0, 2, 3],
          hint: 'Máy tính xách tay là thiết bị dùng để làm việc, không phải thiết bị giúp truyền thông tin trong mạng.',
          explain: 'Card mạng, Hub và Router là các thiết bị mạng giúp truyền thông tin trong mạng. Máy tính xách tay là thiết bị người dùng, không phải thiết bị mạng.'
        },

        /* Slide 4 (Trang 4 / 30) */
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Em hãy lựa chọn Đúng hoặc Sai với các phát biểu sau: Hệ thống các điện thoại được kết nối với nhau để truyền và nhận thông tin được gọi là mạng điện thoại. ___ Hệ thống các máy tính được kết nối với nhau để truyền và nhận thông tin được gọi là mạng máy tính. ___ Mạng là hệ thống các thiết bị kĩ thuật số được đặt tại vị trí gần nhau. ___ Mạng là hệ thống kết nối các thiết bị kĩ thuật số để chia sẻ (truyền và nhận) thông tin. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Mạng được định nghĩa bởi việc KẾT NỐI để truyền/nhận thông tin, không phụ thuộc vị trí đặt gần hay xa.',
          explain: 'Mạng điện thoại và mạng máy tính đều đúng (Đúng, Đúng). Mạng không nhất thiết các thiết bị phải đặt gần nhau — điều quan trọng là chúng được kết nối để chia sẻ thông tin (Sai). Định nghĩa cuối cùng là đúng (Đúng).'
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Internet (mật khẩu: MI02)
       ============================================================ */
    {
      id: 's2',
      title: 'Internet',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 5 (Trang 5 / 30) */
        {
          type: 'info',
          topic: 'Phần 2 · Internet',
          title: 'Internet',
          content: '<b>Internet</b> là một mạng lưới toàn cầu liên kết nhiều máy tính với nhau. Ngoài việc tìm kiếm thông tin qua sách, báo,… chúng ta có thể tìm kiếm thông tin trên Internet.',
          imageUrl: 'img/slide5.png',
          things: [
            { icon: '🔎', name: 'Tìm kiếm thông tin', en: '' },
            { icon: '📖', name: 'Đọc sách, giải trí', en: '' }
          ]
        },

        /* Slide 6 (Trang 6 / 30) */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, trong các tùy chọn sau, tùy chọn nào là phát biểu đúng nhất về Internet? (Chọn 2)',
          options: ['Internet là Wi-Fi.', 'Internet là mạng máy tính toàn cầu.', 'Internet là hệ thống các máy tính ở khắp nơi trên toàn thế giới được kết nối với nhau để chia sẻ (truyền và nhận) thông tin.'],
          correctAnswers: [1, 2],
          hint: 'Wi-Fi chỉ là một cách kết nối vào Internet, không phải Internet.',
          explain: 'Internet là mạng máy tính toàn cầu, gồm các máy tính khắp thế giới kết nối để chia sẻ thông tin. Wi-Fi chỉ là một cách để kết nối vào Internet, không phải là Internet.'
        },

        /* Slide 7 (Trang 7 / 30) */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, trong các tùy chọn sau, tùy chọn nào là thiết bị có thể kết nối với Internet? (Chọn 4)',
          options: ['Máy tính để bàn (Desktop Computer)', 'Điện thoại thông minh (Smartphone)', 'Máy tính xách tay (Laptop Computer)', 'Máy tính Bảng (Tablet)', 'Chuột máy tính không dây (Wireless Mouse)'],
          correctAnswers: [0, 1, 2, 3],
          hint: 'Chuột không dây chỉ là thiết bị nhập, nó kết nối với máy tính chứ không tự kết nối Internet.',
          explain: 'Máy tính để bàn, điện thoại thông minh, máy tính xách tay và máy tính bảng đều kết nối được với Internet. Chuột không dây chỉ kết nối với máy tính, không kết nối Internet.'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Kết nối máy tính, điện thoại thông minh với Internet (mật khẩu: MI03)
       ============================================================ */
    {
      id: 's3',
      title: 'Kết nối máy tính, điện thoại thông minh với Internet',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 8 (Trang 8 / 30) */
        {
          type: 'info',
          topic: 'Phần 3 · Kết nối Internet',
          title: 'Máy tính kết nối Internet',
          content: 'Máy tính và điện thoại thông minh có thể kết nối Internet bằng 2 hình thức:',
          imageUrl: null,
          things: [
            { icon: '🔌', name: 'Kết nối có dây', en: 'Ví dụ: máy tính để bàn' },
            { icon: '<i class="fa-solid fa-wifi"></i><i class="fa-solid fa-tower-broadcast" style="color: rgb(6, 75, 131);"></i>', name: 'Kết nối không dây', en: 'Ví dụ: máy tính xách tay' }
          ]
        },

        /* Slide 9 (Trang 9 / 30) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, các máy tính và điện thoại thông minh được kết nối với Internet bằng hình thức nào?',
          options: ['Chỉ kết nối có dây', 'Chỉ kết nối không dây', 'Kết nối có dây và kết nối không dây', 'Không kết nối được'],
          correctAnswer: 2,
          hint: 'Có cả cách dùng dây (như máy tính để bàn) và cách không dây (như điện thoại).',
          explain: 'Các thiết bị được kết nối Internet bằng cả hình thức có dây lẫn không dây, tùy loại thiết bị và nhu cầu.'
        },

        /* Slide 10 (Trang 10 / 30) */
        {
          type: 'info',
          topic: 'Phần 3 · Kết nối Internet',
          title: 'Điện thoại và máy tính bảng',
          content: 'Điện thoại thông minh và máy tính bảng kết nối Internet bằng <b>kết nối không dây</b> (Wi-Fi, gói dữ liệu di động).',
          imageUrl: null,
          things: [
            { icon: '📱', name: 'Điện thoại thông minh', en: '' },
            { icon: '📲', name: 'Máy tính bảng', en: '' }
          ]
        },

        /* Slide 11 (Trang 11 / 30) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em cần kết nối máy tính bảng với Internet. Em nên sử dụng phương tiện gì dưới đây?',
          options: ['Printer Cable', 'Wi-Fi', 'Monitor Cable', 'Bluetooth'],
          correctAnswer: 1,
          hint: 'Printer Cable và Monitor Cable là cáp cho máy in/màn hình; Bluetooth chỉ để kết nối thiết bị gần nhau.',
          explain: 'Máy tính bảng kết nối Internet bằng Wi-Fi (hoặc gói dữ liệu di động). Cáp máy in và cáp màn hình không dùng để kết nối Internet, còn Bluetooth dùng để kết nối giữa các thiết bị gần nhau.'
        },

        /* Slide 12 (Trang 12 / 30) */
        {
          type: 'info',
          topic: 'Phần 3 · Kết nối Internet',
          title: 'Máy tính để bàn kết nối Wi-Fi',
          content: 'Máy tính bàn cũng có thể kết nối Wi-Fi <b>nếu có phần cứng hỗ trợ</b>.',
          imageUrl: null,
          things: [
            { icon: '🖥️', name: 'Máy tính để bàn', en: '' },
            { icon: '🧩', name: 'Card Wi-Fi gắn bên trong', en: 'Dành cho máy tính bàn' }
          ]
        },

        /* Slide 13 (Trang 13 / 30) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, máy tính để bàn có thể sử dụng loại thiết bị nào để kết nối Internet?',
          options: ['Một thiết bị hiển thị (Display Device).', 'Một thiết bị Wi-Fi (Wi-Fi Device).', 'Một thiết bị đa phương tiện (Media Device).', 'Một thiết bị lưu trữ (Storage Device).'],
          correctAnswer: 1,
          hint: 'Máy tính để bàn cần phần cứng hỗ trợ Wi-Fi, ví dụ Card Wi-Fi gắn bên trong.',
          explain: 'Máy tính để bàn có thể kết nối Internet không dây nếu có một thiết bị Wi-Fi (như Card Wi-Fi gắn bên trong) hỗ trợ.'
        }
      ]
    },

    /* ============================================================
       PHẦN 4 — Gói dữ liệu di động (mật khẩu: MI04)
       ============================================================ */
    {
      id: 's4',
      title: 'Gói dữ liệu di động',
      password: PASSWORDS.s4,
      slides: [
        /* Slide 14 (Trang 14 / 30) */
        {
          type: 'info',
          topic: 'Phần 4 · Gói dữ liệu di động',
          title: 'Gói dữ liệu di động',
          content: '<b>Gói dữ liệu di động</b> là một dịch vụ giúp điện thoại có thể kết nối Internet mà không cần Wi-Fi.',
          imageUrl: null,
          remember: 'Ví dụ: khi em dùng 3G, 4G, 5G trên điện thoại để xem video, chơi game, nhắn tin mà không cần Wi-Fi, em đang dùng gói dữ liệu di động.'
        },

        /* Slide 15 (Trang 15 / 30) */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, điện thoại thông minh có thể kết nối với Internet bằng những cách nào? (Chọn 2)',
          options: ['Gói dữ liệu từ nhà cung cấp dịch vụ di động', 'Wi-Fi', 'USB', 'Ethernet'],
          correctAnswers: [0, 1],
          hint: 'Điện thoại kết nối Internet không dây: qua sóng Wi-Fi hoặc qua sóng di động 3G/4G/5G.',
          explain: 'Điện thoại thông minh kết nối Internet bằng gói dữ liệu di động (3G/4G/5G) hoặc Wi-Fi. USB và Ethernet là cách kết nối có dây, không dùng trực tiếp cho điện thoại.'
        },

        /* Slide 16 (Trang 16 / 30) */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là những cách có thể sử dụng để kết nối máy tính bảng với Internet? (Chọn 2)',
          options: ['Sử dụng kết nối Wi-Fi công cộng', 'Sử dụng gói dữ liệu từ nhà cung cấp dịch vụ di động', 'Cắm cáp Ethernet vào thiết bị và tường'],
          correctAnswers: [0, 1],
          hint: 'Máy tính bảng kết nối không dây, không cắm cáp Ethernet.',
          explain: 'Máy tính bảng kết nối Internet bằng Wi-Fi hoặc gói dữ liệu di động. Cáp Ethernet không phù hợp với máy tính bảng.'
        }
      ]
    },

    /* ============================================================
       PHẦN 5 — Thiết bị đa phương tiện (mật khẩu: MI05)
       ============================================================ */
    {
      id: 's5',
      title: 'Thiết bị đa phương tiện',
      password: PASSWORDS.s5,
      slides: [
        /* Slide 17 (Trang 17 / 30) */
        {
          type: 'info',
          topic: 'Phần 5 · Thiết bị đa phương tiện',
          title: 'Thiết bị đa phương tiện',
          content: 'Hai khái niệm cần nhớ:',
          imageUrl: null,
          things: [
            { icon: '🎬', name: 'Đa phương tiện (Media)', en: 'Sản phẩm kết hợp từ nhiều loại thông tin khác nhau như âm thanh, hình ảnh, video và chữ viết để tạo thành một nội dung' },
            { icon: '📺', name: 'Thiết bị đa phương tiện (Media Device)', en: 'Thiết bị giúp em xem phim, nghe nhạc, chơi game như: máy tính, điện thoại, Tivi, máy chiếu,…' }
          ],
          remember: 'Ví dụ: khi em xem một video trên YouTube, em thấy cả hình ảnh, nghe âm thanh và đôi khi có cả chữ viết.'
        }
      ]
    },

    /* ============================================================
       PHẦN 6 — Trực tuyến cùng AI (Đọc thêm) (mật khẩu: MI06)
       ============================================================ */
    {
      id: 's6',
      title: 'Trực tuyến cùng AI',
      password: PASSWORDS.s6,
      slides: [
        /* Slide 18 (Trang 18 / 30) */
        {
          type: 'info',
          topic: 'Đọc thêm · Trực tuyến cùng AI',
          title: 'Trực tuyến cùng AI',
          content: 'Nhiều công cụ AI trực tuyến cần <b>Internet</b> để hoạt động. Khi em dùng chatbot AI trên Web, yêu cầu của em được gửi qua Internet đến dịch vụ trực tuyến, sau đó hệ thống xử lí và trả kết quả về thiết bị của em.',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Gửi yêu cầu', en: 'Từ thiết bị của em' },
            { icon: '2️⃣', name: 'Internet', en: 'Truyền yêu cầu đi' },
            { icon: '3️⃣', name: 'Dịch vụ trực tuyến (AI)', en: 'Xử lí yêu cầu' },
            { icon: '4️⃣', name: 'Trả kết quả về thiết bị', en: 'Em nhận được câu trả lời' }
          ]
        },

        /* Slide 19 (Trang 19 / 30) */
        {
          type: 'info',
          topic: 'Đọc thêm · Trực tuyến cùng AI',
          title: 'Kiểm tra thông tin và giữ an toàn',
          content: 'Thông tin trên Internet và câu trả lời của AI <b>có thể đúng, chưa đủ hoặc sai</b>. Em cần kiểm tra bằng nguồn đáng tin cậy, hỏi giáo viên hoặc so sánh với bài học trước khi sử dụng. Hãy kiểm tra bằng cách:',
          imageUrl: null,
          things: [
            { icon: '🌐', name: 'Tìm trên website uy tín', en: '' },
            { icon: '🙋', name: 'Hỏi giáo viên hoặc người lớn', en: '' },
            { icon: '📚', name: 'So sánh với bài học trước', en: '' },
            { icon: '✅', name: 'Kiểm tra xem thông tin có đáng tin', en: '' }
          ],
          remember: 'Em <b>không</b> bấm liên kết lạ, <b>không</b> nhập mật khẩu, địa chỉ, số điện thoại hoặc dữ liệu riêng tư vào AI.'
        },

        /* Slide 20 (Trang 20 / 30) — slide hoàn thành RIÊNG cho bài học chính (scoreSections) */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2, 3, 4, 5],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 8!',
          content: 'Em đã biết mạng là gì, Internet là gì, các cách kết nối máy tính và điện thoại với Internet, gói dữ liệu di động, thiết bị đa phương tiện, và cách dùng AI trực tuyến một cách an toàn.',
          imageUrl: null,
          remember: 'Muốn ôn lại toàn bộ câu hỏi của bài, hãy vào trang <b>Ôn tập</b> để luyện thêm.'
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
   nên khai báo scoreSections:[0,1,2,...] (liệt kê đúng chỉ số các
   phần chính, bắt đầu từ 0) để không cộng nhầm điểm của Ôn tập vào.
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
