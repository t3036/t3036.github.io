/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 8: KẾT NỐI CÁC THIẾT BỊ
   (IC3 GS6 Spark — Level 2 — Chủ đề: Căn bản về công nghệ)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Nguồn: PPTX gốc K4_B08_KetNoiCacThietBi.pptx (37 slide).

   ĐÁP ÁN: lấy trực tiếp từ file PPTX (không tự suy luận):
   - Câu trắc nghiệm: đáp án là ô được animation đổi sang màu xanh.
   - Câu Đúng/Sai dạng bảng: đáp án là hình dấu tick đặt trong cột
     "Đúng" hoặc "Sai" (đối chiếu theo toạ độ trong bảng).

   Ghi chú:
   - Câu Đúng/Sai ở phần Ôn tập (slide 30 gốc) đã gộp sẵn cả 3
     phát biểu trong 1 bảng, nên là 1 câu duy nhất trong Ôn tập
     (ở bài chính chúng tách thành 2 câu theo đúng file gốc).
   - Câu "Chọn 4" (ghép nối không dây với máy tính) có 7 lựa chọn.
   - Mục "Đọc thêm" về AI lấy nội dung từ hình + Speaker Notes.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: '',  // Phần 1 — Các hình thức kết nối thiết bị kĩ thuật số
  s2: '',  // Phần 2 — Kết nối có dây
  s3: '',  // Phần 3 — Kết nối không dây
  s4: '',  // Phần 4 — Kết nối thiết bị khi sử dụng AI (Đọc thêm)
};

