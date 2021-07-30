//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//    - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//-- отримує текст з параграфа з id "content"
//-- отримує текст з блоку з id "rules"
//-- замініть текст параграфа з id 'content' на будь-який інший
//-- замініть текст параграфа з id 'rules' на будь-який інший
//-- змініть кожному елементу колір фону на червоний
//-- змініть кожному елементу колір тексту на синій
//-- отримати весь список класів елемента з id=rules і вивести їх в console.log
//-- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
//-- поміняти колір тексту у всіх елементів fc_rules на червоний

let paragraph = document.getElementById('content');
let innerTxt = paragraph.innerText;
console.log(innerTxt);
let blockText = document.getElementById('rules');
let blkTxt = blockText.innerText;
console.log(blkTxt);
blockText.innerText = 'Changed text';
console.log(blockText);

let changer = document.querySelector('#content');
changer.innerText = 'Say hello to my little friend!';
console.log(changer);
let allElem = document.children;
for (const elem of allElem) {
    elem.style.backgroundColor = 'red';
    elem.style.color = 'blue'
}
let rulesClass = document.getElementsByClassName('fc_rules');
console.log(rulesClass);
let getClass = document.getElementsByClassName('fc_rules1,fc_rules2,fc_rules3,fc_rules4');
console.log(getClass);
let changeColor  = document.getElementsByClassName('fc_rules')
for (const changeColorKey of changeColor) {
    changeColorKey.style.color = 'red';
}