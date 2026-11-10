(function () {
  "use strict";
  var STAGES = window.STAGES, Q = window.QUESTIONS;
  var TOTAL = window.TOTAL_SCORE, PASS = window.PASS_SCORE, MAXHINT = window.TOTAL_HINTS;

  /* Chia 1000 điểm cho các câu: 45 câu → 22 điểm, 10 câu đầu thêm 1 điểm */
  var base = Math.floor(TOTAL / Q.length), extra = TOTAL % Q.length;
  Q.forEach(function (q, i) { q.pts = base + (i < extra ? 1 : 0); });

  var $ = function (id) { return document.getElementById(id); };
  var main = $("main");
  var COLORS = ["#2b6cff", "#e8590c", "#9c36b5", "#0b8f7a"];
  var PRAISE = ["Tuyệt vời!", "Chính xác!", "Giỏi quá!", "Đúng rồi, em thật thông minh!", "Hoan hô!"];
  var OOPS = ["Không sao, lần sau em sẽ nhớ nhé!", "Chưa đúng rồi, hãy đọc đáp án để nhớ nhé.", "Cố lên, Bit tin em sẽ làm được!"];

  var st;
  function newGame() {
    st = { phase: "start", si: 0, qi: 0, score: 0, lost: 0, hints: MAXHINT, done: 0, stageEarned: [], stageMax: [], results: [] };
    S_forEach(function (s, i) { st.stageEarned[i] = 0; st.stageMax[i] = 0; });
    Q.forEach(function (q) { st.stageMax[q.stage - 1] += q.pts; });
  }
  function S_forEach(f) { STAGES.forEach(f); }

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function stageQs(si) { return Q.filter(function (q) { return q.stage === si + 1; }); }
  function bit(t) { $("bitText").textContent = t; }
  function best(v) {
    try {
      if (v != null) { var o = +localStorage.getItem("spark2-on-tap-3-best") || 0; if (v > o) localStorage.setItem("spark2-on-tap-3-best", v); }
      return +localStorage.getItem("spark2-on-tap-3-best") || 0;
    } catch (e) { return 0; }
  }
  function gemFor(r) { return r >= 0.9 ? ["💎", "Tinh Thể sáng rực"] : r >= 0.6 ? ["🔷", "Tinh Thể sáng"] : ["🔹", "Tinh Thể còn mờ"]; }
  function show(html, keepScroll) {
    main.innerHTML = html;
    if (!keepScroll) { window.scrollTo(0, 0); }
    try { main.focus({ preventScroll: true }); } catch (e) {}
  }

  /* ---------- Thanh bên ---------- */
  function updateSide() {
    $("topScore").textContent = st.score;
    $("scoreNum").textContent = st.score;
    var f = $("meterFill"); f.style.width = Math.min(100, st.score / TOTAL * 100) + "%";
    f.classList.toggle("pass", st.score >= PASS);
    var maxPossible = TOTAL - st.lost, room = maxPossible - PASS;
    $("meterNote").textContent = room >= 0
      ? (st.phase === "final" ? "Điểm cần đạt: 900." : "Em còn được phép mất tối đa " + room + " điểm nữa để đạt 900.")
      : "Điểm tối đa còn lại là " + maxPossible + ", chưa đủ 900 — nhưng cứ luyện tập tiếp nhé!";
    var b = ""; for (var i = 0; i < MAXHINT; i++) b += '<span class="' + (i < st.hints ? "" : "off") + '">💡</span>';
    $("bulbs").innerHTML = b;
    $("progFill").style.width = (st.done / Q.length * 100) + "%";
    $("progText").textContent = "Câu " + st.done + "/" + Q.length;
    var h = "";
    STAGES.forEach(function (s, i) {
      var finished = st.phase === "final" || i < st.si || (i === st.si && st.phase === "stageEnd");
      var cls = finished ? "done" : (i === st.si && st.phase !== "start" ? "now" : "");
      var gem = finished ? gemFor(st.stageEarned[i] / st.stageMax[i])[0] : "";
      h += '<li class="' + cls + '"' + (cls === "now" ? ' aria-current="step"' : "") + '><span class="ic">' + s.icon + '</span><span class="nm">' + esc(s.name) + '<small>' + esc(s.lesson.split(" · ")[0]) + '</small></span><span class="gem">' + gem + "</span></li>";
    });
    $("map").innerHTML = h;
  }
  function updateHintBtn() {
    var b = $("hintBtn"), c = st.cur;
    var ok = st.phase === "question" && c && !c.answered && !c.hinted && st.hints > 0;
    b.disabled = !ok;
    $("hintNote").textContent = st.phase !== "question" ? "Mỗi lượt chơi có 3 gợi ý. Em chỉ dùng được 1 gợi ý cho mỗi câu."
      : c && c.hinted ? "Em đã dùng gợi ý cho câu này rồi."
      : st.hints === 0 ? "Em đã dùng hết 3 gợi ý."
      : "Còn " + st.hints + " gợi ý. Gợi ý sẽ cho một lời nhắc và giúp em loại bớt đáp án sai.";
  }

  /* ---------- Màn hình ---------- */
  function startScreen() {
    st.phase = "start"; updateSide(); updateHintBtn();
    bit("Chào em! Mình là Bit. Hãy cùng mình đi cứu Chìa Khóa Vàng nhé!");
    var hb = best();
    show('<section class="panel">' +
      '<div class="hero" aria-hidden="true">🏰🗝️</div>' +
      '<span class="tag">Ôn tập Spark 2 · Cuối kỳ</span>' +
      '<h1>Giải Cứu Chìa Khóa Vàng</h1>' +
      '<p class="story">Ở rìa thế giới máy tính có một <b>Tòa Tháp Văn Phòng</b>, nơi cất giữ mọi bí quyết về Word, PowerPoint và Excel. Cánh cửa tháp chỉ mở bằng <b>Chìa Khóa Vàng</b>. Nhưng Phù thủy <b>Lỗi Lầm</b> đã đập vỡ chiếc chìa khóa thành <b>8 mảnh Tinh Thể</b> và giấu chúng khắp 8 vùng đất.</p>' +
      '<p class="story">Em là Tập sự viên Tin học, cùng chú robot <b>Bit</b> đi qua từng chặng, trả lời câu hỏi để lấy lại các mảnh Tinh Thể. Mỗi chặng là một bài học em đã được học.</p>' +
      '<div class="goal"><b>Luật chơi</b><ul class="rules">' +
      '<li>Có <b>' + Q.length + ' câu hỏi</b> trong <b>' + STAGES.length + ' chặng</b>. Tổng điểm là <b>' + TOTAL + '</b>.</li>' +
      '<li>Em cần đạt từ <b>' + PASS + ' điểm</b> để giải cứu thành công Chìa Khóa Vàng.</li>' +
      '<li>Em có <b>3 gợi ý</b> cho cả hành trình. Mỗi câu dùng được tối đa 1 gợi ý.</li>' +
      '<li>Đọc kỹ câu hỏi rồi mới chọn nhé. Mỗi câu em chỉ trả lời một lần.</li></ul></div>' +
      (hb ? '<p class="small">Điểm cao nhất của em trên máy này: <b>' + hb + '</b></p>' : '') +
      '<div class="actions"><button class="btn go" id="go" type="button">▶ Bắt đầu hành trình</button></div></section>');
    $("go").onclick = function () { stageIntro(); };
  }

  function stageIntro() {
    st.phase = "stageIntro"; var s = STAGES[st.si], n = stageQs(st.si).length;
    updateSide(); updateHintBtn();
    bit("Chặng " + s.id + ": " + s.name + ". Chúng ta đi thôi!");
    show('<section class="panel"><span class="tag">Chặng ' + s.id + '/' + STAGES.length + ' · ' + esc(s.lesson) + '</span>' +
      '<div class="hero" aria-hidden="true">' + s.icon + '</div><h1>' + esc(s.name) + '</h1>' +
      '<p class="story">' + esc(s.story) + '</p>' +
      '<div class="goal"><b>Nhiệm vụ:</b> ' + esc(s.goal) + '<br><span class="small">Chặng này có ' + n + ' câu hỏi.</span></div>' +
      '<div class="actions"><button class="btn go" id="go" type="button">▶ Vào chặng</button></div></section>');
    $("go").onclick = function () { st.qi = 0; question(); };
  }

  /* ---------- Câu hỏi ---------- */
  function question() {
    var qs = stageQs(st.si), q = qs[st.qi], s = STAGES[st.si];
    st.phase = "question";
    var c = st.cur = { q: q, answered: false, hinted: false, elim: {}, sel: [], ans: null, lock: null, pairs: null, pl: null, order: null };
    if (q.type === "rows") { c.ans = q.rows.map(function () { return null; }); c.lock = q.rows.map(function () { return false; }); }
    if (q.type === "match") { c.pairs = q.pairs.map(function () { return -1; }); c.lock = q.pairs.map(function () { return false; }); c.order = shuffle(q.pairs.map(function (_, i) { return i; })); }
    var note = q.type === "multi" ? "Chọn " + q.pick + " đáp án" : q.type === "match" ? "Ghép nối" : q.type === "rows" ? "Chọn cho từng dòng" : q.type === "hotspot" ? "Nhấp vào hình" : "Chọn 1 đáp án";
    updateSide(); updateHintBtn();
    bit(st.qi === 0 ? "Chặng này bắt đầu rồi, em đọc kỹ nhé!" : "Câu tiếp theo nào, em làm được mà!");
    show('<section class="panel"><div class="qhead"><span class="tag">' + s.icon + ' ' + esc(s.name) + ' · Câu ' + (st.qi + 1) + '/' + qs.length + '</span>' +
      '<span class="qpts">' + esc(note) + ' · ' + q.pts + ' điểm</span></div>' +
      '<h1 class="qtext">' + esc(q.q) + '</h1>' +
      '<div class="clue" id="clue" role="status"></div>' +
      '<div id="body"></div><div id="fb"></div><div class="actions" id="acts"></div></section>', false);
    draw();
  }

  function draw() {
    var c = st.cur, q = c.q, body = $("body"), acts = $("acts"), h = "", i;
    var done = c.answered;
    acts.innerHTML = "";
    if (q.type === "choice" || q.type === "multi") {
      h = '<div class="opts">';
      q.opts.forEach(function (o, i) {
        var cls = "opt", isA = q.type === "multi" ? q.a.indexOf(i) >= 0 : q.a === i, chosen = c.sel.indexOf(i) >= 0;
        if (c.elim[i]) cls += " elim";
        if (!done && chosen) cls += " sel";
        if (done && isA) cls += " right"; else if (done && chosen) cls += " wrong";
        h += '<button type="button" class="' + cls + '" data-i="' + i + '"' + (done || c.elim[i] ? " disabled" : "") + '><span class="k">' + "ABCD".charAt(i) + '</span><span>' + esc(o) + '</span></button>';
      });
      body.innerHTML = h + "</div>";
      Array.prototype.forEach.call(body.querySelectorAll(".opt"), function (b) {
        b.onclick = function () {
          var i = +b.dataset.i;
          if (q.type === "choice") { c.sel = [i]; finish(i === q.a ? 1 : 0, q.opts[q.a]); }
          else { var p = c.sel.indexOf(i); if (p >= 0) c.sel.splice(p, 1); else if (c.sel.length < q.pick) c.sel.push(i); draw(); }
        };
      });
      if (q.type === "multi" && !done) {
        acts.innerHTML = '<button class="btn" id="chk" type="button"' + (c.sel.length === q.pick ? "" : " disabled") + '>Chốt đáp án (' + c.sel.length + '/' + q.pick + ')</button>';
        $("chk").onclick = function () {
          var ok = c.sel.filter(function (i) { return q.a.indexOf(i) >= 0; }).length, bad = c.sel.length - ok;
          finish(Math.max(0, ok - bad) / q.pick, q.a.map(function (i) { return q.opts[i]; }).join("  •  "));
        };
      }
    } else if (q.type === "hotspot") {
      h = '<div class="hs-wrap' + (q.wide ? " wide" : "") + '" style="aspect-ratio:' + q.ratio + '"><img src="' + q.img + '" alt="' + esc(q.alt) + '" draggable="false">';
      q.regions.forEach(function (r) {
        var cls = "hs", chosen = c.sel[0] === r.id;
        if (c.elim[r.id]) cls += " elim";
        if (!done && chosen) cls += " sel";
        if (done && r.id === q.a) cls += " right"; else if (done && chosen) cls += " wrong";
        h += '<button type="button" class="' + cls + '" data-id="' + r.id + '" style="left:' + r.x + '%;top:' + r.y + '%;width:' + r.w + '%;height:' + r.h + '%"' +
          ' aria-label="' + esc(r.label ? "Vùng " + r.label : "Vùng chọn " + (q.regions.indexOf(r) + 1)) + '"' + (done || c.elim[r.id] ? " disabled" : "") + '>' + (r.label ? '<span class="lb">' + esc(r.label) + '</span>' : "") + '</button>';
      });
      body.innerHTML = h + '</div><p class="hs-tip">Nhấp trực tiếp vào hình để chọn đáp án.</p>';
      Array.prototype.forEach.call(body.querySelectorAll(".hs"), function (b) {
        b.onclick = function () { c.sel = [b.dataset.id]; finish(b.dataset.id === q.a ? 1 : 0, q.answerText); };
      });
    } else if (q.type === "rows") {
      h = '<div class="rows">';
      q.rows.forEach(function (r, i) {
        var rc = "row" + (c.lock[i] ? " hinted" : "");
        if (done) rc += c.ans[i] === r[1] ? " ok" : " no";
        h += '<div class="' + rc + '"><div class="t">' + (i + 1) + '. ' + esc(r[0]) + '</div><div class="ch">';
        q.choices.forEach(function (ch, j) {
          var cc = "chip";
          if (done) { if (j === r[1]) cc += " right"; else if (c.ans[i] === j) cc += " wrong"; }
          else if (c.lock[i] && c.ans[i] === j) cc += " lock";
          else if (c.ans[i] === j) cc += " sel";
          h += '<button type="button" class="' + cc + '" data-r="' + i + '" data-j="' + j + '"' + (done || c.lock[i] ? " disabled" : "") + '>' + esc(ch) + '</button>';
        });
        h += "</div></div>";
      });
      body.innerHTML = h + "</div>";
      Array.prototype.forEach.call(body.querySelectorAll(".chip"), function (b) {
        b.onclick = function () { c.ans[+b.dataset.r] = +b.dataset.j; draw(); };
      });
      if (!done) {
        var all = c.ans.every(function (a) { return a !== null; });
        acts.innerHTML = '<button class="btn" id="chk" type="button"' + (all ? "" : " disabled") + '>Chốt đáp án</button>';
        $("chk").onclick = function () {
          var ok = q.rows.filter(function (r, i) { return c.ans[i] === r[1]; }).length;
          finish(ok / q.rows.length, "");
        };
      }
    } else if (q.type === "match") {
      var left = "", right = "";
      q.pairs.forEach(function (p, i) {
        var cls = "mi", st2 = "";
        var j = c.pairs[i];
        if (j >= 0) st2 = ' data-c="1" style="--c:' + COLORS[i % 4] + '"';
        if (c.pl === i) cls += " pick";
        if (c.lock[i]) cls += " lock";
        if (done) cls += j === i ? " right" : " wrong";
        left += '<button type="button" class="' + cls + '" data-l="' + i + '"' + st2 + (done || c.lock[i] ? " disabled" : "") + '>' +
          (j >= 0 ? '<span class="dot" style="--c:' + COLORS[i % 4] + '">' + (i + 1) + '</span>' : "") + esc(p[0]) + '</button>';
      });
      c.order.forEach(function (j) {
        var owner = c.pairs.indexOf(j), cls = "mi", st2 = "";
        if (owner >= 0) st2 = ' data-c="1" style="--c:' + COLORS[owner % 4] + '"';
        if (c.lock[owner]) cls += " lock";
        if (done) cls += owner === j ? " right" : " wrong";
        right += '<button type="button" class="' + cls + '" data-r="' + j + '"' + st2 + (done || (owner >= 0 && c.lock[owner]) ? " disabled" : "") + '>' +
          (owner >= 0 ? '<span class="dot" style="--c:' + COLORS[owner % 4] + '">' + (owner + 1) + '</span>' : "") + esc(q.pairs[j][1]) + '</button>';
      });
      body.innerHTML = '<div class="match"><div class="col"><h3>Định nghĩa</h3>' + left + '</div><div class="col"><h3>Thuật ngữ</h3>' + right + '</div></div>' +
        '<p class="mnote">' + (done ? "" : c.pl !== null ? "Bây giờ hãy chọn thuật ngữ ở cột bên phải." : "Chọn một định nghĩa, rồi chọn thuật ngữ tương ứng. Nhấp vào một cặp đã ghép để bỏ ghép.") + '</p>';
      Array.prototype.forEach.call(body.querySelectorAll("[data-l]"), function (b) {
        b.onclick = function () {
          var i = +b.dataset.l;
          if (c.pairs[i] >= 0) { c.pairs[i] = -1; c.pl = null; } else c.pl = c.pl === i ? null : i;
          draw();
        };
      });
      Array.prototype.forEach.call(body.querySelectorAll("[data-r]"), function (b) {
        b.onclick = function () {
          var j = +b.dataset.r, owner = c.pairs.indexOf(j);
          if (c.pl !== null) {
            if (owner >= 0) c.pairs[owner] = -1;
            c.pairs[c.pl] = j; c.pl = null;
          } else if (owner >= 0) c.pairs[owner] = -1;
          draw();
        };
      });
      if (!done) {
        var allp = c.pairs.every(function (p) { return p >= 0; });
        acts.innerHTML = '<button class="btn" id="chk" type="button"' + (allp ? "" : " disabled") + '>Chốt đáp án</button>';
        $("chk").onclick = function () {
          var ok = c.pairs.filter(function (p, i) { return p === i; }).length;
          finish(ok / q.pairs.length, "");
        };
      }
    }
    updateHintBtn();
  }

  function finish(frac, ansText) {
    var c = st.cur, q = c.q;
    c.answered = true;
    var earned = Math.round(q.pts * frac);
    st.score += earned; st.lost += q.pts - earned; st.done++;
    st.stageEarned[q.stage - 1] += earned;
    st.results.push({ q: q, earned: earned });
    var cls = frac === 1 ? "good" : frac > 0 ? "part" : "bad";
    var msg = frac === 1 ? pick(PRAISE) + " Em nhận được +" + earned + " điểm."
      : frac > 0 ? "Gần đúng rồi! Em nhận được +" + earned + "/" + q.pts + " điểm."
      : pick(OOPS) + " (+0 điểm)";
    var sub = "";
    if (frac < 1) {
      if (q.type === "rows") sub = "Các dòng sai đã được đánh dấu đỏ, đáp án đúng màu xanh.";
      else if (q.type === "match") sub = "Các cặp đúng có màu xanh, cặp sai có màu đỏ. Đáp án đúng: " + q.pairs.map(function (p, i) { return (i + 1) + ". " + p[1]; }).join(" · ");
      else sub = "Đáp án đúng:";
    }
    $("fb").innerHTML = '<div class="fb ' + cls + '" role="status">' + esc(msg) +
      (frac < 1 ? '<small>' + esc(sub) + '</small>' + (ansText ? '<b class="ans">' + esc(ansText) + '</b>' : "") : "") + '</div>';
    bit(frac === 1 ? pick(PRAISE) : frac > 0 ? "Gần đúng rồi, cố lên nhé!" : pick(OOPS));
    draw();
    var last = st.qi === stageQs(st.si).length - 1;
    var a = document.createElement("button");
    a.className = "btn go"; a.type = "button"; a.id = "next";
    a.textContent = last ? "Lấy mảnh Tinh Thể ▶" : "Câu tiếp theo ▶";
    a.onclick = function () { if (last) stageEnd(); else { st.qi++; question(); } };
    $("acts").appendChild(a);
    updateSide();
    a.scrollIntoView({ block: "nearest", behavior: "smooth" });
    a.focus({ preventScroll: true });
  }

  /* ---------- Gợi ý ---------- */
  function useHint() {
    var c = st.cur, q = c.q;
    if (!c || c.answered || c.hinted || st.hints <= 0 || st.phase !== "question") return;
    c.hinted = true; st.hints--;
    var extraTxt = "";
    if (q.type === "choice" || q.type === "multi") {
      var wrong = shuffle(q.opts.map(function (_, i) { return i; }).filter(function (i) { return q.type === "multi" ? q.a.indexOf(i) < 0 : i !== q.a; }));
      var n = q.type === "multi" ? 1 : Math.min(2, wrong.length - 1);
      wrong.slice(0, n).forEach(function (i) { c.elim[i] = true; c.sel = c.sel.filter(function (x) { return x !== i; }); });
      extraTxt = " Bit đã gạch bớt " + n + " đáp án sai.";
    } else if (q.type === "hotspot") {
      var w = shuffle(q.regions.filter(function (r) { return r.id !== q.a; }));
      var m = Math.min(2, Math.floor(w.length / 2));
      w.slice(0, m).forEach(function (r) { c.elim[r.id] = true; });
      if (c.elim[c.sel[0]]) c.sel = [];
      extraTxt = m ? " Bit đã loại bớt " + m + " vùng sai." : "";
    } else if (q.type === "rows") {
      var cand = q.rows.map(function (_, i) { return i; }).filter(function (i) { return !c.lock[i]; });
      var noAns = cand.filter(function (i) { return c.ans[i] === null || c.ans[i] !== q.rows[i][1]; });
      var k = pick(noAns.length ? noAns : cand);
      c.ans[k] = q.rows[k][1]; c.lock[k] = true;
      extraTxt = " Bit đã điền sẵn dòng " + (k + 1) + " cho em.";
    } else if (q.type === "match") {
      var cs = q.pairs.map(function (_, i) { return i; }).filter(function (i) { return !c.lock[i] && c.pairs[i] !== i; });
      var kk = pick(cs.length ? cs : q.pairs.map(function (_, i) { return i; }));
      var o = c.pairs.indexOf(kk); if (o >= 0 && o !== kk) c.pairs[o] = -1;
      c.pairs[kk] = kk; c.lock[kk] = true; c.pl = null;
      extraTxt = " Bit đã ghép sẵn một cặp cho em.";
    }
    var clue = $("clue"); clue.textContent = "💡 " + q.clue + extraTxt; clue.classList.add("show");
    bit("Bit đưa em một gợi ý, còn " + st.hints + " gợi ý nữa.");
    draw(); updateSide();
  }

  /* ---------- Kết thúc chặng ---------- */
  function stageEnd() {
    st.phase = "stageEnd";
    var s = STAGES[st.si], e = st.stageEarned[st.si], m = st.stageMax[st.si], r = e / m, g = gemFor(r);
    var lastStage = st.si === STAGES.length - 1;
    updateSide(); updateHintBtn();
    var comment = r >= 0.9 ? "Em đã lấy lại mảnh Tinh Thể sáng rực. Bit rất tự hào!"
      : r >= 0.6 ? "Em lấy được Tinh Thể rồi, nhưng nó chưa sáng hết. Em hãy ôn thêm phần này nhé."
      : "Tinh Thể còn mờ lắm. Em nên xem lại bài này rồi chơi lại nhé.";
    bit(comment);
    show('<section class="panel" style="text-align:center"><span class="tag">Hoàn thành chặng ' + s.id + '/' + STAGES.length + '</span>' +
      '<div class="gem-big" aria-hidden="true">' + g[0] + '</div><h1>' + esc(g[1]) + '!</h1>' +
      '<p>' + esc(comment) + '</p>' +
      '<div class="stat" style="justify-content:center"><div><b>' + e + '/' + m + '</b>điểm chặng này</div><div><b>' + st.score + '</b>tổng điểm</div><div><b>' + (st.si + 1) + '/' + STAGES.length + '</b>mảnh Tinh Thể</div></div>' +
      '<div class="actions" style="justify-content:center"><button class="btn go" id="go" type="button">' + (lastStage ? "🗝️ Ghép Chìa Khóa Vàng" : "Đi tiếp đến chặng " + (s.id + 1) + " ▶") + '</button></div></section>');
    $("go").onclick = function () { if (lastStage) final(); else { st.si++; stageIntro(); } };
  }

  /* ---------- Kết quả cuối ---------- */
  function final() {
    st.phase = "final"; st.cur = null;
    var ok = st.score >= PASS;
    best(st.score);
    updateSide(); updateHintBtn();
    bit(ok ? "Em làm được rồi! Chìa Khóa Vàng đã lành lặn!" : "Chỉ còn thiếu một chút nữa thôi. Chúng ta thử lại nhé!");
    var rows = STAGES.map(function (s, i) {
      var r = st.stageEarned[i] / st.stageMax[i];
      return "<tr><td>" + s.icon + " " + esc(s.name) + "<br><span class='small'>" + esc(s.lesson.split(" · ")[0]) + "</span></td><td>" + st.stageEarned[i] + "/" + st.stageMax[i] + "</td><td>" + gemFor(r)[0] + (r < 0.9 ? " Nên ôn lại" : " Tốt") + "</td></tr>";
    }).join("");
    show('<section class="panel ' + (ok ? "result-pass" : "result-fail") + '">' +
      '<div class="hero" aria-hidden="true">' + (ok ? "🏆🗝️" : "🧩") + '</div>' +
      '<span class="verdict ' + (ok ? "ok" : "no") + '">' + (ok ? "ĐẠT — Giải cứu thành công!" : "CHƯA ĐẠT — Hãy thử lại!") + '</span>' +
      '<h1>' + (ok ? "Chìa Khóa Vàng đã mở cửa Tòa Tháp Văn Phòng!" : "Chìa Khóa Vàng chưa lành hẳn") + '</h1>' +
      '<p class="story">' + (ok
        ? "Tám mảnh Tinh Thể ghép lại thành Chìa Khóa Vàng sáng lấp lánh. Phù thủy Lỗi Lầm bỏ chạy, cánh cửa Tòa Tháp mở ra. Em xứng đáng là Phù thủy Văn phòng nhí!"
        : "Em đã ghép được Chìa Khóa nhưng vẫn còn vài vết nứt, vì em chưa đủ " + PASS + " điểm. Hãy xem các chặng bên dưới, ôn lại bài rồi quay lại thử sức nhé!") + '</p>' +
      '<div class="stat"><div><b>' + st.score + '/' + TOTAL + '</b>tổng điểm</div><div><b>' + PASS + '</b>điểm cần đạt</div><div><b>' + (MAXHINT - st.hints) + '/' + MAXHINT + '</b>gợi ý đã dùng</div><div><b>' + best() + '</b>điểm cao nhất</div></div>' +
      '<table class="table"><thead><tr><th>Chặng</th><th>Điểm</th><th>Nhận xét</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<div class="actions"><button class="btn go" id="again" type="button">↻ Chơi lại từ đầu</button></div></section>');
    $("again").onclick = function () { newGame(); startScreen(); };
  }

  $("hintBtn").onclick = useHint;
  newGame();
  startScreen();
})();
