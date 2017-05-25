/**
 * Created by Administrator on 2017/5/20 0020.
 */
$(function () {
	$(".ban-left").on("mouseenter",function () {
		$(".span-l").show();
		$(".span-r").show();
		var num=5;
		$(".span-l").on("click",function () {
		//	num++
			// $(".pic>li").eq(num).css("z-index",1).fadeIn(1000,function () {
			// 	$(this).siblings().fadeOut(1000,function () {
			//
			// 	}).css("z-index",0)
			//
			// 	$(".pic>li").eq(num++).css("z-index",1)
			// })
			if(num>0){
				$(".pic>li").css("z-index",0)
				
				$(".pic>li").eq(num).css("z-index",1);
				$(".pic>li").eq(num).fadeOut(500,function () {
					num--;
					$(".pic>li").css("z-index",0);
					$(".pic>li").css("display","block");
					$(".pic>li").eq(num).css("z-index",1);
					$(".pic>li").eq(num).fadeIn(500);
				})
				
			}else {
				return false;
			}
			
			
		})
		$(".span-r").on("click",function () {
			if(num<5){
				$(".pic>li").css("z-index",0);
				$(".pic>li").eq(num).css("z-index",1);
				$(".pic>li").eq(num).fadeOut(500,function () {
					num++;
					$(".pic>li").css("z-index",0);
					$(".pic>li").css("display","block")
					$(".pic>li").eq(num).css("z-index",1);
					$(".pic>li").eq(num).fadeIn(500)
					
				})
				
			}else {
				return false;
			}
			
		})
		
	})
	$(".ban-left").on("mouseleave",function () {
		$(".span-l").hide();
		$(".span-r").hide();
	});
	
	$(".uul>li").on("mouseenter",function () {
	//	console.log($(this).index());
		$(".pic>li").css("z-index",0);
		$(".pic>li").eq($(this).index()).css("z-index",1);
		$(this).css("background","rgba(0,0,0,0.5)").siblings()
			.css("background","rgba(0,0,0,0.1)")
	})
	$(".uul>li").on("mouseleave",function () {
		$(".uul>li").css("background","rgba(0,0,0,0.1)")
	})
})