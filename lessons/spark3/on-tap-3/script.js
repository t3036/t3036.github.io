/* Dùng chung cho index.html (ôn tập, có 3 chặng) và test.html (kiểm tra, không hiện đáp án). Ngân hàng câu hỏi: bank.js */
const TEST = document.body.dataset.mode === "test";
/* ============ TIỆN ÍCH ============ */
const $ = s => document.querySelector(s);
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
function h(tag, props = {}, ...kids) {
  const e = document.createElement(tag);
  for (const k in props) { if (k === "class") e.className = props[k]; else if (k.startsWith("on")) e[k] = props[k]; else e.setAttribute(k, props[k]); }
  kids.flat().forEach(c => e.append(c));
  return e;
}

/* ============ PHONG CÁCH NGẪU NHIÊN ============ */
const THEMES = {
  space:{m:["🚀","👽","🛸"],f:["⭐","🪐","✨","🌙"]},
  jungle:{m:["🦁","🐵","🦜"],f:["🌴","🍃","🦋","🍌"]},
  candy:{m:["🍭","🦄","🧁"],f:["🍬","🍩","🍓","🍪"]},
  ocean:{m:["🐙","🐬","🐳"],f:["🐠","🫧","🐚","🦀"]},
  robot:{m:["🤖","🦾","👾"],f:["⚙️","🔩","💾","🔋"]},
  sunset:{m:["🦊","🐯","🦩"],f:["🌅","🎈","🪁","🌻"]}
};
let theme = null;
function applyTheme(force) {
  let t; do { t = force || pick(Object.keys(THEMES)); } while (t === theme && !force);
  theme = t;
  document.body.dataset.theme = t;
  $("#mascot").textContent = pick(THEMES[t].m);
  const fl = $("#floaters"); fl.innerHTML = "";
  for (let i = 0; i < 12; i++) {
    const s = h("span", {}, pick(THEMES[t].f));
    s.style.left = Math.random() * 95 + "%"; s.style.top = Math.random() * 90 + "%";
    s.style.animationDelay = (-Math.random() * 9) + "s"; s.style.fontSize = (24 + Math.random() * 26) + "px";
    fl.append(s);
  }
}
const CHEERS = ["🎉","🌟","👏","💯","🥳","🏆"], OOPS = ["💪","🤔","📘"];
function pop(txt) { const p = h("div", { class: "pop" }, txt); document.body.append(p); setTimeout(() => p.remove(), 950); }

/* ============ TRẠNG THÁI ============ */
const MAX = 1000, PASS = 900;
const pts = () => Math.round(score * MAX / qs.length);
let qs, idx, score, wrongs, cur, zoneShown, hintsLeft;
const HINTS = 3;   // số lượt gợi ý cho cả lượt chơi
const KEY_AT = [10, 20, 25];   // số 💎 cần có ở cuối trò chơi để mở từng chìa khóa
const keysEarned = () => KEY_AT.filter(t => score >= t).length;
const gems = () => `💎 ${score}/${qs.length}`;
const ZONES = [
  {b:"Bài 17 · Tin tặc", ico:"🕳️", name:"Hang Tin Tặc", say:"Em đã đến <b>Hang Tin Tặc</b>! Ở đây có đủ loại hacker mũ trắng, mũ đen, mũ xám. Hãy phân biệt đúng để không bị Lag-Lag đánh lừa nhé!"},
  {b:"Bài 18 · Rủi ro trực tuyến", ico:"🌲", name:"Rừng Rủi Ro", say:"Tuyệt vời! Giờ em bước vào <b>Rừng Rủi Ro</b>, nơi có Cookies, Virus, Phishing và Catfishing ẩn nấp. Hãy nhận ra từng cái bẫy!"},
  {b:"Bài 19–20 · Quyền riêng tư", ico:"🏰", name:"Lâu đài Riêng Tư", say:"Chặng cuối rồi! <b>Lâu đài Riêng Tư</b> giữ bí mật của mọi người. Em hãy cho thấy mình là một công dân số mẫu mực để mở cổng!"}
];
const zoneOf = q => ZONES.findIndex(z => z.b === q.b);
const RIGHT_SAY = ["Chính xác! Lag-Lag bị đẩy lùi một bước! 💥", "Giỏi quá, đặc vụ ơi! ⚡", "Đúng rồi! Thành phố an toàn hơn! 🛡️"];
const WRONG_SAY = ["Ối, Lag-Lag đang cười đấy! Đọc kĩ lời giải rồi tiếp tục nhé! 👾", "Chưa đúng, nhưng đặc vụ giỏi luôn học từ sai lầm! 💪"];
function storyBox(html) { const d = h("div", { class: "story" }); d.innerHTML = `<div class="face">🧑‍✈️</div><div class="say">${html}</div>`; return d; }

