// Built-in iterables
// String, Array, TypedArray, Map and Set are all built-in iterables,
// because their prototype objects all have a Symbol.iterator method.

function* makeIterable() {
  yield 1;
  yield 2;
}

const it = makeIterable();
for (const val of it) {
  console.log(val);
} // 1 2

console.log(it[Symbol.iterator]() === it); // true
// This example show us generator(iterator) is iterable object,
// which has the @@iterator method return the it (itself),
// and consequently, the it object can iterate only _once_.

it[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};
// If we change it's @@iterator method to a function/generator
// which returns a new iterator/generator object, (it)
// can iterate many times

for (const val of it) {
  console.log(val);
}

const myIt = {
  [Symbol.iterator]: function* () {
    yield 6;
    yield 7;
    yield 8;
  },
};

for (const val of myIt) {
  console.log(val);
}

for (let value of ['a', 'b', 'c']) {
  console.log(value);
} // a b c


function* gen() {
  yield* ['a', 'b', 'c'];
}

console.log(gen().next()); // { value: "a", done: false }
