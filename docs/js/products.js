$(function(){

    $(window).on('scroll', function(){
        //上からのスクロール値
        var dy = $(this).scrollTop(); //dy = document Y


        var productsTop = $('.products').find('#uonuma').offset().top+300;

        if(dy >= productsTop - $(window).height()){
            $('.products').find('#uonuma').addClass('fade-in');
        }

        var productsTop2 = $('.products').find('#niigata').offset().top+300;

        if(dy >= productsTop2 - $(window).height()){
            $('.products').find('#niigata').addClass('fade-in');
        }

        var productsTop3 = $('.products').find('#niigata-white').offset().top+300;

        if(dy >= productsTop3 - $(window).height()){
            $('.products').find('#niigata-white').addClass('fade-in');
        }

        var productsTop4 = $('.products').find('#mochi').offset().top+300;

        if(dy >= productsTop4 - $(window).height()){
            $('.products').find('#mochi').addClass('fade-in');
        }

        var productsTop5 = $('.products').find('#shinnosuke').offset().top+300;

        if(dy >= productsTop5 - $(window).height()){
            $('.products').find('#shinnosuke').addClass('fade-in');
        }

        if(dy >= 10){
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0.4)');
        }else{
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0)');
        }

    });



});
