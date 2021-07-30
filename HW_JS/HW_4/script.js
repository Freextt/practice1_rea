//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
//
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
function random(max) {
    let array = [];
    for (let i = 0; i < max; i++) {
        array.push(Math.floor(Math.random()*max));
    }
    return array;
}
let y = random(100);
console.log(y);
//
function rnd(min,max) {
    let array2 = [];
    for (let i = 0; i < max; i++) {
        array2.push(Math.floor(Math.random() * (max-min) + min));
    }
    return array2;
}
let e = rnd(0,500);
console.log(e);
//
function sorting(max) {
    let array3 = [];
    for (let i = 0; i < max; i++) {
        array3.push(Math.floor(Math.random()*max));
    }
    array3.sort(function (num1,num2) {
        return num1 - num2;
    })
    return array3;
}
let srt = sorting(150);
console.log(srt);
//
function  filtering(max){
    let array4 = [];
    for (let i = 0; i < max; i++) {
        array4.push(Math.floor(Math.random()*max));
    }
    return array4;
}

let filt = filtering(500).filter(function (index) {
    return index%2 === 0;
})
console.log(filt);
//створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
//
function arRay(max) {
    let arrNew = [];
    for (let i = 0; i < max; i++) {
        arrNew.push(Math.floor(Math.random()*max));
    }
    return arrNew;
}
let rop = arRay(100).map(i => i.toString());
console.log(rop);
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// // Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname= surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1,'Maryana','Dodge','mardog@gmail.com',4282091730173),
    new User(2,'Kokosha','Ponuk','kopo@gmail.com',6344527349492),
    new User(3,'Andriana','Rurk','ara@gmail.com',562292625822),
    new User(4,'Karina','Togta','kartog@gmail.com',581665165155),
    new User(5,'Marta','Sparta','sparta@gmail.com',511552624256),
    new User(6,'Oles','Aslimov','olas@gmail.com',51161185161651),
    new User(7,'Sergio','Ramos','ramos@gmail.com',26868816596),
    new User(8,'Kokojambo','Forkin','koko@gmail.com',5261168516251),
    new User(9,'Olya','Freymut','putana@gmail.com',171656515651),
    new User(10,'Oleh','Makaronio','makar@gmail.com',68165616428525)
]
console.log(users);
let user = users.filter(function (User) {
    return User.id % 2 === 0;
})
console.log(user);
let sortUser = users.sort(function (User1,User2) {
    return User1.id - User2.id;
})
console.log(sortUser);
