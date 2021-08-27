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
    // const hero = window.getComputedStyle(document.querySelector('.hero'));
    // const hero = document.querySelector('.hero');
    // console.log(hero.style)
    // hero.style.background = 'linear-gradient(135deg, #6f85ad 0%, #6f85ad2f 100%), url(' + '../images/Area.jpeg' + ') center no-repeat;';
    // console.log(hero.style)

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            // header.classList.remove('.header');
            // header.classList.toggle('.headerOverflow');
            // console.log('ver6', header.classList)
            console.log('ver8')

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