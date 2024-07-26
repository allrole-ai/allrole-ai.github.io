import { handleRegister } from '../js/src/controller.js';

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#formregis");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    handleRegister();
  });

  // Menampilkan atau menyembunyikan password

    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
  });

