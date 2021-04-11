/**
 * Нужно написать функцию, которая принимает число N и возвращает функцию,
 * вызов которой первые N раз возвращает 'yes', а потом – 'no'.
 */
function canGetCount(n) {
  // code here
  let num = n;

  return function() {
    return --num >= 0 ? 'yes' : 'no';
  };
}

const getOne = canGetCount(2);
console.log(getOne()); // 'yes';
console.log(getOne()); //  'yes';
console.log(getOne()); //  'no';


console.log('**************');
// Написать функцию, которая принимает массив чисел. Необходимо определить монотонный он или нет.
logMono([1, 2, 3, 6]); // - true
logMono([6, 3, 2, 1]); //  - true
logMono([5, 5]); //  - true
logMono([1, 2, 5, 5, 5, 8, 9]); //  - true
logMono([1, 2, 5, 5, 5, 2, 1]); //  - false
logMono([1, 10, 6]); //  - false
logMono([7, 6, 5]); //  - true
logMono([1, 2, 3, 3, 3, 4, 5]); //  - true

function logMono(arr) {
  const result = isMono(arr);
  console.log(result, arr);
}

function isMono(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error();
  }
  let hasUp, hasDown = null;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      if (hasDown) return false;
      hasUp = true;
    }
    if (arr[i] < arr[i - 1]) {
      if (hasUp) return false;
      hasDown = true;
    }
  }

  return true;
}

console.log('********************************');
/**
 * Дан список целых чисел, повторяющихся элементов в списке нет.
 * Нужно преобразовать это множество в строку,
 * сворачивая соседние по числовому ряду числа в диапазоны.
 */

compress([1, 4, 5, 2, 3, 9, 8, 11, 0]); // '0-5,8-9,11'
compress([1, 4, 3, 2]); // '1-4'
compress([1, 4]); // '1,4'

function compress(list) {
  // your code here
  list.sort((a, b) => a - b);
  const ranges = [];
  let range = [list[0]];
  for (let i = 1; i < list.length; i++) {
    if ((list[i] - list[i - 1]) === 1) {
      range.push(list[i]);
    } else {
      ranges.push(range);
      range = [list[i]];
    }
  }
  ranges.push(range);

  const result = ranges.map(range => {
    if (range.length === 1) return `${range[0]}`;
    return `${range[0]}-${range[range.length - 1]}`;
  }).join(',');
  console.log(result, ranges);
}

console.log('********************************');
// определить очередность вывода консольки

console.log('apple');
setTimeout(() => console.log('pear'), 0);
Promise.resolve('melon').then(res => console.log(res));
new Promise((resolve, reject) => {
  console.log('orange');
  resolve('pineapple');
}).then(res => console.log(res));
console.log('lime');

// apple orange lime melon pineapple pear
