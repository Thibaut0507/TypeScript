/**
 * @name Repository
 * @desc Classe abstraite définissant une collection d'objets
 * @author Aélion
 * @version 1.0.0
 */
export abstract class Repository<T> {
    protected repository: Map<number, T> = new Map<number, T>(); // Cet attribut est disponible dans cette classe et toutes les classes filles. Il est de type Map spécifié par un nombre et T
    public abstract add(object: T): void;
    public abstract remove(object: T): void;
    public abstract get(id: number): T;
    /**
     * Méthode concrète d'une classe abstraite...
     * @return number Nombre d'éléments de la collection
     */
    public getSize(): number {
        return this.repository.size;
    }
}
