(function() {
  var a = b = 5;
  // const a = b = 5; // тот же эффект будет
})();

console.log(b); // 5, window.b = 5, присваивания идут справа налево
console.log(a); // undefined
