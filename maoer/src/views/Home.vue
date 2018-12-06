<template>
    <div class='app-home'>
        <div class="main-content">
        <div class="content">
            <div>
                <!--轮播图-->
                <swiper></swiper>
                <!--右侧频道-->
                <channel></channel>
            </div>
            <div class="show-area" > 
                <!-- 首页左侧栏人气作品展示区 -->
                <div class="area-left">
                    <div class="front-page-left">
                        <div>
                            <i class="floatLeft show-icon icon-pop"></i>
                            <span class="floatLeft">
                                <a href="#">
                                    <h3>人气推荐</h3>
                                </a>
                            </span>
                        </div>
                        <ul>
                            <li class="floatLeft area-active ">三日</li>
                            <li class="floatLeft">本周</li>
                            <li class="floatLeft">本月</li>
                        </ul>
                    </div>
                    <div class="three-days broadcast">
                        <div>
                            <a href="#" v-for="item in 4">
                                <image-link></image-link> 
                            </a> 
                        </div>
                    </div>
                    <div class="week broadcast" style="display:none">
                        <div>
                            <a href="#" v-for="item in 4">
                                <image-link></image-link> 
                            </a> 
                        </div>
                    </div>
                    <div class="mouth broadcast" style="display:none">
                        <div>
                            <a href="#" v-for="item in 4">
                                <image-link></image-link> 
                            </a> 
                        </div>
                    </div>                       
                </div>
                        <!-- 首页右侧栏声优推荐区 -->
                <div class="mass-org">
                    <div>
                        <h3>声优 / 社团广场</h3>
                        <a href="#">
                            <img src="img/body/square.png" title="声优广场" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="show-area">
                <!-- 首页左侧栏热门音单展示区 -->
                <div class="area-left">
                    <div class="front-page-left">
                        <div>
                            <i class="floatLeft show-icon icon-mic"></i>
                            <span class="floatLeft">
                                <a href="#">
                                    <h3>热门音单</h3>
                                </a>
                            </span>
                        </div>
                        <ul class="page-more">
                            <li class="floatLeft more">更多</li>
                        </ul>
                    </div>
                    <div class="broadcast">
                        <div>
                            <a href="#" v-for="item in 4">
                                <image-link></image-link> 
                            </a> 
                        </div>
                    </div>  				    				
                    <!-- 首页右侧栏猫耳男友区 -->
                </div>
                <div class="mass-org">
                    <div class="maoer-bf">    					
                        <a href="#">
                            <img src="img/body/maoerboyfriend.png" title="猫耳男友" />
                        </a>
                        <div>猫耳男友</div>
                    </div>
                </div>
            </div>
            <div class="show-area" > 
                <!-- 首页左侧栏人气作品展示区 -->
                <div class="area-left">
                    <div class="front-page-left">
                        <div>
                            <i class="floatLeft show-icon icon-cartoon"></i>
                            <span class="floatLeft">
                                <a href="#">
                                    <h3>有声漫画</h3>
                                </a>
                            </span>
                        </div>
                        <ul class="page-more">
                            <li class="floatLeft area-active">按小鱼干</li>
                            <li class="floatLeft">按时间</li>
                            <li class="floatLeft more">更多</li>
                        </ul>
                    </div>
                    <div class="broadcast">
                        <div>
                            <div>
                                <a href="#" v-for="item in 4">
                                    <image-link></image-link> 
                                </a> 
                            </div>
                        </div>
                    </div>
                    <div class="broadcast" style="display:none">
                        <div>
                            <div>
                                <a href="#" v-for="item in 4">
                                    <image-link></image-link> 
                                </a> 
                            </div> 
                        </div>
                    </div> 			
                </div>
                <!-- 首页右侧栏排行榜 -->
                <ranking></ranking>
            </div>
        </div>
    </div>
    </div>
</template>
<script>  
    import imageLink from '@/components/imageLink.vue'
    import ranking from '@/components/ranking.vue'
    import swiper from '@/components/swiper.vue'
    import channel from '@/components/channel.vue'
    export default{
        data(){
            return {}
        },
        components:{ 
            imageLink,
            ranking,
            swiper,
            channel
        }
    } 
</script>
<style>
.content,.show-area{
	width: 968px;
	height: 100%;
	margin: 20px auto;
	overflow: hidden;
}
.content>div:first-child{
	height: 224px;
	overflow: hidden;
	padding-bottom: 20px;
}
/*楼层展示区*/
.show-area{
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	padding: 10px 0;
}
.show-area>div.area-left{
	width: 676px;
	height: 100%;
	float: left;	
	overflow: hidden;
}
.content .icon-pop{
	background-position: -5px 0;
}
.content .icon-mic{
	background-position: -5px -25px;
}
.content .icon-cartoon{
	width: 30px;
	background-position: -1px -84px;
}
.show-area>.area-left>.front-page-left{
	box-sizing: border-box;
	display: flex;
	flex-direction:row;
	justify-content:space-between;
	padding: 10px 0 15px 0px;
	overflow: hidden;
}
.front-page-left>ul>li{
	display: inline-block;
	text-align: center;
	line-height: 25px;
	border: 1px solid #dbdbdb;
	font-size: 12px;
	padding: 0 10px 0 10px;
	cursor: pointer;
}
.front-page-left>ul>li:nth-child(2){
	border-right: none;
	border-left: none;
}
.front-page-left>ul>li:first-child{
	border-radius: 3px 0 0 3px;
}
.front-page-left>ul>li:last-child{
	border-radius: 0 3px 3px 0;
}
.broadcast>div:first-child{
	box-sizing: border-box;
	height: 100%;
	overflow: hidden;
}
.broadcast>div{
	width: 800px;
}
.brc-pic>div>a{
	color: black;
	display: block;
	line-height: 18px;
	width: 154px;
	height: 36px;
	padding-top: 4px;
	font-size: 12px;
	overflow: hidden;
}
.show-area .area-active{
	background: #dbdbdb;
}
.mass-org>div{
	margin-left: 31px;
}
.mass-org h3{
	cursor: pointer;
	display: block;
	height: 42px;
    padding-top: 7px;
    text-align: left;
}
ul.page-more>li.more{
	border-radius: 3px;
	margin-left: 15px;
}
ul.page-more>li:nth-child(2){
	border-right: 1px solid #dbdbdb;
	border-radius: 0 3px 3px 0;
}
div.mass-org>div.maoer-bf img{
	margin:38px 0 5px 0;
}
div.mass-org>div.maoer-bf{
    text-align: left;
}
.show-area .brc-pic{
    margin-right:20px;
}
</style>