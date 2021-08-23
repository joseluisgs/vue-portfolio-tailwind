<template>
  <div class="container mx-auto">
    <!-- Banner start -->
    <BannerHome />
    <!-- Banner end -->

    <!-- Projects start -->
    <ProjectsGrid />
    <!-- Projects end -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BannerHome from '@/components/home/HomeBanner.vue';
import ProjectsGrid from '@/components/projects/ProjectsGrid.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BannerHome,
    ProjectsGrid,
  },
});
</script>
