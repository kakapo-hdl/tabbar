<template>
        <Swiper>
          <SwiperItem v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
              <img :src="item.image" alt="" style="width:100%"> 
            </a>
          </SwiperItem>
        </Swiper>
</template>

<script>

import { Swiper, SwiperItem} from "components/common/swiper"
export default {
    name:"HomeSwiper",
    components:{
    Swiper,
    SwiperItem
    },
    props:{
        banners:Array,
        default(){
            return [];
        }
    },
}
</script>

<style>

</style>