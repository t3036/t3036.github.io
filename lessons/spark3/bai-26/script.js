/* ---------- tiện ích ---------- */
const $ = (s, r=document) => r.querySelector(s);
const el = (html) => { const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; };
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]} return a };
const stars = n => '⭐'.repeat(n) + '☆'.repeat(3-n);

const LESSON_NAME="Kĩ năng giao tiếp kĩ thuật số phù hợp";
const gate=[false,false,false,false];   // đã bấm xem hết các thẻ của bài học tương ứng
const okCheck=()=>{ const ok=$('#ok'); if(!ok) return; const v=state.view; ok.hidden=!(TEACH||v>=N||gate[v]); };
/* tình huống minh họa: khung trò chuyện và buổi họp video */
const chatScene=(who,msgs)=>'<div class="sc sc-chat"><div class="sch">💬 '+who+'</div>'+msgs.map(([s,t])=>'<div class="scb '+(s==='me'?'r':'l')+'">'+t+'</div>').join('')+'</div>';
const meetScene=(tiles,note)=>'<div class="sc sc-meet"><div class="scg">'+tiles.map(([n,e,mic,cam,st])=>'<div class="sct'+(st?' '+st:'')+(cam?'':' off')+'"><span class="sce">'+(cam?e:'📵')+'</span><b>'+n+'</b><i>'+(mic?'🎙️':'🔇')+'</i></div>').join('')+'</div>'+(note?'<div class="scn">'+note+'</div>':'')+'</div>';
/* mỗi ý của lời giải thích nằm trên một dòng */
const whyHtml=t=>(t||'').split(/(?<=[.!?])\s+/).join('<br>');
const pic=(f,alt)=>'<img class="pic" src="img/'+f+'" alt="'+alt+'">';

