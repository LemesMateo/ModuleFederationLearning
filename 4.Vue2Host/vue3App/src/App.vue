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
  import mountNavbar from './mountNavbar.js';
  
  mountNavbar('#navbar')
  
  
  export default {
    components: {
      Footer
    }
  }
</script>