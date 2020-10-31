$(function(){
    //  navbarの高さを取得
    var height = $('.navbar').height();
    $(window).on('load resize', function(){    
        // bodyにpadding-topをnavbarの高さで指定
        $('body').css('padding-top', height);
    });

    // function pagelink(heightnum) {
    //     var headerH = heightnum;
    //     $("a.anchorlink").click(function(){
    //         var href = $(this).attr("href");
    //         var target = $(href == "#" || href == "" ? "body" : href);
    //         var position = target.offset().top - headerH;
    //         $("html, body").animate({ scrollTop: position }, 500, "swing");
    //         //return false;
    //     });
    // }
    // pagelink(height);
});

