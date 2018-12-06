<template>
    <div class='app-channel'>
        <div class="carousel-right">
            <div class="carousel-right-content">
                <div class="cal-r-top">
                    <a href="#" class="floatLeft icon-common" title="3D音乐盛宴">3D音乐盛宴</a>
                    <div class="story-intro floatLeft">不是1D不是2D哦</div>
                    <div class="cal-r-atte">＋关注</div>
                </div>
                <div class="cal-r-btm">
                    <div class="floatLeft story-pic" v-for='item in 4'>
                        <a href="#" title="3D唯美男声双声道《东风志》魔道祖师 木木的3D音乐实验室">
                            <div>
                                <img src="img/body/1.jpg" >
                            </div>
                        </a>
                        <div class="cal-r-btm-title">
                            <a href="#" title="3D唯美男声双声道《东风志》魔道祖师 木木的3D音乐实验室" class="changeColor" >3D唯美男声双声道《东风志》魔道祖师 木木的3D音乐实验室</a>
                        </div>
                    </div>						
                </div>
            </div>	
            <div class="cal-r-more">
                <a href="#">更多内容</a>
            </div> 
        </div>		    	
    </div>
</template>
<script>
</script>
<style>
/*轮播图右侧展示区*/
.carousel-right{
	width: 507px;
	height: 224px;
	float: right;
	border: 2px solid black;
	border-radius: 5px;
	padding: 15px 45px 15px 15px;
	box-sizing: border-box;
}
.carousel-right>.carousel-right-content{
	overflow: hidden;
	width: 100%;
	height: 100%;
}
.floatLeft{
	float: left;
}
.carousel-right .story-pic{
	width: 90px;
	height: 130px;
	margin-right: 20px;
	font-size: 12px;
	overflow: hidden;
}
.carousel-right>.carousel-right-content>.cal-r-top>.cal-r-atte{
	display: inline-block;
	width: 50px;
	height: 22px;
	background: #c14a3f;
	position: relative;
	color: white;
	border: 1px solid transparent;
	cursor: pointer;
	border-radius:5px;
	font-size: 12px;
	vertical-align: middle;
	text-align: center;
	line-height: 22px;
    white-space: nowrap;
    right: -61px;
    font-weight: 400;
   
}
.carousel-right>.carousel-right-content>.cal-r-top>.cal-r-atte:hover{
	background: #bb282e;
}
.cal-r-btm-title>a{
	color: black;
	display: block;
	line-height: 18px;
	width: 90px;
	height: 36px;
	padding-top: 4px;
}
.changeColor:hover{
	color: #F25D8E!important;
}
.carousel-right>.carousel-right-content>.cal-r-top{
	padding-bottom: 15px;
	border-bottom: 1px solid #ddd;;
}
.carousel-right>.carousel-right-content>.cal-r-btm{
	padding-top: 18px;
}
.carousel-right .cal-r-top{
	position: relative;
}
.carousel-right .cal-r-top>a{
	padding-left: 60px;
	font-size: 18px;
	color: #666;
	box-sizing: border-box;
	position: relative;
}
.carousel-right .cal-r-top>.story-intro{
    height: 17px;
    max-width: 180px;
    min-height: 17px;
    margin: 5px 0 0 20px;
    color: #999;
    font-size: 12px;
    overflow: hidden;
}
.carousel-right .cal-r-top>a::before{
	width: 50px;
	height: 20px;
	background-position: -148px -332px;
	position: absolute;
	left: 0;
	top: 0;
}
.cal-r-more{
	position: relative;
	width:30px;
	height: 216px;
	top: -205px;
	right: -103%;
	text-align: center;
	background: #333;
	border:2px black solid;
	border-radius: 0 5px 5px 0;
}
.cal-r-more>a{
	display: inline-block;
	color: #fff;
	padding-top: 50px;
}
</style>