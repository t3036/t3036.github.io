/* ---------- tiện ích ---------- */
const $ = (s, r=document) => r.querySelector(s);
const el = (html) => { const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; };
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]} return a };
const stars = n => '⭐'.repeat(n) + '☆'.repeat(3-n);

const LESSON_NAME="Nguồn thông tin tin cậy";
const THEORY=[{"i": "📰", "h": "Tiêu đề trang", "t": "Tiêu đề cho biết trang <b>nói về điều gì</b>. Tiêu đề tốt thì rõ ràng, đúng chủ đề.", "e": "“Tổng quan về rừng mưa nhiệt đới – National Geographic Kids”."}, {"i": "✍️", "h": "Tác giả (Author)", "t": "Tác giả là <b>người viết bài</b>. Hãy hỏi: người này có hiểu biết về chủ đề không?", "e": "Muốn biết thêm về người viết, nhấp vào “Tác giả (Author)”."}, {"i": "🏢", "h": "Nhà xuất bản (Publisher)", "t": "Là nơi <b>đăng</b> bài, như báo, trường học, bảo tàng. Nơi đăng uy tín thì thông tin đáng tin hơn.", "e": "National Geographic Kids là nhà xuất bản uy tín."}, {"i": "📅", "h": "Ngày cập nhật & mục đích", "t": "Thông tin <b>mới</b> thường tốt hơn. Trang để <b>dạy học</b> đáng tin hơn trang chỉ bán hàng hay giật gân.", "e": "Trang không có ngày, nhiều quảng cáo → cần cẩn thận."}, {"i": "⚖️", "h": "Kiểm chứng nhiều nguồn", "t": "Đừng tin chỉ một nguồn. Tìm thêm <b>2–3 nguồn uy tín</b>. Nếu cùng nói một điều thì đáng tin.", "e": "Sách giáo khoa và bách khoa toàn thư cùng nói → tin được."}, {"i": "🤖", "h": "Thông tin do AI tạo ra", "t": "AI trả lời nhanh nhưng <b>có thể sai</b>. Hãy kiểm tra tên, địa điểm, số liệu trên nguồn uy tín.", "e": "AI nói rừng Amazon ở châu Phi → sai! Nó ở Nam Mỹ."}, {"i": "🙋", "h": "Khi nào hỏi giáo viên?", "t": "Hãy hỏi giáo viên khi: nội dung <b>không phù hợp</b>; hai nguồn <b>nói khác nhau</b>; trang xin <b>thông tin cá nhân</b>.", "e": "Không tự ý nhập tên, địa chỉ nhà lên trang Web."}];
const QUIZ=[{"q": "Tiêu đề trang (Page Title) của một trang Web có ý nghĩa quan trọng trong việc xác định tính tin cậy của nó vì:", "o": ["Hiển thị thông tin về tác giả của trang Web.", "Phản ánh được nội dung chính của trang Web.", "Đánh giá được chất lượng của trang Web.", "Xác định được số lượng người truy cập trang Web."], "a": 1, "why": "Tiêu đề trang tóm tắt nội dung chính. Tiêu đề rõ ràng, phù hợp thì trang đáng tin hơn."}, {"q": "Em đang đọc một bài viết trên trang Web. Bên dưới bài viết đó có nhiều đường liên kết cung cấp thêm thông tin ngoài. Em nên nhấp vào liên kết nào để tìm hiểu về người viết bài báo?", "o": ["Tác giả (Author)", "Điều khoản sử dụng (Terms of Use)", "Chính sách quyền riêng tư (Privacy Policy)", "Phiên bản di động (Mobile Version)"], "a": 0, "why": "Liên kết “Tác giả (Author)” cho biết về người viết bài."}, {"q": "Câu hỏi nào dưới đây hữu ích khi tìm hiểu về tác giả của một trang Web để xác định tính đáng tin cậy của thông tin?", "o": ["Tác giả có bằng cấp chuyên môn đúng với nội dung thông tin không?", "Tác giả có thú vị không?", "Tác giả có nhiều người theo dõi trên mạng xã hội không?", "Tác giả có yêu thú cưng không?"], "a": 0, "why": "Cần xem tác giả có chuyên môn đúng với nội dung hay không."}, {"q": "Tại sao việc xác định tác giả (Author) của một trang Web là quan trọng để đảm bảo tính đáng tin cậy của thông tin?", "o": ["Để biết tên của tác giả.", "Để đảm bảo tính chuyên môn của thông tin.", "Để biết tác giả có nổi tiếng không.", "Để biết tác giả có nhiều người đọc không."], "a": 1, "why": "Tác giả là chuyên gia thì nội dung mới có cơ sở đáng tin."}, {"q": "Khi đánh giá tính đáng tin cậy của một trang Web, việc tìm hiểu về nhà xuất bản (Publisher) hỗ trợ bằng cách nào?", "o": ["Xác định nội dung chính của trang Web.", "Đánh giá sự phù hợp của tiêu đề trang.", "Đảm bảo tính đáng tin cậy và uy tín của thông tin.", "Xác định tác giả của trang Web."], "a": 2, "why": "Nhà xuất bản uy tín thì thông tin thường được kiểm duyệt kỹ hơn."}, {"q": "AI đưa ra một con số. Em nên làm gì?", "o": ["Tin ngay", "Kiểm tra lại trên nguồn uy tín", "Chép vào bài luôn", "Bỏ qua"], "a": 1, "why": "AI có thể sai, nhất là với tên riêng và số liệu."}, {"q": "Một trang xin em nhập <b>địa chỉ nhà</b> để nhận quà. Em nên:", "o": ["Nhập luôn để nhận quà", "Dừng lại và hỏi giáo viên", "Nhờ bạn nhập giúp", "Nhập tên giả"], "a": 1, "why": "Không tự ý đưa thông tin cá nhân lên mạng."}];
const VIS=["<div class=\"vgrid\"><div class=\"win\"><div class=\"wtop\"><span class=\"tl\"><i></i><i></i><i></i></span><div class=\"wtab hl\"><span>🌿</span><span class=\"tt\">Tổng quan về rừng mưa nhiệt đới – National Geographic Kids</span><span class=\"x\">✕</span></div><span class=\"wplus\">＋</span></div><div class=\"wtool\"><span class=\"nv\">←</span><span class=\"nv\">→</span><span class=\"nv\">⟳</span><div class=\"waddr\">🔒 natgeokids.example/rung-mua-nhiet-doi</div><span class=\"nv\">⋮</span></div><div class=\"wpage\"><div class=\"sh\"><b>🌿 NatGeo Kids</b><span>Động vật</span><span>Khoa học</span><span>Trò chơi</span></div><div class=\"hero\">🌴🦜🐒🦋</div><div class=\"art\"><h4>Rừng mưa nhiệt đới là gì?</h4><span class=\"by\">Tác giả: TS. Lan Anh</span><div class=\"ln\"></div><div class=\"ln\"></div><div class=\"ln s\"></div></div><div class=\"sf\"><div class=\"lk\"><span>Về chúng tôi</span><span>Tác giả (Author)</span><span>Điều khoản</span><span>Quyền riêng tư</span></div><div>© National Geographic Kids</div></div></div></div><div class=\"legend\"><div class=\"lg\"><span class=\"dot\">●</span><div><b>Tiêu đề trang</b>: hiện trên thẻ của trình duyệt, cho biết trang nói về điều gì.</div></div></div></div>", "<div class=\"vgrid\"><div class=\"win\"><div class=\"wtop\"><span class=\"tl\"><i></i><i></i><i></i></span><div class=\"wtab\"><span>🌿</span><span class=\"tt\">Rừng mưa nhiệt đới</span><span class=\"x\">✕</span></div><span class=\"wplus\">＋</span></div><div class=\"wtool\"><span class=\"nv\">←</span><span class=\"nv\">→</span><span class=\"nv\">⟳</span><div class=\"waddr\">🔒 natgeokids.example/rung-mua-nhiet-doi</div><span class=\"nv\">⋮</span></div><div class=\"wpage\"><div class=\"sh\"><b>🌿 NatGeo Kids</b><span>Động vật</span><span>Khoa học</span><span>Trò chơi</span></div><div class=\"hero\">🌴🦜🐒🦋</div><div class=\"art\"><h4>Rừng mưa nhiệt đới là gì?</h4><span class=\"hl\">Tác giả: TS. Lan Anh</span><div class=\"ln\"></div><div class=\"ln\"></div><div class=\"ln s\"></div></div><div class=\"sf\"><div class=\"lk\"><span>Về chúng tôi</span><span class=\"hl\">Tác giả (Author)</span><span>Điều khoản</span><span>Quyền riêng tư</span></div><div>© National Geographic Kids</div></div></div></div><div class=\"legend\"><div class=\"lg\"><span class=\"dot\">●</span><div><b>Tên tác giả</b>: người viết bài.</div></div><div class=\"lg\"><span class=\"dot\">●</span><div>Nhấp <b>“Tác giả (Author)”</b> để biết thêm về người viết.</div></div></div></div>", "<div class=\"vgrid\"><div class=\"win\"><div class=\"wtop\"><span class=\"tl\"><i></i><i></i><i></i></span><div class=\"wtab\"><span>🌿</span><span class=\"tt\">Rừng mưa nhiệt đới</span><span class=\"x\">✕</span></div><span class=\"wplus\">＋</span></div><div class=\"wtool\"><span class=\"nv\">←</span><span class=\"nv\">→</span><span class=\"nv\">⟳</span><div class=\"waddr\">🔒 natgeokids.example/rung-mua-nhiet-doi</div><span class=\"nv\">⋮</span></div><div class=\"wpage\"><div class=\"sh\"><b>🌿 NatGeo Kids</b><span>Động vật</span><span>Khoa học</span><span>Trò chơi</span></div><div class=\"hero\">🌴🦜🐒🦋</div><div class=\"art\"><h4>Rừng mưa nhiệt đới là gì?</h4><span class=\"by\">Tác giả: TS. Lan Anh</span><div class=\"ln\"></div><div class=\"ln\"></div><div class=\"ln s\"></div></div><div class=\"sf\"><div class=\"lk\"><span>Về chúng tôi</span><span>Tác giả (Author)</span><span>Điều khoản</span><span>Quyền riêng tư</span></div><div><span class=\"hl\">© National Geographic Kids</span></div></div></div></div><div class=\"legend\"><div class=\"lg\"><span class=\"dot\">●</span><div><b>Nhà xuất bản</b>: nơi đăng bài, thường ghi ở cuối trang.</div></div></div></div>", "<div class=\"vcard\"><div class=\"vrow\"><div class=\"vbox ok\"><span class=\"lbl g\">✔ Đáng tin hơn</span><br>📅 Cập nhật 03/2026<br>📚 Trang dạy học</div><div class=\"vbox no\"><span class=\"lbl r\">✘ Cẩn thận</span><br>📅 Không có ngày<br>💸 “SỐC! Mua ngay!!!”</div></div></div>", "<div class=\"vcard\"><div class=\"vrow\"><div class=\"vbox ok\">📖 Bách khoa trẻ em<br><b>✔ Cá voi xanh lớn nhất</b></div><div class=\"vbox ok\">📘 Sách khoa học lớp 4<br><b>✔ Cá voi xanh lớn nhất</b></div><div class=\"vbox no\">💬 Blog không rõ tác giả<br><b>✘ Voi lớn nhất</b></div></div><div class=\"cap\">2 nguồn uy tín khớp nhau → tin được</div></div>", "<div class=\"vcard\"><div class=\"steps\"><div class=\"st vbox no\">🤖 AI nói:<br>“Rừng Amazon ở <b>châu Phi</b>”</div><div class=\"ar\">→ kiểm tra →</div><div class=\"st vbox ok\">📚 Trang uy tín:<br>Amazon ở <b>Nam Mỹ</b> ✔</div></div></div>", "<div class=\"vcard\"><div class=\"vrow\"><div class=\"vbox\">😨<br>Nội dung đáng sợ</div><div class=\"vbox\">⚖️<br>Hai nguồn nói khác nhau</div><div class=\"vbox\">🔒<br>Trang xin tên, địa chỉ</div></div><div class=\"arrow\">↓</div><div class=\"vbox ok\"><b>🙋 Dừng lại và hỏi giáo viên</b></div></div>"];
const PRACT=[[{"q": "Tiêu đề nào <b>tốt</b>, tiêu đề nào <b>đáng nghi</b>?", "lab": ["Tiêu đề tốt", "Đáng nghi"], "tf": ["Rừng mưa nhiệt đới là gì? – National Geographic Kids", "SỐC!!! Không thể tin nổi!!!", "Cá voi xanh – Bách khoa trẻ em"], "a": [true, false, true], "why": "Tiêu đề tốt rõ ràng, đúng chủ đề. Tiêu đề giật gân là dấu hiệu đáng nghi.", "ex": [null, null, null]}, {"q": "Tiêu đề trang (Page Title) của một trang Web có ý nghĩa quan trọng trong việc xác định tính tin cậy của nó vì:", "o": ["Hiển thị thông tin về tác giả của trang Web.", "Phản ánh được nội dung chính của trang Web.", "Đánh giá được chất lượng của trang Web.", "Xác định được số lượng người truy cập trang Web."], "a": 1, "why": "Tiêu đề trang tóm tắt nội dung chính. Tiêu đề rõ ràng, phù hợp thì trang đáng tin hơn."}], [{"q": "Chạm vào <b>tên tác giả</b>.", "html": "<div class=\"win\"><div class=\"wtop\"><span class=\"tl\"><i></i><i></i><i></i></span><div class=\"wtab\"><span>🌿</span><span class=\"tt\">Rừng mưa nhiệt đới</span><span class=\"x\">✕</span></div><span class=\"wplus\">＋</span></div><div class=\"wtool\"><span class=\"nv\">←</span><span class=\"nv\">→</span><span class=\"nv\">⟳</span><div class=\"waddr\">🔒 natgeokids.example/rung-mua-nhiet-doi</div><span class=\"nv\">⋮</span></div><div class=\"wpage\"><div class=\"sh\"><b>🌿 NatGeo Kids</b><span>Động vật</span><span>Khoa học</span><span>Trò chơi</span></div><div class=\"hero\">🌴🦜🐒🦋</div><div class=\"art\"><div class=\"tapz\" data-k=\"t\"><h4>Rừng mưa nhiệt đới là gì?</h4></div><div class=\"tapz\" data-k=\"au\"><span class=\"by\">Tác giả: TS. Lan Anh</span></div><div class=\"tapz\" data-k=\"d\"><span class=\"by\">Cập nhật: 03/2026</span></div><div class=\"ln\"></div><div class=\"ln\"></div><div class=\"ln s\"></div></div><div class=\"sf\"><div class=\"tapz\" data-k=\"f\">© National Geographic Kids</div></div></div></div>", "key": "au", "why": "Tên tác giả thường nằm ngay dưới tiêu đề bài viết."}, {"q": "Em đang đọc một bài viết trên trang Web. Bên dưới bài viết đó có nhiều đường liên kết cung cấp thêm thông tin ngoài. Em nên nhấp vào liên kết nào để tìm hiểu về người viết bài báo?", "o": ["Tác giả (Author)", "Điều khoản sử dụng (Terms of Use)", "Chính sách quyền riêng tư (Privacy Policy)", "Phiên bản di động (Mobile Version)"], "a": 0, "why": "Liên kết “Tác giả (Author)” cho biết về người viết bài."}, {"q": "Câu hỏi nào dưới đây hữu ích khi tìm hiểu về tác giả của một trang Web để xác định tính đáng tin cậy của thông tin?", "o": ["Tác giả có bằng cấp chuyên môn đúng với nội dung thông tin không?", "Tác giả có thú vị không?", "Tác giả có nhiều người theo dõi trên mạng xã hội không?", "Tác giả có yêu thú cưng không?"], "a": 0, "why": "Cần xem tác giả có chuyên môn đúng với nội dung hay không."}, {"q": "Tại sao việc xác định tác giả (Author) của một trang Web là quan trọng để đảm bảo tính đáng tin cậy của thông tin?", "o": ["Để biết tên của tác giả.", "Để đảm bảo tính chuyên môn của thông tin.", "Để biết tác giả có nổi tiếng không.", "Để biết tác giả có nhiều người đọc không."], "a": 1, "why": "Tác giả là chuyên gia thì nội dung mới có cơ sở đáng tin."}], [{"q": "Chạm vào <b>nhà xuất bản</b>.", "html": "<div class=\"win\"><div class=\"wtop\"><span class=\"tl\"><i></i><i></i><i></i></span><div class=\"wtab\"><span>🌿</span><span class=\"tt\">Rừng mưa nhiệt đới</span><span class=\"x\">✕</span></div><span class=\"wplus\">＋</span></div><div class=\"wtool\"><span class=\"nv\">←</span><span class=\"nv\">→</span><span class=\"nv\">⟳</span><div class=\"waddr\">🔒 natgeokids.example/rung-mua-nhiet-doi</div><span class=\"nv\">⋮</span></div><div class=\"wpage\"><div class=\"sh\"><b>🌿 NatGeo Kids</b><span>Động vật</span><span>Khoa học</span><span>Trò chơi</span></div><div class=\"hero\">🌴🦜🐒🦋</div><div class=\"art\"><div class=\"tapz\" data-k=\"t\"><h4>Rừng mưa nhiệt đới là gì?</h4></div><div class=\"tapz\" data-k=\"au\"><span class=\"by\">Tác giả: TS. Lan Anh</span></div><div class=\"ln\"></div><div class=\"ln\"></div><div class=\"ln s\"></div></div><div class=\"sf\"><div class=\"tapz\" data-k=\"f\">© National Geographic Kids</div></div></div></div>", "key": "f", "why": "Nhà xuất bản thường ghi ở cuối trang."}, {"q": "Khi đánh giá tính đáng tin cậy của một trang Web, việc tìm hiểu về nhà xuất bản (Publisher) hỗ trợ bằng cách nào?", "o": ["Xác định nội dung chính của trang Web.", "Đánh giá sự phù hợp của tiêu đề trang.", "Đảm bảo tính đáng tin cậy và uy tín của thông tin.", "Xác định tác giả của trang Web."], "a": 2, "why": "Nhà xuất bản uy tín thì thông tin thường được kiểm duyệt kỹ hơn."}], [{"q": "Dấu hiệu nào <b>đáng tin hơn</b>, dấu hiệu nào <b>cần cẩn thận</b>?", "lab": ["Đáng tin hơn", "Cần cẩn thận"], "tf": ["Cập nhật 03/2026", "Không có ngày đăng", "Trang dạy học cho trẻ em", "“SỐC! Mua ngay!!!”"], "a": [true, false, true, false], "why": "Thông tin mới và có mục đích dạy học thì đáng tin hơn.", "ex": [null, null, null, null]}, {"q": "Trang nào đáng tin hơn?", "o": ["Không có ngày, toàn quảng cáo", "Có ngày cập nhật gần đây và dạy kiến thức", "Chỉ có chữ “Mua ngay!”", "Tiêu đề toàn dấu chấm than"], "a": 1, "why": "Thông tin mới và có mục đích dạy học thì đáng tin hơn."}], [{"q": "Việc nào <b>nên</b> và <b>không nên</b> khi kiểm tra một thông tin?", "lab": ["Nên làm", "Không nên"], "tf": ["Tìm thêm 2–3 nguồn uy tín", "Chỉ đọc một trang rồi tin luôn", "So sánh các nguồn với nhau"], "a": [true, false, true], "why": "Nhiều nguồn uy tín cùng nói một điều thì đáng tin.", "ex": [null, null, null]}, {"q": "Để kiểm tra một thông tin, cách tốt nhất là:", "o": ["Chỉ đọc một trang", "Hỏi bạn bên cạnh rồi tin luôn", "Tìm thêm 2–3 nguồn uy tín để so sánh", "Chọn trang có nhiều ảnh"], "a": 2, "why": "Nhiều nguồn uy tín cùng nói một điều thì đáng tin."}], [{"q": "Điều gì của AI cần <b>kiểm tra lại</b>?", "lab": ["Cần kiểm tra", "Ít cần"], "tf": ["Tên riêng và địa điểm", "Con số, số liệu", "Lời chào “Xin chào em!”"], "a": [true, true, false], "why": "AI hay nhầm tên riêng, địa điểm và số liệu.", "ex": [null, null, null]}, {"q": "AI đưa ra một con số. Em nên làm gì?", "o": ["Tin ngay", "Kiểm tra lại trên nguồn uy tín", "Chép vào bài luôn", "Bỏ qua"], "a": 1, "why": "AI có thể sai, nhất là với tên riêng và số liệu."}], [{"q": "Tình huống nào em nên <b>hỏi giáo viên</b>?", "lab": ["Hỏi giáo viên", "Tự xử lí được"], "tf": ["Hình ảnh đáng sợ hiện ra", "Trang xin địa chỉ nhà", "3 nguồn uy tín nói giống nhau", "2 nguồn nói khác nhau"], "a": [true, true, false, true], "why": "Nội dung không phù hợp, xin thông tin cá nhân hoặc nguồn mâu thuẫn thì hỏi giáo viên.", "ex": [null, null, null, null]}, {"q": "Một trang xin em nhập <b>địa chỉ nhà</b> để nhận quà. Em nên:", "o": ["Nhập luôn để nhận quà", "Dừng lại và hỏi giáo viên", "Nhờ bạn nhập giúp", "Nhập tên giả"], "a": 1, "why": "Không tự ý đưa thông tin cá nhân lên mạng."}]];
const MISSIONS = [
{icon:"📖",label:"Học bài",run:theory,steps:["Chạm vào một thẻ để <b>lật</b> và đọc.", "Đọc xong, bấm <b>“Em đã hiểu ✓”</b>.", "Một <b>cửa sổ bài tập nhỏ</b> sẽ hiện ra. Trả lời đúng để <b>mở khóa</b> thẻ tiếp theo 🔓.", "Mở hết các thẻ rồi sang phần luyện tập."],tip:"Em có thể chạm vào thẻ đã đọc để đọc lại."},
{icon:"📰",label:"Điều tra trang web",run:m4,steps:["Đọc <b>yêu cầu của thám tử trưởng</b> trong khung màu xanh.", "<b>Chạm vào đúng phần</b> của trang Web chứa manh mối (tiêu đề ở thanh trên cùng, tác giả và ngày dưới tiêu đề bài, nhà xuất bản ở cuối trang…).", "Nếu đúng, phần đó chuyển sang màu xanh lá kèm lời giải thích. Nếu sai, hãy nhìn kỹ lại.", "Sau khi tìm đủ 5 manh mối, <b>chọn Trang A hoặc Trang B</b> là trang đáng tin hơn."],tip:"5 tiêu chí: Tiêu đề · Tác giả · Nhà xuất bản · Ngày cập nhật · Mục đích."},
{icon:"⚖️",label:"Đối chiếu nguồn",run:m5,steps:["Đọc <b>tuyên bố</b> trong khung viền xanh.", "Đọc từng nguồn. Chọn <b>Khớp</b> nếu nguồn nói giống tuyên bố, chọn <b>Khác</b> nếu nói khác.", "Bấm <b>Kiểm tra phiếu bầu</b>. Nguồn viền xanh là đúng, viền đỏ là chưa đúng.", "Chọn <b>kết luận</b> hợp lí nhất."],tip:"Đừng chỉ tin một nguồn. Nhiều nguồn uy tín cùng nói một điều thì đáng tin hơn."},
{icon:"🤖",label:"Kiểm tra AI",run:m6,steps:["Đọc câu trả lời của chatbot AI.", "<b>Chạm vào câu</b> em thấy cần kiểm tra lại – câu đó sẽ có nền vàng. Chạm lần nữa để bỏ chọn.", "Bấm <b>Kiểm tra</b>. Nếu chưa đúng, đọc gợi ý rồi thử lại.", "Đọc <b>bảng kiểm 5 câu hỏi</b> xuất hiện bên dưới.", "Với mỗi tình huống, chọn <b>Hỏi giáo viên</b> hoặc <b>Tự xử lí được</b>."],tip:"AI trả lời rất tự tin nhưng có thể sai. Hãy chú ý tên riêng, địa điểm và số liệu."}
,{icon:"✅",label:"Trắc nghiệm",run:quiz,steps:["Đọc kỹ câu hỏi.", "Chạm vào đáp án em chọn.", "Đúng: đáp án xanh và có lời giải thích. Sai: đáp án đỏ – hãy chọn lại.", "Bấm <b>“Câu tiếp”</b> để làm tiếp."],tip:"Đọc cả 4 đáp án trước khi chọn."}
];
const state = {cur:0, got:MISSIONS.map(()=>null), intro:true};
try{ const s=JSON.parse(localStorage.getItem('k4b13')||'null'); if(s&&s.got&&s.got.length===MISSIONS.length){ state.got=s.got; state.read=s.read||[]; const f=s.got.findIndex(x=>x===null); state.cur=f<0?MISSIONS.length:f; state.intro=state.cur===0; } }catch(e){}
let TEACH=false; try{ TEACH=localStorage.getItem('k4b13_teach')==='1'; }catch(e){}
function save(){ try{localStorage.setItem('k4b13',JSON.stringify({got:state.got,read:state.read||[]}))}catch(e){} }

