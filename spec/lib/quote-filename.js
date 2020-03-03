var quote = require('../../app/lib/quote-filename')
var assert = require('assert')

describe('quote filename', function () {
  it('leaves a boring filename untouched', function () {
    assert.strictEqual(quote('yas.txt'), 'yas.txt')
  })

  it('escapes a filename with an apostrophe', function () {
    assert.strictEqual(quote("fart's.butt"), "fart\\'s.butt")
  })

  it('quotes a filename with a space', function () {
    assert.strictEqual(quote('memes on the web.txt'), "'memes on the web.txt'")
  })

  it('handles a filename with a space and a single quote', function () {
    assert.strictEqual(quote("meme's on the web.txt"), "'meme'\\''s on the web.txt'")
  })
})
