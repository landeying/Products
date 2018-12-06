<template>
    <div class='app-sound'>
       <div class='content'>
            <div>
                <!--轮播图-->
                <swiper></swiper>
                <!--右侧频道-->
                <channel></channel>
            </div>
            <tags></tags>
            <div class='sound'>
                <div class="sound-main">
                    <div class="sound-all">
                        <p>最新动态</p>
                        <div class='sound-new'>
                            <image-link v-for="i in 4"></image-link>
                        </div>
                    </div>
                    <div class="sound-sequence">
                        <span :class="active">按时间顺序排序</span>
                        <span>音乐热搜排序</span>
                    </div>
                    <div class="sound-content">
                        <image-link v-for="i in 20"></image-link>
                    </div>
                    <div class="clear"></div>
                    <paging></paging>
                </div>
                <div class="sound-ranking">
                    <ranking></ranking>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import swiper from '@/components/swiper.vue'
    import channel from '@/components/channel.vue'
    import imageLink from '@/components/imageLink.vue'
    import ranking from '@/components/ranking.vue'
    import paging from '@/components/paging.vue'
    import tags from '@/components/tags.vue'
    export default{
        data(){
            return {
                 active:{
                    active:true
                },
                tagslist:[]
            }
        },
        mounted() {
            this.axios.get("http://127.0.0.1:3000/tagsall").then(res=>{
                this.tagslist = res.data
            })
        },
        components:{
            swiper,
            channel,
            imageLink,
            ranking,
            paging,
            tags
        }
    }
</script>
<style>
.sound{
    margin:30px auto;
    width:60%;
    min-width:968px;
    max-width:1140px;
    display:flex;
    justify-content:space-between;
    flex:auto;
}
.clear{
    clear:both;
}
.sound-all{
    margin-bottom:30px;
}
.sound-all>p,.sound-sequence{
    font-size:14px;
    padding-bottom:20px;
    cursor:pointer;
}
.sound-all>p{
    font-size:20px;
    color:#888;
}
.sound-sequence>span{
    margin-right:20px;
}
.sound-main{
    display:flex;
    flex-direction:column;
    width:75%;
}
.active{
    color:#FD4C5B;
}
.sound-content,.sound-new{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    width:100%;  
}
.sound-content{
    border-top:1px solid #ddd;
    padding-top:20px;
}
.sound-ranking{
    margin-left:50px;
}
.sound-content .brc-pic{
    padding-bottom:20px;
}
</style>