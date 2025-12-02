document.addEventListener('DOMContentLoaded', function() {
    // 1. Hiệu ứng cuộn mượt cho Table of Contents
    const tocLinks = document.querySelectorAll('.toc-box a');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100, // Trừ đi chiều cao header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Mobile Menu Toggle (Cơ bản)
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mainMenu = document.querySelector('.main-menu');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            mainMenu.style.display = mainMenu.style.display === 'flex' ? 'none' : 'flex';
            mainMenu.style.flexDirection = 'column';
            mainMenu.style.width = '100%';
            mainMenu.style.marginTop = '15px';
        });
    }
});