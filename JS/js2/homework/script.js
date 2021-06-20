const num = [1,2,3,4,5];
const str = ['pew','mew','ban','apple','car'];
const mix = ['orange', 55, true,false,'record'];

console.log(num);
console.log(str);
console.log(mix);
//
//
//
const emp = [];
emp[0] = 'apple';
emp[0] = 55;
emp[0] = 'melon';
console.log(emp);
//
//
//
for (let i = 0;i < 10;i++){
    document.write('<div>A</div>');
}
for (let i = 0;i < 10;i++){
    document.write(i +'<div>A</div>');
}
//
//
let i = 0;
while(i < 20){
    document.write(`<div><h1>Abc</h1></div>`);
    i++;
}
let x = 0;
while(x < 20){
    document.write(`<div><h1>Abc</h1>${x}</div>`);
    x++;
}
//
//
//
const ITR = [1,2,55,7,13,9,3,22,11,57];
for(let i = 0;i< ITR.length;i++){
    console.log(ITR[i]);
}
const wrd = ['conan','light','green','brown','bike','dog','challenge','home','wow','cool'];
for(let i = 0;i<wrd.length;i++){
    console.log(wrd[i]);
}
const evrt = ['squish','bark',false,55,{},123142141252414,undefined,true,'garry',[]];
for(let i = 0;i<evrt.length;i++){
    console.log(evrt[i]);
}
const qwer = ['squish','bark',false,55,{},123142141252414,undefined,true,'garry',[]];
for(let i = 0;i<qwer.length;i++){
    if(typeof qwer[i] === `boolean`){
        console.log(qwer[i]);
    }
}
const rew = ['squish','bark',false,55,{},123142141252414,undefined,true,'garry',[]];
for(let i = 0;i<rew.length;i++){
    if(typeof rew[i] === `number`){
        console.log(rew[i]);
    }
}
const cxz = ['squish','bark',false,55,{},123142141252414,undefined,true,'garry',[]];
for(let i = 0;i<cxz.length;i++){
    if(typeof cxz[i] === `string`){
        console.log(cxz[i]);
    }
}
//
//
//
const del = [];
del[0] = 'pow';
del[1] = true;
del[2] = undefined;
del[3] = false;
del[4] = 37124837409713497139137461746164981648863164329864283468932648;
del[5] = 5;
del[6] = null;
del[7] = {};
del[8] = [];
del[9] = 'quake';
for (let i = 0;i<del.length;i++){
    console.log(del[i]);
}

for(let i = 0;i < 10;i++){
    console.log([i]);
    document.write([i]);
}
for(let i = 0;i < 100;i++){
    console.log([i]);
    document.write([i]);
}
for(let i = 0;i < 100;i+=2){
    console.log([i]);
    document.write([i]);
}
for(let i = 0;i < 100;i++){
    if (i % 2 === 0) {
    console.log([i]);
    document.write([i]);}
}
for(let i = 0;i < 100;i++){
    if(i % 2 === 1){
    console.log([i]);
    document.write([i]);
    }
}
//
//
//
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id){
            user.address = city;
        }
    }
};
console.log(usersWithId);

//let usersWithCities = []