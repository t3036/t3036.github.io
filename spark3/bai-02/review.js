/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 2 — Lưu trữ thông tin
   (gom các câu hỏi của bai-02.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s1: ''   // Ôn tập
};

const LESSON = {
  id:    'l3-bai2-on-tap',
  icon:  '💾',
  title: 'Ôn tập Bài 2 — Lưu trữ thông tin',

  sections: [
    {
      id: 's1',
      title: 'Ôn tập',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, USB Drive dùng để làm gì?',
          options: [
            'Chụp ảnh',
            'Gửi và nhận tin nhắn SMS',
            'Chơi Game',
            'Lưu trữ và truyền dữ liệu'
          ],
          correctAnswer: 3,
          hint: 'Em hãy nhớ lại ba tính năng của USB vừa học ở trang trước.',
          explain: 'USB dùng để lưu trữ dữ liệu và chép dữ liệu qua lại giữa các máy tính.'
        },
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Đâu là tính năng của USB?',
          options: [
            'Có thể mang theo',
            'Không gian lưu trữ',
            'Truyền tải tập tin',
            'Kết nối không dây'
          ],
          correctAnswers: [0, 1, 2],
          hint: 'Có một tính năng không đúng. Em hãy nghĩ xem USB có dùng được khi chưa cắm vào máy không.',
          explain: 'USB mang theo được, có không gian lưu trữ và truyền tải được tập tin. USB <b>không</b> kết nối không dây.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Tùy chọn nào dưới đây mô tả đúng về USB Drive?',
          options: [
            'Một không gian lưu trữ trên một ổ cứng.',
            'Một thiết bị nhớ hoạt động trên đám mây.',
            'Một thiết bị lưu trữ dạng cắm.',
            'Một cơ sở dữ liệu lưu trữ các tập tin trực tuyến.'
          ],
          correctAnswer: 2,
          hint: 'USB phải cắm vào cổng của máy tính thì mới dùng được.',
          explain: 'USB là thiết bị lưu trữ dạng cắm, mang theo được và không cần Internet.'
        },
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Nối mỗi thiết bị lưu trữ với mô tả đúng của nó.',
          pairs: [
            { icon: '🔌', left: 'Ổ USB',              right: 'Cắm ngoài, mang theo để chép tệp' },
            { icon: '💽', left: 'Ổ đĩa cứng (HDD)',   right: 'Lưu dữ liệu lâu dài trong máy tính' },
            { icon: '⚡', left: 'Ổ đĩa thể rắn (SSD)', right: 'Nhanh hơn, dùng thay ổ cứng truyền thống' }
          ],
          hint: 'Thiết bị nào nằm bên trong máy, thiết bị nào cắm từ bên ngoài vào?',
          explain: 'USB cắm ngoài, HDD nằm trong máy, SSD là bản thay thế nhanh hơn cho HDD.'
        },
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Ổ đĩa cứng HDD cất dữ liệu ___ , còn lưu trữ đám mây cất dữ liệu ___ .',
          blanks: [
            { options: ['bên trong máy tính', 'trong cổng HDMI', 'trên một tờ giấy'], correctAnswer: 0 },
            { options: ['trong thùng máy', 'trên Internet', 'trên màn hình'],         correctAnswer: 1 }
          ],
          hint: 'Một nơi em cầm được bằng tay, một nơi phải có mạng mới tới được.',
          explain: 'HDD nằm ngay trong máy tính, còn dữ liệu trên đám mây nằm ở máy chủ và đi qua Internet.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, lợi ích của việc lưu trữ đám mây là gì?',
          options: [
            'Thông tin chỉ có thể được truy cập bởi một thiết bị tại một thời điểm.',
            'Bản in trên giấy (Physical Copies) của tài liệu được lưu trữ.',
            'Dữ liệu được tự động đồng bộ hóa trên tất cả các thiết bị.',
            'Bất kì ai cũng có thể truy cập tập tin mà không cần xin phép.'
          ],
          correctAnswer: 2,
          hint: 'Em hãy xem lại ba lợi ích ở trang trước. Có đáp án nói ngược lại với chúng.',
          explain: 'Dữ liệu trên đám mây tự đồng bộ nên em sửa ở máy này thì máy kia cũng thấy bản mới.'
        },
        {
          type: 'quiz_dragdrop',
          topic: 'Ôn tập',
          question: 'Kéo loại lưu trữ phù hợp vào từng tình huống.',
          zones: [
            { label: 'Em muốn sao chép hình ảnh giữa hai máy tính mà không cần kết nối mạng.', item: 'USB' },
            { label: 'Em chỉ muốn lưu trữ dữ liệu ngay trên máy tính xách tay của mình.',      item: 'Ổ cứng (Hard Drive)' },
            { label: 'Em muốn dữ liệu được sao lưu an toàn bởi một công ty khác.',             item: 'Lưu trữ đám mây (Cloud Storage)' }
          ],
          hint: 'Tình huống nào nhắc tới "không cần mạng" thì chắc chắn không phải đám mây.',
          explain: 'Chép giữa hai máy không mạng thì dùng USB, lưu ngay trên máy thì dùng ổ cứng, gửi cho công ty khác giữ hộ thì dùng đám mây.'
        },
        {
          type: 'quiz_hotspot',
          topic: 'Ôn tập',
          question: 'Hôm nay lớp em mất Wi-Fi. Em hãy bấm vào những nơi vẫn cất được dữ liệu.',
          imageUrl: null,
          spots: [
            { label: '☁️ Google Drive trên Internet', x: 24, y: 3,  w: 52, h: 21, correct: false },
            { label: '💽 Ổ đĩa cứng trong máy tính',  x: 6,  y: 37, w: 41, h: 26, correct: true  },
            { label: '🔌 USB cắm ở cạnh máy',         x: 53, y: 37, w: 41, h: 26, correct: true  },
            { label: '🖨️ Máy in để bàn',              x: 24, y: 74, w: 52, h: 21, correct: false }
          ],
          hint: 'Nơi nào cần Internet thì hôm nay không tới được. Còn máy in thì không cất dữ liệu.',
          explain: 'Ổ đĩa cứng và USB giữ dữ liệu ngay trên thiết bị nên không cần Internet vẫn dùng được.'
        },
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 2!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
    ]
    }
  ]
};
