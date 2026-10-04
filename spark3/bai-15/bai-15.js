/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 15: KHÁM PHÁ CREATIVE COMMONS
   (IC3 GS6 Spark — Level 3 — Chủ đề: Quản lí thông tin)
   ------------------------------------------------------------
   Dùng chung engine với các bài khác (lesson.js + lesson.css),
   chỉ khác nội dung. Nguồn: PPTX gốc K5_B15_GiayPhepCreativeCommons.pptx.

   Ghi chú:
   - Đáp án các câu vận dụng được xác định theo nội dung bài học.
   - 6 giấy phép CC phổ biến: slide gốc chỉ có hình biểu tượng và mô tả
     (không ghi tên); tên gọi CC BY, BY-SA, BY-NC, BY-ND, BY-NC-SA,
     BY-NC-ND được ghép theo nội dung mô tả.
   ============================================================ */

const PASSWORDS = {
  s1: '',  // Phần 1 — Khái niệm Creative Commons
  s2: '',  // Phần 2 — Mục đích của Creative Commons
  s3: '',  // Phần 3 — Một số giấy phép Creative Commons phổ biến
  s4: '',  // Phần 4 — Tìm tài nguyên CC với công cụ AI (Đọc thêm)
  s5: ''   // Phần 5 — Ôn tập
};

