module.exports = function (dest) {
  var source

  for (var i = 1; i < arguments.length; i++) {
    source = arguments[i]
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        dest[key] = source[key]
      }
    }
  }

  return dest
}
