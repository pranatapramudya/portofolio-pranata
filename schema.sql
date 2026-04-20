-- Hapus tabel 'messages' jika sudah ada (untuk reset)
DROP TABLE IF EXISTS messages;

-- Buat tabel baru untuk menyimpan pesan kontak
CREATE TABLE messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- ID unik untuk setiap pesan
    name TEXT NOT NULL,                   -- Nama pengirim, tidak boleh kosong
    email TEXT NOT NULL,                  -- Email pengirim, tidak boleh kosong
    message TEXT NOT NULL,                -- Isi pesan, tidak boleh kosong
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP -- Waktu pesan dibuat
);