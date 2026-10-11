"use strict";

/* ============================================================
DỮ LIỆU ÔN TẬP (giáo viên chỉ cần sửa/thêm ở đây)
Nguồn: review.js của Bài 16 (Đạo đức và hợp pháp) và Bài 17 (Tin tặc).
  CARDS : thẻ ghi nhớ  { icon, term, def, lesson }
  QUIZ  : câu trắc nghiệm { lesson, q, options, answers:[chỉ số đúng], explain }
          (answers có nhiều hơn 1 phần tử = chọn nhiều đáp án)
  TF    : câu Đúng/Sai { lesson, s, a:true/false, explain }
============================================================ */
const CARDS = [
  { icon:"🤝", term:"Ethical (Đạo đức)", lesson:"Bài 16", def:"Hành động có trách nhiệm, tôn trọng và tuân thủ luật pháp khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến." },
  { icon:"⚖️", term:"Legal (Hợp pháp)", lesson:"Bài 16", def:"Những hành động hoặc hoạt động được cho phép và không vi phạm các quy định hay luật pháp hiện hành." },
  { icon:"🏴‍☠️", term:"Piracy (Vi phạm bản quyền)", lesson:"Bài 16", def:"Sao chép, phân phối hoặc sử dụng nội dung kĩ thuật số mà không có sự cho phép của chủ sở hữu." },
  { icon:"🔓", term:"Hacking", lesson:"Bài 17", def:"Hành động truy cập trái phép vào thông tin kĩ thuật số." },
  { icon:"💻", term:"Hacker (Tin tặc)", lesson:"Bài 17", def:"Người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để xâm nhập trái phép vào hệ thống máy tính." },
  { icon:"🖤", term:"Black Hat Hacker (Tin tặc mũ đen)", lesson:"Bài 17", def:"Người sử dụng các kĩ năng Hack một cách bất hợp pháp và có mục đích xấu." },
  { icon:"🤍", term:"White Hat Hacker (Tin tặc mũ trắng)", lesson:"Bài 17", def:"Người sử dụng các kĩ năng Hack hợp pháp để xác định lỗ hổng bảo mật trong công nghệ, vì mục đích tốt." },
  { icon:"🩶", term:"Gray Hat Hacker (Tin tặc mũ xám)", lesson:"Bài 17", def:"Người tìm lỗ hổng bảo mật khi chưa được chủ sở hữu cho phép, sau đó chia sẻ phát hiện — thường phải trả phí." },
  { icon:"✊", term:"Hacktivist (Tin tặc kiêm nhà hoạt động)", lesson:"Bài 17", def:"Người dùng kĩ năng Hack vì mục đích, động cơ chính trị hoặc xã hội." },
  { icon:"🛡️", term:"Ethical Hacker (Tin tặc có đạo đức)", lesson:"Bài 17", def:"Hoạt động để xác định lỗ hổng bảo mật và đưa ra đề xuất để cải thiện." },
  { icon:"🔒", term:"Unethical Hacker (Tin tặc vô đạo đức)", lesson:"Bài 17", def:"Tấn công hệ thống mạng, ví dụ chặn không cho người dùng truy cập tập tin của họ." }
];

