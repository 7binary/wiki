const multiArray = [1, [2, 3, [4, 5]], [6, 7]]; // convert to [1,2,3,4,5,6,7]

function flatArr(deepArray) {
  let singleArr = [];

  for (let i = 0; i < deepArray.length; i++) {
    if (Array.isArray(deepArray[i])) {
      singleArr = singleArr.concat(flatArr(deepArray[i]));
    } else {
      singleArr.push(deepArray[i]);
    }
  }

  return singleArr;
}

console.log(flatArr(multiArray));
