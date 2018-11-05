/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/base/constants.js":
/*!**********************************!*\
  !*** ./app/js/base/constants.js ***!
  \**********************************/
/*! exports provided: KEY_LEFT, KEY_RIGHT, KEY_DOWN, KEY_UP, KEY_SPACE, COLOR_BOARD_BORDER, COLOR_CELL, COLOR_CELL_BORDER, BOARD_WIDTH, BOARD_HEIGHT, TILE_COLORS, TILE_LENGTH, TILE_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY_LEFT\", function() { return KEY_LEFT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY_RIGHT\", function() { return KEY_RIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY_DOWN\", function() { return KEY_DOWN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY_UP\", function() { return KEY_UP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY_SPACE\", function() { return KEY_SPACE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLOR_BOARD_BORDER\", function() { return COLOR_BOARD_BORDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLOR_CELL\", function() { return COLOR_CELL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLOR_CELL_BORDER\", function() { return COLOR_CELL_BORDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BOARD_WIDTH\", function() { return BOARD_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BOARD_HEIGHT\", function() { return BOARD_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TILE_COLORS\", function() { return TILE_COLORS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TILE_LENGTH\", function() { return TILE_LENGTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TILE_TYPES\", function() { return TILE_TYPES; });\nconst KEY_LEFT = 37;\nconst KEY_RIGHT = 39;\nconst KEY_DOWN = 40;\nconst KEY_UP = 38;\nconst KEY_SPACE = 32;\n\n// Board\nconst COLOR_BOARD_BORDER = 'grey';\nconst COLOR_CELL = 'white';\nconst COLOR_CELL_BORDER = 'black';\nconst BOARD_WIDTH = 420;\nconst BOARD_HEIGHT = 600;\n\n\n// Tiles\nconst TILE_COLORS = ['greenyellow', 'cyan', 'gold', 'orangered', 'wheat', 'hotpink'];\nconst TILE_LENGTH = 30;\nconst TILE_TYPES = [\n    [\n      [1, 1],\n      [1, 1]\n    ],\n    [\n      [1, 1, 1],\n      [0, 1, 0]\n    ],\n    [\n        [1, 1, 0],\n        [0, 1, 1]\n    ],\n    [\n        [1, 1, 1, 1]\n    ],\n    [\n        [1, 1, 1],\n        [1, 0, 0]\n    ],\n    [\n        [1, 1],\n        [0, 1]\n    ],\n    [\n        [1, 1]\n    ]\n];\n\n//# sourceURL=webpack:///./app/js/base/constants.js?");

/***/ }),

/***/ "./app/js/base/utilities.js":
/*!**********************************!*\
  !*** ./app/js/base/utilities.js ***!
  \**********************************/
/*! exports provided: random, indexToOffset, offsetToIndex, rotateMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"indexToOffset\", function() { return indexToOffset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"offsetToIndex\", function() { return offsetToIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rotateMatrix\", function() { return rotateMatrix; });\nconst random = (lst) => {\n    return lst[Math.floor((Math.random() * lst.length))];\n};\n\nconst indexToOffset = (startOffset, index, step) => {\n        return startOffset + index * step; \n};\n\nconst offsetToIndex = (totalSpan, step) => {\n    return totalSpan / step;\n}\n\n// rotates the matrix clockwise around the bottom left element\nconst rotateMatrix  = (matrix) => {\n    const oldRows = matrix.length;\n    const oldCols = matrix[0].length;\n    const newRows = oldCols;\n    const newCols = oldRows;\n    let newMat = [];\n    for(let i=0; i < newRows; i++) {\n        let row = [];\n        for(let j=0; j < newCols; j++)\n            row.push(0);\n        newMat.push(row);\n    }\n    \n    let new_j = newCols-1;\n    for(let i=0; i<oldRows; i++) {\n        let new_i = 0;\n        const row = matrix[i];\n        let j = 0;\n        for(let item of row) {\n            newMat[new_i+j][new_j] = item;\n            j++;\n        }\n        new_j--;\n    }\n    \n//    for(let i = 0; i < matrix[0].length; i++) {\n//        for(let j = matrix.length - 1; j >= 0; j--) {\n//            newMat[i][j] = matrix[j][i];\n//        }\n//    }\n    \n    \n    return newMat;\n};\n\n//# sourceURL=webpack:///./app/js/base/utilities.js?");

/***/ }),

