import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'JoseLuisGS - Home',
      metaTags: [
        {
          name: 'description',
          content: 'Portfolio de JoseLuis GS',
        },
        {
          property: 'author',
          content: 'José Luis González Sánchez.',
        },
        {
          property: 'keywords',
          content: 'Vue.js, Tailwind, CSS, TypeScript, Iconify',
        },
      ],
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      title: 'JoseLuisGS - About',
      metaTags: [
        {
          name: 'description',
          content: 'Acerca de JoseLuisGS',
        },
        {
          property: 'author',
          content: 'José Luis González Sánchez.',
        },
      ],
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: 'JoseLuisGS - Contact',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// Para analizar y añadir los metadatos en la página y mejorar el SEO
// https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head
// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title as string;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll('[data-vue-router-controlled]'),
  ).map((el) => el.parentNode?.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const metaTags = nearestWithMeta.meta.metaTags as any;
  metaTags
    .map((tagDef: { [x: string]: string; }) => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .forEach((tag: any) => document.head.appendChild(tag));

  next();
});
