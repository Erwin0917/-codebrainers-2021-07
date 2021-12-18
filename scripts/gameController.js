import {Hero, Person, Villain} from './person.js';
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
            const person =  new Villain(name, strength);
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

        console.log('Some value is wrong!')

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




    startBattle = () => {
        //TODO: **Update HTML during the battle.

        this.teamA.forEach((hero, index) => {
            this.duel(hero, this.teamB[index]);
        })

        return 'finished';
    }

    duel = (hero, villain) => {
        while (hero.isAlive() && villain.isAlive()) {
            const heroAttack = hero.attack(villain, getRandomNumberBetween(2, 35));
            console.log(villain)

            const villainAttack = villain.attack(hero, getRandomNumberBetween(2, 31));
            //TODO: **try use information about damage and put it on the game board.
            console.log(hero)
        }
        if (hero.isAlive()){
            console.log("Hero alive")
        }
        else {
            console.log("villain alive")
        }


    }

}
