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
      return this.pos.rank * (this.board.width / 8);
    }


    /**
     * Returns the piece's y coordinate based on its current rank and the
     * board's dimensions.
     */
    this.displayY = () => {
      console.log(this.pos.file)
      return this.board.height - ((this.pos.file + 1) * (this.board.height / 8));
    }
  }
};
