// Objek utama yang menyimpan status dari kalkulator
const calculator = {
  displayValue: "0", // Nilai yang ditampilkan di layar kalkulator
  firstOperand: null, // Operand pertama (angka pertama yang dimasukkan)
  waitingForSecondOperand: false, // Apakah kalkulator sedang menunggu operand kedua
  operator: null, // Operator aritmatika (+, -, *, /) yang digunakan
};

// Fungsi untuk memperbarui tampilan layar kalkulator
function updateDisplay() {
  const display = document.querySelector(".calculator-display"); // Ambil elemen input display
  display.value = calculator.displayValue; // Set nilai display dari displayValue di objek kalkulator
}

// Fungsi untuk menangani masukan digit angka
function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  // Jika sedang menunggu operand kedua, masukkan digit baru dan reset flag waitingForSecondOperand
  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit; // Mulai nilai baru setelah operator ditekan
    calculator.waitingForSecondOperand = false; // Tidak lagi menunggu operand kedua
  } else {
    // Jika tidak menunggu operand kedua, tambahkan digit ke nilai display
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit; // Hindari awalan 0
  }
  updateDisplay(); // Perbarui tampilan dengan nilai terbaru
}

// Fungsi untuk menangani masukan desimal
function inputDecimal(dot) {
  // Cegah pengguna memasukkan lebih dari satu desimal
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot; // Tambahkan titik desimal ke nilai display
  }
}

// Fungsi untuk menangani operator aritmatika (+, -, *, /)
function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue); // Ubah nilai display menjadi angka (float)

  // Jika operator sudah ada dan menunggu operand kedua, ganti operator sebelumnya
  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  // Jika operand pertama belum diatur, simpan nilai saat ini sebagai operand pertama
  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    // Jika operator sudah diatur, hitung hasilnya dengan operand pertama dan kedua
    const result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`; // Perbarui display dengan hasil
    calculator.firstOperand = result; // Simpan hasil sebagai operand pertama
  }

  calculator.waitingForSecondOperand = true; // Setel flag bahwa operand kedua sedang ditunggu
  calculator.operator = nextOperator; // Set operator baru
  updateDisplay(); // Perbarui tampilan layar
}

// Fungsi untuk menghitung hasil berdasarkan operator
function calculate(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    return firstOperand + secondOperand; // Penjumlahan
  } else if (operator === "-") {
    return firstOperand - secondOperand; // Pengurangan
  } else if (operator === "*") {
    return firstOperand * secondOperand; // Perkalian
  } else if (operator === "/") {
    return firstOperand / secondOperand; // Pembagian
  } else if (operator === "√") {
    return Math.sqrt(firstOperand); // Akar kuadrat
  } else if (operator === "%") {
    return firstOperand / 100; // Persentase
  }

  return secondOperand; // Jika operator tidak ditemukan, kembalikan operand kedua
}

// Fungsi untuk mereset kalkulator ke kondisi awal
function resetCalculator() {
  calculator.displayValue = "0"; // Set display ke 0
  calculator.firstOperand = null; // Reset operand pertama
  calculator.waitingForSecondOperand = false; // Reset flag operand kedua
  calculator.operator = null; // Hapus operator
  updateDisplay(); // Perbarui tampilan layar
}

// Fungsi untuk menangani operasi "="
function handleEqual() {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue); // Ambil nilai operand kedua

  // Jika ada operator dan tidak sedang menunggu operand kedua, lakukan perhitungan
  if (operator && !calculator.waitingForSecondOperand) {
    const result = calculate(firstOperand, inputValue, operator); // Hitung hasil
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`; // Tampilkan hasil dengan 7 angka desimal
    calculator.firstOperand = null; // Reset operand pertama
    calculator.operator = null; // Reset operator
    calculator.waitingForSecondOperand = false; // Reset flag operand kedua
    updateDisplay(); // Perbarui tampilan layar
  }
}

// Event listener untuk menangani klik tombol pada kalkulator
document
  .querySelector(".calculator-keys")
  .addEventListener("click", (event) => {
    const { target } = event;

    // Abaikan klik yang bukan pada tombol
    if (!target.matches("button")) {
      return;
    }

    // Jika tombol operator ditekan
    if (target.classList.contains("operator")) {
      handleOperator(target.value);
      return;
    }

    // Jika tombol desimal ditekan
    if (target.classList.contains("decimal")) {
      inputDecimal(target.value);
      return;
    }

    // Jika tombol "AC" (All Clear) ditekan
    if (target.classList.contains("all-clear")) {
      resetCalculator();
      return;
    }

    // Jika tombol "=" ditekan
    if (target.classList.contains("equal-sign")) {
      handleEqual();
      return;
    }

    // Jika tombol digit ditekan
    inputDigit(target.value);
  });
