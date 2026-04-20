# My Professional Portfolio 🚀

Website portofolio pribadi yang dibangun dengan Flask dan dideploy ke Vercel. Digunakan untuk menampilkan proyek-proyek IT, layanan SaaS, dan keahlian teknis lainnya.

## 🛠️ Stack Teknologi

- **Backend:** Python (Flask)
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Form Handling:** [Formspree](https://formspree.io/) (Kirim pesan langsung ke Gmail)
- **Deployment:** [Vercel](https://vercel.com/)
- **Version Control:** GitHub

## 📂 Struktur Folder

```text
pranata_portfolio/
├── static/              # File aset (CSS, JS, Gambar)
│   ├── css/
│   ├── js/
│   └── images/
├── templates/           # File HTML (Jinja2)
├── app.py               # Entry point aplikasi Flask
├── requirements.txt     # Daftar library Python (Dependency)
├── vercel.json          # Konfigurasi deployment Vercel
└── README.md            # Dokumentasi proyek
🚀 Cara Menambah Proyek Baru
Jika lu mau tambah proyek (seperti SaaS Boilerplate atau sistem baru):

Buka templates/index.html:

Cari bagian <section id="projects">.

Copy-paste blok div proyek yang sudah ada.

Ganti judul, deskripsi, dan gambar proyeknya.

Update Gambar:

Simpan gambar/screenshot proyek baru di folder static/images/.

Update tag <img> di HTML agar mengarah ke file baru tersebut.

Deploy Ulang:
Simpan perubahan di VS Code, lalu jalankan perintah di terminal:

Bash
git add .
git commit -m "Update: Menambahkan proyek [Nama Proyek]"
git push
Vercel akan otomatis melakukan update website dalam hitungan detik.

🔒 Keamanan & API Key
Environment Variables: API Key (seperti OpenWeatherMap) TIDAK BOLEH ditulis langsung di kode.

Gunakan os.environ.get('NAMA_VARIABLE') di app.py.

Tambahkan key/value tersebut di menu Settings > Environment Variables di Dashboard Vercel.

📧 Kontak Form
Web ini menggunakan Formspree. Jika ingin mengganti tujuan email:

Login ke Formspree.

Buat form baru atau ambil ID form yang ada.

Update URL di static/js/script.js pada bagian fungsi fetch.

Created by Pranata Pramudya - S.Kom
```
