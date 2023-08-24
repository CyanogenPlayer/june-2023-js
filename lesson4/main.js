// function printArray(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
//
// let users = [
//     {name: 'max', age: 31, status: true}
// ];
//
//
// let users2 = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// printArray(users);
// printArray(users2);

// function calc(a, b, c = 100) {
//     console.log(a + b + c);
// }
//
// calc(1, 2);
// calc(1, 2, 3);

// function foo(){
//     const arr = Array.from(arguments);
//     let res = 0;
//     for (const arrElement of arr) {
//         res += arrElement;
//     }
//     return res;
// }
//
// let a = foo(2,3,4);
// console.log(a);

// function foo() {
//     if (arguments.length === 3) {
//         return 'aaaaaa';
//     } else {
//         return 'bbbbbb';
//     }
// }
//
// let a = foo('ss', 'ww', 'aa');
// console.log(a);
// let b = foo('ww', 'aa');
// console.log(b);

function foo(str1, str2, ...arr) {
    console.log(str1);
    console.log(str2);
    console.log(arr);
}

foo('ss', 'ww', 'aa', 'daasds', 'rrr');
