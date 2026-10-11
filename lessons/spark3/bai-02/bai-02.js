/* ============================================================
   DỮ LIỆU BÀI HỌC — Bài 2 — Lưu trữ thông tin
   (chuyển sang cấu trúc LESSON.sections dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s1: '',  // Phần 1 — Thiết bị lưu trữ thông dụng
  s2: '',  // Phần 2 — Điện toán đám mây
  s3: ''   // Phần 3 — Lưu trữ đám mây
};

const LESSON = {
  id:    'l3-bai2',
  icon:  '💾',
  title: 'Bài 2 — Lưu trữ thông tin',

  sections: [
    {
      id: 's1',
      title: 'Thiết bị lưu trữ thông dụng',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'info',
          topic: 'Khởi động',
          title: 'Nếu thiết bị hỏng, dữ liệu của em có mất không?',
          content: 'Ảnh, bài tập, bài hát, video em để trong máy tính đều là <b>dữ liệu</b>. Nếu máy hỏng mà em chưa cất dữ liệu ở nơi nào khác thì rất dễ mất. Bài học này giúp em biết cất dữ liệu ở đâu cho an toàn.',
          imageUrl: null,
          things: [
            { icon: '💾', name: 'Thiết bị lưu trữ thông dụng', en: 'Phần 1' },
            { icon: '☁️', name: 'Điện toán đám mây',           en: 'Phần 2' },
            { icon: '🔄', name: 'Lưu trữ đám mây và lợi ích',   en: 'Phần 3' }
          ],
          remember: ''
        },
        {
          type: 'info',
          topic: 'Phần 1 · Thiết bị lưu trữ thông dụng',
          title: 'Ổ USB (USB Flash Drive)',
          content: '<b>USB flash drive</b> (USB — Universal Serial Bus) là thiết bị lưu trữ dữ liệu di động, nối với máy tính qua cổng USB.',
          imageUrl: null,
          things: [
            { icon: '🎒', name: 'Di động',            en: 'Bỏ túi mang theo bên mình' },
            { icon: '🔌', name: 'Lưu trữ dạng cắm',   en: 'Cắm vào là dùng được ngay' },
            { icon: '📤', name: 'Truyền tải tập tin', en: 'Chép dữ liệu giữa các máy' }
          ],
          remember: 'USB <b>không</b> kết nối không dây. Muốn dùng, em phải cắm nó vào cổng USB của máy.'
        },
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
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
          topic: 'Vận dụng',
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
          type: 'info',
          topic: 'Phần 1 · Thiết bị lưu trữ thông dụng',
          title: 'Ổ đĩa cứng và ổ đĩa thể rắn',
          content: '<b>Ổ đĩa cứng</b> (HDD — Hard Disk Drive) lưu dữ liệu cố định lâu dài bên trong máy tính, giữ được dữ liệu ngay cả khi đã tắt máy. <b>Ổ đĩa thể rắn</b> (SSD — Solid State Drive) dùng thay cho ổ cứng truyền thống, chạy nhanh hơn và cũng có loại gắn ngoài giống USB.',
          imageUrl: null,
          things: [
            { icon: '🔌', name: 'Ổ USB',          en: 'USB Flash Drive · cắm ngoài' },
            { icon: '💽', name: 'Ổ đĩa cứng',     en: 'HDD · nằm trong máy tính' },
            { icon: '⚡', name: 'Ổ đĩa thể rắn',  en: 'SSD · nhanh, bền, chạy êm' }
          ],
          remember: 'Cả ba thiết bị này đều lưu được dữ liệu mà <b>không cần Internet</b>.'
        },
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
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
          topic: 'Vận dụng',
          question: 'Nối mỗi thiết bị lưu trữ với mô tả đúng của nó.',
          pairs: [
            { icon: '🔌', left: 'Ổ USB',              right: 'Cắm ngoài, mang theo để chép tệp' },
            { icon: '💽', left: 'Ổ đĩa cứng (HDD)',   right: 'Lưu dữ liệu lâu dài trong máy tính' },
            { icon: '⚡', left: 'Ổ đĩa thể rắn (SSD)', right: 'Nhanh hơn, dùng thay ổ cứng truyền thống' }
          ],
          hint: 'Thiết bị nào nằm bên trong máy, thiết bị nào cắm từ bên ngoài vào?',
          explain: 'USB cắm ngoài, HDD nằm trong máy, SSD là bản thay thế nhanh hơn cho HDD.'
        }
      ]
    },
    {
      id: 's2',
      title: 'Điện toán đám mây',
      password: PASSWORDS.s2,
      slides: [
        {
          type: 'info',
          topic: 'Phần 2 · Điện toán đám mây',
          title: 'Điện toán đám mây là gì?',
          content: '<b>Điện toán</b> (Computing) là việc dùng máy tính và thiết bị điện tử để xử lí thông tin: tính toán, lưu trữ, tìm kiếm, xem video trực tuyến... <b>Điện toán đám mây</b> (Cloud Computing) là dịch vụ cho phép em lưu trữ, xử lí và truy cập dữ liệu <b>thông qua Internet</b>.',
          imageUrl: null,
          things: [
            { icon: '💻', name: 'Máy tính của em', en: 'Nơi em ngồi làm việc' },
            { icon: '🌐', name: 'Internet',        en: 'Đường truyền dữ liệu đi và về' },
            { icon: '☁️', name: 'Máy chủ đám mây', en: 'Nơi cất dữ liệu ở rất xa' }
          ],
          remember: 'Không có Internet thì em <b>không</b> mở được dữ liệu đang để trên đám mây.'
        },
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Ổ đĩa cứng HDD cất dữ liệu ___ , còn lưu trữ đám mây cất dữ liệu ___ .',
          blanks: [
            { options: ['bên trong máy tính', 'trong cổng HDMI', 'trên một tờ giấy'], correctAnswer: 0 },
            { options: ['trong thùng máy', 'trên Internet', 'trên màn hình'],         correctAnswer: 1 }
          ],
          hint: 'Một nơi em cầm được bằng tay, một nơi phải có mạng mới tới được.',
          explain: 'HDD nằm ngay trong máy tính, còn dữ liệu trên đám mây nằm ở máy chủ và đi qua Internet.'
        }
      ]
    },
    {
      id: 's3',
      title: 'Lưu trữ đám mây',
      password: PASSWORDS.s3,
      slides: [
        {
          type: 'info',
          topic: 'Phần 3 · Lưu trữ đám mây',
          title: 'Lưu trữ đám mây (Cloud Storage)',
          content: '<b>Lưu trữ đám mây</b> là một phần quan trọng của điện toán đám mây, cho phép em cất dữ liệu và mở lại chúng ở mọi lúc mọi nơi khi có kết nối Internet.',
          imageUrl: null,
          things: [
            { icon: '🔄', name: 'Tự động đồng bộ',    en: 'Dữ liệu giống nhau trên mọi thiết bị' },
            { icon: '👥', name: 'Nhiều máy cùng xem', en: 'Nhiều thiết bị mở cùng một lúc' },
            { icon: '🔒', name: 'Có kiểm soát',       en: 'Chỉ ai được cấp quyền mới vào được' }
          ],
          remember: 'Vài dịch vụ quen thuộc: <b>Google Drive</b> của Google, <b>Dropbox</b> của Dropbox, <b>OneDrive</b> của Microsoft.'
        },
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
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
          topic: 'Vận dụng',
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
          topic: 'Vận dụng',
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
          topic: 'Đọc thêm',
          title: 'AI trong lưu trữ đám mây',
          content: 'AI có thể hỗ trợ em tìm kiếm, sắp xếp và tóm tắt dữ liệu đang để trên đám mây.',
          imageUrl: null,
          things: [
            { icon: '🔍', name: 'Tìm kiếm thông minh', en: 'Tìm ảnh theo nội dung, tìm tệp nhanh hơn' },
            { icon: '🗂️', name: 'Sắp xếp và gợi ý',    en: 'Tự phân loại tệp, gợi ý tệp liên quan' },
            { icon: '📝', name: 'Tóm tắt nội dung',    en: 'Rút gọn văn bản, trích ra ý chính' }
          ],
          remember: 'Em <b>không</b> chia sẻ mật khẩu, thông tin cá nhân hay tài liệu chưa được phép công khai cho AI, và luôn kiểm tra lại kết quả AI đưa ra.'
        },
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2],
          topic: 'Hoàn thành',
          title: 'Em đã học xong bài Lưu trữ thông tin!',
          content: 'Bây giờ em phân biệt được ổ USB, ổ đĩa cứng, ổ đĩa thể rắn và lưu trữ đám mây, đồng thời biết chọn nơi cất dữ liệu hợp với từng tình huống.',
          imageUrl: null,
          remember: 'Cần sao lưu nhanh ở sân trường khi không có Wi-Fi thì dùng <b>USB</b>. Muốn chia sẻ ảnh cho cả lớp cùng xem thì dùng <b>dịch vụ đám mây</b> như Google Drive.'
        }
      ]
    }
  ]
};
