import { CompanyModel } from './models/company.model';
import { ToHtml } from './utils/to-html'
import { CompanyRepository } from './models/company-repository';
import { NameStrategy } from './models/strategies/name-strategy';
import { NameAndZipStrategy } from './models/strategies/nameandzip-strategy';
import { AllStrategy } from './models/strategies/all-strategy';


/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */

 // Instancier un "repository" de CompanyModel
 const companyRepository: CompanyRepository = new CompanyRepository();

 // Créer une instance de la classe CompanyModel
 const aelion: CompanyModel = new CompanyModel(1);
 aelion.setStrategy(new AllStrategy());
 aelion.setName('Aélion');
 aelion.setAddress('95 Chemin de Gabardie');
 aelion.setZipCode('31200');
 aelion.setCity('Toulouse');

 // Ajoute aelion dans le repo
 companyRepository.add(aelion);

 // Création d'une autre instance de classe 
 const cap: CompanyModel = new CompanyModel(2);
 cap.setStrategy(new AllStrategy());
 cap.setName('Cap\'Gemini');
 cap.setAddress('109 Avenue du Général Eisenhower');
 cap.setZipCode('31000');
 cap.setCity('Toulouse');

 // Ajoute cap dans le repo
 companyRepository.add(cap);

 // Essaie d'ajouter une deuxième fois aelion
 companyRepository.add(aelion);

 // Pour contrôle
console.log('Nombre de sociétés : ' + companyRepository.getSize());

 // Envoyer les informations vers la page web
 const toHtml = new ToHtml ();
toHtml.appendToPage(aelion.useOutputStrategy());
toHtml.appendToPage(cap.useOutputStrategy());

 // Ecouter le clic dans le document
 //const clickDetection: any= document.querySelector('.click');
 //clickDetection.addEventListener(
  //   "click",
  //   () => {
  //       alert('Mais on a tout ce qu\'il vous faut !');
  //   }
 //);
    