function prepare() {
  return (TEST ? shuffle(BANK) : ZONES.flatMap(z => shuffle(BANK.filter(q => q.b === z.b)))).map(q => {
    const c = { ...q };
    if (q.type === "single" || q.type === "multi") {
      const order = shuffle(q.o.map((t, i) => i));
      c.o = order.map(i => q.o[i]);
      const ans = [].concat(q.a);
      c.a = order.map((old, nw) => ans.includes(old) ? nw : -1).filter(x => x >= 0);
    } else if (q.type === "match") {
      c.rows = shuffle(q.pairs); c.terms = shuffle(q.pairs.map(p => p[1]));
    } else if (q.type === "tf") {
      c.rows = shuffle(q.rows);
    }
    return c;
  });
}

/* Toàn màn hình: trình duyệt chỉ cho phép khi có thao tác bấm, nên bật khi bấm "Nhận nhiệm vụ"/"Chơi lại" và thoát khi hoàn thành */
function enterFS() {
  try {
    const el = document.documentElement;
    if (!document.fullscreenElement && el.requestFullscreen) el.requestFullscreen().catch(() => {});
  } catch (e) {}
}
function exitFS() {
  try { if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {}); } catch (e) {}
}

function start() {
  enterFS();
  qs = prepare(); idx = 0; score = 0; wrongs = []; zoneShown = -1; hintsLeft = HINTS;
  $("#s-start").classList.add("hidden"); $("#s-end").classList.add("hidden"); $("#s-play").classList.remove("hidden");
  showQ();
}

function keyRow() { return h("div", { class: "keys" }, KEY_AT.map(t => h("span", { class: score >= t ? "on" : "" }, "🔑", h("small", {}, `${t} 💎`)))); }

function showZone(zi) {
  const z = ZONES[zi], card = $("#qcard"); card.innerHTML = "";
  const n = BANK.filter(q => q.b === z.b).length;
  card.classList.add("center");
  card.append(h("span", { class: "tag" }, `Chặng ${zi + 1}/${ZONES.length}`), h("span", { class: "zone-ico" }, z.ico), h("h1", {}, z.name),
    storyBox(`${z.say}<br><br>📝 Thử thách: <b>${n} câu</b>`), keyRow(),
    h("div", { class: "actions" }, h("button", { class: "btn", onclick: () => { card.classList.remove("center"); showQ(); } }, "⚔️ Vào chặng!")));
  $("#st-n").textContent = `📍 ${z.name}`; $("#st-k").textContent = gems(); $("#st-s").textContent = `⭐ ${pts()} điểm`;
}

function showQ() {
  const q = qs[idx], zi = zoneOf(q);
  if (!TEST && zi !== zoneShown) { zoneShown = zi; return showZone(zi); }
  cur = { q, locked: false, get: null };
  if (TEST) $("#st-n").textContent = `📝 Câu ${idx + 1}/${qs.length}`;
  else {
    const inZone = qs.filter(x => x.b === q.b), pos = inZone.indexOf(q) + 1;
    $("#st-n").textContent = `${ZONES[zi].ico} ${ZONES[zi].name} · Câu ${pos}/${inZone.length}`;
  }
  $("#st-k").textContent = gems();
  $("#st-s").textContent = `⭐ ${pts()} điểm`;
  $("#fill").style.width = (idx / qs.length * 100) + "%";
  const card = $("#qcard"); card.innerHTML = "";
  card.append(h("span", { class: "tag" }, q.b), h("div", { class: "q" }, q.q));
  const body = h("div", { class: q.type === "match" || q.type === "tf" ? "rows one" : "opts" + (q.o.some(t => t.length > 40) ? " long" : "") }); card.append(body);
  const fb = h("div"); const actions = h("div", { class: "actions" });
  const check = h("button", { class: "btn", disabled: "" }, "✅ Kiểm tra");
  const zoneEnds = !TEST && (idx + 1 === qs.length || zoneOf(qs[idx + 1]) !== zi);
  const next = h("button", { class: "btn hidden" }, idx + 1 === qs.length ? "🏁 Xem kết quả" : zoneEnds ? "➡️ Chặng tiếp theo" : "Câu tiếp ➜");
  next.onclick = () => {
    const go = () => { idx++; idx < qs.length ? showQ() : end(); };
    go();
  };
  const hintBtn = h("button", { class: "btn alt hint" });
  const hintTxt = () => { hintBtn.textContent = `💡 Gợi ý (còn ${hintsLeft})`; hintBtn.disabled = cur.locked || cur.hinted || hintsLeft <= 0; };
  hintBtn.onclick = () => {
    if (cur.locked || cur.hinted || hintsLeft <= 0 || !cur.hint) return;
    cur.hint(); cur.hinted = true; hintsLeft--; hintTxt(); pop("💡");
  };
  cur.hintTxt = hintTxt; hintTxt();
  actions.append(...(TEST ? [] : [hintBtn]), check, next); card.append(fb, actions);
  const ready = ok => { check.disabled = !ok; };
  RENDER[q.type](q, body, ready);
  check.onclick = () => {
    if (cur.locked) return; cur.locked = true;
    const ok = cur.grade();
    if (ok) { score++; pop(pick(CHEERS)); } else { wrongs.push(q); pop(pick(OOPS)); }
    $("#st-s").textContent = `⭐ ${pts()} điểm`; $("#st-k").textContent = gems();
    fb.className = "fb " + (ok ? "good" : "bad");
    fb.innerHTML = "";
    if (TEST) fb.append(h("div", { class: "verdict" }, ok ? "✅ Đúng" : "❌ Sai"));
    else fb.append(h("div", {}, pick(ok ? RIGHT_SAY : WRONG_SAY)), h("div", { style: "margin-top:6px" }, "💡 " + q.why));
    check.classList.add("hidden"); hintBtn.classList.add("hidden"); next.classList.remove("hidden");
  };
}

