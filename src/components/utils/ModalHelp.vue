<template>
  <main class="flex flex-col items-center justify-center w-full h-full">
    <transition name="fade-up-down">
      <div v-show="visible" class="z-30 flex items-center">
        <div
          class="relative flex-row max-w-md max-h-screen mx-5 shadow-lg xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark rounded-xl"
        >
          <div
            class="flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
          >
            <h5 class="text-2xl text-primary-dark dark:text-primary-light">
              ¿Qué tipo de proyecto buscas?
            </h5>
            <button
              class="px-4 font-bold text-primary-dark dark:text-primary-light"
              @click="closeModal()"
            >
              X
            </button>
          </div>
          <div class="w-full h-full p-5 overflow-y-auto modal-body">
            <form class="max-w-xl m-4 text-left">
              <div class="">
                <input
                  class="modal__input"
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Nombre"
                  aria-label="Name"
                />
              </div>
              <div class="mt-6">
                <input
                  class="modal__input"
                  id="email"
                  name="email"
                  type="text"
                  required
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
              <div class="mt-6">
                <select
                  class="modal__input"
                  id="subject"
                  name="subject"
                  required
                  aria-label="Subject"
                >
                  <option selected disabled>Tipo de proyecto</option>
                  <option value="web">Aplicacion Web</option>
                  <option value="mobile">Aplicación Móvil</option>
                  <option value="teaching">Formación</option>
                  <option value="evaluation">evaluación de producto</option>
                </select>
              </div>
              <div class="mt-6">
                <textarea
                  class="modal__input"
                  id="message"
                  name="message"
                  cols="14"
                  rows="6"
                  placeholder="Descripción del proyecto"
                ></textarea>
              </div>

              <div class="mt-6">
                <button
                  class="
                    px-6
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
          <div class="px-5 py-3 text-right modal-footer border0-t">
            <button
              class="px-6 py-2 font-bold bg-blue-500 rounded-lg text-primary-light"
              @click="closeModal()"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalHelp',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const closeModal = () => {
      emit('close-modal');
    };
    return {
      closeModal,
    };
  },
});
</script>

<style scoped>
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
.fade-up-down-enter-active {
  transition: all 0.3s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}
</style>