function restart(force){
  if(!force && !confirm('Em muốn làm lại từ đầu? Tiến độ đã lưu sẽ bị xóa.')) return;
  state.got=MISSIONS.map(()=>null); state.read=[]; state.cur=0; state.intro=true; save(); render();
}
function renderMap(){
  const map=$('#map'); map.innerHTML='';
  MISSIONS.forEach((m,i)=>{
    const unlocked = TEACH || i===0 || state.got[i-1]!==null;
    const b=el(`<button ${unlocked?'':'disabled'} class="${state.got[i]!==null?'done':''} ${i===state.cur&&!state.intro?'cur':''}"><span class="n">${state.got[i]!==null?'✅':m.icon}</span><span class="l">${m.label}</span></button>`);
    b.onclick=()=>{state.cur=i;state.intro=false;render()};
    map.appendChild(b);
  });
  $('#starCount').textContent = state.got.reduce((a,b)=>a+(b||0),0);
}
function render(){
  renderMap();
  const hw=$('#howto'), lay=$('#layout'), cm=MISSIONS[state.cur];
  if(state.intro||!cm){ hw.style.display='none'; lay.classList.add('solo'); }
  else { lay.classList.remove('solo'); hw.style.display='';
    hw.innerHTML='<h3>📝 Cách làm bài</h3><ol>'+cm.steps.map(x=>'<li>'+x+'</li>').join('')+'</ol><p class="tip">💡 '+cm.tip+'</p>'; }
  const st=$('#stage'); st.innerHTML='';
  window.scrollTo({top:0,behavior:'smooth'});
  if(state.intro) return intro(st);
  if(state.cur>=MISSIONS.length) return finale(st);
  MISSIONS[state.cur].run(st);
}
function brief(icon,title,text){
  return `<div class="brief"><div class="bh"><span class="badge">${icon}</span><h2>${title}</h2></div><p>${text}</p></div>`;
}
function fb(node,kind,html){ node.className='fb show '+kind; node.innerHTML=html; }
function finish(st,stars_,box){
  // lưu kết quả và hiện nút tiếp tục
  const prev = state.got[state.cur];
  state.got[state.cur] = Math.max(prev||0, stars_);
  save(); renderMap();
  const last = state.cur===MISSIONS.length-1;
  box.insertAdjacentHTML('beforeend',`<div class="row" style="margin-top:14px;justify-content:space-between"><b>Kết quả: ${stars(stars_)}</b><button class="btn orange" id="next">${last?'Xem hồ sơ thám tử 🏅':'Nhiệm vụ tiếp theo ▶'}</button></div>`);
  $('#next').onclick=()=>{state.cur++;render()};
}

