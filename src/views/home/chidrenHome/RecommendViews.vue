<template>
  <div v-for="(item,index) in recommends" :key="index">
      <a href="item.link">
          <img :src="item.image">
          <div>{{item.title}}</div>
      </a>
  </div>
</template>

<script>
export default {
    name:"RecommentViews",
    props:{
        recommends:{
            type:Array,
            default(){
                return[]
            }
        }
    }
}
</script>

<style>

</style>