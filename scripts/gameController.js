import { Hero, Villain } from './person.js';
import { generateWeapon, getRandomNumberBetween } from './index.js';

export class GameController {
    teamA = [];
    teamB = [];

    addToTeam = (name, strength, weaponName, selectedTeam) => {

        console.log(name, strength, weaponName, selectedTeam);

        if (selectedTeam === '') {
            console.log('Pleas select team!');
            return false;
        }

        const weapon = generateWeapon();

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
        const weapon = generateWeapon();
        const team = Math.random() > 0.5 ? '1' : '0';

        const name = names[nameIndex];

        return {
            name,
            strength,
            weapon: weapon.name,
            team
        };

    };




    startBattle = () => {
        this.teamA.forEach((hero, index) => {
            this.duel(hero, this.teamB[index]);
        })



    }

    duel = (hero, villain) => {
        while (hero.isAlive() && villain.isAlive()) {
            const heroAttack = hero.attack(villain, getRandomNumberBetween(2, 35));
            const villainAttack = villain.attack(hero, getRandomNumberBetween(2, 31));
            console.log(hero)
            console.log(villain)
        }

    }

}
