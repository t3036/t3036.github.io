/* ============================================================
   DỮ LIỆU BÀI HỌC — Bài 3 — Máy học
   (chuyển sang cấu trúc LESSON.sections dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s1: '',  // Phần 1 — Máy học
  s2: '',  // Phần 2 — Huấn luyện mô hình AI
  s3: ''   // Phần 3 — Khả năng tiếp cận công nghệ
};

const LESSON = {
  id:    'l3-bai3',
  icon:  '🤖',
  title: 'Bài 3 — Máy học',

  sections: [
    {
      id: 's1',
      title: 'Máy học',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'info',
          topic: 'Khởi động',
          title: 'Vì sao mỗi người lại nhận được gợi ý khác nhau?',
          content: 'Nam và Mai cùng mở một ứng dụng. Nam thấy video bóng đá, kĩ năng bóng rổ, giải tennis. Mai thấy hướng dẫn vẽ tranh, nhạc thiếu nhi, cách làm bánh. Ứng dụng đã <b>học</b> từ những gì mỗi bạn thường xem.',
          imageUrl: null,
          things: [
            { icon: '🤖', name: 'Máy học',                        en: 'Phần 1' },
            { icon: '🎓', name: 'Quá trình huấn luyện mô hình AI', en: 'Phần 2' },
            { icon: '♿', name: 'Khả năng tiếp cận công nghệ',     en: 'Phần 3' }
          ],
          remember: ''
        },
        {
          type: 'info',
          topic: 'Phần 1 · Máy học',
          title: 'Máy học là gì?',
          content: '<b>Máy học</b> (ML — Machine Learning) là một phần của trí tuệ nhân tạo (AI). Máy tính có khả năng <b>tự học</b> thông qua việc sử dụng dữ liệu có sẵn rồi tự suy luận để giải quyết nhu cầu của người dùng.',
          imageUrl: null,
          things: [
            { icon: '📚', name: 'Dữ liệu có sẵn', en: 'Thứ con người đưa cho máy học' },
            { icon: '🧠', name: 'Tự tìm quy luật', en: 'Máy rút ra quy luật từ dữ liệu' },
            { icon: '💡', name: 'Tự suy luận',     en: 'Đưa ra câu trả lời cho việc mới' }
          ],
          remember: 'Máy học không được lập trình sẵn từng câu trả lời. Nó tìm ra quy luật từ dữ liệu mà con người đưa vào.'
        },
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Máy học (Machine Learning) là gì?',
          options: [
            'Một loại máy in tự động dùng trong nhà máy.',
            'Một phần của trí tuệ nhân tạo, máy tính tự học từ dữ liệu.',
            'Một thiết bị dùng để lưu trữ dữ liệu.',
            'Một môn học ở trường về cách sửa máy tính.'
          ],
          correctAnswer: 1,
          hint: 'Trong tên gọi đã có chữ "học" rồi đó. Ai học và học từ cái gì?',
          explain: 'Máy học là một phần của AI: máy tính tự học từ dữ liệu có sẵn rồi tự suy luận.'
        },
        {
          type: 'info',
          topic: 'Phần 1 · Máy học',
          title: 'Máy học có ở quanh em',
          content: 'Nhiều thứ em gặp hằng ngày đều có máy học làm việc bên trong.',
          imageUrl: null,
          things: [
            { icon: '🚗', name: 'Xe thông minh',           en: 'Đánh giá môi trường lái và tình trạng người lái' },
            { icon: '🎵', name: 'Đề xuất nhạc và video',   en: 'Gợi ý bài hát, video em có thể thích' },
            { icon: '🦾', name: 'Tự động hóa robot',       en: 'Điều chỉnh quy trình sản xuất trong nhà máy' },
            { icon: '🔎', name: 'Tìm kiếm trên Web',       en: 'Trả về thông tin phù hợp nhất với yêu cầu' },
            { icon: '🏠', name: 'Nhà thông minh',          en: 'Smarthome · làm theo thói quen của gia đình' },
            { icon: '🎼', name: 'Hỗ trợ sáng tác',         en: 'Giúp nhạc sĩ tạo thêm giai điệu mới' }
          ],
          remember: 'Cùng một ứng dụng nhưng mỗi người xem một kiểu, nên máy học đề xuất cho mỗi người một danh sách khác nhau.'
        },
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Máy học đang giúp con người làm những việc nào sau đây?',
          options: [
            'Đề xuất bài hát và video hợp với sở thích của em.',
            'Giúp nhạc sĩ sáng tác thêm nhiều bài hát.',
            'Điều khiển robot trong quy trình sản xuất.',
            'Tự học giỏi mà không cần bất kì dữ liệu nào.'
          ],
          correctAnswers: [0, 1, 2],
          hint: 'Có một đáp án sai. Em hãy nhớ lại: máy học cần thứ gì thì mới học được?',
          explain: 'Máy học đề xuất nội dung, hỗ trợ sáng tác và điều khiển robot. Nhưng nó <b>luôn cần dữ liệu</b> thì mới học được.'
        }
      ]
    },
    {
      id: 's2',
      title: 'Huấn luyện mô hình AI',
      password: PASSWORDS.s2,
      slides: [
        {
          type: 'info',
          topic: 'Phần 2 · Huấn luyện mô hình AI',
          title: 'Năm bước huấn luyện một mô hình AI',
          content: 'Muốn AI phân biệt được ảnh mèo và ảnh chó, người ta phải dạy nó theo năm bước.',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Xác định vấn đề',        en: 'AI sẽ giải quyết việc gì' },
            { icon: '2️⃣', name: 'Thu thập dữ liệu',       en: 'Gom thật nhiều dữ liệu liên quan' },
            { icon: '3️⃣', name: 'Dạy máy học từ dữ liệu', en: 'AI tìm ra quy luật để nhận biết' },
            { icon: '4️⃣', name: 'Kiểm tra kết quả',       en: 'Thử với dữ liệu mới xem đúng hay sai' },
            { icon: '5️⃣', name: 'Cải tiến',               en: 'Bổ sung dữ liệu, huấn luyện lại AI' }
          ],
          remember: 'Nếu dữ liệu quá ít, không rõ ràng hoặc chỉ đại diện cho một nhóm nhỏ thì kết quả của AI có thể <b>sai hoặc không công bằng</b>.'
        },
        {
          type: 'quiz_dragdrop',
          topic: 'Vận dụng',
          question: 'Kéo tên từng bước vào đúng việc phải làm.',
          zones: [
            { label: 'Quyết định xem AI sẽ giải quyết vấn đề gì.',        item: 'Bước 1 · Xác định vấn đề' },
            { label: 'Gom thật nhiều ảnh mèo và ảnh chó.',                item: 'Bước 2 · Thu thập dữ liệu' },
            { label: 'AI tìm ra quy luật để phân biệt mèo với chó.',      item: 'Bước 3 · Dạy máy học' },
            { label: 'Đưa một tấm ảnh mới xem AI đoán đúng hay sai.',     item: 'Bước 4 · Kiểm tra kết quả' },
            { label: 'Bổ sung thêm dữ liệu rồi huấn luyện lại AI.',       item: 'Bước 5 · Cải tiến' }
          ],
          hint: 'Em hãy làm theo thứ tự thật tự nhiên: muốn dạy thì phải có dữ liệu trước đã.',
          explain: 'Năm bước đi theo đúng thứ tự: xác định vấn đề, thu thập dữ liệu, dạy máy học, kiểm tra rồi cải tiến.'
        },
        {
          type: 'quiz_hotspot',
          topic: 'Vận dụng',
          question: 'Đây là sơ đồ năm bước huấn luyện AI. Em hãy bấm vào bước mà AI học từ dữ liệu để tìm ra quy luật.',
          imageUrl: null,
          spots: [
            { label: '1 Xác định vấn đề',  x: 2,    y: 26, w: 18, h: 48, correct: false },
            { label: '2 Thu thập dữ liệu', x: 21.5, y: 26, w: 18, h: 48, correct: false },
            { label: '3 Dạy máy học',      x: 41,   y: 26, w: 18, h: 48, correct: true  },
            { label: '4 Kiểm tra kết quả', x: 60.5, y: 26, w: 18, h: 48, correct: false },
            { label: '5 Cải tiến',         x: 80,   y: 26, w: 18, h: 48, correct: false }
          ],
          hint: 'Bước này diễn ra sau khi đã gom đủ dữ liệu, và trước khi đem ảnh mới ra thử.',
          explain: 'Ở bước 3, AI học từ kho dữ liệu đã thu thập và tự tìm ra quy luật để nhận biết.'
        },
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Nếu dữ liệu huấn luyện quá ít hoặc chỉ đại diện cho một nhóm nhỏ thì kết quả của AI có thể ___ . Vì vậy trước khi dùng kết quả của AI, em nên ___ .',
          blanks: [
            { options: ['chính xác hơn', 'sai hoặc không công bằng', 'chạy nhanh hơn'],      correctAnswer: 1 },
            { options: ['tin ngay lập tức', 'kiểm tra lại thông tin', 'gửi cho cả lớp'],     correctAnswer: 1 }
          ],
          hint: 'Học ít thì biết ít. Và điều gì máy nói ra cũng nên xem lại đã.',
          explain: 'Dữ liệu thiếu thì AI dễ trả lời sai hoặc thiên lệch, nên em luôn kiểm tra lại trước khi dùng.'
        }
      ]
    },
    {
      id: 's3',
      title: 'Khả năng tiếp cận công nghệ',
      password: PASSWORDS.s3,
      slides: [
        {
          type: 'info',
          topic: 'Phần 3 · Khả năng tiếp cận công nghệ',
          title: 'Khả năng tiếp cận công nghệ (Accessibility)',
          content: '<b>Khả năng tiếp cận công nghệ</b> là mục tiêu tạo ra những sản phẩm công nghệ mà <b>tất cả mọi người</b>, kể cả người khuyết tật, đều sử dụng được.',
          imageUrl: null,
          things: [
            { icon: '⌨️', name: 'Bàn phím phím to',      en: 'Cho người khó cử động tay' },
            { icon: '🔊', name: 'Trình đọc màn hình',    en: 'Đọc chữ trên màn hình thành tiếng' },
            { icon: '💬', name: 'Phụ đề cho video',      en: 'Hiện lời nói thành chữ' }
          ],
          remember: 'Ví dụ trong sách: bàn phím được thiết kế kích thước và cách bố trí phím phù hợp với người có vấn đề về thị lực hoặc khó di chuyển tay.'
        },
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Tùy chọn nào là đúng khi nói về khả năng tiếp cận công nghệ?',
          options: [
            'Khả năng kết nối với mạng.',
            'Quá trình lưu trữ dữ liệu trên đám mây.',
            'Sự dễ dàng sử dụng và sẵn có của công nghệ dành cho người khuyết tật.',
            'Cách dữ liệu được gửi qua Internet.'
          ],
          correctAnswer: 2,
          hint: 'Từ khóa của phần này là "tất cả mọi người đều dùng được".',
          explain: 'Khả năng tiếp cận công nghệ nói về việc mọi người, kể cả người khuyết tật, đều dùng được sản phẩm công nghệ.'
        },
        {
          type: 'quiz_matching',
          topic: 'Vận dụng',
          question: 'Nối mỗi thiết kế với nhóm người mà nó giúp đỡ.',
          pairs: [
            { icon: '⌨️', left: 'Bàn phím có phím to, dễ bấm', right: 'Người khó cử động tay' },
            { icon: '🔊', left: 'Trình đọc màn hình',          right: 'Người khiếm thị' },
            { icon: '💬', left: 'Phụ đề cho video',            right: 'Người khiếm thính' }
          ],
          hint: 'Em hãy nghĩ xem mỗi thiết kế thay thế cho giác quan hoặc động tác nào.',
          explain: 'Mỗi thiết kế bù đắp cho một khó khăn riêng, nhờ vậy công nghệ không bỏ sót ai.'
        },
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2],
          topic: 'Hoàn thành',
          title: 'Em đã học xong bài Máy học!',
          content: 'Em đã biết máy học là gì, AI được huấn luyện qua năm bước ra sao, và vì sao công nghệ cần dùng được cho tất cả mọi người.',
          imageUrl: null,
          remember: 'AI học từ dữ liệu do con người đưa vào. Dữ liệu đầy đủ và rõ ràng thì kết quả mới đúng và công bằng.'
        }
      ]
    }
  ]
};
