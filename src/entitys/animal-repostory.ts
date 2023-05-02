import { Animals } from "../models/animal";


export class AnimalRepository {
    private animalList: Animals[] = [];
    public counter: number = 0;

    create(animal: Animals) {
        if (this.isExsist(animal)) throw new Error("This animal is already exists");
        else {
            animal.setID(++this.counter)
            this.animalList.push(animal)
        }

    }

    isExsist(newAnimalr: Animals) {
        for (let animal of this.animalList) {
            if (animal.color === newAnimalr.color) {
                return true;
            } else false
        }
    }
    getList() {
        return this.animalList;
    }

}