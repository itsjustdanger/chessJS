
var test = require('tape');
var Helpers = require('./helpers/board_helpers.js');
var Board = require('../src/Board.js');


test('Board populates 8x8 grid on creation', (t) => {
  var board = new Board();
  var ranks = board.ranks.length;
  var files = board.ranks[0].length;

  t.plan(2);

  t.equal(ranks, 8);
  t.equal(files, 8);
});

test('Board sets up white pawns on each file in rank 2', (t) => {
  var board = new Board();

  t.plan(1);
  t.ok(Helpers.checkPawns(board, 'white'));
})

test('Board sets up black pawns on each file in rank 6', (t) => {
  var board = new Board();

  t.plan(1);
  t.ok(Helpers.checkPawns(board, 'black'));
})
