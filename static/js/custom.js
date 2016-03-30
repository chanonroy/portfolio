// --------------------- Typed.js --------------------------------------

// get the day of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = weekday[d.getDay()];

// get the hour in the day
var hour = d.getHours();
var greeting;
  if (hour < 12) {
      greeting = "morning";
  } else if (hour < 17) {
      greeting = "afternoon";
  } else if (hour < 21){
      greeting = "evening";
  } else {
      greeting = "night";
  }

var n = Math.floor(Math.random()* 7 + 0); // max, start
var facts = ["I was TIME Magazine's Person of the Year in 2006",
             "I do a world-class impersonation of Yoda",
             "My full name is unreasonably long",
             "I know numerous people who have appeared in Google Street View",
             "I once sang the Canadian national anthem for 500+ Bhutanese school children",
             "I once saw Nickelback in concert and unironically enjoyed every moment of it",
             "I'm fairly certain that I'm the only 'Chanon Roy' on the planet"];

setTimeout(function(){
    $("#typed").typed({
        strings: ["^1000 <font size='15px'> Hello</font> ^1000<br>" +
        " ^750 My name is Chanon Roy^750<br>" +
        " ^750 I'm a Web Developer and Programmer <br> from Ottawa, Canada<br> <br> ^1000" +
        " ^750 Check out my portfolio projects and code on Github ^750<br>" +
        " ^750 Have a wonderful " + day + " " + greeting + "! ^750 <br> <br>" +
        " ^750 <font size='6px'> More about me: </font> ^750<br>" +
        " ^750 <font size='5px' color='gold'>" + facts[n] + "</font>"],
        typeSpeed: 25,               // sets the typing speed, default = 0
        loop: false,                // loop (True/False)
    });
}, 1000);

// ------------------ Nav Bar Fix After Scroll -------------------------

$(window).scroll(function() {
    if ($(window).scrollTop() > 150 ){
        $('.navbar-fixed-top').addClass('show');
    } else {
        $('.navbar-fixed-top').removeClass('show');
    }
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();         // tooltip for the blog (coming soon)
});

// ------------------ Anchor Smooth Scrolling --------------------------
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// -------------------- jQuery Isotope.js Portfolio Filter ---------------

$(window).load(function(){
    var $grid = $('.portfolioContainer');
    $grid.isotope({
        filter: '*',            // * will show all first
        itemSelector: '.grid-item',
        //masonry: {
        //    columnWidth: 50
        //},
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $grid.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
});

// ----------------------- Social Media Buttons ------------------------

$(".social").hover(function () {
    $(this).toggleClass("on");
});
