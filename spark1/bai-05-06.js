/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 5 + 6: TẬP TIN VÀ THƯ MỤC
   (IC3 GS6 Spark — Level 1 — Chủ đề: Căn bản về công nghệ)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Nguồn: PDF gốc K3_B05-06_TapTinVaThuMuc.pdf (55 trang). PDF gốc
   gộp chung Bài 5 và Bài 6 thành 1 bài học liền mạch (trang bìa ghi
   "Bài 5 + 6"), nên file này cũng gộp chung thành 1 file duy nhất
   (khác với K4_B05-06 trước đó phải tách 2 file riêng do đóng vai
   2 bài độc lập).

   Đây là BẢN THỬ đầu tiên — bạn xem qua câu chữ / mật khẩu và
   chỉnh lại nếu cần.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: '156',   // Phần 1 — Tập tin
  s2: '564',   // Phần 2 — Thư mục
  s3: '215',   // Phần 3 — File Explorer
  s4: '848',   // Phần 4 — AI hỗ trợ lưu trữ và sắp xếp
  s5: '689'    // Phần 5 — Ôn tập
};

const LESSON = {
  id:    'bai5-6-taptin',
  icon:  '📁',
  title: 'Bài 5 + 6 — Tập tin và thư mục',

  sections: [

    /* ============================================================
       PHẦN 1 — Tập tin (mật khẩu: TT01)
       ============================================================ */
    {
      id: 's1',
      title: 'Tập tin',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 40) */
        {
          type: 'info',
          topic: 'Phần 1 · Tập tin',
          title: 'Tập tin (File) là gì?',
          content: '<b>Tập tin (File)</b> là sản phẩm em tạo ra từ một chương trình phần mềm, sau đó đặt tên và lưu trữ vào máy tính.',
          imageUrl: null,
          remember: '<b>Lưu ý:</b> Đặt tên tập tin sao cho dễ phân loại và tìm kiếm. Có thể lưu trữ tập tin vào ổ cứng, ổ USB, đĩa mềm...'
        },

        /* Slide 2 (Trang 2 / 40) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là một tập tin (File)?',
          options: [
            'Tài liệu chứa danh sách bài tập cần làm của em.',
            'Một thư mục ảnh từ một chuyến đi thực địa.',
            'Buổi phát trực tiếp sự kiện thể thao.',
            'Một liên kết đến trang Web trường học của em.'
          ],
          correctAnswer: 0,
          hint: 'Thư mục ảnh là 1 tập hợp nhiều tập tin, buổi phát trực tiếp không được lưu thành 1 sản phẩm cụ thể, liên kết web không phải sản phẩm em tạo ra.',
          explain: 'Tài liệu danh sách bài tập là 1 sản phẩm cụ thể (được tạo từ phần mềm, đặt tên, lưu trữ) — đúng là 1 tập tin.'
        },

        /* Slide 3 (Trang 3 / 40) */
        {
          type: 'info',
          topic: 'Phần 1 · Cách đặt tên tập tin',
          title: 'Cách đặt tên cho tập tin',
          content: 'Tên của tập tin gồm 2 phần: <b>Phần tên</b> và <b>phần mở rộng</b>, được phân cách bởi dấu chấm. Ví dụ: <b>baitap.docx</b>',
          imageUrl: null,
          remember: 'Tên tập tin không dài quá <b>255 kí tự</b>. Không dùng các kí tự <b>\\ / : * ? " &lt; &gt; |</b> khi đặt tên.'
        },

        /* Slide 4 (Trang 4 / 40) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tên của tập tin gồm những thành phần nào?',
          options: ['Phần tên.', 'Phần mở rộng.', 'Phần tên và phần mở rộng.', 'Phần tên, phần mở rộng và dấu chấm phân cách giữa hai phần.'],
          correctAnswer: 2,
          hint: 'Dấu chấm chỉ là kí tự PHÂN CÁCH, không phải 1 "thành phần" riêng của tên.',
          explain: 'Tên tập tin gồm 2 thành phần: Phần tên và Phần mở rộng, ngăn cách nhau bởi dấu chấm (dấu chấm không được tính là 1 thành phần riêng).'
        },

        /* Slide 5 (Trang 5 / 40) */
        {
          type: 'quiz_dropdown',
          topic: 'Luyện tập',
          question: 'Đối với mỗi phát biểu liên quan đến tập tin, em hãy chọn Đúng hoặc Sai: Tên của tập tin không dài quá 255 kí tự. ___ Em có thể dùng kí tự * để đặt tên cho tập tin. ___ Tên của tập tin không cần ngắn gọn. ___ Tên của tập tin gồm hai phần: Phần tên và phần mở rộng cách nhau bởi dấu chấm. ___ Phần mở rộng của tập tin giúp xác định chương trình dùng để mở. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Dấu * nằm trong nhóm kí tự cấm \\ / : * ? " < > | — không dùng được để đặt tên.',
          explain: 'Tên tập tin ≤255 kí tự (Đúng). Không dùng được kí tự * (Sai). Tên NÊN ngắn gọn, dễ tìm (Sai). Tên gồm 2 phần cách nhau bởi dấu chấm (Đúng). Phần mở rộng giúp xác định chương trình mở tập tin (Đúng).'
        },

        /* Slide 6 (Trang 6 / 40) */
        {
          type: 'quiz_matching',
          topic: 'Luyện tập',
          question: 'Em hãy ghép nối với lựa chọn tương ứng.',
          pairs: [
            { icon: '📄', left: 'Tập tin', right: 'Là sản phẩm em tạo ra từ một chương trình phần mềm.' },
            { icon: '✏️', left: 'Đặt tên cho tệp tin', right: 'Để dễ phân loại và tìm kiếm.' },
            { icon: '🚫', left: '/\\"?<>|:', right: 'Là các kí tự không sử dụng khi đặt tên cho tập tin.' },
            { icon: '📏', left: 'Độ dài tên của tập tin', right: 'Không dài hơn 255 kí tự.' },
            { icon: '🏷️', left: 'Phần mở rộng của tên', right: 'Giúp nhận biết được kiểu tập tin và xác định được chương trình phù hợp để mở.' }
          ],
          hint: 'Đọc kĩ từng vế trái — mỗi cụm đều gắn với đúng 1 ý ở vế phải.',
          explain: 'Tập tin là sản phẩm từ phần mềm; việc đặt tên giúp dễ tìm kiếm; các kí tự \\/:*?"<>| bị cấm; tên tối đa 255 kí tự; phần mở rộng giúp xác định chương trình mở tập tin.'
        },

        /* Slide 7 (Trang 7 / 40) */
        {
          type: 'info',
          topic: 'Phần 1 · Các kiểu tập tin',
          title: 'Các kiểu tập tin (phần mở rộng) phổ biến',
          content: 'Mỗi loại nội dung thường có phần mở rộng riêng:',
          imageUrl: null,
          things: [
            { icon: '📝', name: 'Văn bản', en: '.doc, .docx, .pdf, .rtf' },
            { icon: '🎬', name: 'Video', en: '.mp4, .avi, .wmv, .mov' },
            { icon: '🎵', name: 'Âm thanh', en: '.mp3, .wma, .wav, .aac, .ra' },
            { icon: '🗜️', name: 'Nén', en: '.rar (WinRAR), .zip (ZIP) — giúp giảm dung lượng lưu trữ' },
            { icon: '⚙️', name: 'Chương trình', en: '.exe, .bat, .com' }
          ]
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Thư mục (mật khẩu: TT02)
       ============================================================ */
    {
      id: 's2',
      title: 'Thư mục',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 8 (Trang 8 / 40) */
        {
          type: 'info',
          topic: 'Phần 2 · Khái niệm thư mục',
          title: 'Thư mục (Folder) là gì?',
          content: '<b>Thư mục (Folder)</b> là một dạng tập tin đặc biệt có công dụng như một ngăn chứa, dùng trong việc quản lí và sắp xếp các tập tin. Biểu tượng thư mục thường có màu vàng.',
          imageUrl: null,
          things: [
            { icon: '👴', name: 'Thư mục cha', en: 'Thư mục chứa thư mục khác' },
            { icon: '👶', name: 'Thư mục con', en: 'Thư mục nằm trong thư mục khác' },
            { icon: '🌳', name: 'Thư mục gốc', en: 'Thư mục ngoài cùng, không có thư mục cha (VD: các ổ đĩa)' },
            { icon: '📭', name: 'Thư mục rỗng', en: 'Không chứa tập tin hay thư mục con nào' }
          ]
        },

        /* Slide 9 (Trang 9 / 40) */
        {
          type: 'quiz_matching',
          topic: 'Luyện tập',
          question: 'Em hãy ghép nối từng thuật ngữ ở cột bên phải sang định nghĩa tương ứng ở cột bên trái.',
          pairs: [
            { icon: '📁', left: 'Vị trí ảo để lưu trữ và sắp xếp các ứng dụng, tài liệu, dữ liệu', right: 'Thư mục' },
            { icon: '📄', left: 'Tài nguyên để lưu trữ thông tin có sẵn cho một chương trình máy tính', right: 'Tập tin' },
            { icon: '🔲', left: 'Mã có thể đọc được bằng máy, gồm các ô vuông đen trắng, dùng lưu trữ URL hoặc thông tin khác', right: 'Mã QR' }
          ],
          hint: 'Thư mục là "vị trí" chứa nhiều thứ; Tập tin là "tài nguyên" của riêng 1 chương trình.',
          explain: 'Thư mục là vị trí ảo để lưu trữ và sắp xếp; Tập tin là tài nguyên lưu trữ thông tin của 1 chương trình; Mã QR là mã ô vuông đen trắng lưu URL/thông tin.'
        },

        /* Slide 10 (Trang 10 / 40) */
        {
          type: 'quiz_matching',
          topic: 'Luyện tập',
          question: 'Em hãy ghép nối từng khái niệm với các dạng thư mục tương ứng.',
          pairs: [
            { icon: '📁', left: 'Thư mục', right: 'Là một dạng tập tin đặc biệt có công dụng như là một ngăn chứa, được dùng trong việc quản lí và sắp xếp các tập tin.' },
            { icon: '👴', left: 'Thư mục cha', right: 'Là thư mục chứa thư mục khác.' },
            { icon: '👶', left: 'Thư mục con', right: 'Là thư mục nằm trong thư mục khác.' },
            { icon: '🌳', left: 'Thư mục gốc', right: 'Là thư mục nằm ngoài cùng (các ổ đĩa).' },
            { icon: '📭', left: 'Thư mục rỗng', right: 'Là thư mục không chứa bất kì tập tin hay thư mục con nào.' }
          ],
          hint: 'Thư mục gốc luôn ở vị trí "cao nhất" — là các ổ đĩa (C:, D:...).',
          explain: 'Thư mục là ngăn chứa quản lí tập tin; thư mục cha chứa thư mục khác; thư mục con nằm trong thư mục khác; thư mục gốc là ổ đĩa (ngoài cùng); thư mục rỗng không chứa gì.'
        },

        /* Slide 11 (Trang 11 / 40) */
        {
          type: 'info',
          topic: 'Phần 2 · Cây thư mục',
          title: 'Cây thư mục',
          content: 'Các thư mục được sắp xếp theo dạng cây (thư mục cha chứa nhiều thư mục con, thư mục con lại có thể chứa thư mục con khác...) và được gọi là <b>cây thư mục</b>.',
          imageUrl: null
        },

        /* Slide 12 (Trang 12 / 40) */
        {
          type: 'info',
          topic: 'Phần 2 · Thao tác cơ bản',
          title: 'Một vài thao tác cơ bản trên thư mục',
          content: 'Trước khi tạo/sửa/xóa thư mục, em cần biết cách mở và xem nội dung thư mục:',
          imageUrl: null,
          things: [
            { icon: '🗂️', name: 'Khởi động File Explorer', en: 'Nhấp đúp vào This PC trên Desktop, hoặc nhấn Windows + E' },
            { icon: '👁️', name: 'Xem nội dung thư mục', en: 'Nhấp đúp vào thư mục, hoặc chọn thư mục rồi nhấn Enter' },
            { icon: '🖱️', name: 'Chọn nhiều thư mục/tập tin', en: 'Giữ Shift để chọn các mục liền kề, giữ Ctrl để chọn các mục không liền kề' }
          ]
        },

        /* Slide 13 (Trang 13 / 40) */
        {
          type: 'info',
          topic: 'Phần 2 · Thao tác cơ bản',
          title: 'Tạo thư mục mới',
          content: 'Để tạo thư mục mới: mở ổ đĩa hoặc thư mục sẽ chứa thư mục cần tạo, sau đó:',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Nhấp chuột phải tại vùng trống', en: 'Chọn New → Folder' },
            { icon: '2️⃣', name: 'Đặt tên cho thư mục', en: 'Gõ tên rồi nhấn Enter' }
          ]
        },

        /* Slide 14 (Trang 14 / 40) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là các bước đúng để tạo một thư mục mới và đặt tên là Care?',
          options: [
            'Nhấp chuột trái vào vùng trống -> chọn New -> chọn Folder -> gõ tên Care',
            'Nhấp chuột phải vào vùng trống -> chọn New -> chọn Folder -> gõ tên Care',
            'Chọn New -> chọn Folder -> gõ tên Care',
            'Nhấp đúp chuột vào vùng trống -> chọn New -> chọn Folder'
          ],
          correctAnswer: 1,
          hint: 'Menu "New" chỉ hiện ra khi nhấp CHUỘT PHẢI vào vùng trống.',
          explain: 'Muốn tạo thư mục mới: nhấp chuột phải vào vùng trống → chọn New → chọn Folder → gõ tên Care.'
        },

        /* Slide 15 (Trang 15 / 40) */
        {
          type: 'info',
          topic: 'Phần 2 · Thao tác cơ bản',
          title: 'Đổi tên thư mục',
          content: 'Có 2 cách đổi tên thư mục:',
          imageUrl: null,
          things: [
            { icon: '🖱️', name: 'Cách 1', en: 'Nhấn chuột phải vào thư mục → Chọn lệnh Rename → Gõ tên mới' },
            { icon: '⌨️', name: 'Cách 2', en: 'Nhấn chuột trái chọn thư mục → Nhấn phím F2 → Gõ tên mới' }
          ]
        },

        /* Slide 16 (Trang 16 / 40) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Trong các tùy chọn sau, em hãy chọn cách đổi tên của tập tin Cats.docx thành About Cats.docx?',
          options: [
            'Nhấp chuột -> chọn Rename',
            'Nhấp chuột trái -> chọn Rename',
            'Nhấp đúp chuột -> chọn Rename',
            'Nhấp chuột phải vào thư mục Cats.docx -> chọn Rename -> Gõ tên About Cats.docx'
          ],
          correctAnswer: 3,
          hint: 'Chỉ có 1 lựa chọn nêu ĐẦY ĐỦ các bước: nhấp đúng loại chuột, chọn đúng lệnh, VÀ gõ tên mới.',
          explain: 'Cần đủ 3 bước: nhấp chuột phải vào tập tin → chọn Rename → gõ tên mới ("About Cats.docx").'
        },

        /* Slide 17 (Trang 17 / 40) */
        {
          type: 'info',
          topic: 'Phần 2 · Thao tác cơ bản',
          title: 'Xóa thư mục',
          content: 'Có 2 cách xóa thư mục:',
          imageUrl: null,
          things: [
            { icon: '🖱️', name: 'Cách 1', en: 'Nhấn chuột phải vào biểu tượng thư mục → Chọn lệnh Delete' },
            { icon: '⌨️', name: 'Cách 2', en: 'Nhấn chuột trái vào biểu tượng thư mục → Nhấn phím Delete' }
          ]
        },

        /* Slide 18 (Trang 18 / 40) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là thao tác đúng để xóa tập tin Pet health? (Chọn 2)',
          options: [
            'Nhấp chuột trái vào thư mục Pet health -> Nhấn Delete trên bàn phím',
            'Nhấp chuột trái vào thư mục Pet health -> Chọn Delete',
            'Nhấp chuột phải vào thư mục Pet health -> Chọn Delete',
            'Nhấp chuột vào thư mục Pet health -> Chọn Delete',
            'Nhấp chuột phải -> Chọn Delete'
          ],
          correctAnswers: [0, 2],
          hint: 'Nhấp chuột TRÁI không hiện menu để "Chọn Delete" — phải dùng phím Delete. Nhấp chuột PHẢI thì mới hiện menu có lệnh Delete.',
          explain: 'Hai cách đúng: (1) Nhấp trái để chọn thư mục rồi nhấn phím Delete trên bàn phím, hoặc (2) Nhấp phải vào thư mục rồi chọn lệnh Delete trong menu.'
        },

        /* Slide 19 (Trang 19 / 40) */
        {
          type: 'quiz_dropdown',
          topic: 'Luyện tập',
          question: 'Em hãy chọn Đúng hoặc Sai đối với mỗi phát biểu liên quan đến thư mục và tập tin: Thư mục được sắp xếp theo dạng cây, được gọi là cây thư mục. ___ Thư mục dùng để quản lý và sắp xếp tập tin. ___ Thư mục gốc có thể nằm trong thư mục khác. ___ Để xoá thư mục, em dùng lệnh Rename. ___ Phím F2 có tác dụng đổi tên thư mục. ___ Để chọn cùng lúc nhiều tập tin hay thư mục không liền kề nhau, em nhấn giữ phím Ctrl. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Thư mục gốc là thư mục NGOÀI CÙNG (như ổ đĩa) — không thể nằm trong thư mục nào khác. Lệnh Rename dùng để đổi tên, không phải để xóa.',
          explain: 'Cây thư mục đúng (Đúng). Thư mục quản lí/sắp xếp tập tin (Đúng). Thư mục gốc KHÔNG nằm trong thư mục khác (Sai). Xóa thư mục dùng Delete, không phải Rename (Sai). F2 đúng là phím đổi tên (Đúng). Ctrl đúng là phím chọn nhiều mục không liền kề (Đúng).'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — File Explorer (mật khẩu: TT03)
       ============================================================ */
    {
      id: 's3',
      title: 'File Explorer',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 20 (Trang 20 / 40) */
        {
          type: 'info',
          topic: 'Phần 3 · File Explorer',
          title: 'File Explorer là gì?',
          content: '<b>File Explorer</b> là chương trình có sẵn trong Windows, giúp em quản lý tập tin và thư mục trên máy tính.',
          imageUrl: null,
          things: [
            { icon: '📑', name: 'Bảng chọn các thẻ lệnh', en: 'Chứa các lệnh thao tác với tập tin/thư mục' },
            { icon: '🗔', name: 'Nút điều khiển cửa sổ', en: 'Thu nhỏ, phóng to, đóng cửa sổ' },
            { icon: '💽', name: 'Vùng chứa thư mục, ổ đĩa', en: 'Hiển thị nội dung bên trong' }
          ]
        },

        /* Slide 21 (Trang 21 / 40) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Chương trình File Explorer là một phần mềm trên máy tính được cài đặt chung với hệ điều hành Windows. Em hãy cho biết nhận xét trên là đúng hay sai?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 0,
          hint: 'Đây chính là điều em vừa học ở slide trước.',
          explain: 'Đúng. File Explorer là chương trình có sẵn, được cài đặt chung với hệ điều hành Windows.'
        },

        /* Slide 22 (Trang 22 / 40) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, các vùng trên cửa sổ File Explorer gồm có: (Chọn 3)',
          options: ['Thanh tác vụ', 'Bảng chọn các thẻ lệnh', 'Biểu tượng các ổ đĩa', 'Nút điều khiển của sổ', 'Các tập tin hệ thống'],
          correctAnswers: [1, 2, 3],
          hint: 'Thanh tác vụ là của hệ điều hành Windows nói chung, không phải riêng cửa sổ File Explorer.',
          explain: 'Cửa sổ File Explorer gồm: Bảng chọn các thẻ lệnh, Biểu tượng các ổ đĩa, và Nút điều khiển cửa sổ.'
        },

        /* Slide 23 (Trang 23 / 40) */
        {
          type: 'info',
          topic: 'Phần 3 · File Explorer',
          title: 'Các vùng trên File Explorer',
          content: 'Cửa sổ File Explorer có 4 vùng chính:',
          imageUrl: null,
          things: [
            { icon: '📍', name: 'Thanh địa chỉ', en: 'Cho biết vị trí thư mục đang mở' },
            { icon: '🧭', name: 'Khung điều hướng', en: 'Giúp chọn nhanh ổ đĩa hoặc thư mục' },
            { icon: '🔍', name: 'Ô tìm kiếm', en: 'Giúp tìm tập tin hoặc thư mục' },
            { icon: '📋', name: 'Vùng hiển thị', en: 'Cho biết các tập tin và thư mục bên trong' }
          ]
        }
      ]
    },

    /* ============================================================
       PHẦN 4 — AI hỗ trợ lưu trữ và sắp xếp (mật khẩu: TT04)
       ============================================================ */
    {
      id: 's4',
      title: 'AI hỗ trợ lưu trữ và sắp xếp',
      password: PASSWORDS.s4,
      slides: [
        /* Slide 24 (Trang 24 / 40) */
        {
          type: 'info',
          topic: 'Phần 4 · AI hỗ trợ lưu trữ',
          title: 'Sắp xếp tài liệu khi có AI hỗ trợ',
          content: 'Khi làm bài có AI hỗ trợ, em nên sắp xếp tài liệu vào các thư mục riêng. Ví dụ với thư mục <b>DuAn_MoiTruong</b>:',
          imageUrl: null,
          things: [
            { icon: '📂', name: 'TaiLieuGoc', en: 'Lưu tài liệu ban đầu do giáo viên cung cấp hoặc em tự tìm hiểu' },
            { icon: '💡', name: 'YTuong_AI', en: 'Lưu các gợi ý do AI hỗ trợ' },
            { icon: '🖼️', name: 'HinhAnh', en: 'Lưu hình ảnh dùng cho bài học' },
            { icon: '📝', name: 'BanNhap', en: 'Lưu bản đang chỉnh sửa' },
            { icon: '✅', name: 'SanPhamCuoi', en: 'Lưu bài đã hoàn thiện' }
          ]
        },

        /* Slide 25 (Trang 25 / 40) */
        {
          type: 'info',
          topic: 'Phần 4 · AI hỗ trợ lưu trữ',
          title: 'Kiểm tra trước khi lưu, nộp, chia sẻ',
          content: 'Trước khi lưu, nộp hoặc chia sẻ tập tin có nội dung AI hỗ trợ, em cần <b>đọc lại và kiểm tra nội dung</b>. Sản phẩm do AI hỗ trợ vẫn cần được lưu, đặt tên và kiểm tra như mọi tập tin khác — không chia sẻ khi em chưa đọc hiểu và kiểm tra.',
          imageUrl: null,
          remember: 'Ví dụ đặt tên: <b>GoiY_AI_CayXanh.docx</b> (ý tưởng do AI gợi ý), <b>BaiTrinhChieu_MoiTruong.pptx</b> (nội dung em đã chọn và chỉnh sửa), <b>HinhMinhHoa_CayXanh.png</b> (hình ảnh).'
        },

        /* Slide 26 (Trang 26 / 40) */
        {
          type: 'info',
          topic: 'Phần 4 · AI hỗ trợ lưu trữ',
          title: 'Không tải dữ liệu riêng tư lên công cụ AI',
          content: 'Em <b>không tải</b> toàn bộ thư mục, tệp cá nhân, ảnh cá nhân, danh sách lớp hoặc dữ liệu riêng tư lên công cụ AI khi <b>chưa được phép</b>.',
          imageUrl: null,
          things: [
            { icon: '📁', name: 'Thư mục', en: 'Không tải toàn bộ thư mục cá nhân' },
            { icon: '📄', name: 'Tệp cá nhân', en: 'Không tải tệp riêng của em' },
            { icon: '🖼️', name: 'Ảnh cá nhân', en: 'Không tải ảnh riêng của em' },
            { icon: '📋', name: 'Danh sách lớp', en: 'Không tải thông tin của bạn bè, lớp học' },
            { icon: '🔒', name: 'Dữ liệu riêng tư', en: 'Không tải bất kì dữ liệu riêng tư nào' }
          ]
        },

        /* Slide 27 (Trang 27 / 40) — slide hoàn thành RIÊNG cho bài học
           chính (4 phần lý thuyết + luyện tập), tách biệt với slide hoàn
           thành của phần Ôn tập ở cuối bài. */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2, 3],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 5 + 6!',
          content: 'Em đã biết tập tin là gì và cách đặt tên tập tin, khái niệm và các thao tác trên thư mục, cách dùng File Explorer, và cách sắp xếp/bảo mật tài liệu khi có AI hỗ trợ.',
          imageUrl: null,
          remember: 'Muốn ôn lại toàn bộ câu hỏi của bài, bấm "Tiếp theo" để sang phần <b>Ôn tập</b> ngay sau đây.'
        }
      ]
    },

    /* ============================================================
       PHẦN 5 — Ôn tập (mật khẩu: TT05)
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 4 phần
       trên để học sinh luyện lại. Đáp án làm ở đây độc lập hoàn
       toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's5',
      title: 'Ôn tập',
      password: PASSWORDS.s5,
      slides: [
        /* Slide 28 (Trang 28 / 40) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là một tập tin (File)?',
          options: [
            'Tài liệu chứa danh sách bài tập cần làm của em.',
            'Một thư mục ảnh từ một chuyến đi thực địa.',
            'Buổi phát trực tiếp sự kiện thể thao.',
            'Một liên kết đến trang Web trường học của em.'
          ],
          correctAnswer: 0,
          hint: 'Thư mục ảnh là 1 tập hợp nhiều tập tin, buổi phát trực tiếp không được lưu thành 1 sản phẩm cụ thể, liên kết web không phải sản phẩm em tạo ra.',
          explain: 'Tài liệu danh sách bài tập là 1 sản phẩm cụ thể — đúng là 1 tập tin.'
        },

        /* Slide 29 (Trang 29 / 40) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy ghép nối từng thuật ngữ ở cột bên phải sang định nghĩa tương ứng ở cột bên trái.',
          pairs: [
            { icon: '📁', left: 'Vị trí ảo để lưu trữ và sắp xếp các ứng dụng, tài liệu, dữ liệu', right: 'Thư mục' },
            { icon: '📄', left: 'Tài nguyên để lưu trữ thông tin có sẵn cho một chương trình máy tính', right: 'Tập tin' },
            { icon: '🔲', left: 'Mã có thể đọc được bằng máy, gồm các ô vuông đen trắng, dùng lưu trữ URL hoặc thông tin khác', right: 'Mã QR' }
          ],
          hint: 'Thư mục là "vị trí" chứa nhiều thứ; Tập tin là "tài nguyên" của riêng 1 chương trình.',
          explain: 'Thư mục là vị trí ảo để lưu trữ và sắp xếp; Tập tin là tài nguyên lưu trữ thông tin của 1 chương trình; Mã QR là mã ô vuông đen trắng lưu URL/thông tin.'
        },

        /* Slide 30 (Trang 30 / 40) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tên của tập tin gồm những thành phần nào?',
          options: ['Phần tên.', 'Phần mở rộng.', 'Phần tên và phần mở rộng.', 'Phần tên, phần mở rộng và dấu chấm phân cách giữa hai phần.'],
          correctAnswer: 2,
          hint: 'Dấu chấm chỉ là kí tự PHÂN CÁCH, không phải 1 "thành phần" riêng của tên.',
          explain: 'Tên tập tin gồm 2 thành phần: Phần tên và Phần mở rộng, ngăn cách nhau bởi dấu chấm.'
        },

        /* Slide 31 (Trang 31 / 40) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy ghép nối với lựa chọn tương ứng.',
          pairs: [
            { icon: '📄', left: 'Tập tin', right: 'Là sản phẩm em tạo ra từ một chương trình phần mềm.' },
            { icon: '✏️', left: 'Đặt tên cho tệp tin', right: 'Để dễ phân loại và tìm kiếm.' },
            { icon: '🚫', left: '/\\"?<>|:', right: 'Là các kí tự không sử dụng khi đặt tên cho tập tin.' },
            { icon: '📏', left: 'Độ dài tên của tập tin', right: 'Không dài hơn 255 kí tự.' },
            { icon: '🏷️', left: 'Phần mở rộng của tên', right: 'Giúp nhận biết được kiểu tập tin và xác định được chương trình phù hợp để mở.' }
          ],
          hint: 'Đọc kĩ từng vế trái — mỗi cụm đều gắn với đúng 1 ý ở vế phải.',
          explain: 'Tập tin là sản phẩm từ phần mềm; việc đặt tên giúp dễ tìm kiếm; các kí tự \\/:*?"<>| bị cấm; tên tối đa 255 kí tự; phần mở rộng giúp xác định chương trình mở tập tin.'
        },

        /* Slide 32 (Trang 32 / 40) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Đối với mỗi phát biểu liên quan đến tập tin, em hãy chọn Đúng hoặc Sai: Tên của tập tin không dài quá 255 kí tự. ___ Em có thể dùng kí tự * để đặt tên cho tập tin. ___ Tên của tập tin không cần ngắn gọn. ___ Tên của tập tin gồm hai phần: Phần tên và phần mở rộng cách nhau bởi dấu chấm. ___ Phần mở rộng của tập tin giúp xác định chương trình dùng để mở. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Dấu * nằm trong nhóm kí tự cấm — không dùng được để đặt tên.',
          explain: 'Tên tập tin ≤255 kí tự (Đúng). Không dùng được kí tự * (Sai). Tên NÊN ngắn gọn (Sai). Tên gồm 2 phần cách nhau bởi dấu chấm (Đúng). Phần mở rộng giúp xác định chương trình mở tập tin (Đúng).'
        },

        /* Slide 33 (Trang 33 / 40) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Chương trình File Explorer là một phần mềm trên máy tính được cài đặt chung với hệ điều hành Windows. Em hãy cho biết nhận xét trên là đúng hay sai?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 0,
          hint: 'Đây chính là điều đã học ở Phần 3.',
          explain: 'Đúng. File Explorer là chương trình có sẵn, được cài đặt chung với hệ điều hành Windows.'
        },

        /* Slide 34 (Trang 34 / 40) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, các vùng trên cửa sổ File Explorer gồm có: (Chọn 3)',
          options: ['Thanh tác vụ', 'Bảng chọn các thẻ lệnh', 'Biểu tượng các ổ đĩa', 'Nút điều khiển của sổ', 'Các tập tin hệ thống'],
          correctAnswers: [1, 2, 3],
          hint: 'Thanh tác vụ là của hệ điều hành Windows nói chung, không phải riêng cửa sổ File Explorer.',
          explain: 'Cửa sổ File Explorer gồm: Bảng chọn các thẻ lệnh, Biểu tượng các ổ đĩa, và Nút điều khiển cửa sổ.'
        },

        /* Slide 35 (Trang 35 / 40) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là các bước đúng để tạo một thư mục mới và đặt tên là Care?',
          options: [
            'Nhấp chuột trái vào vùng trống -> chọn New -> chọn Folder -> gõ tên Care',
            'Nhấp chuột phải vào vùng trống -> chọn New -> chọn Folder -> gõ tên Care',
            'Chọn New -> chọn Folder -> gõ tên Care',
            'Nhấp đúp chuột vào vùng trống -> chọn New -> chọn Folder'
          ],
          correctAnswer: 1,
          hint: 'Menu "New" chỉ hiện ra khi nhấp CHUỘT PHẢI vào vùng trống.',
          explain: 'Muốn tạo thư mục mới: nhấp chuột phải vào vùng trống → chọn New → chọn Folder → gõ tên Care.'
        },

        /* Slide 36 (Trang 36 / 40) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là thao tác đúng để xóa tập tin Pet health? (Chọn 2)',
          options: [
            'Nhấp chuột trái vào thư mục Pet health -> Nhấn Delete trên bàn phím',
            'Nhấp chuột trái vào thư mục Pet health -> Chọn Delete',
            'Nhấp chuột phải vào thư mục Pet health -> Chọn Delete',
            'Nhấp chuột vào thư mục Pet health -> Chọn Delete',
            'Nhấp chuột phải -> Chọn Delete'
          ],
          correctAnswers: [0, 2],
          hint: 'Nhấp chuột TRÁI không hiện menu "Chọn Delete" — phải dùng phím Delete. Nhấp chuột PHẢI thì mới hiện menu có lệnh Delete.',
          explain: 'Hai cách đúng: (1) Nhấp trái để chọn thư mục rồi nhấn phím Delete trên bàn phím, hoặc (2) Nhấp phải vào thư mục rồi chọn lệnh Delete trong menu.'
        },

        /* Slide 37 (Trang 37 / 40) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Trong các tùy chọn sau, em hãy chọn cách đổi tên của tập tin Cats.docx thành About Cats.docx?',
          options: [
            'Nhấp chuột -> chọn Rename',
            'Nhấp chuột trái -> chọn Rename',
            'Nhấp đúp chuột -> chọn Rename',
            'Nhấp chuột phải vào thư mục Cats.docx -> chọn Rename -> Gõ tên About Cats.docx'
          ],
          correctAnswer: 3,
          hint: 'Chỉ có 1 lựa chọn nêu ĐẦY ĐỦ các bước: nhấp đúng loại chuột, chọn đúng lệnh, VÀ gõ tên mới.',
          explain: 'Cần đủ 3 bước: nhấp chuột phải vào tập tin → chọn Rename → gõ tên mới.'
        },

        /* Slide 38 (Trang 38 / 40) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy ghép nối từng khái niệm với các dạng thư mục tương ứng.',
          pairs: [
            { icon: '📁', left: 'Thư mục', right: 'Là một dạng tập tin đặc biệt có công dụng như là một ngăn chứa, được dùng trong việc quản lí và sắp xếp các tập tin.' },
            { icon: '👴', left: 'Thư mục cha', right: 'Là thư mục chứa thư mục khác.' },
            { icon: '👶', left: 'Thư mục con', right: 'Là thư mục nằm trong thư mục khác.' },
            { icon: '🌳', left: 'Thư mục gốc', right: 'Là thư mục nằm ngoài cùng (các ổ đĩa).' },
            { icon: '📭', left: 'Thư mục rỗng', right: 'Là thư mục không chứa bất kì tập tin hay thư mục con nào.' }
          ],
          hint: 'Thư mục gốc luôn ở vị trí "cao nhất" — là các ổ đĩa (C:, D:...).',
          explain: 'Thư mục là ngăn chứa quản lí tập tin; thư mục cha chứa thư mục khác; thư mục con nằm trong thư mục khác; thư mục gốc là ổ đĩa (ngoài cùng); thư mục rỗng không chứa gì.'
        },

        /* Slide 39 (Trang 39 / 40) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy chọn Đúng hoặc Sai đối với mỗi phát biểu liên quan đến thư mục và tập tin: Thư mục được sắp xếp theo dạng cây, được gọi là cây thư mục. ___ Thư mục dùng để quản lý và sắp xếp tập tin. ___ Thư mục gốc có thể nằm trong thư mục khác. ___ Để xoá thư mục, em dùng lệnh Rename. ___ Phím F2 có tác dụng đổi tên thư mục. ___ Để chọn cùng lúc nhiều tập tin hay thư mục không liền kề nhau, em nhấn giữ phím Ctrl. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Thư mục gốc là thư mục NGOÀI CÙNG — không thể nằm trong thư mục nào khác. Lệnh Rename dùng để đổi tên, không phải để xóa.',
          explain: 'Cây thư mục đúng (Đúng). Thư mục quản lí/sắp xếp tập tin (Đúng). Thư mục gốc KHÔNG nằm trong thư mục khác (Sai). Xóa thư mục dùng Delete, không phải Rename (Sai). F2 đúng là phím đổi tên (Đúng). Ctrl đúng là phím chọn nhiều mục không liền kề (Đúng).'
        },

        /* Slide 40 (Trang 40 / 40) — slide hoàn thành RIÊNG của phần Ôn tập.
           resetScope:'section' báo cho app.js biết: nút ở đây chỉ làm lại
           12 câu của phần Ôn tập (giữ nguyên tiến trình 4 phần trước), và
           điểm số hiển thị cũng chỉ tính trong phạm vi phần này. */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 5 + 6!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút "Làm lại phần này" — các đáp án của 4 phần học trước sẽ không bị ảnh hưởng.',
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
   nên khai báo scoreSections:[0,1,2,3] (liệt kê đúng chỉ số các phần
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
