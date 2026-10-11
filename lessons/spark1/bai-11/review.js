/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 11 — Bảo mật máy tính, thiết bị và tài khoản
   (tách từ phần Ôn tập của bai-11.js; dùng chung engine lesson.js)
   ============================================================ */


/* ------------------------------------------------------------
   NGÂN HÀNG CÂU HỎI — mỗi câu dùng 2 lần: trong phần học (topic
   "Vận dụng") và trong phần Ôn tập (topic "Ôn tập").
   ------------------------------------------------------------ */
const Q = {
  baoMatSoCo: {
    type: 'quiz_dropdown',
    question: 'Em hãy chọn Có nếu đáp án là phù hợp giúp bảo mật kĩ thuật số và Không nếu không phải: Không chia sẻ mật khẩu với người khác. ___ Lưu trữ mật khẩu trên máy tính. ___ Sử dụng một mật khẩu khác nhau cho mỗi tài khoản. ___ Nói cho ai đó biết mật khẩu của em để họ cũng có thể sử dụng chúng. ___',
    blanks: [
      { options: ['Có', 'Không'], correctAnswer: 0 },
      { options: ['Có', 'Không'], correctAnswer: 1 },
      { options: ['Có', 'Không'], correctAnswer: 0 },
      { options: ['Có', 'Không'], correctAnswer: 1 }
    ],
    hint: 'Mật khẩu là bí mật của riêng em và mỗi tài khoản nên có một mật khẩu riêng.',
    explain: 'Không chia sẻ mật khẩu và dùng mật khẩu khác nhau cho mỗi tài khoản là phù hợp (Có). Lưu mật khẩu trên máy tính hay nói mật khẩu cho người khác đều không an toàn (Không).'
  },

  baoMatMayTinh: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, để bảo mật máy tính em nên làm gì?',
    options: [
      'Đặt mật khẩu cho máy tính',
      'Sử dụng phần mềm chống Virus',
      'Không truy cập Internet',
      'Đặt mật khẩu cho máy tính và sử dụng phần mềm chống Virus'
    ],
    correctAnswer: 3,
    hint: 'Có hai cách bảo mật đã học trong bài, em cần dùng cả hai.',
    explain: 'Để bảo mật máy tính, em đặt mật khẩu cho máy tính và sử dụng phần mềm chống Virus. Không truy cập Internet không phải là cách bảo mật thực tế.'
  },

  dungSaiMatKhau: {
    type: 'quiz_dropdown',
    question: 'Em hãy chọn Đúng hoặc Sai cho các phát biểu sau: Dùng chung một mật khẩu cho các tài khoản khác nhau ___ Không chia sẻ mật khẩu của em cho người khác ___ Lưu trữ thông tin dữ liệu tại một nơi duy nhất ___ Không sử dụng thông tin cá nhân làm mật khẩu ___',
    blanks: [
      { options: ['Đúng', 'Sai'], correctAnswer: 1 },
      { options: ['Đúng', 'Sai'], correctAnswer: 0 },
      { options: ['Đúng', 'Sai'], correctAnswer: 1 },
      { options: ['Đúng', 'Sai'], correctAnswer: 0 }
    ],
    hint: 'Mỗi tài khoản cần mật khẩu riêng, mật khẩu là bí mật và không dựa trên thông tin cá nhân.',
    explain: 'Không nên dùng chung mật khẩu (Sai) và không nên chỉ lưu dữ liệu ở một nơi duy nhất (Sai). Không chia sẻ mật khẩu và không dùng thông tin cá nhân làm mật khẩu là đúng (Đúng).'
  },

  baoMatTrucTuyen: {
    type: 'quiz_multiple',
    question: 'Em hãy cho biết, khi hoạt động trực tuyến để bảo mật thông tin của mình em nên làm gì? (Chọn 2)',
    options: [
      'Sử dụng cùng một mật khẩu cho các tài khoản',
      'Chia sẻ mật khẩu cho nhiều người',
      'Hạn chế sử dụng thông tin cá nhân làm mật khẩu',
      'Tránh dùng chung một mật khẩu cho các tài khoản khác nhau'
    ],
    correctAnswers: [2, 3],
    hint: 'Mật khẩu cần khó đoán, bí mật và riêng cho từng tài khoản.',
    explain: 'Em nên hạn chế dùng thông tin cá nhân làm mật khẩu và tránh dùng chung một mật khẩu cho nhiều tài khoản. Dùng chung mật khẩu hay chia sẻ cho nhiều người đều không an toàn.'
  },

  baoVeThietBiDiDong: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, làm thế nào để bảo vệ các thiết bị di động?',
    options: [
      'Để vật nặng lên thiết bị di động',
      'Đặt thức ăn và nước uống gần thiết bị di động',
      'Để máy trên đệm khi làm việc',
      'Sử dụng balo chống sốc để bảo vệ thiết bị khi di chuyển'
    ],
    correctAnswer: 3,
    hint: 'Ba cách còn lại đều có thể làm hỏng thiết bị.',
    explain: 'Dùng balo chống sốc giúp bảo vệ thiết bị khi di chuyển. Vật nặng làm vỡ màn hình, thức ăn và nước làm hỏng máy, còn để máy trên đệm làm máy nóng.'
  },

  cachDungThietBiAnToan: {
    type: 'quiz_single',
    question: 'Trong các tùy chọn sau, tùy chọn nào là cách sử dụng thiết bị an toàn?',
    options: [
      'Đặt máy tính ở vị trí cố định trên bàn, không nên để máy trên đệm sẽ làm nóng máy, tránh để máy ở nơi bụi bẩn và ẩm ướt',
      'Tránh để những vật nặng lên trên các thiết bị di động vì có thể làm nứt, vỡ màn hình',
      'Không cắm sạc khi đang sử dụng thiết bị di động để tránh cháy nổ gây mất an toàn',
      'Tất cả các cách trên đều an toàn khi sử dụng thiết bị'
    ],
    correctAnswer: 3,
    hint: 'Hãy xem lại từng cách: có cách nào sai không?',
    explain: 'Cả ba cách trên đều đúng: đặt máy cố định nơi sạch khô ráo, không để vật nặng lên thiết bị di động và không vừa sạc vừa dùng. Vì vậy đáp án là tất cả các cách trên.'
  },

  yeuToHuHong: {
    type: 'quiz_multiple',
    question: 'Em hãy chọn những yếu tố nào sau đây làm cho thiết bị có thể bị hỏng? (Chọn 3)',
    options: ['Mưa (Rain)', 'Thực phẩm (Food)', 'Ngón tay (Fingers)', 'Cọ vệ sinh'],
    correctAnswers: [0, 1, 2],
    hint: 'Nước, thức ăn và tay bẩn đều có thể làm hỏng thiết bị; vệ sinh sạch sẽ thì giúp máy tốt hơn.',
    explain: 'Mưa, thực phẩm và ngón tay (bẩn, ướt) có thể làm hỏng thiết bị. Cọ vệ sinh dùng đúng cách giúp máy sạch sẽ, hoạt động tốt hơn.'
  },

  viTriSac: {
    type: 'quiz_single',
    question: 'Em hãy chọn vị trí nào sau đây là nơi tốt nhất để sạc Pin điện thoại thông minh?',
    options: [
      'Dưới chăn của một chiếc giường.',
      'Trên bề mặt phẳng, nơi không có thức ăn, chất lỏng hoặc nhiệt độ quá cao.',
      'Trên sàn nhà bằng cách sử dụng bộ sạc của người lạ.'
    ],
    correctAnswer: 1,
    hint: 'Nơi sạc cần khô ráo, thoáng, không quá nóng.',
    explain: 'Sạc trên bề mặt phẳng, khô ráo, không quá nóng là an toàn nhất. Sạc dưới chăn dễ làm nóng máy, còn bộ sạc của người lạ có thể hỏng thiết bị.'
  },

  cachSacAnToan: {
    type: 'quiz_single',
    question: 'Em hãy chọn cách nào sau đây là an toàn nhất để sạc thiết bị di động?',
    options: [
      'Đặt thiết bị di động bên ngoài trong ngày và sạc dưới ánh nắng trực tiếp.',
      'Đặt ở nơi an toàn gần ổ cắm và cắm cáp sạc đi kèm với thiết bị',
      'Đặt thiết bị trên sàn và cắm cáp sạc của một thiết bị khác'
    ],
    correctAnswer: 1,
    hint: 'Nên dùng đúng cáp sạc đi kèm và đặt ở nơi an toàn.',
    explain: 'Dùng cáp sạc đi kèm và đặt thiết bị ở nơi an toàn gần ổ cắm là cách an toàn nhất. Ánh nắng trực tiếp làm nóng máy, cáp sạc của thiết bị khác có thể không phù hợp.'
  },

  hongLaptop: {
    type: 'quiz_multiple',
    question: 'Em hãy cho biết, điều nào sau đây có thể làm hỏng máy tính xách tay? (Chọn 2)',
    options: [
      'Di chuyển máy tính xách tay bằng cách xách màn hình.',
      'Để máy tính xách tay trong xe quá nóng hoặc quá lạnh.',
      'Sử dụng túi đựng máy tính xách tay có đệm với dây đeo để giữ cố định máy tính xách tay.'
    ],
    correctAnswers: [0, 1],
    hint: 'Túi có đệm là cách bảo vệ máy, không làm hỏng máy.',
    explain: 'Xách máy bằng màn hình và để máy ở nơi quá nóng hoặc quá lạnh có thể làm hỏng máy. Túi có đệm giúp bảo vệ máy an toàn.'
  },

  vanChuyenLaptop: {
    type: 'quiz_dropdown',
    question: 'Em hãy chọn Đúng nếu là phát biểu đúng trong việc vận chuyển máy tính xách tay hoặc chọn Sai nếu không phải: Máy tính xách tay có thể được giữ trong xe hơi một cách an toàn. ___ Máy tính xách tay được vận chuyển an toàn trong túi đựng máy tính xách tay. ___ Máy tính xách tay có thể bị hỏng nếu tiếp xúc với nhiệt độ quá cao/thấp. ___',
    blanks: [
      { options: ['Đúng', 'Sai'], correctAnswer: 1 },
      { options: ['Đúng', 'Sai'], correctAnswer: 0 },
      { options: ['Đúng', 'Sai'], correctAnswer: 0 }
    ],
    hint: 'Trong xe hơi nhiệt độ có thể rất cao hoặc rất thấp.',
    explain: 'Không nên để máy trong xe hơi vì nhiệt độ quá cao hoặc thấp có thể làm hỏng máy (Sai). Dùng túi đựng laptop là an toàn (Đúng) và nhiệt độ quá cao/thấp làm hỏng máy (Đúng).'
  },

  cheBanPhim: {
    type: 'quiz_single',
    question: 'Em có một máy tính, một màn hình và một bàn phím trong phòng của em. Vì sao em nên che bàn phím khi em không sử dụng?',
    options: [
      'Để bảo vệ bàn phím khỏi bụi.',
      'Để bảo vệ bàn phím khỏi nhiệt độ lạnh.',
      'Để bảo vệ bàn phím khỏi ánh sáng mặt trời.',
      'Để bảo vệ bàn phím khỏi nhiệt độ ấm áp.'
    ],
    correctAnswer: 0,
    hint: 'Tấm che không ngăn được nhiệt độ hay ánh sáng nhiều, nhưng ngăn được thứ gì rơi xuống bàn phím?',
    explain: 'Che bàn phím giúp bảo vệ bàn phím khỏi bụi bẩn khi không sử dụng.'
  }
};

/* Tạo bản sao câu hỏi với topic tương ứng */
const onTap  = (q) => Object.assign({}, q, { topic: 'Ôn tập' });

const LESSON = {
  id:    'l1-bai11-bao-mat-may-tinh-thiet-bi-tai-khoan-on-tap',
  icon:  '🔒',
  title: 'Ôn tập Bài 11 — Bảo mật máy tính, thiết bị và tài khoản',

  sections: [
    /* ============================================================
       PHẦN 5 — Ôn tập
       ============================================================ */
    {
      id: 's5',
      title: 'Ôn tập',
      slides: [
        onTap(Q.cheBanPhim),
        onTap(Q.vanChuyenLaptop),
        onTap(Q.baoMatSoCo),
        onTap(Q.cachSacAnToan),
        onTap(Q.hongLaptop),
        onTap(Q.yeuToHuHong),
        onTap(Q.viTriSac),
        onTap(Q.baoMatTrucTuyen),
        onTap(Q.baoVeThietBiDiDong),
        onTap(Q.baoMatMayTinh),
        onTap(Q.dungSaiMatKhau),
        onTap(Q.cachDungThietBiAnToan),

        /* Slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 11!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};
