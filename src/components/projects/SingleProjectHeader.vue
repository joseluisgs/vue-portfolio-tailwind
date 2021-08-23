<template>
  <div>
    <!-- Project heading and meta info -->
    <p
      class="text-3xl font-bold text-left  sm:text-4xl text-primary-dark dark:text-primary-light mt-7 sm:mt-20 mb-7"
    >
      Project Management UI
    </p>
    <div class="flex">
      <div class="flex items-center mr-10">
        <Icon icon="feather:clock" class="single-project__icon" />
        <span class="single-project__description">23 Ago, 2021</span>
      </div>
      <div class="flex items-center">
        <Icon icon="feather:tag" class="single-project__icon" />
        <span class="single-project__description">UI / Frontend</span>
      </div>
    </div>
    <!-- Project heading and meta info -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'SingleProjectHeader',

  components: {
    Icon,
  },
});
</script>

<style scoped>
.single-project__icon {
  @apply w-4 h-4 text-ternary-dark dark:text-ternary-light;
}
.single-project__description {
  @apply ml-2 leading-none text-primary-dark dark:text-primary-light;
}
</style>
