import { handleLogin } from '../js/src/controller.js';

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formlogin");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    handleLogin();
  });

  // Menampilkan atau menyembunyikan password

    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
  });
