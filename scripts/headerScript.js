$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
        $('.header-fixed').addClass('active');
    } else {
        $('.header-fixed').removeClass('active');
    }
}); 