/*
const middle = require("../middle.js");

const assertArraysEqual = require("../assertArraysEqual.js");



assertArraysEqual(middle(["a", "b", "c", "d"]), ["b", "c"]);
assertArraysEqual(middle(["a", "b", "c", "d"]), ["a", "c"]);
*/

const assert = require('chai').assert;
const  middle  = require('../middle');

describe("#middle", () => {
  it('returns ["b", "c"] for ["a", "b", "c", "d"]', () => {
    assert.deepEqual(middle(["a", "b", "c", "d"]), ["b", "c"]);
  });

   it("returns [ 'Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
     assert.deepEqual(middle(['Hello', 'Lighthouse', 'Labs']), [ 'Lighthouse']);
   });

   it('returns [5, 6] for [4, 5, 6, 7]', () => {
    assert.deepEqual(middle([4, 5, 6, 7]), [5, 6]);
  });

});