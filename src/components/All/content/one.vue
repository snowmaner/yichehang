<template>
    <div class="one">
        <div class="photo">
            <div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide"><img src="../../../assets/images/car1.jpg"/></div>
			        <div class="swiper-slide"><img src="../../../assets/images/car2.jpg"/></div>
			        <div class="swiper-slide"><img src="../../../assets/images/car3.jpg"/></div>
                    <div class="swiper-slide"><img src="../../../assets/images/car4.jpg"/></div>
                    <div class="swiper-slide"><img src="../../../assets/images/car5.jpg"/></div>
			    </div>
			    <!-- 如果需要分页器 -->
			    <!-- <div class="swiper-pagination"></div> -->
			    <!-- 如果需要导航按钮 -->
			    <!-- <div class="swiper-button-prev"></div>
			    <div class="swiper-button-next"></div> -->
			</div>
        </div>
        <div class="nav-icon">
            <div class="icon">
                <div class="biao">
                    <img src="../../../assets/images/tu1.png"/>
                </div>
                <div>首页</div>
            </div>
            <div class="icon">
                <div class="biao">
                    <img src="../../../assets/images/tu2.png"/>
                </div>
                <div>销售车型</div>
            </div>
            <div class="icon">
                <div class="biao">
                    <img src="../../../assets/images/tu3.png"/>
                </div>
                <div>优惠/资讯</div>
            </div>
            <div class="icon">
                <div class="biao">
                    <img src="../../../assets/images/tu4.png"/>
                </div>
                <div>关于我们</div>
            </div>
        </div>
        <div class="hot-cars">
            <ul class="hot">
                <li>热门车型</li>
                <li>HOT CARS</li>
                <li>更多》</li>
            </ul>
            <ul class="hot-item clear">
                <li>
                    <div class="hot-img">
                        <img src="../../../assets/images/hot1.jpg"/>
                    </div>
                    <p>奔驰斯宾特经典</p>
                </li>
                <li>
                    <div class="hot-img">
                        <img src="../../../assets/images/hot2.jpg"/>
                    </div>
                    <p>奔驰V260黑懿（黑）</p>
                </li>
                <li>
                    <div class="hot-img">
                        <img src="../../../assets/images/hot3.jpg"/>
                    </div>
                    <p>奔驰V260咖懿</p>
                </li>
                <li>
                    <div class="hot-img">
                        <img src="../../../assets/images/hot4.jpg"/>
                    </div>
                    <p>奔驰威霆添懿</p>
                </li>
            </ul>
        </div>
        <div class="hot-cars">
            <ul class="hot">
                <li>推荐车型</li>
                <li>Recommended models</li>
                <li>更多》</li>
            </ul>
            <ul class="hot-item clear">
                <li>
                    <div class="hot-img">
                        <img src="../../../assets/images/jian1.jpg"/>
                    </div>
                    <p>奔驰威霆钻懿红</p>
                </li>
                <li>
                    <div class="hot-img">
                        <img src="../../../assets/images/jian2.jpg"/>
                    </div>
                    <p>奔驰V260尊懿爱马</p>
                </li>
            </ul>
        </div>
        <div class="hot-cars">
            <ul class="hot">
                <li>优惠/资讯</li>
                <li id="news">NEWS</li>
                <li class="duo">更多</li>
            </ul>
            <ul class="two-nav">
                <li>
                    <span>公司动态</span>
                    <img src="../../../assets/images/xia.png"/>
                </li>
                <li>
                    <span>优惠活动</span>
                    <img src="../../../assets/images/xia.png"/>
                </li>
                <li>
                    <span>成交客户</span>
                    <img src="../../../assets/images/xia.png"/>
                </li>
            </ul>
            <ul class="hot-item clear">
                <li>
                    <div class="hot-img good">
                        <img src="../../../assets/images/good1.png"/>
                    </div>
                    <p class="word">【集结】大美新疆超级勇</p>
                </li>
                <li>
                    <div class="hot-img good">
                        <img src="../../../assets/images/good2.png"/>
                    </div>
                    <p class="word">《动物世界》上映 | 这个</p>
                </li>
                <li>
                    <div class="hot-img good">
                        <img src="../../../assets/images/good3.jpg"/>
                    </div>
                    <p class="word">今晚“去留之战”，美女</p>
                </li>
                <li>
                    <div class="hot-img good">
                        <img src="../../../assets/images/good4.jpg"/>
                    </div>
                    <p class="word">星耀文安，月星歌友会—</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import "../../../assets/swiper.js"
export default {
    name:'One',
    mounted () {
        new Swiper ('.swiper-container', {
        loop: true,
        autoplay : 1000,
        autoplayStopOnLast : true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        })   
    }
}
</script>

<style scoped>
@import '../../../assets/swiper.css';
.swiper-container {
    width: 100vw;
    height: 23vh;
}  



img{
    vertical-align: top;
}
.clear:after{
    content:"";
    clear: both;
    display:block;        
}
.one{
    /* font: 0.32rem/1 "宋体"; */
    background: rgb(235, 235, 235);
    color: #666;
}
.photo{
    margin-bottom: 0.2rem;
}
.photo img{
    width: 100%;
}

.nav-icon{
    display: flex;
    padding: 0.3rem;
    background: #fff;
    margin-bottom: 0.2rem;
}
.nav-icon .icon{
    width: 1.7rem;
    border-right:0.02rem solid rgb(207, 207, 207);
    text-align: center;
    font:0.28rem/2 "宋体";
    
}
.icon:nth-child(4){
    border:0;
}
.biao{
    padding: 0.1rem 0;
}
.icon img{
    height: 0.6rem;
}


.hot-cars{
    background: #fff;
    padding: 0.25rem;
    margin-bottom: 0.2rem;
}
.hot{
    display: flex;
    padding: 0.3rem 0;
}
.hot li{
    font:0.24rem/1.5 "微软雅黑";
    color: #000;
    padding: 0 0.2rem;
    text-align: center;
}
.hot li:nth-child(1){
    font:bold 0.36rem/1 "微软雅黑";
    border-right: 0.02rem solid #999;
}
.hot li:nth-child(2){
    color: #666;
    border-right: 0.02rem solid #999;
}

.hot-img{
    width: 3.4rem;
    height: 2.3rem;
}
.hot-img img{
    width: 100%;
    height: 100%;
}
.hot-item li{
    float: left;
    text-align: center;
    font:0.32rem/2.5 "微软雅黑";
}
.hot-item li:nth-child(1){
    margin-right: 0.2rem;
}
.hot-item li:nth-child(3){
    margin-right: 0.2rem;
}

.word{
    overflow: hidden;
    font:0.26rem/3 "微软雅黑";
}
.good{
    width: 3.4rem;
    height: 2rem;
}
.good img{
     width: 100%;
    height: 100%;
}
#news{
    border:0;
}
.hot-cars .hot .duo{
    position: absolute;
    right: 0.3rem;
}


.two-nav{
    font:0.22rem/1 "微软雅黑";
    text-align: center;
    display: flex;
    padding: 0.3rem 0 0.4rem;
}
.two-nav li{
    margin-right: 0.3rem;
}
.two-nav img{
    vertical-align: middle;
}
</style>