const QUIZ = [
  { lesson:"Bài 16", q:"Tùy chọn nào sau đây là đúng nhất về đạo đức (Ethical) khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến?",
    options:["Đạo đức (Ethical) là việc làm hài lòng mọi người khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến.",
             "Đạo đức (Ethical) là việc có trách nhiệm bảo vệ bản thân khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến.",
             "Đạo đức (Ethical) là việc bảo vệ quan điểm cá nhân bằng các hình thức, câu từ làm cho đối phương ức chế, khó chịu khi tham gia trực tuyến.",
             "Đạo đức (Ethical) là việc có trách nhiệm, tôn trọng và tuân thủ luật pháp khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến."],
    answers:[3], explain:"Đạo đức là việc có trách nhiệm, tôn trọng và tuân thủ luật pháp khi sử dụng công cụ kĩ thuật số." },
  { lesson:"Bài 16", q:"Tùy chọn nào sau đây thể hiện việc có đạo đức (Ethical) khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến? (Chọn 3)",
    options:["Chế giễu","Có trách nhiệm","Tuân thủ luật pháp","Tôn trọng"],
    answers:[1,2,3], explain:"Có đạo đức là có trách nhiệm, tôn trọng và tuân thủ luật pháp. Chế giễu thì không." },
  { lesson:"Bài 16", q:"Tùy chọn nào sau đây là đúng nhất về hợp pháp (Legal) trong môi trường kĩ thuật số?",
    options:["Hợp pháp (Legal) là những hành động hoặc hoạt động được cho phép và không vi phạm các quy định hay luật pháp hiện hành.",
             "Hợp pháp (Legal) là những hành động hoặc hoạt động trong trường học hoặc công ty.",
             "Hợp pháp (Legal) là những hành động hoặc hoạt động tôn giáo.",
             "Hợp pháp (Legal) là những hành động hoặc hoạt động mình thích."],
    answers:[0], explain:"Hợp pháp là những hành động được cho phép và không vi phạm quy định hay luật pháp hiện hành." },
  { lesson:"Bài 16", q:"Tùy chọn nào sau đây thể hiện hành động hợp pháp (Legal) khi tham gia trực tuyến?",
    options:["Chị An thường chia sẻ các kiến thức về Tin học lên mạng xã hội với nội dung gần gũi và lời văn lịch sự.",
             "Anh Duy sử dụng các kĩ thuật bẻ khóa để sử dụng các phần mềm mà không phải trả tiền.",
             "Anh Minh liên hệ với các hội nhóm mua chứng chỉ giả để bổ sung vào hồ sơ xin việc.",
             "Anh Nhân thường tìm các cửa hàng buôn bán đồ điện tử giá rẻ và không có giấy phép kinh doanh để trao đổi mua bán."],
    answers:[0], explain:"Chỉ có chia sẻ kiến thức Tin học với nội dung phù hợp là hợp pháp; ba hành động còn lại đều vi phạm luật." },
  { lesson:"Bài 16", q:"Tùy chọn nào sau đây thể hiện có đạo đức (Ethical) khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến? (Chọn 2)",
    options:["Bạn Hải chế ảnh của bạn cùng lớp, đưa lên mạng xã hội để chia sẻ với mọi người.",
             "Bạn An báo cáo các bài viết miệt thị ngoại hình với nhà quản lí của nền tảng mạng xã hội.",
             "Bạn Bình làm theo các hướng dẫn trên mạng để gian lận các bài kiểm tra trực tuyến.",
             "Bạn Nhân luôn sử dụng ngôn từ lịch sự, văn minh khi nói chuyện, trao đổi thông tin với mọi người trên mạng xã hội."],
    answers:[1,3], explain:"Báo cáo bài viết miệt thị và dùng ngôn từ lịch sự, văn minh là hành vi có đạo đức." },
  { lesson:"Bài 17", q:"Hai loại tin tặc nào dù không có mục đích xấu, nhưng cũng không được tự ý xâm nhập vào hệ thống? (Chọn 2)",
    options:["Tin tặc mũ trắng","Tin tặc mũ đen","Tin tặc mũ xám","Tin tặc kiêm nhà hoạt động (Hacktivist)"],
    answers:[2,3], explain:"Mũ xám và Hacktivist không hẳn có mục đích xấu nhưng vẫn không có quyền tự ý xâm nhập hệ thống." },
  { lesson:"Bài 17", q:"Điền vào chỗ trống: “………………….. hoạt động để xác định lỗ hổng bảo mật và đưa ra đề xuất để cải thiện.”",
    options:["Tin tặc vô đạo đức","Tin tặc có đạo đức"],
    answers:[1], explain:"Tin tặc có đạo đức hoạt động để xác định lỗ hổng bảo mật và đưa ra đề xuất cải thiện." },
  { lesson:"Bài 17", q:"Hacker mũ trắng là gì?",
    options:["Ai đó đội mũ trắng để che giấu danh tính","Một người sử dụng các kĩ năng và kiến thức máy tính cho mục đích tốt","Người mặc đồ trắng khi sử dụng máy tính","Ai đó nhắm vào những người xấu trực tuyến"],
    answers:[1], explain:"“Mũ trắng” chỉ mục đích tốt, không phải trang phục." },
  { lesson:"Bài 17", q:"Tùy chọn nào sau đây là đúng nhất về tin tặc (Hacker)?",
    options:["Là người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để xâm nhập trái phép vào hệ thống máy tính.",
             "Là người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để bán hàng trực tuyến.",
             "Là người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để truyền thông và Marketing.",
             "Là người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để tạo các Website giả mạo."],
    answers:[0], explain:"Từ khóa: “xâm nhập trái phép vào hệ thống máy tính”." },
  { lesson:"Bài 17", q:"Loại tin tặc nào sau đây sử dụng các kĩ năng Hack vì mục đích, động cơ chính trị hoặc xã hội?",
    options:["Tin tặc kiêm nhà hoạt động (Hacktivist)","Tin tặc mũ đen (Black Hat Hacker)","Tin tặc mũ nâu (Brown Hat Hacker)","Tin tặc mũ trắng (White Hat Hacker)"],
    answers:[0], explain:"Hacktivist dùng kĩ năng Hack vì mục đích, động cơ chính trị hoặc xã hội." }
];

