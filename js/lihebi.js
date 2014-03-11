$(document).ready(function(){
    $.easing.def = "easeOutBack";
    $("#logo").animate({left: '120px'}, 1000); //若用320px，必须加引号。320则不用
    var $stopall = function(){
	$('#zijiaimg').stop(false, true);
	$('#shangwuimg').stop(false, true);
	$('#hunqingimg').stop(false, true);
    };
    $('#zijia').mouseenter(function(){
	$stopall();
	$('#zijiaimg').slideDown();
    }).mouseleave(function(){
	$('#zijiaimg').slideUp();
    });
    $('#shangwu').mouseenter(function(){
	$stopall();
	$('#shangwuimg').slideDown();
    }).mouseleave(function(){
	$('#shangwuimg').slideUp();
    });
    $('#hunqing').mouseenter(function(){
	$stopall();
	$('#hunqingimg').slideDown();
    }).mouseleave(function(){
	$('#hunqingimg').slideUp();
    });
});
