<template>
    <div class="app-ranking">
        <div class="ranking-list">
            <div class="rl-top">
                <span>排行</span>
                <ul class="rl-list">
                    <li class="area-active">本周</li>
                    <li>三日</li>
                </ul>
            </div>
            <div class="rl-middle">
                <ul>
                    <li class="rl-top-one">
                        <div class="rl-one-main">
                            <a href="#" class="rl-pic">
                                <div class="rl-color">1</div>
                                <div>
                                    <img src="img/body/1.jpg" >
                                </div>
                            </a>
                            <div class="rl-contant">
                               <a href="#" class="rl-one-intr" title="墨香铜臭原著| 玄幻广播剧《魔道祖师》第二季·第四集">墨香铜臭原著| 玄幻广播剧《魔道祖师》第二季·第四集</a>
                                <div>
                                    <span class="icon-common viewCount">2.6万</span>
                                    <span class="icon-common commentCount">303</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="rl-intr">
                        <a href="#">
                            <div class="rl-color">2</div>
                            <span title="墨香铜臭原著| 玄幻广播剧《魔道祖师》小剧场·莳花女">墨香铜臭原著| 玄幻广播剧《魔道祖师》小剧场·莳花女</span>
                        </a>
                    </li>
                    <li class="rl-intr">
                        <a href="#">
                            <div class="rl-color">3</div>
                            <span title="《杀破狼》广播剧 第三季 第二十四集">《杀破狼》广播剧 第三季 第二十四集</span>
                         </a>
                    </li>
                    <li class="rl-intr">
                        <a href="#">
                            <div class="rl-color-g">4</div>
                            <span title="江宁探案录第一季第一集">江宁探案录第一季第一集</span>
                        </a>
                    </li>
                    <li class="rl-intr">
                        <a href="#">
                            <div class="rl-color-g">5</div>
                            <span title="古风玄幻广播剧《天宝伏妖录》第十三集">古风玄幻广播剧《天宝伏妖录》第十三集</span>
                        </a>
                    </li>
                </ul>
             </div>
            <div class="rl-buttom">
                <a href="#" class="rl-btn-more">更多</a>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
.app-ranking{
	width:260px;
	overflow:hidden;
}
.ranking-list{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.ranking-list>.rl-top{
	display: flex;
	justify-content: space-between;
	overflow: hidden;
    width: 100%;
	height: 20px;
	padding: 10px 0;
}
.rl-top>span{
	font-size: 18px;
	color:#666;
	cursor: pointer;
    width: 100px;
}
.rl-list>li{
	float: left;
	text-align: center;
	line-height: 25px;
	border: 1px solid #dbdbdb;
	font-size: 12px;
	padding: 0 10px 0 10px;
	cursor: pointer;
}
.rl-list>li:first-child{
	border-right:none;
	border-radius: 3px 0 0 3px;
}
.rl-list>li:last-child{
	border-radius: 0 3px 3px 0;
}
.rl-middle{
    width:260px;
	font-size: 12px;
}
.rl-middle img{
	display: inline-block;
	width: 50px;
	border-radius: 3px;
}
.rl-middle li{
	margin: 10px 0;
}
.rl-color,.rl-color-g{
	display: inline-block;
	width: 16px;
	height: 16px;
	color: white;
	text-align: center;
	line-height: 16px;
	font-size: 12px;
	border-radius: 3px;
	margin-right: 10px;
}
.rl-color-g{
	background: #dbdbdb;
}
.rl-color{
	background: #cd3333;
}
.rl-one-main{
	display: flex;
	justify-content: space-between;
}
.rl-one-main>a.rl-pic>div{
	display: inline-block;
}
.rl-contant{
	width:69%;
}
.rl-one-main>a.rl-pic>.rl-color{
	position: relative;
	top: -37px;
}
.rl-intr>a>span{
	display: inline-block;
	height: 16px;
	width: 235px;
	overflow: hidden;
	padding-top:2px;
	position: relative;
	top: 3px;
}
a.rl-btn-more{
	display: block;
	height: 24px;
	text-align: center;
	line-height: 25px;
	border: 1px solid #dbdbdb;
	border-radius: 3px;
	font-size: 10px;
	color:#666;
}
a.rl-btn-more:hover{
	background:#dbdbdb ;
}
.viewCount:before{
	width: 18px;
	height: 18px;
	background-position:-372px -494px ;
}
.commentCount:before{
	width: 18px;
	height: 18px;
	background-position:-390px -495px ;
}

</style>