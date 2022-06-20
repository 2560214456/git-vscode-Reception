<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程详情 开始 -->
    <section class="container">
      <section class="path-wrap txtOf hLh30">
        <a href="#" title class="c-999 fsize14">首页</a>
        \
        <a href="#" title class="c-999 fsize14">课程列表</a>
        \
        <span class="c-333 fsize14">{{ courseInfo.title }}</span>
      </section>
      <div>
        <article class="c-v-pic-wrap" style="height: 357px">
          <section class="p-h-video-box" id="videoPlay">
            <img
              :src="courseInfo.cover"
              :alt="courseInfo.title"
              class="dis c-v-pic"
            />
          </section>
        </article>
        <aside class="c-attr-wrap">
          <section class="ml20 mr15">
            <h2 class="hLh30 txtOf mt15">
              <span class="c-fff fsize24">{{ courseInfo.title }}</span>
            </h2>

            <section class="c-attr-jg">
              <span class="c-fff">价格：</span>
              <b class="c-yellow" style="font-size: 24px"
                >￥{{ courseInfo.price }}</b
              >
            </section>
            <section class="c-attr-mt c-attr-undis">
              <span class="c-fff fsize14"
                >主讲： {{ courseInfo.teacherName }}&nbsp;&nbsp;&nbsp;</span
              >
            </section>
            <section class="c-attr-mt of">
              <span class="ml10 vam">
                <em class="icon18 scIcon"></em>
                <a class="c-fff vam" title="收藏" href="#">收藏</a>
              </span>
            </section>
            <section class="c-attr-mt" v-if="isBuy || Number(courseInfo.price) === 0 ">
              <a href="#" title="立即观看" class="comm-btn c-btn-3">立即观看</a>
            </section>
            <section class="c-attr-mt" v-else>
              <a href="#" title="立即购买" @click="order()" class="comm-btn c-btn-3">立即购买</a>
            </section>
          </section>
        </aside>
        <aside class="thr-attr-box">
          <ol class="thr-attr-ol clearfix">
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">购买数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseInfo.buyCount }}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">课时数</span>

                <br />
                <h6 class="c-fff f-fM mt10">{{ courseInfo.lessonNum }}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">浏览数</span>

                <br />
                <h6 class="c-fff f-fM mt10">{{ courseInfo.viewCount }}</h6>
              </aside>
            </li>
          </ol>
        </aside>
        <div class="clear"></div>
      </div>
      <!-- /课程封面介绍 -->

      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                  <a name="c-i" class="current" title="课程详情">课程详情</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <div>
                  <h6 class="c-i-content c-infor-title">
                    <span>课程介绍</span>
                  </h6>
                  <div class="course-txt-body-wrap">
                    <section class="course-txt-body">
                      <p v-html="courseInfo.description"></p>
                    </section>
                  </div>
                </div>
                <!-- /课程介绍 -->
                <div class="mt50">
                  <h6 class="c-g-content c-infor-title">
                    <span>课程大纲</span>
                  </h6>
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul>
                          <!-- 文件目录 -->
                          <li
                            class="lh-menu-stair"
                            v-for="onwchapter in chapterInfo"
                            :key="onwchapter.id"
                          >
                            <a
                              href="javascript: void(0)"
                              title="第一章"
                              class="current-1"
                            >
                              <em class="lh-menu-i-1 icon18 mr10"></em
                              >{{ onwchapter.title }}
                            </a>
                            <ol class="lh-menu-ol" style="display: block">
                              <li
                                class="lh-menu-second ml30"
                                v-for="video in onwchapter.courseSections"
                                :key="video.id"
                              >
                                <a
                                  :href="'/video/' + video.videoSourceId"
                                  target="_blank"
                                >
                                  <span class="fr">
                                    <i class="free-icon vam mr10">免费试听</i>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em
                                  >{{ video.title }}
                                </a>
                              </li>
                            </ol>
                          </li>
                        </ul>
                      </menu>
                    </div>
                  </section>
                </div>
                <!-- /课程大纲 -->
              </article>
            </div>
          </section>
        </article>
        <!-- 讲师 -->
        <aside class="fl col-3">
          <div class="i-box">
            <div>
              <section class="c-infor-tabTitle c-tab-title">
                <a title href="javascript:void(0)">主讲讲师</a>
              </section>
              <section class="stud-act-list">
                <ul style="height: auto">
                  <li>
                    <div class="u-face">
                      <a href="#">
                        <img
                          :src="courseInfo.teacherAvatar"
                          width="50"
                          height="50"
                          alt
                        />
                      </a>
                    </div>
                    <section class="hLh30 txtOf">
                      <a class="c-333 fsize16 fl" href="#">{{
                        courseInfo.teacherName
                      }}</a>
                    </section>
                    <section class="hLh20 txtOf">
                      <span class="c-999">{{ courseInfo.teacherCareer }}</span>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
        <div class="clear"></div>
      </div>
    </section>
    <!-- /课程详情 结束 -->
    <!-- 评论 -->

    <div class="mt50 commentHtml">
      <div>
        <h6 class="c-c-content c-infor-title" id="i-art-comment">
          <span class="commentTitle">课程评论</span>
        </h6>
        <section class="lh-bj-list pr mt20 replyhtml">
          <ul>
            <li class="unBr">
              <aside class="noter-pic">
                <img
                  width="50"
                  height="50"
                  class="picImg"
                  src="~/assets/img/avatar-boy.gif"
                />
              </aside>
              <div class="of">
                <section class="n-reply-wrap">
                  <fieldset>
                    <textarea
                      name=""
                      v-model="comment.content"
                      placeholder="输入您要评论的文字"
                      id="commentContent"
                    ></textarea>
                  </fieldset>
                  <p class="of mt5 tar pl10 pr10">
                    <span class="fl"
                      ><tt
                        class="c-red commentContentmeg"
                        style="display: none"
                      ></tt
                    ></span>
                    <input
                      type="button"
                      @click="addComment()"
                      value="回复"
                      class="lh-reply-btn"
                    />
                  </p>
                </section>
              </div>
            </li>
          </ul>
        </section>
        <section class="">
          <section class="question-list lh-bj-list pr">
            <ul class="pr10">
              <li v-for="comment in commentPage.records" :key="comment.id">
                <aside class="noter-pic">
                  <img
                    width="50"
                    height="50"
                    class="picImg"
                    :src="comment.avatar"
                  />
                </aside>
                <div class="of">
                  <span class="fl">
                    <font class="fsize12 c-blue">{{comment.nickname}}</font>
                    <font class="fsize12 c-999 ml5">评论：</font></span
                  >
                </div>
                <div class="noter-txt mt5">
                  <p>{{comment.content}}</p>
                </div>
                <div class="of mt5">
                  <span class="fr"
                    ><font class="fsize12 c-999 ml5"></font></span
                  >
                </div>
              </li>
            </ul>
          </section>
        </section>
        <!-- 公共分页 开始 -->
        <div class="paging">
          <a
            href="#"
            title="首页"
            @click.prevent="initComment(1)"
            >首</a
          >
          <a
            href="#"
            title="前一页"
            @click.prevent="initComment(commentPage.current - 1)"
            >&lt;</a
          >
          <a v-for="page in commentPage.pages"
            :key="page"
            :class="{
              current: commentPage.current == page,
              undisable: commentPage.current == page,
            }"
            :title="'第' + page + '页'"
            href="#"
            @click.prevent="initComment(page)"
            >{{ page }}</a
          >
          <a
            href="#"
            title="后一页"
            @click.prevent="initComment(commentPage.current + 1)"
            >&gt;</a
          >
          <a
            href="#"
            title="末页"
            @click.prevent="initComment(commentPage.pages)"
            >末</a
          >
          <div class="clear" />
        </div>
        <!-- 公共分页 结束 -->
      </div>
    </div>
  </div>
