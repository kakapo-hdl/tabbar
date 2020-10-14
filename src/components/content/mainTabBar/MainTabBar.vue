><template>
    <router-view></router-view>
    <TabBar>
      <TabBarItem path="/home">
        <template v-slot:item-icon>
               <img  src="~assets/img/TabBar/Homeblack.svg" alt="">
               <div>首页</div>
        </template>
        <template v-slot:item-icon-active>
               <img  src="~assets/img/TabBar/HomeRed.svg" alt="">
        </template>
        <template v-slot:item-text>
             <div>首页</div>
        </template>
      </TabBarItem>

      <TabBarItem path="/Category">
        <template  v-slot:item-icon>
               <img  src="~assets/img/TabBar/menu.svg" alt="">
        </template>
        <template  v-slot:item-icon-active>
               <img  src="~assets/img/TabBar/menuRed.svg" alt="">
        </template>
        <template v-slot:item-text>
             <div>分类</div>
        </template>
      </TabBarItem>

      <TabBarItem path="/Shopcar">
       <template v-slot:item-icon>
               <img  src="~assets/img/TabBar/shop_car.svg" alt="">
        </template>       
        <template  v-slot:item-icon-active>
               <img  src="~assets/img/TabBar/shop_car_red.svg" alt="">
        </template>
        <template v-slot:item-text>
             <div>购物车</div>
        </template>
      </TabBarItem>

      <TabBarItem path="/Profile">
        <template v-slot:item-icon>
               <img  src="~assets/img/TabBar/user.svg" alt="">
        </template>
        <template  v-slot:item-icon-active>
               <img  src="~assets/img/TabBar/userRed.svg" alt="">
        </template>
        <template v-slot:item-text>
             <div>我的</div>
        </template>
      </TabBarItem>
    </TabBar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue' 

export default {
  name: 'MainTabBar',
  components: {
     TabBar,
     TabBarItem
  },
  data(){
    return{
      isActive:true,
    }
  }
}

</script>
 
<style>
  @import "~assets/css/base.css"; 
   .tab-bar-item img {
      width:24px;
      height:24px;
      margin-top: 3px;
      vertical-align: middle;
  }
</style>
