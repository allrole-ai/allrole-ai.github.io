import { getValue } from "https://jscroot.github.io/element/croot.js";

import {
    setCookieWithExpireHour
} from "https://jscroot.github.io/cookie/croot.js";

function postLogin(target_url, data, responseFunction) {

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

const Login = () => {
    const target_url = "https://asia-southeast2-allrole.cloudfunctions.net/allrole/login";
    
    const data = {
        "email2": getValue("email2"),
        "password2": getValue("password2"),
    };
    
    postLogin(target_url, data, responseData);
}

export function responseData(result) {
    if (result && result.token) {
        setCookieWithExpireHour("Login", result.token, 100);
        window.location.href = 'chat.html';
        alert("Selamat Datang");
    } else {
        alert('Login gagal. Silakan coba lagi.');
    }
}

// function responseData(result) {
//     console.log("Response received:", result);  // Log the entire result object

//     if (result.error === undefined || !result.error) {
//         console.log("Login successful:", result.message);  // Log success message
//         Swal.fire({
//             icon: "success",
//             title: "Login Successful",
//             text: result.message,
//         }).then(() => {
//             window.location.href = "./chat.html";
//         });
//     } else {
//         console.log("Login failed:", result.message);  // Log error message
//         Swal.fire({
//             icon: "error",
//             title: "Login Failed",
//             text: result.message,
//         });
//     }
// }



document.getElementById("button-login").addEventListener("click", Login);

// import { getValue } from "https://jscroot.github.io/element/croot.js";
// import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

// function postWithToken(target_url, data, responseFunction) {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: JSON.stringify(data),
//         redirect: 'follow'
//     };
    
//     fetch(target_url, requestOptions)
//         .then(response => response.text())
//         .then(result => responseFunction(JSON.parse(result)))
//         .catch(error => console.log('error', error));
// }

// const Login = () => {

//     const target_url = "https://asia-southeast2-allrole.cloudfunctions.net/allrole/login";

//     const data = {
//         "email": getValue("email"),
//         "password": getValue("password"),
//     };

//     postWithToken(target_url, data, responseData);

// }

// function responseData(result) {
//     if (result && result.token) {
//         setCookieWithExpireHour("Login", result.token, 2);
//         window.location.href = 'https://allrole-ai.github.io/frontend/chat.html';
//         alert("Selamat Datang");
//     } else {
//         alert('Login gagal. Silakan coba lagi.');
//     }
// }

// document.getElementById("button-login").addEventListener("click", Login);