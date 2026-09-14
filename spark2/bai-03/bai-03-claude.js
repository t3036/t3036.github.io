/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 3: THÔNG TIN ĐẦU VÀO VÀ THÔNG TIN ĐẦU RA
   ------------------------------------------------------------
   IC3 GS6 SPARK LEVEL 2 · Chủ đề: Căn bản về công nghệ
   File này CHỈ chứa dữ liệu (CONFIG + slidesData) cho Bài 3.
   Toàn bộ logic hiển thị / chấm điểm nằm trong app.js (dùng
   chung cho mọi bài). Cần nạp file này TRƯỚC app.js trong HTML.
   ============================================================ */


/* ============================================================
   0. THÔNG TIN BÀI HỌC (hiện ở thanh trên cùng)
   ============================================================ */
const CONFIG = {
  icon:  '💾',
  title: 'Bài 3 — Thông tin đầu vào và đầu ra'
};


/* ============================================================
   1. DỮ LIỆU BÀI HỌC
   ============================================================ */
const slidesData = [

  /* ---------- 1. Trang bìa ---------- */
  // {
  //   type: 'info',
  //   topic: 'IC3 GS6 SPARK · LEVEL 2',
  //   title: 'Bài 3: Thông tin đầu vào và thông tin đầu ra',
  //   content: 'Chủ đề: Căn bản về công nghệ. Trong bài học này, em sẽ tìm hiểu về thông tin đầu vào, thông tin đầu ra, bộ nhớ máy tính, thiết bị lưu trữ và đầu vào — đầu ra của các công cụ AI.',
  //   imageUrl: null,
  //   things: [],
  //   remember: ''
  // },

  /* ---------- 2. Divider · Khởi động ---------- */
  {
    type: 'info',
    topic: 'Khởi động',
    title: 'Khởi động',
    content: 'Trước khi vào bài học, em hãy cùng suy nghĩ về những tình huống quen thuộc dưới đây nhé!',
    imageUrl: null,
    things: [],
    remember: ''
  },

  /* ---------- 3. Khởi động: 3 câu hỏi suy nghĩ ---------- */
  {
    type: 'info',
    topic: 'Khởi động',
    title: 'Em hãy suy nghĩ và trả lời',
    content: 'Nào, các em hãy cùng tìm hiểu nhé!',
    imageUrl: null,
    things: [
      { icon: '⌨️', name: 'Bấm phím trên bàn phím', en: 'Đâu là thứ em đưa vào, đâu là kết quả nhận được?' },
      { icon: '📷', name: 'Chụp ảnh bằng điện thoại', en: 'Ảnh đó xuất phát từ đâu?' },
      { icon: '🤖', name: 'Hỏi chatbot AI một câu hỏi', en: 'Câu hỏi đó là gì và câu trả lời AI đưa ra là gì?' }
    ],
    remember: ''
  },

  /* ---------- 4. Nội dung bài học ---------- */
  {
    type: 'info',
    topic: 'Nội dung bài học',
    title: 'Nội dung bài học',
    content: 'Bài học gồm 5 phần chính:',
    imageUrl: null,
    things: [
      { icon: '01', name: 'Thông tin đầu vào', en: '' },
      { icon: '02', name: 'Thông tin đầu ra', en: '' },
      { icon: '03', name: 'Bộ nhớ máy tính', en: '' },
      { icon: '04', name: 'Thiết bị lưu trữ', en: '' },
      { icon: '05', name: 'Đầu vào và đầu ra của công cụ AI', en: '' }
    ],
    remember: ''
  },

  /* ---------- 5. Divider · Phần 01 ---------- */
  {
    type: 'info',
    topic: 'Phần 01',
    title: 'Thông tin đầu vào',
    content: '',
    imageUrl: null,
    things: [],
    remember: ''
  },

  /* ---------- 6. Thông tin đầu vào (Input) + ví dụ 1 ---------- */
  {
    type: 'info',
    topic: 'Thông tin đầu vào',
    title: 'Thông tin đầu vào là gì?',
    content: '<b>Thông tin đầu vào (Input)</b>: là thông tin mà em đưa vào máy tính.',
    imageUrl: null,
    things: [],
    remember: 'Ví dụ 1: Em nhập thông tin <b>1+1</b> vào máy tính để máy tính xử lí, thì <b>1+1</b> được gọi là thông tin đầu vào.'
  },

  /* ---------- 7. Luyện tập: Input là gì? ---------- */
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Em hãy cho biết, thông tin đầu vào (Input) là gì?',
    options: [
      'Là thông tin được đưa vào máy tính',
      'Là thông tin được đưa ra ngoài máy tính',
      'Là thông tin được lưu trữ trong máy tính',
      'Là thông tin được máy tính xử lí'
    ],
    correctAnswer: 0,
    hint: 'Input nghĩa là "đầu vào" — hãy nghĩ đến chiều đi của thông tin: vào hay ra khỏi máy tính?',
    explain: 'Thông tin đầu vào (Input) là thông tin được đưa vào máy tính để máy tính xử lí.'
  },

  /* ---------- 8. Thông tin đầu vào — ví dụ 2 ---------- */
  {
    type: 'info',
    topic: 'Thông tin đầu vào',
    title: 'Ví dụ khác về thông tin đầu vào',
    content: '<b>Thông tin đầu vào (Input)</b>: là thông tin mà em đưa vào máy tính.',
    imageUrl: null,
    things: [
      { icon: '📷', name: 'Chụp ảnh bằng máy ảnh', en: 'Ảnh đó là thông tin đầu vào' },
      { icon: '🎙️', name: 'Ghi âm bằng máy ghi âm', en: 'Âm thanh đó là thông tin đầu vào' }
    ],
    remember: ''
  },

  /* ---------- 9. Divider · Phần 02 ---------- */
  {
    type: 'info',
    topic: 'Phần 02',
    title: 'Thông tin đầu ra',
    content: '',
    imageUrl: null,
    things: [],
    remember: ''
  },

  /* ---------- 10. Thông tin đầu ra (Output) + ví dụ 1 ---------- */
  {
    type: 'info',
    topic: 'Thông tin đầu ra',
    title: 'Thông tin đầu ra là gì?',
    content: '<b>Thông tin đầu ra (Output)</b>: là thông tin kết quả được tạo ra từ máy tính.',
    imageUrl: null,
    things: [],
    remember: 'Ví dụ 1: Số <b>2</b> là kết quả phép tính <b>1+1</b> sau khi máy tính xử lí, thì số <b>2</b> được gọi là thông tin đầu ra.'
  },

  /* ---------- 11. Luyện tập: Output là gì? ---------- */
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Em hãy cho biết, thông tin đầu ra (Output) là gì?',
    options: [
      'Là thông tin đưa vào máy tính',
      'Là thông tin kết quả được tạo từ máy tính',
      'Là thông tin đang được máy tính xử lí',
      'Là thông tin chưa được xử lí'
    ],
    correctAnswer: 1,
    hint: 'Output nghĩa là "đầu ra" — đó là thứ máy tính trả về cho em sau khi đã xử lí xong.',
    explain: 'Thông tin đầu ra (Output) là thông tin kết quả được tạo ra từ máy tính sau khi xử lí.'
  },

  /* ---------- 12. Thông tin đầu ra — ví dụ 2 ---------- */
  {
    type: 'info',
    topic: 'Thông tin đầu ra',
    title: 'Ví dụ khác về thông tin đầu ra',
    content: '<b>Thông tin đầu ra (Output)</b>: là thông tin kết quả được tạo ra từ máy tính.',
    imageUrl: null,
    things: [
      { icon: '🔊', name: 'Âm thanh phát ra từ máy tính', en: 'là thông tin đầu ra' },
      { icon: '🖥️', name: 'Hình ảnh hiển thị trên màn hình', en: 'là thông tin đầu ra' }
    ],
    remember: ''
  },

  /* ---------- 13. Vận dụng: thuật ngữ chỉ kết quả máy tính tạo ra ---------- */
  {
    type: 'quiz_single',
    topic: 'Vận dụng',
    question: 'Tùy chọn nào dưới đây là thuật ngữ chỉ kết quả mà máy tính tạo ra, chẳng hạn như thông tin, âm thanh và hình ảnh?',
    options: [
      'Hệ điều hành (OS)',
      'Bộ nhớ (Memory)',
      'Đầu ra (Output)',
      'Ổ cứng (Hard Drive)'
    ],
    correctAnswer: 2,
    hint: 'Hãy nghĩ đến những gì máy tính "trả lại" cho em sau khi xử lí xong.',
    explain: 'Đầu ra (Output) là thuật ngữ chỉ kết quả mà máy tính tạo ra, ví dụ như thông tin, âm thanh và hình ảnh.'
  },

  /* ---------- 14. Divider · Phần 03 ---------- */
  {
    type: 'info',
    topic: 'Phần 03',
    title: 'Bộ nhớ máy tính',
    content: '',
    imageUrl: null,
    things: [],
    remember: ''
  },

  /* ---------- 15. Bộ nhớ máy tính — vai trò ---------- */
  {
    type: 'info',
    topic: 'Bộ nhớ máy tính',
    title: 'Vai trò của bộ nhớ máy tính',
    content: '💻 Giúp lưu trữ thông tin.<br>💻 Là thành phần quan trọng nhất được sử dụng để chạy các ứng dụng.',
    imageUrl: null,
    things: [],
    remember: ''
  },

  /* ---------- 16. Luyện tập: thành phần quan trọng nhất để chạy ứng dụng ---------- */
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Em hãy cho biết, tùy chọn nào sau đây là thành phần quan trọng nhất được sử dụng để chạy các ứng dụng?',
    options: [
      'Bộ lưu trữ',
      'Card màn hình',
      'Thẻ SIM',
      'Bộ nhớ'
    ],
    correctAnswer: 3,
    hint: 'Đây chính là thành phần vừa được nhắc đến ở phần lí thuyết vừa rồi.',
    explain: 'Bộ nhớ là thành phần quan trọng nhất được sử dụng để chạy các ứng dụng trên máy tính.'
  },

  /* ---------- 17. Vận dụng: thiết bị vật lí lưu trữ thông tin cho OS/phần mềm/phần cứng ---------- */
  {
    type: 'quiz_single',
    topic: 'Vận dụng',
    question: 'Thiết bị vật lí nào có vai trò lưu trữ thông tin cho hệ điều hành, phần mềm và phần cứng?',
    options: [
      'Màn hình',
      'Bộ nhớ',
      'Card âm thanh',
      'Bộ nguồn'
    ],
    correctAnswer: 1,
    hint: 'Đây là thiết bị giúp lưu trữ thông tin mà em vừa học ở phần lí thuyết.',
    explain: 'Bộ nhớ là thiết bị vật lí có vai trò lưu trữ thông tin cho hệ điều hành, phần mềm và phần cứng.'
  },

  /* ---------- 18. Luyện tập: chức năng của bộ nhớ (chọn 3) ---------- */
  {
    type: 'quiz_multiple',
    topic: 'Luyện tập',
    question: 'Em hãy cho biết, những chức năng của bộ nhớ là gì? (Chọn 3)',
    options: [
      'Đưa thông tin dữ liệu vào máy tính',
      'Giúp các chương trình trong máy tính hoạt động',
      'Giúp máy tính tạo và sử dụng tập tin',
      'Giúp khởi động máy tính'
    ],
    correctAnswers: [1, 2, 3],
    hint: '"Đưa thông tin dữ liệu vào máy tính" là chức năng của thiết bị đầu vào, không phải của bộ nhớ.',
    explain: 'Bộ nhớ giúp các chương trình hoạt động, giúp máy tính tạo và sử dụng tập tin, và giúp khởi động máy tính.'
  },

  /* ---------- 19. Bộ nhớ máy tính: ROM và RAM ---------- */
  {
    type: 'info',
    topic: 'Bộ nhớ máy tính',
    title: 'Máy tính sử dụng hai loại bộ nhớ cơ bản',
    content: '<b>ROM (Read-Only Memory)</b> — Bộ nhớ vĩnh viễn: ROM được sử dụng để lưu trữ các thông tin quan trọng mà không được sửa đổi.',
    imageUrl: null,
    things: [],
    remember: '<b>RAM (Random Access Memory)</b> — Bộ nhớ tạm thời: RAM được sử dụng để lưu trữ thông tin trong quá trình máy tính đang hoạt động.'
  },

  /* ---------- 20. Luyện tập: viết tắt bộ nhớ truy cập ngẫu nhiên ---------- */
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Em hãy cho biết, tên viết tắt của bộ nhớ truy cập ngẫu nhiên là gì?',
    options: ['ROM', 'HDD', 'RAM', 'CPU'],
    correctAnswer: 2,
    hint: '"Truy cập ngẫu nhiên" trong tiếng Anh là "Random Access".',
    explain: 'RAM (Random Access Memory) là tên viết tắt của bộ nhớ truy cập ngẫu nhiên.'
  },

  /* ---------- 21. Luyện tập: viết tắt bộ nhớ chỉ đọc ---------- */
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Em hãy cho biết, tên viết tắt của bộ nhớ chỉ đọc là gì?',
    options: ['RAM', 'ROM', 'SSD', 'USB'],
    correctAnswer: 1,
    hint: '"Chỉ đọc" trong tiếng Anh là "Read-Only".',
    explain: 'ROM (Read-Only Memory) là tên viết tắt của bộ nhớ chỉ đọc.'
  },

  /* ---------- 22. Divider · Phần 04 ---------- */
  {
    type: 'info',
    topic: 'Phần 04',
    title: 'Thiết bị lưu trữ',
    content: '',
    imageUrl: null,
    things: [],
    remember: ''
  },

  /* ---------- 23. Thiết bị lưu trữ — vai trò ---------- */
  {
    type: 'info',
    topic: 'Thiết bị lưu trữ',
    title: 'Vai trò của thiết bị lưu trữ',
    content: '💾 Giúp lưu trữ dữ liệu.<br>💾 Dung lượng lớn hơn bộ nhớ.<br>💾 Nhưng tốc độ chậm hơn bộ nhớ.',
    imageUrl: null,
    things: [],
    remember: ''
  },

  /* ---------- 24. Đơn vị đo lường lưu trữ trên máy tính ---------- */
  {
    type: 'info',
    topic: 'Thiết bị lưu trữ',
    title: 'Đơn vị đo lường lưu trữ trên máy tính',
    content: 'Các đơn vị đo lường lưu trữ trên máy tính, từ nhỏ đến lớn:',
    imageUrl: null,
    things: [
      { icon: 'B', name: '1 Byte = 8 Bits', en: 'Tương đương 1 Byte' },
      { icon: 'KB', name: '1 Kilobyte = 1024 B', en: 'Tương đương 1.024 Bytes' },
      { icon: 'MB', name: '1 Megabyte = 1024 KB', en: 'Tương đương 1.048.576 Bytes' },
      { icon: 'GB', name: '1 Gigabyte = 1024 MB', en: 'Tương đương 1.073.741.824 Bytes' },
      { icon: 'TB', name: '1 Terabyte = 1024 GB', en: 'Tương đương 1.099.511.627.776 Bytes' }
    ],
    remember: ''
  },

  /* ---------- 25. Quiz: đơn vị đo lường thiết bị lưu trữ (chọn 2) ---------- */
  {
    type: 'quiz_multiple',
    topic: 'Luyện tập',
    question: 'Em hãy cho biết, thiết bị lưu trữ được đo lường bằng đơn vị nào sau đây? (Chọn 2)',
    options: ['Terabytes', 'Inches', 'Gigabytes', 'Feet', 'Centimeters'],
    correctAnswers: [0, 2],
    hint: 'Inches, Feet và Centimeters là các đơn vị đo chiều dài, không dùng để đo dung lượng lưu trữ.',
    explain: 'Terabytes và Gigabytes là các đơn vị dùng để đo dung lượng lưu trữ của thiết bị.'
  },

  /* ---------- 26. Ví dụ về thiết bị lưu trữ ---------- */
  {
    type: 'info',
    topic: 'Thiết bị lưu trữ',
    title: 'Một số thiết bị lưu trữ phổ biến',
    content: 'Dưới đây là một số thiết bị lưu trữ thường gặp:',
    imageUrl: null,
    things: [
      { icon: '💽', name: 'Ổ cứng (HDD)', en: 'Hard Disk Drive' },
      { icon: '⚡', name: 'Ổ cứng thể rắn (SSD)', en: 'Solid State Drive' },
      { icon: '🔌', name: 'USB', en: 'USB Flash Drive' },
      { icon: '💳', name: 'Thẻ nhớ', en: 'Memory Card' }
    ],
    remember: ''
  },

  /* ---------- 27. Quiz: nguyên nhân hết dung lượng bộ nhớ thiết bị di động ---------- */
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Các thiết bị di động có dung lượng bộ nhớ hạn chế so với máy tính để bàn. Em hãy cho biết, tùy chọn nào sau đây có khả năng làm cho thiết bị di động của em hết dung lượng bộ nhớ?',
    options: [
      'Cài quá nhiều Game.',
      'Thường xuyên quên xóa bộ nhớ đệm.',
      'Sạc thiết bị di động trước khi hết pin.',
      'Truyền phát các Video HD.'
    ],
    correctAnswer: 0,
    hint: 'Mỗi trò chơi cài đặt sẽ chiếm một phần dung lượng lưu trữ cố định trên thiết bị.',
    explain: 'Cài quá nhiều Game sẽ chiếm nhiều dung lượng lưu trữ, khiến thiết bị di động dễ hết bộ nhớ.'
  },

  /* ---------- 28. Quiz: cách tăng dung lượng lưu trữ điện thoại (chọn 2) ---------- */
  {
    type: 'quiz_multiple',
    topic: 'Luyện tập',
    question: 'Em hãy cho biết, tùy chọn nào sau đây là cách để tăng không gian lưu trữ cho điện thoại thông minh? (Chọn 2)',
    options: [
      'Gỡ cài đặt bất kì trò chơi nào mà em không chơi nữa.',
      'Xóa ảnh cũ mà em không cần.',
      'Truyền phát Video ở định dạng SD.',
      'Đóng tất cả các chương trình nền đang chạy.'
    ],
    correctAnswers: [0, 1],
    hint: 'Truyền phát video và đóng chương trình nền chỉ ảnh hưởng đến băng thông hoặc RAM, không giải phóng dung lượng lưu trữ.',
    explain: 'Gỡ cài đặt trò chơi không dùng và xóa ảnh cũ sẽ giải phóng dung lượng lưu trữ trên điện thoại.'
  },

  /* ---------- 29. Divider · Phần 05 ---------- */
  {
    type: 'info',
    topic: 'Phần 05',
    title: 'Đầu vào và đầu ra của công cụ AI',
    content: '',
    imageUrl: null,
    things: [],
    remember: ''
  },

  /* ---------- 30. Đầu vào và đầu ra của công cụ AI ---------- */
  {
    type: 'info',
    topic: 'Đầu vào và đầu ra của công cụ AI',
    title: 'Đầu vào và đầu ra của công cụ AI',
    content: '<b>ĐẦU VÀO</b>: điều em đưa cho AI. → <b>CÔNG CỤ AI</b>: suy nghĩ và xử lí. → <b>ĐẦU RA</b>: điều AI trả lại cho em.',
    imageUrl: null,
    things: [
      { icon: '⌨️', name: 'Văn bản', en: 'Ví dụ đầu vào' },
      { icon: '🖼️', name: 'Hình ảnh', en: 'Ví dụ đầu vào' },
      { icon: '🎤', name: 'Giọng nói', en: 'Ví dụ đầu vào' },
      { icon: '💬', name: 'Trả lời', en: 'Ví dụ đầu ra' },
      { icon: '🎨', name: 'Hình ảnh', en: 'Ví dụ đầu ra' },
      { icon: '🎵', name: 'Bài hát', en: 'Ví dụ đầu ra' }
    ],
    remember: ''
  },

  /* ---------- 31. Ví dụ thực tế ---------- */
  {
    type: 'info',
    topic: 'Đầu vào và đầu ra của công cụ AI',
    title: 'Ví dụ thực tế',
    content: 'Cùng xem cách các công cụ AI xử lí đầu vào thành đầu ra trong đời sống hằng ngày:',
    imageUrl: null,
    things: [
      { icon: '🐱', name: '"Vẽ cho tôi một con mèo"', en: 'AI tạo ảnh (Canva AI, Copilot Designer) → Hình ảnh con mèo' },
      { icon: '🌐', name: '"Dịch câu này sang tiếng Anh"', en: 'AI dịch thuật (Google Translate) → Câu đã được dịch' },
      { icon: '🤖', name: '"1 + 1 bằng mấy?"', en: 'Chatbot AI (ChatGPT, Gemini, Claude) → Câu trả lời' }
    ],
    remember: ''
  },

  /* ---------- 32. Divider · Vận dụng ---------- */
  {
    type: 'info',
    topic: '',
    title: 'Vận dụng',
    content: 'Cùng thực hành để hiểu rõ hơn về thông tin đầu vào và đầu ra nhé!',
    imageUrl: null,
    things: [],
    remember: ''
  },

  /* ---------- 33. Vận dụng: bài tập thực hành ---------- */
  {
    type: 'info',
    topic: 'Vận dụng',
    title: 'Thực hành: Quan sát đầu vào — đầu ra',
    content: 'Quan sát và ghi lại đầu vào – đầu ra của các tình huống sau:<br>• Em gõ tên bài hát vào YouTube → Đầu vào là gì? Đầu ra là gì?<br>• Em chụp ảnh bằng điện thoại → Đầu vào là gì? Đầu ra là gì?<br>• Em in tài liệu từ máy tính → Đầu vào là gì? Đầu ra là gì?',
    imageUrl: null,
    things: [],
    remember: 'Sử dụng chatbot AI (ví dụ: ChatGPT, Gemini), thực hiện: nhập câu hỏi "RAM là gì và tại sao RAM quan trọng với máy tính?"; đọc câu trả lời của AI và viết lại bằng lời của em (ít nhất 3 câu); nhận xét đầu ra của AI có đúng với bài học không, có thông tin nào cần kiểm tra lại không.'
  },

  /* ---------- 34. Kết thúc ---------- */
  {
    type: 'info',
    final: true,
    topic: 'Kết thúc bài học',
    title: 'Thank you! 🎉',
    content: 'Cảm ơn em đã hoàn thành Bài 3: Thông tin đầu vào và thông tin đầu ra. Chúc em học tốt và hẹn gặp lại ở bài học tiếp theo!',
    imageUrl: null,
    remember: ''
  }
];
