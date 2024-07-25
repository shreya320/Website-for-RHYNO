document.addEventListener('DOMContentLoaded', function() {
    const staticTextPart1 = "Let's Elevate Your Ride Experience With RHYNO -";
    const staticTextPart2 = " Where Superiority Meets ";
    const dynamicWords = ["Style", "Elegance", "Luxury", "Comfort"];
    const staticElementPart1 = document.getElementById('static-text-part1');
    const staticElementPart2 = document.getElementById('static-text-part2');
    const dynamicElement = document.getElementById('dynamic-text');
    const rhynoLink = document.getElementById('rhyno-link');

    let typewriterIndex1 = 0;
    let typewriterIndex2 = 0;
    let wordIndex = 0;

    function typeWriterPart1() {
        if (typewriterIndex1 < staticTextPart1.length) {
            staticElementPart1.innerHTML += staticTextPart1.charAt(typewriterIndex1);
            typewriterIndex1++;
            setTimeout(typeWriterPart1, 100); 
        } else {
            rhynoLink.style.color = '#F9ED32'; 
            typeWriterPart2();
        }
    }

    function typeWriterPart2() {
        if (typewriterIndex2 < staticTextPart2.length) {
            staticElementPart2.innerHTML += staticTextPart2.charAt(typewriterIndex2);
            typewriterIndex2++;
            setTimeout(typeWriterPart2, 100); 
        } else{
            staticElementPart1.classList.remove('typing');
            staticElementPart2.classList.remove('typing');
            dynamicElement.classList.add('fade-in');
            cycleWords();
        }
    }

    function cycleWords() {
        dynamicElement.innerHTML = dynamicWords[wordIndex];
        wordIndex = (wordIndex + 1) % dynamicWords.length;
        setTimeout(() => {
            dynamicElement.classList.remove('fade-in');
            setTimeout(() => {
                dynamicElement.classList.add('fade-in');
                cycleWords();
            }, 800); 
        }, 1000);
    }

    staticElementPart1.classList.add('typing');
    staticElementPart2.classList.add('typing');
    typeWriterPart1();
});

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let currentIndex = 0;
const intervalTime = 5000; 
let slideInterval;

function startSlide() {
    slideInterval = setInterval(() => {
        moveToNextSlide();
    }, intervalTime);
}

function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= totalItems) {
        currentIndex = 0;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    const slideWidth = carouselItems[currentIndex].offsetWidth;
    carousel.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

document.querySelector('.carousel-control.next').addEventListener('click', () => {
    moveToNextSlide();
    clearInterval(slideInterval);
    startSlide();
});

document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    moveToPrevSlide();
    clearInterval(slideInterval);
    startSlide();
});

startSlide();

