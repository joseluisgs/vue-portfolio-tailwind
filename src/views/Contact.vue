<template>
  <div class="container py-5 mx-auto mt-10 sm:flex sm:py-10 sm:mt-20">
    <div class="w-full sm:w-1/2">
      <div class="leading-loose">
        <form
          class="max-w-xl p-6 m-4 text-left shadow-xl sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl"
        >
          <p class="mb-8 text-2xl font-semibold text-primary-dark dark:text-primary-light">
            Contacto
          </p>
          <div class="">
            <label class="block mb-2 text-lg text-primary-dark dark:text-primary-light" for="name"
              >Nombre</label
            >
            <input
              class="contact__input"
              id="name"
              name="name"
              type="text"
              required
              placeholder="Nombre Apellidos"
              aria-label="Name"
            />
          </div>
          <div class="mt-6">
            <label class="block mb-2 text-lg text-primary-dark dark:text-primary-light" for="email"
              >Email</label
            >
            <input
              class="contact__input"
              id="email"
              name="email"
              type="text"
              required
              placeholder="Tu Email"
              aria-label="Email"
            />
          </div>
          <div class="mt-6">
            <label
              class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
              for="subject"
              >Asunto</label
            >
            <input
              class="contact__input"
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Asunto"
              aria-label="Subject"
            />
          </div>

          <div class="mt-6">
            <label
              class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
              for="message"
              >Mensaje</label
            >
            <textarea
              class="contact__input"
              id="message"
              name="message"
              cols="14"
              rows="6"
            ></textarea>
          </div>

          <div class="mt-6">
            <button
              class="
                px-4
                py-2.5
                text-white
                font-medium
                tracking-wider
                bg-indigo-500
                hover:bg-indigo-600
                rounded-lg
              "
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="w-full sm:w-1/2">
      <div class="max-w-xl px-6 text-left">
        <h2 class="mt-12 mb-8 text-2xl font-semibold text-primary-dark dark:text-primary-light">
          Detalles de contacto
        </h2>
        <ul class="">
          <li class="flex">
            <Icon icon="feather:map-pin" width="24" height="24" class="contact__icon" />
            <p class="contact__text">En algún lugar del mundo, España</p>
          </li>
          <li class="flex">
            <Icon icon="feather:mail" width="24" height="24" class="contact__icon" />
            <p class="contact__text">email@example.com</p>
          </li>
          <li class="flex">
            <Icon icon="feather:phone" width="24" height="24" class="contact__icon" />
            <p class="contact__text">+34 555 666 888</p>
          </li>
        </ul>
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
.contact__icon {
  @apply w-5 mr-4 text-gray-500 dark:text-gray-400;
}

.contact__text {
  @apply mb-4 text-lg text-ternary-dark dark:text-ternary-light;
}

.contact__input {
  @apply w-full px-5 py-2 border-0 rounded-md shadow-sm text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark;
}
</style>
