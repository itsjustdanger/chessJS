var test = require('tape');
var Player = require('../../src/js/Player');

test('New Player initializes with given color', (t) => {
  var player = new Player('white');

  t.plan(1);

  t.equal(player.color, 'white');
});
