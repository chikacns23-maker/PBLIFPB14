document.addEventListener("DOMContentLoaded", function () {
    // Ambil data reservasi yang tersimpan dari Halaman 6
    const dataString = localStorage.getItem("reservasiTerakhir");

    if (dataString) {
        try {
            const data = JSON.parse(dataString);

            // Tampilkan data di Halaman 7 (Konfirmasi)
            const subJudulPesan = document.getElementById("subJudulPesan");
            if (subJudulPesan && data.ruangan) {
                subJudulPesan.innerText = `${data.ruangan} telah berhasil dipesan.`;
            }

            const valTanggal = document.getElementById("valTanggal");
            if (valTanggal && data.tanggal) {
                valTanggal.innerText = data.tanggal;
            }

            const valWaktu = document.getElementById("valWaktu");
            if (valWaktu && data.waktu) {
                valWaktu.innerText = data.waktu;
            }

            const valJumlahOrang = document.getElementById("valJumlahOrang");
            if (valJumlahOrang && data.jumlahOrang) {
                valJumlahOrang.innerText = data.jumlahOrang + " orang";
            }
        } catch (e) {
            console.error("Gagal membaca data reservasi:", e);
        }
    }
});