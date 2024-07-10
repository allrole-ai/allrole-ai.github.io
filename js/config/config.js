import {
    setCookieWithExpireHour
} from "https://jscroot.github.io/cookie/croot.js";


// Token
export function getTokenFromAPI() {
    const tokenUrl =
        "https://asia-southeast2-allrole.cloudfunctions.net/allrole/login";
    fetch(tokenUrl)
        .then((response) => response.json())
        .then((tokenData) => {
            if (tokenData.token) {
                userToken = tokenData.token;
                console.log("Token dari API:", userToken);
            }
        })
        .catch((error) => console.error("Gagal mengambil token:", error));
}

export function GetDataForm() {
    const namalengkap = document.querySelector("#namalengkap").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmpass = document.querySelector("#confirmpass").value;

    const data = {
        namalengkap: namalengkap,
        email: email,
        password: password,
        confirmpass: confirmpass,
    };
    return data;
}

//Login
export function PostLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        email: email,
        password: password,
    };
    console.log("Data yang dikirim untuk login:", data);
    return data;
}

export function AlertPost(value){
    alert(value.message + "\nRegistrasi Berhasil")
    window.location.href= "login.html"
}

// // alert post 
// export function AlertPost(value) {
//     Swal.fire({
//         icon: 'success',
//         title: 'Daftar Berhasil',
//         text: 'Anda telah berhasil daftar!',
//     });
//     window.location.href = "login.html"
// }

export function ResponsePostLogin(result) {
    if (result && result.token) {
        setCookieWithExpireHour("Login", result.token, 2);
        window.location.href = 'chat.html';
        alert("Selamat Datang");
    } else {
        alert('Login gagal. Silakan coba lagi.');
    }
}


export function ResponsePost(result) {
    AlertPost(result);
}

export function ResponseLogin(result) {
    ResponsePostLogin(result);
}