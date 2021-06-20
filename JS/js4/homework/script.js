//створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами User
function User(id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone; 
}
const oleh  = new User(5,'oleh','sam','dqwqwf@gmail.com',437462356298);
const vasya  = new User(2,'vasya','afwca','dqwqwf@gmail.com',27136461264);
const mary  = new User(3,'oleh','sam','dqwqwf@gmail.com',437462356298);
const carr  = new User(4,'oleh','sam','dqwqwf@gmail.com',437462356298);
const trol  = new User(6,'oleh','sam','dqwqwf@gmail.com',437462356298);
const fork  = new User(55,'oleh','sam','dqwqwf@gmail.com',437462356298);
const lira  = new User(51,'oleh','sam','dqwqwf@gmail.com',437462356298);
const turk  = new User(1,'oleh','sam','dqwqwf@gmail.com',437462356298);
const krat  = new User(2,'oleh','sam','dqwqwf@gmail.com',437462356298);
const lety  = new User(7,'oleh','sam','dqwqwf@gmail.com',437462356298);
let users = [
   oleh,
   vasya,
   mary,
   carr,
   trol,
   fork,
   lira,
   turk,
   krat,
   lety
]
console.log(users);
//створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
class Client{
     constructor(id,name,surname,email,phone,order){
          this.id = id;
          this.name = name;
          this.surname = surname;
          this.email = email;
          this.phone = phone;
          this.order = order;
     }
}
const oleh1  = new Client(5,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef','cweijciweciw']);
const vasya1  = new Client(2,'vasya','afwca','dqwqwf@gmail.com',27136461264,['qdqwdq','fqfqefqe','fqfqefqef']);
const mary1  = new Client(3,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef','cwecwecw','jencwnco']);
const carr1  = new Client(4,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe']);
const trol1  = new Client(55,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef','fqfqefqef','fqfqefqef','fqfqefqef']);
const fork1  = new Client(52,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef']);
const lira1  = new Client(1,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq']);
const turk1  = new Client(9,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef']);
const krat1  = new Client(8,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef']);
const lety1  = new Client(7,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef']);
let users1 = [
   oleh1,
   vasya1,
   mary1,
   carr1,
   trol1,
   fork1,
   lira1,
   turk1,
   krat1,
   lety1
]
console.log(users1);
//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

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
      console.log("Increased speed " + this.max_speed);
   }
   this.changeYear = function(newValue){
      console.log("Cars year was changed on " + this.year);
   }
   this.addDriver = function(newDriver){
      this.driver.push(newDriver);
      console.log(this.driver);
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
toyota.addDriver('andriy');
tesla.addDriver('maks');
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
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
   increaseMaxSpeed1(){
      console.log("Increased speed " + this.max_speed1);
   }
   changeYear1(){
      console.log("Cars year was changed on " + this.year1);
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
//Взяти масив з завдання 1.
//- Відфільтрувати , залишивши тільки об'єкти з парними id
//- Відсортувати його по id. по зростанню
//- Відсортувати його по id. по спаданню
//let users = [
//   oleh,
//   vasya,
//   mary,
//   carr,
//   trol,
//   fork,
//   lira,
//   turk,
//   krat,
//   lety
//]
let filter = users.filter(function (user){
   return user.id % 2 === 0;
   })
console.log(filter);
let sortUp = users.sort(function(user1,user2){
   return user1.id - user2.id;
})
console.log(sortUp);
let sortDown = users.sort(function(user1,user2){
   return user2.id - user1.id;
})
console.log(sortDown);
//Взяти масив з завдання 2.
 //   Відсортувати його по кількості товарів в полі order. по спаданню
// const oleh1  = new Client(5,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef']);
//const vasya1  = new Client(2,'vasya','afwca','dqwqwf@gmail.com',27136461264,['qdqwdq','fqfqefqe','fqfqefqef']);
//const mary1  = new Client(3,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef']);
//const carr1  = new Client(4,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef']);
//const trol1  = new Client(55,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef']);
//const fork1  = new Client(52,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef']);
//const lira1  = new Client(1,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef']);
//const turk1  = new Client(9,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef']);
//const krat1  = new Client(8,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef']);
//const lety1  = new Client(7,'oleh','sam','dqwqwf@gmail.com',437462356298,['qdqwdq','fqfqefqe','fqfqefqef']);
//let users1 = [
//   oleh1,
//   vasya1,
//   mary1,
//   carr1,
//   trol1,
//   fork1,
//   lira1,
 //  turk1,
//   krat1,
//   lety1
//]
let sortOrder =  users1.sort(function(user1,user2){
   return user2.order.length - user1.order.length;
})
console.log(sortOrder);