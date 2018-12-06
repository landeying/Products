<!--轮播图-->
<template>
    <div class='app-swiper'>
        <div class="carousel-left">
            <!--轮播图片-->
            <div class="block">
				<el-carousel height="220px">
				<el-carousel-item v-for="item in imglist" :key="item.id">
					<img :src="item.img_url" >
				</el-carousel-item>
				</el-carousel>
			</div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            imglist:[]
        }
    },
   mounted() {
       this.axios.get("http://127.0.0.1:3000/swiper").then(res=>{
           this.imglist = res.data
           console.log(this.imglist)
       })
   },
}
</script>
<style>
/*轮播图*/
.carousel-left{
	float: left;
	border: 2px solid black;
	border-radius: 5px;
	height: 220px;
	width: 436px;
}
.el-carousel__item img{
    position:relative;
    z-index:-1;
  }
</style>