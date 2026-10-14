/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 21 — Trích dẫn nguồn thông tin
   (dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'bai21-trich-dan-nguon-thong-tin-on-tap',
  icon:  '📚',
  title: 'Ôn tập Bài 21 — Trích dẫn nguồn thông tin',

  sections: [
    {
      id: 's6',
      title: 'Ôn tập',
      slides: [
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây sẽ cho em biết tác giả của một trang Web?',
          options: ['Trang giới thiệu', 'Trang hỗ trợ khách hàng', 'Số điện thoại ở mục liên hệ với chúng tôi', 'URL'],
          correctAnswer: 0,
          hint: 'Thông tin về người tạo ra trang Web thường nằm ở trang nói về chính trang Web đó.',
          explain: 'Tác giả của một trang Web thường được tìm thấy ở trang giới thiệu.'
        },
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
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
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em có trích dẫn sau: “Orson, D: 2010. Sách mẫu. (Tái bản lần thứ 2). Companypro.” Em hãy cho biết, thông tin nào có trong trích dẫn? (Chọn 3)',
          options: ['Tiêu đề (Title)', 'Nhà xuất bản (Publisher)', 'Tác giả (Author)', 'Số trang (Number of Pages)', 'URL (Uniform Resource Locator)', 'Tập tin (File)'],
          correctAnswers: [0, 1, 2],
          hint: 'Hãy tìm tên người, tên sách và tên công ty trong trích dẫn.',
          explain: 'Trích dẫn có tác giả (Orson, D), tiêu đề (Sách mẫu) và nhà xuất bản (Companypro).'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tình huống nào em nên dùng trích dẫn?',
          options: ['Khi em đăng nội dung gốc của người khác trên mạng xã hội', 'Khi em được phỏng vấn cho một bài báo', 'Khi em tạo ra một tác phẩm hội họa mới trên lớp'],
          correctAnswer: 0,
          hint: 'Nội dung nào không phải do chính em tạo ra?',
          explain: 'Khi đăng lại nội dung gốc của người khác, em cần trích dẫn để ghi công cho họ.'
        },
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
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
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy nối các thuật ngữ với ví dụ phù hợp.',
          pairs: [
            { icon: '🚫', left: 'Sử dụng tác phẩm của người khác như là của mình', right: 'Đạo văn (Plagiarism)' },
            { icon: '✅', left: 'Cung cấp thông tin về hình ảnh em lấy từ Internet và dùng trong bài tập của mình', right: 'Trích dẫn (Citation)' }
          ],
          hint: 'Ghi nguồn hình ảnh là trích dẫn; nhận tác phẩm người khác là của mình là đạo văn.',
          explain: 'Dùng tác phẩm của người khác như của mình là đạo văn. Cung cấp thông tin nguồn của hình ảnh là trích dẫn.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Đúng hay Sai? “Đạo văn (Plagiarism) là sao chép tác phẩm của người khác và giả vờ như đó là của em.”',
          options: ['Đúng', 'Sai'],
          correctAnswer: 0,
          hint: 'Nhớ lại định nghĩa đạo văn.',
          explain: 'Phát biểu này đúng: đạo văn là sao chép tác phẩm của người khác và xem như là của mình.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, thông tin nào nên được đưa vào trích dẫn cho một cuốn sách?',
          options: ['Tên sách và tên tác giả', 'Tên của thư viện và ngày em đọc sách', 'Tên của người đã giới thiệu cuốn sách cho em', 'Bìa sách trông như thế nào và có bao nhiêu trang'],
          correctAnswer: 0,
          hint: 'Trích dẫn cần cho biết sách nào, của ai.',
          explain: 'Trích dẫn cho một cuốn sách gồm tên sách (tiêu đề) và tên tác giả.'
        },
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy nối từng thuật ngữ với mô tả tương ứng.',
          pairs: [
            { icon: '🚫', left: 'Sử dụng một nguồn và không chia sẻ nguồn này đến từ đâu.', right: 'Đạo văn (Plagiarism)' },
            { icon: '✅', left: 'Nêu rõ nguồn lấy thông tin.', right: 'Trích dẫn (Citation)' }
          ],
          hint: 'Một bên giấu nguồn, một bên nêu rõ nguồn.',
          explain: 'Đạo văn là dùng nguồn mà không nói nguồn đến từ đâu. Trích dẫn là nêu rõ nguồn lấy thông tin.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, ai có quyền sở hữu đối với hình ảnh mà em tìm thấy trên Internet?',
          options: ['Người đã tạo và tải lên hình ảnh', 'Người viết chú thích cho hình ảnh trực tuyến', 'Trang Web nơi hình ảnh được hiển thị', 'Công cụ tìm kiếm em đã sử dụng để tìm hình ảnh'],
          correctAnswer: 0,
          hint: 'Ai là người tạo ra hình ảnh gốc?',
          explain: 'Người đã tạo và tải lên hình ảnh là chủ sở hữu của hình ảnh đó.'
        },
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 21!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};
