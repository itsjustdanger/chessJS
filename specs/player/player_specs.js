var test = require('tape');
var Player = require('../../src/js/Player');
var Board = require('../../src/js/Board');
var Helpers = require('../helpers/board_helpers.js');

var FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

test('New Player initializes with given color', (t) => {
  var board = new Board;
  var player = new Player('white', board);

  t.plan(1);

  t.equal(player.color, 'white');
});
