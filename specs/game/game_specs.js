var test = require('tape');
var Game = require('../../src/js/Game.js');

test('Game newGame initializes a new game.', (t) => {
  var game = new Game();

  t.plan(4);

  t.equal(game.playerWhite.color, 'white', 'set up playerWhite');
  t.equal(game.playerBlack.color, 'black', 'set up playerBlack');
  t.equal(game.board.constructor.name, 'Board', 'set up game board');
  t.equal(game.currentPlayer, game.playerWhite, 'white to move');
});
