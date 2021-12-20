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
  let isUp = undefined;
  let isMono = true;

  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1];
    const curr = arr[i];
    if (isUp === undefined && prev !== curr) {
      isUp = prev < curr;
    }
    if ((isUp === true && curr < prev) || (isUp === false && curr > prev)) {
      isMono = false;
      break;
    }
  }

  return isMono;
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
  const sorted = new Float64Array(list).sort();
  const ranges = [];
  let rangeStart = null;

  for (let i = 0; i < sorted.length; i++) {
    if (rangeStart === null) {
      rangeStart = sorted[i];
    }
    if (sorted[i] === sorted[i + 1] || sorted[i + 1] - sorted[i] === 1) {
      continue;
    } else {
      ranges.push(rangeStart === sorted[i] ? rangeStart : rangeStart + '-' + sorted[i]);
      rangeStart = null;
    }
  }

  // console.log(JSON.stringify(list), '=>', JSON.stringify(ranges.join(',')));
  return ranges.join(',');
}

console.log('********************************');
// определить очередность вывода консольки

console.log('apple'); // 1

setImmediate(() => console.log('strawberry')); // 3
setTimeout(() => console.log('pear'), 0); // 3

Promise.resolve('melon').then(res => console.log(res)); // 2

new Promise((resolve, reject) => {
  console.log('orange'); // 1
  resolve('pineapple');
}).then(res => console.log(res)); // 2

console.log('lime'); // 1

// apple orange lime melon pineapple pear
