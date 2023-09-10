// function userFactoryFunction(id, name) {
//     return {id, name};
// }
//
// let  user = userFactoryFunction(1, 'vasya');
// console.log(user);

// function User(id, name) {
//     this.id = id;
//     this.name = name;
//     this.greeting = () => console.log(`hello, my name is ${this.name}`);
// }
//
// let user = new User(1, 'vasya');
// console.log(user);
// user.greeting();

// function User(id, name, age) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.greeting = function () {
//         return `hello, my name is ${this.name} and my age is ${this.age}`;
//     }
// }
//
// let user1 = new User(111, 'kok', 123);
//
// console.log(user1.greeting());
//
// let user2 = {
//     name: 'lok',
//     age: 234
// };
//
// // console.log(user1.greeting.call(user2));
// console.log(user1.greeting.apply(user2));
//
// let greeting = user1.greeting.bind(user2);
// console.log(greeting);
// console.log(greeting());

// let num = [11, 22, 33];
//
// console.log(typeof num);
// console.log(Array.isArray(num));
//
// Array.prototype.print = function () {
//     for (const item of this) {
//         console.log(item);
//     }
// };
//
// num.print();

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    greeting() {
        console.log(`hello my name ${this.name}`);
    }
}

let user = new User(111, 'kok');
console.log(user);
user.greeting();

class Customer extends User {
    constructor(id, name, products) {
        super(id, name);
        this.products = products;
    }
}

let customer = new Customer(123, 'asd', ['asd', 'asasas']);
customer.greeting();
console.log(customer);
