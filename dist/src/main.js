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
// Création d'une autre instance de classe 
const cap = new CompanyModel();
cap.setName('Cap\'Gemini');
// Pour contrôle
console.log('Objet aelion : ' + aelion.getName());
console.log('Objet cap :' + cap.getName());
