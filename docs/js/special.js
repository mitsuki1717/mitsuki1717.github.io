$(function(){

    $(window).on('scroll', function(){
        //上からのスクロール値
        var dy = $(this).scrollTop(); //dy = document Y

        var specialTop = $('.special').find('.text1').offset().top+300;

        if(dy >= specialTop - $(window).height()){
            $('.special').find('.text1').addClass('fade-in');
        }

        var specialTop2 = $('.special').find('.seisansha').offset().top+300;

        if(dy >= specialTop2 - $(window).height()){
            $('.special').find('.seisansha').addClass('fade-in');
        }

        var specialTop3 = $('.special').find('.text2').offset().top+300;

        if(dy >= specialTop3 - $(window).height()){
            $('.special').find('.text2').addClass('fade-in');
        }

        var specialTop4 = $('.special').find('#rice').offset().top+500;

        if(dy >= specialTop4 - $(window).height()){
            $('.special').find('#rice').addClass('fade-in');
        }
        if(dy >= 10){
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0.4)');
        }else{
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0)');
        }

    });


});
