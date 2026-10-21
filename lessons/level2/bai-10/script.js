/* =====================================================================
   PHẦN DỮ LIỆU — thầy/cô chỉnh nội dung ở đây (từ đầu file đến dòng “HẾT DỮ LIỆU”)
   Quy ước chữ:  **từ khóa** = tô nổi bật  ·  Q.chk=true: đáp án suy luận, cần xác nhận
   ===================================================================== */
const LESSON={id:'ic3gs6-k7-b10'};

/* ---- Hình minh họa (HTML đơn giản) ---- */
const VIS={
 def:`<div class="chips3"><div class="vc"><span class="e">🧾</span>Thông tin</div><div class="vc"><span class="e">👤</span>Tài khoản</div><div class="vc"><span class="e">👣</span>Dấu vết hoạt động</div></div><div class="trail" aria-hidden="true"><span>📱</span><i>👣</i><i>👣</i><i>👣</i><span>🌐</span></div>`,
 online:`<div class="chips3"><div class="vc"><span class="e">📇</span>Hồ sơ trực tuyến</div><div class="vc b"><span class="e">🖱️</span>Tất cả hoạt động trực tuyến</div></div>`,
 two:`<div class="chips3"><div class="vc"><span class="e">😊</span>Danh tính <b>cá nhân</b><small>Personal digital identity</small></div><div class="vc b"><span class="e">💼</span>Danh tính <b>nghề nghiệp</b><small>Professional digital identity</small></div></div>`,
 per:`<div class="fbm"><div class="fh"><span class="fav"><svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true"><circle cx="24" cy="24" r="24" fill="#7fb36a"/><path d="M6 48c0-12 8-16 18-16s18 4 18 16z" fill="#b5523b"/><ellipse cx="24" cy="21" rx="9" ry="10.5" fill="#efc09b"/><path d="M14 20c-2-10 7-14 11-13 6 1 10 6 9 14-2-6-5-9-10-9s-8 3-10 8z" fill="#2b211e"/></svg></span><div class="fn"><b>Nhi Cute</b><span>2 giờ · 🌐</span></div><span class="fdots" aria-hidden="true">•••</span></div><div class="ft">Cuối tuần chill chill ☕🎧 Nghe nhạc, uống trà sữa, dạo công viên cho thư giãn~ 😌</div><div class="fpic"><svg viewBox="0 0 480 270" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Ảnh cô Nhi mỉm cười, cầm ly trà sữa trân châu" style="display:block;width:100%;height:auto"><defs><linearGradient id="bgt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe3ea"/><stop offset="1" stop-color="#ffeccc"/></linearGradient></defs><rect width="480" height="270" fill="url(#bgt)"/><circle cx="60" cy="60" r="34" fill="#fff" opacity=".45"/><circle cx="430" cy="210" r="46" fill="#fff" opacity=".4"/><circle cx="420" cy="50" r="18" fill="#fff" opacity=".5"/><g transform="translate(-40 0)"><path d="M186 108c-6-60 40-84 66-76 36 6 52 40 44 88-6-34-24-52-50-54-26 2-48 14-60 42z" fill="#2b211e"/><path d="M186 100c-12 46-8 96 14 116l30 6-10-110zM296 104c10 46 4 94-16 112l-30 6 14-108z" fill="#2b211e"/><path d="M130 270c0-60 50-82 110-82s110 22 110 82z" fill="#6fb3e0"/><rect x="215" y="150" width="50" height="50" rx="20" fill="#e8b48e"/><ellipse cx="240" cy="110" rx="52" ry="62" fill="#f2c6a4"/><path d="M188 104c4-34 26-52 54-52 30 0 50 20 52 54-12-24-30-34-54-34s-40 10-52 32z" fill="#2b211e"/><circle cx="222" cy="114" r="5.5" fill="#2b211e"/><circle cx="260" cy="114" r="5.5" fill="#2b211e"/><ellipse cx="206" cy="132" rx="9" ry="6" fill="#f4a0a0" opacity=".6"/><ellipse cx="276" cy="132" rx="9" ry="6" fill="#f4a0a0" opacity=".6"/><path d="M220 138q20 22 40 0" fill="#fff" stroke="#9a4b3b" stroke-width="3" stroke-linejoin="round"/></g><path d="M268 262l64-62" stroke="#6fb3e0" stroke-width="38" stroke-linecap="round"/><path d="M321 100h62l-10 85h-42z" fill="#e8c8a0" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M324 122h56l-2 12h-52z" fill="#fff" opacity=".55"/><rect x="316" y="90" width="72" height="13" rx="6" fill="#fff" stroke="#d8d8d8" stroke-width="2"/><rect x="354" y="40" width="10" height="56" rx="5" fill="#f06292" transform="rotate(8 359 96)"/><g fill="#3b2418"><circle cx="338" cy="176" r="6.5"/><circle cx="352" cy="178" r="6.5"/><circle cx="366" cy="176" r="6.5"/><circle cx="345" cy="167" r="6.5"/><circle cx="359" cy="167" r="6.5"/></g><circle cx="352" cy="146" r="19" fill="#f2c6a4"/><path d="M334 138c-10-4-14 6-8 12" fill="none" stroke="#e8b48e" stroke-width="9" stroke-linecap="round"/><text x="408" y="72" font-size="26">✨</text><text x="40" y="238" font-size="24">🧋</text></svg></div><div class="frx"><span><i class="r1">👍</i><i class="r2">❤️</i> 128</span><span>12 bình luận · 3 lượt chia sẻ</span></div><div class="fact"><span><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.3l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg> Like</span><span><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></svg> Comment</span><span><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"/></svg> Share</span></div></div>`,
 pro:`<div class="lim"><div class="lcov"></div><div class="lbody"><span class="lav"><svg viewBox="0 0 96 96" width="96" height="96" aria-hidden="true"><circle cx="48" cy="48" r="48" fill="#cfd8e3"/><path d="M8 96c2-26 18-34 40-34s38 8 40 34z" fill="#2f3a4f"/><path d="M38 62l10 14 10-14z" fill="#fff"/><path d="M46 66h4l2 20h-8z" fill="#c0392b"/><rect x="41" y="50" width="14" height="14" rx="6" fill="#e0ac86"/><ellipse cx="48" cy="38" rx="17" ry="20" fill="#eab995"/><path d="M30 36c-2-16 10-22 19-21 11 1 19 9 17 22-3-8-8-12-18-12-9 0-15 4-18 11z" fill="#25201d"/><circle cx="41" cy="40" r="2.2" fill="#25201d"/><circle cx="55" cy="40" r="2.2" fill="#25201d"/><path d="M41 48q7 6 14 0" fill="none" stroke="#8c4a3a" stroke-width="2.2" stroke-linecap="round"/></svg></span><b class="lname">Nguyễn Hoàng Minh</b><div class="lhead">Chuyên viên công nghệ thông tin</div><div class="lsub">Hà Nội · 500+ kết nối</div><div class="lbtns"><span class="lb1">+ Kết nối</span><span class="lb2">Nhắn tin</span></div></div><div class="lsec"><h4>Trình độ chuyên môn</h4><div class="lit"><span class="llogo">🎓</span><div><b>Kỹ sư công nghệ thông tin</b><br><small>Trường Đại học XYZ</small></div></div><div class="lit"><span class="llogo">📜</span><div><b>Chứng nhận IC3 GS6</b><br><small>Tin học và kĩ năng số</small></div></div></div><div class="lsec"><h4>Kinh nghiệm làm việc</h4><div class="lit"><span class="llogo">🏢</span><div><b>Chuyên viên IT</b><br><small>Công ty ABC · 2020 – nay</small></div></div></div></div>`,
 upd:`<div class="chips3"><div class="vc"><span class="e">🧑‍💼</span>Hình ảnh đại diện chuyên nghiệp</div><div class="vc"><span class="e">📜</span>Chứng nhận kỹ năng, trình độ</div><div class="vc"><span class="e">🏅</span>Kinh nghiệm hoặc thành tích mới</div></div>`,
 fit:`<div class="chips3"><div class="vc"><span class="e">🏫</span>Tài khoản trường học<small>dùng để học tập</small></div><div class="vc b"><span class="e">😊</span>Tài khoản cá nhân<small>giải trí, trò chuyện với bạn bè</small></div></div>`,
 alias:`<div class="chips3"><div class="vc"><span class="e">🧒</span>Tên thật<small>Nguyễn Văn An</small></div><div class="vc b"><span class="e">🐱</span>Bí danh (Alias)<small>“Mèo Con”</small></div></div>`,
 safe:`<div class="chips3"><div class="vc"><span class="e">🙅</span>Không cho người lạ thông tin cá nhân</div><div class="vc"><span class="e">🚪</span>Đăng xuất sau khi dùng máy người khác</div></div>`
};

/* ---- Thẻ học (theo thứ tự bài giảng). ex = ví dụ ngoài đời [biểu tượng, tiêu đề, mô tả ngắn] ---- */
const LEARN={
 def:{h:"Danh tính kĩ thuật số là gì?",
  p:["Là “em là ai” trên mạng, gồm **thông tin**, **tài khoản** và **dấu vết hoạt động**."],v:'def',
  ex:[["🛒","Mua hàng trên Shopee","Tài khoản và lịch sử đơn hàng của em."],["💬","Nhắn tin trên Zalo","Tên, ảnh đại diện và tin nhắn."],["▶️","Xem video YouTube","Lịch sử xem là dấu vết số."]]},
 online:{h:"Danh tính trực tuyến",
  p:["**Hồ sơ trực tuyến** + **mọi hoạt động** của em trên mạng."],v:'online',
  ex:[["📇","Hồ sơ","Trang TikTok có tên, ảnh, tiểu sử."],["🖱️","Hoạt động","Thả tim, bình luận, theo dõi kênh."]]},
 two:{h:"Hai dạng danh tính",p:["Trên Internet có **hai dạng** danh tính cơ bản:"],v:'two',
  ex:[["🎮","Chơi game, đăng ảnh đi chơi","→ danh tính cá nhân."],["🧑‍💻","Nộp CV xin việc","→ danh tính nghề nghiệp."]]},
 per:{h:"Danh tính kỹ thuật số cá nhân",
  p:["Liên quan đến **riêng tư** và **giải trí**.","Ví dụ: **Facebook** của cô Nhi."],v:'per',
  ex:[["📸","Đăng ảnh đi Đà Lạt","Bạn bè và người thân xem."],["🎵","Chia sẻ playlist yêu thích","Sở thích riêng của em."]]},
 pro:{h:"Danh tính kỹ thuật số nghề nghiệp",
  p:["Liên quan đến **học tập** và **công việc**.","Ví dụ: **LinkedIn** của anh Minh."],v:'pro',
  ex:[["📄","CV trên TopCV","Nhà tuyển dụng sẽ đọc."],["🎓","Chứng nhận IC3 GS6","Ghi vào hồ sơ để chứng minh kỹ năng."]]},
 tips:{h:"Xây dựng danh tính kĩ thuật số tốt",list:true,
  p:["Cần nhớ **2 điều**:"],
  cards:[["📝","Giữ thông tin luôn mới","**Chính xác**, **đầy đủ**, **cập nhật**."],["🎯","Chia sẻ nội dung phù hợp","Đúng **mục đích** của tài khoản."]],
  ex:[["⚠️","Hồ sơ cũ","Hồ sơ ghi “sinh viên” dù đã đi làm 2 năm sẽ làm nhà tuyển dụng nghi ngờ."]]},
 upd:{h:"📝 Lưu ý 1: Giữ thông tin luôn mới",
  p:["Có thay đổi mới thì **cập nhật** hồ sơ ngay:"],v:'upd',
  ex:[["🏅","Vừa đạt chứng nhận mới","Thêm vào mục Chứng chỉ trên LinkedIn."],["🏢","Đổi công ty","Sửa lại chức danh và năm làm việc."]]},
 fit:{h:"🎯 Lưu ý 2: Nội dung phù hợp mục đích",
  p:["Mỗi tài khoản dùng cho **một mục đích**."],v:'fit',
  ex:[["🏫","Làm bài trên Google Classroom","Dùng tài khoản trường học."],["🎮","Chat nhóm bạn trên Messenger","Dùng tài khoản cá nhân."]]},
 alias:{h:"Bí danh (Alias)",
  p:["**Bí danh** là một **tên khác** với tên thật. Dùng khi **tên quá phổ biến** hoặc để **giữ an toàn**, **không** dùng để làm điều sai trái."],v:'alias',
  ex:[["🎮","Nick game “Mèo Con”","Không lộ tên thật khi chơi."],["✍️","Tên “Nguyễn Văn An”","Trùng tên rất nhiều người nên cần bí danh."]]},
 safe:{h:"Bảo vệ bản thân khi trực tuyến",
  p:["✔ **Không** cho **người lạ** thông tin cá nhân.","✔ **Đăng xuất** sau khi dùng máy của người khác."],v:'safe',
  ex:[["☕","Dùng máy ở quán net","Nhớ đăng xuất Facebook, Gmail trước khi về."],["🛍️","Trang bán hàng lạ, giá rẻ bất thường","Dễ bị lừa, đừng mua."],["📞","Người lạ xin số điện thoại","Từ chối và nói với người lớn."]]},
 pos:{h:"Hồ sơ số tích cực",
  p:["Mọi hành động online để lại **dấu chân số**."],
  cards:[["👍","Tích cực & lịch sự","Đăng nội dung **có ích**, **kiểm tra** trước khi share."],["🤝","Trung thực","Là **chính mình**, tôn trọng **bản quyền**."]],
  ex:[["📰","Share tin chưa kiểm tra","Dễ lan tin giả."],["🖼️","Dùng ảnh của người khác","Ghi nguồn và xin phép."]]},
 noai:{h:"Không nhập dữ liệu nhạy cảm vào AI",
  p:["Thông tin em gõ vào chatbot có thể bị **lưu trên máy chủ** và **rò rỉ**."],quick:{q:"Dữ liệu này có **rủi ro** khi nhập vào AI không?",items:[["🔑","Mật khẩu",1,"Mật khẩu là chìa khóa tài khoản của em."],["📚","Câu hỏi bài tập Toán",0,"Hỏi kiến thức, bài tập thì an toàn."],["💳","Số thẻ ngân hàng",1,"Số thẻ có thể bị lấy cắp tiền."],["🎨","Nhờ AI gợi ý ý tưởng vẽ tranh",0,"Ý tưởng sáng tạo không lộ thông tin riêng."],["🪪","Ảnh giấy tờ cá nhân",1,"Giấy tờ có thể bị dùng để mạo danh."],["🏠","Họ tên và địa chỉ nhà",1,"Người xấu có thể tìm ra nhà em."],["🌍","Hỏi thủ đô của một nước",0,"Câu hỏi kiến thức chung nên an toàn."],["📞","Số điện thoại của em",1,"Số điện thoại có thể bị lộ, bị làm phiền."]]},
  cards:[["✅","Làm đúng","Chỉ hỏi **kiến thức/bài tập**, **che** thông tin cá nhân."]],
  ex:[["🪪","Chụp thẻ căn cước gửi chatbot","Nguy hiểm, có thể bị lộ."],["📚","Nhờ chatbot giải thích bài Toán","An toàn."]]},
 core:{h:"Gen AI – Bổ sung cốt lõi",
  p:["3 điều cần nhớ khi dùng AI:"],
  cards:[["👣","Dấu vết trực tuyến","Danh tính số gồm **nhiều dấu vết**."],["🎭","Không mạo danh","Không dùng AI tạo **hình giả**."],["🔍","Kiểm tra","Nội dung giống thật vẫn cần **xác minh**."]],
  ex:[["🎬","Video deepfake giả người nổi tiếng","Không tạo, không chia sẻ."],["🤖","Bài AI viết nghe rất đúng","Kiểm tra lại nguồn trước khi dùng."]]},
 sum:{h:"📌 Tóm tắt bài học",list:true,
  p:["Ôn nhanh **6 ý chính**:"],
  cards:[["🆔","Danh tính kĩ thuật số","**Thông tin** + **tài khoản** + **dấu vết** trên Internet."],
         ["👥","Cá nhân & nghề nghiệp","**Cá nhân**: riêng tư, giải trí · **Nghề nghiệp**: học tập, công việc."],
         ["📝","Giữ hồ sơ luôn mới","**Chính xác**, **đầy đủ**, **cập nhật**."],
         ["🎯","Nội dung phù hợp","Đúng **tài khoản**, đúng **mục đích**."],
         ["🛡️","Bí danh & an toàn","Dùng **bí danh**, **không** cho người lạ thông tin, **đăng xuất**."],
         ["🤖","Hồ sơ tích cực & AI","**Tích cực**, **trung thực**; **không** đưa dữ liệu nhạy cảm cho AI."]]}
};

