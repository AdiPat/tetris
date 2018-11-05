import * as Utils from '../base/utilities';
import * as Constants from '../base/constants';
import Tile from '../components/Tile';
import Board from '../components/Board';
import * as ScoreController from './ScoreController';

export var gameData = {
    gameSpeed: 15, // time in s for one tile to fall down
};

var sounds = {
    lineclear: new Audio('../sounds/rotate.wav'),
    rotate: new Audio('../sounds/lineclear.wav'),
    touchdown: new Audio('../sounds/touchdown.wav'),
    pop: new Audio('../sounds/pop.wav')
};

const generateRandomTile = (ctx) => {
    // Generate color 
    const color = Utils.random(Constants.TILE_COLORS);
    // get column randomly 
    let boardCol = Math.floor(Math.random() * (gameData.board.cols));
    const tileType = Utils.random(Constants.TILE_TYPES);
    
    let delta = boardCol + tileType[0].length - gameData.board.cols;
    
    // if the tile exceeds bounds, adjust it again
    if(delta > 0)
        boardCol = boardCol - delta;
    
    const pos = {
        x: gameData.board.x + boardCol * Constants.TILE_LENGTH,
        y: 0
    };
    let tile = new Tile(ctx, pos.x, pos.y - Constants.TILE_LENGTH * 2, tileType, color, Constants.TILE_LENGTH,
        Utils.offsetToIndex(pos.y, Constants.TILE_LENGTH), Utils.offsetToIndex(pos.x, Constants.TILE_LENGTH));
    
    return tile;
}

export const spawnTile = (ctx) => {
    if(gameData.nextTile) {
        gameData.currentTile = gameData.nextTile;
        gameData.nextTile = generateRandomTile(ctx);   
    }   
    else {
        gameData.currentTile = generateRandomTile(ctx);
        gameData.nextTile = generateRandomTile(ctx);
    }
};

const showNextTile = (ctx) => {
     // TODO: hacky way, change it
    const oldPos = {
        x: gameData.nextTile.x,
        y: gameData.nextTile.y
    };
    
    gameData.nextTile.x = Constants.BOARD_WIDTH + Constants.TILE_LENGTH*3; 
    gameData.nextTile.y = Constants.BOARD_HEIGHT - Constants.TILE_LENGTH*3;
    gameData.nextTile.draw();
    // reset 
    gameData.nextTile.x = oldPos.x; 
    gameData.nextTile.y = oldPos.y;
};

export const update = (ctx) => {
    if (gameData.updateLock) // check if update() is locked
        return;

    //if(gameData.currentTile.boardPosition.row === 1)
    //    gameData.updateLock = true;

    // draw board
    const completeRows = gameData.board.checkCompleteRows();
    if (completeRows > 0)
        sounds.lineclear.play();
    gameData.score += completeRows * 10 + (completeRows > 1 ? (completeRows * 4) : 0);
    // draw board TODO: FIX THIS
    ScoreController.updateScore(ctx, gameData.score);
    // show next time
    //showNextTile(ctx);
    gameData.board.draw();
    gameData.currentTile.draw();
    // print score
    //console.log("SCORE: ", gameData.score);
    // check collisions
    const collisionStatus = gameData.board.checkCollisions(gameData.currentTile);
    if (gameData.board.isBoardFull)
        gameData.board.fillEmptyBoard();

    //console.log(collisionStatus);
    if (collisionStatus) {
        //console.log("Collision!");
        // update board fill matrix
        sounds.touchdown.play();
        gameData.board.update(gameData.currentTile);
        //gameData.currentTile.draw();
        gameData.board.draw();
        // reset last move otherwise the new tile won't drop down
        gameData.lastMove = '';
        // spawn new tile
        spawnTile(ctx);
    } else {
        // draw current tile 
        gameData.currentTile.draw();
        if (gameData.lastMove !== 'down')
            gameData.currentTile.move('down');
        else
            gameData.lastMove = '';
    }
    showNextTile();
}

export const handleInput = (keyCode) => {

    function moveTile(direction) {
        if (direction === 'rotate') {
            sounds.rotate.pause();
           sounds.rotate.currentTime = 0;
            sounds.rotate.play();
            gameData.updateLock = true;
            // check if rotation is possible and only then rotate
            gameData.currentTile.rotate(gameData.board);
            gameData.board.draw();
            gameData.currentTile.draw();
            //gameData.updateLock = false;
        }
        if (!gameData.board.checkCollisions(gameData.currentTile)) {
            sounds.pop.pause();
            sounds.pop.currentTime = 0;
            sounds.pop.play();
            gameData.updateLock = true;
            //console.log("moveLocks", gameData.currentTile.moveLocks);
            // only if move happens, update stuff
            if (gameData.currentTile.move(direction)) {
                gameData.lastMove = direction;
                gameData.board.draw();
                gameData.currentTile.draw();
                // reset locks, otherwise the tile won't move horizontally
                gameData.currentTile.moveLocks = {
                    left: false,
                    right: false
                };
            }
            //gameData.updateLock = false;
        }
    }

    if (keyCode === Constants.KEY_UP) {
        moveTile('rotate');
    }

    if (keyCode === Constants.KEY_DOWN) {
        moveTile('down');
    }

    if (keyCode === Constants.KEY_LEFT) {
        moveTile('left');
    }

    if (keyCode === Constants.KEY_RIGHT) {
        moveTile('right');
    }
}

export const pause = () => {
    
};


export const init = (ctx) => {
    gameData.board = new Board(ctx, 0, 0, Constants.BOARD_WIDTH, Constants.BOARD_HEIGHT, Constants.COLOR_CELL, Constants.COLOR_CELL_BORDER);
    gameData.score = 0;
    gameData.ctx = ctx;
    gameData.updateLock = false;
    spawnTile(ctx);
};