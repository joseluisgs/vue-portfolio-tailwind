<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Projects -->
    <SingleProjectHeader />
    <!-- Projects -->

    <!-- Projects Gallery -->
    <SingleProjectGallery />
    <!-- Projects Gallery -->

    <!-- Projects Info -->
    <SingleProjectInfo />
    <!-- Projects Info -->

    <hr class="mt-10 sm:mt-20 text-ternary-dark dark:text-ternary-dark" />

    <!-- Projects Related -->
    <SingleProjectRelatedProjects />
    <!-- Projects Related -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SingleProjectHeader from '@/components/projects/SingleProjectHeader.vue';
import SingleProjectGallery from '@/components/projects/SingleProjectGallery.vue';
import SingleProjectInfo from '@/components/projects/SingleProjectInfo.vue';
import SingleProjectRelatedProjects from '@/components/projects/SingleProjectRelatedProjects.vue';

export default defineComponent({
  name: 'SingleProject',

  components: {
    SingleProjectHeader,
    SingleProjectGallery,
    SingleProjectInfo,
    SingleProjectRelatedProjects,
  },
});
</script>

<style scoped>
</style>
