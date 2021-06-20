
 function awake(wakeUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeUp) {
                resolve('Good morning Vietnam!!!')
            } else {
                reject('Wake up!(Wake up!..)\n' +
                    'Grab a brush and put a little (makeup!..)');
            }
        }, 300)
    })
}
 function breakFast(breakFastTime){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (breakFastTime){
                resolve('Bon apetite!');
            }else{
                reject('I need to eat something!');
            }
        }, 200)
    })
}
let money = 100;
 function goWork(goWorkTime){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (goWorkTime){
                money += 500;
                resolve(`I have ${money} uah`);
            }else{
                reject('Go WORK!');
            }
        }, 500)
    })
}
function relax(relaxTime){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(relaxTime){
                resolve('Im full of energy');
            }else{
                reject('I need to rest!!!');
            }
        }, 700)
    })
}
  function goToTheShop(goToTheShopTime){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(goToTheShopTime){
                resolve('I bought potatoe and meat');
            }else{
                reject('I need to go buy smt!!!');
            }
        }, 400)
    })
}
function playGames(hour){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (hour === 5){
                resolve('It is time to play!!');
            }else{
                reject('You have no time for games!!!!');
            }
        },250)
    })
}
//Promise.allSettled([awake(true),breakFast(true),goWork(true),relax(false),goToTheShop(true),playGames(false)]).then(value => {
 //   console.log(value);
//})
//awake(true)
//.then(value => {
 //   console.log(value);
 //   return breakFast(true);
//})
//.then(value => {
 //   console.log(value);
//    return goWork(true);
//})
//.then(value => {
 //   console.log(value);
  //  return relax(true);
//})
//.then(value => {
 //   console.log(value);
 //   return goToTheShop(true);
//})
//.then(value => {
//    console.log(value);
//    return playGames(false);
//})
//.catch(reason => {
 //   console.log(reason);
//})

async function myDay(){
    try{
        let wake = await awake(true);
        console.log(wake);

        let breakF = await breakFast(true);
        console.log(breakF);

        let goWorkT = await goWork(true);
        console.log(goWorkT);

       let relaxT = await relax(true);
       console.log(relaxT);

       let goToTheShopT = await goToTheShop(true);
       console.log(goToTheShopT);

        let playGamesT = await playGames(false);
        console.log(playGamesT);
    }catch (e) {
        console.log(e);
    }
}
myDay();
