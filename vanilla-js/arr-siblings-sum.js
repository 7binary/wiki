function arraySiblingsSum(arr) {
  console.log('array: ', JSON.stringify(arr));
  let max = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 2; j <= arr.length; j++) {
      const sum = arr.slice(i, j).reduce((acc, cur) => acc + cur, 0);
      if (sum > max) max = sum;
    }
  }

  return max;
}

console.log(arraySiblingsSum([1, -2, 0, 3])); // 3
console.log(arraySiblingsSum([1, 5, 9])); // 15
console.log(arraySiblingsSum([-1, 0, 2, -1, 3, 4, -1])); // 8
