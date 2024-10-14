# README: Penjelasan Skrip JavaScript

Dokumen ini menjelaskan skrip JavaScript yang digunakan untuk mengelola proyek-proyek dan mengimplementasikan fitur pengalihan tema antara mode gelap dan terang. Skrip ini berfungsi untuk menampilkan informasi proyek di halaman web secara dinamis.

## Struktur Umum

Skrip ini dibagi menjadi beberapa bagian:

1. **Data Proyek**
2. **Pengurutan Proyek**
3. **Pembuatan Elemen Proyek**
4. **Fitur Pengalihan Tema**
5. **Render Proyek**

---

### 1. Data Proyek

```javascript
const projects = [
  {
    img: "img/calculator.png",
    title: "Calculator",
    description:
      "Kalkulator sederhana untuk melakukan operasi matematika dasar dengan mudah.",
    link: "projects/calculator/index.html",
  },
  // ... (proyek lainnya)
];
```

- **projects**: Array yang berisi objek-objek proyek, masing-masing berisi:
  - **img**: URL gambar proyek.
  - **title**: Judul proyek.
  - **description**: Deskripsi singkat tentang proyek.
  - **link**: URL untuk mengakses proyek.

Contoh proyek:

- `Calculator`: Kalkulator sederhana untuk operasi matematika dasar.

---

### 2. Pengurutan Proyek

```javascript
const sortProjects = (sortOption) => {
  let sortedProjects;
  if (sortOption === "az") {
    sortedProjects = [...projects].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sortOption === "newest") {
    sortedProjects = [...projects].reverse(); // Terbaru pertama
  } else {
    sortedProjects = [...projects].reverse(); // Default: urutan terbalik
  }
  renderProjects(sortedProjects);
};
```

- **sortProjects**: Fungsi untuk mengurutkan array proyek berdasarkan pilihan pengguna.
  - **sortOption**: Parameter yang menentukan cara pengurutan, baik abjad ("az") atau terbaru ("newest").
  - **localeCompare**: Digunakan untuk memastikan pengurutan yang tepat berdasarkan abjad.
  - **reverse**: Mengubah urutan array untuk menampilkan proyek terbaru terlebih dahulu.

---

### 3. Pembuatan Elemen Proyek

```javascript
const createProjectCard = (project) => {
  return new Promise((resolve) => {
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
    resolve(projectCard);
  });
};
```

- **createProjectCard**: Fungsi yang membuat elemen `div` untuk setiap proyek dan mengembalikannya dalam bentuk promise.
  - **projectCard**: Elemen `div` yang dibuat untuk menampilkan proyek.
  - **setAttribute**: Menambahkan atribut untuk efek animasi saat menggulir.
  - **innerHTML**: Mengisi `innerHTML` dengan konten proyek, termasuk gambar, judul, deskripsi, dan tautan.
  - **appendChild**: Menambahkan `projectCard` ke dalam elemen `projectGrid`.

---

### 4. Fitur Pengalihan Tema

```javascript
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  toggleButton.textContent = body.classList.contains("light-mode")
    ? "Switch to Dark Mode"
    : "Switch to Light Mode";
});
```

- **toggleButton**: Mengambil elemen dengan ID `theme-toggle` untuk mengatur pengalihan tema.
- **body**: Mengacu pada elemen `<body>` dari halaman.
- **addEventListener**: Menambahkan event listener untuk mengubah tema saat tombol diklik.
  - **toggle**: Menggunakan `classList.toggle` untuk menambahkan atau menghapus kelas `light-mode` dari body.
  - **textContent**: Mengubah teks tombol tergantung pada tema yang aktif.

---

### 5. Render Proyek

```javascript
const renderProjects = async (projectsToRender) => {
  projectGrid.innerHTML = ""; // Menghapus proyek yang ada

  for (const project of projectsToRender) {
    const projectCard = await createProjectCard(project); // Membuat kartu proyek
    await new Promise((resolve) => setTimeout(resolve, 300)); // Delay 300ms
    projectCard.classList.add("show"); // Menambahkan kelas 'show' untuk animasi
  }

  AOS.init(); // Menginisialisasi ulang AOS
};
```

- **renderProjects**: Fungsi untuk menampilkan proyek di grid.
  - **projectsToRender**: Array proyek yang akan dirender.
  - **innerHTML**: Menghapus konten yang ada sebelum menambahkan proyek baru.
  - **for...of**: Iterasi melalui setiap proyek untuk membuat kartu proyek secara asinkron.
    - **await createProjectCard(project)**: Menunggu hingga kartu proyek dibuat dan ditambahkan.
    - **setTimeout**: Menambahkan delay untuk menciptakan efek visual yang lebih halus.
    - **classList.add**: Menambahkan kelas `show` untuk memicu animasi saat proyek muncul.
  - **AOS.init()**: Menginisialisasi ulang AOS setelah semua kartu ditambahkan untuk efek animasi.

---

## Kesimpulan

Skrip JavaScript ini memungkinkan pengguna untuk melihat dan mengakses proyek dengan cara yang terstruktur dan dinamis. Fitur pengalihan tema memberikan pengalaman pengguna yang lebih baik dengan mendukung tampilan yang nyaman baik dalam mode gelap maupun terang. Skrip ini dirancang untuk integrasi yang mudah dengan HTML dan CSS yang telah disiapkan.
