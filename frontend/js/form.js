// Dijalankan saat halaman formulir reservasi dimuat
document.addEventListener("DOMContentLoaded", function () {
    // 1. Ambil data ruangan yang dipilih dari localStorage
    const ruangAktif = localStorage.getItem("ruangDipilih") || "Ruang A1";
    
    // Masukkan ke dalam input text form secara otomatis
    const inputRuang = document.getElementById("namaRuangInput");
    if (inputRuang) {
        inputRuang.value = ruangAktif;
    }

    // 2. Ambil data nama pengguna yang sedang login, lalu isi otomatis ke form nama peminjam
    const namaUserAktif = localStorage.getItem("namaPengguna");
    if (namaUserAktif) {
        const inputNamaPeminjam = document.getElementById("namaPeminjam");
        if (inputNamaPeminjam) {
            inputNamaPeminjam.value = namaUserAktif;
        }
    }

    // 3. Tangani proses saat form disubmit (konfirmasi reservasi)
    const formReservasi = document.getElementById("formReservasi");
    if (formReservasi) {
        formReservasi.addEventListener("submit", function (e) {
            e.preventDefault();

            const peminjam = document.getElementById("namaPeminjam").value;
            const nim = document.getElementById("nimPeminjam").value;
            const tanggal = document.getElementById("tanggalReservasi").value;
            const jam = document.getElementById("jamMulai").value;
            const keperluan = document.getElementById("keperluan").value;

            // Validasi sederhana
            if (!peminjam || !tanggal || !jam) {
                alert("Harap isi semua kolom yang wajib diisi!");
                return;
            }

            // Simpan data reservasi ke localStorage untuk ditampilkan di menu riwayat nanti
            const dataReservasiBaru = {
                ruangan: ruangAktif,
                peminjam: peminjam,
                nim: nim,
                tanggal: tanggal,
                jam: jam,
                keperluan: keperluan,
                status: "Berhasil / Menunggu Konfirmasi"
            };
            
            localStorage.setItem("riwayatReservasi", JSON.stringify(dataReservasiBaru));

            alert("Reservasi untuk " + ruangAktif + " atas nama " + peminjam + " berhasil dikirim!");
            
            // Mengarahkan kembali ke halaman beranda setelah berhasil
            window.location.href = "beranda.html";
        });
    }
});