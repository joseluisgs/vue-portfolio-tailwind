<template>
  <div>
    <!-- Header -->
    <Header></Header>
    <!-- Render Active Component Contents Start -->
    <router-view />
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from './components/shared/Footer.vue';

export default defineComponent({
  name: 'App',

  components: {
    Footer,
  },
});
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
