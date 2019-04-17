/**
 * @name my-counter
<<<<<<< HEAD
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
=======
 * @author C'est moi qui l'ai fait ! avec mes petites mains
 * @version 1.0.0
 * @description Gère un composant de type compteur
 */

 // Gestionnaire d'événement sur le bouton + (id=increase-qty)
 $('#increase-qty').on(
     'click',
     function(event) {
        _makeMessageDisapear();

        // Récupérer la valeur max autorisée : data-max=n
        const maxVal = parseInt($(this).parent().prev('input').data('max'));

        // Introduire la contrainte fonctionnelle : newVal < maxVal... sinon... NOOP
        if (_getValue() < maxVal) {
            // Incrémenter la valeur de 1
            let newVal = counter(_getValue());

            // Afficher dans l'interface la nouvelle valeur
            $(this).parent().prev('input').val(newVal);

            // Enlever l'attribut disabled du bouton -
            _manageBtn($('#decrease-qty'), false);

            // La valeur est-elle égale au maximum ?
            if (newVal === maxVal) {
                _manageBtn($(this));

                // Affichage du message
                _manageMessage('Vous avez atteint la limite maximum');
            }
        }
     }
 );

 // Gestionnaire d'événement sur le bouton + (id=increase-qty)
 $('#decrease-qty').on(
    'click',
    function(event) {
        _makeMessageDisapear();

       // Le minimum autorisé est par défaut = à 1
       const minVal = 1;

       // Introduire la contrainte fonctionnelle : newVal < maxVal... sinon... NOOP
       if (_getValue() > minVal) {
           // Décrémenter la valeur de 1
           let newVal = counter(_getValue(), false);

           // Afficher dans l'interface la nouvelle valeur
           $(this).parent().next('input').val(newVal);

           // Enlever l'attribut disabled du bouton +
           _manageBtn($('#increase-qty'), false);

           // La valeur est-elle égale au minimum ?
           if (newVal === minVal) {
               _manageBtn($(this));

               // Affichage du message
               _manageMessage('Vous avez atteint la limite minimum');
           }
       }
    }
);

// Intercepte l'événement "close" de l'alerte Bootstrap
//  et n'exécute pas l'action par défaut... mais ma propre méthode
>>>>>>> 79858e55a554ea38e990e3e9bb5f004eedde5a7d
$('[role="alert"]').on(
    'close.bs.alert',
    function(event) {
        event.preventDefault();
<<<<<<< HEAD
        $('[role="alert"]').hide();
    }
);
=======
        _makeMessageDisapear();
    }
);

const _getValue = function() {
    return parseInt($('#quantity').val());
}

const counter = function(value, increase = true) {
    return increase ? parseInt(value) + 1 : parseInt(value) - 1;
}

 const _manageBtn = function(button, doDisable = true) {
     if (doDisable) {
         button.attr('disabled', 'disabled');
     } else {
         button.removeAttr('disabled');
     }
 }

 const _manageMessage = function(message) {
    const alert = $('[role="alert"]');
    alert.children('span.message').html(message);

    alert
        .removeClass('no-display')
        .addClass('animated')
        .addClass('bounceIn');
 }

 const _makeMessageDisapear = function() {
    const alert = $('[role="alert"]');
    if (!alert.hasClass('no-display')) {
        alert.removeClass('bounceIn')
         .addClass('bounceOut');

        setTimeout(
            () => { 
                alert
                    .addClass('no-display')
                    .removeClass('animated')
                    .removeClass('bounceOut')
            },
            1500
        );
    }

 }

>>>>>>> 79858e55a554ea38e990e3e9bb5f004eedde5a7d