/* ---------- câu hỏi lấy từ PPTX (Vận dụng), giữ nguyên lời câu hỏi; câu bổ sung bám theo nội dung bài giảng ---------- */
const Q_SAY={q:"Em hãy cho biết, ví dụ về giao tiếp bằng lời nói phù hợp trong cuộc gọi điện Video là gì?",o:["Nói rõ ràng trong khi nhìn vào máy ảnh và Micro của em","Ngắt lời và nói chuyện với mọi người","Dùng tay che Micro khi em đang nói","Tắt máy ảnh và giữ im lặng trong suốt thời gian đó"],a:0,why:"Em nói rõ ràng, tự tin và nhìn vào Camera để mọi người thấy em đang nói chuyện với họ."};
const Q_WAIT={q:"Bạn Minh đang trình bày trong cuộc họp trực tuyến của lớp. Em có ý kiến muốn nói thêm. Em nên làm gì?",o:["Nói chen vào ngay để không quên ý kiến","Chờ bạn Minh nói xong rồi mới phát biểu","Bật Micro và nói to hơn bạn Minh","Tắt Camera rồi nói thầm với bạn bên cạnh"],a:1,why:"Em hãy chờ đến khi người khác nói xong rồi mới phát biểu hoặc trả lời."};
const Q_POLITE={q:"Với mỗi việc làm khi nói chuyện qua Video, em hãy chọn <b>Nên</b> hoặc <b>Không nên</b>.",lab:["Nên","Không nên"],tf:["Dùng từ ngữ lịch sự, rõ ràng","Nhìn vào Camera khi đang nói","Dùng từ ngữ có thể làm người khác hiểu nhầm","Nói thật nhỏ và ấp úng để người khác không nghe rõ"],a:[true,true,false,false],why:"Em nói rõ ràng, tự tin, lịch sự và nhìn vào Camera. Không dùng từ ngữ làm người khác hiểu nhầm."};
const Q_VIDEO3={q:"Khi tham gia hội nghị truyền hình, em hãy chọn <b>Nên</b> hoặc <b>Không nên</b> cho mỗi việc làm.",lab:["Nên","Không nên"],tf:["Bật Camera và nhìn vào Camera","Tắt Micro khi không phát biểu","Ngồi ở nơi gọn gàng, yên tĩnh","Để Micro luôn bật dù có tiếng ồn xung quanh"],a:[true,true,true,false],why:"Bật Camera, tắt Micro khi không phát biểu và giữ không gian gọn gàng, yên tĩnh giúp cuộc họp diễn ra tốt đẹp."};
const Q_LEAVE={q:"Em đang trong một cuộc gọi Video, em nên làm gì khi cần rời khỏi máy tính một thời gian ngắn?",o:["Tắt Camera và Micro trên thiết bị của em","Mang theo máy tính bên mình","Ngắt lời người nói để cho họ biết em cần nghỉ ngơi","Che máy tính bằng một chiếc khăn"],a:0,why:"Khi cần rời đi một lúc, em tắt Camera và Micro để không làm phiền người khác và không để lộ những hình ảnh, âm thanh không cần thiết."};
const Q_EMJ={q:"Em nên gửi Emoji nào vào phần trò chuyện để thể hiện với diễn giả rằng bạn đồng ý với điều họ nói?",o:['<img class="oi" src="img/e-dong-y.png" alt=""> Ra hiệu đồng ý','<img class="oi" src="img/e-gian.png" alt=""> Mặt giận dữ','<img class="oi" src="img/e-chap-tay.png" alt=""> Chắp tay','<img class="oi" src="img/e-cuoi-khoc.png" alt=""> Mặt cười khóc'],a:0,why:"Emoji ra hiệu đồng ý (ngón tay cái giơ lên) thể hiện em đồng ý với điều diễn giả nói mà không làm gián đoạn bài trình bày."};
const Q_ATT={q:"Em được giáo viên giảng bài qua ứng dụng Video phát trực tiếp. Ứng dụng cho phép em gửi tin nhắn, bật Camera và Micro. Trong buổi học, có những thời điểm em cần thông báo một cách phù hợp cho giáo viên rằng em đang chăm chú lắng nghe và hiểu bài. Em nên làm gì?",o:["Gửi Emoji ra hiệu đồng ý trong phần trò chuyện","Giữ im lặng trong suốt bài trình bày","Bật Camera lên và nói thành tiếng \"Hay lắm\"","Bật Micro lên và vỗ tay"],a:0,why:"Gửi Emoji trong phần trò chuyện là cách phù hợp để báo cho giáo viên biết em đang nghe và hiểu bài mà không làm gián đoạn buổi học."};
const Q_DIS={q:"Em đang dự một hội thảo Video trực tiếp. Hội thảo cho phép Em gửi tin nhắn, bật Camera và nói chuyện qua Micro. Em không đồng ý với một ý kiến mà diễn giả đang nói. Em nên làm gì?",o:["Đợi diễn giả trình bày đến một điểm dừng rồi mới nói lên ý kiến của mình","Lập tức rời hội thảo","Ngắt lời diễn giả trước khi bài giảng kết thúc","Gửi Emoji ra hiệu từ chối vào phần trò chuyện"],a:0,why:"Em cần lịch sự: chờ đến điểm dừng rồi mới nói lên ý kiến của mình, không ngắt lời diễn giả."};
const Q_TF10={q:"Với mỗi câu phát biểu, em hãy chọn <b>Có</b> nếu điều đó là phù hợp trong giao tiếp kĩ thuật số hoặc chọn <b>Không</b> nếu không phù hợp.",lab:["Có","Không"],tf:["Em trả lời Email của giáo viên bằng ngôn ngữ nhắn tin kiểu KLQ cho \"không liên quan\"","Em nhập \"LÀM ƠN GIÚP TỚ\" trong dòng chủ đề khi yêu cầu sự giúp đỡ từ bạn cùng lớp","Em dùng Emoji kiểu đảo mắt khi trả lời câu hỏi của thầy Hiệu trưởng về kế hoạch tập luyện của nhóm"],a:[false,false,false],why:"Với người lớn và thầy cô, em cần dùng từ ngữ đầy đủ, lịch sự. Không nên dùng từ viết tắt, viết HOA toàn bộ (giống như đang hét) hay Emoji thiếu tôn trọng."};
const Q_EMO={q:"Em hãy cho biết, biểu tượng cảm xúc (Emoji) phù hợp với loại giao tiếp kĩ thuật số nào?",o:["Tin nhắn văn bản với một người bạn","Nhắn tin trong ứng dụng cho giáo viên của bạn về bài tập","Tài liệu nghiên cứu","Email cho các nhà tuyển dụng tiềm năng"],a:0,why:"Emoji phù hợp với tin nhắn thân mật giữa bạn bè. Với giáo viên, tài liệu nghiên cứu hay Email trang trọng, em nên dùng ngôn ngữ nghiêm túc."};
const Q_PURP={q:"Với mỗi câu phát biểu về cộng tác kĩ thuật số, hãy chọn Mục đích <b>học tập</b> hoặc Mục đích <b>giải trí</b> để xác định trường hợp sử dụng đúng.",lab:["Học tập","Giải trí"],tf:["Hey tớ thấy cậu ở trung tâm mua sắm ngày hôm nay đó. Lol có BFF mới nha!","Orson bảo rằng bạn ấy sẽ quay lại ngay sau khi nói chuyện với giáo viên","Rian đang tìm bạn của mình ở đâu tại trận ⚽ nhưng rồi cậu ấy phải ❌","Cảm ơn cậu đã giúp tớ làm bài tập về nhà hôm nay"],a:[false,false,false,true],why:"Tin nhắn có từ lóng (Lol, BFF), tin nhắn báo bạn sẽ quay lại ngay và tin nhắn dùng Emoji ⚽ ❌ đều là trò chuyện vui giữa bạn bè nên thuộc mục đích giải trí. Lời cảm ơn vì được giúp làm bài tập về nhà gắn với việc học nên thuộc mục đích học tập."};
const Q_BIAS={q:"Em hãy cho biết, thuật ngữ Thiên kiến (Bias) có nghĩa là gì trong truyền thông kĩ thuật số?",o:["Một cách để bày tỏ ý kiến trên trực tuyến của em, đặc biệt là phương tiện truyền thông xã hội.","Là loại trò chơi trực tuyến được chơi với ít nhất 3 người.","Xu hướng ủng hộ một bên hoặc có một quan điểm cụ thể.","Một tính năng cho phép em thay đổi cài đặt phông chữ."],a:2,why:"Thiên kiến (Bias) là xu hướng ủng hộ một bên hoặc có một quan điểm cụ thể, có thể làm cho người đó không công bằng và bỏ qua các quan điểm khác."};
const Q_BIAS2={q:"Em hãy cho biết, phát biểu nào sau đây thể hiện sự thiên kiến?",o:["Học lập trình máy tính có thể giúp phát triển kĩ năng tư duy phản biện.","Ăn rau giúp bạn duy trì lối sống lành mạnh.","Sử dụng điện thoại thông minh là cần thiết để mọi người duy trì kết nối.","Tôi thích chơi trò chơi điện tử vì chúng rất thú vị."],a:2,why:"“Cần thiết để mọi người duy trì kết nối” là một quan điểm được đưa ra như thể ai cũng phải đồng ý, bỏ qua những quan điểm khác. Thiên kiến chính là nhìn nhận thông tin theo một phía."};
const Q_READ={q:"Em nhận được tin nhắn nhưng chưa hiểu rõ ý của bạn. Em nên làm gì?",o:["Đoán ý của bạn rồi trả lời luôn","Không trả lời để tránh hiểu nhầm","Hỏi lại người gửi để hiểu rõ hơn","Trả lời bằng thật nhiều Emoji"],a:2,why:"Nếu không hiểu hoặc cần thêm thông tin, em hãy hỏi người gửi để tránh hiểu nhầm thông điệp."};
const Q_RULE={q:"Em hãy chọn <b>Nên</b> hoặc <b>Không nên</b> khi viết tin nhắn.",lab:["Nên","Không nên"],tf:["Chọn Emoji phù hợp để diễn đạt đúng cảm xúc","Dùng thật nhiều Emoji trong một tin nhắn","Sử dụng từ viết tắt khi nhắn tin cho thầy cô","Viết HOA toàn bộ Email và tin nhắn"],a:[true,false,false,false],why:"Chọn Emoji phù hợp và không dùng quá nhiều. Tránh từ viết tắt và chữ in hoa toàn bộ vì dễ gây hiểu nhầm hoặc bị xem là hét lên."};
const Q_AIRULE={q:"Khi dùng các tính năng AI trong hội nghị truyền hình, em hãy chọn <b>Nên</b> hoặc <b>Không nên</b>.",lab:["Nên","Không nên"],tf:["Vào họp đúng giờ, bật/tắt Micro đúng lúc","Ghi hình người khác khi chưa được phép","Chia sẻ bản tóm tắt có thông tin riêng tư của người khác","Dùng phụ đề tự động để theo dõi bài dễ hơn"],a:[true,false,false,true],why:"AI chỉ hỗ trợ, không thay việc cư xử tử tế. Chưa được phép thì không ghi âm, quay video hay chia sẻ nội dung họp."};

