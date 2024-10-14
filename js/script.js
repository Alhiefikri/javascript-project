const projects = [
  {
    img: "img/weather.png",
    title: "Weather App",
    description:
      "Aplikasi ini memberikan informasi cuaca terkini dan ramalan untuk lokasi yang dipilih.",
    link: "projects/weather-app/index.html",
  },
  {
    img: "img/image.png",
    title: "Kopi Kenangan Senja",
    description:
      "Sebuah aplikasi untuk menikmati kopi dengan berbagai pilihan dan suasana senja yang indah.",
    link: "projects/kopi-senja/index.html",
  },
  {
    img: "img/calculator.png",
    title: "Calculator",
    description:
      "Kalkulator sederhana untuk melakukan operasi matematika dasar dengan mudah.",
    link: "projects/calculator/index.html",
  },
  {
    img: "img/tv-finder.png",
    title: "Tv Finder",
    description:
      "Aplikasi yang membantu menemukan acara TV sesuai dengan preferensi Anda.",
    link: "projects/tv-finder/",
  },
  {
    img: "img/paint-app.png",
    title: "Paint App",
    description:
      "Aplikasi menggambar yang memungkinkan Anda untuk berkreasi dengan alat dan warna yang beragam.",
    link: "projects/paint-app/",
  },
  {
    img: "img/audio.png",
    title: "Audio App",
    description:
      "Aplikasi pemutar audio yang memungkinkan Anda mendengarkan musik favorit dengan antarmuka yang sederhana.",
    link: "projects/audio-app/",
  },
  {
    img: "img/color-picker.png",
    title: "Color Picker",
    description:
      "Aplikasi untuk memilih warna dan mendapatkan kode warna dalam format HEX atau RGB.",
    link: "projects/color-picker/",
  },
  {
    img: "img/countdown.png",
    title: "Countdown Timer",
    description:
      "Penghitung waktu mundur yang membantu Anda mengatur waktu untuk berbagai kegiatan.",
    link: "projects/Countdown-Timer/",
  },
  {
    img: "img/faq.png",
    title: "Faq Accordion",
    description:
      "Aplikasi tanya jawab dengan tampilan akordeon untuk menyimpan dan menampilkan informasi.",
    link: "projects/faq-accordion/",
  },
  {
    img: "img/gues_number.png",
    title: "Guess Number",
    description:
      "Permainan tebak angka yang menantang Anda untuk menebak angka yang dipilih oleh komputer.",
    link: "projects/number-guessing-game/",
  },
  {
    img: "img/quis-app.png",
    title: "Quis App",
    description:
      "Aplikasi kuis yang menyenangkan untuk menguji pengetahuan Anda di berbagai bidang.",
    link: "projects/quis-app/",
  },
  {
    img: "img/random-quotes.png",
    title: "Random Quotes App",
    description:
      "Aplikasi yang menampilkan kutipan-kutipan inspiratif secara acak.",
    link: "projects/Random-Qoute-Generator/",
  },
  {
    img: "img/scoreboard.png",
    title: "Score Board",
    description:
      "Aplikasi papan skor untuk mencatat hasil pertandingan atau kompetisi.",
    link: "projects/scoreboard/",
  },
  {
    img: "img/shop-cart.png",
    title: "Shop Cart",
    description:
      "Aplikasi keranjang belanja yang memudahkan Anda dalam berbelanja secara online.",
    link: "projects/shopping-cart/",
  },
  {
    img: "img/todo-list.png",
    title: "Todo List",
    description:
      "Aplikasi untuk mencatat dan mengatur tugas harian Anda dengan mudah.",
    link: "projects/Todo-list/",
  },
  {
    img: "img/typing-test.png",
    title: "Typing Speed Test",
    description:
      "Uji kecepatan mengetik Anda dan tingkatkan kemampuan mengetik dengan aplikasi ini.",
    link: "projects/typing-speed-test/",
  },
];

// Mengurutkan proyek berdasarkan huruf depan dari judul
projects.sort((a, b) => {
  return a.title.localeCompare(b.title);
});

const projectGrid = document.getElementById("project-grid");

projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projectCard.setAttribute("data-aos", "fade-up");

  projectCard.innerHTML = `
    <img src="${project.img}" alt="${project.title}" />
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" class="btn">Lihat Proyek</a>
  `;

  projectGrid.appendChild(projectCard);
});

// Theme Toggle
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    toggleButton.textContent = "Switch to Dark Mode";
  } else {
    toggleButton.textContent = "Switch to Light Mode";
  }
});
