export class GameBuilder {
    constructor(gameBoardCallback) {
        this.gameBoardCallback = gameBoardCallback;
        this.startBattleButton = document.querySelector('#button');

        this.addEvents();
    }

    addEvents() {
        this.startBattleButton.addEventListener('click', this.gameBoardCallback);
    }
}