const TF = [
  { lesson:"Bài 16", s:"Đạo đức (Ethical) là hành động có trách nhiệm, tôn trọng và tuân thủ luật pháp.", a:true, explain:"Đúng — ba từ khóa của đạo đức: trách nhiệm, tôn trọng, tuân thủ luật pháp." },
  { lesson:"Bài 16", s:"Chế giễu người khác trên mạng là hành vi có đạo đức.", a:false, explain:"Sai — chế giễu không tôn trọng người khác." },
  { lesson:"Bài 16", s:"Bẻ khóa phần mềm để dùng miễn phí là hành động hợp pháp.", a:false, explain:"Sai — đó là vi phạm bản quyền (Piracy)." },
  { lesson:"Bài 16", s:"Piracy là dùng nội dung kĩ thuật số khi chưa được chủ sở hữu cho phép.", a:true, explain:"Đúng — Piracy là vi phạm bản quyền." },
  { lesson:"Bài 16", s:"Báo cáo bài viết miệt thị với nhà quản lí nền tảng là hành vi có đạo đức.", a:true, explain:"Đúng — đó là hành động có trách nhiệm." },
  { lesson:"Bài 16", s:"Hợp pháp (Legal) nghĩa là hành động mà mình thích.", a:false, explain:"Sai — hợp pháp là được cho phép và không vi phạm luật." },
  { lesson:"Bài 17", s:"Hacking là hành động truy cập trái phép vào thông tin kĩ thuật số.", a:true, explain:"Đúng." },
  { lesson:"Bài 17", s:"Tin tặc mũ trắng sử dụng kĩ năng Hack một cách bất hợp pháp với mục đích xấu.", a:false, explain:"Sai — đó là tin tặc mũ đen. Mũ trắng hợp pháp và vì mục đích tốt." },
  { lesson:"Bài 17", s:"Hacktivist dùng kĩ năng Hack vì động cơ chính trị hoặc xã hội.", a:true, explain:"Đúng." },
  { lesson:"Bài 17", s:"Tin tặc mũ xám tìm lỗ hổng bảo mật khi đã được chủ sở hữu cho phép.", a:false, explain:"Sai — mũ xám tìm lỗ hổng khi CHƯA được cho phép." },
  { lesson:"Bài 17", s:"Tin tặc có đạo đức xác định lỗ hổng bảo mật và đề xuất cách cải thiện.", a:true, explain:"Đúng." },
  { lesson:"Bài 17", s:"Mũ trắng nghĩa là người đó mặc đồ trắng khi dùng máy tính.", a:false, explain:"Sai — “mũ trắng” chỉ mục đích tốt, không phải trang phục." }
];

/* ============================================================
CÁC CÁCH ÔN TẬP
============================================================ */
const MODES = [
  { id:"summary", ico:"📚", name:"Tóm tắt nhanh", desc:"Đọc lại kiến thức trọng tâm của hai bài trên một trang.", tag:"Đọc" },
  { id:"cards",   ico:"🃏", name:"Thẻ ghi nhớ", desc:"Lật thẻ để nhớ thuật ngữ và định nghĩa. Có thể xáo trộn.", tag:"11 thẻ" },
  { id:"quiz",    ico:"📝", name:"Trắc nghiệm luyện tập", desc:"Trả lời từng câu, xem đáp án và giải thích ngay.", tag:"10 câu" },
  { id:"match",   ico:"🧩", name:"Ghép đôi", desc:"Nối thuật ngữ với định nghĩa đúng. Nối hết cả vòng để thắng.", tag:"Trò chơi" },
  { id:"tf",      ico:"⚡", name:"Đúng hay Sai?", desc:"Đọc phát biểu và chọn nhanh Đúng hoặc Sai.", tag:"12 câu" },
  { id:"exam",    ico:"🏆", name:"Thử thách tổng hợp", desc:"Làm hết bài không xem đáp án, cuối cùng nhận điểm và xem lại câu sai.", tag:"Tính điểm" }
];

