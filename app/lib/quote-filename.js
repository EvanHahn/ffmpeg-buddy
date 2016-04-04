module.exports = function (filename) {
  if (filename.indexOf(' ') === -1) {
    return filename.replace(/'/g, "\\'")
  } else {
    return "'" + filename.replace(/'/g, "'\\''") + "'"
  }
}
