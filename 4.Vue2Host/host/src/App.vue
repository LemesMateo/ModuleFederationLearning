<template>
  <div>
    <div id="navbar"></div>
</div>
</template>
<script>
  import mountFooter from 'vue3App/mountFooter';
  import mountFeature from 'host/mountFeature'  
  import navbarWrapper from 'reactApp/navbarWrapper'
  
  export default {
  components: {
}, mounted(){
  navbarWrapper('navbar');
  mountFooter('#footer');
}

}
</script>