/***/ "./app/js/components/Board.js":
/*!************************************!*\
  !*** ./app/js/components/Board.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _base_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/constants */ \"./app/js/base/constants.js\");\n/* harmony import */ var _base_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/utilities */ \"./app/js/base/utilities.js\");\n\n\n\nclass Board {\n\n    constructor(ctx, x, y, width, height, color, colorBorder) {\n        this.ctx = ctx;\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.color = color;\n        this.colorBorder = colorBorder;\n        this.fillMatrix = [];\n        this.rows = this.height / _base_constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_LENGTH\"];\n        this.cols = this.width / _base_constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_LENGTH\"];\n        this.isBoardFull = false; // flag to check if the board is full\n\n        this.fillEmptyBoard();\n    }\n\n    fillEmptyBoard() {\n        for (let r = 0; r < this.rows; r++) {\n            if (!this.fillMatrix[r]) // if the row doesn't exist, push\n                this.fillMatrix.push([]);\n            for (let c = 0; c < this.cols; c++) {\n                if (!this.fillMatrix[r][c])\n                    this.fillMatrix[r].push([0, this.color]);\n                else\n                    this.fillMatrix[r][c] = [0, this.color];\n            }\n        }\n        this.isBoardFull = false;\n    }\n\n    reset() {\n        this.ctx.fillStyle = this.color;\n        this.ctx.strokeStyle = _base_constants__WEBPACK_IMPORTED_MODULE_0__[\"COLOR_BOARD_BORDER\"];\n        this.ctx.strokeRect(this.x, this.y, this.width, this.height);\n        this.ctx.fillRect(this.x, this.y, this.width, this.height);\n    }\n\n    draw() {\n        this.reset();\n        // draw all cells\n        for (let i = 0; i < this.rows; i++) {\n            for (let j = 0; j < this.cols; j++) {\n                this.ctx.strokeStyle = this.colorBorder;\n                this.ctx.fillStyle = this.fillMatrix[i][j][1];\n                const x = this.x + _base_constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_LENGTH\"] * j;\n                const y = this.y + _base_constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_LENGTH\"] * i;\n                //if (this.fillMatrix[i][j][0]) {\n                this.ctx.fillRect(x, y, _base_constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_LENGTH\"], _base_constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_LENGTH\"]);\n                //}\n\n                this.ctx.strokeRect(x, y, _base_constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_LENGTH\"], _base_constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_LENGTH\"]);\n            }\n        }\n    }\n\n    checkCollisions(currentTile) {\n        const lastRow = currentTile.boardPosition.row + currentTile.fillMatrix.length - 1;\n        const col = currentTile.boardPosition.cols;\n        let status = false;\n\n        // when a tile is spawned, the row value is 0 but the tile is \n        // above the board, this causes the collision to stay undetected till the tile is on the board, this is what this piece of code tests\n\n        if (this.fillMatrix[0][col][0]) {\n            // set boardFull\n            this.isBoardFull = true;\n            return true;\n        }\n\n\n\n        for (let cr = 0; cr < currentTile.rows; cr++) {\n            for (let cc = 0; cc < currentTile.cols; cc++) {\n                if (currentTile.fillMatrix[cr][cc]) {\n                    try {\n                        const cellRow = currentTile.boardPosition.row + cr;\n                        const cellCol = currentTile.boardPosition.cols + cc;\n\n                        // check cell to the left of tile\n                        try {\n                            //console.log(cc, this.fillMatrix[cellRow][cellCol-1][0]);\n                            \n                            if(cc === 0 && this.fillMatrix[cellRow][cellCol - 1][0]) {\n                               // console.log(\"LEFT COLLISION!\");\n                                currentTile.moveLocks.left = true; \n                                status = true;\n                                //return true;\n                            }\n                           // else\n                            //    currentTile.moveLocks.left = false;\n                            \n                            if(cc === currentTile.cols-1 && this.fillMatrix[cellRow][cellCol+1][0]) {\n                               // console.log(\"Right collision\");\n                                currentTile.moveLocks.right = true; \n                                status = true;\n                                //return true;\n                            }\n                            //else\n                            //    currentTile.moveLocks.right = false;\n                        }\n                        catch(err) {\n                           // console.log(err);\n                        }\n\n                        // check below cell\n                        if (cellRow + 1 === this.rows || this.fillMatrix[cellRow + 1][cellCol][0]) {\n                            currentTile.moveLocks.left = currentTile.moveLocks.right = false;\n                            return true;\n                        }\n                    } catch (err) {\n                        // Incase we exceed array bounds\n                    }\n                }\n            }\n        }\n        \n        return false;\n    }\n\n    printFillMatrix() {\n        for (let r of this.fillMatrix) {\n            var rstr = \"\";\n            for (let i of r) {\n                rstr += i[0] + \" \";\n            }\n           // console.log(rstr);\n        }\n    }\n\n    update(tile) {\n       // console.log(\"UPDATE BOARD.\");\n        for (let i = 0; i < tile.rows; i++) {\n            for (let j = 0; j < tile.cols; j++) {\n                if (tile.fillMatrix[i][j]) {\n                    if (tile.boardPosition.row + i < this.rows && tile.boardPosition.cols + j < this.cols) {\n                        this.fillMatrix[tile.boardPosition.row + i][tile.boardPosition.cols + j] = [1, tile.color];\n                    }\n                }\n            }\n        }\n        //this.printFillMatrix();\n    }\n\n    // Checks if any rows are completed and returns the number of rows completed\n\n    checkCompleteRows() {\n        let count = 0;\n        // check if a row has all entries as 1, if yes, push all rows above it down by one space\n        for (let i = 0; i < this.rows; i++) {\n            let complete = true;\n            for (let j = 0; j < this.cols; j++) {\n                if (this.fillMatrix[i][j][0] === 0)\n                    complete = false;\n            }\n            if (complete) {\n                //console.log(complete, i);\n                const emptyRow = i;\n                let k = emptyRow - 1;\n                for (k = emptyRow - 1; k >= 0; k--) {\n                    this.fillMatrix[k + 1] = this.fillMatrix[k];\n                }\n                if (k === -1) {\n                    this.fillMatrix[0] = [];\n                    for (let l = 0; l < this.cols; l++)\n                        this.fillMatrix[0].push([0, this.color]);\n                }\n                count++;\n            }\n        }\n        return count;\n    }\n}\n\n//# sourceURL=webpack:///./app/js/components/Board.js?");

