import { Weapon } from './weapon.js';
import { GameBuilder } from './gameBuilder.js';
import { GameController } from './gameController.js';


export function getRandomNumberBetween(min = 1, max = 10){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//TODO: 3 - fix problem with undefined weapon if are names are used.
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


export const generateWeapon = () => {
    const drawnWeaponIndex = getRandomNumberBetween(0, weaponSelector.length-1);
    // const chosenWeaponName = weaponSelector.splice(drawnWeaponIndex, 1).pop();
    const chosenWeaponName = weaponSelector[drawnWeaponIndex];

    const weaponPower = getRandomNumberBetween(1, 99);
    const weapon = new Weapon(chosenWeaponName, weaponPower);

    return weapon;
}


function initGame() {
    const gameBoard = document.querySelector(".gameOne");

    const gameController = new GameController();
    const gameBattle = new GameBuilder(gameBoard, gameController);
    gameBattle.fillInputs();

}


initGame();