/* ---------- Câu hỏi dùng chung (1 đáp án, chọn nhiều đáp án, Đúng/Sai) ---------- */
function askQ(Q, host, onWrong, onDone){
  host.innerHTML='<div class="qtext">'+Q.q+'</div><div class="ops"></div><div class="fb"></div>';
  const ops=host.querySelector('.ops'), f=host.querySelector('.fb'); let done=false;
  const win=()=>{ done=true; fb(f,'ok','✔ Đúng rồi! '+(Q.why||'')); onDone(f); };
  const lose=msg=>{ onWrong(); fb(f,'no',msg); };
  if(Q.html){
    ops.innerHTML=Q.html;
    const rb=ops.querySelector('.rbox');
    ops.querySelectorAll('[data-k]').forEach(z=>z.onclick=e=>{ e.stopPropagation(); if(done) return;
      const k=z.dataset.k;
      if(Q.res&&rb){ rb.innerHTML=Q.res[k]||''; ops.querySelectorAll('.gtabs .tapz').forEach(x=>x.classList.remove('cur')); z.classList.add('cur'); }
      if(k===Q.key){ z.classList.add('good'); win(); }
      else if(!z.classList.contains('bad')){ z.classList.add('bad'); lose((Q.hint&&Q.hint[k])||'Chưa đúng, hãy chạm vào chỗ khác.'); }
      else if(Q.hint&&Q.hint[k]) fb(f,'no',Q.hint[k]); });
  } else if(Q.tf){
    const sel=Q.tf.map(()=>null), rows=[]; const LB=Q.lab||['Đúng','Sai'];
    Q.tf.forEach((s,k)=>{
      const r=el('<div class="tfrow"><div class="s">'+s+'</div><button class="chip" data-v="1">'+LB[0]+'</button><button class="chip" data-v="0">'+LB[1]+'</button></div>');
      r.querySelectorAll('.chip').forEach(b=>b.onclick=e=>{ e.stopPropagation(); if(done) return; sel[k]=b.dataset.v==='1';
        r.querySelectorAll('.chip').forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); r.classList.remove('bad'); });
      rows.push(r); ops.appendChild(r); });
    const chk=el('<button class="btn">Kiểm tra</button>'); ops.appendChild(chk);
    chk.onclick=e=>{ e.stopPropagation(); if(done) return;
      if(sel.some(v=>v===null)) return fb(f,'info','Hãy chọn đáp án cho tất cả các dòng.');
      let bad=0; rows.forEach((r,k)=>{ const ok=sel[k]===Q.a[k]; r.classList.toggle('good',ok); r.classList.toggle('bad',!ok); if(!ok) bad++; });
      rows.forEach((r,k)=>{ const o=r.querySelector('.exp'); if(o) o.remove(); });
      rows.forEach((r,k)=>{ if(sel[k]!==Q.a[k]){ r.insertAdjacentHTML('beforeend','<div class="exp">💡 '+((Q.ex&&Q.ex[k])||('Gợi ý: '+(Q.why||'Hãy đọc lại và thử lần nữa.')))+'</div>'); } });
      if(bad) lose('Có '+bad+' dòng chưa đúng (viền đỏ). Hãy đọc giải thích rồi sửa lại.'); else { chk.disabled=true; win(); } };
  } else if(Array.isArray(Q.a)){
    const chosen=new Set();
    Q.o.forEach((t,k)=>{ const b=el('<button class="opt"><b>'+'ABCD'[k]+'.</b> '+t+'</button>');
      b.onclick=e=>{ e.stopPropagation(); if(done) return; chosen.has(k)?chosen.delete(k):chosen.add(k); b.classList.toggle('sel'); b.classList.remove('bad'); };
      ops.appendChild(b); });
    const chk=el('<button class="btn">Kiểm tra</button>'); ops.appendChild(chk);
    chk.onclick=e=>{ e.stopPropagation(); if(done) return;
      if(chosen.size!==Q.a.length) return fb(f,'info','Câu này cần chọn '+Q.a.length+' đáp án.');
      const ok=Q.a.every(k=>chosen.has(k));
      if(ok){ ops.querySelectorAll('.opt').forEach((b,k)=>{ if(chosen.has(k)){ b.classList.remove('sel'); b.classList.add('good'); } }); chk.disabled=true; win(); }
      else { ops.querySelectorAll('.opt').forEach((b,k)=>{ if(chosen.has(k)&&!Q.a.includes(k)) b.classList.add('bad'); }); lose('Chưa đúng. Hãy đọc lại và chọn lại.'); } };
  } else {
    Q.o.forEach((t,k)=>{ const b=el('<button class="opt"><b>'+'ABCD'[k]+'.</b> '+t+'</button>');
      b.onclick=e=>{ e.stopPropagation(); if(done||b.classList.contains('bad')) return;
        if(k===Q.a){ b.classList.add('good'); win(); } else { b.classList.add('bad'); lose('Chưa đúng, hãy chọn lại.'); } };
      ops.appendChild(b); });
  }
}

