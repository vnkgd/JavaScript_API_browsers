const sliderContainer = document.querySelector('.slider-container');
const slides = sliderContainer.querySelectorAll('img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const navDots = document.querySelectorAll('.nav-dots .dot');

let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        navDots[index].classList.remove('active');
    });

    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    navDots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

showSlide(currentSlide);