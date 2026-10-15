document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById('formLogin');

    if (formLogin) {
        formLogin.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === "" || password === "") {
                alert("Harap masukkan username dan password!");
                return;
            }

            // SIMPAN nama pengguna ke localStorage agar bisa dibaca di halaman beranda
            localStorage.setItem("namaPengguna", username);

            alert("Login Berhasil! Selamat datang, " + username);

            // Pindah ke halaman beranda
            window.location.href = "beranda.html";
        });
    }
});