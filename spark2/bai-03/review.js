/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — BÀI 3 — THÔNG TIN ĐẦU VÀO, ĐẦU RA, BỘ NHỚ VÀ THIẾT BỊ LƯU TRỮ
   (gom các câu hỏi của bai-03.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s1: ''   // Ôn tập
};

const LESSON = {
  id:    'l2-bai3-vao-ra-on-tap',
  icon:  '💾',
  title: 'Ôn tập Bài 3 — Thông tin đầu vào, đầu ra, bộ nhớ và thiết bị lưu trữ',

  sections: [
    {
      id: 's1',
      title: 'Ôn tập',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Thông tin đầu vào (Input) là gì?',
          options: [
            'Là thông tin được đưa vào máy tính',
            'Là thông tin được đưa ra ngoài máy tính',
            'Là thông tin được lưu trữ trong máy tính',
            'Là thông tin được máy tính xử lí'
          ],
          correctAnswer: 0,
          hint: 'Chữ "vào" đã nằm sẵn trong tên gọi rồi đó.',
          explain: 'Thông tin đầu vào (Input) là những dữ liệu, thông tin mà em đưa vào máy tính.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Thuật ngữ nào chỉ kết quả mà máy tính tạo ra (như thông tin, âm thanh, hình ảnh)?',
          options: [
            'Hệ điều hành (OS)',
            'Bộ nhớ (Memory)',
            'Đầu ra (Output)',
            'Ổ cứng (Hard Drive)'
          ],
          correctAnswer: 2,
          hint: 'Kết quả đi ra khỏi máy tính để chúng ta nhận biết.',
          explain: 'Thông tin đầu ra (Output) là thông tin kết quả được tạo ra từ máy tính.'
        },
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Chức năng của bộ nhớ là gì? (Chọn 3 đáp án)',
          options: [
            'Đưa thông tin dữ liệu vào máy tính',
            'Giúp các chương trình trong máy tính hoạt động',
            'Giúp máy tính tạo và sử dụng tập tin',
            'Giúp khởi động máy tính'
          ],
          correctAnswers: [1, 2, 3],
          hint: 'Bộ nhớ không dùng để "nhập" dữ liệu từ bên ngoài vào.',
          explain: 'Bộ nhớ giúp khởi động máy (nhờ ROM), chạy chương trình và tạo/sử dụng tập tin (nhờ RAM).'
        },
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Hãy nối tên bộ nhớ với đặc điểm của nó.',
          pairs: [
            { icon: '⚡', left: 'RAM', right: 'Bộ nhớ tạm thời, lưu dữ liệu khi máy đang chạy' },
            { icon: '🔒', left: 'ROM', right: 'Bộ nhớ vĩnh viễn, đọc chứ không được sửa' }
          ],
          hint: 'RAM = Ngẫu nhiên/Tạm thời. ROM = Chỉ đọc/Vĩnh viễn.',
          explain: 'RAM (Random Access Memory) là tạm thời, ROM (Read-Only Memory) là vĩnh viễn.'
        },
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Cách nào để tăng không gian lưu trữ cho điện thoại thông minh? (Chọn 2 đáp án)',
          options: [
            'Gỡ cài đặt bất kì trò chơi nào mà em không chơi nữa.',
            'Xóa ảnh cũ mà em không cần.',
            'Truyền phát Video ở định dạng SD.',
            'Đóng tất cả các chương trình nền đang chạy.'
          ],
          correctAnswers: [0, 1],
          hint: 'Việc nào sẽ làm xóa bớt dữ liệu đang chiếm chỗ trong máy?',
          explain: 'Xóa ảnh cũ và gỡ game không chơi sẽ giải phóng thiết bị lưu trữ. Đóng chương trình nền chỉ giải phóng RAM.'
        },
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
