import {userName,email,password,register_btn} from './registerdom.js'

register_btn.addEventListener("click",register)

function register(e){
    
        e.preventDefault();

        if(userName.value === "" || email.value === "" || password.value === ""){
            alert('Please Fill all Data');
        }
        else if (!email.value.includes(`@`)){
            alert('please write a correct Email')
        }
        else if (userName.value.length < 8 || userName.value.length > 20) {
            alert("Username must be between 8 : 20 chars");
        }
        else if (password.value.length < 8 || userName.value.length > 20){
            alert("Password must be between 8 : 20 chars");
        }
        else{
            localStorage.setItem("username",userName.value);
            localStorage.setItem("email",email.value);
            localStorage.setItem("password",password.value);
            window.location = "login.html";
        }
    
        
    
}

// check characters
userName.addEventListener("keydown", function (eventRef) {

    if (!(eventRef.which >= 48 && eventRef.which <= 122)) {
        if (!(eventRef.which == 8)) {
            log.innerText = "plz add strings or numbers only";
            eventRef.preventDefault();
        }
    }
    else {
        log.innerText = "";
    }
})

// username is required
userName.addEventListener("blur", function () {
    if (this.value == "") {
        log.innerText = "this field is required";
        this.focus();
    }
    else {
        log.innerText = "";
    }
})


// check email
email.addEventListener("keyup" , function(e){
    if (!this.value.includes(`@`)) {
        logE.innerText = "please enter an email";
        e.preventDefault();
    } else{
        logE.innerText = "";
    }

})

// email requiered
email.addEventListener("blur", function () {
    if (this.value == "") {
        logE.innerText = "this field is required";
        this.focus();
    }
    else {
        logE.innerText = "";
    }
})


// check password
password.addEventListener("keydown", function (eventRef) {

    if (!(eventRef.which >= 48 && eventRef.which <= 57)) {
        if (!(eventRef.which == 8)) {
            logpass.innerText = "plz add numbers only";
            eventRef.preventDefault();
        }
    }
    else {
        logAge.innerText = "";
    }
})

// password is required
password.addEventListener("blur", function () {
    if (this.value == "") {
        logpass.innerText = "this field is required";
        this.focus();
    }
    else {
        logAge.innerText = "";
    }
})