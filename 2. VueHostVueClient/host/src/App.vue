<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div>Framework: vue3</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <App/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import App from "remote1/App";

  export default defineComponent({ components: { App } });
</script>
