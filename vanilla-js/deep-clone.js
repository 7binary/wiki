// 1. Fast cloning with data loss - JSON.parse/stringify
// If you do not use Dates, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists,
// ImageDatas, sparse Arrays, Typed Arrays or other complex types within your object,
// a very simple one liner to deep clone an object is:
function lossDeepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// 2. Deep Clone libs
// - Lodash: _.cloneDeep()
// - Angular: angular.copy()
// - jQuery: $.extend(true, { }, oldObject); .copy() // DOM ONLY

// 3. ES6 (shallow copy)
// For completeness, note that ES6 offers two shallow copy mechanisms:
// clone = Object.assign({}, obj) and the spread syntax. which copies values of all enumerable own properties
// from one object to another. For example:
var A1 = { a: '2' };
var A2 = Object.assign({}, A1);
var A3 = { ...A1 };  // Spread Syntax

// 4. DeepClone func
function clone(obj) {
  if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj)
    return obj;

  if (obj instanceof Date)
    var temp = new obj.constructor(); //or new Date(obj);
  else
    var temp = obj.constructor();

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      obj['isActiveClone'] = null;
      temp[key] = clone(obj[key]);
      delete obj['isActiveClone'];
    }
  }
  return temp;
}


// !!! JavaScript не защищает имя свойства hasOwnProperty
//
// Если существует вероятность того, что объект может иметь свойство с этим именем,
// для получения правильных результатов необходимо использовать внешний hasOwnProperty:
//
// Вы можете скопировать вложенные ниже фрагменты кода на консоль браузеров, чтобы лучше понять
//
// var foo = {
//   hasOwnProperty: function() {
//     return false;
//   },
//   bar: 'I belong to foo'
// };
// Всегда возвращает false
//
// foo.hasOwnProperty('bar'); // false
// Используйте другой объект hasOwnProperty и вызовите его с этим, установленным в foo
//
// ({}).hasOwnProperty.call(foo, 'bar'); // true
// Для этого также возможно использовать свойство hasOwnProperty из прототипа Object
//
// Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
