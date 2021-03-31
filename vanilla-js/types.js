// PRIMITIVE TYPES (data is a single value)
console.log('typeof 5 =>', typeof 5); // number, NaN=number, Infinity=number
console.log('typeof true =>', typeof true); // boolean
console.log(`typeof 'Any' =>`, typeof 'Any'); // string
console.log('typeof undefined =>', typeof undefined); // undefined (absence of definition)
console.log('typeof null =>', typeof null); // object (absence of value, mistake of legacy JavaScript)
console.log(`typeof Symbol('any') =>`, typeof Symbol('any')); // symbol (new in ES6 for object properties)

// NON PRIMITIVE TYPES
console.log('typeof {} =>', typeof {}); // object (Object)
console.log('typeof [] =>', typeof []); // object, (Array -> Object), check with Array.isArray(arr)
console.log('typeof function() {} =>', typeof function() {}); // function (Function -> Object)

// TYPESCRIPT TYPES
/*
number
boolean
string
undefined
null
Symbol

enum
tuple
unknown => более строгий чем any, так как надо проверять тип перед использованием
any
void
never => не должны попасть в этот блок, так как выбрасывается исключение
Array => с дженериком Array<number> или Array<string>
bigint
*/

// WRAPPING: Boolean extends Object
console.log(
  'true.toString() === Boolean(true).toString() =>',
  true.toString() === Boolean(true).toString(),
);
