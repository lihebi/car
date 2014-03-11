$(document).ready(function(){
    slyoperation();
});

function slyoperation() {
    var $frame = $('.slyframe').eq(0);
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
	scrollBy: 1,
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
