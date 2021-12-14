export class Weapon {
    constructor(name, power) {
        // this.name = weaponSelector[getRandomNumberBetween(0,weaponSelector.length-1)];
        this.name = name;
        this.power = power;
        this.functionality = 100;

    }

    powerBoost() {
       if (Math.random() > 0.7) {
          return this.power * 0.2;
       }
       return 0;
    }

    getDamage() {
        if (this.functionality >= 0) {
            const damage = this.isWorking() === false ? 0 : Math.round(this.power + this.powerBoost());
            this.reducingFunctionality();
            return damage
        }
    }

    isWorking () {
        return this.functionality > 0;

    }

    reducingFunctionality(reductionFactor = 7) {
        this.functionality = this.functionality - reductionFactor;

    }
}
