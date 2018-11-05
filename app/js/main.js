// TODO:
// Remove hardcoded values

import * as Base from './base/constants';
import Tile from './components/Tile';
import Board from './components/Board';
import * as GameController from './controllers/GameController';
import * as ScoreController from './controllers/ScoreController';
import * as InputController from './controllers/InputController';


console.log("Starting Tetris!");
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
init();


function init() {
    InputController.init();
    GameController.init(ctx);
}


var count = 0;
var frames = 0;


var globalId = 0;

function gameLoop() {
    if(frames == 30) {
        window.cancelAnimationFrame(globalId);
        if(!GameController.gameData.updateLock)
            resetCanvas();
        GameController.update(ctx);
        frames=0;
    }
    frames++;
    globalId = window.requestAnimationFrame(gameLoop);
};


function resetCanvas() {
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.restore();
}

window.gameLoop = gameLoop;
globalId = window.requestAnimationFrame(gameLoop);
window.globalId = globalId; 