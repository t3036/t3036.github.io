let shuffledDB = [];
let currentIndex = 0;
const totalQ = 29;
let correctCount = 0;
let wrongList = []; // các câu đã trả lời sai
const MAX_HINTS = 3;
let hintsLeft = MAX_HINTS;
let hintShown = false; // câu hiện tại đã mở gợi ý chưa

// Cập nhật nút gợi ý
function updateHintUI() {
    const btn = document.getElementById('hint-btn');
    if (!btn) return; // chế độ kiểm tra: không có gợi ý
    document.getElementById('hint-count').innerText = hintsLeft;
    btn.disabled = !hintShown && hintsLeft === 0;
}

// Dùng 1 lượt gợi ý (mở lại gợi ý đã xem của câu này thì không tốn thêm)
function useHint() {
    const q = shuffledDB[currentIndex];
    if (!q || hintShown || hintsLeft === 0) return;
    hintShown = true;
    hintsLeft--;
    const box = document.getElementById('hint-box');
    box.innerHTML = `💡 <strong>Gợi ý:</strong> ${q.hint}`;
    box.classList.remove('hidden');
    updateHintUI();
}

// Hàm xáo trộn mảng (tạo mảng copy để không đổi mảng gốc)
function shuffle(arr) {
    let copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function escapeHTML(str) {
    return str.replace(/"/g, '&quot;');
}

// Khởi tạo trò chơi
function initGame() {
    // Xáo trộn 29 câu hỏi và trộn đáp án bên trong
    shuffledDB = shuffle(rawDB).map(q => {
        let newQ = { ...q };
        if (newQ.options) newQ.options = shuffle(newQ.options);
        if (newQ.items) newQ.items = shuffle(newQ.items);
        return newQ;
    });

    currentIndex = 0;
    correctCount = 0;
    wrongList = [];
    hintsLeft = MAX_HINTS;

    document.getElementById('win-panel').classList.add('hidden');
    document.getElementById('win-panel').classList.remove('flex');
    document.getElementById('review-list').classList.add('hidden');
    document.getElementById('review-list').classList.remove('flex');
    document.getElementById('question-panel').classList.remove('hidden');
    
    updateBikePosition();
    renderQuestion();
}

// Cập nhật vị trí xe
function updateBikePosition() {
    // Thanh quãng đường: nhà → trường (3 km), chỉ tăng khi trả lời đúng
    const pct = (correctCount / totalQ) * 100;
    document.getElementById('progress-fill').style.width = `${pct}%`;
    document.getElementById('route-bike').style.left = `${pct}%`;
}

// Render câu hỏi lên màn hình
function renderQuestion() {
    if (currentIndex >= totalQ) {
        showResult();
        return;
    }

    const checkBtn = document.getElementById('check-btn');
    if (checkBtn) {
        checkBtn.classList.remove('hidden');
    }

    document.getElementById('progress-text').innerText = `${currentIndex + 1}/${totalQ}`;
    hintShown = false;
    document.getElementById('hint-box')?.classList.add('hidden');
    updateHintUI();
    const q = shuffledDB[currentIndex];
    document.getElementById('q-text').innerText = q.q;

    // --- KIỂM TRA VÀ HIỂN THỊ HÌNH ẢNH CHO CÂU HỎI ---
    const qImage = document.getElementById('q-image');
    if (qImage) {
        if (q.img) {
            // Nếu câu hỏi có link hình, gán link và hiển thị
            qImage.src = q.img;
            qImage.classList.remove('hidden');
        } else {
            // Nếu không có, xóa link và ẩn đi
            qImage.src = "";
            qImage.classList.add('hidden');
        }
    }
    // ---------------------------------------------------------
    
    const content = document.getElementById('q-content');
    content.innerHTML = '';

    // Xử lý MCQ 1 đáp án
    if (q.type === 'mcq') {
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 gap-4';
        q.options.forEach((opt, idx) => {
            grid.innerHTML += `
                <div class="relative">
                    <input type="radio" name="ans_group" id="opt_${idx}" value="${escapeHTML(opt)}" class="hidden mcq-radio">
                    <label for="opt_${idx}" class="block border-2 border-gray-300 rounded-xl p-4 cursor-pointer hover:bg-gray-50 transition-colors text-lg">${opt}</label>                </div>
            `;
        });
        content.appendChild(grid);
    } 
    // Xử lý MCQ nhiều đáp án
    else if (q.type === 'mcq-multi') {
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 gap-4';
        q.options.forEach((opt, idx) => {
            grid.innerHTML += `
                <div class="relative">
                    <input type="checkbox" name="ans_group" id="opt_${idx}" value="${escapeHTML(opt)}" class="hidden mcq-checkbox">
                    <label for="opt_${idx}" class="block border-2 border-gray-300 rounded-xl p-4 cursor-pointer hover:bg-gray-50 transition-colors text-lg">${opt}</label>                </div>
            `;
        });
        content.appendChild(grid);
    }
    // Xử lý True/False
    else if (q.type === 'tf') {
        const list = document.createElement('div');
        list.className = 'flex flex-col gap-4';
        q.items.forEach((item, idx) => {
            list.innerHTML += `
                <div class="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <span class="text-lg font-medium mb-3 md:mb-0 md:w-3/4">${item.text}</span>
                    <div class="flex gap-4">
                        <label class="flex items-center gap-2 cursor-pointer bg-white px-5 py-2 rounded-lg border border-gray-300 hover:bg-blue-50 font-bold">
                            <input type="radio" name="tf_${idx}" value="Có" class="w-5 h-5 text-blue-600"> Có
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer bg-white px-5 py-2 rounded-lg border border-gray-300 hover:bg-red-50 font-bold">
                            <input type="radio" name="tf_${idx}" value="Không" class="w-5 h-5 text-red-600"> Không
                        </label>
                    </div>
                </div>
            `;
        });
        content.appendChild(list);
    }
    // Xử lý Ghép nối
    else if (q.type === 'matching') {
        const list = document.createElement('div');
        list.className = 'flex flex-col gap-4';
        
        // Dùng trim() để xóa khoảng trắng thừa ở hai đầu, sau đó lọc trùng lặp bằng Set
        let uniqueAnswers = [...new Set(q.items.map(i => i.ans.trim()))];
        let dropOptions = shuffle(uniqueAnswers);
        
        let optsHTML = `<option value="">-- Lựa chọn đáp án --</option>`;
        dropOptions.forEach(opt => optsHTML += `<option value="${escapeHTML(opt)}">${opt}</option>`);

        q.items.forEach((item, idx) => {
            list.innerHTML += `
                <div class="flex flex-col md:flex-row justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <span class="text-lg font-medium mb-3 md:mb-0 md:w-1/2 pr-4 leading-relaxed">${item.text}</span>
                    <div class="md:w-1/2">
                        <select name="match_${idx}" class="w-full p-3 border-2 border-blue-400 rounded-xl outline-none focus:border-blue-600 text-lg bg-white font-bold text-gray-800">
                            ${optsHTML}
                        </select>
                        <div id="match_fix_${idx}" class="hidden mt-2 text-green-700 font-bold"></div>
                    </div>
                </div>
            `;
        });
        content.appendChild(list);
    }
}

function showToast(msg, isSuccess) {
    const toast = document.getElementById('toast');
    toast.innerText = msg;
    toast.className = `fixed top-24 left-1/2 transform -translate-x-1/2 px-8 py-4 rounded-xl font-bold text-white text-2xl shadow-2xl transition-opacity duration-300 pointer-events-none z-50 ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`;
    toast.style.opacity = '1';
    setTimeout(() => toast.style.opacity = '0', 2000);
}

// Tạo HTML hiển thị đáp án đúng theo từng loại câu hỏi
function buildAnswerHTML(q) {
    let s = "";
    if (q.type === 'mcq') {
        s += `- ${q.ans}`;
    } else if (q.type === 'mcq-multi') {
        s += `- ${q.ans.join('<br>- ')}`;
    } else if (q.type === 'tf') {
        q.items.forEach(item => {
            s += `- ${item.text}: <strong>${item.ans}</strong><br>`;
        });
    } else if (q.type === 'matching') {
        q.items.forEach(item => {
            s += `- ${item.text} ➔ <strong>${item.ans}</strong><br>`;
        });
    }
    return s;
}

// Hiển thị kết quả cuối cùng
function showResult() {
    const wrong = totalQ - correctCount;
    const score = Math.round((correctCount / totalQ) * 1000);
    const arrived = correctCount === totalQ;

    document.getElementById('result-correct').innerText = correctCount;
    document.getElementById('result-wrong').innerText = wrong;
    document.getElementById('result-score').innerText = score;

    const title = document.getElementById('result-title');
    const icon = document.getElementById('result-icon');
    const msg = document.getElementById('result-msg');
    if (arrived) {
        icon.innerText = '🏆🌟';
        title.innerText = 'Hoàn Thành Xuất Sắc!';
        title.className = 'text-3xl md:text-4xl font-bold text-green-600 mb-4 uppercase';
        msg.innerText = 'Đúng cả 29 câu, em đã đến trường!';
    } else {
        icon.innerText = '🚲💪';
        title.innerText = 'Chưa Đến Trường Rồi!';
        title.className = 'text-3xl md:text-4xl font-bold text-orange-500 mb-4 uppercase';
        msg.innerText = 'Em chưa tới trường. Xem lại câu sai rồi thử lại nhé!';
    }

    document.getElementById('review-btn').classList.toggle('hidden', wrong === 0 || window.TEST_MODE);

    document.getElementById('question-panel').classList.add('hidden');
    document.getElementById('win-panel').classList.remove('hidden');
    document.getElementById('win-panel').classList.add('flex');
}

// Bật/tắt danh sách xem lại các câu sai
function toggleReview() {
    const list = document.getElementById('review-list');
    if (!list.classList.contains('hidden')) {
        list.classList.add('hidden');
        list.classList.remove('flex');
        return;
    }
    list.innerHTML = wrongList.map((q, i) => `
        <div class="bg-white border-2 border-red-200 rounded-xl p-4">
            <div class="font-bold text-gray-800 mb-2">Câu sai ${i + 1}: ${q.q}</div>
            ${q.img ? `<img src="${q.img}" class="max-h-60 mb-3 rounded-lg border">` : ''}
            <div class="text-green-700"><strong>Đáp án đúng:</strong><br>${buildAnswerHTML(q)}</div>
        </div>`).join('');
    list.classList.remove('hidden');
    list.classList.add('flex');
    list.scrollIntoView({ behavior: 'smooth' });
}

function checkAnswer() {
    const q = shuffledDB[currentIndex];
    let isComplete = true;
    let isCorrect = true;

    if (q.type === 'mcq') {
        const checked = document.querySelector('input[name="ans_group"]:checked');
        if (!checked) isComplete = false;
        else if (checked.value !== q.ans) isCorrect = false;
    } 
    else if (q.type === 'mcq-multi') {
        const checkedList = document.querySelectorAll('input[name="ans_group"]:checked');
        if (checkedList.length === 0) {
            isComplete = false;
        } else {
            const values = Array.from(checkedList).map(el => el.value);
            if (values.length !== q.ans.length) {
                isCorrect = false;
            } else {
                // Kiểm tra mọi giá trị đã chọn phải nằm trong đáp án đúng
                for (let val of values) {
                    if (!q.ans.includes(val)) isCorrect = false;
                }
            }
        }
    } 
    else if (q.type === 'tf') {
        q.items.forEach((item, idx) => {
            const checked = document.querySelector(`input[name="tf_${idx}"]:checked`);
            if (!checked) isComplete = false;
            else if (checked.value !== item.ans) isCorrect = false;
        });
    } 
    else if (q.type === 'matching') {
        q.items.forEach((item, idx) => {
            const select = document.querySelector(`select[name="match_${idx}"]`);
            if (!select.value) isComplete = false;
            else if (select.value !== item.ans) isCorrect = false;
        });
    }

    if (!isComplete) {
        showToast("Em chọn đủ đáp án rồi mới kiểm tra nhé!", false);
        return;
    }

    if (isCorrect) {
        showToast("🎉 Chính xác!", true);
        const hintBtn = document.getElementById('hint-btn');
        if (hintBtn) hintBtn.disabled = true;
        document.getElementById('check-btn').classList.add('hidden');
        correctCount++;
        updateBikePosition();
        document.getElementById('retry-btn').classList.remove('hidden');
        document.querySelectorAll('#q-content input, #q-content select').forEach(i => i.disabled = true);
        showExplain(q, true);
    } else {
        showToast(window.TEST_MODE ? "❌ Sai" : "❌ Chưa đúng. Xem đáp án rồi qua câu sau nhé!", false);
        wrongList.push(q);

        // Hiệu ứng rung
        const panel = document.getElementById('question-panel');
        panel.classList.remove('shake');
        void panel.offsetWidth; // reset CSS animation
        panel.classList.add('shake');

        // Ẩn nút kiểm tra, hiện nút thử lại
        document.getElementById('check-btn').classList.add('hidden');
        document.getElementById('retry-btn').classList.remove('hidden');
        const hintBtnWrong = document.getElementById('hint-btn');
        if (hintBtnWrong) hintBtnWrong.disabled = true;

        // Trích xuất và hiển thị đáp án dựa theo từng loại câu hỏi
        showExplain(q, false);

        // Vô hiệu hóa các ô nhập liệu/lựa chọn (không cho bấm sửa khi đang xem đáp án)
        const inputs = document.querySelectorAll('#q-content input, #q-content select');
        inputs.forEach(input => input.disabled = true);
    }
}

// Tô viền xanh đáp án đúng, viền đỏ lựa chọn sai ngay trong các ô lựa chọn
function revealAnswers(q) {
    const mark = (el, ok) => el && el.classList.add(ok ? 'ans-correct' : 'ans-wrong');
    if (q.type === 'mcq' || q.type === 'mcq-multi') {
        document.querySelectorAll('#q-content input[name="ans_group"]').forEach(inp => {
            const ok = q.type === 'mcq' ? inp.value === q.ans : q.ans.includes(inp.value);
            const label = inp.nextElementSibling;
            if (ok) mark(label, true);
            else if (inp.checked) mark(label, false);
        });
    } else if (q.type === 'tf') {
        q.items.forEach((item, idx) => {
            document.querySelectorAll(`input[name="tf_${idx}"]`).forEach(inp => {
                const label = inp.closest('label');
                if (inp.value === item.ans) mark(label, true);
                else if (inp.checked) mark(label, false);
            });
        });
    } else if (q.type === 'matching') {
        q.items.forEach((item, idx) => {
            const sel = document.querySelector(`select[name="match_${idx}"]`);
            if (sel.value === item.ans) {
                mark(sel, true);
            } else {
                mark(sel, false);
                const fix = document.getElementById(`match_fix_${idx}`);
                fix.innerHTML = `✔ ${item.ans}`;
                fix.classList.remove('hidden');
            }
        });
    }
}

// Hộp "Ghi nhớ" riêng, hiện sau khi trả lời. Chế độ kiểm tra (TEST_MODE): chỉ báo Đúng/Sai
function showExplain(q, isCorrect) {
    const area = document.getElementById('feedback-area');
    if (window.TEST_MODE) {
        area.className = `mb-6 p-4 rounded-xl border-2 text-xl font-bold ${isCorrect ? 'bg-green-50 border-green-400 text-green-700' : 'bg-red-50 border-red-300 text-red-700'}`;
        document.getElementById('correct-ans-text').innerHTML = isCorrect ? '✅ Đúng' : '❌ Sai';
        return;
    }
    revealAnswers(q);
    area.className = 'mb-6 p-4 rounded-xl border-2 text-lg bg-yellow-50 border-yellow-300 text-yellow-900';
    document.getElementById('correct-ans-text').innerHTML = `<strong>💡 Ghi nhớ:</strong> ${q.explain}`;
}

// Hàm xử lý khi bấm sang câu tiếp theo (sau khi trả lời sai)
function nextQuestion() {
    document.getElementById('retry-btn').classList.add('hidden');
    document.getElementById('feedback-area').classList.add('hidden');

    currentIndex++;
    updateBikePosition();
    renderQuestion();
}

// Bắt đầu ngay khi load web
window.onload = initGame;
/* Chặn chuột phải */
document.addEventListener('contextmenu', e => e.preventDefault());
