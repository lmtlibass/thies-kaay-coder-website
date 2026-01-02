// Sélection du formulaire
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// Validation à la soumission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Récupération des champs
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Fonction d'erreur
  function showError(input, msg) {
    input.nextElementSibling.textContent = msg;
    valid = false;
  }

  // Réinitialisation des erreurs
  document.querySelectorAll(".error").forEach(e => e.textContent = "");

  if (name.value.trim() === "") {
    showError(name, "Nom requis");
  }

  if (!email.value.includes("@gmail.com")) {
    showError(email, "Email invalide");
  }

  if (message.value.trim().length < 10) {
    showError(message, "Message trop court");
  }

  // Succès
  if (valid) {
    successMessage.textContent = "Message envoyé avec succès ✔";
    form.reset();
  }
});