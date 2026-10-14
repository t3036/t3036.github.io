/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 21: TRÍCH DẪN NGUỒN THÔNG TIN
   (IC3 GS6 Spark — Level 3 — Chủ đề: Sáng tạo nội dung)
   ------------------------------------------------------------
   Dùng chung engine với các bài khác (lesson.js + lesson.css).
   Nguồn: PPTX gốc Bai21_TrichDanNguonThongTin.pptx.
   ============================================================ */

const PASSWORDS = {
  s1: '',  // Phần 1 — Chủ sở hữu thông tin
  s2: '',  // Phần 2 — Trích dẫn và các thông tin cần trích dẫn
  s3: '',  // Phần 3 — Tài liệu tham khảo
  s4: '',  // Phần 4 — Chú thích chân trang
  s5: '',  // Phần 5 — Đạo văn
  s6: '',  // Phần 6 — Ghi nguồn khi sử dụng sản phẩm AI
};

const LESSON = {
  id:    'bai21-trich-dan-nguon-thong-tin',
  icon:  '📚',
  title: 'Bài 21 — Trích dẫn nguồn thông tin',

  sections: [
    {
      id: 's1',
      title: 'Chủ sở hữu thông tin',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'info',
          topic: 'Phần 1 · Chủ sở hữu thông tin',
          title: 'Chủ sở hữu thông tin',
          content: 'Hãy luôn tìm hiểu <b>chủ sở hữu</b> và <b>xin phép</b> để có thể chỉnh sửa, chia sẻ hoặc sử dụng thông tin đó.',
          imageUrl: null,
          things: [
            { icon: '📧', name: 'Email', en: 'Chủ sở hữu là người gửi email' },
            { icon: '📝', name: 'Bài đăng trên blog', en: 'Chủ sở hữu là tác giả' },
            { icon: '🎨', name: 'Tác phẩm nghệ thuật số gốc', en: 'Chủ sở hữu là họa sĩ minh họa' }
          ]
        },
        {
          type: 'quiz_matching',
          topic: 'Vận dụng',
          question: 'Em đang cố xác định người tạo sản phẩm gốc của một số loại nội dung đa phương tiện trực tuyến khác nhau. Em hãy nối chủ sở hữu với loại đa phương tiện tương ứng.',
          pairs: [
            { icon: '📝', left: 'Bài đăng trên Blog', right: 'Tác giả' },
            { icon: '🎨', left: 'Tác phẩm nghệ thuật số gốc', right: 'Họa sĩ minh họa' },
            { icon: '📧', left: 'Email', right: 'Người gửi' }
          ],
          hint: 'Blog do tác giả viết; tranh do họa sĩ vẽ; email do người gửi tạo ra.',
          explain: 'Chủ sở hữu bài đăng blog là tác giả, tác phẩm nghệ thuật số gốc là họa sĩ minh họa, email là người gửi.'
        },
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, ai có quyền sở hữu đối với hình ảnh mà em tìm thấy trên Internet?',
          options: ['Người đã tạo và tải lên hình ảnh', 'Người viết chú thích cho hình ảnh trực tuyến', 'Trang Web nơi hình ảnh được hiển thị', 'Công cụ tìm kiếm em đã sử dụng để tìm hình ảnh'],
          correctAnswer: 0,
          hint: 'Ai là người tạo ra hình ảnh gốc?',
          explain: 'Người đã tạo và tải lên hình ảnh là chủ sở hữu của hình ảnh đó.'
        },
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây sẽ cho em biết tác giả của một trang Web?',
          options: ['Trang giới thiệu', 'Trang hỗ trợ khách hàng', 'Số điện thoại ở mục liên hệ với chúng tôi', 'URL'],
          correctAnswer: 0,
          hint: 'Thông tin về người tạo ra trang Web thường nằm ở trang nói về chính trang Web đó.',
          explain: 'Tác giả của một trang Web thường được tìm thấy ở trang giới thiệu.'
        }
      ]
    },

    {
      id: 's2',
      title: 'Trích dẫn và các thông tin cần trích dẫn',
      password: PASSWORDS.s2,
      slides: [
        {
          type: 'info',
          topic: 'Phần 2 · Trích dẫn',
          title: 'Trích dẫn (Citation)',
          content: '<b>Trích dẫn (Citation)</b> là việc cung cấp thông tin về <b>nguồn gốc</b> mà chúng ta đã sử dụng để <b>ghi công cho tác giả</b> và <b>tránh đạo văn</b>.',
          imageUrl: null,
          things: [
            { icon: '🦸', name: 'Ví dụ 1', en: 'Em dùng hình ảnh về một siêu anh hùng do một tác giả nổi tiếng tạo ra' },
            { icon: '🐋', name: 'Ví dụ 2', en: 'Em trích dẫn một đoạn về số lượng cá voi từ một bài nghiên cứu do National Geographic xuất bản' }
          ]
        },
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Em đang chuẩn bị một bài trình chiếu để trình bày trước lớp. Với mỗi phát biểu, em hãy chọn Có nếu cần trích dẫn nguồn hoặc Không nếu không cần: Em dùng chữ “Chúc mừng sinh nhật” trong bài trình chiếu của mình ___ Em dùng hình ảnh về một siêu anh hùng do một tác giả nổi tiếng tạo ra ___ Em trích dẫn một đoạn về số lượng cá voi từ một bài nghiên cứu do National Geographic xuất bản ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 0 }
          ],
          hint: 'Chỉ cần trích dẫn khi em dùng sản phẩm hoặc thông tin do người khác tạo ra.',
          explain: 'Dòng chữ chúc mừng do chính em gõ nên không cần trích dẫn. Hình ảnh của tác giả khác và đoạn trích từ bài nghiên cứu thì cần trích dẫn.'
        },
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tình huống nào em nên dùng trích dẫn?',
          options: ['Khi em đăng nội dung gốc của người khác trên mạng xã hội', 'Khi em được phỏng vấn cho một bài báo', 'Khi em tạo ra một tác phẩm hội họa mới trên lớp'],
          correctAnswer: 0,
          hint: 'Nội dung nào không phải do chính em tạo ra?',
          explain: 'Khi đăng lại nội dung gốc của người khác, em cần trích dẫn để ghi công cho họ.'
        },
        {
          type: 'info',
          topic: 'Phần 2 · Thông tin trong trích dẫn',
          title: 'Các thông tin trong một trích dẫn',
          content: 'Một trích dẫn thường bao gồm:',
          imageUrl: null,
          things: [
            { icon: '✍️', name: 'Tác giả', en: 'Author' },
            { icon: '🏷️', name: 'Tiêu đề', en: 'Title' },
            { icon: '🏢', name: 'Nhà xuất bản', en: 'Publisher' },
            { icon: '📅', name: 'Ngày xuất bản', en: 'Publication date' },
            { icon: '🔢', name: 'Phiên bản', en: 'Edition' }
          ]
        },
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, thông tin nào nên được đưa vào trích dẫn cho một cuốn sách?',
          options: ['Tên sách và tên tác giả', 'Tên của thư viện và ngày em đọc sách', 'Tên của người đã giới thiệu cuốn sách cho em', 'Bìa sách trông như thế nào và có bao nhiêu trang'],
          correctAnswer: 0,
          hint: 'Trích dẫn cần cho biết sách nào, của ai.',
          explain: 'Trích dẫn cho một cuốn sách gồm tên sách (tiêu đề) và tên tác giả.'
        },
        {
          type: 'info',
          topic: 'Phần 2 · Một số trích dẫn phù hợp',
          title: 'Trích dẫn bằng cách ghi nguồn tác giả',
          content: 'Ví dụ: “Có hai con mèo ngồi bên cửa sổ” của tác giả Nguyễn Nhật Ánh.',
          imageUrl: null,
          remember: 'Tác giả của một trang Web thường được tìm thấy ở <b>trang giới thiệu</b>.'
        },
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em có trích dẫn sau: “Orson, D: 2010. Sách mẫu. (Tái bản lần thứ 2). Companypro.” Em hãy cho biết, thông tin nào có trong trích dẫn? (Chọn 3)',
          options: ['Tiêu đề (Title)', 'Nhà xuất bản (Publisher)', 'Tác giả (Author)', 'Số trang (Number of Pages)', 'URL (Uniform Resource Locator)', 'Tập tin (File)'],
          correctAnswers: [0, 1, 2],
          hint: 'Hãy tìm tên người, tên sách và tên công ty trong trích dẫn.',
          explain: 'Trích dẫn có tác giả (Orson, D), tiêu đề (Sách mẫu) và nhà xuất bản (Companypro). Không có số trang, URL hay tập tin.'
        },
        {
          type: 'info',
          topic: 'Phần 2 · Một số trích dẫn phù hợp',
          title: 'Trích dẫn từ trang Web, số liệu và bài báo',
          content: 'Em cũng cần trích dẫn khi sử dụng thông tin từ các nguồn khác:',
          imageUrl: null,
          things: [
            { icon: '🌐', name: 'Trang Web', en: 'Ví dụ: “Thông tin từ www.dongvathoangda.org”' },
            { icon: '📊', name: 'Nguồn số liệu hoặc bảng số liệu', en: 'Ví dụ: “Số liệu này từ cơ quan bảo tồn môi trường.”' },
            { icon: '📰', name: 'Nguồn hỗ trợ ý kiến của em', en: 'Ví dụ: “Ý kiến này được trích từ bài báo News.”' }
          ]
        }
      ]
    },

    {
      id: 's3',
      title: 'Tài liệu tham khảo',
      password: PASSWORDS.s3,
      slides: [
        {
          type: 'info',
          topic: 'Phần 3 · Tài liệu tham khảo',
          title: 'Tài liệu tham khảo (Reference)',
          content: '<b>Tài liệu tham khảo (Reference)</b> là danh sách các nguồn thông tin, ý tưởng mà chúng ta đã lấy để nghiên cứu hoặc tạo ra một sản phẩm thông tin.',
          imageUrl: null,
          things: [
            { icon: '📖', name: 'Sách', en: 'Nguồn thông tin dạng sách' },
            { icon: '📰', name: 'Báo', en: 'Nguồn thông tin dạng báo chí' },
            { icon: '🌐', name: 'Trang Web', en: 'Nguồn thông tin trực tuyến' },
            { icon: '🎬', name: 'Video', en: 'Nguồn thông tin dạng video' }
          ]
        }
      ]
    },

    {
      id: 's4',
      title: 'Chú thích chân trang',
      password: PASSWORDS.s4,
      slides: [
        {
          type: 'info',
          topic: 'Phần 4 · Chú thích',
          title: 'Chú thích chân trang và chú thích cuối tài liệu',
          content: 'Hai cách ghi chú thích nguồn trong văn bản:',
          imageUrl: null,
          things: [
            { icon: '📄', name: 'Chú thích chân trang\n(Footnote)', en: 'Phần chú thích thường được đặt ở cuối mỗi trang văn bản' },
            { icon: '📑', name: 'Chú thích cuối tài liệu\n(Endnote)', en: 'Phần chú thích thường được đặt ở cuối tài liệu' }
          ],
          remember: 'Footnote và Endnote được sử dụng trong các bài báo học thuật, tài liệu nghiên cứu và các loại ấn phẩm khác.'
        }
      ]
    },

    {
      id: 's5',
      title: 'Đạo văn và hành động tránh đạo văn',
      password: PASSWORDS.s5,
      slides: [
        {
          type: 'info',
          topic: 'Phần 5 · Đạo văn',
          title: 'Đạo văn (Plagiarism)',
          content: '<b>Đạo văn (Plagiarism)</b> là việc sao chép, sử dụng tác phẩm của người khác và <b>giả vờ như là của mình</b> hoặc sử dụng một thông tin mà <b>không trích dẫn nguồn</b>.',
          imageUrl: null
        },
        {
          type: 'quiz_matching',
          topic: 'Vận dụng',
          question: 'Em hãy nối từng thuật ngữ với mô tả tương ứng.',
          pairs: [
            { icon: '🚫', left: 'Sử dụng một nguồn và không chia sẻ nguồn này đến từ đâu.', right: 'Đạo văn (Plagiarism)' },
            { icon: '✅', left: 'Nêu rõ nguồn lấy thông tin.', right: 'Trích dẫn (Citation)' }
          ],
          hint: 'Một bên giấu nguồn, một bên nêu rõ nguồn.',
          explain: 'Đạo văn là dùng nguồn mà không nói nguồn đến từ đâu. Trích dẫn là nêu rõ nguồn lấy thông tin.'
        },
        {
          type: 'info',
          topic: 'Phần 5 · Tránh đạo văn',
          title: 'Những hành động không nên thực hiện',
          content: 'Để tránh đạo văn, em <b>KHÔNG</b> nên:',
          imageUrl: null,
          things: [
            { icon: '💭', name: 'Dùng ý tưởng của người khác', en: 'Sử dụng phát biểu hoặc ý tưởng của người khác mà không trích dẫn nguồn gốc' },
            { icon: '📋', name: 'Sao chép thông tin', en: 'Sao chép thông tin mà không trích dẫn nguồn gốc' },
            { icon: '🖼️', name: 'Dùng hình ảnh, bài viết, tác phẩm', en: 'Sử dụng hình ảnh, bài viết hoặc tác phẩm của người khác mà không ghi tên tác giả và trích dẫn nguồn' }
          ],
          remember: 'Dùng sản phẩm của người khác thì luôn <b>ghi tên tác giả</b> và <b>trích dẫn nguồn</b>!'
        },
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Đúng hay Sai? “Đạo văn (Plagiarism) là sao chép tác phẩm của người khác và giả vờ như đó là của em.”',
          options: ['Đúng', 'Sai'],
          correctAnswer: 0,
          hint: 'Nhớ lại định nghĩa đạo văn vừa học.',
          explain: 'Phát biểu này đúng: đạo văn là sao chép tác phẩm của người khác và xem như là của mình.'
        },
        {
          type: 'quiz_matching',
          topic: 'Vận dụng',
          question: 'Em hãy nối các thuật ngữ với ví dụ phù hợp.',
          pairs: [
            { icon: '🚫', left: 'Sử dụng tác phẩm của người khác như là của mình', right: 'Đạo văn (Plagiarism)' },
            { icon: '✅', left: 'Cung cấp thông tin về hình ảnh em lấy từ Internet và dùng trong bài tập của mình', right: 'Trích dẫn (Citation)' }
          ],
          hint: 'Ghi nguồn hình ảnh là trích dẫn; nhận tác phẩm người khác là của mình là đạo văn.',
          explain: 'Dùng tác phẩm của người khác như của mình là đạo văn. Cung cấp thông tin nguồn của hình ảnh là trích dẫn.'
        }
      ]
    },

    {
      id: 's6',
      title: 'Ghi nguồn khi sử dụng sản phẩm AI',
      password: PASSWORDS.s6,
      slides: [
        {
          type: 'info',
          topic: 'Phần 6 · Ghi nguồn khi sử dụng sản phẩm AI',
          title: 'Ghi nguồn khi sử dụng sản phẩm AI',
          content: 'Nội dung do <b>AI hỗ trợ</b> cũng cần được <b>kiểm tra</b> và <b>minh bạch</b>.',
          imageUrl: null,
          things: [
            { icon: '🔍', name: 'Kiểm tra', en: 'Kiểm tra lại nội dung AI tạo ra trước khi sử dụng' },
            { icon: '🪟', name: 'Minh bạch', en: 'Nói rõ em đã dùng AI hỗ trợ' },
            { icon: '🚫', name: 'Không sao chép nguyên văn', en: 'Không sao chép nguyên văn AI để nộp như bài của mình' }
          ],
          remember: 'Dùng AI để hỗ trợ thì được, nhưng <b>không</b> nhận nội dung của AI là của mình!'
        },
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 4],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 21!',
          content: 'Em đã biết về chủ sở hữu thông tin, cách trích dẫn nguồn, tài liệu tham khảo, chú thích chân trang và cách tránh đạo văn, cũng như cách ghi nguồn khi dùng AI.',
          imageUrl: null,
          remember: 'Muốn ôn lại các câu hỏi của bài, hãy vào trang <b>Ôn tập</b> để luyện thêm.'
        }
      ]
    }
  ]
};
