// Menunggu hingga seluruh konten HTML selesai dimuat sebelum menjalankan JavaScript
document.addEventListener("DOMContentLoaded", function () {
  /* =========================================
       1. FITUR NAVIGASI MOBILE (HAMBURGER MENU)
       ========================================= */
  const hamburger = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    // Saat tombol garis tiga diklik
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active"); // Munculkan/Sembunyikan menu
      hamburger.classList.toggle("active"); // Ubah ikon garis jadi X
    });

    // Tutup menu otomatis saat salah satu link diklik
    document.querySelectorAll(".nav-links li a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }

  /* =========================================
       2. FUNGSI PENGIRIMAN FORM KONTAK (FORMSPREE)
       ========================================= */
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      // Mencegah form me-reload halaman
      event.preventDefault();

      // Mengambil data dari form
      const formData = new FormData(contactForm);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      // Mengirim data ke Formspree API
      fetch("https://formspree.io/f/mqewllrq", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            alert("Pesan berhasil dikirim langsung ke Email!");
            contactForm.reset(); // Kosongkan form
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                alert(
                  "Gagal: " +
                    data["errors"].map((error) => error["message"]).join(", "),
                );
              } else {
                alert("Terjadi kesalahan saat mengirim pesan.");
              }
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Tidak dapat terhubung ke server. Silakan coba lagi nanti.");
        });
    });
  }

  /* =========================================
       3. FITUR ANIMASI FADE-IN SAAT SCROLL
       ========================================= */
  const fadeInElements = document.querySelectorAll(".fade-in-element");

  // Konfigurasi observer: Elemen muncul saat 20% terlihat di layar
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Hentikan observasi agar animasi jalan sekali saja
      }
    });
  }, observerOptions);

  fadeInElements.forEach((el) => observer.observe(el));

  /* =========================================
       4. FUNGSI SMOOTH SCROLL (TOMBOL SPESIFIK)
       ========================================= */
  const viewPortfolioBtn = document.getElementById("view-portfolio-btn");
  const projectsSection = document.getElementById("projects");

  if (viewPortfolioBtn && projectsSection) {
    viewPortfolioBtn.addEventListener("click", function (event) {
      event.preventDefault();
      projectsSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});
