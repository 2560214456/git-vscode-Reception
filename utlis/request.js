import axios from 'axios'
import { MessageBox, Message, ColorPicker } from 'element-ui'
import cookie from "js-cookie";

const service = axios.create({
    baseURL: 'http://localhost:8222' , // api 的 base_url 默认的访问路径，
    timeout: 20000 // 20000 请求超时事件
  })
  //http request 拦截器
service.interceptors.request.use(
 // debugger
  config => {
    
    if(cookie.get('guli_token')){
      config.headers['token'] = cookie.get('guli_token');
    }
    return config;
  },
  err =>{
    return Promise.reject(err)
  }
)


  // http response 拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        //如果状态吗不是20000，则判断为错误
        if(res.code !== 20000){
          //25000：订单支付中，不做任何提示
          if(res.code !== 25000){
            console.log(res.message)
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
              })
          }
        }else{
            return response
        }
    } 
)

export default service