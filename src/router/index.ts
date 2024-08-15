// src/router.ts
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/paginaInicio.vue'),
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/catalogo.vue'),
    },
    {
      path: '/Mision-Y-Vision',
      name: 'MiYVi',
      component: () => import('../views/visionYmision.vue'),
    },
    {
      path: '/Registrar',
      name: 'Registro',
      component: () => import('../views/Registro.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/checkout.vue'),
    },
  ],
});

export default router;
