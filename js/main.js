$(document).ready(function(){
$('.header').height($(window).height());
})

/*Частина 10. Ефекти прокручування*/
$(".navbar a").click(function(){
$("body,html").animate({
scrollTop:$("#" + $(this).data('value')).offset().top
},1000)

})