/* ---------- Học bài (flashcard mở khóa dần) ---------- */
function theory(st){
  const n=THEORY.length; const read=(state.read&&state.read.length===n)?state.read:new Array(n).fill(false); state.read=read;
  st.innerHTML = brief('📖','Học bài: '+LESSON_NAME,'Lật từng thẻ để đọc. Đọc xong bấm “Em đã hiểu”, một cửa sổ bài tập nhỏ sẽ hiện ra. Làm đúng để mở thẻ tiếp theo.')+
    '<div class="prog"><i id="pg" style="width:0"></i></div><div class="cards" id="cards"></div><div class="fb" id="fb"></div>';
  const box=$('#cards'), f=$('#fb');
  const unlockedUpTo=()=>{ if(TEACH) return n; const i=read.indexOf(false); return i<0?n:i; };
  function draw(){
    box.innerHTML='';
    const u=unlockedUpTo();
    THEORY.forEach((c,i)=>{
      const locked=i>u, flipped=box._open===i;
      let d;
      if(locked) d=el('<div class="fc locked"><div class="em">🔒</div><h3>Thẻ '+(i+1)+'</h3><small>Đọc thẻ trước để mở khóa</small></div>');
      else if(flipped){
        d=el('<div class="fc back"><p>'+c.t+'</p><div class="vwrap">'+VIS[i]+'</div><div class="eg">💡 '+c.e+'</div><button class="btn">'+(read[i]?'Đóng thẻ':'Em đã hiểu ✓')+'</button></div>');
        d.querySelector('button').onclick=ev=>{
          ev.stopPropagation(); const btn=ev.currentTarget;
          if(read[i]){ box._open=-1; draw(); return; }
          const list=PRACT[i]; let qn=0;
          const mq=el('<div class="modal-back"><div class="modal"><div class="mh"><span>✏️ Bài tập nhỏ <span class="cnt"></span></span><button class="mx">✕ Quay lại thẻ</button></div><div class="mb"><p class="mi">Em đã đọc xong thẻ “'+c.h+'”. Hãy trả lời để mở thẻ tiếp theo nhé!</p><div class="qhost"></div></div></div></div>');
          const closeM=()=>{ mq.remove(); document.body.style.overflow=''; };
          mq.querySelector('.mx').onclick=closeM;
          const host=mq.querySelector('.qhost');
          const next=()=>{
            mq.querySelector('.cnt').textContent=list.length>1?'(Câu '+(qn+1)+'/'+list.length+')':'';
            askQ(list[qn],host,()=>{},fx=>{
              const last=qn===list.length-1;
              fx.insertAdjacentHTML('beforeend','<div style="margin-top:10px"><button class="btn orange" id="cont">'+(last?'Tiếp tục ▶':'Câu tiếp ▶')+'</button></div>');
              fx.querySelector('#cont').onclick=e3=>{ e3.stopPropagation();
                if(!last){ qn++; next(); } else { closeM(); read[i]=true; save(); box._open=-1; draw(); update(i); } };
            });
          };
          document.body.appendChild(mq); document.body.style.overflow='hidden'; next();
        };
      } else {
        d=el('<div class="fc'+(read[i]?' read':'')+'"><div class="em">'+c.i+'</div><h3>'+c.h+'</h3><small>'+(read[i]?'✔ Đã đọc – chạm để đọc lại':'Chạm để lật thẻ')+'</small></div>');
        d.onclick=()=>{ box._open=i; draw(); };
      }
      box.appendChild(d);
    });
  }
  function update(i){
    const cnt=read.filter(Boolean).length;
    $('#pg').style.width=(cnt/n*100)+'%';
    if(cnt===n){
      fb(f,'ok','🎉 Em đã đọc hết '+n+' thẻ! Sang phần luyện tập nhé.');
      if(state.got[state.cur]===null){ state.got[state.cur]=0; save(); renderMap(); }
      if(!$('#next')) f.insertAdjacentHTML('beforeend','<div style="margin-top:10px"><button class="btn orange" id="next">Sang phần luyện tập ▶</button></div>');
      $('#next').onclick=()=>{state.cur++;render()};
    } else if(i<n-1){
      const t=box.children[i+1]; if(t) t.scrollIntoView({behavior:'smooth',block:'nearest'});
    }
  }
  box._open=-1; draw(); $('#pg').style.width=(read.filter(Boolean).length/n*100)+'%';
}

