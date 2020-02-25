exports.min = function min (array) {
  if (arguments.length === 0 || array.length === 0) return 0;
  else return Math.min(...array);
}

exports.max = function max (array) {
  if (arguments.length === 0 || array.length === 0) return 0;
  else return Math.max(...array);
}

 exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length === 0) return 0;
  else {
    let a = array.length;
    let b = array.reduce((a, b) => (a + b));
    return b / a ;
  }
}
