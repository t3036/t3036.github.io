/* =====================================================================
   PHẦN DỮ LIỆU — thầy/cô chỉnh nội dung ở đây (từ đầu file đến dòng “HẾT DỮ LIỆU”)
   Quy ước chữ:  **từ khóa** = tô nổi bật  ·  Q.chk=true: đáp án suy luận, cần xác nhận
   ===================================================================== */
const LESSON={id:'ic3gs6-k7-b10'};

/* ---- Hình minh họa (HTML đơn giản) ---- */
const VIS={
 def:`<div class="chips3"><div class="vc"><span class="e">🧾</span>Thông tin</div><div class="vc"><span class="e">👤</span>Tài khoản</div><div class="vc"><span class="e">👣</span>Dấu vết hoạt động</div></div>`,
 online:`<div class="chips3"><div class="vc"><span class="e">📇</span>Hồ sơ trực tuyến</div><div class="vc b"><span class="e">🖱️</span>Tất cả hoạt động trực tuyến</div></div>`,
 two:`<div class="chips3"><div class="vc"><span class="e">😊</span>Danh tính <b>cá nhân</b><small>Personal digital identity</small></div><div class="vc b"><span class="e">💼</span>Danh tính <b>nghề nghiệp</b><small>Professional digital identity</small></div></div>`,
 per:`<div class="fbm"><div class="fh"><span class="fav"><svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true"><circle cx="24" cy="24" r="24" fill="#7fb36a"/><path d="M6 48c0-12 8-16 18-16s18 4 18 16z" fill="#b5523b"/><ellipse cx="24" cy="21" rx="9" ry="10.5" fill="#efc09b"/><path d="M14 20c-2-10 7-14 11-13 6 1 10 6 9 14-2-6-5-9-10-9s-8 3-10 8z" fill="#2b211e"/></svg></span><div class="fn"><b>Nhi Cute</b><span>2 giờ · 🌐</span></div><span class="fdots" aria-hidden="true">•••</span></div><div class="ft">Cuối tuần chill chill ☕🎧 Nghe nhạc, uống trà sữa, dạo công viên cho thư giãn~ 😌</div><div class="fpic"><svg viewBox="0 0 480 270" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Ảnh cô Nhi mỉm cười, cầm ly trà sữa trân châu" style="display:block;width:100%;height:auto"><defs><linearGradient id="bgt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe3ea"/><stop offset="1" stop-color="#ffeccc"/></linearGradient></defs><rect width="480" height="270" fill="url(#bgt)"/><circle cx="60" cy="60" r="34" fill="#fff" opacity=".45"/><circle cx="430" cy="210" r="46" fill="#fff" opacity=".4"/><circle cx="420" cy="50" r="18" fill="#fff" opacity=".5"/><g transform="translate(-40 0)"><path d="M186 108c-6-60 40-84 66-76 36 6 52 40 44 88-6-34-24-52-50-54-26 2-48 14-60 42z" fill="#2b211e"/><path d="M186 100c-12 46-8 96 14 116l30 6-10-110zM296 104c10 46 4 94-16 112l-30 6 14-108z" fill="#2b211e"/><path d="M130 270c0-60 50-82 110-82s110 22 110 82z" fill="#6fb3e0"/><rect x="215" y="150" width="50" height="50" rx="20" fill="#e8b48e"/><ellipse cx="240" cy="110" rx="52" ry="62" fill="#f2c6a4"/><path d="M188 104c4-34 26-52 54-52 30 0 50 20 52 54-12-24-30-34-54-34s-40 10-52 32z" fill="#2b211e"/><circle cx="222" cy="114" r="5.5" fill="#2b211e"/><circle cx="260" cy="114" r="5.5" fill="#2b211e"/><ellipse cx="206" cy="132" rx="9" ry="6" fill="#f4a0a0" opacity=".6"/><ellipse cx="276" cy="132" rx="9" ry="6" fill="#f4a0a0" opacity=".6"/><path d="M220 138q20 22 40 0" fill="#fff" stroke="#9a4b3b" stroke-width="3" stroke-linejoin="round"/></g><path d="M268 262l64-62" stroke="#6fb3e0" stroke-width="38" stroke-linecap="round"/><path d="M321 100h62l-10 85h-42z" fill="#e8c8a0" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M324 122h56l-2 12h-52z" fill="#fff" opacity=".55"/><rect x="316" y="90" width="72" height="13" rx="6" fill="#fff" stroke="#d8d8d8" stroke-width="2"/><rect x="354" y="40" width="10" height="56" rx="5" fill="#f06292" transform="rotate(8 359 96)"/><g fill="#3b2418"><circle cx="338" cy="176" r="6.5"/><circle cx="352" cy="178" r="6.5"/><circle cx="366" cy="176" r="6.5"/><circle cx="345" cy="167" r="6.5"/><circle cx="359" cy="167" r="6.5"/></g><circle cx="352" cy="146" r="19" fill="#f2c6a4"/><path d="M334 138c-10-4-14 6-8 12" fill="none" stroke="#e8b48e" stroke-width="9" stroke-linecap="round"/><text x="408" y="72" font-size="26">✨</text><text x="40" y="238" font-size="24">🧋</text></svg></div><div class="frx"><span><i class="r1">👍</i><i class="r2">❤️</i> 128</span><span>12 bình luận · 3 lượt chia sẻ</span></div><div class="fact"><span><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.3l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg> Like</span><span><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></svg> Comment</span><span><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"/></svg> Share</span></div></div>`,
 pro:`<div class="lim"><div class="lcov"></div><div class="lbody"><span class="lav"><svg viewBox="0 0 96 96" width="96" height="96" aria-hidden="true"><circle cx="48" cy="48" r="48" fill="#cfd8e3"/><path d="M8 96c2-26 18-34 40-34s38 8 40 34z" fill="#2f3a4f"/><path d="M38 62l10 14 10-14z" fill="#fff"/><path d="M46 66h4l2 20h-8z" fill="#c0392b"/><rect x="41" y="50" width="14" height="14" rx="6" fill="#e0ac86"/><ellipse cx="48" cy="38" rx="17" ry="20" fill="#eab995"/><path d="M30 36c-2-16 10-22 19-21 11 1 19 9 17 22-3-8-8-12-18-12-9 0-15 4-18 11z" fill="#25201d"/><circle cx="41" cy="40" r="2.2" fill="#25201d"/><circle cx="55" cy="40" r="2.2" fill="#25201d"/><path d="M41 48q7 6 14 0" fill="none" stroke="#8c4a3a" stroke-width="2.2" stroke-linecap="round"/></svg></span><b class="lname">Nguyễn Hoàng Minh</b><div class="lhead">Chuyên viên công nghệ thông tin</div><div class="lsub">Hà Nội · 500+ kết nối</div><div class="lbtns"><span class="lb1">+ Kết nối</span><span class="lb2">Nhắn tin</span></div></div><div class="lsec"><h4>Trình độ chuyên môn</h4><div class="lit"><span class="llogo">🎓</span><div><b>Kỹ sư công nghệ thông tin</b><br><small>Trường Đại học XYZ</small></div></div><div class="lit"><span class="llogo">📜</span><div><b>Chứng nhận IC3 GS6</b><br><small>Tin học và kĩ năng số</small></div></div></div><div class="lsec"><h4>Kinh nghiệm làm việc</h4><div class="lit"><span class="llogo">🏢</span><div><b>Chuyên viên IT</b><br><small>Công ty ABC · 2020 – nay</small></div></div></div></div>`,
 upd:`<div class="chips3"><div class="vc"><span class="e">🧑‍💼</span>Hình ảnh đại diện chuyên nghiệp</div><div class="vc"><span class="e">📜</span>Chứng nhận kỹ năng, trình độ</div><div class="vc"><span class="e">🏅</span>Kinh nghiệm hoặc thành tích mới</div></div>`,
 fit:`<div class="chips3"><div class="vc"><span class="e">🏫</span>Tài khoản trường học<small>dùng để học tập</small></div><div class="vc b"><span class="e">😊</span>Tài khoản cá nhân<small>giải trí, trò chuyện với bạn bè</small></div></div>`,
 alias:`<div class="chips3"><div class="vc"><span class="e">🧒</span>Tên thật<small>Nguyễn Văn An</small></div><div class="vc b"><span class="e">🐱</span>Bí danh (Alias)<small>“Mèo Con”</small></div></div>`,
 safe:`<div class="chips3"><div class="vc"><span class="e">🙅</span>Không cho người lạ thông tin cá nhân</div><div class="vc"><span class="e">🚪</span>Đăng xuất sau khi dùng máy người khác</div></div>`
};

