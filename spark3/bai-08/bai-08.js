/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 8: XỬ LÍ SỰ CỐ CÔNG NGHỆ
   (IC3 GS6 Spark — Level 3 — Chủ đề: Căn bản về công nghệ)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Đây là BẢN THỬ đầu tiên chuyển từ PDF gốc (K5_B08_XuLiSuCoCongNghe)
   sang dữ liệu tương tác. Bạn xem qua câu chữ / mật khẩu và chỉnh
   lại nếu cần.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: '',   // Phần 1 — Xử lí sự cố công nghệ
  s2: '',   // Phần 2 — Các sự cố công nghệ phổ biến và cách xử lí
  s3: '',   // Phần 3 — Sử dụng AI để gợi ý kiểm tra lỗi đơn giản
  s4: ''    // Phần 4 — Ôn tập
};

const LESSON = {
  id:    'bai8-suco',
  icon:  '🛠️',
  title: 'Bài 8 — Xử lí sự cố công nghệ',

  sections: [

    /* ============================================================
       PHẦN 1 — Xử lí sự cố công nghệ (mật khẩu: SC01)
       ============================================================ */
    {
      id: 's1',
      title: 'Xử lí sự cố công nghệ',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 19) */
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm',
          title: 'Xử lí sự cố công nghệ là gì?',
          content: '<b>Xử lí sự cố công nghệ</b> là quá trình <b>chẩn đoán và giải quyết</b> các lỗi máy tính hoặc sự cố kĩ thuật thiết bị công nghệ.',
          imageUrl: null
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Các sự cố công nghệ phổ biến và cách xử lí
       (mật khẩu: SC02)
       ============================================================ */
    {
      id: 's2',
      title: 'Các sự cố công nghệ phổ biến và cách xử lí',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 2 (Trang 2 / 19) */
        {
          type: 'info',
          topic: 'Phần 2 · Sự cố thường gặp',
          title: 'Xử lí máy tính chạy chậm',
          content: 'Khi máy tính chạy chậm, em có thể thử:',
          imageUrl: null,
          things: [
            { icon: '🗂️', name: 'Đóng ứng dụng không cần thiết', en: 'Tắt bớt các chương trình đang chạy nền' },
            { icon: '🗑️', name: 'Xóa tập tin cũ trong thùng rác', en: 'Giải phóng bớt dung lượng ổ đĩa' },
            { icon: '💽', name: 'Chạy Disk Cleanup / Defragment', en: 'Dọn dẹp và chống phân mảnh ổ đĩa' }
          ]
        },

        /* Slide 3 (Trang 3 / 19) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Máy tính của em bị chậm. Em nên làm gì trước tiên?',
          options: [
            'Cập nhật hệ điều hành.',
            'Nhấp chuột liên tục.',
            'Rút phích cắm máy tính.',
            'Đóng các ứng dụng hoặc cửa sổ không sử dụng.'
          ],
          correctAnswer: 3,
          hint: 'Đây là bước đơn giản, ít rủi ro nhất và nên thử trước tiên.',
          explain: 'Đóng bớt các ứng dụng/cửa sổ không dùng tới giúp giải phóng tài nguyên máy tính ngay lập tức, nên đây là việc nên làm trước tiên.'
        },

        /* Slide 4 (Trang 4 / 19) */
        {
          type: 'info',
          topic: 'Phần 2 · Sự cố thường gặp',
          title: 'Không thể kết nối Wi-fi',
          content: 'Khi không kết nối được Wi-fi, em có thể thử:',
          imageUrl: null,
          things: [
            { icon: '📶', name: 'Kiểm tra đúng mạng cần kết nối', en: 'Đảm bảo chọn đúng tên Wi-fi' },
            { icon: '🔄', name: 'Đặt lại (Reset) bộ điều hợp không dây', en: 'Reset Wireless Adapter trên thiết bị' },
            { icon: '📞', name: 'Liên lạc nhà cung cấp Internet', en: 'Xác định xem có phải sự cố từ ISP không' }
          ]
        },

        /* Slide 5 (Trang 5 / 19) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em không kết nối được với Internet ở nhà mình, không ai khác trong nhà gặp vấn đề này. Em nên làm gì trước tiên để khắc phục?',
          options: [
            'Thay Pin cho thiết bị của em.',
            'Di chuyển đến gần bộ định tuyến hơn.',
            'Tắt hoặc vô hiệu hóa Bluetooth trên thiết bị của em.',
            'Khởi động lại (Reset) bộ chuyển đổi không dây (Wireless Adapter) trên thiết bị của em.'
          ],
          correctAnswer: 3,
          hint: 'Vì chỉ mình em gặp sự cố (không phải cả nhà), lỗi có khả năng nằm ở chính thiết bị của em.',
          explain: 'Vì chỉ thiết bị của em gặp sự cố, việc reset bộ chuyển đổi không dây trên chính thiết bị đó là bước hợp lý để thử trước tiên.'
        },

        /* Slide 6 (Trang 6 / 19) */
        {
          type: 'info',
          topic: 'Phần 2 · Sự cố thường gặp',
          title: 'Máy in không hoạt động',
          content: 'Khi máy in không hoạt động, em có thể thử:',
          imageUrl: null,
          things: [
            { icon: '🔌', name: 'Kiểm tra dây cáp/kết nối máy in', en: 'Đảm bảo dây nối chắc chắn' },
            { icon: '🔋', name: 'Kiểm tra kết nối nguồn điện', en: 'Máy in có đang được cấp điện không' },
            { icon: '⚠️', name: 'Kiểm tra lỗi trên bảng điều khiển', en: 'Xem đèn báo lỗi trên máy in' }
          ]
        },

        /* Slide 7 (Trang 7 / 19) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Máy in của em ngừng in, em nên làm gì trước tiên để giải quyết vấn đề này?',
          options: [
            'Thay đổi trình điều khiển máy in.',
            'Dọn sạch hàng chờ máy in.',
            'Kiểm tra dây cáp hoặc kết nối của máy in.',
            'Khởi động lại máy tính.'
          ],
          correctAnswer: 2,
          hint: 'Nguyên nhân đơn giản và phổ biến nhất là dây kết nối bị lỏng hoặc chưa cắm đúng.',
          explain: 'Kiểm tra dây cáp/kết nối là bước cơ bản và đơn giản nhất nên thử trước, trước khi tính đến các cách phức tạp hơn.'
        },

        /* Slide 8 (Trang 8 / 19) */
        {
          type: 'info',
          topic: 'Phần 2 · Sự cố thường gặp',
          title: 'Thiết bị âm thanh không hoạt động',
          content: 'Khi thiết bị âm thanh không hoạt động, em có thể thử:',
          imageUrl: null,
          things: [
            { icon: '🔇', name: 'Kiểm tra loa có bị tắt tiếng (Mute)', en: 'Xem biểu tượng loa có gạch chéo không' },
            { icon: '🔊', name: 'Kiểm tra nút điều khiển âm lượng', en: 'Đảm bảo âm lượng không để mức 0' },
            { icon: '🎧', name: 'Kiểm tra dây cắm / tai nghe', en: 'Đảm bảo cắm đúng chỗ, đúng cổng' }
          ]
        },

        /* Slide 9 (Trang 9 / 19) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, bước khắc phục sự cố cơ bản cần thử trên thiết bị âm thanh không hoạt động là gì?',
          options: [
            'Kiểm tra các điều khiển âm lượng',
            'Thay thế thiết bị',
            'Điều chỉnh độ sáng màn hình',
            'Cài đặt một Card âm thanh mới'
          ],
          correctAnswer: 0,
          hint: 'Đây là bước đơn giản nhất, không cần công cụ hay linh kiện gì thêm.',
          explain: 'Kiểm tra các điều khiển âm lượng (mute, volume, dây cắm) là bước cơ bản nên thử trước, trước khi nghĩ đến thay thiết bị hay lắp linh kiện mới.'
        },

        /* Slide 10 (Trang 10 / 19) */
        {
          type: 'info',
          topic: 'Phần 2 · Quy trình chung',
          title: '8 bước khắc phục sự cố cơ bản',
          content: 'Khi gặp bất kỳ sự cố công nghệ nào, em có thể theo quy trình chung sau:',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Xác định vấn đề', en: '' },
            { icon: '2️⃣', name: 'Khởi động hoặc làm mới', en: '' },
            { icon: '3️⃣', name: 'Kiểm tra các kết nối', en: '' },
            { icon: '4️⃣', name: 'Tham khảo thông tin trên Internet', en: '' },
            { icon: '5️⃣', name: 'Đóng chương trình không cần thiết', en: '' },
            { icon: '6️⃣', name: 'Dọn dẹp ổ đĩa cứng', en: '' },
            { icon: '7️⃣', name: 'Cập nhật chương trình phần mềm', en: '' },
            { icon: '8️⃣', name: 'Chạy chương trình chống Virus', en: '' }
          ]
        },

        /* Slide 11 (Trang 11 / 19) */
        {
          type: 'quiz_dropdown',
          topic: 'Câu hỏi ôn tập',
          question: 'Em hãy chọn Có nếu là tùy chọn để khắc phục sự cố cơ bản trong công nghệ và chọn Không nếu không phải: Khởi động lại thiết bị. ___ Ngắt kết nối nguồn điện khỏi tòa nhà chính. ___ Làm mới hoặc tải lại (Refresh/Reload) trình duyệt Web của em. ___ Kiểm tra xem tất cả dây cáp đã được kết nối đúng cách chưa. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 0 }
          ],
          hint: 'Ngắt điện cả tòa nhà là việc quá lớn và nguy hiểm — không phải cách khắc phục sự cố thiết bị cá nhân.',
          explain: 'Khởi động lại thiết bị, làm mới trình duyệt, và kiểm tra dây cáp đều là các bước khắc phục sự cố cơ bản, an toàn (Có). Ngắt kết nối nguồn điện khỏi cả tòa nhà không phải là cách khắc phục hợp lý và có thể nguy hiểm (Không).'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Sử dụng AI để gợi ý kiểm tra lỗi đơn giản
       (mật khẩu: SC03)
       ============================================================ */
    {
      id: 's3',
      title: 'Sử dụng AI để gợi ý kiểm tra lỗi đơn giản',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 12 (Trang 12 / 19) */
        {
          type: 'info',
          topic: 'Phần 3 · Dùng AI kiểm tra lỗi',
          title: 'Sử dụng AI để gợi ý kiểm tra lỗi đơn giản',
          content: '<b>AI có thể giúp em kiểm tra các lỗi công nghệ đơn giản.</b> Hãy luôn thực hiện các bước kiểm tra an toàn trước khi thao tác trên thiết bị.',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Mô tả rõ sự cố cho AI', en: '' },
            { icon: '2️⃣', name: 'Đọc và lựa chọn bước kiểm tra phù hợp', en: '' },
            { icon: '3️⃣', name: 'Thực hiện từng bước đơn giản', en: '' },
            { icon: '4️⃣', name: 'Kiểm tra lại kết quả', en: '' },
            { icon: '5️⃣', name: 'Không làm theo hướng dẫn phức tạp nếu chưa hiểu rõ', en: 'Nhờ người lớn hỗ trợ khi cần' }
          ]
        },

        /* Slide 13 (Trang 13 / 19) — slide hoàn thành RIÊNG cho bài học
           chính (3 phần lý thuyết + luyện tập), tách biệt với slide hoàn
           thành của phần Ôn tập ở cuối bài. scoreSections chỉ tính điểm
           trong phạm vi 3 phần chính (0,1,2), không cộng điểm Ôn tập vào. */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 8!',
          content: 'Em đã biết cách xử lí một số sự cố công nghệ phổ biến (máy tính chậm, mất Wi-fi, máy in không hoạt động, thiết bị âm thanh không hoạt động), quy trình khắc phục sự cố chung, và cách dùng AI để hỗ trợ kiểm tra lỗi đơn giản.',
          imageUrl: null,
          remember: 'Muốn ôn lại toàn bộ câu hỏi của bài, bấm "Tiếp theo" để sang phần <b>Ôn tập</b> ngay sau đây.'
        }
      ]
    },

    /* ============================================================
       PHẦN 4 — Ôn tập (mật khẩu: SC04)
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 3 phần
       trên để học sinh luyện lại. Đáp án làm ở đây độc lập hoàn
       toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's4',
      title: 'Ôn tập',
      password: PASSWORDS.s4,
      slides: [
        /* Slide 14 (Trang 14 / 19) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em không kết nối được với Internet ở nhà mình, không ai khác trong nhà gặp vấn đề này. Em nên làm gì trước tiên để khắc phục?',
          options: [
            'Thay Pin cho thiết bị của em.',
            'Di chuyển đến gần bộ định tuyến hơn.',
            'Tắt hoặc vô hiệu hóa Bluetooth trên thiết bị của em.',
            'Khởi động lại (Reset) bộ chuyển đổi không dây (Wireless Adapter) trên thiết bị của em.'
          ],
          correctAnswer: 3,
          hint: 'Vì chỉ mình em gặp sự cố (không phải cả nhà), lỗi có khả năng nằm ở chính thiết bị của em.',
          explain: 'Vì chỉ thiết bị của em gặp sự cố, việc reset bộ chuyển đổi không dây trên chính thiết bị đó là bước hợp lý để thử trước tiên.'
        },

        /* Slide 15 (Trang 15 / 19) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Máy tính của em bị chậm. Em nên làm gì trước tiên?',
          options: [
            'Cập nhật hệ điều hành.',
            'Nhấp chuột liên tục.',
            'Rút phích cắm máy tính.',
            'Đóng các ứng dụng hoặc cửa sổ không sử dụng.'
          ],
          correctAnswer: 3,
          hint: 'Đây là bước đơn giản, ít rủi ro nhất và nên thử trước tiên.',
          explain: 'Đóng bớt các ứng dụng/cửa sổ không dùng tới giúp giải phóng tài nguyên máy tính ngay lập tức, nên đây là việc nên làm trước tiên.'
        },

        /* Slide 16 (Trang 16 / 19) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Máy in của em ngừng in, em nên làm gì trước tiên để giải quyết vấn đề này?',
          options: [
            'Thay đổi trình điều khiển máy in.',
            'Dọn sạch hàng chờ máy in.',
            'Kiểm tra dây cáp hoặc kết nối của máy in.',
            'Khởi động lại máy tính.'
          ],
          correctAnswer: 2,
          hint: 'Nguyên nhân đơn giản và phổ biến nhất là dây kết nối bị lỏng hoặc chưa cắm đúng.',
          explain: 'Kiểm tra dây cáp/kết nối là bước cơ bản và đơn giản nhất nên thử trước, trước khi tính đến các cách phức tạp hơn.'
        },

        /* Slide 17 (Trang 17 / 19) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy chọn Có nếu là tùy chọn để khắc phục sự cố cơ bản trong công nghệ và chọn Không nếu không phải: Khởi động lại thiết bị. ___ Ngắt kết nối nguồn điện khỏi tòa nhà chính. ___ Làm mới hoặc tải lại (Refresh/Reload) trình duyệt Web của em. ___ Kiểm tra xem tất cả dây cáp đã được kết nối đúng cách chưa. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 0 }
          ],
          hint: 'Ngắt điện cả tòa nhà là việc quá lớn và nguy hiểm — không phải cách khắc phục sự cố thiết bị cá nhân.',
          explain: 'Khởi động lại thiết bị, làm mới trình duyệt, và kiểm tra dây cáp đều là các bước khắc phục sự cố cơ bản, an toàn (Có). Ngắt kết nối nguồn điện khỏi cả tòa nhà không phải là cách khắc phục hợp lý và có thể nguy hiểm (Không).'
        },

        /* Slide 18 (Trang 18 / 19) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, bước khắc phục sự cố cơ bản cần thử trên thiết bị âm thanh không hoạt động là gì?',
          options: [
            'Kiểm tra các điều khiển âm lượng',
            'Thay thế thiết bị',
            'Điều chỉnh độ sáng màn hình',
            'Cài đặt một Card âm thanh mới'
          ],
          correctAnswer: 0,
          hint: 'Đây là bước đơn giản nhất, không cần công cụ hay linh kiện gì thêm.',
          explain: 'Kiểm tra các điều khiển âm lượng (mute, volume, dây cắm) là bước cơ bản nên thử trước, trước khi nghĩ đến thay thiết bị hay lắp linh kiện mới.'
        },

        /* Slide 19 (Trang 19 / 19) — slide hoàn thành RIÊNG của phần Ôn tập.
           resetScope:'section' báo cho app.js biết: nút ở đây chỉ làm lại
           5 câu của phần Ôn tập (giữ nguyên tiến trình 3 phần trước), và
           điểm số hiển thị cũng chỉ tính trong phạm vi phần này. */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 8!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút "Làm lại phần này" — các đáp án của 3 phần học trước sẽ không bị ảnh hưởng.',
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
   nên khai báo scoreSections:[0,1,2] (liệt kê đúng chỉ số các phần
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