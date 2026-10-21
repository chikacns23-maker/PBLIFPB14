document.addEventListener("DOMContentLoaded", function () {
    const formRegistrasi = document.getElementById("formRegistrasi") || document.querySelector("form");

    if (formRegistrasi) {
        formRegistrasi.addEventListener("submit", function (e) {
            e.preventDefault();

            // Ambil elemen input berdasarkan ID atau Name yang umum
            const namaInput = document.getElementById("nama") || document.getElementById("namaInput") || document.querySelector('input[type="text"]');
            const emailInput = document.getElementById("email") || document.getElementById("emailInput") || document.querySelector('input[type="email"]');
            const nimInput = document.getElementById("nim") || document.getElementById("nimInput");
            const prodiInput = document.getElementById("prodi") || document.getElementById("prodiInput") || document.getElementById("jurusan");
            const telpInput = document.getElementById("telp") || document.getElementById("noHp") || document.getElementById("telpInput") || document.querySelector('input[type="tel"]');

            // Ambil nilainya
            const nama = namaInput ? namaInput.value.trim() : "Mahasiswa RuangKu";
            const email = emailInput ? emailInput.value.trim() : "mahasiswa@student.ac.id";
            const nim = nimInput ? nimInput.value.trim() : "230102001";
            const prodi = prodiInput ? prodiInput.value.trim() : "Teknik Informatika";
            const telp = telpInput ? telpInput.value.trim() : "0812-3456-7890";

            if (!nama) {
                alert("Harap isi nama Anda!");
                return;
            }

            // Simpan SEMUA data pengguna ke localStorage
            localStorage.setItem("namaPengguna", nama);
            localStorage.setItem("emailPengguna", email);
            localStorage.setItem("nimPengguna", nim);
            localStorage.setItem("prodiPengguna", prodi);
            localStorage.setItem("telpPengguna", telp);

            alert("Pendaftaran Berhasil! Selamat datang, " + nama);
            window.location.href = "beranda.html";
        });
    }
});