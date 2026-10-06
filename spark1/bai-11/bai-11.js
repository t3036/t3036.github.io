/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 11: BẢO MẬT MÁY TÍNH, THIẾT BỊ VÀ TÀI KHOẢN
   (IC3 GS6 Spark — Level 1 — Chủ đề: An toàn bảo mật)
   ------------------------------------------------------------
   Dùng chung engine với các bài khác (lesson.js + lesson.css),
   cấu trúc và các dạng slide giống bai-09.js / bai-10.js.

   Nguồn: PPTX gốc K3_B11_BaoMatMayTinh-ThietBi-TaiKhoan.pptx (41 slide).

   Ghi chú:
   - Đáp án các câu trắc nghiệm lấy theo nội dung bài học.
   - Slide 6 và slide 18–22 gốc ("Cách bảo mật mật khẩu", "Bảo vệ
     tài khoản AI") phần lớn là hình ảnh; nội dung ở đây được viết
     lại ngắn gọn, nhất quán với các slide còn lại — giáo viên có
     thể chỉnh sửa theo hình gốc.
   - Phần Ôn tập dùng lại 12 câu hỏi đã học (slide 29–40 gốc).
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
        },
        hoc(Q.baoMatMayTinh)
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
        hoc(Q.baoMatSoCo),
        hoc(Q.dungSaiMatKhau),
        hoc(Q.baoMatTrucTuyen)
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
        hoc(Q.baoVeThietBiDiDong),
        hoc(Q.yeuToHuHong),
        hoc(Q.viTriSac),
        hoc(Q.cachSacAnToan),
        hoc(Q.hongLaptop),
        hoc(Q.vanChuyenLaptop),
        hoc(Q.cheBanPhim),
        hoc(Q.cachDungThietBiAnToan)
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
          columns: 4,
          content: 'Em cần bảo vệ tài khoản AI như bảo vệ tài khoản học tập hoặc email. <b>Không chia sẻ mật khẩu</b> cho người khác để giữ an toàn. Những thông tin nào <b>không nên</b> chia sẻ cho AI để bảo vệ tài khoản và bản thân?',
          imageUrl: null,
          things: [
            { icon: '🔑', name: 'Mật khẩu', en: '' },
            { icon: '🔢', name: 'Mã xác nhận', en: '' },
            { icon: '🏠', name: 'Địa chỉ nhà', en: '' },
            { icon: '📞', name: 'Số điện thoại', en: '' },
            { icon: '🪪', name: 'Họ tên đầy đủ', en: '' },
            { icon: '🖼️', name: 'Ảnh riêng tư', en: '' },
            { icon: '👨‍👩‍👧‍👦', name: 'Thông tin gia đình', en: '' },
            { icon: '💬', name: 'Nội dung riêng tư', en: '' }
          ],
          remember: 'Những thông tin như mật khẩu và dữ liệu cá nhân không nên chia sẻ cho AI để bảo vệ tài khoản và bản thân.'
        },

        /* Slide 21 */
        {
          type: 'info',
          topic: 'Đọc thêm · Bảo vệ tài khoản AI',
          title: 'Dừng lại trước khi bấm',
          content: 'Khi nhận được yêu cầu mở liên kết, tải tệp hoặc cài ứng dụng, em hãy làm theo 3 bước:',
          imageUrl: null,
          things: [
            { icon: '✋', name: '1. Dừng lại', en: 'Khi nhận được yêu cầu mở liên kết, tải tệp hoặc cài ứng dụng, em hãy DỪNG LẠI, không bấm vội.' },
            { icon: '🔍', name: '2. Kiểm tra', en: 'Đọc kĩ nội dung, kiểm tra nguồn, xem xét địa chỉ trang Web hoặc tệp trước khi quyết định.' },
            { icon: '🙋', name: '3. Hỏi người lớn', en: 'Nếu vẫn không chắc chắn, hãy hỏi giáo viên hoặc người lớn tin cậy trước khi thao tác.' }
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
        onTap(Q.baoMatTrucTuyen),
        onTap(Q.baoVeThietBiDiDong),
        onTap(Q.baoMatMayTinh),
        onTap(Q.dungSaiMatKhau),
        onTap(Q.cachDungThietBiAnToan),

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
