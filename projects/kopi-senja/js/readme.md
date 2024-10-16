# README: Panduan Skrip JavaScript untuk Website Penjualan Kopi

## Apa Itu Website Ini?

Website ini adalah tempat untuk menjual kopi dan produk terkait. Skrip JavaScript di bawah ini mengatur interaksi di website, seperti menu, pencarian, keranjang belanja, dan tampilan detail produk. Ini membantu pengguna berinteraksi dengan mudah.

## Penjelasan Skrip JavaScript

### 1. **Menu Hamburger**

```javascript
// Mengambil elemen menu navigasi
const navbarNav = document.querySelector(".navbar-nav");

// Ketika menu hamburger diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active"); // Tampilkan atau sembunyikan menu
};
```

- **Apa yang Dilakukan?**: Ketika pengguna mengklik menu hamburger (ikon menu), menu navigasi akan muncul atau menghilang. Ini membuatnya lebih mudah diakses di ponsel.

### 2. **Form Pencarian**

```javascript
// Mengambil elemen form pencarian dan kotak pencarian
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// Ketika tombol pencarian diklik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active"); // Tampilkan atau sembunyikan form pencarian
  searchBox.focus(); // Fokus pada kotak pencarian
  e.preventDefault(); // Mencegah reload halaman
};
```

- **Apa yang Dilakukan?**: Saat pengguna mengklik tombol pencarian, form pencarian akan muncul atau menghilang, dan kotak pencarian akan siap untuk diketik.

### 3. **Keranjang Belanja**

```javascript
// Mengambil elemen keranjang belanja
const shoppingCart = document.querySelector(".shopping-cart");

// Ketika tombol keranjang diklik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active"); // Tampilkan atau sembunyikan keranjang
  e.preventDefault(); // Mencegah reload halaman
};
```

- **Apa yang Dilakukan?**: Ketika pengguna mengklik tombol keranjang, tampilan keranjang belanja akan muncul atau menghilang, memungkinkan pengguna melihat produk yang mereka pilih.

### 4. **Menutup Elemen Saat Mengklik di Luar**

```javascript
// Mengambil elemen-elemen yang dibutuhkan
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

// Jika pengguna mengklik di luar elemen-elemen ini
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active"); // Sembunyikan menu jika klik di luar
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active"); // Sembunyikan form jika klik di luar
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active"); // Sembunyikan keranjang jika klik di luar
  }
});
```

- **Apa yang Dilakukan?**: Jika pengguna mengklik di luar menu, form pencarian, atau keranjang belanja, elemen-elemen tersebut akan otomatis disembunyikan untuk menjaga tampilan yang bersih.

### 5. **Menampilkan Detail Produk**

```javascript
// Mengambil elemen modal untuk detail produk
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

// Ketika tombol detail produk diklik
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex"; // Tampilkan modal detail produk
    e.preventDefault(); // Mencegah reload halaman
  };
});
```

- **Apa yang Dilakukan?**: Saat pengguna mengklik tombol detail pada produk kopi, modal (popup) yang berisi informasi lebih lanjut akan muncul.

### 6. **Menutup Modal**

```javascript
// Klik tombol tutup modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none"; // Sembunyikan modal
  e.preventDefault(); // Mencegah reload halaman
};

// Klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none"; // Sembunyikan modal jika klik di luar
  }
};
```

- **Apa yang Dilakukan?**: Pengguna dapat menutup modal dengan mengklik ikon tutup atau dengan mengklik di luar modal itu sendiri.

## Kesimpulan

Skrip ini membuat website penjualan kopi menjadi lebih interaktif dan mudah digunakan. Pengguna dapat dengan cepat menavigasi menu, mencari produk, melihat keranjang belanja, dan mendapatkan informasi lebih lanjut tentang produk kopi yang mereka minati. Jika ada pertanyaan lebih lanjut, jangan ragu untuk bertanya!
