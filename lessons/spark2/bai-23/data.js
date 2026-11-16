window.LESSON = {
  id: 'b23', no: 23, title: 'Ứng xử trực tuyến', topic: 'Công dân số', icon: '🤝', acc: '#0f9d7a', accD: '#0a755b',
  intro: 'Cùng mở từng ổ khóa để học cách trở thành người dám lên tiếng và ứng xử đẹp trên mạng!',
  steps: [
    { id: 'i0', kind: 'info', icon: '💡', title: 'Khởi động: Em hãy suy nghĩ và trả lời',
      img: 'img/khoi-dong.png', alt: 'Ba câu hỏi khởi động',
      think: [
        ['Nếu em thấy bạn bị bắt nạt ngoài sân trường, em sẽ làm gì?', 'Gọi cô giáo, an ủi bạn, nhờ người lớn giúp đỡ.'],
        ['Nếu em thấy bạn bị chế giễu trên mạng, em sẽ làm gì khác không?', 'Báo người lớn, không hùa theo, gửi lời động viên cho bạn.'],
        ['Em nghĩ “đứng nhìn mà không làm gì” có phải là cách phản ứng tốt không?', 'Không! Em nên lên tiếng – giúp đỡ – báo người lớn.']
      ] },

    { id: 'i1', kind: 'info', icon: '🦸', title: '01 · Upstander và Bystander',
      lead: '<span class="en">Upstander</span> là người dám đứng lên để bảo vệ hoặc giải quyết vấn đề trong giao tiếp kĩ thuật số.',
      pts: [['🛡️', 'Ví dụ: Đứng lên chống bắt nạt trực tuyến và giúp đỡ người bị bắt nạt.'], ['👀', '<span class="en">Bystander</span> là người ngoài cuộc, không giúp đỡ hay giải quyết vấn đề.'], ['😶', 'Ví dụ: Thấy bạn bị bắt nạt trực tuyến nhưng mặc kệ, không bảo vệ bạn.'], ['⭐', 'Em hãy là <b>Upstander</b>, đừng là <b>Bystander</b>!']],
      img: 'img/upstander.png', alt: 'Upstander và Bystander' },

    { id: 'p1', kind: 'q', tag: 'prac', icon: '🧩', title: 'Thực hành: Upstander hay Bystander?', type: 'sort',
      text: 'Bạn nhỏ trong thẻ là Upstander hay Bystander? Hãy chọn nhé.',
      buckets: ['🛡️ Upstander', '👀 Bystander'],
      cards: [
        { ic: '💬', t: 'Hỏi thăm bạn bị bắt nạt: “Mình có thể giúp gì cho bạn?”', b: 0, why: 'Quan tâm và giúp đỡ là việc của Upstander.' },
        { ic: '🤷', t: 'Thấy bạn bị chê bai trên mạng nhưng mặc kệ.', b: 1, why: 'Đứng ngoài, không làm gì là Bystander.' },
        { ic: '🚫', t: 'Không chia sẻ bài đăng làm bạn xấu hổ.', b: 0, why: 'Không tiếp tay cho hành vi xấu là Upstander.' },
        { ic: '👍', t: 'Bấm thích và chia sẻ tiếp bài chế giễu bạn.', b: 1, why: 'Cổ vũ hoặc chia sẻ vô tình tiếp tay cho kẻ bắt nạt.' },
        { ic: '👩‍🏫', t: 'Báo cho thầy cô về nội dung xấu trên mạng.', b: 0, why: 'Báo người lớn giúp ngăn chặn và bảo vệ mọi người.' }
      ] },

    { id: 'i2', kind: 'info', icon: '🛑', title: '02 · Ngăn chặn bắt nạt trực tuyến',
      lead: '<span class="en">Bắt nạt trực tuyến (Cyberbullying)</span> là dùng thiết bị và Internet để cố ý làm người khác tổn thương hoặc xấu hổ. Nếu bị bắt nạt, em hãy:',
      pts: [['✋', 'Đừng trả đũa hoặc mời gọi trả đũa vì có thể em sẽ gặp thêm rắc rối.'], ['⏸️', 'Tạm dừng hoặc dừng hẳn việc tương tác trực tuyến như trả lời tin nhắn hoặc thảo luận.'], ['👨‍👩‍👧', 'Nói chuyện với người lớn đáng tin cậy như ba mẹ hoặc thầy cô.']],
      img: 'img/cach-xu-ly.png', alt: 'Nếu em bị bắt nạt và nếu em chứng kiến bạn bị bắt nạt' },

    { id: 'p2', kind: 'q', tag: 'prac', icon: '🔢', title: 'Thực hành: Em bị bắt nạt, làm gì trước?', type: 'order',
      text: 'Có người nhắn tin chê bai em trên mạng. Hãy chạm theo <b>đúng thứ tự</b> các bước em nên làm.',
      items: ['Không trả đũa.', 'Tạm dừng, không trả lời tin nhắn nữa.', 'Lưu bằng chứng: chụp màn hình tin nhắn.', 'Kể cho người lớn đáng tin cậy (bố mẹ, thầy cô).'],
      hint: 'Bắt đầu bằng việc giữ bình tĩnh, kết thúc bằng việc nhờ người lớn giúp.',
      why: 'Không trả đũa → tạm dừng → lưu bằng chứng → kể cho người lớn.' },

    { id: 'q1', kind: 'q', icon: '❓', title: 'Câu 1 · Ví dụ về Cyberbullying', type: 'single',
      text: 'Tùy chọn nào dưới đây là một ví dụ về <b>Cyberbullying</b>?',
      opts: ['Lan truyền tin đồn về ai đó trong giờ học.', 'Để lại những ghi chú gây tổn thương trên bàn của ai đó ở trường.', 'Nói những điều gây tổn thương về ai đó trong bữa ăn trưa.', 'Gửi tin nhắn gây tổn thương cho ai đó trực tuyến.'], ans: 3,
      hint: 'Cyberbullying xảy ra “cyber” – trên mạng, qua thiết bị số.',
      why: 'Bắt nạt trực tuyến là gây tổn thương người khác qua mạng.' },

    { id: 'q2', kind: 'q', icon: '❓', title: 'Câu 2 · KHÔNG phải Cyberbullying', type: 'single',
      text: 'Tùy chọn nào dưới đây <b>KHÔNG</b> phải là một ví dụ về Cyberbullying?',
      opts: ['Gửi tin nhắn Email gây tổn thương cho ai đó', 'Quay Video của mọi người mà họ không biết và đăng nó lên mạng', 'Lan truyền tin đồn về ai đó trên phương tiện truyền thông xã hội', 'Nói những điều gây tổn thương về ai đó trong bữa ăn trưa'], ans: 3,
      hint: 'Ba việc có mạng/Email, còn một việc xảy ra trực tiếp ngoài đời.',
      why: 'Nói trực tiếp ở bữa ăn không dùng mạng nên không phải Cyberbullying.' },

    { id: 'q3', kind: 'q', icon: '❓', title: 'Câu 3 · Đúng hay Sai: bắt nạt trực tuyến', type: 'tf', labels: ['Đúng', 'Sai'],
      text: 'Với mỗi câu phát biểu sau đây, em hãy chọn <b>Đúng</b> nếu là hành vi bắt nạt trực tuyến và chọn <b>Sai</b> nếu không phải.',
      rows: [
        { t: 'Hành vi cố ý gây bẽ mặt người khác bằng cách chia sẻ thông tin riêng tư', ans: 0 },
        { t: 'Đây là hành vi trái luật và bị cơ quan hành pháp xử lí nghiêm trọng', ans: 0 },
        { t: 'Hành vi gửi, đăng hoặc chia sẻ nội dung ác ý', ans: 0 }
      ],
      hint: 'Cả ba ý đều nói về việc cố ý làm người khác tổn thương.',
      why: 'Cả ba đều là bắt nạt trực tuyến, và có thể bị xử lí theo pháp luật.' },

    { id: 'q4', kind: 'q', icon: '❓', title: 'Câu 4 · Khi bị bắt nạt trực tuyến', type: 'single',
      text: 'Phản ứng thích hợp nếu em bị bắt nạt trực tuyến (<b>Cyberbullying</b>) là gì?',
      opts: ['Ngừng sử dụng máy tính', 'Làm gì đó để trả thù', 'Dừng lại, tạm dừng, nói chuyện với người lớn', 'Bỏ qua nó và không làm gì cả'], ans: 2,
      hint: 'Nhớ 3 việc: dừng lại – tạm dừng – nói với người lớn.',
      why: 'Dừng lại, tạm dừng và nói chuyện với người lớn đáng tin cậy.' },

    { id: 'q5', kind: 'q', icon: '❓', title: 'Câu 5 · Em là Upstander', type: 'tf', labels: ['Đúng', 'Sai'],
      text: 'Em là một người dám lên tiếng bênh vực khi gặp hành vi bắt nạt trực tuyến (<b>Cyberbullying</b>), em sẽ phản ứng như thế nào? Với mỗi câu phát biểu về việc lên tiếng bênh vực, em hãy chọn Đúng hoặc Sai.',
      rows: [
        { t: 'Liên hệ và hỏi thăm người đang bị bắt nạt. Hỏi xem em có thể làm gì để giúp đỡ', ans: 0 },
        { t: 'Trả đũa người có hành vi bắt nạt', ans: 1 },
        { t: 'Dừng lại và nói chuyện này cho người lớn', ans: 0 }
      ],
      hint: 'Upstander giúp đỡ nhẹ nhàng, không dùng cách hung dữ.',
      why: 'Upstander quan tâm bạn và báo người lớn, không trả đũa.' },

    { id: 'i3', kind: 'info', icon: '✉️', title: '03 · Gửi và phản hồi thông tin đúng cách',
      lead: 'Khi em gửi tin nhắn hoặc Email, đừng mong người nhận trả lời ngay lập tức vì:',
      pts: [['📶', 'Người nhận có thể không có kết nối Internet.'], ['🕒', 'Người nhận muốn trả lời vào một thời điểm thích hợp.']] },

    { id: 'q6', kind: 'q', icon: '❓', title: 'Câu 6 · Dịch vụ dựa trên Internet', type: 'single',
      text: 'Em hãy cho biết, tùy chọn nào sau đây là <b>dịch vụ dựa trên Internet</b>?',
      opts: ['Microsoft', 'Chia đôi màn hình chơi Game (Split-Screen Gaming)', 'Bách khoa toàn thư (Encyclopedia)', 'Thư điện tử (Email)'], ans: 3,
      hint: 'Dịch vụ này gửi thư qua mạng Internet.',
      why: 'Thư điện tử (Email) hoạt động nhờ Internet.' },

    { id: 'i4', kind: 'info', icon: '📌', title: 'Ghi nhớ khi nhắn tin',
      lead: 'Em không thấy mặt hay nghe giọng người gửi, nên dễ hiểu nhầm theo hướng tiêu cực.',
      pts: [['😊', 'Hãy hiểu tin nhắn theo hướng <b>tích cực nhất</b>.'], ['📞', 'Muốn có câu trả lời ngay? Hãy <b>gọi điện thoại hoặc gọi Video</b> nhé!']] },

    { id: 'p3', kind: 'q', tag: 'prac', icon: '💬', title: 'Thực hành: Trò chuyện trên mạng', type: 'chat',
      text: 'Hãy đọc tin nhắn và chọn cách trả lời tốt nhất ở mỗi bước.',
      turns: [
        { them: ['📩 Em nhắn cho cô giáo lúc tối, đến sáng cô vẫn chưa trả lời.'], ask: 'Em nên nghĩ gì?', choices: [
          { t: 'Nhắn thêm 10 tin liên tục để cô trả lời.', ok: false, fb: 'Nhắn dồn dập làm người nhận khó chịu.' },
          { t: 'Chờ thêm, cô có thể bận hoặc chưa có mạng.', ok: true, fb: 'Người nhận có thể chưa có Internet hoặc đang bận.' }] },
        { them: ['🧑 Bạn Nam nhắn lại: “ok.”'], ask: 'Tin nhắn ngắn quá! Em hiểu thế nào?', choices: [
          { t: 'Chắc bạn ghét mình rồi!', ok: false, fb: 'Đừng hiểu nhầm theo hướng tiêu cực.' },
          { t: 'Bạn đồng ý rồi, chắc đang bận nên nhắn ngắn.', ok: true, fb: 'Hiểu theo hướng tích cực nhất là cách đúng.' }] },
        { them: ['⏰ Em cần Nam trả lời ngay trong 5 phút!'], ask: 'Em nên làm gì?', choices: [
          { t: 'Nhắn chữ in hoa thật to.', ok: false, fb: 'Nhắn to không làm người ta trả lời nhanh hơn.' },
          { t: 'Gọi điện thoại hoặc gọi Video cho Nam.', ok: true, fb: 'Muốn có câu trả lời ngay hãy gọi điện hoặc gọi Video.' }] }
      ],
      end: '🎉 Em đã ứng xử rất tốt trong cuộc trò chuyện!',
      why: 'Kiên nhẫn chờ, hiểu tích cực, cần gấp thì gọi điện.' },

    { id: 'q7', kind: 'q', icon: '❓', title: 'Câu 7 · Ứng xử phù hợp', type: 'single',
      text: 'Trong các tùy chọn sau, tùy chọn nào là <b>ứng xử phù hợp</b> trên môi trường kĩ thuật số?',
      opts: ['Dùng các nguồn giả trên mạng', 'Đăng các thông điệp có tính phỉ báng trên mạng', 'Duy trì tính tích tực trong tin nhắn và bài đăng của em', 'Đưa sự hài hước và châm biếm vào tin nhắn'], ans: 2,
      hint: 'Ứng xử đẹp là luôn giữ thái độ tích cực.',
      why: 'Giữ sự tích cực trong tin nhắn và bài đăng là ứng xử phù hợp.' },

    { id: 'q8', kind: 'q', icon: '❓', title: 'Câu 8 · Nhận tin nhắn khiếm nhã', type: 'single',
      text: 'Khi tham gia trực tuyến, có người gửi cho em <b>tin nhắn khiếm nhã</b>. Em nên phản ứng như thế nào cho phù hợp?',
      opts: ['Dừng lại và nói chuyện này cho người lớn.', 'Trả lời lại và yêu cầu người kia dừng hành vi của họ.', 'Phớt lờ tin nhắn và không nói cho ai biết.', 'Trả lời theo cách công khai.'], ans: 0,
      hint: 'Em đừng tự xử lí một mình. Ai có thể giúp em?',
      why: 'Dừng lại và nói với người lớn đáng tin cậy.' },

    { id: 'q9', kind: 'q', icon: '❓', title: 'Câu 9 · Kĩ năng ứng xử đúng mực', type: 'tf', labels: ['Có', 'Không'],
      text: 'Với mỗi ví dụ, em hãy chọn <b>Có</b> nếu là ví dụ về kĩ năng ứng xử đúng mực hoặc chọn <b>Không</b> nếu không phải.',
      rows: [
        { t: 'Một người bạn rất biết lắng nghe và cố gắng thấu hiểu cảm xúc của người khác.', ans: 0 },
        { t: 'Một thầy/cô không trả lời Email sau vài tháng.', ans: 1 },
        { t: 'Một học sinh cư xử tốt bụng với mọi người khi ở trước mặt, nhưng nói những điều sai sự thật và làm người khác tổn thương trên mạng.', ans: 1 }
      ],
      hint: 'Ứng xử đúng mực là tử tế ở mọi nơi, cả ngoài đời lẫn trên mạng.',
      why: 'Biết lắng nghe là đúng mực; không phản hồi quá lâu hoặc nói sai sự thật trên mạng thì không.' },

    { id: 'q10', kind: 'q', icon: '❓', title: 'Câu 10 · Mua phải Game lậu', type: 'single',
      text: 'Em đặt mua một Game mới nhưng khi nhận được thì phát hiện đó là một <b>bản sao chép trái phép</b>, không phải Game chính hãng. Tùy chọn nào sau đây là cách phản ứng thích hợp của một công dân tốt trên môi trường kĩ thuật số?',
      opts: ['Yêu cầu hoàn tiền và thông báo cho cửa hàng rằng bản Game em nhận được không phải loại chính hãng', 'Chạy phần mềm chống Virus cho đĩa Game rồi mới cài đặt, vì có thể có Virus trong Game', 'Loan tin trên mạng xã hội để mọi người biết nơi mua được bản sao giá rẻ của trò chơi đó', 'Trước khi cài đặt, thiết lập tường lửa cho máy tính để chặn kết nối đến Internet'], ans: 0,
      hint: 'Công dân tốt không dùng hàng lậu và báo cho nơi bán.',
      why: 'Báo cửa hàng và yêu cầu hoàn tiền là cách làm đúng.' },

    { id: 'i5', kind: 'info', icon: '🤖', title: '04 · Upstander và Bystander trong môi trường AI',
      lead: '<span class="en">AI</span> có thể làm nội dung xấu lan truyền nhanh hơn. Hãy là Upstander nhé!',
      pts: [['🛡️', '<b>Upstander:</b> Không chia sẻ nội dung AI tạo ra nếu làm tổn thương người khác.'], ['🛡️', '<b>Upstander:</b> Khuyên bạn không dùng AI tạo nội dung xúc phạm; lưu bằng chứng và báo người lớn.'], ['👀', '<b>Bystander:</b> Nhìn bạn dùng AI tạo nội dung xấu mà không nói gì, hoặc cười, cổ vũ.']],
      img: 'img/ai.png', alt: 'Upstander và Bystander trong môi trường AI' },

    { id: 'p4', kind: 'q', tag: 'prac', icon: '🧩', title: 'Thực hành: Upstander hay Bystander với AI?', type: 'sort',
      text: 'Bạn nhỏ trong tình huống AI này là Upstander hay Bystander?',
      buckets: ['🛡️ Upstander', '👀 Bystander'],
      cards: [
        { ic: '🖼️', t: 'Không chia sẻ bức ảnh AI chế nhạo bạn.', b: 0, why: 'Không chia sẻ nội dung gây tổn thương là Upstander.' },
        { ic: '😂', t: 'Cười lớn khi bạn tạo ảnh AI chế giễu người khác.', b: 1, why: 'Cổ vũ hành vi xấu là Bystander.' },
        { ic: '📸', t: 'Chụp màn hình bằng chứng và báo cho giáo viên.', b: 0, why: 'Lưu bằng chứng và báo người lớn là Upstander.' },
        { ic: '↪️', t: 'Chia sẻ nội dung AI tạo ra mà không kiểm tra có gây hại không.', b: 1, why: 'Chia sẻ mà không kiểm tra có thể làm hại người khác.' }
      ] }
  ]
};
