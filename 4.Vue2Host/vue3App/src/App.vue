<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: vue3App</div>
    <div>Framework: vue3</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
  
  <Footer/>
</template>

<script>
  import Footer from './Footer.vue'
  //import Feature from 'host/Feature.vue'
  //import mountNavbar from 'host/mountNavbar';
  
  export default {
    components: {
      Footer
    }
  }
</script>