# Daftar Acara TV dengan Axios

## Deskripsi

Proyek ini adalah aplikasi web sederhana yang memungkinkan pengguna mencari acara TV menggunakan API dari TVmaze. Dengan memasukkan kata kunci pencarian, pengguna dapat melihat gambar dari acara TV yang sesuai dengan pencarian tersebut.

<p align="center">
    <img src="image.png" alt="Papan Skor" 
</p>

## Fitur

- Mencari acara TV berdasarkan kata kunci.
- Menampilkan gambar acara TV yang relevan.
- Menghapus gambar sebelumnya saat melakukan pencarian baru.

## Teknologi yang Digunakan

- HTML
- CSS
- JavaScript
- Axios (untuk melakukan permintaan HTTP)
- API TVmaze

## Daftar Isi

1. [Instalasi](#instalasi)
2. [Cara Menggunakan](#cara-menggunakan)
3. [Penjelasan Kode](#penjelasan-kode)
4. [Kesimpulan](#kesimpulan)

## Instalasi

1. Clone repositori ini:
   ```bash
   git clone https://github.com/username/repo-name.git
   ```
2. Buka file `index.html` di browser Anda.

## Cara Menggunakan

1. Buka aplikasi di browser.
2. Masukkan kata kunci acara TV yang ingin dicari di kolom pencarian.
3. Klik tombol submit atau tekan Enter.
4. Gambar acara TV yang cocok dengan pencarian akan ditampilkan di halaman.

## Penjelasan Kode

### Kode Utama

```javascript
const form = document.querySelector("#search-form");
```

- **Deskripsi**: Mengambil elemen form dari DOM yang memiliki ID `search-form`.
- **Tujuan**: Ini memungkinkan kita untuk menambahkan event listener pada form untuk menangani pengiriman.

```javascript
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Mencegah reload halaman
```

- **Deskripsi**: Menambahkan event listener untuk menangani event `submit` pada form.
- **Tujuan**: `async` digunakan untuk mendeklarasikan bahwa fungsi ini akan melakukan operasi asynchronous. `e.preventDefault()` mencegah form melakukan reload halaman saat disubmit.

```javascript
document.querySelectorAll("img").forEach((img) => img.remove());
```

- **Deskripsi**: Menghapus semua elemen `<img>` yang ada di halaman sebelum menampilkan hasil pencarian baru.
- **Tujuan**: Ini menjaga tampilan tetap bersih dan hanya menampilkan hasil terbaru.

```javascript
const keyword = form.elements.query.value;
```

- **Deskripsi**: Mengambil nilai dari input dengan nama `query` di form.
- **Tujuan**: Nilai ini digunakan sebagai kata kunci untuk pencarian acara TV.

```javascript
const config = {
  params: { q: keyword }, // Menyiapkan parameter pencarian
};
```

- **Deskripsi**: Membuat objek konfigurasi untuk Axios yang berisi parameter pencarian.
- **Tujuan**: Parameter `q` berisi kata kunci yang dimasukkan oleh pengguna dan akan digunakan dalam permintaan ke API.

```javascript
const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
```

- **Deskripsi**: Melakukan permintaan GET ke API TVmaze untuk mencari acara TV berdasarkan kata kunci.
- **Tujuan**: Menggunakan `await` memungkinkan kita menunggu hingga respons diterima sebelum melanjutkan ke baris berikutnya. Respons disimpan dalam variabel `res`.

```javascript
getImages(res.data); // Mengambil dan menampilkan gambar
```

- **Deskripsi**: Memanggil fungsi `getImages` dan meneruskan data acara TV yang diterima dari API.
- **Tujuan**: Fungsi ini akan memproses data dan menampilkan gambar acara TV.

```javascript
form.elements.query.value = ""; // Mengosongkan input
```

- **Deskripsi**: Mengosongkan kolom input pencarian setelah pengguna mengirimkan form.
- **Tujuan**: Memudahkan pengguna untuk melakukan pencarian baru tanpa harus menghapus input secara manual.

### Fungsi `getImages`

```javascript
const getImages = (shows) => {
  for (let result of shows) {
```

- **Deskripsi**: Mendefinisikan fungsi `getImages` yang menerima parameter `shows`, yang merupakan array hasil pencarian.
- **Tujuan**: Looping melalui setiap hasil acara TV untuk memeriksa apakah gambar tersedia.

```javascript
    if (result.show.image) {
```

- **Deskripsi**: Memeriksa apakah acara TV memiliki gambar.
- **Tujuan**: Hanya menampilkan gambar jika ada.

```javascript
const img = document.createElement("img"); // Membuat elemen gambar
img.src = result.show.image.medium; // Mengatur sumber gambar
```

- **Deskripsi**: Membuat elemen `<img>` baru dan menetapkan atribut `src` ke URL gambar acara TV.
- **Tujuan**: Menyiapkan elemen gambar untuk ditambahkan ke halaman.

```javascript
      document.body.append(img); // Menambahkan gambar ke body
    }
  }
};
```

- **Deskripsi**: Menambahkan elemen gambar ke body halaman.
- **Tujuan**: Menampilkan gambar acara TV di halaman web.

## Kesimpulan

Proyek ini merupakan contoh yang baik untuk belajar tentang penggunaan Axios untuk melakukan permintaan API, pengelolaan DOM untuk menampilkan data, dan interaksi pengguna di aplikasi web. Anda dapat mengembangkan proyek ini lebih lanjut dengan menambahkan fitur tambahan seperti detail acara, rating, atau deskripsi untuk setiap acara.
