"use strict";

var Piece = require('./Piece');
var Utils = require('../Utils');

module.exports = class Pawn extends Piece {
  constructor (pos, color, board) {
    super(pos, color, board);
    this.hasMoved = false;

    this.moveDirections = []

    this.moves = () => {
      var moveList = [];

      if (!this.hasMoved) {

      }
    };
  }
};