const LESSON = {
  id:    'bai8-ketnoi',
  icon:  '🔌',
  title: 'Bài 8 — Kết nối các thiết bị',

  sections: [
    /* ============================================================
       PHẦN 1 — Các hình thức kết nối thiết bị kĩ thuật số (mật khẩu: KN01)
       ============================================================ */
    {
      id: 's1',
      title: 'Các hình thức kết nối thiết bị kĩ thuật số',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 26) */
        {
          type: 'info',
          topic: 'Khởi động',
          title: 'Khởi động',
          content: 'Theo em các thiết bị dưới đây kết nối với nhau bằng cách nào?',
          imageUrl: null,
          things: [
            { icon: '🔌', name: 'Nhóm 1: Kết nối bằng …', en: 'Màn hình nối bằng cáp HDMI hoặc VGA · Router nối modem bằng cáp mạng · Thân máy (CPU) nối nguồn điện bằng cáp nguồn · Các loại cáp khác' },
            { icon: '📡', name: 'Nhóm 2: Kết nối bằng …', en: 'Chuột, tai nghe, loa với Bluetooth · Máy tính xách tay, máy tính bảng, điện thoại với Wi-Fi' }
          ]
        },

        /* Slide 2 (Trang 2 / 26) */
        {
          type: 'info',
          topic: 'Phần 1 · Hình thức kết nối',
          title: 'Các hình thức kết nối thiết bị kĩ thuật số',
          content: 'Để các thiết bị kĩ thuật số có thể giao tiếp và trao đổi dữ liệu với nhau, chúng cần được kết nối.',
          imageUrl: null,
          things: [
            { icon: '🔌', name: 'Kết nối có dây (Wired Connection)', en: 'Dùng cáp vật lí để nối trực tiếp hai thiết bị' },
            { icon: '📡', name: 'Kết nối không dây (Wireless Connection)', en: 'Truyền dữ liệu qua sóng vô tuyến, không cần cáp' }
          ],
          remember: 'Mỗi hình thức có ưu điểm riêng. <b>Có dây:</b> ổn định, nhanh hơn, ít bị ảnh hưởng bởi môi trường. <b>Không dây:</b> tiện lợi, linh hoạt, dễ dàng di chuyển và sử dụng.'
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Kết nối có dây (mật khẩu: KN02)
       ============================================================ */
    {
      id: 's2',
      title: 'Kết nối có dây',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 3 (Trang 3 / 26) */
        {
          type: 'info',
          topic: 'Phần 2 · Kết nối có dây',
          title: 'Cổng và đầu nối Video',
          content: 'Em có thể kết nối màn hình, máy chiếu, Tivi đến máy tính thông qua <b>cổng Video (Video Port)</b>. Đầu nối (Connector) ở đầu dây cáp sẽ cắm vào cổng (Port) trên thiết bị.',
          imageUrl: null,
          things: [
            { icon: '🖥️', name: 'VGA', en: 'Cổng/đầu nối video' },
            { icon: '🖥️', name: 'DVI', en: 'Cổng/đầu nối video' },
            { icon: '📺', name: 'HDMI', en: 'Cổng/đầu nối video' }
          ]
        },

        /* Slide 4 (Trang 4 / 26) */
        {
          type: 'info',
          topic: 'Phần 2 · Kết nối có dây',
          title: 'Ethernet, USB và USB Hub',
          content: 'Một số kết nối có dây thường gặp:',
          imageUrl: null,
          things: [
            { icon: '🌐', name: 'Ethernet', en: 'Kết nối mạng bằng cáp có dây Ethernet' },
            { icon: '⌨️', name: 'USB', en: 'Ví dụ: kết nối bàn phím bằng cáp USB. Cáp USB còn có thể dùng để sạc pin cho thiết bị' },
            { icon: '🔀', name: 'USB Hub', en: 'Tập trung nhiều cổng kết nối vào một cổng' }
          ]
        },

        /* Slide 5 (Trang 5 / 26) */
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Với mỗi câu phát biểu về kết nối có dây, hãy chọn Đúng hoặc Sai: Có thể dùng cáp USB để cấp dữ liệu và nguồn điện cho một thiết bị. ___ Có thể dùng bộ chia USB hub để cắm nhiều thiết bị vào cùng một cổng USB duy nhất. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'USB vừa truyền dữ liệu vừa cấp điện; USB hub giúp gom nhiều thiết bị vào một cổng.',
          explain: 'Cáp USB có thể cấp cả dữ liệu lẫn nguồn điện (Đúng). USB hub gom nhiều cổng kết nối vào một cổng duy nhất (Đúng).'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Kết nối không dây (mật khẩu: KN03)
       ============================================================ */
    {
      id: 's3',
      title: 'Kết nối không dây',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 6 (Trang 6 / 26) */
        {
          type: 'info',
          topic: 'Phần 3 · Kết nối không dây',
          title: 'Wi-Fi',
          content: '<b>Wi-Fi</b> giúp thiết bị kết nối với router và truy cập Internet. Cần có điểm phát Wi-Fi (router / điểm truy cập) và nhanh hơn Bluetooth.',
          imageUrl: null,
          things: [
            { icon: '🎬', name: 'Xem phim', en: '' },
            { icon: '📥', name: 'Tải file', en: '' },
            { icon: '🤖', name: 'Dùng AI trực tuyến', en: '' }
          ]
        },

        /* Slide 7 (Trang 7 / 26) */
        {
          type: 'info',
          topic: 'Phần 3 · Kết nối không dây',
          title: 'Bluetooth',
          content: '<b>Bluetooth</b> là công nghệ kết nối không dây khoảng cách gần, dùng sóng vô tuyến để truyền dữ liệu giữa các thiết bị mà không cần cáp. Khoảng cách kết nối hiệu quả thường dưới <b>10 mét</b>.',
          imageUrl: null,
          things: [
            { icon: '🎧', name: 'Tai nghe không dây', en: '' },
            { icon: '🔊', name: 'Loa Bluetooth', en: '' },
            { icon: '⌨️', name: 'Bàn phím / Chuột không dây', en: '' },
            { icon: '⌚', name: 'Đồng hồ thông minh', en: '' },
            { icon: '📷', name: 'Máy ảnh', en: '' }
          ],
          remember: 'Ví dụ: nhờ kết nối Bluetooth, em có thể tải hình ảnh từ máy ảnh vào máy tính.'
        },

        /* Slide 8 (Trang 8 / 26) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Tùy chọn nào dưới đây có thể được sử dụng để truyền dữ liệu không dây giữa hai thiết bị gần nhau?',
          options: ['Bluetooth', 'Firewall', 'Modem', 'Ethernet'],
          correctAnswer: 0,
          hint: 'Firewall là tường lửa, Modem là thiết bị nối mạng, Ethernet là cáp mạng có dây.',
          explain: 'Bluetooth giúp truyền dữ liệu không dây giữa hai thiết bị ở gần nhau.'
        },

        /* Slide 9 (Trang 9 / 26) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Bluetooth là gì?',
          options: ['Một loại công nghệ cần dùng dây cáp để kết nối với một thiết bị.', 'Công nghệ không dây khoảng cách gần dùng để kết nối với một thiết bị.', 'Một loại công nghệ dùng phần mềm để kết nối với từ 3 thiết bị trở lên.', 'Một quy trình cài đặt để kết nối hai thiết bị với nhau.'],
          correctAnswer: 1,
          hint: 'Bluetooth là kết nối KHÔNG dây và chỉ hiệu quả ở khoảng cách gần.',
          explain: 'Bluetooth là công nghệ không dây khoảng cách gần, dùng sóng vô tuyến để truyền dữ liệu giữa các thiết bị.'
        },

        /* Slide 10 (Trang 10 / 26) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, loại kết nối không dây nào sau đây sẽ cho phép em tải hình ảnh từ máy ảnh vào máy tính?',
          options: ['HDMI', 'RCA', 'Bluetooth', 'VGA'],
          correctAnswer: 2,
          hint: 'HDMI, RCA, VGA đều là kết nối có dây.',
          explain: 'Trong 4 lựa chọn chỉ có Bluetooth là kết nối không dây, cho phép tải ảnh từ máy ảnh vào máy tính.'
        },

        /* Slide 11 (Trang 11 / 26) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Có thể dùng loại kết nối nào để kết nối tai nghe không dây với máy tính xách tay?',
          options: ['USB', 'Intranet', 'HDMI', 'Bluetooth'],
          correctAnswer: 3,
          hint: 'Tai nghe "không dây" cần một kết nối không dây gần.',
          explain: 'Tai nghe không dây kết nối với máy tính xách tay bằng Bluetooth.'
        },

        /* Slide 12 (Trang 12 / 26) */
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Với câu phát biểu về kết nối không dây, hãy chọn Đúng hoặc Sai: Có thể dùng kết nối Bluetooth để cấp dữ liệu và nguồn điện cho một thiết bị. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 1 }
          ],
          hint: 'Bluetooth chỉ truyền dữ liệu, không truyền điện.',
          explain: 'Bluetooth chỉ truyền dữ liệu không dây, không cấp nguồn điện cho thiết bị (Sai). Muốn cấp cả dữ liệu và nguồn điện cần dùng cáp như USB.'
        },

        /* Slide 13 (Trang 13 / 26) */
        {
          type: 'info',
          topic: 'Phần 3 · Kết nối không dây',
          title: 'NFC',
          content: '<b>NFC (Near Field Communication)</b> cho phép hai thiết bị giao tiếp bằng cách đặt chúng cách nhau trong vòng <b>2 inch (khoảng 5 cm)</b>.',
          imageUrl: null
        },

        /* Slide 14 (Trang 14 / 26) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, loại giao tiếp nào sau đây cho phép hai thiết bị giao tiếp bằng cách đặt chúng cách nhau trong vòng 2 inch?',
          options: ['Ethernet', 'Bluetooth', 'WiFi', 'NFC (Near Field Communication)'],
          correctAnswer: 3,
          hint: '2 inch chỉ khoảng 5 cm — rất gần.',
          explain: 'NFC (Near Field Communication) cho phép hai thiết bị giao tiếp khi đặt cách nhau trong vòng 2 inch (khoảng 5 cm).'
        },

        /* Slide 15 (Trang 15 / 26) */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là những thiết bị có thể được ghép nối không dây với máy tính? (Chọn 4)',
          options: ['CD Drive', 'Wired Router', 'Wireless Keyboard', 'Wireless Mouse', 'Driver', 'Wireless Printer', 'Bluetooth Speakers'],
          correctAnswers: [2, 3, 5, 6],
          hint: 'Chọn những thiết bị có chữ "Wireless" hoặc "Bluetooth" — CD Drive, Wired Router (có dây) và Driver (phần mềm) thì không.',
          explain: 'Bàn phím, chuột, máy in không dây và loa Bluetooth đều ghép nối không dây được với máy tính. CD Drive và Wired Router là thiết bị có dây, còn Driver là phần mềm điều khiển.'
        }
      ]
    },

    /* ============================================================
       PHẦN 4 — Kết nối thiết bị khi sử dụng AI (Đọc thêm) (mật khẩu: KN04)
       ============================================================ */
    {
      id: 's4',
      title: 'Kết nối thiết bị khi sử dụng AI',
      password: PASSWORDS.s4,
      slides: [
        /* Slide 16 (Trang 16 / 26) */
        {
          type: 'info',
          topic: 'Đọc thêm · AI',
          title: 'Kết nối thiết bị khi sử dụng AI',
          content: '<b>Kết nối đúng giúp em sử dụng AI hiệu quả hơn:</b>',
          imageUrl: null,
          things: [
            { icon: '📶', name: 'Wi-Fi', en: 'Kết nối Internet để gửi yêu cầu đến AI và nhận kết quả trả về' },
            { icon: '🎙️', name: 'Micrô (USB hoặc Bluetooth)', en: 'Nhập giọng nói làm đầu vào cho AI' },
            { icon: '🎧', name: 'Tai nghe (có dây hoặc Bluetooth)', en: 'Nghe AI đọc câu trả lời (text-to-speech)' },
            { icon: '📷', name: 'Camera (USB hoặc tích hợp sẵn)', en: 'Tải ảnh lên để AI phân tích' },
            { icon: '📽️', name: 'Máy chiếu (HDMI)', en: 'Để cả lớp cùng xem kết quả của AI' }
          ]
        },

        /* Slide 17 (Trang 17 / 26) */
        {
          type: 'info',
          topic: 'Vận dụng',
          title: 'Hoạt động — Khảo sát kết nối thiết bị xung quanh em',
          content: 'Em hãy thực hiện 3 nhiệm vụ sau:',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Quan sát máy tính hoặc điện thoại của em', en: 'Liệt kê 3 cổng kết nối em nhìn thấy (USB, HDMI, jack âm thanh...) và xác định mỗi cổng dùng để kết nối thiết bị gì' },
            { icon: '2️⃣', name: 'Tìm thiết bị trong lớp học', en: 'Tìm 2 thiết bị kết nối bằng cáp và 2 thiết bị kết nối không dây' },
            { icon: '3️⃣', name: 'Hỏi chatbot AI', en: 'Hỏi: "Bluetooth và Wi-Fi khác nhau như thế nào?", đọc và viết lại bằng lời của em (ít nhất 3 điểm khác biệt). Hỏi tiếp: "Tôi nên dùng cáp HDMI hay USB để kết nối máy tính với màn hình?" và ghi lại lời khuyên của AI' }
          ]
        },

        /* Slide 18 (Trang 18 / 26) — slide hoàn thành RIÊNG cho bài học chính (scoreSections) */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2, 3],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 8!',
          content: 'Em đã biết hai hình thức kết nối thiết bị kĩ thuật số (có dây và không dây), các loại kết nối thường gặp như VGA, HDMI, Ethernet, USB, Wi-Fi, Bluetooth, NFC, và cách kết nối thiết bị khi sử dụng AI.',
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
