/**
 * Created by пользователь on 06.03.2017.
 */
jQuery(document).ready(function($) {

    /*$('.carousel').carousel({
        interval: 2000,
        pause: 'hover',
        wrap: true
    });*/

    //Carousel
//thred slider
    $('.slider1').bxSlider({
        slideWidth: 200,
        minSlides: 2,
        maxSlides: 6,
        slideMargin: 10,
        pager: false
    });
//second slider
    var carousel = $("#carousel").featureCarousel({
        // include options like this:
        // (use quotes only for string values, and no trailing comma after last option)
        // option: value,
        // option: value
    });

    $("#but_prev").click(function () {
        carousel.prev();
    });
    $("#but_pause").click(function () {
        carousel.pause();
    });
    $("#but_start").click(function () {
        carousel.start();
    });
    $("#but_next").click(function () {
        carousel.next();
    });

    //navbar
    $(".dropdown-toggle").mouseover(function(){
        $(".dropdown-toggle i").css("visibility", "visible");
        $(".dropdown-toggle").mouseout(function(){
            $(".dropdown-toggle i").css("visibility", "hidden");
        });
    });

    //preloader
    var $window = $(window);
    var $body = $('body');
    $body.css('overflow', 'hidden').append('<div id="preloader"></div>');
    $window.load(function() {
        $('#preloader').fadeOut();
        $body.css('overflow', '');
    });
});

