// Kelas Product merepresentasikan satu produk dalam toko
class Product {
  constructor(id, name, description, price, image) {
    this.id = id; // ID unik untuk produk
    this.name = name; // Nama produk
    this.description = description; // Deskripsi produk
    this.price = price; // Harga produk
    this.image = image; // URL gambar produk
  }

  // Metode untuk menampilkan kartu produk
  displayCard() {
    return `
              <img src="${this.image}" alt="${
      this.name
    }"> <!-- Menampilkan gambar produk -->
              <h3>${this.name}</h3> <!-- Menampilkan nama produk -->
              <p>$${this.price.toFixed(2)}</p> <!-- Menampilkan harga produk -->
              <p id="quantity-${
                this.id
              }">Quantity in cart: 0</p> <!-- Menampilkan jumlah produk di keranjang -->
              <button onclick="shoppingCart.viewProductDetail(${
                this.id
              })">View Details</button> <!-- Tombol untuk melihat detail produk -->
              <button onclick="shoppingCart.addToCart(${
                this.id
              }, ${true})">Add to Cart</button> <!-- Tombol untuk menambah produk ke keranjang -->
      `;
  }
}

// Kelas CartItem merepresentasikan item dalam keranjang belanja
class CartItem {
  constructor(product, quantity = 1) {
    this.product = product; // Produk yang ada di keranjang
    this.quantity = quantity; // Jumlah produk dalam keranjang
  }

  // Metode untuk menambah jumlah produk
  incrementQuantity() {
    this.quantity++; // Menambah kuantitas produk
  }

  // Metode untuk menghitung total harga item dalam keranjang
  getTotalPrice() {
    return this.quantity * this.product.price; // Menghitung total harga berdasarkan jumlah dan harga produk
  }
}

// Kelas ShoppingCart mengelola keranjang belanja
class ShoppingCart {
  constructor() {
    this.products = []; // Daftar produk yang tersedia
    this.cart = []; // Daftar item dalam keranjang belanja
  }

  // Metode untuk menambahkan produk ke daftar produk
  addProduct(product) {
    this.products.push(product); // Menambahkan produk ke daftar
  }

  // Metode untuk menampilkan semua produk
  displayProducts() {
    const productList = document.getElementById("product-list"); // Mendapatkan elemen untuk menampilkan daftar produk
    productList.innerHTML = ""; // Mengosongkan daftar yang ada
    this.products.forEach((product) => {
      const productCard = document.createElement("div"); // Membuat elemen div untuk setiap produk
      productCard.classList.add("product-card"); // Menambahkan kelas CSS untuk styling
      productCard.innerHTML = product.displayCard(); // Mengisi konten div dengan kartu produk
      productList.appendChild(productCard); // Menambahkan kartu produk ke daftar
    });
  }

  // Metode untuk melihat detail produk
  viewProductDetail(id) {
    const product = this.products.find((p) => p.id === id); // Mencari produk berdasarkan ID
    document.getElementById("detail-image").src = product.image; // Menampilkan gambar produk di modal
    document.getElementById("detail-title").textContent = product.name; // Menampilkan nama produk di modal
    document.getElementById("detail-description").textContent =
      product.description; // Menampilkan deskripsi produk di modal
    document.getElementById(
      "detail-price"
    ).textContent = `$${product.price.toFixed(2)}`; // Menampilkan harga produk di modal

    // Mengatur fungsi untuk tombol "Add to Cart"
    document
      .getElementById("add-to-cart-btn")
      .setAttribute("onclick", `shoppingCart.addToCart(${product.id})`);

    this.toggleProductDetail(); // Menampilkan modal detail produk
  }

  // Metode untuk mengubah tampilan modal detail produk
  toggleProductDetail(addFromDisplay = false) {
    const modal = document.getElementById("product-modal"); // Mendapatkan elemen modal produk
    modal.style.display = modal.style.display === "block" ? "none" : "block"; // Mengubah visibilitas modal
  }

