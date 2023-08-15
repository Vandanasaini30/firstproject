console.log('person1:show ticket');
console.log('person2:show ticket');

const wifeBringingTickets= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('ticket')
    },3000)
});

wifeBringingTickets.then((t)=>{
    console.log(`person3:show ticket ${t}`);
});
console.log('person4:show ticket');
console.log('person5:show ticket');
