// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

users.push(new User(11, 'qqq', 'www', '1@gmail.com', 111111));
users.push(new User(2, 'www', 'eee', '2@gmail.com', 222222));
users.push(new User(333, 'eee', 'rrr', '3@gmail.com', 333333));
users.push(new User(4, 'rrr', 'ttt', '4@gmail.com', 444444));
users.push(new User(55, 'ttt', 'yyy', '5@gmail.com', 555555));
users.push(new User(6, 'yyy', 'uuu', '6@gmail.com', 666666));
users.push(new User(7, 'uuu', 'iii', '7@gmail.com', 777777));
users.push(new User(88, 'iii', 'ooo', '8@gmail.com', 888888));
users.push(new User(9, 'ooo', 'ppp', '9@gmail.com', 999999));
users.push(new User(0, 'ppp', 'aaa', '0@gmail.com', 101010));

console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(item => item.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));

// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        User.call(this, id, name, surname, email, phone);
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];

clients.push(new Client(11, 'qqq', 'www', '1@gmail.com', 111111,
    ['carrots', 'celery', 'hummus']));
clients.push(new Client(2, 'www', 'eee', '2@gmail.com', 222222,
    ['eggs', 'jam']));
clients.push(new Client(333, 'eee', 'rrr', '3@gmail.com', 333333,
    ['apples', 'bananas', 'oranges', 'butter']));
clients.push(new Client(4, 'rrr', 'ttt', '4@gmail.com', 444444,
    ['pasta', 'sauce', 'parmesan']));
clients.push(new Client(55, 'ttt', 'yyy', '5@gmail.com', 555555,
    ['yogurt', 'granola', 'berries']));
clients.push(new Client(6, 'yyy', 'uuu', '6@gmail.com', 666666,
    ['chicken', 'beans']));
clients.push(new Client(7, 'uuu', 'iii', '7@gmail.com', 777777,
    ['rice', 'salmon', 'potatoes', 'asparagus', 'avocado',]));
clients.push(new Client(88, 'iii', 'ooo', '8@gmail.com', 888888,
    ['milk', 'bread', 'cheese']));
clients.push(new Client(9, 'ooo', 'ppp', '9@gmail.com', 999999,
    ['lettuce', 'tomatoes', 'cucumbers']));
clients.push(new Client(0, 'ppp', 'aaa', '0@gmail.com', 101010,
    ['bagels']));

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.
// Додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, capacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;

    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    this.info = () => console.log(`model - ${this.model},\nproducer - ${this.producer},\nyear - ${this.year},\nmaxSpeed - ${this.maxSpeed},\ncapacity - ${this.capacity}`);
    this.increaseMaxSpeed = newSpeed => {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = newValue => {
        this.year = newValue;
    };
    this.addDriver = driver => {
        this.driver = driver;
    };
}

let car = new Car('Camry', 'Toyota', 2017, 216, 3.5);
car.drive();
car.info();
car.increaseMaxSpeed(10);
car.changeYear(2019);
car.info();
car.addDriver(new User(11, 'qqq', 'www', '1@gmail.com', 111111));
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна.
// Додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass {
    constructor(model, producer, year, maxSpeed, capacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`model - ${this.model},\nproducer - ${this.producer},\nyear - ${this.year},\nmaxSpeed - ${this.maxSpeed},\ncapacity - ${this.capacity}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let carClass = new CarClass('Combo', 'Opel', 2010, 150, 1.3)
carClass.drive();
carClass.info();
carClass.increaseMaxSpeed(-15);
carClass.changeYear(2005);
carClass.info();
carClass.addDriver(new User(11, 'qqq', 'www', '1@gmail.com', 111111));
console.log(carClass);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}

let cinderellas = [
    new Cinderella('Julia', 22, 41),
    new Cinderella('Oksana', 21, 39),
    new Cinderella('Ivanna', 19, 37),
    new Cinderella('Alina', 20, 41),
    new Cinderella('Solomia', 21, 41),
    new Cinderella('Iryna', 23, 43),
    new Cinderella('Tanya', 21, 39),
    new Cinderella('Vasylyna', 19, 38),
    new Cinderella('Angelina', 21, 39),
    new Cinderella('Sofia', 23, 40)
];

console.log(cinderellas);

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince('Nazarii', 20, 37);

for (const cinderella of cinderellas) {
    if (cinderella.legSize === prince.shoeSize) {
        console.log(`Попелюшка ${cinderella.name} повинна бути з принцом ${prince.name}`);
    }
}

console.log(cinderellas.find((value) => value.legSize === prince.shoeSize));
