//Взяти файл template_2.html та працювати в ньому
//1) Напишіть код, який :
 //   a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
 //   b) робить шириниу елементу ul 400px
 //   c) робить шириниу всіх елементів з класом linkList шириною 50%
 //   d) отримує текст який зберігається в елементі з класом listElement2
 //  e) отримує всі елементи li та змінює ім колір фону на сірий
 //   f) отримує всі елементи 'a' та додає їм клас anchor
 //   g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
 //   h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
 //   i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
 //   j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
 //   k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
  //  l) отримати елементи p та змінити їм padding на 20px
  //  m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//
//2. Створити форму з інпутом для введення ім'я, та action="index2.html".
//При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
//На index2.html виводити записане в localstorage ім'я в div

//3. Імітуємо наповнення інтернет магазину товарами :
//Створити форму з наступними полями :
//- назва товару
//- кількість товару
//- ціна товару
//- картинка товару (посилання з інтернету)
//Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
//На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.


//ДОДАТКОВО
//До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let newTxt = document.getElementById('main_header');
newTxt.innerText = 'mon-2021year-april';
newTxt.style.color = 'red';

let list = document.getElementsByTagName('li');
for (let items of list){
    items.style.width = '400px';
    items.style.backgroundColor = 'grey';
}
let list1 = document.getElementsByClassName('linkList');
for (let elements of list1){
    elements.style.width = '50%';
}
let rnm = document.querySelector('ul  li.listElement2');
console.log(rnm.innerText);
let anchors = document.getElementsByTagName('a');
for (let itm of anchors){
    if(itm.innerText === 'link3'){
        itm.style.fontSize = '40px';
    }
    itm.classList.add('anchor');
    itm.classList.add('element_XXX');
}
let nwTxt = document.querySelector('li a.element_XXX');
nwTxt.innerText = 'XXX';
let subH = document.getElementsByClassName('sub-header');
for (let item_s of subH){
    item_s.style.backgroundColor = prompt('Type colour');
    if (item_s.innerText === 'content 2 segment'){
        item_s.style.color = prompt('Type colour');
    }
}
let divochka = document.querySelector('div.content_1');
divochka.innerText = prompt('Type  text');
let paragraphs = document.getElementsByTagName('p');
for (let par of paragraphs){
    par.style.padding = '20px';
}
let par2 = document.querySelector('div.content_2 p.text2');
par2.innerText = 'mon-2021year-april';
//
//
//
let f1 = document.forms.f1;
let nameInput = f1.name;

f1.addEventListener('submit' ,(event) => {
    let name = nameInput.value;
    console.log(name);
    let user = {
        name: name
    }
    let strUser = JSON.stringify(user);
    localStorage.setItem('user', strUser);
})
//
//
//


let f2 = document.forms.f2;
let array = [];
f2.addEventListener('submit' ,(event) => {
    event.preventDefault();
     let nameInput1 = f2.name.value;
     let quantityInput = f2.quantity.value;
     let priceInput = f2.price.value;

     let obj = {
         name: nameInput1,
         quantity: quantityInput,
         price: priceInput
     }
     array.push(obj);
     localStorage.setItem('list', JSON.stringify(array));
})