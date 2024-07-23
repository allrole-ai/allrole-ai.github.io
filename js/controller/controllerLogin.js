import {postWithBearer} from "https://jscroot.github.io/api/croot.js";
import {PostLogin, ResponseLogin} from "../config/config.js";
import {token, URLLogin} from "../template/template.js";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formlogin");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah form melakukan submit default
        let data = PostLogin(); // Mengambil data login dari fungsi PostLogin
        postWithBearer(URLLogin, token, data, ResponseLogin); // Mengirim data login ke server menggunakan token untuk otentikasi
    });
});

// Fungsi ResponseLogin untuk menangani respons dari server setelah login
// Parameter response berisi data yang dikembalikan oleh server setelah proses login
function ResponseLogin(response) {
    if (response.ok) {
        // Jika respons sukses, misalnya status HTTP 200
        // Logika untuk menangani login berhasil, misalnya menyimpan token dan mengarahkan pengguna ke halaman utama
        console.log("Login berhasil:", response.data);
        // Simpan token ke localStorage atau sessionStorage
        localStorage.setItem('authToken', response.data.token);
        // Arahkan pengguna ke halaman dashboard
        window.location.href = "/dashboard.html";
    } else {
        // Jika respons gagal, misalnya status HTTP 401 atau 403
        // Logika untuk menangani login gagal, misalnya menampilkan pesan kesalahan kepada pengguna
        console.error("Login gagal:", response.error);
        // Menampilkan pesan kesalahan di halaman login
        document.getElementById("errorMessage").innerText = "Login gagal: " + response.error.message;
    }
}
