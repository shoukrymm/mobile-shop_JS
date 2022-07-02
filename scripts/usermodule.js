import {userInfo,userDom,links,logoutBtn} from './userdom.js';

if (localStorage.getItem("username")) {
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML += " " + localStorage.getItem("username");
}

logoutBtn.addEventListener('click', function () {
    localStorage.clear();
        window.location = "register.html"
})