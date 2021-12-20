function linearSearch(arr, num) { // O(n)
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] === num) {
      return [i, count];
    }
  }

  return [null, count];
}

function binarySearch(arr, num) { // O(log2n)
  let count = 0;
  let start = 0;
  let end = arr.length;

  while (start <= end) {
    count += 1;
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === num) {
      return [middle, count];
    }
    if (num < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return [null, count];
}

let called = 0;

function binarySearchRec(arr, num, start, end) { // O(log2n)
  called += 1;
  start = start ?? 0;
  end = end ?? arr.length - 1;

  const middle = Math.floor((start + end) / 2);
  if (arr[middle] === num) {
    return middle;
  }

  return num > arr[middle]
    ? binarySearchRec(arr, num, middle + 1, end)
    : binarySearchRec(arr, num, start, middle - 1);
}


const arr = [3, 5, 1, 6, 2, 3, 9, 7, 8, 0];

console.log('> linear search:', linearSearch(arr.slice(), 8));
console.log('> binary search:', binarySearch(arr.slice(), 8));
console.log('> binary recursy search:', binarySearchRec(arr.slice(), 8), called);
