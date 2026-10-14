/* ============================================================
   BỘ CÂU HỎI DÙNG CHUNG — Bài 19, 20: Quyền riêng tư
   Dùng cho cả bài học (bai-19-20.js) và ôn tập (review.js).
   Hàm q(key, topic) trả về bản sao câu hỏi kèm nhãn chủ đề.
   ============================================================ */

const QUIZ = {
  positiveExample: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, một ví dụ về quyền công dân kĩ thuật số tích cực là gì?',
    options: ['Không báo cáo nội dung không phù hợp được tìm thấy trực tuyến', 'Chia sẻ thông tin cá nhân với người lạ trực tuyến', 'Tạo tài khoản giả để lừa gạt người khác', 'Sử dụng nền tảng trực tuyến để chia sẻ kiến thức và giúp đỡ người khác'],
    correctAnswer: 3,
    hint: 'Công dân số tích cực là người giúp ích cho cộng đồng mạng.',
    explain: 'Dùng nền tảng trực tuyến để chia sẻ kiến thức và giúp đỡ người khác là hành động của công dân số tích cực.'
  },
  negativeExample: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, một ví dụ về quyền công dân kĩ thuật số tiêu cực là gì?',
    options: ['Khuyến khích bạn bè tôn trọng và tử tế trên mạng', 'Khen ngợi tác phẩm nghệ thuật của một người bạn trực tuyến', 'Tham gia vào các dự án hợp tác trực tuyến', 'Tải xuống tài liệu có bản quyền mà không được phép'],
    correctAnswer: 3,
    hint: 'Hãy nhớ đến vi phạm bản quyền.',
    explain: 'Tải xuống tài liệu có bản quyền mà không được phép là vi phạm bản quyền — hành động của công dân số tiêu cực.'
  },
  nameDropdown: {
    type: 'quiz_dropdown',
    question: 'Em hãy chọn Có nếu câu phát biểu là ví dụ về công dân số mẫu mực hoặc chọn Không nếu không phải: Sử dụng tên và ngày sinh của một người bạn làm tên hiển thị công khai của mình. ___ Đưa địa chỉ nhà của bạn cùng lớp cho một người em gặp trên mạng. ___ Trích dẫn nguồn của bức ảnh mà em dùng cho áp phích kĩ thuật số của mình. ___',
    blanks: [
      { options: ['Có', 'Không'], correctAnswer: 1 },
      { options: ['Có', 'Không'], correctAnswer: 1 },
      { options: ['Có', 'Không'], correctAnswer: 0 }
    ],
    hint: 'Không tiết lộ thông tin cá nhân của người khác; luôn trích dẫn nguồn.',
    explain: 'Dùng thông tin của bạn và đưa địa chỉ nhà của bạn cho người lạ là không đúng. Trích dẫn nguồn ảnh là hành động đúng.'
  },
  followDropdown: {
    type: 'quiz_dropdown',
    question: 'Với mỗi câu phát biểu, em hãy chọn Có nếu phát biểu đó thể hiện hành động của một công dân kĩ thuật số mẫu mực hoặc chọn Không nếu không phải: Giả làm một người khác để tăng số lượng người theo dõi trên mạng xã hội ___ Đưa ra đánh giá (Review) về một nhà hàng trên trang mạng xã hội ___ Tải thông tin điểm thấp của bạn cùng lớp lên trang mạng xã hội của bản thân ___',
    blanks: [
      { options: ['Có', 'Không'], correctAnswer: 1 },
      { options: ['Có', 'Không'], correctAnswer: 0 },
      { options: ['Có', 'Không'], correctAnswer: 1 }
    ],
    hint: 'Giả mạo và tiết lộ thông tin của bạn là hành động tiêu cực.',
    explain: 'Giả làm người khác và tải điểm thấp của bạn lên mạng là không đúng. Đánh giá một nhà hàng là sử dụng mạng xã hội có trách nhiệm.'
  },
  gameDropdown: {
    type: 'quiz_dropdown',
    question: 'Với mỗi câu phát biểu, em hãy chọn Có nếu là hành động của một công dân kĩ thuật số mẫu mực hoặc chọn Không nếu không phải: Em sao chép một trò chơi điện tử đã mua và đưa cho bạn của mình. ___ Em tải ảnh chụp bảng điểm của bạn cùng lớp lên mạng. ___ Em chia sẻ bài đăng về một bài báo liên quan đến thời tiết. ___',
    blanks: [
      { options: ['Có', 'Không'], correctAnswer: 1 },
      { options: ['Có', 'Không'], correctAnswer: 1 },
      { options: ['Có', 'Không'], correctAnswer: 0 }
    ],
    hint: 'Sao chép trái phép là vi phạm bản quyền; bảng điểm là thông tin riêng của bạn.',
    explain: 'Sao chép trò chơi cho bạn và đăng bảng điểm của bạn là không đúng. Chia sẻ bài báo thời tiết là hành động phù hợp.'
  },
  ageLimited: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, ví dụ về nội dung kĩ thuật số có thể bị giới hạn độ tuổi là gì?',
    options: ['Nội dung giáo dục được đăng trên trang Web của trường', 'Phim hoạt hình trẻ em', 'Công thức nấu ăn và hướng dẫn nấu ăn', 'Trò chơi điện tử bạo lực'],
    correctAnswer: 3,
    hint: 'Nội dung nào không phù hợp với trẻ nhỏ?',
    explain: 'Trò chơi điện tử bạo lực có thể bị giới hạn độ tuổi.'
  },
  inappropriate: {
    type: 'quiz_single',
    question: 'Em nên làm gì khi thấy nội dung trực tuyến không phù hợp với lứa tuổi của mình?',
    options: ['Chia sẻ với bạn bè của em', 'Bỏ qua và tiếp tục duyệt Web', 'Báo cáo việc này cho người lớn đáng tin cậy hoặc người điều hành trang Web', 'Để lại một bình luận rằng nội dung làm em khó chịu'],
    correctAnswer: 2,
    hint: 'Dừng xem và nói với người lớn.',
    explain: 'Em nên dừng xem, nói với người lớn đáng tin cậy và báo cáo cho người kiểm duyệt trang Web.'
  },
  termMatching: {
    type: 'quiz_matching',
    question: 'Em hãy nối từng thuật ngữ với phát biểu tương ứng.',
    pairs: [
      { icon: '💿', left: 'Sao chép, phân phối hoặc sử dụng nội dung kĩ thuật số mà không có sự cho phép của chủ sở hữu', right: 'Piracy (Vi phạm bản quyền)' },
      { icon: '🤝', left: 'Hành động có trách nhiệm, tôn trọng và hợp pháp khi sử dụng các công cụ kĩ thuật số và trực tuyến', right: 'Ethical (Đạo đức)' },
      { icon: '💻', left: 'Người sử dụng các kĩ năng và kiến thức máy tính để thử nghiệm, khám phá và giải quyết các vấn đề về công nghệ', right: 'Hacker' },
      { icon: '🎭', left: 'Không xác định được danh tính hoặc che giấu thông tin cá nhân trực tuyến', right: 'Anonymity (Ẩn danh)' }
    ],
    hint: 'Tìm từ khóa: bản quyền, đạo đức, kĩ năng máy tính, che giấu danh tính.',
    explain: 'Piracy: vi phạm bản quyền. Ethical: hành động có đạo đức. Hacker: người dùng kĩ năng máy tính để khám phá. Anonymity: ẩn danh.'
  },
  citizenTF: {
    type: 'quiz_dropdown',
    question: 'Với mỗi câu phát biểu về công dân số, em hãy chọn Đúng hoặc Sai: Ẩn danh là sử dụng họ và tên thật của bạn trên Internet. ___ Tấn công xâm nhập (Hacking) là truy cập trái phép vào một thiết bị. ___ Lừa đảo công nghệ cao (Catfishing) là giả vờ làm một người khác. ___',
    blanks: [
      { options: ['Đúng', 'Sai'], correctAnswer: 1 },
      { options: ['Đúng', 'Sai'], correctAnswer: 0 },
      { options: ['Đúng', 'Sai'], correctAnswer: 0 }
    ],
    hint: 'Ẩn danh là che giấu danh tính thật.',
    explain: 'Ẩn danh là KHÔNG tiết lộ danh tính thật. Hacking là truy cập trái phép và Catfishing là giả vờ làm người khác.'
  },
  privacySettingBlank: {
    type: 'quiz_single',
    question: '……… cho phép em kiểm soát một số thông tin cá nhân trực tuyến của mình. Em hãy chọn đáp án đúng để điền vào chỗ trống.',
    options: ['Cài đặt Tùy chọn (Preference)', 'Cài đặt Hình thức (Appearance)', 'Cài đặt Quyền riêng tư (Privacy)', 'Cài đặt Trợ năng (Accessibility)'],
    correctAnswer: 2,
    hint: 'Từ cần điền liên quan đến việc kiểm soát thông tin cá nhân.',
    explain: 'Cài đặt Quyền riêng tư (Privacy) cho phép em kiểm soát một số thông tin cá nhân trực tuyến.'
  },
  privacyImportance2: {
    type: 'quiz_multiple',
    question: 'Em hãy cho biết, tùy chọn nào sau đây giải thích cho tầm quan trọng của cài đặt quyền riêng tư? (Chọn 2)',
    options: ['Có thể giúp bảo vệ em khỏi những kẻ săn trẻ em trực tuyến.', 'Giúp em có được nhiều người theo dõi hơn trên mạng xã hội.', 'Có thể giúp bảo vệ em khỏi những bình luận tiêu cực trên mạng từ bạn bè.', 'Có thể cho em sự riêng tư tuyệt đối.', 'Giúp em kiểm soát ai có thể xem bài đăng của mình.'],
    correctAnswers: [0, 4],
    hint: 'Một lựa chọn nói về bảo vệ khỏi kẻ xấu, một lựa chọn nói về việc kiểm soát người xem.',
    explain: 'Cài đặt quyền riêng tư giúp bảo vệ em khỏi kẻ săn trẻ em trực tuyến và giúp em kiểm soát ai có thể xem bài đăng của mình.'
  },
  privacyImportance: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, tầm quan trọng của cài đặt quyền riêng tư là gì?',
    options: ['Để bảo vệ thông tin cá nhân và kiểm soát những người nhìn thấy thông tin đó', 'Để có được người theo dõi hoặc lượt thích', 'Để chia sẻ thông tin cá nhân với công chúng', 'Để tăng khả năng hiển thị của bài viết hoặc tin nhắn trực tuyến'],
    correctAnswer: 0,
    hint: 'Quyền riêng tư = bảo vệ và kiểm soát.',
    explain: 'Cài đặt quyền riêng tư giúp bảo vệ thông tin cá nhân và kiểm soát những người nhìn thấy thông tin đó.'
  },
  locationSetting: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, cài đặt thiết bị di động nào cho phép ứng dụng theo dõi vị trí của em?',
    options: ['Cài đặt thông báo', 'Cài đặt độ sáng màn hình', 'Cài đặt Wifi', 'Cài đặt vị trí'],
    correctAnswer: 3,
    hint: 'Theo dõi vị trí = cài đặt vị trí.',
    explain: 'Cài đặt vị trí cho phép ứng dụng theo dõi vị trí của em.'
  },
  protectPost: {
    type: 'quiz_single',
    question: 'Em có thể bảo vệ quyền riêng tư của mình khi đăng bài trực tuyến bằng cách nào?',
    options: ['Điều chỉnh cài đặt quyền riêng tư để giới hạn người có thể xem bài đăng của em', 'Làm cho tất cả các bài viết của em có thể xem được công khai', 'Xóa bài viết của em vài ngày một lần để đảm bảo sự riêng tư', 'Sử dụng mật khẩu phức tạp cho tài khoản của em'],
    correctAnswer: 0,
    hint: 'Hãy giới hạn người xem bài đăng.',
    explain: 'Điều chỉnh cài đặt quyền riêng tư để giới hạn người có thể xem bài đăng giúp bảo vệ quyền riêng tư khi đăng bài.'
  },
  controlViewers: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, làm cách nào có thể kiểm soát ai có thể xem, thích và nhận xét về bài đăng trực tuyến của em?',
    options: ['Thay đổi cài đặt thông báo', 'Điều chỉnh cài đặt quyền riêng tư', 'Cập nhật mật khẩu tài khoản của em', 'Sửa đổi cài đặt kiểu phông chữ'],
    correctAnswer: 1,
    hint: 'Kiểm soát người xem = quyền riêng tư.',
    explain: 'Điều chỉnh cài đặt quyền riêng tư giúp kiểm soát ai có thể xem, thích và nhận xét bài đăng của em.'
  },
  hideLocation: {
    type: 'quiz_single',
    question: 'Khi tìm một nhà hàng bán thức ăn nhanh trên mạng, hành động nào sẽ giúp ẩn vị trí của em?',
    options: ['Bật duyệt Web ở chế độ riêng tư.', 'Xóa Cookies của bạn.', 'Tải phần mềm chặn quảng cáo.', 'Xóa Cache (bộ đệm ẩn) sau khi ngừng duyệt Web.'],
    correctAnswer: 0,
    hint: 'Chế độ Incognito/InPrivate giúp hạn chế bị theo dõi khi duyệt Web.',
    explain: 'Bật duyệt Web ở chế độ riêng tư giúp ẩn vị trí và hạn chế bị theo dõi khi duyệt Web.'
  },
  privacyTF: {
    type: 'quiz_dropdown',
    question: 'Với mỗi câu phát biểu về quyền riêng tư, em hãy chọn Đúng hoặc Sai: Xác thực đa yếu tố có thể giúp bảo vệ tài khoản trực tuyến của em. ___ Không thể sử dụng cài đặt quyền riêng tư để giới hạn người có thể xem dữ liệu của em. ___ Sử dụng cài đặt bảo mật hạn chế để chặn người lạ thấy bài đăng của em. ___',
    blanks: [
      { options: ['Đúng', 'Sai'], correctAnswer: 0 },
      { options: ['Đúng', 'Sai'], correctAnswer: 1 },
      { options: ['Đúng', 'Sai'], correctAnswer: 0 }
    ],
    hint: 'Cài đặt quyền riêng tư chính là để giới hạn người xem dữ liệu.',
    explain: 'MFA giúp bảo vệ tài khoản. Cài đặt quyền riêng tư CÓ thể giới hạn người xem dữ liệu. Cài đặt bảo mật hạn chế giúp chặn người lạ thấy bài đăng.'
  }
};

function q(key, topic){
  return Object.assign({ topic: topic }, QUIZ[key]);
}
