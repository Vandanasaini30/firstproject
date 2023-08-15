// Using Promises

getButter()

 .then((butter) => {

  return getColdDrinks();

 })

 .then((coldDrinks) => {

  // Do something with cold drinks

 })

 .catch((error) => {

  // Handle errors

 });



// Using Async/Await

async function buyGroceries() {

 try {

  const [butter, coldDrinks] = await Promise.all([getButter(), getColdDrinks()]);

  // Do something with butter and cold drinks

 } catch (error) {

  // Handle errors

 }

}