/* ---- Thẻ học (theo thứ tự bài giảng). g = từ vựng Anh–Việt ---- */
const LEARN={
 def:{h:"Danh tính kĩ thuật số là gì?",
  p:["**Danh tính kĩ thuật số** (Digital Identity): là các **thông tin**, **tài khoản** và **dấu vết hoạt động** của em trên Internet, máy tính, điện thoại hoặc phần mềm.",
     "💡 Nói đơn giản: đó là “em là ai” trên mạng. Mỗi lần em đăng nhập, đăng ảnh hay bình luận, em để lại một **dấu vết số**."],
  v:'def',g:[["Digital Identity","danh tính kĩ thuật số"]]},
 online:{h:"Danh tính trực tuyến",
  p:["**Danh tính trực tuyến** (Online identity) là **hồ sơ trực tuyến** và **tất cả các hoạt động trực tuyến** của người dùng."],
  v:'online',g:[["Online identity","danh tính trực tuyến"],["Profile","hồ sơ trực tuyến"]]},
 two:{h:"Hai dạng danh tính",p:["Trên Internet có **hai dạng** danh tính cơ bản:"],v:'two',
  g:[["Personal digital identity","danh tính kĩ thuật số cá nhân"],["Professional digital identity","danh tính kĩ thuật số nghề nghiệp"]]},
 per:{h:"Danh tính kỹ thuật số cá nhân",
  p:["**Đặc điểm:** Liên quan đến các hoạt động **riêng tư** và **giải trí** của cá nhân.","**Ví dụ:** Tài khoản **Facebook** của cô Nhi. Có biệt hiệu, hình ảnh, trạng thái, sở thích, trường học, …"],v:'per',
  g:[["Personal","cá nhân"],["Status","trạng thái"]]},
 pro:{h:"Danh tính kỹ thuật số nghề nghiệp",
  p:["**Đặc điểm:** Liên quan đến các hoạt động **học tập** và **công việc**.","**Ví dụ:** Hồ sơ nghề nghiệp của anh Minh trên **LinkedIn** sẽ có **trình độ chuyên môn**, **kinh nghiệm làm việc**, …"],v:'pro',
  g:[["Professional","nghề nghiệp"],["Profile","hồ sơ"]]},
 tips:{h:"Xây dựng danh tính kĩ thuật số tốt",
  p:["Để xây dựng danh tính kĩ thuật số tốt bạn cần quan tâm đến một số lưu ý sau:","📝 Giữ thông tin **chính xác**, **đầy đủ** và **cập nhật**.","🎯 Chia sẻ nội dung **phù hợp** với mục đích."],g:[["Update","cập nhật"]]},
 upd:{h:"📝 Lưu ý 1: Giữ thông tin luôn mới",
  p:["Giữ thông tin cá nhân và nghề nghiệp **chính xác, đầy đủ** và luôn được **cập nhật**.","**Ví dụ cập nhật hồ sơ nghề nghiệp:**"],v:'upd',g:[["Update","cập nhật"],["Certificate","chứng nhận"]]},
 fit:{h:"🎯 Lưu ý 2: Nội dung phù hợp mục đích",
  p:["Chia sẻ và sử dụng nội dung **phù hợp với mục đích** cá nhân hoặc nghề nghiệp.","**Ví dụ:** 🏫 **Tài khoản trường học** dùng để **học tập** · 😊 **Tài khoản cá nhân** dùng cho **giải trí**, trò chuyện với bạn bè"],v:'fit',
  g:[["Account","tài khoản"],["School account","tài khoản trường học"]]},
 alias:{h:"Bí danh (Alias)",
  p:["**Bí danh** (Alias) là một **tên khác** với tên thật mà em dùng khi tham gia trực tuyến.",
     "Dùng khi **tên thật quá phổ biến** hoặc để **giữ an toàn**. **Không** dùng để làm điều sai trái."],v:'alias',g:[["Alias","bí danh"]]},
 safe:{h:"Bảo vệ bản thân khi trực tuyến",
  p:["✔ **Không** đưa **thông tin cá nhân** cho **người lạ**.","✔ **Không** điền địa chỉ nhà tùy tiện; **không** mua hàng ở trang **không rõ nguồn gốc**.","✔ **Đăng xuất** sau khi dùng máy tính của người khác."],v:'safe',
  g:[["Log out","đăng xuất"],["Personal information","thông tin cá nhân"]]},
 pos:{h:"Hồ sơ số tích cực",
  p:["Xây dựng & bảo vệ hình ảnh trên mạng / khi dùng AI.","Mọi hành động online để lại **dấu chân số**. Hồ sơ tích cực giúp **uy tín lâu dài**."],
  cards:[["1","Tích cực & lịch sự","Đăng nội dung **có ích**, **không gây hấn**; **kiểm tra** trước khi share (kể cả do AI gợi)."],["2","Trung thực","Là **chính mình**; **không tạo hồ sơ giả**; tôn trọng **bản quyền** ảnh/chữ."]],
  g:[["Digital footprint","dấu chân số"],["Copyright","bản quyền"]]},
 noai:{h:"Không nhập dữ liệu nhạy cảm vào AI",
  p:["Bảo vệ bản thân khi dùng chatbot / AI."],
  cards:[["1","Dữ liệu cấm đưa vào AI","**Họ tên + địa chỉ nhà**, **SĐT**; **mật khẩu**; **số thẻ/tài khoản**; **ảnh giấy tờ** cá nhân."],["2","Vì sao nguy hiểm?","Thông tin cá nhân có thể bị **lưu trên server**, **rò rỉ**, **dùng sai mục đích** — khó xóa hết."],["3","Làm đúng","Chỉ hỏi **kiến thức/bài tập**; **che thông tin** cá nhân; dùng **tài khoản được phép**."]],
  g:[["Chatbot","trợ lý trò chuyện tự động"],["Server","máy chủ"],["Sensitive data","dữ liệu nhạy cảm"]]},
 core:{h:"Gen AI – Bổ sung cốt lõi",
  p:["Các điểm cốt lõi cần ghi nhớ khi sử dụng Gen AI."],
  cards:[["1","Dấu vết trực tuyến","Danh tính số được tạo từ **nhiều dấu vết** trực tuyến"],["2","Không dùng AI để mạo danh","Không dùng AI để **mạo danh** hoặc tạo **hình ảnh sai lệch**"],["3","Kiểm tra trước khi dùng","Nội dung giống thật vẫn cần **xác minh**"]],
  g:[["Generative AI","AI tạo sinh"],["Impersonate","mạo danh"],["Verify","xác minh"]]},
 sum:{h:"📌 Tóm tắt bài học",list:true,
  p:["Ôn nhanh **6 ý chính**:"],
  cards:[["🆔","Danh tính kĩ thuật số","**Thông tin** + **tài khoản** + **dấu vết** trên Internet."],
         ["👥","Cá nhân & nghề nghiệp","**Cá nhân**: riêng tư, giải trí · **Nghề nghiệp**: học tập, công việc."],
         ["📝","Giữ hồ sơ luôn mới","**Chính xác**, **đầy đủ**, **cập nhật**."],
         ["🎯","Nội dung phù hợp","Đúng **tài khoản**, đúng **mục đích**."],
         ["🛡️","Bí danh & an toàn","Dùng **bí danh**, **không** cho người lạ thông tin, **đăng xuất**."],
         ["🤖","Hồ sơ tích cực & AI","**Tích cực**, **trung thực**; **không** đưa dữ liệu nhạy cảm cho AI."]],
  g:[["Digital Identity","danh tính kĩ thuật số"],["Alias","bí danh"],["Log out","đăng xuất"],["Verify","xác minh"]]}
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
  why:"Danh tính trực tuyến là hồ sơ trực tuyến và tất cả các hoạt động trực tuyến của người dùng. Thông tin đăng nhập, thông tin chính thức của chính phủ hay địa chỉ Email chỉ là một phần của danh tính này."},
 s6:{t:'choice',chk:1,q:"Bạn hãy cho biết, nhận định sau đây là **đúng hay sai**: “Tài khoản ngân hàng trực tuyến là một phần của nhận dạng kĩ thuật số.”",
  o:["Đúng","Sai"],a:[0],hint:"Tài khoản ngân hàng trực tuyến cũng là một tài khoản em dùng trên Internet.",
  why:"Đúng. Tài khoản ngân hàng trực tuyến là một tài khoản trên Internet nên là một phần của danh tính kĩ thuật số."},
 x1:{t:'choice',extra:1,q:"Hoạt động nào sau đây để lại **dấu vết** trong danh tính kĩ thuật số của em?",
  o:["Đăng một bức ảnh lên mạng xã hội","Nói chuyện với bạn ở sân trường","Chơi nhảy dây ở lớp","Đọc một cuốn sách giấy ở nhà"],a:[0],
  hint:"Dấu vết số chỉ có khi em làm việc đó trên Internet, máy tính, điện thoại hoặc phần mềm.",why:"Đăng ảnh lên mạng xã hội là hoạt động trực tuyến, nên để lại dấu vết số. Ba việc còn lại diễn ra ngoài đời."},

 /* ===== Phần 2: Cá nhân và nghề nghiệp ===== */
 dd2:{t:'cloze',q:"Điền vào chỗ trống: hai dạng danh tính",text:"Trên Internet có hai dạng danh tính cơ bản: danh tính [[cá nhân]] và danh tính [[nghề nghiệp]].",grp:[[0,1]],x:["bí mật"],hint:"Một dạng cho đời sống riêng, một dạng cho công việc."},
 dd3:{t:'cloze',q:"Điền vào chỗ trống: danh tính cá nhân",text:"Danh tính cá nhân liên quan đến hoạt động [[riêng tư]] và [[giải trí]].\nVí dụ: tài khoản [[Facebook]] của cô Nhi.",grp:[[0,1]],x:["công việc","LinkedIn"],hint:"Cô Nhi đăng bài thư giãn cuối tuần — đó là việc riêng tư, giải trí."},
 dd4:{t:'cloze',q:"Điền vào chỗ trống: danh tính nghề nghiệp",text:"Danh tính nghề nghiệp liên quan đến hoạt động [[học tập]] và [[công việc]].\nVí dụ: hồ sơ trên [[LinkedIn]] của anh Minh.",grp:[[0,1]],x:["giải trí","Facebook"],hint:"Hồ sơ của anh Minh có trình độ chuyên môn và kinh nghiệm làm việc."},
 s11:{t:'choice',chk:1,q:"Tuỳ chọn nào sau đây là hai khía cạnh của sự hiện diện trực tuyến có ảnh hưởng đến **danh tính kỹ thuật số nghề nghiệp**? (Chọn 2)",
  o:["Trang Web công ty","Ngày sinh","Trang Facebook","Tài khoản LinkedIn"],a:[0,3],
  hint:"Chọn hai thứ gắn với công việc.",why:"Trang Web công ty và tài khoản LinkedIn gắn với công việc nên ảnh hưởng đến danh tính nghề nghiệp. Ngày sinh và trang Facebook thiên về cá nhân."},
 x2:{t:'hotspot',extra:1,q:"Đây là hồ sơ nghề nghiệp của chị Hà. Chạm vào **hai** thông tin **không phù hợp** với hồ sơ nghề nghiệp.",multi:true,
  html:`<div class="lim"><div class="lcov"></div><div class="lbody"><span class="lav"><svg viewBox="0 0 96 96" width="96" height="96" aria-hidden="true"><circle cx="48" cy="48" r="48" fill="#f3d9dc"/><path d="M30 40c-6-24 14-30 24-28 14 3 20 14 14 34l-6 20-10 4-18-6z" fill="#3a2a2a"/><path d="M8 96c2-26 18-34 40-34s38 8 40 34z" fill="#7a3b5e"/><path d="M36 62l12 16 12-16z" fill="#fff"/><rect x="41" y="50" width="14" height="14" rx="6" fill="#e6b08c"/><ellipse cx="48" cy="38" rx="16" ry="19" fill="#efc09b"/><path d="M31 36c0-14 9-22 19-21 10 1 17 8 16 21-4-8-9-11-17-11-8 0-14 4-18 11z" fill="#3a2a2a"/><circle cx="42" cy="40" r="2.2" fill="#2b211e"/><circle cx="55" cy="40" r="2.2" fill="#2b211e"/><ellipse cx="38" cy="47" rx="4" ry="2.6" fill="#f4a0a0" opacity=".6"/><ellipse cx="59" cy="47" rx="4" ry="2.6" fill="#f4a0a0" opacity=".6"/><path d="M42 48q6 5 12 0" fill="none" stroke="#9a4b3b" stroke-width="2.2" stroke-linecap="round"/></svg></span><b class="lname">Trần Thu Hà</b><div class="lhead">Chuyên viên nhân sự</div><div class="lsub">TP. Hồ Chí Minh · 500+ kết nối</div><div class="lbtns"><span class="lb1">+ Kết nối</span><span class="lb2">Nhắn tin</span></div></div><div class="lsec zs"><button type="button" class="zone" data-k="exp">💼 Kinh nghiệm làm việc</button>
   <button type="button" class="zone" data-k="hobby">🎮 Ảnh chơi game cùng bạn bè</button>
   <button type="button" class="zone" data-k="cert">🎓 Trình độ chuyên môn</button>
   <button type="button" class="zone" data-k="trip">🏖️ Ảnh đi biển cùng gia đình</button></div></div>`,
  keys:["hobby","trip"],keyText:"Ảnh chơi game và ảnh đi biển (là nội dung cá nhân)",
  hint:"Hồ sơ nghề nghiệp nói về công việc, không phải giải trí hay gia đình.",why:"Ảnh chơi game và ảnh đi biển là nội dung cá nhân. Hồ sơ nghề nghiệp nên có kinh nghiệm làm việc và trình độ chuyên môn."},

 /* ===== Phần 3: Giữ thông tin luôn mới ===== */
 dd5:{t:'cloze',q:"Điền vào chỗ trống: giữ thông tin luôn mới",text:"Giữ thông tin [[chính xác]], [[đầy đủ]] và luôn được [[cập nhật]].",grp:[[0,1]],x:["bỏ trống","cũ kĩ"],hint:"Ba từ: đúng, đủ và mới."},
 s14:{t:'choice',chk:1,q:"Bạn đang sử dụng các tài khoản mạng xã hội cho mục đích cá nhân và công việc. Bạn nên đăng tải **hai** nội dung nào lên tài khoản mạng xã hội dùng vào mục đích **công việc** của mình? (Chọn 2)",
  o:["Ảnh hồ sơ chính thức của bạn","Chứng nhận kỹ thuật mà bạn có","Hình ảnh gia đình đang chơi trò chơi","Khiếu nại về đồng nghiệp hiện tại"],a:[0,1],
  hint:"Tài khoản công việc chỉ nên có những thứ chuyên nghiệp.",why:"Ảnh hồ sơ chính thức và chứng nhận kỹ thuật thể hiện sự chuyên nghiệp. Ảnh gia đình là nội dung cá nhân; khiếu nại về đồng nghiệp không nên đăng công khai."},
 s15:{t:'choice',chk:1,q:"Bạn đang nộp đơn xin việc trong lĩnh vực nghề nghiệp đã chọn. Nhà tuyển dụng tiềm năng sẽ truy cập hồ sơ công việc trực tuyến của bạn. Bạn cần làm gì để **hỗ trợ** hồ sơ công việc trực tuyến của mình?",
  o:["Cập nhật hồ sơ thường xuyên để giới thiệu các kỹ năng của bạn.","Hạn chế quyền truy cập vào hồ sơ để duy trì quyền riêng tư.","Cung cấp thông tin về lịch sử tiền lương và kỳ vọng của bạn.","Cung cấp thông tin về các hoạt động cá nhân để minh chứng cho sự cân bằng của mình."],a:[0],
  hint:"Nhà tuyển dụng muốn thấy kỹ năng mới nhất của em.",why:"Cập nhật hồ sơ thường xuyên giúp nhà tuyển dụng thấy các kỹ năng của em. Các lựa chọn còn lại không giúp hồ sơ công việc tốt hơn."},
 s16:{t:'choice',q:"Khi tham gia trực tuyến, em hãy cho biết tùy chọn nào sau đây có thể gây **ảnh hưởng không tốt** đến danh tính nghề nghiệp của người dùng? (Chọn 3)",
  o:["Người dùng đăng một bức ảnh về hoạt động Team Building của các thành viên trong phòng ban thể hiện sự đoàn kết lên mạng xã hội đóng của công ty.","Người dùng đăng bài viết phàn nàn về sếp của mình.","Người dùng sử dụng tài khoản nghề nghiệp để viết một bình luận công kích một quan điểm chính trị bất đồng trên một diễn đàn.","Người dùng sử dụng Email cá nhân để gửi các thông tin hợp đồng bí mật của công ty.","Người dùng sử dụng tài khoản cá nhân để mua sắm chiếc đồng hồ cho riêng mình."],a:[1,2,3],
  hint:"Tìm 3 việc làm người khác nhìn em kém chuyên nghiệp hoặc làm lộ bí mật công ty.",
  why:"Phàn nàn về sếp, công kích quan điểm chính trị bằng tài khoản nghề nghiệp và gửi thông tin hợp đồng bí mật bằng Email cá nhân đều ảnh hưởng không tốt. Ảnh Team Building đăng trên mạng xã hội đóng của công ty thể hiện sự đoàn kết; mua sắm riêng bằng tài khoản cá nhân là phù hợp."},
 s17:{t:'dropdown',q:"Em hãy chọn **Đúng** hoặc **Sai** cho mỗi phát biểu sau đây:",
  rows:[{t:"Sử dụng tài khoản nghề nghiệp cùng với thẻ tín dụng của doanh nghiệp khi mua sắm các loại hàng hóa cho công ty.",o:["Đúng","Sai"],a:0},
        {t:"Cài đặt phần mềm Microsoft Office mới nhất vào máy tính của trường học khi sử dụng.",o:["Đúng","Sai"],a:1},
        {t:"Đăng các video hướng dẫn bản thân soạn thảo văn bản lên mạng xã hội trong giờ làm việc.",o:["Đúng","Sai"],a:1},
        {t:"Sử dụng tài khoản cá nhân để cộng tác với bố lên kế hoạch cho kì nghỉ hè.",o:["Đúng","Sai"],a:0}],
  hint:"Tài khoản nghề nghiệp dùng cho việc công ty; tài khoản cá nhân dùng cho việc riêng.",
  why:"1. Đúng: tài khoản nghề nghiệp và thẻ tín dụng doanh nghiệp dùng cho công việc của công ty. 2. Sai: việc cài đặt phần mềm trên máy tính của trường học không phải việc người dùng tự thực hiện. 3. Sai: giờ làm việc không dùng để đăng video cá nhân lên mạng xã hội. 4. Đúng: tài khoản cá nhân dùng cho các việc riêng như lên kế hoạch kì nghỉ hè với bố."},
 x3:{t:'dropdown',extra:1,q:"Chọn từ đúng cho mỗi câu:",
  rows:[{t:"Em vừa có chứng nhận mới. Em nên {s} hồ sơ nghề nghiệp của mình.",o:["cập nhật","xóa hết","bỏ quên"],a:0},
        {t:"Ảnh đại diện trên hồ sơ nghề nghiệp nên {s}.",o:["chuyên nghiệp","che mặt bằng biểu tượng cảm xúc","là ảnh trò chơi"],a:0}],
  hint:"Hồ sơ tốt thì luôn mới và chuyên nghiệp.",why:"Cập nhật hồ sơ khi có chứng nhận mới và dùng ảnh đại diện chuyên nghiệp."},
 x4:{t:'order',extra:1,q:"Sắp xếp các bước **cập nhật hồ sơ nghề nghiệp** theo đúng thứ tự:",
  items:["Đăng nhập vào tài khoản nghề nghiệp","Mở phần hồ sơ của em","Thêm chứng nhận hoặc kinh nghiệm mới","Lưu lại thay đổi"],
  hint:"Phải vào được hồ sơ trước, rồi mới thêm, cuối cùng mới lưu.",why:"Đăng nhập → mở hồ sơ → thêm thông tin mới → lưu lại."},

 /* ===== Phần 4: Nội dung phù hợp ===== */
 dd6:{t:'cloze',q:"Điền vào chỗ trống: dùng đúng tài khoản",text:"Tài khoản trường học dùng để [[học tập]]. Tài khoản cá nhân dùng để [[giải trí]] và trò chuyện với [[bạn bè]].",x:["kiếm tiền"],hint:"Trường học → học. Cá nhân → vui chơi."},
 s19:{t:'choice',chk:1,q:"Bạn có các tài khoản Google riêng để sử dụng tại trường học và cho mục đích cá nhân. Bạn đã đăng nhập vào tài khoản cá nhân của mình. Bạn cần truy cập một tập tin được chia sẻ với bạn thông qua Google Drive của tài khoản trường học của bạn. Bạn nên làm gì?",
  o:["Đặt cấu hình cả hai tài khoản để sử dụng cùng một mật khẩu.","Liên kết Google Drive của tài khoản cá nhân và tài khoản trường học.","Trong phần cài đặt tài khoản Google cá nhân, bỏ chặn tài khoản trường học của bạn.","Chuyển từ tài khoản Google cá nhân sang tài khoản trường học của bạn."],a:[3],
  hint:"Tập tin được chia sẻ cho tài khoản nào thì em cần dùng tài khoản đó.",why:"Em cần tập tin của tài khoản trường học, nên hãy chuyển sang tài khoản trường học. Dùng chung mật khẩu hay liên kết hai tài khoản sẽ làm lẫn lộn danh tính cá nhân và trường học."},
 s20:{t:'match',chk:1,q:"Lựa chọn danh tính kỹ thuật số **cá nhân** phù hợp với tình huống:",
  l:["Bạn đăng một bức hình kỷ niệm chuyến đi chơi trên Instagram","Bình luận về một bức ảnh trên Facebook"],r:["Danh tính cá nhân","Danh tính nghề nghiệp"],a:[0,0],
  hint:"Đăng ảnh đi chơi hay bình luận trên mạng xã hội là việc riêng tư, giải trí.",why:"Cả hai việc đều là hoạt động riêng tư và giải trí, nên thuộc danh tính kĩ thuật số cá nhân."},
 s21:{t:'match',chk:1,q:"Lựa chọn danh tính kỹ thuật số **nghề nghiệp** phù hợp với tình huống:",
  l:["Tạo một hồ sơ việc làm trên TopCV.","Đăng kinh nghiệm làm việc trên LinkedIn."],r:["Danh tính cá nhân","Danh tính nghề nghiệp"],a:[1,1],
  hint:"Tìm việc và kinh nghiệm làm việc thuộc về công việc.",why:"TopCV và LinkedIn dùng cho việc tìm việc và kinh nghiệm làm việc, nên thuộc danh tính kĩ thuật số nghề nghiệp."},
 s22:{t:'choice',chk:1,q:"Xác định **hai cách** để phân biệt danh tính kỹ thuật số cá nhân của bạn với danh tính kỹ thuật số nghề nghiệp của bạn? (Chọn 2)",
  o:["Không bao giờ đăng ảnh.","Sử dụng LinkedIn cho các mục đích nghề nghiệp và Facebook cho các bài đăng cá nhân.","Tạo biệt hiệu hoặc bí danh cho các bài đăng trên các diễn đàn và Blog giải trí, nhưng sử dụng tên thật của bạn cho các bài đăng trong các diễn đàn và Blog kỹ thuật.","Chỉ theo dõi các chính trị gia, vận động viên chuyên nghiệp và người nổi tiếng trên Twitter."],a:[1,2],
  hint:"Tách riêng nơi dùng cho nghề nghiệp và nơi dùng cho cá nhân.",why:"Dùng LinkedIn cho nghề nghiệp và Facebook cho cá nhân; dùng bí danh ở nơi giải trí nhưng tên thật ở nơi kỹ thuật. Hai cách này giúp tách hai danh tính."},
 x5:{t:'sort',extra:1,q:"Xếp mỗi việc vào đúng loại tài khoản:",bins:["🏫 Tài khoản trường học","😊 Tài khoản cá nhân"],
  items:[["Làm bài tập trên Google Drive của lớp",0],["Xem video giải trí",1],["Trò chuyện với bạn bè",1],["Tham gia lớp học trực tuyến",0]],
  hint:"Việc học → trường học. Việc vui chơi → cá nhân.",why:"Học tập dùng tài khoản trường học; giải trí và trò chuyện với bạn bè dùng tài khoản cá nhân."},

 /* ===== Phần 5: Bí danh và an toàn ===== */
 dd7:{t:'cloze',q:"Điền vào chỗ trống: bí danh",text:"Bí danh (Alias) là một [[tên khác]] với tên thật. Em dùng bí danh để giữ [[an toàn]], không để làm việc [[sai trái]].",x:["mật khẩu"],hint:"Bí danh giúp em an toàn, không phải để làm điều xấu."},
 s23:{t:'choice',q:"Em hãy cho biết, lí do nào sau đây là **thích hợp** cho việc sử dụng bí danh (Alias) khi tham gia trực tuyến thay vì sử dụng tên thật?",
  o:["Sử dụng bí danh để tải các bộ phim, các bài nhạc vi phạm bản quyền.","Khi người dùng có tên thật quá thông dụng và muốn sử dụng bí danh để phân biệt với những người khác.","Sử dụng bí danh để viết một Blog về một chủ đề mà em không am hiểu nhiều.","Sử dụng bí danh để viết các bình luận không tốt về ai đó."],a:[1],
  hint:"Ba đáp án sai đều là làm điều không tốt. Chọn lí do hợp lí và vô hại.",
  why:"Bí danh (Alias) giúp người dùng phân biệt bản thân với người khác khi tên thật quá thông dụng. Không dùng bí danh để tải nội dung vi phạm bản quyền, viết về chủ đề mình không am hiểu hoặc đăng bình luận tiêu cực về người khác."},
 dd8:{t:'cloze',q:"Điền vào chỗ trống: an toàn trực tuyến",text:"Sau khi dùng máy tính của người khác, em phải [[đăng xuất]] tài khoản. Em không đưa thông tin cá nhân cho [[người lạ]].",x:["chia sẻ"],hint:"Đóng “cửa” tài khoản lại khi dùng xong."},
 s24:{t:'choice',q:"Em hãy cho biết, tùy chọn nào sau đây là **đúng** để bảo vệ bản thân khi tham gia trực tuyến?",
  o:["Cung cấp thông tin cá nhân cho người lạ trên mạng xã hội.","Điền thông tin địa chỉ nhà trên các biểu mẫu trực tuyến.","Mua hàng hóa từ các trang Web không rõ nguồn gốc.","Đăng xuất tất cả các tài khoản trực tuyến của bản thân sau khi sử dụng máy tính của người khác."],a:[3],
  hint:"Ba đáp án sai đều làm lộ thông tin hoặc dễ bị lừa.",
  why:"Đăng xuất tất cả tài khoản sau khi dùng máy tính của người khác giúp bảo vệ tài khoản và thông tin cá nhân. Các tùy chọn còn lại làm lộ thông tin cá nhân hoặc có nguy cơ bị lừa đảo."},
 c1:{t:'chat',extra:1,q:"💬 Tình huống: một người lạ nhắn tin cho em trong trò chơi trực tuyến. Em trả lời thế nào?",who:"Chat trò chơi · Sao_Bang_99",
  msgs:[{f:'them',n:'Sao_Bang_99',t:"Chào bạn! Bạn tên gì, học trường nào, nhà ở đâu vậy?"}],
  o:[{t:"Em tên Lan, học trường ABC, nhà ở số 12 đường Hoa.",ok:0,r:"Ôi! Người lạ đã biết tên, trường và nhà em rồi. Rất nguy hiểm."},
     {t:"Em không chia sẻ thông tin cá nhân với người lạ. Em chỉ dùng biệt danh “Mèo Con” thôi.",ok:1,r:"Ok, vậy mình chơi game thôi nhé!"},
     {t:"Em gửi ảnh của em và mật khẩu cho bạn nhé.",ok:0,r:"Cho mật khẩu thì người lạ có thể lấy mất tài khoản của em!"}],
  hint:"Với người lạ, em không cho tên thật, trường, địa chỉ. Em có thể dùng bí danh.",why:"Không chia sẻ thông tin cá nhân với người lạ; dùng bí danh để giữ an toàn."},
 x6:{t:'order',extra:1,q:"Sắp xếp các bước khi **dùng xong máy tính của người khác**:",
  items:["Làm xong việc cần làm","Lưu hoặc đóng tập tin","Đăng xuất khỏi tất cả tài khoản","Đóng trình duyệt"],
  hint:"Đăng xuất trước, rồi mới đóng trình duyệt.",why:"Làm xong → lưu/đóng tập tin → đăng xuất → đóng trình duyệt."},

 /* ===== Phần 6: Hồ sơ tích cực và AI ===== */
 dd9:{t:'cloze',q:"Điền vào chỗ trống: hồ sơ tích cực",text:"Mọi hành động online để lại [[dấu chân số]]. Hồ sơ tốt cần [[tích cực]], lịch sự và [[trung thực]].",grp:[[1,2]],x:["giả mạo"],hint:"Là chính mình, nói lời tử tế."},
 dd10:{t:'cloze',q:"Điền vào chỗ trống: dữ liệu với AI",text:"Không nhập [[mật khẩu]], số thẻ và ảnh [[giấy tờ]] vào AI, vì thông tin có thể bị lưu trên [[máy chủ]].",x:["bài tập Toán"],hint:"Đây là những thứ rất riêng tư của em."},
 c2:{t:'chat',extra:1,q:"💬 Tình huống: bạn Nam sắp gửi tin nhắn cho trợ lý AI. Nam nên làm gì?",who:"Trợ lý AI",
  msgs:[{f:'me',n:'Nam (bản nháp)',t:"Mình là Nam, nhà ở 12 Lê Lợi, SĐT 09xx xxx xxx. Viết giúp mình lời giới thiệu bản thân nhé!"}],
  o:[{t:"Gửi luôn cho AI, vì AI sẽ giúp nhanh hơn.",ok:0,r:"Thông tin cá nhân có thể bị lưu trên máy chủ và khó xóa hết."},
     {t:"Xóa tên đầy đủ, địa chỉ, số điện thoại rồi chỉ nhờ AI viết lời giới thiệu mẫu.",ok:1,r:"Rất tốt! Mình sẽ viết một lời giới thiệu mẫu để bạn tự chỉnh sửa nhé."},
     {t:"Thêm cả mật khẩu để AI nhớ giúp Nam.",ok:0,r:"Không bao giờ nhập mật khẩu vào AI!"}],
  hint:"Che thông tin cá nhân, chỉ hỏi nội dung cần giúp.",why:"Khi dùng AI: che thông tin cá nhân, chỉ hỏi kiến thức/bài tập."},
 dd11:{t:'cloze',q:"Điền vào chỗ trống: dùng Gen AI",text:"Không dùng AI để [[mạo danh]]. Nội dung giống thật vẫn cần [[xác minh]] trước khi dùng.",x:["sao chép"],hint:"Giống thật chưa chắc là thật."},
 x7:{t:'choice',extra:1,q:"**Hồ sơ số tích cực** là hồ sơ như thế nào?",
  o:["Đăng nội dung có ích, lịch sự và trung thực","Tạo hồ sơ giả để nhiều người theo dõi","Đăng bài gây hấn để nổi tiếng","Chép ảnh của người khác mà không ghi tên"],a:[0],
  hint:"Tích cực, lịch sự, trung thực.",why:"Hồ sơ tích cực: đăng nội dung có ích, không gây hấn, là chính mình và tôn trọng bản quyền."},
 x8:{t:'choice',extra:1,q:"Dữ liệu nào **không được** nhập vào chatbot AI? (Chọn 3)",
  o:["Mật khẩu","Số thẻ ngân hàng","Ảnh giấy tờ cá nhân","Một câu hỏi bài tập Toán"],a:[0,1,2],
  hint:"Ba thứ rất riêng tư và nguy hiểm nếu bị lộ.",why:"Mật khẩu, số thẻ/tài khoản và ảnh giấy tờ cá nhân là dữ liệu nhạy cảm. Câu hỏi bài tập thì được phép."},
 x9:{t:'sort',extra:1,q:"Xếp mỗi việc vào cột **Nên** hoặc **Không nên** khi dùng AI:",bins:["✅ Nên","⛔ Không nên"],
  items:[["Hỏi kiến thức, bài tập",0],["Che thông tin cá nhân",0],["Nhập họ tên và địa chỉ nhà",1],["Dùng AI tạo ảnh giả để mạo danh người khác",1]],
  hint:"Việc nào bảo vệ em và người khác thì “Nên”.",why:"Nên hỏi kiến thức/bài tập và che thông tin cá nhân. Không nhập địa chỉ nhà và không dùng AI để mạo danh."},
 x10:{t:'hotspot',extra:1,q:"Chạm vào phần thông tin **không nên** gửi cho AI.",
  html:`<div class="chat"><div class="ch">✦ Tin nhắn gửi AI</div><div class="cb"><div class="bub me">Mình tên
   <button type="button" class="zonesp" data-k="name">Lan Anh, 12 Hoa Sen</button>,
   <button type="button" class="zonesp" data-k="pass">mật khẩu mình là 1234</button>.
   <button type="button" class="zonesp" data-k="hw">Giúp mình giải bài toán 2 + 3 nhé!</button></div></div></div>`,
  keys:["name","pass"],keyText:"Họ tên + địa chỉ nhà, hoặc mật khẩu",
  hint:"Tìm thứ thuộc về em như tên, địa chỉ, mật khẩu.",why:"Họ tên, địa chỉ nhà và mật khẩu là dữ liệu nhạy cảm. Bài toán thì được hỏi."},

 /* ===== Em nói lại (explain it back) ===== */
 exp:{t:'dropdown',q:"🗣️ **Em nói lại:** chọn từ đúng để hoàn thành các câu tóm tắt bài học.",
  rows:[{t:"Danh tính kĩ thuật số là thông tin, tài khoản và {s} hoạt động của em trên Internet.",o:["dấu vết","đồ chơi","bài hát"],a:0},
        {t:"Danh tính {s} liên quan đến học tập và công việc.",o:["nghề nghiệp","cá nhân"],a:0},
        {t:"Danh tính {s} liên quan đến hoạt động riêng tư và giải trí.",o:["cá nhân","nghề nghiệp"],a:0},
        {t:"Em nên giữ hồ sơ chính xác, đầy đủ và luôn được {s}.",o:["cập nhật","xóa đi","bỏ quên"],a:0},
        {t:"Sau khi dùng máy tính của người khác, em phải {s} khỏi các tài khoản.",o:["đăng xuất","chia sẻ","quên mật khẩu"],a:0},
        {t:"Em không nhập {s} vào AI.",o:["mật khẩu và số thẻ","câu hỏi bài tập Toán","tên một môn học"],a:0}],
  hint:"Nhớ lại từng phần: danh tính, hai dạng danh tính, giữ hồ sơ mới, đăng xuất, an toàn với AI.",
  why:"Em đã tóm tắt đúng bài học: dấu vết · nghề nghiệp · cá nhân · cập nhật · đăng xuất · không nhập mật khẩu và số thẻ vào AI."}
};

