window.LESSON = {
  id: 'b22', no: 22, title: 'Quyền công dân kĩ thuật số', topic: 'Công dân số', icon: '🛡️', acc: '#2f6bff', accD: '#1f4fcc',
  intro: 'Cùng mở từng ổ khóa để biết cách giao tiếp văn minh và an toàn trên mạng nhé!',
  steps: [
    { id: 'i0', kind: 'info', icon: '💡', title: 'Khởi động: Em hãy suy nghĩ và trả lời',
      img: 'img/khoi-dong.png', alt: 'Ba câu hỏi khởi động',
      think: [
        ['Ở ngoài đời thực, em cần cư xử như thế nào để được gọi là người lịch sự?', 'Chào hỏi, nói lời cảm ơn, xếp hàng, giúp đỡ mọi người. Lịch sự là tôn trọng người khác!'],
        ['Trên Internet, em nghĩ cần cư xử thế nào? Có cần lịch sự như ngoài đời không?', 'Có! Trên Internet cũng cần lịch sự, tôn trọng và tử tế với mọi người.'],
        ['Theo em, “công dân số” nghĩa là gì?', 'Là người dùng công nghệ một cách thông minh, an toàn, có trách nhiệm và góp phần xây dựng môi trường mạng lành mạnh.']
      ] },

    { id: 'i1', kind: 'info', icon: '😊', title: '01 · Giao tiếp phù hợp',
      lead: '<span class="en">Giao tiếp phù hợp (Appropriate Communication)</span> là những hành vi cư xử an toàn, lịch sự và tôn trọng người khác khi dùng thiết bị kĩ thuật số và hoạt động trực tuyến.',
      pts: [['💬', 'Sử dụng lời nói lịch sự, tôn trọng.'], ['✅', 'Chia sẻ thông tin đúng, rõ ràng.'], ['🔐', 'Giữ bí mật thông tin cá nhân: họ tên đầy đủ, ngày sinh, mật khẩu, địa chỉ, …']] },

    { id: 'i2', kind: 'info', icon: '🚫', title: '02 · Giao tiếp tiêu cực',
      lead: '<span class="en">Giao tiếp tiêu cực (Negative Communication)</span> là những hành vi vi phạm pháp luật, gây hại hoặc có tác động xấu đến người khác khi dùng thiết bị kĩ thuật số và hoạt động trực tuyến.',
      pts: [['🕵️', 'Chia sẻ thông tin cá nhân cho người lạ.'], ['💥', 'Xâm nhập, phá hoại máy tính của người khác.'], ['📀', 'Sử dụng sản phẩm vi phạm bản quyền, …'], ['📢', 'Tung tin sai sự thật.'], ['😢', 'Bắt nạt trực tuyến.']] },

    { id: 'p1', kind: 'q', tag: 'prac', icon: '🧩', title: 'Thực hành: Phù hợp hay không phù hợp?', type: 'sort',
      text: 'Đọc từng thẻ tình huống rồi chọn hộp đúng cho thẻ đó.',
      buckets: ['😊 Giao tiếp phù hợp', '🚫 Giao tiếp tiêu cực'],
      cards: [
        { ic: '🙏', t: 'Em nói “Cảm ơn bạn!” khi bạn giúp em trong nhóm chat lớp.', b: 0, why: 'Lời nói lịch sự, tôn trọng là giao tiếp phù hợp.' },
        { ic: '🏠', t: 'Người lạ hỏi địa chỉ nhà, em gửi ngay cho họ.', b: 1, why: 'Không chia sẻ thông tin cá nhân cho người lạ.' },
        { ic: '📰', t: 'Em chỉ chia sẻ tin tức đúng sự thật và rõ ràng.', b: 0, why: 'Chia sẻ thông tin đúng, rõ ràng là phù hợp.' },
        { ic: '📢', t: 'Em bịa ra một tin xấu về bạn rồi đăng lên mạng.', b: 1, why: 'Tung tin sai sự thật là giao tiếp tiêu cực.' },
        { ic: '🔑', t: 'Em giữ bí mật mật khẩu, không nói cho ai.', b: 0, why: 'Giữ bí mật thông tin cá nhân là rất tốt.' },
        { ic: '📀', t: 'Em tải game bị sao chép lậu về chơi.', b: 1, why: 'Dùng sản phẩm vi phạm bản quyền là không phù hợp.' }
      ] },

    { id: 'i3', kind: 'info', icon: '🕶️', title: '03 · Truy cập trái phép (Hack)',
      lead: '<span class="en">Truy cập trái phép (Hack)</span> là xâm nhập trái phép vào thiết bị, hệ thống máy tính hoặc tài khoản của người khác để lấy cắp thông tin, thay đổi dữ liệu hoặc làm hỏng hệ thống.',
      pts: [['💻', 'Ví dụ: Dùng phần mềm để vào máy tính người khác khi chưa được phép.'], ['🦠', 'Ví dụ: Gửi email chứa virus làm hỏng máy tính người khác.']],
      img: 'img/hack.png', alt: 'Hành vi là Hack và không phải Hack' },

    { id: 'p2', kind: 'q', tag: 'prac', icon: '🕵️', title: 'Thực hành: Hack hay không phải Hack?', type: 'sort',
      text: 'Nhìn hành động của từng nhân vật rồi quyết định: đó có phải Hack không?',
      buckets: ['⚠️ Đây là Hack', '✅ Không phải Hack'],
      cards: [
        { ic: '👤', t: 'Dùng phần mềm để vào máy tính người khác khi chưa được phép.', b: 0, why: 'Vào máy người khác khi chưa cho phép là Hack.' },
        { ic: '📱', t: 'Tải ứng dụng hợp lệ từ kho ứng dụng chính thức.', b: 1, why: 'Đây là việc làm hợp pháp và an toàn.' },
        { ic: '🦠', t: 'Gửi email chứa virus để làm hỏng máy tính người khác.', b: 0, why: 'Cố ý làm hỏng máy người khác là Hack.' },
        { ic: '🧑‍💻', t: 'Lập trình tạo ứng dụng của riêng mình.', b: 1, why: 'Tự tạo ứng dụng của mình không xâm phạm ai.' },
        { ic: '🔓', t: 'Đoán hoặc dùng công cụ để lấy mật khẩu tài khoản của bạn.', b: 0, why: 'Lấy mật khẩu của người khác là Hack.' },
        { ic: '🎮', t: 'Chơi game trực tuyến với những người khác.', b: 1, why: 'Chơi game bình thường không phải Hack.' }
      ] },

    { id: 'q1', kind: 'q', icon: '❓', title: 'Câu 1 · Hack là gì?', type: 'single',
      text: 'Em hãy cho biết <b>Hack</b> là gì?',
      opts: ['Xâm nhập vào một hệ thống máy tính', 'Tải một ứng dụng đáng tin', 'Dùng máy tính công cộng, như ở thư viện', 'Chơi Game trực tuyến với những người khác'], ans: 0,
      hint: 'Hack là xâm nhập khi chưa được phép. Việc nào “đột nhập” vào hệ thống?',
      why: 'Hack là xâm nhập trái phép vào hệ thống máy tính.' },

    { id: 'q2', kind: 'q', icon: '❓', title: 'Câu 2 · Ví dụ về hành vi Hack', type: 'multi',
      text: 'Trong các tùy chọn sau, tùy chọn nào là ví dụ về hành vi <b>Hack</b>? (Chọn 2)',
      opts: ['Dùng một chương trình để truy cập vào máy tính của người khác mà chưa được cho phép.', 'Dùng Email gửi đi một loại Virus máy tính có khả năng làm hại máy tính của người khác', 'Hỏi xin mật khẩu của người khác', 'Dùng tài khoản chung để đăng nhập'], ans: [0, 1],
      hint: 'Tìm 2 việc cố ý xâm nhập hoặc làm hỏng máy tính người khác.',
      why: 'Vào máy người khác khi chưa được phép và gửi virus đều là Hack.' },

    { id: 'q3', kind: 'q', icon: '❓', title: 'Câu 3 · Đúng hay Sai về Hack', type: 'tf', labels: ['Đúng', 'Sai'],
      text: 'Với mỗi câu phát biểu về hành vi <b>Hack</b>, em hãy chọn Đúng hoặc Sai.',
      rows: [
        { t: 'Xâm nhập vào một hệ thống máy tính được coi là hành vi Hack', ans: 0 },
        { t: 'Lập trình để tạo ra một ứng dụng có thể tự động gửi tin nhắn cho bạn bè được coi là hành vi Hack', ans: 1 },
        { t: 'Tải trò chơi về máy tính của em được coi là hành vi Hack', ans: 1 }
      ],
      hint: 'Hack luôn là vào hệ thống của người khác khi chưa được phép.',
      why: 'Chỉ xâm nhập trái phép mới là Hack. Tự lập trình hay tải game hợp lệ thì không.' },

    { id: 'i4', kind: 'info', icon: '🤖', title: '04 · Giao tiếp phù hợp khi sử dụng AI',
      lead: 'Khi dùng <span class="en">AI</span>, em cũng là công dân số. Em cần giao tiếp văn minh và có trách nhiệm.',
      pts: [['💬', 'Đặt câu hỏi lịch sự, rõ ràng.'], ['🚫', 'Không yêu cầu AI tạo nội dung xúc phạm, hù dọa hoặc sai sự thật.'], ['🔒', 'Không dùng AI để xâm phạm thông tin riêng tư của người khác.'], ['📝', 'Không dùng kết quả AI để gian lận bài kiểm tra.'], ['🎓', 'Chỉ dùng AI cho mục đích học tập theo hướng dẫn của giáo viên.']],
      img: 'img/ai.png', alt: 'Giao tiếp phù hợp khi dùng AI' },

    { id: 'p3', kind: 'q', tag: 'prac', icon: '🧑‍🏫', title: 'Thực hành: Hỏi AI sao cho đúng?', type: 'sort',
      text: 'Em đang dùng trợ lý AI ở lớp. Cách dùng nào là đúng?',
      buckets: ['👍 Dùng AI đúng cách', '👎 Chưa đúng'],
      cards: [
        { ic: '📖', t: '“Bạn ơi, giải thích giúp mình bài này nhé!”', b: 0, why: 'Hỏi lịch sự, rõ ràng để học tập là đúng.' },
        { ic: '😡', t: 'Bảo AI viết lời chửi bạn cùng lớp.', b: 1, why: 'Không yêu cầu AI tạo nội dung xúc phạm.' },
        { ic: '✏️', t: 'Nhờ AI sửa lỗi chính tả bài văn của em.', b: 0, why: 'AI có thể giúp chỉnh sửa, em vẫn chịu trách nhiệm bài làm.' },
        { ic: '📝', t: 'Dùng kết quả AI để làm bài kiểm tra thay em.', b: 1, why: 'Gian lận bài kiểm tra là không trung thực.' },
        { ic: '🧑‍🏫', t: 'Chỉ dùng AI khi cô giáo hướng dẫn.', b: 0, why: 'Dùng AI theo hướng dẫn của giáo viên là tốt.' }
      ] },

    { id: 'e1', kind: 'q', tag: 'extra', icon: '⭐', title: 'Luyện thêm · Người lạ hỏi địa chỉ', type: 'single',
      text: 'Một người lạ nhắn tin hỏi <b>địa chỉ nhà</b> của em. Em nên làm gì?',
      opts: ['Gửi địa chỉ vì họ nói rất lịch sự', 'Không gửi và kể với người lớn', 'Gửi nửa địa chỉ thôi', 'Gửi cho họ số điện thoại của bố mẹ'], ans: 1,
      hint: 'Địa chỉ là thông tin cá nhân. Ai là người em có thể tin tưởng?',
      why: 'Không chia sẻ thông tin cá nhân cho người lạ, hãy báo người lớn.' }
  ]
};
