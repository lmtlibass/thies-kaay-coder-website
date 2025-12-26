document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // 1. GESTION DU MENU MOBILE
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            // On bascule la classe 'active' sur le bouton et le menu
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // 2. FERMER LE MENU SI ON CLIQUE SUR UN LIEN
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 3. ANIMATION SIMPLE AU SCROLL (Apparition des cartes de valeurs)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach(card => {
        // État initial avant animation
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
});