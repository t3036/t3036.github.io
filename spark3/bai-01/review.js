/* ================= DỮ LIỆU ================= */
const NGANH = [
{mau:"var(--xanh)", bieu:"🩺", ten:"Y tế",              viec:"Bác sĩ theo dõi và phân tích dữ liệu sức khỏe của bệnh nhân."},
{mau:"var(--luc)",  bieu:"🚗", ten:"Giao thông",        viec:"Tài xế sử dụng GPS để tìm đường và tránh tắc đường."},
{mau:"var(--cam)",  bieu:"🏗️", ten:"Xây dựng",          viec:"Kỹ sư theo dõi tiến độ công trình bằng phần mềm và thiết bị thông minh."},
{mau:"var(--tim)",  bieu:"🌩️", ten:"Thời tiết",         viec:"Theo dõi thời tiết, dự báo bão để cảnh báo kịp thời."},
{mau:"var(--hong)", bieu:"❤️", ten:"Sức khỏe – Thể thao", viec:"Thiết bị đeo thông minh theo dõi nhịp tim, năng lượng và số bước."},
{mau:"var(--ngoc)", bieu:"🌱", ten:"Nông nghiệp",       viec:"Giám sát cây trồng, điều khiển tưới nước và phun thuốc tự động."}
];

const THE = [
{t:"Dữ liệu thời gian thực", s:"Dữ liệu được tạo ra hoặc thu thập liên tục và được cung cấp cho người dùng ngay lập tức."},
{t:"GPS", s:"Hệ thống định vị toàn cầu — mạng lưới vệ tinh và thiết bị thu tín hiệu, dùng để xác định vị trí của một đối tượng trên bề mặt Trái Đất."},
{t:"4 bước GPS hoạt động", s:"1. Vệ tinh phát tín hiệu → 2. Tín hiệu đến thiết bị → 3. Thiết bị tính toán vị trí → 4. Hiển thị vị trí trên bản đồ."},
{t:"AI tạo sinh", s:"Trí tuệ nhân tạo tạo ra nội dung hoàn toàn mới: văn bản, hình ảnh, câu hỏi, tóm tắt, gợi ý thông minh."},
{t:"Công cụ tìm kiếm khác AI ở đâu?", s:"Công cụ tìm kiếm chỉ liệt kê các đường dẫn trang web, không tổng hợp hay giải thích thêm."},
{t:"Công nghệ trong y tế", s:"Bác sĩ theo dõi và phân tích dữ liệu sức khỏe của bệnh nhân; AI hỗ trợ đọc hình ảnh và chẩn đoán."},
{t:"Công nghệ trong nông nghiệp", s:"Giám sát cây trồng, điều khiển tưới nước và phun thuốc tự động bằng máy bay không người lái."},
{t:"Thiết bị đeo thông minh", s:"Theo dõi nhịp tim, năng lượng tiêu thụ và quá trình vận động của người dùng."},
{t:"3 điều cần nhớ khi dùng AI", s:"AI không phải con người; AI trả lời dựa trên dữ liệu đã học; luôn kiểm tra lại kết quả trước khi dùng."},
{t:"AI giúp nhân viên giao hàng thế nào?", s:"Tính toán tuyến đường giao hàng nhanh nhất, theo dõi đơn hàng và tối ưu thời gian giao nhận."}
];

