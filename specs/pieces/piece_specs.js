var test = require('tape');
var Board = require('../../src/js/Board');

test('Get array of possible legal moves for selected white Pawn', (t) => {
  var board = new Board();
  var pawn = board.getPiece('e2');

  t.plan(1);
  t.deepEqual(pawn.moves(), ['e3', 'e4']);
});

test ('Get array of possible legal moves for selected black Pawn', (t) => {
  var board = new Board();
  var pawn = board.getPiece('e7');

  t.plan(1);
  t.deepEqual(pawn.moves(), ['e6', 'e5']);
})
