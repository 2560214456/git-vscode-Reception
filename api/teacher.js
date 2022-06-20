import request from "@/utlis/request" 
export default{
    //分页查询讲师
    getTeacherPage(page,limit){
        return request({
            url:`/eduservice/teacherFront/teacherPage/${page}/${limit}`,
            method: 'get'
        })
    },
    //根据讲师查询讲师信息，和课程
    getTeacherAndCourseById(teacherId){
        return request({
            url:`/eduservice/teacherFront/teacher/${teacherId}`,
            method:'get'
        })
    }
}