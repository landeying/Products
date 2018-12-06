<template>
    <div class="header">
        <div class="header-content">
            <div class="nav">
                <ul class="header-nav">
                    <li class="homepage">
                        <router-link to="/">主站</router-link>     
                    </li>
                    <li>
                        <a href="#">直播间<span class="beta">beta</span></a>  
                    </li>
                    <li>
                        <a href="#">活动</a>
                    </li>
                    <li>
                        <a href="#">手机客户端</a>
                    </li>
                </ul>
               	<ul class="header-opts">
	                <li>
	                   	<form class="search-top" :style="styleObj">
				    		<input type="text" autocomplete="off" placeholder="搜索" />
				    		<div class="icon icon-common" title="搜索"></div>
				    	</form>
                    </li>
                    <li class="header-signin" :class="hide">
                        <router-link to="/login" class="header-opts-left" >登录/注册</router-link>
                    </li>
	                <li>
	                    <a href="#" class="header-opts-right">投稿</a>
	                </li>
	            </ul> 
               <!--搜索框-->
	            <form class="search-button" :class="hide">
		    		<input type="text" autocomplete="off" placeholder="搜索音频、声优、音单、用户" />
		    		<div class="icon icon-common" title="搜索"></div>
		    	</form>	
            </div>
        </div>
    	<div class="header-nav" :class="hide">
    		<div class="nav-top">
    			<div class="top-pic"></div>		
    		</div>
    		<!--顶部目录-->
    		<div class="nav-main">
    			<div class="nav-topcatalog">
    				<div class="topcatalog">
						<a href="#">首页</a>
					</div>
    				<div class="topcatalog"  @mouseenter="getNavEnter($event)" @mouseleave="getNavLeave($event)">
    					<router-link to="/Cartoon">有声漫画</router-link>
    					<div class="subnav" :class="{display:isHide!='有声漫画'}">
    						<a href="#" v-for="(item,i) in list.slice(0,1)" :key="item.id">
								<div :class="isChange===i?{change:true}:''"  @mouseenter="getSubNavEnter(i)" @mouseleave="getSubNavLeave()">
									<div class="subitem-left"></div>
									{{item.subtitle}}	
								</div>
							</a>
    					</div>
    				</div>
    				<div class="topcatalog"  @mouseenter="getNavEnter($event)" @mouseleave="getNavLeave($event)">
    					<router-link to="/radio" >广播剧</router-link>
    					<div class="subnav" :class="{display:isHide!='广播剧'}">
    						<a href="#" v-for="(item,i) in list.slice(1,4)">
								<div :class="isChange===i?{change:true}:''"  @mouseenter="getSubNavEnter(i)" @mouseleave="getSubNavLeave()">
									<div class="subitem-left"></div>	
									{{item.subtitle}}
								</div>
							</a>
							<div class="clear"></div>
    					</div>
    				</div>
    				<div class="topcatalog" @mouseenter="getNavEnter($event)" @mouseleave="getNavLeave($event)">
    					<router-link to="/sound">音乐</router-link>
    					<div class="subnav" :class="{display:isHide!='音乐'}">
    						<a v-for="(item,i) in list.slice(4,9)" :key="item.id">
								<div :class="isChange===i?{change:true}:''"  @mouseenter="getSubNavEnter(i)" @mouseleave="getSubNavLeave()">
									<div class="subitem-left"></div>
									{{item.subtitle}}
								</div>
							</a>
							<div class="clear"></div>   						
    					</div>
    				</div>
    				<div class="topcatalog" @mouseenter="getNavEnter($event)" @mouseleave="getNavLeave($event)">
    					<a href="#">催眠</a>
    					<div class="subnav" :class="{display:isHide!='催眠'}">
    						<a v-for="(item,i) in list.slice(9,10)" :key="item.id">			
								<div :class="isChange===i?{change:true}:''"  @mouseenter="getSubNavEnter(i)" @mouseleave="getSubNavLeave()">
									<div class="subitem-left"></div>
									{{item.subtitle}}
								</div>
							</a>
    					</div>
    				</div>
    				<div class="topcatalog"  @mouseenter="getNavEnter($event)" @mouseleave="getNavLeave($event)">
    					<a href="#">娱乐</a>
    					<div class="subnav" :class="{display:isHide!='娱乐'}">
    						<a v-for="(item,i) in list.slice(10,14)" :key="item.id">
								<div :class="isChange===i?{change:true}:''"  @mouseenter="getSubNavEnter(i)" @mouseleave="getSubNavLeave()">
									<div class="subitem-left"></div>
									{{item.subtitle}}
								</div>
							</a>
							<div class="clear"></div>  						
    					</div>
    				</div>
    				<div class="topcatalog"  @mouseenter="getNavEnter($event)" @mouseleave="getNavLeave($event)">
    					<a href="#">日抓</a>
    					<div class="subnav" :class="{display:isHide!='日抓'}">
    						<a v-for="(item,i) in list.slice(14,15)" :key="item.id">			
								<div :class="isChange===i?{change:true}:''"  @mouseenter="getSubNavEnter(i)" @mouseleave="getSubNavLeave()">
									<div class="subitem-left"></div>
									{{item.subtitle}}
								</div>
							</a>
    					</div>
    				</div>
    				<div class="topcatalog" @mouseenter="getNavEnter($event)" @mouseleave="getNavLeave($event)">
    					<a href="#" >听书</a>
    					<div class="subnav" :class="{display:isHide!='听书'}">
    						<a v-for="(item,i) in list.slice(15,18)" :key="item.id">
								<div :class="isChange===i?{change:true}:''"  @mouseenter="getSubNavEnter(i)" @mouseleave="getSubNavLeave()">
									<div class="subitem-left"></div>
									{{item.subtitle}}
								</div>
							</a>
							<div class="clear"></div>
    					</div>
    				</div>
    				<div class="topcatalog" @mouseenter="getNavEnter($event)" @mouseleave="getNavLeave($event)">
    					<a href="#">配音</a>
    					<div class="subnav" :class="{display:isHide!='配音'}">
    						<a v-for="(item,i) in list.slice(18,23)" :key="item.id">
								<div :class="isChange===i?{change:true}:''"  @mouseenter="getSubNavEnter(i)" @mouseleave="getSubNavLeave()">
									<div class="subitem-left"></div>
									{{item.subtitle}}
								</div>
							</a>
							<div class="clear"></div>   		
    					</div>
    				</div>
    				<div class="topcatalog"  @mouseenter="getNavEnter($event)" @mouseleave="getNavLeave($event)">
    					<a href="#" >铃声</a>
    					<div class="subnav" :class="{display:isHide!='铃声'}">
    						<a v-for="(item,i) in list.slice(23,26)" :key="item.id" >			
								<div :class="isChange===i?{change:true}:''"  @mouseenter="getSubNavEnter(i)"  @mouseleave="getSubNavLeave()">
									<div class="subitem-left"></div>
									{{item.subtitle}}
								</div>
							</a>
							<div class="clear"></div>
    					</div>
    				</div>
    				<div class="topcatalog">
    					<a href="#">
    						<div class="topcatalog-broadcast-img"></div>
    					</a>
    				</div>
    				<div class="topcatalog topcatalog-lives">
    					<a href="#" class="catalog-item-lives">
    						<div class="topcatalog-lives-img"></div>
    						直播
    					</a>
    				</div>
    				<div class="topcatalog topcatalog-radio">
    					<a href="#" class="catalog-item-radio">
    						<div class="topcatalog-radio-img"></div>
    						频道广场
    					</a>
    				</div>
    			</div>		
    		</div>
    	</div>
    </div>