/* ---------- câu hỏi tình huống: trò chuyện và họp video ---------- */
const Q_CHAT1={q:"Bạn Lan nhắn tin hỏi em. Em nên trả lời thế nào cho phù hợp?",scene:chatScene('Lan',[['l','Mai chúng ta họp nhóm lúc mấy giờ để làm bài tập vậy? 🙂']]),o:["Chúng mình họp lúc 7 giờ tối nhé! Tớ sẽ chuẩn bị trước. 🙂","7h","KLQ","MAI HỌP LÚC 7 GIỜ TỐI!!!"],a:0,why:"Câu trả lời đầy đủ, thân thiện, có Emoji vừa phải. Tránh trả lời cộc lốc, viết tắt hoặc viết HOA."};
const Q_CHAT2={q:"Cô giáo nhắn tin trong ứng dụng lớp học. Em nên trả lời thế nào?",scene:chatScene('Cô Hoa',[['l','Em hãy nộp bài tập trước 5 giờ chiều nay nhé.']]),o:["Dạ, em cảm ơn cô. Em sẽ nộp trước 5 giờ chiều ạ.","ok cô 😎","Ừ","Biết rồi, cô nhắc hoài 🙄"],a:0,why:"Với thầy cô, em dùng từ ngữ đầy đủ, lễ phép và phản hồi rõ để cô biết em đã hiểu."};
const Q_CHAT3={q:"Bạn Nam nhắn tin cho em. Tin nhắn chưa rõ ý. Em nên làm gì?",scene:chatScene('Nam',[['l','Mai mình học nhóm nhé!'],['l','Nhớ mang theo nha 😉']]),o:["Hỏi lại: “Mình học ở đâu, mấy giờ và cần mang gì vậy bạn?”","Đoán đại rồi mang cặp đi","Im lặng không trả lời","Nhắn lại thật nhiều Emoji"],a:0,why:"Tin nhắn của Nam chưa nói rõ địa điểm, giờ học và đồ cần mang. Em hãy hỏi lại để hiểu đúng ý bạn."};
const Q_MEET1={q:"Bạn Nam đang phát biểu. Micro của em đang bật và nhà em có tiếng ồn. Em nên làm gì?",o:["Tắt Micro cho đến khi em phát biểu","Để nguyên Micro, tiếng ồn không sao","Nói to hơn để át tiếng ồn","Tắt Camera và rời cuộc họp"],a:0,why:"Em tắt Micro khi không phát biểu để cuộc họp không bị ồn."};
const Q_MEET2={q:"Cô giáo đang giảng bài, em muốn hỏi một câu. Em nên làm gì?",scene:meetScene([['Cô Hoa','👩‍🏫',true,true,'talk'],['Em','😊',false,true],['Lan','😀',false,true],['Nam','🙂',false,true]],'💬 Có phần trò chuyện và nút giơ tay ✋'),o:["Bật Micro và hỏi ngay","Giơ tay hoặc nhắn câu hỏi vào phần trò chuyện","Gọi to tên cô","Tắt Camera để cô chú ý"],a:1,why:"Em giơ tay hoặc gửi câu hỏi vào phần trò chuyện, rồi chờ cô cho phép nói."};
const Q_MEET3={q:"Em vào họp muộn vài phút, bạn Lan đang trình bày. Em nên làm gì?",scene:meetScene([['Lan','😀',true,true,'talk'],['Cô Hoa','👩‍🏫',false,true],['Em (mới vào)','😅',true,true]],'⏰ Em vừa vào họp'),o:["Tắt Micro, chào bằng Emoji trong phần trò chuyện","Chào thật to để mọi người biết","Hỏi các bạn xem đã học đến đâu","Bật nhạc cho vui"],a:0,why:"Em vào lặng lẽ, tắt Micro và chào bằng tin nhắn để không làm gián đoạn bạn đang nói."};
const Q_MEET4={q:"Cuộc họp bật AI tóm tắt. Em muốn gửi bản tóm tắt có tên và ý kiến của các bạn cho người ngoài lớp. Em nên làm gì?",scene:meetScene([['Cô Hoa','👩‍🏫',true,true,'talk'],['Em','😊',false,true],['Lan','😀',false,true],['AI','📝',false,true]],'📝 AI đang tóm tắt cuộc họp'),o:["Xin phép cô và các bạn trước khi chia sẻ","Gửi luôn cho nhanh","Đăng lên mạng xã hội","Ghi hình thêm để lưu"],a:0,why:"Không chia sẻ nội dung họp có thông tin riêng tư khi chưa được phép."};
const Q_CMP={q:"Cô Hoa hỏi “Em nộp bài chưa?”. Em hãy chọn cách trả lời phù hợp.",scene:'<div class="cmp"><div><div class="cmpl">Cách 1</div>'+chatScene('Cô Hoa',[['l','Em nộp bài chưa?'],['me','CHƯA!!! KLQ 🙄😡😡😡']])+'</div><div><div class="cmpl">Cách 2</div>'+chatScene('Cô Hoa',[['l','Em nộp bài chưa?'],['me','Dạ, em chưa nộp ạ. Em sẽ nộp trước 5 giờ chiều nay ạ. 😊']])+'</div></div>',o:["Cách 1","Cách 2"],a:1,why:"Cách 2 lễ phép, rõ ràng và dùng Emoji vừa phải. Cách 1 viết HOA, viết tắt và dùng nhiều Emoji giận dữ nên thiếu tôn trọng cô giáo."};

