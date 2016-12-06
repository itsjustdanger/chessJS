var test = require('tape');
var Board = require('../../src/js/Board');

test('Get array of legal moves for selected Pawn', (t) => {
  var board = new Board();
  var pawn = board.getPiece('e2');

  t.plan(1);
  t.deepEqual(pawn.moves(), ['e3', 'e4']);
});
