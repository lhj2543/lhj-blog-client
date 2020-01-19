<template>

  <div id="index">

    <!-- 头部 -->
    <!--或者这种写法也行<AppHeader/> -->
    <app-header/>

    <div class="index-content plan-centre">
      <div class="left-bg-img" >
        <!-- <img src="/static/index/1.jpg" width="100%" height="100%" /> -->
        <img src="/static/index/graffiti-5.jpg" width="100%" height="100%" />
      </div>

      <div class="business-card cursor-pointer">
        <Row class="personal-plan">
          <Col span="15" class="personal-info">
            <div class="personal-info-detial plan-right-centre">
              <div class="user-name"> 刘海江 </div>
              <div class="welcome-speech">欢迎进入我的个人主页</div>
              <div class="resume-deail">个人简历</div>
            </div>
          </Col>
          <Col span="9" class="head-portrait" >
            <Avatar class="head-portrait-avatar plan-left-centre" src="/static/index/header-2.jpg" />
          </Col>
        </Row>
      </div>
    </div>

    <!-- 尾部 -->
    <app-footer/>
  </div>

</template>

<script>
import '@/assets/css/index.css'//引入首页样式
import AppHeader from './Header.vue'//引入头部
import AppFooter from './Footer.vue'//引入头部


export default {
  name: 'Index',
  data () {
            return {
               
            }
        },
  components:{//注册组件
    AppHeader,
    AppFooter
  },
  methods:{
    pageResize(event){ //计算窗口大小，自适应布局

      var e = {
                current: window.innerHeight,
                /* limit: window.innerWidth < 768 ? window.innerWidth < window.innerHeight ? 1280 : 602 : 1600, */
                limit: window.innerWidth < 768 ? window.innerWidth < window.innerHeight ? 1600 : 1600 : 1600,
                /* limit: 1280, */
                scale: 0
              },
          t = {
          current: window.innerWidth,
          limit: window.innerWidth < 768 ? window.innerWidth < window.innerHeight ? 2560 : 2560 : 2560,
          /* limit: 2560, */
          scale: 0
          };
          /* alert(e.limit);
          alert(t.limit); */
          e.scale = e.current / e.limit;
          t.scale = t.current / t.limit;
          var n = 22.5 * Math.min(e.scale, t.scale);
          /* var n = 32 * Math.min(e.scale, t.scale); */
          document.documentElement.style.fontSize = n + "px";
    }
  },
  mounted(){
    this.pageResize();
    let _this = this;//赋值vue的this
    window.onresize = (e)=>{
　　　　//调用methods中的事件
      _this.pageResize(e);
    }
  },
  destroyed(){
    window.onresize = null;
  }

}
</script>

<style scoped>

</style>
