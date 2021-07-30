//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
  //  Вивести кожну змінну за допомогою: console.log , alert, document.write
let a = 'hello';
console.log(a);
alert(a);
document.write(a);
let b = 'owu';
console.log(b);
alert(b);
document.write(b);
let c = 'com';
console.log(c);
alert(c);
document.write(c);
let d = 'ua';
console.log(d);
alert(d);
document.write(d);
let num1 = 1;
console.log(num1);
alert(num1);
document.write(num1);
let num2 = 10;
console.log(num2);
alert(num2);
document.write(num2);
let num3 = 99;
console.log(num3);
alert(num3);
document.write(num3);
let num4 = -999;
console.log(num4);
alert(num4);
document.write(num4);
let num5 = 123;
console.log(num5);
alert(num5);
document.write(num5);
let num6 = 3.14;
console.log(num6);
alert(num6);
document.write(num6);
let num7 = 2.7;
console.log(num7);
alert(num7);
document.write(num7);
let num8 = 16;
console.log(num8);
alert(num8);
document.write(num8);
let bol = true;
console.log(bol);
alert(bol);
document.write(bol);
let bol2 = false;
console.log(bol2);
alert(bol2);
document.write(bol2);
a = 'fence';
b = 'cwkn';
c = 'cwoonw';
d = 'ckwnwojn';
//- Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
num1 = 5;
console.log(num1);
alert(num1);
document.write(num1);
num2 = 55;
console.log(num2);
alert(num2);
document.write(num2);
num3 = 555;
console.log(num3);
alert(num3);
document.write(num3);
num4 = 5434;
console.log(num4);
alert(num4);
document.write(num4);
num5 = 2318;
console.log(num5);
alert(num5);
document.write(num5);
num6 = 3.55;
console.log(num6);
alert(num6);
document.write(num6);
num7 = 123.123;
console.log(num7);
alert(num7);
document.write(num7);
num8 = 534.5;
console.log(num8);
alert(num8);
document.write(num8);
bol = false;
console.log(bol);
alert(bol);
document.write(bol);
bol2 = true;
console.log(bol2);
alert(bol2);
document.write(bol2);
//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років"
let firstName = prompt();
let middleName = prompt();
let lastName = prompt();
let age = prompt()
let person = `Вітаю ${firstName} ${middleName} ${lastName}.Тобі вже ${age}років`;
console.log(person);
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a1 = 100;
  console.log(typeof a1);
  let b1 = '100';
  console.log(typeof b1);
  let c1 = true;
  console.log(typeof c1);
  //В однакових виразаї не використовувати однакові оператори!!!
// 5 < 6 -> true
// 5 > 6 -> false
// 5 === 6 -> false
// 5 == 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 < 10 -> false
// 10 !== 10 -> false
// 10 > 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true
//Додатково:
//    - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
console.log(132 > 100 && 45 < 12 );// false
console.log(34 > 33 && 23 < 90 );// false
console.log(99 > 100 && 45 > 12 );// false
console.log(132 > 100 || 45 < 12 );// true
console.log(111 > 11 || 45 < 111 );// true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );//true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );//true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );//false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));//true
console.log(!!'-1');//true
console.log(!!-1);//true
console.log(!!'0');//true
console.log(!!'null');//true
console.log(!!'undefined');//true
console.log(!!(3/'owu'));//false
console.log((111 > 11 || 45 < 111) ||  !!'0');//true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));//false


