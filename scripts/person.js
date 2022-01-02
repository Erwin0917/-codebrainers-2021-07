import { getRandomNumberBetween } from './index.js';
import { Weapon } from './weapon.js';

export class Person {
    htmlWrapper = null;

    constructor(name, strength) {
        this.id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
        this.name = name;
        this.hitPoints = 0;
        this.strength = strength;
    }

    setWeapon(weapon) {
        if (!(weapon instanceof Weapon)){
            console.log('Weapon is not instance of class weapon');
            return;
        }

        this.weapon = weapon;
    }

    setHtmlWrapper = (htmlWrapper) => {
        this.htmlWrapper = htmlWrapper;
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
        let weaponPower = this.weapon.power;
        if (this.weapon && this.weapon instanceof Weapon){
            weaponPower = this.weapon.getDamage();
        }
        const damageFactor = Math.round(this.strength * 1/getRandomNumberBetween(1,10));
        const attackFactor = power + weaponPower + damageFactor;
        const hitPointsAfterAttack = target.hitPoints - attackFactor ;
        target.setHitPoints(hitPointsAfterAttack);
        return target;
    }

}


export class Hero extends Person {
    constructor(name, strength) {
        super(name, strength);
        this.hitPoints = getRandomNumberBetween(500, 1500);
        this.initHitPoints = this.hitPoints;
        this.type = 'hero'
        // this.strength = getRandomNumberBetween(10, 20);
    }
}

export class Villain extends Person {
    constructor(name, strength) {
        super(name, strength);
        this.hitPoints = getRandomNumberBetween(500, 1500);
        this.initHitPoints = this.hitPoints;
        this.type = 'villain'
        // this.strength = getRandomNumberBetween(10, 20);
    }
}
