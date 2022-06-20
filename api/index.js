import request from "@/utlis/request" 
export default{
    // 查询前8个课程 4条讲师
    getlist(){
        return request({
            url: '/eduservice/index/index',
            method: 'get'
        })
    },
    //查询轮播图地址
    getBanner(){
        return request({
            url: '/cmsService/bannerfront/getAllBanner',
            method: 'get'
        })
    }
}