// Array yang menyimpan daftar kutipan (quotes) beserta penulisnya (author)
const quotes = [
  {
    text: "Kita tidak pernah berhenti belajar karena belajar itu sendiri adalah proses yang tidak ada habisnya.",
    author: "Albert Einstein",
  },
  {
    text: "Sukses tidak datang dari apa yang kamu lakukan sesekali, tapi dari apa yang kamu lakukan secara konsisten.",
    author: "Marie Forleo",
  },
  {
    text: "Jangan takut untuk gagal. Takutlah jika kamu tidak mencoba.",
    author: "Michael Jordan",
  },
  {
    text: "Teknologi bukanlah masalah, tetapi bagaimana kita menggunakannya adalah yang menentukan.",
    author: "Tim Berners-Lee",
  },
  {
    text: "Pemrograman itu seperti menulis buku. Hanya saja, jika kamu menulis buku dan melakukan kesalahan, kamu tidak dapat memperbaikinya di halaman berikutnya.",
    author: "J. P. McCormick",
  },
  {
    text: "Jika kamu tidak belajar sesuatu yang baru setiap hari, kamu akan tertinggal.",
    author: "Steve Jobs",
  },
  {
    text: "Yang paling penting adalah untuk terus berusaha dan tidak pernah menyerah.",
    author: "Elon Musk",
  },
  {
    text: "Coding adalah seni memecahkan masalah dengan cara yang elegan.",
    author: "John Carmack",
  },
  {
    text: "Kemajuan besar sering kali membutuhkan waktu dan ketekunan.",
    author: "Bill Gates",
  },
  {
    text: "Belajarlah dari masa lalu, hiduplah di masa kini, dan codinglah untuk masa depan.",
    author: "Anonymous",
  },
];

// Mendapatkan elemen HTML berdasarkan id-nya untuk menampilkan teks kutipan dan nama penulisnya
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

// Fungsi untuk menghasilkan kutipan secara acak
function generateQuote() {
  // Mendapatkan indeks acak dari array quotes
  const randomIndex = Math.floor(Math.random() * quotes.length); // Menghasilkan angka acak berdasarkan panjang array
  const randomQuote = quotes[randomIndex]; // Mengambil objek kutipan berdasarkan indeks acak

  // Mengupdate elemen HTML dengan teks kutipan dan nama penulisnya
  quoteText.textContent = `"${randomQuote.text}"`; // Menampilkan teks kutipan
  quoteAuthor.textContent = `- ${randomQuote.author}`; // Menampilkan penulis kutipan
}

// Menambahkan event listener ke tombol, memanggil fungsi generateQuote ketika tombol diklik
newQuoteButton.addEventListener("click", generateQuote);

// Memanggil fungsi generateQuote ketika halaman pertama kali dimuat untuk menampilkan kutipan awal
generateQuote();
