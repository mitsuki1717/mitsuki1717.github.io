$(function(){

    $(window).on('scroll', function(){
        //上からのスクロール値
        var dy = $(this).scrollTop(); //dy = document Y
        console.log(dy);

        //.hajimeni #main height
        var hajimeniMainTop = $('.hajimeni').find('#main').offset().top;
        // console.log(hajimeniMainTop);

        if(dy >= hajimeniMainTop - $(window).height()){
            $('.hajimeni').find('p').addClass('fade-in');
        }
        if(dy >= 10){
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0.4)');
        }else{
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0)');
        }

    });

});
