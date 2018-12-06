const express = require("express")
//const pool = require("./pool")

var app = express()
const cors = require("cors")
app.use(cors({
    origin:[ "http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true
}))

app.use(express.static(__dirname+"/public"))

app.listen(3000)

app.get("/headernav",(req,res)=>{
    var obj = [
        {id:1,subtitle:"有声中漫"},
        {id:2,subtitle:"纯爱(中文)"},
        {id:3,subtitle:"言情"},
        {id:4,subtitle:"全年龄"},
        {id:5,subtitle:"原创音乐"},        
        {id:6,subtitle:"翻唱"},
        {id:7,subtitle:"Vocaloid"},
        {id:8,subtitle:"三次元音乐"},
        {id:9,subtitle:"演奏创作"},
        {id:10,subtitle:"催眠无人声"},
        {id:11,subtitle:"萌妹"},
        {id:12,subtitle:"鬼畜/搞笑"},
        {id:13,subtitle:"电台"},
        {id:14,subtitle:"怪谈"},
        {id:15,subtitle:"一般"},
        {id:16,subtitle:"轻小说"},
        {id:17,subtitle:"网络小说"},
        {id:18,subtitle:"儿童"},
        {id:19,subtitle:"中文配音"},
        {id:20,subtitle:"日文及其他"},
        {id:21,subtitle:"角色录音"},
        {id:22,subtitle:"声优录音"},
        {id:23,subtitle:"其他录音"},
        {id:24,subtitle:"来电"},
        {id:25,subtitle:"短信"},
        {id:26,subtitle:"闹铃"},
    ]
    res.send(obj)
})
app.get("/swiper",(req,res)=>{
    var obj = [
        {id:1,img_url:"http://127.0.0.1:3000/img/swiper/swiper (1).jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/img/swiper/swiper (2).jpg"},
        {id:3,img_url:"http://127.0.0.1:3000/img/swiper/swiper (3).jpg"},
        {id:4,img_url:"http://127.0.0.1:3000/img/swiper/swiper (4).jpg"},
        {id:5,img_url:"http://127.0.0.1:3000/img/swiper/swiper (5).jpg"},
    ]
    res.send(obj)
})

app.get("/tagsall",(req,res)=>{
    var obj = [
        {id:1,subtitle:"全部"},
        {id:2,subtitle:"原创"},
        {id:3,subtitle:"翻唱"},
        {id:4,subtitle:"ED"},
        {id:5,subtitle:"古风"},        
        {id:6,subtitle:"和风"},
        {id:7,subtitle:"Vocaloid"},
        {id:8,subtitle:"OP"},
        {id:9,subtitle:"背景音"},
        {id:10,subtitle:"插曲"},
        {id:11,subtitle:"治愈"},
        {id:12,subtitle:"温馨"},
        {id:13,subtitle:"热血"},
        {id:14,subtitle:"震撼"},
        {id:15,subtitle:"主题曲"},
        {id:16,subtitle:"正常向"},
        {id:17,subtitle:"作业向"},
        {id:18,subtitle:"演奏"},
        {id:19,subtitle:"ACG"},
        {id:20,subtitle:"游戏"},
        {id:21,subtitle:"神曲"},
        {id:22,subtitle:"电音"},
        {id:23,subtitle:"欧美"},
        {id:24,subtitle:"抖腿"},
        {id:25,subtitle:"东方"},
        {id:26,subtitle:"纯音乐"},
    ]
    res.send(obj)
})

/** 广播剧轮播*/
app.get("/rbanner",(req,res)=>{
    var obj = [
        {id:1,title:"唯一的星光",updata:"第十四集",author:"",intro:"——————你就是我唯一的星光原著：http://www.jjwxc.net/onebook.php?novelid=2494839现代言情有声剧《唯一的星光》8月30号起，每周四，与大家不见不散～;",img_url:"http://127.0.0.1:3000/img/radio/banner/banner1.jpg"},
        {id:2,title:"异事录",updata:"第一期",author:"桃桃一轮",intro:"无",img_url:"http://127.0.0.1:3000/img/radio/banner/banner2.jpg"},
        {id:3,title:"《从前有座灵剑山》 第一季",updata:"第六集",author:"",intro:"升仙大会公告：灵剑派坚持和平与发展的主题，门派核心价值理念是求真、求善、求种。为进一步扩充门派力量，补充新鲜血液，拟于近期召开升仙大会，诚邀各路精英前来。嗯？王陆，千年未有的空灵根？好的，就是你了大型玄幻修仙广播剧《从前有座灵剑山》 第一季 ★10月26日起，每周五，修仙之途，正式开启 ★",img_url:"http://127.0.0.1:3000/img/radio/banner/banner3.jpg"},
        {id:4,title:"百年家书",updata:"第一期",author:"疯痞子",intro:"花开花落，春去秋来，他们倒下的那一刻，早已成为永恒。 ——摘自《一寸山河一寸血》 她还记得外公浑浊的双眼望着外面的车水马龙 那眼神透过窗户和高楼，映出来的，却是古镇中的一叶扁舟和小河上的一缕夕阳 宁静的画面背后，是浓重的黑暗和血光，每一个人的笑容都带着苦涩，哭声都带着疲倦。然后笑不出，哭不出，麻木的生存，等到曙光吹散了乌云，绝望变成了希望 即使鹤发鸡皮，垂垂老矣，那根撑过了百年黑暗的脊梁，依然刚直如铁，顶天立地。直到经历了那一切，她才真切的明白 你觉得他们笨拙，落后，愚昧，顽固 却是他们，坚持，不屈，奋战，守候 才有了今天的丰衣，足食，欢笑，和自由。 谢谢你，我已经逝去的，和尚未逝去的老一辈。" ,img_url:"http://127.0.0.1:3000/img/radio/banner/banner4.png"},
        {id:5,title:"浮生若梦",updata:"第二期",author:"流鸢长凝",intro:"无",img_url:"http://127.0.0.1:3000/img/radio/banner/banner5.jpg"},
    ]
    res.send(obj)
})

app.get("/news",(req,res)=>{
    var obj = [
        {id:1,title:"【置顶】 猫耳FM中抓部官博求关~发剧可圈~",url:"http://weibo.com/missevandrama"},
        {id:2,title:"【置顶】 M站APP新版IOS下载或搜索：猫耳fm",url:"http://weibo.com/missevandrama"},
        {id:3,title:"【预告】您的魔道祖师即将上线！请注意查收！",url:"http://www.missevan.com/sound/player?id=997617"},
        {id:4,title:"撒野第一季正片与精彩花絮全收录~",url:"http://www.missevan.com/sound/player?id=667185"},
        {id:5,title:"快来和人气声优一起互动吧！",url:"http://www.missevan.com/sound/player?id=981032"},
        {id:6,title:"【个人剧】柳满坡原著·现代耽美广播剧《完美无瑕》预告篇",url:"http://www.missevan.com/sound/player#id=193403"},
        {id:7,title:"【712配音组】《收服冷漠N种方法》预告",url:"http://www.missevan.com/sound/player#id=192586"},
    ]
    res.send(obj)
})

app.get("/drama",(req,res)=>{
    var arr = [
        {id:1,title:"魂飞湮灭·明风篇",img_url:"http://127.0.0.1:3000/img/radio/radio/rad (1).jpg",state:"上期"},
        {id:2,title:"404宿舍",img_url:"http://127.0.0.1:3000/img/radio/radio/rad (1).png",state:"第一期"},
        {id:3,title:"少年惊梦·狐说",img_url:"http://127.0.0.1:3000/img/radio/radio/rad (2).jpg" ,state:"全一期"},
        {id:4,title:"回家",img_url:"http://127.0.0.1:3000/img/radio/radio/rad (2).png",state:"ed"},
        {id:5,title:"这个神仙有点萌",img_url:"http://127.0.0.1:3000/img/radio/radio/rad (3).jpg" ,state:"上期"},
        {id:6,title:"浦水不误",img_url:"http://127.0.0.1:3000/img/radio/radio/rad (4).jpg",state:"全一期"},
        {id:7,title:"风流人物",img_url:"http://127.0.0.1:3000/img/radio/radio/rad (5).jpg",state:"全一期"},
        {id:8,title:"娑婆",img_url:"http://127.0.0.1:3000/img/radio/radio/rad (6).jpg",state:"上期"},
        {id:9,title:"两禽相悦",img_url:"http://127.0.0.1:3000/img/radio/radio/rad (7).jpg",state:"上期"},
        {id:10,title:"现代血族小姐",img_url:"http://127.0.0.1:3000/img/radio/radio/rad (8).jpg",state:"第七期"},
    ]
    res.send(arr)
})