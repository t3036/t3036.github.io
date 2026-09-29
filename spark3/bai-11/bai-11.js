/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 11: QUAN ĐIỂM VÀ THIÊN KIẾN
   (IC3 GS6 Spark — Level 3 — Chủ đề: Quản lí thông tin)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Nguồn: PDF gốc K5_B11_QuanDiemVaThienKien.pdf (19 trang). PDF
   gốc không ghi rõ đáp án Có/Không cho 3 bài luyện tập nhận diện
   thiên kiến trong câu — mình xác định đáp án dựa theo hình minh
   họa ở trang 8 (3 câu bị đánh dấu ❌ vì chứa thiên kiến) và dựa
   trên nội dung logic của từng câu. Bạn xem lại kỹ phần này.

   Đây là BẢN THỬ đầu tiên — bạn xem qua câu chữ / mật khẩu và
   chỉnh lại nếu cần.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: '',   // Phần 1 — Khái niệm quan điểm
  s2: '',   // Phần 2 — Khái niệm thiên kiến
  s3: '',   // Phần 3 — Đánh giá thiên kiến trong kết quả đầu ra của AI
  s4: ''    // Phần 4 — Ôn tập
};

const LESSON = {
  id:    'bai11-quandiem',
  icon:  '⚖️',
  title: 'Bài 11 — Quan điểm và thiên kiến',

  sections: [

    /* ============================================================
       PHẦN 1 — Khái niệm quan điểm (mật khẩu: QDTK01)
       ============================================================ */
    {
      id: 's1',
      title: 'Khái niệm quan điểm',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 14) */
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm quan điểm',
          title: 'Quan điểm (Perspective) là gì?',
          content: '<b>Quan điểm</b> là cách mà một người nhìn nhận hoặc hiểu về một điều gì đó dựa trên những kinh nghiệm, kiến thức và niềm tin của họ.',
          imageUrl: null,
          remember: 'Ví dụ: Hai học sinh nhận xét một bài hát, một bạn thấy bài hát thú vị, bạn kia lại nghĩ là nhàm chán → Quan điểm khác nhau do cách cảm nhận của mỗi người.'
        },

        /* Slide 2 (Trang 2 / 14) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Quan điểm (Perspective) là gì?',
          options: [
            'Cách ai đó nhìn hoặc hiểu điều gì đó dựa trên kinh nghiệm, kiến thức và niềm tin của chính họ.',
            'Một hình thức bảo vệ pháp lí mang lại cho người sáng tạo tác phẩm gốc quyền độc quyền kiểm soát cách tác phẩm của họ được sử dụng và phân phối.',
            'Mức độ áp dụng hoặc hữu ích của thông tin, kết quả tìm kiếm hoặc nội dung.',
            'Thông tin có thể tin được hay đáng tin cậy như thế nào.'
          ],
          correctAnswer: 0,
          hint: '3 lựa chọn còn lại là định nghĩa của các khái niệm khác (bản quyền, mức độ liên quan, độ tin cậy), không phải "quan điểm".',
          explain: 'Quan điểm là cách nhìn nhận/hiểu của riêng 1 người, dựa trên kinh nghiệm, kiến thức và niềm tin của họ.'
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Khái niệm thiên kiến (mật khẩu: QDTK02)
       ============================================================ */
    {
      id: 's2',
      title: 'Khái niệm thiên kiến',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 3 (Trang 3 / 14) */
        {
          type: 'info',
          topic: 'Phần 2 · Khái niệm thiên kiến',
          title: 'Thiên kiến (Bias) là gì?',
          content: '<b>Thiên kiến</b> là cách một người đánh giá, trình bày, chia sẻ thông tin dựa trên niềm tin và quan điểm cá nhân, có thể làm cho người đó không công bằng và bỏ qua các quan điểm khác.',
          imageUrl: null
        },

        /* Slide 4 (Trang 4 / 14) */
        {
          type: 'info',
          topic: 'Phần 2 · Ví dụ về thiên kiến',
          title: 'Nhận diện câu có thiên kiến',
          content: 'Một số ví dụ về câu có chứa thiên kiến (đưa ra kết luận vội vàng, thiếu căn cứ, hoặc quy chụp cả 1 nhóm người):',
          imageUrl: null,
          things: [
            { icon: '❌', name: '"Tớ biết bạn ấy ghét khoa học vì bạn ấy chẳng bao giờ tham gia hội chợ khoa học nào cả."', en: 'Kết luận vội vàng từ 1 dữ kiện nhỏ' },
            { icon: '❌', name: '"Biến đổi khí hậu chắc chắn là không có thật vì Ken bỏ phiếu chống lại chuyện đó."', en: 'Lấy ý kiến của 1 người làm bằng chứng khoa học' },
            { icon: '❌', name: '"Hầu hết những người tin vào biến đổi khí hậu là những người đưa ra thuyết âm mưu."', en: 'Quy chụp cả 1 nhóm người' }
          ]
        },

        /* Slide 5 (Trang 5 / 14) */
        {
          type: 'quiz_dropdown',
          topic: 'Luyện tập',
          question: 'Với mỗi câu phát biểu, em hãy chọn Có nếu có thiên kiến hoặc Không nếu không phải: Orson D đang tranh cử cho chức chủ tịch của câu lạc bộ khoa học. ___ Tớ biết bạn ấy ghét khoa học vì bạn ấy chẳng bao giờ tham gia hội chợ khoa học nào cả. ___ Bạn ấy nhận được một điểm B ở bài kiểm tra tuần trước. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 1 }
          ],
          hint: 'Câu nào là sự kiện có thể kiểm chứng (tranh cử, điểm số)? Câu nào là suy diễn cá nhân về cảm xúc của người khác?',
          explain: '"Tranh cử chủ tịch" và "nhận điểm B" đều là sự kiện có thể kiểm chứng (Không thiên kiến). "Biết bạn ấy ghét khoa học vì không tham gia hội chợ" là suy diễn vội vàng, thiếu căn cứ (Có thiên kiến).'
        },

        /* Slide 6 (Trang 6 / 14) */
        {
          type: 'quiz_dropdown',
          topic: 'Luyện tập',
          question: 'Với mỗi câu phát biểu, em hãy chọn Có nếu có thiên kiến hoặc Không nếu không phải: Biến đổi khí hậu chắc chắn là không có thật vì Orson bỏ phiếu chống lại chuyện đó. ___ Mùa hè năm nay mát hơn mùa hè năm ngoái. ___ Hầu hết những người tin vào biến đổi khí hậu là những người đưa ra thuyết âm mưu. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 }
          ],
          hint: '1 ý kiến cá nhân (bỏ phiếu) không phải là bằng chứng khoa học. "Hầu hết những người tin..." là quy chụp cả 1 nhóm người.',
          explain: '"Mùa hè năm nay mát hơn" chỉ là 1 quan sát thời tiết (Không thiên kiến). Hai câu còn lại đều lấy ý kiến cá nhân làm bằng chứng và quy chụp cả nhóm người (Có thiên kiến).'
        },

        /* Slide 7 (Trang 7 / 14) */
        {
          type: 'quiz_dropdown',
          topic: 'Luyện tập',
          question: 'Với mỗi câu phát biểu, em hãy chọn Có nếu có thiên kiến hoặc Không nếu không có: Áo khoác đang được giảm giá 40%. ___ Đặt hàng ngay hôm nay để được giao hàng miễn phí. ___ Chúng tôi có đủ mọi kích cỡ. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 1 }
          ],
          hint: 'Cả 3 câu đều là thông tin/ưu đãi cụ thể của cửa hàng — không đưa ra nhận định hay kết luận thiếu căn cứ nào.',
          explain: 'Cả 3 câu đều là những thông tin thực tế về sản phẩm/dịch vụ (giảm giá, giao hàng, kích cỡ), không chứa nhận định cá nhân hay kết luận thiếu căn cứ — nên không có thiên kiến.'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Đánh giá thiên kiến trong kết quả đầu ra của AI
       (mật khẩu: QDTK03)
       ============================================================ */
    {
      id: 's3',
      title: 'Đánh giá thiên kiến trong kết quả đầu ra của AI',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 8 (Trang 8 / 14) */
        {
          type: 'info',
          topic: 'Phần 3 · Thiên kiến trong AI',
          title: 'Đánh giá thiên kiến trong kết quả đầu ra của AI',
          content: '<b>AI có thể phản ánh thiên kiến</b> từ dữ liệu hoặc câu hỏi mà em đặt ra.',
          imageUrl: null,
          remember: 'Câu hỏi <b>công bằng</b> giúp câu trả lời <b>cân bằng</b> hơn. Em cần <b>tôn trọng các quan điểm khác nhau</b> và luôn <b>kiểm tra thông tin</b> mà AI đưa ra.'
        },

        /* Slide 9 (Trang 9 / 14) — slide hoàn thành RIÊNG cho bài học
           chính (3 phần lý thuyết + luyện tập), tách biệt với slide hoàn
           thành của phần Ôn tập ở cuối bài. */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 11!',
          content: 'Em đã biết quan điểm và thiên kiến là gì, cách nhận diện câu có chứa thiên kiến, và cách đánh giá thiên kiến trong kết quả đầu ra của AI.',
          imageUrl: null,
          remember: 'Muốn ôn lại toàn bộ câu hỏi của bài, bấm "Tiếp theo" để sang phần <b>Ôn tập</b> ngay sau đây.'
        }
      ]
    },

    /* ============================================================
       PHẦN 4 — Ôn tập (mật khẩu: QDTK04)
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
        /* Slide 10 (Trang 10 / 14) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em nhận được tin nhắn sau: "Áo khoác đang được giảm giá 40%. Đặt hàng ngay hôm nay để được giao hàng miễn phí. Chúng tôi có đủ mọi kích cỡ." Với mỗi câu trong tin nhắn này, em hãy chọn Có nếu có thiên kiến hoặc Không nếu không có: Áo khoác đang được giảm giá 40%. ___ Đặt hàng ngay hôm nay để được giao hàng miễn phí. ___ Chúng tôi có đủ mọi kích cỡ. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 1 }
          ],
          hint: 'Cả 3 câu đều là thông tin/ưu đãi cụ thể của cửa hàng — không đưa ra nhận định hay kết luận thiếu căn cứ nào.',
          explain: 'Cả 3 câu đều là những thông tin thực tế về sản phẩm/dịch vụ, không chứa nhận định cá nhân hay kết luận thiếu căn cứ — nên không có thiên kiến.'
        },

        /* Slide 11 (Trang 11 / 14) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em nhận được Email sau: "Orson D đang tranh cử cho chức chủ tịch của câu lạc bộ khoa học. Tớ biết bạn ấy ghét khoa học vì bạn ấy chẳng bao giờ tham gia hội chợ khoa học nào cả. Bạn ấy nhận được một điểm B ở bài kiểm tra tuần trước." Với mỗi câu phát biểu trích từ Email này, em hãy chọn Có nếu có thiên kiến hoặc Không nếu không phải: Orson D đang tranh cử cho chức chủ tịch của câu lạc bộ khoa học. ___ Tớ biết bạn ấy ghét khoa học vì bạn ấy chẳng bao giờ tham gia hội chợ khoa học nào cả. ___ Bạn ấy nhận được một điểm B ở bài kiểm tra tuần trước. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 1 }
          ],
          hint: 'Câu nào là sự kiện có thể kiểm chứng (tranh cử, điểm số)? Câu nào là suy diễn cá nhân về cảm xúc của người khác?',
          explain: '"Tranh cử chủ tịch" và "nhận điểm B" đều là sự kiện có thể kiểm chứng (Không thiên kiến). "Biết bạn ấy ghét khoa học vì không tham gia hội chợ" là suy diễn vội vàng, thiếu căn cứ (Có thiên kiến).'
        },

        /* Slide 12 (Trang 12 / 14) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Quan điểm (Perspective) là gì?',
          options: [
            'Cách ai đó nhìn hoặc hiểu điều gì đó dựa trên kinh nghiệm, kiến thức và niềm tin của chính họ.',
            'Một hình thức bảo vệ pháp lí mang lại cho người sáng tạo tác phẩm gốc quyền độc quyền kiểm soát cách tác phẩm của họ được sử dụng và phân phối.',
            'Mức độ áp dụng hoặc hữu ích của thông tin, kết quả tìm kiếm hoặc nội dung.',
            'Thông tin có thể tin được hay đáng tin cậy như thế nào.'
          ],
          correctAnswer: 0,
          hint: '3 lựa chọn còn lại là định nghĩa của các khái niệm khác (bản quyền, mức độ liên quan, độ tin cậy), không phải "quan điểm".',
          explain: 'Quan điểm là cách nhìn nhận/hiểu của riêng 1 người, dựa trên kinh nghiệm, kiến thức và niềm tin của họ.'
        },

        /* Slide 13 (Trang 13 / 14) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em đọc được bài đăng sau trên mạng xã hội: "Biến đổi khí hậu chắc chắn là không có thật vì Orson bỏ phiếu chống lại chuyện đó. Mùa hè năm nay mát hơn mùa hè năm ngoái. Hầu hết những người tin vào biến đổi khí hậu là những người đưa ra thuyết âm mưu." Với mỗi câu phát biểu, em hãy chọn Có nếu có thiên kiến hoặc Không nếu không phải: Biến đổi khí hậu chắc chắn là không có thật vì Orson bỏ phiếu chống lại chuyện đó. ___ Mùa hè năm nay mát hơn mùa hè năm ngoái. ___ Hầu hết những người tin vào biến đổi khí hậu là những người đưa ra thuyết âm mưu. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 }
          ],
          hint: '1 ý kiến cá nhân (bỏ phiếu) không phải là bằng chứng khoa học. "Hầu hết những người tin..." là quy chụp cả 1 nhóm người.',
          explain: '"Mùa hè năm nay mát hơn" chỉ là 1 quan sát thời tiết (Không thiên kiến). Hai câu còn lại đều lấy ý kiến cá nhân làm bằng chứng và quy chụp cả nhóm người (Có thiên kiến).'
        },

        /* Slide 14 (Trang 14 / 14) — slide hoàn thành RIÊNG của phần Ôn tập.
           resetScope:'section' báo cho app.js biết: nút ở đây chỉ làm lại
           4 câu của phần Ôn tập (giữ nguyên tiến trình 3 phần trước), và
           điểm số hiển thị cũng chỉ tính trong phạm vi phần này. */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 11!',
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
