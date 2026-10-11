/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 12 + 13: NGUỒN THÔNG TIN ĐÁNG TIN CẬY
   (IC3 GS6 Spark — Level 3 — Chủ đề: Quản lí thông tin)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Nguồn: PPTX gốc K5_B12-13_NguonThongTinDangTinCay.pptx (60 slide),
   gộp "Bài 12 + 13" thành 1 bài liền mạch như file gốc.

   ĐÁP ÁN: lần này lấy trực tiếp từ file PPTX (không phải tự suy luận):
   - Câu trắc nghiệm: đáp án là ô được animation đổi sang màu xanh.
   - Câu Có/Không: đáp án là hình dấu tick đặt đè lên đúng cột.
   - Câu Đúng/Sai: đáp án ghi trong Speaker Notes + animation.
   Bạn vẫn nên chạy thử để chắc phần câu chữ diễn đạt lại đúng ý.

   Ghi chú diễn đạt lại:
   - Câu điền chỗ trống (slide 11/54 gốc): mình viết lại thành 4 câu
     ngắn, mỗi câu kết thúc bằng 1 chỗ trống, để hợp với dạng
     "chọn từ trong ô" của engine; ý nghĩa giữ nguyên.
   - Các câu "Có/Không", "Đúng/Sai" dạng bảng được chuyển thành
     danh sách phát biểu, mỗi phát biểu có 1 ô chọn bên phải.
   - Phần "Đọc thêm" về AI (slide 39-42) và 2 hoạt động mở (slide
     58-59) đưa vào Phần 5 dưới dạng slide đọc, không chấm điểm.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: '',  // Phần 1 — Khái niệm về một số nguồn thông tin
  s2: '',  // Phần 2 — Giới hạn độ tuổi đối với nội dung kĩ thuật số
  s3: '',  // Phần 3 — Một số nguồn thông tin đáng tin cậy
  s4: '',  // Phần 4 — Xác định các nguồn thông tin đáng tin cậy
  s5: '',  // Phần 5 — So sánh và đánh giá kết quả của AI (Đọc thêm)
};

