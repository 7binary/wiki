/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  // var sorted = arr.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);
  var sorted = [...new Set(arr)].sort((a, b) => a - b); // ES6 only
  var map = {}
  for (var i = 0; i < sorted.length; i++) {
    map[sorted[i]] = i + 1;
  }
  return arr.map(n => map[n]);
};

console.log(arrayRankTransform([40, 10, 30, 40])); // 3,1,2,3
console.log(arrayRankTransform([100, 100, 100]));    // 1,1,1
console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])); // [5,3,4,2,8,6,7,1,3]
