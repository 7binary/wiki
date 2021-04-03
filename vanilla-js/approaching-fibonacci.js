function approachingFibonacci(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);

  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

  let nextFib = 0;
  let i = 1;
  while (nextFib < sum) {
    nextFib = fib(i);
    i++;
  }

  return nextFib - sum;
}

console.log(approachingFibonacci([1, 5, 7])); // 0 = 13 - 1+5+7
console.log(approachingFibonacci([11, 8])); // 2 = 21 - 11+8
