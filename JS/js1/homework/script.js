//let variables = ['hello','owu','ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false];
//for (i = 0;i < variables.length;i++){
//   console.log(variables[i]);
//   alert(variables[i]);
//   document.write//(variables[i]);
//}

let variable1 = 'hello';
   console.log(variable1);
   alert(variable1);
   document.write(variable1);
let variable2 = 'owu';
   console.log(variable2);
   alert(variable2);
   document.write(variable2);   
let variable3 = 'ua';
   console.log(variable3);
   alert(variable3);
   document.write(variable3);    
let variable4 = 1;
      console.log(variable4);
   alert(variable4);
   document.write(variable4);   
let variable5 = 10;
   console.log(variable5);
   alert(variable5);
   document.write(variable5);   
let variable6 = -999;
   console.log(variable6);
   alert(variable6);
   document.write(variable6);   
let variable7 = 123;
   console.log(variable7);
   alert(variable7);
   document.write(variable7);
let variable8 = 3.14;
   console.log(variable8);
   alert(variable8);
   document.write(variable8);
let variable9 = 2.7;
   console.log(variable9);
   alert(variable9);
   document.write(variable9);
let variable10 = 16;
   console.log(variable10);
   alert(variable10);
   document.write(variable10);
let variable11 = true;
   console.log(variable11);
   alert(variable11);
   document.write(variable11);

//
//
//
let str = 'pork';
   console.log(str);
   alert(str);
   document.write(str);
let num = 55;
   console.log(num);
   alert(num);
   document.write(num);
let bool = false;   
   console.log(num);
   alert(num);
   document.write(num);
let dec = 5.5;
   console.log(dec);
   alert(dec);
   document.write(dec);
let obj = {};
   console.log(obj);
   alert(obj);   
   document.write(obj);
let trp = 1241352534534643;
   console.log(trp);
   alert(trp);
   document.write(trp);
let qwet = 'qwasd';
   console.log(qwet);
   alert(qwet);
   document.write(qwet);
let str2 = 'qwrrq';
   console.log(str2);
   alert(str2);
   document.write(str2);
let num2 = 5;
   console.log(num2);
   alert(num2);
   document.write(num2);
let bool2 = true;
   console.log(bool2);
   alert(bool2);
   document.write(bool2);
let dec2 = 2.2;
   console.log(dec2);
   alert(dec2);
   document.write(dec2);   
//
//
//
let name = 'Олег';
let middleName = 'Романович';
let lastName = 'Семигіновський';
let years = 26;  
let person = name + ' ' + middleName + ' ' + lastName;
console.log(person);
alert('Вітаю' + ' ' + name + ' ' + middleName + '.' + 'Тобі' + ' ' + years + ' ' + 'років' + '.');
//
//
//
let a = 100;
   console.log(typeof a); 
let b = '100'; 
   console.log(typeof b); 
let c = true;
   console.log(typeof c); 
//
//
//
//5 > 6 -> true
//5 < 6 -> false
//5 = 6 -> false
//5 >= 6 -> false
//10 === 10 -> true
//10 == 10 -> true
//10 < 10 -> false
//10 > 10 -> false
//10 != 10 -> false
//123 === '123' -> false
//123 == '123' -> true

console.log(132 > 100 && 45 < 12 ); //false
console.log(34 > 33 && 23 < 90 );   //true
console.log(99 > 100 && 45 > 12 );  //false
console.log(132 > 100 || 45 < 12 ); //true
console.log(111 > 11 || 45 < 111 ); //true
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