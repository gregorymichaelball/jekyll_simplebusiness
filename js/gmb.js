/**
 * Created by Greg on 1/12/2017.
 */
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top -  70
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function() {
    $("#myCarousel").swiperight(function() {
        $("#myCarousel").carousel('prev');
    });
    $("#myCarousel").swipeleft(function() {
        $("#myCarousel").carousel('next');
    });
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

var animatedNavbar = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.navbar-fixed-top' ),
        didScroll = false,
        changeHeaderOn = (window).innerHeight - 100;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
        window.addEventListener( 'load', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'navbar-shrink' );
        }
        else {
            classie.remove( header, 'navbar-shrink' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();

$(function(){
    var navMain = $("#bs-example-navbar-collapse-1");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

$(function() {
    var delay = 1000;
    var lineSpeed = 500;
    var textSpeed = 600;
    var widthPadding = 6;

    function animateLine(words, index) {
        $('.animatedHeaderContent').text(words[index].trim());
        var contentWidth = $('.animatedHeaderContent').width();
        $(".animatedHeader").animate({
            width: (contentWidth + widthPadding) + 'px'
        }, lineSpeed, 'easeInOutBack', function() {
            animateText(words, index);
        });
    }

    function animateText(words, index) {

        $('.animatedHeaderContent')
            .animate({
                top: '0px'
            }, textSpeed, 'easeInOutBack')
            .delay(delay)
            .animate({
                top: '50px'
            }, textSpeed, 'easeInOutBack', function() {
                animateLine(words, (index + 1) % words.length)
            });
    }

    var wordsArray = $('.animatedHeaderContent').text();
    var words = wordsArray.split(",");
    animateLine(words, 0);
});

