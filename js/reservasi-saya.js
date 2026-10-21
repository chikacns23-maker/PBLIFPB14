document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("listReservasiContainer");
    if (!container) return;

    // Mapping gambar berdasarkan nama ruangan
    const gambarRuanganMap = {
        "Ruang A1": "kerja kelompok.jpg",
        "Ruang A2": "luas.jpg",
        "Ruang B1": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
    };

    // 1. Cek apakah ada data di localStorage
    let dataString = localStorage.getItem("reservasiTerakhir");

    // 2. JIKA KOSONG, BUATKAN DATA CONTOH (DEFAULT RUANG A2 UNTUK TES)
    if (!dataString) {
        const dummyData = {
            ruangan: "Ruang A2",
            tanggal: "2026-10-20",
            waktu: "13:00 - 15:00",
            jumlahOrang: "4-6",
            status: "Aktif"
        };
        localStorage.setItem("reservasiTerakhir", JSON.stringify(dummyData));
        dataString = JSON.stringify(dummyData);
    }

    // 3. Tampilkan Data ke Layar
    try {
        const data = JSON.parse(dataString);
        const namaRuang = data.ruangan || "Ruang A2";

        // Tentukan gambar ruangan (default ke 'luas.jpg' jika Ruang A2 atau tidak ditemukan)
        const fotoRuangan = data.gambar || gambarRuanganMap[namaRuang] || "luas.jpg";

        container.innerHTML = `
            <div class="reservation-card" style="border: 1px solid #e0e0e0; border-radius: 12px; padding: 20px; background: #fff; margin-top: 15px;">
                <div class="card-top-info" style="display: flex; gap: 15px; align-items: center;">
                    <!-- Bagian Foto Ruangan -->
                    <div class="room-thumb" style="width: 80px; height: 80px; flex-shrink: 0; border-radius: 8px; overflow: hidden; background: #f0f0f0;">
                        <img src="${fotoRuangan}" alt="${namaRuang}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                    </div>
                    <div class="room-desc">
                        <h4 style="margin: 0 0 5px 0; font-size: 1.1rem; color: #1a1a1a;">${namaRuang}</h4>
                        <p style="margin: 0 0 4px 0; color: #666; font-size: 0.9rem;">📅 ${data.tanggal || "-"} &bull; ⏰ ${data.waktu || "-"}</p>
                        <p style="margin: 0 0 4px 0; color: #666; font-size: 0.9rem;">👥 ${data.jumlahOrang || "1"} orang Orang</p>
                        <span class="status-tag" style="color: #2e7d32; font-weight: 600; font-size: 0.85rem;">● ${data.status || 'Aktif'}</span>
                    </div>
                </div>
                <div class="card-actions" style="display: flex; gap: 10px; margin-top: 15px; border-top: 1px solid #eee; padding-top: 15px;">
                    <a href="konfirmasi.html" style="flex: 1; text-align: center; padding: 8px; border: 1px solid #1976d2; color: #1976d2; border-radius: 6px; text-decoration: none; font-weight: 600;">Detail</a>
                    <button onclick="batalkanReservasi()" style="flex: 1; padding: 8px; border: 1px solid #d32f2f; color: #d32f2f; background: #fff; border-radius: 6px; font-weight: 600; cursor: pointer;">Batal</button>
                </div>
            </div>
        `;
    } catch (e) {
        console.error("Gagal membaca data:", e);
        container.innerHTML = `<p style="text-align:center; padding: 20px; color: red;">Terjadi kesalahan saat memuat data.</p>`;
    }
});

function batalkanReservasi() {
    if (confirm("Apakah Anda yakin ingin membatalkan reservasi ini?")) {
        localStorage.removeItem("reservasiTerakhir");
        alert("Reservasi berhasil dibatalkan.");
        location.reload();
    }
}