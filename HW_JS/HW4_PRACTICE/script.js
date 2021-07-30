//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let Clients = [
    new Client(1,'mort','barkovich','bark@gmail.com',5353116,['jcrwnc','cjwhuwech','cnwbwb']),
    new Client(2,'bart', 'simpson','bart@hmail.com',151513515,['wckwjnw','cnbcwh']),
    new Client(3,'gothic','vamp','vamp@gmail.com',513516153,['crjnkwjb','cjwbcwbc',5,'cwjcnwkb','cwbcw']),
    new Client(4,'cdcnw','qwert','qwet@gmail.com',1164116,['cjwbbw','cnwbcwkb','ncwbcbw','cmwjbcwb',76987,'cnwbcjwh']),
    new Client(5,'tris','morningstar','star@gmail.com',48131816,['cwjnkjwbw','cwnjbwbcwjkbce','cwnbcjwbckwbc','cwnbckwbcw','cwljncwn']),
    new Client(6,'mort','barkovich','bark@gmail.com',5353116,['jcrwnc','cjwhuwech','cnwbwb','cwjnkjwbw','cwnjbwbcwjkbce','cwnbcjwbckwbc']),
    new Client(7,'mort','barkovich','bark@gmail.com',5353116,['jcrwnc','cjwhuwech','cnwbwb','jcrwnc','cjwhuwech','cnwbwb','cwjnkjwbw','cwnjbwbcwjkbce','cwnbcjwbckwbc']),
    new Client(8,'mort','barkovich','bark@gmail.com',5353116,['cwnwnwonc','vwnvhwbvwi','vmwjnweovjent','wcbwkbnwncw','cwbwkbnwncen']),
    new Client(9,'mort','barkovich','bark@gmail.com',5353116,['jcrwnc','cjwhuwech','cnwbwb','crjnkwjb','cjwbcwbc']),
    new Client(10,'mort','barkovich','bark@gmail.com',5353116,['jcrwnc','cjwhuwech','cnwbwb','jcrwnc','cjwhuwech','cnwbwb','crjnkwjb','cjwbcwbc'])
];

Clients.sort(function (a,b) {
    return a.order.length - b.order.length;
})
console.log(Clients)
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car(model,producer,year,max_speed,eng_cap){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.max_speed = max_speed;
    this.eng_cap = eng_cap;
    this.driver = [];

    this.drive = function(){
        console.log(`Їдемо зі швидкістю ${this.max_speed} за годину`);
    }
    this.info = function(){
        console.log(this.model,this.producer,this.year,this.max_speed,this.eng_cap);
    }
    this.increaseMaxSpeed = function(newSpeed){
        console.log("Increased speed " + (this.max_speed + newSpeed));
    }
    this.changeYear = function(newValue){
        console.log("Cars year was changed on " + (this.year = newValue));
    }
    this.addDriver = function(newDriver){
        this.driver.push(newDriver);
        console.log(`${this.driver}`);
    }
}
const tesla  = new Car('tesla','mask',2021,235,'no_cap');
const volga = new Car('volga','petrovich',1950,95,3.5);
const volkswagen = new Car('volga','petrovich',1999,180,3.5);
const nissan = new Car('volga','petrovich',1970,210,3.5);
const toyota = new Car('volga','petrovich',1990,240,3.5)
const garage = [
    tesla,
    volga,
    volkswagen,
    nissan,
    toyota
]
volga.drive();
toyota.info();
toyota.increaseMaxSpeed(10);
toyota.changeYear(2010);
volga.addDriver('oleh');
volga.addDriver('andriy');
volga.addDriver('maks');
//- (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Car1{
    constructor(model1,producer1,year1,max_speed1,eng_cap1){
        this.model1 = model1;
        this.producer1 = producer1;
        this.year1 = year1;
        this.max_speed1 = max_speed1;
        this.eng_cap1 = eng_cap1;
        this.driver1 = [];
    }
    drive1(){
        console.log(`Їдемо зі швидкістю ${this.max_speed1}км на годину`);
    }
    info1(){
        console.log(this.model1,this.producer1,this.year1,this.max_speed1,this.eng_cap1);
    }
    increaseMaxSpeed1(value){
        console.log("Increased speed " + (this.max_speed1 + value));
    }
    changeYear1(newYear){
        console.log("Cars year was changed on " + (this.year1 = newYear));
    }
    addDriver1(newDriver1){
        this.driver1.push(newDriver1);
        console.log(this.driver1);
    }
}
const ford = new Car1('ford','america',2015,220,2.5);
const hundai = new Car1('hundai','japan',2017,205,2.2);
const honda = new Car1('honda','japan',235,2.4);
const drivers =[
    ford,
    hundai,
    honda
]
ford.drive1(120);
ford.info1();
ford.increaseMaxSpeed1(20);
ford.changeYear1(2020);
ford.addDriver1('oleh');
console.log(drivers);
//// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Popelushka {
    constructor(name,age,foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}
let popelushku = [
    new Popelushka ('alla',25,39),
    new Popelushka ('anna',23,35),
    new Popelushka ('rula',24 ,38),
    new Popelushka ('dilya',24 ,40),
    new Popelushka ('marta',24 ,41),
    new Popelushka ('werta',24 ,32),
    new Popelushka ('puta',24 ,30),
    new Popelushka ('kita',24 ,31),
    new Popelushka ('amara',24 ,29)
]
class Prince {
    constructor(name,age,shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prnc = [
    new Prince('Modock',25,29)
]
for (let Popelushka of popelushku) {
    for (const Prince of prnc) {
        if(Popelushka.foot_size === Prince.shoe){
            console.log(`${Popelushka.name}`);
        }
    }
}
const found = popelushku.find(({foot_size}) => foot_size === 29);
console.log(found);
//XD