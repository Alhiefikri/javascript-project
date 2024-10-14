const faqData = [
  {
    question: "Apa itu web development?",
    answer:
      "Web development adalah proses membangun dan memelihara situs web. Ini mencakup desain web, pengembangan front-end, pengembangan back-end, dan integrasi sistem.",
  },
  {
    question: "Apa perbedaan antara front-end dan back-end?",
    answer:
      "Front-end adalah bagian dari situs web yang berinteraksi langsung dengan pengguna, biasanya dibangun menggunakan HTML, CSS, dan JavaScript. Back-end adalah sisi server yang menangani logika aplikasi, basis data, dan autentikasi.",
  },
  {
    question: "Apa itu HTML?",
    answer:
      "HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat halaman web. HTML menentukan struktur dan konten halaman web.",
  },
  {
    question: "Apa itu CSS?",
    answer:
      "CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mendesain dan memformat tampilan halaman web. CSS mengatur tata letak, warna, font, dan elemen visual lainnya.",
  },
  {
    question: "Apa itu JavaScript?",
    answer:
      "JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web interaktif. JavaScript memungkinkan manipulasi elemen halaman web secara dinamis.",
  },
  {
    question: "Apa itu responsive design?",
    answer:
      "Responsive design adalah pendekatan dalam desain web yang membuat situs web dapat beradaptasi dengan berbagai ukuran layar dan perangkat, memberikan pengalaman pengguna yang optimal.",
  },
  {
    question: "Apa itu framework dalam web development?",
    answer:
      "Framework adalah kumpulan alat dan pustaka yang menyediakan struktur dasar untuk membangun aplikasi web. Contoh framework populer adalah React, Angular, dan Vue.js.",
  },
  {
    question: "Apa itu API?",
    answer:
      "API (Application Programming Interface) adalah sekumpulan definisi dan protokol yang memungkinkan aplikasi berbeda untuk saling berkomunikasi dan bertukar data.",
  },
  {
    question: "Apa itu server dan klien?",
    answer:
      "Server adalah komputer yang menyediakan sumber daya atau layanan kepada komputer lain yang dikenal sebagai klien. Klien mengirimkan permintaan ke server dan server memberikan respons.",
  },
  {
    question: "Apa itu database dalam konteks web development?",
    answer:
      "Database adalah sistem yang menyimpan, mengelola, dan mengorganisasi data untuk aplikasi web. Database dapat berupa SQL (seperti MySQL) atau NoSQL (seperti MongoDB).",
  },
  {
    question: "Apa itu version control dan mengapa penting?",
    answer:
      "Version control adalah sistem yang mencatat perubahan pada file dari waktu ke waktu. Ini penting untuk kolaborasi tim, pelacakan perubahan, dan pemulihan versi sebelumnya.",
  },
  {
    question: "Apa itu SEO dan bagaimana cara kerjanya?",
    answer:
      "SEO (Search Engine Optimization) adalah praktik mengoptimalkan situs web agar lebih mudah ditemukan di mesin pencari. Ini melibatkan penggunaan kata kunci, meta tag, dan konten berkualitas.",
  },
];

// Mendapatkan elemen container untuk accordion dari DOM
const accordionContainer = document.getElementById("accordion");

// Fungsi untuk menghasilkan item accordion dari array faqData
function generateAccordionItems(faqData) {
  faqData.forEach((item) => {
    // Membuat elemen div untuk setiap item accordion
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    // Membuat elemen button sebagai header untuk tiap pertanyaan
    const header = document.createElement("button");
    header.classList.add("accordion-header");
    header.textContent = item.question; // Menampilkan pertanyaan sebagai teks button

    // Membuat elemen div untuk konten jawaban
    const content = document.createElement("div");
    content.classList.add("accordion-content");

    // Membuat elemen p untuk teks jawaban
    const contenText = document.createElement("p");
    contenText.textContent = item.answer; // Menampilkan jawaban di dalam elemen p

    // Menyisipkan teks jawaban ke dalam div konten
    content.appendChild(contenText);
    // Menyisipkan header (pertanyaan) dan konten (jawaban) ke dalam item accordion
    accordionItem.appendChild(header);
    accordionItem.appendChild(content);

    // Menambahkan setiap item accordion ke dalam container accordion di HTML
    accordionContainer.appendChild(accordionItem);
  });
}

// Memanggil fungsi untuk menghasilkan FAQ dari data faqData
generateAccordionItems(faqData);

// Mendapatkan semua elemen header accordion setelah mereka dibuat
const accordionHeaders = document.querySelectorAll(".accordion-header");

// Menambahkan event listener untuk interaksi accordion (membuka/menutup)
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    // Toggle class 'active' untuk header yang di-klik
    header.classList.toggle("active");

    // Mendapatkan elemen konten di bawah header yang di-klik
    const accordionContent = header.nextElementSibling;

    // Jika header memiliki class 'active', tampilkan kontennya
    if (header.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; // Menampilkan konten dengan tinggi dinamis
    } else {
      accordionContent.style.maxHeight = 0; // Menyembunyikan konten jika header tidak aktif
    }

    // Menutup konten accordion lainnya jika sudah terbuka
    accordionHeaders.forEach((otherHeader) => {
      if (otherHeader !== header && otherHeader.classList.contains("active")) {
        otherHeader.classList.remove("active"); // Menghapus class 'active'
        otherHeader.nextElementSibling.style.maxHeight = 0; // Menutup konten accordion lain
      }
    });
  });
});
