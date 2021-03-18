// Там есть прямой поток, сразу 1-2, далее очередь асинхронных запросов (Promise, async/await)
// и в конце очередь callBack (setTimeout/setInterval)
console.log(1);

setTimeout(() => { // Task queue: setInterval/setTimeout/domEvents
  console.log(5);
}, 0);

Promise.resolve().then(() => { // Microtask queue: Promise/async-await (MICROTASK > TASK)
  console.log(3);
}).then(() => {
  console.log(4);
});

console.log(2);
