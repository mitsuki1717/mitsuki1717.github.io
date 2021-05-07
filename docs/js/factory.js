$(function(){


    $(window).on('scroll', function(){
        //上からのスクロール値
        var dy = $(this).scrollTop(); //dy = document Y
        console.log(dy);

        //.hajimeni #main height
        var hajimeniMainTop = $('.factory').find('.seisan1').offset().top;
        // console.log(hajimeniMainTop);

        if(dy >= hajimeniMainTop - $(window).height()){
            $('.factory').find('.seisan1').addClass('fade-in');
        }

        //.hajimeni #main height
        var hajimeniMainTop2 = $('.factory').find('.seisan2').offset().top+400;
        // console.log(hajimeniMainTop);

        if(dy >= hajimeniMainTop2 - $(window).height()){
            $('.factory').find('.seisan2').addClass('fade-in');
        }

        var hajimeniMainTop3 = $('.factory').find('.seisan3').offset().top+400;
        // console.log(hajimeniMainTop);

        if(dy >= hajimeniMainTop3 - $(window).height()){
            $('.factory').find('.seisan3').addClass('fade-in');
        }

        var hajimeniMainTop4 = $('.factory').find('.seisan4').offset().top+400;
        // consolelog(hajimeniMainTop);

        if(dy >= hajimeniMainTop4 - $(window).height()){
            $('.factory').find('.seisan4').addClass('fade-in');
        }

        var hajimeniMainTop5 = $('.factory').find('.seisan5').offset().top+400;
        // console.log(hajimeniMainTop);

        if(dy >= hajimeniMainTop5 - $(window).height()){
            $('.factory').find('.seisan5').addClass('fade-in');
        }

        var hajimeniMainTop6 = $('.factory').find('.seisan6').offset().top+400;
        // console.log(hajimeniMainTop);

        if(dy >= hajimeniMainTop6 - $(window).height()){
            $('.factory').find('.seisan6').addClass('fade-in');
        }
        if(dy >= 10){
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0.4)');
        }else{
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0)');
        }

    });

});
