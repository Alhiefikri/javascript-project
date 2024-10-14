# README: Penjelasan Skrip JavaScript

Dokumen ini menjelaskan skrip JavaScript yang digunakan untuk mengelola proyek-proyek dan mengimplementasikan fitur pengalihan tema antara mode gelap dan terang. Skrip ini berfungsi untuk menampilkan informasi proyek di halaman web secara dinamis.

## Struktur Umum

Skrip ini dibagi menjadi beberapa bagian:

1. **Data Proyek**
2. **Pengurutan Proyek**
3. **Pembuatan Elemen Proyek**
4. **Fitur Pengalihan Tema**

---

### 1. Data Proyek

```javascript
const projects = [
  {
    img: "img/weather.png",
    title: "Weather App",
    description:
      "Aplikasi ini memberikan informasi cuaca terkini dan ramalan untuk lokasi yang dipilih.",
    link: "projects/weather-app/index.html",
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

- `Weather App`: Menyediakan informasi cuaca terkini.

---

### 2. Pengurutan Proyek

```javascript
projects.sort((a, b) => {
  return a.title.localeCompare(b.title);
});
```

- **sort**: Mengurutkan array proyek berdasarkan judul (title) menggunakan `localeCompare` untuk memastikan pengurutan yang tepat berdasarkan abjad.

---

### 3. Pembuatan Elemen Proyek

```javascript
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
```

- **projectGrid**: Mengambil elemen dengan ID `project-grid` dari DOM untuk menampung kartu proyek.
- **forEach**: Iterasi melalui setiap objek proyek untuk membuat elemen HTML baru.
  - **createElement**: Membuat elemen `div` untuk setiap proyek dan menetapkan kelas `project-card`.
  - **setAttribute**: Menambahkan atribut untuk efek animasi.
  - **innerHTML**: Mengisi `innerHTML` dengan konten proyek, termasuk gambar, judul, deskripsi, dan tautan.
- **appendChild**: Menambahkan `projectCard` ke dalam `projectGrid`.

---

### 4. Fitur Pengalihan Tema

```javascript
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
```

- **toggleButton**: Mengambil elemen dengan ID `theme-toggle` untuk mengatur pengalihan tema.
- **body**: Mengacu pada elemen `<body>` dari halaman.
- **addEventListener**: Menambahkan event listener untuk mengubah tema saat tombol diklik.
  - **toggle**: Menggunakan `classList.toggle` untuk menambahkan atau menghapus kelas `light-mode` dari body.
  - **textContent**: Mengubah teks tombol tergantung pada tema yang aktif.

---

## Kesimpulan

Skrip JavaScript ini memungkinkan pengguna untuk melihat dan mengakses proyek dengan cara yang terstruktur dan dinamis. Selain itu, fitur pengalihan tema memberikan pengalaman pengguna yang lebih baik dengan mendukung tampilan yang lebih nyaman baik dalam mode gelap maupun terang. Skrip ini dirancang untuk integrasi yang mudah dengan HTML dan CSS yang telah disiapkan.
