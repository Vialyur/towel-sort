module.exports = function towelSort (matrix) {
  let result = [];
  matrix.map((el, i) => {result.push((i % 2 !== 0) ? el.reverse() : el)});
  return result.flat(Infinity)  
}
