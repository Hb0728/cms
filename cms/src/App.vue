<template>
  <cms-header></cms-header>
  <meau></meau>
  <router-view />
</template>
<script>
import cmsHeader from '@/components/header.vue';
import meau from "@/components/meau.vue";
export default {
  name: 'app',
  components:{
    cmsHeader,
    meau

  },
  setup() {
    
    return{
      
    }
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  display: block;
}
body {
  margin: 0;
  background-color:#F5F5F5;
}
</style>
