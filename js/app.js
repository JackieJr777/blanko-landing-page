/* -------------------- */

/* const menuBody = document.querySelector(".menu-header__body");

const header = document.querySelector(".header"); */

// menuBody.style.top = `${header.offsetHeight}px`;

/* window.addEventListener("resize", function() {
    console.log(`Ширина вьюпорта равна: ${window.innerWidth}`);
    if (window.innerWidth <= 900) {
        console.log(`Ширина вьюпорта меньше 900px!!!`)
        console.log(menuBody.offsetTop);
        menuBody.style.top = `${header.offsetHeight}px`;

    }
}) */
/* -------------------- */

/* -------------------------меню-бургер------------------------------------ */

const burger = document.querySelector(".menu-header__btnBurger");

const burgerParent = burger.parentElement;

if (burger) {
    burger.addEventListener("click", function() {
        if (burgerParent) {
            burgerParent.classList.toggle("_menu-active");
            document.body.parentElement.classList.toggle("_lock");
        }
    })
}

// если ширина экрана больше 900px, закрываем меню и возвращаем скролл для body
window.addEventListener("resize", function() {
    // console.log(`Ширина вьюпорта равна: ${window.innerWidth}`);
    if (window.innerWidth > 900) {
        console.log(`Ширина вьюпорта больше 900px!!!`)
        burgerParent.classList.remove("_menu-active");
        document.body.parentElement.classList.remove("_lock");

    }
})
/* ------------------------------------------------------------------------ */


/* -------------------------мини-слайдер----------------------------------- */
// мини-слайдер =)

/* const item1 = document.querySelector(".item-druk_1");
const item2 = document.querySelector(".item-druk_2"); */

const reviews = document.querySelector(".reviews");

// Вешаем прослушку на блок с кнопками
if(document.querySelector(".reviews__buttons")) {
    document.querySelector(".reviews__buttons").addEventListener("click", function(e) {
        const targetElement = e.target;
        console.log(targetElement);
        // проверяем, какую кнопку нажали
        if (targetElement.closest(".reviews__btn_right")) {
            reviews.classList.add("_translate-to-left");
        } 
        if (targetElement.closest(".reviews__btn_left")) {
            if (reviews.classList.contains("_translate-to-left")) {
                reviews.classList.remove("_translate-to-left"); 
            }    
        }
    })
}
/* ------------------------------------------------------------------------ */


/* ------Прокручиваемся к нужным блокам при клике по ссылкам в header------ */

// вариант №1

/* // получаем ссылки
const btnTemplate = document.querySelector(".menu-header__link_template");
const btnmenuAdvantages = document.querySelector(".menu-header__link_advantages");
const btnReviews = document.querySelector(".menu-header__link_reviews");
const btnLandings = document.querySelector(".menu-header__link_landings");

// получаем объекты, к которым нужно проскроллить
const template = document.querySelector(".template");
const advantages = document.querySelector(".our-advantages");
// const druk = document.querySelector(".druk");
const landings = document.querySelector(".landing-pages");

if (header) {
    header.addEventListener('click', function(e) {
        const targetElement = e.target;
        console.log(targetElement);
        if (targetElement.closest(".menu-header__link_template")) {
            e.preventDefault();
            window.scrollTo ({
                top: template.offsetTop + header.offsetHeight,
                behavior: "smooth"
                
            })
            if (burgerParent.classList.contains("_menu-active") && document.body.parentElement.classList.contains("_lock")) {
                burgerParent.classList.remove("_menu-active");
                document.body.parentElement.classList.remove("_lock");
            }
        }
        if (targetElement.closest(".menu-header__link_advantages")) {
            e.preventDefault();
            window.scrollTo ({
                top: advantages.offsetTop,
                behavior: "smooth"
                
            })
            if (burgerParent.classList.contains("_menu-active") && document.body.parentElement.classList.contains("_lock")) {
                burgerParent.classList.remove("_menu-active");
                document.body.parentElement.classList.remove("_lock");
            }
        }
        if (targetElement.closest(".menu-header__link_reviews")) {
            e.preventDefault();
            window.scrollTo ({
                top: druk.offsetTop,
                behavior: "smooth"
                
            })
            if (burgerParent.classList.contains("_menu-active") && document.body.parentElement.classList.contains("_lock")) {
                burgerParent.classList.remove("_menu-active");
                document.body.parentElement.classList.remove("_lock");
            }
        }
        if (targetElement.closest(".menu-header__link_landings")) {
            e.preventDefault();
            window.scrollTo ({
                top: landings.offsetTop,
                behavior: "smooth"
                
            })
            if (burgerParent.classList.contains("_menu-active") && document.body.parentElement.classList.contains("_lock")) {
                burgerParent.classList.remove("_menu-active");
                document.body.parentElement.classList.remove("_lock");
            }
        }
        
    })
} */

/* --------------------------------------------------------------------- */
// вариант №2

/* const menuLinks = document.querySelectorAll(".menu-header__link[data-goto]");

console.log(menuLinks);

if(menuLinks.length) {
    menuLinks.forEach(function(menuLink) {
        if(menuLink) {
            menuLink.addEventListener('click', onMenuLinkClick);
        }
    })

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY/;

            window.scrollTo ({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
} */

/* --------------------------------------------------------------------- */
// вариант №3 (делегирование)

const header = document.querySelector(".header");

if (header) {
    header.addEventListener('click', onMenuLinkClick); 


    function onMenuLinkClick(e) {
        const targetElement = e.target;
        
        if(targetElement.dataset.goto && document.querySelector(targetElement.dataset.goto)) {
            const gotoBlock = document.querySelector(targetElement.dataset.goto);
            const gotoBlockValue1 = header.offsetHeight;
            const gotoBlockValue2 = gotoBlock.getBoundingClientRect().top + scrollY/*  - header.offsetHeight */;
            e.preventDefault();

            if(targetElement.getAttribute('data-goto') === '.template') {
                window.scrollTo ({
                    top: gotoBlockValue1,
                    behavior: "smooth"
                });  
            } else {
                window.scrollTo ({
                    top: gotoBlockValue2,
                    behavior: "smooth"
                });
            }
            // если меню открыто, закрываем его
            if (burgerParent.classList.contains("_menu-active")) {
                burgerParent.classList.remove("_menu-active");
                document.body.parentElement.classList.remove("_lock");
            }         
        }
    }
}
/* ------------------------------------------------------------------------ */