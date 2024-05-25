document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const slides = slider.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update slider indicators
    const indicators = document.querySelectorAll(".dot");
    indicators.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  setInterval(nextSlide, 2000); // Change slide every 2 seconds

  // Generate slider indicators
  const indicatorContainer = document.querySelector(".slider-indicator");
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.onclick = () => showSlide(i);
    indicatorContainer.appendChild(dot);
  }

  showSlide(currentIndex); // Show initial slide
});