/* ============ CÁC DẠNG CÂU HỎI ============ */
const LET = "ABCDEFGH";
const RENDER = {
  single(q, body, ready) { choice(q, body, ready, 1); },
  multi(q, body, ready) { choice(q, body, ready, 2); },
  match(q, body, ready) {
    const slots = q.rows.map(() => null); let active = -1;
    const slotEls = q.rows.map((r, i) => h("div", { class: "slot", onclick: () => { if (cur.locked) return; if (slots[i] !== null) { slots[i] = null; } active = i; draw(); } }, "Chạm để chọn ô, rồi chọn thuật ngữ"));
    const pool = h("div", { class: "pool" });
    const termEls = q.terms.map((t, i) => h("button", { class: "term", onclick: () => {
      if (cur.locked || slots.includes(i)) return;
      let target = active >= 0 && slots[active] === null ? active : slots.indexOf(null);
      if (target < 0) return;
      slots[target] = i; active = slots.indexOf(null); draw();
    } }, t));
    pool.append(...termEls);
    q.rows.forEach((r, i) => body.append(h("div", { class: "row" }, h("div", { class: "t" }, r[0]), slotEls[i])));
    body.classList.add("one");
    body.append(h("div", { class: "tag" }, "👇 Thuật ngữ"), pool);
    function draw() {
      slotEls.forEach((el, i) => {
        el.className = "slot" + (slots[i] !== null ? " has" : "") + (i === active ? " active" : "");
        el.textContent = slots[i] !== null ? q.terms[slots[i]] : "Chạm để chọn ô, rồi chọn thuật ngữ";
      });
      termEls.forEach((el, i) => el.classList.toggle("used", slots.includes(i)));
      ready(!slots.includes(null));
    }
    active = 0; draw();
    cur.hint = () => {
      const i = slots.findIndex((sv, k) => q.terms[sv] !== q.rows[k][1]);
      if (i < 0) return;
      const c = q.terms.indexOf(q.rows[i][1]), j = slots.indexOf(c);
      if (j >= 0) slots[j] = null;
      slots[i] = c; active = slots.indexOf(null); draw();
    };
    cur.grade = () => {
      let all = true;
      slots.forEach((s, i) => {
        const ok = q.terms[s] === q.rows[i][1];
        all = all && ok;
        if (TEST) return;
        slotEls[i].classList.add(ok ? "right" : "wrong");
        if (!ok) slotEls[i].textContent = `${q.terms[s]}  ➜ Đáp án đúng: ${q.rows[i][1]}`;
      });
      return all;
    };
  },
  tf(q, body, ready) {
    const val = q.rows.map(() => null), btns = [];
    q.rows.forEach((r, i) => {
      const bs = [0, 1].map(k => h("button", { onclick: () => {
        if (cur.locked) return; val[i] = k === 0;
        bs.forEach((b, j) => b.classList.toggle("sel", j === k)); ready(!val.includes(null));
      } }, q.labels[k]));
      btns.push(bs);
      body.append(h("div", { class: "row" }, h("div", { class: "t" }, r[0]), h("div", { class: "tf" }, bs)));
    });
    cur.hint = () => {
      const i = q.rows.findIndex((r, k) => val[k] !== r[1]);
      if (i < 0) return;
      val[i] = q.rows[i][1];
      btns[i].forEach((b, j) => b.classList.toggle("sel", j === (val[i] ? 0 : 1)));
      ready(!val.includes(null));
    };
    cur.grade = () => {
      let all = true;
      q.rows.forEach((r, i) => {
        const ok = val[i] === r[1]; all = all && ok;
        if (TEST) return;
        btns[i].forEach(b => b.classList.remove("sel"));
        btns[i][r[1] ? 0 : 1].classList.add("right");
        if (!ok) btns[i][val[i] ? 0 : 1].classList.add("wrong");
      });
      return all;
    };
  }
};

