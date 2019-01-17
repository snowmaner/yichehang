import One from "../components/All/content/One"
import Type from "../components/All/content/type"
import Infor from "../components/All/content/infor"
import Phone from "../components/All/content/phone"

import vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter)

const router = new VueRouter({
    // mode:'history',
    // linkActiveClass:'more-nav-active',//设置选中样式
    routes:[
        {
            path:'/',
            redirect:{ name: 'One' }
        },
        {
            path:'/one',
            name:'One',
            component:One
        },
        {
            path:'/type',
            name:'Type',
            component: Type
        },
        {
            path:'/infor',
            name:'Infor',
            component:Infor
        },
        {
            path:'/phone',
            name:'Phone',
            component:Phone
        }
    ]
})

export default router