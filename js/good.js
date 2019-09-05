$(document).ready(function(){
    $(".area_b").hover(function(e){
		$(this).children().eq(1).stop(true,false).fadeToggle(150);
		e.preventDefault();
	});

	$(".quick-menu > dl").hover(function(e){
		$(this).children("dd").stop(true,false).fadeToggle(150);
		e.preventDefault();
	});
	
	$(".nav-pt").hover(function(e){
		$(this).children(".nav-pt > dd").stop(true,false).fadeToggle(150);
		e.preventDefault();
	});
    
    $(".nav-pt > dd").hover(function(e){
		$(this).children(".snav_c").stop(true,false).fadeToggle(150);
		e.preventDefault();
	});

});