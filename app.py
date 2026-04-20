# Impor library yang kita butuhkan, tambahkan sqlite3
import sqlite3
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Fungsi bantuan untuk mendapatkan koneksi database
# Ini cara yang lebih rapi daripada membuka koneksi di setiap route
def get_db_connection():
    conn = sqlite3.connect('database.db')
    # Mengatur agar hasil query bisa diakses seperti dictionary (conn['kolom'])
    conn.row_factory = sqlite3.Row 
    return conn

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    if request.is_json:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        # === BAGIAN YANG DIUBAH ===
        # 1. Buka koneksi ke database
        conn = get_db_connection()
        
        # 2. Masukkan data ke tabel 'messages'
        # Menggunakan '?' adalah cara aman untuk mencegah SQL Injection
        conn.execute('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
                     (name, email, message))
        
        # 3. Simpan perubahan (commit) ke database
        conn.commit()
        
        # 4. Tutup koneksi
        conn.close()
        
        # Hapus print() yang lama, karena data sudah masuk DB
        # print(f"Pesan Diterima Dari: {name} ({email})")
        # print(f"Isi Pesan: {message}")
        
        return jsonify({'status': 'success', 'message': 'Pesan berhasil disimpan!'})
    else:
        return jsonify({'status': 'error', 'message': 'Format data tidak valid!'}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5001)