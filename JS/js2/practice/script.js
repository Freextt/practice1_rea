const mar = ['a','b','c'];
for(let i = 1;i<4;i++){
    mar.push(i);
}
console.log(mar);

const nm = [1,2,3];
nm.reverse();
console.log(nm);

const ltr =[1,2,3];
ltr.push(4,5,6);
console.log(ltr);

const sft = [1,2,3];
sft.unshift(4,5,6);
console.log(sft);
//
//
const pol = [1,2,3,4,5];
console.log(pol.slice(3));
//
//Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
const arr = [1,2,3,4,5];
console.log(arr.slice(0,2));
//Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
const array = [1,2,3,4,5];
let a1 = 'a';
let b1 = 'b';
let c1 = 'c';
array.push(a1,b1,c1);
console.log(array);
//
//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let array2 = [1,2,3,4,5,6,7,8,9,10];
let newArr = [];
for (let i = 0; i < array2.length; i++) {
    if (array2[i]%2 === 0){
        newArr.push(array2[i]);
    }
}
console.log(newArr);
// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
let arr3 = [1,2,3,4,5,6,7,8,9,10];
let newArr1 = [];
for (let i = 0; i < arr3.length; i++) {
     newArr1.push(arr3[i]);
}
console.log(newArr1);
//
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let wrd = ['a','b','c'];
let rtt = "";
for (let i = 0; i < wrd.length; i++) {
    rtt += wrd[i];
}
console.log(rtt);
//
let newWrd = ['a','b','c'];
let i = 0;
while (i < newWrd.length){
    rtt = rtt + newWrd[i];
    i++;
}
console.log(newWrd);
//
let newStr = "";
for (let item of wrd) {
    newStr += item;
}
console.log(newStr);
//
let wRd = "";
for (let key in wrd) {
    wRd += wrd[key];
}
console.log(wRd);
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
//
//
let newMass = [2,17,13,6,22,31,45,66,100,-18];
let x = 0;
while (x < newMass.length){
    console.log(newMass[x]);
    x++;
}
//
let newMass1 = []
for (let j = 0; j < newMass.length; j++) {
     newMass1.push(newMass[j]);
}
console.log(newMass1);
//
let c = 0;
while(c < newMass.length){
    if(c%2 === 1){
        console.log(newMass[c]);
    }
    c++;
}
//
for (let j = 0; j < newMass1.length; j++) {
    if(j%2 === 1){
        console.log(newMass[j]);
    }
}
//
let o = 0;
while(o < newMass.length){
    if(o%2 === 0){
        console.log(newMass[o]);
    }
    o++;
}
//
for (let j = 0; j < newMass1.length; j++) {
    if(j%2 === 0){
        console.log(newMass[j]);
    }
}
//
for (let j = 0; j < newMass.length; j++) {
    if(j%3 === 0){
        newMass[j] = 'okten';
    }
    console.log(newMass[j]);
}
//
let reversed = newMass.reverse();
console.log(reversed);
//
//let newMass = [2,17,13,6,22,31,45,66,100,-18];
// let x = 0;
// while (x > newMass.length){
//     console.log(newMass[x]);
//     x--;
// }
// //
// let newMass1 = []
// for (let j = 0; j > newMass.length; j--) {
//      newMass1.push(newMass[j]);
// }
// console.log(newMass1);
// //
// let c = 0;
// while(c > newMass.length){
//     if(c%2 === 1){
//         console.log(newMass[c]);
//     }
//     c--;
// }
// //
// for (let j = 0; j > newMass1.length; j--) {
//     if(j%2 === 1){
//         console.log(newMass[j]);
//     }
// }
// //
// let o = 0;
// while(o > newMass.length){
//     if(o%2 === 0){
//         console.log(newMass[o]);
//     }
//     o--;
// }
// //
// for (let j = 0; j > newMass1.length; j--) {
//     if(j%2 === 0){
//         console.log(newMass[j]);
//     }
// }
// //
// for (let j = 0; j > newMass.length; j--) {
//     if(j%3 === 0){
//         newMass[j] = 'okten';
//     }
//     console.log(newMass[j]);
// }
//10
// //  створити пустий масив та :
// // - заповнити його 50 парними числами за допомоги циклу.
// // - заповнити його 50 непарними числами за допомоги циклу.
let oddArr = [];
let evenArr = [];
for (let j = 0; j < 50; j++) {
    if(j%2 === 1){
        evenArr.push(j);
    }
}
console.log(evenArr);
for (let j = 2; j < 50; j++) {
    if(j%2 === 0){
        oddArr.push(j);
    }
}
console.log(oddArr);
//. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//  2. Вивести за допомогою console.log кожен третій елемен
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let rndArr = [];
//for (let j = 0; j < 20; j++) {
//    rndArr[j] = Math.floor(Math.random() * 10);
//
//}
//console.log(rndArr);
for (let j = 0; j < 20; j++) {
    rndArr[j] = Math.floor(Math.random()* (732 - 8)+ 8);
}
console.log(rndArr);
//
for (let j = 0; j < rndArr.length; j+=3) {
    console.log(rndArr[j]);
}
//
let newArray = [];
for (let j = 2; j < rndArr.length; j+=3) {
    if(j%2 === 0) {
        newArray.push(rndArr[j]);
    }
}
console.log(newArray);
//
let array3 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let j = 0; j < array3.length; j++) {
    if((array3[j+1])%2 === 0){
        console.log(array3[j]);
    }
}
//Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let avg = [100,250,50,168,120,345,188];
let quantify = 0;
for (let j = 0; j < avg.length; j++) {
    quantify += avg[j];
}
let newAvg = quantify/avg.length;
console.log(newAvg);
// Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let newArray12 = [];
for (let j = 0; j < 10; j++) {
    let arRay = (Math.floor(Math.random()*10))*5;
    newArray12.push(arRay);
}
console.log(newArray12);
//Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив
let mix = ['string',5,false,true,555,'oleh',undefined,null];
numArr = [];
for (let j = 0; j < mix.length; j++) {
    if(typeof (mix[j]) === `number`){
        numArr.push(mix[j]);
    }
}
console.log(numArr);