$(document).ready(function(){
        $(".top_nava").hover(function(e){
            $(this).children(".dl").stop(true,false).fadeToggle(150);
            e.preventDefault();
        });
		
		$(".app").hover(function(e){
		    $(this).children(".app_c").stop(true,false).fadeToggle(150);
		    e.preventDefault();
		});
		
		$(".sitemap").hover(function(e){
		    $(this).children(".smapc").stop(true,false).fadeToggle(150);
		    e.preventDefault();
		});
		
		$(".area > dd").hover(function(e){
			$(".area > dd").children(".area-com").stop(true,false).fadeToggle(150);
			e.preventDefault();
		});
		
		
		$(".nav-pt > dd").hover(function(e){
			$(this).children(".snav_c").stop(true,false).fadeToggle(150);
			e.preventDefault();
		});
		
		$(".tsg_sc > li").mouseover(function(e){
			$(this).children(".buy_btn").css({"opacity":1});
		});
		
		$(".tsg_sc > li").mouseout(function(e){
			$(this).children(".buy_btn").css({"opacity":0});
		});
		
		$(".tsg_slidersc > li").mouseover(function(e){
			$(this).children(".buy_btn").css({"opacity":1});
		});
		
		$(".tsg_slidersc > li").mouseout(function(e){
			$(this).children(".buy_btn").css({"opacity":0});
		});

		$(".flr_ua > li > a").mouseover(function(e){
			$(this).children(".flr_ua_price").stop(true,false).fadeIn(300);
			$(this).children(".flr_ua_price").animate({"bottom":0},300);
			e.preventDefault();
		});
		
		$(".flr_ua > li > a").mouseout(function(e){
			$(this).children(".flr_ua_price").animate({"bottom":"-34px"},100);
			e.preventDefault();
		});
    });