/***/ }),

/***/ "./app/js/components/Tile.js":
/*!***********************************!*\
  !*** ./app/js/components/Tile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tile; });\n/* harmony import */ var _base_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/utilities */ \"./app/js/base/utilities.js\");\n\n\nclass Tile {\n    // Tile is defined by rows,cols and the fill matrix which \n    // specifies which cells must be colored/visible in the tile\n\n    // row and col specify the\n    constructor(ctx, x, y, fillMatrix, color, cellLength, row, col) {\n        this.x = x;\n        this.y = y;\n        this.color = color;\n        this.fillMatrix = fillMatrix;\n        this.rows = this.fillMatrix.length;\n        this.cols = this.fillMatrix[0].length;\n        this.length = cellLength;\n        this.ctx = ctx;\n        this.moveLocks = { // prevents move in that direction if the lock is present\n            left: false, \n            right: false\n        };\n        this.boardPosition = {\n            row: row,\n            cols: col\n        };\n        //console.log(this.boardPosition);\n        //console.log(this.fillMatrix);\n    }\n    \n\n    // valid directions are left,right and down\n    move(direction) {\n        let status = false;\n        // move each shape that is part of the tile in the appropriate direction\n        if (direction == 'left' && !this.moveLocks.left) {\n            //console.log(\"Moving left\");\n            if (this.boardPosition.cols - 1 >= 0) {\n                this.x -= this.length;\n                this.boardPosition.cols -= 1;\n                this.lastMove = 'left';\n                status = true;\n            }\n        }\n\n        if (direction == 'right' && !this.moveLocks.right) {\n            if (this.boardPosition.cols + this.fillMatrix[0].length-1 < 13) {\n                //console.log(\"Moving right\");\n                this.x += this.length;\n                this.boardPosition.cols += 1;\n                this.lastMove = 'right';\n                status = true;\n            }\n        }\n\n        if (direction == 'down') {\n            this.y += this.length;\n            if (this.y > 0)\n                this.boardPosition.row += 1;\n            this.lastMove = 'down';\n            status = true;\n        }\n        return status;\n    }\n\n    draw() {\n        // iterate through each cell and draw each cell\n        let numRow = 0;\n        for (let r of this.fillMatrix) {\n            let numCol = 0;\n            for (let c of r) {\n                if (c) {\n                    this.ctx.strokeStyle = 'black';\n                    this.ctx.fillStyle = this.color;\n                    const cell = {};\n                    cell['x'] = this.x + numCol * this.length;\n                    cell['y'] = this.y + numRow * this.length;\n                    //console.log('draw() cell: ', cell);\n                    // first draw border and then fill tile, gives a nice effect when the tile freezes\n                    this.ctx.strokeRect(cell.x, cell.y, this.length, this.length);\n                    this.ctx.fillRect(cell.x, cell.y, this.length, this.length);\n                }\n                //console.log(numRow, numCol);\n                numCol++;\n            }\n            numRow++;\n        }\n    }\n\n    rotate(board) {\n        let status = true;\n        const oldMatrix = this.fillMatrix;\n        this.fillMatrix = _base_utilities__WEBPACK_IMPORTED_MODULE_0__[\"rotateMatrix\"](this.fillMatrix);\n        this.rows = this.fillMatrix.length;\n        this.cols = this.fillMatrix[0].length;\n        \n        // check if new fill matrix collides with anything in the board\n        \n        for(let cr = 0; cr < this.rows; cr++) {\n            for(let cc=0; cc < this.cols; cc++) {\n                let cellRow = this.boardPosition.row + cr; \n                let cellCol = this.boardPosition.cols + cc;\n                if(this.fillMatrix[cr][cc] == board.fillMatrix[cellRow][cellCol] || cellCol > board.cols || cellRow > board.rows) {\n                    // cell already full, reverse rotate!\n                    this.fillMatrix = oldMatrix;\n                    this.rows = oldMatrix.length;\n                    this.cols = oldMatrix[0].length;\n                }\n            }\n        }\n        \n        // rotate fillMatrix\n        // update rows\n        // update cols\n    }\n}\n\n//# sourceURL=webpack:///./app/js/components/Tile.js?");

