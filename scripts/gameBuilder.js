export class GameBuilder {

    constructor(gameHTMLwrapper) {
        this.gameWrapper = gameHTMLwrapper;

        this.randomPersonButton = this.gameWrapper.querySelector('#randomPerson');

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


    };

    fillInputs = (randomPerson) => {
        this.nameInput.value = randomPerson.name;
        this.strengthInput.value = randomPerson.strength;
        this.weaponInput.value = randomPerson.weapon;
        this.selectTeamInput.value = randomPerson.team;

    };

    readLocalStorage = (addToTeamCallback) => {

        const characters = window.localStorage.getItem('characters');
        if (characters === null) {
            return;
        }
        const parsedCharacters = JSON.parse(characters);

        this.renderTeams(parsedCharacters, addToTeamCallback);

    };

    renderTeams = (teams, addToTeamCallback) => {
        teams.forEach(person => {
            const selectedTeam = person.type === 'hero' ? '0' : '1';
            const newPerson = addToTeamCallback(person.name, person.strength, person.weapon.name, person.weapon.power, selectedTeam);
            this.addPersonToBoard(newPerson, selectedTeam);

        });
    };

    updateTeamsView = (teams) => {
        this.teamAWrapper.innerHTML = '';
        this.teamBWrapper.innerHTML = '';
        teams.forEach( person => {
            const selectedTeam = person.type === 'hero' ? '0' : '1';
            this.addPersonToBoard(person, selectedTeam);
        })
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



