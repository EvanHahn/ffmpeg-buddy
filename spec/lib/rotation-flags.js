var rotation = require('../../app/lib/rotation-flags')
var assert = require('assert')

describe('rotation flags', function () {
  it('does nothing if with an input of "none"', function () {
    assert.deepStrictEqual(rotation([1], 'none'), [1])
  })

  it('appends the flags for other inputs', function () {
    assert.deepStrictEqual(rotation([1], '90º clockwise'), [1, "-vf 'transpose=1'"])
    assert.deepStrictEqual(rotation([1], '90º counter-clockwise'), [1, "-vf 'transpose=2'"])
    assert.deepStrictEqual(rotation([1], '180º'), [1, "-vf 'transpose=2,transpose=2'"])
  })
})
