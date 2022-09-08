<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <router-link class="text-3xl font-bold text-indigo-600"  to="/">Home</router-link>
    <router-link class="text-3xl font-bold text-indigo-600" to="/about">About Page</router-link>
    <router-view></router-view>
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