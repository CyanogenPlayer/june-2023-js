// console.log(document);
// console.log(document.head);
// console.log(document.body);
//
// let ul1 =  document.getElementById('list-1');
// console.log(ul1);
// console.log(ul1.classList);
// ul1.classList.add('new');
// ul1.style.backgroundColor = 'darkcyan';
//
// let ulList = document.body.getElementsByClassName('menu');
// console.log(ulList);
// for (const ul of ulList) {
//     console.log(ul);
// }
//
// let liList = document.body.getElementsByTagName('li');
// console.log(liList);
// for (const li of liList) {
//     // console.log(li.innerText);
//     li.innerText = 'aboba';
// }

// let targets = document.getElementsByClassName('target');
// let div = targets[0];
// console.log(div);
// div.innerHTML = '<h2>xxx</h2><p>lorem</p><h3>xxx</h3>';

// let lis =  document.querySelectorAll('.menu > li');
// console.log(lis);

// let ull = document.getElementsByClassName('menu')[0];
// console.log(ull.children);
// console.log(ull.childNodes);

// let p = document.createElement('p');
// p.innerText = 'lorem';
// p.classList.add('xxx');
// p.setAttribute('id', 'idxxxx');
// // document.body.appendChild(p);
// let target = document.getElementsByClassName('target')[0];
// // target.appendChild(p);
// // target.appendChild(p.cloneNode(true));
// target.append(p, p.cloneNode(true), p.cloneNode(true));

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true}
]; // [{name : string,age :number, status:boolean}]

for (const user of users) {
    let div = document.createElement('div');
    div.classList.add('user');
    let h2 = document.createElement('h2');
    h2.innerText = `${user.name},  ${user.age}`;
    let h3 = document.createElement('h3');
    h3.innerText = `status - ${user.status}`;
    div.append(h2, h3);
    document.body.appendChild(div);
}
