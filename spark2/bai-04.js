/* ============================================================
   DỮ LIỆU BÀI HỌC — chỉ sửa file này khi cần đổi nội dung
   ------------------------------------------------------------
   Cấu trúc:
     LESSON.icon / LESSON.title  → hiện ở thanh trên cùng
     LESSON.sections[]           → mỗi phần học lớn (có mật khẩu riêng)
       .id                       → định danh phần (không trùng nhau)
       .title                    → tên phần, hiện ở khung khóa + dải chip
                                    (dải chip trên đầu trang bấm được: bấm vào
                                    tên phần sẽ nhảy tới trang đầu của phần đó —
                                    nếu phần chưa mở khóa thì hiện trang mật khẩu)
       .password                 → mật khẩu mở khóa (không phân biệt hoa/thường).
                                    ĐỂ "" (chuỗi rỗng) → phần này LUÔN mở sẵn,
                                    học sinh không cần nhập gì cả. Chỉ cần sửa
                                    giá trị này, không cần sửa gì thêm ở app.js.
       .slides[]                 → danh sách slide bên trong phần, y hệt
                                    định dạng cũ (type: info / quiz_single / ...)
                                    Mỗi slide có chú thích "Slide N" ngay phía
                                    trên — N là số thứ tự trên toàn bài (khớp
                                    với "Trang N / Tổng" hiển thị ở góc trên
                                    cùng khi học), để bạn dễ dò khi cần sửa.

   Toàn bộ các dạng slide (info, quiz_single, quiz_multiple, quiz_dragdrop,
   quiz_dropdown, quiz_matching, quiz_hotspot) và các trường của từng dạng
   giữ nguyên như bộ máy app.js đang hỗ trợ — xem chú thích mẫu ở cuối file.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: 'APP01',   // Phần 1 — Tải và sử dụng ứng dụng
  s2: 'APP02',   // Phần 2 — Lưu ý khi sử dụng
  s3: 'APP03'    // Phần 3 — Công cụ AI & Tổng kết
};

const LESSON = {
  id:    'bai4-app',
  icon:  '📱',
  title: 'Bài 4 — Các vấn đề liên quan đến ứng dụng (App)',

  sections: [

    /* ============================================================
       PHẦN 1 — Tải và sử dụng ứng dụng (mật khẩu: APP01)
       ============================================================ */
    {
      id: 's1',
      title: 'Tải và sử dụng ứng dụng',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 9) */
        {
          type: 'info',
          topic: 'Khởi động',
          title: 'Thế giới ứng dụng (App)',
          content: 'Khi sử dụng điện thoại hay máy tính, em thường xuyên tương tác với các ứng dụng. Vậy làm sao để có được chúng và cần lưu ý gì khi sử dụng?',
          imageUrl: null,
          things: [
            { icon: '🛒', name: 'Tải ứng dụng', en: 'App Store / Google Play' },
            { icon: '🔒', name: 'Lưu ý bảo mật', en: 'Quyền riêng tư' },
            { icon: '🤖', name: 'Công cụ AI', en: 'Lựa chọn ứng dụng phù hợp' }
          ],
          remember: 'Trong bài này, chúng ta sẽ tìm hiểu cách sử dụng ứng dụng an toàn và cách lựa chọn công cụ AI hợp lí.'
        },

        /* Slide 2 (Trang 2 / 9) */
        {
          type: 'info',
          topic: 'Phần 1 · Tải và Mua',
          title: 'Cách để sử dụng ứng dụng',
          content: 'Dưới đây là những cách phổ biến để em có thể sử dụng các ứng dụng trên thiết bị của mình.',
          imageUrl: null,
          things: [
            { icon: '📲', name: 'Ứng dụng cài sẵn', en: 'Có sẵn khi mua máy (ví dụ: Camera, Máy tính)' },
            { icon: '⏳', name: 'Dùng thử (App Trials)', en: 'Trải nghiệm miễn phí trong thời gian ngắn' },
            { icon: '💳', name: 'Mua một lần (App Purchases)', en: 'Trả tiền 1 lần để dùng vĩnh viễn' }
          ],
          remember: 'Ngoài ra còn có <b>Mua theo định kì (App Subscriptions)</b>: trả tiền hàng tháng/năm, và <b>Mua trong ứng dụng (In-App Purchases)</b>: mua thêm tính năng lúc đang dùng.'
        },

        /* Slide 3 (Trang 3 / 9) */
        {
          type: 'quiz_dropdown',
          topic: 'Luyện tập',
          question: 'Em hãy chọn thuật ngữ tiếng Anh đúng với mỗi cách mua ứng dụng: Dùng thử là ___ Mua thêm tính năng lúc đang dùng là ___',
          blanks: [
            { options: ['App Subscriptions', 'App Purchases', 'App Trials'], correctAnswer: 2 },
            { options: ['In-App Purchases', 'Pre-installed Apps', 'App Trials'], correctAnswer: 0 }
          ],
          hint: 'Dùng thử (Trial). Bên trong ứng dụng (In-App).',
          explain: 'App Trials là dùng thử ứng dụng trong thời gian ngắn. In-App Purchases là mua hàng ngay bên trong ứng dụng đang dùng.'
        },

        /* Slide 4 (Trang 4 / 9) */
        {
          type: 'quiz_matching',
          topic: 'Vận dụng',
          question: 'Hãy ghép tên cách sử dụng ứng dụng với mô tả tương ứng.',
          pairs: [
            { icon: '💳', left: 'App Purchases', right: 'Mua đứt ứng dụng một lần.' },
            { icon: '📅', left: 'App Subscriptions', right: 'Trả tiền theo tháng hoặc theo năm.' },
            { icon: '📲', left: 'Pre-installed Apps', right: 'Được cài đặt sẵn từ lúc mới mua máy.' }
          ],
          hint: 'Purchase = Mua. Subscription = Đăng kí định kì. Pre-installed = Cài sẵn.',
          explain: 'Đây là các thuật ngữ tiếng Anh tương ứng với các hình thức tải và trả phí ứng dụng.'
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Lưu ý khi sử dụng (khóa bằng mật khẩu APP02)
       ============================================================ */
    {
      id: 's2',
      title: 'Lưu ý khi sử dụng',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 5 (Trang 5 / 9) */
        {
          type: 'info',
          topic: 'Phần 2 · Vấn đề lưu ý',
          title: 'Lưu ý khi sử dụng ứng dụng',
          content: 'Để thiết bị chạy mượt mà và thông tin cá nhân được an toàn, em cần quan tâm đến các vấn đề sau:',
          imageUrl: null,
          things: [
            { icon: '⭐', name: 'Chất lượng', en: 'Ổn định, chạy mượt, xem đánh giá của người dùng' },
            { icon: '🔒', name: 'Bảo mật', en: 'Tải từ kho chính thức, có mã hóa dữ liệu' },
            { icon: '👁️', name: 'Quyền riêng tư', en: 'Kiểm tra xem app thu thập thông tin gì' }
          ],
          remember: '<b>Luôn đọc kĩ:</b> Ứng dụng yêu cầu quyền gì (truy cập vị trí, danh bạ...) trước khi ấn nút Đồng ý.'
        },

        /* Slide 6 (Trang 6 / 9) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Để đảm bảo an toàn cho bản thân khi sử dụng ứng dụng, em cần lưu ý những vấn đề nào sau đây? (Chọn 3)',
          options: [
            'Bảo mật',
            'Thẩm mỹ (ứng dụng đẹp)',
            'Quyền riêng tư',
            'Cập nhật và hỗ trợ'
          ],
          correctAnswers: [0, 2, 3],
          hint: 'Cái đẹp không phải là yếu tố đảm bảo an toàn cho thiết bị.',
          explain: 'Em cần quan tâm đến Bảo mật, Quyền riêng tư và khả năng Cập nhật/Hỗ trợ của ứng dụng để đảm bảo an toàn.'
        },

        /* Slide 7 (Trang 7 / 9) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Tùy chọn nào sau đây giúp bảo vệ thông tin cá nhân và quyền riêng tư? (Chọn 2)',
          options: [
            'Cài đặt các ứng dụng đảm bảo về bảo mật trên cửa hàng ứng dụng chính thức.',
            'Cung cấp thông tin tài khoản qua một ứng dụng nhận quà trúng thưởng.',
            'Kiểm tra giấy phép, quyền riêng tư và đánh giá của ứng dụng trước khi cài đặt.',
            'Cài đặt các ứng dụng được quảng cáo kiếm tiền trên mạng.'
          ],
          correctAnswers: [0, 2],
          hint: 'Không bao giờ tin vào các ứng dụng hứa hẹn tặng quà hoặc kiếm tiền dễ dàng.',
          explain: 'Chỉ nên cài từ cửa hàng chính thức (App Store, Google Play) và luôn đọc kĩ các đánh giá, quyền riêng tư trước khi cài.'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Công cụ AI & Tổng kết (khóa bằng mật khẩu APP03)
       ============================================================ */
    {
      id: 's3',
      title: 'Công cụ AI & Tổng kết',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 8 (Trang 8 / 9) */
        {
          type: 'info',
          topic: 'Phần 3 · Công cụ AI',
          title: 'Lựa chọn công cụ AI phù hợp',
          content: 'Hiện nay có rất nhiều công cụ Trí tuệ nhân tạo (AI). Mỗi công cụ có một thế mạnh riêng, em cần chọn đúng "thợ" cho đúng "việc".',
          imageUrl: null,
          things: [
            { icon: '🤖', name: 'Chatbot AI', en: 'ChatGPT, Gemini, Copilot (hỗ trợ viết, hỏi đáp)' },
            { icon: '🎨', name: 'Tạo hình ảnh', en: 'Canva AI, Adobe Firefly' },
            { icon: '📝', name: 'Sửa văn bản', en: 'Grammarly (kiểm tra chính tả, ngữ pháp)' }
          ],
          remember: 'Các ứng dụng học tập như Duolingo hay Khan Academy cũng đã tích hợp AI để giúp em học tốt hơn.'
        },

        /* Slide 9 (Trang 9 / 9) — slide tổng kết cuối bài */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 4!',
          content: 'Em đã nắm được cách ứng dụng được phân phối (Dùng thử, Mua, Đăng kí...), biết cách bảo vệ bản thân qua các lưu ý Bảo mật và Quyền riêng tư, đồng thời biết lựa chọn đúng công cụ AI.',
          imageUrl: null,
          remember: 'Ghi nhớ quan trọng: AI là <b>trợ thủ</b> để gợi ý và giải thích, không phải là công cụ để làm bài tập thay cho em. Hãy là người học thông minh!'
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

   Ngược lại, nếu bài có thêm phần "Ôn tập" ở cuối và muốn slide hoàn
   thành của BÀI CHÍNH (trước khi vào Ôn tập) không bị cộng nhầm điểm
   của các câu Ôn tập vào, khai báo thêm scoreSections:[0,1,2,...] —
   liệt kê đúng chỉ số (thứ tự, bắt đầu từ 0) của các phần muốn tính
   điểm. Ví dụ bài có 4 phần chính (0-3) rồi mới tới phần Ôn tập (4):
   slide hoàn thành của phần chính dùng scoreSections:[0,1,2,3].
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