/* ---------- 4 bài học: nội dung, hình minh họa, các thẻ bấm xem, bài tập nhỏ ---------- */
const THEORY=[
 {i:"🗣️",h:"Kĩ năng nói",
  t:"<b>Kĩ năng nói</b> là cách em diễn đạt bằng lời để mọi người hiểu và cảm thấy được tôn trọng.",
  e:"",
  v:'<div id="rc"></div>'+pic('noi.jpeg','Bạn nhỏ nói chuyện qua Video'),
  cards:[['🔊','Nói rõ ràng, tự tin','Nói rõ ràng để mọi người hiểu em.','ok'],['⏳','Chờ đến lượt','Chờ người khác nói xong rồi mới phát biểu.','ok'],['🤝','Từ ngữ lịch sự','Dùng từ lịch sự, tránh từ dễ gây hiểu nhầm.','ok'],['👀','Nhìn vào Camera','Nhìn vào Camera để mọi người thấy em đang nói với họ.','ok']]},
 {i:"✍️",h:"Kĩ năng viết",
  t:"<b>Kĩ năng viết</b> là cách em dùng chữ và Emoji khi nhắn tin hoặc viết Email sao cho rõ ràng, lịch sự và dễ hiểu.",
  e:"",
  v:'<div id="rc"></div>',
  cards:[['😊','Chọn Emoji phù hợp','Chọn Emoji phù hợp để diễn đạt đúng cảm xúc.','ok'],['🔢','Không dùng quá nhiều','Mỗi tin nhắn chỉ dùng vài Emoji.','ok'],['💡','Hiểu ý nghĩa Emoji','Hiểu rõ ý nghĩa Emoji trước khi gửi.','ok'],['👥','Hợp người nhận, ngữ cảnh','Nghĩ đến người nhận và hoàn cảnh để tránh hiểu lầm.','ok'],['✂️','Không dùng từ viết tắt','Tránh viết tắt như “KLQ” (không liên quan).','no'],['🔠','Không viết HOA toàn bộ','Chữ in hoa toàn bộ giống như đang hét lên.','no']]},
 {i:"💬",h:"Đọc hiểu tin nhắn",
  t:"<b>Đọc hiểu tin nhắn</b> là hiểu đúng thông điệp người khác gửi.",
  e:"<b>Thiên kiến (Bias)</b> là nhìn nhận thông tin theo niềm tin cá nhân, dễ thiếu công bằng và bỏ qua quan điểm khác.",
  v:'<div id="rc"></div>',
  cards:[['🔍','Đọc kĩ từng từ','Đọc kĩ từng từ để hiểu ý tin nhắn.','ok'],['❓','Hỏi lại khi chưa hiểu','Chưa rõ thì hỏi lại người gửi.','ok'],['🧭','Hiểu tình huống','Hiểu tình huống để hiểu đúng ý.','ok'],['✅','Phản hồi chính xác','Trả lời chính xác để người gửi biết em đã hiểu.','ok']]},
 {i:"🎥",h:"Họp trực tuyến",
  t:"<b>Hội nghị truyền hình</b> là cuộc họp, buổi học qua Video. Em cần giữ phép lịch sự để mọi người cùng làm việc tốt.",
  e:"AI hỗ trợ giao tiếp nhưng không thay con người cư xử tử tế. Không ghi âm, quay video hoặc chia sẻ nội dung cuộc họp khi chưa được phép.",
  v:'<div id="rc"></div>'+pic('hoi-nghi.jpeg','3 nguyên tắc khi họp trực tuyến')+'<p><b>Một số tính năng AI trên ứng dụng hội nghị truyền hình:</b></p>'+pic('ai.jpeg','Các tính năng AI trong hội nghị truyền hình')+'<div class="tags"><span class="tag ok">✔ Vào họp đúng giờ, bật/tắt Micro đúng lúc</span><span class="tag no">✘ Ghi hình người khác khi chưa được phép</span><span class="tag no">✘ Chia sẻ bản tóm tắt có thông tin riêng tư</span></div>',
  cards:[['📷','Bật Camera, nhìn vào Camera','Bật Camera, nhìn thẳng và ngồi ngay ngắn như đang nói chuyện trực tiếp.','ok'],['🎙️','Tắt Micro khi chưa nói','Chỉ mở Micro khi phát biểu.','ok'],['🪴','Gọn gàng, yên tĩnh','Chỗ ngồi gọn gàng, không ồn để tập trung.','ok']]}
];
const PRACT=[
 [Q_SAY,Q_WAIT,Q_MEET1,Q_POLITE],
 [Q_CMP,Q_CHAT1,Q_CHAT2,Q_TF10,Q_EMO,Q_RULE],
 [Q_CHAT3,Q_PURP,Q_READ,Q_BIAS,Q_BIAS2],
 [Q_MEET3,Q_MEET2,Q_LEAVE,Q_VIDEO3,Q_DIS,Q_MEET4,Q_AIRULE]
];

/* ---------- phần luyện tập: 10 câu Vận dụng của bài giảng và 3 câu tình huống ---------- */
const PRACTICE=[Q_SAY,Q_LEAVE,Q_EMJ,Q_ATT,Q_DIS,Q_TF10,Q_EMO,Q_PURP,Q_BIAS,Q_BIAS2,Q_CHAT2,Q_MEET1,Q_MEET2].map(q=>({q,p:'A'}));

