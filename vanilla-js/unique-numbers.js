function uniqueNumbers(numbers) {
  const hash = {};
  const deletedNumbers = {};

  for (let i = 0; i < numbers.length; i++) {
    const key = numbers[i];
    if (hash[key]) {
      deletedNumbers[key] = true;
      delete hash[key];
    } else if (deletedNumbers[key] === undefined) {
      hash[key] = key;
    }
  } // сложность O(n), линейная сложность

  return Object.values(hash); // сложность O(2n) === O(n), так как отбрасываются константы
}

console.log(uniqueNumbers([1,2,3,3,4,5,4,3])); // 1 2 5