/* ---- Câu hỏi. t: choice | dropdown | match | hotspot | cloze | sort | order | chat
   a (choice) = chỉ số đáp án đúng; extra:true = “Luyện thêm”; chk:true = cần giáo viên xác nhận ---- */
const QS={
 /* ===== Phần 1: Danh tính kĩ thuật số ===== */
 dd1:{t:'cloze',extra:0,q:"Điền vào chỗ trống: Danh tính kĩ thuật số",text:"**Danh tính kĩ thuật số** (Digital Identity) là các [[thông tin]], [[tài khoản]] và [[dấu vết hoạt động]] của em trên [[Internet]].",grp:[[0,1,2]],x:["đồ chơi","tiền mặt"],hint:"Nhớ lại thẻ vừa học: danh tính gồm 3 thứ — thông tin, tài khoản, dấu vết."},
 dd1b:{t:'cloze',q:"Điền vào chỗ trống: danh tính trực tuyến",text:"**Danh tính trực tuyến** (Online identity) là [[hồ sơ trực tuyến]] và tất cả các [[hoạt động]] trực tuyến của người dùng.",x:["đồ chơi","tiền mặt"],hint:"Danh tính trực tuyến gồm hồ sơ và mọi việc em làm trên mạng."},
 s5:{t:'choice',q:"Em hãy cho biết, tùy chọn nào sau đây là **đúng nhất** khi nói về danh tính trực tuyến?",
  o:["Các thông tin mà người dùng sử dụng để đăng nhập trên các trang Web.","Các thông tin chính thức được ghi nhận bởi chính phủ như: Họ tên, địa chỉ,...","Địa chỉ Email của người dùng.","Hồ sơ trực tuyến và tất cả các hoạt động trực tuyến của người dùng."],a:[3],
  hint:"Danh tính trực tuyến gồm cả hồ sơ lẫn mọi hoạt động của em. Hãy chọn đáp án rộng nhất.",
  why:"Danh tính = hồ sơ + việc em làm. Mật khẩu, email hay giấy tờ chỉ là mảnh nhỏ của bức tranh."},
 s6:{t:'choice',chk:1,q:"Bạn hãy cho biết, nhận định sau đây là **đúng hay sai**: “Tài khoản ngân hàng trực tuyến là một phần của nhận dạng kĩ thuật số.”",
  o:["Đúng","Sai"],a:[0],hint:"Tài khoản ngân hàng trực tuyến cũng là một tài khoản em dùng trên Internet.",
  why:"Cứ có tài khoản trên mạng là có “dấu tay” của em ở đó, kể cả ngân hàng."},
 x1:{t:'choice',extra:1,q:"Hoạt động nào sau đây để lại **dấu vết** trong danh tính kĩ thuật số của em?",
  o:["Đăng một bức ảnh lên mạng xã hội","Nói chuyện với bạn ở sân trường","Chơi nhảy dây ở lớp","Đọc một cuốn sách giấy ở nhà"],a:[0],
  hint:"Dấu vết số chỉ có khi em làm việc đó trên Internet, máy tính, điện thoại hoặc phần mềm.",why:"Chỉ việc làm trên mạng mới để lại dấu chân số, việc ngoài đời thì không."},

 /* ===== Phần 2: Cá nhân và nghề nghiệp ===== */
 dd2:{t:'cloze',q:"Điền vào chỗ trống: hai dạng danh tính",text:"Trên Internet có hai dạng danh tính cơ bản: danh tính [[cá nhân]] và danh tính [[nghề nghiệp]].",grp:[[0,1]],x:["bí mật"],hint:"Một dạng cho đời sống riêng, một dạng cho công việc."},
 dd3:{t:'cloze',q:"Điền vào chỗ trống: danh tính cá nhân và nghề nghiệp",text:"Danh tính cá nhân liên quan đến hoạt động [[riêng tư]] và [[giải trí]].\nVí dụ: tài khoản [[Facebook]] của cô Nhi.\nDanh tính nghề nghiệp liên quan đến hoạt động [[học tập]] và [[công việc]].\nVí dụ: hồ sơ trên [[LinkedIn]] của anh Minh.",grp:[[0,1],[3,4]],x:["bí mật","tiền mặt"],hint:"Cô Nhi đăng bài thư giãn cuối tuần. Hồ sơ anh Minh có trình độ chuyên môn và kinh nghiệm làm việc."},
 s11:{t:'choice',chk:1,q:"Tuỳ chọn nào sau đây là hai khía cạnh của sự hiện diện trực tuyến có ảnh hưởng đến **danh tính kỹ thuật số nghề nghiệp**? (Chọn 2)",
  o:["Trang Web công ty","Ngày sinh","Trang Facebook","Tài khoản LinkedIn"],a:[0,3],
  hint:"Chọn hai thứ gắn với công việc.",why:"Hỏi: việc này gắn với công việc không? Công ty, LinkedIn thì có; ngày sinh, Facebook thì thiên về riêng tư."},
 x2:{t:'hotspot',extra:1,q:"Đây là hồ sơ nghề nghiệp của chị Hà. Chạm vào **hai** thông tin **không phù hợp** với hồ sơ nghề nghiệp.",multi:true,
  html:`<div class="lim"><div class="lcov"></div><div class="lbody"><span class="lav"><svg viewBox="0 0 96 96" width="96" height="96" aria-hidden="true"><circle cx="48" cy="48" r="48" fill="#f3d9dc"/><path d="M30 40c-6-24 14-30 24-28 14 3 20 14 14 34l-6 20-10 4-18-6z" fill="#3a2a2a"/><path d="M8 96c2-26 18-34 40-34s38 8 40 34z" fill="#7a3b5e"/><path d="M36 62l12 16 12-16z" fill="#fff"/><rect x="41" y="50" width="14" height="14" rx="6" fill="#e6b08c"/><ellipse cx="48" cy="38" rx="16" ry="19" fill="#efc09b"/><path d="M31 36c0-14 9-22 19-21 10 1 17 8 16 21-4-8-9-11-17-11-8 0-14 4-18 11z" fill="#3a2a2a"/><circle cx="42" cy="40" r="2.2" fill="#2b211e"/><circle cx="55" cy="40" r="2.2" fill="#2b211e"/><ellipse cx="38" cy="47" rx="4" ry="2.6" fill="#f4a0a0" opacity=".6"/><ellipse cx="59" cy="47" rx="4" ry="2.6" fill="#f4a0a0" opacity=".6"/><path d="M42 48q6 5 12 0" fill="none" stroke="#9a4b3b" stroke-width="2.2" stroke-linecap="round"/></svg></span><b class="lname">Trần Thu Hà</b><div class="lhead">Chuyên viên nhân sự</div><div class="lsub">TP. Hồ Chí Minh · 500+ kết nối</div><div class="lbtns"><span class="lb1">+ Kết nối</span><span class="lb2">Nhắn tin</span></div></div><div class="lsec zs"><button type="button" class="zone" data-k="exp">💼 Kinh nghiệm làm việc</button>
   <button type="button" class="zone" data-k="hobby">🎮 Ảnh chơi game cùng bạn bè</button>
   <button type="button" class="zone" data-k="cert">🎓 Trình độ chuyên môn</button>
   <button type="button" class="zone" data-k="trip">🏖️ Ảnh đi biển cùng gia đình</button></div></div>`,
  keys:["hobby","trip"],keyText:"Ảnh chơi game và ảnh đi biển (là nội dung cá nhân)",
  hint:"Hồ sơ nghề nghiệp nói về công việc, không phải giải trí hay gia đình.",why:"Hồ sơ nghề nghiệp giống CV: chỉ để những gì nhà tuyển dụng cần xem. Ảnh chơi, ảnh nghỉ mát để dành cho Facebook."},

 /* ===== Phần 3: Giữ thông tin luôn mới ===== */
 dd5:{t:'cloze',q:"Điền vào chỗ trống: giữ thông tin luôn mới",text:"Giữ thông tin [[chính xác]], [[đầy đủ]] và luôn được [[cập nhật]].",grp:[[0,1]],x:["bỏ trống","cũ kĩ"],hint:"Ba từ: đúng, đủ và mới."},
 s14:{t:'choice',chk:1,q:"Bạn đang sử dụng các tài khoản mạng xã hội cho mục đích cá nhân và công việc. Bạn nên đăng tải **hai** nội dung nào lên tài khoản mạng xã hội dùng vào mục đích **công việc** của mình? (Chọn 2)",
  o:["Ảnh hồ sơ chính thức của bạn","Chứng nhận kỹ thuật mà bạn có","Hình ảnh gia đình đang chơi trò chơi","Khiếu nại về đồng nghiệp hiện tại"],a:[0,1],
  hint:"Tài khoản công việc chỉ nên có những thứ chuyên nghiệp.",why:"Hãy nghĩ “nếu sếp mở trang này ra thì sao?” Ảnh nghiêm túc và chứng nhận gây ấn tượng tốt; chuyện gia đình hay phàn nàn thì không."},
 s15:{t:'choice',chk:1,q:"Bạn đang nộp đơn xin việc trong lĩnh vực nghề nghiệp đã chọn. Nhà tuyển dụng tiềm năng sẽ truy cập hồ sơ công việc trực tuyến của bạn. Bạn cần làm gì để **hỗ trợ** hồ sơ công việc trực tuyến của mình?",
  o:["Cập nhật hồ sơ thường xuyên để giới thiệu các kỹ năng của bạn.","Hạn chế quyền truy cập vào hồ sơ để duy trì quyền riêng tư.","Cung cấp thông tin về lịch sử tiền lương và kỳ vọng của bạn.","Cung cấp thông tin về các hoạt động cá nhân để minh chứng cho sự cân bằng của mình."],a:[0],
  hint:"Nhà tuyển dụng muốn thấy kỹ năng mới nhất của em.",why:"Nhà tuyển dụng luôn muốn thấy bạn mới nhất. Hồ sơ cũ giống tấm danh thiếp đã lỗi thời."},
 s16:{t:'choice',q:"Khi tham gia trực tuyến, em hãy cho biết tùy chọn nào sau đây có thể gây **ảnh hưởng không tốt** đến danh tính nghề nghiệp của người dùng? (Chọn 3)",
  o:["Người dùng đăng một bức ảnh về hoạt động Team Building của các thành viên trong phòng ban thể hiện sự đoàn kết lên mạng xã hội đóng của công ty.","Người dùng đăng bài viết phàn nàn về sếp của mình.","Người dùng sử dụng tài khoản nghề nghiệp để viết một bình luận công kích một quan điểm chính trị bất đồng trên một diễn đàn.","Người dùng sử dụng Email cá nhân để gửi các thông tin hợp đồng bí mật của công ty.","Người dùng sử dụng tài khoản cá nhân để mua sắm chiếc đồng hồ cho riêng mình."],a:[1,2,3],
  hint:"Tìm 3 việc làm người khác nhìn em kém chuyên nghiệp hoặc làm lộ bí mật công ty.",
  why:"Tự hỏi: người khác nhìn vào có thấy mình thiếu chuyên nghiệp hoặc làm lộ bí mật không? Chê sếp, cãi nhau và gửi tài liệu mật bằng email riêng đều “có”."},
 s17:{t:'dropdown',q:"Em hãy chọn **Đúng** hoặc **Sai** cho mỗi phát biểu sau đây:",
  rows:[{t:"Sử dụng tài khoản nghề nghiệp cùng với thẻ tín dụng của doanh nghiệp khi mua sắm các loại hàng hóa cho công ty.",o:["Đúng","Sai"],a:0},
        {t:"Cài đặt phần mềm Microsoft Office mới nhất vào máy tính của trường học khi sử dụng.",o:["Đúng","Sai"],a:1},
        {t:"Đăng các video hướng dẫn bản thân soạn thảo văn bản lên mạng xã hội trong giờ làm việc.",o:["Đúng","Sai"],a:1},
        {t:"Sử dụng tài khoản cá nhân để cộng tác với bố lên kế hoạch cho kì nghỉ hè.",o:["Đúng","Sai"],a:0}],
  hint:"Tài khoản nghề nghiệp dùng cho việc công ty; tài khoản cá nhân dùng cho việc riêng.",
  why:"Tài khoản công việc làm việc công ty; tài khoản cá nhân làm việc nhà. Việc cài máy trường hay quay video giờ làm không phải việc của mình."},
 x3:{t:'dropdown',extra:1,q:"Chọn từ đúng cho mỗi câu:",
  rows:[{t:"Em vừa có chứng nhận mới. Em nên {s} hồ sơ nghề nghiệp của mình.",o:["cập nhật","xóa hết","bỏ quên"],a:0},
        {t:"Ảnh đại diện trên hồ sơ nghề nghiệp nên {s}.",o:["chuyên nghiệp","che mặt bằng biểu tượng cảm xúc","là ảnh trò chơi"],a:0}],
  hint:"Hồ sơ tốt thì luôn mới và chuyên nghiệp.",why:"Chứng nhận mới thì thêm vào hồ sơ; ảnh đại diện nên nghiêm túc như ảnh thẻ."},
 x4:{t:'order',extra:1,demo:[{e:"🔐👤",t:"Đăng nhập vào tài khoản nghề nghiệp."},{e:"📇",t:"Mở phần hồ sơ của em."},{e:"📜➕",t:"Thêm chứng nhận hoặc kinh nghiệm mới."},{e:"💾✔️",t:"Lưu lại thay đổi."}],q:"Sắp xếp các bước **cập nhật hồ sơ nghề nghiệp** theo đúng thứ tự:",
  items:["Đăng nhập vào tài khoản nghề nghiệp","Mở phần hồ sơ của em","Thêm chứng nhận hoặc kinh nghiệm mới","Lưu lại thay đổi"],
  hint:"Phải vào được hồ sơ trước, rồi mới thêm, cuối cùng mới lưu.",why:"Quy trình luôn đi từ ngoài vào trong: vào cổng, mở hồ sơ, thêm nội dung, rồi cất (lưu)."},

 /* ===== Phần 4: Nội dung phù hợp ===== */
 dd6:{t:'cloze',q:"Điền vào chỗ trống: dùng đúng tài khoản",text:"Tài khoản trường học dùng để [[học tập]].\nTài khoản cá nhân dùng để [[giải trí]] và trò chuyện với [[bạn bè]].",x:["kiếm tiền"],hint:"Trường học → học. Cá nhân → vui chơi."},
 s19:{t:'choice',chk:1,q:"Bạn có các tài khoản Google riêng để sử dụng tại trường học và cho mục đích cá nhân. Bạn đã đăng nhập vào tài khoản cá nhân của mình. Bạn cần truy cập một tập tin được chia sẻ với bạn thông qua Google Drive của tài khoản trường học của bạn. Bạn nên làm gì?",
  o:["Đặt cấu hình cả hai tài khoản để sử dụng cùng một mật khẩu.","Liên kết Google Drive của tài khoản cá nhân và tài khoản trường học.","Trong phần cài đặt tài khoản Google cá nhân, bỏ chặn tài khoản trường học của bạn.","Chuyển từ tài khoản Google cá nhân sang tài khoản trường học của bạn."],a:[3],
  hint:"Tập tin được chia sẻ cho tài khoản nào thì em cần dùng tài khoản đó.",why:"Tập tin nằm ở “nhà” nào thì phải dùng chìa khóa nhà đó. Trộn hai tài khoản như để chung chìa khóa, dễ lẫn lộn."},
 s20:{t:'sort',chk:1,q:"Kéo mỗi tình huống thả vào đúng loại **danh tính kĩ thuật số**:",
  bins:["😊 Danh tính cá nhân","💼 Danh tính nghề nghiệp"],items:[["Bạn đăng một bức hình kỷ niệm chuyến đi chơi trên Instagram",0],["Bình luận về một bức ảnh trên Facebook",0],["Tạo một hồ sơ việc làm trên TopCV.",1],["Đăng kinh nghiệm làm việc trên LinkedIn.",1]],
  hint:"Mạng xã hội để vui chơi là cá nhân. Tìm việc và kinh nghiệm làm việc là nghề nghiệp.",why:"Ảnh đi chơi và bình luận bạn bè là chuyện vui riêng. TopCV và LinkedIn là nơi của công việc."},
 s22:{t:'choice',chk:1,q:"Xác định **hai cách** để phân biệt danh tính kỹ thuật số cá nhân của bạn với danh tính kỹ thuật số nghề nghiệp của bạn? (Chọn 2)",
  o:["Không bao giờ đăng ảnh.","Sử dụng LinkedIn cho các mục đích nghề nghiệp và Facebook cho các bài đăng cá nhân.","Tạo biệt hiệu hoặc bí danh cho các bài đăng trên các diễn đàn và Blog giải trí, nhưng sử dụng tên thật của bạn cho các bài đăng trong các diễn đàn và Blog kỹ thuật.","Chỉ theo dõi các chính trị gia, vận động viên chuyên nghiệp và người nổi tiếng trên Twitter."],a:[1,2],
  hint:"Tách riêng nơi dùng cho nghề nghiệp và nơi dùng cho cá nhân.",why:"Mỗi mạng một vai. Chỗ nghiêm túc dùng tên thật, chỗ giải trí có thể dùng bí danh."},
 x5:{t:'sort',extra:1,q:"Xếp mỗi việc vào đúng loại tài khoản:",bins:["🏫 Tài khoản trường học","😊 Tài khoản cá nhân"],
  items:[["Làm bài tập trên Google Drive của lớp",0],["Xem video giải trí",1],["Trò chuyện với bạn bè",1],["Tham gia lớp học trực tuyến",0]],
  hint:"Việc học → trường học. Việc vui chơi → cá nhân.",why:"Học thì dùng “thẻ học sinh”, vui chơi thì dùng “thẻ cá nhân”."},

 /* ===== Phần 5: Bí danh và an toàn ===== */
 dd7:{t:'cloze',q:"Điền vào chỗ trống: bí danh",text:"Bí danh (Alias) là một [[tên khác]] với tên thật. Em dùng bí danh để giữ [[an toàn]], không để làm việc [[sai trái]].",x:["mật khẩu"],hint:"Bí danh giúp em an toàn, không phải để làm điều xấu."},
 s23:{t:'choice',q:"Em hãy cho biết, lí do nào sau đây là **thích hợp** cho việc sử dụng bí danh (Alias) khi tham gia trực tuyến thay vì sử dụng tên thật?",
  o:["Sử dụng bí danh để tải các bộ phim, các bài nhạc vi phạm bản quyền.","Khi người dùng có tên thật quá thông dụng và muốn sử dụng bí danh để phân biệt với những người khác.","Sử dụng bí danh để viết một Blog về một chủ đề mà em không am hiểu nhiều.","Sử dụng bí danh để viết các bình luận không tốt về ai đó."],a:[1],
  hint:"Ba đáp án sai đều là làm điều không tốt. Chọn lí do hợp lí và vô hại.",
  why:"Bí danh như áo hóa trang đi chơi: để phân biệt hoặc cho an toàn, chứ không để làm điều xấu."},
 dd8:{t:'cloze',q:"Điền vào chỗ trống: an toàn trực tuyến",text:"Sau khi dùng máy tính của người khác, em phải [[đăng xuất]] tài khoản. Em không đưa thông tin cá nhân cho [[người lạ]].",x:["chia sẻ"],hint:"Đóng “cửa” tài khoản lại khi dùng xong."},
 s24:{t:'choice',q:"Em hãy cho biết, tùy chọn nào sau đây là **đúng** để bảo vệ bản thân khi tham gia trực tuyến?",
  o:["Cung cấp thông tin cá nhân cho người lạ trên mạng xã hội.","Điền thông tin địa chỉ nhà trên các biểu mẫu trực tuyến.","Mua hàng hóa từ các trang Web không rõ nguồn gốc.","Đăng xuất tất cả các tài khoản trực tuyến của bản thân sau khi sử dụng máy tính của người khác."],a:[3],
  hint:"Ba đáp án sai đều làm lộ thông tin hoặc dễ bị lừa.",
  why:"Quy tắc “ba không”: không đưa thông tin riêng, không điền địa chỉ bừa, không mua nơi lạ. Quên đăng xuất là quên khóa cửa."},
 c1:{t:'chat',extra:1,q:"💬 Tình huống: một người lạ nhắn tin cho em trong trò chơi trực tuyến. Em trả lời thế nào?",who:"Chat trò chơi · Sao_Bang_99",av:"⭐",report:1,
  msgs:[{f:'them',n:'Sao_Bang_99',t:"Chào bạn! Bạn tên gì, học trường nào, nhà ở đâu vậy?"}],
  o:[{t:"Em tên Lan, học trường ABC, nhà ở số 12 đường Hoa.",ok:0,r:"Ôi! Người lạ đã biết tên, trường và nhà em rồi. Rất nguy hiểm."},
     {t:"Em không chia sẻ thông tin cá nhân với người lạ. Em chỉ dùng biệt danh “Mèo Con” thôi.",ok:1,r:"Ok, vậy mình chơi game thôi nhé!"},
     {t:"Em gửi ảnh của em và mật khẩu cho bạn nhé.",ok:0,r:"Cho mật khẩu thì người lạ có thể lấy mất tài khoản của em!"}],
  hint:"Với người lạ, em không cho tên thật, trường, địa chỉ. Em có thể dùng bí danh.",why:"Không chia sẻ thông tin cá nhân với người lạ; dùng bí danh để giữ an toàn."},
 x6:{t:'order',extra:1,demo:[{e:"💻📝",t:"Làm xong việc trên máy của người khác."},{e:"📄💾",t:"Lưu hoặc đóng tập tin."},{e:"👤➡️🚪",t:"Đăng xuất khỏi tất cả tài khoản."},{e:"🌐❌",t:"Đóng trình duyệt. An toàn rồi!"}],q:"Sắp xếp các bước khi **dùng xong máy tính của người khác**:",
  items:["Làm xong việc cần làm","Lưu hoặc đóng tập tin","Đăng xuất khỏi tất cả tài khoản","Đóng trình duyệt"],
  hint:"Đăng xuất trước, rồi mới đóng trình duyệt.",why:"Đăng xuất giống khóa cửa trước khi rời đi, nên làm trước khi tắt trình duyệt."},

 /* ===== Phần 6: Hồ sơ tích cực và AI ===== */
 dd9:{t:'cloze',q:"Điền vào chỗ trống: hồ sơ tích cực",text:"Mọi hành động online để lại [[dấu chân số]]. Hồ sơ tốt cần [[tích cực]], lịch sự và [[trung thực]].",grp:[[1,2]],x:["giả mạo"],hint:"Là chính mình, nói lời tử tế."},
 dd10:{t:'cloze',q:"Điền vào chỗ trống: dữ liệu với AI",text:"Không nhập [[mật khẩu]], số thẻ và ảnh [[giấy tờ]] vào AI, vì thông tin có thể bị lưu trên [[máy chủ]].",x:["bài tập Toán"],hint:"Đây là những thứ rất riêng tư của em."},
 c2:{t:'chat',extra:1,q:"💬 Tình huống: bạn Nam sắp gửi tin nhắn cho trợ lý AI. Nam nên làm gì?",who:"Trợ lý AI",av:"🤖",
  msgs:[{f:'me',n:'Nam (bản nháp)',t:"Mình là Nam, nhà ở 12 Lê Lợi, SĐT 09xx xxx xxx. Viết giúp mình lời giới thiệu bản thân nhé!"}],
  o:[{t:"Gửi luôn cho AI, vì AI sẽ giúp nhanh hơn.",ok:0,r:"Thông tin cá nhân có thể bị lưu trên máy chủ và khó xóa hết."},
     {t:"Xóa tên đầy đủ, địa chỉ, số điện thoại rồi chỉ nhờ AI viết lời giới thiệu mẫu.",ok:1,r:"Rất tốt! Mình sẽ viết một lời giới thiệu mẫu để bạn tự chỉnh sửa nhé."},
     {t:"Thêm cả mật khẩu để AI nhớ giúp Nam.",ok:0,r:"Không bao giờ nhập mật khẩu vào AI!"}],
  hint:"Che thông tin cá nhân, chỉ hỏi nội dung cần giúp.",why:"Hồ sơ tích cực = tử tế, thật thà, biết xin phép khi dùng đồ của người khác."},
 dd11:{t:'cloze',q:"Điền vào chỗ trống: dùng Gen AI",text:"Không dùng AI để [[mạo danh]]. Nội dung giống thật vẫn cần [[xác minh]] trước khi dùng.",x:["sao chép"],hint:"Giống thật chưa chắc là thật."},
 x7:{t:'choice',extra:1,q:"**Hồ sơ số tích cực** là hồ sơ như thế nào?",
  o:["Đăng nội dung có ích, lịch sự và trung thực","Tạo hồ sơ giả để nhiều người theo dõi","Đăng bài gây hấn để nổi tiếng","Chép ảnh của người khác mà không ghi tên"],a:[0],
  hint:"Tích cực, lịch sự, trung thực.",why:"Mật khẩu, số thẻ và giấy tờ như chìa khóa nhà: không đưa cho ai, kể cả chatbot. Bài Toán thì thoải mái hỏi."},
 x8:{t:'choice',extra:1,q:"Dữ liệu nào **không được** nhập vào chatbot AI? (Chọn 3)",
  o:["Mật khẩu","Số thẻ ngân hàng","Ảnh giấy tờ cá nhân","Một câu hỏi bài tập Toán"],a:[0,1,2],
  hint:"Ba thứ rất riêng tư và nguy hiểm nếu bị lộ.",why:"Tự hỏi: việc này bảo vệ em và người khác không? Nếu có thì “Nên”."},
 x9:{t:'sort',extra:1,q:"Xếp mỗi việc vào cột **Nên** hoặc **Không nên** khi dùng AI:",bins:["✅ Nên","⛔ Không nên"],
  items:[["Hỏi kiến thức, bài tập",0],["Che thông tin cá nhân",0],["Nhập họ tên và địa chỉ nhà",1],["Dùng AI tạo ảnh giả để mạo danh người khác",1]],
  hint:"Việc nào bảo vệ em và người khác thì “Nên”.",why:"Tên, địa chỉ và mật khẩu là của riêng em; bài toán thì ai cũng hỏi được."},
 x10:{t:'hotspot',extra:1,q:"Chạm vào phần thông tin **không nên** gửi cho AI.",
  html:`<div class="chat"><div class="ch">✦ Tin nhắn gửi AI</div><div class="cb"><div class="bub me">Mình tên
   <button type="button" class="zonesp" data-k="name">Lan Anh, 12 Hoa Sen</button>,
   <button type="button" class="zonesp" data-k="pass">mật khẩu mình là 1234</button>.
   <button type="button" class="zonesp" data-k="hw">Giúp mình giải bài toán 2 + 3 nhé!</button></div></div></div>`,
  keys:["name","pass"],keyText:"Họ tên + địa chỉ nhà, hoặc mật khẩu",
  hint:"Tìm thứ thuộc về em như tên, địa chỉ, mật khẩu.",why:"AI không phải bạn thân. Cho nó biết ít nhất có thể, chỉ nói điều cần nhờ."},

 /* ===== Em nói lại (explain it back) ===== */
 exp:{t:'dropdown',q:"🗣️ **Em nói lại:** chọn từ đúng để hoàn thành các câu tóm tắt bài học.",
  rows:[{t:"Danh tính kĩ thuật số là thông tin, tài khoản và {s} hoạt động của em trên Internet.",o:["dấu vết","đồ chơi","bài hát"],a:0},
        {t:"Danh tính {s} liên quan đến học tập và công việc.",o:["nghề nghiệp","cá nhân"],a:0},
        {t:"Danh tính {s} liên quan đến hoạt động riêng tư và giải trí.",o:["cá nhân","nghề nghiệp"],a:0},
        {t:"Em nên giữ hồ sơ chính xác, đầy đủ và luôn được {s}.",o:["cập nhật","xóa đi","bỏ quên"],a:0},
        {t:"Sau khi dùng máy tính của người khác, em phải {s} khỏi các tài khoản.",o:["đăng xuất","chia sẻ","quên mật khẩu"],a:0},
        {t:"Em không nhập {s} vào AI.",o:["mật khẩu và số thẻ","câu hỏi bài tập Toán","tên một môn học"],a:0}],
  hint:"Nhớ lại từng phần: danh tính, hai dạng danh tính, giữ hồ sơ mới, đăng xuất, an toàn với AI.",
  why:"Mỗi phần đều xoay quanh một ý chính: dấu vết, nghề nghiệp, cá nhân, cập nhật, đăng xuất, giữ kín mật khẩu."}
};

