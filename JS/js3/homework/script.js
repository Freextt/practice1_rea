let arr = [1,2,3,4,5];
function mass(arr){
    for (let elem of arr){
        console.log(elem);
    }
}
mass(arr);

let arr1 = [];
function mass1(length){
    for (let i = 0;i<length;i++){
        arr1.push(Math.floor(Math.random()* length));
    }
}
mass1(10);
console.log(arr1);
//
//
function frt(num1,num2,num3){
    if (num1 < num2 && num1 < num3){
        return num1;
    }else if(num2 < num1 && num2 < num3){
        return num2;
    }
    return num3;
}
let res = frt(5,3,1);
console.log(res);

function frt2(num3,num4,num5){
    if (num3 > num4 && num3 > num5){
        return num3 + ' I am the biggest';
    }else if (num4 > num3 && num4 > num5){
        return num4 + ' I am the biggest';
    }
    return num5 + ' I am the biggest';
}
let res2 = frt2(10,11,12);
console.log(res2);
//
//
function max(...args){
    return Math.max(...args);
}
let result = max(55,44,77,22,3131413413);
console.log(result);

function min(...args2){
    return Math.min(...args2);
}
let result2 = min(1,44,55,-11,17,422352,0);
console.log(result2);


function sumOfElements(array1){
    let sum = 0;
    for(let num of array1){
         sum+=num;
    }
    return sum;
}
let sUm = sumOfElements([1,2,3,4,5,6,7]);
console.log(sUm);

function avgOfElements(array1){
    let avg = 0;
    for(let num1 of array1){
         avg+=num1;
    }
    return avg/array1.length;
}
let aVg = avgOfElements([1,2,3,4,5,6,7]);
console.log(aVg);
//
//
//
let array = [
    {
        name: 'paul',
        legs: 4,
        tails:1
    },
    {
        years: 5,
        color: 'brown',
        height: 80
    },
    {
        price: 800,
        weight: 55,
        quantity: 500
    }
]
//prop
function countMass(array){
    let newArray = [];
    for (let objects of array){
       for (let key in objects){
           newArray.push(key); 
       }
   }
    return newArray;
}
let result12 = countMass(array);
console.log(result12);
//value
function resUlt(array){
    let newArrayy = [];
    for (let objects of array){
       for (let key in objects){
           newArrayy.push(objects[key]); 
       }
   }
    return newArrayy;
}
let result13 = resUlt(array);
console.log(result13);
//
//
let array1 = [1,2,3,4];
let array2 =  [2,3,4,5];


function sumElem(array1,array2){
    let newArr = [];
        for (let i = 0;i < array1.length;i++){
            newArr.push(array1[i]+array2[i]);
        }
    return  newArr;
}
let resul = sumElem(array1,array2);
console.log(resul);