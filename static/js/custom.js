// ------------------ Nav Bar Fix After Scroll -------------------------

$(window).scroll(function() {
    if ($(window).scrollTop() > 150 ){
        $('.navbar-fixed-top').addClass('show');
    } else {
        $('.navbar-fixed-top').removeClass('show');
    };
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

// --------------------- Opacity Rollover -------------------------
//      (There's probably an object oriented way to do this) ...

$(document).ready(function(){
  $("#dev-fill").mouseenter(function(){
      $("#skills-wrap").addClass("dev-settings");
    });
  $("#dev-fill").mouseleave(function(){
      $("#skills-wrap").removeClass("dev-settings");
    });
});

$(document).ready(function(){
  $("#graphic-fill").mouseenter(function(){
      $("#skills-wrap").addClass("graphic-settings");
    });
  $("#graphic-fill").mouseleave(function(){
      $("#skills-wrap").removeClass("graphic-settings");
    });
});

$(document).ready(function(){
  $("#photo-fill").mouseenter(function(){
      $("#skills-wrap").addClass("photo-settings");
    });
  $("#photo-fill").mouseleave(function(){
      $("#skills-wrap").removeClass("photo-settings");
    });
});

$(document).ready(function(){
  $("#social-fill").mouseenter(function(){
      $("#skills-wrap").addClass("social-settings");
    });
  $("#social-fill").mouseleave(function(){
      $("#skills-wrap").removeClass("social-settings");
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

// --------------------- Typed.js --------------------------------------

setTimeout(function(){
    $("#typed").typed({
        strings: ["<font color='#46c84d'>$</font> ^1000 Hello, my name is Chanon ^750 <br> " +
        "<font color='#46c84d'>$</font> I'm a Web Developer and Multimedia Specialist from Ottawa ^750 <br> " +
        "<font color='#46c84d'>$</font> I love learning new things and building cool stuff ^750 <br> " +
        "<font color='#46c84d'>$</font> In 2006, I was named TIME Magazine's Person of the Year ^750 <br> " +
        "<font color='#46c84d'>$</font> My actual typing speed is similar to this ^750 <br> " +
        "<font color='#46c84d'>$</font> Feel free to check out my code on Github ^750 <br> " +
        "<font color='#46c84d'>$</font> Please note that this site is still in development ..." ],
        typeSpeed: 25,               // sets the typing speed, default = 0
        loop: false,                // loop (True/False)
    });
}, 1000);