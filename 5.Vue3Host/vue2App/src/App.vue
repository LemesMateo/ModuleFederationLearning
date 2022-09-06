<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: vue2App</div>
    <div>Framework: vue2</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Feature/>
  </div>
</template>

<script>
  import Feature from "vue2App/Feature"

  export default {
    components: {
      Feature
    }
  }
</script>