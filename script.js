

document.getElementById("userForm");
document.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the user details from the form inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    

    // Create an object to store the user details
    const userDetails = {
      email: email,
      password:password,

    };


    localStorage.setItem("userDetails","albert" );

    

    
  });