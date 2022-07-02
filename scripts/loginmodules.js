import {userName,password,loginBtn,getUser,getPassword} from './logindom.js';


loginBtn.addEventListener("click",login);

function login(e){
    
        e.preventDefault();
        if(userName.value === "" || password.value === ""){
            alert ("Please fill data");
        }
        else{
            if((getUser && getUser.trim() === userName.value.trim()) && (getPassword && getPassword === password.value)){
                window.location = 'index.html';
            
            } 
            else {
                alert('Username or Password incorrect');
            }
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
