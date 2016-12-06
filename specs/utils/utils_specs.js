var test = require('tape');
var Utils = require('../../src/js/Utils');

test('Utils converts coords to algs', (t) => {
  t.plan(4);

  t.equal(Utils.coordsToAlg({rank: 2, file: 2}), 'c3', 'converts legal coords');
  t.equal(Utils.coordsToAlg({rank: 10, file: 2}), false, 'does not convert illegal ranks');
  t.equal(Utils.coordsToAlg({rank: 4, file: 10}), false, 'does not convert illegal files');
  t.equal(Utils.coordsToAlg({rank: 10, file: 10}), false, 'does not convert illegal ranks and files');
});

test('Utils converts algs to coords', (t) => {
  t.plan(4);

  t.deepEqual(Utils.algToCoords('c3'), {rank: 2, file: 2}, 'converts to legal alg');
  t.equal(Utils.algToCoords('i3'), false, 'does not convert illegal files');
  t.equal(Utils.algToCoords('b10'), false, 'does not convert illegal ranks');
  t.equal(Utils.algToCoords('j10'), false, 'does not convert illegal ranks and files');
});

test('Utils checks whether square is in bounds', (t) => {
  t.plan(4);

  t.ok(Utils.inBounds('a4'), 'returns true for legal alg');
  t.ok(Utils.inBounds({rank: 3, file: 4}), 'returns true for legal coords');
  t.ok(!Utils.inBounds('a9'), 'returns false for illegal alg');
  t.ok(!Utils.inBounds({rank: 9, file: 3}), 'returns false for illegal coords');
});
