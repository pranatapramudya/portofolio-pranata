import sqlite3

# Membuat atau menghubungkan ke file database
connection = sqlite3.connect('database.db')

# Membuka file schema.sql
with open('schema.sql') as f:
    # Menjalankan skrip SQL di dalamnya
    connection.executescript(f.read())

# Menutup koneksi
connection.close()

print("Database berhasil diinisialisasi.")