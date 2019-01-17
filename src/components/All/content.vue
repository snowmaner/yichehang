<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'Content',
    data () {
        return {
            msg:'Content'
        }
    },
    components: {
        
    }
}
</script>
<style scoped>
.content{
    padding: 0.9rem 0 1.2rem;
}
</style>


