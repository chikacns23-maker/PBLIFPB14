// Dijalankan saat halaman detail dimuat
document.addEventListener("DOMContentLoaded", function () {
    // Ambil data nama ruangan yang disimpan saat tombol reservasi diklik di beranda
    const ruangAktif = localStorage.getItem("ruangDipilih") || "Ruang A1";

    // Jika ada data ruangan yang tersimpan, tampilkan di elemen judul
    if (ruangAktif) {
        const judulRuang = document.getElementById("namaRuangan");
        if (judulRuang) {
            judulRuang.innerText = ruangAktif;
        }

        // Data spesifik untuk masing-masing ruangan (Foto, Kapasitas, Deskripsi)
        const databaseRuangan = {
            "Ruang A1": {
                kapasitas: "👥 Kapasitas 10 orang &nbsp;|&nbsp; <span class='status-tersedia'>● Tersedia</span>",
                gambar: "kerja kelompok.jpg", // Foto khusus Ruang A1
                deskripsi: "Ruang A1 adalah ruang belajar yang nyaman dengan fasilitas lengkap, cocok untuk belajar mandiri, diskusi kelompok, maupun pengerjaan tugas tim secara produktif."
            },
            "Ruang A2": {
                kapasitas: "👥 Kapasitas 8 orang &nbsp;|&nbsp; <span class='status-tersedia'>● Tersedia</span>",
                gambar: "Luas.jpg", // Foto khusus Ruang A2 (Beda)
                deskripsi: "Ruang A2 dirancang khusus untuk diskusi kelompok sedang dengan suasana tenang dan pencahayaan yang optimal untuk fokus belajar."
            },
            "Ruang B1": {
                kapasitas: "👥 Kapasitas 12 orang &nbsp;|&nbsp; <span class='status-digunakan'>● Digunakan</span>",
                gambar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", // Foto khusus Ruang B1 (Beda)
                deskripsi: "Ruang B1 memiliki kapasitas besar yang sangat cocok untuk presentasi proyek, seminar kecil, atau kerja kelompok skala besar."
            }
        };

        // Ambil data berdasarkan nama ruangan, atau gunakan default Ruang A1 jika tidak ditemukan
        const info = databaseRuangan[ruangAktif] || databaseRuangan["Ruang A1"];

        // Sesuaikan kapasitas di HTML
        const infoKapasitas = document.querySelector(".room-header-info p");
        if (infoKapasitas) {
            infoKapasitas.innerHTML = info.kapasitas;
        }

        // Sesuaikan gambar banner secara otomatis
        const imgBanner = document.querySelector(".room-image-banner img");
        if (imgBanner) {
            imgBanner.src = info.gambar;
            imgBanner.alt = "Foto " + ruangAktif;
        }

        // Sesuaikan teks deskripsi di HTML (jika ada elemennya)
        const deskripsiElem = document.querySelector(".room-description p");
        if (deskripsiElem) {
            deskripsiElem.innerText = info.deskripsi;
        }
    }
});

// Fungsi untuk melanjutkan ke halaman Form Reservasi
function lanjutKeForm() {
    const ruangAktif = localStorage.getItem("ruangDipilih") || "Ruangan";
    alert("Mengarahkan ke formulir reservasi untuk " + ruangAktif + "...");
    // window.location.href = "form_reservasi.html";
}