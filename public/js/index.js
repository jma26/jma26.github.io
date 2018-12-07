$(document).ready(function() {
    console.log('Testing index.js....');
    $('.nav-items').click(function(event) {
        event.preventDefault();
        console.log($(this.hash).position());
        var target = $(this).attr('href');
        if (target === '#about') {
            $('.main').animate({
                scrollTop: 0
            }, 1200);
        } else if (target === '#skills') {
            $('.main').animate({
                scrollTop: 891
            }, 1200);
        } else if (target === '#projects') {
            $('.main').animate({
                scrollTop: 1782
            }, 1200)
        } else if (target === '#contact') {
            $('.main').animate({
                scrollTop: 2737
            }, 1200)
        }
    })
})