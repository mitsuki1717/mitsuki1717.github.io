$(function(){

    $('.slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        // adaptiveHeight: true,
        dots: false,
        fade: true,
        speed:3000,
        pauseOnHover: false
    });

    $(window).on('scroll', function(){
        //上からのスクロール値
        var dy = $(this).scrollTop(); //dy = document Y

        if(dy >= 10){
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0.4)');
        }else{
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0)');
        }
    });

});
