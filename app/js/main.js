function preloader() {
    $(window).on('load', function () {
        $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
    });
    window.setTimeout(function () {
        var preloaderbox = document.querySelector('.preloader');
        preloaderbox.style.display = 'none';
    }, 500); 
}
// preloader();
new WOW().init();
function pigination(start, el) {
    $(document).ready(function () {
        $(window).resize(function () {
            var s_body = $(start).offset().top,
                height = $(start).height(),
                header = $('.header').height();
            $(document).scroll(function () {
                var y = $(this).scrollTop();
                var a = $(el).hasClass('pigination-white');
                var b = $(el).hasClass('pigination-on');
                var c = 200;
                if ((y >= s_body - (header + c)) && (y < (s_body + height - c))) {
                    $(el).addClass('pigination-on');
                    if (a && b) {
                        $('.pigination').addClass('white');
                        $('.header').addClass('g');
                    }
                }
                else {
                    $(el).removeClass('pigination-on');
                    if (a && b) {
                        $('.pigination').removeClass('white');
                        $('.header').removeClass('g');
                    }
                }
            })
        }).resize();
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
    if (window.innerWidth > 850) {
        let header = 0;
        var fixed_offset = header;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1500);
        e.preventDefault();
    } else {
        let cbox = document.getElementById('one');
        let header = $('.header').height();
        var fixed_offset = header;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1500);
        e.preventDefault();
        cbox.checked = false;
    }
});


// $(window).scroll(function () {
//     scrollTracking();
// });

// $(document).ready(function () {
//     scrollTracking();
// });