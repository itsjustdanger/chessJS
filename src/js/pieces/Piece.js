"use strict";

module.exports = class Piece {
  constructor(pos, color, board) {
    this.pos = pos;
    this.color = color;
    this.board = board;


    /**
     * Returns the piece's x coordinate based on its current rank and the
     * board's dimensions.
     * @returns {Number} display value for the x coord.
     */
    this.displayX = () => {
      return this.pos.file * (this.board.width / 8);
    };


    /**
     * Returns the piece's y coordinate based on its current rank and the
     * board's dimensions.
     * @returns {Number} display value for the y coord.
     */
    this.displayY = () => {
      var squareHeight = this.board.height / 8;
      return this.board.height - ((this.pos.rank + 1) * squareHeight);
    };


    /**
     * Returns true if a friendly piece is on the given square.
     * @param {String} alg - Algorithmic coordinate
     * @returns {Boolean} Returns whether a friendly piece is on a given square.
     */
    this.occupiedByFriendly = (alg) => {
      var piece = this.board.getPiece(alg);

      return (piece && (piece.color === this.color));
    };


    /**
     * Retruns true if an enemy piece is on the given square.
     * @param {String} alg - Algorithmic coordinate
     * @returns {Boolean} Returns whether an enemy piece is on a given square.
     */
    this.occupiedByEnemy = (alg) => {
      var piece = this.board.getPiece(alg);

      return (piece && (piece.color !== this.color));
    };
  }
};
