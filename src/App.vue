<template>
  <div id="app">
    <!--左侧导航-->
    
    <!--主体-->
    <div class="main">
      <router-view/>
    </div>   
  </div>
</template>
<script>
import leftNav from '@/components/leftNav.vue' 
export default {
  name:"App",
  component:{
    leftNav
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  float:left;
  width:95%;
  background-color:#eff2f7;
  height:100%;
  overflow:hidden;
}
</style>
