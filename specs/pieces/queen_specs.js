var test = require('tape');
var Board = require('../../src/js/Board');

test('Queens return array of possible legal moves.', (t) => {
  var board = new Board();
  var whiteQueen = board.getPiece('d1');
  var blackQueen = board.getPiece('d8');

  board.move('d1', 'd4');
  board.move('d8', 'e6');

  t.plan(2);
  t.deepEqual(whiteQueen.moves(),
              [ 'c3', 'c5', 'b6', 'a7',
                'e3', 'e5', 'f6', 'g7',
                'd5', 'd6', 'd7', 'd3',
                'e4', 'f4', 'g4', 'h4',
                'c4', 'b4', 'a4' ]);
  t.deepEqual(blackQueen.moves(),
              [ 'd5', 'c4', 'b3', 'a2',
                'f5', 'g4', 'h3', 'e5',
                'e4', 'e3', 'e2', 'f6',
                'g6', 'h6', 'd6', 'c6',
                'b6', 'a6' ]);
});
