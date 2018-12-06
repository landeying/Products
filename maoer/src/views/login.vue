<template>
    <div class="app-login">
        <div class="login-content">
    		<div class="login-main-content">
    			<!--登录页二维码-->
    			<div class="main-content-left">
    				<img src="img/login/downloadapp.png"/>
    			</div>
    			<!--登录注册框-->
    			<div class="main-content-right log-pos">
    				<form action="">
						<span class="login-title typ-cnv">登录 M站</span>
						<input type="text" placeholder="手机号/邮箱"/>
						<i class="icon-phone icon-size ipos typ-cnv"></i>
						<input type="password" placeholder=" 密码"/>
						<i class="icon-pwd icon-size ipos typ-cnv"></i>
    					<div class="check-row">
    						<input type="checkbox" checked="checked" class="log-pos"/>
    						<span class="typ-cnv">记住我</span>
    						<a>海外手机号登录</a>
    					</div>
						<input type="button" value="登录" class="login-row-left">
    					<a href="maoerRegister.html" class="login-row-right typ-cnv">注册</a>
    					<div class="check-container">
							<span class="log-pos">一键登录</span>
							<a href="#">
								<img src="img/login/M站登录.png" alt="qq登录">
							</a>
							<a href="#">
								<img src="img/login/blog-icon.png" alt="微博登录">
							</a>
							<a href="#">
								<img src="img/login/bilibili-icon.png" alt="哔哩哔哩登录">
							</a>
						</div>
    				</form>
    			</div>
    		</div>
		</div>
    </div>
</template>
<script>

</script>
<style>
.login-content{
	margin: 0;
}
.main-content-right input,.login-title{
	box-sizing: border-box;
}
.login-main-content{
	overflow: hidden;
}
.log-pos{
	position: relative;
}
.login-row-right{	
	text-align: center;
	line-height: 50px;
	width: 200px;
	height: 50px;
	border-radius: 5px;
}
.login-row-left,.login-row-left:hover{
	color: #fff;
}
.login-row-right,.login-row-right:hover{
	color: #000;
}
.login-main-content{
	margin: 0 auto;
	width: 1190px;
}
.login-title{
	font: 22px "微软雅黑";
	padding:0 0 20px 14px;
}
.main-content-right{
	float: right;	
	height: 547px;
	right: 170px;
}
.main-content-right>form{
	width: 460px;
	height: 399px;
	margin-top: 23px;
}
.main-content-left{
	float: left;
	height: 300px;
	width: 497px;
}
.main-content-right input{
	width: 440px;
	height: 45px;
	padding: 5px 10px 5px 32px;
	margin-left: 13px;
	border-radius: 5px;
	border: 1px solid#e0e0e0;
}
.icon-size{
	top:-34px;
    left:-42%;
}
.icon-phone{
	background-position: -488px -366px;
}
.icon-pwd{
	background-position: -513px -133px;
}
.check-row{
	font: 15px "微软雅黑";
	overflow: hidden;
}
.check-row>input{
	width: 19px;
	height: 19px;
	margin: 0; 
	top: 4px;
	left: 16px;
}
.check-row>span{	
	margin-left: 18px;
	margin-right: 256px;
}
input.login-row-left{
	background-color: #c14a3f;
	margin: 22px 33px 0px 15px;
	padding: 0;
	text-align: center;
	line-height: 50px;
	width: 200px;
	height: 50px;
	border-radius: 5px;
	font-size: 15px;
}
.login-row-right{		
	background-color: #fff;	
	border: 1px solid#e0e0e0;
}
.check-container{		
	width: 430px;
	height: 88px;
	border-top: 1px solid #e0e0e0;
	margin: 30px 0px 0px 18px;
}
.check-container>span{
	font: 15px "微软雅黑";
	margin-right: 30px;
	top:-14px;
}
.check-container>a>img{
	margin: 10px 17px 0 17px;
}

</style>