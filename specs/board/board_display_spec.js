"use strict";

var test = require('tape');
var Game = require('../../src/js/Game');

test('Kings are given correct positions', (t) => {
  var game = new Game(800, 800);
  var board = game.board;
  var whiteKing = board.ranks[0][4];
  var blackKing = board.ranks[7][4];
  var squareWidth = board.width / 8;
  var squareHeight = board.height / 8;

  t.plan(4);

  t.equals( whiteKing.displayX(),
            (squareWidth * 4),
            'white king has correct x coord');
  t.equals( whiteKing.displayY(),
            (squareHeight * 7),
            'white king has correct y coord');
  t.equals( blackKing.displayX(),
            (squareWidth * 4),
            'black king has correct x coord');
  t.equals( blackKing.displayY(),
            (squareHeight * 0),
            'black king has correct y coord');
});
