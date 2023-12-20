import MainPage from '../views/MainPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      props: { title: 'Main' },
    },
    {
      path: '/vivienda',
      name: 'vivienda',
      component: () => import('../views/ViviendaView.vue'),
      props: { title: 'Vivienda' },
    },
    {
      path: '/preguntas',
      name: 'preguntas',
      component: () => import('../views/PreguntasView.vue'),
      props: { title: 'Preguntas' },
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue'),
      props: { title: 'Contacto' },
    },
  ],
});

export default router;
