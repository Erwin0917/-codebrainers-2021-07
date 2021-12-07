function getRandomNumberBetween(min = 1, max = 10){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const onButtonClick = () => {
//     console.log('Action');
// }
const button = document.querySelector('#button');

// console.log(button);

const weaponSelector = ['wand', 'knife', 'arch', 'hands', 'axe', 'sword', 'rope', 'animal'];
const weapons = [
    {
        name: 'wand',
        powerFactor: 50,
    },
    {
        name: 'knife',
        powerFactor: 70,
    },
    {
        name: 'arch',
        powerFactor: 80,
    },
];


class Weapon {
    constructor(name, power) {
        // this.name = weaponSelector[getRandomNumberBetween(0,weaponSelector.length-1)];
        this.name = name;
        this.power = power;
        this.functionality = 100;

    }

    powerBoost() {
        this.power = 0;
        weapons.forEach((weapon, index) => {
            if (this.type === weapon.name){
                this.power = index;
            }
        });
        // for (let i = 0; i < weapons.length; i++) {
        //     if (this.type = weaponSelector[i]){
        //         this.power = i;
        //     }
        // }
        return this.power;
    }

    isWorking () {
        return this.functionality > 0;

    }

    reducingFunctionality(reductionFactor) {
        this.functionality = this.functionality - reductionFactor;

    }
}

class Person {
    constructor() {
        this.hitPoints = 0;
        this.strength = 0;
    }

    setWeapon(weapon) {
        if (!(weapon instanceof Weapon)){
            console.log('Weapon is not instance of class weapon');
            return;
        }

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

const generateWeapon = () => {

    const drawnWeaponIndex = getRandomNumberBetween(0, weaponSelector.length);
    const chosenWeaponName = weaponSelector.splice(drawnWeaponIndex, 1).pop();

    const weaponPower = getRandomNumberBetween(0, 99);
    const weapon = new Weapon(chosenWeaponName, weaponPower);

    return weapon;
}
const battle = () => {

    const hero = new Hero();
    const villain = new Villain();

    hero.setWeapon(generateWeapon())
    villain.setWeapon(generateWeapon())


    // while (hero.isAlive() && villain.isAlive()) {
    //     hero.attack(villain, getRandomNumberBetween(2, 35));
    //     villain.attack(hero, getRandomNumberBetween(2, 31));
    //
    // }

    console.log(hero);
    console.log(villain);
}

button.addEventListener('click', battle);