/* ---- Các chặng trên bản đồ (theo thứ tự bài giảng). L = thẻ học, Q = câu hỏi ---- */
const L=k=>({k:'learn',id:k}), Q_=id=>({k:'q',id});
const STEPS=[
 {n:"Danh tính kĩ thuật số",e:"🆔",items:[L('def'),Q_('dd1'),L('online'),Q_('s5'),Q_('s6')]},
 {n:"Cá nhân & nghề nghiệp",e:"👥",items:[L('two'),L('per'),L('pro'),Q_('dd3'),Q_('s11')]},
 {n:"Giữ hồ sơ luôn mới",e:"📝",items:[L('upd'),Q_('dd5'),Q_('s14'),Q_('s15'),Q_('s16'),Q_('s17'),Q_('x4')]},
 {n:"Nội dung phù hợp",e:"🎯",items:[L('fit'),Q_('dd6'),Q_('s19'),Q_('s20'),Q_('s22')]},
 {n:"Bí danh & an toàn",e:"🛡️",items:[L('alias'),Q_('dd7'),Q_('s23'),L('safe'),Q_('dd8'),Q_('s24'),Q_('c1'),Q_('x6')]},
 {n:"Hồ sơ tích cực & AI",e:"🤖",items:[L('pos'),Q_('dd9'),L('noai'),Q_('dd10'),L('core'),Q_('dd11')]},
 {n:"Tóm tắt & em nói lại",e:"🗣️",kind:'explain',items:[L('sum'),Q_('exp')]},
 {n:"Thử thách tổng ôn",e:"🏆",kind:'final'},
 {n:"Kết quả & câu sai",e:"🏅",kind:'results'}
];
/* Thử thách tổng ôn = 11 câu “Vận dụng” cuối bài (rút gọn còn 6 câu) */
const FINAL=['s5','s14','s16','s19','s23','s24'];

