<template>
  <div id="app">
    <tab-bar>
        <Tab-Bar-Item>
          <div></div>
        <template v-slot:item-icon>
               <img  src="./assets/img/TabBar/Homeblack.svg" alt="">
        </template>
        <template v-slot:item-text>
             <div>首页</div>
        </template>
      </Tab-Bar-Item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem' 

export default {
  name: 'App',
  components: {
     TabBar,
     TabBarItem
  }
}

</script>
 
<style>
 @import "./assets/css/base.css";
</style>
