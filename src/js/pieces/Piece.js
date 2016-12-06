"use strict";

module.exports = class Piece {
  constructor(pos, color, board) {
    this.pos = pos;
    this.color = color;
    this.board = board;


    /**
     * Returns the piece's x coordinate based on its current rank and the
     * board's dimensions.
     */
    this.displayX = () => {
      return this.pos.file * (this.board.width / 8);
    };


    /**
     * Returns the piece's y coordinate based on its current rank and the
     * board's dimensions.
     */
    this.displayY = () => {
      return this.board.height - ((this.pos.rank + 1) * (this.board.height / 8));
    };

    this.moves = () => {};


    /**
     * Returns true if a friendly piece is on the given square.
     */
    this.occupiedByFriendly = (alg) => {
      var piece = this.board.getPiece(alg);

      return (piece && (piece.color === this.color));
    };


    /**
     * Retruns true if an enemy piece is on the given square.
     */
    this.occupiedByEnemy = (alg) => {
      var piece = this.board.getPiece(alg);

      return (piece && (piece.color !== this.color));
    };
  }
};
