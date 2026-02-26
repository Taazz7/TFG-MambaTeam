import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'
import Team from '../views/team.vue'
import Player from '../views/player.vue'
import FormularioJugador from '../views/formularioJugador.vue'
import FormularioPatrocinador from '../views/formularioPatrocinador.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/formularioJugador',
    name: 'FormularioJugador',
    component: FormularioJugador,
    props: true
  },
  {
    path: '/formularioPatrocinador',
    name: 'FormularioPatrocinador',
    component: FormularioPatrocinador,
    props: true
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
