//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let newTxt = document.getElementById('main_header');
newTxt.innerText = 'mon-2021year-april';
newTxt.style.color = 'red';

let list = document.getElementsByTagName('ul');
for (let items of list){
    items.style.width = '400px';
}

let list1 = document.getElementsByClassName('linkList');
for (let elements of list1){
    elements.style.width = '50%';
}
let newList = document.querySelector('ul li.listElement2');
let getTxt = newList.innerText;
console.log(getTxt);

let liList = document.getElementsByTagName('li');
for (let liListKey of liList) {
    liListKey.style.color = 'grey';
}
console.log(liList);

let aList = document.getElementsByTagName('a');
for (let aListKey of aList) {
    aListKey.classList.add('anchor');
    aListKey.classList.add('element_XXX');
    if (aListKey.innerText === 'link3'){
        aListKey.style.fontsize = '40px';
    }
}
let newTxt2 = document.querySelector('li a.element_XXX');
newTxt2.innerText = 'XXX';

let newClassList = document.getElementsByClassName('sub-header');
for (let newClassListKey of newClassList) {
    newClassListKey.style.backgroundColor = prompt('Введіть колір');
    if (newClassListKey.innerText === 'content 2 segment'){
        newClassListKey.style.color = prompt('Введіть колір 2');
    }
}

let rndTxt = document.querySelector('div.content_1');
rndTxt.innerText = prompt('Enter your text');

let pList = document.getElementsByTagName('p');
for (let pListKey of pList) {
    pListKey.style.padding = '20px';
}

let changer = document.getElementsByClassName('text2');
changer.innerText = 'June-2021-full';
console.log(changer);