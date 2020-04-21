$(document).ready(function(){
    $('#top__slider').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    items: 1,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false
    })

    $('#plan__slider').owlCarousel({
        nav:true,
        dots:true,
        items: 11
    })

    $('#tiles').owlCarousel({
        items: 3,
        autoplay:false
    })

     window.addEventListener("scroll", function(){
                var header = document.querySelector(".mainmenu");
                header.classList.toggle("sticky", window.scrollY > 0);
    })

     new WOW().init();
});

