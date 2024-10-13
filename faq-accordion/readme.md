# FAQ Accordion

## Deskripsi

FAQ Accordion adalah aplikasi interaktif yang menampilkan daftar pertanyaan yang sering diajukan (FAQ) beserta jawabannya dalam format accordion. Pengguna dapat mengklik setiap pertanyaan untuk memperluas atau menyembunyikan jawabannya, memberikan pengalaman pengguna yang intuitif dan mudah dinavigasi.

![Screenshot FAQ Accordion](image.png) <!-- Ganti dengan path gambar Anda -->

## Daftar Isi

1. [Fitur](#fitur)
2. [Teknologi yang Digunakan](#teknologi-yang-digunakan)
3. [Penjelasan Kode](#penjelasan-kode)
4. [Penggunaan](#penggunaan)
5. [Kesimpulan](#kesimpulan)

## Fitur

- Daftar pertanyaan dan jawaban yang dapat diperluas.
- Interaksi pengguna yang responsif.
- Kemampuan untuk menutup semua konten accordion lain saat satu dibuka.

## Teknologi yang Digunakan

- HTML
- CSS
- JavaScript

## Penjelasan Kode

Berikut adalah penjelasan dari kode yang digunakan dalam proyek ini:

```javascript
const faqData = [
  {
    question: "Apa itu web development?",
    answer:
      "Web development adalah proses membangun dan memelihara situs web...",
  },
  // ... data FAQ lainnya
];

// Mendapatkan elemen container untuk accordion dari DOM
const accordionContainer = document.getElementById("accordion");

// Fungsi untuk menghasilkan item accordion dari array faqData
function generateAccordionItems(faqData) {
  faqData.forEach((item) => {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    const header = document.createElement("button");
    header.classList.add("accordion-header");
    header.textContent = item.question; // Menampilkan pertanyaan

    const content = document.createElement("div");
    content.classList.add("accordion-content");

    const contenText = document.createElement("p");
    contenText.textContent = item.answer; // Menampilkan jawaban

    content.appendChild(contenText);
    accordionItem.appendChild(header);
    accordionItem.appendChild(content);
    accordionContainer.appendChild(accordionItem);
  });
}

// Memanggil fungsi untuk menghasilkan FAQ
generateAccordionItems(faqData);

// Mendapatkan semua elemen header accordion setelah mereka dibuat
const accordionHeaders = document.querySelectorAll(".accordion-header");

// Menambahkan event listener untuk interaksi accordion
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const accordionContent = header.nextElementSibling;

    if (header.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; // Menampilkan konten
    } else {
      accordionContent.style.maxHeight = 0; // Menyembunyikan konten
    }

    accordionHeaders.forEach((otherHeader) => {
      if (otherHeader !== header && otherHeader.classList.contains("active")) {
        otherHeader.classList.remove("active");
        otherHeader.nextElementSibling.style.maxHeight = 0; // Menutup konten lain
      }
    });
  });
});
```

### Penjelasan Kode:

1. **Data FAQ**:

   - Array `faqData` berisi objek yang menyimpan pertanyaan dan jawaban.

2. **Fungsi `generateAccordionItems`**:

   - Membuat elemen accordion untuk setiap pertanyaan dan jawaban dari `faqData`.
   - Menggunakan `createElement` untuk membuat elemen DOM dan menyusunnya.

3. **Event Listener**:
   - Menambahkan event listener pada setiap header accordion.
   - Menggunakan `toggle` untuk membuka/menutup konten dan menyembunyikan konten yang lain saat satu dibuka.

## Penggunaan

1. Siapkan file HTML dengan elemen dengan ID "accordion".
2. Salin kode JavaScript di atas ke dalam file JavaScript terpisah.
3. Buka file HTML di browser untuk melihat dan menggunakan FAQ Accordion.

## Kesimpulan

FAQ Accordion adalah cara yang efektif untuk menyajikan informasi kepada pengguna dengan cara yang interaktif dan mudah dipahami. Dengan menggunakan JavaScript, aplikasi ini dapat memberikan pengalaman pengguna yang lebih baik dalam menemukan informasi yang mereka butuhkan.
