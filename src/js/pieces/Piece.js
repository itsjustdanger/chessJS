"use strict";

var Utils = require('../Utils');

module.exports = class Piece {
  constructor(pos, color, board) {
    this.board = board;
    this.color = color;
    this.pos = pos;
    this.hasMoved = false;
  }


  /**
   * Returns the piece's x coordinate based on its current rank and the
   * board's dimensions.
   * @returns {Number} display value for the x coord.
   */
  displayX() {
    return this.pos.file * (this.board.width / 8);
  }

  /**
   * Returns the piece's y coordinate based on its current rank and the
   * board's dimensions.
   * @returns {Number} display value for the y coord.
   */
  displayY() {
    var squareHeight = this.board.height / 8;
    return this.board.height - ((this.pos.rank + 1) * squareHeight);
  }

  /**
  * Returns true if a friendly piece is on the given square.
  * @param {Array} coords - Cartesian coordinates
  * @returns {Boolean} Returns whether a friendly piece is on a given square.
  */
  occupiedByFriendly(coords) {
    var piece = this.board.getPiece(Utils.toAlg(coords));

    return (piece && (piece.color === this.color));
  }

  /**
  * Retruns true if an enemy piece is on the given square.
  * @param {Array} coords - Cartesian coordinate
  * @returns {Boolean} Returns whether an enemy piece is on a given square.
  */
  occupiedByEnemy(coords) {
    var piece = this.board.getPiece(Utils.toAlg(coords));

    return (piece && (piece.color !== this.color));
  }

  render() {
    var styles =
      `transform: translate(${this.displayX()}px, ${this.displayY()}px)`;

    if (typeof this.domElement === 'undefined') {
      this.domElement = document.createElement('piece');
      this.domElement.className = `${this.constructor.name} ${this.color}`;
    }
    this.domElement.styles = styles;
  }
};
