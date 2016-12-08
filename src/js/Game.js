"use strict";

var Board = require('./Board');
var Player = require('./Player');
var Utils = require('./Utils');

module.exports = class Game {
  constructor(boardWidth, boardHeight) {
    this.playerWhite = new Player('white', this);
    this.playerBlack = new Player('black', this);
    this.board = new Board(boardWidth, boardHeight, this);
    this.currentPlayer = this.playerWhite;

    this.associatePieces(this.playerWhite);
    this.associatePieces(this.playerBlack);
  }

  associatePieces(player) {
    this.board.ranks.forEach((rank) => {
      rank.forEach((piece) => {
        if (piece && piece.color === player.color) {
          player.pieces.push(piece);

          if (piece.constructor.name === 'King') {
            player.king = piece;
          }
        }
      });
    });
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

  playerInCheck(player) {
    var king = player.king;
    var opponent
    var checked = false;

    if (this.playerWhite.color === player.color) {
      opponent = this.playerBlack;
    } else {
      opponent = this.playerWhite;
    }

    opponent.pieces.forEach((piece) => {

      if (piece.moves().includes(Utils.toAlg(king.pos))) {
        checked = true;
      }
    })

    return checked;
  }
};
