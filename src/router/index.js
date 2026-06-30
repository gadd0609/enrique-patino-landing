import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About/index.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('@/pages/Works/index.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact/index.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/pages/Privacy/index.vue')
  },
  // Redirigir a Home para cualquier otra ruta no encontrada
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
