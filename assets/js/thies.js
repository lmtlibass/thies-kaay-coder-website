/* ================= ANIMATION DES CARDS ================= */
// Récupère toutes les cartes
const cards = document.querySelectorAll(".card");

// Pour chaque carte, on applique une animation d'apparition en cascade
cards.forEach((card, index) => {
    // Position initiale : invisible et légèrement décalée vers le bas
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";

    // Appliquer l'animation avec un petit délai pour créer l'effet en cascade
    setTimeout(() => {
        card.style.transition = "0.6s"; // Durée de l'animation
        card.style.opacity = 1; // Rendre la carte visible
        card.style.transform = "translateY(0)"; // Revenir à sa position normale
    }, index * 200); // Décalage en fonction de l'index de la carte
});
