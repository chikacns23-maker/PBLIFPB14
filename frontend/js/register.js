document.addEventListener("DOMContentLoaded", function () {
    const formRegister = document.getElementById('formRegister');

    if (formRegister) {
        formRegister.addEventListener('submit', function (event) {
            // Mencegah halaman melakukan reload secara default
            event.preventDefault();

            // Mengambil nilai dari input form
            const nama = document.getElementById('nama').value.trim();
            const email = document.getElementById('email').value.trim();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const konfirmasi = document.getElementById('konfirmasi').value;

            // Validasi input kosong
            if (nama === "" || email === "" || username === "" || password === "" || konfirmasi === "") {
                alert("Semua kolom wajib diisi!");
                return;
            }

            // Validasi kecocokan password
            if (password !== konfirmasi) {
                alert("Password dan Konfirmasi Password tidak sama!");
                return;
            }

            // Simulasi pendaftaran berhasil
            alert("Pendaftaran berhasil, " + nama + "! Silakan login.");

            // Arahkan kembali pengguna ke halaman login
            window.location.href = "login.html";
        });
    }
});