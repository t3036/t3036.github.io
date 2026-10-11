/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 8 — Xử lí sự cố công nghệ
   (tách từ phần Ôn tập của bai-08.js; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'bai8-suco-on-tap',
  icon:  '🛠️',
  title: 'Ôn tập Bài 8 — Xử lí sự cố công nghệ',

  sections: [
    /* ============================================================
       PHẦN 4 — Ôn tập
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 3 phần
       trên để học sinh luyện lại. Đáp án làm ở đây độc lập hoàn
       toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's4',
      title: 'Ôn tập',
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

        /* Slide 19 — slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 8!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};
