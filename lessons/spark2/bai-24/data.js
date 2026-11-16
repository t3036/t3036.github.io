window.LESSON = {
  id: 'b24', no: 24, title: 'Dấu chân kĩ thuật số', topic: 'Công dân số', icon: '👣', acc: '#e8720c', accD: '#b25607',
  intro: 'Mỗi lần dùng Internet em đều để lại dấu chân! Cùng mở khóa để biết cách giữ an toàn nhé!',
  steps: [
    { id: 'i0', kind: 'info', icon: '💡', title: 'Khởi động: Em hãy suy nghĩ và trả lời',
      img: 'img/khoi-dong.png', alt: 'Ba câu hỏi khởi động',
      think: [
        ['Khi em tìm kiếm một từ khóa trên Google, Google có lưu lại điều đó không?', 'Có! Google có thể lưu lại lịch sử tìm kiếm của em.'],
        ['Nếu em đăng một bức ảnh lên mạng rồi xóa đi, ảnh đó có biến mất hoàn toàn không?', 'Không chắc! Ảnh có thể vẫn còn bản sao ở đâu đó trên Internet.'],
        ['Theo em, những thông tin nào em để lại khi dùng Internet?', 'Lịch sử tìm kiếm, ảnh/video đã đăng, bình luận và tin nhắn, lượt thích, trang web đã truy cập, vị trí… Đó là “dấu chân kĩ thuật số”!']
      ] },

    { id: 'i1', kind: 'info', icon: '👣', title: '01 · Dấu chân kĩ thuật số là gì?',
      lead: '<span class="en">Dấu chân kĩ thuật số (Digital Footprint)</span> là tất cả những thông tin mà em để lại khi sử dụng Internet.',
      pts: [['🔍', 'Những lượt/nội dung tìm kiếm.'], ['✉️', 'Tin nhắn, Email đã gửi đi.'], ['🖼️', 'Những bài viết, hình ảnh, bình luận đã đăng tải.'], ['🌐', 'Các trang Web đã truy cập.']] },

    { id: 'p1', kind: 'q', tag: 'prac', icon: '📱', title: 'Thực hành: Tìm dấu chân trên điện thoại', type: 'find',
      text: 'Đây là điện thoại của bạn Mai. Chạm vào <b>tất cả những thứ để lại dấu chân kĩ thuật số</b>.',
      items: [
        { ic: '🔍', t: 'Mai tìm “du lịch Đà Lạt” trên Google', ok: true, why: 'Nội dung tìm kiếm là dấu chân kĩ thuật số.' },
        { ic: '🖼️', t: 'Mai đăng ảnh lên mạng xã hội', ok: true, why: 'Bài đăng và hình ảnh để lại dấu chân.' },
        { ic: '👟', t: 'Mai có 3 đôi giày ở nhà', ok: false, why: 'Đồ vật ở nhà không phải dấu chân trên Internet.' },
        { ic: '✉️', t: 'Mai gửi Email cho cô giáo', ok: true, why: 'Email đã gửi đi là dấu chân.' },
        { ic: '📒', t: 'Mai viết bài vào vở giấy', ok: false, why: 'Viết vào vở giấy không dùng Internet.' },
        { ic: '🌐', t: 'Mai vào một trang Web học tập', ok: true, why: 'Trang Web đã truy cập là dấu chân.' }
      ],
      hint: 'Hãy tìm những việc có dùng Internet.',
      why: 'Tìm kiếm, bài đăng, Email và trang Web đều để lại dấu chân.' },

    { id: 'q1', kind: 'q', icon: '❓', title: 'Câu 1 · Thông tin thuộc dấu chân', type: 'multi',
      text: 'Những thông tin nào là một phần của <b>dấu chân kĩ thuật số</b>?',
      opts: ['Những lượt/nội dung tìm kiếm mà em thực hiện trên Internet', 'Số đôi giày mà em sở hữu', 'Những điều bạn nói trong tin nhắn dạng chữ với bạn bè', 'Điểm số của em ở trường'], ans: [0, 2],
      hint: 'Tìm những việc em làm trên Internet hoặc qua tin nhắn.',
      why: 'Tìm kiếm và tin nhắn chữ là dấu chân kĩ thuật số.' },

    { id: 'q2', kind: 'q', icon: '❓', title: 'Câu 2 · Dấu chân của em', type: 'single',
      text: 'Thông tin nào là một phần của <b>dấu chân kĩ thuật số (Digital Footprint)</b> của em?',
      opts: ['Biên lai mua hàng tại một cửa hàng địa phương.', 'Bưu thiếp và thư em gửi cho một người bạn qua thư.', 'Bài đăng trên mạng xã hội.', 'Nhạc được lưu trên ổ cứng máy tính.'], ans: 2,
      hint: 'Chỉ một việc diễn ra trên Internet.',
      why: 'Bài đăng trên mạng xã hội nằm trên Internet nên để lại dấu chân.' },

    { id: 'q3', kind: 'q', icon: '❓', title: 'Câu 3 · Chọn 2 thông tin thuộc dấu chân', type: 'multi',
      text: 'Em hãy cho biết, tùy chọn nào sau đây là những thông tin thuộc <b>dấu chân kĩ thuật số</b>? (Chọn 2)',
      opts: ['Cuộc gọi điện thoại mà em nhận được', 'Email mà em gửi đi', 'Trang Web mà em truy cập', 'Bài tập ở trường mà em nộp'], ans: [1, 2],
      hint: 'Hai việc này đều diễn ra trên Internet.',
      why: 'Email đã gửi và trang Web đã truy cập đều là dấu chân.' },

    { id: 'q4', kind: 'q', icon: '❓', title: 'Câu 4 · KHÔNG phải dấu chân', type: 'single',
      text: 'Điều gì <b>không phải</b> là một phần của dấu chân kỹ thuật số (Footprint) của em?',
      opts: ['Đăng ký nhận bản tin Email', 'Mua hàng trực tuyến', 'Nhạc được lưu trên ổ cứng máy tính', 'Bài đăng trên mạng xã hội'], ans: 2,
      hint: 'Một việc chỉ nằm trong máy tính của em, không đưa lên mạng.',
      why: 'Nhạc lưu trong ổ cứng không gửi lên Internet nên không phải dấu chân.' },

    { id: 'i2', kind: 'info', icon: '♾️', title: '02 · Trực tuyến là mãi mãi',
      lead: 'Thông tin đã đăng lên Internet có thể xóa vĩnh viễn được không?',
      pts: [['📸', 'Người khác có thể chụp màn hình bài đăng của em.'], ['🔗', 'Nội dung có thể bị chia sẻ, tải xuống hoặc sao chép.'], ['⚠️', 'Thông tin đã đăng lên Internet <b>không bao giờ xóa được hoàn toàn</b>!']],
      img: 'img/mai-mai.png', alt: 'Trực tuyến là mãi mãi' },

    { id: 'p2', kind: 'q', tag: 'prac', icon: '🗑️', title: 'Thực hành: Xóa bài đăng thử xem!', type: 'reveal',
      text: 'Em vừa đăng một bình luận. Hãy bấm nút <b>Xóa</b> rồi xem điều gì xảy ra.',
      post: { pic: '💬', title: 'Bình luận của em', text: '“Bạn A hôm nay thật dở tệ!” 😠' },
      btn: 'Xóa bài đăng',
      copies: ['📸 Bạn học đã chụp màn hình', '🔗 Có người đã chia sẻ cho bạn bè', '⬇️ Có người đã tải xuống', '🏛️ Web lưu trữ có thể giữ bản sao', '🖥️ Máy chủ vẫn còn dữ liệu'],
      after: 'Bài đã xóa khỏi trang của em, nhưng vẫn còn nhiều bản sao! Hãy nghĩ kĩ trước khi đăng.',
      why: 'Trước khi đăng hãy nghĩ: nếu nội dung này không bao giờ xóa được, em có muốn đăng không?' },

    { id: 'q5', kind: 'q', icon: '❓', title: 'Câu 5 · Đúng hay Sai: dấu chân', type: 'tf', labels: ['Đúng', 'Sai'],
      text: 'Với mỗi câu phát biểu, em hãy chọn <b>Đúng</b> hoặc <b>Sai</b>.',
      rows: [
        { t: 'Bình luận, hình ảnh và các thông tin khác mà em đăng trên mạng được gọi là dấu chân kĩ thuật số của em.', ans: 0 },
        { t: 'Em có thể xoá vĩnh viễn những bình luận tiêu cực khỏi Internet bất cứ khi nào em muốn.', ans: 1 },
        { t: 'Mỗi bài tập ở trường mà em hoàn thành đều là một phần của dấu chân kĩ thuật số.', ans: 1 }
      ],
      hint: 'Nhớ: “Trực tuyến là mãi mãi” và dấu chân chỉ xuất hiện khi dùng Internet.',
      why: 'Bài đăng là dấu chân; nhưng bình luận khó xóa hết, và bài tập giấy không để lại dấu chân.' },

    { id: 'q6', kind: 'q', icon: '❓', title: 'Câu 6 · Bảo vệ danh tính trực tuyến', type: 'multi',
      text: 'Em hãy cho biết, vì sao người dùng nên <b>bảo vệ danh tính trực tuyến</b> của họ? (Chọn 2)',
      opts: ['Người dùng luôn nói thật khi trực tuyến', 'Internet có bộ nhớ lâu dài', 'Người dùng thường không sử dụng hình ảnh thật của họ', 'Người dùng không cần bảo vệ danh tính trực tuyến'], ans: [1, 2],
      hint: 'Một lí do liên quan đến “mãi mãi”, một lí do là không phải ai cũng thật thà.',
      why: 'Internet nhớ rất lâu, và người lạ trên mạng có thể không thật.' },

    { id: 'q7', kind: 'q', icon: '❓', title: 'Câu 7 · Duyệt Web an toàn', type: 'multi',
      text: 'Em hãy cho biết, tùy chọn nào là đúng khi nói đến <b>duyệt Web trực tuyến an toàn</b>? (Chọn 2)',
      opts: ['Em hoàn toàn an toàn miễn là em không tải xuống bất cứ thứ gì', 'Em phải xóa các tập tin Internet tạm thời', 'Các trình duyệt có tính năng bảo mật có thể an toàn hơn các trình duyệt khác', 'Chỉ cung cấp thông tin cá nhân cho các trang Web an toàn'], ans: [2, 3],
      hint: 'Chọn trình duyệt tốt và cẩn thận khi cho thông tin cá nhân.',
      why: 'Trình duyệt có bảo mật tốt hơn, và chỉ đưa thông tin cho trang Web an toàn.' },

    { id: 'p3', kind: 'q', tag: 'prac', icon: '🔐', title: 'Thực hành: Chia sẻ hay giữ kín?', type: 'sort',
      text: 'Thông tin trong thẻ có nên đăng cho mọi người thấy không?',
      buckets: ['✅ An toàn để chia sẻ', '🔒 Phải giữ kín'],
      cards: [
        { ic: '🔑', t: 'Mật khẩu của em', b: 1, why: 'Mật khẩu là bí mật, không bao giờ chia sẻ.' },
        { ic: '🎂', t: 'Ngày sinh của em', b: 1, why: 'Ngày sinh là thông tin cá nhân.' },
        { ic: '🏫', t: 'Trường học của em', b: 1, why: 'Người lạ có thể biết em ở đâu.' },
        { ic: '🙂', t: 'Tên gọi ở nhà của em', b: 0, why: 'Tên gọi thì có thể chia sẻ, nhưng không nói họ tên đầy đủ.' }
      ] },

    { id: 'q8', kind: 'q', icon: '❓', title: 'Câu 8 · Dữ liệu an toàn để chia sẻ', type: 'tf', labels: ['Có', 'Không'],
      text: 'Em hãy chọn <b>Có</b> nếu đó là dữ liệu an toàn mà em có thể chia sẻ trên mạng hoặc chọn <b>Không</b> nếu không phải.',
      rows: [
        { t: 'Mật khẩu của em', ans: 1 },
        { t: 'Tên của em', ans: 0 },
        { t: 'Trường học của em', ans: 1 },
        { t: 'Ngày sinh của em', ans: 1 }
      ],
      hint: 'Thông tin giúp người lạ tìm ra em hoặc vào tài khoản của em thì phải giữ kín.',
      why: 'Chỉ nên chia sẻ tên gọi. Mật khẩu, trường học, ngày sinh phải giữ kín.' },

    { id: 'i3', kind: 'info', icon: '🏫', title: '03 · Dùng công nghệ ở trường học',
      lead: 'Dùng công nghệ kĩ thuật số ở trường học cần phù hợp.',
      pts: [['🚫', 'Không nên dùng mạng xã hội trong lớp học.'], ['🛡️', 'Không nên đánh cắp hoặc làm hư hại tài sản của người khác.']] },

    { id: 'q9', kind: 'q', icon: '❓', title: 'Câu 9 · Hành vi phù hợp ở trường', type: 'multi',
      text: 'Em hãy cho biết, tùy chọn nào là những <b>hành vi sử dụng công nghệ kĩ thuật số ở trường học phù hợp</b>? (Chọn 2)',
      opts: ['Học sinh và giáo viên không nên dùng mạng xã hội trong lớp học', 'Học sinh không nên đánh cắp hoặc làm hư hại tài sản của người khác', 'Học sinh nên mở loa ngoài khi xem Video, thay vì dùng tai nghe', 'Học sinh nên chia sẻ mật khẩu cho nhau biết'], ans: [0, 1],
      hint: 'Hai ý này đã có trong phần nội dung phía trên.',
      why: 'Không dùng mạng xã hội trong lớp và không làm hư hại tài sản người khác.' },

    { id: 'q10', kind: 'q', icon: '❓', title: 'Câu 10 · KHÔNG thích hợp ở trường', type: 'single',
      text: 'Điều gì <b>không phải</b> là một ví dụ về việc sử dụng công nghệ kĩ thuật số một cách thích hợp ở trường học?',
      opts: ['Sử dụng máy ảnh của trường để chụp ảnh cho một dự án nhóm', 'Chơi Game hầu hết thời gian trong ngày', 'Tiến hành nghiên cứu trực tuyến cho một bài báo em đang viết', 'In một bài luận để nộp cho một giáo viên'], ans: 1,
      hint: 'Ở trường, công nghệ dùng để học, không phải để chơi cả ngày.',
      why: 'Chơi game hầu hết thời gian ở trường là không thích hợp.' },

    { id: 'i4', kind: 'info', icon: '🤖', title: '04 · Dấu chân kĩ thuật số khi dùng AI',
      lead: 'Khi dùng <span class="en">AI</span>, em cũng để lại dấu vết dữ liệu. “Trực tuyến là mãi mãi” cũng áp dụng với AI!',
      pts: [['❓', 'Câu hỏi và yêu cầu em nhập vào AI có thể được lưu lại.'], ['☁️', 'Ảnh, tài liệu em tải lên có thể được lưu trữ.'], ['⛔', 'Không nhập họ tên đầy đủ, địa chỉ, số điện thoại, mật khẩu vào AI.'], ['🧑‍🏫', 'Chỉ dùng AI theo hướng dẫn của giáo viên.']],
      img: 'img/ai.png', alt: 'Dấu chân kĩ thuật số khi dùng AI' },

    { id: 'p4', kind: 'q', tag: 'prac', icon: '🤖', title: 'Thực hành: Nhập vào AI được không?', type: 'sort',
      text: 'Em có nên gõ nội dung này vào AI không?',
      buckets: ['👍 Được', '⛔ Không nên'],
      cards: [
        { ic: '📖', t: '“Giải thích giúp em cách tính chu vi hình chữ nhật.”', b: 0, why: 'Câu hỏi học tập không có thông tin riêng tư.' },
        { ic: '📞', t: 'Số điện thoại và địa chỉ nhà em.', b: 1, why: 'Không nhập thông tin riêng tư vào AI.' },
        { ic: '🔑', t: 'Mật khẩu tài khoản của em.', b: 1, why: 'Mật khẩu phải giữ bí mật tuyệt đối.' },
        { ic: '📷', t: 'Ảnh gia đình em, khi chưa được cô giáo cho phép.', b: 1, why: 'Không chia sẻ ảnh cá nhân, ảnh gia đình khi chưa được phép.' },
        { ic: '✏️', t: '“Gợi ý cho em dàn ý bài văn tả con mèo.”', b: 0, why: 'Dùng AI để học tập theo hướng dẫn là tốt.' }
      ] },

    { id: 'e1', kind: 'q', tag: 'extra', icon: '⭐', title: 'Luyện thêm · Trước khi đăng', type: 'single',
      text: 'Trước khi <b>đăng</b> một bức ảnh lên mạng, em nên tự hỏi điều gì?',
      opts: ['Có nhiều người bấm thích không?', 'Nếu nội dung này không bao giờ xóa được, em có muốn đăng không?', 'Ảnh này có đẹp hơn ảnh của bạn không?', 'Đăng nhanh kẻo quên'], ans: 1,
      hint: 'Nhớ câu: “Trực tuyến là mãi mãi”.',
      why: 'Thông tin đã đăng rất khó xóa hết, nên hãy nghĩ kĩ trước khi đăng.' }
  ]
};