/* ---- Các chặng trên bản đồ (theo thứ tự bài giảng). L = thẻ học, Q = câu hỏi ---- */
const L=k=>({k:'learn',id:k}), Q_=id=>({k:'q',id});
const STEPS=[
 {n:"Danh tính kĩ thuật số",e:"🆔",items:[L('def'),Q_('dd1'),L('online'),Q_('dd1b'),Q_('s5'),Q_('s6'),Q_('x1')]},
 {n:"Cá nhân & nghề nghiệp",e:"👥",items:[L('two'),Q_('dd2'),L('per'),Q_('dd3'),L('pro'),Q_('dd4'),Q_('s11'),Q_('x2')]},
 {n:"Giữ hồ sơ luôn mới",e:"📝",items:[L('tips'),L('upd'),Q_('dd5'),Q_('s14'),Q_('s15'),Q_('s16'),Q_('s17'),Q_('x3'),Q_('x4')]},
 {n:"Nội dung phù hợp",e:"🎯",items:[L('fit'),Q_('dd6'),Q_('s19'),Q_('s20'),Q_('s21'),Q_('s22'),Q_('x5')]},
 {n:"Bí danh & an toàn",e:"🛡️",items:[L('alias'),Q_('dd7'),Q_('s23'),L('safe'),Q_('dd8'),Q_('s24'),Q_('c1'),Q_('x6')]},
 {n:"Hồ sơ tích cực & AI",e:"🤖",items:[L('pos'),Q_('dd9'),L('noai'),Q_('dd10'),Q_('c2'),L('core'),Q_('dd11'),Q_('x7'),Q_('x8'),Q_('x9'),Q_('x10')]},
 {n:"Tóm tắt & em nói lại",e:"🗣️",kind:'explain',items:[L('sum'),Q_('exp')]},
 {n:"Thẻ nhớ bí mật",e:"🔑",kind:'flash'},
 {n:"Thử thách tổng ôn",e:"🏆",kind:'final'},
 {n:"Kết quả & câu sai",e:"🏅",kind:'results'}
];
/* Thử thách tổng ôn = 11 câu “Vận dụng” cuối bài (slide 30–40) */
const FINAL=['s15','s19','s14','s22','s6','s11','s23','s24','s5','s17','s16'];

