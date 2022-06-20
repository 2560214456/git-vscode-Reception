import request from "@/utlis/request" 
export default{
    //登录
    login(userInfo){
        return request({
            url: '/educenter/member/login',
            method: 'post',
            data:userInfo
        })
    },
    //根据token获取用户信息
    userInfo(){
        return request({
            url:'/educenter/member/userInfo',
            method:'get'
        })
    }
}