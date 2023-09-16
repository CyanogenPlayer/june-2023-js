// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим
// об'єктом
let f1 = document.forms.f1;

f1.onsubmit = function (e) {
    e.preventDefault();
    let userDiv = document.createElement('div');
    userDiv.append(`${this.name.value} ${this.surname.value}, ${this.age.value}`);
    document.body.appendChild(userDiv);
}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1
let refreshCountDiv = document.createElement('div');
document.body.appendChild(refreshCountDiv);

window.onload = function () {
    let refreshCount = JSON.parse(localStorage.getItem('refreshCount')) || 0;
    refreshCountDiv.innerText = `к-сть перезавантажень: ${refreshCount}`;
    refreshCount++;
    localStorage.setItem('refreshCount', JSON.stringify(refreshCount));
};

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої
// потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати
// дом структуру під кожну сессію
window.addEventListener('load', function () {
    let time = Date();
    console.log(time);
    let timeArray = JSON.parse(sessionStorage.getItem('time')) || [];
    timeArray.push(time);
    sessionStorage.setItem('time', JSON.stringify(timeArray));
});

// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
const array = [];
for (let i = 1; i <= 100; i++) {
    const user = {
        id: i,
        name: `User ${i}`,
        age: i + 18
    };
    array.push(user);
}

function showUsers(startIndex, endIndex) {
    let usersDiv = document.getElementsByClassName('users')[0];
    usersDiv.innerHTML = '';
    for (let i = startIndex; i < endIndex; i++) {
        const item = array[i];
        let div = document.createElement('div');
        div.innerText = `${item.id}. ${item.name}, ${item.age}`
        usersDiv.appendChild(div);
    }
}

let startIndex = 0;
let endIndex = 10;
showUsers(startIndex, endIndex);

let prevButton = document.getElementsByName('prev')[0];
prevButton.onclick = function () {
    startIndex -= 10;
    endIndex -= 10;
    showUsers(startIndex, endIndex);
};

let nextButton = document.getElementsByName('next')[0];
nextButton.onclick = function () {
    startIndex += 10;
    endIndex += 10;
    showUsers(startIndex, endIndex);
};

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".
let h2 = document.createElement('h2');
h2.innerText = 'lorem';
h2.id = 'text';
document.body.appendChild(h2);

let button = document.createElement('button');
button.innerText = 'do smth2';
document.body.appendChild(button);
button.onclick = function () {
    h2.remove();
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form = document.createElement('form');
let input = document.createElement('input');
input.type = 'number';
let button2 = document.createElement('button');
button2.innerText = 'do smth3'
form.append(input, button2);
document.body.appendChild(form);

form.onsubmit = function (e) {
    e.preventDefault();
    if (input.value > 18) {
        alert('good');
    } else {
        alert('bad');
    }
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let form2 = document.createElement('form');
let input2 = document.createElement('input');
input2.type = 'number';
let input3 = document.createElement('input');
input3.type = 'number';
let input4 = document.createElement('input');
let button3 = document.createElement('button');
button3.innerText = 'do smth4'
form2.append(input2, input3, input4, button3);
document.body.appendChild(form2)

form2.onsubmit = function (e) {
    e.preventDefault();
    let table = document.createElement('table');
    for (let i = 0; i < input2.value; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < input3.value; j++) {
            let td = document.createElement('td');
            td.innerText = input4.value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
};

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого
// є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let addGrivnjasDiv = document.createElement('div');
document.body.appendChild(addGrivnjasDiv);

window.addEventListener('load', function () {
    let currentTime = new Date();
    let lastTime = localStorage.getItem('lastTime');
    let addGrivnjas = JSON.parse(localStorage.getItem('addGrivnjas')) || 100;
    if (!lastTime || (currentTime - Date.parse(lastTime)) > 10000) {
        addGrivnjas += 10;
        localStorage.setItem('lastTime', currentTime);
    }
    addGrivnjasDiv.innerText = `к-сть гривнів))): ${addGrivnjas}`;
    localStorage.setItem('addGrivnjas', JSON.stringify(addGrivnjas));
});
