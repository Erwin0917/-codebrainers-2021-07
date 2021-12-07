export class GameBuilder {
    constructor(gameHTMLwrapper, startBattleCallback ) {
        this.startBattleCallback = startBattleCallback;
        this.gameWrapper = gameHTMLwrapper;
        console.log(this.gameWrapper);

        this.startBattleButton = this.gameWrapper.querySelector('#startBattle');
        this.startTeamButton = this.gameWrapper.querySelector('#addToTeam');
        this.startPersonButton = this.gameWrapper.querySelector('#randomPerson');

        this.addEvents();
    }

    addEvents() {
        this.startBattleButton.addEventListener('click', this.startBattleCallback);
    }
}
