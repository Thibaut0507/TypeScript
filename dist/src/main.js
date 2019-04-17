import { CompanyModel } from './models/company.model';
/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */
// Créer une instance de la classe CompanyModel
const aelion = new CompanyModel();
aelion.setName('Aélion');
<<<<<<< HEAD
// Création d'une autre instance de classe 
=======
// Création d'une autre instance de classe
>>>>>>> 79858e55a554ea38e990e3e9bb5f004eedde5a7d
const cap = new CompanyModel();
cap.setName('Cap\'Gemini');
// Pour contrôle
console.log('Objet aelion : ' + aelion.getName());
<<<<<<< HEAD
console.log('Objet cap :' + cap.getName());
=======
console.log('Objet cap : ' + cap.getName());
>>>>>>> 79858e55a554ea38e990e3e9bb5f004eedde5a7d
