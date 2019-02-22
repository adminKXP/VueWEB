<template>
    <div>
        <div>
            <div :style="stylebox">
                <div style="">
                    <div  class="feedback-content">
                        <!-- <textarea name="" rows="" cols="" style="" placeholder="描述你遇到的问题和意见"></textarea> -->
                        <div class="feedback-img">
                            <div  class="img-box" v-if="imgList!=''" v-for="(item,index) in imgList" :key="index">
                                <img :src="item" class="img"/>
                                <img src="../assets/img/vipcenter/delete.png" class="img-del" @click="delImg(index)"/>
                            </div>
                            <div class="img-list">
                                <img src="../assets/img/vipcenter/increase.png" style="width:20px;margin-top: 15px;"/>
                                <p style="font-size:2px;color: #999;margin-top: 0.2rem;">身份证证件</p>
                                <input type="file" accept="image/*" multiple name="" id="input-file" value="" style="width:60px;height:60px;" @change="filechange()" />
                            </div>
                        </div>
                        <div class="bot-fixed" @click="botClick">
                        提交
                        </div>
                    </div>
               
                </div>
	        </div>
        </div>
    </div>
</template>
<script>


</script>
<script>


import { apiMINBANYW_ANQUANZS } from '@/request/api';// 导入我们的api接口
export default {
    data(){
        return {
            qq:"",
			stylebox:{},
            imgList:[],
            arrs:[],
            obgs:{}
        }
    },
    methods:{
        botClick(){
            for(var i = 0;i<this.arrs.length;i++){
                this.obgs[i]=this.arrs[i]
            }
            this.obgs.length=this.arrs.length
             var data = new FormData(); 
            if(this.obgs.length=="1"){
                var data0 = new FormData(); 
                data0.append("file",this.obgs[0])
                this.axios.post("UploadFile/Upload",data0)
            .then((res=>{
                console.log(res,'返回1-1')
            }))
             
            }
            if(this.obgs.length=="2"){
                var data0 = new FormData(); 
                var data1 = new FormData();
                data0.append("file",this.obgs[0])
                data1.append("file",this.obgs[1])
                this.axios.post("UploadFile/Upload",data0)
                .then((res=>{
                    console.log(res,'返回2-1')
                }))
                this.axios.post("UploadFile/Upload",data1)
                .then((res=>{
                    console.log(res,'返回2-2')
                }))
            } 
            
        },
        gotoRoute(){
            this.$router.go(-1)
        },
        //添加图片
        filechange:function(){
            if(this.imgList.length=='2'){
                Toast({
                    message: '最多选择两张照片',
                    duration:2000
                });
                return
            }
            var fileObj = document.getElementById('input-file');
            var windowURL = window.URL || window.webkitURL;
            var dataURL; 
            //var imgup = document.getElementById('img-bg');
            if(fileObj && fileObj.files && fileObj.files[0]){
                dataURL = windowURL.createObjectURL(fileObj.files[0]);
                this.imgList.unshift(dataURL);
                // fileObj.files[0]是个对象
                this.arrs.push(fileObj.files[0])
                // this.arrs是个
                // console.log(this.arrs ,"图片")
            }
        },
        //删除图片
        delImg(index){
	       	this.imgList.splice(index,1);
        },
    },
    mounted(){
     
        var heightw = window.innerHeight;
        var widthw = window.screen.width;
        this.stylebox={
            width:widthw+'px',
            height:heightw+'px',
            background:'#eee'
        }
    },

}
</script>
<style>
	.feedback-title{padding:0 0.5rem;background: #eee;font-size: 10px;text-align: left;line-height: 1.4rem;}
	.feedback-type{padding:0.88rem 0.66rem;display: flex;justify-content: space-between;background: #fff;}
	.feedback-type span{width: 2.6rem;height: 0.8rem;border: 1px solid #999;line-height: 0.82rem;font-size: 0.36rem;border-radius: 0.1rem;}
	.feedback-type span.active{border-color:#00ADEF ;color: #00ADEF;}
	.bot-fixed{width: 100%;
margin-top: 10px;
height: 30px;
border-radius: 3px;
border: 1px solid #009845;
background-color: #009845;}
	.inputWidth{line-height: 1.4rem;width: 100%;font-size: 10px;border: none;}
	.feedback-content{background: #fff;height: 120px;box-sizing: border-box;padding: 0.2rem 0.5rem;}
	.feedback-content textarea{width: 100%;height: 1.4rem;padding: 0;margin: 0;border: none;resize:none;font-size: 0.40rem;margin-top: 0.2rem;}
	.feedback-img{display: flex;justify-content: flex-start;height:60px}
	.feedback-content .img-list{width: 60px;height: 60px;border: 1px solid #E1E1E1;position: relative;border-radius: 0.05rem;}
	.feedback-content .img-list input{position: absolute;width: 2rem;height: 2rem;top: 0;left: 0;opacity: 0;}
	.img-box{position: relative;margin-right:0.3rem;width:60px;height:60px;border: 1px solid #E1E1E1;}
	.img-box .img{width:60px;height:60px;}
	.img-box .img-del{    position: absolute;
    width: 10px;
    height: 10px;
    right: 0px;
    top: 0px;
}
</style>



