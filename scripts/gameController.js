import { Hero, Villain } from './person.js';
import { generateWeapon, getRandomNumberBetween, randomWeaponName } from './index.js';

export class GameController {
    teamA = [];
    teamB = [];


    constructor(gameBuilder) {
        this.gameBuilder = gameBuilder;
    }

    addToTeam = (name, strength, weaponName, weaponPower, selectedTeam) => {
        if (selectedTeam === '') {
            console.log('Please select team!');
            return false;
        }
        const weapon = generateWeapon(weaponName, weaponPower);

        if (weapon === false) {
            console.log('Wrong weapon');
            return false;
        }

        if (selectedTeam === '1') {
            const person = new Villain(name, strength);
            person.setWeapon(weapon);
            this.teamB.push(person);
            window.localStorage.setItem('characters', JSON.stringify(this.teamB.concat(this.teamA)));
            return person;
        }

        if (selectedTeam === '0') {
            const person = new Hero(name, strength);
            person.setWeapon(weapon);
            this.teamA.push(person);
            window.localStorage.setItem('characters', JSON.stringify(this.teamB.concat(this.teamA)));
            return person;
        }

        console.log('Some value is wrong!');
    };




    startBattle = async () => {
        while (this.teamB.length > 0 && this.teamA.length > 0) {
            if (this.teamA.length <= this.teamB.length) {
                this.teamA.forEach((hero, index) => {
                    this.duel(hero, this.teamB[index]);
                });
            } else {
                this.teamB.forEach((villain, index) => {
                    this.duel(villain, this.teamA[index]);
                });
            }
            await timeOut(100);
        }
        this.gameBuilder.showBattleInfo(this.teamA);
        console.log('FINISH GAME!');
    };

    duel = (attacker, defender) => {
        if (attacker === undefined || defender === undefined) {
            return;
        }

        let defendersDamage = null;
        if (attacker.isAlive()) {
            defendersDamage = attacker.attack(defender, getRandomNumberBetween(2, 35));
            defender.lastDamage = -defendersDamage;
        }

        let attackersDamage = null;
        if (defender.isAlive()) {
            attackersDamage= defender.attack(attacker, getRandomNumberBetween(2, 35));
            attacker.lastDamage = -attackersDamage;

        }

        if (!defender.isAlive()) {
           if (defender.type === 'hero') {
               this.teamA = this.teamA.filter( person => person.id !== defender.id);
           } else {
               this.teamB = this.teamB.filter( person => person.id !== defender.id);
           }
        }

        if (!attacker.isAlive()) {
           if (attacker.type === 'hero') {
               this.teamA = this.teamA.filter( person => person.id !== attacker.id);
           } else {
               this.teamB = this.teamB.filter( person => person.id !== attacker.id);
           }
        }

        this.gameBuilder.updateTeamsView([...this.teamA, ...this.teamB] );

    };

}

const timeOut = async (time) => await new Promise(resolve => setTimeout(resolve, time));
