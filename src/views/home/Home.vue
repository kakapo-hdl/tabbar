<template>
    <div id="home">
      <NavBar class="home-nav">
        <template v-slot:center>购物街</template>
      </NavBar>
      <HomeSwiper :banners="banners"></HomeSwiper>
      <RecommendViews :recommends="recommends"></RecommendViews>
      <FeatureView></FeatureView>
  </div>
</template>

<script>
import { getHomeMultidata } from "network/home"

import NavBar from 'components/common/navBar/NavBar'
import HomeSwiper from 'views/home/chidrenHome/HomeSwiper.vue'
import RecommendViews from 'views/home/chidrenHome/RecommendViews.vue'
import FeatureView from 'views/home/chidrenHome/FeatureView.vue'
export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendViews,
    FeatureView
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created(){
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;

  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position:fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 1;
  } 
</style>
