$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        speed: 900,
        infinite: true,

        autoplay: true,
        
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
    });
});
