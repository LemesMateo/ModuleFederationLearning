<template>
  
    <RouterLink class="text-3xl font-bold text-indigo-600 m-2 border-2 border-gray-800 box-border" to="/">Home</RouterLink>
    <RouterLink class="text-3xl font-bold text-indigo-600 m-2 border-2 border-gray-800 box-border" to="/about">About Page</RouterLink>
    <RouterLink class="text-3xl font-bold text-indigo-600 m-2 border-2 border-gray-800 box-border" to="/laravel" >Laravel</RouterLink>
    <router-view></router-view>
    <Header/>
    <Card/>
    <div ref="vue2Feature"></div>
    <vue2Feature/>
  <div id="footer"></div>
</template>

<script>
  import Header from 'vue3host/Header'
  import Feature from "vue2App/Feature"
  import { vue2ToVue3 } from './utils';
  import Footer from 'reactApp/Footer';
  import Card from 'vue3App/Card'
  import mountFooter from 'reactApp/mountFooter'
  import { ref } from 'vue';

  export default {
    components: {
      Header,
      Card,
      vue2Feature: vue2ToVue3(Feature, 'targetPage'),
      Footer
    }, mounted(){
      mountFooter('footer');
    }
  }

</script>