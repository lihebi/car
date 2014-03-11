$(document).ready(function(){
    // easing
    $.easing.def = "easeOutBack";
    $("#logo").animate({left: '120px'}, 1000); //若用320px，必须加引号。320则不用
    
    //slide show 3 image
    var $stopall = function(){
	$('#zijiaimg').stop(false, true);
	$('#shangwuimg').stop(false, true);
	$('#hunqingimg').stop(false, true);
    };
    $('#zijia').mouseenter(function(){
	$stopall();
	$('#zijiaimg').slideDown();
	$('#zijia').addClass('current');
    }).mouseleave(function(){
	$('#zijiaimg').slideUp();
	$('#zijia').removeClass('current');
    });
    $('#shangwu').mouseenter(function(){
	$stopall();
	$('#shangwuimg').slideDown();
	$('#shangwu').addClass('current');
    }).mouseleave(function(){
	$('#shangwuimg').slideUp();
	$('#shangwu').removeClass('current');
    });
    $('#hunqing').mouseenter(function(){
	$stopall();
	$('#hunqingimg').slideDown();
	$('#hunqing').addClass('current');
    }).mouseleave(function(){
	$('#hunqingimg').slideUp();
	$('#hunqing').removeClass('current');
    });


    // smooth scroll to 3 sections
    $('#zijia').click(function(){
	$.smoothScroll({scrollTarget: '#second', speed: 400});
    });
    $('#shangwu').click(function(){
	$.smoothScroll({scrollTarget: '#third', speed: 400});
    });
    $('#hunqing').click(function(){
	$.smoothScroll({scrollTarget: '#fourth', speed: 400});
    });
    $('#sectionmenu a').smoothScroll();
    slyoperation(0);
    slyoperation(1);
    slyoperation(2);
    $(window).scroll(function(){
	if ($(document).scrollTop()>200) {
	    $('#header').addClass('small');
	    $('#logo').addClass('small');
	}
	if ($(document).scrollTop()<200) {
	    $('#header').removeClass('small');
	    $('#logo').removeClass('small');
	}
    });

    //login
    $('#login').click(function(){
	$('#loginarea').modal();
    });
});

function slyoperation(i) {
    var $frame = $('.slyframe').eq(i);
    var $slide = $frame.children('ul').eq(0);
    var $wrap = $frame.parent();
    $frame.sly({
	horizontal: 1,
	itemNav: 'basic',
	smart: 1,
	activateOn: 'click',
	mouseDragging: 1,
	releaseSwing: 1,
	startAt: 3,
	scrollBar: $wrap.find('.slyscrollbar'),
	//scrollBy: 1,
	pagesBar: $wrap.find('.slypages'),
	activatePageOn: 'click',
	speed: 300,
	elasticBounds: 1,
	easing: 'easeOutExpo',
	drapHandle: 1,
	dynamicHandle: 1,
	clickBar: 1
    });
};
