// Dijalankan otomatis saat halaman beranda dimuat
document.addEventListener("DOMContentLoaded", function () {
    // Ambil data nama dari localStorage
    const namaAktif = localStorage.getItem("namaPengguna");

    // Jika ada data nama yang tersimpan, ubah teks sapaan di HTML
    if (namaAktif) {
        const elemenSapaan = document.getElementById("sapaanUser");
        if (elemenSapaan) {
            elemenSapaan.innerHTML = `Halo, ${namaAktif} 👋`;
        }
    }
});

// Fungsi pencarian ruangan secara interaktif (Live Search)
function cariRuangan() {
    const keyword = document.getElementById('inputCari').value.toLowerCase();
    const roomCards = document.querySelectorAll('.room-card');

    roomCards.forEach(card => {
        const roomName = card.getAttribute('data-name');
        if (roomName.includes(keyword)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

// Fungsi menampilkan pemberitahuan notifikasi
function tampilkanNotifikasi() {
    alert("Tidak ada notifikasi baru saat ini.");
}

// Fungsi ketika tombol reservasi diklik pada ruangan tertentu
function pilihRuangan(namaRuang) {
    // Menyimpan nama ruang yang dipilih ke memori browser (localStorage)
    localStorage.setItem("ruangDipilih", namaRuang);

    // Langsung mengarahkan ke halaman detail ruangan
    window.location.href = "detail.html";
}


// Fungsi navigasi menu bawah (Bottom Navigation)
function pindahMenu(menu) {
    if (menu === 'beranda') {
        alert("Anda sudah berada di halaman Beranda.");
    } else if (menu === 'reservasi') {
        alert("Mengarahkan ke Halaman Reservasi Saya...");
    } else if (menu === 'profil') {
        alert("Mengarahkan ke Halaman Profil...");
    }
}