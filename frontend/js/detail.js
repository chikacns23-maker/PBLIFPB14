// Dijalankan saat halaman detail dimuat
document.addEventListener("DOMContentLoaded", function () {
    // Ambil data nama ruangan yang disimpan saat tombol reservasi diklik di beranda
    const ruangAktif = localStorage.getItem("ruangDipilih");

    // Jika ada data ruangan yang tersimpan, tampilkan di elemen judul
    if (ruangAktif) {
        const judulRuang = document.getElementById("namaRuangan");
        if (judulRuang) {
            judulRuang.innerText = ruangAktif;
        }

        // Contoh opsional: Menyesuaikan kapasitas berdasarkan ruangan yang dipilih
        const infoKapasitas = document.querySelector(".room-header-info p");
        if (infoKapasitas) {
            if (ruangAktif.toLowerCase().includes("a2")) {
                infoKapasitas.innerHTML = "👥 Kapasitas 8 orang &nbsp;|&nbsp; <span class='status-tersedia'>● Tersedia</span>";
            } else if (ruangAktif.toLowerCase().includes("b1")) {
                infoKapasitas.innerHTML = "👥 Kapasitas 12 orang &nbsp;|&nbsp; <span class='status-digunakan'>● Digunakan</span>";
            } else {
                infoKapasitas.innerHTML = "👥 Kapasitas 10 orang &nbsp;|&nbsp; <span class='status-tersedia'>● Tersedia</span>";
            }
        }
    }
});

// Fungsi untuk melanjutkan ke halaman Form Reservasi
function lanjutKeForm() {
    const ruangAktif = localStorage.getItem("ruangDipilih") || "Ruangan";
    alert("Mengarahkan ke formulir reservasi untuk " + ruangAktif + "...");
    // window.location.href = "form_reservasi.html";
}