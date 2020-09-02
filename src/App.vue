<template>
  <div id="app" >
    <!-- <router-view></router-view> -->
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar.vue' 

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  data(){
    return{
      isActive:true,
    }
  }
}

</script>
 
<style>
 @import "./assets/css/base.css";
   .tab-bar-item img {
      width:24px;
      height:24px;
      margin-top: 3px;
      vertical-align: middle;
  }
</style>
