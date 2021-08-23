<template>
  <!-- Banner start -->
  <section class="flex flex-col items-center mt-12 sm:justify-between sm:flex-row sm:mt-2">
    <div class="w-full text-left sm:w-1/3">
      <h1
        class="text-3xl font-semibold text-center sm:text-5xl sm:text-left text-ternary-dark dark:text-primary-light"
      >
        Hola, soy JoseLuisGS
      </h1>
      <p
        class="mt-4 font-semibold leading-none text-center text-gray-400 text-2xml sm:text-4xl sm:text-left"
      >
        Profesor, PhD. Software Development & Formador tecnológico.
      </p>
      <div class="flex justify-center sm:block">
        <a
          href="http://joseluisgs.github.io"
          target="_blank"
          class="
            flex
            justify-center
            items-center
            w-36
            sm:w-48
            mt-12
            mb-6
            sm:mb-0
            text-lg
            border border-indigo-200
            dark:border-ternary-dark
            py-2.5
            sm:py-3
            shadow-lg
            rounded-xl
            bg-indigo-50
            hover:bg-indigo-500
            text-gray-500
            hover:text-white
          "
        >
          <Icon icon="feather:arrow-down-circle" class="w-5 ml-0 mr-2 sm:ml-1 sm:mr-3 sm:w-6" />
          <span class="text-sm sm:text-lg">Descargar CV</span></a
        >
      </div>
    </div>
    <div class="float-right w-full mt-8 text-right sm:w-2/3 sm:mt-0">
      <img v-if="theme === 'light'" src="@/assets/images/home/developer.svg" alt="Developer" />
      <img v-else src="@/assets/images/home/developer-dark.svg" alt="Developer" />
    </div>
  </section>
  <!-- Banner end -->
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'HomeBanner',

  components: {
    Icon,
  },

  // TODO: cargar tema con store
  setup() {
    const theme = ref('');
    onBeforeMount(() => {
      theme.value = localStorage.getItem('theme') || 'light';
    });

    return {
      theme,
    };
  },
});
</script>
<style scoped>
</style>
