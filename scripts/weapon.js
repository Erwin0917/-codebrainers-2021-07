export class Weapon {
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
