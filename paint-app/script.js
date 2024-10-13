// Mendapatkan elemen canvas dari HTML dan membuat context 2D untuk menggambar
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Mendapatkan tombol brush, eraser, tombol clear, dan color picker dari HTML
const brushBtn = document.getElementById("brush");
const eraserBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clear");
const colorPicker = document.getElementById("colorPicker");

// Mengatur ukuran canvas
canvas.width = 800;
canvas.height = 500;

// Variabel untuk menyimpan status alat dan warna yang digunakan
let painting = false; // Apakah saat ini menggambar atau tidak
let erasing = false; // Apakah saat ini menggunakan penghapus
let currentColor = "#000"; // Warna kuas saat ini
let lineWidth = 5; // Ketebalan garis

// Fungsi untuk memulai menggambar
function startPosition(e) {
  painting = true; // Menandakan bahwa pengguna mulai menggambar
  draw(e); // Memulai menggambar dengan memanggil fungsi draw
}

// Fungsi untuk berhenti menggambar
function endPosition() {
  painting = false; // Menghentikan proses menggambar
  ctx.beginPath(); // Memulai path baru, agar tidak terhubung dengan gambar sebelumnya
}

// Fungsi utama untuk menggambar di canvas
function draw(e) {
  // Jika tidak sedang menggambar, maka keluar dari fungsi ini
  if (!painting) return;

  // Mengatur properti garis: ketebalan dan bentuk ujung garis
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round"; // Ujung garis dibulatkan

  // Mengatur warna berdasarkan apakah menggunakan penghapus atau kuas
  ctx.strokeStyle = erasing ? "#fff" : currentColor;

  // Menggambar garis berdasarkan posisi mouse (dikurangi offset canvas)
  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke(); // Menggambar garis pada canvas

  // Memulai path baru untuk menghindari garis tersambung dengan yang berikutnya
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Fungsi untuk memilih kuas (brush)
function selectBrush() {
  erasing = false; // Menonaktifkan mode penghapus
  brushBtn.classList.add("active"); // Menambahkan kelas "active" pada tombol brush
  eraserBtn.classList.remove("active"); // Menghapus kelas "active" dari tombol eraser
}

// Fungsi untuk memilih penghapus (eraser)
function selectEraser() {
  erasing = true; // Mengaktifkan mode penghapus
  eraserBtn.classList.add("active"); // Menambahkan kelas "active" pada tombol eraser
  brushBtn.classList.remove("active"); // Menghapus kelas "active" dari tombol brush
}

// Fungsi untuk menghapus seluruh canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Menghapus seluruh area canvas
}

// Fungsi untuk mengganti warna kuas dari input color picker
function changeColor(e) {
  currentColor = e.target.value; // Mengubah warna kuas sesuai dengan input pengguna
}

// Menambahkan event listener untuk tombol brush
brushBtn.addEventListener("click", selectBrush);

// Menambahkan event listener untuk tombol eraser
eraserBtn.addEventListener("click", selectEraser);

// Menambahkan event listener untuk tombol clear, untuk menghapus canvas
clearBtn.addEventListener("click", clearCanvas);

// Menambahkan event listener untuk mengganti warna kuas saat color picker berubah
colorPicker.addEventListener("input", changeColor);

// Event listener untuk memulai menggambar ketika tombol mouse ditekan
canvas.addEventListener("mousedown", startPosition);

// Event listener untuk berhenti menggambar ketika tombol mouse dilepas
canvas.addEventListener("mouseup", endPosition);

// Event listener untuk menggambar ketika mouse bergerak di atas canvas
canvas.addEventListener("mousemove", draw);
