document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#search-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Menghapus semua konten sebelumnya
    document.querySelectorAll(".result-item").forEach((div) => div.remove());

    const keyword = form.elements.query.value;
    const config = {
      params: { q: keyword },
    };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    getImages(res.data);
    form.elements.query.value = ""; // Mengosongkan input
  });

  const getImages = (shows) => {
    const resultsContainer = document.querySelector(".results"); // Mengambil kontainer hasil

    for (let result of shows) {
      if (result.show.image) {
        const img = document.createElement("img");
        img.src = result.show.image.medium;

        const title = document.createElement("p");
        title.textContent = result.show.name;

        const container = document.createElement("div");
        container.classList.add("result-item"); // Menambahkan kelas untuk styling
        container.append(img);
        container.append(title);

        resultsContainer.append(container); // Menambahkan kontainer ke hasil
      }
    }
  };
});
