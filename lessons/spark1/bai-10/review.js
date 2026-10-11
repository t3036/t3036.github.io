/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 10 — Mật khẩu và dữ liệu cá nhân
   (tách từ phần Ôn tập của bai-10.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s5: ''   // Phần 5 — Ôn tập
};


/* ------------------------------------------------------------
   NGÂN HÀNG CÂU HỎI — mỗi câu dùng 2 lần: trong phần học (topic
   "Vận dụng") và trong phần Ôn tập (topic "Ôn tập").
   ------------------------------------------------------------ */
const Q = {
  matKhauAnToan: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, mật khẩu an toàn là gì?',
    options: [
      'Mật khẩu khó đoán bởi con người hoặc máy tính.',
      'Mật khẩu bao gồm tất cả các số và chữ cái.',
      'Mật khẩu mà một người bạn đã cung cấp cho bạn.'
    ],
    correctAnswer: 0,
    hint: 'Mật khẩu an toàn là mật khẩu mà người khác và máy tính rất khó đoán ra.',
    explain: 'Mật khẩu an toàn là mật khẩu khó đoán bởi con người hoặc máy tính. Chỉ gồm số và chữ cái thì chưa đủ mạnh, và mật khẩu do người khác đưa cho em thì không còn là bí mật của riêng em.'
  },

  manhYeu: {
    type: 'quiz_dropdown',
    question: 'Em hãy chọn Mạnh nếu mật khẩu mạnh hoặc chọn Yếu nếu mật khẩu yếu: W3*ud28x ___ 1234567890 ___ ILoveC@ndy2 ___',
    blanks: [
      { options: ['Mạnh', 'Yếu'], correctAnswer: 0 },
      { options: ['Mạnh', 'Yếu'], correctAnswer: 1 },
      { options: ['Mạnh', 'Yếu'], correctAnswer: 0 }
    ],
    hint: 'Mật khẩu mạnh dài ít nhất 8 kí tự và có chữ thường, chữ in, chữ số, kí tự đặc biệt.',
    explain: 'W3*ud28x và ILoveC@ndy2 có chữ, số và kí tự đặc biệt nên Mạnh. 1234567890 chỉ gồm số liên tiếp, rất dễ đoán nên Yếu.'
  },

  meoMatKhau: {
    type: 'quiz_single',
    question: 'Những bạn học sinh mới cần tạo một trang Web với mật khẩu là banana mà trường học của em sử dụng để quản lí bài tập về nhà. Những bạn học sinh này yêu cầu em cung cấp các mẹo đặt mật khẩu mạnh. Em nên nói gì với các bạn ấy?',
    options: [
      'Sử dụng tên thú cưng của họ làm mật khẩu.',
      'Chia sẻ mật khẩu với bạn trong trường hợp họ quên nó.',
      'Sử dụng số và kí hiệu trong mật khẩu.',
      'Tạo mật khẩu ngắn để dễ nhớ.'
    ],
    correctAnswer: 2,
    hint: 'Mật khẩu mạnh cần có đủ nhiều loại kí tự: chữ, số và kí hiệu.',
    explain: 'Thêm số và kí hiệu giúp mật khẩu mạnh hơn. Tên thú cưng dễ đoán, mật khẩu ngắn dễ bị dò ra, và không bao giờ chia sẻ mật khẩu cho người khác.'
  },

  khongNenChiaSe: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, thông tin cá nhân nào em KHÔNG nên chia sẻ trực tuyến?',
    options: ['Tuổi', 'Lớp', 'Tên', 'Địa chỉ'],
    correctAnswer: 3,
    hint: 'Thông tin nào giúp người lạ tìm ra nơi em ở?',
    explain: 'Địa chỉ nhà giúp người lạ biết em ở đâu nên em KHÔNG nên chia sẻ trực tuyến.'
  },

  chon3KhongChiaSe: {
    type: 'quiz_multiple',
    question: 'Em hãy chọn những thông tin nào KHÔNG nên được chia sẻ trực tuyến? (Chọn 3)',
    options: [
      'Ngày sinh (Birthdate)',
      'Địa chỉ nhà (Home address)',
      'Bài hát em yêu thích (Favorite song)',
      'Tuổi (Age)'
    ],
    correctAnswers: [0, 1, 3],
    hint: 'Bài hát yêu thích không giúp ai nhận ra hay tìm ra em; ba thông tin còn lại thì có.',
    explain: 'Ngày sinh, địa chỉ nhà và tuổi là dữ liệu cá nhân, không nên chia sẻ. Bài hát yêu thích là thông tin an toàn.'
  },

  anToanChiaSe: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, thông tin nào là an toàn để chia sẻ trực tuyến?',
    options: [
      'Màu sắc yêu thích của em',
      'Địa điểm yêu thích của em',
      'Tên trường của em',
      'Công viên ưa thích của em'
    ],
    correctAnswer: 0,
    hint: 'Hãy chọn thông tin không cho biết em ở đâu hoặc hay đến đâu.',
    explain: 'Màu sắc yêu thích là thông tin an toàn. Địa điểm yêu thích, tên trường và công viên ưa thích đều cho biết nơi em hay đến, có thể giúp người lạ tìm ra em.'
  },

  khongAnToanGps: {
    type: 'quiz_single',
    question: 'Em hãy chọn nội dung nào KHÔNG an toàn để chia sẻ trực tuyến?',
    options: [
      'Vị trí GPS của công viên bên cạnh ngôi nhà của em.',
      'Một bức ảnh về bữa tối ngon miệng của em.',
      'Danh sách những cuốn sách yêu thích của em.',
      'Một bức ảnh về dự án nghệ thuật hoàn toàn tuyệt vời của em.'
    ],
    correctAnswer: 0,
    hint: 'Vị trí GPS có thể cho biết em đang ở đâu.',
    explain: 'Vị trí GPS của công viên cạnh nhà cho biết em sống ở khu vực nào nên không an toàn. Ba nội dung còn lại không tiết lộ nơi ở của em.'
  },

  xoaAnh: {
    type: 'quiz_single',
    question: 'Em gửi ảnh của em và gia đình cho một người bạn cùng lớp. Bạn ấy đăng ảnh đó lên mạng xã hội. Em có thể làm gì để xóa ảnh vĩnh viễn khỏi Internet?',
    options: [
      'Đột nhập vào máy tính của bạn cùng lớp và cố gắng xóa các bức ảnh.',
      'Em không thể xóa ảnh mãi mãi, vì Internet là công khai và vĩnh viễn.',
      'Gửi yêu cầu hỗ trợ đến dịch vụ khách hàng của ứng dụng truyền thông xã hội.',
      'Bảo bạn cùng lớp của em gỡ ảnh xuống nếu không em sẽ không còn là bạn của bạn ấy nữa.'
    ],
    correctAnswer: 1,
    hint: 'Một khi đã đăng lên Internet, nội dung có thể được sao chép và lưu lại ở nhiều nơi.',
    explain: 'Internet là công khai và vĩnh viễn, nên em không thể chắc chắn xóa sạch ảnh đã đăng. Vì vậy hãy suy nghĩ kĩ trước khi gửi hoặc đăng bất kì thông tin nào.'
  },

  nhomBanBe: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, nhóm nào sau đây thích hợp để trở thành bạn bè trực tuyến?',
    options: [
      'Những người em biết trong cuộc sống thực.',
      'Những người em gặp khi chơi trò chơi trực tuyến.',
      'Những người giao hàng đến nhà em.'
    ],
    correctAnswer: 0,
    hint: 'Nên kết bạn với những người em đã biết rõ ngoài đời.',
    explain: 'Em nên chọn những người em biết trong cuộc sống thực làm bạn bè trực tuyến. Người lạ gặp khi chơi game hay người giao hàng thì em chưa biết rõ.'
  },

  banBeThichHop: {
    type: 'quiz_single',
    question: 'Em hãy chọn ví dụ về một người bạn trực tuyến thích hợp?',
    options: [
      'Ai đó gửi tin nhắn qua ứng dụng yêu cầu em chia sẻ thông tin cá nhân của mình.',
      'Một người bạn học cùng lớp và chơi trò chơi trực tuyến vào cuối tuần.',
      'Một người nổi tiếng trên internet, như Vlogger hoặc danh nhân'
    ],
    correctAnswer: 1,
    hint: 'Người bạn thích hợp là người em biết thật sự ngoài đời.',
    explain: 'Bạn học cùng lớp là người em biết ngoài đời nên thích hợp. Người xin thông tin cá nhân thì không an toàn, còn người nổi tiếng em chỉ biết qua mạng.'
  },

  tuyChonBanBe: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, tùy chọn nào sau đây là phù hợp để trở thành một người bạn trực tuyến?',
    options: [
      'Một người lạ gửi tin nhắn trực tiếp trên mạng xã hội yêu cầu số điện thoại của em.',
      'Một người mà em đi học với người đó và chơi trò chơi trực tuyến vào cuối tuần.',
      'Ai đó gửi Email cho em và nói rằng em đã giành được giải thưởng, yêu cầu em gửi lại thông tin cá nhân.'
    ],
    correctAnswer: 1,
    hint: 'Hai lựa chọn còn lại đều xin thông tin cá nhân của em.',
    explain: 'Người bạn đi học cùng và chơi game cuối tuần là người em biết thật. Người lạ xin số điện thoại và Email "trúng thưởng" đều là dấu hiệu không an toàn.'
  },

  nguoiLa: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, em có thể nói chuyện với người lạ trực tuyến khi nào?',
    options: ['Không bao giờ', 'Bất cứ lúc nào', 'Ban ngày', 'Cuối tuần'],
    correctAnswer: 0,
    hint: 'Thời gian không làm người lạ trở nên an toàn.',
    explain: 'Em không nên nói chuyện với người lạ trực tuyến vào bất kì lúc nào.'
  },

  yeuCauDiaChi: {
    type: 'quiz_single',
    question: 'Em gặp một người trong phòng trò chuyện chơi Game trực tuyến và người này yêu cầu em cung cấp địa chỉ nhà. Em nên kết luận điều gì từ yêu cầu của họ?',
    options: [
      'Họ không phải là một người bạn trực tuyến thích hợp',
      'Họ muốn gửi cho em một cái gì đó',
      'Họ muốn đến thăm em',
      'Họ tò mò về nơi em sống'
    ],
    correctAnswer: 0,
    hint: 'Bạn bè trực tuyến thích hợp sẽ không hỏi địa chỉ nhà của em.',
    explain: 'Người yêu cầu địa chỉ nhà không phải là bạn trực tuyến thích hợp. Em không được cung cấp địa chỉ cho họ.'
  },

  loiMoiDuTiec: {
    type: 'quiz_single',
    question: 'Một người lạ mà em gặp trực tuyến đã yêu cầu em cung cấp tên và địa chỉ để họ gửi cho em lời mời dự tiệc. Theo em, em nên làm gì?',
    options: [
      'Từ chối cung cấp tên hoặc địa chỉ của em',
      'Cung cấp tên và địa chỉ của em',
      'Cung cấp tên của em nhưng không cho biết địa chỉ của em',
      'Đề nghị gặp họ tại bữa tiệc'
    ],
    correctAnswer: 0,
    hint: 'Không cung cấp thông tin cá nhân cho người lạ.',
    explain: 'Em nên từ chối cung cấp cả tên và địa chỉ cho người lạ, và không đề nghị gặp mặt họ.'
  },

  hanhViTucTiu: {
    type: 'quiz_single',
    question: 'Em nên làm gì nếu em bị người lạ có hành vi trực tuyến tục tĩu không phù hợp?',
    options: [
      'Nói với cha mẹ hoặc giáo viên của em.',
      'Nói với người lạ rằng em không thích hành vi của họ.',
      'Trò chuyện với người lạ để giữ họ trực tuyến.',
      'Yêu cầu người lạ dừng hành vi.'
    ],
    correctAnswer: 0,
    hint: 'Hãy tìm sự giúp đỡ từ người lớn đáng tin cậy.',
    explain: 'Em nên báo ngay cho cha mẹ hoặc giáo viên để được giúp đỡ, không nên tiếp tục trò chuyện với người lạ đó.'
  },

  emailTrungThuong: {
    type: 'quiz_single',
    question: 'Em nhận được Email từ một người gửi không xác định nói rằng em đã giành được giải thưởng và yêu cầu em trả lời kèm theo tên, địa chỉ và số điện thoại của em. Điều an toàn nhất để làm tiếp theo là gì?',
    options: [
      'Trả lời người gửi với thông tin được yêu cầu.',
      'Trả lời người gửi bằng một tin nhắn yêu cầu thêm thông tin.',
      'Nói với một người lớn rằng em đã nhận được một Email giống như một trò lừa đảo.'
    ],
    correctAnswer: 2,
    hint: 'Đừng trả lời Email lạ; hãy nhờ người lớn giúp.',
    explain: 'Email báo trúng thưởng từ người lạ thường là lừa đảo. Cách an toàn nhất là báo cho người lớn, không trả lời và không gửi thông tin.'
  },

  matKhauJenny: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, mật khẩu nào dưới đây là mật khẩu an toàn?',
    options: ['Jenny', 'Jenny@', 'J64ny@123', 'Jenny123'],
    correctAnswer: 2,
    hint: 'Mật khẩu an toàn có đủ chữ in, chữ thường, chữ số và kí tự đặc biệt, không dùng cả một cái tên.',
    explain: 'J64ny@123 có chữ in, chữ thường, chữ số và kí tự đặc biệt nên an toàn. Jenny, Jenny@ và Jenny123 đều dựa trên một cái tên, thiếu loại kí tự hoặc quá ngắn nên dễ bị đoán.'
  },

  lolMatKhau: {
    type: 'quiz_single',
    question: 'Em mới vừa chia sẻ mật khẩu cho một người bạn và nhận ra rằng em không nên làm như thế. Trong tình huống này, em cần phải làm gì?',
    options: ['Đổi tên tài khoản', 'Xóa tài khoản', 'Khởi động lại máy', 'Tạo một mật khẩu mới'],
    correctAnswer: 3,
    hint: 'Mật khẩu cũ đã bị người khác biết, em cần làm cho nó không còn dùng được nữa.',
    explain: 'Khi lỡ chia sẻ mật khẩu, em cần tạo một mật khẩu mới để người khác không thể dùng mật khẩu cũ truy cập tài khoản của em.'
  },

  thongTinCoTheChiaSe: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, tùy chọn nào sau đây là ví dụ về thông tin mà em có thể chia sẻ trực tuyến?',
    options: [
      'Danh sách các bộ phim yêu thích',
      'Kỳ nghỉ sắp tới của gia đình em',
      'Tên trường học của em'
    ],
    correctAnswer: 0,
    hint: 'Hãy chọn thông tin không cho biết em ở đâu hoặc khi nào cả nhà vắng mặt.',
    explain: 'Danh sách phim yêu thích là thông tin an toàn. Kỳ nghỉ sắp tới cho biết khi nào nhà vắng người, còn tên trường cho biết nơi em hay đến.'
  },

  ruiRoHinhAnh: {
    type: 'quiz_multiple',
    question: 'Em hãy cho biết, tùy chọn nào sau đây mô tả những rủi ro của việc đăng một hình ảnh cá nhân trực tuyến? (Chọn 2)',
    options: [
      'Chúng sẽ chiếm toàn bộ không gian lưu trữ của em trên mạng',
      'Những bức ảnh vô tình có thể tiết lộ thông tin cá nhân cho người lạ',
      'Rất khó để loại bỏ hoàn toàn hình ảnh khi đã được đăng trực tuyến',
      'Nếu máy tính bị treo trong quá trình gửi, có thể làm hỏng ổ đĩa cứng của em'
    ],
    correctAnswers: [1, 2],
    hint: 'Hãy nghĩ đến việc ai có thể nhìn thấy ảnh và ảnh có thể bị xóa hoàn toàn hay không.',
    explain: 'Ảnh có thể vô tình tiết lộ thông tin cá nhân (nhà, trường, biển số…) và rất khó xóa hoàn toàn khi đã đăng. Việc đăng ảnh không chiếm hết dung lượng của em hay làm hỏng ổ cứng.'
  },

  thongBaoTrungThuong: {
    type: 'quiz_multiple',
    question: 'Em hãy cho biết, khi em đang sử dụng máy tính, xuất hiện một thông báo yêu cầu nhập số điện thoại để nhận tiền trúng thưởng. Em xử lí như thế nào khi gặp tình huống trên? (Chọn 2)',
    options: [
      'Nhập số điện thoại và tiếp tục làm theo hướng dẫn',
      'Không nhập số điện thoại và tắt thông báo',
      'Hỏi ý kiến của ba mẹ'
    ],
    correctAnswers: [1, 2],
    hint: 'Thông báo trúng thưởng yêu cầu thông tin cá nhân thường là lừa đảo.',
    explain: 'Em không nhập số điện thoại, hãy tắt thông báo và hỏi ý kiến ba mẹ. Nhập thông tin vào thông báo lạ có thể bị lừa đảo.'
  },

  cuaSoBatLen: {
    type: 'quiz_dropdown',
    question: 'Em đang truy cập Internet và cửa sổ hiển thị bên dưới bật lên. Em hãy chọn Có nếu là điều em nên làm hoặc chọn Không nếu không phải: Nhập địa chỉ Email và mật khẩu thông thường của em ___ Đồng ý với các Điều khoản và Điều kiện ___ Nhấp vào Get More Free Games!!! để nhận thêm Game miễn phí ___',
    blanks: [
      { options: ['Có', 'Không'], correctAnswer: 1 },
      { options: ['Có', 'Không'], correctAnswer: 1 },
      { options: ['Có', 'Không'], correctAnswer: 1 }
    ],
    hint: 'Cửa sổ bật lên bất ngờ có thể là trò lừa đảo hoặc chứa phần mềm độc hại.',
    explain: 'Em không nhập Email và mật khẩu, không đồng ý hay nhấp vào các nội dung của cửa sổ bật lên lạ. Hãy đóng cửa sổ lại và báo cho người lớn.'
  }
};