/* ---------- Trắc nghiệm ---------- */
function quiz(st){
  const qs=shuffle(QUIZ); let qi=0, wrong=0;
  function draw(){
    st.innerHTML = brief('✅','Trắc nghiệm: Câu '+(qi+1)+'/'+qs.length,'Đọc kỹ rồi chọn đáp án đúng.')+
      '<div class="prog"><i style="width:'+(qi/qs.length*100)+'%"></i></div><div id="qh"></div>';
    askQ(qs[qi],$('#qh'),()=>{wrong++},f=>{
      if(qi<qs.length-1){ f.insertAdjacentHTML('beforeend','<div style="margin-top:10px"><button class="btn orange" id="nq">Câu tiếp ▶</button></div>'); $('#nq').onclick=()=>{qi++;draw()}; }
      else { st.insertAdjacentHTML('beforeend','<p style="margin-top:12px"><b>Em đã trả lời xong!</b> Số lần chọn sai: '+wrong+'.</p>'); finish(st,wrong<=1?3:wrong<=4?2:1,st); }
    });
  }
  draw();
}

/* ---------- mở đầu ---------- */
function intro(st){
  st.innerHTML = `
  <div class="final">
    <div class="big">🕵️‍♀️</div>
    <h2 style="font-size:2rem;color:var(--teal-d)">Bài 13: Xác định nguồn thông tin trực tuyến tin cậy</h2>
    <p>Không phải điều gì trên Internet cũng đúng. Em sẽ học, luyện tập và làm trắc nghiệm để biết cách <b>kiểm tra</b> thông tin có đáng tin hay không.</p>
    <div class="recap"><div><b>Em sẽ học</b><br>5 tiêu chí: tiêu đề · tác giả · nhà xuất bản · ngày cập nhật · mục đích</div><div><b>Em sẽ luyện</b><br>Đối chiếu nhiều nguồn · kiểm tra AI · biết khi nào hỏi giáo viên</div><div><b>Cách chơi</b><br>Học bài → 3 nhiệm vụ → Trắc nghiệm.</div></div>
    <p class="tip" style="text-align:left">Em sẽ học qua <b>thẻ flashcard</b>, làm <b>3 nhiệm vụ</b>, rồi làm <b>trắc nghiệm</b>. Phần luyện tập và trắc nghiệm cho tối đa 3 ⭐ mỗi phần. Em trả lời càng ít lần sai thì càng được nhiều sao. Bên trái màn hình luôn có khung <b>“Cách làm bài”</b> hướng dẫn từng bước. Tiến độ được lưu lại trên máy của em.</p>
    <button class="btn" id="go">Bắt đầu ▶</button>
  </div>`;
  $('#go').onclick=()=>{state.intro=false;render()};
}

