var test = require('tape');
var Utils = require('../../src/js/Utils');

test('Utils converts legal coords to algs', (t) => {
  t.plan(4);

  t.equal(Utils.toAlg({rank: 2, file: 2}), 'c3');
  t.equal(Utils.toAlg({rank: 0, file: 0}), 'a1');
  t.equal(Utils.toAlg({rank: 7, file: 5}), 'f8');
  t.equal(Utils.toAlg({rank: 3, file: 4}), 'e4');
});


test('Utils returns false for illegal coords.', (t) => {
  t.plan(3);

  t.equal(Utils.toAlg({rank: 10, file: 2}), false, 'does not convert illegal ranks');
  t.equal(Utils.toAlg({rank: 4, file: 10}), false, 'does not convert illegal files');
  t.equal(Utils.toAlg({rank: 10, file: 9}), false, 'does not convert illegal ranks and files');
});


test('Utils converts legal algs to coords', (t) => {
  t.plan(4);

  t.deepEqual(Utils.toCoords('a1'), {rank: 0, file: 0}, 'converts to legal alg');
  t.deepEqual(Utils.toCoords('c8'), {rank: 7, file: 2}, 'converts to legal alg');
  t.deepEqual(Utils.toCoords('f4'), {rank: 3, file: 5}, 'converts to legal alg');
  t.deepEqual(Utils.toCoords('d4'), {rank: 3, file: 3}, 'converts to legal alg');
});


test('Utils returns fals for illegal algs.', (t) => {
  t.plan(3);

  t.equal(Utils.toCoords('i3'), false, 'does not convert illegal files');
  t.equal(Utils.toCoords('b10'), false, 'does not convert illegal ranks');
  t.equal(Utils.toCoords('j10'), false, 'does not convert illegal ranks and files');
});

test('Utils checks whether square is in bounds', (t) => {
  t.plan(4);

  t.ok(Utils.inBounds('a4'), 'returns true for legal alg');
  t.ok(Utils.inBounds({rank: 3, file: 4}), 'returns true for legal coords');
  t.ok(!Utils.inBounds('a9'), 'returns false for illegal alg');
  t.ok(!Utils.inBounds({rank: 9, file: 3}), 'returns false for illegal coords');
});