/* ---- Ghi chú cho giáo viên (chỉ hiện trong bảng giáo viên ẩn) ---- */
const ADDED=[
 "Thẻ học “Bí danh”, “Bảo vệ bản thân” và đoạn giải thích “Danh tính trực tuyến” là phần giải thích bổ sung đơn giản.",
 "Slide 28: tiêu đề mục 1 “Kết nối và hạ tầng” không khớp nội dung → đã đổi thành “Dấu vết trực tuyến” [CẦN GIÁO VIÊN XÁC NHẬN]; “ai” → “AI”.",
 "Slide 6: đã sửa lỗi dính chữ “trực tuyếnlà”.",
 "Slide 20, 21: trong file nguồn chỉ có hình, không có đáp án → hiển thị dạng nối; đáp án suy luận.",
 "Thẻ “Tóm tắt bài học” (chặng 7) tổng hợp 6 ý chính, viết ngắn gọn, do em thêm.",
 "Toàn bộ câu “Luyện thêm” (x1–x10), bài kéo thả điền từ (dd1–dd11), 2 chat demo, “Em nói lại” là nội dung bổ sung.",
 "Chặng “Thử thách tổng ôn” dùng lại 11 câu Vận dụng ở slide 30–40 (xáo trộn khi làm lại)."
];
/* ============================== HẾT DỮ LIỆU ============================== */

/* =====================================================================
   ĐỘNG CƠ — không cần chỉnh
   ===================================================================== */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const mk=(tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e};
const shuf=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const fmt=s=>String(s).replace(/\*\*(.+?)\*\*/g,'<mark>$1</mark>');
const plain=s=>String(s).replace(/<[^>]+>/g,'').replace(/\*\*/g,'');
const pick=a=>a[Math.random()*a.length|0];
const GOOD=["Giỏi quá!","Chính xác!","Tuyệt vời!","Em làm đúng rồi!"];
const BAD=["Chưa đúng rồi, nhưng em làm được mà! Thử lại nhé 💪","Gần đúng rồi! Đọc gợi ý 💡 rồi thử lại nào.","Không sao đâu, sai là cách học tốt nhất. Thử lại nhé! 🌱","Cố lên! Em sắp tìm ra rồi ⭐"];
const BOX=[0,1,3,7], DAY=864e5, NSTAR=8;

/* ---------- lưu trữ ---------- */
const KEY='ic3gs6:'+LESSON.id;
const DEF={done:{},pos:{},runs:{},missed:{},badges:{},best:{},bestCS:0,reviewed:false,teacher:false,
  set:{theme:'light',fs:20,dys:false,rm:null,snd:true,vi:true,fsAuto:true,mapOpen:true}};
let S=load();
function load(){const d=JSON.parse(JSON.stringify(DEF));try{const j=JSON.parse(localStorage.getItem(KEY)||'null');if(j&&typeof j==='object'){Object.assign(d,j);d.set=Object.assign({},DEF.set,j.set||{});}}catch(e){}return d}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
let cs=0, view='home', cur=0, run=null;

/* ---------- giao diện: chủ đề, cỡ chữ, phông, giảm chuyển động ---------- */
function applySet(){
  const s=S.set, root=document.documentElement;
  if(s.theme!=='dark')s.theme='light';
  root.dataset.theme=s.theme==='light'?'':s.theme;
  root.style.setProperty('--fs',s.fs);
  document.body.classList.toggle('dys',!!s.dys);
}
const THEMES=[['light','☀️ Sáng'],['dark','🌙 Tối']];

/* ---------- âm thanh ---------- */
let AC;
function tone(seq){if(!S.set.snd)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();let t=AC.currentTime;seq.forEach(([f,d,ty])=>{const o=AC.createOscillator(),g=AC.createGain();o.type=ty||'sine';o.frequency.value=f;g.gain.setValueAtTime(.14,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+d);t+=d*.9})}catch(e){}}
const sfx={ok:()=>tone([[660,.12],[880,.2]]),no:()=>tone([[230,.16,'square'],[190,.22,'square']]),tap:()=>tone([[520,.05]]),win:()=>tone([[523,.12],[659,.12],[784,.12],[1047,.32]])};

/* ---------- đọc to (giọng tiếng Việt) ---------- */
let viVoice=null, voiceReady=false;
function findVoice(){
  if(!('speechSynthesis' in window)){voiceReady=true;viVoice=null;updRd();return}
  const vs=speechSynthesis.getVoices();viVoice=vs.find(v=>/^vi/i.test(v.lang))||null;
  if(viVoice||vs.length)voiceReady=true;updRd();
}
function updRd(){
  const off=voiceReady&&!viVoice;
  $$('.rd').forEach(b=>{b.disabled=off;b.title=off?'Máy này chưa có giọng đọc tiếng Việt':'Đọc to'});
  const n=$('#novoice');if(n)n.hidden=!off;
}
function speak(t){if(!viVoice)return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.voice=viVoice;u.lang=viVoice.lang;u.rate=.9;speechSynthesis.speak(u)}catch(e){}}
function textOf(e){if(e.dataset.say)return e.dataset.say;const c=e.cloneNode(true);$$('.rd,.ico,button.mvb',c).forEach(x=>x.remove());return c.textContent.replace(/\s+/g,' ').trim()}
function deco(){}

/* ---------- toàn màn hình ---------- */
let fsExited=false,wasFs=false;
const fsOn=()=>!!document.fullscreenElement;
function enterFs(){fsExited=false;try{const p=document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen();if(p&&p.catch)p.catch(()=>{})}catch(e){}}
function exitFs(){fsExited=true;try{document.exitFullscreen()}catch(e){}}
document.addEventListener('fullscreenchange',()=>{if(wasFs&&!fsOn())fsExited=true;wasFs=fsOn();renderBar()});
document.addEventListener('click',()=>{if(S.set.fsAuto&&!fsOn()&&!fsExited)enterFs()},true);

/* ---------- thông báo nhỏ & hộp thoại ---------- */
let tt;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2800)}
function modal(html,mount){const m=$('#modal');m.innerHTML='<div class="mbox">'+html+'</div>';m.classList.add('show');if(mount)mount($('.mbox',m));deco(m);const f=$('button,select',m);f&&f.focus()}
function closeModal(){$('#modal').classList.remove('show');$('#modal').innerHTML=''}
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

/* ---------- tiến độ ---------- */
const avail=i=>S.teacher||i===0||S.done[i-1]!=null;
const starSum=()=>[...Array(NSTAR).keys()].reduce((a,i)=>a+(S.done[i]||0),0);
const starsTxt=n=>'⭐'.repeat(n)+'☆'.repeat(3-n);
function checkBadges(){save()}
const dueIds=()=>Object.keys(S.missed).filter(id=>QS[id]&&S.missed[id].due<=Date.now());