/***/ }),

/***/ "./app/js/controllers/GameController.js":
/*!**********************************************!*\
  !*** ./app/js/controllers/GameController.js ***!
  \**********************************************/
/*! exports provided: gameData, spawnTile, update, handleInput, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameData\", function() { return gameData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spawnTile\", function() { return spawnTile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleInput\", function() { return handleInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _base_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/utilities */ \"./app/js/base/utilities.js\");\n/* harmony import */ var _base_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/constants */ \"./app/js/base/constants.js\");\n/* harmony import */ var _components_Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tile */ \"./app/js/components/Tile.js\");\n/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Board */ \"./app/js/components/Board.js\");\n/* harmony import */ var _ScoreController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScoreController */ \"./app/js/controllers/ScoreController.js\");\n\n\n\n\n\n\nvar gameData = {\n    gameSpeed: 15, // time in s for one tile to fall down\n};\n\n//var sounds = {\n//    lineclear: new Audio('../sounds/rotate.wav'),\n//    rotate: new Audio('../sounds/lineclear.wav'),\n//    touchdown: new Audio('../sounds/touchdown.wav'),\n//    pop: new Audio('../sounds/pop.wav')\n//};\n\nconst generateRandomTile = (ctx) => {\n    // Generate color \n    const color = _base_utilities__WEBPACK_IMPORTED_MODULE_0__[\"random\"](_base_constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_COLORS\"]);\n    // get column randomly \n    let boardCol = Math.floor(Math.random() * (gameData.board.cols));\n    const tileType = _base_utilities__WEBPACK_IMPORTED_MODULE_0__[\"random\"](_base_constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_TYPES\"]);\n    \n    let delta = boardCol + tileType[0].length - gameData.board.cols;\n    \n    // if the tile exceeds bounds, adjust it again\n    if(delta > 0)\n        boardCol = boardCol - delta;\n    \n    const pos = {\n        x: gameData.board.x + boardCol * _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_LENGTH\"],\n        y: 0\n    };\n    let tile = new _components_Tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, pos.x, pos.y - _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_LENGTH\"] * 2, tileType, color, _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_LENGTH\"],\n        _base_utilities__WEBPACK_IMPORTED_MODULE_0__[\"offsetToIndex\"](pos.y, _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_LENGTH\"]), _base_utilities__WEBPACK_IMPORTED_MODULE_0__[\"offsetToIndex\"](pos.x, _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_LENGTH\"]));\n    \n    return tile;\n}\n\nconst spawnTile = (ctx) => {\n    if(gameData.nextTile) {\n        gameData.currentTile = gameData.nextTile;\n        gameData.nextTile = generateRandomTile(ctx);   \n    }   \n    else {\n        gameData.currentTile = generateRandomTile(ctx);\n        gameData.nextTile = generateRandomTile(ctx);\n    }\n};\n\nconst showNextTile = (ctx) => {\n     // TODO: hacky way, change it\n    const oldPos = {\n        x: gameData.nextTile.x,\n        y: gameData.nextTile.y\n    };\n    \n    gameData.nextTile.x = _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"BOARD_WIDTH\"] + _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_LENGTH\"]*3; \n    gameData.nextTile.y = _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"BOARD_HEIGHT\"] - _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_LENGTH\"]*3;\n    gameData.nextTile.draw();\n    // reset \n    gameData.nextTile.x = oldPos.x; \n    gameData.nextTile.y = oldPos.y;\n};\n\nconst update = (ctx) => {\n    if (gameData.updateLock) // check if update() is locked\n        return;\n\n    //if(gameData.currentTile.boardPosition.row === 1)\n    //    gameData.updateLock = true;\n\n    // draw board\n    const completeRows = gameData.board.checkCompleteRows();\n    //if (completeRows > 0)\n        //sounds.lineclear.play();\n    gameData.score += completeRows * 10 + (completeRows > 1 ? (completeRows * 4) : 0);\n    // draw board TODO: FIX THIS\n    _ScoreController__WEBPACK_IMPORTED_MODULE_4__[\"updateScore\"](ctx, gameData.score);\n    // show next time\n    //showNextTile(ctx);\n    gameData.board.draw();\n    gameData.currentTile.draw();\n    // print score\n    //console.log(\"SCORE: \", gameData.score);\n    // check collisions\n    const collisionStatus = gameData.board.checkCollisions(gameData.currentTile);\n    if (gameData.board.isBoardFull)\n        gameData.board.fillEmptyBoard();\n\n    //console.log(collisionStatus);\n    if (collisionStatus) {\n        //console.log(\"Collision!\");\n        // update board fill matrix\n        //sounds.touchdown.play();\n        gameData.board.update(gameData.currentTile);\n        //gameData.currentTile.draw();\n        gameData.board.draw();\n        // reset last move otherwise the new tile won't drop down\n        gameData.lastMove = '';\n        // spawn new tile\n        spawnTile(ctx);\n    } else {\n        // draw current tile \n        gameData.currentTile.draw();\n        if (gameData.lastMove !== 'down')\n            gameData.currentTile.move('down');\n        else\n            gameData.lastMove = '';\n    }\n    //showNextTile();\n}\n\nconst handleInput = (keyCode) => {\n\n    function moveTile(direction) {\n        if (direction === 'rotate') {\n//            sounds.rotate.pause();\n//            sounds.rotate.currentTime = 0;\n//            sounds.rotate.play();\n            gameData.updateLock = true;\n            // check if rotation is possible and only then rotate\n            gameData.currentTile.rotate(gameData.board);\n            gameData.board.draw();\n            gameData.currentTile.draw();\n            //gameData.updateLock = false;\n        }\n        if (!gameData.board.checkCollisions(gameData.currentTile)) {\n//            sounds.pop.pause();\n//            sounds.pop.currentTime = 0;\n//            sounds.pop.play();\n            gameData.updateLock = true;\n            //console.log(\"moveLocks\", gameData.currentTile.moveLocks);\n            // only if move happens, update stuff\n            if (gameData.currentTile.move(direction)) {\n                gameData.lastMove = direction;\n                gameData.board.draw();\n                gameData.currentTile.draw();\n                // reset locks, otherwise the tile won't move horizontally\n                gameData.currentTile.moveLocks = {\n                    left: false,\n                    right: false\n                };\n            }\n            //gameData.updateLock = false;\n        }\n    }\n\n    if (keyCode === _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY_UP\"]) {\n        moveTile('rotate');\n    }\n\n    if (keyCode === _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY_DOWN\"]) {\n        moveTile('down');\n    }\n\n    if (keyCode === _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY_LEFT\"]) {\n        moveTile('left');\n    }\n\n    if (keyCode === _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY_RIGHT\"]) {\n        moveTile('right');\n    }\n}\n\n//export const pause = () => {\n//    \n//};\n\n\nconst init = (ctx) => {\n    gameData.board = new _components_Board__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx, 0, 0, _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"BOARD_WIDTH\"], _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"BOARD_HEIGHT\"], _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"COLOR_CELL\"], _base_constants__WEBPACK_IMPORTED_MODULE_1__[\"COLOR_CELL_BORDER\"]);\n    gameData.score = 0;\n    gameData.ctx = ctx;\n    gameData.updateLock = false;\n    spawnTile(ctx);\n};\n\n//# sourceURL=webpack:///./app/js/controllers/GameController.js?");

