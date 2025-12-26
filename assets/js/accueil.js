const mobileToggle = document.getElementById("mobile-toggle");
const navMenu = document.getElementById("nav-menu");

mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});
