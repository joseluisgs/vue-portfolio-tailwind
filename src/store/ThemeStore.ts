import { defineStore } from 'pinia';

const ThemeStore = defineStore({
  id: 'ThemeStore',

  state: () => ({
    theme: 'light',
  }),

  actions: {
    setTheme(newTheme: string) {
      this.theme = newTheme;
      console.log(`Store set Theme to: ${newTheme}`);
      localStorage.setItem('theme', newTheme);
      if (this.theme === 'light') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.querySelector('html')!.classList.remove('dark');
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.querySelector('html')!.classList.add('dark');
      }
    },

    initTheme() {
      // Existe ya un tema en store?
      const cachedTheme = localStorage.theme ? localStorage.theme : false;
      // tenemos un tema en el sistema operativo o explorador
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (cachedTheme) this.setTheme(cachedTheme);
      else if (userPrefersDark) this.setTheme('dark');
      else this.setTheme('light');
      console.log('Store init Theme', this.theme);
    },
  },
});

export default ThemeStore;
