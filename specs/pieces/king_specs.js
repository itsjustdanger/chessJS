var test = require('tape');
var Board = require('../../src/js/Board');

test('King moves returns array of possible legal moves.', (t) => {
  var board = new Board();
  var whiteKing = board.getPiece('e1');
  var blackKing = board.getPiece('e8');

  board.move('e1', 'e3');
  board.move('e8', 'e6');

  t.plan(2);

  t.deepEqual(whiteKing.moves(), [ 'e4', 'f4', 'd4', 'f3', 'd3' ]);
  t.deepEqual(blackKing.moves(), [ 'e5', 'd5', 'f5', 'f6', 'd6' ]);
});
