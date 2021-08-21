<template>
  <div class="container pt-20 pb-8 mx-auto sm:pt-40">
    <!-- Ahora usamos flex -->
    <div class="flex flex-col items-center justify-center mb-12 sm:mb-28">
      <!-- Cada vez que ponemos dark estamos con el modo oscuro -->
      <p class="mb-5 text-3xl font-semibold sm:text-4xl text-primary-dark dark:text-primary-light">
        Suígueme
      </p>
      <ul class="flex gap-4 sm:gap-8">
        <a href="https://github.com/joseluisgs" target="__blank" class="footer__social__link">
          <Icon icon="lucide:github" class="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <a href="https://twitter.com/joseluisgonsan" target="__blank" class="footer__social__link">
          <Icon icon="lucide:twitter" class="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/joseluisgonsan/"
          target="__blank"
          class="footer__social__link"
        >
          <Icon icon="lucide:linkedin" class="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
      </ul>
    </div>
    <div class="flex items-center justify-center text-center">
      <div class="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; Copyright 2021.
        <a
          href="https://joseluisgs.github.io"
          target="__blank"
          class="font-medium text-secondary-dark dark:text-secondary-light"
          >JoseLuisGS</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'Footer',

  components: {
    Icon,
  },
});
</script>

<style scoped>
.footer__social__link {
  @apply text-gray-400
            hover:text-indigo-500
            dark:hover:text-indigo-400
            cursor-pointer
            rounded-lg
            bg-gray-50
            dark:bg-ternary-dark
            hover:bg-gray-100
            shadow-sm
            p-4;
}
</style>
