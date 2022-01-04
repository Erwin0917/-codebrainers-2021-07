import { Weapon } from './weapon.js';
import { GameBuilder } from './gameBuilder.js';
import { GameController } from './gameController.js';


export function getRandomNumberBetween(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const weaponSelector = ['wand', 'knife', 'arch', 'hands', 'axe', 'sword', 'rope', 'animal'];
const weapons = [
    {
        name: 'wand',
        powerFactor: 50
    },
    {
        name: 'knife',
        powerFactor: 70
    },
    {
        name: 'arch',
        powerFactor: 80
    }
];



export const generateWeapon = (weaponName, weaponPower) => {
    const indexOfWeaponName = weaponSelector.indexOf(weaponName);
    if (indexOfWeaponName === -1) {
        console.log('Wrong weapon name!');
        return false;
    }
    // const chosenWeaponName = weaponSelector.splice(indexOfWeaponName, 1).pop();
    const chosenWeaponName = weaponSelector[indexOfWeaponName];

    const power = weaponPower === undefined ? getRandomNumberBetween(1, 99) : weaponPower;
    const weapon = new Weapon(chosenWeaponName, power);

    return weapon;
};

export const randomWeaponName = () => {
    const drawnWeaponIndex = getRandomNumberBetween(0, weaponSelector.length - 1);
    const chosenWeaponName = weaponSelector[drawnWeaponIndex];

    if (chosenWeaponName === undefined) {
        console.log('chosenWeaponName is undefined');
    }

    return chosenWeaponName;
};

function initGame() {
    const gameBoard = document.querySelector('.gameOne');

    const gameBuilder = new GameBuilder(gameBoard);
    const gameController = new GameController(gameBuilder);

    gameBuilder.fillInputs();

    gameBoard.querySelector('#startBattle').addEventListener('click', gameController.startBattle);
    gameBoard.querySelector('#addToTeam').addEventListener('click', () => {
        const rawPerson = gameBuilder.readInputs();
        const newPerson = gameController.addToTeam(rawPerson.name, rawPerson.strength, rawPerson.weapon, undefined, rawPerson.selectedTeam);
        gameBuilder.addPersonToBoard(newPerson, rawPerson.selectedTeam);
        gameBuilder.fillInputs();
    });

    gameBuilder.readLocalStorage(gameController.addToTeam);

}


initGame();
