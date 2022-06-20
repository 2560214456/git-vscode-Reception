<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部课程</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">课程类别</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a title="全部" href="#" @click="getTwoSubject()" :class="{active:oneSubjectIndex==-1}">全部</a>
                </li>
                <li v-for="(subject,index) in oneSubject"  :key="subject.id">
                  <a :title="subject.title" @click="getTwoSubject(subject.id,index)" :class="{active:oneSubjectIndex==index}" href="#">{{subject.title}}</a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="c-999 fsize14"></span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li v-for="(twosubject,index) in twoSubject" :key="twosubject.id">
                  <a :title="twosubject.title" @click="getCourseBySUbjectId(twosubject.id,index)" :class="{active:twoSubjectIndex==index}" href="#">{{twosubject.title}}</a>
                </li>
              </ul>
            </dd>
          </dl>
          <div class="clear"></div>
        </section>
        <div class="js-wrap">
          <section class="fr">
            <span class="c-ccc">
              <i class="c-master f-fM">1</i>/
              <i class="c-666 f-fM">1</i>
            </span>
          </section>
          <section class="fl">
            <ol class="js-tap clearfix">
              <li>
                <a title="关注度" :class="{active: index==1}" href="#" @click="CountSort(1)">关注度</a>
              </li>
              <li>
                <a title="最新" href="#" :class="{active: index==2}" @click="CountSort(2)">最新</a>
              </li>
              <li>
                <a title="价格" href="#" :class="{active: index==3}" @click="CountSort(3)">价格&nbsp;
                  <span>↓</span>
                </a>
              </li>
            </ol>
          </section>
        </div>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="coursePage.total <= 0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article v-if="coursePage.total > 0" class="comm-course-list">
            <ul class="of" id="bna">
              <li v-for="course in coursePage.records" :key="course.id">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img :src="course.cover" class="img-responsive" alt="听力口语">
                    <div class="cc-mask">
                      <a :href="'/course/'+course.id" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a :href="'/course/'+course.id" title="听力口语" class="course-title fsize18 c-333">{{course.title}}</a>
                  </h3>
                  <section class="mt10 hLh20 of">
                    <span class="fr jgTag bg-green">
                      <i class="c-fff fsize12 f-fA">{{course.price === 0 ?'免费':'收费'}}</i>
                    </span>
                    <span class="fl jgAttr c-ccc f-fA">

                      <i class="c-999 f-fA">{{course.buyCount}}人学习</i>
                      |
                      <i class="c-999 f-fA">{{course.viewCount}}浏览</i>
                    </span>
                  </section>
                </div>
              </li>
              
            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <a :class="{undisable: !coursePage.hasPrevious}" @click="getQueryCourse(1)" title>首</a>
            <a id="backpage" :class="{undisable:!coursePage.hasPrevious}" @click="getQueryCourse(coursePage.current-1)" href="#" title>&lt;</a>
            
            <a href="#" v-for="page in coursePage.pages" @click="getQueryCourse(page)" :key="page" title :class="{current: page==coursePage.current}">{{page}}</a>
            
            <a id="nextpage" :class="{undisable:!coursePage.hasNext}" @click="getQueryCourse(coursePage.current+1)" href="#" title>&gt;</a>
            <a href="#" :class="{undisable:!coursePage.hasNext}" @click="getQueryCourse(coursePage.pages)" title>末</a>
            <div class="clear"></div>
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>
import courseApi from '@/api/course'
export default {
  data(){
    return{
      oneSubject:{ // 一级分类

      },
      twoSubject:{ // 二级分类

      },
      coursePage:{ //课程

      },
      courseQuery:{}, // 查询条件
      oneSubjectIndex:-1,
      twoSubjectIndex:-1,
      index: -1
    }
  },
  created(){
    //渲染一级分类
    this.getOneSubject()
    this.getQueryCourse()

  },
  methods:{
    //查询所有分类信息
    getOneSubject(){
      courseApi.getSubject().then(response =>{
        this.oneSubject = response.data.data.subject
      })
    },
    //点击一级分类，展示二级分类
    getTwoSubject(oneSubjectId,index = -1){
      this.courseQuery.oneSubjectId = oneSubjectId
      this.oneSubjectIndex = index
      this.twoSubjectIndex = -1

      this.courseQuery.subjectParentId = oneSubjectId
      this.courseQuery.subjectId = ''

      for(var i = 0;i < this.oneSubject.length;i++){
        if(this.oneSubject[i].id === oneSubjectId){
          this.twoSubject = this.oneSubject[i].children
        }
      }

      this.getQueryCourse()
    },
    //点击二级分页查询课程信息
    getCourseBySUbjectId(id,index=-1){
      this.courseQuery.twoSubjectId = id
      this.twoSubjectIndex = index

      this.courseQuery.subjectId = id
      this.courseQuery.subjectParentId = ''
      this.getQueryCourse()

    },
    //调价分页查询课程
    getQueryCourse(page = 1){
      courseApi.getQueryPageCourse(page,8,this.courseQuery).then(response =>{
        this.coursePage = response.data.data.coursePage
      })
    },
    //按关注度，价格，浏览量 排序查询
    CountSort(index){
      if(index === 1){
        this.index = index
        this.courseQuery.buyCountSort = "1"
        this.courseQuery.gmtCreateSort = ''
        this.courseQuery.priceSort = ''
      } else if(index === 2){
        this.index = index
        this.courseQuery.buyCountSort = ''
        this.courseQuery.gmtCreateSort = '2'
        this.courseQuery.priceSort = ''
      }
      else if(index === 3){
        this.index = index
        this.courseQuery.buyCountSort = ''
        this.courseQuery.gmtCreateSort = ''
        this.courseQuery.priceSort = '3'
      }

      
      this.getQueryCourse()
    }
  }
};
</script>
<style scoped>
.undisable{
  pointer-events: none;
}
.active{
  background-color: cadetblue;
}
</style>