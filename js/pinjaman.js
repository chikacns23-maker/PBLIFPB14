document.addEventListener("DOMContentLoaded", function () {
    // 1. Ambil data nama ruangan yang dipilih dari halaman beranda/detail via localStorage
    const ruangAktif = localStorage.getItem("ruangDipilih") || "Ruang A1";
    
    // Tampilkan di Card Ringkasan Ruangan
    const namaRuangDisplay = document.getElementById("namaRuangDisplay");
    const kapasitasDisplay = document.getElementById("kapasitasDisplay");

    if (namaRuangDisplay) {
        namaRuangDisplay.innerText = ruangAktif;
    }

    // Sesuaikan teks kapasitas berdasarkan nama ruangan secara dinamis
    if (kapasitasDisplay) {
        if (ruangAktif.toLowerCase().includes("a2")) {
            kapasitasDisplay.innerText = "Kapasitas 8 orang";
        } else if (ruangAktif.toLowerCase().includes("b1")) {
            kapasitasDisplay.innerText = "Kapasitas 12 orang";
        } else {
            kapasitasDisplay.innerText = "Kapasitas 10 orang";
        }
    }

    // Set tanggal default ke hari ini di input date
    const inputTanggal = document.getElementById("tanggalReservasi");
    if (inputTanggal) {
        const today = new Date().toISOString().split("T")[0];
        inputTanggal.value = today;
    }

    // 2. Menangani Submit Form Konfirmasi Reservasi
    const formPeminjaman = document.getElementById("formPeminjaman");
    if (formPeminjaman) {
        formPeminjaman.addEventListener("submit", function (e) {
            e.preventDefault();

            const tanggal = document.getElementById("tanggalReservasi").value;
            const waktu = document.getElementById("waktuReservasi").value;
            const jumlahOrang = document.getElementById("jumlahOrang").value;
            const namaUser = localStorage.getItem("namaPengguna") || "Pengguna";

            // Simpan detail reservasi terbaru ke localStorage
            const dataReservasi = {
                ruangan: ruangAktif,
                peminjam: namaUser,
                tanggal: tanggal,
                waktu: waktu,
                jumlahOrang: jumlahOrang,
                status: "Aktif"
            };

            localStorage.setItem("reservasiTerakhir", JSON.stringify(dataReservasi));

            // Lanjut ke Halaman 7 (Konfirmasi / Bukti Reservasi Berhasil)
            // Jika Anda punya file konfirmasi.html, arahkan ke sana. Jika belum, kembali ke beranda
            alert(`Reservasi ${ruangAktif} berhasil diproses!`);
            window.location.href = "konfirmasi.html"; 
        });
    }
});
