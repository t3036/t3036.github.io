/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 3: PHẦN MỀM VÀ CÁC LOẠI PHẦN MỀM
   (IC3 GS6 Spark — Level 1 — Chủ đề: Căn bản về công nghệ)
   ------------------------------------------------------------
   File này dùng chung engine với Bài 4 (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước
   đã dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Đây là BẢN THỬ đầu tiên chuyển từ file PDF gốc (K3_B03_PhanMem)
   sang dữ liệu tương tác. Vài chỗ mình đã chủ động diễn giải lại
   để hợp với các dạng slide hiện có (ghi chú ngay tại chỗ đó),
   bạn xem qua và chỉnh lại câu chữ / mật khẩu nếu cần.
   ============================================================ */

const LESSON = {
  id:    'bai3-phanmem',
  icon:  '💾',
  title: 'Bài 3 — Phần mềm và các loại phần mềm',

  sections: [

    /* ============================================================
       PHẦN 1 — Khái niệm về phần mềm (mật khẩu: PM01)
       ============================================================ */
    {
      id: 's1',
      title: 'Khái niệm về phần mềm',
      password: '1',
      slides: [
        /* Slide 1 (Trang 1 / 27) */
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm',
          title: 'Khái niệm về phần mềm',
          content: 'Phần mềm máy tính (<b>Software</b>) là những <b>chương trình</b> do <b>trí tuệ con người</b> tạo ra nhằm phục vụ cho mục đích sử dụng của con người.',
          imageUrl: null,
          things: [
            { icon: '📊', name: 'Microsoft PowerPoint', en: 'Tạo bài trình chiếu' },
            { icon: '📝', name: 'Microsoft Word', en: 'Xử lí văn bản' },
            { icon: '🌐', name: 'Google Chrome', en: 'Tìm kiếm thông tin trên Internet' }
          ]
        },

        /* Slide 2 (Trang 2 / 27) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, phần mềm là gì?',
          options: [
            'Là những chương trình do trí tuệ con người tạo ra nhằm phục vụ cho mục đích sử dụng của con người.',
            'Là những thiết bị máy tính do trí tuệ con người tạo ra nhằm phục vụ cho mục đích sử dụng của con người.',
            'Là những chương trình do máy tính tạo ra nhằm phục vụ cho mục đích sử dụng của con người.'
          ],
          correctAnswer: 0,
          hint: 'Phần mềm là "chương trình" — em thử nghĩ xem ai tạo ra chương trình đó.',
          explain: 'Phần mềm là các chương trình do trí tuệ con người tạo ra, không phải do máy tính tự tạo ra, và cũng không phải là thiết bị (đó là phần cứng).'
        },

        /* Slide 3 (Trang 3 / 27)
           Ghi chú: PDF gốc trình bày dạng bảng 2 cột (Phần mềm / Phần cứng)
           với dấu ✓. Mình chuyển thành dạng "chọn từ trong ô" (quiz_dropdown)
           — mỗi mục có 1 ô để chọn "Phần mềm" hoặc "Phần cứng". */
        {
          type: 'quiz_dropdown',
          topic: 'Luyện tập',
          question: 'Em hãy xác định mỗi mục sau là phần mềm hay phần cứng: Cơ sở dữ liệu (Database) là ___ Chuột (Mouse) là ___ Bàn phím (Keyboard) là ___ Thư điện tử (Email) là ___ Máy in (Printer) là ___',
          blanks: [
            { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 0 },
            { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 1 },
            { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 1 },
            { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 0 },
            { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 1 }
          ],
          hint: 'Phần cứng là thứ em có thể chạm, cầm nắm được. Phần mềm thì không.',
          explain: 'Chuột, bàn phím, máy in là các thiết bị em chạm được nên là phần cứng. Cơ sở dữ liệu và thư điện tử là chương trình/dữ liệu chạy bên trong máy nên là phần mềm.'
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Phân biệt các loại phần mềm (mật khẩu: PM02)
       ============================================================ */
    {
      id: 's2',
      title: 'Phân biệt các loại phần mềm',
      password: '3',
      slides: [
        /* Slide 4 (Trang 4 / 27) */
        {
          type: 'info',
          topic: 'Phần 2 · Phân biệt phần mềm',
          title: 'Từ chương trình đến phần mềm',
          content: 'Để máy tính có thể thực thi công việc, con người tạo ra các <b>chương trình (program)</b> bằng cách viết các <b>tập hợp lệnh hoặc mã (code)</b>.',
          imageUrl: null
        },

        /* Slide 5 (Trang 5 / 27) */
        {
          type: 'info',
          topic: 'Phần 2 · Theo quyền hạn can thiệp mã nguồn',
          title: 'Mã nguồn mở & Độc quyền',
          content: 'Dựa theo quyền hạn can thiệp vào mã nguồn, phần mềm được chia thành 2 loại:',
          imageUrl: null,
          things: [
            { icon: '🐧', name: 'Mã nguồn mở (Open Source)', en: 'Thường miễn phí; người dùng có thể xem, sửa đổi, chia sẻ mã nguồn. VD: Linux' },
            { icon: '🔐', name: 'Độc quyền (Proprietary)', en: 'Được bán/phân phối kèm giấy phép; không thể xem hoặc chỉnh sửa mã nguồn. VD: Windows, Office' }
          ]
        },

        /* Slide 6 (Trang 6 / 27) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào là phát biểu đúng về phần mềm mã nguồn mở (Open Source)?',
          options: [
            'Là các phần mềm được phân phối mã nguồn miễn phí cho người dùng.',
            'Là các phần mềm được bán hoặc phân phối với một loại giấy phép phần mềm cụ thể.',
            'Là các phần mềm được phân phối mã nguồn miễn phí cho người dùng trong một thời gian nhất định.'
          ],
          correctAnswer: 0,
          hint: 'Mã nguồn "mở" nghĩa là ai cũng xem/sửa được, không giới hạn thời gian.',
          explain: 'Phần mềm mã nguồn mở được phân phối mã nguồn miễn phí, không kèm giấy phép độc quyền và không giới hạn thời gian sử dụng.'
        },

        /* Slide 7 (Trang 7 / 27) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào là phát biểu đúng về phần mềm độc quyền (Proprietary)?',
          options: [
            'Là các phần mềm được phân phối mã nguồn miễn phí cho người dùng.',
            'Là các phần mềm được bán hoặc phân phối với một loại giấy phép phần mềm cụ thể.',
            'Là các phần mềm được phân phối mã nguồn miễn phí cho người dùng trong một thời gian nhất định.'
          ],
          correctAnswer: 1,
          hint: 'Độc quyền nghĩa là có chủ sở hữu, phải mua hoặc có giấy phép mới dùng được.',
          explain: 'Phần mềm độc quyền được bán hoặc phân phối kèm một loại giấy phép cụ thể, người dùng không được xem hay sửa mã nguồn.'
        },

        /* Slide 8 (Trang 8 / 27)
           Ghi chú: PDF gốc trình bày 5 phát biểu Đúng/Sai trong 1 bảng.
           Gộp lại thành 1 slide quiz_dropdown — mỗi phát biểu có 1 ô
           chọn Đúng/Sai riêng, học sinh làm hết 5 câu trên cùng 1 trang. */
        {
          type: 'quiz_dropdown',
          topic: 'Luyện tập',
          question: 'Em hãy chọn Đúng hoặc Sai cho mỗi phát biểu sau: Hệ điều hành Windows 10 là phần mềm độc quyền. ___ Không cần có giấy phép sử dụng khi dùng phần mềm độc quyền. ___ Linux là phần mềm độc quyền. ___ Người dùng phải trả phí để sử dụng phần mềm độc quyền. ___ Phần mềm độc quyền được sở hữu bởi một cá nhân hoặc công ty tạo ra phần mềm. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Nhớ lại: độc quyền = có chủ sở hữu, cần giấy phép, thường phải trả phí. Mã nguồn mở (như Linux) mới là loại không cần giấy phép/miễn phí.',
          explain: 'Windows 10 là phần mềm độc quyền của Microsoft (Đúng). Phần mềm độc quyền luôn cần giấy phép (Sai). Linux là mã nguồn mở, không phải độc quyền (Sai). Phần mềm độc quyền thường phải trả phí (Đúng) và luôn thuộc quyền sở hữu của cá nhân/công ty tạo ra nó (Đúng).'
        },

        /* Slide 9 (Trang 9 / 27) */
        {
          type: 'info',
          topic: 'Phần 2 · Theo tính năng & môi trường sử dụng',
          title: 'Chương trình ứng dụng & Ứng dụng Web',
          content: 'Dựa theo tính năng và môi trường sử dụng, phần mềm còn được chia thành:',
          imageUrl: null,
          things: [
            { icon: '💻', name: 'Chương trình ứng dụng (Desktop Application)', en: 'Thực hiện công việc cụ thể (soạn thảo, bảng tính, trình chiếu…), phải cài đặt trên máy trước khi chạy.' },
            { icon: '🌍', name: 'Ứng dụng Web (Web Application)', en: 'Hoạt động trên Internet để phục vụ nhu cầu của em. VD: Gmail, Drive, Meet…' }
          ]
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Một số khái niệm liên quan đến phần mềm (mật khẩu: PM03)
       ============================================================ */
    {
      id: 's3',
      title: 'Một số khái niệm liên quan đến phần mềm',
      password: '7',
      slides: [
        /* Slide 10 (Trang 10 / 27) */
        {
          type: 'info',
          topic: 'Phần 3 · Program / Application / App',
          title: 'Một số khái niệm liên quan đến phần mềm',
          content: 'Ba thuật ngữ dễ nhầm lẫn khi nói về phần mềm:',
          imageUrl: null,
          things: [
            { icon: '⌨️', name: 'Program (Chương trình)', en: 'Bất kì tập hợp các lệnh hoặc mã được viết để máy tính thực thi.' },
            { icon: '🧩', name: 'Application', en: 'Được thiết kế để thực hiện nhiều chức năng khác nhau.' },
            { icon: '📱', name: 'App', en: 'Phiên bản nhẹ, chạy trên điện thoại/máy tính bảng (một số cả trên laptop).' }
          ]
        },

        /* Slide 11 (Trang 11 / 27) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy chọn phát biểu đúng nhất về một phần mềm ứng dụng trên máy tính để bàn?',
          options: [
            'Phần mềm phải được cài đặt trên máy tính của em trước khi em có thể khởi chạy.',
            'Máy tính của em phải được kết nối với Internet để chạy phần mềm.',
            'Phần mềm không yêu cầu bất kì dung lượng lưu trữ nào trên máy tính của em.',
            'Em có thể đăng nhập vào phần mềm từ bất kỳ thiết bị nào.'
          ],
          correctAnswer: 0,
          hint: 'Đây là đặc điểm riêng của phần mềm "cài trên máy" (Desktop Application).',
          explain: 'Phần mềm ứng dụng trên máy tính để bàn phải được cài đặt sẵn trên máy trước khi có thể khởi chạy, khác với ứng dụng Web.'
        },

        /* Slide 12 (Trang 12 / 27) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, thuật ngữ nào là phần mềm chạy trên điện thoại hoặc máy tính bảng?',
          options: ['App', 'Program', 'Icon', 'Widget'],
          correctAnswer: 0,
          hint: 'Đây là phiên bản "nhẹ" mà em vừa học ở slide trước.',
          explain: 'App là phiên bản nhẹ của phần mềm, được thiết kế để chạy trên điện thoại và máy tính bảng.'
        },

        /* Slide 13 (Trang 13 / 27) */
        {
          type: 'quiz_matching',
          topic: 'Luyện tập',
          question: 'Em hãy ghép thuật ngữ với định nghĩa phù hợp.',
          pairs: [
            { icon: '🧩', left: 'Được thiết kế để thực hiện nhiều chức năng khác nhau', right: 'Application' },
            { icon: '💻', left: 'Phải được cài đặt trên máy tính trước khi nó có thể chạy', right: 'Desktop Application' },
            { icon: '📱', left: 'Phiên bản nhẹ của ứng dụng phần mềm, thường chạy trên điện thoại và máy tính bảng', right: 'App' }
          ],
          hint: 'Chữ "Desktop" gợi ý phải cài trên máy tính để bàn trước.',
          explain: 'Application là tên gọi chung cho phần mềm nhiều chức năng; Desktop Application phải cài trên máy; App là bản nhẹ cho di động.'
        },

        /* Slide 14 (Trang 14 / 27) */
        {
          type: 'quiz_matching',
          topic: 'Luyện tập',
          question: 'Em hãy ghép các thuật ngữ với tính năng tương ứng.',
          pairs: [
            { icon: '🖥️', left: 'Chương trình ứng dụng', right: 'Là phần mềm giúp em thực hiện những công việc cụ thể' },
            { icon: '📝', left: 'Word Processing', right: 'Giúp em tạo, chỉnh sửa, lưu, định dạng và in tài liệu' },
            { icon: '🌐', left: 'Ứng dụng Web', right: 'Là các phần mềm hoạt động trên Internet' },
            { icon: '📲', left: 'Ứng dụng Web hoặc di động (Web or Mobile Apps)', right: 'Là một số ứng dụng đi kèm với các thiết bị di động' }
          ],
          hint: 'Word Processing là một loại "Chương trình ứng dụng" chuyên biệt cho văn bản.',
          explain: 'Mỗi thuật ngữ ứng với đúng 1 tính năng: Chương trình ứng dụng (chung), Word Processing (xử lí văn bản), Ứng dụng Web (chạy trên Internet), và ứng dụng di động (đi kèm thiết bị).'
        }
      ]
    },

    /* ============================================================
       PHẦN 4 — Công cụ AI và phần mềm (mật khẩu: PM04)
       ============================================================ */
    {
      id: 's4',
      title: 'Công cụ AI và phần mềm',
      password: '5',
      slides: [
        /* Slide 15 (Trang 15 / 27) */
        {
          type: 'info',
          topic: 'Phần 4 · Công cụ AI',
          title: 'Công cụ AI và phần mềm',
          content: '<b>Công cụ AI là phần mềm</b> giúp máy tính xử lí thông tin và trả lời yêu cầu của người dùng. AI có thể gợi ý ý tưởng, giải thích khái niệm, tạo câu hỏi luyện tập và sắp xếp thông tin giúp em.',
          imageUrl: null,
          remember: '<b>Chú ý:</b> AI có thể <b>hỗ trợ</b> học tập nhưng <b>không thay thế</b> việc học và suy nghĩ của học sinh.'
        },

        /* Slide 16 (Trang 16 / 27) */
        {
          type: 'info',
          topic: 'Phần 4 · Phân biệt',
          title: 'Phần cứng — Phần mềm — Công cụ AI',
          content: 'Em hãy phân biệt 3 khái niệm dễ nhầm lẫn sau:',
          imageUrl: null,
          things: [
            { icon: '🖱️', name: 'Phần cứng', en: 'Những thứ em chạm vào được. VD: vỏ máy, bàn phím, chuột, màn hình, tai nghe.' },
            { icon: '💾', name: 'Phần mềm', en: 'Những chương trình chạy bên trong. VD: trò chơi, phần mềm vẽ tranh, trình duyệt Web.' },
            { icon: '🤖', name: 'Công cụ AI', en: 'Bạn trợ lý thông minh — phần mềm biết tự học hỏi, ghi nhớ và trò chuyện để hỗ trợ em.' }
          ]
        },

        /* Slide 17 (Trang 17 / 27) — slide tổng kết cuối bài */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 3!',
          content: 'Em đã hiểu được khái niệm phần mềm, biết phân biệt các loại phần mềm (mã nguồn mở/độc quyền, chương trình để bàn/ứng dụng Web), và nắm được sự khác nhau giữa phần cứng, phần mềm và công cụ AI.',
          imageUrl: null,
          remember: 'Ghi nhớ: Phần mềm là <b>chương trình</b> — thứ em <b>không chạm được</b>, còn phần cứng là thứ em <b>chạm được</b>. Công cụ AI cũng là một loại phần mềm đặc biệt.'
        }
      ]
    },

    /* ============================================================
       PHẦN 5 — Ôn tập (mật khẩu: PM05)
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 4 phần
       trên để học sinh luyện lại. Vì đây là các đối tượng slide
       riêng (dù nội dung câu hỏi giống bản gốc), đáp án làm ở đây
       độc lập hoàn toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's5',
      title: 'Ôn tập',
      password: '0',
      slides: [
        /* Slide 18 (Trang 18 / 27) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, phần mềm là gì?',
          options: [
            'Là những chương trình do trí tuệ con người tạo ra nhằm phục vụ cho mục đích sử dụng của con người.',
            'Là những thiết bị máy tính do trí tuệ con người tạo ra nhằm phục vụ cho mục đích sử dụng của con người.',
            'Là những chương trình do máy tính tạo ra nhằm phục vụ cho mục đích sử dụng của con người.'
          ],
          correctAnswer: 0,
          hint: 'Phần mềm là "chương trình" — em thử nghĩ xem ai tạo ra chương trình đó.',
          explain: 'Phần mềm là các chương trình do trí tuệ con người tạo ra, không phải do máy tính tự tạo ra, và cũng không phải là thiết bị (đó là phần cứng).'
        },

        /* Slide 19 (Trang 19 / 27) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy xác định mỗi mục sau là phần mềm hay phần cứng: Cơ sở dữ liệu (Database) là ___ Chuột (Mouse) là ___ Bàn phím (Keyboard) là ___ Thư điện tử (Email) là ___ Máy in (Printer) là ___',
          blanks: [
            { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 0 },
            { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 1 },
            { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 1 },
            { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 0 },
            { options: ['Phần mềm', 'Phần cứng'], correctAnswer: 1 }
          ],
          hint: 'Phần cứng là thứ em có thể chạm, cầm nắm được. Phần mềm thì không.',
          explain: 'Chuột, bàn phím, máy in là các thiết bị em chạm được nên là phần cứng. Cơ sở dữ liệu và thư điện tử là chương trình/dữ liệu chạy bên trong máy nên là phần mềm.'
        },

        /* Slide 20 (Trang 20 / 27) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào là phát biểu đúng về phần mềm mã nguồn mở (Open Source)?',
          options: [
            'Là các phần mềm được phân phối mã nguồn miễn phí cho người dùng.',
            'Là các phần mềm được bán hoặc phân phối với một loại giấy phép phần mềm cụ thể.',
            'Là các phần mềm được phân phối mã nguồn miễn phí cho người dùng trong một thời gian nhất định.'
          ],
          correctAnswer: 0,
          hint: 'Mã nguồn "mở" nghĩa là ai cũng xem/sửa được, không giới hạn thời gian.',
          explain: 'Phần mềm mã nguồn mở được phân phối mã nguồn miễn phí, không kèm giấy phép độc quyền và không giới hạn thời gian sử dụng.'
        },

        /* Slide 21 (Trang 21 / 27) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào là phát biểu đúng về phần mềm độc quyền (Proprietary)?',
          options: [
            'Là các phần mềm được phân phối mã nguồn miễn phí cho người dùng.',
            'Là các phần mềm được bán hoặc phân phối với một loại giấy phép phần mềm cụ thể.',
            'Là các phần mềm được phân phối mã nguồn miễn phí cho người dùng trong một thời gian nhất định.'
          ],
          correctAnswer: 1,
          hint: 'Độc quyền nghĩa là có chủ sở hữu, phải mua hoặc có giấy phép mới dùng được.',
          explain: 'Phần mềm độc quyền được bán hoặc phân phối kèm một loại giấy phép cụ thể, người dùng không được xem hay sửa mã nguồn.'
        },

        /* Slide 22 (Trang 22 / 27) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy chọn Đúng hoặc Sai cho mỗi phát biểu sau: Hệ điều hành Windows 10 là phần mềm độc quyền. ___ Không cần có giấy phép sử dụng khi dùng phần mềm độc quyền. ___ Linux là phần mềm độc quyền. ___ Người dùng phải trả phí để sử dụng phần mềm độc quyền. ___ Phần mềm độc quyền được sở hữu bởi một cá nhân hoặc công ty tạo ra phần mềm. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Nhớ lại: độc quyền = có chủ sở hữu, cần giấy phép, thường phải trả phí. Mã nguồn mở (như Linux) mới là loại không cần giấy phép/miễn phí.',
          explain: 'Windows 10 là phần mềm độc quyền của Microsoft (Đúng). Phần mềm độc quyền luôn cần giấy phép (Sai). Linux là mã nguồn mở, không phải độc quyền (Sai). Phần mềm độc quyền thường phải trả phí (Đúng) và luôn thuộc quyền sở hữu của cá nhân/công ty tạo ra nó (Đúng).'
        },

        /* Slide 23 (Trang 23 / 27) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy chọn phát biểu đúng nhất về một phần mềm ứng dụng trên máy tính để bàn?',
          options: [
            'Phần mềm phải được cài đặt trên máy tính của em trước khi em có thể khởi chạy.',
            'Máy tính của em phải được kết nối với Internet để chạy phần mềm.',
            'Phần mềm không yêu cầu bất kì dung lượng lưu trữ nào trên máy tính của em.',
            'Em có thể đăng nhập vào phần mềm từ bất kỳ thiết bị nào.'
          ],
          correctAnswer: 0,
          hint: 'Đây là đặc điểm riêng của phần mềm "cài trên máy" (Desktop Application).',
          explain: 'Phần mềm ứng dụng trên máy tính để bàn phải được cài đặt sẵn trên máy trước khi có thể khởi chạy, khác với ứng dụng Web.'
        },

        /* Slide 24 (Trang 24 / 27) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, thuật ngữ nào là phần mềm chạy trên điện thoại hoặc máy tính bảng?',
          options: ['App', 'Program', 'Icon', 'Widget'],
          correctAnswer: 0,
          hint: 'Đây là phiên bản "nhẹ" mà em vừa học ở slide trước.',
          explain: 'App là phiên bản nhẹ của phần mềm, được thiết kế để chạy trên điện thoại và máy tính bảng.'
        },

        /* Slide 25 (Trang 25 / 27) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy ghép thuật ngữ với định nghĩa phù hợp.',
          pairs: [
            { icon: '🧩', left: 'Được thiết kế để thực hiện nhiều chức năng khác nhau', right: 'Application' },
            { icon: '💻', left: 'Phải được cài đặt trên máy tính trước khi nó có thể chạy', right: 'Desktop Application' },
            { icon: '📱', left: 'Phiên bản nhẹ của ứng dụng phần mềm, thường chạy trên điện thoại và máy tính bảng', right: 'App' }
          ],
          hint: 'Chữ "Desktop" gợi ý phải cài trên máy tính để bàn trước.',
          explain: 'Application là tên gọi chung cho phần mềm nhiều chức năng; Desktop Application phải cài trên máy; App là bản nhẹ cho di động.'
        },

        /* Slide 26 (Trang 26 / 27) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy ghép các thuật ngữ với tính năng tương ứng.',
          pairs: [
            { icon: '🖥️', left: 'Chương trình ứng dụng', right: 'Là phần mềm giúp em thực hiện những công việc cụ thể' },
            { icon: '📝', left: 'Word Processing', right: 'Giúp em tạo, chỉnh sửa, lưu, định dạng và in tài liệu' },
            { icon: '🌐', left: 'Ứng dụng Web', right: 'Là các phần mềm hoạt động trên Internet' },
            { icon: '📲', left: 'Ứng dụng Web hoặc di động (Web or Mobile Apps)', right: 'Là một số ứng dụng đi kèm với các thiết bị di động' }
          ],
          hint: 'Word Processing là một loại "Chương trình ứng dụng" chuyên biệt cho văn bản.',
          explain: 'Mỗi thuật ngữ ứng với đúng 1 tính năng: Chương trình ứng dụng (chung), Word Processing (xử lí văn bản), Ứng dụng Web (chạy trên Internet), và ứng dụng di động (đi kèm thiết bị).'
        },

        /* Slide 27 (Trang 27 / 27) — slide hoàn thành RIÊNG của phần Ôn tập.
           resetScope:'section' báo cho app.js biết: nút ở đây chỉ làm lại
           9 câu của phần Ôn tập (giữ nguyên tiến trình 4 phần trước), và
           điểm số hiển thị cũng chỉ tính trong phạm vi phần này. */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 3!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút "Làm lại phần này" — các đáp án của 4 phần học trước sẽ không bị ảnh hưởng.',
          imageUrl: null
        }
      ]
    }
  ]
};


/* ============================================================
   MẪU KHAI BÁO CÁC DẠNG SLIDE (tham khảo khi thêm nội dung mới)
   ============================================================ */

// { type:'info', topic:'', title:'', content:'', imageUrl:null,
//   things:[{icon:'',name:'',en:''}], remember:'' }
// Slide "hoàn thành" cuối 1 phần/bài: thêm final:true để hiện điểm số +
// nút cuối trang. Nếu muốn nút đó chỉ làm lại RIÊNG phần chứa slide này
// (không đụng các phần khác) thay vì học lại từ đầu cả bài, thêm
// resetScope:'section' — điểm số hiển thị cũng sẽ chỉ tính trong phần đó.

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