function checkBrackets(str) {
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
  };
  const closings = Object.keys(pairs);
  const openings = Object.values(pairs);
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (openings.includes(str[i])) {
      stack.push(str[i]);
    } else if (closings.includes(str[i])) {
      if (stack[stack.length - 1] !== pairs[str[i]]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

console.log(checkBrackets('[(())()]')); // true
console.log(checkBrackets('((([])))')); // true
