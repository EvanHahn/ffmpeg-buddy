var TO_CONCAT = {
  none: [],
  '90º clockwise': "-vf 'transpose=1'",
  '90º counter-clockwise': "-vf 'transpose=2'",
  '180º': "-vf 'transpose=2,transpose=2'"
}

module.exports = function (flags, rotation) {
  return flags.concat(TO_CONCAT[rotation])
}
