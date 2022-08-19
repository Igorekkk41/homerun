"use strict"

// ПОЯВЛЯЮЩИЙСЯ СПИСОК
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

if (isMobile.any()){
    document.body.classList.add('_touch');

   let menuArrows = document.querySelectorAll('.menu__link');
   if (menuArrows.length > 0){
       for (let index = 0; index < menuArrows.length; index++) {
           const menuArrow = menuArrows[index];
           menuArrow.addEventListener("click", function(e){
                menuArrow.parentElement.classList.toggle('_active');
           });
       }
   }
}else{
    document.body.classList.add('_pc');
}


// burger
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu){
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// let body = document.querySelector('body');
// if(isMobile.any()){
//     body.classList.add('_touch');
//     let arrow = document.querySelectorAll('.footer__list-title');
//     for(i=0; i<arrow.length; i++){
//         let subMenu=arrow[i].nextElementSibling;
//         let thisArrow = arrow[i];
//         arrow[i].addEventListener('click', function(){
//             subMenu.classList.toggle('_open');
//             thisArrow.classList.toggle('_active');
//         });
//     }
// }else{
//     body.classList.add('_pc');
// }

if (isMobile.any()){
    document.body.classList.add('_touch');

   let menuArrows = document.querySelectorAll('.footer__list-title');
   if (menuArrows.length > 0){
       for (let index = 0; index < menuArrows.length; index++) {
           const menuArrow = menuArrows[index];
           menuArrow.addEventListener("click", function(e){
                menuArrow.parentElement.classList.toggle('_active');
           });
       }
   }
}else{
    document.body.classList.add('_pc');
}

