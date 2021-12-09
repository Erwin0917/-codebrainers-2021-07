import { getRandomNumberBetween } from './index.js';
import { Weapon } from './weapon.js';

export class Person {
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
        let weaponPower = 0;
        if (this.weapon && this.weapon instanceof Weapon){
            weaponPower = this.weapon.getDamage();
        }
        const damageFactor = Math.round(this.strength * 1/getRandomNumberBetween(1,10));
        const attackFactor = power + weaponPower + damageFactor;
        const hitPointsAfterAttack = target.hitPoints - attackFactor ;
        target.setHitPoints(hitPointsAfterAttack);
        return attackFactor;

    }
}


export class Hero extends Person {
    constructor() {
        super();
        this.hitPoints = 10000;
        this.strength = getRandomNumberBetween(10, 20);
    }
}

export class Villain extends Person {
    constructor() {
        super();
        this.hitPoints = 10000;
        this.strength = getRandomNumberBetween(10, 20);
    }
}
