var test = require('tape');
var Board = require('../../src/js/Board');

test('Get array of possible legal moves for selected white Pawn', (t) => {
  var board = new Board();
  var pawn = board.getPiece('e2');

  t.plan(1);

  t.deepEqual(pawn.moves(), ['e3', 'e4']);
});

test('Get array of possible legal moves for selected black Pawn', (t) => {
  var board = new Board();
  var pawn = board.getPiece('e7');

  t.plan(1);

  t.deepEqual(pawn.moves(), ['e6', 'e5']);
});

test('Possible pawn moves do not include out of bounds ranks', (t) => {
  var board = new Board();
  var whitePawn = board.getPiece('e2');
  var blackPawn = board.getPiece('e7');

  whitePawn.hasMoved = true;
  blackPawn.hasMoved = true;

  board.setPiece('e8', whitePawn);
  board.setPiece('e1', blackPawn);

  t.plan(2);

  t.deepEqual(whitePawn.moves(), []);
  t.deepEqual(blackPawn.moves(), []);
});

test('Possible pawn moves do not include obstructed squares', (t) => {
  var board = new Board();
  var whitePawn = board.getPiece('e2');
  var blackPawn = board.getPiece('e7');

  board.move('e2', 'e4');
  board.move('e7', 'e5');

  t.plan(2);

  t.ok(!whitePawn.moves().includes('e5'), 'white pawn cannot move to e5');
  t.ok(!blackPawn.moves().includes('e4'), 'black pawn cannot move to e4');
});

test('Possible pawn moves include diagonal captures', (t) => {
  var board = new Board();
  var whitePawn = board.getPiece('e2');
  var blackPawn = board.getPiece('d7');
  var whiteMoves, blackMoves;

  board.move('e2', 'e4');
  board.move('d7', 'd5');

  t.plan(2);

  t.ok(whitePawn.moves().includes('d5'), 'white pawn can capture diagonally')
  t.ok(blackPawn.moves().includes('e4'), 'black pawn can capture diagonally')
});