const CAU_HOI = [
{h:"Dữ liệu thời gian thực là gì?",
 a:["Dữ liệu được tạo ra hoặc thu thập liên tục và cung cấp cho người dùng ngay lập tức",
    "Dữ liệu đã lưu trong máy tính từ nhiều năm trước",
    "Dữ liệu chỉ xem được khi máy không có mạng",
    "Dữ liệu học sinh chép tay vào vở"],
 d:0, g:"“Thời gian thực” nghĩa là em nhận được thông tin ngay lúc nó xảy ra."},

{h:"Trường hợp nào dưới đây đang dùng dữ liệu thời gian thực?",
 a:["Xem bản đồ báo đoạn đường đang tắc ngay lúc này",
    "Xem lại ảnh chụp từ năm ngoái",
    "Đọc một cuốn sách in",
    "Chép bài vào vở"],
 d:0, g:"Tình trạng tắc đường thay đổi từng phút, nên bản đồ phải cập nhật liên tục."},

{h:"Các công nhân ở một khu mỏ có thể nhận dữ liệu thời gian thực từ công nhân ở một khu mỏ khác. Điều này có khả thi không?",
 a:["Có", "Không"],
 d:0, g:"Đúng. Đây chính là ví dụ trong bài: chia sẻ dữ liệu thời gian thực để phối hợp làm việc."},

{h:"Một y tá làm việc từ xa có thể dùng dữ liệu y tế thời gian thực để hỗ trợ bệnh nhân đang ở nhà. Điều này có khả thi không?",
 a:["Có", "Không"],
 d:0, g:"Đúng. Dữ liệu y tế được truyền liên tục nên y tá theo dõi được từ xa."},

{h:"GPS là viết tắt của cụm từ nào?",
 a:["Global Positioning System", "Google Photo Service", "General Power Supply", "Global Picture Screen"],
 d:0, g:"GPS = Global Positioning System = Hệ thống định vị toàn cầu."},

{h:"GPS được dùng để làm gì?",
 a:["Xác định vị trí của một đối tượng trên bề mặt Trái Đất",
    "Nghe nhạc và xem phim",
    "Đo cân nặng của một người",
    "Vẽ tranh trên máy tính"],
 d:0, g:"GPS là mạng lưới vệ tinh và thiết bị thu tín hiệu dùng để xác định vị trí."},

{h:"Bước đầu tiên trong cách GPS hoạt động là gì?",
 a:["Các vệ tinh bay quanh Trái Đất và phát tín hiệu",
    "Thiết bị hiển thị vị trí trên bản đồ",
    "Thiết bị tính toán vị trí của em",
    "Em nhập địa chỉ cần đến"],
 d:0, g:"Thứ tự đúng: vệ tinh phát tín hiệu → tín hiệu đến thiết bị → thiết bị tính vị trí → hiển thị trên bản đồ."},

{h:"Orson là tài xế xe buýt của trường, đang chở học sinh đi thực tế tới một nơi chưa từng đến. Anh ấy nên dùng công nghệ nào để định hướng?",
 a:["GPS (Global Positioning System)", "Quả địa cầu (Globe)", "Radio", "Máy phát MP3"],
 d:0, g:"Chỉ GPS mới chỉ được vị trí hiện tại và tuyến đường cần đi."},

{h:"Bác sĩ theo dõi và phân tích dữ liệu sức khỏe của bệnh nhân trên màn hình. Đây là công nghệ trong ngành nào?",
 a:["Y tế", "Xây dựng", "Nông nghiệp", "Giao thông"],
 d:0, g:"Ngành y tế dùng công nghệ để theo dõi, phân tích dữ liệu và hỗ trợ chẩn đoán."},

{h:"Thiết bị đeo thông minh theo dõi nhịp tim, năng lượng tiêu thụ và số bước chân thuộc lĩnh vực nào?",
 a:["Sức khỏe – Thể thao", "Thời tiết", "Xây dựng", "Sản xuất"],
 d:0, g:"Đồng hồ thông minh giúp người tập theo dõi cơ thể khi vận động."},

{h:"Trong nông nghiệp, máy bay không người lái (drone) giúp người nông dân làm gì?",
 a:["Giám sát cây trồng, tưới nước và phun thuốc tự động",
    "Nấu ăn cho cả gia đình",
    "Dạy học thay giáo viên",
    "Sửa chữa xe máy"],
 d:0, g:"Drone bay trên cánh đồng để quan sát và chăm sóc cây trồng tự động."},

{h:"Khác biệt lớn nhất giữa AI tạo sinh và công cụ tìm kiếm là gì?",
 a:["AI tạo sinh tổng hợp và tạo ra nội dung mới, còn công cụ tìm kiếm chỉ liệt kê đường dẫn trang web",
    "AI tạo sinh chỉ hoạt động ban đêm",
    "Công cụ tìm kiếm luôn nhanh hơn AI",
    "Cả hai hoàn toàn giống nhau"],
 d:0, g:"AI tạo sinh trả lời theo cách dễ hiểu; công cụ tìm kiếm để em tự đọc các trang web."},

{h:"Ý nào sau đây KHÔNG đúng về AI?",
 a:["AI là con người và tự hiểu được mọi thứ như chúng ta",
    "AI có thể tạo ra văn bản và hình ảnh mới",
    "AI trả lời dựa trên dữ liệu đã học được trước đó",
    "Cần kiểm tra lại kết quả của AI trước khi dùng"],
 d:0, g:"AI không phải con người. Nó chỉ tạo câu trả lời từ dữ liệu đã học."},

{h:"Sau khi nhờ AI viết giúp một đoạn giới thiệu, em nên làm gì?",
 a:["Đọc và kiểm tra lại thông tin trước khi sử dụng",
    "Nộp ngay, không cần đọc lại",
    "Tin tuyệt đối vì AI không bao giờ sai",
    "Xóa đi vì AI luôn sai"],
 d:0, g:"Luôn kiểm tra kết quả của AI — đây là lưu ý quan trọng nhất trong bài."}
];

