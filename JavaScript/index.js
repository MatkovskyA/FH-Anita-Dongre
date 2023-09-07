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
    // бургер меню
    $('.header__burger').click(function(e) {
        $('.header__burger, .header__list').toggleClass('active_class');
        $('body').toggleClass('lock')
    });

});

// блок wedding - отображение блока 
changeItem()
rechangeItem()

function changeItem() {
    if (window.innerWidth >= 769) {
        let weddingImageStyle = document.querySelector('.wedding__image').style.left = "-170px";
        let weddingImageWeight = document.querySelector('.wedding__title').style.width = "230px";
        return weddingImageStyle, weddingImageWeight;
    } else if (window.innerWidth <= 480) {
        let weddingImageStyle = document.querySelector('.wedding__image').style.left = "-290px";
        // let weddingImageWeight = document.querySelector('.wedding__title').style.width = "130px";
        return weddingImageStyle
    } else {
        let weddingImageStyle = document.querySelector('.wedding__image').style.left = "-170px";
        // let weddingImageWeight = document.querySelector('.wedding__title').style.width = "130px";
        return weddingImageStyle
    }

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
viewTextDiv.style.display = 'block';

const buttons = document.getElementById("footwear__dots");
const btns = buttons.getElementsByClassName("dots3");
//задаю класс активный по клику
for (let i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
let current = document.getElementsByClassName("footwears__btn_active");
current[0].className = current[0].className.replace(" footwears__btn_active", "");
this.className += " footwears__btn_active";
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


// ------ блок галереи с слайдами ----------

const btnPrevSlide = document.querySelector('.category__btn_prev');
const btnNextSlide = document.querySelector('.category__btn_next');
const currentDiv = Array.from(document.querySelectorAll('.category__image'));
const activeClassname = 'active';

let activeId;
let newActiveid;

init();
// листаем картинки по клику 
function init() {
    activeId = 0;

    btnPrevSlide.addEventListener('click', () => {
        setActiveSlideById(getPrevId());
    });

    btnNextSlide.addEventListener('click', () => {
        setActiveSlideById(getNextId());
    });
}
// добавляем активный класс по id
function setActiveSlideById(id) {
    const currentId = activeId;
    activeId = id;

    currentDiv[currentId].classList.remove(activeClassname)
    currentDiv[activeId].classList.add(activeClassname)
}
// получаем id картинки для пролистывания
function getPrevId() {
    return activeId == 0 ? currentDiv.length - 1 : activeId - 1;
}

function getNextId() {
    return activeId == (currentDiv.length - 1) ? 0 : activeId + 1;
}

// header-burger


