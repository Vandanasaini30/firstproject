
    const userForm = document.getElementById('user-form');
    userForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const number = document.getElementById('number').value;
        
        const user = {
            name: name,
            email: email,
            Number: number,
        };

        const userinfo = JSON.stringify(user);
        localStorage.setItem("user", userinfo);
        
        alert('User info stored in local storage!');

        /*showscreen(user)
    
         
        function showscreen(obj) {

                const parentele = document.querySelector('.listofitem'); // Use .listofitem for class
                parentele.innerHTML = `<li>${obj.name} - ${obj.email}</li>`;
            }
          */  
        
        
 });

