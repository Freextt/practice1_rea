//- Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

//1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//    a) отримує текст з параграфа з id "content"
//    b) отримує текст з блоку з id "rules"
//    c) замініть текст параграфа з id 'content' на будь-який інший
//    d) замініть текст параграфа з id 'rules' на будь-який інший
//    e) змініть кожному елементу колір фону на червоний
//    f) змініть кожному елементу колір тексту на синій
//    g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//    h) отримати всі елементи з класом fc_rules
//    i) поміняти колір тексту у всіх елементів fc_rules на червоний
let contList = document.getElementById('content');
let paragraph = contList.innerText;
console.log(paragraph);
let blockTxt = document.getElementById('rules');
let txt = blockTxt.innerText;
console.log(txt);
target = document.querySelector('#content');
target.innerText = "Hello world!";
console.log(target);
target1 = document.querySelector('#rules');
target1.innerText = "ckwmvcmwvlmmpnvonsmwemvkwvnmwvm vrvkmemvmeo,e, e,gmemgpmemfnewmfmwflw,fwfmw,cw,, wfweofw,,w[,v[sv,";
console.log(target1);
let allElements =  document.children;
        for(let elem of allElements){
          elem.style.backgroundColor = 'red';
          elem.style.color = 'blue';
    }
let getCls = document.getElementsByClassName('fc bp');
console.log(getCls);
let getClass = document.getElementsByClassName('fc_rules1,fc_rules2,fc_rules3,fc_rules4');
console.log(getClass);
//
//
//
 let cng = document.getElementsByTagName('li');
   for(const li of cng){
       li.style.color = 'red';
   }