function choice(q, body, ready, need) {
  const sel = new Set();
  const els = q.o.map((t, i) => h("button", { class: "opt", onclick: () => {
    if (cur.locked || els[i].classList.contains("dim")) return;
    if (need === 1) { sel.clear(); sel.add(i); } else { sel.has(i) ? sel.delete(i) : sel.add(i); }
    els.forEach((e, j) => e.classList.toggle("sel", sel.has(j)));
    ready(sel.size === need);
  } }, h("span", { class: "l" }, LET[i]), h("span", {}, t)));
  body.append(...els);
  cur.hint = () => {
    const cand = els.map((e, i) => i).filter(i => !q.a.includes(i) && !els[i].classList.contains("dim"));
    if (!cand.length) return;
    const i = pick(cand); sel.delete(i);
    els[i].classList.remove("sel"); els[i].classList.add("dim");
    els.forEach((e, j) => e.classList.toggle("sel", sel.has(j))); ready(sel.size === need);
  };
  cur.grade = () => {
    if (!TEST) els.forEach((e, i) => { e.classList.remove("sel"); if (q.a.includes(i)) e.classList.add("right"); else if (sel.has(i)) e.classList.add("wrong"); });
    return sel.size === q.a.length && q.a.every(i => sel.has(i));
  };
}

/* ============ KẾT THÚC ============ */
function end() {
  $("#s-play").classList.add("hidden");
  const s = $("#s-end"); s.classList.remove("hidden"); s.innerHTML = "";
  const total = pts(), pass = total >= PASS;
  const msg = pass ? (total === MAX ? "Tuyệt đối! Em là Công dân số xuất sắc! 🏆" : "ĐẠT rồi! Em làm rất tốt! 🌟") : `Chưa đạt (cần ${PASS} điểm). Em hãy xem lại các câu sai và thử lần nữa nhé! 💪`;
  const k = keysEarned();
  const ending = `Em gom được <b>${score} 💎</b> nên mở được <b>${k}/${KEY_AT.length} chìa khóa 🔑</b>. ` + (k === 3 ? "Cả 3 chìa khóa đã mở! Lag-Lag bị đánh bại hoàn toàn, Thành phố Mạng Xanh sáng bừng. Em là <b>Siêu Đặc vụ Công dân số</b>! 🌈" : k === 2 ? "Rất tốt! Còn thiếu chìa khóa cuối cùng (cần 25 💎) để phong ấn hẳn Lag-Lag. Thử lại nhé!" : k === 1 ? "Em mới mở được chìa khóa đầu tiên (cần 20 💎 cho chìa thứ hai). Hãy ôn lại các câu sai rồi quay lại nào!" : "Chưa đủ 10 💎 để mở chìa khóa nào. Lag-Lag vẫn đang ẩn nấp, hãy ôn lại bài và thử lại nhé, đặc vụ nhí!");
  s.append(h("div", { class: "mascot" }, pass ? "🏆" : "🌱"), h("h1", {}, pass ? "🎉 ĐẠT!" : "Cố lên nào!"), storyBox(ending), keyRow(),
    h("div", { class: "big" }, `${total}/${MAX}`), h("p", {}, `Đúng ${score}/${qs.length} câu`), h("p", {}, msg));
  s.append(h("div", { class: "actions" }, h("button", { class: "btn", onclick: () => { applyTheme(); start(); } }, "Chơi lại")));
  if (wrongs.length) {
    s.append(h("h2", { class: "rv-title" }, `📌 Em cần xem lại ${wrongs.length} câu`), h("div", { class: "review" }, wrongs.map((q, i) => h("div", { class: "rv" },
      h("div", { class: "rv-num" }, i + 1),
      h("div", { class: "rv-body" },
        h("span", { class: "tag" }, q.b),
        h("div", { class: "rv-q" }, "❓ " + q.q),
        h("div", { class: "rv-a" }, h("b", {}, "✅ Ghi nhớ: "), q.why))))));
  }
  if (pass) for (let i = 0; i < 5; i++) setTimeout(() => pop(pick(CHEERS)), i * 250);
}

/* ============ KHỞI TẠO ============ */
$("#chips").append(...[`📝 ${BANK.length} câu hỏi`, "🔀 Xáo trộn ngẫu nhiên", "🎨 Phong cách ngẫu nhiên", "🎯 Tối đa 1000 điểm · Đạt từ 900 (90%)"].map(t => h("span", { class: "chip" }, t)));
$("#btn-go").onclick = start;
$("#btn-theme").onclick = () => applyTheme();
applyTheme();
