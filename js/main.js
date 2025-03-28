$(document).ready(function () {
    document.querySelector(".totop").addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    if ($('.burger2').length) {
        (function () {
            var burger2;
            burger2 = document.querySelector(".burger2");
            burger2.addEventListener("click", function () {
                return burger2.classList.toggle("on");
            });

        }).call(this);
    }

    $('.burger').click(function () {
        $('.header__nav').toggleClass('show');
    })

    $('.burger').click(function () {
        $('body').toggleClass('hidden');
        $('.mobilemenu').toggleClass('show');
        // window.scrollTo(0, 0);
    })

    // slider - main page
    var swiper = new Swiper(".mySwiper1", {
        slidesPerView: "auto",
        spaceBetween: 20,
        slidesOffsetBefore: 15,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            576: {
                slidesOffsetBefore: 30,
            },
            991: {
                slidesOffsetBefore: 30,
            },
            1200: {
                slidesOffsetBefore: 98,
            },
          },
    });

    
    // slider - Recent blog posts
    var swiper = new Swiper(".blogpost-slider", {
        slidesPerView: 1,
        loop: true,
        speed: 900,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
          },
    });

    // tab
    $('.tab').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        $('.tab').removeClass('active');
        $('.tab-body').removeClass('active').hide();
        $(this).addClass('active');
        $(target).addClass('active').fadeIn(900);
    });






})