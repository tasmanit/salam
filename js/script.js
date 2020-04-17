$('#top__slider').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'flipInX',
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false
})

$('#plan__slider').owlCarousel({
    nav:true,
    dots:true,
    items: 11
})

 window.addEventListener("scroll", function(){
            var header = document.querySelector(".mainmenu");
            header.classList.toggle("sticky", window.scrollY > 0);
})
