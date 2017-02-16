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

$(function() {
    $('.100vh').height($(window).height());
    $('.90vh').height($(window).height() * .9);
    $('.80vh').height($(window).height() * .8);
    $('.70vh').height($(window).height() * .7);
    $('.60vh').height($(window).height() * .6);
    $('.50vh').height($(window).height() * .5);
    $('.40vh').height($(window).height() * .4);
    $('.30vh').height($(window).height() * .3);
    $('.20vh').height($(window).height() * .2);
    $('.10vh').height($(window).height() * .1);

    $('.100vw').width($(window).width());
    $('.90vw').width($(window).width() * .9);
    $('.80vw').width($(window).width() * .8);
    $('.70vw').width($(window).width() * .7);
    $('.60vw').width($(window).width() * .6);
    $('.50vw').width($(window).width() * .5);
    $('.40vw').width($(window).width() * .4);
    $('.30vw').width($(window).width() * .3);
    $('.20vw').width($(window).width() * .2);
    $('.10vw').width($(window).width() * .1);

});

$(function() {

    var elem = document.querySelector('#side-panel');
    var open = false;

    var travelDistance;

    if ($(window).width() <= 768) {
        travelDistance = -$(window).width();
    }else{
        travelDistance = '-500px'
    }

    $(window).resize(function(){
        if ($(window).width() <= 768) {
            travelDistance = -$(window).width();
        }else{
            travelDistance = '-500px'
        }
    });


    function handleSideAction() {
        if (open) {
            $('#side-panel')
                .animate({
                    right: travelDistance
                }, 1000, 'easeInOutQuint');
        } else {
            $('#side-panel')
                .animate({
                    right: '0'
                }, 1000, 'easeInOutQuint');
        }
        open = !open;
    }

    $('#side-panel-close').bind('click', function(event) {
        handleSideAction();
    });

    $('.book-button').bind('click', function(event) {
       handleSideAction();
    });
});

$(document).on('pageinit', function(event){
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

