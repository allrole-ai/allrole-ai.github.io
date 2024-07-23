// Fungsi untuk mengirim jawaban dari model ke server dan mengonfirmasi responsnya
async function confirmAnswer(modelAnswer) {
    const urlConfirm = "https://example.com/api/confirm"; // URL endpoint untuk konfirmasi jawaban
    const token = "your-authentication-token"; // Token otentikasi untuk API
    const data = { answer: modelAnswer }; // Data yang akan dikirim, berisi jawaban dari model

    try {
        // Mengirim data ke server menggunakan fetch dengan Bearer Token untuk otentikasi
        const response = await fetch(urlConfirm, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        // Mengonversi respons ke format JSON
        const result = await response.json();
        handleConfirmationResponse(result); // Menangani respons dari server
    } catch (error) {
        console.error("Konfirmasi gagal:", error); // Menangani kesalahan saat mengirim data ke server
        document.getElementById("errorMessage").innerText = "Konfirmasi gagal: " + error.message;
    }
}
