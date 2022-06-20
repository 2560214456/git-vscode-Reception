import request from "@/utlis/request" 
export default{
    //生成订单
    orderInfo(courseId){
        return request({
            url:'/order/orderservice/addOrder/'+courseId,
            method:'get'
        })
    },
    //查询订单
    getOrder(orderId){
        return request({
            url:'/order/orderservice/getOrderById/'+orderId,
            method:'get'
        })
    },
    //生成二维码
    createNatvie(orderNo){
        return request({
            url:'/order/paylog/createNatvie/'+orderNo,
            method:'get'
        })
    },
    //查询订单状态
    queryPayStatus(orderNo){
        return request({
            url:'/order/paylog/queryPayStatus/'+orderNo,
            method:'get'
        })
    }
}
