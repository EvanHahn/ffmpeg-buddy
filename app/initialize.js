var ko = require('knockout-es5')
var assign = require('./lib/assign')
var quoteFilename = require('./lib/quote-filename')

function State () {
  assign(this, {
    inputFilename: 'input.mp4',
    outputFilename: 'output.avi',
    disableVideo: false,
    disableAudio: false,

    command: function () {
      var flags = []

      if (this.disableVideo) { flags.push('-vn') }
      if (this.disableAudio) { flags.push('-an') }

      return [
        'ffmpeg',
        '-i', quoteFilename(this.inputFilename),
      ]
      .concat(flags)
      .concat(quoteFilename(this.outputFilename))
      .join(' ')
    }
  })

  ko.track(this)
}

document.forms[0].addEventListener('submit', function (event) {
  event.preventDefault()
})

ko.applyBindings(new State())
