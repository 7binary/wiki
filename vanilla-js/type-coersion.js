// Type Coersion only for ==
console.log(1 == '1'); // true
console.log(false == ""); // true
console.log(false == []); // true, empty array
console.log(false == {}); // false
console.log("" == 0); // true
console.log("" == []); // true, empty array
console.log("" == {}); // false
console.log(0 == []); // true, empty array
console.log(0 == {}); // false
console.log(false == null); // false
console.log(true == null); // false

// null: NOT CONVERTED if ==, but DO for >= <=
alert( null > 0 );  // false
alert( null == 0 ); // false
alert( null >= 0 ); //  true
alert( null == undefined); // true

// undefined IS CONVERTED to NaN, NaN can't be compared
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3), undefined
alert( undefined == null ); // true, as exception

// falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.
if (!variable); // When the variable has a falsy value the condition is true.
var string = ""; // <-- falsy
var filledString = "some string in here"; // <-- truthy
var zero = 0; // <-- falsy
var numberGreaterThanZero // <-- truthy
var emptyArray = []; // <-- truthy, typeof Object with __proto__ Array
var emptyObject = {}; // <-- truthy, typeof Object

// Special cases
alert([] == 0); // true
"apple" > "pineapple"; // false, Dictionary comparison, hence false. "a" is smaller than "p".
"2" > "12" // true, Again, dictionary comparison, first char "2" is greater than the first char "1".
undefined == null // true, Values null and undefined equal each other only
undefined === null // false, Different types from both sides lead to false
null == "\n0\n" // false, null only equals undefined.
null === +"\n0\n" // false, Strict equality of different types.
NaN == NaN; // false (4)

if ([] == false); // <-- truthy, will run code in if-block
if ([]); // <-- truthy, will also run code in if-block
if ([] == true); // <-- falsy, will NOT run code in if-block
if (![]); // <-- falsy, will also NOT run code in if-block


// Абстрактный алгоритм сравнения для отношений < >
// Сравнение x < y, где x и y являются значениями, возвращает true, false или undefined
// (последнее означает, что хотя бы один из операндов равен NaN). Такое сравнение производится следующим образом:
// 1. Вызвать ToPrimitive(x, подсказка Number).
// 2. Вызвать ToPrimitive(y, подсказка Number).
// 3. Если Тип(Результата(1)) равен String и Тип(Результата(2)) равен String - переход на шаг 16. (Заметим, что этот шаг отличается от шага 7 в алгоритме для оператора сложения + тем, что в нём используется и вместо или.)
// 4. Вызвать ToNumber(Результат(1)).
// 5. Вызвать ToNumber(Результат(2)).
// 6. Если Результат(4) равен NaN - вернуть undefined.
// 7. Если Результат(5) равен NaN - вернуть undefined.
// 8. Если Результат(4) и Результат(5) являются одинаковыми числовыми значениями - вернуть false.
// 9. Если Результат(4) равен +0 и Результат(5) равен -0 - вернуть false.
// 10. Если Результат(4) равен -0 и Результат(5) равен +0 - вернуть false.
// 11. Если Результат(4) равен +∞, вернуть false.
// 12. Если Результат(5) равен +∞, вернуть true.
// 13. Если Результат(5) равен -∞, вернуть false.
// 14. Если Результат(4) равен -∞, вернуть true.
// 15. Если математическое значение Результата (4) меньше, чем математическое значение Результата(5) (заметим, что эти математические значения оба конечны и не равны нулю) - вернуть true. Иначе вернуть false.
// 16. Если Результат(2) является префиксом Результата(1), вернуть false. (Строковое значение p является префиксом строкового значения q, если q может быть результатом конкатенации p и некоторой другой строки r. Отметим, что каждая строка является своим префиксом, т.к. r может быть пустой строкой.)
// 17. Если Результат(1) является префиксом Результата(2), вернуть true.
// 18. Пусть k - наименьшее неотрицательное число такое, что символ на позиции k Результата(1) отличается от символа на позиции k Результата(2). (Такое k должно существовать, т.к. на данном шаге установлено, что ни одна из строк не является префиксом другой.)
// 19. Пусть m - целое, равное юникодному коду символа на позиции k строки Результат(1).
// 20. Пусть n - целое, равное юникодному коду символа на позиции k строки Результат(2).
// 21. Если m < n, вернуть true. Иначе вернуть false.


// абстрактный алгоритм сравнения для равенства ==
// Сравнение x == y, где x и y являются значениями, возвращает true или false. Такое сравнение производится следующим образом:
// 1. Если Тип(x) отличается от Типа(y) - переход на шаг 14.
// 2. Если Тип(x) равен Undefined - вернуть true.
// 3. Если Тип(x) равен Null - вернуть true.
// 4. Если Тип(x) не равен Number - переход на шаг 11.
// 5. Если x является NaN - вернуть false.
// 6. Если y является NaN - вернуть false.
// 7. Если x является таким же числовым значением, что и y, - вернуть true.
// 8. Если x равен +0, а y равен -0, вернуть true.
// 9. Если x равен -0, а y равен +0, вернуть true.
// 10. Вернуть false.
// 11. Если Тип(x) равен String - вернуть true, если x и y являются в точности одинаковыми последовательностями символов (имеют одинаковую длину и одинаковые символы в соответствующих позициях). Иначе вернуть false.
// 12. Если Тип(x) равен Boolean, вернуть true, если x и y оба равны true или оба равны false. Иначе вернуть false.
// 13. Вернуть true, если x и y ссылаются на один и тот же объект или они ссылаются на объекты, которые были объединены вместе (см. раздел 13.1.2). Иначе вернуть false.
// 14. Если x равно null, а y равно undefined - вернуть true.
// 15. Если x равно undefined, а y равно null - вернуть true.
// 16. Если Тип(x) равен Number, а Тип(y) равен String, вернуть результат сравнения x == ToNumber(y).
// 17. Если Тип(x) равен String, а Тип(y) равен Number, вернуть результат сравнения ToNumber(x)== y.
// 18. Если Тип(x) равен Boolean, вернуть результат сравнения ToNumber(x)== y.
// 19. Если Тип(y) равен Boolean, вернуть результат сравнения x == ToNumber(y).
// 20. Если Тип(x) - String или Number, а Тип(y) - Object, вернуть результат сравнения x == ToPrimitive(y).
// 21. Если Тип(x) - Object, а Тип(y) - String или Number, вернуть результат сравнения ToPrimitive(x)== y.
// 22. Вернуть false.