/* ---------- trạng thái ---------- */
const N=THEORY.length;
const state={view:-1, read:new Array(N).fill(false), stars:null, prac:null, pq:{}, po:{}, ui:{}, done:{}};   // pq: câu đang làm của bài tập nhỏ mỗi bài; prac: {order,qi,wrong} để làm tiếp phần luyện tập   // view: -1 mở đầu, 0..N-1 bài học, N luyện tập, N+1 kết quả
try{ const s=JSON.parse(localStorage.getItem('k5b26v1')||'null'); if(s&&s.read&&s.read.length===N){ state.read=s.read; state.stars=s.stars; state.prac=(s.prac&&s.prac.order&&s.prac.order.length===PRACTICE.length&&s.prac.order.every(i=>PRACTICE[i]))?s.prac:null; state.pq=s.pq||{}; state.po=s.po||{}; state.ui=s.ui||{}; state.done=s.done||{}; if(s.stars!==null&&s.stars!==undefined) state.view=N+1; else { const f=s.read.indexOf(false); state.view=f<0?N:f; } } }catch(e){}
let TEACH=false; try{ TEACH=localStorage.getItem('k5b26_teach')==='1'; }catch(e){}
const save=()=>{ try{localStorage.setItem('k5b26v1',JSON.stringify({read:state.read,stars:state.stars,prac:state.prac,pq:state.pq,po:state.po,ui:state.ui,done:state.done}))}catch(e){} };
const allRead=()=>state.read.every(Boolean);
const unlockedTo=()=>{ if(TEACH) return N; const i=state.read.indexOf(false); return i<0?N:i; };   // bài cuối được mở; N = đã mở phần luyện tập
function restart(force){
  if(!force && !confirm('Em muốn làm lại từ đầu? Tiến độ đã lưu sẽ bị xóa.')) return;
  state.read=new Array(N).fill(false); state.stars=null; state.prac=null; state.pq={}; state.po={}; state.ui={}; state.done={}; state.view=-1; save(); render();
}
const toast=m=>{ const t=el('<div class="toast">'+m+'</div>'); document.body.appendChild(t); setTimeout(()=>t.remove(),2200); };
let fresh=-2, keepScroll=false;   // chỉ số mục vừa được mở khóa (để chạy hiệu ứng)
function fb(node,kind,html){ node.className='fb show '+kind; node.innerHTML=html; }

function renderInbox(){
  const box=$('#inbox'), u=unlockedTo();
  box.innerHTML='<h4>📥 Bài học</h4>';
  const lockedMsg=n=>toast('🔒 Hoàn thành '+n+' để mở khóa bài này nhé!');
  const mk=(cls,icon,title,sub,st,idx,go,lockedBy)=>{
    const lk=cls.includes('locked');
    const b=el('<button class="mail '+cls+(fresh===idx?' fresh':'')+'"><span class="av">'+icon+'</span><span class="tx"><b>'+title+'</b><small>'+sub+'</small></span><span class="st">'+st+'</span></button>');
    b.onclick=()=>{ if(lk){ b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); lockedMsg(lockedBy); return; } go(); };
    return b;
  };
  THEORY.forEach((c,i)=>{
    const lk=i>u, rd=state.read[i];
    box.appendChild(mk((state.view===i?'cur ':'')+(rd?'done ':'')+(lk?'locked':''),c.i,c.h,'',rd?'✅':lk?'🔒':'🔓',i,()=>{ state.view=i; render(); },i>0?'“'+THEORY[i-1].h+'”':''));
  });
  box.insertAdjacentHTML('beforeend','<h4>🎯 Luyện tập</h4>');
  const done=state.stars!==null, open=allRead()||TEACH;
  box.appendChild(mk((state.view>=N?'cur ':'')+(done?'done ':'')+(open?'':'locked'),'🎯','Vận dụng',PRACTICE.length+' câu',done?'✅':open?'🔓':'🔒',N,()=>{ state.view=done?N+1:N; render(); },'cả 4 bài học'));
  fresh=-2;
  $('#starCount').textContent=state.stars||0;
}
function render(){
  renderInbox();
  const v=$('#view'); v.innerHTML=''; if(!keepScroll) window.scrollTo({top:0,behavior:'smooth'}); keepScroll=false;
  if(state.view<0) return intro(v);
  if(state.view<N) return lesson(v,state.view);
  if(state.view===N) return practice(v);
  finale(v);
}

/* ---------- mở đầu ---------- */
function intro(v){
  v.innerHTML=`<div class="hero">
  <div id="cbhost"></div>
  <button class="btn go" id="go">Bắt đầu học ▶</button></div>`;
  introChat($('#cbhost'));
  $('#go').onclick=()=>{ state.view=0; render(); };
}

