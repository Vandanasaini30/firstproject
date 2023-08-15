console.log('person1:show ticket');
console.log('person2:show ticket');

const wifeBringingTickets= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('ticket')
    },3000)
});

const getPopcorn=wifeBringingTickets.then((t)=>{
    // console.log('wife:i have the tickets');
    // console.log('husband:we should go in');
    // console.log('wife:no i am hungry');
    return new Promise((resolve,reject)=>
        resolve(`${t} popcorn`));
    
});
const getButter= getPopcorn.then((t)=>{
    // console.log('husband:I got some popcorn')
    // console.log('husband:we should go in');
    // console.log('wife:no i need butter on my popcorn');
      return new Promise((resolve,reject)=>
        resolve(`${t} butter`));
    
});
const getColdDrink= getButter.then((t)=>{
    // console.log('husband:we should go in')
    // console.log('wife:no i need colddrink');
    // console.log('husband:anything else?');
     return new Promise((resolve,reject)=>
       resolve(`${t} colddrink`));
    
});
getColdDrink.then((t)=>console.log(t));
(async () => {
  let [popcorn, butter, colddrink] = await Promise.all([
      getPopcorn,
      getButter,
      getColdDrink,
  ]);
  // console.log(`${popcorn},${butter},${colddrink}`);
})();

   
console.log('person4:show ticket');
console.log('person5:show ticket');
