$(function(){

    $(window).on('scroll', function(){
        //上からのスクロール値
        var dy = $(this).scrollTop();

        if(dy >= 10){
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0.3)');
        }else{
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0)');
        }

    });

});
