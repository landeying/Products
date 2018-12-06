<template>
    <div class="app-register">
        <div class="reg-content">
        <form class="reg-main-content">
            <span>注册账号</span>   
            <select class="reg-row area">
                <option>中国大陆</option>
                <option>美国</option>
                <option>加拿大</option>
            </select>
            <input type="text" placeholder="请输入手机号" class="reg-ph">
            <input type="text" placeholder="计算结果">
            <li class="icon-size inum ipos typ-cnv"></li>
            <img src="img/login/验证码.png" >
            <input type="text" placeholder="验证码">
            <li class="icon-size inum ipos typ-cnv"></li>
            <!-- <a href="#" class="reg-row get-vcode">点击获取验证码</a> -->
            <input type="button" value="点击获取验证码" class="get-vcode">    
            <input type="text" placeholder="昵称" class="inp-size ">
            <li class="icon-size iname ipos typ-cnv"></li>
            <input type="password" autocomplete="off" placeholder="密码" class="inp-size ">
            <li class="icon-size ipwd ipos typ-cnv"></li>
            <input type="checkbox" class="ck">我已同意
            <a href="#" class="reg-size">《M站使用协议》</a>
            <!--<a href="#" class="inp-size reg-row reg inp-size">注册</a> -->
            <input type="button" value="注册" class="inp-size reg inp-size">
            <a href="#" class="reg-row reg-size">用邮箱账号注册</a>
            <a href="maoerLogin.html" class="reg-row reg-return">返回登录></a>
        </form>
    </div>     
    </div>
</template>
<script>

</script>
<style>
.app-register{
    
}
.reg-content{
    height: 600px;
}
.reg-main-content{
    width: 500px;
    height: 630px;
    margin: 100px auto;
}
.reg-main-content>span{
    display: block;
    margin-left:13px; 
    font-size: 20px;
}
.reg-main-content .area{
    width: 155px;
    height: 45px;
    padding-left: 15px;
}
.reg-ph{
    width: 253px;
}
.reg-main-content .reg-row{
    display: inline-block;  
}
.reg-main-content>input,.area{
    box-sizing: border-box;
    height: 45px;
    border:1px solid #e0e0e0;
    border-radius: 5px;
    margin:13px;
    padding: 5px 10px 5px 32px; 
}
.reg-main-content>a,input.reg{
    text-align: center;
    line-height: 45px;
    color: #fff;
}
.inp-size{
    width: 440px;
    height: 45px;
    border-radius: 5px;
}
.reg-main-content>input.reg{
    margin:13px;
    background: #c14a3f;   
    font-size: 15px;
    line-height: 38px;
    padding: 0;
}
.reg-main-content>input.get-vcode{
    text-align: center;
    line-height: 15px;
    font-size: 15px;
    color: #fff;
    margin-left:2px;
    width: 200px;
    background: #424242; 
    border-radius: 5px;  
    padding: 0px;  
}
.reg-main-content img{
    position: relative;
    top: 17px;
}
.reg-main-content .reg-size{
    color:#a89ea8;
    margin-left: 13px;
}
.reg-main-content .ck{
    width: 20px;
    height: 20px;
}
.reg-main-content .reg-return{
    color: black;
    margin-left: 250px;
}
.inum{
    background-position: -472px -476px;
    top: 7px;
    left: -205px;
}
.iname,.ipwd{
    top: 5px;
    left: -447px;
}
.iname{
    background-position: -488px -341px;
}
.ipwd{
	background-position: -513px -133px;
}

</style>