let str = 'Привіт';
let num = 123;
let flag = true;
let txt = 'true';

console.log(typeof str);
console.log(typeof num);
console.log(typeof true);
console.log(typeof 'true');
//
//
//
let a1 = ((15 - 5) * 2) + 14;
let a2 = ((18-15) + 3)* 2;
let a3 = ((11 * 3) + (99 / 3));
let a4 = ((3 * 10) + (90 - 30));
let a5 = ((5 * 9) + (45 - 3));
//
//
//
let a6 = 2;
let a7 = 3;
let a8 = 53;
let a9 = 2;
//let a10 = 75кг;
//
//
//
let height = 13;
let width = 10;
let s = height + width;
//
//
//
  heightC = 10;
  dC = 4;
 let v = Math.PI * Math.pow(4,2) * 10;
console.log(v);
//
//
//
let k = (Math.pow(3,2) + Math.pow(4,2))/2;
console.log(k);
//
//
//
 name = 'Oleh';
 age = 26;
 hobby = 'sport';
alert(`${name}\n${age}\n${hobby}`);
//
//
//
let str1 = 'Кто';
let str2 = 'ты';
let str3 = 'такой?';
let concat = str1 + ' ' + str2 + ' ' + str3;
document.write(concat);
//
//
//
let strr = "20";
let a = 5;
document.write(strr + a + "<br/>");//205
document.write(strr - a + "<br/>");//15
document.write(strr * "2" + "<br/>");//40
document.write(strr / 2 + "<br/>");//10
//
//
//
//С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
let e = prompt();
let e1 = parseInt(e);
let g = prompt()
let g1 = parseInt(g);
let sum1 = e1 + g1;
alert(sum1);
//
//
//С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст,
// а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
let name12 = prompt('Enter your name');
let surName = prompt('Enter your surname');
let agE = +prompt('Enter your age');
let msg = 'Доброго вечора' + ' ' + name12 + ' ' + surName + ' ' + 'вітаю вас з тим що вам' + ' ' + agE;
alert(msg);
//
//
//

//1. Три різних числа вводяться через prompt().
 //   За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
//let num1 = +prompt();
//let num2 = +prompt();
//let num3 = +prompt();
//Все параматры получаем с клавиатуры!!!!
 //   Имитируем поведение пешехода на перекстке.
    //   Если светофор зеленый - вывести "иди".
    // Если светофор желтый - вывести "подожди".
    // Если светофор красный - вывести "стой".
    // Если светофор в аварийном режиме вывести "делай что хочешь"!
let color = prompt();
switch (color){
    case 'green':
        console.log('GO');
        break;
    case 'yellow':
        console.log('wait');
        break;
    case 'red':
        console.log('stop');
        break;
    default:
        console.log('Go carefully!');
        break;
}
//Все параметры получаем с клавиатуры!!!!(prompt , confirm)
//Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//    Улучшаем предыдущее задание.
//    Если светофор зеленый и машин нет - вывести "иди".
//    Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
//Если светофор желтый и машины есть - вывести "жди".
//    Если светофор желтый и машин нет - вывести "все рано жди".
//    Если светофор красный и машин нет- вывести "стой все рано".
//    Если светофор красный - и машины есть вывести "стой и жди".
//    Если светофор в аварийном режиме вывести "делай что хочешь"!
let isRoadClear = confirm('На дорозі є машини?');
if (isRoadClear === false){
    let color1 = prompt();
    switch (color1){
        case 'green':
            console.log('GO');
            break;
        case 'yellow':
            console.log('wait');
            break;
        case 'red':
            console.log('stop');
            break;
        default:
            console.log('Go carefully!');
            break;
    }
}else if (isRoadClear === true){
    let color2 = prompt();
    switch (color2){
        case 'green':
            console.log('Pass those stupid drivers');
            break;
        case 'yellow':
            console.log('wait');
            break;
        case 'red':
            console.log('stop and wait!');
            break;
        default:
            console.log('Do what u want');
            break;
    }
}