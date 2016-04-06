var ko = require('knockout-es5')
var assign = require('./lib/assign')
var quoteFilename = require('./lib/quote-filename')
var scaleFlags = require('./lib/scale-flags')
var rotationFlags = require('./lib/rotation-flags')

function State () {
  assign(this, {
    inputFilename: 'input.mp4',
    outputFilename: 'output.avi',
    disableVideo: false,
    disableAudio: false,
    scaleWidth: '100%',
    scaleHeight: '100%',
    framerate: null,
    startAt: null,
    endAt: null,
    rotationOptions: ['none', '90º clockwise', '90º counter-clockwise', '180º'],
    rotation: 'none',

    command: function () {
      var flags = []

      if (this.disableVideo) { flags.push('-vn') }
      if (this.disableAudio) { flags.push('-an') }
      if (this.framerate != null) { flags.push('-r ' + this.framerate) }
      if (this.startAt) { flags.push('-ss ' + this.startAt) }
      if (this.endAt) { flags.push('-to ' + this.endAt) }
      flags = scaleFlags(flags, this.scaleWidth, this.scaleHeight)
      flags = rotationFlags(flags, this.rotation)

      console.log(this.rotation)

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
