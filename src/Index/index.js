import {createRouter, createWebHashHistory} from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcar = () => import('../views/shopcar/Shopcar.vue')
const Profile = () => import('../views/profile/Profile.vue')
const routers = [
    {
        path:'',
        redirect:'/Home'
    },
    {
        path:'/Home',
        component:Home
    },
    {
        path:'/Category',
        component:Category
    },
    {
        path:'/Shopcar',
        component:Shopcar
    },
    {
        path:'/Profile',
        component:Profile
    },
]

export default createRouter({
    // 指定路由的模式,此处使用的是hash模式
    history: createWebHashHistory(),
    // 路由地址
    routes:routers
  })