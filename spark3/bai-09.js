/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 9: DỮ LIỆU, THÔNG TIN VÀ KIẾN THỨC
   (IC3 GS6 Spark — Level 3 — Chủ đề: Quản lí thông tin)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Nguồn: PDF gốc K9_B09_DuLieu-ThongTin-KienThuc.pdf (22 trang) —
   bài khá ngắn, chỉ có 2 chủ đề chính. Đây là BẢN THỬ đầu tiên —
   bạn xem qua câu chữ / mật khẩu và chỉnh lại nếu cần.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: '',   // Phần 1 — Khái niệm dữ liệu, thông tin và kiến thức
  s2: '',   // Phần 2 — Dữ liệu, thông tin và kiến thức khi dùng AI
  s3: ''    // Phần 3 — Ôn tập
};

const LESSON = {
  id:    'bai9-dulieu',
  icon:  '🧠',
  title: 'Bài 9 — Dữ liệu, thông tin và kiến thức',

  sections: [

    /* ============================================================
       PHẦN 1 — Khái niệm dữ liệu, thông tin và kiến thức
       (mật khẩu: DL01)
       ============================================================ */
    {
      id: 's1',
      title: 'Khái niệm dữ liệu, thông tin và kiến thức',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 17) */
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm',
          title: 'Phân biệt dữ liệu, thông tin và kiến thức',
          content: '<b>Dữ liệu</b> là dữ liệu ban đầu, <b>thông tin</b> là dữ liệu có ý nghĩa, <b>kiến thức</b> là điều được hiểu và áp dụng từ thông tin.',
          imageUrl: null,
          things: [
            { icon: '🔢', name: 'Dữ liệu (Data)', en: 'Số, văn bản, hình ảnh... thô, chưa được phân tích và sắp xếp' },
            { icon: '📊', name: 'Thông tin (Information)', en: 'Kết quả của việc xử lí, phân tích và tổ chức dữ liệu để tạo ra dữ liệu có ý nghĩa và hữu ích' },
            { icon: '💡', name: 'Kiến thức (Knowledge)', en: 'Sự hiểu biết sâu sắc hình thành từ việc áp dụng ý nghĩa vào thông tin — trả lời được câu hỏi vì sao và như thế nào' }
          ]
        },

        /* Slide 2 (Trang 2 / 17) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Dữ liệu (Data) là gì?',
          options: [
            'Số, văn bản, hình ảnh,... thô chưa được phân tích và sắp xếp.',
            'Kết quả của việc xử lý, phân tích và tổ chức dữ liệu.',
            'Sự hiểu biết hình thành từ việc áp dụng ý nghĩa vào thông tin.',
            'Thông tin đã được chuyển đổi thành kiến thức.'
          ],
          correctAnswer: 0,
          hint: 'Dữ liệu là "nguyên liệu thô" ban đầu, chưa qua xử lí gì cả.',
          explain: 'Dữ liệu là số, văn bản, hình ảnh... ở dạng thô, chưa được phân tích hay sắp xếp — đây là bước đầu tiên trước khi trở thành thông tin và kiến thức.'
        },

        /* Slide 3 (Trang 3 / 17) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào trả lời cho các câu hỏi "vì sao" và "như thế nào"?',
          options: ['Kiến thức', 'Dữ liệu', 'Cộng tác', 'Thông tin'],
          correctAnswer: 0,
          hint: 'Đây là mức độ hiểu biết SÂU nhất trong 3 khái niệm dữ liệu/thông tin/kiến thức.',
          explain: 'Kiến thức là sự hiểu biết sâu sắc, trả lời được câu hỏi "vì sao" và "như thế nào" — khác với dữ liệu và thông tin chỉ dừng ở mức sự kiện.'
        },

        /* Slide 4 (Trang 4 / 17) */
        {
          type: 'quiz_matching',
          topic: 'Luyện tập',
          question: 'Em hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang phát biểu tương ứng ở bên trái.',
          pairs: [
            { icon: '🗂️', left: 'Việc thu thập, quản lí và phân phối thông tin từ một hoặc nhiều nguồn', right: 'Information Management (Quản lí thông tin)' },
            { icon: '🔢', left: 'Các sự kiện và số liệu thô được thu thập hoặc ghi nhận lại', right: 'Data (Dữ liệu)' },
            { icon: '📊', left: 'Kết quả của việc xử lí và tổ chức dữ liệu để làm cho dữ liệu có ý nghĩa và hữu ích', right: 'Information (Thông tin)' },
            { icon: '💡', left: 'Sự hiểu biết và hiểu biết sâu sắc thu thập được từ việc áp dụng ý nghĩa vào thông tin', right: 'Knowledge (Kiến thức)' }
          ],
          hint: '"Thu thập/ghi nhận thô" là Dữ liệu; "xử lí để có ý nghĩa" là Thông tin; "hiểu biết sâu sắc" là Kiến thức; "thu thập-quản lí-phân phối" là Quản lí thông tin.',
          explain: 'Data = sự kiện/số liệu thô. Information = dữ liệu đã xử lí có ý nghĩa. Knowledge = hiểu biết sâu sắc từ thông tin. Information Management = việc thu thập, quản lí, phân phối thông tin.'
        },

        /* Slide 5 (Trang 5 / 17) */
        {
          type: 'quiz_matching',
          topic: 'Luyện tập',
          question: 'Em nối từng thuật ngữ từ danh sách ở bên trái sang phát biểu tương ứng ở bên phải.',
          pairs: [
            { icon: '🔢', left: 'Dữ liệu', right: 'Dữ liệu thô, chưa được phân tích và sắp xếp.' },
            { icon: '📊', left: 'Thông tin', right: 'Dữ liệu được chuẩn bị, đã được xử lý, phân tích và lập cấu trúc.' },
            { icon: '💡', left: 'Kiến thức', right: 'Dữ liệu được thu thập về dữ kiện hoặc một người để giúp đưa ra các quyết định đủ thông tin.' }
          ],
          hint: '"Chưa xử lí" là Dữ liệu; "đã xử lí, có cấu trúc" là Thông tin; "giúp ra quyết định" là Kiến thức (vì cần hiểu sâu mới quyết định được).',
          explain: 'Dữ liệu = thô, chưa xử lí. Thông tin = đã xử lí, có cấu trúc. Kiến thức = đủ sâu sắc để giúp đưa ra quyết định đúng đắn.'
        },

        /* Slide 6 (Trang 6 / 17) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là ví dụ về kiến thức?',
          options: ['Tên các chòm sao', 'Sự hiểu biết vì sao có mưa', 'Màu sắc của cầu vồng', 'Số cơn bão trong một năm'],
          correctAnswer: 1,
          hint: 'Ba lựa chọn còn lại chỉ là dữ kiện/số liệu — chưa giải thích được "vì sao".',
          explain: 'Tên chòm sao, màu cầu vồng, số cơn bão đều chỉ là dữ kiện (dữ liệu/thông tin). "Hiểu biết vì sao có mưa" mới là kiến thức — vì nó giải thích được NGUYÊN NHÂN.'
        },

        /* Slide 7 (Trang 7 / 17) */
        {
          type: 'info',
          topic: 'Phần 1 · Ví dụ minh họa',
          title: 'Ví dụ: từ dữ liệu đến kiến thức',
          content: 'Cùng 1 sự việc, nhưng ở 3 mức độ khác nhau:',
          imageUrl: null,
          things: [
            { icon: '🔢', name: 'Dữ liệu', en: 'Màu trắng' },
            { icon: '📊', name: 'Thông tin', en: 'Chiếc nón có màu trắng' },
            { icon: '💡', name: 'Kiến thức', en: 'Nón màu trắng không hấp thụ nhiệt nhiều như nón màu đen' }
          ]
        },

        /* Slide 8 (Trang 8 / 17) */
        {
          type: 'quiz_matching',
          topic: 'Luyện tập',
          question: 'Em nối từng thuật ngữ từ danh sách ở bên trái sang phát biểu tương ứng ở bên phải.',
          pairs: [
            { icon: '🔢', left: 'Dữ liệu', right: 'Màu trắng' },
            { icon: '📊', left: 'Thông tin', right: 'Áo khoác có màu trắng' },
            { icon: '💡', left: 'Kiến thức', right: 'Áo khoác màu trắng thường không hấp thụ nhiệt nhiều như các màu sậm hơn.' }
          ],
          hint: 'Cùng logic với ví dụ "chiếc nón" — chỉ đổi thành "áo khoác".',
          explain: 'Dữ liệu = "Màu trắng" (chưa gắn với vật gì). Thông tin = "Áo khoác có màu trắng" (đã gắn với đối tượng cụ thể). Kiến thức = giải thích được vì sao (không hấp thụ nhiệt).'
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Dữ liệu, thông tin và kiến thức khi dùng AI
       (mật khẩu: DL02)
       ============================================================ */
    {
      id: 's2',
      title: 'Dữ liệu, thông tin và kiến thức khi dùng AI',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 9 (Trang 9 / 17) */
        {
          type: 'info',
          topic: 'Phần 2 · Dùng AI',
          title: 'Đầu ra của AI chưa tự động là kiến thức',
          content: 'Đầu ra của AI <b>chưa tự động trở thành kiến thức</b>. Muốn học thật, em phải <b>hiểu</b>, <b>kiểm tra</b> và <b>diễn đạt lại</b>. Không sao chép nội dung AI nếu em chưa hiểu.',
          imageUrl: null,
          remember: 'AI có thể cho em <b>thông tin</b> rất nhanh — nhưng thông tin đó chỉ trở thành <b>kiến thức của em</b> khi em thật sự hiểu và có thể tự giải thích lại.'
        },

        /* Slide 10 (Trang 10 / 17) — slide hoàn thành RIÊNG cho bài học
           chính (2 phần lý thuyết + luyện tập), tách biệt với slide hoàn
           thành của phần Ôn tập ở cuối bài. */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 9!',
          content: 'Em đã biết phân biệt dữ liệu, thông tin và kiến thức, cũng như hiểu vì sao đầu ra của AI cần được kiểm tra và hiểu rõ trước khi trở thành kiến thức thật sự của em.',
          imageUrl: null,
          remember: 'Muốn ôn lại toàn bộ câu hỏi của bài, bấm "Tiếp theo" để sang phần <b>Ôn tập</b> ngay sau đây.'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Ôn tập (mật khẩu: DL03)
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
        /* Slide 11 (Trang 11 / 17) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em nối từng thuật ngữ từ danh sách ở bên trái sang phát biểu tương ứng ở bên phải.',
          pairs: [
            { icon: '🔢', left: 'Dữ liệu', right: 'Dữ liệu thô, chưa được phân tích và sắp xếp.' },
            { icon: '📊', left: 'Thông tin', right: 'Dữ liệu được chuẩn bị, đã được xử lý, phân tích và lập cấu trúc.' },
            { icon: '💡', left: 'Kiến thức', right: 'Dữ liệu được thu thập về dữ kiện hoặc một người để giúp đưa ra các quyết định đủ thông tin.' }
          ],
          hint: '"Chưa xử lí" là Dữ liệu; "đã xử lí, có cấu trúc" là Thông tin; "giúp ra quyết định" là Kiến thức.',
          explain: 'Dữ liệu = thô, chưa xử lí. Thông tin = đã xử lí, có cấu trúc. Kiến thức = đủ sâu sắc để giúp đưa ra quyết định đúng đắn.'
        },

        /* Slide 12 (Trang 12 / 17) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em nối từng thuật ngữ từ danh sách ở bên trái sang phát biểu tương ứng ở bên phải.',
          pairs: [
            { icon: '🔢', left: 'Dữ liệu', right: 'Màu trắng' },
            { icon: '📊', left: 'Thông tin', right: 'Áo khoác có màu trắng' },
            { icon: '💡', left: 'Kiến thức', right: 'Áo khoác màu trắng thường không hấp thụ nhiệt nhiều như các màu sậm hơn.' }
          ],
          hint: 'Cùng logic với ví dụ "chiếc nón" đã học — chỉ đổi thành "áo khoác".',
          explain: 'Dữ liệu = "Màu trắng". Thông tin = "Áo khoác có màu trắng". Kiến thức = giải thích được vì sao (không hấp thụ nhiệt).'
        },

        /* Slide 13 (Trang 13 / 17) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào trả lời cho các câu hỏi "vì sao" và "như thế nào"?',
          options: ['Kiến thức', 'Dữ liệu', 'Cộng tác', 'Thông tin'],
          correctAnswer: 0,
          hint: 'Đây là mức độ hiểu biết SÂU nhất trong 3 khái niệm dữ liệu/thông tin/kiến thức.',
          explain: 'Kiến thức là sự hiểu biết sâu sắc, trả lời được câu hỏi "vì sao" và "như thế nào".'
        },

        /* Slide 14 (Trang 14 / 17) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang phát biểu tương ứng ở bên trái.',
          pairs: [
            { icon: '🗂️', left: 'Việc thu thập, quản lí và phân phối thông tin từ một hoặc nhiều nguồn', right: 'Information Management (Quản lí thông tin)' },
            { icon: '🔢', left: 'Các sự kiện và số liệu thô được thu thập hoặc ghi nhận lại', right: 'Data (Dữ liệu)' },
            { icon: '📊', left: 'Kết quả của việc xử lí và tổ chức dữ liệu để làm cho dữ liệu có ý nghĩa và hữu ích', right: 'Information (Thông tin)' },
            { icon: '💡', left: 'Sự hiểu biết và hiểu biết sâu sắc thu thập được từ việc áp dụng ý nghĩa vào thông tin', right: 'Knowledge (Kiến thức)' }
          ],
          hint: '"Thu thập/ghi nhận thô" là Dữ liệu; "xử lí để có ý nghĩa" là Thông tin; "hiểu biết sâu sắc" là Kiến thức; "thu thập-quản lí-phân phối" là Quản lí thông tin.',
          explain: 'Data = sự kiện/số liệu thô. Information = dữ liệu đã xử lí có ý nghĩa. Knowledge = hiểu biết sâu sắc từ thông tin. Information Management = việc thu thập, quản lí, phân phối thông tin.'
        },

        /* Slide 15 (Trang 15 / 17) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Dữ liệu (Data) là gì?',
          options: [
            'Số, văn bản, hình ảnh,... thô chưa được phân tích và sắp xếp.',
            'Kết quả của việc xử lý, phân tích và tổ chức dữ liệu.',
            'Sự hiểu biết hình thành từ việc áp dụng ý nghĩa vào thông tin.',
            'Thông tin đã được chuyển đổi thành kiến thức.'
          ],
          correctAnswer: 0,
          hint: 'Dữ liệu là "nguyên liệu thô" ban đầu, chưa qua xử lí gì cả.',
          explain: 'Dữ liệu là số, văn bản, hình ảnh... ở dạng thô, chưa được phân tích hay sắp xếp.'
        },

        /* Slide 16 (Trang 16 / 17) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là ví dụ về kiến thức?',
          options: ['Tên các chòm sao', 'Sự hiểu biết vì sao có mưa', 'Màu sắc của cầu vồng', 'Số cơn bão trong một năm'],
          correctAnswer: 1,
          hint: 'Ba lựa chọn còn lại chỉ là dữ kiện/số liệu — chưa giải thích được "vì sao".',
          explain: 'Tên chòm sao, màu cầu vồng, số cơn bão đều chỉ là dữ kiện. "Hiểu biết vì sao có mưa" mới là kiến thức vì giải thích được nguyên nhân.'
        },

        /* Slide 17 (Trang 17 / 17) — slide hoàn thành RIÊNG của phần Ôn tập.
           resetScope:'section' báo cho app.js biết: nút ở đây chỉ làm lại
           6 câu của phần Ôn tập (giữ nguyên tiến trình 2 phần trước), và
           điểm số hiển thị cũng chỉ tính trong phạm vi phần này. */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 9!',
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
