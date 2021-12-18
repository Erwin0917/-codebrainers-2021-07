import { Hero, Person, Villain } from './person.js';
import { generateWeapon, getRandomNumberBetween, randomWeaponName } from './index.js';

export class GameController {
    teamA = [];
    teamB = [];

    addToTeam = (name, strength, weaponName, selectedTeam) => {
        if (selectedTeam === '') {
            console.log('Pleas select team!');
            return false;
        }

        const weapon = generateWeapon(weaponName);

        if (weapon === false) {
            return false;
        }

        if (selectedTeam === '1') {
            const person = new Villain(name, strength);
            person.setWeapon(weapon);
            this.teamB.push(person);
            return person;
        }

        if (selectedTeam === '0') {
            const person = new Hero(name, strength);
            person.setWeapon(weapon);
            this.teamA.push(person);
            return person;
        }

        console.log('Some value is wrong!');

    };


    randomPerson = () => {
        const names = ['Mike', 'Nick', 'Slagathor', 'Banana', 'Rick', 'Astley', 'Rock', 'JW', 'pronax'];
        const nameIndex = getRandomNumberBetween(0, names.length - 1);
        const strength = getRandomNumberBetween(2, 35);
        const weaponName = randomWeaponName();
        const team = Math.random() > 0.5 ? '1' : '0';

        const name = names[nameIndex];

        return {
            name,
            strength,
            weapon: weaponName,
            team
        };

    };


    startBattle = async () => {
        return await new Promise((resolve) => {
            do {
                console.log("team A", this.teamA.length);
                console.log("team B", this.teamB.length);

                if (this.teamA.length >= this.teamB.length){
                    this.teamA.forEach(async (hero, index) => {
                        await this.duel(hero, this.teamB[index], index);

                    });
                } else {
                    this.teamB.forEach(async (villain, index) => {
                        await this.duel(villain, this.teamA[index], index);
                    });
                }
            } while (this.teamB.length > 0 && this.teamA.length > 0 );
            resolve('finished');
        });
    };

    duel = async (hero, villain, index) => {
        const promise = await new Promise((resolve) => {
            const interval = setInterval(() => {
                console.log("start interval");
                if (!hero.isAlive() || !villain.isAlive()) {
                    console.log(hero.isAlive());
                    // !hero.isAlive() ? this.teamA.splice(index, 1) : this.teamB.splice(index, 1);
                    if (!hero.isAlive()) {
                        this.teamA.splice(index, 1);
                        console.log('here we delete hero')
                        console.log(index);
                        console.log(this.teamA);
                    } else{
                        this.teamB.splice(index, 1);
                        console.log('here we delete villain')
                        console.log(index);
                        console.log(this.teamB);
                    }
                    clearInterval(interval);
                    resolve();
                }
                const heroAttack = hero.attack(villain, getRandomNumberBetween(2, 35));
                const villainAttack = villain.attack(hero, getRandomNumberBetween(2, 35));

            }, 25);
        });


        //TODO: **try use information about damage and put it on the game board.

        if (hero.isAlive()) {
            console.log('Hero alive');
        } else {
            console.log('villain alive');
        }


    };

}