const $ = (s) => document.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const view = $("#view");

$("#modes").innerHTML = MODES.map((m) =>
  `<button class="mode" data-mode="${m.id}"><div class="ico">${m.ico}</div><h3>${m.name}</h3><p>${m.desc}</p><span class="tag">${m.tag}</span></button>`).join("");
$("#modes").addEventListener("click", (e) => { const b = e.target.closest(".mode"); if (b) open(b.dataset.mode); });
$("#btn-home").addEventListener("click", () => { $("#stage").classList.add("hidden"); $("#hub").classList.remove("hidden"); window.scrollTo(0, 0); });

function open(id) {
  const m = MODES.find((x) => x.id === id);
  $("#hub").classList.add("hidden"); $("#stage").classList.remove("hidden");
  $("#mode-title").textContent = m.ico + " " + m.name;
  window.scrollTo(0, 0);
  ({ summary, cards, quiz: () => runQuiz(false), exam: () => runQuiz(true), match, tf })[id]();
}
const progress = (i, n, extra) =>
  `<div class="bar"><i style="width:${Math.round(i / n * 100)}%"></i></div><div class="meta"><span>Câu ${Math.min(i + 1, n)}/${n}</span><span>${extra || ""}</span></div>`;

function endScreen(title, score, total, wrong, again) {
  const pct = Math.round(score / total * 100);
  const msg = pct === 100 ? "Tuyệt vời! Em nắm chắc kiến thức rồi! 🌟" : pct >= 70 ? "Làm tốt lắm! Xem lại vài câu nữa là hoàn hảo. 👍" : "Cố lên! Hãy đọc Tóm tắt nhanh rồi thử lại nhé. 💪";
  view.innerHTML = `<div class="card center"><h2>${title}</h2><div class="score">${score}/${total}</div><p>${msg}</p>` +
    (wrong.length ? `<h3>Các câu cần xem lại</h3><ol class="wrong-list">${wrong.map((w) => `<li><b>${esc(w.q)}</b><br>✅ ${esc(w.right)}<br><small>${esc(w.explain)}</small></li>`).join("")}</ol>` : "") +
    `<div class="actions"><button class="btn warm" id="again">🔄 Làm lại</button><button class="btn" id="home2">Chọn cách ôn khác</button></div></div>`;
  $("#again").onclick = again; $("#home2").onclick = () => $("#btn-home").click();
}

/* ---------- 1. Tóm tắt ---------- */
function summary() {
  view.innerHTML = `<div class="card sum">
  <h3>⚖️ Bài 16 — Đạo đức và hợp pháp</h3>
  <ul>
    <li><b>Đạo đức (Ethical)</b>: có <b>trách nhiệm</b>, <b>tôn trọng</b> và <b>tuân thủ luật pháp</b> khi dùng công cụ kĩ thuật số.</li>
    <li><b>Hợp pháp (Legal)</b>: được cho phép và không vi phạm quy định, luật pháp hiện hành.</li>
    <li><b>Piracy</b>: sao chép, phân phối hoặc dùng nội dung số khi chưa được chủ sở hữu cho phép.</li>
  </ul>
  <div class="key">Có đạo đức: lịch sự, báo cáo bài viết xấu. Không có đạo đức / bất hợp pháp: chế giễu, gian lận kiểm tra, bẻ khóa phần mềm, mua chứng chỉ giả.</div>
  <h3>🕵️ Bài 17 — Tin tặc</h3>
  <ul>
    <li><b>Hacking</b>: truy cập trái phép vào thông tin kĩ thuật số.</li>
    <li><b>Hacker</b>: dùng kiến thức công nghệ để xâm nhập trái phép vào hệ thống máy tính.</li>
  </ul>
  <div class="tbl-wrap"><table class="hat">
    <tr><th>Loại tin tặc</th><th>Đặc điểm</th></tr>
    <tr><td>🖤 Mũ đen</td><td>Bất hợp pháp, mục đích xấu.</td></tr>
    <tr><td>🤍 Mũ trắng</td><td>Hợp pháp, mục đích tốt, tìm lỗ hổng bảo mật để khắc phục.</td></tr>
    <tr><td>🩶 Mũ xám</td><td>Tìm lỗ hổng khi chưa được phép, rồi chia sẻ phát hiện (thường lấy phí).</td></tr>
    <tr><td>✊ Hacktivist</td><td>Hack vì động cơ chính trị hoặc xã hội.</td></tr>
    <tr><td>🛡️ Có đạo đức</td><td>Xác định lỗ hổng và đề xuất cải thiện.</td></tr>
    <tr><td>🔒 Vô đạo đức</td><td>Tấn công hệ thống, ví dụ chặn người dùng truy cập tập tin.</td></tr>
  </table></div>
  <div class="key">Mẹo nhớ: Mũ trắng = tốt &amp; được phép · Mũ đen = xấu &amp; trái phép · Mũ xám và Hacktivist = không hẳn xấu nhưng vẫn không được tự ý xâm nhập.</div>
  <div class="actions"><button class="btn go" id="go-cards">🃏 Sang Thẻ ghi nhớ</button></div></div>`;
  $("#go-cards").onclick = () => open("cards");
}

