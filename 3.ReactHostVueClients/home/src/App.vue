<style>
.container {
  width: 800px;
  margin: auto;
  padding: 1rem;
}
.carousel {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
}
.carousel > img {
  width: 100%;
}
</style>

<template>
<div class="container">
  <Header />
  <HomeInfo/>  
  <Carousel />
</div>
</template>

<script>
import Header from './Header.vue';
import Carousel from 'dogDetail/Carousel';
import HomeInfo from './HomeInfo.vue';

export default {
  components: {
    Header,
    Carousel,
    HomeInfo
}
}
</script>