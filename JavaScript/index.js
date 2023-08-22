$(document).ready(function(){
    $('.slider').slick({
        // arrows:false, по макету их не видно
        dots:true,
    });
    $('.menswear__slider').slick({
        arrows:false,
        dots:true,
        vertical:true
    })
});

// блок wedding - отображение блока 
changeItem()
rechangeItem()

function changeItem() {
    let weddingImageStyle = document.querySelector('.wedding__image').style.left = "-170px";
    let weddingImageWeight = document.querySelector('.wedding__title').style.width = "230px";
    return weddingImageStyle, weddingImageWeight
}

function rechangeItem() {
    let weddingImageStyle = document.querySelector('.wedding__image').style.left = "0px";
    let weddingImageWeight = document.querySelector('.wedding__title').style.width = "460px";
    return weddingImageStyle, weddingImageWeight
}

// блок Анита Донгре - смена картинок
changePhoto()
function changePhoto() {
    const titleFoto = document.querySelector('.secondary__img');
    const mainFoto = document.querySelector('.main__img');

    titleFoto.addEventListener('click', () => {
        titleFoto.classList.toggle('zoom__photo');
        mainFoto.classList.toggle('reduce__foto');
    })
}

rechangePhoto()
function rechangePhoto() {
    const titleFoto = document.getElementById('dec-img2');
    const mainFoto = document.getElementById('dec-img');

    titleFoto.addEventListener('click', () => {
        titleFoto.classList.toggle('zoom__photo');
        mainFoto.classList.toggle('reduce__foto');
    })
}

//  ----- отображаем текст и декор в блоке JEWELLRY ---------
const visibleBorder = document.getElementById('jewellry__border_visible');
const showTextBtn = document.getElementById('jewellry__btn');
let showTextDiv = document.getElementById('jewellry__inner');
// функция отображения и скрытия блоков с текстом
showTextBtn.addEventListener('click', () => {
    showTextDiv.style.display = getComputedStyle(showTextDiv).display == 'block' ? 'none' : 'block';
    visibleBorder.style.display = getComputedStyle(visibleBorder).display == 'block' ? 'none' : 'block';
})

// --------- отображаем текст в блоке footwears ----------
const btnShowBar = document.getElementById('show_bar');
const btnBlockBar = document.getElementById('block_bar');
let viewTextDiv = document.getElementById("footwear__inner_text");
viewTextDiv.style.display = 'none';

const buttons = document.getElementById("footwear__dots");
const btns = buttons.getElementsByClassName("dots3");
//задаю класс активный по клику
for (let i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
let current = document.getElementsByClassName("active");
current[0].className = current[0].className.replace(" active", "");
this.className += " active";
});
}

// //функции
function showText() {
    viewTextDiv.style.display = 'inline';
}

function blockText() {
    viewTextDiv.style.display = 'none';
}
//обработчики при клике - отображают и убирают текст
btnShowBar.addEventListener('click', showText)
btnBlockBar.addEventListener('click', blockText)



