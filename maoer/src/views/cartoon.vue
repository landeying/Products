<template>
    <div class="app-cartoon">
        <div class="cartoon-main">
            <div class="cartoon-all">
                <span>全部</span>
                <span :class="active">有声中漫</span>
            </div>
            <div class="cartoon-sequence">
                <span :class="active">按时间顺序排序</span>
                <span>音乐热搜排序</span>
            </div>
            <div class="cartoon-content">
                <image-link v-for="i in 20"></image-link>
            </div>
            <div class="clear"></div>
            <paging></paging>
        </div>
        <div class="cartoon-ranking">
            <ranking></ranking>
        </div>
    </div>
</template>
<script>
    import imageLink from '@/components/imageLink.vue'
    import ranking from '@/components/ranking.vue'
    import paging from '@/components/paging.vue'
    export default{
        data(){
            return {
                active:{
                    active:true
                }
            }
        },
        components:{ 
            imageLink,
            ranking,
            paging
        }
    }
</script>
<style>
.app-cartoon{
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
.cartoon-all,.cartoon-sequence{
    font-size:14px;
    padding-bottom:20px;
    cursor:pointer;
}
.cartoon-all>span,.cartoon-sequence>span{
    margin-right:20px;
}
.cartoon-main{
    width:75%;
}
.active{
    color:#FD4C5B;
}
.cartoon-content{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    width:100%;
    border-top:1px solid #ddd;
    padding-top:20px;
}
.cartoon-ranking{
    margin-left:50px;
}
.cartoon-content .brc-pic{
    padding-bottom:20px;
}
</style>