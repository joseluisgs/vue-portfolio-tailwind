<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-sans text-2xl font-semibold text-center sm:text-4xl text-primary-dark dark:text-primary-light"
    >
      Algunas compañías con las que he trabajado
    </p>
    <div class="grid grid-cols-2 gap-2 mt-10 sm:grid-cols-4 sm:mt-20">
      <div>
        <img
          src="../../assets/images/brands/amazon_color.png"
          alt="Amazon"
          class="clients__image"
        />
      </div>
      <div>
        <img
          src="../../assets/images/brands/sony_color.png"
          alt="SONY"
          class="clients__image"
        />
      </div>
      <div>
        <img
          src="../../assets/images/brands/adidas_color.png"
          alt="Adidas"
          class="clients__image"
        />
      </div>
      <div>
        <img
          src="../../assets/images/brands/fila_color.png"
          alt="FILA"
          class="clients__image"
        />
      </div>
      <div>
        <img
          src="../../assets/images/brands/nb_color.png"
          alt="NB"
          class="clients__image"
        />
      </div>
      <div>
        <img
          src="../../assets/images/brands/samsung_color.png"
          alt="Samsung"
          class="clients__image"
        />
      </div>
      <div>
        <img
          src="../../assets/images/brands/canon_color.png"
          alt="Canon"
          class="clients__image"
        />
      </div>
      <div>
        <img
          src="../../assets/images/brands/puma_color.png"
          alt="Puma"
          class="clients__image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutClients',
});
</script>

<style scoped>
.clients__image {
  @apply w-64 px-10 py-5 mb-8 border shadow-sm cursor-pointer border-ternary-light dark:border-ternary-dark rounded-xl;
}

</style>
