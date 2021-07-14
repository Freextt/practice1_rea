//1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
let str = 'Привіт';
console.log(typeof str);
let num = 123;
console.log(typeof num);
let flag = true;
console.log(typeof flag);
let txt = 'true';
console.log(typeof txt);
//Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
let a1 = (10 + 7) * 2;
console.log(a1);
let a2 = (8 / 2) * 3;
console.log(a2);
let a3 = (11 * 3) + 33;
console.log(a3);
let a4 = (60 - 15) * 2;
console.log(a4);
let a5 = (9 * 9) + 6;
console.log(a5);
//Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
let a6 = 2;
let a7 = 3;
let a8 = '53';
let a9 = 2;
let a10 = '75кг';
//Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.
let height =23;
let width = 10;
let s = height * width;
console.log(s);
//Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
heightC = 10;
 dC = 4;
let v = Math.PI * Math.pow(dC,2) * heightC;
console.log(v);
// У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
let n = 3;
let m = 4;
let k = (Math.pow(n,2) + Math.pow(m,2))/2;
console.log(k);
//8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
let name = 'Oleh';
let secondName = 'Romanovych';
let surName = 'Sam';
alert(`${name}\n${secondName}\n${surName}`);
// Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
let str1 = 'Who ';
let str2 =  'are ';
let str3 = 'you?';
let concatenation = str1 + str2 + str3;
document.write(concatenation);
//Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let strN = "20";
     let a = 5;
     document.write(strN + a + "<br/>");// 205<br/> string
     document.write(strN - a + "<br/>");// 15<br/>  string
     document.write(strN * "2" + "<br/>");// 40<br/> string
     document.write(strN / 2 + "<br/>");// 10<br/> string
//С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
let num1 = +prompt('Enter first number');
let num2 = +prompt('Enter second number');
alert(num1 + num2);
//С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
let userName = prompt('Введіть ваше ім*я');
let userSurname = prompt('Введіть ваше прізвище');
let age = parseInt(prompt('Введіть скільки вам років'));
alert(`Доброго вечора ${userName} ${userSurname}, мої привітання з тим що вам ${age}`);
//Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
let number1 = +prompt('Число 1');
let number2 = +prompt('Число 2');
let number3 = +prompt('Число 3');
if (number1 < number2 && number1 < number3 && number2 < number3){
 console.log(number1,number2,number3);
}else if(number2 < number1 && number2 < number3 && number1 < number3){
 console.log(number2,number1,number3)
}else if (number3 < number1 && number3 < number2 && number1 < number2){
 console.log(number3,number1,number2);
}else if(number2 < number1 && number2 < number3 && number3 < number1){
 console.log(number2,number3,number1)
}else if (number1 < number2 && number1 < number3 && number3 < number2) {
 console.log(number1, number3, number2);
}else if (number3 < number1 && number3 < number2 && number2 < number1){
 console.log(number3,number2,number1);
}
//Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
let color = prompt('Color');
switch (color) {
 case 'green':
  alert('GO!');
  break;
 case 'yellow':
  alert('WAIT!');
  break;
 case 'red':
  alert('STOP');
  break;
 default:
  alert('DO WHAT U WANT!');
  break;
}
//Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

let isRoadClear = confirm('Is road clear?');
let trafficLight = prompt('color');


switch(trafficLight){
    case 'green':
    isRoadClear ? console.log('Go'): console.log('Stop')
    break;
    case 'yellow':
    isRoadClear ? console.log('Go'): console.log('Stop')
    break;
    case 'green':
    isRoadClear ? console.log('Go'): console.log('Stop')
    break;

}