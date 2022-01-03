function permsString(string) {
  function perms(xs) {
    if (xs.length === 0) return [[]];
    return xs.flatMap((x, i) => {
      return perms(xs.filter((y, j) => i !== j)).map(vs => [x, ...vs]);
    });
  }

  const allStrings = perms(string.split('')).map(arr => arr.join(''));
  return [...new Set(allStrings)];
  //return allStrings.filter((v,i,a) => a.indexOf(v) === i);
}

console.log(permsString('a')); // ['a']
console.log(permsString('ab')); // ['ab', 'ba']
console.log(permsString('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
