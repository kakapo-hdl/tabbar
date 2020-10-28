<template>
    <div id="home">
      <NavBar class="home-nav">
        <template v-slot:center>购物街</template>
      </NavBar>
      <Swiper>
        <SwiperItem v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </SwiperItem>
      </Swiper>
    </div>
</template>

<script>
import { getHomeMultidata } from "network/home"
import { Swiper, SwiperItem} from "components/common/swiper"
import NavBar from 'components/common/navBar/NavBar'
export default {
  name: 'Home',
  components:{
    NavBar,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      banners: [],
      dKeyword:[],
      keywords:[],
      recomment:[],
    }
  },
  created(){
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.dKeyword = res.data.dKeyword.list
      this.keywords = res.data.keywords.list
      // this.recomment = res.data.recomment.list
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