/* ---- Thẻ nhớ (mở sau khi xong “Em nói lại”) ---- */
const FLASH=[
 ["Digital Identity","danh tính kĩ thuật số","Thông tin, tài khoản và dấu vết hoạt động của em trên Internet."],
 ["Online identity","danh tính trực tuyến","Hồ sơ trực tuyến và tất cả hoạt động trực tuyến của người dùng."],
 ["Personal digital identity","danh tính kĩ thuật số cá nhân","Liên quan đến hoạt động riêng tư và giải trí. Ví dụ: Facebook."],
 ["Professional digital identity","danh tính kĩ thuật số nghề nghiệp","Liên quan đến học tập và công việc. Ví dụ: LinkedIn."],
 ["Profile","hồ sơ trực tuyến","Trang thông tin về một người trên mạng."],
 ["Alias","bí danh","Tên khác với tên thật, dùng để phân biệt hoặc giữ an toàn."],
 ["Log out","đăng xuất","Thoát khỏi tài khoản sau khi dùng, nhất là trên máy của người khác."],
 ["Digital footprint","dấu chân số","Mọi hành động online đều để lại dấu vết."],
 ["Sensitive data","dữ liệu nhạy cảm","Mật khẩu, số thẻ, ảnh giấy tờ, họ tên + địa chỉ nhà, SĐT."],
 ["Chatbot","trợ lý trò chuyện tự động (AI)","Không nhập dữ liệu nhạy cảm vào chatbot."],
 ["Impersonate","mạo danh","Giả làm người khác. Không dùng AI để mạo danh."],
 ["Verify","xác minh","Kiểm tra lại nội dung giống thật trước khi dùng."]
];

