//--створити масив з:
//    - з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//- та вивести його в консоль
let numArr = [5,15,55,25,555];
console.log(numArr);
let strArr = ['ckwn','cjercu','jchbwi','chwbwi','cnebh'];
console.log(strArr);
let mixArr = ['fuiwm',5,true,false,'vevheuv'];
console.log(mixArr);
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let newArr = [];
newArr[0] = 'hi';
newArr[1] = 5;
newArr[2] = true;
newArr[3] = false;
console.log(newArr);
//
for (let i = 0; i < 10; i++) {
    document.write(`<div>Hi!</div>`)
}
//
for (let i = 0; i < 10; i++) {
    document.write(`<div>Your index is ${[i]}</div>`)

}
//
let i = 0;
while (i < 20){
    document.write('<h1>LoL</h1>');
    i++;
}
//
let x = 0;
while (x < 20){
    document.write(`<h1>My in index is ${x}</h1>`);
    x++;
}
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let numbers = [1,2,3,4,5,6,7,8,9,10];
for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[j]);
}
//
let words = ['oveme','cmwnwj','cincwnon','cnjwocnj','cnwjncw','vjenvnoe','woeifpwn','cjwhiewoc','kwhuchwu','kwcuwn'];
for (let j = 0; j < words.length; j++) {
    console.log(words[j]);
}
//
let mixedArray = [true,false,5,12,'string',undefined,null,{},'cmiece',5.12];
for (let j = 0; j < mixedArray.length; j++) {
    console.log(mixedArray[j]);
}
//
let mass = ['clock',false,true,57435,null,'cnjewn',undefined,557,'cwhciuwbnc','name','id'];
for (let j = 0; j < mass.length; j++) {
    if (typeof mass[j] === "boolean"){
        console.log(mass[j]);
    }
}
//

for (let j = 0; j < mass.length; j++) {
    if (typeof mass[j] === "number"){
        console.log(mass[j]);
    }
}
//

for (let j = 0; j < mass.length; j++) {
    if (typeof mass[j] === "string"){
        console.log(mass[j]);
    }
}
// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
let emptArray = [];
emptArray[0] = true;
emptArray[1] = false;
emptArray[2] = 'cwnwojc';
emptArray[3] = undefined;
emptArray[4] = null;
emptArray[5] = {};
emptArray[6] = 555;
emptArray[7] = 'cmkwkcnwc';
emptArray[8] = 'kxqpijxnq';
emptArray[9] = 423452;
emptArray[10] = 'vknrvej';
console.log(emptArray);
//
for (let j = 0; j < 10; j++) {
    console.log(`<p>${[j]}</p>`);
    document.write(`<p>${[j]}</p>`);
}

////
for (let l = 0; l < 100; l+=2) {
    console.log(`<p>${[l]}</p>`);
    document.write(`<p>${[l]}</p>`);
}
////

for (let k = 0; k < 100; k++) {
    console.log(`<p>${[k]}</p>`);
    document.write(`<p>${[k]}</p>`);
}
//

for (let j = 0; j < 100; j++) {
    if ([j]%2 === 0){
        console.log(`<p>${[j]}</p>`);
        document.write(`<p>${[j]}</p>`);
    }
}
//
for (let i = 0; i < 100; i++) {
    if([i]%2 === 1){
        console.log(`<p>${[i]}</p>`);
        document.write(`<p>${[i]}</p>`);
    }

}
//- Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id){
            user.address = city;
        }
    }
}
console.log(usersWithId);