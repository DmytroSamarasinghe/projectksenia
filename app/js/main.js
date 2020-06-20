
AOS.init({
    // easing: 'ease-in-out-sine'
    // disable:false,
    // startEvent:'DOMontentioaded',
    // initClassName:'aos-init',
    // animatedClassName:'aos-animate',
    // useClassNames:false,
    // disableMutationObserver: false,
    // debounceDelay: 50,
    // throttleDelay: 90,
    // offset:120,
    // delay:0,
    // duration: 400,
    // easing:'ease',
    // once: false,
    // mirror: false,
    // anchorPlacement:'top-bottom',
});
// $(function () {
//     var $body = $('body'),
//         $header = $('header');
//     $(document).on('scroll', function () {
//         var position = $body.scrollTop(),
//             // block_position = $('#box1').offset().top; // расположение блока, от которого и зависит фиксированность хэдера
//         if (position > 800) { // если позиция скролла страницы больше, то ставим фикс
//             $header.addClass('header-fixed');
//         } else {
//             $header.removeClass('header-fixed');
//         }
//     });
// });

// $(function () {
// $(window).scroll(function () {
//     if ($(window).scrollTop() > 500) { // если позиция скролла страницы больше, то ставим фикс
//         $('.table').addClass('header-fixed');
//     } else {
//         $('.table').removeClass('header-fixed');
//     }
// });
// $(window).scroll(function () {
//     var height = $(window).scrollTop();

//     /*Если сделали скролл на 100px задаём новый класс для header*/
//     if (height > 100) {
//         $('header').addClass('header-fixed');
//     } else {
//         /*Если меньше 100px удаляем класс для header*/
//         $('header').removeClass('header-fixed');
//     }
//     var s_body = $('#start_body').offset();
//     var e_body = $('#end_body').offset();
//     $(document).scroll(function () {
//       var y = $(this).scrollTop();
//       if(y >= s_body && y < e_body){
//         $('header').addClass('header-fixed');
//       }
//       else 
//       {
//         $('header').removeClass('header-fixed');
//       }
//   })
// });
/////////////////////// 
$(window).scroll(function () {
    // var height = $(window).scrollTop();

    /*Если сделали скролл на 100px задаём новый класс для header*/
    // if (height >= 100 &&  height < 500) {
    //     $('.g').addClass('header-fixed');
    // } else {
    //     /*Если меньше 100px удаляем класс для header*/
    //     $('.g').removeClass('header-fixed');
    // }
});
//////////////////////////
// });
// $(function(){ 
//     var s_body = $('#start_body').offset().top;
//     // var e_body = $('#end_body').offset().top;
//     $(document).scroll(function () {
//       var y = $(this).scrollTop();
//       if(y >= s_body && y < e_body){
//         $('.g').addClass('header-fixed');
//       }
//       else 
//       {
//         $('.g').removeClass('header-fixed');
//       }
//   })

// });
// });
// $(function () {
//     // var height = (window).scrollTo(0, 100);
//     var height = window.pageYOffset();

//     if (height == 1000) {
//         $('header').addClass('header-fixed');
//     } else {
//         /*Если меньше 100px удаляем класс для header*/
//         $('header').removeClass('header-fixed');
//     }
// }); 

