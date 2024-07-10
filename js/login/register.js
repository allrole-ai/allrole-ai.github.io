import { getValue } from "https://jscroot.github.io/element/croot.js";

function postRegister(target_url, data, responseFunction) {

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.text())
        .then(result => responseFunction(JSON.parse(result)))
        .catch(error => console.log('error', error));
}

const Register = () => {
    const target_url = "https://asia-southeast2-allrole.cloudfunctions.net/allrole/register";
    
    const data = {
        "namalengkap" : getValue("namalengkap"),
        "email": getValue("email"),
        "password": getValue("password"),
        "confirmpass": getValue("confirmpass"),
    };
    
    postRegister(target_url, data, responseData);
}

function responseData (value) {
    alert(value.message + "\nRegistrasi Berhasil")
    window.location.href= "./login.html"
}

document.getElementById("button").addEventListener("click", Register);