import { AnimalRepository } from "./entitys/animal-repostory";
import { Animals } from "./models/animal";

let animalRepo = new AnimalRepository();

animalRepo.create(new Animals('Tiger', 5, 'Orange'))
animalRepo.create(new Animals('Loin', 8, 'Gold-yellow'))

console.log(animalRepo)

let list = animalRepo.getList()

console.log(list);