"use strict";

var Board = require('./Board');
var Player = require('./Player');

module.exports = class Game {
  constructor(boardWidth, boardHeight) {
    this.playerWhite = new Player('white', this);
    this.playerBlack = new Player('black', this);
    this.board = new Board(boardWidth, boardHeight, this);
    this.currentPlayer = this.playerWhite;
  }

  move(player, origin, dest) {
    var piece = this.board.getPiece(origin);

    if (piece && piece.color === player.color && this.isValidMove(origin, dest)) {

      this.board.move(origin, dest);

      return true;
    }

    return false;
  }

  isValidMove(origin, dest) {
    var piece = this.board.getPiece(origin);
    var moves = piece.moves();

    return moves.includes(dest);
  }
};
