// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let s1: string = 'hello';
let s2: string = 'owu';
let s3: string = 'com';
let s4: string = 'ua';
console.log(`${s1}, ${s2}.${s3}.${s4}`)

let n1: number = 1;
console.log(n1);
let n2: number = 10;
console.log(n2);
let n3: number = -999;
console.log(n3);
let n4: number = 123;
console.log(n4);
const PI: number = 3.14;
console.log(PI);
let n5: number = 2.7;
console.log(n5);
let n6: number = 16;
console.log(n6);

let b1: boolean = true;
console.log(b1);
let b2: boolean = false;
console.log(b2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не
// об'єкт, просто за допомоги конкатенації)
let firstName: string = 'Nazarii';
let middleName: string = 'Lyubomyr';
let lastName: string = 'Ryhus';

let person: string = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a: number = 100;
console.log(typeof a);
let b: string = '100';
console.log(typeof b);
let c: boolean = true;
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в
// консоль
let userName: string = prompt('Введіть ім\'я');
console.log(userName);

let userFatherName: string = prompt('Введіть по-батькові');
console.log(userFatherName);

let userYearOfBirth: number = +prompt('Введіть рік народження');
console.log(userYearOfBirth);
