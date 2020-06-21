
AOS.init({
});
var block_show = null;
function pigination(start, el) {
    $(document).ready(function () {
        $(window).resize(function () {
            var s_body = $(start).offset().top, 
                height = $(start).height();
            $(document).scroll(function () {
                var y = $(this).scrollTop();
                var a = $(el).hasClass('pigination-white');
                var b = $(el).hasClass('pigination-on');
                if ((y >= s_body - 88) && (y < (s_body + height))) {
                    $(el).removeClass('pigination-off');
                    $(el).addClass('pigination-on'); 
                    if ((a == true) && (b == true)) {
                        $('.pigination').addClass('white');
                        $('.header').addClass('g');
                        console.log('я присутствую  ');
                        console.log(a + '  a11');
                        console.log(b + '  b11');
                    } 
                }
                else { 
                    $(el).removeClass('pigination-on');
                    $(el).addClass('pigination-off');
                    if ((a == true) && (b == true)) {
                        $('.pigination').removeClass('white');
                        $('.header').removeClass('g');
                        console.log('меня нет на странице  '); 
                        console.log(a + '  a22');
                        console.log(b + '  b22');
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

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1500);
    e.preventDefault();
  });