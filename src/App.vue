<template>
  <div id="app" class="tab-bar-item" >
    <TabBar>
        <TabBarItem>
        <template v-slot:item-icon>
               <img  src="./assets/img/TabBar/Homeblack.svg" alt="">
        </template>
        <template v-slot:item-text>
             <div>我的</div>
        </template>
      </TabBarItem>
      <TabBarItem>
        <template v-slot:item-icon>
               <img  src="./assets/img/TabBar/Homeblack.svg" alt="">
        </template>
        <template v-slot:item-text>
             <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem>
        <template v-slot:item-icon>
               <img  src="./assets/img/TabBar/Homeblack.svg" alt="">
        </template>
        <template v-slot:item-text>
             <div>菜单</div>
        </template>
      </TabBarItem>
            <TabBarItem>
        <template v-slot:item-icon>
               <img  src="./assets/img/TabBar/Homeblack.svg" alt="">
        </template>
        <template v-slot:item-text>
             <div>首页</div>
        </template>
      </TabBarItem>
    </TabBar>
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
   .tab-bar-item img {
      width:24px;
      height:24px;
      margin-top: 3px;
      vertical-align: middle;
  }
</style>
