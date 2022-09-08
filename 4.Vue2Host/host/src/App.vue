<template>
  <div>
    <div id="navbar"></div>
    <router-link class="text-3xl font-bold text-indigo-600 m-2 border-2 border-gray-800 box-border" to="/">Home</router-link>
    <router-link class="text-3xl font-bold text-indigo-600 m-2 border-2 border-gray-800 box-border" to="/vistaejemplo">Vista Ejemplo</router-link>
    <router-view></router-view>
    <Ejemplo/>
    <h2>Algo</h2>
</div>
</template>
<script>
  import mountFooter from 'vue3App/mountFooter';
  import mountFeature from 'host/mountFeature';  
  import navbarWrapper from 'reactApp/navbarWrapper';
  
  
  export default {
  components: {
    Ejemplo: () => import("vue3App/Ejemplo"),
}, mounted(){
  navbarWrapper('navbar');
  mountFooter('#footer');
}

}
</script>