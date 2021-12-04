function getRandomNumberBetween(min = 1, max = 10){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

    setHitPoints(hitPoints) {
        this.hitPoints = hitPoints >= 0 ? hitPoints : 0;
    }


    attack(target, power) {
        if(!(target instanceof Person)) {
            return false;
        }
        const hitPointsAfterAttack = target.hitPoints - power;
        target.setHitPoints(hitPointsAfterAttack);
        return target.hitPoints;

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
        this.hitPoints = 100;
        this.strength = 20;
    }
}


const hero = new Hero();
const villain = new Villain();



while (hero.isAlive() && villain.isAlive()) {
    hero.attack(villain, getRandomNumberBetween(2, 35));
    villain.attack(hero, getRandomNumberBetween(2, 31));

}
console.log(hero.hitPoints);
console.log(villain.hitPoints);
