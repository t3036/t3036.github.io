/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — BÀI 3: PHẦN MỀM VÀ CÁC LOẠI PHẦN MỀM
   (tách từ phần Ôn tập của bai-03.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s1: ''   // Ôn tập
};

const LESSON = {
  id:    'bai3-phanmem-on-tap',
  icon:  '💾',
  title: 'Ôn tập Bài 3 — Phần mềm và các loại phần mềm',

  sections: [
    /* ============================================================
       PHẦN 5 — Ôn tập (mật khẩu: PM05)
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 4 phần
       trên để học sinh luyện lại. Vì đây là các đối tượng slide
       riêng (dù nội dung câu hỏi giống bản gốc), đáp án làm ở đây
       độc lập hoàn toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's1',
      title: 'Ôn tập',
      password: PASSWORDS.s1,
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

        /* Slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 3!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};
