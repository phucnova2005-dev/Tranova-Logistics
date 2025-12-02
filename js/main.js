// --- 1. DICTIONARY DATA ---
const translations = {
    en: {
        home: "Home", about: "About Us", services: "Services", solutions: "Solutions", 
        tech: "Technology", pricing: "Pricing", contact: "Contact", quote: "Get Quote",
        price_title: "Transparent & Competitive Pricing",
        price_sub: "Choose the best plan for your business needs. No hidden fees.",
        tab_storage: "Warehousing", tab_fulfill: "Fulfillment", tab_transport: "Transportation",
        btn_choose: "Choose Plan",
    },
    vi: {
        home: "Trang Chủ", about: "Giới Thiệu", services: "Dịch Vụ", solutions: "Giải Pháp", 
        tech: "Công Nghệ", pricing: "Bảng Giá", contact: "Liên Hệ", quote: "Nhận Báo Giá",
        price_title: "Bảng Giá Minh Bạch & Cạnh Tranh",
        price_sub: "Chọn gói phù hợp nhất với nhu cầu của bạn. Không phí ẩn.",
        tab_storage: "Kho Bãi", tab_fulfill: "Xử Lý Đơn", tab_transport: "Vận Tải",
        btn_choose: "Chọn Gói",
    }
};

// --- 2. LOGIC ĐƯỜNG DẪN (QUAN TRỌNG) ---
// Hàm này giúp link không bị lỗi dù bạn ở trang chủ hay trang con cấp 3
function getRootPath() {
    const path = window.location.pathname;
    if (path.includes('/pages/services/') || path.includes('/pages/solutions/')) {
        return '../../'; // Đang ở cấp 3 -> lùi 2 cấp
    } else if (path.includes('/pages/')) {
        return '../'; // Đang ở cấp 2 -> lùi 1 cấp
    } else {
        return './'; // Đang ở trang chủ
    }
}

const root = getRootPath();
let currentLang = localStorage.getItem('lang') || 'en';

// --- 3. RENDER HEADER ---
function renderHeader() {
    const t = translations[currentLang];
    
    // Lưu ý: Logo dùng ảnh, nếu chưa có ảnh sẽ hiển thị text
    const headerHTML = `
    <div class="container">
        <a href="${root}index.html" class="logo">
            <h2 style="color: var(--accent-gold); font-weight: 700;">TRANOVA</h2>
        </a>

        <div class="mobile-toggle" onclick="toggleMenu()" style="color: white; font-size: 1.5rem; cursor: pointer; display: none;">
            <i class="fas fa-bars"></i>
        </div>

        <nav>
            <ul class="nav-menu" id="nav-menu">
                <li><a href="${root}index.html" class="nav-link">${t.home}</a></li>
                <li><a href="${root}pages/about.html" class="nav-link">${t.about}</a></li>
                
                <li class="has-dropdown">
                    <a href="${root}pages/services.html" class="nav-link">${t.services} <i class="fas fa-chevron-down"></i></a>
                    <ul class="dropdown">
                        <li><a href="${root}pages/services/storage.html">General Storage</a></li>
                        <li><a href="${root}pages/services/cold-chain.html">Cold Chain</a></li>
                        <li><a href="${root}pages/services/document.html">Document Storage</a></li>
                    </ul>
                </li>

                <li><a href="${root}pages/pricing.html" class="nav-link">${t.pricing}</a></li>
                <li><a href="${root}pages/contact.html" class="nav-link">${t.contact}</a></li>
                
                <li>
                    <button onclick="switchLang()" class="btn" style="padding: 5px 15px; font-size: 0.8rem; border-color: white; color: white;">
                        ${currentLang === 'en' ? 'VI' : 'EN'}
                    </button>
                </li>
            </ul>
        </nav>
    </div>
    `;
    
    document.querySelector('header').innerHTML = headerHTML;
    
    // Hiện nút mobile menu nếu màn hình nhỏ
    if(window.innerWidth <= 768) {
        document.querySelector('.mobile-toggle').style.display = 'block';
    }
}

// --- 4. RENDER FOOTER ---
function renderFooter() {
    const footerHTML = `
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <h3>TRANOVA WAREHOUSE</h3>
                <p>Professional Logistics Solutions in Central Vietnam.</p>
                <br>
                <p><i class="fas fa-map-marker-alt"></i> 25 Mai An Tiêm, Da Nang</p>
                <p><i class="fas fa-phone"></i> 0798 462 352</p>
                <p><i class="fas fa-envelope"></i> TranovaLogistics.Wh@gmail.com</p>
            </div>
            <div class="footer-col">
                <h3>QUICK LINKS</h3>
                <ul>
                    <li><a href="${root}pages/services/storage.html">Warehousing</a></li>
                    <li><a href="${root}pages/pricing.html">Pricing</a></li>
                    <li><a href="${root}pages/contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>CONNECT</h3>
                <div class="social-links">
                    <a href="#" style="color: white; margin-right: 15px;"><i class="fab fa-facebook fa-lg"></i></a>
                    <a href="#" style="color: white;"><i class="fab fa-linkedin fa-lg"></i></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2024 Tranova Warehouse. All rights reserved.</p>
        </div>
    </div>
    
    <div class="floating-contact">
        <a href="https://zalo.me/0798462352" class="float-btn zalo-btn"><i class="fas fa-comment"></i></a>
        <a href="tel:0798462352" class="float-btn call-btn"><i class="fas fa-phone"></i></a>
    </div>
    `;
    
    document.querySelector('footer').innerHTML = footerHTML;
}

// --- UTILITIES ---
function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

function switchLang() {
    currentLang = currentLang === 'en' ? 'vi' : 'en';
    localStorage.setItem('lang', currentLang);
    location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
});