/* ---------- Nhiệm vụ 1: điều tra trang web ---------- */
function m4(st){
  const clues=[
    {id:'title',q:'Tìm <b>Tiêu đề trang</b> (Page Title) – cho biết nội dung chính của trang.',why:'Tiêu đề phản ánh nội dung chính. Tiêu đề rõ ràng, đúng chủ đề là dấu hiệu tốt.'},
    {id:'author',q:'Tìm <b>Tác giả</b> (Author) – ai đã viết bài này?',why:'Biết tác giả để kiểm tra họ có chuyên môn đúng với nội dung không.'},
    {id:'pub',q:'Tìm <b>Nhà xuất bản</b> (Publisher) – tổ chức nào đăng trang này?',why:'Nhà xuất bản uy tín giúp đảm bảo thông tin đáng tin cậy.'},
    {id:'date',q:'Tìm <b>ngày cập nhật</b> – thông tin còn mới không?',why:'Thông tin cũ có thể đã thay đổi. Ngày cập nhật gần đây thường tốt hơn.'},
    {id:'purpose',q:'Tìm <b>mục đích</b> của trang – trang này muốn làm gì?',why:'Trang giáo dục (để dạy) đáng tin hơn trang chỉ muốn bán hàng hay câu nhấp chuột.'},
  ];
  let i=0, wrong=0, phase=1;
  st.innerHTML = brief('📰','Nhiệm vụ 1: Điều tra trang web','Tìm 5 manh mối trên trang Web để biết trang đó có đáng tin không.')+
  `<div class="clue-q" id="cq"></div>
   <div class="browser"><div class="bar"><span class="dots"><span></span><span></span><span></span></span>
     <div class="urlbox hot" data-id="title" style="border-radius:999px">🌍 Tổng quan về rừng mưa nhiệt đới – National Geographic Kids</div></div>
   <div class="page site">
     <div class="hot" data-id="purpose" style="background:#eef8ee;font-size:1rem;margin-bottom:6px">📚 Trang giáo dục dành cho trẻ em: giúp các em khám phá khoa học và thiên nhiên.</div>
     <h3>Rừng mưa nhiệt đới là gì?</h3>
     <div class="by"><span class="hot" data-id="author">Tác giả: TS. Lan Anh, nhà sinh thái học</span> · <span class="hot" data-id="date">Cập nhật: 03/2026</span></div>
     <p>Rừng mưa nhiệt đới là khu rừng nằm gần đường xích đạo, mưa nhiều quanh năm và là nhà của hàng triệu loài sinh vật…</p>
     <footer class="hot" data-id="pub">© National Geographic Kids – Nhà xuất bản giáo dục khoa học uy tín</footer>
   </div></div><div class="fb" id="fb"></div><div id="after"></div>`;
  const f=$('#fb'), cq=$('#cq');
  const CC=['#0e7c86','#7b4fc4','#d9731a','#2a6fd6','#c2457a'];
  const setClue=()=>{ cq.innerHTML='Manh mối '+(i+1)+'/5: '+clues[i].q; cq.style.background=CC[i%CC.length]; cq.classList.remove('pop'); void cq.offsetWidth; cq.classList.add('pop'); };
  setClue();
  st.querySelectorAll('.hot').forEach(h=>h.onclick=(e)=>{
    e.stopPropagation(); if(phase!==1||h.classList.contains('found')) return;
    if(h.dataset.id===clues[i].id){
      h.classList.add('found'); fb(f,'ok','✔ '+clues[i].why); i++;
      if(i<clues.length) setClue(); else { cq.textContent='Đã tìm đủ 5 manh mối! 🎉'; cq.style.background='#2e9e5b'; cq.classList.remove('pop'); void cq.offsetWidth; cq.classList.add('pop'); phase=2; compare(); }
    } else { wrong++; h.classList.remove('miss'); void h.offsetWidth; h.classList.add('miss'); fb(f,'no','Chưa đúng chỗ, hãy nhìn kỹ lại nhé.'); }
  });
  function compare(){
    const a=$('#after');
    a.innerHTML=`<h3 style="margin-top:18px">Phán quyết: Em có hai trang nói về rừng mưa nhiệt đới. Trang nào đáng tin hơn?</h3>
    <div class="cmp">
      <button class="card" data-v="A"><b>Trang A</b><ul><li>Tiêu đề rõ ràng, đúng chủ đề</li><li>Có tác giả là nhà sinh thái học</li><li>Nhà xuất bản giáo dục uy tín</li><li>Cập nhật 03/2026</li></ul></button>
      <button class="card" data-v="B"><b>Trang B</b><ul><li>Tiêu đề: “SỐC! Điều không ai dám nói!!!”</li><li>Không có tác giả</li><li>Nhiều quảng cáo bật lên</li><li>Không ghi ngày đăng</li></ul></button>
    </div>`;
    let w2=0;
    a.querySelectorAll('.card').forEach(c=>c.onclick=()=>{
      if(c.dataset.v==='A'){ c.classList.add('right'); a.querySelectorAll('.card').forEach(x=>x.onclick=null);
        fb(f,'ok','Chính xác! Trang A đáp ứng cả 5 tiêu chí: tiêu đề – tác giả – nhà xuất bản – ngày cập nhật – mục đích.');
        finish(st,wrong+w2===0?3:wrong+w2<=2?2:1,a);
      } else { w2++; c.classList.add('wrong'); fb(f,'no','Trang B thiếu tác giả, thiếu ngày và có tiêu đề giật gân. Hãy xem lại.'); }
    });
    setTimeout(()=>a.scrollIntoView({behavior:'smooth',block:'nearest'}),1800);
  }
}

