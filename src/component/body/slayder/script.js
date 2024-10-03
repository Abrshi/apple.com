let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const timeInterval = 3000; // Time interval between slides in milliseconds

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('prev');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.remove('next');
    slides[currentSlide].classList.add('active');
}

function startSlideshow() {
    setInterval(nextSlide, timeInterval);
    slides[currentSlide].classList.add('active');
}

startSlideshow();

