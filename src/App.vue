<template>
  <div id="app" >
    {{name}}
    <!-- <router-view></router-view> -->
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar.vue' 
import {useStore} from 'vuex'
export default {
  setup(){
    const store = useStore();
    const name = store.state.count;
    return{
      name
    }
  },
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
