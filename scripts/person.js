import { getRandomNumberBetween } from './index.js';
import { Weapon } from './weapon.js';

class Person {
    constructor() {
        this.name = '';
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


export class Hero extends Person {
    constructor() {
        super();
        this.hitPoints = 100;
        this.strength = getRandomNumberBetween(10, 20);
    }
}

export class Villain extends Person {
    constructor() {
        super();
        this.hitPoints = 100;
        this.strength = getRandomNumberBetween(10, 20);
    }
}
