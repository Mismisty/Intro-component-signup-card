
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let fname = id("fname"),
    lname = id("lname"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    iconError = classes("icon-error");

    form.addEventListener("submit", (e)=>{   //when the submit is clicked it triggers the function
        e.preventDefault();

      // THIS IS THE FUNCTION THAT GETS TRIGGERED
      
        if(fname.value.trim() === ''){
            errorMsg[0].innerHTML = 'First name cannot be empty';
            iconError[0].style.opacity =  "1";
            fname.style.border = '2px solid red';
        }else{
            errorMsg[0].innerHTML = '';     //TO REMOVE ERROR MESSAGE AFTER FIELD IS FILLED IN
            iconError[0].style.opacity =  "0";
            fname.style.border = ''; //TO REMOVE ICON ERROR WHEN FIELD IS FILLED IN
        }

        if(lname.value.trim() === ''){
            errorMsg[1].innerHTML = 'Last name cannot be empty';
            iconError[1].style.opacity =  "1";
            lname.style.border = '2px solid red';
        }else{
            errorMsg[1].innerHTML = '';     //TO REMOVE ERROR MESSAGE AFTER FIELD IS FILLED IN
            iconError[1].style.opacity =  "0";
            lname.style.border = ''; //TO REMOVE ICON ERROR WHEN FIELD IS FILLED IN
        }

        if(email.value.trim() === ''){
            errorMsg[2].innerHTML = 'Looks like this is not an email';
            iconError[2].style.opacity =  "1";
            email.style.border = '2px solid red';
        }else{
            errorMsg[2].innerHTML = '';     //TO REMOVE ERROR MESSAGE AFTER FIELD IS FILLED IN
            iconError[2].style.opacity =  "0";
            email.style.border = ''; //TO REMOVE ICON ERROR WHEN FIELD IS FILLED IN
        }

        if(password.value.trim() === ''){
            errorMsg[3].innerHTML = 'Password cannot be empty';
            iconError[3].style.opacity =  "1";
            password.style.border = '2px solid red';
        }else{
            errorMsg[3].innerHTML = '';     //TO REMOVE ERROR MESSAGE AFTER FIELD IS FILLED IN
            iconError[3].style.opacity =  "0";
            password.style.border = ''; //TO REMOVE ICON ERROR WHEN FIELD IS FILLED IN
        }


    });
    
    
        
    






