/* ---------- Nhiệm vụ 2: đối chiếu nguồn ---------- */
function m5(st){
  const srcs=[
    {n:'Bách khoa toàn thư cho trẻ em',tr:'uy tín',q:'“Cá voi xanh là loài động vật lớn nhất từng được biết đến trên Trái Đất.”',agree:true},
    {n:'Sách Khoa học lớp 4 (nhà xuất bản giáo dục)',tr:'uy tín',q:'“Cá voi xanh có thể dài tới gần 30 mét, là động vật lớn nhất hành tinh.”',agree:true},
    {n:'Blog “Tin Sốc 24h” (không rõ tác giả)',tr:'không rõ',q:'“Voi châu Phi mới là con vật lớn nhất, cá voi xanh chỉ là tin đồn!”',agree:false},
  ];
  const votes={}, ok=new Set(); let wrong=0, concluded=false;
  st.innerHTML = brief('⚖️','Nhiệm vụ 2: Đối chiếu nhiều nguồn','So sánh 3 nguồn để xem tuyên bố có đúng không.')+
  `<div class="claim">📌 Tuyên bố cần kiểm chứng: “Cá voi xanh là động vật lớn nhất thế giới.”</div><div id="list"></div>
   <button class="btn" id="chk">Kiểm tra phiếu bầu</button><div class="fb" id="fb"></div><div id="concl"></div>`;
  const f=$('#fb');
  srcs.forEach((s,i)=>{
    const d=el(`<div class="src"><h3>${['📖','📘','💬'][i]} ${s.n}</h3><div class="q">${s.q}</div><div class="vote"><button class="y">Khớp</button> <button class="n">Khác</button></div></div>`);
    d.querySelectorAll('button').forEach(b=>b.onclick=()=>{ if(concluded) return; votes[i]=b.classList.contains('y');
      d.querySelectorAll('button').forEach(x=>x.className=x.className.replace(' on',''));
      b.classList.add('on'); });
    s._d=d; $('#list').appendChild(d);
  });
  $('#chk').onclick=()=>{
    if(Object.keys(votes).length<3) return fb(f,'info','Hãy bỏ phiếu cho cả 3 nguồn.');
    let bad=0; srcs.forEach((s,i)=>{ const g=votes[i]===s.agree; s._d.classList.remove('right','wrong'); s._d.classList.add(g?'right':'wrong'); if(!g) bad++; });
    if(bad){ wrong++; return fb(f,'no','Có nguồn em chọn chưa đúng (viền đỏ). Hãy đọc lại nội dung của từng nguồn nhé.'); }
    $('#chk').disabled=true; fb(f,'ok','Đã đối chiếu xong: 2 nguồn uy tín <b>khớp nhau</b>, 1 nguồn không rõ tác giả thì <b>khác</b>. Giờ hãy kết luận!');
    const c=$('#concl'); c.innerHTML=`<h3 style="margin-top:16px">Em kết luận thế nào?</h3><div class="row" style="margin-top:8px" id="co"></div>`;
    [['Tin tuyên bố, vì có 2 nguồn uy tín cùng nói như vậy',1],['Tin blog vì bài viết có nhiều dấu chấm than',0],['Không biết gì cả, vì các nguồn không giống nhau',0]].forEach(([t,g])=>{
      const b=el(`<button class="chip">${t}</button>`); b.onclick=()=>{
        if(g){ b.classList.add('good'); c.querySelectorAll('.chip').forEach(x=>x.onclick=null);
          fb(f,'ok','Chính xác! Khi nhiều nguồn <b>uy tín</b> cùng nói một điều, thông tin đáng tin hơn. Nguồn lạ, không tác giả thì cần nghi ngờ.');
          finish(st,wrong===0?3:2,c);
        } else { wrong++; b.classList.add('bad'); fb(f,'no','Hãy xem nguồn nào có tác giả/nhà xuất bản rõ ràng và có nhiều nguồn đồng ý.'); } };
      $('#co').appendChild(b); });
  };
}

