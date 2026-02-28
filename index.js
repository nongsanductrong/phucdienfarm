// thêm sản phẩm
const products = [
    { 
        id: 1, 
        name: "Ớt Hiểm", 
        price: 110000, 
        status: "waiting", 
        region: "Lâm Đồng", 
        images: [
            "https://cdn.tgdd.vn/Products/Images/8820/271666/bhx/ot-hiem-trai-tui-50g-202205181710105284.jpg"
        ],
        description: "Cách bảo quản ớt hiểm tươi ngon Ớt hiểm nên được bảo quản trong ngăn mát tủ lạnh để giúp ớt tươi lâu"
    },
    { 
        id: 2, 
        name: "Rau Húng Quế", 
        price: 59000, 
        status: "waiting", 
        region: "Lâm Đồng", 
        images: [
            "https://cdn.tgdd.vn/Products/Images/8820/299256/bhx/rau-hung-que-goi-100g-202212090838565509.jpg"
        ],
        description: "Cách bảo quản húng quế tươi ngon Rau húng quế có thể bảo quản nơi khô ráo, thoáng mát nếu sử dụng ngay; hoặc bảo quản trong ngăn mát tủ lạnh để rau được tươi lâu hơn"
    },
    { 
        id: 3, 
        name: "Ngò Rí", 
        price: 78000, 
        status: "waiting", 
        region: "Lâm Đồng", 
        images: [
            "https://cdn.tgdd.vn/Products/Images/8820/309141/bhx/ngo-ri-50g-202306081021284021.jpg"
        ],
        description: "Cách bảo quản ngò rí tươi ngon: Để bảo quản ngò rí tươi ngon lâu hơn, bạn có thể áp dụng các cách sau:Cho vào hộp nhựa hoặc túi zip: Rửa nhẹ ngò rí, để ráo nước hoàn toàn, sau đó cho vào hộp nhựa có lót giấy ăn hoặc túi zip và bảo quản trong ngăn mát tủ lạnh.Cắm vào nước: Cắt bớt phần gốc, cắm ngò rí vào một cốc nước nhỏ và bọc kín phần lá bằng túi nilon rồi cho vào tủ lạnh. Thay nước hàng ngày để giữ độ tươi.Bảo quản trong khăn ẩm: Rửa sạch ngò rí, trải đều lên một chiếc khăn ẩm, cuộn lại và cho vào túi nilon rồi bảo quản trong tủ lạnh."
    },
    { 
        id: 4, 
        name: "Húng cây", 
        price: 59000, 
        status: "available", 
        region: "Lâm Đồng", 
        images: [
            "https://monngonmoingay.com/wp-content/smush-webp/2024/01/MNMN-hung-que.jpg.webp",
            "https://cdn.tgdd.vn/Products/Images/8820/299257/bhx/rau-hung-cay-khoang-100g-202401171123417598.jpg",
            "https://cdn.tgdd.vn/Products/Images/8820/299257/bhx/rau-hung-cay-khoang-100g-202401171123471465.jpg"
        ],
        description: "Cách bảo quản rau húng cây tươi ngon Để bảo quản rau húng cây tươi ngon lâu hơn, bạn có thể áp dụng các cách sau: Cho vào túi zip hoặc hộp kín: Rửa nhẹ rau húng cây, để ráo nước hoàn toàn, sau đó cho vào túi zip hoặc hộp kín và bảo quản trong ngăn mát tủ lạnh. Cắm vào nước: Cắt bớt phần gốc, cắm rau húng cây vào một cốc nước nhỏ và bọc kín phần lá bằng túi nilon rồi cho vào tủ lạnh. Thay nước hàng ngày để duy trì độ tươi. Bọc giấy báo ẩm: Bọc rau húng cây trong giấy báo rồi cho vào túi nilon và bảo quản trong tủ lạnh. Giấy báo giúp hút ẩm và giữ rau tươi lâu hơn."
    },
    { 
        id: 5, 
        name: "Hành lá", 
        price: 60000, 
        status: "available", 
        region: "Lâm Đồng", 
        images: [
            "https://cdn.tgdd.vn/Products/Images//8786/223358/bhx/files/hanh-la-goi-50g-202009300008345165.jpg"
        ],
        description: ""
    },
    { 
        id: 6, 
        name: "Gừng", 
        price: 55000, 
        status: "available", 
        region: "Lâm Đồng", 
        images: [
            "https://cdn.tgdd.vn/Products/Images/8820/253796/bhx/gung-tui-100g-1-2-cu-202205201545192733.jpg"
        ],
        description: "Cách bảo quản gừng tươi ngon: Gừng có thể bảo quản trong môi trường phòng khá lâu, tuy nhiên để gừng giữ được độ tươi, nên bảo quản trong ngăn mát tủ lạnh để sử dụng được lâu hơn."
    }
];


