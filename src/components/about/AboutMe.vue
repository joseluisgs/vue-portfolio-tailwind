<template>
  <div class="block mt-10 sm:flex sm:gap-10 sm:mt-20">
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="https://avatars.githubusercontent.com/u/47913953" class="rounded-xl w-96" alt="" />
    </div>
    <div class="w-full text-left sm:w-3/4">
      <p class="about__parrafo">
        Mi nombre es <a href="https://joseluisgs.github.io/" target="_blank">Jose Luis García Sánchez</a>. Soy Dr.
        en Informática especializado en desarrollo de software y sistemas interactivos 👨‍🎓 y Profesor
        de Secundaria en Formación Profesional de grado superior de DAM/DAW/ASIR 💻. Además, soy
        GitHub Campus Advisor y embajador de GitKraken.
      </p>
      <p class="about__parrafo">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores
        dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque
        consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas
        facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti
        fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo
        necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis
        recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.
      </p>
      <p class="about__parrafo">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores
        dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque
        consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?
      </p>
      <p class="about__parrafo">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores
        dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque
        consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?
      </p>
      <p class="about__parrafo">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores
        dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque
        consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas
        facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti
        fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo
        necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis
        recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutMe',
});
</script>
<style scoped>
a {
  @apply text-indigo-700
         dark:text-indigo-400
         font-medium
         hover:text-indigo-400
         dark:hover:text-indigo-200;
}
.about__parrafo {
  @apply mb-4 text-lg text-ternary-dark dark:text-ternary-light;
}
</style>
