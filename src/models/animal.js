"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animals = void 0;
var Animals = /** @class */ (function () {
    function Animals(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    Animals.prototype.run = function () {
        console.log("".concat(this.name, " is running"));
    };
    Animals.prototype.colorAnimal = function () {
        console.log("".concat(this.name, " is ").concat(this.color));
    };
    Animals.prototype.getID = function () {
        return this.id;
    };
    Animals.prototype.setID = function (value) {
        this.id = value;
    };
    return Animals;
}());
exports.Animals = Animals;
