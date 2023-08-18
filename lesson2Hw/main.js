// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let technologies = [
    'JavaScript',
    'Java',
    'Python',
    'Ruby',
    'HTML/CSS',
    'React',
    'NodeJS',
    'Angular',
    'C++',
    'C#'
];

console.log(technologies);
console.log(technologies.length)
console.log(technologies[0]);
console.log(technologies[1]);
console.log(technologies[2]);
console.log(technologies[3]);
console.log(technologies[4]);
console.log(technologies[5]);
console.log(technologies[6]);
console.log(technologies[7]);
console.log(technologies[8]);
console.log(technologies[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Відьмак. Останнє бажання',
    pageCount: 288,
    genre: 'Фентезі'
}
let book2 = {
    title: 'Поглиначі мертвих',
    pageCount: 272,
    genre: 'Фантастика'
}
let book3 = {
    title: 'Записано на кістках. Друге розслідування',
    pageCount: 384,
    genre: 'Детектив'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'Томіе. Том 1',
    pageCount: 374,
    genre: 'Манга',
    authors: [
        {name: 'Джюнджі Іто', age: 60}
    ]
}
let book5 = {
    title: 'Характерник',
    pageCount: 304,
    genre: 'Бойовик',
    authors: [
        {name: 'Василь Шкляр', age: 72}
    ]
}
let book6 = {
    title: 'На Західному фронті без змін',
    pageCount: 240,
    genre: 'Воєнна проза',
    authors: [
        {name: 'Еріх Марія Ремарк', age: 72}
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача
let users = [
    {name: 'vasya', username: 'vas', password: '1'},
    {name: 'petya', username: 'pet', password: '2'},
    {name: 'kolya', username: 'kol', password: '33'},
    {name: 'olya', username: 'ol', password: '44'},
    {name: 'max', username: 'm', password: '555'},
    {name: 'anya', username: 'an', password: '666'},
    {name: 'oleg', username: 'oleg', password: '7777'},
    {name: 'andrey', username: 'andr', password: '8888'},
    {name: 'masha', username: 'mash', password: '99999'},
    {name: 'olya', username: 'ol2', password: '00000'}
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
// що дорівнює 1, 0, -3
let x;
x = -3;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).
let time;
time = 17;

if (time >= 0 && time < 16) {
    console.log('I');
} else if (time >= 16 && time < 31) {
    console.log('II');
} else if (time >= 31 && time < 46) {
    console.log('III');
} else if (time >= 46 && time < 60) {
    console.log('IV');
} else {
    console.log('error');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
let day;
day = 27;

if (day >= 1 && day < 11) {
    console.log('I')
} else if (day >= 11 && day < 21) {
    console.log('II');
} else if (day >= 21 && day < 32) {
    console.log('III');
} else {
    console.log('error');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayNumber;
dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Error')
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let a, b;
a = 5;
b = 2;

if (a > b) {
    console.log('max', a)
} else if (b > a) {
    console.log('max', b)
} else {
    console.log('equal')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподібні, тобто приводиться до false)
let x1 = undefined;
x1 = x1 || 'default';

console.log(x1);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців
// вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title, 'Супер');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title, 'Супер');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title, 'Супер');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title, 'Супер');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title, 'Супер');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title, 'Супер');
}
