function preloader() {
    $(window).on('load', function () {
        $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
    });
    window.setTimeout(function () {
        let preloaderbox = document.querySelector('.preloader');
        preloaderbox.style.display = 'none';
    }, 500); 
}
// preloader();
new WOW().init();
function pigination(start, el) {
    $(document).ready(function () { 
            let startBody = $(start).offset().top,
                height = $(start).height(),
                header = $('.header').height();
            $(document).scroll(function () {
                let scroll = $(this).scrollTop();
                let white = $(el).hasClass('pigination-white');
                let whiteOn = $(el).hasClass('pigination-on');
                let toElement = 200;
                if ((scroll >= startBody - (header + toElement)) && (scroll < (startBody + height - toElement))) {
                    $(el).addClass('pigination-on');
                    if (white && whiteOn) {
                        $('.pigination').addClass('white');
                        $('.header').addClass('pigination-header-on');
                    }
                }
                else {
                    $(el).removeClass('pigination-on');
                    if (white && whiteOn) {
                        $('.pigination').removeClass('white');
                        $('.header').removeClass('pigination-header-on');
                    }
                }
            }) 
    })
}

pigination('.swiper', '.pigination-swiper');
pigination('.aboutMe', '.pigination-aboutMe');
pigination('.consultation', '.pigination-consultation');
pigination('.freebie', '.pigination-freebie');
pigination('.projects', '.pigination-projects');
pigination('.books', '.pigination-books');
pigination('.media', '.pigination-aboutMe-media');
pigination('.contacts', '.pigination-contacts');

$(".header__box").on('click', '[href*="#"]', function (e) { 
        let cbox = document.getElementById('one');
        let fixed_offset = 0;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1500);
        e.preventDefault();
        cbox.checked = false; 
}); 
