// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
var s1 = 'hello';
var s2 = 'owu';
var s3 = 'com';
var s4 = 'ua';
console.log("".concat(s1, ", ").concat(s2, ".").concat(s3, ".").concat(s4));
var n1 = 1;
console.log(n1);
var n2 = 10;
console.log(n2);
var n3 = -999;
console.log(n3);
var n4 = 123;
console.log(n4);
var PI = 3.14;
console.log(PI);
var n5 = 2.7;
console.log(n5);
var n6 = 16;
console.log(n6);
var b1 = true;
console.log(b1);
var b2 = false;
console.log(b2);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не
// об'єкт, просто за допомоги конкатенації)
var firstName = 'Nazarii';
var middleName = 'Lyubomyr';
var lastName = 'Ryhus';
var person = "".concat(firstName, " ").concat(middleName, " ").concat(lastName);
console.log(person);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
var a = 100;
console.log(typeof a);
var b = '100';
console.log(typeof b);
var c = true;
console.log(typeof c);
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в
// консоль
var userName = prompt('Введіть ім\'я');
console.log(userName);
var userFatherName = prompt('Введіть по-батькові');
console.log(userFatherName);
var userYearOfBirth = +prompt('Введіть рік народження');
console.log(userYearOfBirth);
