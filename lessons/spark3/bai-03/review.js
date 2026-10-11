/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 3 — Máy học
   (gom các câu hỏi của bai-03.js; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'l3-bai3-on-tap',
  icon:  '🤖',
  title: 'Ôn tập Bài 3 — Máy học',

  sections: [
    {
      id: 's1',
      title: 'Ôn tập',
      slides: [
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
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
          type: 'quiz_multiple',
          topic: 'Ôn tập',
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
        },
        {
          type: 'quiz_dragdrop',
          topic: 'Ôn tập',
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
          topic: 'Ôn tập',
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
          topic: 'Ôn tập',
          question: 'Nếu dữ liệu huấn luyện quá ít hoặc chỉ đại diện cho một nhóm nhỏ thì kết quả của AI có thể ___ . Vì vậy trước khi dùng kết quả của AI, em nên ___ .',
          blanks: [
            { options: ['chính xác hơn', 'sai hoặc không công bằng', 'chạy nhanh hơn'],      correctAnswer: 1 },
            { options: ['tin ngay lập tức', 'kiểm tra lại thông tin', 'gửi cho cả lớp'],     correctAnswer: 1 }
          ],
          hint: 'Học ít thì biết ít. Và điều gì máy nói ra cũng nên xem lại đã.',
          explain: 'Dữ liệu thiếu thì AI dễ trả lời sai hoặc thiên lệch, nên em luôn kiểm tra lại trước khi dùng.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
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
          topic: 'Ôn tập',
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
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 3!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
    ]
    }
  ]
};
