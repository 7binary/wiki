// Given a list of non-negative integers nums, arrange them such that they form the largest number.
// Note: The result may be very large, so you need to return a string instead of an integer.

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const uniques = nums.filter((v,i,a) => a.indexOf(v) === i).join('');
  if (uniques.length === 1) return uniques;

  return nums
    .sort((a, b) => {
      if (a === b) return 0;
      let aStr = a.toString();
      let bStr = b.toString();

      if (aStr.includes(bStr) || bStr.includes(aStr)) {
        const aResult = parseInt(aStr + bStr);
        const bResult = parseInt(bStr + aStr);
        return aResult > bResult ? -1 : 1;
      }

      const max = aStr.length > bStr.length ? aStr.length : bStr.length;
      let aLast = aStr[0];
      let bLast = bStr[0];

      for (let i = 0; i < max; i += 1) {
        if (aStr[i]) aLast = aStr[i];
        if (bStr[i]) bLast = bStr[i];
        if (aLast !== bLast) return +aLast > +bLast ? -1 : 1;
      }
      return 0;
    })
  .join('');
};

console.log(largestNumber([0, 0])); // "0"
console.log(largestNumber([10, 2])); // "210"
console.log(largestNumber([34323,3432])); // "343234323"
console.log(largestNumber([3, 30, 34, 5, 9])); //  "9534330"
console.log(largestNumber([111311, 1113])); // "1113111311"
