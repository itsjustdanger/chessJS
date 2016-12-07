
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


test('Board sets up pieces', (t) => {
  var board = new Board();

  t.plan(12);

  t.ok(Helpers.checkPawns(board, 'white'), 'white pawns set up correctly');
  t.ok(Helpers.checkPawns(board, 'black'), 'black pawns set up correctly');
  t.ok(Helpers.checkRooks(board, 'white'), 'white rooks set up correctly');
  t.ok(Helpers.checkRooks(board, 'black'), 'black rooks set up correctly');
  t.ok(Helpers.checkKnights(board, 'white'), 'white knights set up correctly');
  t.ok(Helpers.checkKnights(board, 'black'), 'black knights set up correctly');
  t.ok(Helpers.checkBishops(board, 'white'), 'white bishops set up correctly');
  t.ok(Helpers.checkBishops(board, 'black'), 'black bishops set up correctly');
  t.ok(Helpers.checkQueen(board, 'white'), 'white queen set up correctly');
  t.ok(Helpers.checkQueen(board, 'black'), 'black queen set up correctly');
  t.ok(Helpers.checkKing(board, 'white'), 'white king set up correctly');
  t.ok(Helpers.checkKing(board, 'black'), 'black king set up correctly');
});
