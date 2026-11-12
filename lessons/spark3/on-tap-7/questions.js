/* Ôn tập Spark 3 – Chủ đề 7: An toàn và bảo mật (Bài 30 – 35)
   Nội dung câu hỏi / đáp án lấy nguyên văn từ tmp/questionspark3.docx.
   Các trường story / scenes / tip là phần cốt truyện & lời nhắc do trang ôn tập thêm vào.
   type: mc (1 đáp án) | multi (chọn nhiều) | tf (mỗi phát biểu chọn 2 nhãn) | order (sắp xếp thứ tự)
   tf: items[].a === true nghĩa là nhãn đầu tiên trong labels (Có / Đúng). */
window.STAGES = [
  {
    lesson: 'Bài 30',
    title: 'Bắt nạt trực tuyến',
    place: 'Khu Phố Tin Nhắn',
    icon: '💬',
    color: '#d9480f',
    key: { icon: '🗝️', name: 'Chìa Khóa Tử Tế' },
    intro: 'Em đến Khu Phố Tin Nhắn. Các bảng tin nhấp nháy toàn lời nói ác ý – Bóng Đen Mạng đã thả “bắt nạt trực tuyến” vào đây! Người dân buồn bã, thu mình lại. Hãy hiểu bắt nạt trực tuyến ảnh hưởng thế nào và biết cách ứng xử để giúp họ.',
    outro: 'Những dòng tin nhắn ác tan biến như bong bóng xà phòng. Người dân mỉm cười và trao cho em Chìa Khóa Tử Tế!',
    scenes: [
      'Một bạn nhỏ ngồi buồn bên cửa sổ. Em cần hiểu bắt nạt trực tuyến làm người khác cảm thấy thế nào.',
      'Bảng tin kể thêm về những điều nạn nhân phải chịu. Em hãy nhìn thật kĩ nhé!',
      'Có tin nhắn đe dọa đang nhấp nháy! Giờ là lúc em phải hành động đúng cách.'
    ],
    questions: [
      { type: 'tf', labels: ['Có', 'Không'],
        q: 'Hãy chọn Có nếu câu phát biểu đó nói về ảnh hưởng của bắt nạt trực tuyến (Cyberbullying) hoặc chọn Không nếu không phải.',
        items: [
          { t: 'Đạt điểm cao hơn ở trường.', a: false },
          { t: 'Suy giảm lòng tự trọng.', a: true },
          { t: 'Khó ngủ.', a: true }
        ],
        tip: 'Bắt nạt trực tuyến làm nạn nhân mất tự tin và khó ngủ, chứ không làm điểm số cao hơn.' },
      { type: 'tf', labels: ['Đúng', 'Sai'],
        q: 'Em hãy cho biết, những ảnh hưởng phổ biến của bắt nạt trực tuyến (Cyberbullying) là gì?',
        items: [
          { t: 'Giảm sự tự tin và lòng tự trọng.', a: true },
          { t: 'Cảm giác buồn bã, lo lắng hoặc trầm cảm.', a: true },
          { t: 'Cải thiện các mối quan hệ xã hội và tình bạn bền chặt hơn.', a: false },
          { t: 'Thành công trong học tập và điểm số được cải thiện.', a: false }
        ],
        tip: 'Ảnh hưởng của bắt nạt trực tuyến đều là điều tiêu cực: buồn, lo lắng, mất tự tin.' },
      { type: 'tf', labels: ['Đúng', 'Sai'],
        q: 'Với mỗi câu phát biểu về tác động tiêu cực của bắt nạt trực tuyến (Cyberbullying), em hãy chọn Đúng hoặc Sai.',
        items: [
          { t: 'Nạn nhân có thể cảm thấy hoàn toàn bất lực.', a: true },
          { t: 'Nạn nhân có thể thu mình lại.', a: true },
          { t: 'Nạn nhân có thể bị căng thẳng về lâu dài.', a: true }
        ],
        tip: 'Cả ba điều đều có thể xảy ra, vì vậy em cần biết giúp đỡ bạn bị bắt nạt.' },
      { type: 'tf', labels: ['Có', 'Không'],
        q: 'Với mỗi câu phát biểu, Em hãy chọn Có nếu phát biểu đó thể hiện sự thay đổi hành vi vì bị bắt nạt trực tuyến hoặc chọn Không nếu không phải.',
        items: [
          { t: 'Nạn nhân có thể ngừng sử dụng mạng xã hội.', a: true },
          { t: 'Nạn nhân có thể tham gia nhiều buổi họp mặt xã hội và sự kiện hơn.', a: false },
          { t: 'Nạn nhân có thể cảm thấy khó tập trung vào việc học ở trường.', a: true }
        ],
        tip: 'Bị bắt nạt, bạn ấy thường tránh xa mọi người chứ không tham gia nhiều hơn.' },
      { type: 'mc',
        q: 'Có người đã đe dọa sẽ gây hại cho em trên một nền tảng mạng xã hội. Em nên làm gì trước tiên?',
        options: [
          'Chụp ảnh màn hình.',
          'Nói cho bạn thân của em.',
          'Viết lại đoạn tin nhắn.',
          'Trả lời với họ rằng: Hãy để tôi yên!'
        ],
        answer: 0,
        tip: 'Chụp ảnh màn hình để giữ bằng chứng, sau đó nói với người lớn đáng tin cậy.' },
      { type: 'mc',
        q: 'Em và các bạn của mình đang trò chuyện khi chơi Game trên mạng. Cuộc hội thoại khiến em cảm thấy khó chịu và em lo rằng một người chơi có thể đang bắt nạt người khác. Em nên thực hiện hành động nào?',
        options: [
          'Thoát trò chơi.',
          'Nói với bạn của mình đừng trò chuyện nữa và tập trung vào trò chơi.',
          'Xóa cuộc trò chuyện.',
          'Chụp ảnh màn hình và chia sẻ với bố mẹ của mình.'
        ],
        answer: 3,
        tip: 'Giữ bằng chứng rồi báo cho bố mẹ. Đừng xóa cuộc trò chuyện nhé!' }
    ]
  },

  {
    lesson: 'Bài 31',
    title: 'Dấu chân kĩ thuật số',
    place: 'Bãi Biển Dấu Chân',
    icon: '👣',
    color: '#1971c2',
    key: { icon: '🧭', name: 'Chìa Khóa Dấu Vết' },
    intro: 'Bóng Đen Mạng chạy qua Bãi Biển Dấu Chân và để lại một hàng dấu chân dài trên cát. Mỗi lần em đăng bài, bình luận hay tìm kiếm, em cũng để lại “dấu chân kĩ thuật số” như thế. Hãy học cách giữ cho dấu chân của mình thật tích cực!',
    outro: 'Sóng biển rửa sạch những dấu chân lạ, chỉ còn lại dấu chân tích cực của em. Chìa Khóa Dấu Vết sáng lên trong cát!',
    scenes: [
      'Cát ướt in rõ từng dấu chân. Trên mạng cũng vậy, mọi hoạt động đều để lại dấu vết.',
      'Một con cua nhỏ chỉ đường: “Hãy chọn cách quản lí dấu chân thật khôn ngoan!”'
    ],
    questions: [
      { type: 'mc',
        q: 'Em cần thực hiện bước đầu tiên để đảm bảo rằng dấu chân kĩ thuật số (Digital Footprint) của em được tích cực. Em nên làm gì?',
        options: [
          'Yêu cầu từng trang mạng xã hội xóa các bài đăng về mình.',
          'Thỉnh thoảng tìm kiếm bản thân trên Internet.',
          'Chặn bài đăng của những người bạn không biết trên mạng xã hội.',
          'Yêu cầu báo cáo tín dụng từ ba cơ quan tín dụng.'
        ],
        answer: 1,
        tip: 'Tự tìm tên mình trên mạng giúp em biết người khác đang thấy gì về em.' },
      { type: 'mc',
        q: 'Em hãy cho biết, tùy chọn nào là hành động giúp quản lí dấu chân kĩ thuật số (Digital Footprint) của riêng em?',
        options: [
          'Hãy đăng bài về người khác trước khi họ đăng bài về em.',
          'Yêu cầu mọi người không đăng bài trực tuyến về em.',
          'Xóa mọi nội dung em tìm thấy trên trực tuyến về bản thân.',
          'Chỉ sử dụng Internet trong giờ học.'
        ],
        answer: 1,
        tip: 'Em có thể lịch sự nhờ mọi người không đăng bài về mình để bảo vệ dấu chân của em.' }
    ]
  },

  {
    lesson: 'Bài 32',
    title: 'Thu thập dữ liệu',
    place: 'Thư Viện Dữ Liệu',
    icon: '📚',
    color: '#6741d9',
    key: { icon: '🔑', name: 'Chìa Khóa Thông Tin' },
    intro: 'Em bước vào Thư Viện Dữ Liệu khổng lồ. Những chiếc camera tí hon, cảm biến và các trang web đang lặng lẽ ghi chép lại mọi thứ. Bóng Đen Mạng giấu chìa khóa trong đống thông tin này. Em cần hiểu dữ liệu được thu thập từ đâu và vì sao!',
    outro: 'Em sắp xếp xong mọi kệ sách dữ liệu. Thủ thư mỉm cười và trao Chìa Khóa Thông Tin cho em!',
    scenes: [
      'Một kệ sách ghi: “Thu thập dữ liệu”. Em hãy giải mã xem nó có nghĩa là gì.',
      'Các nguồn dữ liệu nhấp nháy khắp phòng: trò chơi, khảo sát, điện thoại, mạng xã hội…',
      'Quản thư nhắc: điều em đăng lên mạng có thể được lưu rất lâu!'
    ],
    questions: [
      { type: 'mc',
        q: 'Em hãy cho biết, thu thập dữ liệu là gì?',
        options: [
          'Luôn cập nhật thiết bị với phần mềm mới nhất.',
          'Thu thập và ghi lại thông tin từ nhiều nguồn khác nhau.',
          'Đặt mật khẩu mạnh cho tài khoản người dùng.',
          'Sử dụng phần mềm diệt Virus trên máy tính.'
        ],
        answer: 1,
        tip: 'Thu thập dữ liệu là thu thập và ghi lại thông tin từ nhiều nguồn khác nhau.' },
      { type: 'mc',
        q: 'Em hãy cho biết, công nghệ thu thập dữ liệu là gì?',
        options: [
          'Một cách để theo dõi và thu thập dữ liệu từ nhiều nguồn khác nhau bằng công nghệ.',
          'Một công cụ giúp người dùng cộng tác trong các dự án.',
          'Một phương pháp lưu trữ thông tin cá nhân trên ổ cứng.',
          'Một loại trò chơi máy tính thu thập thông tin người chơi.'
        ],
        answer: 0,
        tip: 'Công nghệ thu thập dữ liệu dùng công nghệ để theo dõi và thu thập dữ liệu từ nhiều nguồn.' },
      { type: 'tf', labels: ['Có', 'Không'],
        q: 'Với mỗi nguồn trên mạng, em hãy chọn Có nếu nguồn đó có thế thu thập dữ liệu của em hoặc chọn Không nếu không thể.',
        items: [
          { t: 'Trò chơi', a: true },
          { t: 'Khảo sát', a: true },
          { t: 'Bộ câu hỏi', a: true },
          { t: 'Ứng dụng giáo dục', a: true }
        ],
        tip: 'Trò chơi, khảo sát, bộ câu hỏi và ứng dụng giáo dục đều có thể thu thập dữ liệu của em.' },
      { type: 'tf', labels: ['Có', 'Không'],
        q: 'Với mỗi câu phát biểu về việc thu thập dữ liệu, em hãy chọn Có nếu nguồn đó thu thập dữ liệu về hoạt động sử dụng của em hoặc chọn Không nếu không phải.',
        items: [
          { t: 'Google', a: true },
          { t: 'GPS ô tô', a: true },
          { t: 'Điện thoại thông minh', a: true },
          { t: 'Mạng xã hội', a: true }
        ],
        tip: 'Rất nhiều thiết bị và dịch vụ quanh em đang thu thập dữ liệu về cách em sử dụng.' },
      { type: 'mc',
        q: 'Em hãy cho biết, vì sao em nên ý thức về những phát biểu mình đăng trên mạng xã hội?',
        options: [
          'Việc đăng thông tin sai trên mạng xã hội là bất hợp pháp.',
          'Các trang mạng xã hội thu thập dữ liệu và có thế lưu trữ rất lâu, kể cả nếu em đã xóa dữ liệu.',
          'Các phát biếu của em cần phải đại diện cho thông tin thực tế và không được dựa trên ý kiến của chính em.',
          'Dữ liệu em đăng có tác động đến điểm uy tín của em.'
        ],
        answer: 1,
        tip: 'Điều đã đăng có thể được lưu rất lâu, kể cả khi em xóa. Hãy nghĩ kĩ trước khi đăng!' }
    ]
  },

  {
    lesson: 'Bài 33',
    title: 'An toàn và bảo mật trên môi trường kĩ thuật số',
    place: 'Phòng Triển Lãm Ảnh',
    icon: '📷',
    color: '#087f5b',
    key: { icon: '🛡️', name: 'Chìa Khóa Riêng Tư' },
    intro: 'Phòng Triển Lãm Ảnh treo đầy những bức hình – nhưng nhiều bức được chụp và đăng mà không xin phép! Bóng Đen Mạng đang trốn sau một bức tranh. Đây là khu vực dài nhất, em hãy cẩn thận: xin phép trước khi chụp, trước khi đăng, và đừng chia sẻ quá mức!',
    outro: 'Em đã gỡ hết những bức ảnh chưa được phép. Cả phòng triển lãm vỗ tay và trao em Chìa Khóa Riêng Tư!',
    scenes: [
      'Cô giáo trưng bày một bức ảnh có em trong đó, nhưng em không muốn nó xuất hiện trên mạng.',
      'Một hành lang dài treo những bức ảnh: em phải quyết định ảnh nào cần xin phép.',
      'Em là chủ của Blog lớp. Mỗi bức ảnh đăng lên đều cần được xem xét kĩ.',
      'Trong góc phòng, ai đó đang chia sẻ quá nhiều thông tin. Hãy nhận ra những rủi ro!',
      'Em tìm ra cách xử lí khi lỡ chia sẻ quá mức hoặc để lộ mật khẩu.'
    ],
    questions: [
      { type: 'mc',
        q: 'Giáo viên vừa đăng một hình ảnh về em và các học sinh khác trên mạng xã hội. Em không muốn hình của mình có trên Internet. Em nên làm gì trước tiên?',
        options: [
          'Thuê một luật sư.',
          'Liên hệ với hiệu trưởng.',
          'Yêu cầu giáo viên xóa hình.',
          'Chụp ảnh giáo viên và đăng trên trang của em.'
        ],
        answer: 2,
        tip: 'Em hãy lịch sự nhờ chính người đăng xóa hình trước tiên.' },
      { type: 'mc',
        q: 'Em hãy cho biết, khi nào em cần xin phép chụp ảnh ai đó?',
        options: [
          'Chỉ khi đó là thành viên trong gia đình.',
          'Chỉ khi người đó là người nổi tiếng.',
          'Không bao giờ, việc chụp ảnh ai đó mà không được phép luôn là điều bình thường.',
          'Luôn luôn, bất kể người đó là ai.'
        ],
        answer: 3,
        tip: 'Hãy luôn xin phép trước khi chụp ảnh ai đó, dù người đó là ai.' },
      { type: 'mc',
        q: 'Em hãy cho biết, trong trường hợp nào em nên xin phép trước khi đăng ảnh của một ai đó lên mạng?',
        options: [
          'Bạn nên xin phép trong mọi tình huống.',
          'Khi người đó đang làm điều gì đáng xấu hổ.',
          'Khi người đó là người lạ.',
          'Khi người đó có một công việc quan trọng.'
        ],
        answer: 0,
        tip: 'Xin phép trong mọi tình huống là cách tôn trọng người khác nhất.' },
      { type: 'tf', labels: ['Có', 'Không'],
        q: 'Với mỗi phát biểu về việc đăng ảnh người khác lên mạng xã hội, em hãy chọn Có nếu việc đó cần được họ hoặc người giám hộ của họ cho phép hoặc chọn Không nếu không cần.',
        items: [
          { t: 'Một nhân viên muốn đăng hình về một em bé sơ sinh tại nhà trẻ.', a: true },
          { t: 'Một tài xế xe buýt muốn đăng hình về một em học sinh cấp một trên xe buýt.', a: true },
          { t: 'Một y tá muốn đăng ảnh về một bệnh nhân tại một bệnh viện.', a: true }
        ],
        tip: 'Ảnh của trẻ em và bệnh nhân luôn cần được cho phép trước khi đăng.' },
      { type: 'tf', labels: ['Có', 'Không'],
        q: 'Với mỗi phát biểu về việc chụp ảnh người khác, em hãy chọn Có nếu em cần được họ cho phép hoặc chọn Không nếu không cần.',
        items: [
          { t: 'Những hàng người đứng chờ thật dài tại công viên giải trí.', a: false },
          { t: 'Những cầu thủ trên sân trong một trận bóng rổ.', a: false },
          { t: 'Những người trong khu giữ đồ ở phòng Gym.', a: true }
        ],
        tip: 'Nơi công cộng đông người thì thường không cần xin phép, nhưng nơi riêng tư như phòng Gym thì cần.' },
      { type: 'tf', labels: ['Có', 'Không'],
        q: 'Với mỗi phát biểu về việc chụp ảnh người khác, em hãy chọn Có nếu cần được họ cho phép hoặc chọn Không nếu không cần.',
        items: [
          { t: 'Một đội điền kinh xuyên quốc gia đang chạy trên đường.', a: false },
          { t: 'Một khách hàng trong phòng thử đồ tại một trung tâm mua sắm.', a: true },
          { t: 'Một chiếc xe hơi thể thao đắt tiền trong bãi đỗ xe.', a: false }
        ],
        tip: 'Phòng thử đồ là nơi riêng tư nên bắt buộc phải xin phép.' },
      { type: 'tf', labels: ['Có', 'Không'],
        q: 'Với mỗi phát biểu, em hãy chọn Có nếu cần xin phép trước khi đăng ảnh hoặc chọn Không nếu không cần.',
        items: [
          { t: 'Em chụp ảnh những người hâm mộ ở một cuộc thi điền kinh.', a: false },
          { t: 'Em chụp ảnh mình và bạn thân tại nhà của mình.', a: true },
          { t: 'Em chụp ảnh mình và hai người bạn khác tại trung tâm mua sắm.', a: true }
        ],
        tip: 'Trong ảnh có bạn bè thì em cần xin phép các bạn trước khi đăng.' },
      { type: 'tf', labels: ['Có', 'Không'],
        q: 'Em có tạo một Blog cho lớp, cho phép những người khác đăng ảnh lên. Với mỗi câu phát biểu về hình ảnh, em hãy chọn Có nếu việc đó cần được cho phép hoặc chọn Không nếu không cần.',
        items: [
          { t: 'Một học sinh chụp ảnh giáo viên đang giảng bài.', a: true },
          { t: 'Một phụ huynh muốn đăng ảnh về một đứa trẻ khác đến dự bữa tiệc sinh nhật.', a: true },
          { t: 'Một học sinh quay Video về cuộc thi thể thao ngoài trời.', a: false }
        ],
        tip: 'Chụp ảnh thầy cô trong lớp hoặc trẻ em khác đều cần được cho phép.' },
      { type: 'tf', labels: ['Có', 'Không'],
        q: 'Em có tạo một Blog cho lớp, cho phép những người khác đăng ảnh lên. Với mỗi câu phát biểu về hình ảnh, hãy chọn Có nếu cần có sự cho phép trước khi đăng hình ảnh hoặc chọn Không nếu không cần.',
        items: [
          { t: 'Ảnh chụp thầy cô và các phụ huynh tại một sự kiện công cộng.', a: false },
          { t: 'Ảnh của khối lớp 3.', a: true },
          { t: 'Ảnh kỉ yếu của học sinh được chụp chuyên nghiệp.', a: true },
          { t: 'Các hình ảnh của Creative Commons.', a: false }
        ],
        tip: 'Ảnh học sinh cần được cho phép. Ảnh Creative Commons được cho phép sử dụng công khai.' },
      { type: 'tf', labels: ['Có', 'Không'],
        q: 'Với mỗi phát biểu về chia sẻ quá mức, em hãy chọn Có nếu việc đó là chia sẻ quá mức hoặc chọn Không nếu không phải.',
        items: [
          { t: 'Đăng ảnh trực tiếp khi em đang đi du lịch.', a: true },
          { t: 'Đăng ảnh của bạn và gia đình.', a: false },
          { t: 'Gắn thẻ (tag) tên của bạn bè trên các bài đăng mạng xã hội mà không xin phép.', a: true }
        ],
        tip: 'Đăng trực tiếp khi đi xa và gắn thẻ bạn bè khi chưa xin phép là chia sẻ quá mức.' },
      { type: 'mc',
        q: 'Em từng chia sẻ với một người bạn tên tài khoản và mật khẩu của một ứng dụng truyền phát phim. Em nhận ra rằng bây giờ người khác có thể xem được lịch sử xem phim của mình. Em muốn ngừng việc người khác có thể xem lịch sử xem phim của mình, em nên làm gì?',
        options: [
          'Kết nối ứng dụng với một mạng riêng ảo (VPN) khi xem phim.',
          'Xóa lịch sử trình duyệt trên thiết bị của em.',
          'Đổi mật khẩu và không chia sẻ mật khẩu mới với bạn của em.',
          'Tải phần mềm chống Virus trên thiết bị của em.'
        ],
        answer: 2,
        tip: 'Đổi mật khẩu và giữ bí mật mật khẩu mới là cách chặn người khác truy cập tài khoản.' },
      { type: 'tf', labels: ['Đúng', 'Sai'],
        q: 'Rian vừa đăng Video trực tiếp khi đang đi du lịch với gia đình. Bài đăng nêu cả địa điểm và số ngày đi chơi của cả gia đình. Em cần xác định các rủi ro liên quan đến bài đăng này. Với mỗi câu phát biểu về bài đăng, hãy chọn Đúng hoặc Sai.',
        items: [
          { t: 'Kẻ cắp có thể biết được rằng gia đình của Rian không có ở nhà và có thể đột nhập để ăn trộm.', a: true },
          { t: 'Một tội phạm có thể chọn gia đình của Rian làm mục tiêu vì biết được vị trí chính xác của họ.', a: true },
          { t: 'Một kẻ lừa đảo có thể theo dõi hoạt động gia đình của Rian và dùng thông tin đó vì lợi ích cá nhân.', a: true }
        ],
        tip: 'Chia sẻ vị trí và thời gian đi vắng có thể khiến gia đình gặp nguy hiểm.' },
      { type: 'mc',
        q: 'Em nhận ra rằng mình đã đăng thông tin không phù hợp hoặc chia sẻ quá mức trên mạng. Em nên làm gì trước tiên?',
        options: [
          'Báo cáo với cảnh sát.',
          'Nói với cha mẹ.',
          'Không làm gì.',
          'Xóa nội dung đó.'
        ],
        answer: 3,
        tip: 'Việc đầu tiên là xóa nội dung đó đi, rồi mới nói với người lớn nếu cần.' }
    ]
  },

  {
    lesson: 'Bài 34',
    title: 'Ứng xử với thông tin không phù hợp',
    place: 'Hang Cảnh Báo',
    icon: '🚨',
    color: '#c2255c',
    key: { icon: '🚨', name: 'Chìa Khóa Cảnh Giác' },
    intro: 'Em đi vào Hang Cảnh Báo tối om. Ở đây Bóng Đen Mạng gửi những tin nhắn lạ và đáng sợ. Em sẽ cần bình tĩnh, giữ bằng chứng và tìm người lớn đáng tin cậy. Em không hề đơn độc!',
    outro: 'Đèn cảnh báo bật sáng khắp hang. Em đã biết cách xử lí và nhận được Chìa Khóa Cảnh Giác!',
    scenes: [
      'Một tin nhắn lạ vừa hiện lên trong hang. Em phải ứng xử thật khôn ngoan.',
      'Nghi ngờ có người lớn liên hệ không phù hợp? Hãy nhớ đúng trình tự báo cáo.'
    ],
    questions: [
      { type: 'mc',
        q: 'Em nên làm gì nếu nhận được tin nhắn không phù hợp hoặc không an toàn khi trực tuyến?',
        options: [
          'Gửi một tin nhắn trả lời có ý nghĩa.',
          'Chụp ảnh màn hình và cho người lớn đáng tin cậy xem càng sớm càng tốt.',
          'Tắt máy tính của em ngay lập tức.',
          'Không làm gì cả, đó không phải là vấn đề.'
        ],
        answer: 1,
        tip: 'Chụp màn hình làm bằng chứng rồi cho người lớn đáng tin cậy xem thật sớm.' },
      { type: 'order',
        q: 'Em nghi ngờ một người lớn đã liên hệ với em một cách không phù hợp trên mạng. Chuyện này cần phải được báo cáo. Các bước báo cáo nên được thực hiện theo thứ tự như thế nào? Em hãy di chuyển tất cả các bước đến phần trả lời và đặt theo thứ tự đúng.',
        steps: [
          'Chụp ảnh màn hình.',
          'Kể cho một người lớn mà em tin tưởng.',
          'Liên hệ cơ quan hành pháp và báo cáo chuyện này.',
          'Làm theo sự hướng dẫn của cơ quan hành pháp.'
        ],
        tip: 'Thứ tự đúng: chụp màn hình, kể cho người lớn tin cậy, báo cơ quan hành pháp, làm theo hướng dẫn.' }
    ]
  },

  {
    lesson: 'Bài 35',
    title: 'Đảm bảo sức khỏe khi sử dụng kĩ thuật số',
    place: 'Đảo Cân Bằng',
    icon: '🌴',
    color: '#2b8a3e',
    key: { icon: '💚', name: 'Chìa Khóa Khỏe Mạnh' },
    intro: 'Chặng cuối cùng! Đảo Cân Bằng yên bình có những chiếc võng và hồ nước trong xanh. Nhưng Bóng Đen Mạng muốn em dán mắt vào màn hình mãi mãi. Hãy chứng tỏ em biết nghỉ ngơi và sử dụng thiết bị lành mạnh!',
    outro: 'Em đã giữ được sự cân bằng! Chìa Khóa Khỏe Mạnh – chiếc chìa cuối cùng – đã nằm trong tay em. Giờ hãy đến Tháp Bảo Vệ thôi!',
    scenes: [
      'Mắt em hơi mỏi vì nhìn màn hình quá lâu. Em hãy nhớ lại những tác hại có thể xảy ra.',
      'Một chiếc võng đung đưa nhắc em: nghỉ ngơi cũng quan trọng như học tập!'
    ],
    questions: [
      { type: 'multi', pick: 2,
        q: 'Em hãy cho biết, những tác hại nào có thể xảy ra nếu em xem màn hình quá lâu? (Chọn 2)',
        options: [
          'Tăng cân',
          'Suy giảm thính giác',
          'Rút lui khỏi công nghệ (Technology Withdrawal)',
          'Khó ngủ'
        ],
        answers: [0, 3],
        tip: 'Xem màn hình quá lâu có thể làm tăng cân và khó ngủ.' },
      { type: 'mc',
        q: 'Em hãy cho biết, lựa chọn nào là hành động hợp lí khi sử dụng thiết bị điện tử?',
        options: [
          'Đừng bao giờ sử dụng công nghệ.',
          'Sử dụng thiết bị bao lâu tùy thích mà không bị giới hạn thời gian.',
          'Chỉ sử dụng công nghệ vào ban đêm.',
          'Nghỉ giải lao và giới hạn thời gian sử dụng thiết bị.'
        ],
        answer: 3,
        tip: 'Hãy nghỉ giải lao và giới hạn thời gian dùng thiết bị.' },
      { type: 'tf', labels: ['Đúng', 'Sai'],
        q: 'Với mỗi câu phát biểu về việc sử dụng thiết bị, em hãy chọn Đúng nếu đó là một lựa chọn lành mạnh hoặc chọn Sai nếu lựa chọn đó không lành mạnh.',
        items: [
          { t: 'Tạm ngưng sử dụng thiết bị sau mỗi 20 phút.', a: true },
          { t: 'Để điện thoại cạnh giường ngủ để em có thể sử dụng chức năng báo thức.', a: false },
          { t: 'Chớp mắt thường xuyên để giảm mỏi mắt.', a: true }
        ],
        tip: 'Nghỉ ngơi và chớp mắt giúp mắt khỏe. Đừng để điện thoại cạnh giường khi ngủ nhé!' },
      { type: 'mc',
        q: 'Em hãy cho biết, tại sao một môi trường làm việc tiện dụng theo công thái học là quan trọng?',
        options: [
          'Làm giảm nguy cơ chấn thương và ngăn ngừa sự khó chịu về thể chất.',
          'Đảm bảo em trông thật phong cách khi sử dụng công nghệ.',
          'Giúp thiết bị chạy nhanh hơn và hiệu quả hơn.',
          'Cho phép em không cần nghỉ ngơi khi sử dụng máy tính.'
        ],
        answer: 0,
        tip: 'Công thái học giúp giảm chấn thương và sự khó chịu khi dùng máy.' }
    ]
  }
];
