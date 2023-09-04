// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1, str1.length);
console.log(str2, str2.length);
console.log(str3, str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
str1 = str1.toUpperCase();
str2 = str2.toUpperCase();
str3 = str3.toUpperCase();

console.log(str1);
console.log(str2);
console.log(str3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
str1 = str1.toLowerCase();
str2 = str2.toLowerCase();
str3 = str3.toLowerCase();

console.log(str1);
console.log(str2);
console.log(str3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str4 = ' dirty string   ';

console.log(str4.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';

let arr = (str) => str.split(' ');

console.log(arr(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

console.log(numbers.map(item => item.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меншого, або навпаки
// в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];

let sortNums = (arr, type) => {
    if (type === 'ascending') {
        return arr.sort((a, b) => a - b);
    }
    if (type === 'descending') {
        return arr.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortByMonthDuration = coursesAndDurationArray.sort((a, b) => {
    if (a.monthDuration > b.monthDuration) {
        return 1;
    }
    if (a.monthDuration < b.monthDuration) {
        return -1;
    }
    if (a.monthDuration === b.monthDuration) {
        return 0;
    }
})

console.log(sortByMonthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(item => item.monthDuration > 5);

console.log(filter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration};
});

console.log(map);

// =========================
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let value = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let color = ['red', 'black'];
let deck = [];

for (const cardSuitItem of cardSuit) {
    let cardColor;
    if (cardSuitItem === 'spade' || cardSuitItem === 'clubs') {
        cardColor = color[1];
    } else {
        cardColor = color[0];
    }
    for (const valueItem of value) {
        deck.push({'suit': cardSuitItem, 'value': valueItem, 'color': cardColor});
    }
}
console.log(deck);

console.log(deck.find(value => value.suit === 'spade' && value.value === 'A'));
console.log(deck.filter(value => value.value === '6'));
console.log(deck.filter(value => value.color === 'red'));
console.log(deck.filter(value => value.suit === 'diamond'));
console.log(deck.filter(value => value.suit === 'clubs' && ['9', '10', 'J', 'Q', 'K', 'A'].includes(value.value)));

// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log(deck.reduce((accumulator, card) => {
    switch (card.suit) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
            break;
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []}));

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((item) => item.modules.includes('sass')));

// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((item) => item.modules.includes('docker')));
