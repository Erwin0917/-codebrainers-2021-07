export class GameBuilder {
    constructor(gameHTMLwrapper, startBattleCallback, randomPerson ) {
        this.startBattleCallback = startBattleCallback;
        this.gameWrapper = gameHTMLwrapper;
        this.randomPerson = randomPerson;
        console.log(randomPerson)
        console.log(this.gameWrapper);

        this.startBattleButton = this.gameWrapper.querySelector('#startBattle');
        this.startTeamButton = this.gameWrapper.querySelector('#addToTeam');
        this.randomPersonButton = this.gameWrapper.querySelector('#randomPerson');

        this.nameInput = this.gameWrapper.querySelector('#name');
        this.strengthInput = this.gameWrapper.querySelector('#strength');
        this.weaponInput = this.gameWrapper.querySelector('#weapon');

        this.addEvents();
    }

    addEvents() {
        this.startBattleButton.addEventListener('click', this.startBattleCallback);
        this.randomPersonButton.addEventListener('click', this.fillInputs);



    }

    fillInputs = () =>  {
        console.log(this)
        const randomPerson = this.randomPerson();
        //TODO TRY FILL INPUTS RANDOM PERSON DATA
        console.log(randomPerson)
    }


}
