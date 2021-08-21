<template>
  <div>
    <!-- Header -->
    <Header></Header>
    <!-- Añadimos una transicion
     https://vuejs.org/v2/guide/transitions.html -->
    <transition name="fade" mode="out-in">
      <!-- Render Active Component Contents Start -->
      <router-view />
    </transition>
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
/* Programamos las transiciones
https://vuejs.org/v2/guide/transitions.html */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
