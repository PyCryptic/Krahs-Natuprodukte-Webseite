document.addEventListener('DOMContentLoaded', () => {

    // 1. Icons initialisieren (Lucide)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Mobile Menu Logik
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            // Toggelt die 'hidden' Klasse (zeigt/versteckt das Menü)
            mobileMenu.classList.toggle('hidden');
        });
    }
});