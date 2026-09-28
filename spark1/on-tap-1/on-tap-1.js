let shuffledDB = [];
let currentIndex = 0;
const totalQ = 29;

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
    
    document.getElementById('win-panel').classList.add('hidden');
    document.getElementById('win-panel').classList.remove('flex');
    document.getElementById('question-panel').classList.remove('hidden');
    
    updateBikePosition();
    renderQuestion();
}

// Cập nhật vị trí xe
function updateBikePosition() {
    const bike = document.getElementById('player-bike');
    // Tiến từ 2% (đầu) lên 85% (sát trường)
    const progress = (currentIndex / totalQ) * 83; 
    bike.style.left = `${2 + progress}%`;
}

// Render câu hỏi lên màn hình
function renderQuestion() {
    if (currentIndex >= totalQ) {
        document.getElementById('question-panel').classList.add('hidden');
        document.getElementById('win-panel').classList.remove('hidden');
        document.getElementById('win-panel').classList.add('flex');
        return;
    }

    const checkBtn = document.getElementById('check-btn');
    if (checkBtn) {
        checkBtn.classList.remove('hidden');
    }

    document.getElementById('progress-text').innerText = `${currentIndex + 1}/${totalQ}`;
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
        grid.className = 'grid grid-cols-1 md:grid-cols-2 gap-4';
        q.options.forEach((opt, idx) => {
            grid.innerHTML += `
                <div class="relative">
                    <input type="radio" name="ans_group" id="opt_${idx}" value="${escapeHTML(opt)}" class="hidden mcq-radio">
                    <label for="opt_${idx}" class="block border-2 border-gray-300 rounded-xl p-4 cursor-pointer hover:bg-gray-50 transition-colors text-lg text-justify">${opt}</label>                </div>
            `;
        });
        content.appendChild(grid);
    } 
    // Xử lý MCQ nhiều đáp án
    else if (q.type === 'mcq-multi') {
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 md:grid-cols-2 gap-4';
        q.options.forEach((opt, idx) => {
            grid.innerHTML += `
                <div class="relative">
                    <input type="checkbox" name="ans_group" id="opt_${idx}" value="${escapeHTML(opt)}" class="hidden mcq-checkbox">
                    <label for="opt_${idx}" class="block border-2 border-gray-300 rounded-xl p-4 cursor-pointer hover:bg-gray-50 transition-colors text-lg text-justify">${opt}</label>                </div>
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
                    <span class="text-lg font-medium mb-3 md:mb-0 md:w-3/4 text-justify">${item.text}</span>
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
                    <span class="text-lg font-medium mb-3 md:mb-0 md:w-1/2 pr-4 leading-relaxed text-justify">${item.text}</span>
                    <select name="match_${idx}" class="p-3 border-2 border-blue-400 rounded-xl outline-none focus:border-blue-600 text-lg md:w-1/2 bg-white font-bold text-gray-800">
                        ${optsHTML}
                    </select>
                </div>
            `;
        });
        content.appendChild(list);
    }
}

function showToast(msg, isSuccess) {
    const toast = document.getElementById('toast');
    toast.innerText = msg;
    toast.className = `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 rounded-xl font-bold text-white text-2xl shadow-2xl transition-opacity duration-300 z-50 ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`;
    toast.style.opacity = '1';
    setTimeout(() => toast.style.opacity = '0', 2000);
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
        showToast("Em hãy chọn đầy đủ đáp án trước khi kiểm tra nhé!", false);
        return;
    }

    if (isCorrect) {
        showToast("🎉 Hoàn toàn chính xác! Tiến lên!", true);
        document.getElementById('check-btn').classList.add('hidden');
        currentIndex++;
        updateBikePosition();
        
        setTimeout(() => {
            renderQuestion();
        }, 800);
    } else {
        showToast("❌ Chưa đúng rồi, em hãy xem đáp án và thử lại nhé!", false);
        
        // Hiệu ứng rung
        const panel = document.getElementById('question-panel');
        panel.classList.remove('shake');
        void panel.offsetWidth; // reset CSS animation
        panel.classList.add('shake');

        // Ẩn nút kiểm tra, hiện nút thử lại
        document.getElementById('check-btn').classList.add('hidden');
        document.getElementById('retry-btn').classList.remove('hidden');
        
        // Trích xuất và hiển thị đáp án dựa theo từng loại câu hỏi
        const feedbackArea = document.getElementById('feedback-area');
        const ansText = document.getElementById('correct-ans-text');
        let ansString = "<strong>Đáp án đúng là:</strong><br><br>";
        
        if (q.type === 'mcq') {
            ansString += `- ${q.ans}`;
        } else if (q.type === 'mcq-multi') {
            ansString += `- ${q.ans.join('<br>- ')}`;
        } else if (q.type === 'tf') {
            q.items.forEach(item => {
                ansString += `- ${item.text}: <strong>${item.ans}</strong><br>`;
            });
        } else if (q.type === 'matching') {
            q.items.forEach(item => {
                ansString += `- ${item.text} ➔ <strong>${item.ans}</strong><br>`;
            });
        }
        
        ansText.innerHTML = ansString;
        feedbackArea.classList.remove('hidden');

        // Vô hiệu hóa các ô nhập liệu/lựa chọn (không cho bấm sửa khi đang xem đáp án)
        const inputs = document.querySelectorAll('#q-content input, #q-content select');
        inputs.forEach(input => input.disabled = true);
    }
}

// Hàm xử lý khi bấm thử lại
function retryQuestion() {
    // Ẩn nút thử lại và khu vực đáp án
    document.getElementById('retry-btn').classList.add('hidden');
    document.getElementById('feedback-area').classList.add('hidden');
    
    // Hiện lại nút kiểm tra
    document.getElementById('check-btn').classList.remove('hidden');

    // Lấy câu hỏi hiện tại và xáo trộn lại các tùy chọn/đáp án
    const q = shuffledDB[currentIndex];
    if (q.options) q.options = shuffle(q.options);
    if (q.items) q.items = shuffle(q.items);

    // Vẽ lại câu hỏi
    renderQuestion();
}

// Bắt đầu ngay khi load web
window.onload = initGame;