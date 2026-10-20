/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 12: MÁY TÍNH VÀ SỨC KHỎE
   (IC3 GS6 Spark — Level 1 — Chủ đề 2)
   Dùng chung engine với các bài khác (lesson.js + lesson.css).

   Ghi chú: các slide 1–6 là nội dung giới thiệu ngắn soạn theo chủ đề
   bài; 4 câu hỏi cuối (slide 7–10) lấy từ file K12Question.docx.
   ============================================================ */

const PASSWORDS = {
  s1: '',  // Phần 1 — Tư thế và thói quen khi dùng máy tính
  s2: '',  // Phần 2 — Tác hại và vận dụng
};

const Q = {
  tuThengoi: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, em nên ngồi như thế nào khi sử dụng máy tính?',
    options: [
      'Cẳng tay và cổ tay nên thẳng với bàn là việc.',
      'Đầu và cằm nên chỉ xuống dưới sàn.',
      'Đầu gối và bàn chân cần được thẳng với mặt sàn.',
      'Ngồi vắt chéo chân.'
    ],
    correctAnswer: 0,
    hint: 'Tư thế đúng giúp tay, cổ và lưng không bị căng.',
    explain: 'Khi dùng máy tính, cẳng tay và cổ tay nên thẳng với bàn làm việc.'
  },

  lamViecLau: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, nếu làm việc với máy tính trong một thời gian dài thì em nên làm gì?',
    options: [
      'Nghỉ 5 phút sau mỗi 60 phút làm việc.',
      'Có nước ngọt và đồ ăn nhẹ trong tầm với.',
      'Tắt hết đèn trong phòng.',
      'Sử dụng tai nghe.'
    ],
    correctAnswer: 0,
    hint: 'Cơ thể và đôi mắt cần được nghỉ ngơi.',
    explain: 'Em nên nghỉ ngắn 5 phút sau mỗi 60 phút làm việc để mắt và cơ thể được thư giãn.'
  },

  anhHuongLauDai: {
    type: 'quiz_single',
    question: 'Em hãy cho biết, việc sử dụng máy tính thường xuyên về lâu dài sẽ gây ảnh hưởng như thế nào đối với người sử dụng?',
    options: [
      'Nghiện Internet.',
      'Chấn thương chân, tay, cột sống.',
      'Đánh mất thời gian dành cho người thân.',
      'Tất cả các ý trên đều đúng.'
    ],
    correctAnswer: 3,
    hint: 'Xem lại cả ba ý, có ý nào sai không?',
    explain: 'Dùng máy tính quá nhiều có thể gây nghiện Internet, chấn thương chân, tay, cột sống và mất thời gian dành cho người thân.'
  },

  tacHai: {
    type: 'quiz_multiple',
    question: 'Em hãy cho biết, trong các tùy chọn sau tùy chọn nào là tác hại của việc sử dụng máy tính? (Chọn 2)',
    options: [
      'Tìm kiếm thông tin dễ dàng.',
      'Có thể gặp phải hội chứng RSI.',
      'Dễ gây các bệnh về mắt.',
      'Giải trí sau thời gian học tập và làm việc.'
    ],
    correctAnswers: [1, 2],
    hint: 'Hai ý còn lại là lợi ích của máy tính.',
    explain: 'Hội chứng RSI (tổn thương do vận động lặp lại) và các bệnh về mắt là tác hại. Tìm kiếm thông tin và giải trí là lợi ích.'
  }
};

const hoc = (q) => Object.assign({}, q, { topic: 'Vận dụng' });

const LESSON = {
  id:    'l1-bai12-may-tinh-va-suc-khoe',
  icon:  '🧑‍💻',
  title: 'Bài 12 — Máy tính và sức khỏe',

  sections: [
    {
      id: 's1',
      title: 'Tư thế và thói quen khi dùng máy tính',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'info',
          topic: 'Phần 1 · Tư thế ngồi',
          title: 'Ngồi đúng tư thế',
          content: 'Ngồi đúng tư thế giúp em bảo vệ cơ thể khi dùng máy tính:',
          imageUrl: null,
          things: [
            { icon: '🖐️', name: 'Cẳng tay và cổ tay thẳng', en: 'Cẳng tay và cổ tay nên thẳng với bàn làm việc.' },
            { icon: '🦵', name: 'Chân đặt chắc chắn', en: 'Đầu gối và bàn chân đặt thoải mái, vững trên sàn.' },
            { icon: '🚫', name: 'Không vắt chéo chân', en: '' }
          ]
        },
        {
          type: 'info',
          topic: 'Phần 1 · Thói quen tốt',
          title: 'Nghỉ ngơi hợp lí',
          content: 'Khi làm việc với máy tính lâu, em cần:',
          imageUrl: null,
          things: [
            { icon: '⏱️', name: 'Nghỉ 5 phút sau mỗi 60 phút', en: 'Đứng dậy, vận động nhẹ nhàng cho cơ thể thư giãn.' },
            { icon: '👀', name: 'Cho mắt nghỉ', en: 'Nhìn ra xa để mắt đỡ mỏi.' },
            { icon: '💡', name: 'Đủ ánh sáng', en: 'Không nên tắt hết đèn trong phòng khi dùng máy tính.' }
          ]
        },
        {
          type: 'info',
          topic: 'Phần 1 · Thiết bị công thái học',
          title: 'Thiết bị công thái học (Ergonomics)',
          content: 'Chuột, bàn phím và ghế <b>công thái học</b> được thiết kế để phù hợp với cơ thể, giúp giảm mỏi và tránh chấn thương khi dùng lâu.',
          imageUrl: null,
          things: []
        }
      ]
    },

    {
      id: 's2',
      title: 'Tác hại và vận dụng',
      password: PASSWORDS.s2,
      slides: [
        {
          type: 'info',
          topic: 'Phần 2 · Tác hại',
          title: 'Dùng máy tính quá nhiều',
          content: 'Việc sử dụng máy tính thường xuyên về lâu dài có thể gây ra:',
          imageUrl: null,
          things: [
            { icon: '🌐', name: 'Nghiện Internet', en: '' },
            { icon: '🦴', name: 'Chấn thương chân, tay, cột sống', en: 'Trong đó có hội chứng RSI (tổn thương do vận động lặp lại).' },
            { icon: '👪', name: 'Mất thời gian dành cho người thân', en: '' },
            { icon: '👁️', name: 'Các bệnh về mắt', en: '' }
          ]
        },
        {
          type: 'info',
          topic: 'Phần 2 · Lợi ích',
          title: 'Dùng máy tính đúng cách',
          content: 'Máy tính giúp em tìm kiếm thông tin dễ dàng, học tập và giải trí. Hãy dùng đúng cách và đúng thời gian để có lợi cho sức khỏe.',
          imageUrl: null,
          things: []
        },
        hoc(Q.anhHuongLauDai),
        hoc(Q.tacHai),
        hoc(Q.tuThengoi),
        hoc(Q.lamViecLau),
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 12!',
          content: 'Em đã biết cách ngồi đúng tư thế, nghỉ ngơi hợp lí và nhận biết tác hại khi dùng máy tính.',
          imageUrl: null
        }
      ]
    }
  ]
};
