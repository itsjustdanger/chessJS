"use strict";

var Board = require('./Board');
var Player = require('./Player');

module.exports = class Game {
  constructor(boardWidth, boardHeight) {
    this.board = new Board(boardWidth, boardHeight);
    this.playerWhite = new Player('white');
    this.playerBlack = new Player('black');
    this.currentPlayer = this.playerWhite;
  }
};
