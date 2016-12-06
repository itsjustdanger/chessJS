
var test = require('tape');
var Helpers = require('../helpers/board_helpers.js');
var Board = require('../../src/js/Board.js');


test('Board populates 8x8 grid on creation', (t) => {
  var board = new Board();
  var files = board.ranks.length;
  var ranks = board.ranks[0].length;

  t.plan(2);

  t.equal(ranks, 8);
  t.equal(files, 8);
});

test('Board sets up pawns in correct positions', (t) => {
  var board = new Board();

  t.plan(2);
  t.ok(Helpers.checkPawns(board, 'white'), 'white pawns are set up correctly');
  t.ok(Helpers.checkPawns(board, 'black'), 'black pawns are set up correctly');
});

test('Board sets up rooks in correct positions', (t) => {
  var board = new Board();

  t.plan(2);
  t.ok(Helpers.checkRooks(board, 'white'), 'white rooks are set up correctly');
  t.ok(Helpers.checkRooks(board, 'black'), 'black rooks are set up correctly');
});

test('Board sets up knights in the correct positions', (t) => {
  var board = new Board();

  t.plan(2);

  t.ok(Helpers.checkKnights(board, 'white'), 'white knights are set up correctly');
  t.ok(Helpers.checkKnights(board, 'black'), 'black knights are set up correctly');
});

test('Board sets up bishops in the correct positions', (t) => {
  var board = new Board();

  t.plan(2);

  t.ok(Helpers.checkBishops(board, 'white'), 'white bishops are set up correctly');
  t.ok(Helpers.checkBishops(board, 'black'), 'black bishops are set up correctly');
});

test('board sets up queens in the correct positions', (t) => {
  var board = new Board();

  t.plan(2);

  t.ok(Helpers.checkQueen(board, 'white'), 'white queen is set up correctly');
  t.ok(Helpers.checkQueen(board, 'black'), 'black queen is set up correctly');
});

test('board sets up kings in the correct positions', (t) => {
  var board = new Board();

  t.plan(2);

  t.ok(Helpers.checkKing(board, 'white'), 'white king is set up correctly');
  t.ok(Helpers.checkKing(board, 'black'), 'black king is set up correctly');
})
