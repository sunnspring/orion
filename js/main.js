$(document).ready(function(){
    $('.s_box').slick({
        autoplay:false,
        autoplaySpeed:1000,
        infinite: true,
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        variableWidth: true
    });
    
    $(".menu").hide();
    
    $(".menu_bar").click(function(){
        $(".menu").fadeIn();
    })
    $(".xx").click(function(){
        $(".menu").fadeOut();
    })
    
});

