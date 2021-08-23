<template>
  <!-- Project gallery start -->
  <div class="grid grid-cols-1 mt-12 sm:grid-cols-3 sm:gap-10">
    <div class="mb-10 sm:mb-0">
      <img
        src="../../assets/images/projects/ui-project-1.jpg"
        class="single-project__image"
        alt="Project Management UI"
      />
    </div>
    <div class="mb-10 sm:mb-0">
      <img
        src="../../assets/images/projects/web-project-2.jpg"
        class="single-project__image"
        alt="Web Application Cloud"
      />
    </div>
    <div>
      <img
        src="../../assets/images/projects/mobile-project-2.jpg"
        class="single-project__image"
        alt="Mobile Application Education"
      />
    </div>
  </div>
  <!-- Project gallery end -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SingleProjectGallery',
});
</script>

<style scoped>
.single-project__image {
  @apply shadow-lg cursor-pointer rounded-2xl sm:shadow-none;
}
</style>
