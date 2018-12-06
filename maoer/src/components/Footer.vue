<template>
    <div class="footer">
        <p class="footer-row about-us">
            <a href="#">建议与反馈</a>
            <a href="#">APP下载</a>
            <a href="#">用户协议</a>
            <a href="#">探索与发现</a>
            <a href="#">联系我们</a>
            <a href="#">加入我们</a>
            <a href="#">百度百科</a>
        </p>
        <p class="footer-row links">
            友情链接：
            <a href="#">斗破苍穹漫画</a>
            <a href="#">轻之文库</a>
            <a href="#">喵特</a>
            <a href="#">半次元</a>
            <a href="#">萌主页</a>
            <a href="#">快看漫画</a>
            <a href="#">腾讯动漫频道</a>
            <a href="#">178动漫频道</a>
            <a href="#">第一弹</a>
            <a href="#">豆腐</a>
        </p>
        <p class="footer-row ">京ICP备: 14055174号-1 |
            <a href="#" class="baicon">
                <img src="../../public/img/footer/beianicon.png" alt="京公网安备11010502034762号"/>
                    京公网安备 11010502034762号
            </a>
        </p>
        <p class="footer-row">北京喵斯拉网络科技有限公司 地址: 北京朝阳区望京SOHO塔二B座1503 电话: 010-64190806</p>
    </div>
</template>
<script>

</script>
<style>
.footer{
	width:100%;
	height: 127px;
	border-top: 1px solid #e0e0e0;
	margin-top: 50px;
	padding: 10px 0px;
	font-size: 14px;
}
.footer>p{
	display: block;
	margin: 10px 0px;
	text-align: center;
	color: #9e9e9e;
}
.about-us>a,.links>a{
	margin: 0px 10px;
}
.footer-row>a{
	color: #9e9e9e;
}
.about-us>a{
	color: #616161;
}
.about-us>a:first-child~a:before{
	content: "";
	position: relative;
	display: inline-block;
	height: 14px;
	border-right: 1px solid #616161;
	left: -10px;
}
.footer-row img{
	position: relative;
	bottom: -4px;
}
.baicon{
	margin: 0px 10px;
}
</style>