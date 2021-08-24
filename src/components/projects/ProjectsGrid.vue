<template>
  <!-- Projects start -->
  <section class="pt-20 sm:pt-28">
    <div class="text-center">
      <p class="mb-3 text-2xl font-semibold sm:text-5xl text-ternary-dark dark:text-ternary-light">
        Portfolio de proyectos
      </p>
      <p class="text-gray-500 text-md sm:text-xl dark:text-ternary-light">
        Algunos proyectos que he realizado
      </p>
    </div>

    <div class="grid grid-cols-1 mt-16 sm:grid-cols-3 sm:gap-10">
      <router-link
        :to="{ name: 'SingleProject' }"
        class="project__link"
      >
        <div>
          <img
            src="../../assets/images/projects/web-project-2.jpg"
            alt=""
            class="border-none rounded-t-3xl"
          />
        </div>
        <div class="px-4 py-6 text-center">
          <p class="project__title">
            Google Health Platform
          </p>
          <span class="project__description">Web Application</span>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'SingleProject' }"
        class="project__link"
      >
        <div>
          <img
            src="../../assets/images/projects/mobile-project-2.jpg"
            alt=""
            class="border-none rounded-t-3xl"
          />
        </div>
        <div class="px-4 py-6 text-center">
          <p class="project__title">
            Pheonix Digital Agenncy
          </p>
          <span class="project__description">Mobile Application</span>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'SingleProject' }"
        class="project__link"
      >
        <div>
          <img
            src="../../assets/images/projects/ui-project-1.jpg"
            alt=""
            class="border-none rounded-t-3xl"
          />
        </div>
        <div class="px-4 py-6 text-center">
          <p class="project__title">
            Project Management UI
          </p>
          <span class="project__description">UI / Frontend</span>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'SingleProject' }"
        class="project__link"
      >
        <div>
          <img
            src="../../assets/images/projects/ui-project-2.jpg"
            alt=""
            class="border-none rounded-t-3xl"
          />
        </div>
        <div class="px-4 py-6 text-center">
          <p class="project__title">
            Cloud Storage Platform
          </p>
          <span class="project__description">UI / Frontend</span>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'SingleProject' }"
        class="project__link"
      >
        <div>
          <img
            src="../../assets/images/projects/mobile-project-1.jpg"
            alt=""
            class="border-none rounded-t-3xl"
          />
        </div>
        <div class="px-4 py-6 text-center">
          <p class="project__title">
            Education Social App
          </p>
          <span class="project__description">Mobile Application</span>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'SingleProject' }"
        class="project__link"
      >
        <div>
          <img
            src="../../assets/images/projects/web-project-1.jpg"
            alt=""
            class="border-none rounded-t-3xl"
          />
        </div>
        <div class="px-4 py-6 text-center">
          <p class="project__title">
            Apple Design System
          </p>
          <span class="text-lg text-ternary-dark dark:text-ternary-light">Web Application</span>
        </div>
      </router-link>
    </div>
    <div class="flex justify-center mt-10 sm:mt-20">
      <button
        class="flex items-center px-6 py-3 text-lg text-white bg-indigo-500 shadow-lg rounded-xl hover:shadow-xl hover:bg-indigo-600 sm:text-xl"
      >
         <Icon icon="feather:refresh-cw" class="w-5 mr-3" />
        <span>Ver más</span>
      </button>
    </div>
  </section>
  <!-- Projects end -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'ProjectsGrid',

  components: {
    Icon,
  },

});
</script>

<style scoped>
.project__title {
  @apply mb-2 text-2xl font-semibold text-ternary-dark dark:text-ternary-light;
}
.project__description {
  @apply text-lg text-ternary-dark dark:text-ternary-light;
}
.project__link {
  @apply mb-10 shadow-lg cursor-pointer rounded-3xl hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-ternary-dark;
}
</style>
