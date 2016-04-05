var quote = require('../../app/lib/quote-filename')
var assert = require('assert')

describe('quote filename', function () {
  it('leaves a boring filename untouched', function () {
    assert.equal(quote('yas.txt'), 'yas.txt')
  })

  it('escapes a filename with an apostrophe', function () {
    assert.equal(quote("fart's.butt"), "fart\\'s.butt")
  })

  it('quotes a filename with a space', function () {
    assert.equal(quote('memes on the web.txt'), "'memes on the web.txt'")
  })

  it('handles a filename with a space and a single quote', function () {
    assert.equal(quote("meme's on the web.txt"), "'meme'\\''s on the web.txt'")
  })
})
