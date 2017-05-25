/**
 * Created by Administrator on 2017/5/24 0024.
 */
$(function () {
	var num=0;
	setInterval(function () {
		num++;
		$(".list-left-3>ul").animate({"top":num*-50},500)
		if(num>=5){
			$(".list-left-3>ul").css("top",0);
			num=1;
		}
	},3000)
	$(".sp-l").on("click",function () {
		num++;
		if(num<6){
			$(".list-left-3>ul").animate({"top":num*-50},500)
		}else {
			num=5;
		}
	})
	$(".sp-r").on("click",function () {
		num--;
		if(num>=0){
			$(".list-left-3>ul").animate({"top":num*-50},500)
		}else {
			num=0;
		}
	})
})