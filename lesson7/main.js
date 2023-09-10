// let now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth()); // початок з 0
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getTime()); // 01 01 1970

// let date1 = new Date(1693981437625);
// console.log(date1);

// let date = new Date("Dec 15 2002 07:00");
// let date = new Date(2002, 11, 15, 7);
// console.log(date);

// let user1 = {
//     id: new Date().getTime(),
//     name: 'vasya',
//     birthday: new Date(1693981437625)
// }
//
// let user2 = {
//     id: new Date().getTime(),
//     name: 'vasya',
//     birthday: new Date(1222981437625)
// }
//
// console.log(user1);
// console.log(user2);

// console.log('start');
// try {
//     console.log(x);
// } catch (e) {
//     console.log(e);
// } finally {
//     console.log('end');
// }

// function foo(num1, num2) {
//     if (typeof num1 === 'string' || typeof num2 === 'string') {
//         throw new Error('can\'t be string');
//     }
// }
//
// try {
//     foo(1, 's');
// } catch (e) {
//     console.log(e);
// }

// let obj = {};
//
// // if (obj.innerObj) {
// //     console.log(obj.innerObj);
// // }
// // console.log(obj.innerObj.id);
//
// console.log(obj?.innerObj?.id);

let name = 'vasya';

let user = {
    id: 1,
    // name: name
    name,
    foo() {

    }
}
console.log(user);
user.foo();
