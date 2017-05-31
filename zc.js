/**
 * Created by Administrator on 2017/5/27 0027.
 */
$(function () {
	
		var flag=true;
		$("#txt1").on("blur",function () {
			//	console.log(this);
			var reg=/^\d{11}$/g;
			if(reg.test(this.value)){
				$("#show")[0].innerHTML=""
			}else {
				$("#show")[0].innerHTML="手机号码为11位"
				flag=false;
			}
		})
		$("#txt2").on("blur",function () {
			var reg=/^\w{6,20}$/g;
			if(reg.test(this.value)){
				$("#show")[0].innerHTML=""
			}else {
				$("#show")[0].innerHTML="密码长度在6-20字符之间"
				flag=false;
			}
		})
	
		$("#btn2").on("click",function () {
			if(!$("#check")[0].checked){
				flag=false;
			}
			if(flag){
				$.ajax({
					url:'http://localhost/mmloo/zc.php',
					type:'post',
					data:{
						'uphone':$("#txt1").val(),
						'upwd':$("#txt2").val(),
						'uyz':$("#txt3").val(),
						'udyz':$("#txt4").val(),
						'ufriend':$("#txt5").val()
					},
					success:function (result) {
						console.log(JSON.parse(result));
						if(JSON.parse(result)[0]){
							//		alert("注册成功!");
							window.location.href="login.html"
						}
					}
				})
			}
			flag=true;
		})
})