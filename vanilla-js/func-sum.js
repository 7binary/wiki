// sum(1) -> console: 1
// sum(1)(2)(3) -> console: 1 3 6

function sum(num) {
  let acc = num || 0;

  function add(next) {
    acc += next;
    console.log(acc);
    return arguments.callee; // === return add;
  }

  console.log(num); // first output

  return add;
}

sum(1);
sum(1)(2)(3);
