document.addEventListener('DOMContentLoaded', () => {
    // Icons initialisieren
    lucide.createIcons();

    // Mobiles Menü
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Produkt-Filter (nur für produkte.html relevant)
function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');
    const buttons = document.querySelectorAll('.filter-btn');
    const promo = document.getElementById('promo-section');

    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(category)) btn.classList.add('active');
    });

    products.forEach(item => {
        item.style.display = (category === 'all' || item.dataset.category === category) ? 'block' : 'none';
    });

    if (promo) promo.style.display = (category === 'all') ? 'flex' : 'none';
}