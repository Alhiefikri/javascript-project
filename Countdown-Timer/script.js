// Mendapatkan elemen-elemen HTML
const countdownElement = document.getElementById("countdown");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const inputHours = document.getElementById("inputHours");
const inputMinutes = document.getElementById("inputMinutes");
const inputSeconds = document.getElementById("inputSeconds");
const startButton = document.getElementById("startButton");

// Variabel untuk menyimpan ID interval
let countdownInterval;

/**
 * Fungsi untuk memulai timer
 */
function startTimer() {
  // Mengambil nilai input dari pengguna
  let hours = parseInt(inputHours.value) || 0;
  let minutes = parseInt(inputMinutes.value) || 0;
  let seconds = parseInt(inputSeconds.value) || 0;

  // Menghitung total waktu dalam detik
  let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

  // Jika total waktu kurang dari atau sama dengan 0, tampilkan pesan peringatan dan hentikan fungsi
  if (totalTimeInSeconds <= 0) {
    alert("Please enter a valid time.");
    return;
  }

  // Mengosongkan input setelah timer dimulai
  inputHours.value = "";
  inputMinutes.value = "";
  inputSeconds.value = "";

  /**
   * Fungsi untuk memperbarui tampilan setiap detik
   */
  countdownInterval = setInterval(() => {
    // Menghitung sisa hari, jam, menit, dan detik
    const days = Math.floor(totalTimeInSeconds / 86400);
    const hours = Math.floor((totalTimeInSeconds % 86400) / 3600);
    const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    const seconds = Math.floor(totalTimeInSeconds % 60);

    // Memperbarui tampilan elemen HTML dengan waktu yang tersisa
    daysElement.textContent = days.toString().padStart(2, "0");
    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");

    // Mengurangi total waktu setiap detik
    totalTimeInSeconds--;

    // Jika waktu habis, hentikan timer dan tampilkan pesan peringatan
    if (totalTimeInSeconds < 0) {
      clearInterval(countdownInterval);
      alert("Waktu Habis!");
    }
  }, 1000); // Interval waktu dalam milidetik (1000 ms = 1 detik)
}

// Menambahkan event listener pada tombol start
startButton.addEventListener("click", () => {
  // Menghentikan timer yang sedang berjalan jika ada
  clearInterval(countdownInterval);

  // Memulai timer baru
  startTimer();
});
