var scale = require('../../app/lib/scale-flags')
var assert = require('assert')

describe('scale flags', function () {
  it('does nothing if the inputs are both 100%', function () {
    assert.deepStrictEqual(scale([1], '100%', '100%'), [1])
  })

  it('does nothing if the inputs are both -1', function () {
    assert.deepStrictEqual(scale([1], '-1', '-1'), [1])
  })

  it('does nothing if inputs are -1 or 100%', function () {
    assert.deepStrictEqual(scale([1], '-1', '100%'), [1])
    assert.deepStrictEqual(scale([1], '100%', '-1'), [1])
  })

  it('can handle a % and -1', function () {
    assert.deepStrictEqual(scale([], '55.123%', '-1'), ["-vf 'scale=iw*0.55123:-1'"])
  })

  it('can handle a -1 and %', function () {
    assert.deepStrictEqual(scale([], '-1', '55.123%'), ["-vf 'scale=-1:ih*0.55123'"])
  })

  it('can handle two percentages', function () {
    assert.deepStrictEqual(scale([], '50%', '25%'), ["-vf 'scale=iw*0.5:ih*0.25'"])
  })

  it('can handle a number and -1', function () {
    assert.deepStrictEqual(scale([], '320', '-1'), ["-vf 'scale=320:-1'"])
  })

  it('can handle -1 and a number', function () {
    assert.deepStrictEqual(scale([], '-1', '320'), ["-vf 'scale=-1:320'"])
  })

  it('can handle two numbers', function () {
    assert.deepStrictEqual(scale([], '666', '420'), ["-vf 'scale=666:420'"])
  })
})
