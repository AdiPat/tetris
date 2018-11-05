import * as Constants from '../base/constants';
import * as GameController from '../controllers/GameController';

var keyPressed = false;

export const init = () => {
    document.addEventListener('keydown', (event) => {
        if (event.keyCode == Constants.KEY_SPACE) {
            console.log("pause");
            GameController.pause();
        } else {
            GameController.handleInput(event.keyCode);
        }
    });

    document.addEventListener('keyup', (event) => {
        //console.log("KEYUP");
        function removeLock() {
            setTimeout(() => {
                GameController.gameData.updateLock = false;
            }, 200);
        }
        if (event.keyCode === Constants.KEY_UP) {
            removeLock();
        }
        if (event.keyCode === Constants.KEY_DOWN) {
            removeLock();
        }
        if (event.keyCode === Constants.KEY_LEFT) {
            removeLock();
        }
        if (event.keyCode == Constants.KEY_RIGHT) {
            removeLock();
        }
    });
}