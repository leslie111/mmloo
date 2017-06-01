/**
 * Created by Administrator on 2017/5/26 0026.
 */
$(function () {
	$(".adad-nav1>ul>li").on("mouseenter",function () {
		console.log($(this).index());
		$(this).addClass("blue").siblings().removeClass("blue");
		$(".adadad1>div").eq($(this).index()).css("display","flex")
			.siblings().css("display","none");
	})
})

$(function () {
	$(".adad-nav2>ul>li").on("mouseenter",function () {
		console.log($(this).index());
		$(this).addClass("blue").siblings().removeClass("blue");
		$(".adadad2>div").eq($(this).index()).css("display","flex")
			.siblings().css("display","none");
	})
})

$(function () {
	$(".adad-nav3>ul>li").on("mouseenter",function () {
		console.log($(this).index());
		$(this).addClass("blue").siblings().removeClass("blue");
		$(".adadad3>div").eq($(this).index()).css("display","flex")
			.siblings().css("display","none");
	})
})

$(function () {
	$(".adad-nav4>ul>li").on("mouseenter",function () {
		console.log($(this).index());
		$(this).addClass("blue").siblings().removeClass("blue");
		$(".adadad4>div").eq($(this).index()).css("display","flex")
			.siblings().css("display","none");
	})
})
$(function () {
	$("#hot>ul>li").on("click",function () {
		window.location.href="详情页.html";
	})
})