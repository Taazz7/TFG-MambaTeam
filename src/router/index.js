import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Team from '@/views/Team.vue'
import Player from '@/views/Player.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/equipo/:categoria?',
    name: 'Team',
    component: Team,
    props: true
  },
  {
    path: '/jugador/:id?',
    name: 'Player',
    component: Player,
    props: true
  },
  {
    path: '/jugadores/nuevo',
    name: 'NuevoJugador',
    component: FormularioJugador,
    meta: { title: 'Registrar Nuevo Jugador' }
  },
  {
    path: '/patrocinadores/nuevo',
    name: 'NuevoPatrocinador',
    component: FormularioPatrocinador,
    meta: { title: 'Registrar Nuevo Patrocinador' }
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router