document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById('formLogin') || document.querySelector("form");

    if (formLogin) {
        formLogin.addEventListener('submit', function (event) {
            event.preventDefault();

            const usernameInput = document.getElementById('username') || document.querySelector('input[type="text"]');
            const passwordInput = document.getElementById('password') || document.querySelector('input[type="password"]');

            const username = usernameInput ? usernameInput.value.trim() : "";
            const password = passwordInput ? passwordInput.value.trim() : "";

            if (username === "" || password === "") {
                alert("Harap masukkan username dan password!");
                return;
            }

            // SIMPAN data pengguna ke localStorage
            localStorage.setItem("namaPengguna", username);

            // Cek apakah data tambahan sudah ada, jika belum set bawaan yang rapi
            if (!localStorage.getItem("emailPengguna")) {
                localStorage.setItem("emailPengguna", username.toLowerCase().replace(/\s+/g, '') + "@student.ac.id");
            }
            if (!localStorage.getItem("nimPengguna")) {
                localStorage.setItem("nimPengguna", "230102001");
            }
            if (!localStorage.getItem("prodiPengguna")) {
                localStorage.setItem("prodiPengguna", "Teknik Informatika");
            }
            if (!localStorage.getItem("telpPengguna")) {
                localStorage.setItem("telpPengguna", "0812-3456-7890");
            }

            alert("Login Berhasil! Selamat datang, " + username);

            // Pindah ke halaman beranda
            window.location.href = "beranda.html";
        });
    }
});