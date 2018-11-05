import * as Constants from '../base/constants';
import * as Utils from '../base/utilities';

export default class Board {

    constructor(ctx, x, y, width, height, color, colorBorder) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.colorBorder = colorBorder;
        this.fillMatrix = [];
        this.rows = this.height / Constants.TILE_LENGTH;
        this.cols = this.width / Constants.TILE_LENGTH;
        this.isBoardFull = false; // flag to check if the board is full

        this.fillEmptyBoard();
    }

    fillEmptyBoard() {
        for (let r = 0; r < this.rows; r++) {
            if (!this.fillMatrix[r]) // if the row doesn't exist, push
                this.fillMatrix.push([]);
            for (let c = 0; c < this.cols; c++) {
                if (!this.fillMatrix[r][c])
                    this.fillMatrix[r].push([0, this.color]);
                else
                    this.fillMatrix[r][c] = [0, this.color];
            }
        }
        this.isBoardFull = false;
    }

    reset() {
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = Constants.COLOR_BOARD_BORDER;
        this.ctx.strokeRect(this.x, this.y, this.width, this.height);
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    draw() {
        this.reset();
        // draw all cells
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.ctx.strokeStyle = this.colorBorder;
                this.ctx.fillStyle = this.fillMatrix[i][j][1];
                const x = this.x + Constants.TILE_LENGTH * j;
                const y = this.y + Constants.TILE_LENGTH * i;
                //if (this.fillMatrix[i][j][0]) {
                this.ctx.fillRect(x, y, Constants.TILE_LENGTH, Constants.TILE_LENGTH);
                //}

                this.ctx.strokeRect(x, y, Constants.TILE_LENGTH, Constants.TILE_LENGTH);
            }
        }
    }

    checkCollisions(currentTile) {
        const lastRow = currentTile.boardPosition.row + currentTile.fillMatrix.length - 1;
        const col = currentTile.boardPosition.cols;
        let status = false;

        // when a tile is spawned, the row value is 0 but the tile is 
        // above the board, this causes the collision to stay undetected till the tile is on the board, this is what this piece of code tests

        if (this.fillMatrix[0][col][0]) {
            // set boardFull
            this.isBoardFull = true;
            return true;
        }



        for (let cr = 0; cr < currentTile.rows; cr++) {
            for (let cc = 0; cc < currentTile.cols; cc++) {
                if (currentTile.fillMatrix[cr][cc]) {
                    try {
                        const cellRow = currentTile.boardPosition.row + cr;
                        const cellCol = currentTile.boardPosition.cols + cc;

                        // check cell to the left of tile
                        try {
                            //console.log(cc, this.fillMatrix[cellRow][cellCol-1][0]);
                            
                            if(cc === 0 && this.fillMatrix[cellRow][cellCol - 1][0]) {
                               // console.log("LEFT COLLISION!");
                                currentTile.moveLocks.left = true; 
                                status = true;
                                //return true;
                            }
                           // else
                            //    currentTile.moveLocks.left = false;
                            
                            if(cc === currentTile.cols-1 && this.fillMatrix[cellRow][cellCol+1][0]) {
                               // console.log("Right collision");
                                currentTile.moveLocks.right = true; 
                                status = true;
                                //return true;
                            }
                            //else
                            //    currentTile.moveLocks.right = false;
                        }
                        catch(err) {
                           // console.log(err);
                        }

                        // check below cell
                        if (cellRow + 1 === this.rows || this.fillMatrix[cellRow + 1][cellCol][0]) {
                            currentTile.moveLocks.left = currentTile.moveLocks.right = false;
                            return true;
                        }
                    } catch (err) {
                        // Incase we exceed array bounds
                    }
                }
            }
        }
        
        return false;
    }

    printFillMatrix() {
        for (let r of this.fillMatrix) {
            var rstr = "";
            for (let i of r) {
                rstr += i[0] + " ";
            }
           // console.log(rstr);
        }
    }

    update(tile) {
       // console.log("UPDATE BOARD.");
        for (let i = 0; i < tile.rows; i++) {
            for (let j = 0; j < tile.cols; j++) {
                if (tile.fillMatrix[i][j]) {
                    if (tile.boardPosition.row + i < this.rows && tile.boardPosition.cols + j < this.cols) {
                        this.fillMatrix[tile.boardPosition.row + i][tile.boardPosition.cols + j] = [1, tile.color];
                    }
                }
            }
        }
        //this.printFillMatrix();
    }

    // Checks if any rows are completed and returns the number of rows completed

    checkCompleteRows() {
        let count = 0;
        // check if a row has all entries as 1, if yes, push all rows above it down by one space
        for (let i = 0; i < this.rows; i++) {
            let complete = true;
            for (let j = 0; j < this.cols; j++) {
                if (this.fillMatrix[i][j][0] === 0)
                    complete = false;
            }
            if (complete) {
                //console.log(complete, i);
                const emptyRow = i;
                let k = emptyRow - 1;
                for (k = emptyRow - 1; k >= 0; k--) {
                    this.fillMatrix[k + 1] = this.fillMatrix[k];
                }
                if (k === -1) {
                    this.fillMatrix[0] = [];
                    for (let l = 0; l < this.cols; l++)
                        this.fillMatrix[0].push([0, this.color]);
                }
                count++;
            }
        }
        return count;
    }
}