// Variabel untuk menyimpan elemen tugas yang sedang diedit
let currentEditElement = null;

// Event listener yang memastikan fungsi ini dijalankan setelah konten halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  loadTasksFromLocalStorage();
});

// Fungsi untuk memuat tugas dari local storage dan menampilkannya di daftar
function loadTasksFromLocalStorage() {
  // Ambil data tugas dari local storage, jika tidak ada, gunakan array kosong
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Untuk setiap tugas, buat elemen list dan tambahkan ke daftar
  tasks.forEach((task) => {
    const li = createTaskElement(task);
    document.getElementById("todo-list").appendChild(li);
  });
}

// Fungsi untuk membuat elemen tugas
function createTaskElement(task) {
  const li = document.createElement("li"); // Buat elemen list
  const span = document.createElement("span"); // Buat elemen span untuk teks tugas
  span.textContent = task; // Set teks tugas

  // Buat tombol Edit
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit"; // Teks tombol
  editBtn.classList.add("edit-btn"); // Tambahkan kelas CSS
  editBtn.onclick = () => openModal(li, span); // Event handler untuk mengedit tugas

  // Buat tombol Delete
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete"; // Teks tombol
  deleteBtn.classList.add("delete-btn"); // Tambahkan kelas CSS
  deleteBtn.onclick = () => {
    li.remove(); // Hapus elemen list dari DOM
    deleteTaskFromLocalStorage(task); // Hapus tugas dari local storage
  };

  // Buat div untuk menampung tombol
  const buttons = document.createElement("div");
  buttons.classList.add("buttons"); // Tambahkan kelas CSS
  buttons.appendChild(editBtn); // Tambahkan tombol Edit
  buttons.appendChild(deleteBtn); // Tambahkan tombol Delete

  li.appendChild(span); // Tambahkan span ke elemen list
  li.appendChild(buttons); // Tambahkan div tombol ke elemen list

  return li; // Kembalikan elemen list yang telah dibuat
}

// Fungsi untuk membuka modal edit
function openModal(li, span) {
  currentEditElement = { li, span }; // Simpan elemen yang sedang diedit
  document.getElementById("edit-task-input").value = span.textContent; // Isi input modal dengan teks tugas
  document.getElementById("editModal").style.display = "flex"; // Tampilkan modal
}

// Fungsi untuk menutup modal edit
function closeModal() {
  document.getElementById("editModal").style.display = "none"; // Sembunyikan modal
}

// Fungsi untuk menambahkan tugas baru
function addTask() {
  const taskInput = document.getElementById("new-task"); // Ambil input tugas baru
  const task = taskInput.value.trim(); // Trim untuk menghapus spasi di awal/akhir

  if (task) {
    // Jika input tidak kosong
    const li = createTaskElement(task); // Buat elemen tugas baru
    document.getElementById("todo-list").appendChild(li); // Tambahkan elemen tugas ke daftar

    saveTaskToLocalStorage(task); // Simpan tugas ke local storage
    taskInput.value = ""; // Kosongkan input
  }
}

// Fungsi untuk menyimpan tugas yang diedit
function saveTask() {
  const editedTask = document.getElementById("edit-task-input").value.trim(); // Ambil teks yang diedit
  if (editedTask) {
    // Jika input tidak kosong
    const originalTask = currentEditElement.span.textContent; // Ambil teks asli
    currentEditElement.span.textContent = editedTask; // Perbarui teks tugas
    updateTaskInLocalStorage(originalTask, editedTask); // Perbarui tugas di local storage
    closeModal(); // Tutup modal
  }
}

// Fungsi untuk menyimpan tugas baru ke local storage
function saveTaskToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Ambil tugas dari local storage
  tasks.push(task); // Tambahkan tugas baru ke array
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Simpan kembali ke local storage
}

// Fungsi untuk menghapus tugas dari local storage
function deleteTaskFromLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Ambil tugas dari local storage
  tasks = tasks.filter((t) => t !== task); // Hapus tugas yang sesuai
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Simpan kembali ke local storage
}

// Fungsi untuk memperbarui tugas yang diedit di local storage
function updateTaskInLocalStorage(originalTask, editedTask) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Ambil tugas dari local storage
  const taskIndex = tasks.indexOf(originalTask); // Cari indeks tugas asli
  if (taskIndex > -1) {
    // Jika tugas ditemukan
    tasks[taskIndex] = editedTask; // Perbarui tugas
  }
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Simpan kembali ke local storage
}
