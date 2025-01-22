
//
$(document).ready(function() {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'scrollingSpeed': 600,
        'autoScrolling': false,  // Ensures fullPage.js does not auto-scroll
        'fitToSection': false,   // Prevents snapping to sections
        'scrollOverflow': false, // Ensures normal scrolling behavior
        'css3': true,
        'navigation': true,
        'navigationPosition': 'right'
    });
});


// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})