console.log(verify('--(++++)--')); //true
console.log(verify('before ( middle []) after ')); //true
console.log(verify('')); //true
console.log(verify('<( >)')); //false
console.log(verify('( [ <> () ] <> )')); //true
console.log(verify(' (  [)')); //false

// написать функцию, проверяющую правильность закрытия скобок <> () []
function verify(text) {
  const stack = [];
  const brackets = { ')': '(', '>': '<', ']': '[' };
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '(' || text[i] === '<' || text[i] === '[') stack.push(text[i]);
    else if (text[i] === ')' || text[i] === '>' || text[i] === ']') {
      if (stack[stack.length - 1] === brackets[text[i]]) stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
}
