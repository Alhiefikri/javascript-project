# README: Penjelasan Skrip CSS

Dokumen ini menjelaskan secara detail setiap bagian dari skrip CSS yang digunakan untuk styling halaman web. Skrip ini ditujukan untuk memberikan tampilan yang modern, responsif, dan mudah digunakan dengan dukungan untuk mode gelap dan terang.

## Struktur Umum

Skrip CSS ini terdiri dari beberapa bagian utama:

1. **General Styles**
2. **Button Styles**
3. **Profile Section**
4. **Project Grid**
5. **Light Mode Styles**
6. **Footer Styles**

---

### 1. General Styles

```css
body {
  font-family: "Roboto", sans-serif;
  background-color: #181818;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

- **font-family**: Mengatur font yang digunakan ke Roboto.
- **background-color**: Menetapkan warna latar belakang gelap.
- **color**: Mengatur warna teks agar kontras dengan latar belakang.
- **margin dan padding**: Menghapus margin dan padding default.
- **transition**: Menambahkan efek transisi untuk perubahan warna latar belakang dan teks.

```css
header {
  background-color: #1f1f1f;
  padding: 20px;
  text-align: center;
}
```

- **header**: Membuat latar belakang header sedikit lebih terang dengan padding yang nyaman dan perataan teks di tengah.

```css
h1 {
  margin: 0;
  color: #ffffff;
}
```

- **h1**: Menetapkan margin nol dan warna putih untuk judul.

---

### 2. Button Styles

```css
.btn-theme {
  background-color: #3a3a3a;
  color: #e0e0e0;
  border: none;
  padding: 10px 25px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
}
```

- **.btn-theme**: Menyediakan gaya untuk tombol dengan warna latar belakang gelap, teks ringan, dan sudut membulat. Menyertakan efek transisi untuk interaksi pengguna.

```css
.btn-theme:hover {
  background-color: #5c5c5c;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
```

- **hover**: Menyediakan efek saat tombol di-hover, mengubah warna dan menambahkan bayangan.

```css
.btn-theme:active {
  transform: translateY(0);
  box-shadow: none;
}
```

- **active**: Menghilangkan efek bayangan saat tombol ditekan.

---

### 3. Profile Section

```css
.profile-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
}
```

- **.profile-container**: Menggunakan Flexbox untuk menyusun elemen di dalam kontainer agar terpusat secara horizontal dan vertikal.

```css
.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 30px;
  border: 5px solid #ffffff;
}
```

- **.profile-pic**: Mengatur gambar profil menjadi lingkaran dengan border putih.

```css
.contact-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 30px;
  background-color: #2f2f2f;
  color: #ffffff;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
}
```

- **.contact-btn**: Tombol kontak dengan gaya yang serupa dengan `.btn-theme`.

---

### 4. Project Grid

```css
.project-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
}
```

- **.project-grid**: Menggunakan Flexbox untuk menampilkan proyek dalam format grid.

```css
.project-card {
  background-color: #202020;
  border-radius: 8px;
  margin: 15px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
```

- **.project-card**: Menyediakan gaya untuk setiap kartu proyek, termasuk warna latar belakang, bayangan, dan efek transisi.

```css
.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
```

- **img**: Mengatur gambar dalam kartu untuk mengisi lebar kartu dan menetapkan tinggi tetap.

---

### 5. Light Mode Styles

```css
body.light-mode {
  background-color: #f5f5f5;
  color: #121212;
}
```

- **body.light-mode**: Gaya untuk mode terang, mengubah warna latar belakang dan teks.

```css
body.light-mode header {
  background-color: #ffffff;
}
```

- **header**: Mengubah warna latar belakang header untuk mode terang.

---

### 6. Footer Styles

```css
footer {
  background-color: #1f1f1f;
  color: #e0e0e0;
  text-align: center;
  padding: 10px;
  position: relative;
  bottom: 0;
  width: 100%;
}
```

- **footer**: Menyediakan gaya untuk footer dengan warna latar belakang dan teks, serta perataan teks di tengah.

```css
footer p {
  margin: 0;
}
```

- **footer p**: Menghilangkan margin pada paragraf di dalam footer.

---

## Kesimpulan

Skrip CSS ini memberikan dasar yang kuat untuk desain web modern dengan fokus pada aksesibilitas dan pengalaman pengguna. Dengan mendukung tema gelap dan terang, serta interaksi yang responsif, halaman dapat tampil menarik di berbagai perangkat.