// $(window).scroll(function(){
//     if ( $(this).scrollTop() > 0 ) {
//         $('header').toggleClass('header-fixed');
//     } else {
//         $('header').removeClass('header-fixed');
//     }
// })
var block_show = null;
function pigination(start, el) {
    $(document).ready(function () {
        $(window).resize(function () {
            var s_body = $(start).offset().top,
                // var e_body = $(end).offset();
                height = $(start).height();
            $(document).scroll(function () {
                var y = $(this).scrollTop();
                var a = $(el).hasClass('pigination-white');
                var b = $(el).hasClass('pigination-on');
                var v = $(el).hasClass('pigination-off');
                // if ((y >= s_body.top) && (y < e_body.top)) {
                if ((y >= s_body - 150) && (y < (s_body + height - 150))) {
                    $(el).removeClass('pigination-off');
                    $(el).addClass('pigination-on');
                    // if ((block_show == null) || (block_show == false)) {
                    // }
                    // block_show = true;   
                    // if ((a = ($(el + '.pigination-button').hasClass('pigination-white' + 'pigination-on'))) && (a == false)) {

                    console.log(a + '  a1'); //true
                    console.log(b + '  b1'); //false
                    if ((a == true) && (b == true)) {
                        // if (($('.pigination-button').hasClass('pigination-white')) && ($('.pigination-button').hasClass('pigination-on'))) {
                        // if ((block_show == null) || (block_show == false)) {
                        // }
                        $('.pigination').addClass('white');
                        $('.header').addClass('g');
                        console.log('я присутствую  ');
                        console.log(a + '  a11');
                        console.log(b + '  b11');
                    }
                    // block_show = true;
                }
                else {
                    console.log(a + '  a2'); //true
                    console.log(b + '  b2'); //false
                    console.log(v + '  v2'); //false
                    $(el).removeClass('pigination-on');
                    $(el).addClass('pigination-off');
                    console.log(v + '  v2'); //false
                    // if ((($('.pigination-button').hasClass('pigination-white')) == true) && (($('.pigination').hasClass('white')) == true)){
                    // if (($('.pigination').hasClass('white'))) {
                    // if ((block_show == null) || (block_show == true)) {
                    if ((a == true) && (b == true)) {
                        // if ((a = ($(el + '.pigination-button').hasClass('pigination-white'))) && (a == false)) {
                        $('.pigination').removeClass('white');
                        $('.header').removeClass('g');
                        console.log('меня нет на странице  ');
                        // }
                        console.log(a + '  a22');
                        console.log(b + '  b22');
                    }
                    // a = false
                    // block_show = false;
                }
            })
        }).resize();
    })
}
// alert(document.getElementById('pigination-consultation__end'));
// pigination('#pigination-swiper__start', '.pigination-swiper'); 
pigination('.swiper', '.pigination-swiper');
pigination('.aboutMe', '.pigination-aboutMe');
pigination('.consultation', '.pigination-consultation');
pigination('.freebie', '.pigination-freebie');
pigination('.projects', '.pigination-projects');
pigination('.books', '.pigination-books');
pigination('.media', '.pigination-aboutMe-media');
pigination('.contacts', '.pigination-contacts');
// .pigination-on.pigination-white
// var block_show = null;
// var block_show = document.getElementsByClassName('.pigination-on.pigination-white');
var block_show = null;
function scrollTracking(box, el) {
    var wt = $(window).scrollTop();
    // var wh = $(window).height();
    var et = $(box).offset().top,
        eh = $(box).outerHeight();

    // if (et >= wt && et + eh <= wh + wt) {
    if ((wt >= et - 150) && (wt < (et + eh - 150))) {
        $(el).addClass('pigination-on');
        if (block_show == null || block_show == false) {
            // if (($('.pigination-button').hasClass('pigination-on')) && ($('.pigination-button').hasClass(block_show))) {
            //   $('#console').html('Блок active полностью виден');
            console.log('я присутствую' + block_show);
            $('.pigination').addClass('white');
            $('.header').addClass('g');
        }
        block_show = true;
    } else {
        $(el).removeClass('pigination-on');
        if (block_show == null || block_show == true) {
            // if (($('.pigination-button').hasClass(block_show))) {
            console.log('меня нет на странице' + block_show);
            $('.pigination').removeClass('white');
            $('.header').removeClass('g');
            //   $('#console').html('');
        }
        block_show = false;
    }
}

function scroll(el1, el2) {
    $(window).scroll(function () {
        scrollTracking(el1, el2);
    });

    $(document).ready(function () {
        scrollTracking(el1, el2);
    });
}

// scroll('.swiper', '.pigination-swiper');
// scroll('.aboutMe', '.pigination-aboutMe');
// scroll('.consultation', '.pigination-consultation');
// scroll('.freebie', '.pigination-freebie');
// scroll('.projects', '.pigination-projects');
// scroll('.books', '.pigination-books');
// scroll('.media', '.pigination-aboutMe-media');
// scroll('.contacts', '.pigination-contacts');
// $(function() {
// $(document).ready(function () {

//     $(window).resize(function () {

//         var element=document.getElementsByClassName('.pigination-on.pigination-white'); 
//         if(element){alert('меня нет на странице');} else {alert('я присутствую');}

//         // $(document).scroll(function () {
//         //     var s = $(this).scrollTop();
//             // if (!element) {
//             //     $('.pigination').addClass('white');
//             // }
//             // else {
//             //     $('.pigination').removeClass('white');
//             // }
//         // }

//     }).resize();
// });
// })