// Get ELement HTML
const carouselSlide = document.querySelector(".carousel-slide"); // container for all image
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0; // Perbaikan typo dari 'currenttIndex' ke 'currentIndex'
const totalImages = carouselImages.length;

let autoSlideInterval; // variable to save interval for auto slide

function updateCarousel() {
  carouselSlide.style.transform = `translateX(${-currentIndex * 100}%)`;

  // Update indicators
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
  resetAutoSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
  resetAutoSlide();
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 5000); // Set auto-slide every 5 seconds
}

// Add event listener for next button
nextBtn.addEventListener("click", nextSlide);

// Add event listener for prev button
prevBtn.addEventListener("click", prevSlide);

// Initialize auto slide
autoSlideInterval = setInterval(nextSlide, 5000);

// Set up the initial carousel position
updateCarousel();
