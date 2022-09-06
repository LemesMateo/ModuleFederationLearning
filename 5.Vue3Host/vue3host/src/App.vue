<template>
    <Header/>
    <Card/>
    <div id="vue2Feature"></div>
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

  export default {
    components: {
      Header,
      Card,
      vue2Feature: vue2ToVue3(Feature, 'vue2Feature'),
      Footer
    }, mounted(){
      mountFooter('footer');
    }
  }

</script>