document.addEventListener('DOMContentLoaded', function () {
    // === GANTI DENGAN API KEY ANDA ===
    const apiKey = 'c236e0f3c5a827c2d0e665962b6af4b6';

    // Elemen-elemen HTML
    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('search-btn');
    const weatherResult = document.getElementById('weather-result');
    const errorMessage = document.getElementById('error-message');

    const cityNameEl = document.getElementById('city-name');
    const weatherIconEl = document.getElementById('weather-icon');
    const temperatureEl = document.getElementById('temperature');
    const descriptionEl = document.getElementById('description');

    // Fungsi untuk mengambil data cuaca
    async function getWeather(city) {
        // Sembunyikan hasil sebelumnya dan pesan error
        weatherResult.classList.add('hidden');
        errorMessage.classList.add('hidden');

        // URL API OpenWeatherMap
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try {
            // "Fetch" atau ambil data dari URL
            const response = await fetch(apiUrl);

            if (!response.ok) {
                // Jika kota tidak ditemukan, tampilkan error
                throw new Error('Kota tidak ditemukan');
            }

            // Ubah response menjadi format JSON
            const data = await response.json();

            // Tampilkan data ke halaman
            displayWeather(data);

        } catch (error) {
            // Jika terjadi error, tampilkan pesan error
            errorMessage.classList.remove('hidden');
            console.error('Error fetching weather data:', error);
        }
    }

    // Fungsi untuk menampilkan data ke elemen HTML
    function displayWeather(data) {
        cityNameEl.textContent = data.name;
        temperatureEl.textContent = `${Math.round(data.main.temp)}°C`;
        descriptionEl.textContent = data.weather[0].description;

        // Atur ikon cuaca sesuai data dari API
        const iconCode = data.weather[0].icon;
        weatherIconEl.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // Tampilkan kartu hasil cuaca
        weatherResult.classList.remove('hidden');
    }

    // Event listener untuk tombol cari
    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            getWeather(city);
        }
    });

    // Event listener untuk tombol Enter di input field
    cityInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchBtn.click();
        }
    });
});