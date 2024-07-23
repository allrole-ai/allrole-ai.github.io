import {postWithBearer} from "https://jscroot.github.io/api/croot.js";
import {PostLogin, ResponseLogin} from "../config/config.js";
import {token, URLLogin} from "../template/template.js";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formlogin");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah form melakukan submit default
        let data = PostLogin(); // Mengambil data login dari fungsi PostLogin
        // Mengirim data login ke server menggunakan token untuk otentikasi
        postWithBearer(URLLogin, token, data, ResponseLogin); 
    });
});