const LESSON = {
  id:    'bai15-creative-commons',
  icon:  '<img src="cc.png" alt="CC" style="height:1.2em;vertical-align:middle">',
  title: 'Bài 15 — Khám phá Creative Commons',

  sections: [
    {
      id: 's1',
      title: 'Khái niệm Creative Commons',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 22) */
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm',
          title: 'Creative Commons là gì?',
          content: '<b>Creative Commons</b> là tổ chức cung cấp phương thức để người sáng tạo có thể cấp quyền sử dụng miễn phí sản phẩm sáng tạo của họ theo luật bản quyền.',
          imageUrl: null
        },
        /* Slide 2 (Trang 2 / 22) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tổ chức nào cung cấp phương thức để người sáng tạo có thể cấp quyền sử dụng miễn phí sản phẩm sáng tạo của họ theo luật bản quyền?',
          options: ['Shutterstock', 'Wix', 'Creative Commons', 'Canva'],
          correctAnswer: 2,
          hint: 'Tên tổ chức gắn với các giấy phép "CC".',
          explain: 'Creative Commons là tổ chức cung cấp phương thức để người sáng tạo cấp quyền sử dụng miễn phí sản phẩm của họ.'
        },
        /* Slide 3 (Trang 3 / 22) */
        {
          type: 'info',
          topic: 'Phần 1 · Giấy phép CC',
          title: 'Giấy phép Creative Commons',
          content: '<b>Giấy phép Creative Commons (CC)</b> là một trong số các giấy phép bản quyền công khai cho phép phân phối miễn phí "tác phẩm" có bản quyền khác.',
          imageUrl: null
        }
      ]
    },

    {
      id: 's2',
      title: 'Mục đích của Creative Commons',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 4 (Trang 4 / 22) */
        {
          type: 'info',
          topic: 'Phần 2 · Mục đích',
          title: 'Mục đích của Creative Commons (1)',
          content: 'Creative Commons cho phép nhà sáng tạo <b>trao quyền sử dụng</b> sản phẩm của họ cho người khác.',
          imageUrl: null
        },
        /* Slide 5 (Trang 5 / 22) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Mục đích của Creative Commons là gì?',
          options: ['Cho phép nhà sáng tạo từ bỏ mọi quyền đối với sản phẩm của họ.', 'Cho phép nhà sáng tạo trao quyền sử dụng sản phẩm của họ cho người khác.', 'Cho phép mọi người tự do sao chép mọi sản phẩm mà không cần ghi công người sáng tạo.', 'Cho phép mọi người chỉnh sửa và bán sản phẩm của người khác.'],
          correctAnswer: 1,
          hint: 'Nhà sáng tạo vẫn giữ quyền tác giả, chỉ trao quyền sử dụng.',
          explain: 'Creative Commons cho phép nhà sáng tạo trao quyền sử dụng sản phẩm cho người khác, chứ không từ bỏ quyền của mình.'
        },
        /* Slide 6 (Trang 6 / 22) */
        {
          type: 'info',
          topic: 'Phần 2 · Mục đích',
          title: 'Mục đích của Creative Commons (2)',
          content: 'Creative Commons giúp người sáng tạo <b>phân phối sản phẩm một cách tự do và hợp pháp</b>, nhưng vẫn giữ quyền tác giả.',
          imageUrl: null
        },
        /* Slide 7 (Trang 7 / 22) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào là mục tiêu chính của Tài sản sáng tạo công cộng (Creative Commons)?',
          options: ['Để áp dụng luật bản quyền đến mức độ cao nhất.', 'Để đảm bảo mọi phần mềm đều được sở hữu độc quyền.', 'Để giới hạn việc sáng tác nghệ thuật.', 'Để phân phối thông tin một cách tự do.'],
          correctAnswer: 3,
          hint: 'Từ khóa: "phân phối tự do và hợp pháp".',
          explain: 'Mục tiêu chính của Creative Commons là phân phối thông tin, sản phẩm một cách tự do và hợp pháp.'
        }
      ]
    },

    {
      id: 's3',
      title: 'Một số giấy phép Creative Commons phổ biến',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 8 (Trang 8 / 22) */
        {
          type: 'info',
          topic: 'Phần 3 · Kí hiệu giấy phép',
          title: 'Kí hiệu của giấy phép Creative Commons',
          content: 'Giấy phép CC được ghép từ 4 kí hiệu điều kiện:',
          imageUrl: null,
          things: [
            { icon: '👤', name: 'BY — Attribution\n(Ghi công)', en: 'Phải ghi tên tác giả' },
            { icon: '💲', name: 'NC — NonCommercial\n(Phi thương mại)', en: 'Không dùng cho mục đích thương mại' },
            { icon: '🚷', name: 'ND — NoDerivatives\n(Không phái sinh)', en: 'Không chỉnh sửa, không tạo tác phẩm mới từ tác phẩm gốc' },
            { icon: '🔁', name: 'SA — ShareAlike\n(Chia sẻ tương tự)', en: 'Tác phẩm mới phải dùng cùng giấy phép' }
          ]
        },
        /* Slide 9 (Trang 9 / 22) */
        {
          type: 'info',
          topic: 'Phần 3 · Giấy phép phổ biến',
          title: 'Ba giấy phép đầu tiên',
          content: 'Các giấy phép CC quy định rõ điều kiện khi em sử dụng tác phẩm:',
          imageUrl: null,
          things: [
            { icon: '👤', name: 'CC BY\n(Ghi công)', en: 'Cho phép sử dụng tác phẩm với điều kiện ghi công tác giả.' },
            { icon: '🔁', name: 'CC BY-SA\n(Ghi công –\nChia sẻ tương tự)', en: 'Cho phép sử dụng, chỉnh sửa, chia sẻ với điều kiện ghi công tác giả và phân phối tác phẩm mới với cùng giấy phép.' },
            { icon: '💲', name: 'CC BY-NC\n(Ghi công –\nPhi thương mại)', en: 'Cho phép sử dụng, chỉnh sửa và chia sẻ với điều kiện ghi công tác giả và không sử dụng cho mục đích thương mại.' },
            { icon: '🚷', name: 'CC BY-ND\n(Ghi công –\nKhông chỉnh sửa)', en: 'Cho phép sử dụng và chia sẻ với điều kiện ghi công tác giả và không thay đổi hoặc chỉnh sửa tác phẩm.' },

          ]
        },
        /* Slide 10 (Trang 10 / 22) */
        {
          type: 'info',
          topic: 'Phần 3 · Giấy phép phổ biến',
          title: 'Ba giấy phép còn lại',
          content: 'Các giấy phép có thêm điều kiện hạn chế chỉnh sửa hoặc thương mại:',
          imageUrl: null,
          things: [
            // { icon: '🚷', name: 'CC BY-ND\n(Ghi công – Không chỉnh sửa)', en: 'Cho phép sử dụng và chia sẻ với điều kiện ghi công tác giả và không thay đổi hoặc chỉnh sửa tác phẩm.' },
            { icon: '🔄', name: 'CC BY-NC-SA\n(Ghi công – Phi thương mại – Chia sẻ tương tự)', en: 'Cho phép sử dụng, chỉnh sửa và chia sẻ với điều kiện ghi công tác giả, không thương mại và chia sẻ tác phẩm mới với cùng giấy phép.' },
            { icon: '⛔', name: 'CC BY-NC-ND\n(Ghi công – Phi thương mại – Không chỉnh sửa)', en: 'Cho phép sử dụng và chia sẻ với điều kiện ghi công tác giả, không thương mại và không chỉnh sửa hoặc tạo tác phẩm phái sinh mới.' }
          ],
          remember: 'Giấy phép nào cũng yêu cầu <b>ghi công tác giả</b> (BY).'
        },
        /* Slide 11 (Trang 11 / 22) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, mục đích chính của giấy phép CC BY-NC là gì?',
          options: ['Bắt buộc ghi công tác giả gốc và cấm sử dụng tác phẩm cho mục đích thương mại.', 'Không cần ghi công tác giả.', 'Yêu cầu chia sẻ tác phẩm mới dưới cùng một giấy phép.', 'Không cho phép tạo ra các tác phẩm phái sinh từ tác phẩm gốc.'],
          correctAnswer: 0,
          hint: 'NC = NonCommercial (phi thương mại), BY = ghi công.',
          explain: 'CC BY-NC bắt buộc ghi công tác giả và không được dùng tác phẩm cho mục đích thương mại.'
        },
        /* Slide 12 (Trang 12 / 22) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, giấy phép CC nào cho phép sử dụng và chia sẻ tác phẩm với điều kiện ghi công tác giả và không thay đổi hoặc chỉnh sửa tác phẩm?',
          options: ['CC BY', 'CC BY-NC', 'CC BY-SA', 'CC BY-ND'],
          correctAnswer: 3,
          hint: 'ND = NoDerivatives (không phái sinh).',
          explain: 'CC BY-ND cho phép sử dụng và chia sẻ nhưng không được thay đổi hay chỉnh sửa tác phẩm.'
        },
        /* Slide 13 (Trang 13 / 22) */
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Em hãy chọn Đúng nếu là phát biểu đúng về giấy phép CC và chọn Sai nếu không phải: Tất cả các giấy phép Creative Commons cho phép sử dụng tác phẩm mà không cần ghi công tác giả. ___ Giấy phép CC BY-SA yêu cầu chia sẻ tác phẩm mới dưới cùng một điều kiện giấy phép. ___ Giấy phép CC BY-NC cho phép sử dụng tác phẩm cho mục đích thương mại. ___ Giấy phép CC BY-ND không cho phép tạo ra các tác phẩm phái sinh từ tác phẩm gốc. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Mọi giấy phép CC đều có BY (ghi công); NC = phi thương mại; SA = chia sẻ tương tự; ND = không phái sinh.',
          explain: 'Mọi giấy phép CC đều yêu cầu ghi công (Sai). BY-SA yêu cầu cùng giấy phép (Đúng). BY-NC cấm mục đích thương mại (Sai). BY-ND không cho tạo tác phẩm phái sinh (Đúng).'
        }
      ]
    },

    {
      id: 's4',
      title: 'Tìm tài nguyên CC với công cụ AI (Đọc thêm)',
      password: PASSWORDS.s4,
      slides: [
        /* Slide 14 (Trang 14 / 22) */
        {
          type: 'info',
          topic: 'Đọc thêm · AI và giấy phép CC',
          title: 'Tìm kiếm tài nguyên CC với công cụ AI',
          content: 'AI có thể giải thích giấy phép CC, nhưng em cần <b>kiểm tra nguồn chính thức</b>.',
          imageUrl: null
        },
        /* Slide 15 (Trang 15 / 22) */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2, 3],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 15!',
          content: 'Em đã biết Creative Commons là gì, mục đích của nó và một số giấy phép CC phổ biến.',
          imageUrl: null,
          remember: 'Muốn ôn lại các câu hỏi của bài, bấm "Tiếp theo" để sang phần <b>Ôn tập</b>.'
        }
      ]
    },

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
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 15!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm, bấm nút "Làm lại phần này" — các phần học trước sẽ không bị ảnh hưởng.',
          imageUrl: null
        }
      ]
    }
  ]
};
