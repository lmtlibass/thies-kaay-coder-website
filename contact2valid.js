let monForm = document.getElementById('monForm');
monForm.addEventListener('submit', function(e){
    let monInput = document.getElementById('nom');
    let monInput2 = document.getElementById('prenom');
    let monTa = document.getElementById('monTa');
    let monRegex = /^[a-zA-Z\s]+$/ // Expression régulière

    if (monInput.value == ""){
        let monErreur = document.getElementById('erreur');
        monErreur.innerHTML = "Le champ nom est obligatoire"; 
        monErreur.style.color = 'red' ; 
    e.preventDefault(); //Empecher la soumission du formulaire
    } else if (monRegex.test(monInput.value) == false) {
        let monErreur = document.getElementById('erreur');
        monErreur.innerHTML = "Le champ nom doit comporter que des lettres"; 
        monErreur.style.color = 'red' ; 
    e.preventDefault();

    }

    if (monInput2.value == ""){
        let monErreur = document.getElementById('erreur2');
        monErreur.innerHTML = "Le champ prénom est obligatoire"; 
        monErreur.style.color = 'red' ; 
    e.preventDefault(); //Empecher la soumission du formulaire
    }
        if (monTa.value == ""){
        let erreurTa = document.getElementById('erreurTa');
        erreurTa.innerHTML = "Le champ message est obligatoire"; 
        erreurTa.style.color = 'red' ; 
    e.preventDefault(); //Empecher la soumission du formulaire
    }
    
});
