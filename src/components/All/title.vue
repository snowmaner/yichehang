<template>
    <div class="head">
        <div class="show" @click="showtime">
            <img src="../../assets/images/nav.png"/>
        </div>
        <div>
            <div class="logo">懿车行</div>
            <div class="logo">400-756-9988</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Title',
    data () {
        return {
            msg:true
        }
    },
    methods: {
        showtime(){
            this.$emit('showce',this.msg)
        }
    }
}
</script>
<style scoped>
.head{
    width: 7.5rem;
    height: 0.9rem;
    font:bold 0.4rem/0.9rem "微软雅黑";
    color: rgb(92, 92, 92);
    display: flex;
    justify-content: space-between;
    border-bottom:0.02rem solid #999; 
    background: #fff;
}
.head .show{
    padding: 0 0.2rem;
}
.show img{
    width: 0.4rem;
}
.head .logo{
    float: left;
    padding: 0 0.4rem;
}
</style>