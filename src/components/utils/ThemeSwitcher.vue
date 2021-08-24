<template>
  <a href="#" @click.prevent="toggleTheme">
     <Icon
      v-if="theme === 'light'"
      icon="feather:moon"
      class="w-5 text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light"
    />
    <Icon v-else icon="feather:sun" class="w-5 text-gray-200 hover:text-gray-50"/>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'Footer',

  props: {
    theme: {
      type: String,
      required: true,
    },
  },

  components: {
    Icon,
  },

  setup(props, { emit }) {
    const toggleTheme = () => {
      const newTheme = props.theme === 'light' ? 'dark' : 'light';
      console.log('new theme', newTheme);
      emit('theme-changed', newTheme);
    };

    return {
      toggleTheme,
    };
  },
});
</script>

<style scoped>
</style>
