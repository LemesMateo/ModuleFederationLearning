<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div id='navbar'></div>
    <div id='feature' ></div>
  </div>
  
  <Footer/>
</template>

<script>
  import Footer from './Footer.vue';
  import mountFeature from 'host/mountFeature';
  import navbarWrapper from 'reactApp/navbarWrapper';
  
  export default {
    components: {
      Footer
    }, mounted (){
      mountFeature('#feature');
      navbarWrapper('navbar');


    }
  }
</script>