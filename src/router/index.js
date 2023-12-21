import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/households',
      name: 'households',
      component: () => import('../views/householdsView.vue'),
      props: { title: 'households' },
    },
    {
      path: '/ask',
      name: 'ask',
      component: () => import('../views/AskView.vue'),
      props: { title: 'ask' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      props: { title: 'contact' },
    },
  ],
});

export default router;
