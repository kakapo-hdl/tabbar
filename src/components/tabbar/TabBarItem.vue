<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="isActive" >
        <slot name='item-icon-active'></slot>
          <div :class="{active:isActive}" >
            <slot name='item-text'></slot>
        </div>
      </div>
      <div v-else >
        <slot name='item-icon'></slot>
         <slot name='item-text'></slot>
      </div>
       
    </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String
  },
  data(){
    return{
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
      console.log( this.$route.path);
    }
  }
}
</script>lol
<style  scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
      width:24px;
      height:24px;
      margin-top: 3px;
      vertical-align: middle;
  }
  .active {
    color: red;
  }
</style>