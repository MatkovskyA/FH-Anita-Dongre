$(document).ready(function(){
    $('.slider').slick({
        // arrows:false, по макету их не видно
        dots:true,
    });
});


// --------- отображаем текст в блоке footwears ----------
// const btnShowBar = document.getElementById('show_bar');
// const btnBlockBar = document.getElementById('block_bar');
// let viewTextDiv = document.getElementById("footwear__inner_text");
// viewTextDiv.style.display = 'none';

// const buttons = document.getElementById("footwear__dots");
// const btns = buttons.getElementsByClassName("dots3");
// //задаю класс активный по клику
// for (let i = 0; i < btns.length; i++) {
// btns[i].addEventListener("click", function() {
// let current = document.getElementsByClassName("active");
// current[0].className = current[0].className.replace(" active", "");
// this.className += " active";
// });
// }

// //функции
// function showText() {
//     viewTextDiv.style.display = 'inline';
// }

// function blockText() {
//     viewTextDiv.style.display = 'none';
// }
// //обработчики при клике - отображают и убирают текст
// btnShowBar.addEventListener('click', showText)
// btnBlockBar.addEventListener('click', blockText)

// ----- отображаем текст и декор в блоке JEWELLRY ---------
const visibleBorder = document.getElementById('jewellry__border_visible');
const showTextBtn = document.getElementById('jewellry__btn');
let showTextDiv = document.getElementById('jewellry__inner');


// function showDiv() {
//     if (visibleBorder.style.display = "block") {
//         showTextDiv.style.display = 'block';
//         visibleBorder.style.display = 'none'
//     } else if (visibleBorder.style.display = 'none') {
//         visibleBorder.style.display = 'block';
//         showTextDiv.style.display = 'none'
//     }

// }


showTextBtn.addEventListener('click', () => {
    showTextDiv.style.display = getComputedStyle(showTextDiv).display == 'block' ? 'none' : 'block';
    visibleBorder.style.display = getComputedStyle(visibleBorder).display == 'block' ? 'none' : 'block';
})





// Самостоятельный вариант слайдера(не доработан)

// // константы из index.html
// const sliderLineNode = document.querySelector('.slider__wrapper');
// const prevSliderBtn = document.querySelector('.btn__prev_slide');
// const nextSliderBtn = document.querySelector('.btn__next_slide');
// const dotsNode = document.querySelectorAll('.dot');


// let position = 0;
// // для выбора индикатора под слайдами
// let dotIndex = 0;

// //-----functions---------

// const nextSlide = () => {
//     if (position < 2880) {
//     position += 960;
//     } else {
//         position = 0;
//     }
//     sliderLineNode.style.left = -position + 'px';
// }

// // ----eventlisteners----

// nextSliderBtn.addEventListener('click', nextSlide);

// const showMes = () => {
//     const name = true;
//     if (name) {
//         alert("Ok")
//     }
// }

// prevSliderBtn.addEventListener('click', showMes)


