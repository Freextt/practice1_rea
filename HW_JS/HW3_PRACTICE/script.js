//- створити функцію яка приймає масив та виводить його
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// Для виведення використати попередню функцію.
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function f(mass) {
    console.log(mass);
}
f([1,'vref',true,false]);
//
function abc(a,b,c){
    if(a < b && a < c){
        document.write(a);
    }else if (b < a && b < c){
        document.write(b);
    }else if (c < a && c < b){
        document.write(c);
    }
}
abc(5,79,0);
//
function abc1(a1,b1,c1) {
    if(a1 > b1 && a1 > c1){
        console.log(a1);
    }else if (b1 > a1 && b1 > c1){
        console.log(b1);
    }else if (c1 > a1 && c1 > b1){
        console.log(c1);
    }
}
abc1(7,4,11);
//
function bigB([...arr]) {

    return Math.max(...arr);
}
let b = bigB([123,412412,-41435,4725626]);
console.log(b);
//
function smallestB([...array]) {

    return Math.min(...array);
}
let c = smallestB([123,412412,-41435,4725626]);
console.log(c);
//
function sumOfElements(array1){
    let sum = 0;
    for(let num of array1){
        sum+=num;
    }
    return sum;
}
let sUm = sumOfElements([1,2,3,4,5,6,7]);
console.log(sUm);
//
function avg(array2) {
    let var1 = 0;
    for (let i = 0; i < array2.length; i++) {
        var1+=array2[i];
    }
    return var1/array2.length;
}
let aVg = avg([1,2,3,4,5,6,7,8,9,10]);
console.log(aVg);
//
function rnd(){
    let arr3 = [];
    for (let i = 0; i < 10; i++) {
        let f = Math.floor(Math.random()*100);
        arr3.push(f);
    }
    console.log(arr3);
}
rnd();
//
function countMass(array){
    let newArray = [];
    for (let objects of array){
        for (let key in objects){
            newArray.push(key);
        }
    }
    return newArray;
}
let result = countMass([ {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }]);
console.log(result);

