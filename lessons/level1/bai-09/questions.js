/* ============================================================
   BỘ CÂU HỎI DÙNG CHUNG — Level 1 · Bài 09: Tìm hiểu về kết nối mạng không dây
   Dùng cho cả bài học (script.js) và ôn tập (review.js).
   Hàm q(key, topic) trả về bản sao câu hỏi kèm nhãn chủ đề.

   Nguồn: K6_B09.pptx. Các câu lặp lại ở phần ôn tập cuối file gốc đã được
   gộp thành 1 câu. ĐÁP ÁN: file gốc đánh dấu bằng animation (đáp án hiện ra),
   đã đối chiếu với nội dung bài học.
   Các câu có ghi "BỔ SUNG" là câu mới, thêm vào vì file gốc chưa có câu
   vận dụng cho phần đó (cáp Ethernet, ISP, Bluetooth, rủi ro Wi-Fi công cộng,
   chọn kết nối, khắc phục sự cố có AI hỗ trợ).

Câu adapterWifi: theo đáp án file gốc là "Access Point" (điểm truy cập   phát Wi-Fi mà máy tính kết nối vào ở chế độ Infrastructure).
   ============================================================ */

const TF = ['Đúng', 'Sai'];
const YN = ['Có', 'Không'];
const DO = ['Nên làm', 'Không nên tự ý làm'];