/* ---------- Nhiệm vụ 3: kiểm tra AI + hỏi giáo viên ---------- */
function m6(st){
  const sents=[
    {t:'Rừng mưa nhiệt đới là khu rừng có mưa nhiều quanh năm.',bad:false},
    {t:'Rừng Amazon, rừng mưa lớn nhất thế giới, nằm ở châu Phi.',bad:true},
    {t:'Rừng mưa là nơi sinh sống của rất nhiều loài động vật và thực vật.',bad:false},
    {t:'Cây trong rừng mưa giúp tạo ra oxy và giữ nước cho đất.',bad:false},
  ];
  const scn=[
    {t:'Em tìm được 3 trang uy tín cùng nói một thông tin giống nhau.',ask:false,why:'Nhiều nguồn tin cậy khớp nhau → em có thể yên tâm dùng.'},
    {t:'Trang Web hiện hình ảnh đáng sợ, hoặc nội dung không dành cho học sinh.',ask:true,why:'Nội dung không phù hợp: hãy dừng lại và báo ngay cho giáo viên.'},
    {t:'Hai nguồn đáng tin nói khác nhau, em không biết tin nguồn nào.',ask:true,why:'Khi không chắc chắn, hỏi giáo viên giúp em kiểm chứng.'},
    {t:'Một trang yêu cầu em nhập họ tên, địa chỉ nhà để nhận quà.',ask:true,why:'Không tự ý nhập thông tin cá nhân. Hãy hỏi giáo viên hoặc người lớn.'},
  ];
  let wrong=0, phase=1;
  st.innerHTML = brief('🤖','Nhiệm vụ 3: Kiểm tra câu trả lời của AI','AI có thể trả lời sai. Hãy tìm câu cần kiểm tra lại.')+
  `<div class="howsel"><div class="hand">👆</div><div><b>Hướng dẫn kiểm tra:</b><ol><li><b>Đọc</b> câu trả lời của AI trong khung chat bên dưới.</li><li><b>Chạm (nhấp chuột) vào cả câu</b> mà em thấy có thể sai. Câu đó sẽ <span class="sent flag">đổi sang nền vàng</span>.</li><li>Chọn nhầm? <b>Chạm lần nữa</b> để bỏ chọn.</li></ol></div><div class="cnt" id="cnt">Đã chọn: 0 câu</div></div><div class="chat"><div class="chead"><span class="cav">✦</span><b>Trợ lý AI</b><span class="cmodel">Trò chuyện mới</span></div><div class="cbody"><div class="msg user"><div class="bub">Rừng mưa nhiệt đới là gì?</div><div class="av u">🧒</div></div><div class="msg bot"><div class="av a">✦</div><div class="bub"><div id="ans"></div><div class="cact">👍 &nbsp; 👎 &nbsp; 🔄 &nbsp; 📋</div></div></div></div><div class="cinput"><span>Nhập câu hỏi cho trợ lý AI…</span><span class="send">➤</span></div><div class="cnote">AI có thể mắc lỗi. Hãy kiểm tra thông tin quan trọng.</div></div>
   <div class="row" style="margin-top:12px"><button class="btn" id="chk">Kiểm tra</button></div><div class="fb" id="fb"></div><div id="more"></div>`;
  const f=$('#fb'), marked=new Set();
  sents.forEach((s,i)=>{ const sp=el(`<span class="sent">${s.t}</span>`); sp.onclick=()=>{ if(phase!==1) return; marked.has(i)?marked.delete(i):marked.add(i); sp.classList.toggle('flag'); sents.forEach(x=>x._s.classList.remove('nudge')); $('#cnt').textContent='Đã chọn: '+marked.size+' câu'; };
    s._s=sp; if(i===0) sp.classList.add('nudge'); $('#ans').appendChild(sp); $('#ans').appendChild(document.createTextNode(' ')); });
  $('#chk').onclick=()=>{
    if(phase!==1) return;
    const bad=sents.filter((s,i)=>s.bad!==marked.has(i)).length;
    if(bad){ wrong++; return fb(f,'no','Chưa đúng hẳn. Gợi ý: hãy chú ý tên riêng, địa điểm và số liệu – những chỗ AI hay nhầm. Đối chiếu với kiến thức đã biết.'); }
    phase=2; $('#chk').disabled=true;
    sents.forEach(s=>{ s._s.classList.remove('flag'); s._s.classList.add(s.bad?'right':'ok'); });
    fb(f,'ok','Tuyệt! Rừng Amazon nằm ở <b>Nam Mỹ</b>, không phải châu Phi. AI đã trả lời sai nhưng nghe rất tự tin. Em cần <b>kiểm chứng</b> trên trang uy tín.');
    f.insertAdjacentHTML('beforeend','<div style="margin-top:10px"><button class="btn orange" id="tochk">Xem bảng kiểm 5 câu hỏi ▼</button></div>');
    $('#tochk').onclick=()=>{ $('#tochk').disabled=true; checklist(); };
  };
  function checklist(){
    const m=$('#more');
    m.innerHTML=`<h3 style="margin-top:18px">Bảng kiểm 5 câu hỏi cho câu trả lời của AI</h3>
    <p class="mi2">👆 Chạm vào từng câu hỏi để xem ví dụ với câu trả lời của AI ở trên.</p>
    <div id="cl"></div><div class="fb" id="clfb"></div>
    <div id="scw" style="display:none"><h3 style="margin-top:14px">Khi nào cần hỏi giáo viên?</h3><p class="tip" style="margin-top:6px">Với mỗi tình huống, chọn: <b>Hỏi giáo viên</b> hay <b>Tự xử lí được</b>.</p><div id="sc"></div></div>`;
    const CK=[
      ['Thông tin có <b>tên riêng, địa điểm, số liệu</b> cần kiểm tra không?','“Rừng Amazon” và “châu Phi” là tên riêng và địa điểm → cần kiểm tra.'],
      ['Em đã <b>tìm trên nguồn uy tín</b> (như National Geographic Kids) chưa?','Hãy tìm “rừng Amazon nằm ở đâu” trên một trang uy tín.'],
      ['AI và trang uy tín có <b>thống nhất</b> không?','Trang uy tín nói Amazon ở Nam Mỹ → khác với AI, nên AI sai!'],
      ['AI có <b>nêu nguồn</b> cụ thể không?','AI không ghi nguồn nào → khó tin hơn.'],
      ['Em có <b>chưa chắc chắn</b> không? Nếu có hãy hỏi giáo viên.','Nếu em vẫn chưa chắc, đừng đoán – hãy hỏi giáo viên.'],
    ];
    let seen=0; const cf=$('#clfb');
    CK.forEach(([q,d],k)=>{
      const it=el(`<div class="ckitem"><button class="ckb"><span class="bx">☐</span><span>${k+1}. ${q}</span></button><div class="det" style="display:none">💡 ${d}</div></div>`);
      it.querySelector('.ckb').onclick=()=>{ if(it.dataset.o) return; it.dataset.o=1; it.querySelector('.bx').textContent='✅'; it.classList.add('open'); it.querySelector('.det').style.display='block'; seen++;
        if(seen===CK.length){ fb(cf,'ok','✔ Em đã xem hết 5 câu hỏi! Kéo xuống để làm phần “Khi nào cần hỏi giáo viên?” ▼'); $('#scw').style.display='block'; } };
      $('#cl').appendChild(it);
    });
    let done=0;
    scn.forEach(s=>{
      const d=el(`<div class="scn">${s.t}<div class="row"><button class="chip" data-a="1">🙋 Hỏi giáo viên</button><button class="chip" data-a="0">👍 Tự xử lí được</button></div></div>`);
      d.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{
        if(d.dataset.fin) return;
        if((b.dataset.a==='1')===s.ask){ d.dataset.fin=1; d.classList.add('right'); b.classList.add('good'); d.insertAdjacentHTML('beforeend',`<div style="margin-top:6px;font-size:1rem">✔ ${s.why}</div>`);
          if(++done===scn.length){ fb(f,'ok','🏅 Hoàn thành! Em đã biết kiểm tra AI và biết khi nào cần nhờ giáo viên.'); finish(st,wrong===0?3:wrong<=2?2:1,m); }
        } else { wrong++; b.classList.add('bad'); setTimeout(()=>b.classList.remove('bad'),600); fb(f,'no','Chưa đúng, hãy nghĩ xem tình huống này có an toàn và chắc chắn không.'); }
      });
      $('#sc').appendChild(d);
    });
    m.scrollIntoView({behavior:'smooth',block:'start'});
  }
}

/* ---------- Kết thúc ---------- */
function finale(st){
  const total=state.got.reduce((a,b)=>a+(b||0),0);
  const rank = total>=10?'Thám tử xuất sắc':total>=7?'Thám tử giỏi':'Thám tử tập sự';
  st.innerHTML=`<div class="final"><div class="big">🏅</div><h2 style="font-size:2rem;color:var(--teal-d)">${rank}</h2>
  <p>Em đạt <b>${total} / 12 ⭐</b></p>
  <div class="recap"><div><b>5 tiêu chí</b><br>Tiêu đề · Tác giả · Nhà xuất bản · Ngày cập nhật · Mục đích.</div><div><b>Đối chiếu</b><br>So sánh nhiều nguồn uy tín trước khi tin.</div><div><b>AI</b><br>AI có thể sai – luôn kiểm tra lại bằng nguồn tin cậy.</div><div><b>Hỏi giáo viên</b><br>Khi nội dung không phù hợp, khi các nguồn mâu thuẫn, hoặc khi cần nhập thông tin cá nhân.</div></div>
  <div class="row" style="justify-content:center"><button class="btn ghost" id="again">Chơi lại từ đầu</button></div></div>`;
  $('#again').onclick=()=>restart(true);
}

let fsz=18; try{ fsz=+localStorage.getItem('k4fontsize')||18 }catch(e){}
const setSize=px=>{ fsz=Math.max(16,Math.min(28,px)); document.documentElement.style.fontSize=fsz+'px'; try{localStorage.setItem('k4fontsize',fsz)}catch(e){} };
setSize(fsz);
$('#fsm').onclick=()=>setSize(fsz-2); $('#fbg').onclick=()=>setSize(fsz+2);
$('#restart').onclick=()=>restart();
/* Nhấp chuột phải hai lần liên tiếp vào ⭐ góc trên bên phải: giáo viên mở/khóa tất cả */
(function(){
  let last=0;
  $('.stars').addEventListener('contextmenu',e=>{
    e.preventDefault();
    const now=Date.now(); if(now-last>=600){ last=now; return; }
    last=0; TEACH=!TEACH; try{ localStorage.setItem('k4b13_teach',TEACH?'1':'0'); }catch(x){}
    render();
    const t=el('<div style="position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#333;color:#fff;padding:10px 18px;border-radius:12px;z-index:9999;font-weight:700">'+(TEACH?'🔓 Đã mở khóa tất cả':'🔒 Đã khóa lại')+'</div>');
    document.body.appendChild(t); setTimeout(()=>t.remove(),1800);
  });
})();
render();
