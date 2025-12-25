 /* ================= MENU MOBILE ================= */
  // Récupère l'élément du bouton/menu toggle (icône hamburger)
  const menuToggle = document.getElementById("menu-toggle");
  // Récupère le menu à afficher/masquer
  const menu = document.getElementById("menu");

  // Écoute le clic sur le bouton toggle
  menuToggle.addEventListener("click", () => {
    // Ajoute ou retire la classe 'active' pour afficher ou cacher le menu
    menu.classList.toggle("active");
  });

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
      card.style.opacity = 1;          // Rendre la carte visible
      card.style.transform = "translateY(0)"; // Revenir à sa position normale
    }, index * 200); // Décalage en fonction de l'index de la carte
  });