/* ---------- đầu trang ---------- */
function renderBar(){
  const b=$('#tbar');b.innerHTML='';
  const add=(h,cls,fn,label)=>{const e=mk('button',cls||'tb',h);e.type='button';if(label)e.setAttribute('aria-label',label);e.onclick=fn;b.append(e);return e};
  b.append(mk('span','pill',`⭐ ${starSum()}/${NSTAR*3}`),mk('span','pill',`🔥 ${cs}`));
  
  add('A−','tb',()=>{S.set.fs=Math.max(16,S.set.fs-2);save();applySet()},'Chữ nhỏ lại');
  add('A+','tb',()=>{S.set.fs=Math.min(32,S.set.fs+2);save();applySet()},'Chữ to lên');
  add(S.set.snd?'🔊':'🔇','tb'+(S.set.snd?' on':''),()=>{S.set.snd=!S.set.snd;save();renderBar();sfx.tap()},S.set.snd?'Âm thanh đang bật, bấm để tắt':'Âm thanh đang tắt, bấm để bật').title=S.set.snd?'Tắt âm thanh':'Bật âm thanh';
  add(THEMES.find(t=>t[0]===S.set.theme)[1].split(' ')[0],'tb',()=>{const i=THEMES.findIndex(t=>t[0]===S.set.theme);S.set.theme=THEMES[(i+1)%THEMES.length][0];save();applySet();renderBar()},'Đổi chủ đề màu: '+THEMES.find(t=>t[0]===S.set.theme)[1].replace(/^\S+ /,'')).title='Đổi chủ đề: '+THEMES.find(t=>t[0]===S.set.theme)[1].replace(/^\S+ /,'');
  add('⚙️','tb',openSettings,'Cài đặt');
  const f=add(fsOn()?'✖':'⛶','tb',()=>fsOn()?exitFs():enterFs(),fsOn()?'Thoát toàn màn hình':'Vào toàn màn hình');f.title=fsOn()?'Thoát toàn màn hình':'Toàn màn hình';f.id='fsb';if(fsOn())f.classList.add('exit');
  updRd();
}
function openSettings(){
  const s=S.set;
  modal(`<h2>⚙️ Cài đặt</h2>
  <div class="set"><b>🎨 Chủ đề màu</b>${THEMES.map(t=>`<button class="tb ${s.theme===t[0]?'on':''}" data-th="${t[0]}">${t[1]}</button>`).join('')}</div>
  <div class="set"><b>🔠 Cỡ chữ</b><button class="tb" data-fs="-2">A−</button><button class="tb" data-fs="2">A+</button></div>
  <div class="set"><b>🔤 Phông dễ đọc (dyslexia)</b><button class="tb ${s.dys?'on':''}" data-tg="dys">${s.dys?'Đang bật':'Đang tắt'}</button></div>
  <div class="set"><b>🔊 Âm thanh</b><button class="tb ${s.snd?'on':''}" data-tg="snd">${s.snd?'Đang bật':'Đang tắt'}</button></div>
  <div class="set"><b>⛶ Tự động toàn màn hình</b><button class="tb ${s.fsAuto?'on':''}" data-tg="fsAuto">${s.fsAuto?'Đang bật':'Đang tắt'}</button></div>
  <div class="act"><button class="btn" id="cl">Xong</button></div>`,box=>{
    $('#cl',box).onclick=closeModal;
    $$('[data-th]',box).forEach(b=>b.onclick=()=>{s.theme=b.dataset.th;save();applySet();renderBar();openSettings()});
    $$('[data-fs]',box).forEach(b=>b.onclick=()=>{s.fs=Math.min(32,Math.max(16,s.fs+ +b.dataset.fs));save();applySet()});
    $$('[data-tg]',box).forEach(b=>b.onclick=()=>{const k=b.dataset.tg;
      s[k]=!s[k];
      save();applySet();renderBar();openSettings()});
  });
}

/* ---------- mở khóa của giáo viên (ẩn) ---------- */
(function(){
  const t=$('#title');let rc=[],hold=null;
  t.addEventListener('contextmenu',e=>{e.preventDefault();const n=Date.now();rc=rc.filter(x=>n-x<700);rc.push(n);if(rc.length>=2){rc=[];teacherToggle()}});
  t.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')return;clearTimeout(hold);hold=setTimeout(()=>{hold=null;teacherToggle()},3000)});
  ['pointerup','pointercancel','pointerleave','pointermove'].forEach(ev=>t.addEventListener(ev,()=>{clearTimeout(hold);hold=null}));
})();
function teacherToggle(){
  S.teacher=!S.teacher;save();if(!S.teacher)view='home';render();
}

/* ---------- bản đồ ---------- */
function stat(i){return S.done[i]!=null?'done':avail(i)?'prog':'lock'}
const PLAY='<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M7 4.5l12 7.5-12 7.5z" fill="currentColor"/></svg>';
function renderMap(){
  const m=$('#map'),open=S.set.mapOpen!==false;
  $('#app').classList.toggle('mapc',!open);m.classList.toggle('min',!open);m.innerHTML='';
  const hd=mk('div','mhd',open?'<h2>🗺️ Bản đồ bài học</h2>':'');
  const tg=mk('button','mtog',open?'◀ Thu gọn':'☰');tg.type='button';
  tg.setAttribute('aria-expanded',open);tg.setAttribute('aria-label',open?'Thu gọn menu bài học':'Mở menu bài học');
  tg.onclick=()=>{S.set.mapOpen=!open;save();renderMap();sfx.tap()};
  hd.append(tg);m.append(hd);
  const info=i=>{const st=STEPS[i],s=stat(i);return{st,s,cur:view!=='home'&&cur===i,
    lab:s==='done'?(st.kind==='results'?'Đã xem':starsTxt(S.done[i])):s==='lock'?'Đang khóa':'Đang học'}};
  const go=(i,s)=>()=>{if(s==='lock'){toast('🔒 Hãy hoàn thành chặng trước nhé!');sfx.no();return}startStep(i)};
  if(!open){
    const rail=mk('div','rail'),n=STEPS.length;let dn=0;while(dn<n&&S.done[dn]!=null)dn++;
    rail.style.setProperty('--pg',Math.min(1,dn/(n-1)));rail.append(mk('i','fill'));
    STEPS.forEach((_,i)=>{const o=info(i),ic=o.s==='done'?'✔':o.s==='lock'?'🔒':PLAY;
      const b=mk('button',`rdot ${o.s} ${o.cur?'cur':''}`,`<span aria-hidden="true">${ic}</span>`);
      b.type='button';b.title=`${o.st.n} · ${o.lab}`;b.setAttribute('aria-label',`${o.st.n}: ${o.lab}`);b.onclick=go(i,o.s);rail.append(b)});
    m.append(rail);return;
  }
  STEPS.forEach((_,i)=>{
    const o=info(i),ic=o.s==='done'?'✔':o.s==='lock'?'🔒':PLAY;
    const b=mk('button',`mn ${o.s} ${o.cur?'cur':''}`,`<span class="st" aria-hidden="true">${ic}</span><span class="nm">${o.st.e} ${o.st.n}<small>${o.lab}</small></span>`);
    b.type='button';b.setAttribute('aria-label',`${o.st.n}: ${o.lab}`);b.onclick=go(i,o.s);m.append(b);
  });
}

/* ---------- vẽ màn hình ---------- */
function render(){
  renderBar();renderMap();
  const st=$('#stage');st.innerHTML='';
  if(view==='home')homeView(st);
  else if(view==='run')runView();
  else if(view==='results')resultsView(st);
  deco(st);
  try{st.focus({preventScroll:true});window.scrollTo(0,0)}catch(e){}
}
function homeView(st){
  const next=STEPS.findIndex((s,i)=>S.done[i]==null&&avail(i)),started=Object.keys(S.done).length>0||Object.values(S.pos).some(x=>x>0)||Object.keys(S.runs).length>0;
  const due=dueIds().length;
  const c=mk('div','col');
  c.innerHTML=`<section class="card hero"><div class="hg"><div class="ht">
   <h2 class="say">Bài 10 · Danh tính kĩ thuật số</h2>
   <p class="say"><b>📚 Chủ đề:</b> Công dân số</p>
   <div class="say"><b>🎯 Mục tiêu:</b></div>
   <ul class="goals"><li>danh tính kĩ thuật số (Digital Identity)</li><li>danh tính cá nhân và nghề nghiệp</li><li>cách giữ an toàn khi dùng Internet và AI</li></ul>
   <div class="row" style="margin-top:16px"><button class="btn" id="go">${!started?'▶ Bắt đầu học':(next>=0?'▶ Tiếp tục':'🏅 Xem kết quả')}</button>
   ${started?'<button class="btn ghost" id="again">🔄 Học lại từ đầu</button>':''}</div></div>
   <div class="hi"><svg viewBox="0 0 280 230" role="img" aria-label="Minh họa: thẻ danh tính số với ảnh đại diện, tài khoản cá nhân, nghề nghiệp và khiên bảo vệ">
<rect x="10" y="30" width="190" height="150" rx="22" fill="var(--card)" stroke="var(--pri)" stroke-width="5"/>
<circle cx="62" cy="86" r="30" fill="var(--pri-soft)" stroke="var(--pri)" stroke-width="4"/>
<circle cx="62" cy="78" r="11" fill="var(--pri)"/><path d="M40 108a22 18 0 0 1 44 0z" fill="var(--pri)"/>
<rect x="105" y="68" width="75" height="12" rx="6" fill="var(--pri)"/><rect x="105" y="90" width="55" height="10" rx="5" fill="var(--line)"/>
<rect x="20" y="136" width="78" height="30" rx="15" fill="var(--warn-bg)" stroke="var(--warn)" stroke-width="3"/><text x="59" y="156" font-size="13" font-weight="800" text-anchor="middle" fill="var(--ink)">Cá nhân</text>
<rect x="104" y="136" width="88" height="30" rx="15" fill="var(--ok-bg)" stroke="var(--ok)" stroke-width="3"/><text x="148" y="156" font-size="13" font-weight="800" text-anchor="middle" fill="var(--ink)">Nghề nghiệp</text>
<path d="M226 20l38 14v34c0 28-17 46-38 56-21-10-38-28-38-56V34z" fill="var(--pri)" stroke="var(--card)" stroke-width="4"/>
<path d="M208 70l14 14 26-30" fill="none" stroke="var(--pri-ink)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
<g fill="var(--mut)"><ellipse cx="205" cy="190" rx="8" ry="12"/><ellipse cx="230" cy="204" rx="8" ry="12"/><ellipse cx="252" cy="186" rx="8" ry="12"/></g>
</svg></div></div>
   ${due?`<div class="banner"><b>📅 Có ${due} câu cần ôn nhanh!</b> Những câu em từng làm sai sẽ quay lại để em nhớ lâu hơn.<div class="act"><button class="btn warn" id="rv">Ôn nhanh ngay</button></div></div>`:''}
   </section>
`;
  st.append(c);
  $('#go',c).onclick=()=>{sfx.tap();startStep(next<0?STEPS.length-1:next)};
  const ag=$('#again',c);if(ag)ag.onclick=resetAll;
  const rv=$('#rv',c);if(rv)rv.onclick=startReview;
}
function resetAll(){
  modal(`<h2>🔄 Học lại từ đầu?</h2><p class="say">Sao, huy hiệu, tiến độ và danh sách câu sai sẽ bị xóa trên máy này. Em chắc chắn chứ?</p>
   <div class="act"><button class="btn ghost" id="n">Không, giữ lại</button><button class="btn warn" id="y">Có, học lại</button></div>`,box=>{
    $('#n',box).onclick=closeModal;
    $('#y',box).onclick=()=>{Object.assign(S,{done:{},pos:{},runs:{},missed:{},badges:{},best:{},bestCS:0,reviewed:false});cs=0;save();closeModal();view='home';render();toast('Đã xóa. Cùng học lại nào! 🌱')};
  });
}

