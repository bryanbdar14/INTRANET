$(document).ready(function () {
    if($('.menu li.pantalla-inicial').hasClass('active')){
        $('#myModal').modal("show");
    }
    $(function () {
        $('#triple').tooltip()
    });
    $('.back-to').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},500);
    });
    $('.icon-hamburger').on('click', function () {
        $('.menu').toggleClass('active');
        $('.content').toggleClass('active');
    });
    $('.alumno-collapse').on('click', function () {
        $('.list-active_second').toggleClass('active');
    });
    if($('.menu li').hasClass('active')){
        $('.menu li.active ul').slideDown(0);
    }
    $('.menu li a').on('click', function () {
        if($(this).parent().hasClass('active')){
            $(this).siblings('ul').slideUp(0);
            $('.menu li').removeClass('active');
        }
        else{
            if($('.menu li').hasClass('active')){
                $('.menu li').removeClass('active');
                $('.menu li ul').slideUp(0);
            }
            $(this).siblings('ul').slideDown(0);
            $(this).parent().addClass('active');
            $(this).parent().addClass('active')
        }
    });
    $('#opciones-otro').on('click',function(){
        $('.inputdisabled').prop("disabled", false);
        $('.inputdisabled').addClass('activado')
    });
    $('.radios').on('click',function(){
        if($('.inputdisabled').hasClass('activado')){
            $('.inputdisabled').prop("disabled", true);
            $('.inputdisabled').removeClass('activado')
        }
    });
    $('[data-toggle="popover"]').popover();
});