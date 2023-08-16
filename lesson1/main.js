// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let s1 = 'hello';
let s2 = 'owu';
let s3 = 'com';
let s4 = 'ua';
console.log(`${s1}, ${s2}.${s3}.${s4}`)

let n1 = 1;
console.log(n1);
let n2 = 10;
console.log(n2);
let n3 = -999;
console.log(n3);
let n4 = 123;
console.log(n4);
const PI = 3.14;
console.log(PI);
let n5 = 2.7;
console.log(n5);
let n6 = 16;
console.log(n6);

let b1 = true;
console.log(b1);
let b2 = false;
console.log(b2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Nazarii';
let middleName = 'Lyubomyr';
let lastName = 'Ryhus';

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let userName = prompt('Введіть ім\'я');
console.log(userName);

let userFatherName = prompt('Введіть по-батькові');
console.log(userFatherName);

let userYearOfBirth = +prompt('Введіть рік народження');
console.log(userYearOfBirth);
