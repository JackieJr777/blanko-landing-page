
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
