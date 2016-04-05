var last = require('./last')

function percent (n) {
  return parseFloat(n) / 100
}

module.exports = function (result, w, h) {
  w = w.trim()
  h = h.trim()

  if (((w === '100%') || (w === '-1')) &&
      ((h === '100%') || (h === '-1'))) { return result }

  if (last(w) === '%') { w = 'iw*' + percent(w) }
  if (last(h) === '%') { h = 'ih*' + percent(h) }

  return result.concat([
    "-vf 'scale=",
    w, ':', h,
    "'"
  ].join(''))
}
