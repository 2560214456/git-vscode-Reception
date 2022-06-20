import request from "@/utlis/request" 
export default{ 
    getVideoPlayAuth(videoId){
        return request({
            url:'/eduvod/video/getVideoPlayAuthById/'+videoId,
            method:'get'
        })
    }
}