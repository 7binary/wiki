function perms(xs) {
  if (xs.length === 0) return [[]];
  return xs.flatMap((x, i) => {
    return perms(xs.filter((y, j) => i!==j)).map(vs => [x, ...vs]);
  });
}

console.log(JSON.stringify(perms(['c','a','t'])));

