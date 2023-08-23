// - створити масив та вивести його в консоль:
// - з 5 числових значень
let array1 = [1, 2, 3, 4, 5];
for (const number of array1) {
    console.log(number);
}
console.log('');

// - з 5 стічкових значень
let array2 = ['a', 'b', 'c', 'd', 'e'];
for (const string of array2) {
    console.log(string);
}
console.log('');

// - з 5 значень стрічкового, числового та булевого типу
let array3 = ['a', 2, true, 'e', false];
for (const element of array3) {
    console.log(element);
}
console.log('');

// - Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array4 = [];
for (let i = 0; i < 5; i++) {
    array4[i] = i;
}
console.log(array4);
console.log('');

// - є масив [2,17,13,6,22,31,45,66,100,-18]:
// 1. перебрати його циклом while
let array5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < array5.length) {
    console.log(array5[i]);
    i++;
}
console.log('');

// 2. перебрати його циклом for
for (const number of array5) {
    console.log(number);
}
console.log('');

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < array5.length) {
    if (i % 2 !== 0) {
        console.log(array5[i]);
    }
    i++;
}
console.log('');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < array5.length; j++) {
    if (j % 2 !== 0) {
        console.log(array5[j]);
    }
}
console.log('');

// 5. перебрати циклом while та вивести числа тільки парні значення
i = 0;
while (i < array5.length) {
    if (array5[i] % 2 === 0) {
        console.log(array5[i]);
    }
    i++;
}
console.log('');

// 6. перебрати циклом for та вивести числа тільки парні значення
for (let j = 0; j < array5.length; j++) {
    if (array5[j] % 2 === 0) {
        console.log(array5[j]);
    }
}
console.log('');

// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < array5.length; j++) {
    if (array5[j] % 3 === 0) {
        array5[j] = 'okten';
    }
    console.log(array5[j]);
}
console.log('');

// 8. вивести масив в зворотньому порядку.
for (let j = array5.length - 1; j >= 0; j--) {
    const element = array5[j];
    console.log(element);
}
console.log('');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
array5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i = array5.length - 1;
while (i >= 0) {
    console.log(array5[i]);
    i--;
}
console.log('');

// 2. перебрати його циклом for
for (let j = array5.length - 1; j >= 0; j--) {
    const element = array5[j];
    console.log(element);
}
console.log('');

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = array5.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(array5[i]);
    }
    i--;
}
console.log('');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = array5.length - 1; j >= 0; j--) {
    if (j % 2 !== 0) {
        console.log(array5[j]);
    }
}
console.log('');

// 5. перебрати циклом while та вивести числа тільки парні значення
i = array5.length - 1;
while (i >= 0) {
    if (array5[i] % 2 === 0) {
        console.log(array5[i]);
    }
    i--;
}
console.log('');

// 6. перебрати циклом for та вивести числа тільки парні значення
for (let j = array5.length - 1; j >= 0; j--) {
    if (array5[j] % 2 === 0) {
        console.log(array5[j]);
    }
}
console.log('');

// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = array5.length - 1; j >= 0; j--) {
    if (array5[j] % 3 === 0) {
        array5[j] = 'okten';
    }
    console.log(array5[j]);
}
console.log('');

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let array6 = [2, 3, 6, 1, -55, 88, 69, 11, 2, -18];
for (const number of array6) {
    console.log(number);
}
console.log('');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let array7 = ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core'];
for (const string of array7) {
    console.log(string);
}
console.log('');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let array8 = [1, 5, true, 'htrh', false, 7557, 'mhjmjh', true, 68, 'oooo'];
for (const array8Element of array8) {
    console.log(array8Element);
}
console.log('');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// булеві елементи
for (const array8Element of array8) {
    if (typeof array8Element === 'boolean') {
        console.log(array8Element);
    }
}
console.log('');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи
for (const array8Element of array8) {
    if (typeof array8Element === 'number') {
        console.log(array8Element);
    }
}
console.log('');

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// рядкові елементи
for (const array8Element of array8) {
    if (typeof array8Element === 'string') {
        console.log(array8Element);
    }
}
console.log('');

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let array9 = [];
array9[0] = 1;
array9[1] = true;
array9[2] = false;
array9[3] = 'hkhkgh';
array9[4] = 765;
array9[5] = true;
array9[6] = 452;
array9[7] = '254';
array9[8] = false;
array9[9] = 'mmmm';
for (const array9Element of array9) {
    console.log(array9Element);
}
console.log('');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 10; j++) {
    console.log(j);
    document.write(`${j}<br>`);
}
console.log('');
document.write(`<br>`);

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++) {
    console.log(j);
    document.write(`${j}<br>`);
}
console.log('');
document.write(`<br>`);

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j += 2) {
    console.log(j);
    document.write(`${j}<br>`);
}
console.log('');
document.write(`<br>`);

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j % 2 === 0) {
        console.log(j);
        document.write(`${j}<br>`);
    }
}
console.log('');
document.write(`<br>`);

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j % 2 !== 0) {
        console.log(j);
        document.write(`${j}<br>`);
    }
}
console.log('');
document.write(`<br>`);

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        name: 'lhksdaaloks',
        pageCount: 2,
        authors: [{name:'QWE'}],
        genres: ['qqq', 'www'],
    },
    {
        name: 'ETThytjtykuylylghghmgE',
        pageCount: 10,
        authors: [{name:'ERTY'}, {name:'Mgrre'}],
        genres: ['uuiu'],
    },
    {
        name: 'kuylylylyujy',
        pageCount: 42,
        authors: [ {name:'Mum'}, {name:'jLllfe'}],
        genres: ['popo', 'aeder', 'grjyjy'],
    },
    {
        name: 'Rom',
        pageCount: 18,
        authors: [ {name:'pooipo'}],
        genres: ['iegwe', 'kyure', 'gkjfdlk'],
    },
    {
        name: 'Komand',
        pageCount: 200,
        authors: [ {name:'Wuirt'}, {name:'Andhtr'}],
        genres: ['Kikak'],
    },
    {
        name: 'uiuijyt',
        pageCount: 120,
        authors: [ {name:'Oat'}, {name:'Momn'}],
        genres: ['Gutt'],
    },
]

// -знайти наібльшу книжку.
let id;
let x = 0;
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (book.pageCount > x) {
        x = book.pageCount;
        id = j;
    }
}
console.log(books[id]);
console.log('');

// - знайти книжку/ки з найбільшою кількістю жанрів
x = 0;
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (book.genres.length > x) {
        x = book.genres.length;
        id = j;
    }
}
console.log(books[id]);
console.log('');

// - знайти книжку/ки з найдовшою назвою
x = 0;
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (book.name.length > x) {
        x = book.name.length;
        id = j;
    }
}
console.log(books[id]);
console.log('');

// - знайти книжку/ки які писали 2 автори
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (book.authors.length === 2) {
        x = book.authors.length;
        id = j;
    }
}
console.log(books[id]);
console.log('');

// - знайти книжку/ки які писав 1 автор
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (book.authors.length === 1) {
        x = book.authors.length;
        id = j;
    }
}
console.log(books[id]);
console.log('');
