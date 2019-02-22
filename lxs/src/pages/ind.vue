<template>
    <div>
        <div>
            <button @click="btnClick">单击显示数据333</button>
            <button @click="go">go</button>
 <div id="container">g'd'f'g'd</div>
            <!-- 扫码 -->
            <div class="login_div">
                <mt-button id="wxsys" type="primary" v-on:click="sys_click()">扫一扫</mt-button>
            </div>

        </div>
       
    </div>
</template>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=q9Dyl96NF1hC7ym0aiGTkRNGOxeuGbzR"></script>

<script type="text/javascript">
        var map = new BMap.Map("container"); 
        var point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);  
</script>
<script >
import wx from 'weixin-js-sdk'
import { apiAddress } from '@/request/api';// 导入我们的api接口
export default {
     name: 'Address', 
     name: 'erwm',
    created () {
    this.onLoad();
    },
    data(){
        return {
            codeUrl: '',
            isShow:true
        }
    },
    methods:{
        // 获取数据   
        onLoad() {
        // 调用api接口，并且提供了两个参数    
        // apiAddress({     
        //     V_CID:"1013529389",
        //         V_STARTNY:201801,
        //         V_ENDNY:201812,
        //         V_ID:0,   
        // }).then(res => {
        //     console.log(res,"api")
        //     // 获取数据成功后的其他操作
        
        // })   
        }  ,
        go(){
                this.$router.push({path:"/ine"})
        },
        btnClick(){
        
        },
         sys_click : function()
        {
        //这里【url参数一定是去参的本网址】
        // this.axios.get("获取微信认证参数的地址?url=去参的本网页地址", function(data){
        this.axios.post("获取微信认证参数的地址?url=去参的本网页地址", function(data){
        // var jsondata=$.parseJSON(data);
         var jsondata=JSON.parse(data);
            wx.config({
                // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                debug: false,
                // 必填，公众号的唯一标识
                appId: jsondata.model.appId,
                // 必填，生成签名的时间戳
                timestamp: "" + jsondata.model.timestamp,
                // 必填，生成签名的随机串
                nonceStr: jsondata.model.nonceStr,
                // 必填，签名
                signature: jsondata.model.signature,
                // 必填，需要使用的JS接口列表，所有JS接口列表
                jsApiList: ['checkJsApi', 'scanQRCode']
            });
        });
        wx.error(function (res) {
            console.log("出错了：" + res.errMsg);//这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
        });
 
        wx.ready(function () {
            wx.checkJsApi({
                jsApiList: ['scanQRCode'],
                success: function (res) {
 
                }
            });
 
            wx.scanQRCode({
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                    console.log("扫描结果："+result);
                    window.location.href = result;//因为我这边是扫描后有个链接，然后跳转到该页面
                }
            });
 
        }); 
        }

      



        


}
}
</script>
<style lang="less">
   #container{
        width:300px;
        height:400px;
        border:1px solid black;
        margin:0px auto;
    }
.scan {

height: 100%;

#bcid {

width: 100%;

position: absolute;

left: 0;

right: 0;

top: 0;

bottom:0;

text-align: center;

color: red;

background: #fff;

}

footer {
width:100%;
position: absolute;
display: flex;
justify-content: space-around;
align-items: center;

left: 0;

bottom: 1rem;

height: 2rem;

line-height: 2rem;

z-index: 2;

}
footer p{
    width:25%;
    height: 35px;;
    font-size: 20px;
}

}

</style>



