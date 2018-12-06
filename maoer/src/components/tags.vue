<template>
    <div class='pop-tags'>
        <p>热门标签</p>
        <ul class="tags-all">
            <li  class="tags" v-for="(item,i) in tagslist" :key="item.id" v-text="item.subtitle" @click="handleTags(i)"  :class="{active:i==isActive}"></li>
        </ul>
    </div>
</template>
<script>
   export default{
        data(){
            return {
                tagslist:[],
                isActive:false
            }
        },
        methods:{
            handleTags(i){
                this.isActive = i
            }
        },
        mounted() {
            this.axios.get("http://127.0.0.1:3000/tagsall").then(res=>{
                this.tagslist = res.data
            })
        },
    }
</script>
<style> 
.tags-all>li{
    display:inline-flex;
    justify-content:space-around;
    font-size:12px;
    margin:5px 10px;
    padding:0 10px;
    border:1px solid #ccc;
    border-radius:15px;
    height:25px;
    line-height:25px;
    background:#fff;
    color:#555;
    cursor:pointer;
}
li.active{
    border: 1px solid #CD3333;
    background:#CD3333;
    color:#fff
}
.tags-all>li.tags:hover{  
    border: 1px solid #CD3333;
    color:#CD3333; 
    background:#fff;
}
</style>