<template>
    <div id="home">
      <NavBar class="home-nav">
        <template v-slot:center>购物街</template>
      </NavBar>
      <HomeSwiper :banners="banners"></HomeSwiper>
    </div>
</template>

<script>
import { getHomeMultidata } from "network/home"

import NavBar from 'components/common/navBar/NavBar'
import HomeSwiper from 'views/home/chidrenHome/HomeSwiper.vue'
export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper
  },
  data(){
    return{
      banners:[]
    }
  },
  created(){
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
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
