import request from "@/utlis/request" 
export default{ 
    //查询所有课程分类（一级分类，二级分类）
    getSubject(){
        return request({
            url:'/eduservice/courseFront/getSubject',
            method:'get'
        })
    },
    //条件分页查询课程
    getQueryPageCourse(page,limit,courseQuery){
        return request({
            url:`/eduservice/courseFront/getQueryCourse/${page}/${limit}`,
            method:'post',
            data: courseQuery
        })
    },
    //根据课程id查询课程信息
    getCourseBId(courseId){
        return request({
            url:'/eduservice/courseFront/getCourseById/'+courseId,
            method:'post'
        })
    },
    //查询评论
    getCommentPage(page,limit,courseId){
        return request({
            url:`/eduservice/courseFront/getCourseComment/${courseId}/${page}/${limit}`,
            method:'get'
        })
    },
    //添加评论
    addComment(comment){
        return request({
            url:`/eduservice/courseFront/addComment`,
            method: 'post',
            data:comment
        })
    }
}