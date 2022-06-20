import request from "@/utlis/request" 
export default{
    //发送验证码
    sendCode(phone){
        return request({
            url: `/edumsm/msm/send/${phone}`,
            method: 'get'
        })
    },
    //注册用户
    saveUser(ucenter){
        return request({
            url: '/educenter/member/register',
            method: 'post',
            data: ucenter
        })
    }
    
}