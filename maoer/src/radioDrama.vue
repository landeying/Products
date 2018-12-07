<template>
    <div class="app-radio">
        <div class="radio">
            <div class="radio-swiper">
                <el-carousel height="300px">
                    <el-carousel-item v-for="item in list" :key="item.id">
                        <div class="radio-banner">
                            <div class="banner-img">
                                <img :src="item.img_url">
                            </div>
                            <div class="banner-intr">
                                <div class="banner-title">
                                    <h2 v-text="item.title" :title="item.title"></h2>
                                    <router-link to="#">查看剧集详情</router-link>
                                </div>
                                <span>更新至：</span>
                                <span class="banner-updata" v-text="item.updata"></span>
                                <span v-show="item.author==''" class="original">原创</span>
                                <div v-show="item.author!=''"  class="original">
                                    <span>原作：</span>
                                    <span v-text="item.author"></span>
                                </div>
                                <div class="intro">
                                    <span>简介：</span>
                                    <span v-text="item.intro" :title="item.intro"></span>
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="radio-news">
                <div class="news-title">
                    <h2>最新资讯</h2>
                </div>
                <div class="news">
                    <ul>
                        <li v-for="item in newsList" :key="item.id">
                            <router-link :to="item.url"  v-text="item.title"></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="radio-list">
            <div class="radio-pages">
                <div>
                    <h2>剧集列表</h2>
                    <span>创建时间</span>
                </div>
                <div class="drama">
                    <a class="drama-item" v-for="item in dramaList" :key="item.id">
                        <img :src="item.img_url">
                        <div class="drama-item-title" >
                            <p v-text="item.title"></p>
                            <span style="display:none">已完结</span>
                            <span>更新至</span>
                            <span v-text="item.state"></span>
                        </div>
                    </a>
                </div>
                <div class="block">
                   <el-pagination
                    background
                    :page-size="1"
                    layout=" prev, pager, next, total, jumper"
                    :total="8" @current-change="handleCurrentChange">
                    </el-pagination>
                </div>
            </div>
            <div class="drama-ranking"></div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
           list:[],
           newsList:[],
           dramaList:[],
           row:[],
           arr:[],
           pno:0,
           pageIndex:0,
           pageCount:1,
           pageSize:8,
           next:true,
        }
    },
    methods:{
        handleNextClick(){
            this.next = this.pageIndex < this.pageCount
            if(!this.next){return}
            var url = "http://127.0.0.1:3000/drama"
            url += "?pno="+this.pageIndex+"&pageSize="+this.pageSize
            this.axios.get(url).then((res)=>{
                this.row = res.data.data
                this.pageCount = res.data.pageCount
                for(var i=0;i<this.pageCount;i++){
                    this.arr.push(this.row.slice(i*8,(i+1)*8))
                }
                for(var j=0;j<this.arr.length;j++){
                    if(this.pageIndex==j){   
                        this.dramaList = this.arr[j] 
                    }
                } 
                this.pageIndex++
            })
        },
        handleCurrentChange(val){
            for(var index in this.arr){
                if(val-1 == index){
                    this.dramaList = this.arr[index]
                }
            }               
        }
    },
    mounted() {
        this.axios.get("http://127.0.0.1:3000/rBanner").then((res)=>{
            this.list = res.data
        })
        this.axios.get("http://127.0.0.1:3000/news").then((res)=>{
            this.newsList = res.data
        })
        this.handleNextClick()
    },    
}
</script>
<style>
 .app-radio{
     min-width:700px;
     width:968px;
     margin:0 auto;
 }
 .radio{
     display:flex;
     justify-content:space-between;
     margin:30px 0;
 }
 .radio-swiper,.radio-news{
     height:300px;
     border:3px solid #333;
     border-radius:8px;
 }
 .radio-swiper,.drama{
     width:68%;
 }
 .radio-news,.drama-ranking{
     width:28%
 }
 .radio-banner{
    display:flex;
    margin:20px 10px;
 }
 .banner-img{
     width:40%;
     margin-right:20px;
 }
 .banner-img>img{
     width:100%;
 }
 .banner-intr{
     width:55%
 }
 .intro{
     display:flex;
     margin-top:20px;
     overflow:hidden;
     max-height:85px;
 }
 .intro>span:last-child{
    word-break:break-all;
    overflow:hidden;
    text-overflow:ellipsis;
    width:80%;
 }
 .banner-title{
    display:flex;
    justify-content:space-between;
    margin:10px 0 30px 0;
 }
 .banner-title>h2{
     width:70%;
     white-space:nowrap;
     text-overflow:ellipsis;
     overflow:hidden;
 }
 .banner-title>a{
     color:#C14A3F;
 }
 .banner-updata{
     display:inline-block;
     height:20px;
     line-height:20px;
     background:#C14A3F;
     font-size:14px;
     color:#fff;
     padding:0 10px;
     border-radius:10px;
 }
 .original{
    display:block;
    margin-top:20px;
 }
 .news{
    width:85%;
    height:70%;
    margin:0 auto;
  }
 .news-title{
     margin:20px 0 10px 20px; 
 }
 .news ul::-webkit-scrollbar-thumb{
    border: 0 solid #fff;
    border-top-width: 0;
    border-bottom-width: 0;
    border-radius: 3px;
    background-color: #e0e0e0;
 }
 .news ul{
    display:block;
    height:100%;
    overflow:auto;
 }
 .news ul::-webkit-scrollbar {/*滚动条整体样式*/
    width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
 }
 .news a{
    display:block;
    width:100%;
    height:40px;
    line-height:40px;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    border-bottom:2px dashed #E0E0E0;
    color:#424242;
    font-size:13px;
  }
 .el-carousel__indicators .el-carousel__button{
    width:12px;
    height:12px;
    background:#bdbdbd;
    margin-right:6px;
    border-radius:100%;
 } 
 ul.el-carousel__indicators{
    left:80%;
    transform:none;
 }
 .el-pagination.is-background ul.el-pager li:not(.disabled).active {
    background-color: #4d4d4d;
    color: #fff;
    border:none;
 }
 ul.el-pager li,.el-pagination button.btn-prev,.el-pagination button.btn-next,.el-pagination__editor.el-input .el-input__inner{
    border-radius:2px;
    border: 1px solid #e0e0e0;
    height: 40px;
    line-height:30px;
    padding:5px;
    margin:5px;
 }
 span.el-pagination__total{
    margin:10px; 
 }
 div.el-pagination span:not([class*=suffix]) {
     height:40px;
 }
 input.el-input__inner{
    display:inline-block;
 }
 .el-pagination__editor.el-input .el-input__inner{
   background:transparent;
  }
 div.el-input{
    margin:4px 10px 2px 0;
 }
 div.el-pagination.is-background .el-pager li:not(.disabled):hover{
    background:#4d4d4d;
    color:#fff;
    transition:background 1s;
 }
 .radio-pages>div:first-child{
    display:flex;
    text-align:center;
    margin-bottom:20px;
 }
 .radio-pages>div:first-child>span{
    margin-left:20px;
    line-height:40px;
 }
 .drama{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
 }
 .drama img{
    width:150px;
    height:150px;
    border-radius:5px; 
 }
 .drama-item{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:150px;
    height:214px;
    margin-bottom:20px;
    cursor:pointer;
 }
 a.drama-item:hover{
    color:#000;
 }
 .drama-item-title>p{
    font-size:14px;
    margin:5px 0;
 }
 .drama-item-title>span{
    font-size:12px;
 }
 .drama-item-title>span:not(:last-child){
    color:#616161;
 }
 .drama-item-title>span:last-child{
    margin-left:10px;
 }
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          