// MENU MOBILE
document.addEventListener("DOMContentLoaded", () => {
    const mobileToggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");

    mobileToggle.addEventListener("click", () => {
        mobileToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
});


// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll("#nav-menu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
        const mobileToggle = document.getElementById("mobile-toggle");
        const navMenu = document.getElementById("nav-menu");

        // Retire la classe active
        mobileToggle.classList.remove("active");
        navMenu.classList.remove("active");
    });
});



// ================= FORMULAIRE CONTACT =================
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (form && successMessage) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;

        // Réinitialiser tous les messages d'erreur
        form.querySelectorAll(".error").forEach(el => el.textContent = "");

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (name && name.value.trim() === "") {
            const errorEl = name.nextElementSibling;
            if (errorEl) errorEl.textContent = "Nom requis";
            valid = false;
        }

        if (email && !email.value.includes("@")) {
            const errorEl = email.nextElementSibling;
            if (errorEl) errorEl.textContent = "Email invalide";
            valid = false;
        }

        if (message && message.value.trim().length < 10) {
            const errorEl = message.nextElementSibling;
            if (errorEl) errorEl.textContent = "Message trop court";
            valid = false;
        }

        if (valid) {
            successMessage.textContent = "Message envoyé avec succès ✔";
            form.reset();

            // Supprimer le message après 5 secondes
            setTimeout(() => {
                successMessage.textContent = "";
            }, 5000);
        }
    });
}

// ================= ANIMATION DES CARDS =================
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s ease-out";

    setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
    }, index * 200);
});
