/**
 * Created by Administrator on 2017/5/27 0027.
 */
$(function () {
	$("#btn").on("click",function () {
		$.ajax({
			url:'http://localhost/mmloo/login.php',
			type:'post',
			data:{
				'uphone':$("#txt").val(),
				'upwd':$("#pwd").val()
			},
			success:function (res) {
				//	console.log(res);
				var obj=JSON.parse(res);
				console.log(obj);
				if(obj.status==1){
					alert(obj.msg);
				}else {
					alert(obj.msg);
				}
			}
		})
	})
	$("#btn2").on("click",function () {
		window.location.href="zuce.html";
	})
})