/* Tạo bản sao câu hỏi với topic tương ứng */
const onTap  = (q) => Object.assign({}, q, { topic: 'Ôn tập' });

const LESSON = {
  id:    'l1-bai10-mat-khau-du-lieu-ca-nhan-on-tap',
  icon:  '🔑',
  title: 'Ôn tập Bài 10 — Mật khẩu và dữ liệu cá nhân',

  sections: [
    /* ============================================================
       PHẦN 5 — Ôn tập
       ============================================================ */
    {
      id: 's5',
      title: 'Ôn tập',
      password: PASSWORDS.s5,
      slides: [
        onTap(Q.manhYeu),
        onTap(Q.anToanChiaSe),
        onTap(Q.loiMoiDuTiec),
        onTap(Q.khongAnToanGps),
        onTap(Q.khongNenChiaSe),
        onTap(Q.meoMatKhau),
        onTap(Q.cuaSoBatLen),
        onTap(Q.hanhViTucTiu),
        onTap(Q.nhomBanBe),
        onTap(Q.nguoiLa),
        onTap(Q.matKhauAnToan),
        onTap(Q.chon3KhongChiaSe),
        onTap(Q.banBeThichHop),
        onTap(Q.yeuCauDiaChi),
        onTap(Q.emailTrungThuong),
        onTap(Q.tuyChonBanBe),
        onTap(Q.xoaAnh),
        onTap(Q.matKhauJenny),
        onTap(Q.lolMatKhau),
        onTap(Q.thongTinCoTheChiaSe),
        onTap(Q.ruiRoHinhAnh),
        onTap(Q.thongBaoTrungThuong),

        /* Slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 10!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};
