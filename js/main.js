$(function () {

    //  show login form
    $('.log a').on('click', function (e) {
        e.preventDefault();
        if ($('.log-form').css('display') === "none") {
            $('.log-form').fadeIn();
            $(this).css('background-color', '#eee')
        } else {
            $('.log-form').fadeOut();
            $(this).css('background-color', '');
        }
    });

    //  hide login form when user click body
    $('html, body').on('click', function (e) {
        if ($(e.target).closest('.log a, .log-form').length)
            return;
        $('.log-form').fadeOut();
        $('.log a').css('background-color', '');
    });


    //  show search bar
    var srchBtn = $(".search");

    srchBtn.on('click', function () {

        $(this).prev('input').show()
            .parents('form').css({
                'width': '100%',
                'height': '100%'
            })
            .siblings(':not(#navlinks)').hide()
            .siblings('#navlinks').css({
                'visibility': 'hidden',
                'width': '0'
            });

    });

    //  close search bar
    $('html, body').click(function (e) {
        if ($(e.target).closest('input, i').length)
            return;

        srchBtn.fadeIn().next('i').hide().end()
            .prev('input').hide()
            .parents('form').css({ 'width': 'auto', 'height': 'auto' })
            .siblings().not('#navlinks').fadeIn()
            .siblings('#navlinks').css({
                'visibility': 'visible',
                'width': 'auto'
            });

    });

    //  reduce nav size when user scroll down
    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 45) {
            $('header').addClass('fixed-top');
            $('.navbar-brand').css('font-size', '1.3rem');
            $('.nav-item > a').removeClass('py-lg-5');
        } else {
            $('header').removeClass('fixed-top');
            $('.navbar-brand').css('font-size', '2.3rem');
            $('.nav-item > a').addClass('py-lg-5');
        }
    });


    //   show drop menu below nav links
    $(".dropdown-toggle").on('click', function (e) {
        e.preventDefault()
        $(this).parents('.dropdown').siblings('.dropdown').children(".dropdown-menu").fadeOut();

        if ($(this).siblings('.dropdown-menu').css('display') === "none") {
            $(this).siblings('.dropdown-menu').fadeIn();
        } else {
            $(this).siblings(".dropdown-menu").fadeOut();

        }
    });

    // hide drop menu when user click body
    $('html, body').on('click', function (e) {
        if ($(e.target).closest('.dropdown-toggle, .dropdown-menu').length === 1)
            return;
        $('.dropdown-menu').fadeOut();
    });


    //   toggle products  rows
    $('.products-area .title a').click(function () {
        $(this).addClass('active').parents('div').siblings().children('a').removeClass('active')
        $($(this).data('target')).fadeIn(300).siblings().fadeOut(300)
    });


});