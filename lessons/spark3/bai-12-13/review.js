/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 12 + 13 — Nguồn thông tin đáng tin cậy
   (tách từ phần Ôn tập của bai-12-13.js; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'bai12-13-nguonthongtin-on-tap',
  icon:  '🧭',
  title: 'Ôn tập Bài 12 + 13 — Nguồn thông tin đáng tin cậy',

  sections: [
    /* ============================================================
       Phần 6 — Ôn tập
       ============================================================ */
    {
      id: 's6',
      title: 'Ôn tập',
      slides: [
        /* Slide 28 (Trang 28 / 42) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Bạn Orson muốn dùng mạng xã hội nhưng nền tảng này có giới hạn độ tuổi. Những người 12 tuổi trở xuống chưa được phép sử dụng mạng xã hội. Bạn Orson sau 2 tháng nữa mới đủ 13 tuổi. Bạn ấy nên làm gì?',
          options: ['Đợi đến lúc đủ 13 tuổi rồi tạo tài khoản.', 'Thay đổi ngày sinh trên hệ thống đăng ký để đủ 13 tuổi.', 'Đăng nhập và dùng tài khoản của bố hoặc mẹ của bạn ấy.', 'Tạo hồ sơ giả làm một người 25 tuổi.'],
          correctAnswer: 0,
          hint: 'Ba cách còn lại đều là khai gian hoặc mượn thông tin của người khác.',
          explain: 'Cách đúng và an toàn là chờ đến khi đủ 13 tuổi. Khai sai ngày sinh, dùng tài khoản của bố mẹ hoặc tạo hồ sơ giả đều vi phạm quy định của nền tảng.'
        },

        /* Slide 29 (Trang 29 / 42) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, làm thế nào có thể xác định thông tin trên một trang Web có chính xác và đáng tin cậy hay không?',
          options: ['Chia sẻ thông tin với bạn bè và xem họ nghĩ gì.', 'Mọi thứ trên Internet đều là sự thật và có thể tin được.', 'Tìm kiếm các trích dẫn hoặc tài liệu tham khảo đến các nguồn đáng tin cậy khác.', 'Kiểm tra xem trang Web có tên hấp dẫn và thiết kế đầy màu sắc hay không.'],
          correctAnswer: 2,
          hint: 'Tên hấp dẫn, thiết kế đẹp hay ý kiến bạn bè đều không chứng minh thông tin đúng.',
          explain: 'Cách đáng tin cậy là tìm các trích dẫn hoặc tài liệu tham khảo đến những nguồn đáng tin cậy khác.'
        },

        /* Slide 30 (Trang 30 / 42) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Với mỗi phát biểu về việc xác định một nguồn thông tin đáng tin cậy, hãy chọn Có nếu đó là việc làm phù hợp và chọn Không nếu không phải: Đọc bình luận từ mạng xã hội. ___ Thực hiện một khảo sát với những người bạn thân. ___ Sử dụng một bách khoa toàn thư trực tuyến mà trường của bạn giới thiệu. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 }
          ],
          hint: 'Bình luận và ý kiến của vài người bạn chưa đủ để kết luận thông tin có đáng tin cậy hay không.',
          explain: 'Bình luận mạng xã hội và khảo sát vài người bạn thân đều không phải nguồn đáng tin cậy (Không). Bách khoa toàn thư trực tuyến do trường giới thiệu là nguồn phù hợp (Có).'
        },

        /* Slide 31 (Trang 31 / 42) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Bạn cần tìm các nguồn thông tin đáng tin cậy và hợp lệ cho một bài viết của mình về tình hình sử dụng công nghệ hiện nay ở trường học. Với mỗi phát biểu về các nguồn thông tin, em hãy chọn Có nếu là nguồn đáng tin cậy, chọn Không nếu không phải: Một bài viết được đăng bởi một trường đại học với URL có đuôi là .com. ___ Trang Web được phát hành vào tháng 01 năm 1989. ___ Có hai nguồn tài nguyên khác đồng ý với trang Web này. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 }
          ],
          hint: 'Trường đại học thường dùng đuôi .edu; và bài viết về công nghệ hiện nay thì cần thông tin mới.',
          explain: 'URL của trường đại học mà lại có đuôi .com thì đáng nghi (Không). Trang phát hành năm 1989 đã quá cũ so với "hiện nay" (Không). Có thêm hai nguồn khác cùng đồng ý thì đáng tin cậy hơn (Có).'
        },

        /* Slide 32 (Trang 32 / 42) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Với mỗi câu phát biểu, em hãy chọn Có nếu nguồn đó đáng tin cậy hoặc chọn Không nếu không phải: Tác giả sử dụng trang web của National Geographic về cá voi xanh. ___ Không có thông tin trích dẫn nào trong bài viết về cá voi xanh. ___ Tác giả nghiên cứu nhiều nguồn để đánh giá nơi cá voi xanh di cư đến. ___ Sử dụng một bách khoa toàn thư trực tuyến mà trường của bạn giới thiệu. ___ Khuyến nghị của nhà trường. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 0 }
          ],
          hint: 'Nguồn đáng tin cậy cần có tổ chức uy tín, có trích dẫn, được nghiên cứu từ nhiều nguồn hoặc do nhà trường khuyến nghị.',
          explain: 'National Geographic, nghiên cứu từ nhiều nguồn, bách khoa toàn thư do trường giới thiệu và khuyến nghị của nhà trường đều là nguồn đáng tin cậy (Có). Bài viết không có trích dẫn nào thì chưa đáng tin cậy (Không).'
        },

        /* Slide 33 (Trang 33 / 42) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Khi muốn tìm ra nhiều trang Web viết về chủ đề khủng long, em nên sử dụng trang Web nào để thực hiện một lệnh tìm kiếm?',
          options: ['google.com', 'dinosaurs.com', 'wikipedia.com', 'encyclopedia.com'],
          correctAnswer: 0,
          hint: 'Em cần một công cụ tìm kiếm cho ra kết quả từ nhiều nguồn khác nhau.',
          explain: 'Google là công cụ tìm kiếm mạnh mẽ, giúp tìm được kết quả từ nhiều nguồn khác nhau (trang chuyên về khủng long, bài viết, hình ảnh, video, tài liệu học thuật). Ba trang còn lại cũng cung cấp thông tin tốt nhưng Google cho cái nhìn tổng quan và đa dạng hơn.'
        },

        /* Slide 34 (Trang 34 / 42) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em có các trích dẫn sau: "Orson, D: 2010. Sách mẫu. (Tái bản lần thứ 2). Companypro." Em hãy cho biết, thông tin nào có trong trích dẫn? (Chọn 3)',
          options: ['Số trang (Number of Pages)', 'Tác giả (Author)', 'URL (Uniform Resource Locator)', 'Tiêu đề (Title)', 'Nhà xuất bản (Publisher)', 'Tập tin (File)'],
          correctAnswers: [1, 3, 4],
          hint: 'Trong trích dẫn có tên người, tên sách và tên công ty phát hành — không có số trang, đường dẫn web hay tập tin.',
          explain: 'Orson, D là tác giả (Author); "Sách mẫu" là tiêu đề (Title); Companypro là nhà xuất bản (Publisher).'
        },

        /* Slide 35 (Trang 35 / 42) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây sẽ cho em biết tác giả của một trang Web?',
          options: ['URL', 'Trang hỗ trợ khách hàng', 'Trang giới thiệu', 'Số điện thoại ở mục liên hệ với chúng tôi'],
          correctAnswer: 2,
          hint: 'Trang nào giới thiệu về những người/tổ chức đứng sau trang Web?',
          explain: '"Trang giới thiệu" (About) thường cho biết ai là tác giả hoặc tổ chức đứng sau trang Web.'
        },

        /* Slide 36 (Trang 36 / 42) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, mục đích của việc đưa các trích dẫn vào một bài nghiên cứu ở trường là gì?',
          options: ['Để thêm trang vào bài tập', 'Để ghi công cho các tác giả ban đầu và tránh đạo văn', 'Để thể hiện kiến thức của em về nhiều nguồn', 'Để làm cho nhiệm vụ của em trông đẹp hơn'],
          correctAnswer: 1,
          hint: 'Nghĩ tới việc tôn trọng công sức của người viết ra thông tin gốc.',
          explain: 'Trích dẫn giúp ghi công cho các tác giả ban đầu và tránh đạo văn.'
        },

        /* Slide 37 (Trang 37 / 42) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy chọn Đúng hoặc Sai với mỗi phát biểu sau đây: Truyền thông xã hội gồm các nền tảng: Facebook, Twitter, Instagram, Youtube. ___ Diễn đàn là các trang Web thảo luận trực tuyến được trình bày dưới dạng câu hỏi và câu trả lời. ___ Các trang Web, mạng xã hội hoặc trò chơi trực tuyến thường không quy định về độ tuổi để có thể tham gia. ___ Bình luận là những ý kiến, nhận xét hoặc phản hồi được người dùng thể hiện về nội dung trên các nền tảng trực tuyến. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Nhớ lại: hầu hết các nền tảng đều có quy định độ tuổi tối thiểu.',
          explain: '(1) Đúng — Truyền thông xã hội gồm nhiều nền tảng phổ biến như Facebook, Twitter, Instagram, Youtube. (2) Đúng — Diễn đàn là trang Web thảo luận trực tuyến dạng hỏi đáp giữa các thành viên. (3) Sai — Hầu hết các trang Web, mạng xã hội và trò chơi trực tuyến đều CÓ quy định độ tuổi tối thiểu (thường ghi trong điều khoản sử dụng). (4) Đúng — Bình luận là ý kiến, nhận xét hoặc phản hồi của người dùng về nội dung trên nền tảng trực tuyến.'
        },

        /* Slide 38 (Trang 38 / 42) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy điền vào chỗ trống các từ khóa để hoàn thành các định nghĩa sau: Thông tin có thể lan truyền nhanh chóng nhưng cũng có thể chứa thông tin không chính xác hoặc đồn đại khi ở trên ___ Để đánh giá thông tin, ngoài tính xác thực em còn phải kiểm tra ___ Việc kiểm tra nguồn gốc và tính xác thực của thông tin là rất ___ Để xác định tính chính xác và đáng tin cậy của thông tin được chia sẻ, bình luận cũng cần được ___',
          blanks: [
            { options: ['nguồn gốc', 'đánh giá', 'quan trọng', 'truyền thông xã hội'], correctAnswer: 3 },
            { options: ['nguồn gốc', 'đánh giá', 'quan trọng', 'truyền thông xã hội'], correctAnswer: 0 },
            { options: ['nguồn gốc', 'đánh giá', 'quan trọng', 'truyền thông xã hội'], correctAnswer: 2 },
            { options: ['nguồn gốc', 'đánh giá', 'quan trọng', 'truyền thông xã hội'], correctAnswer: 1 }
          ],
          hint: 'Từ khóa: nguồn gốc, đánh giá, quan trọng, truyền thông xã hội — mỗi từ dùng đúng 1 lần.',
          explain: 'Trên truyền thông xã hội, thông tin lan truyền nhanh nhưng có thể không chính xác hoặc là đồn đại. Việc kiểm tra nguồn gốc và tính xác thực là rất quan trọng, và bình luận cũng cần được đánh giá để biết có chính xác, đáng tin cậy hay không.'
        },

        /* Slide 39 (Trang 39 / 42) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy chọn Đúng nếu là lí do tại sao chúng ta nên kiểm tra thời gian đăng tin của một bài viết, chọn Sai nếu không phải: Để biết bài viết có nhiều hình ảnh hay không. ___ Để biết thông tin đó có được cập nhật và không bị lỗi thời hay không. ___ Để biết trang Web có giao diện đẹp hay không. ___ Để biết tác giả là ai. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 }
          ],
          hint: 'Thời gian đăng tin cho biết thông tin còn mới hay đã cũ.',
          explain: 'Chỉ có lí do "kiểm tra thông tin có được cập nhật, không bị lỗi thời" là đúng: thông tin cũ có thể không còn chính xác (số liệu, tin tức, giá cả...). Số lượng hình ảnh, giao diện đẹp hay tên tác giả không liên quan tới thời gian đăng tin.'
        },

        /* Slide 40 (Trang 40 / 42) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Khi tìm thông tin trực tuyến, chúng ta nên làm gì để đảm bảo nguồn tin đáng tin cậy?',
          options: ['Chỉ đọc thông tin từ các trang Web nổi tiếng.', 'Xem xét đầy đủ về tác giả, nguồn và tính cập nhật của thông tin.', 'Đọc nhanh và không cần kiểm tra kĩ.', 'Chỉ tin vào những gì bạn bè chia sẻ.'],
          correctAnswer: 1,
          hint: 'Cần một cách kiểm tra đầy đủ, không chỉ dựa vào độ nổi tiếng hay lời bạn bè.',
          explain: 'Muốn nguồn tin đáng tin cậy, em cần xem xét đầy đủ tác giả, nguồn và tính cập nhật của thông tin — không chỉ dựa vào độ nổi tiếng hay lời bạn bè.'
        },

        /* Slide 41 (Trang 41 / 42) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Khi tìm kiếm thông tin trên mạng, tại sao chúng ta nên ưu tiên các trang Web có tên miền .gov hoặc .edu?',
          options: ['Có thông tin đáng tin cậy', 'Có thông tin gây tranh cãi', 'Có thông tin giật gân', 'Có thông tin với nhiều ngôn ngữ khác nhau'],
          correctAnswer: 0,
          hint: '.gov là cơ quan Chính phủ, .edu là cơ sở giáo dục.',
          explain: 'Tên miền .edu (cơ sở giáo dục) và .gov (cơ quan Chính phủ) giúp xác định thông tin chính xác và đáng tin cậy hơn.'
        },

        /* Slide 42 — slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 12 + 13!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};
