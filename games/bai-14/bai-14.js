/* ---------- tiện ích ---------- */
const $ = (s, r=document) => r.querySelector(s);
const el = (html) => { const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; };
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]} return a };
const stars = n => '⭐'.repeat(n) + '☆'.repeat(3-n);

const LESSON_NAME="Tìm kiếm thông tin trực tuyến";
const THEORY=[{"i": "🔎", "h": "Công cụ tìm kiếm là gì?", "t": "Là chương trình giúp em <b>tìm thông tin</b> trên Internet. Em gõ <b>từ khóa</b>, nó hiện ra danh sách trang Web.", "e": "Google và Bing là công cụ tìm kiếm. Safari, Chrome, Firefox là <b>trình duyệt</b> (để mở trang Web)."}, {"i": "📢", "h": "Quảng cáo (Sponsored)", "t": "Có kết quả ghi <b>Ads</b> hoặc <b>Sponsored</b>. Đó là quảng cáo: có người <b>trả tiền</b> để nó hiện lên.", "e": "Quảng cáo hay rủ em mua hàng hoặc tải ứng dụng. Hãy xem kỹ trước khi nhấp."}, {"i": "🔑", "h": "Chọn từ khóa tốt", "t": "Từ khóa là chữ em gõ vào ô tìm kiếm. Hãy gõ <b>ngắn, rõ, đúng ý</b>.", "e": "Muốn tìm lời bài hát: gõ “Cháu lên ba” + “lời bài hát”."}, {"i": "🔄", "h": "Tinh chỉnh kết quả", "t": "Chưa thấy thứ cần tìm? Đừng bỏ cuộc! Hãy <b>đổi từ khóa</b>, thêm từ rõ hơn hoặc dùng <b>từ đồng nghĩa</b>.", "e": "“Con vật hiếm” không ra kết quả → thử “động vật nguy cấp”."}, {"i": "🔀", "h": "Mẹo: dùng từ OR", "t": "Thêm từ <b>OR</b> (hoặc) để tìm trang có <b>một trong hai</b> từ, hoặc <b>cả hai</b> từ. Cách này giúp <b>mở rộng</b> kết quả. Công cụ tìm kiếm ưu tiên thứ tự từ khóa, nhưng không phải lúc nào cũng tìm đúng thứ tự đó.", "e": "“Vũng Tàu OR Đà Lạt” → ra trang về Vũng Tàu, trang về Đà Lạt, hoặc trang nói về cả hai."}, {"i": "🧰", "h": "Mẹo: AND, “ ”, −, ~", "t": "Dùng ký hiệu đặc biệt để tìm <b>chính xác</b> hơn: <b>AND</b> thu hẹp kết quả (phải có cả hai từ), <b>“ ”</b> tìm đúng cụm từ, <b>−</b> (dấu trừ) bỏ một từ, <b>~</b> tìm cả từ đồng nghĩa.", "e": "Gõ “chuột -máy tính” để bỏ các trang nói về máy tính."}, {"i": "🎛️", "h": "Bộ lọc tìm kiếm", "t": "Sau khi có kết quả, bấm <b>bộ lọc</b> để thu hẹp: Tin tức, Hình ảnh, Video…", "e": "Bấm “Tin tức” để xem tin mới nhất về chủ đề."}, {"i": "🤖", "h": "AI và tìm kiếm", "t": "AI có thể <b>gợi ý từ khóa</b> cho em. Nhưng em vẫn cần tìm trên trang Web uy tín để kiểm tra.", "e": "Hỏi AI: “Gợi ý 3 từ khóa về rừng mưa nhiệt đới”, rồi tìm trên Google."}];
const QUIZ=[{"q": "Em hãy cho biết, chương trình nào sau đây sử dụng từ khóa để tìm kết quả trong các trang Web trên Internet?", "o": ["Phần mềm diệt Virus (Anti-virus software)", "Trình chặn cửa sổ bật lên (Pop-up blocker)", "Diễn đàn (Forum)", "Công cụ tìm kiếm (Search Engine)"], "a": 3, "why": "Công cụ tìm kiếm dùng từ khóa để tìm kết quả trên Internet."}, {"q": "Em hãy cho biết, tùy chọn nào sau đây là ví dụ về công cụ tìm kiếm? (Chọn 2)", "o": ["Bing", "Safari", "Google", "Firefox"], "a": [0, 2], "why": "Bing và Google là công cụ tìm kiếm. Safari và Firefox là trình duyệt."}, {"q": "Điều gì có nghĩa là kiếm tiền cho chủ sở hữu trang web khi bạn tìm kiếm trực tuyến?", "o": ["Từ đồng nghĩa (synonyms)", "Tin nhắn trong ứng dụng (In-app messages)", "Quảng cáo (Ads)", "Kết quả tìm kiếm"], "a": 2, "why": "Quảng cáo giúp chủ trang web kiếm tiền."}, {"q": "Khi em tìm kiếm một chủ đề và thấy từ \"Ads/Sponsored\" bên cạnh một số liên kết, điều đó có nghĩa là gì?", "o": ["Đây là một mục được tài trợ mà ai đó đã trả tiền.", "Tìm kiếm của em không mang lại đủ kết quả.", "Em sẽ mất tiền nếu bạn nhấp vào liên kết.", "Máy tính của em bị nhiễm Virus."], "a": 0, "why": "Ads/Sponsored là mục có người trả tiền."}, {"q": "Muốn tìm kiếm lời bài hát \"Cháu lên ba\" nhanh và chuẩn xác nhất, em nên nhập từ khóa tìm kiếm là:", "o": ["“Cháu lên ba”", "“Cháu lên ba” + “Karaoke”", "“Cháu lên ba” + “Lời bài hát”", "Một đoạn trong lời bài hát"], "a": 2, "why": "Ghép tên bài hát với “Lời bài hát” để ra đúng trang có lời bài hát."}, {"q": "Em cần thông tin về một chủ đề cụ thể cho trường học nhưng tìm kiếm ban đầu của em không trả lại bất kì kết quả hữu ích nào. Em nên thử thao tác gì tiếp theo?", "o": ["Nhấp vào quảng cáo được đề xuất.", "Gửi email cho giáo viên của bạn về việc thay đổi chủ đề.", "Từ bỏ và sử dụng một cuốn sách.", "Tinh chỉnh tìm kiếm của em."], "a": 3, "why": "Hãy tinh chỉnh tìm kiếm: đổi từ khóa, thêm từ rõ hơn."}, {"q": "Tại sao có thể nói là hữu ích khi sử dụng từ đồng nghĩa trong tìm kiếm của em?", "o": ["Để tinh chỉnh hoặc mở rộng kết quả tìm kiếm.", "Nó thu hẹp tìm kiếm chỉ các trang web giáo dục.", "Kết quả tìm kiếm không chính xác nếu không.", "Nó loại bỏ quảng cáo trong kết quả tìm kiếm."], "a": 0, "why": "Từ đồng nghĩa giúp tinh chỉnh hoặc mở rộng kết quả."}, {"q": "Khi thực hiện tìm kiếm trên trang Web, em nên thực hiện các bước nào để giúp tinh chỉnh phạm vi tìm kiếm khi không tìm được kết quả phù hợp? (Chọn 2)", "o": ["Dùng từ đồng nghĩa hoặc các từ thay thế khác.", "Nhấp vào một quảng cáo.", "Dùng các bộ lọc.", "Thử lại mà không thay đổi gì cả."], "a": [0, 2], "why": "Dùng từ đồng nghĩa và bộ lọc giúp tinh chỉnh tìm kiếm."}, {"q": "Em muốn tìm đúng cụm từ “rừng nhiệt đới”, không tách rời từng từ. Em dùng gì?", "o": ["Đặt cụm từ trong dấu ngoặc kép “ ”", "Thêm dấu trừ (−)", "Thêm từ OR", "Thêm dấu ~"], "a": 0, "why": "Dấu ngoặc kép giữ nguyên cụm từ."}, {"q": "Em tìm “chuột” nhưng không muốn kết quả về máy tính. Em gõ:", "o": ["chuột -máy tính", "chuột AND máy tính", "chuột OR máy tính", "“chuột máy tính”"], "a": 0, "why": "Dấu trừ đặt trước từ muốn bỏ."}];
const VIS=["<div class=\"vgrid\" style=\"grid-template-columns:1fr\"><div class=\"desk\"><div class=\"win\"><div class=\"wtop\"><span class=\"tl\"><i></i><i></i><i></i></span><div class=\"wtab\" data-e=\"google\" onclick=\"swEng(this,'google')\" style=\"cursor:pointer\"><span>🔎</span><span class=\"tt\">Google</span><span class=\"x\">✕</span></div><div class=\"wtab off\" data-e=\"bing\" onclick=\"swEng(this,'bing')\" style=\"cursor:pointer\"><span>🌐</span><span class=\"tt\">Bing</span><span class=\"x\">✕</span></div><div class=\"wtab off\" data-e=\"ddg\" onclick=\"swEng(this,'ddg')\" style=\"cursor:pointer\"><span>🦆</span><span class=\"tt\">DuckDuckGo</span><span class=\"x\">✕</span></div></div><div class=\"wtool\" style=\"outline:3px solid var(--orange);outline-offset:-3px\"><span class=\"nv\">←</span><span class=\"nv\">→</span><span class=\"nv\">⟳</span><div class=\"waddr\">🔒 www.google.com</div><span class=\"nv\">⋮</span></div><div class=\"wpage\"><div class=\"epage\" data-e=\"google\" style=\"display:block\"><div class=\"gh\" style=\"text-align:center\"><div class=\"glogo\" style=\"font-size:2.2rem;margin-top:6px\"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div><div class=\"gbox hl\" style=\"max-width:420px;margin:10px auto\"><span class=\"q\" style=\"text-align:left\">Tìm kiếm trên Google…</span>🔍</div><div><span class=\"ebtn\">Tìm với Google</span></div></div></div><div class=\"epage\" data-e=\"bing\" style=\"display:none\"><div class=\"bing-top\"><span>Tất cả</span><span>Hình ảnh</span><span>Video</span><span>Bản đồ</span></div><div class=\"bing-hero\"><div class=\"bing-logo\">🅱 Bing</div><div class=\"gbox hl\" style=\"max-width:420px;margin:10px auto;border-color:#0b6ea8\"><span class=\"q\">Tìm kiếm trên Bing</span><span style=\"color:#0b6ea8\">🔍</span></div></div></div><div class=\"epage\" data-e=\"ddg\" style=\"display:none\"><div class=\"gh\" style=\"text-align:center\"><div class=\"ddg-logo\">🦆 DuckDuckGo</div><div style=\"color:var(--muted)\">Tìm kiếm riêng tư, không theo dõi em</div><div class=\"gbox hl\" style=\"max-width:420px;margin:10px auto;border-color:#de5833\"><span class=\"q\">Tìm kiếm trên DuckDuckGo</span><span style=\"color:#de5833\">🔍</span></div></div></div></div></div><div class=\"taskbar\"><span class=\"tb-ico\">⊞</span><span class=\"tb-ico\">🔍</span><span class=\"tb-app\"><span class=\"tb-tip\">Google Chrome</span><i class=\"chrome\"></i></span><span class=\"tb-ico\">📁</span><span class=\"tb-ico\">📝</span><span class=\"tb-sp\"></span><span class=\"tb-clock\">8:30 ▾</span></div></div><div class=\"legend\"><div class=\"lg\"><span class=\"dot\">●</span><div><b>Trình duyệt</b> (như Google Chrome): bấm biểu tượng <i class=\"chrome\" style=\"vertical-align:middle\"></i> trên <b>thanh tác vụ</b> để mở, rồi xem trang Web trong cửa sổ.</div></div><div class=\"lg\"><span class=\"dot\">●</span><div><b>Công cụ tìm kiếm</b>: ô để <b>gõ từ khóa</b>. Google, Bing, DuckDuckGo đều là công cụ tìm kiếm.</div></div><div class=\"lg\"><span class=\"dot\">●</span><div>👆 Chạm vào từng <b>thẻ</b> trên cửa sổ để xem giao diện của mỗi công cụ.</div></div></div></div>", "<div class=\"vgrid\"><div class=\"win\"><div class=\"wtop\"><span class=\"tl\"><i></i><i></i><i></i></span><div class=\"wtab\"><span>🔎</span><span class=\"tt\">động vật biển – Google</span><span class=\"x\">✕</span></div><span class=\"wplus\">＋</span></div><div class=\"wtool\"><span class=\"nv\">←</span><span class=\"nv\">→</span><span class=\"nv\">⟳</span><div class=\"waddr\">🔒 www.google.com/search?q=động+vật+biển</div><span class=\"nv\">⋮</span></div><div class=\"wpage\"><div class=\"gh\"><div class=\"glogo\"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div><div class=\"gbox\"><span class=\"q\">động vật biển</span>🔍</div><div class=\"gtabs\"><span class=\"on\">Tất cả</span><span class=\"\">Hình ảnh</span><span class=\"\">Video</span><span class=\"\">Tin tức</span></div><div class=\"gres ad\"><div class=\"u\"><span class=\"tag-ad\">Ads</span> travelsea.example</div><div class=\"t\">Tour khám phá đại dương – Ưu đãi hè!</div><div class=\"d\">Trải nghiệm cùng sinh vật biển. Đặt ngay!</div></div><div class=\"gres\"><div class=\"u\">khoahoc.edu.vn</div><div class=\"t\">Các loài động vật biển – Thông tin khoa học</div><div class=\"d\">Tìm hiểu đặc điểm, môi trường sống…</div></div><div class=\"gres ad\"><div class=\"u\"><span class=\"tag-ad\">Ads</span> cacanhxinh.example</div><div class=\"t\">Thức ăn cho cá cảnh – Giao hàng nhanh</div><div class=\"d\">Đầy đủ dinh dưỡng. Mua ngay hôm nay!</div></div></div></div></div><div class=\"legend\"><div class=\"lg\"><span class=\"dot\">●</span><div><b>Quảng cáo (Ads/Sponsored)</b>: có người trả tiền. Hay nằm ở đầu hoặc cuối trang.</div></div><div class=\"lg\"><span class=\"dot\">●</span><div><b>Kết quả tự nhiên</b>: dùng để học tập.</div></div></div></div>", "<div class=\"vcard\"><div class=\"vrow\"><div class=\"vbox no\"><div class=\"vsearch \">🔎 rừng</div>😟<br><b>Quá ngắn</b></div><div class=\"vbox ok\"><div class=\"vsearch \">🔎 rừng nhiệt đới</div>😀<br><b>Vừa đủ</b></div><div class=\"vbox no\"><div class=\"vsearch \">🔎 rừng nhiệt đới ở Việt Nam và các loài động vật quý hiếm sống trong rừng nhiệt đới</div>😟<br><b>Quá dài</b></div></div><div class=\"cap\">⭐ Nên chọn từ khóa vừa đủ, cụ thể</div></div>", "<div class=\"vcard\"><div class=\"vrow\" style=\"align-items:center\"><div class=\"vbox\"><div class=\"vsearch \">🔎 bài tập thể dục</div></div><div class=\"arrow\" style=\"flex:0 0 auto;min-width:0\">↔</div><div class=\"vbox ok\"><div class=\"vsearch \">🔎 bài tập vận động</div></div><div class=\"arrow\" style=\"flex:0 0 auto;min-width:0\">↔</div><div class=\"vbox\"><div class=\"vsearch \">🔎 hoạt động thể chất</div></div></div><div class=\"cap\">Thử cách nói khác = dùng từ đồng nghĩa</div></div>", "<div class=\"vcard\"><div style=\"max-width:420px;margin:0 auto\"><div class=\"vsearch hl\">🔎 Vũng Tàu OR Đà Lạt</div></div><div class=\"arrow\">↓</div><div class=\"vrow\"><div class=\"vbox ok\">🏖️ Trang chỉ về <b>Vũng Tàu</b></div><div class=\"vbox ok\" style=\"border-width:4px\">🏖️🌲 Trang có <b>cả hai</b>: Vũng Tàu và Đà Lạt</div><div class=\"vbox ok\">🌲 Trang chỉ về <b>Đà Lạt</b></div></div><div class=\"cap\">OR = “hoặc” → ra nhiều kết quả hơn</div></div>", "<div class=\"vcard\"><div class=\"oprow\"><div class=\"vsearch\" style=\"flex:1.2;margin:0\">🔎 rừng <b>AND</b> động vật</div><div class=\"arrow\" style=\"flex:0 0 auto\">→</div><div class=\"vbox ok\" style=\"flex:1.5\"><span class=\"optag\">AND</span> Trang có <b>cả hai</b> từ</div></div><div class=\"oprow\"><div class=\"vsearch\" style=\"flex:1.2;margin:0\">🔎 <b>“</b>rừng nhiệt đới<b>”</b></div><div class=\"arrow\" style=\"flex:0 0 auto\">→</div><div class=\"vbox ok\" style=\"flex:1.5\"><span class=\"optag\">“ ”</span> Đúng <b>cụm từ</b> này</div></div><div class=\"oprow\"><div class=\"vsearch\" style=\"flex:1.2;margin:0\">🔎 chuột <b>-</b>máy tính</div><div class=\"arrow\" style=\"flex:0 0 auto\">→</div><div class=\"vbox ok\" style=\"flex:1.5\"><span class=\"optag\">−</span> <b>Bỏ</b> trang về máy tính</div></div><div class=\"oprow\"><div class=\"vsearch\" style=\"flex:1.2;margin:0\">🔎 <b>~</b>bài tập thể dục</div><div class=\"arrow\" style=\"flex:0 0 auto\">→</div><div class=\"vbox ok\" style=\"flex:1.5\"><span class=\"optag\">~</span> Có cả từ <b>giống nghĩa</b></div></div></div>", "<div class=\"vgrid\"><div class=\"win\"><div class=\"wtop\"><span class=\"tl\"><i></i><i></i><i></i></span><div class=\"wtab\"><span>🔎</span><span class=\"tt\">động vật nguy cấp – Google</span><span class=\"x\">✕</span></div><span class=\"wplus\">＋</span></div><div class=\"wtool\"><span class=\"nv\">←</span><span class=\"nv\">→</span><span class=\"nv\">⟳</span><div class=\"waddr\">🔒 www.google.com/search?q=động+vật+nguy+cấp</div><span class=\"nv\">⋮</span></div><div class=\"wpage\"><div class=\"gh\"><div class=\"glogo\"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div><div class=\"gbox\"><span class=\"q\">động vật nguy cấp</span>🔍</div><div class=\"gtabs\"><span>Tất cả</span><span>Hình ảnh</span><span>Video</span><span class=\"on hl\">Tin tức</span></div><div class=\"gres\"><div class=\"u\">tintuc.example</div><div class=\"t\">Phát hiện thêm voọc quý hiếm</div><div class=\"d\">Tin mới nhất về bảo tồn động vật…</div></div><div class=\"gres\"><div class=\"u\">baomoi.example</div><div class=\"t\">Chống buôn bán động vật hoang dã</div><div class=\"d\">Tin tức tuần này…</div></div></div></div></div><div class=\"legend\"><div class=\"lg\"><span class=\"dot\">●</span><div>Bấm <b>bộ lọc</b> để chỉ xem <b>Tin tức</b>, <b>Hình ảnh</b> hoặc <b>Video</b>.</div></div></div></div>", "<div class=\"vcard\"><div class=\"steps\"><div class=\"st vbox\"><b>Bước 1</b><br>Hỏi AI xin gợi ý từ khóa 🤖</div><div class=\"ar\">→</div><div class=\"st vbox\"><b>Bước 2</b><br>Gõ từ khóa vào Google 🔎</div><div class=\"ar\">→</div><div class=\"st vbox ok\"><b>Bước 3</b><br>Kiểm tra trên trang uy tín ✔</div></div></div>"];
const PRACT=[[{"q": "Xếp mỗi tên vào đúng nhóm.", "lab": ["Công cụ tìm kiếm", "Trình duyệt"], "tf": ["Google", "Safari", "Bing", "Chrome"], "a": [true, false, true, false], "why": "Google và Bing dùng để tìm kiếm. Safari và Chrome dùng để mở trang Web.", "ex": [null, null, null, null]}, {"q": "Em hãy cho biết, chương trình nào sau đây sử dụng từ khóa để tìm kết quả trong các trang Web trên Internet?", "o": ["Phần mềm diệt Virus (Anti-virus software)", "Trình chặn cửa sổ bật lên (Pop-up blocker)", "Diễn đàn (Forum)", "Công cụ tìm kiếm (Search Engine)"], "a": 3, "why": "Công cụ tìm kiếm dùng từ khóa để tìm kết quả trên Internet."}, {"q": "Em hãy cho biết, tùy chọn nào sau đây là ví dụ về công cụ tìm kiếm? (Chọn 2)", "o": ["Bing", "Safari", "Google", "Firefox"], "a": [0, 2], "why": "Bing và Google là công cụ tìm kiếm. Safari và Firefox là trình duyệt."}], [{"q": "Chạm vào kết quả là <b>quảng cáo</b>.", "html": "<div class=\"win\"><div class=\"wtop\"><span class=\"tl\"><i></i><i></i><i></i></span><div class=\"wtab\"><span>🔎</span><span class=\"tt\">giày chạy bộ – Google</span><span class=\"x\">✕</span></div><span class=\"wplus\">＋</span></div><div class=\"wtool\"><span class=\"nv\">←</span><span class=\"nv\">→</span><span class=\"nv\">⟳</span><div class=\"waddr\">🔒 www.google.com/search?q=giày+chạy+bộ</div><span class=\"nv\">⋮</span></div><div class=\"wpage\"><div class=\"gh\"><div class=\"glogo\"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div><div class=\"gbox\"><span class=\"q\">giày chạy bộ</span>🔍</div><div class=\"tapz\" data-k=\"a\"><div class=\"gres ad\"><div class=\"u\"><span class=\"tag-ad\">Ads</span> shopgiay.example</div><div class=\"t\">Mua giày chạy bộ – Giảm 50%!</div><div class=\"d\">Đặt ngay hôm nay, giao hàng nhanh.</div></div></div><div class=\"tapz\" data-k=\"b\"><div class=\"gres\"><div class=\"u\">thethao.example</div><div class=\"t\">Cách chọn giày chạy bộ phù hợp</div><div class=\"d\">Hướng dẫn chọn giày theo bàn chân.</div></div></div><div class=\"tapz\" data-k=\"c\"><div class=\"gres\"><div class=\"u\">baohay.example</div><div class=\"t\">Chạy bộ đúng cách cho trẻ em</div><div class=\"d\">Lời khuyên cho các bạn nhỏ.</div></div></div></div></div></div>", "key": "a", "why": "Kết quả có nhãn Ads và rủ mua hàng là quảng cáo."}, {"q": "Điều gì có nghĩa là kiếm tiền cho chủ sở hữu trang web khi bạn tìm kiếm trực tuyến?", "o": ["Từ đồng nghĩa (synonyms)", "Tin nhắn trong ứng dụng (In-app messages)", "Quảng cáo (Ads)", "Kết quả tìm kiếm"], "a": 2, "why": "Quảng cáo giúp chủ trang web kiếm tiền."}, {"q": "Khi em tìm kiếm một chủ đề và thấy từ \"Ads/Sponsored\" bên cạnh một số liên kết, điều đó có nghĩa là gì?", "o": ["Đây là một mục được tài trợ mà ai đó đã trả tiền.", "Tìm kiếm của em không mang lại đủ kết quả.", "Em sẽ mất tiền nếu bạn nhấp vào liên kết.", "Máy tính của em bị nhiễm Virus."], "a": 0, "why": "Ads/Sponsored là mục có người trả tiền."}], [{"q": "Từ khóa nào <b>vừa đủ, cụ thể</b>?", "lab": ["Vừa đủ", "Chưa tốt"], "tf": ["rừng", "rừng nhiệt đới", "rừng nhiệt đới ở Việt Nam và các loài động vật quý hiếm sống trong rừng nhiệt đới"], "a": [false, true, false], "why": "Từ khóa quá ngắn thì chung chung, quá dài thì khó tìm. “rừng nhiệt đới” là vừa đủ.", "ex": [null, null, null]}, {"q": "Muốn tìm kiếm lời bài hát \"Cháu lên ba\" nhanh và chuẩn xác nhất, em nên nhập từ khóa tìm kiếm là:", "o": ["“Cháu lên ba”", "“Cháu lên ba” + “Karaoke”", "“Cháu lên ba” + “Lời bài hát”", "Một đoạn trong lời bài hát"], "a": 2, "why": "Ghép tên bài hát với “Lời bài hát” để ra đúng trang có lời bài hát."}], [{"q": "Từ nào có nghĩa giống “<b>ô tô</b>”?", "lab": ["Giống nghĩa", "Khác nghĩa"], "tf": ["xe hơi", "xe đạp", "tàu hỏa"], "a": [true, false, false], "why": "“Xe hơi” là từ đồng nghĩa với “ô tô”.", "ex": [null, null, null]}, {"q": "Em cần thông tin về một chủ đề cụ thể cho trường học nhưng tìm kiếm ban đầu của em không trả lại bất kì kết quả hữu ích nào. Em nên thử thao tác gì tiếp theo?", "o": ["Nhấp vào quảng cáo được đề xuất.", "Gửi email cho giáo viên của bạn về việc thay đổi chủ đề.", "Từ bỏ và sử dụng một cuốn sách.", "Tinh chỉnh tìm kiếm của em."], "a": 3, "why": "Hãy tinh chỉnh tìm kiếm: đổi từ khóa, thêm từ rõ hơn."}, {"q": "Khi em sử dụng từ đồng nghĩa để làm rõ mục tiêu tìm kiếm, em đang làm gì?", "o": ["Giới hạn kết quả tìm kiếm chỉ cho các trang web giáo dục.", "Bỏ qua các quảng cáo trong một công cụ tìm kiếm.", "Làm cho phạm vi tìm kiếm càng rộng càng tốt.", "Sử dụng các từ tương tự hoặc giống với tìm kiếm ban đầu để tinh chỉnh kết quả."], "a": 3, "why": "Từ đồng nghĩa là từ có nghĩa tương tự, giúp tinh chỉnh kết quả."}, {"q": "Tại sao có thể nói là hữu ích khi sử dụng từ đồng nghĩa trong tìm kiếm của em?", "o": ["Để tinh chỉnh hoặc mở rộng kết quả tìm kiếm.", "Nó thu hẹp tìm kiếm chỉ các trang web giáo dục.", "Kết quả tìm kiếm không chính xác nếu không.", "Nó loại bỏ quảng cáo trong kết quả tìm kiếm."], "a": 0, "why": "Từ đồng nghĩa giúp tinh chỉnh hoặc mở rộng kết quả."}], [{"q": "Em gõ “Vũng Tàu OR Đà Lạt”. Chọn Đúng hoặc Sai.", "tf": ["Ra các trang về Vũng Tàu hoặc về Đà Lạt.", "OR làm kết quả ít đi."], "a": [true, false], "why": "OR (hoặc) giúp mở rộng kết quả.", "ex": ["OR nghĩa là “hoặc”: ra trang về một trong hai nơi, hoặc cả hai.", "OR làm kết quả nhiều hơn chứ không ít đi."]}, {"q": "Em hãy chọn Đúng hoặc Sai cho từng phát biểu về việc tinh chỉnh phạm vi tìm kiếm trên Web.", "tf": ["Công cụ tìm kiếm thực hiện tìm theo đúng trình tự từ khóa mà em nhập vào.", "Khi thêm từ \"OR\" (hoặc), công cụ tìm kiếm sẽ kết hợp nhiều kết quả tìm kiếm thành một.", "Kết quả tìm kiếm trả phí (quảng cáo) trông giống các kết quả tìm kiếm không trả phí và được sắp xếp chung với nhau."], "a": [false, true, false], "why": "Công cụ tìm kiếm ưu tiên thứ tự từ khóa nhưng không phải lúc nào cũng đúng trình tự. OR giúp mở rộng kết quả. Quảng cáo có nhãn Ads/Sponsored và thường nằm ở đầu hoặc cuối trang.", "ex": ["Công cụ tìm kiếm ưu tiên thứ tự từ khóa, nhưng không phải lúc nào cũng tìm đúng trình tự đó.", "Từ OR (hoặc) gộp nhiều kết quả vào một danh sách, giúp mở rộng kết quả.", "Quảng cáo có nhãn Ads/Sponsored và thường nằm riêng ở đầu hoặc cuối trang, tách khỏi kết quả tự nhiên."]}], [{"q": "Mỗi mẹo làm kết quả <b>thu hẹp</b> hay <b>mở rộng</b>?", "lab": ["Thu hẹp", "Mở rộng"], "tf": ["AND (phải có cả hai từ)", "OR (một trong hai từ)", "Dấu ngoặc kép “ ”", "Dấu trừ −", "Dấu ~ (từ đồng nghĩa)"], "a": [true, false, true, true, false], "ex": ["AND bắt buộc có cả hai từ nên ít kết quả hơn.", "OR cho phép một trong hai từ nên nhiều kết quả hơn.", "Chỉ giữ trang có đúng cụm từ nên ít kết quả hơn.", "Bỏ các trang có từ đó nên ít kết quả hơn.", "Thêm cả các từ giống nghĩa nên nhiều kết quả hơn."], "why": "AND, ngoặc kép và dấu trừ làm kết quả ít đi. OR và ~ làm kết quả nhiều hơn."}, {"q": "Em muốn tìm đúng cụm từ “rừng nhiệt đới”, không tách rời từng từ. Em dùng gì?", "o": ["Đặt cụm từ trong dấu ngoặc kép “ ”", "Thêm dấu trừ (−)", "Thêm từ OR", "Thêm dấu ~"], "a": 0, "why": "Dấu ngoặc kép giữ nguyên cụm từ."}, {"q": "Em tìm “chuột” nhưng không muốn kết quả về máy tính. Em gõ:", "o": ["chuột -máy tính", "chuột AND máy tính", "chuột OR máy tính", "“chuột máy tính”"], "a": 0, "why": "Dấu trừ đặt trước từ muốn bỏ."}, {"q": "Dấu ~ đặt trước một từ giúp em tìm gì?", "o": ["Các từ giống nghĩa hoặc gần nghĩa", "Loại bỏ từ đó", "Đúng cụm từ", "Trang có cả hai từ"], "a": 0, "why": "Toán tử ~ trả về trang có từ đồng nghĩa hoặc tương tự."}], [{"q": "Em muốn xem <b>tin mới nhất</b>. Chạm vào bộ lọc đúng.", "html": "<div class=\"tapbox\" style=\"padding:0;border:0\"><div class=\"win\"><div class=\"wtop\"><span class=\"tl\"><i></i><i></i><i></i></span><div class=\"wtab\"><span>🔎</span><span class=\"tt\">động vật nguy cấp – Google</span><span class=\"x\">✕</span></div><span class=\"wplus\">＋</span></div><div class=\"wtool\"><span class=\"nv\">←</span><span class=\"nv\">→</span><span class=\"nv\">⟳</span><div class=\"waddr\">🔒 www.google.com/search?q=động+vật+nguy+cấp</div><span class=\"nv\">⋮</span></div><div class=\"wpage\"><div class=\"gh\"><div class=\"glogo\"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div><div class=\"gbox\"><span class=\"q\">động vật nguy cấp</span>🔍</div><div class=\"gtabs\"><span class=\"tapz\" data-k=\"all\">Tất cả</span><span class=\"tapz\" data-k=\"img\">Hình ảnh</span><span class=\"tapz\" data-k=\"vid\">Video</span><span class=\"tapz\" data-k=\"news\">Tin tức</span></div><div class=\"rbox\"><div class=\"gres\"><div class=\"u\">sachdo.example</div><div class=\"t\">Sách đỏ: danh sách động vật nguy cấp</div><div class=\"d\">Tài liệu tổng hợp…</div></div><div class=\"rgrid\" style=\"margin:6px 8px\"><div class=\"rtile\">🦧</div><div class=\"rtile\">🐘</div><div class=\"rtile\">🐅</div></div><div class=\"gres\"><div class=\"u\">tintuc.example</div><div class=\"t\">Phát hiện thêm voọc quý hiếm</div><div class=\"d\">Tin mới nhất về bảo tồn động vật…</div></div></div></div></div></div></div>", "key": "news", "why": "Bộ lọc “Tin tức” giữ lại các bản tin.", "res": {"all": "<div class=\"gres\"><div class=\"u\">sachdo.example</div><div class=\"t\">Sách đỏ: danh sách động vật nguy cấp</div><div class=\"d\">Tài liệu tổng hợp…</div></div><div class=\"rgrid\" style=\"margin:6px 8px\"><div class=\"rtile\">🦧</div><div class=\"rtile\">🐘</div><div class=\"rtile\">🐅</div></div><div class=\"gres\"><div class=\"u\">tintuc.example</div><div class=\"t\">Phát hiện thêm voọc quý hiếm</div><div class=\"d\">Tin mới nhất về bảo tồn động vật…</div></div>", "img": "<div class=\"rgrid\"><div class=\"rtile\">🦧<small>Ảnh 1</small></div><div class=\"rtile\">🐘<small>Ảnh 2</small></div><div class=\"rtile\">🐅<small>Ảnh 3</small></div><div class=\"rtile\">🦏<small>Ảnh 4</small></div><div class=\"rtile\">🐢<small>Ảnh 5</small></div><div class=\"rtile\">🦜<small>Ảnh 6</small></div></div>", "vid": "<div class=\"vid\"><div class=\"vthumb\">▶</div><div><div class=\"t\" style=\"color:#1a56c4;font-weight:800\">Cuộc sống của voọc mũi hếch</div><div class=\"d\">Video · 3:45</div></div></div><div class=\"vid\"><div class=\"vthumb\">▶</div><div><div class=\"t\" style=\"color:#1a56c4;font-weight:800\">Cứu hộ động vật hoang dã</div><div class=\"d\">Video · 5:20</div></div></div>", "news": "<div class=\"gres\"><div class=\"u\">tintuc.example</div><div class=\"t\"><span class=\"tag-ad\" style=\"background:#e3f6ea\">2 giờ trước</span> Phát hiện thêm voọc quý hiếm</div><div class=\"d\">Tin mới nhất về bảo tồn động vật…</div></div><div class=\"gres\"><div class=\"u\">baomoi.example</div><div class=\"t\"><span class=\"tag-ad\" style=\"background:#e3f6ea\">Hôm nay</span> Tăng cường chống buôn bán động vật hoang dã</div><div class=\"d\">Tin tức tuần này…</div></div>"}, "hint": {"all": "“Tất cả” hiện lẫn lộn nhiều loại (trang web, ảnh…). Em cần chỉ xem tin mới.", "img": "“Hình ảnh” chỉ hiện ảnh, không có tin mới nhất.", "vid": "“Video” chỉ hiện video, không phải bản tin."}}, {"q": "Em đang tìm một số thông tin trên mạng nhưng kết quả trả về không cung cấp thông tin mà em cần. Em nên làm gì?", "o": ["Dùng từ đồng nghĩa để thay đổi thuật ngữ tìm.", "Đóng trình duyệt của em.", "Bấm vào đường liên kết của những kết quả quảng cáo.", "Kiểm tra kết nối Internet của em."], "a": 0, "why": "Đổi thuật ngữ tìm bằng từ đồng nghĩa."}, {"q": "Khi thực hiện tìm kiếm trên trang Web, em nên thực hiện các bước nào để giúp tinh chỉnh phạm vi tìm kiếm khi không tìm được kết quả phù hợp? (Chọn 2)", "o": ["Dùng từ đồng nghĩa hoặc các từ thay thế khác.", "Nhấp vào một quảng cáo.", "Dùng các bộ lọc.", "Thử lại mà không thay đổi gì cả."], "a": [0, 2], "why": "Dùng từ đồng nghĩa và bộ lọc giúp tinh chỉnh tìm kiếm."}], [{"q": "Sau khi AI gợi ý từ khóa, việc nào <b>nên</b> và <b>không nên</b>?", "lab": ["Nên làm", "Không nên"], "tf": ["Dùng từ khóa đó để tìm trên Google", "Chép luôn câu trả lời của AI", "Kiểm tra lại trên trang uy tín"], "a": [true, false, true], "why": "AI chỉ gợi ý. Em cần tìm và kiểm tra trên trang uy tín.", "ex": [null, null, null]}, {"q": "AI gợi ý cho em vài từ khóa. Em nên làm gì tiếp?", "o": ["Dùng các từ khóa đó để tìm trên Google và kiểm tra", "Chép luôn câu trả lời của AI", "Đóng máy tính", "Chỉ tin AI, không cần tìm nữa"], "a": 0, "why": "AI giúp gợi ý, nhưng em vẫn cần kiểm tra trên trang uy tín."}]];
const MISSIONS = [
{icon:"📖",label:"Học bài",run:theory,steps:["Chạm vào một thẻ để <b>lật</b> và đọc.", "Đọc xong, bấm <b>“Em đã hiểu ✓”</b>.", "Một <b>cửa sổ bài tập nhỏ</b> sẽ hiện ra. Trả lời đúng để <b>mở khóa</b> thẻ tiếp theo 🔓.", "Mở hết các thẻ rồi sang phần luyện tập."],tip:"Em có thể chạm vào thẻ đã đọc để đọc lại."},
{icon:"🔍",label:"Công cụ tìm kiếm",run:m1,steps:["Đọc tên các thẻ trong khung nét đứt phía trên.", "<b>Chạm vào một thẻ</b> – thẻ sẽ nổi lên và đổi sang màu cam.", "<b>Chạm vào ngăn</b> mà em cho là đúng: “Công cụ tìm kiếm” hoặc “Trình duyệt Web”.", "Nếu đúng, thẻ bay vào ngăn. Nếu sai, thẻ đỏ lên – hãy đọc gợi ý rồi chọn lại.", "Xếp hết 7 thẻ để hoàn thành nhiệm vụ."],tip:"Công cụ tìm kiếm là nơi em gõ từ khóa. Trình duyệt là phần mềm để mở trang Web."},
{icon:"📢",label:"Săn quảng cáo",run:m2,steps:["Đọc 5 kết quả trong khung trình duyệt.", "<b>Chạm vào kết quả</b> em nghĩ là quảng cáo – kết quả sẽ có viền cam. Chạm lần nữa để bỏ chọn.", "Bấm nút <b>Kiểm tra</b>.", "Nếu chưa đúng, đọc gợi ý rồi sửa lại lựa chọn.", "Khi đúng, trả lời thêm <b>câu hỏi nhanh</b> bên dưới."],tip:"Quảng cáo thường rủ em mua hàng, tải ứng dụng hoặc nhấp ngay – chứ không dạy kiến thức."},
{icon:"🧩",label:"Từ khóa & bộ lọc",run:m3,steps:["Đọc <b>mục tiêu 🎯</b> ở khung màu cam.", "Chạm các từ trong <b>Kho từ khóa</b>. Từ được chọn sẽ hiện lên thanh tìm kiếm. Chạm lần nữa để bỏ từ đó.", "Xem danh sách kết quả thay đổi. Thanh xanh dưới mỗi kết quả cho biết mức khớp với từ khóa.", "Thử bấm các <b>bộ lọc</b> (Tất cả, Tin tức, Hình ảnh, Video) phía trên kết quả.", "Khi kết quả đầu tiên là thứ em cần, bấm <b>“Em tìm được rồi!”</b>.", "Có <b>2 vòng</b>. Nút <b>Xóa từ khóa</b> giúp em thử lại từ đầu."],tip:"Từ khóa càng rõ ràng thì kết quả càng đúng. Nếu không ra kết quả, hãy thử từ đồng nghĩa và bộ lọc."}
,{icon:"✅",label:"Trắc nghiệm",run:quiz,steps:["Đọc kỹ câu hỏi.", "Chạm vào đáp án em chọn.", "Đúng: đáp án xanh và có lời giải thích. Sai: đáp án đỏ – hãy chọn lại.", "Bấm <b>“Câu tiếp”</b> để làm tiếp."],tip:"Đọc cả 4 đáp án trước khi chọn."}
];
const state = {cur:0, got:MISSIONS.map(()=>null), intro:true};
try{ const s=JSON.parse(localStorage.getItem('k4b14')||'null'); if(s&&s.got&&s.got.length===MISSIONS.length){ state.got=s.got; state.read=s.read||[]; const f=s.got.findIndex(x=>x===null); state.cur=f<0?MISSIONS.length:f; state.intro=state.cur===0; } }catch(e){}
function save(){ try{localStorage.setItem('k4b14',JSON.stringify({got:state.got,read:state.read||[]}))}catch(e){} }

