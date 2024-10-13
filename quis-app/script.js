// array pertanyaan dan jawaban
const questions = [
  {
    question: "Apa itu variabel dalam pemrograman?",
    answers: [
      { text: "Fungsi untuk mengeksekusi kode", correct: false },
      { text: "Jenis data", correct: false },
      { text: "Tempat menyimpan data", correct: true },
      { text: "Pengulangan", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan loop?",
    answers: [
      { text: "Tempat menyimpan data", correct: false },
      { text: "Fungsi untuk memanggil kode", correct: false },
      { text: "Struktur untuk mengulangi kode", correct: true },
      { text: "Tipe variabel", correct: false },
    ],
  },
  {
    question: "Apa fungsi dari kondisi 'if'?",
    answers: [
      { text: "Mengulang kode", correct: false },
      { text: "Mengeksekusi kode berdasarkan kondisi", correct: true },
      { text: "Menyimpan data", correct: false },
      { text: "Menampilkan output", correct: false },
    ],
  },
  {
    question: "Apa itu fungsi dalam pemrograman?",
    answers: [
      { text: "Tipe data", correct: false },
      { text: "Kumpulan kode yang dapat dipanggil", correct: true },
      { text: "Sebuah loop", correct: false },
      { text: "Variabel yang tidak berubah", correct: false },
    ],
  },
  {
    question: "Apa itu array?",
    answers: [
      { text: "Fungsi untuk menghitung", correct: false },
      { text: "Struktur untuk menyimpan banyak data", correct: true },
      { text: "Tipe data tunggal", correct: false },
      { text: "Sebuah kondisi", correct: false },
    ],
  },
  {
    question: "Apa itu objek dalam pemrograman?",
    answers: [
      { text: "Hanya tempat menyimpan data", correct: false },
      { text: "Sebuah loop", correct: false },
      { text: "Kumpulan data dan fungsi terkait", correct: true },
      { text: "Fungsi yang tidak kembali", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan debug?",
    answers: [
      { text: "Menulis kode baru", correct: false },
      { text: "Menemukan dan memperbaiki kesalahan dalam kode", correct: true },
      { text: "Mengulang kode", correct: false },
      { text: "Membuat variabel", correct: false },
    ],
  },
  {
    question: "Apa yang dilakukan perintah 'console.log()'?",
    answers: [
      { text: "Menghentikan program", correct: false },
      { text: "Menampilkan output di konsol", correct: true },
      { text: "Menyimpan data", correct: false },
      { text: "Menghitung nilai", correct: false },
    ],
  },
  {
    question: "Apa itu HTML?",
    answers: [
      { text: "Bahasa pemrograman", correct: false },
      { text: "Framework", correct: false },
      { text: "Bahasa markup untuk membuat halaman web", correct: true },
      { text: "Database", correct: false },
    ],
  },
  {
    question: "Apa itu CSS?",
    answers: [
      { text: "Bahasa pemrograman backend", correct: false },
      { text: "Sistem basis data", correct: false },
      { text: "Bahasa untuk mendesain tampilan web", correct: true },
      { text: "Framework JavaScript", correct: false },
    ],
  },
];

let currentQuestionIndex = 0; // Menyimpan indeks pertanyaan saat ini
let score = 0; // Menyimpan skor pengguna

// ambil semua elemen yang kita butuhkan dari id
const questionContainer = document.getElementById("question-container"); // Container untuk pertanyaan
const questionElement = document.getElementById("question"); // Elemen untuk menampilkan teks pertanyaan
const answerButtons = document.getElementById("answer-buttons"); // Container untuk tombol jawaban
const nextButton = document.getElementById("next-btn"); // Tombol untuk melanjutkan ke pertanyaan berikutnya
const resultContainer = document.getElementById("result-container"); // Container untuk menampilkan hasil
const scoreElement = document.getElementById("score"); // Elemen untuk menampilkan skor
const restartButton = document.getElementById("restart-btn"); // Tombol untuk memulai ulang kuis

// buat fungsi untuk memulai kuis
function startQuiz() {
  currentQuestionIndex = 0; // Mengatur indeks pertanyaan ke 0
  score = 0; // Mengatur skor ke 0
  nextButton.style.display = "none"; // Menyembunyikan tombol Next
  resultContainer.style.display = "none"; // Menyembunyikan hasil
  questionContainer.style.display = "block"; // Menampilkan container pertanyaan
  showQuestion(); // Menampilkan pertanyaan pertama
}

function showQuestion() {
  resetState(); // Mengatur ulang state tampilan jawaban
  const currentQuestion = questions[currentQuestionIndex]; // Mengambil pertanyaan saat ini
  questionElement.textContent = currentQuestion.question; // Menampilkan teks pertanyaan

  // Membuat tombol untuk setiap jawaban
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button"); // Membuat elemen button
    button.textContent = answer.text; // Mengatur teks button
    button.classList.add("answer-btn"); // Menambahkan kelas untuk styling
    if (answer.correct) {
      button.dataset.correct = answer.correct; // Menyimpan informasi jika jawaban benar
    }
    button.addEventListener("click", selectAnswer); // Menambahkan event listener untuk mengelola klik
    answerButtons.appendChild(button); // Menambahkan button ke container jawaban
  });
}

function resetState() {
  nextButton.style.display = "none"; // Menyembunyikan tombol Next
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild); // Menghapus semua tombol jawaban
  }
}

function selectAnswer(e) {
  const selectedButton = e.target; // Mengambil button yang dipilih
  const correct = selectedButton.dataset.correct === "true"; // Memeriksa apakah jawaban benar
  if (correct) {
    score++; // Menambah skor jika jawaban benar
    selectedButton.style.backgroundColor = "#4caf50"; // Mengubah warna background menjadi hijau
  } else {
    selectedButton.style.backgroundColor = "#f44336"; // Mengubah warna background menjadi merah
  }

  // Menonaktifkan semua button jawaban
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true; // Menonaktifkan button
    if (button.dataset.correct) {
      button.style.backgroundColor = "#4caf50"; // Menandai jawaban benar
    }
  });

  // Menampilkan tombol Next jika masih ada pertanyaan
  if (currentQuestionIndex < questions.length - 1) {
    nextButton.style.display = "inline-block"; // Menampilkan tombol Next
  } else {
    showResult(); // Menampilkan hasil jika semua pertanyaan telah dijawab
  }
}

// handle event listener untuk nextbtn
nextButton.addEventListener("click", () => {
  currentQuestionIndex++; // Meningkatkan indeks pertanyaan
  showQuestion(); // Menampilkan pertanyaan berikutnya
});

function showResult() {
  questionContainer.style.display = "none"; // Menyembunyikan container pertanyaan
  resultContainer.style.display = "block"; // Menampilkan container hasil
  scoreElement.textContent = `Your score: ${score} / ${questions.length}`; // Menampilkan skor akhir
}

restartButton.addEventListener("click", startQuiz); // Mengatur ulang kuis saat tombol restart ditekan

startQuiz(); // Memulai kuis saat aplikasi dijalankan
