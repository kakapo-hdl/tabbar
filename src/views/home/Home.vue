<template>
    <div id="home">
      <NavBar class="home-nav">
        <template v-slot:center>购物街</template>
      </NavBar>
      <HomeSwiper :banners="banners"></HomeSwiper>
      <RecommendViews :recommends="recommnends"></RecommendViews>
    </div>
</template>

<script>
import { getHomeMultidata } from "network/home"

import NavBar from 'components/common/navBar/NavBar'
import HomeSwiper from 'views/home/chidrenHome/HomeSwiper.vue'
import RecommendViews from 'views/home/chidrenHome/RecommendViews.vue'
export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendViews
  },
  data(){
    return{
      banners:[],
      recommnends:[]
    }
  },
  created(){
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommnends = res.data.recommnends;
    })
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  } 
</style>