/***/ }),

/***/ "./app/js/controllers/InputController.js":
/*!***********************************************!*\
  !*** ./app/js/controllers/InputController.js ***!
  \***********************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _base_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/constants */ \"./app/js/base/constants.js\");\n/* harmony import */ var _controllers_GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/GameController */ \"./app/js/controllers/GameController.js\");\n\n\n\nvar keyPressed = false;\n\nconst init = () => {\n    document.addEventListener('keydown', (event) => {\n//        if (event.keyCode == Constants.KEY_SPACE) {\n//            console.log(\"pause\");\n//            GameController.pause();\n//        } else {\n            _controllers_GameController__WEBPACK_IMPORTED_MODULE_1__[\"handleInput\"](event.keyCode);\n        //}\n    });\n\n    document.addEventListener('keyup', (event) => {\n        //console.log(\"KEYUP\");\n        function removeLock() {\n            setTimeout(() => {\n                _controllers_GameController__WEBPACK_IMPORTED_MODULE_1__[\"gameData\"].updateLock = false;\n            }, 200);\n        }\n        if (event.keyCode === _base_constants__WEBPACK_IMPORTED_MODULE_0__[\"KEY_UP\"]) {\n            removeLock();\n        }\n        if (event.keyCode === _base_constants__WEBPACK_IMPORTED_MODULE_0__[\"KEY_DOWN\"]) {\n            removeLock();\n        }\n        if (event.keyCode === _base_constants__WEBPACK_IMPORTED_MODULE_0__[\"KEY_LEFT\"]) {\n            removeLock();\n        }\n        if (event.keyCode == _base_constants__WEBPACK_IMPORTED_MODULE_0__[\"KEY_RIGHT\"]) {\n            removeLock();\n        }\n    });\n}\n\n//# sourceURL=webpack:///./app/js/controllers/InputController.js?");

