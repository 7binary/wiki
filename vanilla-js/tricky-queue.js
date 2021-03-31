// Define deferred class that during executing the code below
// will generate output:
// 1 hello
// 5 a
// 3 b
// You are not allowed to use native Promise class for this problem
// You should not use setTimeout/setInterval/async/await for this problem
class Deferred {
  constructor() {
    this.queue = [];
    return this;
  }

  then(fn) {
    this.queue.push(fn);
    return this;
  }

  resolve(startValue) {
    let currValue = startValue;

    while (this.queue.length) {
      let fn = this.queue.shift();
      currValue = fn(currValue);

      if (currValue instanceof Deferred) {
        for (let cb of this.queue)
          currValue.then(cb);
        break;
      }
    }

    return this;
  }
}

new Deferred()
  .then(res => {
    console.log('1 ', res);
    const d1 = new Deferred();
    setTimeout(() => d1.resolve('a'), 2000);
    return d1;
  })
  .then(res => {
    console.log('2 ', res);
    return 'b';
  })
  .then(res => {
    console.log('3 ', res);
    return 'c';
  })
  .resolve('hello');
