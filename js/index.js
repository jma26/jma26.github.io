$(document).ready(function() {
    console.log('HELLO');
    // Default hide pop up info
    $('.popupContainer').hide();

    // Prevent URL hash & Animate scrolling
    $('.navScroll').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 50}, 1100);
    });
    $(".navbar-brand").click(function(event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, 1100);
    });
});