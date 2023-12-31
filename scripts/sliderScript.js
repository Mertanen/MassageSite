const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    autoplay: {
        delay: 2500,
    },

    speed: 900,

    effect: 'slide',

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});