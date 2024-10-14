// Menghasilkan angka acak antara 1 dan 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
// Variabel untuk menghitung jumlah percobaan
let attempts = 0;

// Mendapatkan elemen HTML yang akan digunakan
const guessInput = document.getElementById("guessInput"); // Input tempat pengguna memasukkan tebakan
const guessButton = document.getElementById("guessButton"); // Tombol untuk submit tebakan
const message = document.getElementById("message"); // Elemen tempat menampilkan pesan hasil
const restartButton = document.getElementById("restartButton"); // Tombol untuk mereset permainan

// Fungsi untuk memeriksa tebakan pengguna
function checkGuess() {
  // Mengambil nilai input pengguna dan mengubahnya menjadi angka
  const userGuess = Number(guessInput.value);
  // Menambah jumlah percobaan setiap kali pengguna menebak
  attempts++;

  // Jika tebakan benar
  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`; // Pesan sukses
    message.style.color = "#28a745"; // Warna pesan hijau (untuk benar)
    endGame(); // Memanggil fungsi untuk mengakhiri permainan
  }
  // Jika tebakan terlalu tinggi
  else if (userGuess > randomNumber) {
    message.textContent = "Too high! Try again."; // Pesan jika tebakan terlalu tinggi
    message.style.color = "#dc3545"; // Warna pesan merah (untuk salah)
  }
  // Jika tebakan terlalu rendah
  else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try again."; // Pesan jika tebakan terlalu rendah
    message.style.color = "#dc3545"; // Warna pesan merah (untuk salah)
  }

  // Mengosongkan nilai input dan fokus kembali ke input
  guessInput.value = "";
  guessInput.focus();
}

// Fungsi untuk mengakhiri permainan (mematikan input dan tombol tebakan)
function endGame() {
  guessInput.disabled = true; // Mematikan input
  guessButton.disabled = true; // Mematikan tombol submit
  restartButton.style.display = "inline"; // Menampilkan tombol untuk memulai permainan ulang
}

// Fungsi untuk mereset permainan
function resetGame() {
  attempts = 0; // Reset jumlah percobaan
  randomNumber = Math.floor(Math.random() * 100) + 1; // Menghasilkan angka acak baru
  guessInput.disabled = false; // Mengaktifkan kembali input
  guessButton.disabled = false; // Mengaktifkan kembali tombol submit
  message.textContent = "Good luck! Start guessing . . ."; // Reset pesan ke default
  message.style.color = "#333"; // Warna pesan default
  restartButton.style.display = "none"; // Menyembunyikan tombol restart
  guessInput.value = ""; // Mengosongkan input
  guessInput.focus(); // Fokus kembali ke input
}

// Event listener untuk memeriksa tebakan ketika tombol diklik
guessButton.addEventListener("click", checkGuess);

// Event listener untuk mereset permainan ketika tombol restart diklik
restartButton.addEventListener("click", resetGame);

// Event listener untuk memeriksa tebakan ketika pengguna menekan Enter pada input
guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});
