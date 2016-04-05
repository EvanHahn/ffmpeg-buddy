var last = require('../../app/lib/last')
var assert = require('assert')

describe('last', function () {
  describe('strings', function () {
    it('returns undefined for an empty string', function () {
      assert.equal(last(''), undefined)
    })

    it('returns the first character of a 1-character string', function () {
      assert.equal(last('x'), 'x')
    })

    it('returns the last character of a 3-character string', function () {
      assert.equal(last('yas'), 's')
    })
  })

  describe('arrays', function () {
    it('returns undefined for an empty array', function () {
      assert.equal(last([]), undefined)
    })

    it('returns the first character of a 1-character array', function () {
      assert.equal(last([1]), 1)
    })

    it('returns the last character of a 3-character array', function () {
      assert.equal(last([1, 2, 3]), 3)
    })
  })
})