  // Metode untuk menambahkan produk ke keranjang belanja
  addToCart(id) {
    const product = this.products.find((p) => p.id === id); // Mencari produk berdasarkan ID
    const existingItem = this.cart.find((item) => item.product.id === id); // Mencari item yang sudah ada di keranjang

    if (existingItem) {
      existingItem.incrementQuantity(); // Jika item sudah ada, tambahkan jumlahnya
    } else {
      this.cart.push(new CartItem(product)); // Jika belum ada, tambahkan item baru ke keranjang
    }

    this.updateCart(); // Memperbarui tampilan keranjang
    this.updateProductQuantity(id); // Memperbarui jumlah produk di tampilan
  }

  // Metode untuk memperbarui tampilan keranjang belanja
  updateCart() {
    const cartItems = document.getElementById("cart-items"); // Mendapatkan elemen daftar item di keranjang
    cartItems.innerHTML = ""; // Mengosongkan daftar yang ada
    let totalPrice = 0; // Inisialisasi total harga

    this.cart.forEach((item, index) => {
      const itemTotalPrice = item.getTotalPrice(); // Menghitung total harga item
      totalPrice += itemTotalPrice; // Menambahkan total harga item ke total keseluruhan

      const li = document.createElement("li"); // Membuat elemen list untuk setiap item

      li.innerHTML = `
              ${item.product.name} - $${item.product.price.toFixed(2)} x ${
        item.quantity
      } = $${itemTotalPrice.toFixed(2)}
              <button onclick="shoppingCart.removeFromCart(${index})">Remove</button> <!-- Tombol untuk menghapus item dari keranjang -->
          `;
      cartItems.appendChild(li); // Menambahkan item ke daftar keranjang
    });

    // Memperbarui jumlah item di keranjang dan total harga
    document.getElementById("cart-count").textContent = this.cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    document.getElementById("total-price").textContent = totalPrice.toFixed(2); // Menampilkan total harga
  }

  // Metode untuk memperbarui jumlah produk di tampilan
  updateProductQuantity(id) {
    const cartItem = this.cart.find((item) => item.product.id === id); // Mencari item dalam keranjang berdasarkan ID
    const quantityElement = document.getElementById(`quantity-${id}`); // Mendapatkan elemen yang menunjukkan jumlah produk

    // Memperbarui teks jumlah produk berdasarkan apakah item ada di keranjang atau tidak
    if (cartItem) {
      quantityElement.textContent = `Quantity in cart: ${cartItem.quantity}`;
    } else {
      quantityElement.textContent = `Quantity in cart: 0`;
    }
  }

  // Metode untuk menghapus item dari keranjang
  removeFromCart(index) {
    const removedItem = this.cart.splice(index, 1)[0]; // Menghapus item dari keranjang
    this.updateCart(); // Memperbarui tampilan keranjang
    this.updateProductQuantity(removedItem.product.id); // Memperbarui jumlah produk di tampilan
  }

  // Metode untuk mengubah tampilan modal keranjang belanja
  toggleCart() {
    const modal = document.getElementById("cart-modal"); // Mendapatkan elemen modal keranjang
    modal.style.display = modal.style.display === "block" ? "none" : "block"; // Mengubah visibilitas modal
  }
}

// Inisialisasi shopping cart dan produk
const shoppingCart = new ShoppingCart();

// Menambahkan produk ke keranjang belanja
shoppingCart.addProduct(
  new Product(
    1,
    "Product 1",
    "This is the description for Product 1",
    10.0,
    "https://images.unsplash.com/photo-1633455583769-4d8c28b50286?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
  )
);
shoppingCart.addProduct(
  new Product(
    2,
    "Product 2",
    "This is the description for Product 2",
    20.0,
    "https://images.unsplash.com/photo-1613140506142-277c6241b858?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  )
);
shoppingCart.addProduct(
  new Product(
    3,
    "Product 3",
    "This is the description for Product 3",
    30.0,
    "https://images.unsplash.com/photo-1520170350707-b2da59970118?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  )
);

// Menampilkan produk yang telah ditambahkan
shoppingCart.displayProducts();

// Menambahkan event listener untuk menutup modal saat mengklik di luar modal
window.onclick = function (event) {
  const cartModal = document.getElementById("cart-modal"); // Mendapatkan modal keranjang
  const productModal = document.getElementById("product-modal"); // Mendapatkan modal produk

  if (event.target == cartModal) {
    cartModal.style.display = "none"; // Menutup modal keranjang
  }
  if (event.target == productModal) {
    productModal.style.display = "none"; // Menutup modal produk
  }
};
