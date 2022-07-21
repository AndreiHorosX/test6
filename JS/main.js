

$(function(){
$('button').click(function(){
    window.alert('Fabulous !!!')
    });

     $('#y1').slideUp(2000).slideDown(1000);

$('img').hide(2000).show(3000);


$(".f1").fadeOut(2000).fadeIn(3000)


$(".header__logo").fadeTo(4000,0.2).fadeTo(2000,1)


$('#k2').html('<b>THE BEST WEBSITE </b>');

$(".j2").keypress(function(){
    alert("write your name ")
})


$(".j3").keypress(function(){
    alert("write your number")
})

$('.main__welcome').mousemove(function(){
    alert('the best company in the world')
})



});