const arr1 = [[1, 4], [2, 6], [8, 10], [7, 9], [0, 2]];
console.log(arr1, '->', merge(arr1)); // -> [[0,6], [7,10]]

function merge(intersect) {
  const pairs = [];
  const skipIndexes = {};

  for (let i = 0; i < intersect.length - 1; i++) {
    if (skipIndexes[i.toString()]) {
      continue;
    }
    let min = intersect[i][0];
    let max = intersect[i][1];

    for (let j = i + 1; j < intersect.length; j++) {
      if ((intersect[j][0] >= min && intersect[j][0] <= max)
        || (intersect[j][1] >= min && intersect[j][1] <= max)
      ) { // либо первая цифра вошла в интервал, либо вторая
        if (intersect[j][0] < min) {
          min = intersect[j][0];
        }
        if (intersect[j][1] > max) {
          max = intersect[j][1];
        }
        skipIndexes[j.toString()] = true;
      }
    }

    pairs.push([min, max]);
  }

  return pairs;
}
