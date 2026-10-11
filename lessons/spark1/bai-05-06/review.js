/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 5 + 6 — Tập tin và thư mục
   (tách từ phần Ôn tập của bai-05-06.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s5: ''    // Phần 5 — Ôn tập
};

const LESSON = {
  id:    'bai5-6-taptin-on-tap',
  icon:  '📁',
  title: 'Ôn tập Bài 5 + 6 — Tập tin và thư mục',

  sections: [
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

        /* Slide 40 — slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 5 + 6!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};