/* ================= TIỆN ÍCH ================= */
const $ = s => document.querySelector(s);
const xao = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);

/* ================= ĐIỀU HƯỚNG ================= */
document.querySelectorAll('nav.tab button').forEach(b=>{
b.onclick = ()=>{
  document.querySelectorAll('nav.tab button').forEach(x=>x.setAttribute('aria-selected','false'));
  b.setAttribute('aria-selected','true');
  document.querySelectorAll('.trang').forEach(p=>p.classList.remove('hien'));
  $('#'+b.dataset.trang).classList.add('hien');
  window.scrollTo({top:0});
};
});

/* ================= TRẠM 3: lưới ngành nghề ================= */
$('#luoi-nganh').innerHTML = NGANH.map(n=>
`<div><span class="bieu">${n.bieu}</span><h3 style="color:${n.mau}">${n.ten}</h3><p>${n.viec}</p></div>`
).join('');

/* ================= TIẾN ĐỘ ================= */
const daXong = new Set();
document.querySelectorAll('.xong').forEach(b=>{
b.onclick = ()=>{
  const id = b.dataset.tram;
  if(daXong.has(id)){ daXong.delete(id); b.dataset.xong='0'; b.textContent='Đã học xong trạm này'; }
  else { daXong.add(id); b.dataset.xong='1'; b.textContent='✓ Xong trạm này'; }
  $('#chu-tien-do').textContent = `Đã học ${daXong.size}/4 trạm`;
  $('#rang-tien-do').style.width = (daXong.size/4*100)+'%';
};
});

/* ================= THẺ GHI NHỚ ================= */
let bo = [...THE], vt = 0;
function veThe(){
$('#the-truoc').textContent = bo[vt].t;
$('#the-sau').textContent   = bo[vt].s;
$('#the-dem').textContent   = `${vt+1} / ${bo.length}`;
$('#the-lat').classList.remove('lat');
}
$('#mat-the').onclick = ()=> $('#the-lat').classList.toggle('lat');
$('#the-sau-nut').onclick = ()=>{ vt=(vt+1)%bo.length; veThe(); };
$('#the-truoc-nut').onclick = ()=>{ vt=(vt-1+bo.length)%bo.length; veThe(); };
$('#the-xao').onclick = ()=>{ bo = xao(bo); vt=0; veThe(); };
veThe();

/* ================= TRẮC NGHIỆM ================= */
let bang=[], chiSo=0, dungSo=0, saiList=[];
const CHU = ['A','B','C','D'];

function batDauQuiz(){
bang = xao(CAU_HOI).map(c=>{
  const dapDung = c.a[c.d];
  const tron = xao(c.a);
  return {h:c.h, a:tron, d:tron.indexOf(dapDung), g:c.g};
});
chiSo=0; dungSo=0; saiList=[];
veCau();
}

function veCau(){
const c = bang[chiSo];
$('#quiz').innerHTML = `
  <div class="dau"><span>Câu ${chiSo+1} / ${bang.length}</span><span>Đúng: ${dungSo}</span></div>
  <div class="hoi">${c.h}</div>
  <div class="dap-an" id="ds"></div>
  <div class="giai-thich" id="gt"></div>
  <div class="dieu-khien" id="dk" style="display:none"></div>`;
const ds = $('#ds');
c.a.forEach((t,i)=>{
  const b = document.createElement('button');
  b.innerHTML = `<span class="chu">${CHU[i]}</span><span>${t}</span>`;
  b.onclick = ()=> chon(i);
  ds.appendChild(b);
});
}

