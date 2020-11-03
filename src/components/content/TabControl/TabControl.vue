<template>
  <div class="tab-control">
      <div v-for="(title,index) in titles" :key="index">

      </div>
  </div>
</template>

<script>
export default {
    name:"TabControl",
    props:{
        titles:Array,
        default(){
            return []
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-control{

}
</style>>
