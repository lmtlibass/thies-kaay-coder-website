/**
 * GESTION DU FILTRAGE DYNAMIQUE
 */
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.item-filter');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Gérer l'état actif des boutons
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Récupérer le filtre
            const filterValue = button.getAttribute('data-filter');

            // 3. Filtrer les éléments avec une petite animation
            items.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.classList.remove('hide');
                    // Petit délai pour l'effet visuel
                    setTimeout(() => {
                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";
                    }, 10);
                } else {
                    item.style.opacity = "0";
                    item.style.transform = "scale(0.8)";
                    setTimeout(() => {
                        item.classList.add('hide');
                    }, 400); // Correspond à la durée de transition CSS
                }
            });
        });
    });
});