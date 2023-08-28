// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaOfRectangle(a, b) {
    return a * b;
}

console.log(areaOfRectangle(2, 2));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfCircle(r) {
    return Math.PI * Math.pow(r, 2);
}

console.log(areaOfCircle(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaOfCylinder(r, h) {
    return 2 * Math.PI * r * (r + h);
}

console.log(areaOfCylinder(2, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
function printArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]
printArray(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textParagraph(text) {
    document.write(`<p>${text}</p>`);
}

textParagraph('Hello, world!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function unorderedList(text) {
    document.write(`
                    <ul>
                        <li>1 ${text}</li>
                        <li>2 ${text}</li>
                        <li>3 ${text}</li>
                    </ul>
    `);
}

unorderedList('Lorem ipsum dolor.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
function unorderedListWithSize(text, size) {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>${i} ${text}</li>`);
    }
    document.write(`</ul>`);
}

unorderedListWithSize('Lorem ipsum.', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function unorderedListWithArray(array) {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

unorderedListWithArray(['string', 55, true, -0.6, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для
// кожного об'єкту окремий блок.
function printUsers(users) {
    document.write(`<div style="display: flex; flex-wrap: wrap;">`);
    for (const user of users) {
        document.write(`
                        <div style="flex: 50%; background-color: darkcyan;">
                            <h2>${user.id} - ${user.name} - ${user.username} </h2>
                        </div>
        `);
    }
    document.write(`</div>`);
}

let people = [
    {id: 1, name: 'qqq', age: 22},
    {id: 2, name: 'www', age: 23},
    {id: 3, name: 'eee', age: 25},
    {id: 4, name: 'rrr', age: 19},
    {id: 5, name: 'ttt', age: 25},
    {id: 6, name: 'yyy', age: 39}
];
printUsers(people);

// - створити функцію яка повертає найменше число з масиву
function getMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        }
    }
    return min;
}

console.log(getMin([-4, 10.6, -4.5, 22, -69]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад
// sum([1,2,10]) //->13
function sum(array) {
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
}

console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах. Приклад
// swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

let numbers = [11, 22, 33, 44];
console.log(numbers);
swap(numbers, 0, 1);
console.log(numbers);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency). Приклад
// exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const element of currencyValues) {
        if (element.currency === exchangeCurrency) {
            return sumUAH / element.value;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}],
    'USD'));
