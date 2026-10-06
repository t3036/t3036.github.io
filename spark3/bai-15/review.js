/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 15 — Khám phá Creative Commons
   (tách từ phần Ôn tập của bai-15.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s5: ''   // Phần 5 — Ôn tập
};

const LESSON = {
  id:    'bai15-creative-commons-on-tap',
  icon:  '<img src="cc.png" alt="CC" style="height:1.2em;vertical-align:middle">',
  title: 'Ôn tập Bài 15 — Khám phá Creative Commons',

  sections: [
    {
      id: 's5',
      title: 'Ôn tập',
      password: PASSWORDS.s5,
      slides: [
        /* Slide 16 (Trang 16 / 22) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Mục đích của Creative Commons là gì?',
          options: ['Cho phép mọi người chỉnh sửa và bán sản phẩm của người khác.', 'Cho phép nhà sáng tạo từ bỏ mọi quyền đối với sản phẩm của họ.', 'Cho phép nhà sáng tạo trao quyền sử dụng sản phẩm của họ cho người khác.', 'Cho phép mọi người tự do sao chép mọi sản phẩm mà không cần ghi công người sáng tạo.'],
          correctAnswer: 2,
          hint: 'Nhà sáng tạo vẫn giữ quyền tác giả.',
          explain: 'Creative Commons cho phép nhà sáng tạo trao quyền sử dụng sản phẩm cho người khác.'
        },
        /* Slide 17 (Trang 17 / 22) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tổ chức nào cung cấp phương thức để người sáng tạo có thể cấp quyền sử dụng miễn phí sản phẩm sáng tạo của họ theo luật bản quyền?',
          options: ['Canva', 'Creative Commons', 'Shutterstock', 'Wix'],
          correctAnswer: 1,
          hint: 'Tổ chức có giấy phép "CC".',
          explain: 'Creative Commons là tổ chức cung cấp phương thức cấp quyền sử dụng miễn phí sản phẩm sáng tạo.'
        },
        /* Slide 18 (Trang 18 / 22) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào là mục tiêu chính của Tài sản sáng tạo công cộng (Creative Commons)?',
          options: ['Để phân phối thông tin một cách tự do.', 'Để áp dụng luật bản quyền đến mức độ cao nhất.', 'Để đảm bảo mọi phần mềm đều được sở hữu độc quyền.', 'Để giới hạn việc sáng tác nghệ thuật.'],
          correctAnswer: 0,
          hint: 'Từ khóa: "phân phối tự do và hợp pháp".',
          explain: 'Mục tiêu chính của Creative Commons là phân phối thông tin một cách tự do và hợp pháp.'
        },
        /* Slide 19 (Trang 19 / 22) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, mục đích chính của giấy phép CC BY-NC là gì?',
          options: ['Bắt buộc ghi công tác giả gốc và cấm sử dụng tác phẩm cho mục đích thương mại.', 'Không cần ghi công tác giả.', 'Yêu cầu chia sẻ tác phẩm mới dưới cùng một giấy phép.', 'Không cho phép tạo ra các tác phẩm phái sinh từ tác phẩm gốc.'],
          correctAnswer: 0,
          hint: 'NC = NonCommercial (phi thương mại), BY = ghi công.',
          explain: 'CC BY-NC bắt buộc ghi công tác giả và không được dùng tác phẩm cho mục đích thương mại.'
        },
        /* Slide 20 (Trang 20 / 22) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, giấy phép CC nào cho phép sử dụng và chia sẻ tác phẩm với điều kiện ghi công tác giả và không thay đổi hoặc chỉnh sửa tác phẩm?',
          options: ['CC BY', 'CC BY-NC', 'CC BY-SA', 'CC BY-ND'],
          correctAnswer: 3,
          hint: 'ND = NoDerivatives (không phái sinh).',
          explain: 'CC BY-ND cho phép sử dụng và chia sẻ nhưng không được thay đổi hay chỉnh sửa tác phẩm.'
        },
        /* Slide 21 (Trang 21 / 22) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy chọn Đúng nếu là phát biểu đúng về giấy phép CC và chọn Sai nếu không phải: Tất cả các giấy phép Creative Commons cho phép sử dụng tác phẩm mà không cần ghi công tác giả. ___ Giấy phép CC BY-SA yêu cầu chia sẻ tác phẩm mới dưới cùng một điều kiện giấy phép. ___ Giấy phép CC BY-NC cho phép sử dụng tác phẩm cho mục đích thương mại. ___ Giấy phép CC BY-ND không cho phép tạo ra các tác phẩm phái sinh từ tác phẩm gốc. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Mọi giấy phép CC đều có BY (ghi công); NC = phi thương mại; SA = chia sẻ tương tự; ND = không phái sinh.',
          explain: 'Mọi giấy phép CC đều yêu cầu ghi công (Sai). BY-SA yêu cầu cùng giấy phép (Đúng). BY-NC cấm mục đích thương mại (Sai). BY-ND không cho tạo tác phẩm phái sinh (Đúng).'
        },
        /* Slide 22 (Trang 22 / 22) */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 15!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};