/* ---------- chạy một chặng ---------- */
function startStep(i,opt={}){
  if(!avail(i)){toast('🔒 Hãy hoàn thành chặng trước nhé!');return}
  const st=STEPS[i];cur=i;closeModal();
  if(st.kind==='results'){view='results';if(S.done[i]==null){S.done[i]=0;save()}return render()}
  const sv=(!opt.retry&&!opt.shuffle&&S.done[i]==null)?S.runs[i]:null;
  if(sv&&sv.items&&sv.items.length&&sv.i<sv.items.length){
    run={step:i,items:sv.items,i:sv.i,ok:sv.ok||0,tot:sv.tot||0,rec:sv.rec||{},wrong:sv.wrong||[],shuf:!!sv.shuf,retry:false,review:false,mem:sv.mem||{},done:new Set(sv.done||[])};
    view='run';return render();
  }
  let items=st.kind==='final'?FINAL.map(Q_):st.items.slice();
  const sh=!!(opt.retry||opt.shuffle||(st.kind==='final'&&S.best[i]!=null));
  if(opt.retry)items=items.filter(x=>x.k==='q');
  if(sh)items=shuf(items);
  const start=(!sh&&S.done[i]==null&&st.kind!=='final')?Math.min(S.pos[i]||0,items.length-1):0;
  run={step:i,items,i:start,ok:0,tot:0,rec:{},wrong:[],shuf:sh,retry:!!opt.retry,review:false};
  view='run';render();
}
function startReview(){
  let ids=dueIds();if(!ids.length)ids=Object.keys(S.missed).filter(id=>QS[id]);
  if(!ids.length){toast('🎉 Em chưa có câu nào cần ôn!');return}
  run={step:null,items:shuf(ids).map(Q_),i:0,ok:0,tot:0,rec:{},wrong:[],shuf:true,retry:false,review:true};
  cur=-1;view='run';render();
}
function saveRun(){
  try{
    if(!run||view!=='run'||run.step==null||run.review||run.retry||S.done[run.step]!=null)return;
    if(run.saver){(run.mem=run.mem||{})[run.saverId]=run.saver()}
    S.runs[run.step]={items:run.items,i:run.i,mem:run.mem||{},done:[...(run.done||[])],rec:run.rec,ok:run.ok,tot:run.tot,wrong:run.wrong,shuf:run.shuf};
    save();
  }catch(e){}
}
setInterval(saveRun,1500);
window.addEventListener('pagehide',saveRun);window.addEventListener('beforeunload',saveRun);
document.addEventListener('visibilitychange',()=>{if(document.hidden)saveRun()});
function rec(id,ok){
  if(run.rec[id]!==undefined)return;
  run.rec[id]=ok;run.tot++;
  if(ok){run.ok++;cs++;S.bestCS=Math.max(S.bestCS,cs)}else{run.wrong.push(id);cs=0}
  if(run.review){const m=S.missed[id];if(m){if(ok){m.box++;if(m.box>=BOX.length)delete S.missed[id];else m.due=Date.now()+BOX[m.box]*DAY}else{m.box=0;m.due=Date.now()}}}
  else if(!ok)S.missed[id]={box:0,due:Date.now(),n:(S.missed[id]?S.missed[id].n:0)+1};
  save();checkBadges();renderBar();
}
function runView(){
  const st=$('#stage');st.innerHTML='';
  if(run.i>=run.items.length)return finishRun();
  const it=run.items[run.i],S0=run.step!=null?STEPS[run.step]:null;
  const col=mk('div','col');
  const head=mk('div','runhead',`<button class="tb" id="bkm" type="button">🗺️ Bản đồ</button><div class="rt">${S0?S0.e+' '+S0.n:'📅 Ôn nhanh câu đã sai'}</div><span class="pill">${run.i+1}/${run.items.length}</span><button class="tb" id="rsm" type="button">🔄 Học lại từ đầu</button>`);
  const bar=mk('div','bar','<i style="width:'+Math.round(run.i/run.items.length*100)+'%"></i>');
  bar.setAttribute('role','progressbar');bar.setAttribute('aria-valuenow',run.i);bar.setAttribute('aria-valuemax',run.items.length);
  const body=mk('div');col.append(head,bar,body);st.append(col);
  $('#bkm',head).onclick=()=>{view='home';render()};
  $('#rsm',head).onclick=resetAll;
  const leave=()=>{if(run.saver){(run.mem=run.mem||{})[run.saverId]=run.saver();run.saver=null}};
  const next=()=>{leave();run.i++;saveRun();if(!run.review&&!run.retry&&run.step!=null&&S.done[run.step]==null){S.pos[run.step]=run.i;save()}runView();deco($('#stage'));window.scrollTo(0,0)};
  const back=run.i>0?()=>{leave();run.i--;saveRun();runView();deco($('#stage'))}:null;
  if(it.k==='learn')learnCard(LEARN[it.id],body,next,back);
  else ask(it.id,body,{shuffle:run.shuf,onFirst:ok=>rec(it.id,ok),next,back,solved:!!(run.done&&run.done.has(it.id)),mem:run.mem&&run.mem[it.id],reg:fn=>{run.saver=fn;run.saverId=it.id},markDone:()=>{(run.done=run.done||new Set()).add(it.id)}});
  deco(st);
}
/* ---------- phân loại nhanh (thẻ học) ---------- */
function quickSort(Q){
  const w=mk('div','qs');let i=0,ok=0,busy=false;
  const draw=()=>{
    if(i>=Q.items.length){w.innerHTML=`<div class="qs-end"><div class="qs-big">${ok===Q.items.length?'🎉':'👏'}</div><b>Em phân loại đúng ${ok}/${Q.items.length} thẻ!</b><button type="button" class="btn ghost" id="qr">🔁 Chơi lại</button></div>`;$('#qr',w).onclick=()=>{i=0;ok=0;draw()};return}
    const it=Q.items[i];
    w.innerHTML=`<div class="qs-q say">${fmt(Q.q)}</div><div class="qs-card" aria-live="polite"><span class="qs-e" aria-hidden="true">${it[0]}</span><b>${it[1]}</b><small class="qs-w"></small></div><div class="qs-btns"><button type="button" class="btn qs-y">⚠️ Có rủi ro</button><button type="button" class="btn qs-n">✅ An toàn</button></div><div class="qs-dots">${Q.items.map((_,k)=>`<u class="${k<i?'dn':k===i?'on':''}"></u>`).join('')}</div>`;
    const ans=v=>{if(busy)return;busy=true;const good=(v===it[2]),card=$('.qs-card',w);card.classList.add(good?'good':'bad');$('.qs-w',w).textContent=(good?'✔ ':'✖ ')+it[3];if(good)ok++;good?sfx.ok():sfx.no();
      $$('.qs-btns .btn',w).forEach(b=>b.disabled=true);
      setTimeout(()=>{busy=false;i++;draw()},good?1100:2000)};
    $('.qs-y',w).onclick=()=>ans(1);$('.qs-n',w).onclick=()=>ans(0);
  };
  draw();return w;
}
function learnCard(Lr,host,next,back){
  const c=mk('section','card learn');
  c.append(mk('h2','say',fmt(Lr.h)));
  (Lr.p||[]).forEach(t=>c.append(mk('p','say',fmt(t))));
  if(Lr.v)c.append(mk('div','vis',VIS[Lr.v]));
  if(Lr.quick)c.append(quickSort(Lr.quick));
  if(Lr.cards&&Lr.list){const w=mk('div','vis');Lr.cards.forEach(x=>w.append(mk('div','srow say',`<span class="e" aria-hidden="true">${x[0]}</span><div><b>${x[1]}</b><div>${fmt(x[2])}</div></div>`)));c.append(w)}
  else if(Lr.cards){const g=mk('div','chips3');Lr.cards.forEach(x=>g.append(mk('div','vc say',`<span class="e">${x[0]}</span><b>${x[1]}</b><small>${fmt(x[2])}</small>`)));const w=mk('div','vis');w.append(g);c.append(w)}
  if(Lr.ex&&Lr.ex.length)c.append(mk('div','rw',`<h3>🌍 Ví dụ ngoài đời</h3><div class="rwg">`+Lr.ex.map(x=>`<div class="rwc say"><span class="e" aria-hidden="true">${x[0]}</span><div><b>${x[1]}</b><small>${fmt(x[2])}</small></div></div>`).join('')+`</div>`));
  const a=mk('div','act');
  if(back){const b=mk('button','btn ghost','◀ Trước');b.type='button';b.onclick=back;a.append(b)}
  const n=mk('button','btn','Đã hiểu, tiếp tục ▶');n.type='button';n.onclick=()=>{sfx.tap();next()};a.append(n);
  c.append(a);host.append(c);
}

/* ---------- khung câu hỏi chung ---------- */
const INST={choice:q=>q.a.length>1?`👆 Chọn ${q.a.length} đáp án (tự kiểm tra)`:'👆 Chọn 1 đáp án (tự kiểm tra)',dropdown:()=>'🔽 Chọn đáp án trong mỗi ô',match:()=>'🔗 Chạm một ý bên trái, rồi chạm nhóm bên phải',hotspot:q=>q.multi?`🎯 Chạm vào ${q.keys.length} vị trí trên hình (tự kiểm tra)`:'🎯 Chạm vào một vị trí trên hình',cloze:()=>'🧩 Chạm một từ, rồi chạm chỗ trống (hoặc kéo thả). Điền hết là tự kiểm tra',sort:()=>'🧩 Chạm một thẻ, rồi chạm ô đúng (hoặc kéo thả)',order:()=>'↕️ Bấm ▲▼, hoặc chạm hai mục để đổi chỗ, hoặc kéo thả',chat:()=>'💬 Chọn câu trả lời của em'};
const TNAME={choice:'Trắc nghiệm',dropdown:'Chọn trong ô',match:'Nối',hotspot:'Chạm vào hình',cloze:'Kéo thả điền từ',sort:'Kéo thả phân loại',order:'Sắp xếp',chat:'Chat demo'};
function ask(id,host,ctx){
  const Q=QS[id],att={n:0,done:false};
  const card=mk('section','card');
  const mult=Q.t==='choice'&&Q.a.length>1;
  card.append(mk('div','qhead',`<span class="tag">${TNAME[Q.t]}${mult?' · nhiều đáp án':''}</span>${Q.extra&&Q.t!=='cloze'?'<span class="tag ex">✨ Luyện thêm</span>':''}${Q.t==='cloze'?'<span class="tag ex">🧩 Điền từ</span>':''}`));
  card.append(mk('div','stem say',fmt(Q.q)));
  if(Q.t!=='chat')card.append(mk('div','inst',INST[Q.t](Q)));
  const B={choice:bChoice,dropdown:bDrop,match:bMatch,hotspot:bHot,cloze:bDnD,sort:bDnD,order:bOrder,chat:bChat}[Q.t](Q,ctx);
  card.append(B.el);
  const hint=mk('div','hint say','<b>💡 Gợi ý:</b> '+fmt(Q.hint||''));hint.hidden=true;
  const fbx=mk('div','fb say');
  const act=mk('div','act');
  const bH=mk('button','btn ghost','💡 Gợi ý');bH.type='button';bH.onclick=()=>{hint.hidden=!hint.hidden;deco(card)};
  let silent=false;const bC=mk('button','btn','✔ Kiểm tra');bC.type='button';
  const bS=mk('button','btn warn','👁 Xem đáp án');bS.type='button';bS.hidden=true;
  const bT=mk('button','btn warn','👁 Xem đáp án (GV)');bT.type='button';bT.hidden=!S.teacher;
  const bR=mk('button','btn ghost','🔁 Làm lại');bR.type='button';bR.hidden=true;
  const bN=mk('button','btn','Tiếp tục ▶');bN.type='button';bN.hidden=true;
  const bB=ctx.back?mk('button','btn ghost','◀ Trước'):null;if(bB)bB.type='button';
  act.append(...[bB,bH,bC,bS,bT,bR,bN].filter(Boolean));
  card.append(hint,fbx,act);host.append(card);
  const fb=(k,h)=>{fbx.className='fb show say '+k;fbx.innerHTML=h;deco(card)};
  const showWhy=pre=>fb('ok',`<span class="ico ok" aria-hidden="true">✔</span><b>${pre}</b>${Q.why?`<div style="margin-top:8px"><b>Giải thích:</b> ${fmt(Q.why)}</div>`:''}`);
  const finish=()=>{if(Q.t==='chat'){$$('.opt,.ph-rp',card).forEach(b=>b.disabled=true);$$('.tray',card).forEach(t=>t.hidden=true)}if(ctx.markDone)ctx.markDone();att.done=true;bC.hidden=true;bS.hidden=true;bT.hidden=true;bR.hidden=false;bN.hidden=false;bN.focus&&bN.focus()};
  bC.onclick=()=>{
    if(att.done)return;
    const r=B.check();
    if(r.incomplete){if(!silent)fb('info','ℹ️ '+r.incomplete);return}
    att.n++;
    if(att.n===1)ctx.onFirst&&ctx.onFirst(r.ok);
    if(r.ok){sfx.ok();showWhy(pick(GOOD));finish()}
    else{sfx.no();fb('no',`<span class="ico no" aria-hidden="true">✖</span><b>${pick(BAD)}</b>${r.extra?`<div style="margin-top:8px">${r.extra}</div>`:''}`);if(att.n>=2)bS.hidden=false}
  };
  if(Q.t!=='chat'&&Q.t!=='order'){bC.hidden=true;let tm=0,lastT=0;const guard=Q.t==='cloze'||Q.t==='sort';const ac=()=>{clearTimeout(tm);tm=setTimeout(()=>{if(att.done||(guard&&Date.now()-lastT<1800))return;const n0=att.n;silent=true;try{bC.onclick()}finally{silent=false}if(att.n!==n0)lastT=Date.now()},450)};['click','drop','pointerup','keyup','change'].forEach(ev=>card.addEventListener(ev,e=>{if(e.target.closest&&e.target.closest('.act,.hint'))return;ac()}))}
  if(Q.t==='chat'){bC.hidden=true;B.el.addEventListener('click',e=>{if(!att.done&&e.target.closest('.opt'))setTimeout(()=>{if(!att.done)bC.onclick()},600)})}
  if(Q.t==='chat')B.el.addEventListener('chatreport',()=>{if(att.done)return;att.n++;if(att.n===1)ctx.onFirst&&ctx.onFirst(true);sfx.ok();showWhy('Báo cáo người lạ cũng là cách làm rất đúng!');finish()});
  bS.onclick=()=>{B.solve();showWhy('Đây là đáp án đúng, em đọc kĩ nhé!');finish()};
  bT.onclick=()=>{B.solve();showWhy('Đáp án (chế độ giáo viên).');finish()};
  bR.onclick=()=>{sfx.tap();host.innerHTML='';ask(id,host,Object.assign({},ctx,{shuffle:true,solved:false,mem:null}));deco(host)};
  if(ctx.mem&&ctx.mem.state){try{B.setState(ctx.mem.state)}catch(e){}att.n=ctx.mem.n||0;if(att.n>=2)bS.hidden=false}
  if(ctx.reg)ctx.reg(()=>({state:B.getState(),n:att.n}));
  if(ctx.solved){B.solve();showWhy('Em đã hoàn thành câu này!');finish()}
  bN.onclick=ctx.next;
  if(bB)bB.onclick=ctx.back;
}
function solText(Q){
  switch(Q.t){
    case'choice':return Q.a.map(i=>plain(Q.o[i])).join(' • ');
    case'dropdown':return Q.rows.map(r=>r.t.includes('{s}')?plain(r.t).replace('{s}','['+r.o[r.a]+']'):plain(r.t)+' → '+r.o[r.a]).join('<br>');
    case'match':return Q.l.map((l,i)=>plain(l)+' → '+Q.r[Q.a[i]]).join('<br>');
    case'hotspot':return Q.keyText;
    case'cloze':return plain(Q.text).replace(/\[\[(.+?)\]\]/g,'$1');
    case'sort':return Q.bins.map((b,k)=>b+': '+Q.items.filter(x=>x[1]===k).map(x=>x[0]).join('; ')).join('<br>');
    case'order':return Q.items.map((x,i)=>(i+1)+'. '+x).join(' → ');
    case'chat':return plain(Q.o.find(x=>x.ok).t);
  }
}

