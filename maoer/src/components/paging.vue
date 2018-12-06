<template>
    <div class="app-paging">
        <ul class="paging">
            <li class="pages ">&lt;&lt;&nbsp;首页</li>
            <li class="pages">&lt;&nbsp;前页</li>
            <li v-text="1" class="pageNum" :class="active"></li>
            <li class="pages">后页&nbsp;&gt;</li>
            <li class="pages">末页&nbsp;&gt;&gt;</li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                active:{
                    active:true
                }
            }
        }
    }
</script>
<style>
.app-paging{
}
.paging{
    display:flex;
    justify-content:flex-end;
}
.paging>li:hover{
    cursor:pointer;
}
.pages,.pageNum{
    height:40px;
    border:1px solid #ddd;
    border-radius:5px;
    text-align:center;
    line-height:40px;
    color:#888;
    margin:0 5px;
}
.pages{
    width:72px;  
}
.paging>li.pageNum{
    width:40px;
}
.paging>.active{
    background:#555;
    color:#fff;
    width:40px;
}
.pages:hover{
    color:#555;
}
</style>