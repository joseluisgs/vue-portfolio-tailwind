<template>
  <!-- Related projects -->
  <div class="mt-10 sm:mt-20">
    <p class="mb-10 text-3xl font-bold text-primary-dark dark:text-primary-light sm:mb-14">
      Proyectos relacionados
    </p>
    <div class="grid grid-cols-1 gap-10 sm:grid-cols-4">
      <div>
        <img
          src="../../assets/images/projects/mobile-project-1.jpg"
          class="single-project-related__pinter"
          alt="Related Project"
        />
      </div>
      <div>
        <img
          src="../../assets/images/projects/web-project-1.jpg"
          class="single-project-related__pinter"
          alt="Related Project"
        />
      </div>
      <div>
        <img
          src="../../assets/images/projects/ui-project-2.jpg"
          class="single-project-related__pinter"
          alt="Related Project"
        />
      </div>
      <div>
        <img
          src="../../assets/images/projects/mobile-project-1.jpg"
          class="single-project-related__pinter"
          alt="Related Project"
        />
      </div>
    </div>
  </div>
  <!-- Related projects -->
</template>projects/

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SingleProjectRelatedProjects',
});
</script>

<style scoped>
.single-project-related__pinter {
  @apply cursor-pointer rounded-2xl;
}
</style>
