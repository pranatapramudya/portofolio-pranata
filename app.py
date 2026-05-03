import os
import requests # Tambahan Wajib: Untuk ngambil data dari API luar
import sqlite3
from flask import Flask, render_template, request, jsonify

# Tarik dari 'brankas' Vercel atau environment terminal lokal
api_key = os.environ.get('OPENWEATHER_API_KEY')

app = Flask(__name__)

# Fungsi bantuan untuk mendapatkan koneksi database
def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row 
    return conn

@app.route('/')
def home():
    return render_template('index.html')

# === TAMBAHAN BARU: Route untuk Fitur Cuaca ===
@app.route('/weather', methods=['GET'])
def get_weather():
    # Ambil nama kota dari permintaan browser
    city = request.args.get('city')
    
    if not city:
        return jsonify({'error': 'Kota tidak diberikan'}), 400
        
    if not api_key:
        return jsonify({'error': 'API Key cuaca belum disetting di Environment Variables'}), 500

    # URL ditembak ke OpenWeatherMap versi 2.5
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    
    try:
        # Flask "ngobrol" dengan server cuaca
        response = requests.get(url)
        data = response.json()
        
        # Kalau kota ketemu (Status 200 OK)
        if response.status_code == 200:
            return jsonify(data)
        else:
            # Kalau kota ngasal atau ga ketemu (Status 404)
            return jsonify({'error': 'Kota tidak ditemukan'}), 404
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# === ROUTE KONTAK DATABASE LAMA LU ===
@app.route('/contact', methods=['POST'])
def contact():
    if request.is_json:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        conn = get_db_connection()
        conn.execute('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
                     (name, email, message))
        conn.commit()
        conn.close()
        
        return jsonify({'status': 'success', 'message': 'Pesan berhasil disimpan!'})
    else:
        return jsonify({'status': 'error', 'message': 'Format data tidak valid!'}), 400

if __name__ == '__main__':
    # Gw balikin ke port 5000 biar pas lu ngetik localhost:5000 langsung jalan
    app.run(debug=True, port=5000)