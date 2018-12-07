$(document).ready(function() {
    console.log('Testing index.js....');
    $('.nav-items').click(function(event) {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    })
})