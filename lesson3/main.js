// let x = 0;
// x = x + 10;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// ++x;
// console.log(x);

// let a = 0;
// // let b = a++;
// let b = ++a;
// console.log(a, b);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     const coursesAndDurationArrayElement = coursesAndDurationArray[i];
//     document.write(`<div>${coursesAndDurationArrayElement.title}</div>`);
// }

// for (let i = coursesAndDurationArray.length - 1; i >= 0; i--) {
//     const coursesAndDurationArrayElement = coursesAndDurationArray[i];
//     document.write(`<div>${coursesAndDurationArrayElement.title}</div>`);
// }

// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     console.log(coursesAndDurationArrayElement);
// }

// for (const element of coursesAndDurationArray) {
//     for (const field in element) {
//         console.log(field, element[field]);
//     }
//     console.log('');
// }

// let i = 0;
// while (i < coursesAndDurationArray.length) {
//     let element = coursesAndDurationArray[i];
//     console.log(element);
//     i++;
// }

do {
    console.log('do');
} while (false)