/* ---------- 1) trắc nghiệm một/nhiều đáp án ---------- */
function bChoice(Q,ctx){
  const multi=Q.a.length>1;let idx=Q.o.map((_,i)=>i);if(ctx.shuffle&&Q.o.length>2)idx=shuf(idx);
  const sel=new Set(),btns=[],el=mk('div','opts say');if(Q.o.length>=3&&Q.o.every(t=>plain(t).length<=40))el.classList.add('two');el.dataset.say=Q.o.map((t,i)=>plain(t)).join('. ');
  el.setAttribute('role',multi?'group':'radiogroup');let lock=false;
  const paint=()=>btns.forEach(([b,oi])=>{const on=sel.has(oi);b.classList.toggle('sel',on);b.setAttribute('aria-checked',on);$('.mk',b).textContent=multi?(on?'☑':'☐'):(on?'◉':'◯')});
  const clear=()=>btns.forEach(([b])=>{b.classList.remove('good','bad');$('.res',b).innerHTML=''});
  idx.forEach(oi=>{const b=mk('button','opt',`<span class="mk">${multi?'☐':'◯'}</span><span class="tx">${fmt(Q.o[oi])}</span><span class="res"></span>`);
    b.type='button';b.setAttribute('role',multi?'checkbox':'radio');b.setAttribute('aria-checked','false');
    b.onclick=()=>{if(lock)return;sfx.tap();if(multi){sel.has(oi)?sel.delete(oi):sel.add(oi)}else{sel.clear();sel.add(oi)}clear();paint()};
    btns.push([b,oi]);el.append(b)});
  const mark=(b,ok)=>{b.classList.add(ok?'good':'bad');$('.res',b).innerHTML=''};
  return{el,sel,
   check(){
    if(sel.size!==Q.a.length)return{incomplete:multi?`Câu này cần chọn đủ ${Q.a.length} đáp án.`:'Hãy chọn một đáp án.'};
    clear();let ok=true;btns.forEach(([b,oi])=>{if(sel.has(oi)){const g=Q.a.includes(oi);mark(b,g);if(!g)ok=false}});
    if(ok)lock=true;return{ok}},
   solve(){lock=true;clear();btns.forEach(([b,oi])=>{if(Q.a.includes(oi))mark(b,true)})},
   getState:()=>[...sel],setState(a){sel.clear();a.forEach(x=>sel.add(x));paint()}};
}

/* ---------- 2) chọn trong ô (dropdown) ---------- */
function bDrop(Q,ctx){
  const el=mk('div'),sels=[],rowEls=[];
  Q.rows.forEach(r=>{
    const row=mk('div','drow');const s=mk('select');s.setAttribute('aria-label','Chọn đáp án');
    s.innerHTML='<option value="">— chọn —</option>';
    (ctx.shuffle&&r.o.length>2?shuf(r.o.map((_,i)=>i)):r.o.map((_,i)=>i)).forEach(i=>{const o=mk('option');o.value=i;o.textContent=r.o[i];s.append(o)});
    const t=mk('div','t');
    if(r.t.includes('{s}')){const [a,b]=r.t.split('{s}');t.append(document.createTextNode(a),s,document.createTextNode(b));row.append(t)}
    else{t.textContent=r.t;row.append(t,s)}
    const res=mk('span','res');row.append(res);
    s.onchange=()=>{row.classList.remove('good','bad');res.innerHTML=''};
    sels.push(s);rowEls.push([row,res]);el.append(row);
  });
  const mark=(k,ok)=>{const[r,res]=rowEls[k];r.classList.add(ok?'good':'bad');res.innerHTML=''};
  return{el,check(){
    if(sels.some(s=>s.value===''))return{incomplete:'Hãy chọn đáp án cho tất cả các ô.'};
    let ok=true;sels.forEach((s,k)=>{const g=+s.value===Q.rows[k].a;mark(k,g);if(!g)ok=false});return{ok}},
   solve(){sels.forEach((s,k)=>{s.value=Q.rows[k].a;mark(k,true)})},
   getState:()=>sels.map(x=>x.value),setState(v){sels.forEach((x,i)=>{x.value=v[i]})}};
}

/* ---------- 3) nối ---------- */
function bMatch(Q,ctx){
  const el=mk('div','mt'),pairs=Q.l.map(()=>null);let sl=null,sr=null,marks=null;
  const colL=mk('div'),colR=mk('div');colL.append(mk('h3','','Tình huống'));colR.append(mk('h3','','Nhóm'));
  const rIdx=ctx.shuffle?shuf(Q.r.map((_,i)=>i)):Q.r.map((_,i)=>i);
  const L=Q.l.map((t,i)=>{const b=mk('button','mi',fmt(t)+'<span class="to"></span>');b.type='button';b.onclick=()=>{sfx.tap();if(sr!=null){assign(i,sr);sr=null}else sl=sl===i?null:i;marks=null;paint()};colL.append(b);return b});
  const R=rIdx.map(j=>{const b=mk('button','mi mr',fmt(Q.r[j]));b.type='button';b.onclick=()=>{sfx.tap();if(sl!=null){assign(sl,j);sl=null}else sr=sr===j?null:j;marks=null;paint()};colR.append(b);return[b,j]});
  const assign=(i,j)=>{pairs[i]=j};
  function paint(){
    L.forEach((b,i)=>{b.className='mi'+(sl===i?' sel':'')+(marks?(marks[i]?' good':' bad'):'');
      $('.to',b).innerHTML=(pairs[i]!=null?'→ '+Q.r[pairs[i]]:'')});
    R.forEach(([b,j])=>b.classList.toggle('sel',sr===j));
  }
  el.append(colL,colR);
  return{el,check(){
    if(pairs.some(p=>p==null))return{incomplete:'Hãy nối tất cả các ý với một nhóm.'};
    marks=pairs.map((p,i)=>p===Q.a[i]);paint();return{ok:marks.every(Boolean)}},
   solve(){pairs.splice(0,pairs.length,...Q.a);marks=Q.a.map(()=>true);paint()},
   getState:()=>[...pairs],setState(a){a.forEach((v,i)=>{pairs[i]=v});paint()}};
}

/* ---------- 4) chạm vào hình ---------- */
function bHot(Q){
  const el=mk('div','say',Q.html);el.dataset.say=plain(Q.html.replace(/<button[^>]*>/g,' ').replace(/<\/button>/g,' '));
  const zs=$$('[data-k]',el),sel=new Set();let lock=false;
  zs.forEach(z=>z.onclick=()=>{if(lock)return;sfx.tap();const k=z.dataset.k;
    if(Q.multi){sel.has(k)?sel.delete(k):sel.add(k)}else{sel.clear();sel.add(k)}
    zs.forEach(x=>{x.classList.remove('bad','good');x.classList.toggle('sel',sel.has(x.dataset.k))})});
  return{el,check(){
    const need=Q.multi?Q.keys.length:1;
    if(sel.size!==need)return{incomplete:Q.multi?`Câu này cần chạm đủ ${need} vị trí.`:'Hãy chạm vào một vị trí trên hình.'};
    let ok=true;zs.forEach(z=>{if(sel.has(z.dataset.k)){const g=Q.keys.includes(z.dataset.k);z.classList.remove('sel');z.classList.add(g?'good':'bad');if(!g)ok=false}});
    if(ok)lock=true;return{ok}},
   solve(){lock=true;zs.forEach(z=>{z.classList.remove('sel','bad');if(Q.keys.includes(z.dataset.k))z.classList.add('good')})},
   getState:()=>[...sel],setState(a){sel.clear();a.forEach(k=>sel.add(k));zs.forEach(x=>x.classList.toggle('sel',sel.has(x.dataset.k)))}};
}

/* ---------- 5) kéo thả (điền từ / phân loại) — chạm hoặc kéo ---------- */
function bDnD(Q,ctx){
  const cloze=Q.t==='cloze';let chips,ans=[],parts=[];
  if(cloze){let last=0;Q.text.replace(/\[\[(.+?)\]\]/g,(m,a,off)=>{parts.push({s:Q.text.slice(last,off)});parts.push({b:ans.length});ans.push(a);last=off+m.length;return m});parts.push({s:Q.text.slice(last)});
    chips=shuf([...ans.map((t,k)=>({t,cor:k})),...(Q.x||[]).map(t=>({t,cor:-1}))]);}
  else chips=shuf(Q.items.map(([t,b])=>({t,cor:b})));
  chips.forEach((c,i)=>{c.id=i});
  const placed=chips.map(()=>null);let sel=null,locked=false,busy=false,drag=null;
  const el=mk('div'),pool=mk('div','pool');pool.setAttribute('aria-label','Khay thẻ');
  const tg={};   // target index -> container element
  if(cloze){const p=mk('div','cz say');p.dataset.say=plain(Q.text).replace(/\[\[(.+?)\]\]/g,'…');
    const full=Q.text.split(/\[\[.+?\]\]/);
    full.forEach((s,k)=>{plain(s).split('\n').forEach((ln,j)=>{if(j)p.append(document.createElement('br'));p.append(document.createTextNode(ln))});if(k<ans.length){const b=mk('span','blank');b.tabIndex=0;b.setAttribute('role','button');b.setAttribute('aria-label','Chỗ trống '+(k+1));tg[k]=b;p.append(b)}});
    el.append(p);}
  else{const g=mk('div','bins');Q.bins.forEach((t,k)=>{const b=mk('div','bin',`<h3>${t}</h3>`);const body=mk('div','bb');b.append(body);b.tabIndex=0;b.setAttribute('role','button');tg[k]=b;b._body=body;g.append(b)});el.append(g)}
  el.append(pool);
  const holder=k=>cloze?tg[k]:tg[k]._body;
  function chipEl(c){
    const b=mk('button','chip'+(sel===c.id?' sel':'')+(c.m?' '+c.m:''),c.t);
    b.type='button';b.draggable=!locked;
    b.onclick=e=>{e.stopPropagation();if(locked||busy)return;
      if(placed[c.id]!=null){placed[c.id]=null;c.m=null;sel=null;sfx.tap()}else sel=sel===c.id?null:c.id;paint()};
    b.ondragstart=e=>{drag=c.id;try{e.dataTransfer.setData('text/plain',String(c.id))}catch(x){}};
    return b;
  }
  function paint(){
    pool.innerHTML='';Object.keys(tg).forEach(k=>{const h_=holder(k);if(cloze){h_.innerHTML='';h_.classList.remove('hot')}else h_.innerHTML=''});
    chips.forEach(c=>{const t=placed[c.id];(t==null?pool:holder(t)).append(chipEl(c))});
    if(cloze)Object.keys(tg).forEach(k=>{if(!tg[k].firstChild){tg[k].textContent=''}else tg[k].classList.add('hot')});
    if(!pool.firstChild)pool.innerHTML='<span style="color:var(--mut);font-weight:700">✔ Đã đặt hết thẻ</span>';
  }
  function put(cid,k){
    if(locked||busy||cid==null)return;
    if(cloze){const o=chips.find(c=>placed[c.id]===k);if(o){placed[o.id]=null;o.m=null}}
    placed[cid]=k;chips[cid].m=null;sel=null;sfx.tap();paint();
  }
  Object.keys(tg).forEach(k=>{const t=tg[k];k=+k;
    t.onclick=()=>{if(sel!=null)put(sel,k)};
    t.onkeydown=e=>{if((e.key==='Enter'||e.key===' ')&&sel!=null){e.preventDefault();put(sel,k)}};
    t.ondragover=e=>e.preventDefault();t.ondrop=e=>{e.preventDefault();put(drag,k)}});
  pool.ondragover=e=>e.preventDefault();pool.ondrop=e=>{e.preventDefault();if(!locked&&!busy&&drag!=null){placed[drag]=null;chips[drag].m=null;paint()}};
  paint();
  return{el,check(){
    if(locked||busy)return{incomplete:'Đợi một chút nhé…'};
    if(cloze?placed.filter(x=>x!=null).length<ans.length:placed.some(x=>x==null))
      return{incomplete:cloze?'Hãy điền hết các chỗ trống.':'Hãy xếp hết các thẻ vào ô.'};
    const bad=[];chips.forEach(c=>{const t=placed[c.id];if(t==null)return;const gp=(Q.grp||[]).find(g=>g.includes(t));const ok=c.cor===t||(c.cor>=0&&!!gp&&gp.includes(c.cor));c.m=ok?'good':'bad';if(!ok)bad.push(c.id)});
    if(bad.length){busy=true;paint();setTimeout(()=>{bad.forEach(i=>{placed[i]=null;chips[i].m=null});busy=false;paint()},1400);
      return{ok:false,extra:`Các thẻ có dấu ✖ sẽ quay về khay. Em đặt lại nhé!`}}
    locked=true;paint();return{ok:true}},
   solve(){chips.forEach(c=>{placed[c.id]=cloze?(c.cor>=0?c.cor:null):c.cor;c.m=c.cor>=0?'good':null});locked=true;busy=false;paint()},
   getState:()=>chips.map(c=>[c.t,placed[c.id]]),setState(st){st.forEach(([t,pl])=>{const c=chips.find(x=>x.t===t);if(c)placed[c.id]=pl});paint()}};
}

