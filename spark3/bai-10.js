/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 10: ĐÁNH GIÁ THÔNG TIN
   (IC3 GS6 Spark — Level 3 — Chủ đề: Quản lí thông tin)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Nguồn: PDF gốc K5_B10_DanhGiaThongTin.pdf (15 trang) — đây là
   bài RẤT NGẮN, chỉ có 2 chủ đề và duy nhất 1 bài luyện tập (nối
   cặp 2 thuật ngữ) trong toàn bộ PDF gốc. Vì vậy phần "Ôn tập" ở
   cuối cũng chỉ có 1 câu — không phải thiếu sót, đúng như tài liệu
   gốc. Đây là BẢN THỬ đầu tiên — bạn xem qua câu chữ / mật khẩu và
   chỉnh lại nếu cần.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: '',   // Phần 1 — Các thuật ngữ liên quan đến đánh giá thông tin
  s2: '',   // Phần 2 — Đánh giá kết quả đầu ra của AI
  s3: ''    // Phần 3 — Ôn tập
};

const LESSON = {
  id:    'bai10-danhgia',
  icon:  '🔎',
  title: 'Bài 10 — Đánh giá thông tin',

  sections: [

    /* ============================================================
       PHẦN 1 — Các thuật ngữ liên quan đến đánh giá thông tin
       (mật khẩu: DGTT01)
       ============================================================ */
    {
      id: 's1',
      title: 'Các thuật ngữ liên quan đến đánh giá thông tin',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 7) */
        {
          type: 'info',
          topic: 'Phần 1 · Đánh giá thông tin',
          title: '4 tiêu chí đánh giá thông tin',
          content: 'Khi đọc một thông tin, em có thể đánh giá nó theo 4 tiêu chí sau:',
          imageUrl: null,
          things: [
            { icon: '🎯', name: 'Độ chính xác (Accuracy)', en: 'Mức độ mà thông tin phản ánh đúng sự thật' },
            { icon: '🛡️', name: 'Độ tin cậy (Credibility)', en: 'Mức độ mà chúng ta tin tưởng vào nguồn thông tin' },
            { icon: '✅', name: 'Tính hợp lệ (Validity)', en: 'Bao gồm cả tính đáng tin cậy và phản ánh chính xác của thông tin' },
            { icon: '🔍', name: 'Mức độ liên quan (Relevance)', en: 'Mức độ áp dụng hoặc hữu ích của thông tin' }
          ]
        },

        /* Slide 2 (Trang 2 / 7) */
        {
          type: 'info',
          topic: 'Phần 1 · Ví dụ minh họa',
          title: 'Độ chính xác & Độ tin cậy',
          content: 'Hai ví dụ cụ thể:',
          imageUrl: null,
          things: [
            { icon: '🎯', name: 'Độ chính xác', en: 'Một trang Web nói về mức độ dùng Internet ở trường sẽ chính xác hơn khi có nhiều nguồn khác (sách, báo, trang Web khác...) cùng đồng ý' },
            { icon: '🛡️', name: 'Độ tin cậy', en: 'Nên dùng bách khoa toàn thư trực tuyến do nhà trường cung cấp — ví dụ National Geographic, một tổ chức khoa học uy tín có chuyên gia kiểm chứng' }
          ]
        },

        /* Slide 3 (Trang 3 / 7) */
        {
          type: 'quiz_matching',
          topic: 'Luyện tập',
          question: 'Em hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang phát biểu tương ứng ở bên trái.',
          pairs: [
            { icon: '🛡️', left: 'Thông tin có thể tin được hay đáng tin cậy như thế nào', right: 'Credibility (Sự uy tín)' },
            { icon: '🔍', left: 'Mức độ áp dụng hoặc hữu ích của thông tin, kết quả tìm kiếm hoặc nội dung', right: 'Relevance (Mức độ liên quan)' }
          ],
          hint: '"Tin được hay không" là Độ tin cậy; "Hữu ích/áp dụng được" là Mức độ liên quan.',
          explain: 'Credibility (Độ tin cậy) nói về việc thông tin có đáng tin hay không. Relevance (Mức độ liên quan) nói về việc thông tin có hữu ích/áp dụng được hay không.'
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Đánh giá kết quả đầu ra của AI (mật khẩu: DGTT02)
       ============================================================ */
    {
      id: 's2',
      title: 'Đánh giá kết quả đầu ra của AI',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 4 (Trang 4 / 7) */
        {
          type: 'info',
          topic: 'Phần 2 · Đánh giá AI',
          title: 'Đánh giá kết quả đầu ra của AI',
          content: 'Hãy đánh giá câu trả lời của AI bằng 4 tiêu chí vừa học: <b>chính xác, tin cậy, hợp lệ, liên quan</b>.',
          imageUrl: null,
          remember: 'AI có thể <b>sai</b> dù câu trả lời nghe rất hợp lí. <b>Không dùng AI làm nguồn duy nhất</b> cho thông tin quan trọng — hãy kiểm tra lại từ nguồn khác.'
        },

        /* Slide 5 (Trang 5 / 7) — slide hoàn thành RIÊNG cho bài học
           chính (2 phần lý thuyết + luyện tập), tách biệt với slide hoàn
           thành của phần Ôn tập ở cuối bài. */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 10!',
          content: 'Em đã biết 4 tiêu chí đánh giá thông tin (chính xác, tin cậy, hợp lệ, liên quan), và biết cách áp dụng chúng để đánh giá kết quả đầu ra của AI.',
          imageUrl: null,
          remember: 'Muốn ôn lại câu hỏi của bài, bấm "Tiếp theo" để sang phần <b>Ôn tập</b> ngay sau đây.'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Ôn tập (mật khẩu: DGTT03)
       ------------------------------------------------------------
       PDF gốc chỉ có duy nhất 1 bài luyện tập trong toàn bài, nên
       phần Ôn tập ở đây cũng chỉ có 1 câu — đúng theo tài liệu gốc,
       không phải thiếu sót.
       ============================================================ */
    {
      id: 's3',
      title: 'Ôn tập',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 6 (Trang 6 / 7) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang phát biểu tương ứng ở bên trái.',
          pairs: [
            { icon: '🛡️', left: 'Thông tin có thể tin được hay đáng tin cậy như thế nào', right: 'Credibility (Sự uy tín)' },
            { icon: '🔍', left: 'Mức độ áp dụng hoặc hữu ích của thông tin, kết quả tìm kiếm hoặc nội dung', right: 'Relevance (Mức độ liên quan)' }
          ],
          hint: '"Tin được hay không" là Độ tin cậy; "Hữu ích/áp dụng được" là Mức độ liên quan.',
          explain: 'Credibility (Độ tin cậy) nói về việc thông tin có đáng tin hay không. Relevance (Mức độ liên quan) nói về việc thông tin có hữu ích/áp dụng được hay không.'
        },

        /* Slide 7 (Trang 7 / 7) — slide hoàn thành RIÊNG của phần Ôn tập.
           resetScope:'section' báo cho app.js biết: nút ở đây chỉ làm lại
           câu của phần Ôn tập (giữ nguyên tiến trình 2 phần trước), và
           điểm số hiển thị cũng chỉ tính trong phạm vi phần này. */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 10!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện lại, bấm nút "Làm lại phần này" — các đáp án của 2 phần học trước sẽ không bị ảnh hưởng.',
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
