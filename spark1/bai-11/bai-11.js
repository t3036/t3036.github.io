/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 11: BẢO MẬT MÁY TÍNH, THIẾT BỊ VÀ TÀI KHOẢN
   (IC3 GS6 Spark — Level 1 — Chủ đề: An toàn bảo mật)
   ------------------------------------------------------------
   Dùng chung engine với các bài khác (lesson.js + lesson.css),
   cấu trúc và các dạng slide giống bai-09.js / bai-10.js.

   Nguồn: PPTX gốc K3_B11_BaoMatMayTinh-ThietBi-TaiKhoan.pptx (31 slide).

   Ghi chú:
   - Đáp án các câu trắc nghiệm lấy theo nội dung bài học.
   - Slide 6 và slide 18–22 gốc ("Cách bảo mật mật khẩu", "Bảo vệ
     tài khoản AI") phần lớn là hình ảnh; nội dung ở đây được viết
     lại ngắn gọn, nhất quán với các slide còn lại — giáo viên có
     thể chỉnh sửa theo hình gốc.
   - Phần Ôn tập dùng lại 7 câu hỏi đã học (slide 24–30 gốc).
   - Hình minh họa được thay bằng emoji (imageUrl: null).
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — để trống '' nếu muốn luôn mở sẵn.
   ============================================================ */
const PASSWORDS = {
  s1: '',  // Phần 1 — Bảo mật máy tính
  s2: '',  // Phần 2 — Một số cách bảo mật mật khẩu
  s3: '',  // Phần 3 — Sử dụng thiết bị an toàn
  s4: '',  // Phần 4 — Bảo vệ tài khoản AI (Đọc thêm)
  s5: ''   // Phần 5 — Ôn tập
};

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
const hoc    = (q) => Object.assign({}, q, { topic: 'Vận dụng' });
const onTap  = (q) => Object.assign({}, q, { topic: 'Ôn tập' });

const LESSON = {
  id:    'l1-bai11-bao-mat-may-tinh-thiet-bi-tai-khoan',
  icon:  '🔒',
  title: 'Bài 11 — Bảo mật máy tính, thiết bị và tài khoản',

  sections: [
    /* ============================================================
       PHẦN 1 — Bảo mật máy tính
       ============================================================ */
    {
      id: 's1',
      title: 'Bảo mật máy tính',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 4 */
        {
          type: 'info',
          topic: 'Phần 1 · Bảo mật máy tính',
          title: 'Bảo mật máy tính',
          content: '<b>Bảo mật</b> là cách để em tránh được phần mềm độc hại, phòng ngừa các hành vi tấn công trực tiếp vào máy tính và tránh đánh mất thông tin cá nhân của em.',
          imageUrl: null,
          things: [
            { icon: '🔑', name: 'Đặt mật khẩu', en: '' },
            { icon: '🛡️', name: 'Dùng phần mềm chống Virus', en: '' }
          ]
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Một số cách bảo mật mật khẩu
       ============================================================ */
    {
      id: 's2',
      title: 'Một số cách bảo mật mật khẩu',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 6 */
        {
          type: 'info',
          topic: 'Phần 2 · Một số cách bảo mật mật khẩu',
          title: 'Cách bảo mật mật khẩu',
          content: 'Để giữ mật khẩu của em an toàn, hãy nhớ:',
          imageUrl: null,
          things: [
            { icon: '🤐', name: 'Không chia sẻ mật khẩu', en: 'Mật khẩu là bí mật của riêng em, không nói cho bất kì ai.' },
            { icon: '🗝️', name: 'Mỗi tài khoản một mật khẩu', en: 'Sử dụng một mật khẩu khác nhau cho mỗi tài khoản.' },
            { icon: '💻', name: 'Không lưu mật khẩu trên máy tính', en: 'Tránh lưu mật khẩu ở nơi người khác có thể thấy.' }
          ]
        },
        hoc(Q.baoMatSoCo)
      ]
    },

    /* ============================================================
       PHẦN 3 — Sử dụng thiết bị an toàn
       ============================================================ */
    {
      id: 's3',
      title: 'Sử dụng thiết bị an toàn',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 9 */
        {
          type: 'info',
          topic: 'Phần 3 · Sử dụng thiết bị an toàn',
          title: 'Đặt và giữ thiết bị an toàn',
          content: 'Em cần chú ý khi đặt máy tính và các thiết bị di động:',
          imageUrl: null,
          things: [
            { icon: '🖥️', name: 'Đặt máy ở vị trí cố định', en: 'Đặt máy tính cố định trên bàn, không để máy trên đệm vì sẽ làm nóng máy, tránh nơi bụi bẩn và ẩm ướt.' },
            { icon: '📱', name: 'Tránh vật nặng', en: 'Tránh để vật nặng lên thiết bị di động vì có thể làm nứt, vỡ màn hình.' },
            { icon: '🥤', name: 'Tránh nước và thức ăn', en: 'Không để nước uống hoặc thức ăn gần máy tính và các thiết bị di động.' }
          ]
        },

        /* Slide 10 */
        {
          type: 'info',
          topic: 'Phần 3 · Sử dụng thiết bị an toàn',
          title: 'Sạc, vận chuyển và vệ sinh thiết bị',
          content: 'Em cũng cần nhớ những điều sau:',
          imageUrl: null,
          things: [
            { icon: '🔌', name: 'Không vừa sạc vừa dùng', en: 'Không cắm sạc khi đang sử dụng thiết bị di động để tránh cháy nổ gây mất an toàn.' },
            { icon: '⏻', name: 'Tắt máy trước khi vận chuyển', en: '' },
            { icon: '🎒', name: 'Túi chống nước, chống sốc', en: 'Sử dụng túi hoặc balo chống nước và chống sốc để bảo vệ thiết bị khi di chuyển.' },
            { icon: '🧽', name: 'Vệ sinh thường xuyên', en: 'Vệ sinh sạch sẽ thường xuyên giúp máy tính hoạt động tốt hơn.' }
          ]
        },
        hoc(Q.yeuToHuHong),
        hoc(Q.viTriSac),
        hoc(Q.cachSacAnToan),
        hoc(Q.hongLaptop),
        hoc(Q.vanChuyenLaptop),
        hoc(Q.cheBanPhim)
      ]
    },

    /* ============================================================
       PHẦN 4 — Bảo vệ tài khoản AI (Đọc thêm)
       ============================================================ */
    {
      id: 's4',
      title: 'Bảo vệ tài khoản AI',
      password: PASSWORDS.s4,
      slides: [
        /* Slide 18–19 */
        {
          type: 'info',
          topic: 'Đọc thêm · Bảo vệ tài khoản AI',
          title: 'Bảo vệ tài khoản AI',
          content: 'Em cần bảo vệ tài khoản AI như bảo vệ tài khoản học tập hoặc email. <b>Không chia sẻ mật khẩu</b> cho người khác để giữ an toàn.',
          imageUrl: null,
          things: [
            { icon: '🔑', name: 'Mật khẩu', en: 'Không chia sẻ cho AI hay bất kì ai.' },
            { icon: '👤', name: 'Dữ liệu cá nhân', en: 'Họ tên đầy đủ, địa chỉ, số điện thoại, ảnh cá nhân, thông tin gia đình.' }
          ],
          remember: 'Những thông tin như mật khẩu và dữ liệu cá nhân không nên chia sẻ cho AI để bảo vệ tài khoản và bản thân.'
        },

        /* Slide 21 */
        {
          type: 'info',
          topic: 'Đọc thêm · Bảo vệ tài khoản AI',
          title: 'Dừng lại trước khi bấm',
          content: 'Khi nhận được yêu cầu mở liên kết, tải tệp hoặc cài ứng dụng, em hãy <b>DỪNG LẠI</b>, không bấm vội.',
          imageUrl: null,
          things: [
            { icon: '🔍', name: 'Đọc kĩ và kiểm tra', en: 'Đọc kĩ nội dung, kiểm tra nguồn, xem xét địa chỉ trang Web hoặc tệp trước khi quyết định.' },
            { icon: '🙋', name: 'Hỏi người lớn', en: 'Nếu vẫn không chắc chắn, hãy hỏi giáo viên hoặc người lớn tin cậy trước khi thao tác.' }
          ]
        },

        /* Slide hoàn thành RIÊNG cho bài học chính (scoreSections) */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 11!',
          content: 'Em đã biết cách bảo mật máy tính, bảo mật mật khẩu, sử dụng thiết bị an toàn và bảo vệ tài khoản AI của mình.',
          imageUrl: null,
          remember: 'Bấm "Tiếp theo" để sang phần <b>Ôn tập</b>.'
        }
      ]
    },

    /* ============================================================
       PHẦN 5 — Ôn tập
       ============================================================ */
    {
      id: 's5',
      title: 'Ôn tập',
      password: PASSWORDS.s5,
      slides: [
        onTap(Q.cheBanPhim),
        onTap(Q.vanChuyenLaptop),
        onTap(Q.baoMatSoCo),
        onTap(Q.cachSacAnToan),
        onTap(Q.hongLaptop),
        onTap(Q.yeuToHuHong),
        onTap(Q.viTriSac),

        /* Slide hoàn thành RIÊNG của phần Ôn tập */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 11!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút "Làm lại phần này" — các đáp án của các phần học trước sẽ không bị ảnh hưởng.',
          imageUrl: null
        }
      ]
    }
  ]
};
