/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 3 — THÔNG TIN ĐẦU VÀO, ĐẦU RA, BỘ NHỚ VÀ THIẾT BỊ LƯU TRỮ
   (chuyển sang cấu trúc LESSON.sections dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s1: '',  // Phần 1 — Đầu vào
  s2: '',  // Phần 2 — Đầu ra
  s3: '',  // Phần 3 — Bộ nhớ
  s4: '',  // Phần 4 — Thiết bị lưu trữ
  s5: ''   // Phần 5 — Ứng dụng AI
};

const LESSON = {
  id:    'l2-bai3-vao-ra',
  icon:  '💾',
  title: 'Bài 3 — Thông tin đầu vào, đầu ra, bộ nhớ và thiết bị lưu trữ',

  sections: [
    {
      id: 's1',
      title: 'Đầu vào',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'info',
          topic: 'Khởi động',
          title: 'Thông tin đi vào và đi ra',
          content: 'Khi em thao tác trên máy tính hay dùng điện thoại, thông tin luôn có "chiều đi vào" (Input) và "chiều đi ra" (Output).',
          imageUrl: null,
          things: [
            { icon: '⌨️', name: 'Đầu vào (Input)', en: 'Thứ em đưa vào' },
            { icon: '💻', name: 'Xử lí', en: 'Máy tính tính toán' },
            { icon: '🖥️', name: 'Đầu ra (Output)', en: 'Kết quả nhận được' }
          ],
          remember: 'Hôm nay chúng ta sẽ tìm hiểu Thông tin đầu vào, đầu ra, Bộ nhớ và Thiết bị lưu trữ!'
        },
        {
          type: 'info',
          topic: 'Phần 1 · Đầu vào',
          title: 'Thông tin đầu vào (Input)',
          content: '<b>Thông tin đầu vào (Input)</b> là thông tin mà em đưa vào máy tính.',
          imageUrl: null,
          things: [
            { icon: '➕', name: 'Toán học', en: 'Nhập "1+1"' },
            { icon: '📸', name: 'Chụp ảnh', en: 'Hình ảnh từ máy ảnh' },
            { icon: '🎤', name: 'Ghi âm', en: 'Giọng nói thu vào mic' }
          ],
          remember: 'Bất cứ thứ gì em nhập, bấm, thu âm hay chụp lại để đưa vào thiết bị đều là Thông tin đầu vào.'
        },
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
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
        }
      ]
    },
    {
      id: 's2',
      title: 'Đầu ra',
      password: PASSWORDS.s2,
      slides: [
        {
          type: 'info',
          topic: 'Phần 2 · Đầu ra',
          title: 'Thông tin đầu ra (Output)',
          content: '<b>Thông tin đầu ra (Output)</b> là thông tin kết quả được tạo ra từ máy tính sau khi xử lí.',
          imageUrl: null,
          things: [
            { icon: '🔢', name: 'Kết quả', en: 'Số "2" (kết quả của 1+1)' },
            { icon: '🎵', name: 'Âm thanh', en: 'Phát ra từ loa/tai nghe' },
            { icon: '🖼️', name: 'Hình ảnh', en: 'Hiển thị trên màn hình' }
          ],
          remember: 'Thông tin đầu ra là thứ máy tính trả lại cho em xem hoặc nghe.'
        },
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
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
        }
      ]
    },
    {
      id: 's3',
      title: 'Bộ nhớ',
      password: PASSWORDS.s3,
      slides: [
        {
          type: 'info',
          topic: 'Phần 3 · Bộ nhớ',
          title: 'Bộ nhớ máy tính',
          content: 'Bộ nhớ là thành phần quan trọng nhất được sử dụng để <b>chạy các ứng dụng</b> và lưu trữ thông tin.',
          imageUrl: null,
          things: [
            { icon: '🔒', name: 'ROM (Read-Only Memory)', en: 'Bộ nhớ vĩnh viễn, lưu thông tin quan trọng' },
            { icon: '⚡', name: 'RAM (Random Access Memory)', en: 'Bộ nhớ tạm thời, chạy khi máy hoạt động' }
          ],
          remember: 'ROM chứa những thứ không được phép sửa đổi. RAM chứa thông tin đang hoạt động và sẽ mất khi tắt máy.'
        },
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
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
          topic: 'Luyện tập',
          question: 'Hãy nối tên bộ nhớ với đặc điểm của nó.',
          pairs: [
            { icon: '⚡', left: 'RAM', right: 'Bộ nhớ tạm thời, lưu dữ liệu khi máy đang chạy' },
            { icon: '🔒', left: 'ROM', right: 'Bộ nhớ vĩnh viễn, đọc chứ không được sửa' }
          ],
          hint: 'RAM = Ngẫu nhiên/Tạm thời. ROM = Chỉ đọc/Vĩnh viễn.',
          explain: 'RAM (Random Access Memory) là tạm thời, ROM (Read-Only Memory) là vĩnh viễn.'
        }
      ]
    },
    {
      id: 's4',
      title: 'Thiết bị lưu trữ',
      password: PASSWORDS.s4,
      slides: [
        {
          type: 'info',
          topic: 'Phần 4 · Thiết bị lưu trữ',
          title: 'Thiết bị lưu trữ',
          content: 'Thiết bị lưu trữ giúp lưu dữ liệu (dung lượng lớn hơn bộ nhớ nhưng tốc độ chậm hơn). Dung lượng thường được đo bằng <b>Megabyte (MB), Gigabyte (GB), Terabyte (TB)</b>...',
          imageUrl: null,
          things: [
            { icon: '💽', name: 'Ổ cứng', en: 'HDD, SSD nằm trong máy' },
            { icon: '🔌', name: 'USB', en: 'Nhỏ gọn, cắm ngoài' },
            { icon: '💾', name: 'Thẻ nhớ', en: 'Dùng cho điện thoại, máy ảnh' }
          ],
          remember: 'Khi điện thoại hết dung lượng, em có thể <b>xóa ảnh cũ</b> hoặc <b>gỡ trò chơi không dùng</b> để tăng khoảng trống.'
        },
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
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
        }
      ]
    },
    {
      id: 's5',
      title: 'Ứng dụng AI',
      password: PASSWORDS.s5,
      slides: [
        {
          type: 'info',
          topic: 'Phần 5 · Ứng dụng AI',
          title: 'Đầu vào và Đầu ra của AI',
          content: 'Khi dùng các công cụ Trí tuệ nhân tạo (AI), em cũng đang thực hiện đưa dữ liệu vào và nhận kết quả ra.',
          imageUrl: null,
          things: [
            { icon: '⌨️', name: 'Đầu vào', en: 'Câu lệnh: "Vẽ con mèo"' },
            { icon: '🧠', name: 'Xử lí', en: 'AI phân tích lệnh' },
            { icon: '🎨', name: 'Đầu ra', en: 'Hình ảnh con mèo' }
          ],
          remember: 'Em gõ "1+1 bằng mấy?" (Input), Chatbot trả lời "Bằng 2" (Output).'
        },
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2, 3, 4],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 3!',
          content: 'Bây giờ em đã phân biệt được Đầu vào (Input), Đầu ra (Output), biết ROM khác RAM như thế nào, và hiểu về các Thiết bị lưu trữ thông dụng.',
          imageUrl: null,
          remember: 'Hãy thử quan sát xem bàn phím, chuột là thiết bị đầu vào hay đầu ra nhé!'
        }
      ]
    }
  ]
};
