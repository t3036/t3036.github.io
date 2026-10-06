/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 14 — Bảo vệ sở hữu trí tuệ
   (tách từ phần Ôn tập của bai-14.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s3: ''   // Phần 3 — Ôn tập
};

const LESSON = {
  id:    'bai14-so-huu-tri-tue-on-tap',
  icon:  '©️',
  title: 'Ôn tập Bài 14 — Bảo vệ sở hữu trí tuệ',

  sections: [
    {
      id: 's3',
      title: 'Ôn tập',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 15 (Trang 15 / 23) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, phương tiện nào được sử dụng để bảo vệ sách, phim, trò chơi điện tử và hình ảnh?',
          options: ['Nhãn hiệu (Trademark)', 'Bản quyền (Copyright)', 'Bằng sáng chế (Patent)', 'Mã nguồn mở (Open Source)'],
          correctAnswer: 1,
          hint: 'Đây là quyền bảo vệ tác phẩm gốc của người sáng tạo.',
          explain: 'Bản quyền (Copyright) bảo vệ sách, hình ảnh, phim, phần mềm, trò chơi điện tử.'
        },
        /* Slide 16 (Trang 16 / 23) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy ghép từng thuật ngữ với phát biểu tương ứng.',
          pairs: [
            { icon: '🔓', left: 'Phần mềm hoặc công nghệ được cung cấp miễn phí cho mọi người sử dụng, sửa đổi và phân phối', right: 'Open Source (Nguồn mở)' },
            { icon: '🍪', left: 'Những mẫu dữ liệu nhỏ mà các trang Web lưu trữ trên máy tính hoặc thiết bị của em', right: 'Cookies' },
            { icon: '🔒', left: 'Công nghệ thuộc sở hữu của một công ty hoặc cá nhân cụ thể', right: 'Proprietary (Độc quyền)' },
            { icon: '🧠', left: 'Những sáng tạo của trí tuệ được pháp luật bảo vệ để trao cho người sáng tạo các quyền độc quyền', right: 'Intellectual Property (Sở hữu trí tuệ)' }
          ],
          hint: 'Nguồn mở = tự do dùng; Độc quyền = một chủ kiểm soát.',
          explain: 'Nguồn mở: ai cũng dùng, sửa, chia sẻ được. Cookies: dữ liệu nhỏ do trang Web lưu. Độc quyền: thuộc một công ty/cá nhân. Sở hữu trí tuệ: sáng tạo được pháp luật bảo vệ.'
        },
        /* Slide 17 (Trang 17 / 23) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy ghép từng thuật ngữ với phát biểu tương ứng.',
          pairs: [
            { icon: '🤝', left: 'Thông tin có thể tin được hay đáng tin cậy như thế nào', right: 'Credibility (Sự uy tín)' },
            { icon: '🎯', left: 'Mức độ áp dụng hoặc hữu ích của thông tin, kết quả tìm kiếm hoặc nội dung', right: 'Relevance (Mức độ liên quan)' },
            { icon: '👁️', left: 'Cách ai đó nhìn hoặc hiểu điều gì đó dựa trên kinh nghiệm, kiến thức và niềm tin của chính họ', right: 'Perspective (Quan điểm)' },
            { icon: '©️', left: 'Hình thức bảo vệ pháp lí cho người sáng tạo tác phẩm gốc quyền độc quyền kiểm soát cách tác phẩm được sử dụng và phân phối', right: 'Copyright (Bản quyền)' }
          ],
          hint: 'Mỗi thuật ngữ khớp đúng một phát biểu.',
          explain: 'Credibility: đáng tin cậy. Relevance: liên quan/hữu ích. Perspective: quan điểm. Copyright: bản quyền.'
        },
        /* Slide 18 (Trang 18 / 23) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là vi phạm bản quyền (Piracy)?',
          options: ['Khi một công ty đăng kí bằng sáng chế cho quy trình sản xuất của họ.', 'Khi một người sử dụng tác phẩm của người khác mà không có sự cho phép.', 'Khi một người tạo ra một sản phẩm mới.', 'Khi một công ty đăng kí thương hiệu của họ.'],
          correctAnswer: 1,
          hint: 'Vi phạm bản quyền là dùng nội dung mà không được chủ sở hữu cho phép.',
          explain: 'Vi phạm bản quyền (Piracy) là sao chép, phân phối hoặc sử dụng tác phẩm của người khác mà không có sự cho phép của chủ sở hữu.'
        },
        /* Slide 19 (Trang 19 / 23) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Điền vào chỗ trống: "____________ là một loại pháp lí công nhận quyền độc quyền cho nhà phát minh đối với quy trình, thiết kế hoặc sáng chế trong một thời gian nhất định."',
          options: ['Bằng sáng chế', 'Nhãn hiệu', 'Nguồn mở', 'Độc quyền'],
          correctAnswer: 0,
          hint: 'Edison và Bell được công nhận quyền độc quyền đối với phát minh của họ bằng loại này.',
          explain: 'Bằng sáng chế (Patent) công nhận quyền độc quyền cho nhà phát minh trong một thời gian nhất định.'
        },
        /* Slide 20 (Trang 20 / 23) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, độc quyền (Proprietary) là gì? (Chọn 2)',
          options: ['Là phần mềm, thông tin hoặc công nghệ,... được cung cấp miễn phí.', 'Là việc sở hữu và kiểm soát công nghệ, sản phẩm, thông tin hoặc tài nguyên của một tổ chức hoặc cá nhân cụ thể.', 'Cho phép mọi người sử dụng, sửa đổi, phân phối hoặc chia sẻ.', 'Chỉ cho phép các nhà phát triển của công nghệ đó chỉnh sửa và phân phối.'],
          correctAnswers: [1, 3],
          hint: 'Độc quyền = một chủ thể nắm quyền sở hữu và kiểm soát.',
          explain: 'Độc quyền là việc sở hữu và kiểm soát công nghệ, sản phẩm của một tổ chức/cá nhân cụ thể, và chỉ nhà phát triển của công nghệ đó được chỉnh sửa, phân phối.'
        },
        /* Slide 21 (Trang 21 / 23) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, nguồn mở (Open Source) là gì? (Chọn 2)',
          options: ['Là phần mềm, thông tin hoặc công nghệ,... được cung cấp miễn phí.', 'Là việc sở hữu và kiểm soát công nghệ, sản phẩm, thông tin hoặc tài nguyên của một tổ chức hoặc cá nhân cụ thể.', 'Cho phép mọi người sử dụng, sửa đổi, phân phối hoặc chia sẻ.', 'Chỉ cho phép các nhà phát triển của công nghệ đó chỉnh sửa và phân phối.'],
          correctAnswers: [0, 2],
          hint: 'Nguồn mở = miễn phí và ai cũng được dùng, sửa, chia sẻ.',
          explain: 'Nguồn mở là phần mềm, thông tin hoặc công nghệ được cung cấp miễn phí, cho phép mọi người sử dụng, sửa đổi, phân phối hoặc chia sẻ.'
        },
        /* Slide 22 (Trang 22 / 23) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy nối mỗi định nghĩa với thuật ngữ phù hợp.',
          pairs: [
            { icon: '©️', left: 'Hình thức bảo vệ pháp lí mang lại cho người sáng tạo tác phẩm gốc quyền độc quyền kiểm soát cách tác phẩm được sử dụng và phân phối', right: 'Bản quyền (Copyright)' },
            { icon: '™️', left: 'Một từ, cụm từ, biểu tượng hay thiết kế được đăng kí hợp pháp để đại diện cho một sản phẩm hoặc một tổ chức', right: 'Nhãn hiệu (Trademark)' },
            { icon: '🧠', left: 'Những tài sản mang tính sáng tạo hoặc ý tưởng của con người được pháp luật bảo vệ, trao quyền độc quyền cho người sáng tạo hoặc chủ sở hữu để kiểm soát và tận dụng lợi ích', right: 'Sở hữu trí tuệ (Intellectual Property)' }
          ],
          hint: 'Bản quyền bảo vệ tác phẩm; nhãn hiệu đại diện sản phẩm/tổ chức; sở hữu trí tuệ là khái niệm chung.',
          explain: 'Bản quyền: kiểm soát cách tác phẩm gốc được dùng. Nhãn hiệu: dấu hiệu đại diện sản phẩm/tổ chức. Sở hữu trí tuệ: tài sản sáng tạo được pháp luật bảo vệ.'
        },
        /* Slide 23 (Trang 23 / 23) */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 14!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};