/* ---------- 6) sắp xếp ---------- */
function bOrder(Q){
  let arr=Q.items.map((_,i)=>i);do{arr=shuf(arr)}while(arr.length>1&&arr.every((v,i)=>v===i));
  let sel=null,marks=null,locked=false,drag=null,playIdx=-1,timers=[];const ol=mk('ol','ord');
  const swap=(a,b)=>{[arr[a],arr[b]]=[arr[b],arr[a]]};
  const wrap=mk('div','ow'+(Q.demo?' hasdemo':'')),demo=Q.demo?mk('div','odemo'):null;
  const idle=()=>{demo.className='odemo';demo.innerHTML=`<div class="od-bar"><i></i><i></i><i></i></div><div class="od-body"><div class="od-big idle" aria-hidden="true">🖥️</div><div class="od-cap">Sắp xếp đúng để xem video minh họa</div></div><div class="od-dots">${Q.demo.map(()=>'<u></u>').join('')}</div>`};
  const scene=i=>{const d=Q.demo[i];demo.className='odemo live';demo.innerHTML=`<div class="od-bar"><i></i><i></i><i></i></div><div class="od-body"><div class="od-lines" aria-hidden="true"><s></s><s></s><s></s></div><div class="od-big pop" aria-hidden="true">${d.e}</div><div class="od-cap">Bước ${i+1}: ${d.t}</div></div><div class="od-dots">${Q.demo.map((_,k)=>`<u class="${k<i?'dn':k===i?'on':''}"></u>`).join('')}</div>`;playIdx=i;paint()};
  const play=()=>{timers.forEach(clearTimeout);timers=[];Q.demo.forEach((_,i)=>timers.push(setTimeout(()=>scene(i),i*1700)));
    timers.push(setTimeout(()=>{playIdx=-1;demo.className='odemo live fin';demo.innerHTML=`<div class="od-bar"><i></i><i></i><i></i></div><div class="od-body"><div class="od-big pop" aria-hidden="true">✅</div><div class="od-cap">Hoàn tất! Em đã làm đúng thứ tự.</div><button type="button" class="btn ghost od-re">▶ Xem lại</button></div><div class="od-dots">${Q.demo.map(()=>'<u class="dn"></u>').join('')}</div>`;$('.od-re',demo).onclick=play;paint()},Q.demo.length*1700))};
  function paint(){
    ol.innerHTML='';
    arr.forEach((oi,pos)=>{
      const li=mk('li','orow'+(sel===pos?' sel':'')+(marks?(marks[pos]?' good':' bad'):'')+(playIdx===pos?' play':''));li.draggable=!locked;
      li.append(mk('span','num',pos+1),mk('span','tx',fmt(Q.items[oi])));
      const up=mk('button','mvb','▲'),dn=mk('button','mvb','▼');up.type=dn.type='button';
      up.setAttribute('aria-label','Lên');dn.setAttribute('aria-label','Xuống');up.disabled=locked||pos===0;dn.disabled=locked||pos===arr.length-1;
      up.onclick=e=>{e.stopPropagation();swap(pos,pos-1);sel=null;marks=null;sfx.tap();paint()};
      dn.onclick=e=>{e.stopPropagation();swap(pos,pos+1);sel=null;marks=null;sfx.tap();paint()};
      li.append(up,dn);
      li.onclick=()=>{if(locked)return;sfx.tap();if(sel!=null&&sel!==pos){swap(sel,pos);sel=null}else sel=sel===pos?null:pos;marks=null;paint()};
      li.ondragstart=()=>{drag=pos};li.ondragover=e=>e.preventDefault();
      li.ondrop=e=>{e.preventDefault();if(drag==null||locked||drag===pos)return;const [m]=arr.splice(drag,1);arr.splice(pos,0,m);drag=null;sel=null;marks=null;paint()};
      ol.append(li);
    });
  }
  wrap.append(ol);if(demo){idle();wrap.append(demo)}
  paint();
  return{el:wrap,check(){marks=arr.map((v,i)=>v===i);const ok=marks.every(Boolean);if(ok){locked=true;if(demo)play()}paint();return{ok}},
   solve(){arr=Q.items.map((_,i)=>i);marks=arr.map(()=>true);locked=true;paint();if(demo)play()},
   getState:()=>[...arr],setState(a){arr=[...a];paint()}};
}

/* ---------- 7) chat demo ---------- */
function bChat(Q,ctx){
  const el=mk('div');
  const parts=Q.who.split('·').map(s=>s.trim()),name=parts.pop(),sub=parts[0]||'Đang hoạt động';
  const phone=mk('div','phone');
  phone.append(mk('div','ph-top',`<span class="ph-back" aria-hidden="true">‹</span><span class="ph-av">${Q.av||'💬'}</span><div class="ph-who"><b>${name}</b><small>${sub}</small></div>${Q.report?`<button type="button" class="ph-rp">🚩 Báo cáo</button>`:`<span class="ph-ic" aria-hidden="true">📞</span>`}`));
  const cb=mk('div','cb');phone.append(cb);
  const bub=m=>{const me=m.f==='me',row=mk('div','msg '+(me?'me':'them'),(me?'':`<span class="mav">${Q.av||'💬'}</span>`)+`<div class="bub ${me?'me':''}">${m.t}</div>`+(me?`<span class="mav">😊</span>`:''));cb.append(row);return row};
  Q.msgs.forEach(m=>bub(m));
  const rp=$('.ph-rp',phone);
  if(rp)rp.onclick=()=>{if(rp.disabled)return;rp.disabled=true;rp.textContent='✔ Đã báo cáo';cb.append(mk('div','sysmsg',`🚩 Bạn đã báo cáo ${name} cho quản trị viên của trò chơi.<br>Họ sẽ kiểm tra tài khoản này.`));tray.hidden=true;done=true;el.dispatchEvent(new CustomEvent('chatreport',{bubbles:true}))};
  const tray=mk('div','tray');tray.append(mk('div','tray-h','✍️ Chọn tin nhắn em sẽ gửi:'));
  const cmp=mk('div','compose',`<span class="cmp-t"><span class="cmp-ph">Soạn tin nhắn…</span><i class="caret" aria-hidden="true"></i></span><span class="cmp-send" aria-hidden="true">➤</span>`);
  tray.append(cmp);
  const showCmp=()=>{const i=[...inner.sel][0],t=$('.cmp-t',cmp);t.innerHTML=i==null?'<span class="cmp-ph">Soạn tin nhắn…</span><i class="caret" aria-hidden="true"></i>':`<span class="cmp-v">${Q.o[i].t}</span><i class="caret" aria-hidden="true"></i>`;cmp.classList.toggle('has',i!=null)};
  const inner=bChoice({o:Q.o.map(x=>x.t),a:[Q.o.findIndex(x=>x.ok)]},ctx);tray.append(inner.el);tray.addEventListener('click',()=>setTimeout(showCmp,0));
  phone.append(tray);el.append(phone);
  let done=false;
  return{el,check(){
    const r=inner.check();if(r.incomplete)return r;
    const i=[...inner.sel][0];
    if(r.ok&&!done){done=true;bub({f:'me',t:Q.o[i].t});bub({f:'them',t:Q.o[i].r});tray.hidden=true}
    else if(!r.ok)r.extra='Điều có thể xảy ra: '+Q.o[i].r;
    return r},
   solve(){inner.solve();if(!done){done=true;const g=Q.o.find(x=>x.ok);bub({f:'me',t:g.t});bub({f:'them',t:g.r});tray.hidden=true}},
   getState:()=>inner.getState(),setState:a=>inner.setState(a)};
}

/* ---------- kết thúc chặng ---------- */
function mistakesHtml(ids){
  if(!ids.length)return'';
  return`<div class="mist"><h3>📋 Các câu cần xem lại</h3>`+ids.map(id=>{const Q=QS[id];return`<div class="m say"><b class="q">${fmt(Q.q)}</b><div class="a">✔ Đáp án: ${solText(Q)}</div>${Q.why?`<div>💬 ${fmt(Q.why)}</div>`:''}</div>`}).join('')+`</div>`;
}
function finishRun(){
  const st=$('#stage');st.innerHTML='';
  const S0=run.step!=null?STEPS[run.step]:null;
  const acc=run.tot?run.ok/run.tot:1,stars=acc>=.9?3:acc>=.6?2:1;
  let extra='';
  if(run.review){S.reviewed=true;save()}
  else{
    S.done[run.step]=Math.max(S.done[run.step]||0,stars);S.pos[run.step]=0;delete S.runs[run.step];
    if(S0.kind==='final')S.best[run.step]=Math.max(S.best[run.step]||0,stars);
    save();

  }
  checkBadges();sfx.win();renderBar();renderMap();
  const nxt=run.review?-1:run.step+1;
  const c=mk('div','col');
  c.innerHTML=`<section class="card end"><div class="stars" aria-label="${stars} trên 3 sao">${starsTxt(stars)}</div>
   <h2 class="say">${run.review?'Ôn nhanh xong rồi!':(stars===3?'Tuyệt vời!':stars===2?'Giỏi lắm!':'Em đã hoàn thành!')}</h2>
   <p class="say">Đúng ngay lần đầu: <b>${run.ok}/${run.tot}</b> câu · ${stars}/3 sao.${stars<3?' Luyện lại để lấy thêm sao nhé!':''}</p>${extra}
   ${mistakesHtml(run.wrong)}
   <div class="act" style="justify-content:center">
    ${!run.review&&nxt<STEPS.length?`<button class="btn" id="nx">${STEPS[nxt].kind==='results'?'🏅 Xem kết quả':'▶ Chặng tiếp: '+STEPS[nxt].e+' '+STEPS[nxt].n}</button>`:''}
    ${run.review?'':`<button class="btn ghost" id="rt">🔁 Luyện lại (xáo trộn)</button>`}
    <button class="btn ghost" id="hm">🗺️ Bản đồ</button></div></section>`;
  st.append(c);deco(st);window.scrollTo(0,0);
  const g=(i,f)=>{const b=$(i,c);if(b)b.onclick=f};
  g('#nx',()=>startStep(nxt));
  g('#rt',()=>startStep(run.step,{retry:true}));
  g('#hm',()=>{view='home';render()});
}

/* ---------- kết quả ---------- */
function resultsView(st){
  const col=mk('div','col'),miss=Object.keys(S.missed).filter(id=>QS[id]);
  const fmtD=t=>t<=Date.now()?'đã đến hạn ôn':'ôn lại sau '+new Date(t).toLocaleDateString('vi-VN');
  col.innerHTML=`<section class="card end"><div class="stars">${'⭐'.repeat(Math.round(starSum()/NSTAR))||'🌱'}</div>
   <h2 class="say">Kết quả của em</h2><p class="say">Tổng số sao: <b>${starSum()}/${NSTAR*3}</b></p>
   </section>
   <section class="card"><h2 class="say">📋 Danh sách câu đã sai (${miss.length})</h2>
   ${miss.length?`<p class="say">Em xem lời giải thích rồi bấm “Ôn nhanh” để làm lại. Làm đúng thì câu đó sẽ quay lại ôn sau 1, 3 rồi 7 ngày.</p>`+
    `<div class="mist">${miss.map(id=>{const Q=QS[id];return`<div class="m say"><b class="q">${fmt(Q.q)}</b><div class="a">✔ Đáp án: ${solText(Q)}</div>${Q.why?`<div>💬 ${fmt(Q.why)}</div>`:''}<small>📅 ${fmtD(S.missed[id].due)}</small></div>`}).join('')}</div>`
    :'<p class="say">🎉 Em chưa có câu nào sai. Giỏi quá!</p>'}
   <div class="act">${miss.length?'<button class="btn warn" id="rv">📅 Ôn nhanh câu đã sai</button>':''}<button class="btn ghost" id="rf">🔁 Làm lại thử thách (xáo trộn)</button><button class="btn ghost" id="rs">🔄 Học lại từ đầu</button><button class="btn ghost" id="hm">🗺️ Bản đồ</button></div></section>`;
  st.append(col);
  const g=(i,f)=>{const b=$(i,col);if(b)b.onclick=f};
  g('#rv',startReview);g('#rf',()=>startStep(7,{shuffle:true}));g('#rs',resetAll);g('#hm',()=>{view='home';render()});
}

/* ---------- khởi động ---------- */
applySet();
if('speechSynthesis' in window){try{speechSynthesis.onvoiceschanged=findVoice}catch(e){}findVoice();setTimeout(findVoice,1200)}else{voiceReady=true}
render();checkBadges();
