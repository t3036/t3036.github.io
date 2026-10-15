/* ============================================================
   BỘ CÂU HỎI DÙNG CHUNG — Level 1 · Bài 08: Tìm hiểu về mạng và cơ sở hạ tầng
   Dùng cho cả bài học (script.js) và ôn tập (review.js).
   Hàm q(key, topic) trả về bản sao câu hỏi kèm nhãn chủ đề.

   Nguồn: K6_B08.pptx. Các câu lặp lại ở phần ôn tập cuối file gốc đã được
   gộp thành 1 câu. ĐÁP ÁN: file gốc đánh dấu bằng animation (đáp án hiện ra),
   đã đối chiếu với nội dung bài học.
   Các câu có ghi "BỔ SUNG" là câu mới, thêm vào vì file gốc chưa có câu
   vận dụng cho phần đó (thiết bị mạng, AI và mạng, khái niệm mạng).
   ============================================================ */
/* Biểu tượng thiết bị mạng vẽ bằng SVG (dùng cả trong bài học và ôn tập) */
const _ico = body => `<svg viewBox="0 0 48 48" width="1.25em" height="1.25em" style="vertical-align:-.28em" aria-hidden="true">${body}</svg>`;
const ICON = {
  /* thiết bị đầu cuối: máy tính xách tay + điện thoại */
  end: _ico('<rect x="5" y="9" width="30" height="21" rx="3" fill="#2f6bff"/><rect x="8" y="12" width="24" height="15" rx="1.5" fill="#cfe0ff"/><path d="M2 33h36l-3 5H5z" fill="#5b6b8c"/><rect x="33" y="19" width="12" height="21" rx="2.5" fill="#12b5a5" stroke="#fff" stroke-width="1.5"/><circle cx="39" cy="36.5" r="1.2" fill="#fff"/>'),
  /* router: hộp có 2 ăng-ten và sóng */
  router: _ico('<path d="M14 28V13M34 28V13" stroke="#5b6b8c" stroke-width="3" stroke-linecap="round"/><circle cx="14" cy="11.5" r="2.5" fill="#5b6b8c"/><circle cx="34" cy="11.5" r="2.5" fill="#5b6b8c"/><path d="M19 12.5a7 7 0 0 1 10 0M21.5 16a3.6 3.6 0 0 1 5 0" fill="none" stroke="#f5a524" stroke-width="2.4" stroke-linecap="round"/><rect x="4" y="27" width="40" height="14" rx="4" fill="#2f6bff"/><circle cx="12" cy="34" r="2" fill="#fff"/><circle cx="19" cy="34" r="2" fill="#4fd98c"/><circle cx="26" cy="34" r="2" fill="#fff"/><rect x="33" y="32.5" width="7" height="3" rx="1.5" fill="#fff"/>'),
  /* modem: hộp đứng, đèn báo và hai mũi tên ⇄ */
  modem: _ico('<rect x="9" y="6" width="30" height="36" rx="5" fill="#12b5a5"/><circle cx="17" cy="14" r="2" fill="#fff"/><circle cx="24" cy="14" r="2" fill="#4fd98c"/><circle cx="31" cy="14" r="2" fill="#fff"/><path d="M16 24h16m0 0-4-3.5m4 3.5-4 3.5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 32H16m0 0 4-3.5M16 32l4 3.5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity=".75"/>'),
  /* switch: hộp dẹt nhiều cổng */
  switch: _ico('<rect x="2" y="15" width="44" height="18" rx="4" fill="#7b4dff"/><g fill="#fff"><rect x="6" y="20" width="4.2" height="6" rx="1"/><rect x="12" y="20" width="4.2" height="6" rx="1"/><rect x="18" y="20" width="4.2" height="6" rx="1"/><rect x="24" y="20" width="4.2" height="6" rx="1"/><rect x="30" y="20" width="4.2" height="6" rx="1"/><rect x="36" y="20" width="4.2" height="6" rx="1"/></g><g fill="#4fd98c"><circle cx="8" cy="29.5" r="1.1"/><circle cx="14" cy="29.5" r="1.1"/><circle cx="20" cy="29.5" r="1.1"/><circle cx="32" cy="29.5" r="1.1"/></g>')
};


const TF = ['Đúng', 'Sai'];

