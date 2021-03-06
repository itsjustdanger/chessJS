"use strict";

var Pieces = require('./pieces/Pieces');

module.exports = class Player {
  constructor(color, game) {
    this.color = color;
    this.game = game;
    this.pieces = [];
    this.king = null;
  }

  move(origin, dest) {
    if (this.game.move(this, origin, dest)) {
      return true;
    }

    return false;
  };
};
