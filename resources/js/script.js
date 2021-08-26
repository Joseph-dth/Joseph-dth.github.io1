$(document).ready(function() {

    /*Mobile-nav*/
    /*
    $('.js--nav-icon').click(function(){
          var nav = $('.js--main-nav');
          var iocn =$('.js--nav-icon');

          nav.slideToggle(200);
          if (icon.hasClass('mobile-navi')){
              icon.hide(0);
          }
          else{
              icon.addNameitem('menu-outline');
              icon.removeName('close-outline');
          }

    })
    */
    const notScroll = function() {

        var $body = $(document);
        $body.bind('scroll', function() {
            // "Disable" the horizontal scroll.
            if ($body.scrollLeft() !== 0) {
                $body.scrollLeft(0);
            }
        });

    };
    notScroll();
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        const forOverflow = document.querySelector('.forOverflow');
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            forOverflow.classList.toggle('overFlowShow');
            console.log('ver5')


            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.4}s`;

                }
            });
            burger.classList.toggle('toggle');

        });


    }


    navSlide();

});