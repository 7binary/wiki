// https://yandex.ru/jobs/vacancies/dev/inter_infrastructure_dev/
// Объясните, для чего предназначена и каким образом работает следующая функция:

function bind(method, context) {
  var args = Array.prototype.slice.call(arguments, 2);
  return function() {
    var a = args.concat(Array.prototype.slice.call(arguments, 0));
    return method.apply(context, a);
  }
} // => функция предназначена для создания версии метода, которая будет вызываться на забинденом контексте
// с аргументом-массивом объединенных параметров

var max = bind(Math.max, null, 5, 9);
console.log(max(4,8)); // 9
console.log(max(44,8)); // 44
