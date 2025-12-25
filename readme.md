# Instruction

``` 
Chaque groupe doit créer une branche 

groupe 1: chill_accueil
groupe 2: elit_tech_concept
groupe 3: xaragne_contact
groupe 4: code_vision_contact2

```
# Comment créer une branche

1. Ouvrez votre terminal ou interface Git préférée.
2. Naviguez jusqu'au répertoire de votre projet local.
3. Utilisez la commande suivante pour créer une nouvelle branche et vous y déplacer immédiatement :

   ```
   git checkout -b nom_de_la_branche
   ```

   Remplacez `nom_de_la_branche` par le nom de la branche que vous souhaitez créer (par exemple, `chill_accueil` pour le groupe 1).
4. Pour vérifier que vous êtes bien sur la nouvelle branche, utilisez la commande :

   ```
     git branch
     ```
     La branche actuelle sera marquée d'un astérisque (*).
5. Enfin, poussez la nouvelle branche vers le dépôt distant avec la commande :
     ```
     git push -u origin nom_de_la_branche
     ```