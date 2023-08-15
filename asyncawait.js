console.log('person1:show ticket');
console.log('person2:show ticket');

const preMovie=async ()=>{
    const promiseWifeBringingTicket=new Promise((resolve,reject)=>{
     setTimeout(() => resolve('ticket'),3000);
        
     });
     const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
     const addButter=new Promise((resolve,reject)=>resolve('butter'));
     const getcandy=new Promise((resolve,reject)=>resolve('candy'));
     const getColddrink=new Promise((resolve,reject)=>resolve('colddrink'));
     
     let ticket=await promiseWifeBringingTicket;
     let [popcorn,butter,candy,colddrink]=await Promise.all([getPopcorn,addButter,getcandy,getColddrink]);
     console.log(`${popcorn},${butter},${candy},${colddrink}`);
   
   
     //  console.log(`wife:I have the ${ticket}`);
    //  console.log('husband:we should go in');
    //  console.log('wife:no i am hungry');

    //  let popcorn=await getPopcorn;
    //  console.log(`husband:I got some ${popcorn}`);
    //  console.log('husband:we should go in');
    //  console.log('wife:no i need butter on my popcorn');
     
    //  let butter=await addButter;
    //  console.log(`husband:I got some ${butter} on popcorn`);
    //  console.log('husband:anything else');
    //  console.log('wife:lets got we are getting late');
    //  console.log('husband:thank you:)');

    //  let colddrink=await getColddrink;
    //  console.log('husband: we should go in');
    //  console.log(`wife:no i need ${colddrink}`);

     return ticket;
    }
    preMovie().then((m)=>console.log(`person3:show ${m}`));
    console.log('person4:show ticket');
    console.log('person5:show ticket');