/***/ }),

/***/ "./app/js/controllers/ScoreController.js":
/*!***********************************************!*\
  !*** ./app/js/controllers/ScoreController.js ***!
  \***********************************************/
/*! exports provided: updateScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateScore\", function() { return updateScore; });\nconst updateScore = (ctx, score) => {\n    ctx.fillStyle = 'black';\n    ctx.fillRect(420, 0, 600-420, ctx.canvas.height); // TODO: Remove hardcoded values\n    ctx.fillStyle = 'gold';\n    ctx.font = '30px serif';\n    ctx.fillText(`SCORE: ${score}`, 3 * (ctx.canvas.width/4), 100);\n};\n\n//# sourceURL=webpack:///./app/js/controllers/ScoreController.js?");

/***/ }),

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/constants */ \"./app/js/base/constants.js\");\n/* harmony import */ var _components_Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Tile */ \"./app/js/components/Tile.js\");\n/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Board */ \"./app/js/components/Board.js\");\n/* harmony import */ var _controllers_GameController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/GameController */ \"./app/js/controllers/GameController.js\");\n/* harmony import */ var _controllers_ScoreController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/ScoreController */ \"./app/js/controllers/ScoreController.js\");\n/* harmony import */ var _controllers_InputController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/InputController */ \"./app/js/controllers/InputController.js\");\n// TODO:\n// Remove hardcoded values\n\n\n\n\n\n\n\n\n\nconsole.log(\"Starting Tetris!\");\nconst canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext('2d');\ninit();\n\n\nfunction init() {\n    _controllers_InputController__WEBPACK_IMPORTED_MODULE_5__[\"init\"]();\n    _controllers_GameController__WEBPACK_IMPORTED_MODULE_3__[\"init\"](ctx);\n}\n\n\nvar count = 0;\nvar frames = 0;\n\n\nvar globalId = 0;\n\nfunction gameLoop() {\n    if(frames == 30) {\n        window.cancelAnimationFrame(globalId);\n        if(!_controllers_GameController__WEBPACK_IMPORTED_MODULE_3__[\"gameData\"].updateLock)\n            resetCanvas();\n        _controllers_GameController__WEBPACK_IMPORTED_MODULE_3__[\"update\"](ctx);\n        frames=0;\n    }\n    frames++;\n    globalId = window.requestAnimationFrame(gameLoop);\n};\n\n\nfunction resetCanvas() {\n    ctx.save();\n    ctx.fillStyle = 'black';\n    ctx.fillRect(0,0,canvas.width, canvas.height);\n    ctx.restore();\n}\n\nwindow.gameLoop = gameLoop;\nglobalId = window.requestAnimationFrame(gameLoop);\nwindow.globalId = globalId; \n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ })

/******/ });