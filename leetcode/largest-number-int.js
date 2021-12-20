/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  var arr = [];
  for (var i = 0; i < nums.length; i++) {
    nums[i].toString().split('').forEach(n => arr.push(n));
  }
  var sorted = arr.sort((a,b) => +b - +a);
  return sorted.join('');
};

console.log(largestNumber([10,2])); // "210"
console.log(largestNumber([3,30,34,5,9])); //  "9543330"
