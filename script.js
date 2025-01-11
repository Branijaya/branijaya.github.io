// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const heroSection = document.querySelector(".hero");
const images = [
  'url("image1.jpg")', // Ganti dengan link gambar yang sesuai
  'url("image2.jpg")',
  'url("image3.jpg")',
];

let currentImageIndex = 0;

// Fungsi untuk mengganti gambar background setiap 5 detik
function changeBackground() {
  heroSection.style.backgroundImage = images[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % images.length; // Loop ke gambar pertama setelah mencapai gambar terakhir
}

// Ubah gambar background setiap 5 detik
setInterval(changeBackground, 5000);

// Panggil sekali di awal untuk menampilkan gambar pertama
changeBackground();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Validasi Formulir
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Mencegah form dikirim secara default

  // Ambil nilai input
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Semua kolom harus diisi!");
    return;
  }

  // Kirim data (di sini bisa diganti dengan API pengiriman data)
  alert("Pesan Anda telah terkirim. Terima kasih!");
  contactForm.reset(); // Reset form setelah berhasil dikirim
});

// Tambahkan event listener untuk highlight navbar link saat scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navbarLinks = document.querySelectorAll(".navbar a");

  let currentSection = "";

  // Cek section yang sedang terlihat di viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50; // Tambahkan offset untuk navbar
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  // Tambahkan class 'active' ke link yang sesuai dengan section
  navbarLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// Seleksi elemen container produk
const productContainer = document.querySelector(".product-container");

// Fungsi scroll ke kiri
function scrollLeft() {
  console.log("Scrolling left");
  productContainer.scrollBy({
    top: 0,
    left: -300, // Geser ke kiri sejauh 300px
    behavior: "smooth",
  });
}

// Fungsi scroll ke kanan
function scrollRight() {
  console.log("Scrolling right");
  productContainer.scrollBy({
    top: 0,
    left: 300, // Geser ke kanan sejauh 300px
    behavior: "smooth",
  });
}

// Debugging untuk tombol
document
  .querySelector(".scroll-btn.left")
  .addEventListener("click", scrollLeft);
document
  .querySelector(".scroll-btn.right")
  .addEventListener("click", scrollRight);
