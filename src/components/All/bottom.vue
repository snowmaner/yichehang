<template>
    <div class="nav">
        <router-link :to="{name:'One'}" tag="div" class="kuan">
            <div class="icon">
                <img src="../../assets/images/icon-1.png"/>
            </div>
            <div>首页</div>
        </router-link>
        <router-link to="/type" tag="div" class="kuan">
            <div class="icon">
                <img src="../../assets/images/icon-2.png"/>
            </div>
            <div>销售车辆</div>
        </router-link>
        <router-link :to="{name:'Infor'}" tag="div" class="kuan">
            <div class="icon">
                <img src="../../assets/images/icon-3.png"/>
            </div>
            <div>优惠/资讯</div>
        </router-link>
        <router-link :to="{name:'Phone'}" tag="div" class="kuan">
            <div class="icon">
                <img src="../../assets/images/icon-4.png"/>
            </div>
            <div>一键拨号</div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'Bottom',
    data () {
        return {
        msg: 'Bottom'
        }
    }
}
</script>
<style scoped>
.nav{
    width: 7.46rem;
    height: 1.2rem;
    display: flex;
    background: #fff;
}
.icon{
    padding: 0.1rem 0;
    height: 0.6rem;
}
.icon img{
    height: 0.5rem;
}
.kuan{
    width: 25%;
    text-align: center;
    border-right:0.02rem solid #efefef;
    font:bold 0.26rem/1 "宋体";
    color: rgb(66, 66, 66);
}
.kuan:nth-child(4){
    border: 0;
}

</style>



