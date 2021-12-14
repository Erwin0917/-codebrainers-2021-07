import { Person } from './person.js';

export class GameBuilder {

    constructor(gameHTMLwrapper, gameController ) {
        this.gameController = gameController;
        this.gameWrapper = gameHTMLwrapper;

        this.startBattleButton = this.gameWrapper.querySelector('#startBattle');
        this.addTeamButton = this.gameWrapper.querySelector('#addToTeam');
        this.randomPersonButton = this.gameWrapper.querySelector('#randomPerson');

        this.nameInput = this.gameWrapper.querySelector('#name');
        this.strengthInput = this.gameWrapper.querySelector('#strength');
        this.weaponInput = this.gameWrapper.querySelector('#weapon');

        this.teamAWrapper = this.gameWrapper.querySelector('#team-a-wrapper');
        this.teamBWrapper = this.gameWrapper.querySelector('#team-b-wrapper');
        this.addEvents();
    }

    addEvents = () => {
        this.startBattleButton.addEventListener('click', this.gameController.startBattle);
        this.randomPersonButton.addEventListener('click', this.fillInputs);
        this.addTeamButton.addEventListener('click', this.readInputs);
    }

    fillInputs = () =>  {
        const randomPerson = this.gameController.randomPerson();

        this.nameInput.value = randomPerson.name;
        this.strengthInput.value = randomPerson.strength;
        this.weaponInput.value = randomPerson.weapon
    }

    readInputs = () => {
        const select = document.getElementById('default_select');
        const name = this.nameInput.value;
        const strength = this.strengthInput.value;
        const weaponName = this.weaponInput.value;
        const selectedTeam = select.options[select.selectedIndex].value;

        const newPerson = this.gameController.addToTeam(name, strength, weaponName, selectedTeam);

        this.addPersonToBoard(newPerson, selectedTeam);

    }

    addPersonToBoard = (person, team) => {
        const htmlPerson = this.createHtmlPersonElement(person);
        if (team === '0') {
            this.teamAWrapper.appendChild(htmlPerson);
        }

        if (team === '1') {
            this.teamBWrapper.appendChild(htmlPerson);
        }
    }

    createHtmlPersonElement(person) {
        if (!(person instanceof Person)) {
            return;
        }
        const personWrapper = document.createElement('div');
        personWrapper.classList.add('personWrapper');

        personWrapper.innerHTML = `
            <div class='avatar'></div>
            <div class='personName'>${person.name}</div>
            <div class='personWeapon'>${person.weapon.name}</div>
            <div class='personStrength'>${person.strength}</div>
            <div class='personHitPoints'>Hit points ${person.hitPoints} / ${person.hitPoints}</div>
            <progress class='nes-progress is-error' value='${person.hitPoints}' max='${person.hitPoints}'></progress>
        `;

        return personWrapper;
    }

}