/* ---- Ghi chú cho giáo viên (chỉ hiện trong bảng giáo viên ẩn) ---- */
const ADDED=[
 "Thẻ học “Bí danh”, “Bảo vệ bản thân” và đoạn giải thích “Danh tính trực tuyến” là phần giải thích bổ sung đơn giản.",
 "Slide 28: tiêu đề mục 1 “Kết nối và hạ tầng” không khớp nội dung → đã đổi thành “Dấu vết trực tuyến” [CẦN GIÁO VIÊN XÁC NHẬN]; “ai” → “AI”.",
 "Slide 6: đã sửa lỗi dính chữ “trực tuyếnlà”.",
 "Slide 20, 21: trong file nguồn chỉ có hình, không có đáp án → hiển thị dạng nối; đáp án suy luận.",
 "Thẻ “Tóm tắt bài học” (chặng 7) tổng hợp 6 ý chính, viết ngắn gọn, do em thêm.",
 "Toàn bộ câu “Luyện thêm” (x1–x10), bài kéo thả điền từ (dd1–dd11), 2 chat demo, thẻ nhớ, “Em nói lại” là nội dung bổ sung.",
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
const BOX=[0,1,3,7], DAY=864e5, NSTAR=9;

/* ---------- lưu trữ ---------- */
const KEY='ic3gs6:'+LESSON.id;
const DEF={done:{},pos:{},runs:{},missed:{},badges:{},best:{},flash:[],bestCS:0,reviewed:false,teacher:false,
  set:{theme:'light',fs:20,dys:false,rm:null,snd:true,vi:true,fsAuto:true,mapOpen:true}};
let S=load();
function load(){const d=JSON.parse(JSON.stringify(DEF));try{const j=JSON.parse(localStorage.getItem(KEY)||'null');if(j&&typeof j==='object'){Object.assign(d,j);d.set=Object.assign({},DEF.set,j.set||{});}}catch(e){}return d}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
let cs=0, view='home', cur=0, run=null;

/* ---------- giao diện: chủ đề, cỡ chữ, phông, giảm chuyển động ---------- */
function applySet(){
  const s=S.set, root=document.documentElement;
  root.dataset.theme=s.theme==='light'?'':s.theme;
  root.style.setProperty('--fs',s.fs);
  document.body.classList.toggle('dys',!!s.dys);
  const rm=s.rm==null?(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches):s.rm;
  document.body.classList.toggle('rm',!!rm);
}
const THEMES=[['light','☀️ Sáng'],['dark','🌙 Tối'],['hc','◐ Tối tương phản cao']];

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
  add(THEMES.find(t=>t[0]===S.set.theme)[1].split(' ')[0],'tb',()=>{const i=THEMES.findIndex(t=>t[0]===S.set.theme);S.set.theme=THEMES[(i+1)%3][0];save();applySet();renderBar()},'Đổi chủ đề màu: '+THEMES.find(t=>t[0]===S.set.theme)[1].replace(/^\S+ /,'')).title='Đổi chủ đề: '+THEMES.find(t=>t[0]===S.set.theme)[1].replace(/^\S+ /,'');
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
  <div class="set"><b>🐢 Giảm chuyển động</b><button class="tb ${document.body.classList.contains('rm')?'on':''}" data-tg="rm">${document.body.classList.contains('rm')?'Đang bật':'Đang tắt'}</button></div>
  <div class="set"><b>🔊 Âm thanh</b><button class="tb ${s.snd?'on':''}" data-tg="snd">${s.snd?'Đang bật':'Đang tắt'}</button></div>
  <div class="set"><b>🇻🇳 Hiện nghĩa tiếng Việt của từ tiếng Anh</b><button class="tb ${s.vi?'on':''}" data-tg="vi">${s.vi?'Đang bật':'Đang tắt'}</button></div>
  <div class="set"><b>⛶ Tự động toàn màn hình</b><button class="tb ${s.fsAuto?'on':''}" data-tg="fsAuto">${s.fsAuto?'Đang bật':'Đang tắt'}</button></div>
  <div class="act"><button class="btn" id="cl">Xong</button></div>`,box=>{
    $('#cl',box).onclick=closeModal;
    $$('[data-th]',box).forEach(b=>b.onclick=()=>{s.theme=b.dataset.th;save();applySet();renderBar();openSettings()});
    $$('[data-fs]',box).forEach(b=>b.onclick=()=>{s.fs=Math.min(32,Math.max(16,s.fs+ +b.dataset.fs));save();applySet()});
    $$('[data-tg]',box).forEach(b=>b.onclick=()=>{const k=b.dataset.tg;
      if(k==='rm')s.rm=!document.body.classList.contains('rm');else s[k]=!s[k];
      save();applySet();renderBar();if(k==='vi')render();openSettings()});
  });
}

/* ---------- mở khóa của giáo viên (ẩn) ---------- */
(function(){
  const t=$('#title');let rc=[],hold=null;
  t.addEventListener('contextmenu',e=>{e.preventDefault();const n=Date.now();rc=rc.filter(x=>n-x<700);rc.push(n);if(rc.length>=2){rc=[];teacherOpen()}});
  t.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')return;clearTimeout(hold);hold=setTimeout(()=>{hold=null;teacherOpen()},3000)});
  ['pointerup','pointercancel','pointerleave','pointermove'].forEach(ev=>t.addEventListener(ev,()=>{clearTimeout(hold);hold=null}));
})();
function teacherOpen(){
  if(!S.teacher){S.teacher=true;save();render()}
  const flagged=Object.keys(QS).filter(k=>QS[k].chk);
  modal(`<h2>🧑‍🏫 Bảng giáo viên</h2>
   <p>Đã mở khóa toàn bộ bài trên thiết bị này.</p>
   <h3>Nhảy tới chặng</h3><div class="row" id="tj" style="margin:10px 0 16px"></div>
   <h3>Câu có đáp án suy luận [CẦN GIÁO VIÊN XÁC NHẬN]</h3>
   <ul class="tl">${flagged.map(k=>`<li><b>${k}</b> — ${plain(QS[k].q).slice(0,110)}… <br>→ <span style="color:var(--ok);font-weight:800">${solText(QS[k])}</span></li>`).join('')}</ul>
   <h3>Ghi chú nội dung</h3><ul class="tl">${ADDED.map(a=>`<li>${a}</li>`).join('')}</ul>
   <p class="tl">Trong chế độ này mỗi câu hỏi có thêm nút “👁 Xem đáp án”.</p>
   <div class="act"><button class="btn ghost" id="tlock">🔒 Khóa lại</button><button class="btn" id="tcl">Đóng</button></div>`,box=>{
    STEPS.forEach((st,i)=>{const b=mk('button','tb',st.e+' '+(i+1));b.title=st.n;b.onclick=()=>{closeModal();startStep(i)};$('#tj',box).append(b)});
    $('#tcl',box).onclick=closeModal;
    $('#tlock',box).onclick=()=>{S.teacher=false;save();closeModal();view='home';render()};
  });
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
  else if(view==='flash')flashView(st);
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
    $('#y',box).onclick=()=>{Object.assign(S,{done:{},pos:{},runs:{},missed:{},badges:{},best:{},flash:[],bestCS:0,reviewed:false});cs=0;save();closeModal();view='home';render();toast('Đã xóa. Cùng học lại nào! 🌱')};
  });
}

/* ---------- chạy một chặng ---------- */
function startStep(i,opt={}){
  if(!avail(i)){toast('🔒 Hãy hoàn thành chặng trước nhé!');return}
  const st=STEPS[i];cur=i;closeModal();
  if(st.kind==='results'){view='results';if(S.done[i]==null){S.done[i]=0;save()}return render()}
  if(st.kind==='flash'){view='flash';return render()}
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
function learnCard(Lr,host,next,back){
  const c=mk('section','card learn');
  c.append(mk('h2','say',fmt(Lr.h)));
  (Lr.p||[]).forEach(t=>c.append(mk('p','say',fmt(t))));
  if(Lr.v)c.append(mk('div','vis',VIS[Lr.v]));
  if(Lr.cards&&Lr.list){const w=mk('div','vis');Lr.cards.forEach(x=>w.append(mk('div','srow say',`<span class="e" aria-hidden="true">${x[0]}</span><div><b>${x[1]}</b><div>${fmt(x[2])}</div></div>`)));c.append(w)}
  else if(Lr.cards){const g=mk('div','chips3');Lr.cards.forEach(x=>g.append(mk('div','vc say',`<span class="e">${x[0]}</span><b>${x[1]}</b><small>${fmt(x[2])}</small>`)));const w=mk('div','vis');w.append(g);c.append(w)}
  if(S.set.vi&&Lr.g&&Lr.g.length)c.append(mk('div','gloss',`<b>🇻🇳 Từ tiếng Anh · nghĩa tiếng Việt</b>`+Lr.g.map(x=>`<span class="g"><span class="en">${x[0]}</span> = ${x[1]}</span>`).join('')));
  const a=mk('div','act');
  if(back){const b=mk('button','btn ghost','◀ Trước');b.type='button';b.onclick=back;a.append(b)}
  const n=mk('button','btn','Đã hiểu, tiếp tục ▶');n.type='button';n.onclick=()=>{sfx.tap();next()};a.append(n);
  c.append(a);host.append(c);
}

/* ---------- khung câu hỏi chung ---------- */
const INST={choice:q=>q.a.length>1?`👆 Chọn ${q.a.length} đáp án rồi bấm Kiểm tra`:'👆 Chọn 1 đáp án rồi bấm Kiểm tra',dropdown:()=>'🔽 Chọn đáp án trong mỗi ô',match:()=>'🔗 Chạm một ý bên trái, rồi chạm nhóm bên phải',hotspot:q=>q.multi?`🎯 Chạm vào ${q.keys.length} vị trí trên hình rồi bấm Kiểm tra`:'🎯 Chạm vào một vị trí trên hình',cloze:()=>'🧩 Chạm một từ, rồi chạm chỗ trống (hoặc kéo thả)',sort:()=>'🧩 Chạm một thẻ, rồi chạm ô đúng (hoặc kéo thả)',order:()=>'↕️ Bấm ▲▼, hoặc chạm hai mục để đổi chỗ, hoặc kéo thả',chat:()=>'💬 Chọn câu trả lời của em'};
const TNAME={choice:'Trắc nghiệm',dropdown:'Chọn trong ô',match:'Nối',hotspot:'Chạm vào hình',cloze:'Kéo thả điền từ',sort:'Kéo thả phân loại',order:'Sắp xếp',chat:'Chat demo'};
function ask(id,host,ctx){
  const Q=QS[id],att={n:0,done:false};
  const card=mk('section','card');
  const mult=Q.t==='choice'&&Q.a.length>1;
  card.append(mk('div','qhead',`<span class="tag">${TNAME[Q.t]}${mult?' · nhiều đáp án':''}</span>${Q.extra&&Q.t!=='cloze'?'<span class="tag ex">✨ Luyện thêm</span>':''}${Q.t==='cloze'?'<span class="tag ex">🧩 Điền từ</span>':''}`));
  card.append(mk('div','stem say',fmt(Q.q)));
  card.append(mk('div','inst',INST[Q.t](Q)));
  const B={choice:bChoice,dropdown:bDrop,match:bMatch,hotspot:bHot,cloze:bDnD,sort:bDnD,order:bOrder,chat:bChat}[Q.t](Q,ctx);
  card.append(B.el);
  const hint=mk('div','hint say','<b>💡 Gợi ý:</b> '+fmt(Q.hint||''));hint.hidden=true;
  const fbx=mk('div','fb say');
  const act=mk('div','act');
  const bH=mk('button','btn ghost','💡 Gợi ý');bH.type='button';bH.onclick=()=>{hint.hidden=!hint.hidden;deco(card)};
  const bC=mk('button','btn','✔ Kiểm tra');bC.type='button';
  const bS=mk('button','btn warn','👁 Xem đáp án');bS.type='button';bS.hidden=true;
  const bT=mk('button','btn warn','👁 Xem đáp án (GV)');bT.type='button';bT.hidden=!S.teacher;
  const bR=mk('button','btn ghost','🔁 Làm lại');bR.type='button';bR.hidden=true;
  const bN=mk('button','btn','Tiếp tục ▶');bN.type='button';bN.hidden=true;
  const bB=ctx.back?mk('button','btn ghost','◀ Trước'):null;if(bB)bB.type='button';
  act.append(...[bB,bH,bC,bS,bT,bR,bN].filter(Boolean));
  card.append(hint,fbx,act);host.append(card);
  const fb=(k,h)=>{fbx.className='fb show say '+k;fbx.innerHTML=h;deco(card)};
  const showWhy=pre=>fb('ok',`<span class="ico ok" aria-hidden="true">✔</span><b>${pre}</b><div style="margin-top:8px"><b>Đáp án:</b> ${solText(Q)}</div>${Q.why?`<div style="margin-top:8px"><b>Giải thích:</b> ${fmt(Q.why)}</div>`:''}`);
  const finish=()=>{if(ctx.markDone)ctx.markDone();att.done=true;bC.hidden=true;bS.hidden=true;bT.hidden=true;bR.hidden=false;bN.hidden=false;bN.focus&&bN.focus()};
  bC.onclick=()=>{
    if(att.done)return;
    const r=B.check();
    if(r.incomplete){fb('info','ℹ️ '+r.incomplete);return}
    att.n++;
    if(att.n===1)ctx.onFirst&&ctx.onFirst(r.ok);
    if(r.ok){sfx.ok();showWhy(pick(GOOD));finish()}
    else{sfx.no();fb('no',`<span class="ico no" aria-hidden="true">✖</span><b>${pick(BAD)}</b>${r.extra?`<div style="margin-top:8px">${r.extra}</div>`:''}`);if(att.n>=2)bS.hidden=false}
  };
  bS.onclick=()=>{B.solve();showWhy('Đây là đáp án đúng, em đọc kĩ nhé!');finish()};
  bT.onclick=()=>{B.solve();showWhy('Đáp án (chế độ giáo viên).');finish()};
  bR.onclick=()=>{sfx.tap();host.innerHTML='';ask(id,host,Object.assign({},ctx,{shuffle:true,solved:false,mem:null}));deco(host)};
  if(ctx.mem&&ctx.mem.state){try{B.setState(ctx.mem.state)}catch(e){}att.n=ctx.mem.n||0;if(att.n>=2)bS.hidden=false}
  if(ctx.reg)ctx.reg(()=>({state:B.getState(),n:att.n}));
  if(ctx.solved){B.solve();showWhy('Em đã hoàn thành câu này. Đây là kết quả:');finish()}
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
  const sel=new Set(),btns=[],el=mk('div','opts say');el.dataset.say=Q.o.map((t,i)=>plain(t)).join('. ');
  el.setAttribute('role',multi?'group':'radiogroup');let lock=false;
  const paint=()=>btns.forEach(([b,oi])=>{const on=sel.has(oi);b.classList.toggle('sel',on);b.setAttribute('aria-checked',on);$('.mk',b).textContent=multi?(on?'☑':'☐'):(on?'◉':'◯')});
  const clear=()=>btns.forEach(([b])=>{b.classList.remove('good','bad');$('.res',b).innerHTML=''});
  idx.forEach(oi=>{const b=mk('button','opt',`<span class="mk">${multi?'☐':'◯'}</span><span class="tx">${fmt(Q.o[oi])}</span><span class="res"></span>`);
    b.type='button';b.setAttribute('role',multi?'checkbox':'radio');b.setAttribute('aria-checked','false');
    b.onclick=()=>{if(lock)return;sfx.tap();if(multi){sel.has(oi)?sel.delete(oi):sel.add(oi)}else{sel.clear();sel.add(oi)}clear();paint()};
    btns.push([b,oi]);el.append(b)});
  const mark=(b,ok)=>{b.classList.add(ok?'good':'bad');$('.res',b).innerHTML=ok?'<span class="ico ok">✔</span>':'<span class="ico no">✖</span>'};
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
  const mark=(k,ok)=>{const[r,res]=rowEls[k];r.classList.add(ok?'good':'bad');res.innerHTML=ok?'<span class="ico ok">✔</span>':'<span class="ico no">✖</span>'};
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
      $('.to',b).innerHTML=(pairs[i]!=null?'→ '+Q.r[pairs[i]]:'')+(marks?(marks[i]?' <span class="ico ok">✔</span>':' <span class="ico no">✖</span>'):'')});
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
    const b=mk('button','chip'+(sel===c.id?' sel':'')+(c.m?' '+c.m:''),c.t+(c.m==='good'?' <span class="ico ok">✔</span>':c.m==='bad'?' <span class="ico no">✖</span>':''));
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
  let sel=null,marks=null,locked=false,drag=null;const ol=mk('ol','ord');
  const swap=(a,b)=>{[arr[a],arr[b]]=[arr[b],arr[a]]};
  function paint(){
    ol.innerHTML='';
    arr.forEach((oi,pos)=>{
      const li=mk('li','orow'+(sel===pos?' sel':'')+(marks?(marks[pos]?' good':' bad'):''));li.draggable=!locked;
      li.append(mk('span','num',pos+1),mk('span','tx',fmt(Q.items[oi])));
      if(marks)li.append(mk('span','ico '+(marks[pos]?'ok':'no'),marks[pos]?'✔':'✖'));
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
  paint();
  return{el:ol,check(){marks=arr.map((v,i)=>v===i);const ok=marks.every(Boolean);if(ok)locked=true;paint();return{ok}},
   solve(){arr=Q.items.map((_,i)=>i);marks=arr.map(()=>true);locked=true;paint()},
   getState:()=>[...arr],setState(a){arr=[...a];paint()}};
}

/* ---------- 7) chat demo ---------- */
function bChat(Q,ctx){
  const el=mk('div');
  const chat=mk('div','chat');chat.append(mk('div','ch say','💬 '+Q.who));
  const cb=mk('div','cb');chat.append(cb);
  const bub=(m,cls)=>{const b=mk('div','bub '+(cls||(m.f==='me'?'me':'')),(m.n?`<small>${m.n}</small>`:'')+m.t);cb.append(b);return b};
  Q.msgs.forEach(m=>bub(m));
  el.append(chat,mk('div','inst','Em chọn:'));
  const inner=bChoice({o:Q.o.map(x=>x.t),a:[Q.o.findIndex(x=>x.ok)]},ctx);el.append(inner.el);
  let done=false;
  return{el,check(){
    const r=inner.check();if(r.incomplete)return r;
    const i=[...inner.sel][0];
    if(r.ok&&!done){done=true;bub({f:'me',n:'Em',t:Q.o[i].t});bub({f:'them',n:Q.who.split('·').pop().trim(),t:Q.o[i].r})}
    else if(!r.ok)r.extra='Điều có thể xảy ra: '+Q.o[i].r;
    return r},
   solve(){inner.solve();if(!done){done=true;const g=Q.o.find(x=>x.ok);bub({f:'me',n:'Em',t:g.t});bub({f:'them',n:Q.who.split('·').pop().trim(),t:g.r})}},
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
    if(S0.kind==='explain')extra=`<div class="banner say"><b>🔑 Em vừa tìm ra chìa khóa bí mật!</b> Thẻ nhớ bí mật đã được mở khóa.</div>`;
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

/* ---------- thẻ nhớ ---------- */
function flashView(st){
  const col=mk('div','col'),seen=new Set(S.flash);
  col.innerHTML=`<section class="card"><h2 class="say">🔑 Thẻ nhớ bí mật</h2><p class="say">Chạm vào thẻ để lật. Lật hết các thẻ để hoàn thành chặng này.</p><span class="pill" id="fcnt"></span></section>`;
  const g=mk('div','fcs');col.append(g);st.append(col);
  const done=mk('div','act');col.append(done);
  const upd=()=>{$('#fcnt',col).textContent=`Đã lật ${seen.size}/${FLASH.length}`;done.innerHTML='';
    if(seen.size>=FLASH.length){const b=mk('button','btn','✔ Hoàn thành thẻ nhớ');b.type='button';b.onclick=()=>{S.done[7]=Math.max(S.done[7]||0,3);S.flash=[...seen];save();checkBadges();sfx.win();toast('⭐⭐⭐ Em đã xem hết thẻ nhớ!');startStep(8)};done.append(b)}};
  FLASH.forEach((f,i)=>{
    const c=mk('div','fcard'+(seen.has(i)?' seen':''));c.tabIndex=0;c.setAttribute('role','button');let back=false;
    const draw=()=>{c.className='fcard'+(back?' back':'')+(seen.has(i)?' seen':'');
      c.innerHTML=back?`<div class="say"><b>🇻🇳 ${f[1]}</b><br>${f[2]}</div>`:`<div class="say"><span class="en">${f[0]}</span></div><small>Chạm để lật</small>`;
      if(back)c.firstChild.dataset.say=f[1]+'. '+f[2];else c.firstChild.dataset.say=f[0];
      deco(c)};
    const flip=()=>{back=!back;if(back){seen.add(i);S.flash=[...seen];save();upd()}sfx.tap();draw()};
    c.onclick=flip;c.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flip()}};
    draw();g.append(c);
  });
  upd();
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
  g('#rv',startReview);g('#rf',()=>startStep(8,{shuffle:true}));g('#rs',resetAll);g('#hm',()=>{view='home';render()});
}

/* ---------- khởi động ---------- */
applySet();
if('speechSynthesis' in window){try{speechSynthesis.onvoiceschanged=findVoice}catch(e){}findVoice();setTimeout(findVoice,1200)}else{voiceReady=true}
render();checkBadges();