</template>
<script>   
export default{
    data(){
        return {
			list:[],
			hide:{
				hidden:true
			},
			styleObj:{
				display:"none"
			},
			isHide:"",
			isChange:false
		}
	},
	methods:{
		getHide(){
			var url = window.location.href
			if(url.indexOf("login")==-1){
				this.hide.hidden =false
				console.log(this.hide.hidden)
				this.styleObj.display="none"
			}else{
				this.hide.hidden =true
				this.styleObj.display="block"
			}
		},
		getNavEnter(e){
			setTimeout(()=>{
				this.isHide = e.target.innerText
			},100)
		},
		getNavLeave(e){
			setTimeout(()=>{
				this.isHide = ""
			},100)
		},
		getSubNavEnter(i){
				this.isChange = i
		},
		getSubNavLeave(i){
				this.isChange = false
		}
	},
	watch:{
		"$route":'getHide'
	},
	created() {
		this.getHide()
	},
	mounted() {
		 this.axios.get("http://127.0.0.1:3000/headernav").then(res=>{
			this.list = res.data
		})
	},
}
</script>
<style>
.header{
    height: 245px;
    margin: 0 auto;
}
.nav{
    display: flex;
    justify-content: space-between;
	margin: 0 auto;
    width:968px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    position: relative;
}
.header-content{
    background:black; 
	border-bottom: 3px solid #cd3333;

}
.header .header-opts-left{
    display: inline-block;
	padding: 0 20px;
}
.header a.header-opts-right{
    display: inline-block;	
	width: 70px;
	background: #cd3333;
}
.header-nav>li{
    float: left;
}
.beta{
	display: inline-block;
	position: absolute;
	top: -3px;
	font-size: 10px;
	color:#cd3333;
	height: 40px;
}
.header a{
    font-size: 15px;
    text-decoration: none;
    color:white;
}
.header a:hover{
	color:#cd3333;
}
.header .header-opts-right:hover{
	color: white;
	background: #ee2c2c;
}
.homepage>a{
	padding:1px 20px 0px 0px;
}
.header-nav>li:nth-child(2)>a{
	padding: 0px 40px 0px 20px;
}
.header-nav>li:nth-child(3)>a{
	padding: 0px 20px 0px;
}
.header-nav>li:last-child>a{
	padding: 0px 20px 0px;
}
.homepage>a::before{
	content: "";
	display: block;
	float: left;
	margin-top: 12px;
	margin-left: 15px;
	width: 18px;
	height: 17px;
	background-image: url(../../public/img/header/sprite-icons.a1a8f705.png);
	background-position: -20px -522px;
}
.homepage-l{
	float: left;
	padding: 0 20px;
}
.login-img{
	display: inline-block;
	width: 18px;
	height: 17px;
	background-image: url(../../public/img/header/sprite-icons.a1a8f705.png);
	background-position: -112px -498px;
}
.login-img:hover{
	background-image: url(../../public/img/header/sprite-icons.a1a8f705.png);
	background-position: -20px -522px;
}
form.search-top{
	width: 130px;
	height: 40px;
    margin-right: 10px;
}
form.search-top>input{
	width: 86px;
	height: 29px;
	border-radius: 20px;
	padding: 0 34px 0 10px;
	border: none;
}
.header-opts{
	display: flex;
    justify-content: space-between;
}
.header-opts>.header-signin{
    width: 120px;
}
.header-opts .icon{
	top: 164px;
	right: 245px;
	border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
.header-opts .icon::before{	
	position: relative;
	top: -36px;
	right: -40px;
	width: 18px;
	height: 18px;	
	background-position: -536px -140px;
}
.header-nav{
	width: 100%;
	height: 165px;
	margin: 0 auto;
}
.nav-top{
	width: 100%;
	height: 100%;
	
}
.header-content .nav>form{
	position: absolute;
	width: 220px;
	height: 40.5px;
	top: 150px;
	right: 0;
	z-index: 999;
}
.header-content .nav>form>input{
	width: 172px;
	height: 25px;
	border-radius: 20px;
	opacity: 0.9;
	padding: 0px 34px 0px 10px;
}
.nav-top>.top-pic{
	position:relative;
    width: 100%;
	background: url(../../public/img/header/soundback.86e25ebd.png);
	transform: matrix(1,0,0,1,0,0);
    height: 165px;
    left: 0;
    right: 0;
    background-position: top;
    background-repeat: no-repeat;
}
.header-content>.nav>form>.icon{
	top: 164px;
	right: 245px;
	border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
.header-content>div.nav>form>.icon::before{
	position: absolute;
	top: 13px;
	right: 10px;
	width: 18px;
	height: 18px;
	background-position: -536px -140px;
}
.nav-main{
	width: 100%;
	height: 36px;
	background-color: #fff;
	line-height: 36px;		
	box-shadow:0 0 2px #666;
	text-align:center;
	position: relative;
}
.nav-topcatalog{
	display: flex;
	justify-content:space-between;
	width:968px;
	margin:0 auto;
	position:relative;
	transform: matrix(1,0,0,1,0,0);
	background-position: top;
	z-index:999;
}
.nav-main .topcatalog{	
	
}
.header-nav .nav-main a{
	font-size: 15px;
	color: #000;
}
.topcatalog-broadcast-img{
	width: 96px;
	height: 18px;
	margin-top: 7px;
	background: url(../../public/img/header/sprite-icons.a1a8f705.png) -267px -204px;
}
.topcatalog-lives-img{
	display: inline-block;
	width: 51px;
	height: 13px;
	background: url(../../public/img/header/sprite-icons.a1a8f705.png) -316px -222px;
}
.topcatalog-radio-img{
	display: inline-block;
	width: 22px;
	height: 20px;
	margin: 0 2px -4px 2px;
	background: url(../../public/img/header/sprite-icons.a1a8f705.png) -286px -475px;
}
.nav-main .topcatalog-broadcast-img:hover{
	background: url(../../public/img/header/sprite-icons.a1a8f705.png) -88px -240px;
}
.nav-main .topcatalog-lives-img:hover{
	background: url(../../public/img/header/sprite-icons.a1a8f705.png) -265px -222px;
}
.topcatalog-radio-img:hover{
	background: url(../../public/img/header/sprite-icons.a1a8f705.png) -312px -475px;
}
.header-nav div.nav-main a:hover{
	color: #cd3333;
}
.header-nav .subnav{
	background:white;
	width: 128px;
	position: absolute;
	box-shadow:  0 2px 5px white;
	font-size: 10px;
	box-sizing: border-box;
	cursor: pointer;
	border: 1px solid  #f3f3f3;
	text-align:left;
}
.header-nav .subnav .subitem-left{
	display:inline-block;
	margin:5px;
	width: 4px;
	height: 4px;
	background: #333;
	border-radius: 100%;
}
.clear{
	clear: both;
}
header-nav .subnav>a>div:last-child{
	padding-left: 20px;
}
div.change{
	background: #f3f3f3;
	padding-left: 25px;
}
div.display{
	display:none;
}
.hidden{
	display:none;
}
</style>