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

// блок wedding
changeItem()
rechangeItem()
function changeItem() {
    let a = document.querySelector('.wedding__image').style.left = "-170px";
    let b = document.querySelector('.wedding__title').style.width = "230px";
    return a, b
}

function rechangeItem() {
    let a = document.querySelector('.wedding__image').style.left = "0px";
    let b = document.querySelector('.wedding__title').style.width = "460px";
    return a, b
}


//  ----- отображаем текст и декор в блоке JEWELLRY ---------
// const visibleBorder = document.getElementById('jewellry__border_visible');
// const showTextBtn = document.getElementById('jewellry__btn');
// let showTextDiv = document.getElementById('jewellry__inner');
// // функция отображения и скрытия блоков с текстом
// showTextBtn.addEventListener('click', () => {
//     showTextDiv.style.display = getComputedStyle(showTextDiv).display == 'block' ? 'none' : 'block';
//     visibleBorder.style.display = getComputedStyle(visibleBorder).display == 'block' ? 'none' : 'block';
// })

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



