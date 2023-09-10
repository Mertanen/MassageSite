let menuSticky = document.getElementById('menu');

$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
        $('.header-fixed').addClass('active');
        menuSticky.classList.add('active');
    } else {
        $('.header-fixed').removeClass('active');
        menuSticky.classList.remove('active');
    }
}); 