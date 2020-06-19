
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
function pigination(start, end, el) {
    $(document).ready(function () {
        $(window).resize(function () { 
            var s_body = $(start).offset();
            var e_body = $(end).offset();
            $(document).scroll(function () {
                var y = $(this).scrollTop();
                if ((y >= s_body.top) && (y < e_body.top)) {
                    $(el).addClass('pigination-on'); 
                }
                else {
                    $(el).removeClass('pigination-on'); 
                }
            }) 
        }).resize();
    })
} 
pigination('#pigination-swiper__start','#pigination-swiper__end','.pigination-swiper');
pigination('#pigination-aboutMe__start','#pigination-aboutMe__end','.pigination-aboutMe');
pigination('#pigination-consultation__start','#pigination-consultation__end','.pigination-consultation');
pigination('#pigination-freebie__start','#pigination-freebie__end','.pigination-freebie');
pigination('#pigination-projects__start','#pigination-projects__end','.pigination-projects');
pigination('#pigination-books__start','#pigination-books__end','.pigination-books');
pigination('#pigination-aboutMe-media__start','#pigination-aboutMe-media__end','.pigination-aboutMe-media');
pigination('#pigination-contacts__start','#pigination-contacts__end','.pigination-contacts');