const QUIZ = {

  /* ---------- Phần 1: Mạng máy tính, Internet và Intranet ---------- */
  internetBiggest: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, tùy chọn nào sau đây là mạng máy tính lớn nhất hiện nay?',
    options: ['Internet', 'Mạng di động', 'Mạng không dây', 'Mạng có dây'],
    correctAnswer: 0,
    hint: 'Đó là mạng kết nối hàng tỉ thiết bị trên toàn thế giới.',
    explain: 'Internet là mạng máy tính lớn nhất hiện nay, kết nối các mạng trên toàn cầu.'
  },
  shareTwo: {
    type: 'quiz_multiple',
    question: 'Em hãy cho biết, việc chia sẻ thông qua kết nối Internet liên quan đến hai khái niệm nào sau đây? (Chọn 2)',
    options: ['Downloading (tải xuống)', 'Connecting (kết nối)', 'Sharing (chia sẻ)', 'Streaming (phát trực tuyến)'],
    correctAnswers: [0, 3],
    hint: 'Hai khái niệm này là hai cách dữ liệu được đưa từ Internet về thiết bị của em: một cách lưu lại trên máy, một cách xem/nghe ngay khi đang tải.',
    explain: 'Chia sẻ qua Internet liên quan đến hai cách nhận dữ liệu. Downloading (tải xuống): sao chép tệp từ Internet về lưu trên thiết bị của em, ví dụ tải một ứng dụng hay một bài hát về máy; tải xong có thể dùng lại mà không cần mạng. Streaming (phát trực tuyến): xem hoặc nghe nội dung ngay khi nó được gửi đến, ví dụ xem video hay nghe nhạc trực tuyến, mà không cần tải trọn nội dung về máy. Còn Connecting (kết nối) và Sharing (chia sẻ) là những khái niệm chung của mạng, không phải hai cách dữ liệu được chia sẻ qua kết nối Internet.'
  },
  inetIntranetTF: {
    type: 'quiz_dropdown',
    question: 'Với mỗi câu phát biểu về sự khác biệt giữa Internet và Intranet, hãy chọn Đúng hoặc Sai: Internet thuộc quyền sở hữu riêng của các tổ hợp công ty liên doanh. ___ Intranet an toàn hơn so với kết nối Internet. ___ Intranet không giới hạn số lượng người dùng và bất kỳ ai cũng có thể truy cập được. ___',
    blanks: [
      { options: TF, correctAnswer: 1 },
      { options: TF, correctAnswer: 0 },
      { options: TF, correctAnswer: 1 }
    ],
    hint: 'Internet là mạng công khai; Intranet là mạng riêng của một tổ chức.',
    explain: 'Internet không thuộc sở hữu riêng của tổ chức nào. Intranet bảo mật cao hơn và chỉ người có quyền mới truy cập được, nên số người dùng bị giới hạn.'
  },
  netPurpose: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Mục đích chính của mạng máy tính là gì?',
    options: ['Chia sẻ tài nguyên và trao đổi giữa các thiết bị máy tính', 'Làm cho máy tính chạy nhanh hơn', 'Thay thế phần mềm diệt virus', 'Tăng dung lượng ổ cứng của máy tính'],
    correctAnswer: 0,
    hint: 'Mạng là sự liên kết các thiết bị để chúng làm việc cùng nhau.',
    explain: 'Mạng máy tính liên kết các thiết bị nhằm chia sẻ tài nguyên và trao đổi dữ liệu giữa chúng.'
  },
  companyNetwork: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Mạng riêng của một công ty, chỉ nhân viên có quyền mới truy cập được, được gọi là gì?',
    options: ['Internet', 'Intranet', 'Trang web công cộng', 'Mạng xã hội'],
    correctAnswer: 1,
    hint: 'Từ này bắt đầu bằng "Intra-" nghĩa là "bên trong".',
    explain: 'Intranet là mạng nội bộ của một công ty/tổ chức, bảo mật cao và chỉ thành viên có quyền mới vào được.'
  },

  /* ---------- Phần 2: Cơ sở hạ tầng mạng ---------- */
  infraWhat: {
    type: 'quiz_single',
    question: 'Cơ sở hạ tầng mạng là gì?',
    options: ['Phần cứng và phần mềm di chuyển dữ liệu cùng một mạng', 'Một loạt các loại cáp', 'Chi phí của việc cấp phép một mạng', 'Nơi đặt các máy chủ'],
    correctAnswer: 0,
    hint: 'Cơ sở hạ tầng mạng gồm cả phần cứng lẫn phần mềm.',
    explain: 'Cơ sở hạ tầng mạng là phần cứng và phần mềm giúp các thiết bị kết nối với nhau để di chuyển dữ liệu.'
  },
  infraGoodTF: {
    type: 'quiz_dropdown',
    question: 'Với mỗi câu phát biểu về những lợi ích của cơ sở hạ tầng mạng chất lượng, hãy chọn Đúng hoặc Sai: Đảm bảo rằng học sinh có thể kết nối thông suốt với mạng của nhà trường. ___ Cho phép học sinh kết nối với phòng máy tính của nhà trường từ mọi nơi. ___ Hỗ trợ mở rộng hệ thống mạng của nhà trường mà không cần thiết kế lại khi số lượng học sinh tăng lên. ___',
    blanks: [
      { options: TF, correctAnswer: 0 },
      { options: TF, correctAnswer: 1 },
      { options: TF, correctAnswer: 0 }
    ],
    hint: 'Cơ sở hạ tầng tốt phải thông suốt và dễ mở rộng, nhưng không có nghĩa là ai ở đâu cũng vào được.',
    explain: 'Hạ tầng mạng chất lượng đảm bảo kết nối thông suốt và hỗ trợ khả năng mở rộng. Mạng nhà trường vẫn cần kiểm soát, không phải mọi người từ mọi nơi đều được truy cập.'
  },
  infraSchool: {
    type: 'quiz_single',
    question: 'Điều nào sau đây sẽ là đặc điểm của cơ sở hạ tầng mạng tốt cho trường học?',
    options: ['Cho phép mọi người truy cập mạng từ mọi nơi', 'Chính sách sử dụng được chấp nhận (Acceptable Use Policy) là không bắt buộc', 'Hỗ trợ đăng nhập ẩn danh', 'Dễ dàng mở rộng mạng lưới khi số lượng học sinh tăng'],
    correctAnswer: 3,
    hint: 'Đặc điểm tốt phải giúp mạng vẫn hoạt động ổn khi có nhiều người dùng hơn.',
    explain: 'Mạng trường học tốt phải dễ mở rộng khi số học sinh tăng. Các lựa chọn còn lại làm giảm an toàn của mạng.'
  },
  goodNetTwo: { /* BỔ SUNG */
    type: 'quiz_multiple',
    question: 'Hai đặc điểm của cơ sở hạ tầng mạng chất lượng là gì? (Chọn 2)',
    options: ['Đảm bảo kết nối thông suốt', 'Hỗ trợ khả năng mở rộng', 'Chỉ cho một thiết bị dùng mạng cùng lúc', 'Không cần có quy định sử dụng'],
    correctAnswers: [0, 1],
    hint: 'Hãy nhớ hai ý trong bài: thông suốt và mở rộng.',
    explain: 'Cơ sở hạ tầng mạng chất lượng phải đảm bảo kết nối thông suốt và hỗ trợ khả năng mở rộng.'
  },

  /* ---------- Phần 3: Thiết bị mạng (BỔ SUNG, file gốc chưa có câu hỏi) ---------- */
  devEndpoint: {
    type: 'quiz_multiple',
    question: 'Đâu là các thiết bị đầu cuối? (Chọn 2)',
    options: ['Điện thoại thông minh', 'Máy tính bảng', 'Router', 'Switch'],
    correctAnswers: [0, 1],
    hint: 'Thiết bị đầu cuối là thiết bị mà người dùng trực tiếp sử dụng.',
    explain: 'Điện thoại thông minh, máy tính, máy tính bảng là thiết bị đầu cuối. Router và Switch là thiết bị mạng nằm giữa đường truyền.'
  },
  devRouter: {
    type: 'quiz_single',
    question: 'Thiết bị nào hướng dẫn các gói dữ liệu đi đến đúng đích?',
    options: ['Router (thiết bị định tuyến)', 'Modem', 'Điện thoại thông minh', 'Máy chủ web'],
    correctAnswer: 0,
    hint: 'Tên thiết bị này có nghĩa là "chỉ đường" cho dữ liệu.',
    explain: 'Router hướng dẫn các gói dữ liệu đi đến đúng đích, giúp thông tin được truyền đi hiệu quả và an toàn.'
  },
  devModem: {
    type: 'quiz_single',
    question: 'Chức năng chính của Modem là gì?',
    options: ['Chuyển đổi tín hiệu giữa dạng số (Digital) và dạng tương tự (Analog)', 'Diệt virus cho máy tính', 'Lưu trữ tập tin của người dùng', 'Hiển thị hình ảnh lên màn hình'],
    correctAnswer: 0,
    hint: 'Modem = điều chế (chuyển dữ liệu thành tín hiệu) và giải điều chế (ngược lại).',
    explain: 'Modem chuyển đổi tín hiệu giữa dạng số (Digital) và dạng tương tự (Analog), đồng thời gửi và nhận thông tin.'
  },
  modemConvert: {
    type: 'quiz_single',
    question: 'Thiết bị nào chuyển đổi dữ liệu từ kỹ thuật số (Digital) sang tương tự (Analog) và ngược lại để truyền tín hiệu qua mạng?',
    options: ['Modem', 'Router', 'Ethernet Cable', 'Network Adapter'],
    correctAnswer: 0,
    hint: 'Modem = điều chế và giải điều chế tín hiệu.',
    explain: 'Modem chuyển đổi tín hiệu giữa dạng số (Digital) và dạng tương tự (Analog) để truyền qua mạng.'
  },
  devSwitch: {
    type: 'quiz_single',
    question: 'Switch (thiết bị chuyển mạch) được dùng để làm gì?',
    options: ['Kết nối các đoạn mạng với nhau', 'Chuyển tín hiệu số thành tín hiệu tương tự', 'Bật và tắt nguồn máy tính', 'Lưu trữ dữ liệu của người dùng'],
    correctAnswer: 0,
    hint: 'Switch có nhiều cổng để nối các thiết bị/đoạn mạng lại với nhau.',
    explain: 'Switch là thiết bị dùng để kết nối các đoạn mạng với nhau.'
  },
  matchDevices: {
    type: 'quiz_matching',
    question: 'Em hãy nối mỗi mô tả với thiết bị mạng tương ứng.',
    pairs: [
      { icon: ICON.end, left: 'Nhận yêu cầu và trả kết quả trực tiếp cho người dùng.', right: 'Thiết bị đầu cuối' },
      { icon: ICON.router, left: 'Hướng dẫn các gói dữ liệu đi đến đúng đích.', right: 'Router' },
      { icon: ICON.modem, left: 'Chuyển đổi tín hiệu giữa dạng số và dạng tương tự.', right: 'Modem' },
      { icon: ICON.switch, left: 'Kết nối các đoạn mạng với nhau.', right: 'Switch' }
    ],
    hint: 'Đọc kĩ vai trò của từng thiết bị rồi nối lại.',
    explain: 'Thiết bị đầu cuối nhận/trả kết quả cho người dùng; Router chỉ đường cho dữ liệu; Modem đổi tín hiệu số ↔ tương tự; Switch nối các đoạn mạng.'
  },

  /* ---------- Phần 4: AI và mạng (BỔ SUNG) ---------- */
  aiNeedsNet: {
    type: 'quiz_single',
    question: 'Vì sao nhiều công cụ AI trực tuyến bị chậm hoặc không hoạt động khi mạng yếu?',
    options: ['Vì AI hoạt động qua máy chủ trên Internet nên cần đường truyền mạng', 'Vì AI chỉ chạy được khi máy tính cắm sạc', 'Vì AI không dùng được trên điện thoại', 'Vì AI cần cắm thêm ổ USB'],
    correctAnswer: 0,
    hint: 'Câu hỏi của em được gửi đi đâu để AI xử lý?',
    explain: 'Nhiều công cụ AI không chạy hoàn toàn trên máy của em mà hoạt động qua máy chủ trên Internet, nên cần mạng ổn định.'
  },
  aiFlow: {
    type: 'quiz_single',
    question: 'Khi em nhập một câu hỏi vào công cụ AI trực tuyến, dữ liệu thường đi theo thứ tự nào?',
    options: ['Thiết bị của em → mạng → máy chủ AI → mạng → thiết bị của em', 'Máy chủ AI → thiết bị của em → mạng', 'Thiết bị của em → máy in → máy chủ AI', 'Chỉ ở trong thiết bị của em, không qua mạng'],
    correctAnswer: 0,
    hint: 'Câu hỏi đi đến máy chủ, rồi kết quả được gửi lại.',
    explain: 'Câu hỏi được gửi qua mạng đến máy chủ AI để xử lý, sau đó kết quả được gửi lại cho thiết bị của em.'
  },
  aiWeak: {
    type: 'quiz_single',
    question: 'Nếu mạng yếu hoặc mất kết nối, công cụ AI trực tuyến có thể xảy ra điều gì?',
    options: ['Phản hồi chậm hoặc không hoạt động', 'Trả lời nhanh hơn bình thường', 'Tự chuyển sang chạy bằng ổ USB', 'Không có gì thay đổi'],
    correctAnswer: 0,
    hint: 'Hãy nhớ lại thí nghiệm "Hỏi AI" khi tắt mạng.',
    explain: 'Nếu mạng yếu hoặc mất kết nối, công cụ AI trực tuyến có thể phản hồi chậm hoặc không hoạt động.'
  }
};

function q(key, topic){
  return Object.assign({ topic: topic }, QUIZ[key]);
}
