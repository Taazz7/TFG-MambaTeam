import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Team from '@/views/Team.vue'
import Player from '@/views/Player.vue'
import FormularioJugador from '@/views/formularioJugador.vue'
import FormularioPatrocinador from '@/views/formularioPatrocinador.vue'

const routes = [
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

//preguntar a oliver si esto da problema al entrar en los forms (hay que refrescar la pagina para que se muestren)
/*const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})*/
const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router