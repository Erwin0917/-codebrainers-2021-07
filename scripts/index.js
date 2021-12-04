class Person {
    constructor() {
        this.hitPoints = 0;
        this.strength = 0;
    }

    isAlive() {
        return this.hitPoints > 0;
    }
}

class Hero extends Person {
    constructor() {
        super();
        this.hitPoints = 100;
        this.strength = 20;
    }
}

class Villain extends Person {
    constructor() {
        super();
        this.hitPoints = 50;
        this.strength = 20;
    }
}


const hero = new Hero();
const villain = new Villain();

console.log('hero instanceof Person:', hero instanceof Hero);
console.log('hero instanceof Villain:', hero instanceof Villain);

console.log('Villain instanceof Person:', villain instanceof Hero);
console.log('Villain instanceof Villain:', villain instanceof Villain);



hero.isAlive();
villain.isAlive();

