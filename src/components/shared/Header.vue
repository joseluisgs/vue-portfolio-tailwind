<template>
  <!-- Contenedor a tope de ancho centrado -->
  <nav id="nav" class="container mx-auto">
    <!-- Logo -->
    <div
      class="z-10 block max-w-screen-lg my-6 xl:max-w-screen-xl sm:flex sm:justify-between sm:items-center"
    >
      <div class="flex items-center justify-between">
        <div>
          <router-link :to="{ name: 'Home' }" class="flex items-center justify-between">
            <!-- Logos dependiendo del tema -->
            <img
              v-if="theme === 'light'"
              src="../../assets/images/logo.png"
              class="w-14"
              alt="logo"
            />
            <img v-else src="../../assets/images/logo.png" class="w-14" alt="logo" />
            <span class="nav__item__logo__text">JoseLuisGS</span>
          </router-link>
        </div>
        <!-- Solo lo mostramos en pequeñas pantallas, oculto desde sm -->
        <theme-switcher
          :theme="theme"
          @themeChanged="updateTheme"
          class="
            block
            sm:hidden
            bg-ternary-light
            dark:bg-ternary-dark
            hover:bg-hover-light
            dark:hover:bg-hover-dark
            hover:shadow-sm
            px-2.5
            py-2
            rounded-lg
            ml-10
          "
        />
        <!-- Boton Menú cuando estamos en dispositivos pequeños, intercambiamos el botón dependiendo de como esté -->
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button" class="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-6 h-6 fill-current text-secondary-dark dark:text-ternary-light"
            >
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1
                1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd"
              ></path>
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Menú de navegación. Segúb este abierto la navgeacion em moviles lo ponemos como bloque o no -->
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="items-center justify-center mt-5 ml-3 sm:ml-4 sm:mt-3 sm:flex"
      >
        <router-link :to="{ name: 'Projects' }" class="nav__item"> Proyectos </router-link>
        <router-link :to="{ name: 'About' }" class="nav__item"> Conóceme </router-link>
        <router-link :to="{ name: 'Contact' }" class="nav__item"> Contacto </router-link>
      </div>
      <!-- Botón de contacto -->
      <div class="flex-col items-center justify-between hidden sm:flex md:flex-row">
        <div>
          <button
            class="
              text-md
              font-medium
              bg-indigo-500
              hover:bg-indigo-600
              text-white
              shadow-sm
              rounded-lg
              px-5
              py-2.5
            "
            @click="showModal()"
          >
            ¿Te ayudo?
          </button>
        </div>
        <!-- Boton de cambio de tema -->
        <div
          class="
            px-3
            py-3.5
            ml-5
            font-medium
            shadow-sm
            cursor-pointer
            text-md
            bg-primary-light
            dark:bg-ternary-dark
            rounded-xl
          "
        >
          <ThemeSwitcher :theme="theme" @theme-changed="updateTheme" />
        </div>
      </div>
    </div>

    <!-- Comienzo del modal de contacto, solo lo mostramos cuando modal es visible -->
    <transition name="fade">
      <div v-show="modal" class="fixed inset-0 z-30">
        <!-- background: oscurecemos y detectamos si pulsamos fuera -->
        <div
          v-show="modal"
          @click="showModal()"
          class="fixed inset-0 z-20 w-full h-full bg-black bg-opacity-50"
        ></div>
        <!--   Modal  -->
        <ModalHelp :visible="modal" @close-modal="showModal()" />
      </div>
    </transition>
    <!-- Final del modal de contacto -->
  </nav>
</template>

<script lang="ts">
/* eslint-disable no-use-before-define */

import { defineComponent, ref, onBeforeMount } from 'vue';
import ThemeSwitcher from '@/components/utils/ThemeSwitcher.vue';
import ModalHelp from '@/components/utils/ModalHelp.vue';

export default defineComponent({
  name: 'Header',

  components: {
    ThemeSwitcher,
    ModalHelp,
  },

  setup() {
    const isOpen = ref(false);
    const theme = ref('');
    const modal = ref(false);

    onBeforeMount(() => {
      // TODO Hacer Con Store y detectar el cambio de tema
      // Existe ya un tema
      const cachedTheme = localStorage.theme ? localStorage.theme : false;
      // tenemos un tema en el sistema operativo o explorador
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (cachedTheme) updateTheme(cachedTheme);
      else if (userPrefersDark) updateTheme('dark');
      else updateTheme('light');
      console.log('BeforeMount Theme', theme.value);
    });

    const showModal = () => {
      if (modal.value) {
        console.log('Close modal');
        // Bloqueamos el scroll
        document.getElementsByTagName('html')[0].classList.remove('overflow-y-hidden');
        modal.value = false;
      } else {
        console.log('Open modal');
        // Activamos el scroll
        document.getElementsByTagName('html')[0].classList.add('overflow-y-hidden');
        modal.value = true;
      }
    };

    // TODO Hacer Con Store y detectar el cambio de tema
    const updateTheme = (newTheme: string) => {
      theme.value = newTheme;
      console.log(`theme changed to: ${newTheme}`);
      localStorage.setItem('theme', newTheme);
      if (theme.value === 'light') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.querySelector('html')!.classList.remove('dark');
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.querySelector('html')!.classList.add('dark');
      }
    };

    return {
      isOpen,
      theme,
      modal,
      showModal,
      updateTheme,
    };
  },
});
</script>

<style scoped>
#nav a.router-link-exact-active {
  @apply text-indigo-700
         dark:text-indigo-400
         font-medium;
}

.nav__item {
  @apply block
          mb-2
          text-lg
          font-medium
          text-left
          text-primary-dark
          dark:text-ternary-light
          hover:text-secondary-dark
          dark:hover:text-secondary-light
          md:mx-2
          sm:py-2;
}

.nav__item__logo__text {
  @apply text-primary-dark
          dark:text-ternary-light
          hover:text-secondary-dark
          dark:hover:text-secondary-light
          ml-2
          text-lg
          font-semibold;
}

.modal__input {
  @apply w-full
          px-5 py-2
          border-gray-200
          rounded-lg
          border
          dark:border-secondary-dark
          text-sm
          bg-secondary-light
          dark:bg-ternary-dark
          text-primary-dark
          dark:text-ternary-light;
}

.modal-body {
  max-height: 500px;
}

@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
