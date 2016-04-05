var ko = require('knockout-es5')
var assign = require('./lib/assign')
var quoteFilename = require('./lib/quote-filename')
var scaleFlags = require('./lib/scale-flags')

function State () {
  assign(this, {
    inputFilename: 'input.mp4',
    outputFilename: 'output.avi',
    disableVideo: false,
    disableAudio: false,
    scaleWidth: '100%',
    scaleHeight: '100%',

    command: function () {
      var flags = []

      if (this.disableVideo) { flags.push('-vn') }
      if (this.disableAudio) { flags.push('-an') }

      flags = scaleFlags(flags, this.scaleWidth, this.scaleHeight)

      return [
        'ffmpeg',
        '-i', quoteFilename(this.inputFilename)
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
