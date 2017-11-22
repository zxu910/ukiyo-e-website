$(document).ready(function(){

$('#start').fadeOut(1500);

$("#navi").show(),
$('#rwd-hamberger').click(function(){

    $('#navi').slideToggle();



    })

    $('#navi').children("li").click(function(){
        
            $(this).children('ul').stop().slideDown(300);
           
        }),
        
        $('#navi').children("li").mouseleave(function(){
        
            $(this).children('ul').stop().slideUp(600);
    
})




})




  