module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix && matrix.length !== 0)
  {matrix.map((el, i) => {result.push((i % 2 !== 0) ? el.reverse() : el)});
  return result.flat(Infinity)}
  else return [];  
}
