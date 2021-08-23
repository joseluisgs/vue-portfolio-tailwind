<template>
  <div>
    <div class="container mx-auto">
      <!-- About me -->
      <AboutMe />
      <!-- About me -->
    </div>

    <!-- About counter -->
    <AboutCounter />
    <!-- About counter -->

    <div class="container mx-auto">
      <!-- About Clients -->
      <AboutClients />
      <!-- About Clients -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AboutMe from '@/components/about/AboutMe.vue';
import AboutCounter from '@/components/about/AboutCounter.vue';
import AboutClients from '@/components/about/AboutClients.vue';

export default defineComponent({
  name: 'About',

  components: {
    AboutMe,
    AboutCounter,
    AboutClients,
  },
});
</script>

<style scoped>
</style>
