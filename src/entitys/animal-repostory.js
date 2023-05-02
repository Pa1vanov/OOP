"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalRepository = void 0;
var AnimalRepository = /** @class */ (function () {
    function AnimalRepository() {
        this.animalList = [];
        this.counter = 0;
    }
    AnimalRepository.prototype.create = function (animal) {
        if (this.isExsist(animal))
            throw new Error("This animal is already exists");
        else {
            animal.setID(++this.counter);
            this.animalList.push(animal);
        }
    };
    AnimalRepository.prototype.isExsist = function (newAnimalr) {
        for (var _i = 0, _a = this.animalList; _i < _a.length; _i++) {
            var animal = _a[_i];
            if (animal.color === newAnimalr.color) {
                return true;
            }
            else
                false;
        }
    };
    AnimalRepository.prototype.getList = function () {
        return this.animalList;
    };
    return AnimalRepository;
}());
exports.AnimalRepository = AnimalRepository;
