document.addEventListener("DOMContentLoaded", function () {
    muatDataProfil();
});

function muatDataProfil() {
    // Ambil data asli dari localStorage atau gunakan default
    const namaUser = localStorage.getItem("namaPengguna") || "Zikra";
    const emailUser = localStorage.getItem("emailPengguna") || "zikra11@gmail.com";
    const nimUser = localStorage.getItem("nimPengguna") || "230102001";
    const prodiUser = localStorage.getItem("prodiPengguna") || "Teknik Informatika";
    const telpUser = localStorage.getItem("telpPengguna") || "0812-3456-7890";

    // Tampilkan ke layar
    setElementText("namaUserDisplay", namaUser);
    setElementText("emailUserDisplay", emailUser);
    setElementText("nimUserDisplay", nimUser);
    setElementText("prodiUserDisplay", prodiUser);
    setElementText("telpUserDisplay", telpUser);
}

// Fungsi interaktif untuk mengubah NIM & No Telepon sesuai keinginan pengguna
function ubahDataProfil() {
    const nimLama = localStorage.getItem("nimPengguna") || "230102001";
    const telpLama = localStorage.getItem("telpPengguna") || "0812-3456-7890";
    const prodiLama = localStorage.getItem("prodiPengguna") || "Teknik Informatika";

    const nimBaru = prompt("Masukkan NIM Anda:", nimLama);
    if (nimBaru === null) return; // Jika dibatalkan

    const prodiBaru = prompt("Masukkan Program Studi Anda:", prodiLama);
    if (prodiBaru === null) return;

    const telpBaru = prompt("Masukkan Nomor Telepon / HP Anda:", telpLama);
    if (telpBaru === null) return;

    // Simpan data baru ke localStorage
    if (nimBaru.trim() !== "") localStorage.setItem("nimPengguna", nimBaru.trim());
    if (prodiBaru.trim() !== "") localStorage.setItem("prodiPengguna", prodiBaru.trim());
    if (telpBaru.trim() !== "") localStorage.setItem("telpPengguna", telpBaru.trim());

    alert("Data profil berhasil diperbarui!");
    muatDataProfil(); // Refresh tampilan langsung
}

function setElementText(id, text) {
    const el = document.getElementById(id);
    if (el) {
        el.innerText = text;
    }
}

function bukaBantuan() {
    alert("Pusat Bantuan RuangKu:\n\n1. Pilih ruang belajar pada menu Beranda.\n2. Isi formulir peminjaman tanggal dan waktu.\n3. Konfirmasi reservasi dan cek status di menu 'Reservasi Saya'.\n\nHubungi: admin@ruangku.ac.id");
}

function bukaTentang() {
    alert("Tentang RuangKu:\nAplikasi Reservasi Ruang Belajar Kampus berbasis Web.\nVersi 1.0.0");
}

function logoutApp() {
    if (confirm("Apakah Anda yakin ingin keluar dari aplikasi?")) {
        localStorage.removeItem("reservasiTerakhir");
        alert("Berhasil keluar.");
        window.location.href = "login.html"; 
    }
}