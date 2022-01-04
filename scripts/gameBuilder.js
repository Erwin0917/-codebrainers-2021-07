import {getRandomNumberBetween, randomWeaponName} from "./index.js";



export class GameBuilder {

    constructor(gameHTMLwrapper) {
        this.gameWrapper = gameHTMLwrapper;

        this.randomPersonButton = this.gameWrapper.querySelector('#randomPerson');
        this.clearLocalStorageButton = this.gameWrapper.querySelector('#clearLocalStorage');


        this.nameInput = this.gameWrapper.querySelector('#name');
        this.strengthInput = this.gameWrapper.querySelector('#strength');
        this.weaponInput = this.gameWrapper.querySelector('#weapon');
        this.selectTeamInput = this.gameWrapper.querySelector('#default_select');

        this.teamAWrapper = this.gameWrapper.querySelector('#team-a-wrapper');
        this.teamBWrapper = this.gameWrapper.querySelector('#team-b-wrapper');

        this.battleRaport = this.gameWrapper.querySelector('#dialog-default');
        this.battleRaportCloseButton = this.battleRaport.querySelector('.nes-btn');

        this.addEvents();
    }


    addEvents = () => {
        this.randomPersonButton.addEventListener('click', this.fillInputs);
        this.battleRaportCloseButton.addEventListener('click', this.hideBattleReport);
        this.clearLocalStorageButton.addEventListener('click', this.clearLocalStorage);

    };



    fillInputs = () => {

        const names = ['Mike', 'Nick', 'Slagathor', 'Banana', 'Rick', 'Astley', 'Rock', 'JW', 'pronax'];
        const nameIndex = getRandomNumberBetween(0, names.length - 1);
        const strength = getRandomNumberBetween(2, 35);
        const weaponName = randomWeaponName();
        const team = Math.random() > 0.5 ? '1' : '0';

        const name = names[nameIndex];

        this.nameInput.value = name;
        this.strengthInput.value = strength;
        this.weaponInput.value = weaponName;
        this.selectTeamInput.value = team;

    };

    readLocalStorage = (addToTeamCallback) => {

        const characters = window.localStorage.getItem('characters');
        if (characters === null) {
            return;
        }
        const parsedCharacters = JSON.parse(characters);

        this.renderTeams(parsedCharacters, addToTeamCallback);

    };

    clearLocalStorage = () => {
        const storage = window.localStorage.clear();

        this.clearTeamsView();

    };

    renderTeams = (teams, addToTeamCallback) => {
        teams.forEach(person => {
            const selectedTeam = person.type === 'hero' ? '0' : '1';
            const newPerson = addToTeamCallback(person.name, person.strength, person.weapon.name, person.weapon.power, selectedTeam);
            this.addPersonToBoard(newPerson, selectedTeam);

        });
    };

    updateTeamsView = (teams) => {
        this.clearTeamsView();
        teams.forEach( person => {
            const selectedTeam = person.type === 'hero' ? '0' : '1';
            this.addPersonToBoard(person, selectedTeam);
        })
    }

    clearTeamsView = () => {
        this.teamAWrapper.innerHTML = '';
        this.teamBWrapper.innerHTML = '';

    }



    readInputs = () => {
        const name = this.nameInput.value;
        const strength = this.strengthInput.value;
        const weaponName = this.weaponInput.value;
        const select = this.selectTeamInput;
        const selectedTeam = select.options[select.selectedIndex].value;

        const personData = {
            name,
            strength,
            weapon: weaponName,
            select,
            selectedTeam
        };

        return personData

    };

    addPersonToBoard = (person, team) => {
        const htmlPerson = this.createHtmlPersonElement(person);
        if (team === '0') {
            this.teamAWrapper.appendChild(htmlPerson);
        }

        if (team === '1') {
            this.teamBWrapper.appendChild(htmlPerson);
        }

        person.setHtmlWrapper(htmlPerson);
    };

    createHtmlPersonElement(person) {
        const personWrapper = document.createElement('div');
        personWrapper.classList.add('personWrapper');

        personWrapper.innerHTML = `
            <div class='avatar'></div>
            <div class='personName'>${person.name}</div>
            <div class='personWeapon'>Weapon: ${person.weapon.name}</div>
            <div class='personStrength'>Strength: ${person.strength}</div>
            <div class='personHitPoints'>Hit points ${person.hitPoints} / ${person.initHitPoints}</div>
            <progress class='nes-progress is-error' value='${person.hitPoints}' max='${person.initHitPoints}'></progress>
        `;

        return personWrapper;
    }


    // onStartBattle = async () => {
    //     const battleFinished = await this.gameController.startBattle();
    //
    //     if (battleFinished === 'finished') {
    //         this.showBattleInfo();
    //     }
    //
    // }


    showBattleInfo = (teamA) => {
        if (teamA === undefined && !Array.isArray(teamA)) {
            return;
        }
        const paragraph = this.battleRaport.querySelector('.raport-res');
        const teamARes = teamA.filter(character => character.isAlive());
        const winnerTeam = teamARes.length === 0 ? 'TeamB' : 'TeamA';

        paragraph.innerText = `Winner is: ${winnerTeam}`;

        this.battleRaport.style.display = 'block';
    }

    hideBattleReport = () => {
        this.battleRaport.style.display = 'none';
    };

}



