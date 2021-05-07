$(function(){

    $(window).on('scroll', function(){

        var dy = $(this).scrollTop(); //dy = document Y

        var seisanshaTop = $('.seisansha').find('p').offset().top+100;

        if(dy >= seisanshaTop - $(window).height()){
            $('.seisansha').find('p').addClass('fade-in');
        }
        if(dy >= 10){
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0.4)');
        }else{
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0)');
        }

    });


});
