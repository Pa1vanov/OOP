export class Animals {
    private id!: number
    constructor(public name: string, public age: number, public color: string) { }
    run() {
        console.log(`${this.name} is running`);
    }
    colorAnimal() {
        console.log(`${this.name} is ${this.color}`);
    }

    getID() {
        return this.id;
    }

    setID(value: number) {
        this.id = value;
    }
}