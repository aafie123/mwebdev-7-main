$(document).ready(function() {
    // smooth scrolling
    $('a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500);
    });
    $('.to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    })

    // ivm parallax
    $(window).scroll(function() {
        EasyPeasyParallax();
    });

    function EasyPeasyParallax() {
        let scrollPos = $(this).scrollTop();
        $('#modern-webdev').css({
            'background-position' : '50% ' + (-scrollPos/4)+"px"
        });
        $('#modern-webdev-content').css({
            'margin-top': (scrollPos/4)+"px",
            'opacity': 1-(scrollPos/250)
        });
    }
});

