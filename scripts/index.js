const onButtonClick = () => {
    console.log('Action');
}
// const button = document.querySelector('#button');
// button.addEventListener('click', onButtonClick);

// console.log(button);


class Person {
    constructor() {
        this.hitPoints = 0;
        this.strength = 0;
    }

    isAlive() {
        return this.hitPoints > 0;
    }
    attack(target, power) {
        if (target.hitPoints > 0) {
            target.hitPoints = target.hitPoints - power;
        }

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

console.log(villain.hitPoints)
hero.attack(villain,15);
console.log(villain.hitPoints)


console.log(hero.hitPoints)
villain.attack(hero,40);
villain.attack(hero,40);
villain.attack(hero,15);
villain.attack(hero,15);
console.log(hero.hitPoints)



hero.isAlive();
villain.isAlive();
