/* ============================================================
   BỘ CÂU HỎI DÙNG CHUNG — Bài 8 + 9: Giao tiếp kĩ thuật số
   Dùng cho cả bài học (bai-08-09.js) và ôn tập (review.js).
   Hàm q(key, topic) trả về bản sao câu hỏi kèm nhãn chủ đề.

   Nguồn: PPTX gốc K7_B08-09_GiaoTiepKiThuatSo.pptx. Các câu lặp lại
   trong phần ôn tập cuối file gốc đã được gộp thành 1 câu duy nhất.
   ĐÁP ÁN: file gốc đánh dấu bằng animation nên đáp án được xác định
   theo nội dung bài học. Câu "hộp trò chuyện" (cần xem hình trang Web)
   chưa đưa vào.
   ============================================================ */

const TF = ['Đúng', 'Sai'];
const YN = ['Có', 'Không'];

const QUIZ = {

  /* ---------- Phần 1: Đồng bộ / không đồng bộ ---------- */
  timezone: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, loại giao tiếp nào là phù hợp nhất để giao tiếp khi cách nhau nhiều múi giờ?',
    options: ['Đồng bộ (Synchronous)', 'Thời gian thực (Real-time)', 'Không đồng bộ (Asynchronous)', 'Đồng thời (Simultaneous)'],
    correctAnswer: 2,
    hint: 'Khi ở hai múi giờ khác nhau, hai người khó có mặt cùng một lúc.',
    explain: 'Giao tiếp không đồng bộ cho phép gửi thông tin trước và người nhận trả lời khi thuận tiện, nên phù hợp khi cách nhau nhiều múi giờ.'
  },
  asyncTwo: {
    type: 'quiz_multiple',
    question: 'Hai phương thức giao tiếp nào không đồng bộ? (Chọn 2)',
    options: ['Gửi Email.', 'Gọi điện thoại.', 'Tham gia hội thảo Video.', 'Gửi tin nhắn văn bản.'],
    correctAnswers: [0, 3],
    hint: 'Phương thức nào có độ trễ giữa lúc gửi và lúc nhận?',
    explain: 'Gửi Email và gửi tin nhắn văn bản có độ trễ nên là giao tiếp không đồng bộ. Gọi điện thoại và hội thảo Video diễn ra theo thời gian thực.'
  },
  delayTwo: {
    type: 'quiz_multiple',
    question: 'Em hãy cho biết, tùy chọn nào sau đây là phương thức giao tiếp có độ trễ? (Chọn 2)',
    options: ['Tin nhắn văn bản (SMS)', 'Thư điện tử (Email)', 'Hội nghị truyền hình (Video Conferencing)', 'Gọi điện thoại (Phone Call)'],
    correctAnswers: [0, 1],
    hint: 'Giao tiếp có độ trễ chính là giao tiếp không đồng bộ.',
    explain: 'SMS và Email có độ trễ giữa việc gửi và nhận. Hội nghị truyền hình và gọi điện thoại diễn ra ngay lập tức.'
  },

  /* ---------- Phần 2: Các hình thức đồng bộ ---------- */
  voip: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, dịch vụ nào sau đây cho phép gọi điện thoại qua Internet?',
    options: ['SMS', 'SMTP', 'VoIP', 'POTS'],
    correctAnswer: 2,
    hint: 'Voice over Internet Protocol.',
    explain: 'VoIP (Voice over Internet Protocol) cho phép gọi điện thoại qua Internet.'
  },
  urgentFriend: {
    type: 'quiz_single',
    question: 'Em cần nhận câu trả lời gấp từ một người bạn trong lớp. Em muốn dùng tin nhắn tức thời để liên hệ với bạn, nhưng tài khoản của bạn đang không trực tuyến. Tùy chọn nào là phù hợp nhất?',
    options: ['Gọi điện cho bạn của em', 'Gửi Email cho bạn của em', 'Vẫn gửi tin nhắn tức thời cho dù tài khoản có đang trực tuyến hay không', 'Gửi tin nhắn SMS cho bạn của em'],
    correctAnswer: 0,
    hint: 'Cần câu trả lời gấp thì phải chọn cách giao tiếp ngay lập tức.',
    explain: 'Khi cần trả lời gấp, gọi điện thoại là cách đồng bộ, bạn nhận được ngay. Email, SMS hoặc tin nhắn tức thời đều có thể bị chậm.'
  },
  imUnavailable: {
    type: 'quiz_single',
    question: 'Nếu một người dùng muốn gửi tin nhắn tức thời cho đồng nghiệp, nhưng trạng thái tài khoản của đồng nghiệp đang không khả dụng (Unavailable) thì cách nào sau đây là tốt nhất?',
    options: ['Chờ cho đến khi tài khoản của đồng nghiệp khả dụng.', 'Email cho đồng nghiệp.', 'Cứ gửi tin nhắn.', 'Gọi điện cho đồng nghiệp.'],
    correctAnswer: 1,
    hint: 'Đồng nghiệp chưa sẵn sàng nhận tin nhắn tức thời; hãy chọn cách để lại thông tin cho họ đọc sau.',
    explain: 'Khi đồng nghiệp không khả dụng, gửi Email là cách phù hợp để họ đọc và trả lời khi sẵn sàng.'
  },
  conferenceApps: {
    type: 'quiz_multiple',
    question: 'Em hãy cho biết, ứng dụng nào sau đây giúp thực hiện một cuộc hội nghị trực tuyến? (Chọn 3)',
    options: ['Office 365', 'Zoom', 'Teams', 'Skype'],
    correctAnswers: [1, 2, 3],
    hint: 'Office 365 là bộ ứng dụng văn phòng.',
    explain: 'Zoom, Teams và Skype là các ứng dụng hội nghị trực tuyến. Office 365 là bộ ứng dụng văn phòng.'
  },
  seniorManagers: {
    type: 'quiz_single',
    question: 'Một công ty có các văn phòng ở các tỉnh/thành phố khác nhau. Chủ tịch công ty muốn tạo một cuộc họp với các quản lí cao cấp. Phương thức giao tiếp kĩ thuật số nào sau đây là phù hợp?',
    options: ['Hội nghị truyền hình', 'Kết nối mạng xã hội', 'Chia sẻ tài liệu', 'Tin nhắn văn bản'],
    correctAnswer: 0,
    hint: 'Cuộc họp cần nhìn thấy và nghe thấy nhau dù ở xa.',
    explain: 'Hội nghị truyền hình giúp tổ chức cuộc họp với nhiều người ở các địa điểm khác nhau.'
  },
  interviewTools: {
    type: 'quiz_multiple',
    question: 'Hội đồng phỏng vấn nằm trong cùng một văn phòng, còn các ứng cử viên ở các bang khác nhau. Hai công cụ hợp tác nào sẽ hiệu quả nhất để thực hiện các cuộc phỏng vấn này? (Chọn 2)',
    options: ['Text Message', 'Video Conference', 'Email', 'Phone Call'],
    correctAnswers: [1, 3],
    hint: 'Phỏng vấn cần trao đổi trực tiếp, theo thời gian thực.',
    explain: 'Hội nghị truyền hình (Video Conference) và gọi điện thoại (Phone Call) cho phép phỏng vấn trực tiếp từ xa.'
  },
  zoomApp: {
    type: 'quiz_single',
    question: 'Em hãy cho biết ứng dụng nào sau đây có khả năng tạo cuộc họp mặt trực tuyến?',
    options: ['OneDrive', 'Google Drive', 'Zoom', 'Dropbox'],
    correctAnswer: 2,
    hint: 'Ba ứng dụng còn lại dùng để lưu trữ tập tin.',
    explain: 'Zoom là ứng dụng họp trực tuyến. OneDrive, Google Drive và Dropbox là dịch vụ lưu trữ đám mây.'
  },
  teamsApp: {
    type: 'quiz_single',
    question: 'Em hãy cho biết ứng dụng nào có thể tổ chức cả cuộc họp âm thanh và Video?',
    options: ['Dropbox', 'Yammer', 'Box', 'Microsoft Teams'],
    correctAnswer: 3,
    hint: 'Ứng dụng của Microsoft dùng để họp trực tuyến.',
    explain: 'Microsoft Teams có thể tổ chức cả cuộc họp âm thanh và Video.'
  },

  /* ---------- Phần 3: Các hình thức không đồng bộ ---------- */
  forumBest: {
    type: 'quiz_single',
    question: 'Phương thức giao tiếp nào sau đây là phù hợp nhất giúp đăng câu hỏi và thảo luận ý kiến với những người khác?',
    options: ['Gọi điện thoại (Phone Call)', 'Hội nghị trực tuyến (Online Conferencing)', 'Thư điện tử (Email)', 'Diễn đàn (Forum)'],
    correctAnswer: 3,
    hint: 'Trang Web thảo luận theo dạng hỏi - đáp.',
    explain: 'Diễn đàn (Forum) là trang Web thảo luận trực tuyến dạng câu hỏi và câu trả lời.'
  },
  msForum: {
    type: 'quiz_single',
    question: 'Loại tài khoản nào được yêu cầu để đăng các mục trong diễn đàn cộng đồng Microsoft?',
    options: ['Microsoft', 'Domain', 'Azure', 'Windows'],
    correctAnswer: 0,
    hint: 'Diễn đàn của Microsoft thì dùng tài khoản của chính hãng.',
    explain: 'Em cần có tài khoản Microsoft để đăng bài trên diễn đàn cộng đồng Microsoft.'
  },
  outlookFaq: {
    type: 'quiz_single',
    question: 'Người dùng muốn xem các câu hỏi và câu trả lời phổ biến về Microsoft Outlook. Tùy chọn nào sau đây là phù hợp nhất?',
    options: ['Help', 'Tell me', 'Community Forum', "What's New"],
    correctAnswer: 2,
    hint: 'Nơi mọi người đăng câu hỏi và trả lời nhau.',
    explain: 'Community Forum (diễn đàn cộng đồng) có các câu hỏi và câu trả lời của người dùng về Outlook.'
  },
  longMessageFile: {
    type: 'quiz_single',
    question: 'Hình thức giao tiếp nào sau đây là phù hợp nhất với những tin nhắn dài và để gửi tập tin?',
    options: ['Tin nhắn ngắn (SMS)', 'Hội nghị truyền hình (Video Conferencing)', 'Tin nhắn tức thời (IM)', 'Thư điện tử (Email)'],
    correctAnswer: 3,
    hint: 'Hình thức này có phần nội dung dài và cho phép đính kèm tệp.',
    explain: 'Email phù hợp với nội dung dài và có thể đính kèm tập tin.'
  },
  smsLimit: {
    type: 'quiz_single',
    question: 'Trong dịch vụ tin nhắn SMS, một tin nhắn có tối đa bao nhiêu kí tự?',
    options: ['100', '120', '140', '160'],
    correctAnswer: 3,
    hint: 'SMS là tin nhắn rất ngắn.',
    explain: 'Một tin nhắn SMS có tối đa 160 kí tự (không dấu) hoặc 70 kí tự (có dấu).'
  },
  shortMessageTwo: {
    type: 'quiz_multiple',
    question: 'Hai hình thức giao tiếp nào phù hợp nhất cho những thông điệp ngắn gọn? (Chọn 2)',
    options: ['Email', 'Tin nhắn văn bản (SMS)', 'Tin nhắn tức thời (IM)', 'Hội nghị truyền hình (Video Conferencing)'],
    correctAnswers: [1, 2],
    hint: 'Hai hình thức nhắn tin.',
    explain: 'SMS và tin nhắn tức thời (IM) phù hợp với những thông điệp ngắn gọn.'
  },
  matchCommunication: {
    type: 'quiz_matching',
    question: 'Em hãy nối từng hình thức giao tiếp với tình huống đang sử dụng hình thức đó.',
    pairs: [
      { icon: '📧', left: 'Bạn liên lạc với công ty về việc nhận tiền hoàn lại.', right: 'Email' },
      { icon: '💬', left: 'Bạn thêm câu hỏi vào nhóm thảo luận trò chơi điện tử đang diễn ra.', right: 'Bài đăng trên diễn đàn' },
      { icon: '📝', left: 'Bạn thêm một đoạn dài trình bày quan điểm của mình về sự đa dạng văn hóa vào nhật ký trực tuyến.', right: 'Bài đăng trên Blog' },
      { icon: '📱', left: 'Bạn liên hệ với huấn luyện viên sau giờ học để nói rằng bạn sẽ bỏ lỡ buổi tập hôm nay.', right: 'Tin nhắn văn bản' }
    ],
    hint: 'Diễn đàn: hỏi - đáp; Blog: quan điểm cá nhân; Email: việc chính thức; SMS: tin ngắn.',
    explain: 'Hoàn tiền → Email; hỏi nhóm thảo luận → bài đăng diễn đàn; đoạn quan điểm dài → Blog; báo nghỉ tập → tin nhắn văn bản.'
  },
  matchCommunication2: {
    type: 'quiz_matching',
    question: 'Em hãy nối từng hình thức giao tiếp với mô tả tương ứng.',
    pairs: [
      { icon: '📱', left: 'Cho anh của bạn biết nơi sẽ đón bạn.', right: 'Text message' },
      { icon: '💬', left: 'Đặt câu hỏi cho một nhóm để thảo luận về trò chơi.', right: 'Forum post' },
      { icon: '📧', left: 'Yêu cầu hoàn lại tiền từ một công ty.', right: 'Email message' },
      { icon: '📝', left: 'Chia sẻ suy nghĩ hàng ngày của bạn về các sự kiện lên nhật ký trực tuyến.', right: 'Blog post' }
    ],
    hint: 'Tin ngắn gửi người thân → Text message; thảo luận nhóm → Forum.',
    explain: 'Báo nơi đón → Text message; hỏi nhóm → Forum post; yêu cầu hoàn tiền → Email; chia sẻ suy nghĩ → Blog post.'
  },
  streamingVideo: {
    type: 'quiz_multiple',
    question: 'Em hãy cho biết dịch vụ nào sau đây có thể phát trực tuyến Video? (Chọn 2)',
    options: ['Spotify', 'Disney+', 'Amazon Prime', 'Sirius'],
    correctAnswers: [1, 2],
    hint: 'Spotify và Sirius chủ yếu phát âm nhạc.',
    explain: 'Disney+ và Amazon Prime phát trực tuyến Video (phim). Spotify và Sirius là dịch vụ âm nhạc/radio.'
  },
  streamingMusic: {
    type: 'quiz_multiple',
    question: 'Em hãy cho biết hai tùy chọn nào sau đây là nhà cung cấp phát nhạc trực tuyến? (Chọn 2)',
    options: ['Hulu', 'Vevo', 'Spotify', 'Netflix'],
    correctAnswers: [1, 2],
    hint: 'Hulu và Netflix là dịch vụ phim.',
    explain: 'Vevo và Spotify là nhà cung cấp phát nhạc trực tuyến. Hulu và Netflix phát phim.'
  },
  matchStreaming: {
    type: 'quiz_matching',
    question: 'Em hãy nối dịch vụ truyền thông trực tuyến với ví dụ của nó.',
    pairs: [
      { icon: '🎬', left: 'Truyền trực tuyến phim (Streaming Movies)', right: 'Netflix, Disney+, Hulu, Amazon Prime' },
      { icon: '🎵', left: 'Trình phát đa phương tiện (Media Players)', right: 'Spotify, Kodi, Web Browsers' },
      { icon: '📺', left: 'Thiết bị phát trực tuyến (Streaming Devices)', right: 'Roku, Amazon Firestick, Apple TV, Chromecast' }
    ],
    hint: 'Thiết bị là các hộp/que cắm vào TV.',
    explain: 'Phim: Netflix, Disney+... Trình phát: Spotify, Kodi, trình duyệt Web. Thiết bị: Roku, Firestick, Apple TV, Chromecast.'
  },

  /* ---------- Phần 4: Quy tắc ứng xử ---------- */
  communityRule: {
    type: 'quiz_single',
    question: 'Khi tương tác với các thành viên của cộng đồng kĩ thuật số, điều quan trọng nhất em cần nhớ là gì?',
    options: ['Không sử dụng biểu tượng cảm xúc.', 'Sử dụng tên đầy đủ của bạn.', 'Tránh đăng hình ảnh.', 'Đối xử lịch sự với người khác như cách bạn muốn được đối xử.'],
    correctAnswer: 3,
    hint: 'Quy tắc vàng khi giao tiếp.',
    explain: 'Hãy đối xử lịch sự với người khác như cách em muốn được đối xử.'
  },
  toneTF: {
    type: 'quiz_single',
    question: 'Đúng hay Sai? Khi phản hồi không đồng ý với một bài đăng trực tuyến, em nên sử dụng giọng điệu giống như người đăng ban đầu.',
    options: ['Đúng', 'Sai'],
    correctAnswer: 1,
    hint: 'Dù người khác có giọng điệu thế nào, em vẫn phải lịch sự.',
    explain: 'Sai. Khi không đồng ý, em luôn phản hồi bằng giọng điệu lịch sự, xây dựng và tôn trọng, không bắt chước giọng điệu của người khác.'
  },
  communityTF: {
    type: 'quiz_dropdown',
    question: 'Một học sinh cấp hai tham gia cộng đồng mạng xã hội gồm những người có cùng sở thích. Với mỗi phát biểu, chọn Đúng nếu là cách phù hợp để tương tác với cộng đồng trực tuyến hoặc Sai nếu không phù hợp: Hy vọng các thành viên khác trong cộng đồng coi thông tin cậu ấy chia sẻ là riêng tư. ___ Giới thiệu bản thân với các thành viên cộng đồng và cung cấp địa chỉ Email cá nhân của cậu ấy. ___ Trả lời bình luận trên một chuỗi chủ đề nói rằng mình không đồng ý, sử dụng giọng điệu tôn trọng. ___ Chia sẻ bình luận từ cộng đồng với một nhóm khác mà không nói rõ ai đã đưa ra bình luận đó. ___',
    blanks: [
      { options: TF, correctAnswer: 1 },
      { options: TF, correctAnswer: 1 },
      { options: TF, correctAnswer: 0 },
      { options: TF, correctAnswer: 1 }
    ],
    hint: 'Thông tin đã chia sẻ trong cộng đồng thì ai cũng có thể lan truyền; không chia sẻ thông tin cá nhân và không đăng lại bình luận khi chưa xin phép.',
    explain: 'Chỉ có việc trả lời không đồng ý bằng giọng điệu tôn trọng là phù hợp. Không nên hy vọng thông tin được giữ riêng tư, không đưa Email cá nhân và không chia sẻ lại bình luận khi chưa xin phép.'
  },

  /* ---------- Phần 5: Hội nghị truyền hình & điện thoại ---------- */
  venue: {
    type: 'quiz_multiple',
    question: 'Em hãy chọn hai phát biểu đúng khi lựa chọn địa điểm tổ chức hội nghị truyền hình? (Chọn 2)',
    options: ['Địa điểm nên cố gắng tìm một khu vực có ít hoặc không có tiếng ồn xung quanh.', 'Địa điểm nên có chỗ ngồi nơi có ánh sáng tốt.', 'Địa điểm nên tránh xa các thiết bị di động.', 'Địa điểm luôn phải ở trong một tòa nhà chuyên nghiệp.'],
    correctAnswers: [0, 1],
    hint: 'Người khác phải nghe rõ và nhìn rõ em.',
    explain: 'Nơi yên tĩnh giúp mọi người nghe rõ, ánh sáng tốt giúp mọi người nhìn rõ em.'
  },
  prepVideo: {
    type: 'quiz_multiple',
    question: 'Hai điều nào sau đây là quan trọng nhất cần tuân theo khi chuẩn bị trình bày tại hội nghị truyền hình? (Chọn 2)',
    options: ['Kiểm tra Micro và loa.', 'Chuẩn bị một chương trình các hoạt động theo thứ tự cho hội nghị.', 'Tìm một vị trí để thuyết trình sao cho chuyên nghiệp, có thể ở bên ngoài nhà của bạn.', 'Dự đoán các câu hỏi có thể có của khán giả.'],
    correctAnswers: [0, 1],
    hint: 'Một chuẩn bị về thiết bị, một chuẩn bị về nội dung.',
    explain: 'Cần kiểm tra Micro, loa và chuẩn bị chương trình các hoạt động theo thứ tự cho hội nghị.'
  },
  firstVideo: {
    type: 'quiz_multiple',
    question: 'Em tham gia nhóm 10 bạn thực hiện một dự án lớn. Nhóm sẽ thảo luận qua công cụ hội thảo Video. Em nên thực hiện hai hành động nào trước khi tham gia hội thảo Video lần đầu tiên? (Chọn 2)',
    options: ['Chuẩn bị sẵn thực phẩm ăn nhẹ để có thể ăn tạm khi đói.', 'Đặt camera của bạn ngang tầm mắt.', 'Kiểm tra trước công nghệ hội thảo Video.', 'Đặt ánh sáng phía sau bạn để tạo hình ảnh bóng đổ.'],
    correctAnswers: [1, 2],
    hint: 'Ánh sáng đặt phía sau làm mặt em bị tối.',
    explain: 'Đặt camera ngang tầm mắt và kiểm tra trước công nghệ hội thảo Video giúp buổi họp suôn sẻ.'
  },
  webinarChat: {
    type: 'quiz_single',
    question: 'Cách sử dụng tính năng trò chuyện (Chat) trong tình huống nào sau đây là phù hợp nhất trong hội thảo trên Web (Webinar)?',
    options: ['Đặt câu hỏi khi có thời gian thích hợp.', 'Thêm kiến thức để bổ sung vào bài thuyết trình.', 'Bắt chuyện với đồng nghiệp.', 'Nhận xét về bài thuyết trình.'],
    correctAnswer: 0,
    hint: 'Đừng làm gián đoạn người đang trình bày.',
    explain: 'Trong Webinar, em dùng Chat để đặt câu hỏi vào thời điểm thích hợp.'
  },
  speakerphone: {
    type: 'quiz_single',
    question: 'Em nên làm gì trước khi bắt đầu một cuộc hội thoại bằng loa ngoài?',
    options: ['Yêu cầu đầu dây bên kia nói để kiểm tra âm lượng.', 'Bật loa điện thoại và bắt đầu nói chuyện.', 'Kiểm tra âm lượng trên thiết bị liên lạc đầu ra.', 'Xin phép để tiếp tục cuộc trò chuyện trên loa ngoài.'],
    correctAnswer: 3,
    hint: 'Loa ngoài khiến người xung quanh nghe được cuộc trò chuyện.',
    explain: 'Em cần xin phép người bên kia trước khi chuyển sang loa ngoài, vì người khác có thể nghe thấy cuộc trò chuyện.'
  },
  phoneInMeeting: {
    type: 'quiz_single',
    question: 'Một người dùng nhận được cuộc gọi điện thoại khi đang họp. Quy trình hành động tốt nhất nếu họ phải nghe cuộc gọi là gì?',
    options: ['Rời khỏi phòng họp.', 'Di chuyển đến một góc của căn phòng.', 'Di chuyển cách xa những người khác 100 - 200 Feet.', 'Trả lời điện thoại.'],
    correctAnswer: 0,
    hint: 'Đừng làm phiền những người đang họp.',
    explain: 'Hãy rời khỏi phòng họp để nghe điện thoại, không làm phiền người khác.'
  },
  cultural: {
    type: 'quiz_multiple',
    question: 'Hai nhận định nào là đúng về một người nhạy cảm với sự đa dạng văn hóa? (Chọn 2)',
    options: ['Người ta nên nghiên cứu các chuẩn mực văn hóa của khách hàng quốc tế mà họ sẽ gặp.', 'Giao tiếp đồng bộ có thể tốt hơn một cuộc họp trực tuyến.', 'Tất cả các nền văn hóa đều cảm thấy thoải mái với hội nghị truyền hình.', 'Người ta nên xem liệu có cần thông dịch viên cho cuộc họp giữa các bên với nhiều ngôn ngữ mẹ đẻ hay không.'],
    correctAnswers: [0, 3],
    hint: 'Hãy tìm hiểu trước về văn hóa và ngôn ngữ của đối tác.',
    explain: 'Cần nghiên cứu chuẩn mực văn hóa của đối tác và xem xét có cần thông dịch viên khi dùng nhiều ngôn ngữ.'
  },

  /* ---------- Phần 6: Email ---------- */
  allCaps: {
    type: 'quiz_single',
    question: 'Khi sử dụng tất cả chữ in hoa trong một thư điện tử (Email) sẽ truyền đạt điều gì?',
    options: ['La hét', 'Khẩn cấp', 'Nhấn mạnh', 'Tầm quan trọng'],
    correctAnswer: 0,
    hint: 'Hạn chế viết toàn chữ in hoa.',
    explain: 'Viết toàn chữ in hoa trong Email cho người đọc cảm giác như em đang la hét.'
  },
  namCaps: {
    type: 'quiz_single',
    question: 'Bạn Nam đang viết Email gửi cho giáo viên và dự định viết hoa tất cả nội dung. Nam có nên viết hoa tất cả nội dung không? Vì sao?',
    options: ['Nên. Vì điều này sẽ giúp giáo viên dễ đọc hơn.', 'Không nên. Vì giáo viên sẽ có cảm giác bạn Nam đang la hét trong Email.', 'Nên. Vì điều này sẽ làm nội dung của Email nổi bật.', 'Không nên. Vì nội dung trong Email nhìn sẽ đẹp hơn.'],
    correctAnswer: 1,
    hint: 'Chữ in hoa toàn bộ gợi cảm xúc gì?',
    explain: 'Không nên viết hoa tất cả vì giáo viên sẽ có cảm giác Nam đang la hét.'
  },
  emailEthics: {
    type: 'quiz_single',
    question: 'Một sinh viên sắp lỡ hẹn phỏng vấn thực tập và gửi Email: "Kính gửi bà Smith, Tôi bị bận vào giờ phỏng vấn rồi, chắc là phải dời lịch thôi HY VỌNG ĐIỀU NÀY KHÔNG LÀM PHIỀN BÀ!!!!! Cám ơn nha!!!" Thành phần nào của Email thể hiện các chuẩn mực đạo đức phù hợp khi gửi Email?',
    options: ['Lời chào', 'Quy tắc viết hoa', 'Dấu câu', 'Ngữ pháp'],
    correctAnswer: 0,
    hint: 'Có ba thành phần mắc lỗi: viết hoa, dấu câu, ngữ pháp.',
    explain: 'Chỉ có lời chào "Kính gửi bà Smith" là phù hợp. Viết hoa toàn bộ, dùng nhiều dấu chấm than và ngữ pháp thân mật là không phù hợp.'
  },
  replyTime: {
    type: 'quiz_single',
    question: 'Thời gian tối đa được coi là thời gian cần thiết để trả lời Email trong một môi trường chuyên nghiệp là bao nhiêu?',
    options: ['30 phút', '48 giờ', '24 giờ', '15 phút'],
    correctAnswer: 2,
    hint: 'Trong vòng một ngày.',
    explain: 'Thời gian tiêu chuẩn để trả lời Email trong môi trường làm việc chuyên nghiệp là 24 giờ.'
  },
  matchEmailMeaning: {
    type: 'quiz_matching',
    question: 'Em hãy ghép nối từng thành phần trong thư điện tử (Email) với ý nghĩa tương ứng.',
    pairs: [
      { icon: '👤', left: 'Xác định địa chỉ Email nhận chính của thư.', right: 'To' },
      { icon: '🏷️', left: 'Chủ đề của thư điện tử.', right: 'Subject' },
      { icon: '👥', left: 'Xác định địa chỉ Email nhận một bản sao của thư. Những địa chỉ này được hiển thị công khai với những người cùng nhận thư.', right: 'Cc' },
      { icon: '🙈', left: 'Xác định địa chỉ Email nhận một bản sao của thư. Những địa chỉ này không được hiển thị công khai với những người cùng nhận thư.', right: 'Bcc' }
    ],
    hint: 'Cc = Carbon copy (công khai); Bcc = Blind carbon copy (ẩn).',
    explain: 'To: người nhận chính. Subject: chủ đề. Cc: bản sao công khai. Bcc: bản sao ẩn danh.'
  },
  matchEmailFields: {
    type: 'quiz_matching',
    question: 'Em hãy xác định các trường của một Email. Nối từng trường với chức năng của nó.',
    pairs: [
      { icon: '👥', left: 'Danh sách những người nhận được biết khác', right: 'Cc' },
      { icon: '🙈', left: 'Gửi bản sao đến những người nhận ẩn danh khác', right: 'Bcc' },
      { icon: '🏷️', left: 'Chủ đề của Email', right: 'Subject' },
      { icon: '📄', left: 'Phần nội dung Email', right: 'Body' },
      { icon: '🚩', left: 'Các đánh dấu mức độ quan trọng của thư', right: 'Low - Normal - High' }
    ],
    hint: 'Nhớ lại các thành phần cơ bản của Email.',
    explain: 'Cc: người nhận công khai. Bcc: người nhận ẩn danh. Subject: chủ đề. Body: nội dung. Low - Normal - High: mức độ quan trọng.'
  },
  bccPurpose: {
    type: 'quiz_single',
    question: 'Mục đích của trường Bcc trong Email là gì?',
    options: ['Để giữ bí mật địa chỉ Email của nhiều người nhận với nhau.', 'Để chỉ ra đây là tin nhắn cá nhân.', 'Để chỉ ra việc trả lời là không bắt buộc.', 'Để thu thập thông tin về ai đó mà họ không biết.'],
    correctAnswer: 0,
    hint: 'Bcc = Blind carbon copy (bản sao ẩn).',
    explain: 'Bcc giúp giữ bí mật địa chỉ Email của những người nhận với nhau.'
  },
  ccField: {
    type: 'quiz_single',
    question: 'Khi cần gửi Email đến một hoặc nhiều người nhận không phải là người nhận chính, đồng thời danh sách này cũng cần công khai với tất cả người nhận khác, em thêm họ vào trường nào?',
    options: ['Bc', 'Bcc', 'Cc', 'To'],
    correctAnswer: 2,
    hint: 'Công khai với mọi người nhận.',
    explain: 'Những người nhận phụ, hiển thị công khai, được thêm vào trường Cc.'
  },
  teamListCc: {
    type: 'quiz_single',
    question: 'Em muốn gửi danh sách đội bóng đá cho cô giáo chủ nhiệm qua Email, đồng thời thông báo công khai cho tất cả thành viên của đội. Em nên nhập địa chỉ Email của các thành viên vào trường nào?',
    options: ['To', 'Subject', 'Cc', 'Bcc'],
    correctAnswer: 2,
    hint: 'Cô giáo là người nhận chính (To).',
    explain: 'Cô giáo ở trường To; các thành viên là người nhận phụ công khai nên nhập vào trường Cc.'
  },
  bccPrivate: {
    type: 'quiz_single',
    question: 'Em muốn gửi Email cho một người nhưng muốn những người nhận khác không nhìn thấy địa chỉ Email của người này. Em nên nhập địa chỉ vào trường nào?',
    options: ['Bc', 'Cc', 'Bcc', 'To'],
    correctAnswer: 2,
    hint: 'Bản sao ẩn danh.',
    explain: 'Địa chỉ nhập vào trường Bcc sẽ không hiển thị với những người nhận khác.'
  },
  principalEmail: {
    type: 'quiz_single',
    question: 'Hiệu trưởng soạn Email gửi tới phụ huynh học sinh về tầm quan trọng của việc đi học đúng giờ. Thầy cần sử dụng phương pháp giao tiếp phù hợp và hiệu quả nhất. Thầy hiệu trưởng phải làm gì?',
    options: ['Gửi thư tới tất cả phụ huynh bằng cách sử dụng trường Bcc.', 'Gửi thư tới tất cả phụ huynh bằng cách sử dụng trường Cc.', 'Gửi thư tới một nhóm liên hệ chỉ bao gồm địa chỉ Email của học sinh.', 'Gửi thư tới phụ huynh của từng học sinh đi muộn.'],
    correctAnswer: 0,
    hint: 'Địa chỉ Email của phụ huynh không nên bị lộ cho nhau.',
    explain: 'Dùng Bcc để gửi cho tất cả phụ huynh và giữ bí mật địa chỉ Email của họ với nhau.'
  },

  /* ---------- Phần 7: Thanh toán kĩ thuật số ---------- */
  payTF: {
    type: 'quiz_dropdown',
    question: 'Với mỗi câu phát biểu về thanh toán kĩ thuật số, hãy chọn Đúng hoặc Sai: Tiền mặt có thể được coi là một loại hình thanh toán kĩ thuật số. ___ Thẻ ghi nợ, thẻ tín dụng, thanh toán chuyển khoản qua ngân hàng và ví điện tử đều là các loại thanh toán kĩ thuật số. ___ Thanh toán kĩ thuật số diễn ra khi cả người thanh toán và người được thanh toán sử dụng các phương tiện điện tử để thực hiện và nhận thanh toán. ___',
    blanks: [
      { options: TF, correctAnswer: 1 },
      { options: TF, correctAnswer: 0 },
      { options: TF, correctAnswer: 0 }
    ],
    hint: 'Thanh toán kĩ thuật số phải dùng phương tiện điện tử ở cả hai phía.',
    explain: 'Tiền mặt không phải thanh toán kĩ thuật số. Thẻ, chuyển khoản, ví điện tử đều là thanh toán kĩ thuật số, vì cả hai bên đều dùng phương tiện điện tử.'
  },
  payHow: {
    type: 'quiz_single',
    question: 'Thanh toán kĩ thuật số hoạt động như thế nào?',
    options: ['Thanh toán kĩ thuật số yêu cầu liên kết với tài khoản ngân hàng hoặc thẻ tín dụng.', 'Thanh toán kĩ thuật số yêu cầu người đồng ký.', 'Thanh toán kĩ thuật số giống như một I.O.U.', 'Thanh toán kĩ thuật số tương tự như Check điện tử.'],
    correctAnswer: 0,
    hint: 'Tiền được lấy từ đâu khi em thanh toán?',
    explain: 'Thanh toán kĩ thuật số cần liên kết với tài khoản ngân hàng hoặc thẻ tín dụng.'
  },
  ewallet: {
    type: 'quiz_single',
    question: 'Lợi thế của việc sử dụng ví điện tử như Apple Pay hoặc Google Pay là gì?',
    options: ['Tự động cung cấp số thẻ tín dụng của bạn cho các cửa hàng trực tuyến.', 'Tạo lịch sử tín dụng của bạn.', 'Khuyến khích bạn tìm kiếm và mua sắm với mức giá tốt nhất.', 'Yêu cầu bạn ủy quyền mọi giao dịch.'],
    correctAnswer: 0,
    hint: 'Ví điện tử giúp không phải nhập thông tin thẻ mỗi lần.',
    explain: 'Ví điện tử tự động cung cấp thông tin thẻ, giúp thanh toán nhanh chóng và tiện lợi.'
  },

  /* ---------- Phần 8: Mua hàng trong ứng dụng ---------- */
  matchInApp: {
    type: 'quiz_matching',
    question: 'Em hãy nối từng kiểu mua hàng trong ứng dụng với mô tả tương ứng.',
    pairs: [
      { icon: '🔄', left: 'Đăng ký dịch vụ phát Video trực tuyến.', right: 'Tự động gia hạn' },
      { icon: '🎞️', left: 'Thuê phim trực tuyến thông qua dịch vụ phát trực tuyến.', right: 'Không tự động gia hạn' },
      { icon: '💎', left: 'Mua đá quý hoặc tiền xu cho trò chơi trên thiết bị di động.', right: 'Vật tư tiêu hao' },
      { icon: '🔓', left: 'Mở khóa một tính năng đặc biệt trên trò chơi điện tử.', right: 'Vật tư không tiêu hao' }
    ],
    hint: 'Hết hạn có tự gia hạn không? Dùng một lần hay sở hữu vĩnh viễn?',
    explain: 'Đăng ký phát Video → tự động gia hạn; thuê phim → không tự động gia hạn; mua đá quý/xu → vật tư tiêu hao; mở khóa tính năng → vật tư không tiêu hao.'
  }
};

function q(key, topic){
  return Object.assign({ topic: topic }, QUIZ[key]);
}
