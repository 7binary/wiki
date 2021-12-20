function selectionSort(arr) { // O(1/2 * n^2) === O(n^2)
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      count += 1;
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    const tmp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = tmp;
  }
  return [arr, count];
}

function bubbleSort(arr) { // O(n^2)
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      count += 1;
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return [arr, count];
}

let quickCount = 0;
function quickSort(arr) { // O(log2n * n)
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const lesser = [];
  const greater = [];
  for (let i = 0; i < arr.length; i++) {
    quickCount += 1;
    if (i === pivotIndex) continue;
    arr[i] > arr[pivotIndex] ? greater.push(arr[i]) : lesser.push(arr[i]);
  }
  return quickSort(lesser).concat(quickSort(greater));
}

const arr = [11, 3, 13, 5, 19, 1, 18, 6, 17, 2, 16, 3, 15, 9, 14, 7, 13, 8, 12, 0];

console.log('selectionSort', selectionSort(arr));
console.log('bubbleSort', bubbleSort(arr));
console.log('quickSort', quickSort(arr), quickCount);
