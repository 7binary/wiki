const multiArray = [1, [2, 3, [4, 5]], [6, 7]]; // convert to [1,2,3,4,5,6,7]

function flatArr(deepArray) {
  if (!Array.isArray(deepArray)) {
    return [];
  }
  const singleArr = [];

  function run(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        singleArr.push(arr[i]);
      } else if (Array.isArray(arr[i])) {
        run(arr[i]);
      }
    }
  }

  run(deepArray);

  return singleArr;
}

console.log(flatArr(multiArray));
