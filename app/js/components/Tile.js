import * as Utils from '../base/utilities';

export default class Tile {
    // Tile is defined by rows,cols and the fill matrix which 
    // specifies which cells must be colored/visible in the tile

    // row and col specify the
    constructor(ctx, x, y, fillMatrix, color, cellLength, row, col) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.fillMatrix = fillMatrix;
        this.rows = this.fillMatrix.length;
        this.cols = this.fillMatrix[0].length;
        this.length = cellLength;
        this.ctx = ctx;
        this.moveLocks = { // prevents move in that direction if the lock is present
            left: false, 
            right: false
        };
        this.boardPosition = {
            row: row,
            cols: col
        };
        //console.log(this.boardPosition);
        //console.log(this.fillMatrix);
    }
    

    // valid directions are left,right and down
    move(direction) {
        let status = false;
        // move each shape that is part of the tile in the appropriate direction
        if (direction == 'left' && !this.moveLocks.left) {
            //console.log("Moving left");
            if (this.boardPosition.cols - 1 >= 0) {
                this.x -= this.length;
                this.boardPosition.cols -= 1;
                this.lastMove = 'left';
                status = true;
            }
        }

        if (direction == 'right' && !this.moveLocks.right) {
            if (this.boardPosition.cols + this.fillMatrix[0].length-1 < 13) {
                //console.log("Moving right");
                this.x += this.length;
                this.boardPosition.cols += 1;
                this.lastMove = 'right';
                status = true;
            }
        }

        if (direction == 'down') {
            this.y += this.length;
            if (this.y > 0)
                this.boardPosition.row += 1;
            this.lastMove = 'down';
            status = true;
        }
        return status;
    }

    draw() {
        // iterate through each cell and draw each cell
        let numRow = 0;
        for (let r of this.fillMatrix) {
            let numCol = 0;
            for (let c of r) {
                if (c) {
                    this.ctx.strokeStyle = 'black';
                    this.ctx.fillStyle = this.color;
                    const cell = {};
                    cell['x'] = this.x + numCol * this.length;
                    cell['y'] = this.y + numRow * this.length;
                    //console.log('draw() cell: ', cell);
                    // first draw border and then fill tile, gives a nice effect when the tile freezes
                    this.ctx.strokeRect(cell.x, cell.y, this.length, this.length);
                    this.ctx.fillRect(cell.x, cell.y, this.length, this.length);
                }
                //console.log(numRow, numCol);
                numCol++;
            }
            numRow++;
        }
    }

    rotate(board) {
        let status = true;
        const oldMatrix = this.fillMatrix;
        this.fillMatrix = Utils.rotateMatrix(this.fillMatrix);
        this.rows = this.fillMatrix.length;
        this.cols = this.fillMatrix[0].length;
        
        // check if new fill matrix collides with anything in the board
        
        for(let cr = 0; cr < this.rows; cr++) {
            for(let cc=0; cc < this.cols; cc++) {
                let cellRow = this.boardPosition.row + cr; 
                let cellCol = this.boardPosition.cols + cc;
                if(this.fillMatrix[cr][cc] == board.fillMatrix[cellRow][cellCol] || cellCol > board.cols || cellRow > board.rows) {
                    // cell already full, reverse rotate!
                    this.fillMatrix = oldMatrix;
                    this.rows = oldMatrix.length;
                    this.cols = oldMatrix[0].length;
                }
            }
        }
        
        // rotate fillMatrix
        // update rows
        // update cols
    }
}