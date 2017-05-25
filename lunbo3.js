/**
 * Created by Administrator on 2017/5/24 0024.
 */
$(function () {
	var num=0;
	setInterval(function () {
		num++;
		$(".list-right-1-1>ul").animate({"left":num*-382},500,function () {
			if(num>=4){
				$(".list-right-1-1>ul").css("left",0);
				num=0;
			}
		})
		
	},4000)
	$(".spa-l").on("click",function () {
		num++;
		if(num==4){
			$(".list-right-1-1>ul").css("left",0);
			num=1;
		}
		$(".list-right-1-1>ul").animate({"left":num*-382},500)
		
	})
	$(".spa-r").on("click",function () {
		num--;
		if(num<=0){
			$(".list-right-1-1>ul").css("left",-1528);
			num=3;
		}
		$(".list-right-1-1>ul").animate({"left":num*-382},500)
		
	})
})