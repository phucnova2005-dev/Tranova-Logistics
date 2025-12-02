// --- 1. CONFIG (CẤU HÌNH THÔNG TIN) ---
const PHONE_NUMBER = "039 365 0435";
const ZALO_LINK = "https://zalo.me/0393650435";
const EMAIL = "TranovaLogistics.Wh@gmail.com";
// Link Mạng Xã Hội Mới
const FB_LINK = "https://www.facebook.com/profile.php?id=61584360011097"; 
const TIKTOK_LINK = "https://www.tiktok.com/@tranovawarehouse";

// --- 2. DICTIONARY (TỪ ĐIỂN ANH-VIỆT) ---
const translations = {
    en: {
        home: "Home", about: "About Us", services: "Services", solutions: "Solutions", 
        tech: "Technology", pricing: "Pricing", contact: "Contact",
        contact_sales: "Contact Sales"
    },
    vi: {
        home: "Trang Chủ", about: "Giới Thiệu", services: "Dịch Vụ", solutions: "Giải Pháp", 
        tech: "Công Nghệ", pricing: "Bảng Giá", contact: "Liên Hệ",
        contact_sales: "Liên hệ Sales"
    }
};

// --- 3. PATH LOGIC (XỬ LÝ ĐƯỜNG DẪN) ---
function getRootPath() {
    const path = window.location.pathname;
    // Nếu đang ở cấp 3 (vd: /pages/services/storage.html) -> lùi 2 cấp
    if (path.includes('/pages/services/') || path.includes('/pages/solutions/')) return '../../';
    // Nếu đang ở cấp 2 (vd: /pages/about.html) -> lùi 1 cấp
    if (path.includes('/pages/')) return '../';
    // Trang chủ -> không lùi
    return './';
}
const root = getRootPath();
let currentLang = localStorage.getItem('lang') || 'en';

// --- 4. RENDER HEADER (TẠO MENU) ---
function renderHeader() {
    const t = translations[currentLang];
    const headerHTML = `
    <div class="container">
        <a href="${root}index.html" class="logo">
            <!-- Bạn có thể thay bằng thẻ <img> nếu có file logo -->
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
                        <li><a href="${root}pages/services/storage.html">General Storage (Kho Chung)</a></li>
                        <li><a href="${root}pages/services/cold-chain.html">Cool Storage (Kho Mát)</a></li>
                        <li><a href="${root}pages/services/document.html">Document Storage (Tài Liệu)</a></li>
                    </ul>
                </li>

                <li class="has-dropdown">
                    <a href="#" class="nav-link">${t.solutions} <i class="fas fa-chevron-down"></i></a>
                    <ul class="dropdown">
                        <li><a href="${root}pages/solutions/fulfillment.html">Fulfillment (TMĐT)</a></li>
                        <li><a href="${root}pages/solutions/transport.html">Transportation (Vận Tải)</a></li>
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
    
    if(window.innerWidth <= 768) {
        document.querySelector('.mobile-toggle').style.display = 'block';
    }
}

// --- 5. RENDER FOOTER (TẠO CHÂN TRANG CÓ MXH) ---
function renderFooter() {
    const footerHTML = `
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <h3>TRANOVA WAREHOUSE</h3>
                <p class="lang-en">Professional Logistics Solutions in Central Vietnam.</p>
                <p class="lang-vi">Giải pháp Logistics chuyên nghiệp tại Miền Trung.</p>
                <br>
                <p><i class="fas fa-map-marker-alt"></i> 25 Mai An Tiêm, Da Nang</p>
                <p><i class="fas fa-phone"></i> ${PHONE_NUMBER}</p>
                <p><i class="fas fa-envelope"></i> ${EMAIL}</p>
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
                    <!-- Facebook Icon -->
                    <a href="${FB_LINK}" target="_blank" style="color: white; margin-right: 15px; transition: 0.3s;">
                        <i class="fab fa-facebook fa-lg"></i>
                    </a>
                    <!-- TikTok Icon (Mới thêm) -->
                    <a href="${TIKTOK_LINK}" target="_blank" style="color: white; margin-right: 15px; transition: 0.3s;">
                        <i class="fab fa-tiktok fa-lg"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2024 Tranova Warehouse. All rights reserved.</p>
        </div>
    </div>
    
    <!-- Floating Buttons (Zalo & Call) -->
    <div class="floating-contact">
        <a href="${ZALO_LINK}" class="float-btn zalo-btn" target="_blank"><i class="fas fa-comment"></i></a>
        <a href="tel:${PHONE_NUMBER.replace(/\s/g, '')}" class="float-btn call-btn"><i class="fas fa-phone"></i></a>
    </div>
    `;
    
    document.querySelector('footer').innerHTML = footerHTML;
}

// --- 6. LOGIC ĐỔI NGÔN NGỮ ---
function updateContentLanguage() {
    const enElements = document.querySelectorAll('.lang-en');
    const viElements = document.querySelectorAll('.lang-vi');

    if (currentLang === 'en') {
        enElements.forEach(el => el.style.display = 'block');
        viElements.forEach(el => el.style.display = 'none');
    } else {
        enElements.forEach(el => el.style.display = 'none');
        viElements.forEach(el => el.style.display = 'block');
    }
}

function switchLang() {
    currentLang = currentLang === 'en' ? 'vi' : 'en';
    localStorage.setItem('lang', currentLang);
    renderHeader(); 
    updateContentLanguage();
}

function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

// KHỞI CHẠY
document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    updateContentLanguage();
});