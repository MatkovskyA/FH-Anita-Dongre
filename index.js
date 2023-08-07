// константы из index.html
const sliderLineNode = document.querySelector('.slider__wrapper');
const prevSliderBtn = document.querySelector('.btn__prev_slide');
const nextSliderBtn = document.querySelector('.btn__next_slide');
const dotsNode = document.querySelectorAll('.dot');


let position = 0;
// для выбора индикатора под слайдами
let dotIndex = 0;

//-----functions---------

const nextSlide = () => {
    if (position < 2880) {
    position += 960;
    } else {
        position = 0;
    }
    sliderLineNode.style.left = -position + 'px';
}

// ----eventlisteners----

nextSliderBtn.addEventListener('click', nextSlide);

const showMes = () => {
    const name = true;
    if (name) {
        alert("Ok")
    }
}

prevSliderBtn.addEventListener('click', showMes)


