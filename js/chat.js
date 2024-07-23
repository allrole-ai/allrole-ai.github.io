$(document).ready(function () {
    // Dark Mode Toggle
    $('#darkModeToggle').click(function () {
        $('body').toggleClass('bg-dark text-light');
        $('.navbar').toggleClass('navbar-dark bg-dark');
        $('.sidebar').toggleClass('bg-dark text-light');
        $('.chat-input-container').toggleClass('bg-dark text-light');
        $('.chat-box').toggleClass('bg-dark');
        $('.chat-input input').toggleClass('bg-dark text-light');
        $('.chat-input button').toggleClass('bg-dark');
        $('.message.user').toggleClass('text-light');
        $('.message.bot').toggleClass('text-light');
    });

     // Sidebar Toggle
    $('#sidebarToggle').click(function () {
        $('#sidebar').toggleClass('active');
    });

    $('#closeSidebar').click(function () {
        $('#sidebar').removeClass('active');
    });

    $('.navbar-toggler').click(function () {
        $('#sidebar').toggleClass('active');
    });

    // Chat functionality
    $('#sendButton').click(function () {
        sendMessage();
    });

    $('#chatInput').keypress(function (e) {
        if (e.which === 13) {
            sendMessage();
        }
    });

    function sendMessage() {
        var message = $('#chatInput').val().trim();
        if (message) {
            // Append user message to chat box
            $('#chatBox').append('<div class="message user">' + message + '</div>');
            $('#chatInput').val('');

            // Scroll to bottom of chat box
            $('#chatBox').scrollTop($('#chatBox')[0].scrollHeight);

            // Show loading indicator
            $('#loadingIndicator').show();

            // Simulate bot response
            setTimeout(function () {
                $('#loadingIndicator').hide();

                var botResponse = getBotResponse(message);
                $('#chatBox').append('<div class="message bot">' + botResponse + '</div>');

                // Scroll to bottom of chat box
                $('#chatBox').scrollTop($('#chatBox')[0].scrollHeight);
            }, 1000); // Simulate delay
        }
    }

    function getBotResponse(userMessage) {
        // Simple logic for bot response
        if (userMessage.toLowerCase().includes('hello')) {
            return 'Hello! How can I assist you today?';
        } else if (userMessage.toLowerCase().includes('help')) {
            return 'Sure, I am here to help you. What do you need assistance with?';
        } else {
            return 'I am not sure how to respond to that. Can you please elaborate?';
        }
    }

    // Hide loading indicator initially
    $('#loadingIndicator').hide();

    // New Chat Button
    $('#newChatButton').click(function() {
        $('#chatBox').empty(); // Clear the chat box
        $('#chatInput').val(''); // Clear the input field
        $('#loadingIndicator').hide(); // Hide the loading indicator if it's visible
    });
});

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

// // Fungsi ResponseLogin untuk menangani respons dari server setelah login
// // Parameter response berisi data yang dikembalikan oleh server setelah proses login
// function ResponseLogin(response) {
//     if (response.ok) {
//         // Jika respons sukses, misalnya status HTTP 200
//         // Logika untuk menangani login berhasil, misalnya menyimpan token dan mengarahkan pengguna ke halaman utama
//         console.log("Login berhasil:", response.data);
//         // Simpan token ke localStorage atau sessionStorage
//         localStorage.setItem('authToken', response.data.token);
//         // Arahkan pengguna ke halaman dashboard
//         window.location.href = "/dashboard.html";
//     } else {
//         // Jika respons gagal, misalnya status HTTP 401 atau 403
//         // Logika untuk menangani login gagal, misalnya menampilkan pesan kesalahan kepada pengguna
//         console.error("Login gagal:", response.error);
//         // Menampilkan pesan kesalahan di halaman login
//         document.getElementById("errorMessage").innerText = "Login gagal: " + response.error.message;
//     }
// }
