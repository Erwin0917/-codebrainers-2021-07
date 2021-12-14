import { Hero, Villain } from './person.js';
import { Weapon } from './weapon.js';
import { GameBuilder } from './gameBuilder.js';
import { Person } from './person.js';


export function getRandomNumberBetween(min = 1, max = 10){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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




const generateWeapon = () => {

    const drawnWeaponIndex = getRandomNumberBetween(0, weaponSelector.length);
    const chosenWeaponName = weaponSelector.splice(drawnWeaponIndex, 1).pop();

    const weaponPower = getRandomNumberBetween(0, 99);
    const weapon = new Weapon(chosenWeaponName, weaponPower);

    return weapon;
}
const addTeam = () => {
    const name = randomPerson.name;
    const strength = randomPerson.strength;
    const weapon = randomPerson.weapon;

    const team = this.option;

    console.log(team);

    if (team === 'Team A') {
        const person = new Villain(name, strength, this.weapon = weapon);
        return person;

    }
    if (team === 'Team B') {
        const person = new Hero(name, strength, this.weapon = weapon);
        return person;
    }

}

const randomPerson = () => {
    const names = ["Mike","Nick","Slagathor","Banana","Rick","Astley","Rock","JW","pronax"];
    const nameIndex = getRandomNumberBetween(0, names.length-1);
    const strength = getRandomNumberBetween(2, 35);
    const weapon = generateWeapon();

    const name = names[nameIndex];

    return {
        name,
        strength,
        weapon: weapon.name
    };

}

const battle = () => {
    const hero = new Hero();
    const villain = new Villain();

    hero.setWeapon(generateWeapon())
    villain.setWeapon(generateWeapon())


    while (hero.isAlive() && villain.isAlive()) {
        const heroAttack = hero.attack(villain, getRandomNumberBetween(2, 35));
        const villainAttack = villain.attack(hero, getRandomNumberBetween(2, 31));
        console.log(`hero's attack with power: ${heroAttack}, and hero's hitPoints: ${hero.hitPoints} `);
        console.log(hero);
        console.log(`villain's attack with power: ${villainAttack}, and villain's hitPoints: ${villain.hitPoints} `);
        console.log(villain);


    }


}

const gameBoard = document.querySelector(".gameOne");
const gameBattle = new GameBuilder(gameBoard, battle, randomPerson, addTeam);

