$(function(){

    $('.log a').on('click', function(){

        if($(this).siblings('.log-form').css('display') == "none"){
            $(this).siblings('.log-form').fadeIn();
            $(this).css('background-color', '#eee')
        }else if($(this).siblings('.log-form').css('display') == "block"){
            $(this).siblings('.log-form').fadeOut();
            $(this).css('background-color', '');
        }

    });

    $('html, body').on('click', function(e){
        if($(e.target).closest('.log a, .log-form').length)
            return;
        if($('.log a').siblings('.log-form').css('display') == "block"){
            $('.log a').siblings('.log-form').fadeOut();
            $('.log a').css('background-color', '');
        }
    });

    var srchBtn = $('.search');

    srchBtn.on('click', function(){

            $(this).prev('input').show()
            .parents('form').css({
                'width': '93%',
                'height': '100%'
            })
            .siblings(':not(#navlinks)').hide()
            .siblings('#navlinks').css({
                'visibility': 'hidden',
                'width': '0'
            });

    });

    $('html, body').click(function(e){    
            if($(e.target).closest('input, i').length)
                return;

                srchBtn.fadeIn().next('i').hide().end()
                .prev('input').hide()
                .parents('form').css({'width': 'auto', 'height': 'auto'})
                .siblings().not('#navlinks').fadeIn()
                .siblings('#navlinks').css({
                    'visibility': 'visible',
                    'width': 'auto'
                });
 
    });

    $(window).on('scroll', function(){

        if($(this).scrollTop() > 45 && $(this).outerWidth() >= 992){
            $('header').addClass('fixed-top');
            $('.navbar-brand').css('font-size', '1.3rem');
            $('.nav-item > a').removeClass('py-lg-5');
        }else{
            $('header').removeClass('fixed-top');
            $('.navbar-brand').css('font-size', '2.3rem');
            $('.nav-item > a').addClass('py-lg-5');
        }
    });


    $('.dropdown').on({
        'mouseenter' : function(){
            if($(this).children('.dropdown-menu').css('display') == 'none'){
                $(this).children('.dropdown-menu').fadeIn();

            }
            
        },

        'mouseleave' : function(){

            if($(this).children('.dropdown-menu').css('display') == 'block'){
                $(this).children('.dropdown-menu').fadeOut();

            }
            

        }
    });


    $('.title a').click(function(){
        $(this).addClass('active').parents('div').siblings().children('a').removeClass('active')
        $($(this).data('target')).fadeIn(300).siblings().fadeOut(300)
    });


});