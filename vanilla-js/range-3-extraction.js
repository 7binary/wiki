// The range includes all integers in the interval including both endpoints.
// It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

function solution(list) {
  var output = [];
  var series = [];

  for (var i = 0; i < list.length; i++) {
    if (list[i + 1] - list[i] === 1) { // проверка, что есть следующий серийник
      series.push(list[i]);
      continue;
    }
    if (series.length > 0 && series[series.length - 1] + 1 === list[i]) { // проверка заключительного серийника
      series.push(list[i]);
    }
    // пуш результата
    if (series.length >= 3) {
      output.push(series[0] + '-' + series[series.length - 1]);
    } else if (series.length === 2) {
      output.push(series[0], series[1]);
    } else {
      output.push(list[i]);
    }
    series = [];
  }

  const result = output.join(',');
  console.log(JSON.stringify(list), '->', result);
  return result;
}

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]); //=> '-6,-3-1,3-5,7-11,14,15,17-20');


//---------
function solution2(list) {
  for (var i = 0; i < list.length; i++) {
    var j = i;
    while (list[j] - list[j + 1] == -1) j++;
    if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + '-' + list[j]);
  }
  return list.join();
}

//----------
var solution3 = (list) => list.reduce((acc, curr, i) => {
  if (i == 0) return curr.toString();
  if (list[i - 1] == curr - 1 && list[i + 1] == curr + 1) return acc;
  if (list[i - 2] == curr - 2 && list[i - 1] == curr - 1) return acc + '-' + curr;
  return acc + ',' + curr;
});
