var ko = require('knockout-es5')
var assign = require('./lib/assign')
var quoteFilename = require('./lib/quote-filename')

function State () {
  assign(this, {
    inputFilename: 'input.mp4',
    outputFilename: 'output.avi',

    command: function () {
      return [
        'ffmpeg',
        '-i', quoteFilename(this.inputFilename),
        quoteFilename(this.outputFilename)
      ].join(' ')
    }
  })

  ko.track(this)
}

document.forms[0].addEventListener('submit', function (event) {
  event.preventDefault()
})

ko.applyBindings(new State())
