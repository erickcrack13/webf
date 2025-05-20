let currentIndex = 0;
const slides = document.querySelectorAll(".carousel img");
const totalSlides = slides.length;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    document.querySelector(".carousel").style.transform = `translateX(-${currentIndex * 100}%)`;
}