</template>
<script>
import courseApi from "@/api/course";
import orderApi from '@/api/order';
export default {
  data(){
    return{
      comment:{ // 提交评论
        content:'',
        courseId:''
      },
      page:1,
      limit:4,
      commentPage:{}, // 评论信息
      courseInfo:{}, //课程基本信息
      chapterInfo:{}, // 章节信息
      isBuy:false, // 是否购买
      courseId:''
    }
  },
  created(){
    this.comment.courseId = this.$route.params.id
    this.courseId = this.$route.params.id
    this.initComment()
    this.initcourse()
  },
  methods:{
    initcourse(){
      courseApi.getCourseBId(this.courseId).then(response =>{
         this.courseInfo = response.data.data.course
         this.chapterInfo = response.data.data.chapter
         this.isBuy = response.data.data.byBuy
      })
    },
    //查询评论
    initComment(page =1){
      courseApi.getCommentPage(page,this.limit,this.comment.courseId).then(response =>{
        this.commentPage = response.data.data.commentPage
      })
    },
    addComment(){
      courseApi.addComment(this.comment).then(response =>{
        console.log(response.data.data.success)
        if(response.data.success){
           //提示信息
            this.$message({
              type:'success',
              message:'发表成功'
            })
            this.comment.content = ''
            //刷新页面
          // this.$router.go(0)
          this.initComment()
        }
       
      })
    },
    //生成订单跳转订单页面
    order(){
      orderApi.orderInfo(this.comment.courseId).then(response =>{
        //携带订单id跳转订单页面
        console.log(response.data.data.orderNo)
        this.$router.push({path:'/order/'+response.data.data.orderNo})
      })
    }
  }
};
</script>
<style scoped>
.undisable {
  background-color: aquamarine;
}
.current{
    pointer-events: none;
}
</style>