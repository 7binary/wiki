function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextValue = start;
  let timesCalled = 0;

  const rangeIterator = {
    next: function() {
      if (nextValue < end) {
        const result = { value: nextValue, done: false };
        timesCalled++;
        nextValue += step;
        return result;
      }
      return { value: timesCalled, done: true };
    },
  };

  return rangeIterator;
}


function* makeGenerator(start = 1, end = 10, step = 2) {
  let iterated = 0;
  for (let i = start; i < end; i += step) {
    iterated++;
    yield i;
  }
  return iterated;
}

// const it = makeRangeIterator(1, 10, 2);
const it = makeGenerator(1, 10, 2);
let result = it.next();
while (!result.done) {
  console.log(result.value);
  result = it.next();
} // 1 3 5 7 9
console.log('called times', result.value); // 5

//-----------------------------------------------------
