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

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        const header = document.querySelector('.header')
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            // header.classList.remove('.header');
            // header.classList.toggle('.headerOverflow');
            // console.log('ver6', header.classList)


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