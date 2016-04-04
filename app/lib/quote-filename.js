module.exports = function (filename) {
  if (filename.indexOf(' ') === -1) {
    return filename
  } else {
    return "'" + filename.replace(/'/g, "'\\''") + "'"
  }
}