/* ---------- một bài học: đọc rồi làm bài tập nhỏ ---------- */
function lesson(v,i){
  const c=THEORY[i];
  v.innerHTML='<div class="path">'+THEORY.map((_,k)=>(k?'<i class="ln'+(state.read[k-1]?' done':'')+'"></i>':'')+'<span class="nd'+(state.read[k]?' done':k===i?' cur':'')+'">'+(state.read[k]?'✓':k+1)+'</span>').join('')+'</div>'+'<div class="meta">'+(state.read[i]?'<span>✅ Đã hoàn thành</span>':'')+'</div><h2>'+c.i+' '+c.h+'</h2><div class="prog"><i style="width:'+(state.read.filter(Boolean).length/N*100)+'%"></i></div>'+
    '<div class="msg">'+(c.t?'<p>'+c.t+'</p>':'')+(c.v||'')+(c.e?'<div class="eg">💡 '+c.e+'</div>':'')+'</div><div id="pr"></div><div class="row" id="act" style="margin-top:14px;justify-content:center"></div>';
  const pq0=state.pq[i]||0;
  readCards(i,state.read[i]||state.pq[i]!==undefined);
  if(TEACH) document.querySelectorAll('.apx.locked').forEach(x=>x.classList.remove('locked'));   // chế độ giáo viên: mở khóa tất cả
  const act=$('#act');
  const nextBtn=()=>{ const last=i===N-1; act.innerHTML='<button class="btn go" id="nx">'+(last?'Sang phần luyện tập ▶':'Tiếp tục ▶')+'</button>'; $('#nx').onclick=()=>{ state.view=last?N:i+1; render(); }; };
  if(state.read[i]){   // đã xong: vẫn hiện bài tập, ở dạng đã giải
    $('#pr').innerHTML='<div class="practice"><div class="ph"><span>✏️ Bài tập nhỏ</span><span>✅ Đã làm xong</span></div><div class="pb" id="ph"></div></div>';
    const L=PRACT[i], ph=$('#ph'); let si=0;
    const show=()=>{
      ph.innerHTML='<div class="solved"></div>'+(L.length>1?'<div class="snav"><button class="btn" id="sp"'+(si?'':' disabled')+'>◀ Câu trước</button><b>Câu '+(si+1)+'/'+L.length+'</b><button class="btn" id="sn"'+(si<L.length-1?'':' disabled')+'>Câu sau ▶</button></div>':'');
      solvedQ(L[si],ph.firstChild);
      if(L.length>1){ $('#sp').onclick=()=>{ si--; show(); }; $('#sn').onclick=()=>{ si++; show(); }; }
    };
    show();
    return nextBtn();
  }
  const startPractice=()=>{
    act.innerHTML=''; if(!state.po[i]) state.po[i]=shuffle(PRACT[i].map((_,k)=>k)); const list=state.po[i].map(k=>shuffleQ(PRACT[i][k])); let qn=Math.min(pq0,list.length-1); const pr=$('#pr');
    pr.innerHTML='<div class="practice"><div class="ph"><span>✏️ Bài tập nhỏ</span><span id="cnt"></span></div><div class="pb" id="ph"></div></div>';
    const next=()=>{
      state.pq[i]=Math.max(state.pq[i]||0,qn); save();
      $('#cnt').textContent=list.length>1?'Câu '+(qn+1)+'/'+list.length:'';
      const key='m'+i+'_'+qn;
      const after=fx=>{
        const last=qn===list.length-1;
        fx.insertAdjacentHTML('afterend','<div class="nxrow">'+(qn?'<button class="btn" id="pv">◀ Câu trước</button> ':'')+'<button class="btn go" id="c">'+(last?'Hoàn thành bài ✔':'Câu tiếp ▶')+'</button></div>');
        if(qn) $('#pv').onclick=()=>{ qn--; next(); };
        $('#c').onclick=()=>{ if(!last){ qn++; next(); } else { Object.keys(state.done).forEach(k=>{ if(k.startsWith('m'+i+'_')) delete state.done[k]; }); state.read[i]=true; delete state.pq[i]; delete state.po[i]; save(); fresh=i+1; keepScroll=true; render(); toast(i<N-1?"🔓 Đã mở khóa: "+THEORY[i+1].h:"🔓 Đã mở khóa phần Luyện tập!"); } };
      };
      if(state.done[key]){ solvedQ(list[qn],$('#ph')); after($('#ph .fb')); }   // đã làm xong câu này trước khi tải lại: hiện kết quả
      else askQ(list[qn],$('#ph'),()=>{},fx=>{ state.done[key]=1; save(); after(fx); });
    };
    next(); if(!pq0) pr.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  act.innerHTML='<button class="btn" id="ok">Em đã hiểu ✓</button>';
  $("#ok").hidden=true; okCheck();
  $('#ok').onclick=startPractice;
  if(state.pq[i]!==undefined) startPractice();   // đang làm dở bài tập: mở lại đúng câu
}

/* ---------- luyện tập: ôn tập + trắc nghiệm gộp một mạch ---------- */
function practice(v){
  if(!state.prac){ const A=PRACTICE.map((_,i)=>i).filter(i=>PRACTICE[i].p==='A'), B=PRACTICE.map((_,i)=>i).filter(i=>PRACTICE[i].p==='B'); state.prac={order:shuffle(A.concat(B)),qi:0,wrong:0}; save(); }
  const qs=state.prac.order.map(i=>({q:shuffleQ(PRACTICE[i].q),p:PRACTICE[i].p})); let qi=Math.min(state.prac.qi,qs.length-1), wrong=state.prac.wrong;
  const PN={A:'Vận dụng',B:'Vận dụng'};
  function draw(){
    v.innerHTML='<div class="chead"><h2 style="margin:0">🎯 Luyện tập</h2><span class="part">'+PN[qs[qi].p]+'</span></div><div class="meta">Câu '+(qi+1)+'/'+qs.length+'</div><div class="prog"><i style="width:'+(qi/qs.length*100)+'%"></i></div><div id="qh"></div>';
    const after=f=>{
      if(qi<qs.length-1){ f.insertAdjacentHTML('afterend','<div class="nxrow"><button class="btn go" id="nq">Câu tiếp ▶</button></div>'); $('#nq').onclick=()=>{qi++; state.prac.qi=qi; save(); draw();}; }
      else { state.stars=wrong<=1?3:wrong<=3?2:1; state.prac=null; Object.keys(state.done).forEach(k=>{ if(k[0]==='p') delete state.done[k]; }); save(); f.insertAdjacentHTML('afterend','<div class="nxrow"><b>Em đã làm xong! Số lần chọn sai: '+wrong+'.</b> <button class="btn go" id="nq">Xem kết quả 🏅</button></div>'); $('#nq').onclick=()=>{ state.view=N+1; render(); }; }
    };
    if(state.done['p'+qi]){ solvedQ(qs[qi].q,$('#qh')); after($('#qh .fb')); }   // đã làm xong câu này trước khi tải lại: hiện kết quả
    else askQ(qs[qi].q,$('#qh'),()=>{wrong++; state.prac.wrong=wrong; save();},f=>{ state.done['p'+qi]=1; save(); after(f); });
  }
  draw();
}
function finale(v){
  const s=state.stars||0, rank=s>=3?'Em giao tiếp số xuất sắc':s>=2?'Em giao tiếp số giỏi':'Em giao tiếp số tập sự';
  v.innerHTML=`<div class="hero"><div class="big">🏅</div><h2>${rank}</h2><p><b>${'⭐'.repeat(s)}${'☆'.repeat(3-s)}</b></p>
  <div class="plan"><div><b>Kĩ năng nói</b><br>Nói rõ ràng, chờ đến lượt, từ ngữ lịch sự, nhìn vào Camera.</div><div><b>Kĩ năng viết</b><br>Emoji phù hợp, không viết tắt, không viết HOA toàn bộ.</div><div><b>Đọc hiểu tin nhắn</b><br>Đọc kĩ, hỏi lại khi chưa hiểu, phản hồi chính xác, tránh thiên kiến.</div><div><b>Hội nghị truyền hình</b><br>Bật Camera, tắt Micro khi không nói, không gian yên tĩnh.</div><div><b>AI khi họp</b><br>Không ghi hình, không chia sẻ thông tin riêng tư khi chưa được phép.</div></div>
  <button class="btn" id="again">Học lại từ đầu</button></div>`;
  $('#again').onclick=()=>restart(true);
}

/* ---------- câu hỏi dùng chung ---------- */
function askQ(Q, host, onWrong, onDone){
  host.innerHTML='<div class="qtext">'+Q.q+'</div>'+(Q.scene||'')+'<div class="ops"></div><div class="fb"></div>';
  const ops=host.querySelector('.ops'), f=host.querySelector('.fb'); let done=false;
  const win=()=>{ done=true; fb(f,'ok','✔ Đúng rồi!<br>'+whyHtml(Q.why)); onDone(f); };
  const lose=msg=>{ onWrong(); fb(f,'no',msg); };
  if(Q.form){
    const sel=Q.form.map(()=>null), rows=[];
    Q.form.forEach((F,k)=>{
      const r=el('<div class="tfrow frow"><div class="s"><b>'+F.l+'</b></div><div class="fo"></div></div>');
      F.o.forEach((t,j)=>{ const b=el('<button class="chip" data-j="'+j+'">'+t+'</button>');
        b.onclick=e=>{ e.stopPropagation(); if(done) return; sel[k]=j; r.querySelectorAll('.chip').forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); r.classList.remove('bad'); };
        r.querySelector('.fo').appendChild(b); });
      rows.push(r); ops.appendChild(r); });
    const chk=el('<button class="btn">Kiểm tra</button>'); ops.appendChild(chk);
    chk.onclick=e=>{ e.stopPropagation(); if(done) return;
      if(sel.some(v=>v===null)) return fb(f,'info','Hãy chọn đáp án cho tất cả các dòng.');
      let bad=0; rows.forEach((r,k)=>{ const ok=sel[k]===Q.form[k].a; r.classList.toggle('good',ok); r.classList.toggle('bad',!ok); if(!ok) bad++; });
      if(bad) lose('Có '+bad+' dòng chưa đúng (viền đỏ). Hãy sửa lại.'); else { chk.disabled=true; win(); } };
  } else if(Q.tf){
    const sel=Q.tf.map(()=>null), rows=[]; const LB=Q.lab||['Đúng','Sai'];
    Q.tf.forEach((s,k)=>{
      const r=el('<div class="tfrow"><div class="s">'+s+''+'</div><button class="chip" data-v="1">'+LB[0]+'</button><button class="chip" data-v="0">'+LB[1]+'</button></div>');
      r.querySelectorAll('.chip').forEach(b=>b.onclick=e=>{ e.stopPropagation(); if(done) return; sel[k]=b.dataset.v==='1';
        r.querySelectorAll('.chip').forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); r.classList.remove('bad'); });
      rows.push(r); ops.appendChild(r); });
    const chk=el('<button class="btn">Kiểm tra</button>'); ops.appendChild(chk);
    chk.onclick=e=>{ e.stopPropagation(); if(done) return;
      if(sel.some(v=>v===null)) return fb(f,'info','Hãy chọn đáp án cho tất cả các dòng.');
      let bad=0; rows.forEach((r,k)=>{ const ok=sel[k]===Q.a[k]; r.classList.toggle('good',ok); r.classList.toggle('bad',!ok); if(!ok) bad++; });
      if(bad) lose('Có '+bad+' dòng chưa đúng (viền đỏ). Hãy sửa lại.'); else { chk.disabled=true; win(); } };
  } else {
    let pick=null; const bs=[];
    const sub=el('<button class="btn" disabled>Gửi đáp án</button>');
    Q.o.forEach((t,k)=>{ const b=el('<button class="opt"><b>'+'ABCD'[k]+'.</b> '+t+'</button>');
      b.onclick=e=>{ e.stopPropagation(); if(done||b.classList.contains('bad')) return;
        pick=k; bs.forEach((x,j)=>x.classList.toggle('sel',j===k)); sub.disabled=false; f.className='fb'; };
      bs.push(b); ops.appendChild(b); });
    ops.appendChild(sub);
    sub.onclick=e=>{ e.stopPropagation(); if(done||pick===null) return;
      const b=bs[pick];
      if(pick===Q.a){ b.classList.remove('sel'); b.classList.add('good'); sub.disabled=true; win(); }
      else { b.classList.remove('sel'); b.classList.add('bad'); pick=null; sub.disabled=true; lose('Chưa đúng, hãy chọn lại.'); } };
  }
}
/* câu hỏi ở dạng đã giải (bài đã hoàn thành) */
function solvedQ(Q,host){
  let h='<div class="qtext">'+Q.q+'</div>'+(Q.scene||'')+'<div class="ops">';
  if(Q.form){
    h+=Q.form.map(F=>'<div class="tfrow good frow"><div class="s"><b>'+F.l+'</b></div><div class="fo">'+F.o.map((t,j)=>'<span class="chip'+(j===F.a?' sel':'')+'">'+t+'</span>').join('')+'</div></div>').join('');
  } else if(Q.tf){
    const LB=Q.lab||['Đúng','Sai'];
    h+=Q.tf.map((t,k)=>'<div class="tfrow good"><div class="s">'+t+''+'</div><span class="chip'+(Q.a[k]?' sel':'')+'">'+LB[0]+'</span><span class="chip'+(Q.a[k]?'':' sel')+'">'+LB[1]+'</span></div>').join('');
  } else {
    h+=Q.o.map((t,k)=>'<div class="opt'+(k===Q.a?' good':'')+'"><b>'+'ABCD'[k]+'.</b> '+t+'</div>').join('');
  }
  host.innerHTML=h+'</div><div class="fb show ok">✔ '+whyHtml(Q.why)+'</div>';
}
/* xáo trộn thứ tự đáp án */
function shuffleQ(Q){
  if(!Q.o || Q.o.length<3 || Q.fixed) return Q;
  const idx=shuffle(Q.o.map((_,i)=>i));
  return Object.assign({},Q,{o:idx.map(i=>Q.o[i]),a:idx.indexOf(Q.a)});
}

