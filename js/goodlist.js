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

	$(".serv_tp > h4 > span").hover(function(e){
        $(this).children("a").stop(true,false).fadeToggle(150);
        e.preventDefault();
	});

    $(".left_classify_inner").click(function(){
        if($(this).children("h3").children("a").css("color","#333")){
            $(this).children("ul").fadeToggle(150,()=>{
                $(this).children("h3").children("b").css("transform","rotate(90deg)");
                $(this).children("h3").children("a").css("color","red");
            });
        }
        // }else if($(this).children("h3").children("a").css("color","red")){
        //     $(this).children("ul").fadeOut(150,()=>{
        //         $(this).children("h3").children("b").css("transform","rotate(0deg)");
        //         $(this).children("h3").children("a").css("color","#333");
        //     });
        // }
	})
	

	$.get("../php/getGoodsList.php",function(data){
		let htmlStr="";
		for(let i=0;i<data.length;i++){
			htmlStr+=`
			<li class="item">
				<div class="goods-content">
					<div class="goods-pic">
						<a href="good.html?goodsId=${data[i].goodsId}" 
						
					 		title="${data[i].goodsName}"><img src="${data[i].goodsImg}" title="${data[i].goodsName}"/></a>
					</div>
					<div class="goods-info">
						<div class="goods-pic-scroll-show">
							<ul>
								<li class="selected">
									<a href="#"><img src="${data[i].beiyong2}"/></a>
								</li>
								<li>
									<a href="#"><img src="${data[i].beiyong3}"/></a>
								</li>
								<li>
									<a href="#"><img src="${data[i].beiyong4}"/></a>
								</li>
							</ul>
						</div>
						<div class="goods-price">
							<em class="sale-price" title="商城价：¥${data[i].goodsPrice}">¥${data[i].goodsPrice}</em>
							<em class="market-price" title="市场价：${data[i].beiyong1}">${data[i].beiyong1}</em>
						</div>
						<div class="goods-name">
							<a href="#" title="${data[i].goodsDesc}" target="_blank">${data[i].goodsName}</a>
						</div>
						<div class="sell-stat">
							<span style="color: #999;">商品销量</span>
							<span>${data[i].goodsCount}</span>
						</div>
						<div class="l-commit"></div>
						<div class="l-adds">
							<a href="#" class="add-collection"><i></i>收藏商品</a>
							<div class="add-cart">
								<a href="#" class="add-carts"><i></i>加入购物车</a>
							</div>
						</div>
					</div>
				</div>
			</li>
		`;
		}
		$(".list_pic").html(htmlStr);
		
	},"json");
});