/**
 * @param {number[]} arr
 * @return {number[]}
 */
var minRank = function(arr) {
  var min = Math.min.apply(null, arr);
  var rank = 1;

  for (var r = 2; r <= min; r++) {
    const matches = arr.filter(n => n % r === 0).length;
    if (matches === arr.length) rank = r;
  }

  return rank > 1 ? arr.map(n => n / rank) : arr;
};

console.log(minRank([40,10,30])); // 4,1,3
console.log(minRank([2,1,3]));    // 2,1,3