/* ---------- 2. Thẻ ghi nhớ ---------- */
function cards() {
  let deck = CARDS.slice(), i = 0;
  const draw = () => {
    const c = deck[i];
    view.innerHTML = progress(i, deck.length, "Bấm vào thẻ để lật") +
      `<div class="flip" id="flip"><div class="flip-in" id="flip-in" tabindex="0" role="button" aria-label="Lật thẻ">
        <div class="face front"><div class="big">${c.icon}</div><h2>${esc(c.term)}</h2><p>${c.lesson}</p><p class="hint">Bấm để xem định nghĩa</p></div>
        <div class="face back"><p>${esc(c.def)}</p></div></div></div>
      <div class="actions"><button class="btn small" id="prev" ${i === 0 ? "disabled" : ""}>← Trước</button>
        <button class="btn small" id="shuf">🔀 Xáo trộn</button>
        <button class="btn go" id="next">${i === deck.length - 1 ? "Xong ✓" : "Tiếp →"}</button></div>`;
    const f = $("#flip"), flip = () => f.classList.toggle("on");
    $("#flip-in").onclick = flip;
    $("#flip-in").onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } };
    $("#prev").onclick = () => { i--; draw(); };
    $("#shuf").onclick = () => { deck = shuffle(deck); i = 0; draw(); };
    $("#next").onclick = () => { if (i === deck.length - 1) { $("#btn-home").click(); } else { i++; draw(); } };
  };
  draw();
}

/* ---------- 3 & 6. Trắc nghiệm / Thử thách ---------- */
function runQuiz(isExam) {
  const qs = shuffle(QUIZ).map((q) => ({ ...q, order: shuffle(q.options.map((_, k) => k)) }));
  let i = 0, score = 0; const wrong = [];
  const next = () => { i++; i < qs.length ? draw() : endScreen(isExam ? "🏆 Kết quả thử thách" : "🎉 Hoàn thành luyện tập", score, qs.length, wrong, () => runQuiz(isExam)); };
  const draw = () => {
    const q = qs[i], multi = q.answers.length > 1, sel = new Set();
    view.innerHTML = progress(i, qs.length, `⭐ ${isExam ? "" : score}`) +
      `<div class="card"><span class="lesson-tag">${q.lesson}</span><div class="q">${esc(q.q)}</div>
      ${multi ? `<p><small>Chọn ${q.answers.length} đáp án</small></p>` : ""}
      <div class="opts">${q.order.map((k) => `<button class="opt" data-k="${k}">${esc(q.options[k])}</button>`).join("")}</div>
      <div id="fb"></div>
      <div class="actions"><button class="btn" id="ok" disabled>XÁC NHẬN</button><button class="btn go hidden" id="nx">${i === qs.length - 1 ? "XEM KẾT QUẢ" : "CÂU TIẾP →"}</button></div></div>`;
    const btns = [...view.querySelectorAll(".opt")], ok = $("#ok");
    btns.forEach((b) => b.onclick = () => {
      const k = +b.dataset.k;
      if (!multi) { sel.clear(); btns.forEach((x) => x.classList.remove("sel")); }
      if (sel.has(k)) { sel.delete(k); b.classList.remove("sel"); } else { sel.add(k); b.classList.add("sel"); }
      ok.disabled = multi ? sel.size !== q.answers.length : sel.size !== 1;
    });
    ok.onclick = () => {
      const good = sel.size === q.answers.length && q.answers.every((a) => sel.has(a));
      if (good) score++; else wrong.push({ q: q.q, right: q.answers.map((a) => q.options[a]).join(" • "), explain: q.explain });
      if (isExam) return next();
      btns.forEach((b) => { b.disabled = true; const k = +b.dataset.k; if (q.answers.includes(k)) b.classList.add("ok"); else if (sel.has(k)) b.classList.add("no"); });
      $("#fb").innerHTML = `<div class="fb ${good ? "ok" : "no"}">${good ? "🎉 Chính xác!" : "💡 Chưa đúng rồi."}<small>${esc(q.explain)}</small></div>`;
      ok.classList.add("hidden"); $("#nx").classList.remove("hidden"); $("#nx").focus();
    };
    $("#nx").onclick = next;
  };
  draw();
}

