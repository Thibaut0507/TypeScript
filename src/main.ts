import { CompanyModel } from './models/company.model';
<<<<<<< HEAD
import { ToHtml } from './utils/to-html'
import { CompanyRepository } from './models/company-repository';
import { NameStrategy } from './models/strategies/name-strategy';
import { NameAndZipStrategy } from './models/strategies/nameandzip-strategy';
import { AllStrategy } from './models/strategies/all-strategy';


=======
import { ToHtml } from './utils/to-html';

import * as $ from 'jquery'
import { HomeModule } from './modules/home/home-module';
>>>>>>> 79858e55a554ea38e990e3e9bb5f004eedde5a7d
/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */

<<<<<<< HEAD
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
    
=======
 // Créer une instance de la classe CompanyModel
 const aelion: CompanyModel = new CompanyModel();
 aelion.setId(1);
 aelion.setName('Aélion');
 aelion.setAddress('95 chemin de Gabardie');
 aelion.setZipCode('31000');
 aelion.setCity('Toulouse');

 // Création d'une autre instance de classe
 const cap: CompanyModel = new CompanyModel();
 cap.setId(2);
 cap.setName('Cap\'Gemini');
 cap.setAddress('rue de la Mort qui Tue');
 cap.setZipCode('31600');
 cap.setCity('Blagnac');

 // Pour contrôle
 console.log('Objet aelion : ' + aelion.getName() + ' ' + aelion.getAddress());
 console.log('Objet cap : ' + cap.getName() + ' ' + cap.getAddress());

 // Envoyer les informations vers la page web
 const toHtml = new ToHtml();
 toHtml.toPage(aelion);
 toHtml.toPage(cap);
 
 // Instancie le module Home
 const home: HomeModule = new HomeModule();
>>>>>>> 79858e55a554ea38e990e3e9bb5f004eedde5a7d