function chon(i){
const c = bang[chiSo];
const nut = [...$('#ds').children];
nut.forEach(b=>b.disabled=true);
nut[c.d].classList.add('dung');
const gt = $('#gt');
if(i===c.d){ dungSo++; gt.className='giai-thich hien ok'; gt.innerHTML=`<b>Chính xác! 🎉</b>${c.g}`; }
else{
  nut[i].classList.add('sai');
  saiList.push({h:c.h, dung:c.a[c.d], g:c.g});
  gt.className='giai-thich hien ko';
  gt.innerHTML=`<b>Chưa đúng rồi</b>Đáp án đúng: <strong>${c.a[c.d]}</strong>. ${c.g}`;
}
const dk = $('#dk');
dk.style.display='flex';
dk.innerHTML = `<button class="nut chinh">${chiSo+1<bang.length?'Câu tiếp theo →':'Xem kết quả'}</button>`;
dk.firstChild.onclick = ()=>{ chiSo++; chiSo<bang.length ? veCau() : veKetQua(); };
dk.firstChild.focus();
}

function veKetQua(){
const tong = bang.length, ti = dungSo/tong;
let loi = "Em cần đọc lại phần Bài học rồi thử lại nhé.";
if(ti===1) loi = "Tuyệt vời! Em nắm chắc cả bài rồi.";
else if(ti>=.8) loi = "Rất tốt! Chỉ còn vài chỗ nhỏ cần xem lại.";
else if(ti>=.5) loi = "Khá ổn. Xem lại các câu sai bên dưới là ổn ngay.";
$('#quiz').innerHTML = `
  <div class="ket-qua">
    <div class="diem">${dungSo}<small>/${tong}</small></div>
    <h2>${loi}</h2>
    <p>Em trả lời đúng ${dungSo} trên tổng số ${tong} câu.</p>
    <div class="dieu-khien">
      <button class="nut chinh" id="lam-lai">Làm lại</button>
      <button class="nut" id="ve-bai">Đọc lại bài học</button>
    </div>
    ${saiList.length? `<div class="lai-sai"><h3>Những câu cần xem lại</h3><ul>${
      saiList.map(s=>`<li><b>${s.h}</b>Đáp án đúng: ${s.dung}. ${s.g}</li>`).join('')
    }</ul></div>` : ''}
  </div>`;
$('#lam-lai').onclick = batDauQuiz;
$('#ve-bai').onclick = ()=> document.querySelector('nav.tab button[data-trang="bai-hoc"]').click();
}
batDauQuiz();

/* ================= TRÒ CHƠI NỐI ================= */
let dangChon=null, capDung=0, luot=0;
function batDauNoi(){
dangChon=null; capDung=0; luot=0;
$('#noi-xong').innerHTML='';
const trai = xao(NGANH.map((n,i)=>({i,t:`${n.bieu} ${n.ten}`})));
const phai = xao(NGANH.map((n,i)=>({i,t:n.viec})));
$('#cot-trai').innerHTML  = trai.map(x=>`<button class="o" data-ben="trai" data-i="${x.i}">${x.t}</button>`).join('');
$('#cot-phai').innerHTML  = phai.map(x=>`<button class="o" data-ben="phai" data-i="${x.i}">${x.t}</button>`).join('');
document.querySelectorAll('.o').forEach(o=> o.onclick = ()=> bam(o));
capNhatDem();
}
function capNhatDem(){ $('#noi-dem').textContent = `Nối đúng ${capDung}/6 · Số lượt: ${luot}`; }
function bam(o){
if(o.classList.contains('dung')) return;
if(!dangChon){ dangChon=o; o.classList.add('chon'); return; }
if(dangChon===o){ o.classList.remove('chon'); dangChon=null; return; }
if(dangChon.dataset.ben===o.dataset.ben){
  dangChon.classList.remove('chon'); dangChon=o; o.classList.add('chon'); return;
}
luot++;
if(dangChon.dataset.i===o.dataset.i){
  dangChon.classList.remove('chon');
  dangChon.classList.add('dung'); o.classList.add('dung');
  dangChon.disabled=true; o.disabled=true;
  capDung++;
  if(capDung===6){
    $('#noi-xong').innerHTML = `<div class="bang-huy">🎉 Em đã nối đúng cả 6 nghề sau ${luot} lượt!</div>`;
  }
}else{
  const a=dangChon, b=o;
  a.classList.remove('chon'); a.classList.add('lech'); b.classList.add('lech');
  setTimeout(()=>{ a.classList.remove('lech'); b.classList.remove('lech'); },380);
}
dangChon=null;
capNhatDem();
}
$('#noi-lam-lai').onclick = batDauNoi;
batDauNoi();
