<template>
  <div>
    <div id="navbar"></div>
    <div class="lg:text-center">
    <router-view></router-view>
    <div id="footer"></div>
  </div>
</div>
</template>
<script>
  import mountFooter from 'vue3App/mountFooter';
  import navbarWrapper from 'reactApp/navbarWrapper';
    
  export default {
  components: {
    
}, mounted(){
  navbarWrapper('navbar');
  mountFooter('#footer');
}

}
</script>