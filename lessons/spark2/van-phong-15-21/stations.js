/* Các trạm học: mỗi trạm có phần Thực hành (kiểm tra trực tiếp trên mô phỏng) và phần Trắc nghiệm (lấy từ questions.js).
   check(s): s là mô phỏng của trạm (Word/Excel/PowerPoint); riêng trạm Dự án thì s = {w, x, p}. */
const centered = el => !!el && getComputedStyle(el).textAlign==='center';
const W = {t:'Mở thẻ ', cmd:c=>`[data-cmd="${c}"]`};

const STATIONS = [
{ id:'b15', no:'Bài 15', e:'🏷️', c:'#2fa8ff', app:'word', title:'Các thành phần của tài liệu',
  learn:`<b>Tiêu đề (Title)</b> cho biết tài liệu nói về gì. <b>Đề mục (Heading)</b> mở đầu từng phần. <b>Đoạn văn (Paragraph)</b> là nhóm câu về một ý. <b>Danh sách (List)</b> có ký hiệu hoặc số. <b>Căn lề (Alignment)</b> là cách sắp xếp chữ trên trang.`,
  mission:'Em hãy nhận ra từng thành phần trong tài liệu “Thú cưng được yêu thích”.',
  seed:()=>`<h1 data-part="title">Thú cưng được yêu thích</h1>
    <p data-part="paragraph">Như mọi người đều biết, chó là thú cưng được yêu thích nhất ở Mỹ. Chó rất dễ huấn luyện và trung thành với chủ.</p>
    <h2 data-part="heading">Loài vật được nuôi làm thú cưng phổ biến nhất</h2>
    <ol data-part="list"><li>Chó</li><li>Mèo</li><li>Cá</li></ol>`,
  steps:[
    {t:'Nhấp vào <b>Tiêu đề</b> của tài liệu.', hint:'Tiêu đề là dòng chữ to ở trên cùng.', check:s=>s.did('click:title')},
    {t:'Nhấp vào <b>Đề mục</b> (dòng giới thiệu phần tiếp theo).', hint:'Đề mục nằm ngay trên danh sách.', check:s=>s.did('click:heading')},
    {t:'Nhấp vào một <b>Đoạn văn</b>.', hint:'Đoạn văn là nhiều câu liền nhau.', check:s=>s.did('click:paragraph')},
    {t:'Nhấp vào <b>Danh sách</b> đánh số.', hint:'Danh sách có số 1. 2. 3. ở đầu dòng.', check:s=>s.did('click:list')},
    {t:'Nhấp vào Tiêu đề rồi bấm nút <b>Căn giữa (Center)</b> ≡.', hint:'Nút Center nằm trong nhóm Paragraph của thẻ Home.', target:W.cmd('center'), check:s=>centered(s.q('h1')[0])}
  ],
  quiz:[['b15',[0,1,2]],['b1617',[16,17]]] },

{ id:'b16', no:'Bài 16', e:'📊', c:'#ff9f1c', app:'ppt', title:'Ứng dụng trình chiếu PowerPoint',
  learn:`<b>PowerPoint</b> dùng để tạo bài trình chiếu gồm nhiều <b>Slide</b>. Kéo–thả slide để đổi vị trí. Thẻ <b>Insert</b> chèn video, thẻ <b>Transitions</b> chọn hiệu ứng chuyển slide, thẻ <b>Animations</b> tạo hiệu ứng cho đối tượng, thẻ <b>Slide Show</b> để trình chiếu.`,
  mission:'Bài trình chiếu của tiệm bánh đang bị đảo thứ tự. Em hãy sắp xếp và làm cho nó sinh động!',
  seed:()=>[{title:'Cảm ơn quý khách!',body:'Hẹn gặp lại ở tiệm bánh'},{title:'Thực đơn',body:'Bánh quy · Bánh vòng · Cupcake'},{title:'Giới thiệu',body:'Doe’s Bakery – tiệm bánh của em'}],
  steps:[
    {t:'<b>Kéo</b> slide “Giới thiệu” lên vị trí đầu tiên.', hint:'Nhấp giữ chuột vào slide số 3 ở cột bên trái rồi kéo lên trên cùng.', check:s=>s.slides[0].title==='Giới thiệu'},
    {t:'Thẻ <b>Insert</b> → chèn một <b>Video</b> vào slide.', hint:'Mở thẻ Insert rồi bấm nút Video.', target:'[data-tab="insert"]', check:s=>s.did('video')},
    {t:'Thẻ <b>Transitions</b>: chọn hiệu ứng <b>Fade</b>, rồi bấm <b>Apply To All</b>.', hint:'Chọn Fade trước, sau đó bấm Apply To All để áp dụng cho mọi slide.', target:'[data-tab="trans"]', check:s=>s.did('apply-all')},
    {t:'Thẻ <b>Animations</b>: nhấp chọn tiêu đề trên slide, rồi chọn hiệu ứng <b>Fly In</b>.', hint:'Nhấp vào dòng tiêu đề trên slide để chọn nó trước.', target:'[data-tab="anim"]', check:s=>s.slides.some(x=>x.anims.some(a=>a.effect==='Fly In'))},
    {t:'Trong Animations, đổi <b>Duration</b> (thời gian) của hiệu ứng.', hint:'Chọn tiêu đề đã có hiệu ứng rồi đổi ô Duration.', check:s=>s.did('anim-time')},
    {t:'Thẻ <b>Slide Show</b> → bấm <b>From Beginning</b> để trình chiếu.', hint:'Nhấp chuột hoặc nhấn phím → để sang slide tiếp theo.', target:'[data-tab="show"]', check:s=>s.did('slideshow')}
  ],
  quiz:[['b1617',[1,3,4,6,10,11,12]]] },

{ id:'b17w', no:'Bài 17', e:'📄', c:'#8b6cf6', app:'word', title:'Làm việc với tài liệu Word',
  learn:`Nhấp <b>3 lần</b> vào vùng chọn (lề trái) để chọn cả tài liệu. <b>Replace</b> tìm và thay chữ. Thẻ <b>Insert → Table</b> chèn bảng. Nút <b>Share</b> cho người khác xem hoặc sửa tài liệu — em quyết định quyền của họ.`,
  mission:'Em hãy chỉnh bài viết về thú cưng và chia sẻ cho bạn.',
  seed:()=>`<h2>Chú chó của em</h2><p>Em có một chú chó tên là Bi. Con chó rất ngoan. Mỗi sáng em dắt chó đi dạo.</p>`,
  steps:[
    {t:'Nhấp <b>3 lần</b> vào vùng chọn bên lề trái trang để chọn <b>toàn bộ</b> tài liệu.', hint:'Vùng chọn là dải hẹp ngay bên trái trang giấy. Nhấp nhanh 3 lần.', target:'.w-margin', check:s=>s.did('sel-all')},
    {t:'Dùng <b>Replace</b> đổi tất cả chữ “chó” thành “mèo”.', hint:'Thẻ Home → Replace (hoặc Ctrl+H) → nhập “chó” và “mèo” → Replace All.', target:W.cmd('replace'), check:s=>s.did('replace')&&!s.text.includes('chó')&&s.text.includes('mèo')},
    {t:'Thẻ <b>Insert</b> → <b>Table</b>, rồi gõ chữ vào một ô của bảng.', hint:'Nhấp vào ô trong bảng và gõ như bình thường.', target:'[data-tab="insert"]', check:s=>s.q('.w-tbl td').some(td=>td.textContent.trim())},
    {t:'Bấm <b>Chia sẻ</b> và chọn quyền chỉ <b>Xem tài liệu (View)</b>, rồi bấm Gửi.', hint:'Quyền View cho bạn xem nhưng không thể sửa.', target:'.w-share', check:s=>s.did('share:view')}
  ],
  quiz:[['b1617',[15,18,19,21,23,27,28]]] },

{ id:'b17x', no:'Bài 17', e:'🧮', c:'#19c08a', app:'excel', title:'Làm quen với bảng tính Excel',
  learn:`Cột có tiêu đề là <b>chữ cái</b> (A, B, C…), dòng có tiêu đề là <b>con số</b> (1, 2, 3…). Gõ xong nhấn <b>Enter</b> để xuống ô bên dưới. Kéo ranh giới cột hoặc <b>nhấp đúp</b> để chỉnh độ rộng cột.`,
  mission:'Em hãy lập bảng giá bánh cho tiệm Doe’s Bakery.',
  seed:()=>({A1:'Món',B1:'Giá tiền của mỗi món (đô la)'}),
  steps:[
    {t:'Nhấp vào tiêu đề <b>cột C</b>.', hint:'Tiêu đề cột là các chữ cái A, B, C… ở hàng trên cùng.', check:s=>s.did('colhead:C')},
    {t:'Nhấp vào tiêu đề <b>dòng 3</b>.', hint:'Tiêu đề dòng là các con số ở bên trái.', check:s=>s.did('rowhead:3')},
    {t:'Nhấp ô <b>A2</b>, gõ “Bánh quy” rồi nhấn <b>Enter</b>. Gõ tiếp “Bánh vòng” ở ô A3 và Enter.', hint:'Sau Enter, ô chọn tự động chuyển xuống dưới.', check:s=>s.did('enter-down')&&s.cell('A2')&&s.cell('A3')},
    {t:'<b>Kéo</b> ranh giới bên phải tiêu đề cột A để cột rộng hơn.', hint:'Đưa chuột vào vạch ngăn giữa chữ A và B rồi kéo sang phải.', check:s=>s.did('col-drag:A')},
    {t:'<b>Nhấp đúp</b> vào ranh giới bên phải cột B để cột tự vừa chữ.', hint:'Nhấp đúp (Double Click) lên vạch ngăn giữa chữ B và C.', check:s=>s.did('col-dbl:B')}
  ],
  quiz:[['b1617',[29,30,31,32]]] },

{ id:'b18', no:'Bài 18', e:'📝', c:'#f25ca8', app:'word', title:'Danh sách Bullets và Numbering',
  learn:`<b>Bullets</b> (ký hiệu đầu dòng) dùng khi thứ tự không quan trọng, ví dụ danh sách món ăn. <b>Numbering</b> (đánh số) dùng khi có thứ tự hoặc các bước. Bấm mũi tên ▾ bên cạnh nút để chọn kiểu.`,
  mission:'Người chủ nhờ em định dạng thực đơn của tiệm bánh.',
  seed:()=>`<h2>Các món trong tiệm bánh</h2><p>Bánh quy</p><p>Bánh vòng</p><p>Cupcake</p><p>Bánh táo</p><h2>Cách đặt hàng</h2><p>Trực tuyến</p><p>Qua điện thoại</p><p>Tại cửa hàng</p>`,
  steps:[
    {t:'Bôi đen 4 tên món bánh rồi bấm <b>Bullets</b> để tạo danh sách có ký hiệu.', hint:'Kéo chuột từ “Bánh quy” đến “Bánh táo”, sau đó bấm nút Bullets ☰•.', target:W.cmd('bullet'), check:s=>s.q('ul li').length>=4},
    {t:'Bấm <b>mũi tên ▾</b> của Bullets và đổi sang kiểu <b>hình vuông ■</b>.', hint:'Mũi tên nhỏ nằm ngay bên phải nút Bullets.', target:'[data-menu="bullet"]', check:s=>s.did('liststyle:square')},
    {t:'Bôi đen 3 cách đặt hàng rồi bấm <b>Numbering</b> để đánh số.', hint:'Các bước/ cách làm có thứ tự thì dùng Numbering ☰1.', target:W.cmd('number'), check:s=>s.q('ol li').length>=3}
  ],
  quiz:[['b18',[0,1,3,4,5,6]]] },

{ id:'b19', no:'Bài 19', e:'🅱️', c:'#ff5d6c', app:'word', title:'Định dạng văn bản cơ bản',
  learn:`<b>Ctrl+B</b> in đậm, <b>Ctrl+I</b> in nghiêng, <b>Ctrl+U</b> gạch chân. Tăng cỡ chữ bằng nút <b>Increase Font Size</b> hoặc <b>Ctrl+Shift+&gt;</b>. In đậm, cỡ lớn, màu chữ giúp nhấn mạnh phần quan trọng.`,
  mission:'Em hãy làm thiệp mời sinh nhật thật nổi bật!',
  seed:()=>`<p>Bữa tiệc sinh nhật</p><p>Mời các bạn đến dự tiệc sinh nhật của em vào chủ nhật này.</p><p>Nhớ mang theo quà nhé!</p>`,
  steps:[
    {t:'Bôi đen dòng “Bữa tiệc sinh nhật” và <b>in đậm</b> chữ.', hint:'Bấm nút B hoặc nhấn Ctrl+B.', target:W.cmd('bold'), check:s=>s.q('b,strong').some(b=>b.textContent.trim())},
    {t:'Vẫn bôi đen tiêu đề: <b>tăng cỡ chữ</b> lên.', hint:'Bấm nút A▴ hoặc nhấn Ctrl+Shift+> (có thể bấm vài lần).', target:W.cmd('sizeUp'), check:s=>s.did('size-up')},
    {t:'Bôi đen một từ ở đoạn 2 và <b>in nghiêng</b> bằng nút I.', hint:'Nút I hoặc Ctrl+I.', target:W.cmd('italic'), check:s=>s.q('i,em').some(b=>b.textContent.trim())},
    {t:'Bôi đen “chủ nhật” và <b>gạch chân</b> bằng phím <b>Ctrl+U</b>.', hint:'Giữ Ctrl rồi nhấn U.', check:s=>s.q('u').some(b=>b.textContent.trim())},
    {t:'Bôi đen “Nhớ mang theo quà nhé!” và đổi <b>màu chữ</b>.', hint:'Bấm nút A có gạch đỏ (Font Color) hoặc mũi tên bên cạnh để chọn màu.', target:W.cmd('color'), check:s=>s.q('font[color]').some(b=>b.textContent.trim())}
  ],
  quiz:[['b19',[1,3,4,6]]] },

{ id:'b20', no:'Bài 20', e:'🖼️', c:'#00b8d9', app:'word', title:'Thao tác với hình ảnh',
  learn:`Chọn hình để thấy các <b>Handle</b> (nút tùy chỉnh): kéo để đổi <b>kích thước</b>; <b>Rotate Handle</b> để <b>xoay</b>; <b>Crop</b> để <b>cắt xén</b>; kéo thân hình để <b>di chuyển</b>. Hình ảnh phải liên quan đến chủ đề và rõ nét.`,
  mission:'Em đang làm bài trình bày về chú chó. Hãy chèn và chỉnh hình ảnh phù hợp.',
  seed:()=>`<p>Bài thuyết trình về chú chó đáng yêu</p><p><br></p><p>Chú chó là người bạn trung thành của em.</p>`,
  steps:[
    {t:'Thẻ <b>Insert → Picture</b>: chèn hình <b>chú chó</b> 🐶.', hint:'Chọn đúng hình liên quan đến chủ đề (chó, không phải bánh).', target:'[data-tab="insert"]', check:s=>s.q('.pic[data-pic="dog"]').length>0},
    {t:'Kéo một <b>Handle</b> ở góc hình để <b>phóng to</b> hình.', hint:'Các chấm nhỏ ở bốn góc hình là Handle.', check:s=>s.did('resize')},
    {t:'Nhấp <b>Rotate Handle</b> ⟳ (hoặc nút Rotate) để <b>xoay</b> hình.', hint:'Nút xoay nằm phía trên hình, hoặc trong thẻ Picture Format.', target:W.cmd('rotate'), check:s=>s.did('rotate')},
    {t:'Dùng <b>Crop</b> để <b>cắt xén</b> hình.', hint:'Thẻ Picture Format → Crop.', target:W.cmd('crop'), check:s=>s.did('crop')},
    {t:'<b>Kéo hình</b> sang một đoạn văn khác để di chuyển.', hint:'Nhấn giữ vào thân hình và kéo đến đoạn văn khác.', check:s=>s.did('move')}
  ],
  quiz:[['b20',[0,2,3,6,8]]] },

{ id:'b21', no:'Bài 21', e:'💬', c:'#e6a800', app:'word', title:'Tạo chú thích cho hình ảnh',
  learn:`<b>Chú thích (Caption)</b> cho người xem biết thêm thông tin về hình, giúp thông điệp rõ hơn và hỗ trợ bạn có vấn đề về thị giác. Tạo bằng <b>nhấp chuột phải vào hình → Insert Caption</b> hoặc thẻ <b>References → Insert Caption</b>.`,
  mission:'Thực đơn của tiệm Benny’s Bakery cần chú thích cho hình bánh.',
  seed:()=>`<p>Menu của tiệm bánh Benny’s Bakery</p><p>${WordSim.figHTML('cake',120)}</p><p>Hãy ghé thăm tiệm của chúng tôi!</p>`,
  steps:[
    {t:'Nhấp chọn <b>hình bánh kem</b>.', hint:'Khi chọn, hình có các chấm Handle ở góc.', check:s=>s.did('select-pic')},
    {t:'<b>Nhấp chuột phải</b> vào hình và chọn <b>Insert Caption…</b>.', hint:'Chuột phải lên hình bánh sẽ hiện menu.', check:s=>s.did('ctx-caption')},
    {t:'Trong hộp thoại <b>Caption</b>, gõ nội dung chú thích (ví dụ “Hình 1: Bánh kem dâu”) rồi bấm <b>OK</b>.', hint:'Nhập chú thích rồi bấm OK.', check:s=>s.q('.cap').some(c=>c.textContent.replace(/Hình\s*1:?/,'').trim().length>1)}
  ],
  quiz:[['b21',[0,1,2,3]]] },

{ id:'proj', no:'Dự án', e:'🏆', c:'#ffb000', app:'project', title:'Dự án: Tiệm bánh Doe’s Bakery',
  learn:`Em là nhân viên mới của tiệm bánh! Hãy dùng cả <b>Word</b> (thực đơn), <b>Excel</b> (bảng giá) và <b>PowerPoint</b> (bài giới thiệu). Chuyển qua lại giữa ba ứng dụng bằng các nút phía trên cửa sổ.`,
  mission:'Hoàn thành 3 sản phẩm của tiệm bánh. Mỗi mục hoàn thành sẽ tự động được đánh dấu ✓.',
  seed:()=>({
    w:`<p>Tiệm bánh Doe’s Bakery</p><p>Các món bánh của chúng tôi</p><p>Bánh quy</p><p>Bánh vòng</p><p>Cupcake</p><p>Cách đặt hàng</p><p>Trực tuyến</p><p>Qua điện thoại</p><p>Tại cửa hàng</p><p><br></p>`,
    x:{A1:'Món',B1:'Giá ($)'},
    p:[{title:'Cảm ơn quý khách!',body:'Hẹn gặp lại'},{title:'Thực đơn',body:'Bánh quy · Bánh vòng · Cupcake'},{title:'Giới thiệu',body:'Doe’s Bakery – tiệm bánh của em'}]}),
  steps:[
    {a:'w',t:'<b>Word:</b> đặt dòng đầu thành <b>Tiêu đề</b> (Title) và <b>căn giữa</b>.', hint:'Chọn dòng đầu → Home → Title → Center.', check:s=>s.w.q('h1').length>0&&centered(s.w.q('h1')[0])},
    {a:'w',t:'<b>Word:</b> đặt “Các món bánh của chúng tôi” và “Cách đặt hàng” thành <b>Đề mục</b> (Heading).', hint:'Chọn từng dòng → Home → Heading.', check:s=>s.w.q('h2').length>=2},
    {a:'w',t:'<b>Word:</b> tạo danh sách <b>Bullets</b> cho 3 món bánh và <b>Numbering</b> cho 3 cách đặt hàng.', hint:'Bôi đen từng nhóm rồi bấm Bullets hoặc Numbering.', check:s=>s.w.q('ul li').length>=3&&s.w.q('ol li').length>=3},
    {a:'w',t:'<b>Word:</b> in đậm hoặc đổi màu một từ quan trọng.', hint:'Dùng B hoặc Font Color.', check:s=>s.w.q('b,strong,font[color]').some(b=>b.textContent.trim())},
    {a:'w',t:'<b>Word:</b> chèn một <b>hình bánh</b> và tạo <b>chú thích</b> cho hình.', hint:'Insert → Picture; chuột phải vào hình → Insert Caption.', check:s=>s.w.q('.fig .cap').some(c=>c.textContent.trim().length>1)},
    {a:'x',t:'<b>Excel:</b> nhập ít nhất <b>4 món bánh</b> và giá tiền (cột A và B, từ dòng 2).', hint:'Gõ tên, Tab hoặc nhấp ô B, gõ giá, nhấn Enter.', check:s=>[2,3,4,5,6,7].filter(r=>s.x.cell('A'+r)&&parseFloat(s.x.cell('B'+r))>0).length>=4},
    {a:'x',t:'<b>Excel:</b> dùng <b>AutoSum ∑</b> tính tổng giá ở ô ngay dưới cột B.', hint:'Chọn ô trống ngay dưới giá cuối cùng rồi bấm AutoSum.', check:s=>Object.values(s.x.vals).some(v=>/^=SUM\(B/i.test(v))},
    {a:'x',t:'<b>Excel:</b> mở rộng <b>cột A</b> và in đậm hàng tiêu đề.', hint:'Kéo vạch cột A; chọn ô A1 rồi bấm Bold.', check:s=>s.x.w[0]>90&&(s.x.bold.A1||s.x.bold.B1)},
    {a:'p',t:'<b>PowerPoint:</b> đưa slide “Giới thiệu” lên đầu và “Cảm ơn” xuống cuối.', hint:'Kéo–thả slide ở cột bên trái.', check:s=>s.p.slides[0].title==='Giới thiệu'&&s.p.slides[s.p.slides.length-1].title.startsWith('Cảm ơn')},
    {a:'p',t:'<b>PowerPoint:</b> áp dụng hiệu ứng chuyển slide cho <b>tất cả</b> slide.', hint:'Transitions → chọn hiệu ứng → Apply To All.', check:s=>s.p.did('apply-all')},
    {a:'p',t:'<b>PowerPoint:</b> chèn một <b>hình/video</b> và thêm <b>hiệu ứng Animations</b> cho tiêu đề.', hint:'Insert → Picture/Video; chọn tiêu đề → Animations.', check:s=>s.p.slides.some(x=>x.objs.length)&&s.p.slides.some(x=>x.anims.length)},
    {a:'p',t:'<b>PowerPoint:</b> trình chiếu bằng <b>Slide Show → From Beginning</b>.', hint:'Thẻ Slide Show.', check:s=>s.p.did('slideshow')}
  ],
  quiz:[['b1617',[2,5,7,12,14,25]],['b18',[2,3]],['b19',[0,2]],['b20',[1,5]],['b21',[1]]] }
];
