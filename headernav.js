/**
 * Created by Administrator on 2017/5/20 0020.
 */
$(function () {
	$("#header>.right li").on("mouseenter",function () {
		var $ul=$("<ul></ul>");
		$ul.css("background","#fff")
		$ul.appendTo($(this))
		var $li=$("<li></li>");
		$li.appendTo($ul);
		var $a=$("<a href='#'>商品店铺</a>")
		$a.appendTo($li);
		var $li1=$("<li></li>");
		$li1.appendTo($ul);
		var $a1=$("<a href='#'>店铺收藏</a>")
		$a1.appendTo($li1);
		var $li2=$("<li></li>");
		$li2.appendTo($ul);
		var $a2=$("<a href='#'>收藏米米乐</a>")
		$a2.appendTo($li2);
	})
	$("#header>.right li").on("mouseleave",function () {
		$(this).children("ul").remove()
	})
})