let fsz=22; try{ fsz=+localStorage.getItem('k5b26fontsize')||22 }catch(e){}
const setSize=px=>{ fsz=Math.max(18,Math.min(30,px)); document.documentElement.style.fontSize=fsz+'px'; try{localStorage.setItem('k5b26fontsize',fsz)}catch(e){} };
setSize(fsz);
$('#fsm').onclick=()=>setSize(fsz-2); $('#fbg').onclick=()=>setSize(fsz+2);
$('#restart').onclick=()=>restart();
/* Chế độ giáo viên: hiện luôn đáp án đúng (viền cam + chữ ✅) */
(function(){
  const oAsk=askQ;
  askQ=function(Q,host,w,d){
    oAsk(Q,host,w,d); if(!TEACH) return;
    if(Q.tf) host.querySelectorAll('.tfrow').forEach((r,k)=>{ const c=r.querySelector('[data-v="'+(Q.a[k]?1:0)+'"]'); if(c) c.classList.add('tkey'); });
    else if(Q.form) host.querySelectorAll('.frow').forEach((r,k)=>{ const c=r.querySelector('[data-j="'+Q.form[k].a+'"]'); if(c) c.classList.add('tkey'); });
    else if(Q.o) host.querySelectorAll('.opt').forEach((b,k)=>{ if(k===Q.a) b.classList.add('tkey'); });
  };
})();
/* Nhấp chuột phải hai lần liên tiếp vào ⭐ góc trên bên phải: giáo viên mở/khóa tất cả */
(function(){
  let last=0;
  $('#score').addEventListener('contextmenu',e=>{
    e.preventDefault();
    const now=Date.now(); if(now-last>=600){ last=now; return; }
    last=0; TEACH=!TEACH; try{ localStorage.setItem('k5b26_teach',TEACH?'1':'0'); }catch(x){}
    render();
    const t=el('<div style="position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#333;color:#fff;padding:10px 18px;border-radius:12px;z-index:9999;font-weight:700">'+(TEACH?'🔓 Đã mở khóa tất cả':'🔒 Đã khóa lại')+'</div>');
    document.body.appendChild(t); setTimeout(()=>t.remove(),1800);
  });
})();
render();
/* chế độ sáng / tối */
(function(){
  const root=document.documentElement, b=$('#theme');
  const paint=()=>{ b.textContent=root.dataset.theme==='dark'?'☀️ Sáng':'🌙 Tối'; };
  b.onclick=()=>{ root.dataset.theme=root.dataset.theme==='dark'?'light':'dark'; try{ localStorage.setItem('k5theme',root.dataset.theme); }catch(e){} paint(); };
  paint();
})();

