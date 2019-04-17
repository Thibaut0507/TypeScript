/**
 * @name my-counter
 * @author C'est moi qui l'ai fait avec mes petites mains !! 
 * @version 1.0.0
 * @description Gère un composant de type compteur 
 */

 // Gestionnaire d'évenement sur le bouton + (id=increase-qty)
 $('#increase-qty').on(
     'click',
     function(event) {
        // Déjà, je vais essayer de lire la valeur du champ de saisie (input)
        const inputField = $('#quantity');

        //Récupérer la valeur max autorisée : data-max=n
        const maxVal = parseInt(inputField.attr('data-max'));
        const directMaxVal = inputField.data('max');
        
        // Introduire la contrainte fonctionnelle : newVal < maxVal... sinon... NOOP
        if (parseInt(inputField.val()) < maxVal) {
            // Incrémenter la valeur de 1
            let newVal = parseInt(inputField.val()) + 1; 
        
            // Afficher la nouvelle valeur dans l'interface
            inputField.val(newVal);

            // Activer le bouton - : enlève l'attribut disable
            const decreaseQtyBtn = $('#decrease-qty');
            decreaseQtyBtn.removeAttr('disabled');

            // Cacher Message Alert
           $('[role="alert"]').hide();

            // La valeur est elle égale au maximum ?
            if (newVal === maxVal) {
                // Si c'est le cas, je désactive...
                $(this).attr('disabled', 'disabled'); // On peut mettre $(this) car on est dans l'élément, permet de jouer sur l'élément sélectionné   

                // Afficher un message si maximum atteint
                $('[role="alert"] span.message').html('Vous avez atteint la limite maximum');
                $('[role="alert"]').show();
            }
        }
    }
 );

 // Gestionnaire d'évenement sur le bouton - (id=decrease-qty)
 $('#decrease-qty').on(
    'click',
    function(event) {
       // Déjà, je vais essayer de lire la valeur du champ de saisie (input)
       const inputField = $('#quantity');

       //Récupérer la valeur min autorisée : data-min
       const minVal = parseInt(inputField.attr('data-min'));
       
       // Introduire la contrainte fonctionnelle : newVal > MinVal... sinon... NOOP
       if (parseInt(inputField.val()) > minVal) {
           // Décrémenter la valeur de 1
           let newVal = parseInt(inputField.val()) - 1; 
       
           // Afficher la nouvelle valeur dans l'interface
           inputField.val(newVal);

           // Activer le bouton + : enlève l'attribut disable
           const increaseQtyBtn = $('#increase-qty');
           increaseQtyBtn.removeAttr('disabled');

           // Cacher Message Alert
           $('[role="alert"]').hide();

           // La valeur est elle égale au minimum ?
           if (newVal === minVal) {
               // Si c'est le cas, je désactive...
               $(this).attr('disabled', 'disabled'); // On peut mettre $(this) car on est dans l'élément, permet de jouer sur l'élément sélectionné   

               // Afficher un message si maximum atteint
               $('[role="alert"] span.message').html('Vous avez atteint la limite minimale');
               $('[role="alert"]').show();
           }
       }
   }
);

// Fonction par défaut de close.bs.alert, quand ferme message, il "supprime" le code, donc impossible de le réactiver
// utilise preventDefault pour empecher action par défaut, et de juste cacher le message plutôt que de "supprimer" le code
$('[role="alert"]').on(
    'close.bs.alert',
    function(event) {
        event.preventDefault();
        $('[role="alert"]').hide();
    }
);