// 1. Hàm Lọc (Đã tối giản - Chỉ lọc theo tên)
function runFilter() {
    // Chỉ lấy giá trị từ ô tìm kiếm tên
    const searchValue = document.getElementById('shopSearch').value.toLowerCase();

    // Thực hiện lọc theo tên
    let result = products.filter(p => {
        return p.name.toLowerCase().includes(searchValue);
    });

    // Hiển thị kết quả
    renderProducts(result);
}
// 2. Hàm Hiển thị Sản phẩm (Cập nhật: Hiển thị rõ nét cho cả hàng đặt trước)
function renderProducts(productsToRender) {
    const shopContainer = document.getElementById('wholesaleShop');
    shopContainer.innerHTML = '';

    productsToRender.forEach(product => {
        // Xử lý dữ liệu hình ảnh
        const imagesJson = JSON.stringify(product.images).replace(/"/g, '&quot;');
        
        // Mặc định các sản phẩm đều dùng chung style nền và bóng đổ để đồng nhất
        let cardStyle = 'bg-white border-slate-100 shadow-sm';
        let statusBadge = '';
        
        // Giá hiển thị luôn lấy từ product.price bất kể trạng thái
        const formattedPrice = `<p class="text-green-600 font-black text-lg">${product.price.toLocaleString()}đ<span class="text-xs font-normal text-gray-400">/kg</span></p>`;

        if (product.status === 'available') {
            // Nhãn CÓ SẴN (Xanh lá)
            statusBadge = `
                <div class="absolute top-3 left-3 z-10">
                    <span class="bg-green-600 text-white text-[12px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                        <span class="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> CÓ SẴN
                    </span>
                </div>`;
        } else {
            // Nhãn ĐẶT HÀNG TRƯỚC (Vàng hổ phách) - Giữ nguyên Badge để phân biệt
            statusBadge = `
                <div class="absolute top-3 left-3 z-10">
                    <span class="bg-amber-500 text-white text-[12px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                        <i class="far fa-clock"></i> ĐẶT TRƯỚC
                    </span>
                </div>`;
        }

        const productHTML = `
            <div class="shop-item ${cardStyle} rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer" 
                data-id="${product.id}"
                data-name="${product.name}" 
                data-price="${product.price}"
                onclick="openCheckoutModal(this, ${imagesJson})">
                
                <div class="relative h-40 md:h-52 overflow-hidden">
                    <img src="${product.images[0]}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    ${statusBadge}
                </div>

                <div class="p-4 md:p-5">
                    <span class="text-[12px] text-gray-400 font-bold uppercase tracking-wider">📍 ${product.region}</span>
                    <h3 class="font-extrabold text-base md:text-lg text-slate-800 line-clamp-1 group-hover:text-green-700 transition-colors mt-1">${product.name}</h3>
                    
                    <div class="mt-3 flex items-end justify-between">
                       <div>
                            <p class="text-[12px] text-gray-500 font-medium">Giá sỉ đề xuất:</p>
                            ${formattedPrice}
                        </div>
                        
                        <div class="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                            <i class="fas fa-shopping-cart text-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
        shopContainer.innerHTML += productHTML;
    });
}

// Khởi chạy
renderProducts(products);

// navbar va khung chat
    // 1. Logic đóng mở Chat
    function toggleChat() {
        const popup = document.getElementById('chat-popup');
        
        if (popup.classList.contains('hidden')) {
            popup.classList.remove('hidden');
            popup.classList.remove('chat-close');
            popup.classList.add('chat-open');
        } else {
            popup.classList.remove('chat-open');
            popup.classList.add('chat-close');
            setTimeout(() => {
                popup.classList.add('hidden');
            }, 200); // Đợi animation chạy xong mới ẩn
        }
    }
    document.addEventListener('scroll', () => {
        const nav = document.getElementById('glass-nav');
        const navBg = document.getElementById('nav-bg');
        
        if (window.scrollY > 50) {
            // Khi cuộn xuống: Navbar nhỏ lại chút và nền trắng đục hơn
            nav.classList.remove('h-16', 'lg:h-20');
            nav.classList.add('h-14', 'lg:h-16', 'shadow-md');
            navBg.classList.replace('bg-white/80', 'bg-white/95');
        } else {
            // Khi ở đầu trang: Navbar cao hơn và trong hơn
            nav.classList.add('h-16', 'lg:h-20');
            nav.classList.remove('h-14', 'lg:h-16', 'shadow-md');
            navBg.classList.replace('bg-white/95', 'bg-white/80');
        }
    })

// Modal
    // Formatter tiền tệ VN
        const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
        let prevTier = 0; // Để theo dõi trạng thái rung

        function calculate() {
    // --- LẤY DỮ LIỆU ĐẦU VÀO ---
    const weight = parseFloat(document.getElementById('weight').value) || 0;
    const distance = parseFloat(document.getElementById('distance').value) || 0;
    const packingType = document.getElementById('packing').value;
    
    const productTypeSelect = document.getElementById('productType');
    const selectedPrice = parseFloat(productTypeSelect.value) || 0;
    const qualityName = productTypeSelect.options[productTypeSelect.selectedIndex].text.split(' - ')[0];

    // --- 1. TIỀN HÀNG ---
    const totalProduct = weight * selectedPrice;

    // --- 2. PHÍ ĐÓNG GÓI & CẢNH BÁO ---
    let packingFee = 0;
    const packingAlert = document.getElementById('packingAlert');
    
    if (packingType === 'nilon') {
        packingFee = weight * 500;
        // Đề xuất đổi loại thùng nếu đi xa > 50km
        if (distance > 50 && packingAlert) {
            packingAlert.innerHTML = `<i class="fas fa-exclamation-triangle mr-1"></i> Khoảng cách xa (>50km), nên dùng Thùng giấy hoặc Thùng xốp để đảm bảo chất lượng.`;
            packingAlert.classList.remove('hidden');
        } else if (packingAlert) {
            packingAlert.classList.add('hidden');
        }
    } else {
        const numBoxes = Math.ceil(weight / 25);
        packingFee = numBoxes * (packingType === 'carton' ? 15000 : 30000);
        if (packingAlert) packingAlert.classList.add('hidden');
    }

    // --- 3. VẬN CHUYỂN & ĐỀ XUẤT PHƯƠNG TIỆN ---
    let shipFee = 0;
    let suggestion = "";
    let shipNote = "";

    if (distance > 0) {
        if (distance > 50) {
            // TRÊN 50KM: Miễn phí ra bến xe, khách tự trả tiền nhà xe
            shipFee = 0;
            suggestion = "Gửi chành xe / Xe khách";
            shipNote = "Miễn phí trung chuyển ra bến. Quý khách tự thanh toán cước với nhà xe.";
        } else {
            // DƯỚI 50KM: Tính theo khối lượng
            if (weight < 150) {
                shipFee = distance * 1800;
                suggestion = "Giao hàng bằng Xe máy";
            } else if (weight >= 150 && weight < 500) {
                shipFee = distance * 15000;
                suggestion = "Giao hàng bằng Xe tải";
            } else {
                // Trên 500kg
                shipFee = distance * 12000;
                suggestion = "Giao hàng bằng Xe tải. (Ưu đãi cước phí vận chuyển: giảm 20%)";
            }
            shipNote = `Phí vận chuyển tính trực tiếp: ${shipFee.toLocaleString()}đ`;
        }
    }
    //3.5 LOGIC CHIẾT KHẤU THANH TOÁN SỚM
        let discountPayment = 0;
        // Tìm phương thức thanh toán đang được chọn
        const paymentMethodEl = document.querySelector('input[name="paymentMethod"]:checked');
        const paymentMethod = paymentMethodEl ? paymentMethodEl.value : 'cod';

        if (paymentMethod === 'early') {
            // CHỈ GIẢM 1% TRÊN TIỀN HÀNG GỐC
            discountPayment = totalProduct * 0.01;
        }

    // --- 4. TỔNG CUỐI CÙNG = (Tiền hàng + Đóng gói + Ship) - Chiết khấu tiền hàng
    const finalTotal = (totalProduct + packingFee + shipFee) - discountPayment;

    // --- 5. CẬP NHẬT GIAO DIỆN ---
    // Cập nhật dòng chiết khấu trong bảng tính
    const elDiscountRow = document.getElementById('paymentDiscountRow');
    const elDiscountVal = document.getElementById('displayPaymentDiscount');

    if (discountPayment > 0) {
        elDiscountRow.classList.remove('hidden');
        elDiscountVal.innerText = "-" + Math.round(discountPayment).toLocaleString() + "đ";
    } else {
        elDiscountRow.classList.add('hidden');
    }

    document.getElementById('displayQuality').innerText = qualityName;
    document.getElementById('displayBasePrice').innerText = totalProduct.toLocaleString() + "đ";
    document.getElementById('displayPackingFee').innerText = packingFee.toLocaleString() + "đ";
    document.getElementById('displayShippingFee').innerText = shipFee.toLocaleString() + "đ";
    document.getElementById('displayKM').innerText = distance;
    // Tìm tất cả các thành phần hiển thị tổng tiền
const elFinalTotals = document.querySelectorAll('.finalTotalDisplay');

if (elFinalTotals.length > 0) {
    const formattedTotal = Math.round(finalTotal).toLocaleString();
    
    // Lặp qua từng phần tử để cập nhật giá trị
    elFinalTotals.forEach(el => {
        el.innerText = formattedTotal;
    });
}
    
    // Cập nhật vùng đề xuất vận chuyển
    // --- Cập nhật Badge & Khung đề xuất ---
    
    const sugBox = document.getElementById('shipSuggestion');
    const sugText = document.getElementById('suggestionText');
    const sugNote = document.getElementById('suggestionNote');

    if (distance > 0) {
        
        // 2. Khung đề xuất chi tiết
        if (sugBox) {
            sugBox.classList.remove('hidden');
            if (sugText) sugText.innerText = suggestion;
            if (sugNote) sugNote.innerText = shipNote;

            // Đổi màu khung nếu là Miễn phí (>50km) cho trực quan
            if (distance > 50) {
                sugBox.firstElementChild.className = "bg-green-50/50 border border-green-100 rounded-xl p-3 flex gap-3 items-start";
                sugText.className = "text-[12px] font-black text-green-700 uppercase tracking-wide leading-none";
            } else {
                sugBox.firstElementChild.className = "bg-blue-50/50 border border-blue-100 rounded-xl p-3 flex gap-3 items-start";
                sugText.className = "text-[12px] font-black text-blue-700 uppercase tracking-wide leading-none";
            }
        }
    } else {
        if (badge) badge.classList.add('hidden');
        if (sugBox) sugBox.classList.add('hidden');
    }
        }
        // Gallery & Lightbox Logic
        function changeImage(el) {
            document.getElementById('mainImage').src = el.src.replace('w=200', 'w=800');
            // Reset border logic if needed
        }

        function openLightbox(el) {
            const imgSrc = el.querySelector('img').src;
            const lightbox = document.getElementById('lightbox');
            document.getElementById('lightbox-img').src = imgSrc;
            lightbox.classList.add('active');
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('active');
        }
        // Lấy các phần tử cần thiết
        const modalContainer = document.querySelector('.fixed.inset-0.bg-black\\/40'); // Overlay
        const mainModal = document.querySelector('.glass-modal'); // Modal chính
        const closeBtn = document.querySelector('.fa-times').parentElement; // Nút X


        //Hàm truyền dữ liệu vào modal 
        // 1. Hàm chính để mở Modal và nạp dữ liệu từ mảng products
        
        function openCheckoutModal(element) {
        resetModalData()
       // 1. Tìm chính xác ID Overlay mà CSS của bạn đang quản lý
        const modalOverlay = document.getElementById('modal-overlay'); // Phải khớp với CSS của bạn
        const modal = document.getElementById('productModal'); // Cái này chứa nội dung bên trong

        if (!modalOverlay) {
            console.error("Không tìm thấy ID 'modal-overlay'. Hãy kiểm tra lại HTML!");
            return;
        }

        // 2. Lấy ID sản phẩm
        const productId = parseInt(element.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);

        if (!product) {
            console.error("Không tìm thấy sản phẩm ID:", productId);
            return;
        }

        // A. CẬP NHẬT THÔNG TIN HEADER
    // Tạo Badge trạng thái dựa trên status
    let statusLabel = "";
    if (product.status === 'available') {
        statusLabel = `<span class="inline-block ml-2 text-[12px] text-green-700 px-2 py-0.5 align-middle uppercase tracking-wider">● Có sẵn</span>`;
    } else {
        statusLabel = `<span class="inline-block ml-2 text-[12px] text-amber-700 px-2 py-0.5 align-middle uppercase tracking-wider">● Đặt trước</span>`;
    }

    // Cập nhật tên sản phẩm kèm theo Badge trạng thái
    modal.querySelector('h2').innerHTML = `${product.name} ${statusLabel}`;
        
        // Cập nhật Badge Xuất xứ
        const regionBadge = modal.querySelector('.fa-map-marker-alt').parentElement;
        regionBadge.innerHTML = `<i class="fas fa-map-marker-alt"></i> Xuất xứ: ${product.region}`;

        // B. CẬP NHẬT ẢNH CHÍNH (Dòng này cực kỳ quan trọng)
        const mainImg = document.getElementById('mainImage');
        if (mainImg && product.images && product.images.length > 0) {
            mainImg.src = product.images[0];
        }

        // C. Cập nhật Thumbnails
        const thumbContainer = modal.querySelector('.flex.gap-4.mt-4');
        thumbContainer.innerHTML = ''; 
        product.images.forEach((imgUrl, index) => {
            if(index < 3) { 
                const imgEl = document.createElement('img');
                imgEl.src = imgUrl;
                imgEl.onclick = function() { 
                    if(mainImg) mainImg.src = this.src; 
                    // Hiệu ứng border cho thumbnail
                    thumbContainer.querySelectorAll('img').forEach(i => i.classList.replace('border-green-500', 'border-transparent'));
                    this.classList.replace('border-transparent', 'border-green-500');
                };
                imgEl.className = `w-20 h-20 rounded-xl object-cover border-2 cursor-pointer shadow-md transition-all ${index === 0 ? 'border-green-500' : 'border-transparent'}`;
                thumbContainer.appendChild(imgEl);
            }
        });

        // D. Cập nhật Giá & Dropdown
        const priceL1 = product.price;
        const marketPrice = Math.round((priceL1 * 1.4) / 1000) * 1000;
            // Sử dụng getElementById hoặc querySelector với ID sẽ chính xác tuyệt đối
            const currentPriceEl = document.getElementById('currentPriceDisplay');
            const marketPriceEl = document.getElementById('marketPriceDisplay');

            if (currentPriceEl) {
                currentPriceEl.innerText = new Intl.NumberFormat('vi-VN').format(priceL1) + 'đ/kg';
            }
            if (marketPriceEl) {
                marketPriceEl.innerText = new Intl.NumberFormat('vi-VN').format(marketPrice) + 'đ/kg';
            }
        
        const productTypeSelect = document.getElementById('productType');

        if (productTypeSelect) {
            // 1. Tính toán các mức giá và làm tròn đến hàng nghìn gần nhất
            const pricePhoThong = product.price; 

            // Làm tròn giá Kiểm soát (Cộng 18%)
            const priceKiemSoat = Math.round((product.price * 1.18) / 1000) * 1000; 

            // Làm tròn giá VietGAP (Cộng 32%)
            const priceVietGap = Math.round((product.price * 1.32) / 1000) * 1000;

            // Hàm hỗ trợ định dạng tiền tệ nhanh
            const formatVND = (num) => new Intl.NumberFormat('vi-VN').format(num) + 'đ';

            // 2. Cập nhật các Options (Đảm bảo HTML của bạn có ít nhất 3 thẻ <option>)
            
            // Hạng Phổ thông (Giá gốc)
            productTypeSelect.options[0].value = pricePhoThong;
            productTypeSelect.options[0].text = `Phổ thông - ${formatVND(pricePhoThong)}`;

            // Hạng Kiểm soát (+18%)
            productTypeSelect.options[1].value = priceKiemSoat;
            productTypeSelect.options[1].text = `Kiểm soát - ${formatVND(priceKiemSoat)}`;

            // Hạng VietGAP (+32%)
            // Nếu dropdown chưa có option thứ 3, đoạn code này sẽ giúp bạn kiểm tra hoặc thêm vào
            if (productTypeSelect.options[2]) {
                productTypeSelect.options[2].value = priceVietGap;
                productTypeSelect.options[2].text = `Chứng nhận VietGAP - ${formatVND(priceVietGap)}`;
            }
        }
        // --- THÊM DÒNG NÀY ĐỂ CẬP NHẬT MÔ TẢ ---
        const descEl = document.getElementById('productDescription');
        if (descEl) {
            descEl.innerText = product.description || "Sản phẩm tươi ngon từ Phúc Điền Farm.";
        }
        // ---------------------------------------

        // E. Hiển thị Modal & Reset trạng thái
            modalOverlay.classList.add('active');
            document.body.classList.add('no-scroll');
        // Đảm bảo modal luôn bắt đầu từ đỉnh trang
       const modalBody = document.getElementById('modalContent');
        if (modalBody) {
            modalBody.scrollTop = 0;
        }
    }  

        // 2. Hàm thay đổi ảnh chính khi click thumbnail
        function changeImage(el) {
        document.getElementById('mainImage').src = el.src;
        // Reset border của tất cả thumbnails
        const thumbnails = el.parentElement.querySelectorAll('img');
        thumbnails.forEach(img => img.classList.replace('border-green-500', 'border-transparent'));
        // Highlight ảnh đang chọn
        el.classList.replace('border-transparent', 'border-green-500');
        }

        function closeModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
        }

    // 4. Khởi tạo các sự kiện khi trang load xong
    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.getElementById('productModal');
        
        // Nút đóng (X)
        const closeBtn = modal.querySelector('.fa-times').parentElement;
        closeBtn.addEventListener('click', closeModal);

        // Đóng khi click ra ngoài vùng Modal (Overlay)
        const overlay = document.getElementById('modal-overlay');
        overlay.addEventListener('click', closeModal);

        // Ngăn chặn click bên trong modal làm đóng modal
        const modalContent = modal.querySelector('.glass-modal');
        modalContent.addEventListener('click', (e) => e.stopPropagation());
    });
// Ghi chú loại sản phẩm
function updateProductTypeNote() {
    const select = document.getElementById('productType');
    const selectedOption = select.options[select.selectedIndex];
    const note = selectedOption.getAttribute('data-note');
    const noteContent = document.getElementById('noteContent');
    const noteBox = document.getElementById('productTypeNote');

    if (noteContent && note) {
        // Hiệu ứng mờ dần khi đổi nội dung
        noteBox.style.opacity = 0;
        setTimeout(() => {
            noteContent.innerText = note;
            noteBox.style.opacity = 1;
        }, 150);
    }
}
//Quan ly tin nhan 
    function sendToGoogleSheet() {
        const phone = document.getElementById('cus_phone').value;
        const msg = document.getElementById('cus_msg').value;
        const scriptURL = 'https://script.google.com/macros/s/AKfycbw2yeTQjG5267iPaufELWThVUeipJ-cNRhcWfBf45IxD8C3CKAxrGOEnMWNLFVSRzNN/exec';

        if(!phone || !msg) {
            showStatusModal('error', 'Gửi thất bại', 'Vui lòng nhập đủ SĐT và lời nhắn!');
            return;
        }

        const btn = document.querySelector('button[onclick="sendToGoogleSheet()"]');
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

        // 1. Chuẩn bị dữ liệu dưới dạng FormData (Google nhận diện rất tốt)
        const formData = new FormData();
        formData.append('phone', phone);
        formData.append('message', msg);

        // 2. Sử dụng fetch với chế độ mồ côi (keepalive) 
        // Chúng ta không dùng await, để nó tự chạy ngầm
        fetch(scriptURL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
            keepalive: true
        });

        // 3. Hiển thị thông báo thành công NGAY LẬP TỨC 
        // Vì dữ liệu đã được trình duyệt đưa vào hàng đợi gửi đi chắc chắn
        setTimeout(() => {
            showStatusModal('success', 'Đã gửi tin nhắn thành công!', 'Chúng tôi sẽ liên hệ trong giây lát.');
            document.getElementById('cus_msg').value = '';
            document.getElementById('cus_phone').value = '';
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane text-xs"></i>';
        }, 500); 
    }


async function handleCheckoutSubmit() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycby0CsFCGt2MObMCySrN8jXiRSLk6tR3wL6K5p-KXEezjdFSxixGwJhLaIDPc_OgOjtN/exec';
    
    // Tìm các nút bấm
    const btnDesktop = document.getElementById('btn-modal-submit');
    const btnMobile = document.querySelector('.md\\:hidden[onclick*="handleCheckoutSubmit"]'); 
    const buttons = [btnDesktop, btnMobile];

    // 1. Lấy dữ liệu sản phẩm từ giao diện Modal
    let productName, region, qualitySpec;
    try {
        productName = document.querySelector('#productModal h2')?.innerText || "Không rõ SP";
        region = document.querySelector('.fa-map-marker-alt')?.parentElement?.innerText.replace(' Xuất xứ: ', '').trim() || "N/A";
        
        const productTypeSelect = document.getElementById('productType');
        qualitySpec = productTypeSelect ? productTypeSelect.options[productTypeSelect.selectedIndex].text: "Phổ thông";
    } catch (e) {
        console.error("Lỗi lấy thông tin SP:", e);
    }

    // 2. Lấy dữ liệu khách nhập & Các ID chi tiết mới
    const cusName = document.getElementById('modal_cus_name').value.trim();
    const cusPhone = document.getElementById('modal_cus_phone').value.trim();
    const cusAddress = document.getElementById('modal_cus_address').value.trim();
    const cusNote = document.getElementById('modal_cus_note')?.value.trim() || ""; // Ghi chú khách hàng
    
    const weight = document.getElementById('weight').value;
    const distance = document.getElementById('distance').value || "0";
    const suggestionNote = document.getElementById('suggestionNote')?.innerText || ""; // Ghi chú vận chuyển (VD: Chành xe/Xe máy)

    // Lấy chi tiết giá (Xử lý loại bỏ chữ 'đ' và dấu chấm để lấy số thuần nếu cần, hoặc để nguyên text)
    const basePrice = document.getElementById('displayBasePrice')?.innerText || "0";
    const paymentDiscount = document.getElementById('displayPaymentDiscount')?.innerText || "0";
    const packingFee = document.getElementById('displayPackingFee')?.innerText || "0";
    const shippingFee = document.getElementById('displayShippingFee')?.innerText || "0";
    const finalTotal = document.querySelector('.finalTotalDisplay')?.innerText || "0";

    // Lấy text của các lựa chọn
    const packing = document.getElementById('packing').options[document.getElementById('packing').selectedIndex].text;
    const payment = document.querySelector('input[name="paymentMethod"]:checked')?.value === 'early' ? "Thanh toán sớm (Giảm 1%)" : "COD (Lúc nhận hàng)";

    // Kiểm tra nhanh thông tin bắt buộc
    if (!cusName || !cusPhone || !cusAddress || !distance || !weight) {
        showStatusModal('error', 'Gửi thất bại', 'Vui lòng điền đủ Họ tên, SĐT, Địa chỉ nhận hàng, Khối lượng hàng và Vận chuyển!');
        return;
    }

//     // Checkbox chính sách
    const policyAgreement = document.getElementById('policyAgreement');
    if (policyAgreement && !policyAgreement.checked) {
        showStatusModal('error', 'Thông báo', 'Bạn cần đồng ý với chính sách bán hàng để tiếp tục.');
        return;
    }

    // 3. Đóng gói dữ liệu gửi đi (Đã thêm các trường mới)
    const params = new URLSearchParams();
    params.append('name', cusName);
    params.append('phone', cusPhone);
    params.append('address', cusAddress);
    params.append('customer_note', cusNote); // Ghi chú từ khách
    params.append('product', productName);
    params.append('region', region);
    params.append('specs', qualitySpec);
    params.append('weight', weight + " kg");
    params.append('packing_type', packing);
    params.append('distance', distance + " km");
    params.append('shipping_note', suggestionNote); // Ghi chú loại hình vận chuyển
    
    // Chi tiết tài chính
    params.append('base_price', basePrice);
    params.append('discount', paymentDiscount);
    params.append('packing_fee', packingFee);
    params.append('shipping_fee', shippingFee);
    params.append('payment_method', payment);
    params.append('total', finalTotal + "đ");

    // Hiệu ứng chờ (Loading)
    buttons.forEach(btn => {
        if(btn) {
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> ĐANG GỬI...';
        }
    });

    try {
        // Gửi dữ liệu đi
        fetch(scriptURL, { 
            method: 'POST', 
            mode: 'no-cors', 
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: params.toString() 
        });

        // MẶC ĐỊNH HIỆN THÀNH CÔNG: Vì mode 'no-cors' luôn gửi đi được nếu URL đúng
        setTimeout(() => {
            showStatusModal('success', 'Đã đặt hàng thành công!', 'Phúc Điền Farm sẽ sớm liên hệ xác nhận đơn hàng với bạn qua SĐT.');
            
            if (typeof resetModalData === "function") resetModalData(); 
            if (typeof closeModal === "function") closeModal();

            buttons.forEach(btn => {
                if(btn) {
                    btn.disabled = false;
                    btn.innerText = "XÁC NHẬN ĐƠN HÀNG";
                }
            });
        }, 1500); // Tăng thời gian chờ lên một chút để tạo cảm giác xử lý thật

    } catch (e) {
        // Chỉ vào đây nếu mất mạng hoàn toàn hoặc URL sai định dạng
        console.error("Lỗi kết nối:", e);
        showStatusModal('error', 'Gửi thất bại', 'Có lỗi kết nối, vui lòng kiểm tra mạng hoặc liên hệ Hotline.');
        buttons.forEach(btn => { if(btn) btn.disabled = false; });
    }
}
function resetModalData() {
    try {
        // --- Bổ sung Reset thông tin khách hàng ---
            const cusName = document.getElementById('modal_cus_name');
            if (cusName) cusName.value = '';

            const cusPhone = document.getElementById('modal_cus_phone');
            if (cusPhone) cusPhone.value = '';

            const cusAddress = document.getElementById('modal_cus_address');
            if (cusAddress) cusAddress.value = '';

            const cusNote = document.getElementById('modal_cus_note');
            if (cusNote) cusNote.value = '';

            // 1. Reset ô nhập khối lượng
            const weightInput = document.getElementById('weight');
            if (weightInput) weightInput.value = '';

            
            // Reset Dropdown Loại sản phẩm (Dùng Index để tránh lỗi giá tiền)
            const ptSelect = document.getElementById('productType');
            if (ptSelect && ptSelect.options.length > 0) {
                ptSelect.selectedIndex = 0; 
                if (typeof updateProductTypeNote === "function") updateProductTypeNote();
            }

            // 2. Reset Quy cách đóng gói về mặc định (Nilon)
            const packingSelect = document.getElementById('packing');
            if (packingSelect) packingSelect.value = "nilon";

            // 3. Reset Khoảng cách giao hàng
            const distanceInput = document.getElementById('distance');
            if (distanceInput) distanceInput.value = '';

            // 4. Reset Phương thức thanh toán về COD (chọn radio đầu tiên)
            const defaultPayment = document.querySelector('input[name="paymentMethod"][value="cod"]');
            if (defaultPayment) defaultPayment.checked = true;

            // 5. Ẩn cảnh báo đóng gói (nếu đang hiện)
            const packingAlert = document.getElementById('packingAlert');
            if (packingAlert) packingAlert.classList.add('hidden');

            // 3. Reset Checkbox đồng ý chính sách
            const policyCheckbox = document.getElementById('policyAgreement');
            if (policyCheckbox) policyCheckbox.checked = false;

            // 4. Reset các badge hoặc thông báo ẩn/hiện
            
            const shipSuggestion = document.getElementById('shipSuggestion');
            
            if (shipSuggestion) shipSuggestion.classList.add('hidden');


            // 5. Gọi lại hàm tính toán để cập nhật các con số về 0đ
            if (typeof calculate === "function") {
                calculate(); 
            }

            // 6. Cuộn modal lên đầu trang (tránh trường hợp modal cũ đang bị cuộn dở xuống dưới)
            const modalContent = modalOverlay.querySelector('.bg-white'); // Hoặc class chứa nội dung của bạn
            if (modalContent) modalContent.scrollTop = 0;
    } catch (e) {
        console.error("Lỗi trong quá trình reset form:", e);
    }
}

//HÀM TRUYỀN DỮ LIỆU VÀO MODAL STATUS
    function showStatusModal(type, title, message) {
        const modal = document.getElementById('status-modal');
        const content = document.getElementById('status-content');
        const iconBox = document.getElementById('status-icon-box');
        const titleEl = document.getElementById('status-title');
        const msgEl = document.getElementById('status-message');

        // 1. Cấu hình màu sắc và icon
        if (type === 'success') {
            iconBox.innerHTML = '<i class="fas fa-check"></i>';
            iconBox.className = "w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl bg-green-100 text-green-600";
            titleEl.className = "text-xl font-bold mb-2 text-green-700";
        } else {
            iconBox.innerHTML = '<i class="fas fa-times"></i>';
            iconBox.className = "w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl bg-red-100 text-red-600";
            titleEl.className = "text-xl font-bold mb-2 text-red-700";
        }

        // 2. Cập nhật nội dung
        titleEl.innerText = title;
        msgEl.innerText = message;

        // 3. Hiển thị modal với hiệu ứng
        modal.classList.remove('hidden');
        setTimeout(() => {
            content.classList.remove('scale-95', 'opacity-0');
            content.classList.add('scale-100', 'opacity-100');
        }, 10);
    }

    // function closeStatusModal() {
    //     const modal = document.getElementById('status-modal');
    //     const content = document.getElementById('status-content');
        
    //     content.classList.replace('scale-100', 'scale-95');
    //     content.classList.replace('opacity-100', 'opacity-0');
        
    //     setTimeout(() => {
    //         modal.classList.add('hidden');
    //     }, 300);
    // }
    function closeStatusModal(event) {
    // Ngăn chặn sự kiện click bị truyền ra modal sản phẩm phía sau
    if (event && event.stopPropagation) {
        event.stopPropagation();
    }

    const modal = document.getElementById('status-modal');
    const content = document.getElementById('status-content');
    
    if (!modal || !content) return; // Bảo vệ nếu phần tử không tồn tại

    content.classList.replace('scale-100', 'scale-95');
    content.classList.replace('opacity-100', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

    // 1. Điều khiển Modal chính sách
function openPolicyModal() {
    document.getElementById('policy-modal-overlay').classList.replace('hidden', 'flex');
}

function closePolicyModal() {
    document.getElementById('policy-modal-overlay').classList.replace('flex', 'hidden');
}

// 2. Cập nhật logic đặt hàng
function handleOrder() {
    const isAgreed = document.getElementById('policyAgreement').checked;
    
    if (!isAgreed) {
        alert("Vui lòng đọc và xác nhận đồng ý với chính sách bán hàng trước khi đặt hàng!");
        // Bạn có thể làm hiệu ứng rung cho checkbox để gây chú ý
        document.getElementById('policyAgreement').parentElement.classList.add('animate-bounce');
        setTimeout(() => {
            document.getElementById('policyAgreement').parentElement.classList.remove('animate-bounce');
        }, 1000);
        return;
    }

    // Nếu đã đồng ý, tiến hành gửi đơn hàng
    alert("Đang gửi đơn hàng của bạn...");
    // Thực hiện logic gửi API hoặc Zalo tại đây
}