/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 14: BẢO VỆ SỞ HỮU TRÍ TUỆ
   (IC3 GS6 Spark — Level 3 — Chủ đề: Quản lí thông tin)
   ------------------------------------------------------------
   Dùng chung engine với các bài khác (lesson.js + lesson.css),
   chỉ khác nội dung. Nguồn: PPTX gốc K5_B14_BaoVeSoHuuTriTue.pptx.

   Ghi chú:
   - Đáp án các câu vận dụng được xác định theo nội dung bài học.
   - Slide 18 gốc: định nghĩa "hình thức bảo vệ pháp lí ... quyền độc
     quyền kiểm soát tác phẩm" thực chất là Bản quyền (Copyright),
     nhưng slide gốc lại liệt kê "Proprietary" — ở đây ghép với
     "Bản quyền (Copyright)" cho đúng nghĩa.
   - Hình minh họa (nhãn hiệu, bằng sáng chế) thay bằng emoji.
   ============================================================ */

const PASSWORDS = {
  s1: '',  // Phần 1 — Một số khái niệm về bảo vệ sở hữu trí tuệ
  s2: '',  // Phần 2 — Sử dụng AI không vi phạm bản quyền (Đọc thêm)
  s3: ''   // Phần 3 — Ôn tập
};

const LESSON = {
  id:    'bai14-so-huu-tri-tue',
  icon:  '©️',
  title: 'Bài 14 — Bảo vệ sở hữu trí tuệ',

  sections: [
    {
      id: 's1',
      title: 'Một số khái niệm về bảo vệ sở hữu trí tuệ',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 23) */
        {
          type: 'info',
          topic: 'Phần 1 · Sở hữu trí tuệ',
          title: 'Sở hữu trí tuệ',
          content: '<b>Sở hữu trí tuệ (Intellectual Property)</b> là những sản phẩm của trí tuệ con người được pháp luật bảo vệ để trao cho người sáng tạo hoặc chủ sở hữu các quyền độc quyền kiểm soát và hưởng lợi từ những sản phẩm của họ.',
          imageUrl: null,
          remember: 'Sở hữu trí tuệ gồm: <b>bản quyền, nhãn hiệu, bằng sáng chế</b>…'
        },
        /* Slide 2 (Trang 2 / 23) */
        {
          type: 'info',
          topic: 'Phần 1 · Bản quyền',
          title: 'Bản quyền',
          content: '<b>Bản quyền (Copyright)</b> là một hình thức bảo vệ pháp lí mang lại cho người sáng tạo tác phẩm gốc quyền độc quyền kiểm soát cách tác phẩm của họ được sử dụng và phân phối.',
          imageUrl: null,
          things: [
            { icon: '📚', name: 'Sách', en: 'Được bảo vệ bởi bản quyền' },
            { icon: '🖼️', name: 'Hình ảnh', en: 'Được bảo vệ bởi bản quyền' },
            { icon: '🎬', name: 'Phim', en: 'Được bảo vệ bởi bản quyền' },
            { icon: '💻', name: 'Phần mềm', en: 'Được bảo vệ bởi bản quyền' }
          ]
        },
        /* Slide 3 (Trang 3 / 23) */
        {
          type: 'info',
          topic: 'Phần 1 · Vi phạm bản quyền',
          title: 'Vi phạm bản quyền',
          content: '<b>Vi phạm bản quyền (Piracy)</b> là việc sao chép, phân phối hoặc sử dụng nội dung kĩ thuật số mà không có sự cho phép của chủ sở hữu.',
          imageUrl: null,
          remember: 'Ví dụ: Em chia sẻ một trò chơi điện tử hoặc ứng dụng em đã mua cho bạn bè mà không có sự đồng ý của người tạo ra nó — nghĩa là em đã <b>vi phạm bản quyền</b>.'
        },
        /* Slide 4 (Trang 4 / 23) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là vi phạm bản quyền (Piracy)?',
          options: ['Khi một công ty đăng kí bằng sáng chế cho quy trình sản xuất của họ.', 'Khi một người sử dụng tác phẩm của người khác mà không có sự cho phép.', 'Khi một người tạo ra một sản phẩm mới.', 'Khi một công ty đăng kí thương hiệu của họ.'],
          correctAnswer: 1,
          hint: 'Vi phạm bản quyền là dùng nội dung mà không được chủ sở hữu cho phép.',
          explain: 'Vi phạm bản quyền (Piracy) là sao chép, phân phối hoặc sử dụng tác phẩm của người khác mà không có sự cho phép của chủ sở hữu.'
        },
        /* Slide 5 (Trang 5 / 23) */
        {
          type: 'info',
          topic: 'Phần 1 · Nhãn hiệu',
          title: 'Nhãn hiệu',
          content: '<b>Nhãn hiệu (Trademark)</b> là một từ, cụm từ, biểu tượng hay thiết kế được đăng kí hợp pháp để đại diện cho một sản phẩm hoặc một tổ chức.',
          imageUrl: null,
          things: [
            { icon: '™️', name: 'Logo, tên thương hiệu', en: 'Ví dụ: các nhãn hiệu nổi tiếng mà em thường thấy trên sản phẩm' }
          ]
        },
        /* Slide 6 (Trang 6 / 23) */
        {
          type: 'info',
          topic: 'Phần 1 · Bằng sáng chế',
          title: 'Bằng sáng chế',
          content: '<b>Bằng sáng chế (Patent)</b> là một loại pháp lí công nhận quyền độc quyền cho nhà phát minh đối với quy trình, thiết kế hoặc sáng chế trong một thời gian nhất định.',
          imageUrl: null,
          things: [
            { icon: '💡', name: 'Bằng sáng chế bóng đèn điện', en: 'Thomas Edison (1847–1931)' },
            { icon: '☎️', name: 'Bằng sáng chế điện thoại', en: 'Alexander Graham Bell (1847–1922)' }
          ]
        },
        /* Slide 7 (Trang 7 / 23) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Điền vào chỗ trống: "____________ là một loại pháp lí công nhận quyền độc quyền cho nhà phát minh đối với quy trình, thiết kế hoặc sáng chế trong một thời gian nhất định."',
          options: ['Bằng sáng chế', 'Nhãn hiệu', 'Nguồn mở', 'Độc quyền'],
          correctAnswer: 0,
          hint: 'Edison và Bell được công nhận quyền độc quyền đối với phát minh của họ bằng loại này.',
          explain: 'Bằng sáng chế (Patent) công nhận quyền độc quyền cho nhà phát minh trong một thời gian nhất định.'
        },
        /* Slide 8 (Trang 8 / 23) */
        {
          type: 'quiz_matching',
          topic: 'Vận dụng',
          question: 'Em hãy nối mỗi định nghĩa với thuật ngữ phù hợp.',
          pairs: [
            { icon: '©️', left: 'Hình thức bảo vệ pháp lí mang lại cho người sáng tạo tác phẩm gốc quyền độc quyền kiểm soát cách tác phẩm được sử dụng và phân phối', right: 'Bản quyền (Copyright)' },
            { icon: '™️', left: 'Một từ, cụm từ, biểu tượng hay thiết kế được đăng kí hợp pháp để đại diện cho một sản phẩm hoặc một tổ chức', right: 'Nhãn hiệu (Trademark)' },
            { icon: '🧠', left: 'Những tài sản mang tính sáng tạo hoặc ý tưởng của con người được pháp luật bảo vệ, trao quyền độc quyền cho người sáng tạo hoặc chủ sở hữu để kiểm soát và tận dụng lợi ích', right: 'Sở hữu trí tuệ (Intellectual Property)' }
          ],
          hint: 'Bản quyền bảo vệ tác phẩm; nhãn hiệu đại diện sản phẩm/tổ chức; sở hữu trí tuệ là khái niệm chung.',
          explain: 'Bản quyền: kiểm soát cách tác phẩm gốc được dùng. Nhãn hiệu: dấu hiệu đại diện sản phẩm/tổ chức. Sở hữu trí tuệ: tài sản sáng tạo được pháp luật bảo vệ.'
        },
        /* Slide 9 (Trang 9 / 23) */
        {
          type: 'info',
          topic: 'Phần 1 · Độc quyền',
          title: 'Độc quyền',
          content: '<b>Độc quyền (Proprietary)</b> là việc sở hữu và kiểm soát công nghệ, sản phẩm, thông tin hoặc tài nguyên của một tổ chức hoặc cá nhân cụ thể.',
          imageUrl: null,
          remember: 'Ví dụ: <b>phần mềm độc quyền</b> chỉ được sử dụng, sao chép và phân phối dưới quyền kiểm soát của một tổ chức, công ty hoặc cá nhân cụ thể.'
        },
        /* Slide 10 (Trang 10 / 23) */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, độc quyền (Proprietary) là gì? (Chọn 2)',
          options: ['Là phần mềm, thông tin hoặc công nghệ,... được cung cấp miễn phí.', 'Là việc sở hữu và kiểm soát công nghệ, sản phẩm, thông tin hoặc tài nguyên của một tổ chức hoặc cá nhân cụ thể.', 'Cho phép mọi người sử dụng, sửa đổi, phân phối hoặc chia sẻ.', 'Chỉ cho phép các nhà phát triển của công nghệ đó chỉnh sửa và phân phối.'],
          correctAnswers: [1, 3],
          hint: 'Độc quyền = một chủ thể nắm quyền sở hữu và kiểm soát.',
          explain: 'Độc quyền là việc sở hữu và kiểm soát công nghệ, sản phẩm của một tổ chức/cá nhân cụ thể, và chỉ nhà phát triển của công nghệ đó được chỉnh sửa, phân phối.'
        },
        /* Slide 11 (Trang 11 / 23) */
        {
          type: 'info',
          topic: 'Phần 1 · Nguồn mở',
          title: 'Nguồn mở',
          content: '<b>Nguồn mở (Open Source)</b> là phần mềm, thông tin hoặc công nghệ,… được cung cấp miễn phí cho mọi người sử dụng, sửa đổi, phân phối hoặc chia sẻ. Ví dụ với một trò chơi mã nguồn mở, em có thể:',
          imageUrl: null,
          things: [
            { icon: '🎮', name: 'Sử dụng', en: 'Chơi trò chơi miễn phí' },
            { icon: '🛠️', name: 'Sửa đổi', en: 'Thêm tính năng để trò chơi thú vị hơn' },
            { icon: '📤', name: 'Chia sẻ', en: 'Gửi cho bạn bè cùng chơi' }
          ]
        },
        /* Slide 12 (Trang 12 / 23) */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, nguồn mở (Open Source) là gì? (Chọn 2)',
          options: ['Là phần mềm, thông tin hoặc công nghệ,... được cung cấp miễn phí.', 'Là việc sở hữu và kiểm soát công nghệ, sản phẩm, thông tin hoặc tài nguyên của một tổ chức hoặc cá nhân cụ thể.', 'Cho phép mọi người sử dụng, sửa đổi, phân phối hoặc chia sẻ.', 'Chỉ cho phép các nhà phát triển của công nghệ đó chỉnh sửa và phân phối.'],
          correctAnswers: [0, 2],
          hint: 'Nguồn mở = miễn phí và ai cũng được dùng, sửa, chia sẻ.',
          explain: 'Nguồn mở là phần mềm, thông tin hoặc công nghệ được cung cấp miễn phí, cho phép mọi người sử dụng, sửa đổi, phân phối hoặc chia sẻ.'
        }
      ]
    },

    {
      id: 's2',
      title: 'Sử dụng AI không vi phạm bản quyền (Đọc thêm)',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 13 (Trang 13 / 23) */
        {
          type: 'info',
          topic: 'Đọc thêm · AI và bản quyền',
          title: 'Sử dụng AI không vi phạm bản quyền',
          content: 'Dùng AI vẫn phải tôn trọng bản quyền và tác giả.',
          imageUrl: null,
          things: [
            { icon: '🚫', name: 'Không yêu cầu AI sao chép tác phẩm có bản quyền', en: '' },
            { icon: '📝', name: 'Ghi nguồn và ghi nhận sự hỗ trợ của AI', en: 'Khi giáo viên yêu cầu' }
          ]
        },
        /* Slide 14 (Trang 14 / 23) */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 14!',
          content: 'Em đã biết các khái niệm: sở hữu trí tuệ, bản quyền, vi phạm bản quyền, nhãn hiệu, bằng sáng chế, độc quyền, nguồn mở và cách dùng AI không vi phạm bản quyền.',
          imageUrl: null,
          remember: 'Muốn ôn lại các câu hỏi của bài, bấm "Tiếp theo" để sang phần <b>Ôn tập</b>.'
        }
      ]
    },

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
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 14!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm, bấm nút "Làm lại phần này" — các phần học trước sẽ không bị ảnh hưởng.',
          imageUrl: null
        }
      ]
    }
  ]
};