/* ---------- 4. Ghép đôi ---------- */
function match() {
  const rounds = [];
  const pool = shuffle(CARDS);
  for (let k = 0; k < pool.length; k += 4) rounds.push(pool.slice(k, k + 4));
  if (rounds.length > 1 && rounds[rounds.length - 1].length < 3) rounds[rounds.length - 2].push(...rounds.pop());
  let r = 0, errors = 0;
  const draw = () => {
    const set = rounds[r]; let left = null, done = 0;
    view.innerHTML = progress(r, rounds.length, `Lượt sai: ${errors}`).replace("Câu", "Vòng") +
      `<div class="card"><div class="q">Bấm một thuật ngữ, rồi bấm định nghĩa tương ứng.</div><div class="match">
      <div class="col">${shuffle(set).map((c) => `<button class="tile" data-s="L" data-t="${esc(c.term)}">${c.icon} ${esc(c.term)}</button>`).join("")}</div>
      <div class="col">${shuffle(set).map((c) => `<button class="tile" data-s="R" data-t="${esc(c.term)}">${esc(c.def)}</button>`).join("")}</div></div></div>`;
    view.querySelectorAll(".tile").forEach((t) => t.onclick = () => {
      if (t.classList.contains("done")) return;
      if (t.dataset.s === "L") { view.querySelectorAll('.tile[data-s="L"]').forEach((x) => x.classList.remove("sel")); left = t; t.classList.add("sel"); return; }
      if (!left) return;
      if (left.dataset.t === t.dataset.t) {
        left.classList.remove("sel"); left.classList.add("done"); t.classList.add("done"); left = null;
        if (++done === set.length) setTimeout(() => {
          if (++r < rounds.length) return draw();
          view.innerHTML = `<div class="card center"><h2>🧩 Đã ghép xong!</h2><div class="score">${errors === 0 ? "Hoàn hảo!" : errors + " lần sai"}</div>
            <p>${errors === 0 ? "Không sai lần nào — tuyệt vời! 🌟" : "Chơi lại để giảm số lần sai nhé. 💪"}</p>
            <div class="actions"><button class="btn warm" id="again">🔄 Chơi lại</button><button class="btn" id="home2">Chọn cách ôn khác</button></div></div>`;
          $("#again").onclick = match; $("#home2").onclick = () => $("#btn-home").click();
        }, 500);
      } else { errors++; t.classList.add("bad"); setTimeout(() => t.classList.remove("bad"), 400); }
    });
  };
  draw();
}

/* ---------- 5. Đúng hay Sai ---------- */
function tf() {
  const qs = shuffle(TF); let i = 0, score = 0; const wrong = [];
  const draw = () => {
    const q = qs[i];
    view.innerHTML = progress(i, qs.length, `⭐ ${score}`) +
      `<div class="card"><span class="lesson-tag">${q.lesson}</span><div class="q">${esc(q.s)}</div>
      <div class="tf"><button class="btn t" data-v="1">✔ ĐÚNG</button><button class="btn f" data-v="0">✘ SAI</button></div>
      <div id="fb"></div><div class="actions"><button class="btn go hidden" id="nx">${i === qs.length - 1 ? "XEM KẾT QUẢ" : "CÂU TIẾP →"}</button></div></div>`;
    view.querySelectorAll(".tf .btn").forEach((b) => b.onclick = () => {
      const good = (b.dataset.v === "1") === q.a;
      if (good) score++; else wrong.push({ q: q.s, right: q.a ? "Đúng" : "Sai", explain: q.explain });
      view.querySelectorAll(".tf .btn").forEach((x) => x.disabled = true);
      $("#fb").innerHTML = `<div class="fb ${good ? "ok" : "no"}">${good ? "🎉 Chính xác!" : "💡 Chưa đúng."}<small>${esc(q.explain)}</small></div>`;
      $("#nx").classList.remove("hidden"); $("#nx").focus();
    });
    $("#nx").onclick = () => { i++; i < qs.length ? draw() : endScreen("⚡ Kết quả Đúng/Sai", score, qs.length, wrong, tf); };
  };
  draw();
}
