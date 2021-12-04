function getRandomNumberBetween(min = 1, max = 10){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const onButtonClick = () => {
//     console.log('Action');
// }
const button = document.querySelector('#button');

// console.log(button);

const weaponSelector = ['wand', 'knife', 'arch', 'hands', 'axe', 'sword', 'rope', 'animal']


class Weapon {
    constructor() {
        this.type = weaponSelector[getRandomNumberBetween(0,weaponSelector.length-1)];

    }

}




class Person {
    constructor() {
        this.hitPoints = 0;
        this.strength = 0;
    }

    setWeapon(weapon) {
        this.weapon = weapon;
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
        const damageFactor = Math.round(this.strength * 1/getRandomNumberBetween(1,10));
        const hitPointsAfterAttack = target.hitPoints - power + damageFactor;
        target.setHitPoints(hitPointsAfterAttack);
        return target.hitPoints;

    }
}


class Hero extends Person {
    constructor() {
        super();
        this.hitPoints = 100;
        this.strength = getRandomNumberBetween(10, 20);
    }
}

class Villain extends Person {
    constructor() {
        super();
        this.hitPoints = 100;
        this.strength = getRandomNumberBetween(10, 20);
    }
}




const battle = () => {
    const hero = new Hero();
    const villain = new Villain();

    hero.setWeapon(new Weapon())

    while (hero.isAlive() && villain.isAlive()) {
        hero.attack(villain, getRandomNumberBetween(2, 35));
        villain.attack(hero, getRandomNumberBetween(2, 31));

    }

    console.log(hero.hitPoints);
    console.log(villain.hitPoints);
}

button.addEventListener('click', battle);