function restart(force){
  if(!force && !confirm('Em muốn làm lại từ đầu? Tiến độ đã lưu sẽ bị xóa.')) return;
  state.got=MISSIONS.map(()=>null); state.read=[]; state.cur=0; state.intro=true; save(); render();
}
function renderMap(){
  const map=$('#map'); map.innerHTML='';
  MISSIONS.forEach((m,i)=>{
    const unlocked = true;
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

/* chuyển thẻ trình duyệt (Google / Bing / DuckDuckGo) */
window.swEng=function(btn,k){
  const w=btn.closest('.win'); if(!w) return;
  w.querySelectorAll('.wtab').forEach(x=>x.classList.toggle('off',x!==btn));
  w.querySelectorAll('.epage').forEach(p=>{ p.style.display=p.dataset.e===k?'block':'none'; });
  const u={google:'www.google.com',bing:'www.bing.com',ddg:'duckduckgo.com'}[k];
  const a=w.querySelector('.waddr'); if(a) a.textContent='🔒 '+u;
};

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
  const unlockedUpTo=()=>{ const i=read.indexOf(false); return i<0?n:i; };
  function draw(){
    box.innerHTML='';
    const u=unlockedUpTo();
    THEORY.forEach((c,i)=>{
      const locked=false, flipped=box._open===i;
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
    <div class="big">🔎</div>
    <h2 style="font-size:2rem;color:var(--teal-d)">Bài 14: Tìm kiếm thông tin trực tuyến</h2>
    <p>Internet có hàng tỉ trang Web. Em sẽ học, luyện tập và làm trắc nghiệm để biết cách <b>tìm</b> đúng thông tin nhanh và chính xác.</p>
    <div class="recap"><div><b>Em sẽ học</b><br>Công cụ tìm kiếm · quảng cáo (Sponsored) · chọn từ khóa</div><div><b>Em sẽ luyện</b><br>Từ đồng nghĩa · tinh chỉnh kết quả · bộ lọc tìm kiếm</div><div><b>Cách chơi</b><br>Học bài → 3 nhiệm vụ → Trắc nghiệm.</div></div>
    <p class="tip" style="text-align:left">Em sẽ học qua <b>thẻ flashcard</b>, làm <b>3 nhiệm vụ</b>, rồi làm <b>trắc nghiệm</b>. Phần luyện tập và trắc nghiệm cho tối đa 3 ⭐ mỗi phần. Em trả lời càng ít lần sai thì càng được nhiều sao. Bên trái màn hình luôn có khung <b>“Cách làm bài”</b> hướng dẫn từng bước. Tiến độ được lưu lại trên máy của em.</p>
    <button class="btn" id="go">Bắt đầu ▶</button>
  </div>`;
  $('#go').onclick=()=>{state.intro=false;render()};
}

/* ---------- Nhiệm vụ 1: công cụ tìm kiếm ---------- */
function m1(st){
  const items=[
    {n:'Google',k:'se'},{n:'Bing',k:'se'},{n:'DuckDuckGo',k:'se'},
    {n:'Safari',k:'br'},{n:'Firefox',k:'br'},{n:'Chrome',k:'br'},{n:'Edge',k:'br'}];
  let sel=null, wrong=0, left=items.length;
  st.innerHTML = brief('🔍','Nhiệm vụ 1: Phân loại dụng cụ','Xếp mỗi thẻ vào đúng ngăn.')+
  `<div class="pool" id="pool"></div>
   <div class="bins">
     <button class="bin" data-k="se"><h3>🔎 Công cụ tìm kiếm</h3><small>Nhập từ khóa → ra danh sách kết quả</small><div class="in"></div></button>
     <button class="bin b2" data-k="br"><h3>🌐 Trình duyệt Web</h3><small>Phần mềm để mở và xem trang Web</small><div class="in"></div></button>
   </div><div class="fb" id="fb"></div>`;
  const pool=$('#pool'), f=$('#fb');
  shuffle(items).forEach(it=>{
    const c=el(`<button class="chip">${it.n}</button>`);
    c.onclick=()=>{ pool.querySelectorAll('.chip').forEach(x=>x.classList.remove('sel')); c.classList.add('sel'); sel={it,c}; };
    pool.appendChild(c);
  });
  st.querySelectorAll('.bin').forEach(b=>b.onclick=()=>{
    if(!sel) return fb(f,'info','Hãy chạm vào một thẻ trước nhé.');
    if(sel.it.k===b.dataset.k){
      sel.c.className='chip good'; sel.c.onclick=null; b.querySelector('.in').appendChild(sel.c);
      fb(f,'ok','Chính xác! <b>'+sel.it.n+'</b> '+(sel.it.k==='se'?'là công cụ tìm kiếm.':'là trình duyệt để mở trang Web.'));
      sel=null; if(--left===0){
        fb(f,'ok','🎉 Xong! Em có thể mở <b>trình duyệt</b>, rồi vào <b>công cụ tìm kiếm</b> để gõ từ khóa.');
        finish(st,wrong===0?3:wrong<=2?2:1,st);
      }
    } else { wrong++; sel.c.classList.add('bad'); setTimeout(()=>sel&&sel.c.classList.remove('bad'),500);
      fb(f,'no','Chưa đúng. '+(sel.it.k==='se'?'Thẻ này dùng <b>từ khóa</b> để tìm kết quả.':'Thẻ này là phần mềm dùng để <b>mở</b> trang Web.')); }
  });
}

/* ---------- Nhiệm vụ 2: quảng cáo ---------- */
function m2(st){
  const res=[
    {t:'Danh sách động vật nguy cấp ở Việt Nam – Sách đỏ',u:'sachdo.gov.vn',d:'Thông tin các loài được bảo vệ theo Sách đỏ Việt Nam.',ad:false},
    {t:'Mua thú nhồi bông hình voi – Giảm 50% hôm nay!',u:'shopthubong.example',d:'Giao hàng nhanh, ưu đãi cho đơn đầu tiên.',ad:true},
    {t:'Vì sao tê giác Java gần như biến mất? – Báo Thiên nhiên',u:'baothiennhien.example',d:'Câu chuyện về loài tê giác cuối cùng ở Việt Nam.',ad:false},
    {t:'Tải ngay game nuôi thú ảo miễn phí',u:'gamevui.example',d:'Hơn 1 triệu lượt tải. Cài đặt ngay!',ad:true},
    {t:'Bảo tồn voọc mũi hếch – WWF Việt Nam',u:'wwf.example',d:'Tìm hiểu cách bảo vệ voọc mũi hếch ở Hà Giang.',ad:false},
  ];
  let picked=new Set(), checked=false, tries=0;
  st.innerHTML = brief('📢','Nhiệm vụ 2: Săn quảng cáo','Em tìm “<b>động vật nguy cấp Việt Nam</b>”. Hãy tìm các kết quả là <b>quảng cáo</b> (có người trả tiền).')+
  `<div class="browser"><div class="bar"><span class="dots"><span></span><span></span><span></span></span><div class="urlbox">🔎 động vật nguy cấp Việt Nam</div></div>
   <div class="page" id="serp"></div></div>
   <div class="row" style="margin-top:12px"><button class="btn" id="chk">Kiểm tra</button></div><div class="fb" id="fb"></div>`;
  const serp=$('#serp'), f=$('#fb');
  res.forEach((r,i)=>{
    const b=el(`<button class="result"><div class="u">${r.u}</div><div class="t">${r.t}</div><div class="d">${r.d}</div></button>`);
    b.onclick=()=>{ if(checked) return; picked.has(i)?picked.delete(i):picked.add(i); b.classList.toggle('flag'); };
    r._b=b; serp.appendChild(b);
  });
  $('#chk').onclick=()=>{
    if(checked) return;
    const bad=res.filter((r,i)=>r.ad!==picked.has(i)).length;
    if(bad===0){
      checked=true;
      res.forEach(r=>{ if(r.ad){ r._b.classList.remove('flag'); r._b.classList.add('right'); r._b.querySelector('.u').insertAdjacentHTML('afterbegin','<span class="tag-ad">Được tài trợ</span>'); }});
      fb(f,'ok','🎯 Đúng rồi! Dấu hiệu của quảng cáo: muốn em <b>mua</b>, <b>tải</b> hoặc <b>nhấp</b> ngay. Trên thực tế, quảng cáo thường có chữ <b>Ads / Sponsored</b> nhưng nhìn rất giống kết quả thường.');
      showQuiz();
    } else {
      tries++;
      fb(f,'no',`Chưa khớp hoàn toàn (sai ${bad} kết quả). Gợi ý: quảng cáo thường rủ em <b>mua hàng</b> hoặc <b>tải</b> thứ gì đó, không cung cấp kiến thức.`);
    }
  };
  function showQuiz(){
    $('#chk').disabled=true;
    const q=el(`<div style="margin-top:16px"><h3>Câu hỏi nhanh: Khi thấy chữ “Ads/Sponsored” bên cạnh một liên kết, điều đó nghĩa là gì?</h3>
      <div class="row" id="opts" style="margin-top:8px"></div></div>`);
    const opts=[['Đây là mục được tài trợ – có người đã trả tiền',1],['Máy tính của em bị nhiễm virus',0],['Em sẽ mất tiền nếu nhấp vào',0]];
    let wr=0;
    opts.forEach(([t,ok])=>{ const b=el(`<button class="chip">${t}</button>`); b.onclick=()=>{
      if(ok){ b.classList.add('good'); fb(f,'ok','Chính xác! Quảng cáo giúp chủ trang web kiếm tiền. Em nên xem kỹ trước khi nhấp.');
        opts.forEach(()=>{}); q.querySelectorAll('.chip').forEach(x=>x.onclick=null);
        finish(st,Math.max(1,3-tries-wr),st);
      } else { wr++; b.classList.add('bad'); fb(f,'no','Chưa đúng, thử lại nhé.'); } };
      q.querySelector('#opts').appendChild(b); });
    st.appendChild(q);
  }
}

/* ---------- Nhiệm vụ 3: từ khóa & bộ lọc ---------- */
const DOCS=[
  {id:'lyr',t:'Lời bài hát “Cháu lên ba” – Nhạc sĩ Văn Thành',u:'loibaihat.example',d:'Lời đầy đủ: “Cháu lên ba, cháu đi mẫu giáo…”',k:['cháu lên ba','lời bài hát','bài hát'],type:'web'},
  {id:'kar',t:'Karaoke Cháu lên ba – beat chuẩn',u:'karaoke.example',d:'Hát cùng nền nhạc, không có lời giải thích.',k:['cháu lên ba','karaoke','bài hát'],type:'video'},
  {id:'bio',t:'Nhạc sĩ Văn Thành và những sáng tác',u:'nhacsi.example',d:'Tiểu sử và các tác phẩm nổi tiếng.',k:['cháu lên ba','bài hát'],type:'web'},
  {id:'shop',t:'Cửa hàng nhạc cụ giá rẻ',u:'nhaccu.example',d:'Đàn, trống, sáo trúc đủ loại.',k:['nhạc'],type:'web'},
  {id:'n1',t:'Phát hiện thêm cá thể voọc quý hiếm tại Quảng Bình',u:'tintuc.example',d:'Tin mới nhất về bảo tồn động vật nguy cấp.',k:['động vật nguy cấp','việt nam'],type:'news'},
  {id:'n2',t:'Việt Nam tăng cường chống buôn bán động vật hoang dã',u:'baomoi.example',d:'Tin tức tuần này về động vật nguy cấp ở Việt Nam.',k:['động vật nguy cấp','việt nam'],type:'news'},
  {id:'w1',t:'Sách đỏ: danh sách động vật nguy cấp',u:'sachdo.example',d:'Tài liệu tổng hợp, cập nhật nhiều năm trước.',k:['động vật nguy cấp','việt nam'],type:'web'},
  {id:'i1',t:'Ảnh voọc mũi hếch',u:'anh.example',d:'Bộ ảnh động vật.',k:['động vật nguy cấp'],type:'image'},
  {id:'z',t:'Sở thú Thủ Lệ – giờ mở cửa',u:'sothu.example',d:'Thông tin vé và giờ tham quan.',k:['động vật'],type:'web'},
];
const TABS=[['all','Tất cả'],['news','Tin tức'],['image','Hình ảnh'],['video','Video']];
function m3(st){
  const rounds=[
   {goal:'Tìm <b>lời bài hát “Cháu lên ba”</b> nhanh và chính xác nhất.',bank:['cháu lên ba','karaoke','lời bài hát','nhạc','bài hát'],
    ok:(q,tab,top)=>q.includes('cháu lên ba')&&q.includes('lời bài hát')&&top&&top.id==='lyr',
    hint:'Thêm từ khóa nói rõ em cần <b>cái gì</b> của bài hát (lời, nhạc hay video?).',
    win:'Thêm “lời bài hát” làm từ khóa rõ hơn, nên trang lời bài hát lên đầu!'},
   {goal:'Tìm <mark class="hlt">tin tức</mark> mới nhất về <mark class="hlt">động vật nguy cấp</mark> ở Việt Nam. Em chưa biết từ nào đúng nên thử các từ khóa khác nhau, rồi bấm bộ lọc <mark class="hlt">Tin tức</mark>!',bank:['con vật hiếm','thú quý','động vật nguy cấp','việt nam','nhạc'],
    ok:(q,tab,top)=>q.includes('động vật nguy cấp')&&tab==='news'&&top&&top.type==='news',
    hint:'Nếu từ khóa không ra kết quả hay, hãy thử <b>từ đồng nghĩa</b>, rồi bấm bộ lọc <b>Tin tức</b>.',
    win:'Từ đồng nghĩa giúp tìm đúng chủ đề, bộ lọc “Tin tức” giữ lại những tin mới.'},
  ];
  let ri=0, wrongAll=0;
  function draw(){
    const R=rounds[ri]; let q=[], tab='all', done=false;
    st.innerHTML = brief('🧩','Nhiệm vụ 3: Từ khóa & bộ lọc ('+(ri+1)+'/2)','Chọn từ khóa và bộ lọc để tìm đúng thứ em cần.')+
    `<div class="goal">🎯 ${R.goal}</div>
     <div class="browser"><div class="bar"><span class="dots"><span></span><span></span><span></span></span><div class="qline" id="ql" style="flex:1"></div></div>
     <div class="page"><div class="tabs" id="tabs"></div><div id="res"></div></div></div>
     <p style="margin:10px 0 4px"><b>Kho từ khóa:</b></p><div class="kwbank" id="bank"></div>
     <div class="row"><button class="btn" id="chk">Em tìm được rồi!</button><button class="btn ghost" id="clr">Xóa từ khóa</button></div>
     <div class="fb" id="fb"></div>`;
    const f=$('#fb');
    const bank=$('#bank');
    R.bank.forEach(w=>{ const c=el(`<button class="chip">${w}</button>`); c.onclick=()=>{
        if(done) return; q=q.includes(w)?q.filter(x=>x!==w):[...q,w]; c.classList.toggle('used'); upd(); };
      bank.appendChild(c); });
    $('#clr').onclick=()=>{ if(done) return; q=[]; bank.querySelectorAll('.chip').forEach(c=>c.classList.remove('used')); upd(); };
    TABS.forEach(([k,l])=>{ const b=el(`<button class="${k==='all'?'on':''}">${l}</button>`); b.onclick=()=>{ if(done)return; tab=k; $('#tabs').querySelectorAll('button').forEach(x=>x.classList.remove('on')); b.classList.add('on'); upd(); }; $('#tabs').appendChild(b); });
    function results(){
      if(!q.length) return [];
      return DOCS.map(d=>({d,s:q.filter(w=>d.k.includes(w)).length}))
        .filter(x=>x.s>0 && (tab==='all'||x.d.type===tab))
        .sort((a,b)=>b.s-a.s||(tab==='news'?0:0)).map(x=>({...x.d,s:x.s,max:q.length}));
    }
    function upd(){
      $('#ql').innerHTML = q.length? q.map(w=>`<span class="chip">${w}</span>`).join('') : '<em>Chưa có từ khóa…</em>';
      const rs=results(), box=$('#res'); box.innerHTML='';
      if(!q.length) box.innerHTML='<p style="color:var(--muted)">Hãy chọn từ khóa bên dưới.</p>';
      else if(!rs.length) box.innerHTML='<p><b>Không tìm thấy kết quả phù hợp.</b> Hãy thử từ đồng nghĩa hoặc đổi bộ lọc.</p>';
      else rs.slice(0,4).forEach(r=>box.insertAdjacentHTML('beforeend',`<div class="result"><div class="u">${r.u} · ${{web:'Trang web',news:'Tin tức',image:'Hình ảnh',video:'Video'}[r.type]}</div><div class="t">${r.t}</div><div class="d">${r.d}</div><div class="meter"><i style="width:${Math.min(100,r.s/ Math.max(r.k.length,1)*100)}%"></i></div></div>`));
    }
    upd();
    $('#chk').onclick=()=>{
      if(done) return;
      const rs=results();
      if(R.ok(q,tab,rs[0])){
        done=true; fb(f,'ok','🎉 '+R.win);
        if(ri<rounds.length-1){ f.insertAdjacentHTML('beforeend','<div style="margin-top:8px"><button class="btn orange" id="nr">Vòng tiếp theo ▶</button></div>'); $('#nr').onclick=()=>{ri++;draw()}; }
        else finish(st,wrongAll<=1?3:wrongAll<=4?2:1,st);
      } else { wrongAll++; fb(f,'no','Chưa phải kết quả tốt nhất. '+R.hint); }
    };
  }
  draw();
}

/* ---------- Kết thúc ---------- */
function finale(st){
  const total=state.got.reduce((a,b)=>a+(b||0),0);
  const rank = total>=10?'Thám tử xuất sắc':total>=7?'Thám tử giỏi':'Thám tử tập sự';
  st.innerHTML=`<div class="final"><div class="big">🏅</div><h2 style="font-size:2rem;color:var(--teal-d)">${rank}</h2>
  <p>Em đạt <b>${total} / 12 ⭐</b></p>
  <div class="recap"><div><b>Công cụ tìm kiếm</b><br>Dùng từ khóa để tìm trang Web. Khác với trình duyệt dùng để mở trang.</div><div><b>Quảng cáo</b><br>Kết quả “Ads/Sponsored” là mục có người trả tiền – cần cẩn thận.</div><div><b>Từ khóa</b><br>Chọn từ khóa rõ ràng; thử từ đồng nghĩa khi chưa ra kết quả.</div><div><b>Bộ lọc</b><br>Dùng bộ lọc (Tin tức, Hình ảnh, Video…) để thu hẹp kết quả.</div></div>
  <div class="row" style="justify-content:center"><button class="btn ghost" id="again">Chơi lại từ đầu</button></div></div>`;
  $('#again').onclick=()=>restart(true);
}

let fsz=18; try{ fsz=+localStorage.getItem('k4fontsize')||18 }catch(e){}
const setSize=px=>{ fsz=Math.max(16,Math.min(28,px)); document.documentElement.style.fontSize=fsz+'px'; try{localStorage.setItem('k4fontsize',fsz)}catch(e){} };
setSize(fsz);
$('#fsm').onclick=()=>setSize(fsz-2); $('#fbg').onclick=()=>setSize(fsz+2);
$('#restart').onclick=()=>restart();
render();
