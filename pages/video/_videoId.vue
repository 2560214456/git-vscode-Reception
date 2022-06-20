<template>
    <div>
        <!-- 阿里云视频播放器样式 -->
        <link rel="stylesheet" 
                href="https://g.alicdn.com/de/prismplayer/2.9.21/skins/default/aliplayer-min.css" />
        <!-- //（必须）引入js文件。 -->  
        <script charset="utf-8" 
                type="text/javascript" 
                src="https://g.alicdn.com/de/prismplayer/2.9.21/aliplayer-min.js">
        </script> 
        <!-- 定义播放器dom -->
        <div id="J_prismPlayer"></div>
    </div>
</template>
<script>
import videoAPi from '@/api/video'
    export default {
        ayout: 'video',//应用video布局
        // 调用接口，获取视频的播放凭证
        asyncData({ params, error }) {
            return videoAPi.getVideoPlayAuth(params.videoId).then(response =>{
                return{
                    vid:params.videoId,
                    playAuth:response.data.data.playAuth
                }
            })
        },
        //在页面渲染之后执行
        mounted(){
            new Aliplayer({
                id: 'J_prismPlayer',//绑定元素id
                vid:this.vid, //视频id
                playauth:this.playAuth, //视频凭证
                encryptType:'1', //如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
                autoplay:false, //不默认播放
                // 视频封面蹄片
                cover:'https://edu-222000.oss-cn-guangzhou.aliyuncs.com/2022/05/30/a29295dc2dfe4a53a1355387ec02911e360wallpaper.jpg', //视频封面图片
                width: '100%',
                height: '500px'
            }, 
                function(player) {
                console.log('播放器创建成功')
                })
            }
            }
</script>