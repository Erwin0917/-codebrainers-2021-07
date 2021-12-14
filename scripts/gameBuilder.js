export class GameBuilder {
    constructor(gameHTMLwrapper, startBattleCallback, randomPerson, addTeam ) {
        this.startBattleCallback = startBattleCallback;
        this.gameWrapper = gameHTMLwrapper;
        this.randomPerson = randomPerson;
        this.addTeam = addTeam;

        console.log(randomPerson)
        console.log(this.gameWrapper);

        this.startBattleButton = this.gameWrapper.querySelector('#startBattle');
        this.addTeamButton = this.gameWrapper.querySelector('#addToTeam');
        this.randomPersonButton = this.gameWrapper.querySelector('#randomPerson');

        this.nameInput = this.gameWrapper.querySelector('#name');
        this.strengthInput = this.gameWrapper.querySelector('#strength');
        this.weaponInput = this.gameWrapper.querySelector('#weapon');

        this.nameWrapper= this.gameWrapper.getElementsByClassName('#name');
        this.strengthInput = this.gameWrapper.querySelector('#strength');
        this.weaponInput = this.gameWrapper.querySelector('#weapon');

        this.addEvents();
    }

    addEvents() {
        this.startBattleButton.addEventListener('click', this.startBattleCallback);
        this.randomPersonButton.addEventListener('click', this.fillInputs);
        this.addTeamButton.addEventListener('click', this.teamInputs);



    }

    fillInputs = () =>  {
        console.log(this)
        const randomPerson = this.randomPerson();

        this.nameInput.value = randomPerson.name;
        this.strengthInput.value = randomPerson.strength;
        this.weaponInput.value = randomPerson.weapon


        //TODO TRY FILL INPUTS RANDOM PERSON DATA


        console.log(randomPerson)
    }

    teamInputs = () => {
        let select = document.getElementById('default_select');
        this.option = select.options[select.selectedIndex].value;

        console.log(select.options[select.selectedIndex].value);
        this.addTeam() ;

    }


}
