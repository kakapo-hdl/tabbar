import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shopcar = () => import('../views/shopcar/Shopcar')
const Profile = () => import('../views/profile/Profile')
const routers = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        Component:Home
    },
    {
        path:'/category',
        Component:Category
    },
    {
        path:'/Shopcar',
        Component:Shopcar
    },
    {
        path:'/Profile',
        Component:Profile
    },
]

const router = new VueRouter({
    history: 'routerHistory',
    routers
})
export default router;