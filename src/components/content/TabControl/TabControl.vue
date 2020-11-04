<template>
  <div class="tab-control" >
      <div v-for="(item,index) in titles" :key="index" class = "tab-control-item"
      :class="{active: index=== ClickIndex}" @click="ClickTab(index)">
          <span> {{item}}</span>
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
    },
    data(){
        return{
            ClickIndex:0
        }
    },
    methods:{
        ClickTab(index){
            this.ClickIndex=index;
        }
    }

}
</script>

<style scoped>
.tab-control{
  width:100%;
  display: flex;
  text-align: center;  
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}

.tab-control-item{
    flex:1;

}
.active{
    color: var(--color-high-text);
  
}
.active span{
  padding: 5px;
  border-bottom: solid 2px var( --color-tint);
}
</style>
