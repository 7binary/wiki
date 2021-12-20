function factorial(n) {
  called += 1;
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function memoFactorial() {
  const memo = [];

  function fact(n) {
    if (memo[n]) return memo[n];
    memo[n] = n === 1 ? 1 : n * fact(n - 1);
    return memo[n];
  }

  return fact;
}

function fibonacci(n) { // 1, 1, 2, 3, 5, 8, 13
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function memoFibonacci() {
  const memo = [];

  function fib(n) {
    if (memo[n]) return memo[n];
    memo[n] = n === 1 || n === 2 ? 1 : fib(n - 1) + fib(n - 2);
    return memo[n];
  }

  return fib;
}

const mFibonacci = memoFibonacci();
const mFactorial = memoFactorial();

console.log('factorial 5', mFactorial(5));
console.log('factorial 6', mFactorial(6));
console.log('factorial 7', mFactorial(7));

console.log('fibinachi 6', mFibonacci(6));