const QUIZ = {

  /* ===== Bổ sung: K6_B09.pptx (slide 34) và pptx ===== */
  modemWhat: {
    type: 'quiz_single',
    question: 'Thiết bị nào chuyển đổi dữ liệu từ kỹ thuật số (Digital) sang tương tự (Analog) và ngược lại để truyền tín hiệu qua mạng?',
    options: ['Modem', 'Router', 'Ethernet Cable', 'Network Adapter'],
    correctAnswer: 0,
    hint: 'Tên đầy đủ: Modulator/Demodulator (điều chế/giải mã).',
    explain: 'Modem điều chế và giải mã, chuyển đổi tín hiệu số sang tương tự và ngược lại; là cầu nối giữa mạng gia đình và nhà cung cấp dịch vụ Internet (ISP).'
  },

  /* ===== Câu hỏi gốc của bài học ===== */

  /* ---------- Phần 1: Thiết bị kết nối ---------- */
  adapterWifi: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, thiết bị nào cần để cho phép một máy tính truy cập được Wi-Fi?',
    options: ['Access Point', 'PCI Adapter', 'SDIO device', 'Modem'],
    correctAnswer: 0,
    hint: 'Ở chế độ Infrastructure, các thiết bị kết nối với nhau và với mạng LAN có dây thông qua Router hoặc điểm truy cập.',
    explain: 'Để truy cập Wi-Fi, máy tính kết nối đến Access Point (điểm truy cập), thiết bị phát sóng Wi-Fi và nối với mạng LAN có dây thông qua Router. Máy tính cũng cần có Wireless Adapter để thu và phát tín hiệu Radio.'
  },
  nicNeed: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Để tạo kết nối Ethernet giữa máy tính và mạng LAN, máy tính phải có thành phần nào?',
    options: ['Card giao diện mạng NIC', 'Loa', 'Webcam', 'Bàn phím'],
    correctAnswer: 0,
    hint: 'Tên đầy đủ: Network Interface Card.',
    explain: 'Máy tính phải có Card giao diện mạng NIC để tạo kết nối Ethernet với mạng LAN.'
  },
  nicSpeed: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, Card giao diện mạng NIC được sản xuất để hỗ trợ các tốc độ đường truyền nào sau đây?',
    options: ['1Mbps, 10Mbps và 1Gbps', '100Mbps, 1000Mbps và 1Gbps', '10Mbps, 100Mbps và 1Gbps', '1Mbps, 100Mbps và 10Gbps'],
    correctAnswer: 2,
    hint: 'Ba mức tốc độ phổ biến: 10 – 100 – 1 Gbps.',
    explain: 'NIC hỗ trợ các tốc độ đường truyền 10Mbps, 100Mbps và 1Gbps.'
  },
  ethernetWhat: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Kết nối Ethernet là loại kết nối nào?',
    options: ['Kết nối mạng bằng dây cáp (có dây)', 'Kết nối mạng bằng sóng vô tuyến', 'Kết nối bằng sóng Bluetooth', 'Kết nối bằng gói dữ liệu di động'],
    correctAnswer: 0,
    hint: 'Ethernet gồm cáp Ethernet và cổng Ethernet.',
    explain: 'Ethernet là công nghệ kết nối và truyền dữ liệu qua mạng bằng các kết nối có dây, gồm cáp Ethernet và cổng Ethernet.'
  },
  matchCable: { /* BỔ SUNG */
    type: 'quiz_matching',
    question: 'Em hãy nối từng loại cáp Ethernet với mô tả tương ứng.',
    pairs: [
      { icon: '🔌', left: 'Phổ biến nhất, hỗ trợ tốc độ lên đến 1 Gigabit/s.', right: 'Cat5e' },
      { icon: '⚡', left: 'Chất lượng cao, hỗ trợ tốc độ lên đến 10 Gigabit/s.', right: 'Cat6' },
      { icon: '🚀', left: 'Cao cấp, dành cho các ứng dụng đòi hỏi băng thông rất lớn.', right: 'Cat7' }
    ],
    hint: 'Số càng lớn thì cáp càng cao cấp.',
    explain: 'Cat5e: phổ biến nhất (đến 1 Gb/s). Cat6: chất lượng cao (đến 10 Gb/s). Cat7: cao cấp cho băng thông rất lớn.'
  },
  ispWhat: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'ISP (Internet Service Provider) là gì?',
    options: ['Nhà cung cấp dịch vụ Internet', 'Một loại cáp mạng', 'Phần mềm diệt virus', 'Một loại màn hình máy tính'],
    correctAnswer: 0,
    hint: 'Hãy dịch tên tiếng Anh: Internet Service Provider.',
    explain: 'ISP là nhà cung cấp dịch vụ Internet, cho người dùng khả năng kết nối với Internet.'
  },
  ispExample: { /* BỔ SUNG */
    type: 'quiz_multiple',
    question: 'Hai nhà cung cấp dịch vụ Internet (ISP) ở Việt Nam là gì? (Chọn 2)',
    options: ['Viettel', 'FPT Telecom', 'Samsung', 'Logitech'],
    correctAnswers: [0, 1],
    hint: 'Hai công ty này cung cấp gói Internet cho các gia đình.',
    explain: 'Viettel, FPT (và VNPT) là các ISP ở Việt Nam. Samsung và Logitech sản xuất thiết bị, không phải ISP.'
  },

  /* ---------- Phần 2: Có dây và không dây ---------- */
  lanWhat: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'LAN (Local Area Network - mạng cục bộ) là gì?',
    options: ['Mạng kết nối các thiết bị trong phạm vi nhỏ như một phòng học, ngôi nhà hay trường học', 'Mạng lớn nhất thế giới, kết nối tất cả các quốc gia', 'Mạng chỉ dùng riêng cho điện thoại di động', 'Mạng chỉ dành cho máy chủ AI'],
    correctAnswer: 0,
    hint: 'Chữ "Local" nghĩa là "cục bộ", trong một khu vực nhỏ.',
    explain: 'LAN là mạng cục bộ, kết nối các thiết bị trong phạm vi nhỏ (phòng học, ngôi nhà, trường học, văn phòng), thường nối bằng cáp Ethernet.'
  },
  wlanWhat: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'WLAN khác với mạng LAN nối bằng cáp ở điểm nào?',
    options: ['WLAN kết nối bằng sóng vô tuyến (Wi-Fi) thay vì dây cáp', 'WLAN lớn hơn cả Internet', 'WLAN chỉ dùng cáp Ethernet', 'WLAN không cần thiết bị nào để kết nối'],
    correctAnswer: 0,
    hint: 'Chữ "W" trong WLAN là Wireless, nghĩa là "không dây".',
    explain: 'WLAN (Wireless LAN) là mạng cục bộ không dây, dùng sóng vô tuyến Wi-Fi; thiết bị tham gia phải có Wireless Adapter.'
  },
  matchLanWlan: { /* BỔ SUNG */
    type: 'quiz_matching',
    question: 'Em hãy nối mỗi mô tả với loại mạng tương ứng.',
    pairs: [
      { icon: '🏫', left: 'Mạng cục bộ trong phạm vi nhỏ, thường nối thiết bị bằng cáp Ethernet.', right: 'LAN' },
      { icon: '📶', left: 'Mạng cục bộ dùng sóng vô tuyến (Wi-Fi), thiết bị cần có Wireless Adapter.', right: 'WLAN' },
      { icon: '🌍', left: 'Mạng toàn cầu, không thuộc sở hữu riêng của tổ chức nào.', right: 'Internet' }
    ],
    hint: 'Cục bộ có dây là LAN, cục bộ không dây là WLAN; mạng toàn cầu là Internet.',
    explain: 'LAN: mạng cục bộ nối bằng cáp. WLAN: mạng cục bộ không dây dùng Wi-Fi. Internet: mạng toàn cầu.'
  },

  wifiTech: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Kết nối không dây Wi-Fi dùng gì để truyền và nhận tín hiệu?',
    options: ['Sóng vô tuyến (sóng Radio)', 'Dây cáp đồng', 'Ánh sáng đèn LED', 'Đường dây điện thoại'],
    correctAnswer: 0,
    hint: 'Wi-Fi không cần dây nối.',
    explain: 'Wi-Fi là công nghệ sử dụng sóng vô tuyến để truyền và nhận tín hiệu.'
  },
  adhocSafe: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Chế độ kết nối không dây nào được coi là rất KHÔNG an toàn?',
    options: ['Ad-hoc', 'Infrastructure', 'Ethernet', 'Kết nối qua Router có mật khẩu'],
    correctAnswer: 0,
    hint: 'Chế độ này nối trực tiếp các thiết bị với nhau, không qua Router hay Access Point.',
    explain: 'Kết nối Ad-hoc (các thiết bị nối trực tiếp với nhau bằng Wi-Fi) là kết nối rất không an toàn.'
  },
  infraMode: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Ở chế độ kết nối Infrastructure, các thiết bị liên lạc với nhau thông qua thiết bị nào?',
    options: ['Router hoặc điểm truy cập (Access Point)', 'Chỉ qua cáp USB', 'Chỉ qua tai nghe Bluetooth', 'Không cần thiết bị nào, nối trực tiếp với nhau'],
    correctAnswer: 0,
    hint: 'Infrastructure nghĩa là "hạ tầng": có thiết bị trung gian ở giữa.',
    explain: 'Ở chế độ Infrastructure, các thiết bị kết nối và liên lạc với nhau qua Router hoặc điểm truy cập (Access Point), đồng thời kết nối được với các hệ thống khác trên mạng LAN có dây thông qua Router.'
  },
  handheldAdapter: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Vì sao điện thoại thông minh và máy tính bảng có thể kết nối Wi-Fi mà không cần gắn thêm thiết bị?',
    options: ['Vì chúng được tích hợp sẵn Wireless Adapter bên trong thiết bị', 'Vì chúng luôn dùng cáp Ethernet', 'Vì chúng không cần tín hiệu Radio', 'Vì chúng có sẵn ISP bên trong'],
    correctAnswer: 0,
    hint: 'Hầu hết các thiết bị cầm tay đã có sẵn bộ điều hợp không dây.',
    explain: 'Hầu hết các thiết bị cầm tay (Smartphone, Tablet) đều được tích hợp Wireless Adapter bên trong thiết bị.'
  },
  obstacle: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Vật cản nào có thể làm giảm tín hiệu Radio của Wi-Fi?',
    options: ['Sàn bê tông và tường bê tông', 'Ánh sáng của đèn', 'Màu sơn trên tường', 'Tiếng ồn trong phòng'],
    correctAnswer: 0,
    hint: 'Sóng Radio khó xuyên qua các vật cản dày, đặc.',
    explain: 'Các vật cản như sàn bê tông, tường bê tông… có thể làm giảm tín hiệu Radio, và tín hiệu càng yếu khi thiết bị càng xa thiết bị phát.'
  },

  adhoc: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, một chế độ kết nối không dây mà các máy tính kết nối trực tiếp với nhau bằng Wi-Fi được gọi là gì?',
    options: ['WiMax', 'Ad-hoc', 'Bluetooth', 'Infrastructure'],
    correctAnswer: 1,
    hint: 'Chế độ này không cần thiết bị phát Wi-Fi ở giữa.',
    explain: 'Chế độ Ad-hoc cho phép các máy tính kết nối trực tiếp với nhau bằng Wi-Fi.'
  },
  wiredWirelessTwo: {
    type: 'quiz_multiple',
    question: 'Hãy chọn phát biểu đúng về sự khác biệt giữa mạng có dây và không dây? (Chọn 2)',
    options: ['Kết nối Wi-Fi được mã hóa sẽ an toàn hơn so với kết nối Ethernet.', 'Kết nối Ethernet sẽ ổn định hơn kết nối Wi-Fi.', 'Kết nối Ethernet thường cung cấp tốc độ kết nối mạng nhanh hơn kết nối Wi-Fi.', 'Kết nối Wi-Fi sẽ tốn nhiều diện tích lắp đặt hơn.'],
    correctAnswers: [1, 2],
    hint: 'Ethernet ít bị nhiễu sóng và có tốc độ cao.',
    explain: 'Ethernet ổn định hơn (ít bị nhiễu) và thường nhanh hơn Wi-Fi. Ethernet cũng bảo mật và tin cậy hơn Wi-Fi.'
  },
  wiredWirelessYN: {
    type: 'quiz_dropdown',
    question: 'Với mỗi câu phát biểu về sự khác biệt giữa mạng có dây và không dây, hãy chọn Có hoặc Không: Kết nối Wi-Fi được mã hóa an toàn hơn so với kết nối Ethernet. ___ Kết nối Wi-Fi thường ít xảy ra độ trễ khi truyền dữ liệu hơn so với kết nối Ethernet. ___ Kết nối Ethernet thường cung cấp tốc độ kết nối mạng nhanh hơn kết nối Wi-Fi. ___',
    blanks: [
      { options: YN, correctAnswer: 1 },
      { options: YN, correctAnswer: 1 },
      { options: YN, correctAnswer: 0 }
    ],
    hint: 'Ethernet: nhanh, ổn định, ít độ trễ, bảo mật cao. Wi-Fi: kém ổn định, nhiều độ trễ hơn.',
    explain: 'Ethernet nhanh hơn, ít độ trễ hơn và an toàn hơn Wi-Fi. Wi-Fi có độ trễ nhiều hơn và kém an toàn hơn.'
  },
  wiredAdvantages: {
    type: 'quiz_multiple',
    question: 'Bạn đang phân vân để quyết định kết nối Internet với máy tính xách tay của mình bằng Wi-Fi hay kết nối có dây. Hai ưu điểm của mạng có dây so với mạng Wi-Fi là gì? (Chọn 2)',
    options: ['Tốc độ nhanh hơn', 'Tốn ít tiền hơn để truyền dữ liệu', 'Tính di động (Mobility)', 'Cài đặt (Installation)', 'Bảo mật (Security)'],
    correctAnswers: [0, 4],
    hint: 'Mạng có dây nhanh và an toàn, nhưng không di chuyển tự do được.',
    explain: 'Mạng có dây có tốc độ nhanh hơn và bảo mật tốt hơn Wi-Fi. Wi-Fi mới có ưu thế về tính di động.'
  },
  phoneInternet: {
    type: 'quiz_multiple',
    question: 'Bạn muốn sử dụng điện thoại thông minh của mình để duyệt Internet. Một điện thoại thông minh có thể kết nối Internet bằng cách nào? (Chọn 2)',
    options: ['Wi-Fi', 'Ứng dụng Mobile', 'Ethernet', 'Cloud', 'Gói dữ liệu di động'],
    correctAnswers: [0, 4],
    hint: 'Điện thoại thường không có cổng Ethernet; nó dùng sóng không dây hoặc mạng di động.',
    explain: 'Điện thoại thông minh kết nối Internet bằng Wi-Fi hoặc gói dữ liệu di động.'
  },
  signalDistance: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Em ngồi càng xa thiết bị phát Wi-Fi thì tín hiệu như thế nào?',
    options: ['Càng yếu', 'Càng mạnh', 'Không thay đổi', 'Tự chuyển sang dùng cáp'],
    correctAnswer: 0,
    hint: 'Hãy nhớ lại thí nghiệm kéo thanh trượt khoảng cách.',
    explain: 'Tín hiệu càng yếu khi càng xa thiết bị phát tín hiệu.'
  },
  useWireless: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Khi nào em nên dùng kết nối không dây (Wi-Fi)?',
    options: ['Khi thiết bị có khả năng kết nối Wi-Fi và không có cổng Ethernet', 'Khi thiết bị chỉ có cổng Ethernet và không có Wi-Fi', 'Khi em không muốn dùng mạng', 'Khi máy chưa cài hệ điều hành'],
    correctAnswer: 0,
    hint: 'Hãy nghĩ đến chiếc điện thoại hoặc laptop mỏng không có cổng mạng.',
    explain: 'Dùng kết nối không dây khi thiết bị có khả năng kết nối Wi-Fi hoặc không có cổng Ethernet (hay cổng USB để gắn NIC ngoài).'
  },
  useWired: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Khi nào nên chọn kết nối có dây (Ethernet)?',
    options: ['Khi thiết bị có khả năng kết nối Ethernet và có cơ sở hạ tầng mạng LAN đáp ứng nhu cầu', 'Khi thiết bị không có cổng Ethernet', 'Khi em cần di chuyển khắp phòng', 'Khi chỉ có điện thoại thông minh'],
    correctAnswer: 0,
    hint: 'Cần có cổng Ethernet và hạ tầng mạng LAN.',
    explain: 'Dùng kết nối có dây khi thiết bị có khả năng kết nối Ethernet và có cơ sở hạ tầng mạng đáp ứng nhu cầu kết nối mạng LAN.'
  },

  /* ---------- Phần 3: Băng tần, Bluetooth và rủi ro ---------- */
  wifiBand: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, các mạng WLAN có thể sử dụng băng thông nào dưới đây?',
    options: ['2.4Ghz – 5Ghz', '5.2Ghz – 5.3Ghz', '902 Mhz – 903Mhz', '3.3Ghz – 3.6 Ghz'],
    correctAnswer: 0,
    hint: 'Hai băng tần quen thuộc trên router: 2.4 GHz và 5 GHz.',
    explain: 'Các mạng WLAN sử dụng một trong hai băng tần sóng Radio: 2.4GHz hoặc 5GHz.'
  },
  bluetoothUse: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Bluetooth thường được dùng để kết nối điện thoại/máy tính với phụ kiện nào?',
    options: ['Tai nghe, chuột, bàn phím không dây', 'Cáp Ethernet', 'Modem quang', 'Máy chủ web'],
    correctAnswer: 0,
    hint: 'Đó là những phụ kiện nhỏ gọn không cần dây nối.',
    explain: 'Bluetooth là công nghệ không dây dùng để kết nối thiết bị với các phụ kiện hỗ trợ Bluetooth như tai nghe, chuột, bàn phím.'
  },
  bluetoothStep: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, điều nào sau đây là một bước cần phải thực hiện để kết nối tai nghe Bluetooth với máy tính xách tay?',
    options: ['Kết nối tai nghe với cổng USB', 'Thay đổi tùy chọn sử dụng năng lượng trên máy tính xách tay thành High Performance', 'Đặt tai nghe vào chế độ khám phá (Discovery Mode)', 'Tắt Card mạng không dây vì nó cản trở Bluetooth'],
    correctAnswer: 2,
    hint: 'Máy tính phải "tìm thấy" tai nghe thì mới ghép nối được.',
    explain: 'Phải đặt tai nghe vào chế độ khám phá (Discovery Mode) để máy tính tìm thấy và ghép nối (Paired).'
  },
  bluetoothPairTF: { /* BỔ SUNG */
    type: 'quiz_dropdown',
    question: 'Với mỗi câu phát biểu về Bluetooth, hãy chọn Đúng hoặc Sai: Thiết bị và phụ kiện Bluetooth phải được ghép nối (Paired) với nhau trước khi giao tiếp. ___ Bluetooth truyền tín hiệu qua cáp Ethernet. ___ Em nên đồng ý mọi yêu cầu ghép nối đến từ thiết bị lạ. ___',
    blanks: [
      { options: TF, correctAnswer: 0 },
      { options: TF, correctAnswer: 1 },
      { options: TF, correctAnswer: 1 }
    ],
    hint: 'Bluetooth là công nghệ không dây, và em chỉ ghép nối với thiết bị mình biết.',
    explain: 'Bluetooth cần ghép nối trước khi giao tiếp và là công nghệ không dây. Không nên chấp nhận ghép nối với thiết bị lạ vì có thể bị đánh cắp dữ liệu.'
  },
  bluetoothStranger: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Điện thoại của em hiện thông báo: "Thiết bị lạ muốn ghép nối Bluetooth. Đồng ý?" Em nên làm gì?',
    options: ['Từ chối vì em không biết thiết bị đó', 'Bấm Đồng ý cho nhanh', 'Đọc mã ghép nối cho người lạ', 'Bật thêm Wi-Fi công cộng'],
    correctAnswer: 0,
    hint: 'Kẻ xấu có thể lấy ảnh, danh bạ, tin nhắn và vị trí qua Bluetooth.',
    explain: 'Bluetooth lạ ghép nối có thể bị đánh cắp ảnh, danh bạ, tin nhắn, vị trí. Hãy từ chối thiết bị em không biết.'
  },
  publicWifi: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Em ngồi ở quán cà phê và thấy một Wi-Fi công cộng không có mật khẩu. Cách làm nào an toàn nhất?',
    options: ['Không dùng Wi-Fi lạ để đăng nhập email hoặc tài khoản ngân hàng', 'Đăng nhập tài khoản ngân hàng để tiết kiệm dữ liệu 4G', 'Gửi mật khẩu cho bạn qua mạng đó', 'Chia sẻ ảnh cá nhân qua mạng đó'],
    correctAnswer: 0,
    hint: 'Wi-Fi công cộng không bảo mật có thể bị kẻ xấu đánh cắp dữ liệu.',
    explain: 'Wi-Fi công cộng không bảo mật có thể làm lộ email, tài khoản ngân hàng và mật khẩu. Hãy tránh nhập thông tin quan trọng trên mạng đó.'
  },

  /* ---------- Phần 4: Công nghệ kết nối ---------- */
  matchNetTech: {
    type: 'quiz_matching',
    question: 'Ghép nối từng khái niệm kết nối mạng với định nghĩa tương ứng.',
    pairs: [
      { icon: '☎️', left: 'Một công nghệ mạng chạy trên đường dây điện thoại.', right: 'Digital Subscriber Line (DSL)' },
      { icon: '📺', left: 'Một công nghệ mạng chạy trên cáp đồng trục của TV.', right: 'Cable Service' },
      { icon: '🧩', left: 'Bảng mạch cho phép máy tính để bàn kết nối với mạng.', right: 'Network Adapter' },
      { icon: '🔗', left: 'Công nghệ kết nối các máy tính với nhau trong mạng cục bộ. Là công nghệ có dây, nhanh hơn Wi-Fi, tin cậy và bảo mật cao hơn.', right: 'Ethernet' },
      { icon: '🔁', left: 'Thiết bị gửi và nhận thông tin giữa nhà bạn và ISP thông qua đường dây điện thoại, cáp quang hoặc cáp đồng trục TV.', right: 'Modem' }
    ],
    hint: 'Hãy tìm từ khóa: điện thoại, cáp TV, bảng mạch, mạng cục bộ, gửi/nhận.',
    explain: 'DSL chạy trên đường dây điện thoại; Cable Service trên cáp đồng trục TV; Network Adapter là bảng mạch nối máy tính với mạng; Ethernet là kết nối có dây trong mạng cục bộ; Modem gửi/nhận thông tin giữa nhà và ISP.'
  },

  /* ---------- Phần 5: Khắc phục sự cố ---------- */
  checkInternet: {
    type: 'quiz_single',
    question: 'Bạn đang gặp khó khăn khi gửi và nhận thông tin. Làm cách nào bạn có thể xác định xem thiết bị của mình có được kết nối với Internet hay không?',
    options: ['Hãy thử gửi một tin nhắn', 'Thử lưu một tập tin', 'Tải xuống ứng dụng Speedtest', 'Mở trình duyệt'],
    correctAnswer: 3,
    hint: 'Cách đơn giản nhất: thử vào một trang web.',
    explain: 'Mở trình duyệt và thử truy cập một trang web là cách đơn giản để biết thiết bị có kết nối Internet hay không.'
  },
  airplane: { /* BỔ SUNG */
    type: 'quiz_single',
    question: 'Em không vào được mạng và thấy biểu tượng máy bay trên điện thoại đang sáng. Em nên làm gì?',
    options: ['Tắt Chế độ Máy bay để bật lại kết nối không dây', 'Bật thêm Chế độ Máy bay cho mạng nhanh hơn', 'Đổi cài đặt DNS và IP', 'Cài một ứng dụng sửa lỗi lạ'],
    correctAnswer: 0,
    hint: 'Chế độ Máy bay tắt các kết nối không dây.',
    explain: 'Chế độ Máy bay tắt các kết nối không dây. Hãy đảm bảo Chế độ Máy bay đã tắt khi kiểm tra kết nối mạng.'
  },
  aiDoThree: { /* BỔ SUNG */
    type: 'quiz_multiple',
    question: 'Khi mất mạng, AI gợi ý 3 việc em NÊN tự làm. Đó là những việc nào? (Chọn 3)',
    options: ['Kiểm tra biểu tượng Wi-Fi', 'Khởi động lại trình duyệt', 'Kiểm tra Chế độ Máy bay', 'Thay đổi cài đặt DNS và IP', 'Nhập lại mật khẩu Wi-Fi mà không hỏi ai'],
    correctAnswers: [0, 1, 2],
    hint: 'Chỉ chọn những việc đơn giản, an toàn, không đụng đến cài đặt mạng.',
    explain: 'Nên: kiểm tra biểu tượng Wi-Fi, khởi động lại trình duyệt, kiểm tra Chế độ Máy bay. Không tự ý đổi cài đặt mạng hay nhập lại mật khẩu Wi-Fi.'
  },
  aiDontTF: { /* BỔ SUNG */
    type: 'quiz_dropdown',
    question: 'Với mỗi việc làm khi AI gợi ý khắc phục sự cố mạng, hãy chọn Nên làm hoặc Không nên tự ý làm: Đóng hoàn toàn trình duyệt rồi mở lại. ___ Tự ý thay đổi cài đặt mạng (DNS, IP) dù AI gợi ý. ___ Tự cài ứng dụng "sửa lỗi" mạng không rõ nguồn gốc. ___',
    blanks: [
      { options: DO, correctAnswer: 0 },
      { options: DO, correctAnswer: 1 },
      { options: DO, correctAnswer: 1 }
    ],
    hint: 'Việc nào có nguy cơ bảo mật cao thì không tự ý làm.',
    explain: 'Khởi động lại trình duyệt là an toàn. Đổi cài đặt mạng, nhập lại mật khẩu Wi-Fi hay cài ứng dụng sửa lỗi có nguy cơ bảo mật cao, không tự ý làm, nên hỏi người lớn/giáo viên.'
  }
};

function q(key, topic){
  return Object.assign({ topic: topic }, QUIZ[key]);
}
