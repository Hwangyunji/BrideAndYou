$(function () {

    let num = 0;

    setInterval(function () {
        num++;
        if (num > 3) {
            num = 0;
        }
        $('.slideImg').eq(num).siblings().fadeOut();
        $('.slideImg').eq(num).fadeIn();
    }, 3000);


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    $('.gotop').click(function(){
        $('html, body').animate({scrollTop:0},400);
        return false;
    });

}); // $