/* ---------- khung chat: tin nhắn có giờ, dấu ✓✓, đang soạn tin, trả lời nhanh bằng thẻ chọn ---------- */
function chatBox(host,o){
  host.innerHTML='<div class="cb"><div class="cbh"><span class="cba">'+o.avatar+'</span><div><b>'+o.name+'</b><small><i class="dot"></i> '+o.status+'</small></div></div><div class="cbm" id="cbm" aria-live="polite"></div><div class="cbq" id="cbq"></div><div class="cbi"><span>Chọn một câu trả lời bên trên…</span><b>➤</b></div></div>';
  const m=host.querySelector('#cbm'), q=host.querySelector('#cbq');
  const clock=()=>{ const d=new Date(); return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'); };
  const add=(side,text)=>{ const d=el('<div class="bub '+(side==='me'?'r':'l')+'">'+text+'<span class="tm">'+clock()+(side==='me'?' ✓✓':'')+'</span></div>'); m.appendChild(d); m.scrollTop=m.scrollHeight; return d; };
  const typing=()=>{ const d=el('<div class="bub l typing"><i></i><i></i><i></i></div>'); m.appendChild(d); m.scrollTop=m.scrollHeight; return d; };
  const them=(text,cb)=>{ const t=typing(); setTimeout(()=>{ t.remove(); add('them',text); if(cb) cb(); },800); };
  o.start(them,add,q);
}
function introChat(host){
  chatBox(host,{avatar:'👩‍🏫',name:'Cô Lan',status:'đang hoạt động',start:(them,add,q)=>{
    const chips=(list,done)=>{ q.innerHTML=''; list.forEach(([t,reply,ok,msg])=>{ const b=el('<button class="chip">'+t+'</button>'); b.onclick=()=>{ q.innerHTML=''; add('me',msg||t); them(reply,ok?done:()=>chips(list,done)); }; q.appendChild(b); }); };
    them('Chào em! Chiều nay lớp mình họp nhóm trực tuyến qua Video.',()=>them('Khi bạn khác đang trình bày, em nên làm gì?',()=>chips([
      ['Chờ bạn nói xong rồi mới phát biểu','Đúng rồi! Chờ đến lượt là kĩ năng giao tiếp rất quan trọng. Giờ cô và em cùng học tiếp nhé! 🎉',true,'Dạ, em sẽ chờ bạn nói xong rồi mới phát biểu ạ.'],
      ['Nói chen vào ngay','Nói chen vào làm bạn mất ý và thiếu lịch sự đó em. Em thử lại nhé!',false,'Dạ, em sẽ nói chen vào ngay ạ.'],
      ['Tắt Camera và làm việc khác','Em cần tập trung lắng nghe bạn nói nữa chứ. Em thử lại nhé!',false,'Dạ, em sẽ tắt Camera và làm việc khác ạ.']
    ],()=>{})));
  }});
}

/* ---------- các thẻ bấm lần lượt: ô đang nhấp nháy mở ra một kĩ năng; xem hết mới hiện nút "Em đã hiểu" ---------- */
function readCards(i,all){
  const box=$('#rc'), P=THEORY[i].cards, key='c'+i; let k=0; gate[i]=false;
  box.innerHTML='<div class="eg adh" id="rch">👇 Em hãy bấm vào ô <b>?</b> đang nhấp nháy để xem nhé!</div><div class="rcg">'+P.map((p,j)=>'<button class="rc '+p[3]+'"><span class="rb"><span class="ri">'+p[0]+'</span><b>'+p[1]+'</b><small>'+p[2]+'</small></span><span class="rn">?</span></button>').join('')+'</div>';
  const bs=[...box.querySelectorAll('.rc')];
  const arm=()=>{ if(k<P.length) bs[k].classList.add('next'); };
  const reveal=()=>{
    const p=P[k], b=bs[k]; b.classList.remove('next'); b.classList.add('open');
    k++; state.ui[key]=k; save();
    if(k<P.length) arm(); else { $('#rch').hidden=true; gate[i]=true; okCheck(); }
  };
  bs.forEach((b,j)=>b.onclick=()=>{ if(j===k) reveal(); });
  arm();
  if(all) while(k<P.length) reveal(); else { let n=state.ui[key]||0; while(n-- > 0 && k<P.length) reveal(); }
}
