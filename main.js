'use strict';
const imgContainer = document.querySelector('#imgContainer');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const dotsContainer = document.querySelector('#dotsContainer');

const slides = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg'];
let currentSlide = 0;
generateDots();
updateSlides();

function updateSlides() {
    nextBtn.style.display = currentSlide === slides.length - 1 ? 'none' : 'block';
    prevBtn.style.display = currentSlide === 0 ? 'none' : 'block';
    imgContainer.src = slides[currentSlide];

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function generateDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
    }
}

nextBtn.addEventListener('click', () => {
    currentSlide = currentSlide + 1;
    updateSlides();
});
prevBtn.addEventListener('click', () => {
    currentSlide = currentSlide - 1;
    updateSlides();
});
dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
        currentSlide = parseInt(e.target.dataset.index);
        updateSlides();
    }
});