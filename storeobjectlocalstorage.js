

// User object with details
const user = {
    
    email: "albert@example.com",
    password: 30,
  };
  
  // Convert the user object to a string representation
  const userString = JSON.stringify(user);
  
  // Store the user object as a string in local storage
  localStorage.setItem("user", userString);
 // console.log(localStorage);
  