// Fungsi untuk mengirim jawaban dari model ke server dan mengonfirmasi responsnya
function confirmAnswer(modelAnswer) {
    const urlConfirm = "https://example.com/api/confirm"; // URL endpoint untuk konfirmasi jawaban
    const token = "your-authentication-token"; // Token otentikasi untuk API
    const data = { answer: modelAnswer }; // Data yang akan dikirim, berisi jawaban dari model

    // Mengirim data ke server menggunakan fetch dengan Bearer Token untuk otentikasi
    fetch(urlConfirm, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json()) // Mengonversi respons ke format JSON
    .then(data => handleConfirmationResponse(data)) // Menangani respons dari server
    .catch(error => {
        console.error("Konfirmasi gagal:", error); // Menangani kesalahan saat mengirim data ke server
        // Menampilkan pesan kesalahan di halaman
        document.getElementById("errorMessage").innerText = "Konfirmasi gagal: " + error.message;
    });
}

// Fungsi untuk menangani respons dari server setelah konfirmasi jawaban
function handleConfirmationResponse(response) {
    if (response.success) {
        // Jika respons sukses, misalnya status HTTP 200
        // Logika untuk menangani konfirmasi berhasil
        console.log("Konfirmasi berhasil:", response.data);
        // Menampilkan pesan sukses di halaman
        document.getElementById("successMessage").innerText = "Konfirmasi berhasil: " + response.message;
    } else {
        // Jika respons gagal, misalnya status HTTP 400 atau 500
        // Logika untuk menangani konfirmasi gagal
        console.error("Konfirmasi gagal:", response.message);
        // Menampilkan pesan kesalahan di halaman
        document.getElementById("errorMessage").innerText = "Konfirmasi gagal: " + response.message;
    }
}

// Contoh penggunaan fungsi confirmAnswer
document.getElementById("confirmButton").addEventListener("click", function () {
    const modelAnswer = "jawaban dari model"; // Gantilah ini dengan jawaban aktual dari model
    confirmAnswer(modelAnswer); // Memanggil fungsi untuk mengonfirmasi jawaban
});
