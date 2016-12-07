"use strict";

var Piece = require('./Piece');
var Utils = require('../Utils');

module.exports = class Rook extends Piece {
  constructor (pos, color, board) {
    super(pos, color, board);

    this.moves = () => {

    };
  }
};
