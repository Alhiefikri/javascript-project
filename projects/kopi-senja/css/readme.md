# README: Panduan CSS untuk Website Penjualan Kopi

## Apa Itu Website Ini?

Website ini adalah platform untuk menjual kopi dan produk terkait. CSS yang digunakan di bawah ini bertanggung jawab untuk mengatur tampilan dan gaya elemen-elemen di website agar terlihat menarik dan mudah digunakan.

## Penjelasan CSS

### 1. **Variabel Warna**

```css
:root {
  --primary: #b6895b; /* Warna utama untuk elemen seperti tombol dan tautan */
  --bg: #010101; /* Warna latar belakang untuk halaman */
}
```

- **Apa yang Dilakukan?**: Mengatur warna yang akan digunakan di seluruh website, sehingga konsisten dan mudah diubah jika diperlukan.

### 2. **Reset Default**

```css
* {
  margin: 0; /* Menghilangkan margin default */
  padding: 0; /* Menghilangkan padding default */
  box-sizing: border-box; /* Mengatur ukuran kotak untuk memudahkan layout */
  outline: none; /* Menghilangkan outline pada elemen */
  border: none; /* Menghilangkan border default */
  text-decoration: none; /* Menghilangkan garis bawah pada tautan */
}
```

- **Apa yang Dilakukan?**: Menghapus gaya default dari browser sehingga semua elemen mulai dari keadaan yang bersih dan seragam.

### 3. **Tata Letak dan Gaya Umum**

```css
html {
  scroll-behavior: smooth; /* Membuat scroll halaman lebih halus */
}

body {
  font-family: "Poppins", sans-serif; /* Mengatur font untuk seluruh halaman */
  background-color: var(
    --bg
  ); /* Menggunakan warna latar belakang dari variabel */
  color: #fff; /* Mengatur warna teks menjadi putih */
}
```

- **Apa yang Dilakukan?**: Mengatur font, warna latar belakang, dan warna teks untuk memberikan kesan yang bersih dan profesional.

### 4. **Navbar (Menu Navigasi)**

```css
.navbar {
  display: flex; /* Menggunakan flexbox untuk layout */
  justify-content: space-between; /* Mengatur jarak antar elemen di navbar */
  align-items: center; /* Menyelaraskan elemen di tengah */
  padding: 1.4rem 7%; /* Memberikan padding pada navbar */
  background-color: rgba(1, 1, 1, 0.8); /* Warna latar belakang navbar */
  position: fixed; /* Navbar tetap di atas saat scroll */
  top: 0; /* Menempel di bagian atas */
  z-index: 999; /* Pastikan navbar selalu di atas elemen lain */
}
```

- **Apa yang Dilakukan?**: Mengatur navbar agar tampil menarik dan selalu terlihat di atas saat pengguna menggulir halaman.

### 5. **Tautan dalam Navbar**

```css
.navbar .navbar-nav a {
  color: #fff; /* Warna teks tautan */
  display: inline-block; /* Menampilkan tautan dalam satu baris */
  margin: 0 1rem; /* Menambahkan jarak antar tautan */
}

.navbar .navbar-nav a:hover {
  color: var(--primary); /* Mengubah warna saat tautan dihover */
}
```

- **Apa yang Dilakukan?**: Mengatur tampilan tautan dalam navbar, termasuk efek saat tautan dihover.

### 6. **Form Pencarian**

```css
.navbar .search-form {
  position: absolute; /* Memposisikan form secara absolut */
  top: 100%; /* Ditempatkan tepat di bawah navbar */
  right: 7%; /* Jarak dari kanan */
  background-color: #fff; /* Warna latar belakang form pencarian */
  width: 50rem; /* Lebar form */
  transition: 0.3s; /* Efek transisi saat muncul */
}
```

- **Apa yang Dilakukan?**: Mengatur tampilan form pencarian agar muncul di bawah navbar dengan animasi halus.

### 7. **Keranjang Belanja**

```css
.shopping-cart {
  position: absolute; /* Memposisikan keranjang secara absolut */
  top: 100%; /* Ditempatkan tepat di bawah navbar */
  right: -100%; /* Mulai dari luar tampilan */
  transition: 0.3s; /* Efek transisi saat muncul */
}

.shopping-cart.active {
  right: 0; /* Menampilkan keranjang saat aktif */
}
```

- **Apa yang Dilakukan?**: Mengatur keranjang belanja agar muncul dari samping saat pengguna mengklik tombol keranjang.

### 8. **Bagian Hero (Banner Utama)**

```css
.hero {
  min-height: 100vh; /* Tinggi minimal sesuai dengan tinggi layar */
  display: flex; /* Menggunakan flexbox untuk layout */
  background-image: url("../img/header.png"); /* Gambar latar belakang */
  background-size: cover; /* Menyesuaikan gambar agar menutupi area */
}
```

- **Apa yang Dilakukan?**: Mengatur bagian utama website yang menampilkan gambar latar belakang yang menarik dan teks sambutan.

### 9. **Footer**

```css
footer {
  background-color: var(
    --primary
  ); /* Menggunakan warna utama sebagai latar belakang footer */
  text-align: center; /* Menyelaraskan teks di tengah */
  padding: 1rem 0; /* Menambahkan padding vertikal */
}
```

- **Apa yang Dilakukan?**: Mengatur tampilan footer agar menarik dan mudah dibaca.

### 10. **Media Queries (Responsif)**

```css
@media (max-width: 758px) {
  #hamburger-menu {
    display: inline-block; /* Menampilkan menu hamburger di layar kecil */
  }

  .navbar .navbar-nav {
    position: absolute; /* Navbar menjadi absolut pada layar kecil */
    top: 100%; /* Ditempatkan tepat di bawah navbar */
  }
}
```

- **Apa yang Dilakukan?**: Mengatur tampilan website agar responsif di berbagai ukuran layar, termasuk ponsel dan tablet.

## Kesimpulan

CSS ini memberikan gaya yang konsisten dan menarik untuk website penjualan kopi. Dengan menggunakan variabel warna, layout responsif, dan efek transisi, pengguna dapat menikmati pengalaman berbelanja yang menyenangkan. Jika ada pertanyaan atau perubahan yang ingin dilakukan, silakan hubungi!