const LESSON = {
  id:    'bai12-13-nguonthongtin',
  icon:  '🧭',
  title: 'Bài 12 + 13 — Nguồn thông tin đáng tin cậy',

  sections: [
    /* ============================================================
       Phần 1 — Khái niệm về một số nguồn thông tin (mật khẩu: NTC01)
       ============================================================ */
    {
      id: 's1',
      title: 'Khái niệm về một số nguồn thông tin',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 42) */
        {
          type: 'info',
          topic: 'Khởi động',
          title: 'Khởi động',
          content: 'Em hãy suy nghĩ và trả lời hai câu hỏi sau:',
          imageUrl: null,
          things: [
            { icon: '🔞', name: 'Độ tuổi nào là cho phép đối với nội dung kĩ thuật số?', en: '' },
            { icon: '🔎', name: 'Những yếu tố nào giúp đánh giá một nguồn thông tin đáng tin cậy?', en: 'Kiểm tra · Đúng? · Nguồn rõ ràng? · Có chuyên môn? · An toàn?' }
          ]
        },

        /* Slide 2 (Trang 2 / 42) */
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm nguồn thông tin',
          title: 'Truyền thông xã hội, Bình luận và Diễn đàn',
          content: 'Ba nguồn thông tin quen thuộc trên Internet:',
          imageUrl: null,
          things: [
            { icon: '📱', name: 'Truyền thông xã hội (Social Media)', en: 'Nền tảng trực tuyến cho phép người dùng tạo, chia sẻ và tương tác với nội dung: Facebook, Twitter, Instagram, YouTube…' },
            { icon: '💬', name: 'Bình luận (Comment)', en: 'Ý kiến, nhận xét hoặc phản hồi của người dùng về nội dung trên mạng xã hội, Blog hoặc các trang Web khác' },
            { icon: '🗨️', name: 'Diễn đàn (Forum)', en: 'Trang Web thảo luận trực tuyến dạng câu hỏi và câu trả lời; người tham gia đăng câu hỏi, chia sẻ ý kiến để thảo luận' }
          ],
          remember: 'Trên truyền thông xã hội, thông tin lan truyền nhanh nhưng có thể <b>không chính xác</b> hoặc chỉ là <b>tin đồn</b> — nên kiểm tra <b>nguồn gốc</b> và <b>tính xác thực</b>. Bình luận cho góc nhìn đa dạng nhưng cũng cần được <b>đánh giá</b> độ chính xác và đáng tin cậy.'
        },

        /* Slide 3 (Trang 3 / 42) */
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Em hãy điền vào chỗ trống các từ khóa để hoàn thành các định nghĩa sau: Thông tin có thể lan truyền nhanh chóng nhưng cũng có thể chứa thông tin không chính xác hoặc đồn đại khi ở trên ___ Để đánh giá thông tin, ngoài tính xác thực em còn phải kiểm tra ___ Việc kiểm tra nguồn gốc và tính xác thực của thông tin là rất ___ Để xác định tính chính xác và đáng tin cậy của thông tin được chia sẻ, bình luận cũng cần được ___',
          blanks: [
            { options: ['nguồn gốc', 'đánh giá', 'quan trọng', 'truyền thông xã hội'], correctAnswer: 3 },
            { options: ['nguồn gốc', 'đánh giá', 'quan trọng', 'truyền thông xã hội'], correctAnswer: 0 },
            { options: ['nguồn gốc', 'đánh giá', 'quan trọng', 'truyền thông xã hội'], correctAnswer: 2 },
            { options: ['nguồn gốc', 'đánh giá', 'quan trọng', 'truyền thông xã hội'], correctAnswer: 1 }
          ],
          hint: 'Từ khóa: nguồn gốc, đánh giá, quan trọng, truyền thông xã hội — mỗi từ dùng đúng 1 lần.',
          explain: 'Trên truyền thông xã hội, thông tin lan truyền nhanh nhưng có thể không chính xác hoặc là đồn đại. Việc kiểm tra nguồn gốc và tính xác thực là rất quan trọng, và bình luận cũng cần được đánh giá để biết có chính xác, đáng tin cậy hay không.'
        }
      ]
    },

    /* ============================================================
       Phần 2 — Giới hạn độ tuổi đối với nội dung kĩ thuật số (mật khẩu: NTC02)
       ============================================================ */
    {
      id: 's2',
      title: 'Giới hạn độ tuổi đối với nội dung kĩ thuật số',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 4 (Trang 4 / 42) */
        {
          type: 'info',
          topic: 'Phần 2 · Giới hạn độ tuổi',
          title: 'Giới hạn độ tuổi đối với nội dung kĩ thuật số',
          content: 'Các trang Web, mạng xã hội hoặc trò chơi trực tuyến thường quy định độ tuổi để có thể tham gia, xem hoặc tương tác với nội dung phù hợp, an toàn cho từng độ tuổi cụ thể.',
          imageUrl: null,
          remember: 'Ví dụ: Mạng xã hội Facebook yêu cầu trẻ em phải đủ <b>13 tuổi</b> trở lên mới được tạo tài khoản.'
        },

        /* Slide 5 (Trang 5 / 42) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Bạn Orson muốn dùng mạng xã hội nhưng nền tảng này có giới hạn độ tuổi. Những người 12 tuổi trở xuống chưa được phép sử dụng mạng xã hội. Bạn Orson sau 2 tháng nữa mới đủ 13 tuổi. Bạn ấy nên làm gì?',
          options: ['Đợi đến lúc đủ 13 tuổi rồi tạo tài khoản.', 'Thay đổi ngày sinh trên hệ thống đăng ký để đủ 13 tuổi.', 'Đăng nhập và dùng tài khoản của bố hoặc mẹ của bạn ấy.', 'Tạo hồ sơ giả làm một người 25 tuổi.'],
          correctAnswer: 0,
          hint: 'Ba cách còn lại đều là khai gian hoặc mượn thông tin của người khác.',
          explain: 'Cách đúng và an toàn là chờ đến khi đủ 13 tuổi. Khai sai ngày sinh, dùng tài khoản của bố mẹ hoặc tạo hồ sơ giả đều vi phạm quy định của nền tảng.'
        },

        /* Slide 6 (Trang 6 / 42) */
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Em hãy chọn Đúng hoặc Sai với mỗi phát biểu sau đây: Truyền thông xã hội gồm các nền tảng: Facebook, Twitter, Instagram, Youtube. ___ Diễn đàn là các trang Web thảo luận trực tuyến được trình bày dưới dạng câu hỏi và câu trả lời. ___ Các trang Web, mạng xã hội hoặc trò chơi trực tuyến thường không quy định về độ tuổi để có thể tham gia. ___ Bình luận là những ý kiến, nhận xét hoặc phản hồi được người dùng thể hiện về nội dung trên các nền tảng trực tuyến. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Nhớ lại: hầu hết các nền tảng đều có quy định độ tuổi tối thiểu.',
          explain: '(1) Đúng — Truyền thông xã hội gồm nhiều nền tảng phổ biến như Facebook, Twitter, Instagram, Youtube. (2) Đúng — Diễn đàn là trang Web thảo luận trực tuyến dạng hỏi đáp giữa các thành viên. (3) Sai — Hầu hết các trang Web, mạng xã hội và trò chơi trực tuyến đều CÓ quy định độ tuổi tối thiểu (thường ghi trong điều khoản sử dụng). (4) Đúng — Bình luận là ý kiến, nhận xét hoặc phản hồi của người dùng về nội dung trên nền tảng trực tuyến.'
        }
      ]
    },

    /* ============================================================
       Phần 3 — Một số nguồn thông tin đáng tin cậy (mật khẩu: NTC03)
       ============================================================ */
    {
      id: 's3',
      title: 'Một số nguồn thông tin đáng tin cậy',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 7 (Trang 7 / 42) */
        {
          type: 'info',
          topic: 'Phần 3 · Nguồn thông tin đáng tin cậy',
          title: 'Một số nguồn thông tin đáng tin cậy',
          content: 'Ba loại nguồn thông tin em có thể tin cậy:',
          imageUrl: null,
          things: [
            { icon: '📚', name: 'Bách khoa toàn thư trực tuyến (Online Encyclopedia)', en: 'Nguồn thông tin chi tiết, đa dạng về nhiều chủ đề, như Wikipedia, Encyclopedia Britannica…' },
            { icon: '🌍', name: 'National Geographic', en: 'Nền tảng của Hiệp hội Địa lý Quốc gia Hoa Kỳ, nội dung chất lượng cao về khoa học, tự nhiên, lịch sử, văn hóa, nhiếp ảnh, thám hiểm, bảo tồn môi trường' },
            { icon: '🏫', name: 'Khuyến nghị của nhà trường', en: 'Các nguồn do cơ sở giáo dục cung cấp: sách giáo khoa, tài liệu từ thư viện nhà trường, các trang Web được giáo viên khuyến khích…' }
          ]
        },

        /* Slide 8 (Trang 8 / 42) */
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
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

        /* Slide 9 (Trang 9 / 42) */
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Với mỗi phát biểu về việc xác định một nguồn thông tin đáng tin cậy, hãy chọn Có nếu đó là việc làm phù hợp và chọn Không nếu không phải: Đọc bình luận từ mạng xã hội. ___ Thực hiện một khảo sát với những người bạn thân. ___ Sử dụng một bách khoa toàn thư trực tuyến mà trường của bạn giới thiệu. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 }
          ],
          hint: 'Bình luận và ý kiến của vài người bạn chưa đủ để kết luận thông tin có đáng tin cậy hay không.',
          explain: 'Bình luận mạng xã hội và khảo sát vài người bạn thân đều không phải nguồn đáng tin cậy (Không). Bách khoa toàn thư trực tuyến do trường giới thiệu là nguồn phù hợp (Có).'
        },

        /* Slide 10 (Trang 10 / 42) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Khi muốn tìm ra nhiều trang Web viết về chủ đề khủng long, em nên sử dụng trang Web nào để thực hiện một lệnh tìm kiếm?',
          options: ['google.com', 'dinosaurs.com', 'wikipedia.com', 'encyclopedia.com'],
          correctAnswer: 0,
          hint: 'Em cần một công cụ tìm kiếm cho ra kết quả từ nhiều nguồn khác nhau.',
          explain: 'Google là công cụ tìm kiếm mạnh mẽ, giúp tìm được kết quả từ nhiều nguồn khác nhau (trang chuyên về khủng long, bài viết, hình ảnh, video, tài liệu học thuật). Ba trang còn lại cũng cung cấp thông tin tốt nhưng Google cho cái nhìn tổng quan và đa dạng hơn.'
        }
      ]
    },

    /* ============================================================
       Phần 4 — Xác định các nguồn thông tin đáng tin cậy (mật khẩu: NTC04)
       ============================================================ */
    {
      id: 's4',
      title: 'Xác định các nguồn thông tin đáng tin cậy',
      password: PASSWORDS.s4,
      slides: [
        /* Slide 11 (Trang 11 / 42) */
        {
          type: 'info',
          topic: 'Phần 4 · Xác định nguồn tin cậy',
          title: 'Các yếu tố xác định nguồn thông tin đáng tin cậy',
          content: 'Để xác định nguồn thông tin đáng tin cậy, em hãy xem xét:',
          imageUrl: null,
          things: [
            { icon: '🌐', name: 'Tên miền (Domain)', en: 'Kiểm tra đuôi tên miền như .edu, .gov' },
            { icon: '🔒', name: 'Giao thức (Protocol)', en: '"https://" an toàn hơn "http://"' },
            { icon: '📄', name: 'Nguồn (Source)', en: 'Xem tác giả, nhà xuất bản, ngày xuất bản và nguồn gốc thông tin' },
            { icon: '🎓', name: 'Tác giả (Author)', en: 'Ưu tiên tác giả có học vị, chuyên môn và uy tín trong lĩnh vực' },
            { icon: '🕒', name: 'Thời gian đăng tin & tính cập nhật', en: 'Thông tin mới, còn cập nhật thường chính xác hơn' }
          ]
        },

        /* Slide 12 (Trang 12 / 42) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Khi tìm thông tin trực tuyến, chúng ta nên làm gì để đảm bảo nguồn tin đáng tin cậy?',
          options: ['Chỉ đọc thông tin từ các trang Web nổi tiếng.', 'Xem xét đầy đủ về tác giả, nguồn và tính cập nhật của thông tin.', 'Đọc nhanh và không cần kiểm tra kĩ.', 'Chỉ tin vào những gì bạn bè chia sẻ.'],
          correctAnswer: 1,
          hint: 'Cần một cách kiểm tra đầy đủ, không chỉ dựa vào độ nổi tiếng hay lời bạn bè.',
          explain: 'Muốn nguồn tin đáng tin cậy, em cần xem xét đầy đủ tác giả, nguồn và tính cập nhật của thông tin — không chỉ dựa vào độ nổi tiếng hay lời bạn bè.'
        },

        /* Slide 13 (Trang 13 / 42) */
        {
          type: 'info',
          topic: 'Phần 4 · Tên miền, giao thức, nguồn',
          title: 'Tên miền, Giao thức và Nguồn',
          content: 'Chi tiết 3 yếu tố đầu tiên:',
          imageUrl: null,
          things: [
            { icon: '🌐', name: 'Tên miền', en: 'Tên miền mở rộng ".edu" (cơ sở giáo dục) và ".gov" (cơ quan Chính phủ) giúp xác định thông tin chính xác và đáng tin cậy hơn' },
            { icon: '🔒', name: 'Giao thức', en: '"https://" an toàn hơn "http://" vì "https://" sử dụng mã hóa để bảo vệ thông tin cá nhân của người dùng' },
            { icon: '📄', name: 'Nguồn', en: 'Xác minh tác giả, nhà xuất bản, ngày xuất bản, tính xác thực và hợp pháp của thông tin. Trang Web cung cấp thông tin chi tiết về nguồn gốc sẽ tăng độ tin cậy' }
          ]
        },

        /* Slide 14 (Trang 14 / 42) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Khi tìm kiếm thông tin trên mạng, tại sao chúng ta nên ưu tiên các trang Web có tên miền .gov hoặc .edu?',
          options: ['Có thông tin đáng tin cậy', 'Có thông tin gây tranh cãi', 'Có thông tin giật gân', 'Có thông tin với nhiều ngôn ngữ khác nhau'],
          correctAnswer: 0,
          hint: '.gov là cơ quan Chính phủ, .edu là cơ sở giáo dục.',
          explain: 'Tên miền .edu (cơ sở giáo dục) và .gov (cơ quan Chính phủ) giúp xác định thông tin chính xác và đáng tin cậy hơn.'
        },

        /* Slide 15 (Trang 15 / 42) */
        {
          type: 'info',
          topic: 'Phần 4 · Tác giả, thời gian đăng tin',
          title: 'Tác giả và Thời gian đăng tin',
          content: 'Hai yếu tố tiếp theo:',
          imageUrl: null,
          things: [
            { icon: '🎓', name: 'Tác giả', en: 'Kiểm tra thông tin về tác giả, bao gồm học vị, uy tín trong lĩnh vực họ đang trình bày. Những người có chuyên môn cao thường cung cấp thông tin chính xác hơn' },
            { icon: '🕒', name: 'Thời gian đăng tin', en: 'Xác định thời gian đăng thông tin là quan trọng. Thông tin mới nhất thường mang tính cập nhật và chính xác hơn' }
          ]
        },

        /* Slide 16 (Trang 16 / 42) */
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
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

        /* Slide 17 (Trang 17 / 42) */
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Bạn cần tìm các nguồn thông tin đáng tin cậy và hợp lệ cho một bài viết của mình về tình hình sử dụng công nghệ hiện nay ở trường học. Với mỗi phát biểu về các nguồn thông tin, em hãy chọn Có nếu là nguồn đáng tin cậy, chọn Không nếu không phải: Một bài viết được đăng bởi một trường đại học với URL có đuôi là .com. ___ Trang Web được phát hành vào tháng 01 năm 1989. ___ Có hai nguồn tài nguyên khác đồng ý với trang Web này. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 }
          ],
          hint: 'Trường đại học thường dùng đuôi .edu; và bài viết về công nghệ hiện nay thì cần thông tin mới.',
          explain: 'URL của trường đại học mà lại có đuôi .com thì đáng nghi (Không). Trang phát hành năm 1989 đã quá cũ so với "hiện nay" (Không). Có thêm hai nguồn khác cùng đồng ý thì đáng tin cậy hơn (Có).'
        },

        /* Slide 18 (Trang 18 / 42) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây sẽ cho em biết tác giả của một trang Web?',
          options: ['URL', 'Trang hỗ trợ khách hàng', 'Trang giới thiệu', 'Số điện thoại ở mục liên hệ với chúng tôi'],
          correctAnswer: 2,
          hint: 'Trang nào giới thiệu về những người/tổ chức đứng sau trang Web?',
          explain: '"Trang giới thiệu" (About) thường cho biết ai là tác giả hoặc tổ chức đứng sau trang Web.'
        },

        /* Slide 19 (Trang 19 / 42) */
        {
          type: 'info',
          topic: 'Phần 4 · Trích dẫn',
          title: 'Trích dẫn và tài liệu tham khảo',
          content: 'Ngoài ra, để xác định nguồn thông tin đáng tin cậy, em cần <b>tìm kiếm các trích dẫn hoặc tài liệu tham khảo</b> đến các nguồn đáng tin cậy khác.',
          imageUrl: null
        },

        /* Slide 20 (Trang 20 / 42) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, làm thế nào có thể xác định thông tin trên một trang Web có chính xác và đáng tin cậy hay không?',
          options: ['Chia sẻ thông tin với bạn bè và xem họ nghĩ gì.', 'Mọi thứ trên Internet đều là sự thật và có thể tin được.', 'Tìm kiếm các trích dẫn hoặc tài liệu tham khảo đến các nguồn đáng tin cậy khác.', 'Kiểm tra xem trang Web có tên hấp dẫn và thiết kế đầy màu sắc hay không.'],
          correctAnswer: 2,
          hint: 'Tên hấp dẫn, thiết kế đẹp hay ý kiến bạn bè đều không chứng minh thông tin đúng.',
          explain: 'Cách đáng tin cậy là tìm các trích dẫn hoặc tài liệu tham khảo đến những nguồn đáng tin cậy khác.'
        },

        /* Slide 21 (Trang 21 / 42) */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em có các trích dẫn sau: "Orson, D: 2010. Sách mẫu. (Tái bản lần thứ 2). Companypro." Em hãy cho biết, thông tin nào có trong trích dẫn? (Chọn 3)',
          options: ['Số trang (Number of Pages)', 'Tác giả (Author)', 'URL (Uniform Resource Locator)', 'Tiêu đề (Title)', 'Nhà xuất bản (Publisher)', 'Tập tin (File)'],
          correctAnswers: [1, 3, 4],
          hint: 'Trong trích dẫn có tên người, tên sách và tên công ty phát hành — không có số trang, đường dẫn web hay tập tin.',
          explain: 'Orson, D là tác giả (Author); "Sách mẫu" là tiêu đề (Title); Companypro là nhà xuất bản (Publisher).'
        },

        /* Slide 22 (Trang 22 / 42) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, mục đích của việc đưa các trích dẫn vào một bài nghiên cứu ở trường là gì?',
          options: ['Để thêm trang vào bài tập', 'Để ghi công cho các tác giả ban đầu và tránh đạo văn', 'Để thể hiện kiến thức của em về nhiều nguồn', 'Để làm cho nhiệm vụ của em trông đẹp hơn'],
          correctAnswer: 1,
          hint: 'Nghĩ tới việc tôn trọng công sức của người viết ra thông tin gốc.',
          explain: 'Trích dẫn giúp ghi công cho các tác giả ban đầu và tránh đạo văn.'
        }
      ]
    },

    /* ============================================================
       Phần 5 — So sánh và đánh giá kết quả của AI (Đọc thêm) (mật khẩu: NTC05)
       ============================================================ */
    {
      id: 's5',
      title: 'So sánh và đánh giá kết quả của AI',
      password: PASSWORDS.s5,
      slides: [
        /* Slide 23 (Trang 23 / 42) */
        {
          type: 'info',
          topic: 'Đọc thêm · AI và nguồn thông tin',
          title: 'So sánh kết quả của AI với các nguồn thông tin khác',
          content: 'Nguồn đáng tin cậy cần rõ <b>tác giả, tổ chức, bằng chứng và mục đích</b>. AI có thể hỗ trợ kiểm tra nguồn, nhưng <b>không thay nguồn gốc thông tin</b>.',
          imageUrl: null,
          remember: 'AI tạo sinh thường tổng hợp câu trả lời từ mẫu đã học hoặc dữ liệu được cung cấp và nhiều khi không cho biết nguồn gốc cụ thể. AI phù hợp để gợi ý cách hiểu, lập dàn ý hoặc đặt câu hỏi, nhưng thông tin vẫn cần kiểm tra. Em có thể hỏi AI: "Em nên kiểm tra thông tin này bằng những loại nguồn nào?" hoặc "Hãy gợi ý tiêu chí kiểm tra nguồn", thay vì hỏi AI rồi tin ngay.'
        },

        /* Slide 24 (Trang 24 / 42) */
        {
          type: 'info',
          topic: 'Đọc thêm · AI và nguồn thông tin',
          title: 'Đánh giá câu trả lời của AI',
          content: 'Nguồn AI gợi ý cũng cần được kiểm tra. Khi cần nguồn chính thức, hãy dùng tài liệu hoặc website đáng tin cậy. Với AI, em cần tự hỏi thêm:',
          imageUrl: null,
          things: [
            { icon: '❓', name: 'AI có nêu nguồn không?', en: '' },
            { icon: '🔗', name: 'Nguồn có thật và mở được không?', en: '' },
            { icon: '✅', name: 'Nội dung có khớp với nguồn không?', en: '' },
            { icon: '⚠️', name: 'Câu trả lời có quá chung chung hoặc quá chắc chắn không?', en: '' }
          ],
          remember: 'Trong bài học, nếu cần trích dẫn nguồn, em nên trích dẫn sách, trang Web chính thức hoặc tài liệu được giáo viên cho phép. AI có thể hỗ trợ diễn giải hoặc gợi ý, nhưng cần ghi rõ nếu đã dùng AI theo yêu cầu của giáo viên.'
        },

        /* Slide 25 (Trang 25 / 42) */
        {
          type: 'info',
          topic: 'Vận dụng',
          title: 'Hoạt động 1 — Hỏi AI và kiểm tra lại',
          content: 'Hãy sử dụng công cụ AI để hỏi một câu hỏi học tập đơn giản, ví dụ: "Động vật nào sống ở Bắc Cực?"',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Đọc câu trả lời của AI', en: '' },
            { icon: '2️⃣', name: 'Kiểm tra lại bằng sách giáo khoa hoặc nguồn đáng tin cậy khác', en: '' },
            { icon: '3️⃣', name: 'So sánh các thông tin tìm được', en: '' }
          ],
          remember: 'Hãy trả lời: AI trả lời có đúng không? Có thông tin nào cần kiểm tra lại không? Vì sao không nên chỉ tin vào một câu trả lời của AI?'
        },

        /* Slide 26 (Trang 26 / 42) */
        {
          type: 'info',
          topic: 'Vận dụng',
          title: 'Hoạt động 2 — Đánh giá độ tin cậy của nguồn',
          content: 'Quan sát và đánh giá độ tin cậy của hai nguồn thông tin sau:',
          imageUrl: null,
          things: [
            { icon: '✅', name: 'Nguồn A: https://www.nasa.gov', en: 'Có giao thức https:// · Có tên tác giả và ngày đăng bài rõ ràng' },
            { icon: '⚠️', name: 'Nguồn B: http://tinmoingay123.xyz', en: 'Không rõ tác giả · Không ghi ngày đăng bài' }
          ],
          remember: 'Hãy dựa vào các yếu tố đã học (tên miền, giao thức, tác giả, thời gian đăng) để so sánh hai nguồn.'
        },

        /* Slide 27 (Trang 27 / 42) — slide hoàn thành RIÊNG cho bài học chính (scoreSections) */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2, 3, 4],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 12 + 13!',
          content: 'Em đã biết một số nguồn thông tin (truyền thông xã hội, bình luận, diễn đàn), giới hạn độ tuổi với nội dung kĩ thuật số, cách nhận biết và xác định nguồn thông tin đáng tin cậy, cũng như cách đánh giá câu trả lời của AI.',
          imageUrl: null,
          remember: 'Muốn ôn lại toàn bộ câu hỏi của bài, hãy vào trang <b>Ôn tập</b> để luyện thêm.'
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
   nên khai báo scoreSections:[0,1,2,3,4] (liệt kê đúng chỉ số các
   phần chính, bắt đầu từ 0) để không cộng nhầm điểm của Ôn tập vào.
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
