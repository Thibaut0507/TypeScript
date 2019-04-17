import { Repository } from "../utils/repository";
import { CompanyModel } from "./company.model";

export class CompanyRepository extends Repository<CompanyModel> {
<<<<<<< HEAD
    /**
     * @override
     * @param company 
     */
=======
>>>>>>> 79858e55a554ea38e990e3e9bb5f004eedde5a7d
    public add(company: CompanyModel): void {
        this.repository.set(company.getId(), company);
    }

<<<<<<< HEAD
    /**
     * @override
     * @param company 
     */
=======
>>>>>>> 79858e55a554ea38e990e3e9bb5f004eedde5a7d
    public remove(company: CompanyModel): void {
        this.repository.delete(company.getId());
    }

<<<<<<< HEAD
    /**
     * @override
     * @param id 
     */
=======
>>>>>>> 79858e55a554ea38e990e3e9bb5f004eedde5a7d
    public get(id: number): CompanyModel {
        return this.repository.get(id);
    }
}