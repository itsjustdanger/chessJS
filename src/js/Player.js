"use strict";

var Pieces = require('./pieces/Pieces');

module.exports = class Player {
  constructor(color, board) {
    this.color = color;
    this.board = board;
  }
};
