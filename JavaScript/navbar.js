$(function(){
    //  navbarの高さを取得
    var height = $('.navbar').height();
    $(window).on('load resize', function(){    
        // bodyにpadding-topをnavbarの高さで指定
        $('body').css('padding-top', height);
    });
});

