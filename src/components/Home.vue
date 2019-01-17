<template>
  <div>
    <div id="a"></div>
    <div v-show="bl" class="ce">
      <div class="border"></div>
      <ul class="ce-nav">
        <li>首页</li>
        <li>销售车型</li>
        <li>优惠/资讯</li>
        <li>成交客户</li>
        <li>联系我们</li>
        <li>优惠活动</li>
        <li>关于我们</li>
        <li>售后服务</li>
      </ul>
    </div>

    <div :class="{'zhu':bl}">
      <div v-show="bl" class="back" @click="ok"></div>
      <div class="title">
        <Title @showce="fn()"/>
      </div>
      <Content></Content>
      <div class="click">点击免费通话</div>
      <div class="backTop"><a class="a" href="#a">Top</a></div>
      <div class="bottom">
        <Bottom />
      </div>
    </div>
    
  </div>
</template>

<script>
import Title from '@/components/All/title'
import Content from '@/components/All/content'
import Bottom from '@/components/All/bottom'

export default {
  name: 'Home',
  data () {
    return {
      bl: false
    }
  },
  components: {
    Title,
    Content,
    Bottom
  },
  methods: {
    fn(){
      this.bl = true
    },
    ok(){
      this.bl = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ce{
  width: 3rem;
  height: 100vh;
  background: #fff;
  position: absolute;
  z-index: 15;
  font:bold 0.32rem/3 "微软雅黑";
  color: rgb(117, 117, 117);
}
.border{
  width: 100%;
  height: 0.9rem;
  border-bottom:0.01rem solid #999;
}
.ce-nav{
  padding: 0.5rem;
}


.zhu{
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.back{
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 14;
}
.title{
  position: fixed;
  top:0;
}

.click{
  width: 0.6rem;
  position: fixed;
  top:50%;
  right: 0;
  background: rgb(3, 21, 155);
  font: 0.32rem/1.5 "微软雅黑";
  color: rgb(236, 235, 235);
  border-radius: 0.1rem;
  text-align: center;
  padding: 0.1rem 0.05rem;
}
.backTop{
  width: 0.6rem;
  position: fixed;
  top:80%;
  right: 0;
  background:rgb(236, 235, 235);
  font:bold 0.32rem/3 "微软雅黑";
  border-radius: 0.1rem;
  text-align: center;
}
.backTop .a{
  color: rgb(3, 21, 155);
}
.bottom{
  width: 7.46rem;
  position: fixed;
  bottom:0;
  border: 0.02rem solid #efefef;
}
</style>
