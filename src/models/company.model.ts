<<<<<<< HEAD
import { OutputInterface } from "../utils/output-interface";

=======
>>>>>>> 79858e55a554ea38e990e3e9bb5f004eedde5a7d
/**
 * @name CompanyModel
 * @author Aélion
 * @version 1.0.0
 */

export class CompanyModel {
    private id: number;
    private name: string;
    private address: string;
    private zipcode: string;
    private city: string;

<<<<<<< HEAD
    private strategy: OutputInterface<CompanyModel>;

    public constructor(id: number) {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }
    public setId(id: number) {
        if (this.id == null) {
             this.id = id;
        }
    }

    public setStrategy(strategy: OutputInterface<CompanyModel>) {
        this.strategy = strategy;
    }
  
    public getCity(): string {
        return this.city;
    }
    public setCity(city: string) {
        this.city = city;
    }

    public getZipCode(): string {
        return this.zipcode;
    }
    public setZipCode(zipcode: string) {
        this.zipcode = zipcode;
    }
    
    public getAddress(): string {
        return this.address;
    }
=======
    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    /**
     * @param void
     * @return string L'adresse de l'entreprise
     */
    public getAddress(): string {
        return this.address;
    }

    /**
     * 
     * @param address Adresse à affecter à l'entreprise
     * @return void
     */
>>>>>>> 79858e55a554ea38e990e3e9bb5f004eedde5a7d
    public setAddress(address: string) {
        this.address = address;
    }

    public setName(name: string) {
        this.name = name;
    }
<<<<<<< HEAD
    public getName(): string {
        return this.name.toUpperCase();
    }

    public useOutputStrategy(): JQuery {
        return this.strategy.output(this);
    }
    
    public toString(howTo: number): string {
        let output: string;
        if (howTo == 1) {
            output = '<div class="col-12">' ;
            output += '<h2><i class="icon-office"></i> ' + this.name + '</h2>';
            output += this.address + '<br>';
            output += this.zipcode + '<em>' + ' ' + this.city + '</em></div>';
        } else if (howTo == 2) {
            output = '<h2><i class="icon-office"></i> ' + this.name + '</h2>'
        } else if (howTo == 3) {
            output = '<h2><i class="icon-office"></i> ' + this.name + ' ' + this.zipcode + '</h2>'
        }
=======

    public getName(): string {
        return this.name;
    }

    public setZipCode(zipcode: string) {
        this.zipcode = zipcode;
    }

    public getZipCode(): string {
        return this.zipcode;
    }

    public setCity(city: string) {
        this.city = city;
    }

    public getCity(): string {
        return this.city;
    }

    public toString(): string {
        let output: string = '<div class="col-12 click" data-rel="' + this.id + '">';
        output += '<h2><i class="icon-office"></i> ' + this.name + '</h2>';
        output += this.address + '<br>';
        output += this.zipcode + ' <em>' + this.city + '</em></div>';

>>>>>>> 79858e55a554ea38e990e3e9bb5f004eedde5a7d
        return output;
    }
}