//- створити функцію яка обчислює та повертає площу прямокутника висотою
// - створити функцію яка обчислює та повертає площу кола
// - створити функцію яка обчислює та повертає площу циліндру
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка при створює блок з текстом. Текст задати через аргумент
// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// -

function sqr(a, h){
    return  0.5*a*h;
}
let s = sqr(5,7);
console.log(s);
//
function circle(r){
    return 2*Math.PI*r;
}
let c = circle(5);
console.log(c);
//
function cyl(r,h){
    return 2*Math.PI*r*h;
}
let k = cyl(50,500);
console.log(k);
//
function find(){
    let min = arguments[0];
    let max = arguments[0];
    for (const argument of arguments) {
        if (argument > max) max = argument;
        if (argument < min) max = argument;
    };
    console.log(max);
    return min;
};
const min = find(2,3,4,5,6,7,8);
console.log(min);
//
function creator(text) {
    let t = text;
    document.write(`<div>t</div>`);
}
creator('convenvo');
//створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(txt) {
    document.write(`<ul>
        <li>${txt}</li>
        <li>${txt}</li>
        <li>${txt}</li>
    </ul>`)
}
list('HI!!!');
// створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function newList(texts,counter){
    for (let i = 0; i < counter; i++) {
        document.write(`<ul><li>${texts}</li></ul>`);
    }
}
newList('HELLO!!!', 5);
//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function mass(elements) {
    for (let i = 0; i < elements.length; i++) {
        document.write(`<ul><li>${elements[i]}</li></ul>`);
    }
}
mass([true,false,'vrmvone',555,undefined]);