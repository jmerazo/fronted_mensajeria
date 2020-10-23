import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/ingreso',
    name: 'Ingreso',
    component: () => import('../views/Ingreso.vue')
  },
  {
    path: '/devoluciones',
    name: 'Devoluciones',
    component: () => import('../views/Devoluciones.vue')
  },
  {
    path: '/consulta',
    name: 'Consulta',
    component: () => import('../views/Consulta.vue')
  },
  {
    path: '/imagen',
    name: 'Imagen',
    component: () => import('../views/Imagen.vue')
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
