$(document).ready(function() {
    // Sections are 100% height and will share the same height
    // Top position for about is always going to be 0
    // Top position for skills is going to be the end of sectionHeight * 1
    // Top position for projects is going to be end of sectionHeight * 2
    // Top position for contact is going be the height of the parent container, .main

    // Will need to refactor this.....

    var sectionHeight = document.getElementById('about').offsetHeight;

    var skillsTarget = sectionHeight * 1;
    var projectsTarget = sectionHeight * 2;
    // scrollHeight of .main to scroll to bottom always
    var contactTarget = document.getElementById('main').scrollHeight;

    // Recalculate sectionHeight when window resizes
    $(window).resize(function() {
        var sectionHeight = document.getElementById('about').offsetHeight;
        skillsTarget = sectionHeight * 1;
        projectsTarget = sectionHeight * 2;
        contactTarget = document.getElementById('main').scrollHeight;
    })

    // Main function
    $('.nav-items').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        if (target === '#about') {
            $('#main').animate({
                scrollTop: 0
            }, 1200);
        } else if (target === '#skills') {
            $('#main').animate({
                scrollTop: skillsTarget
            }, 1000);
        } else if (target === '#projects') {
            $('#main').animate({
                scrollTop: projectsTarget
            }, 1000)
        } else if (target === '#contact') {
            $('#main').animate({
                scrollTop: contactTarget
            }, 1000)
        }
    });

});