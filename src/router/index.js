import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Team from '@/views/Team.vue'
import Player from '@/views/Player.vue'
import FormularioJugador from '@/views/formularioJugador.vue'
import FormularioPatrocinador from '@/views/formularioPatrocinador.vue'

// Admin
const AdminStatsNac = () => import('@/admin/AdminStatsNac.vue')
const AdminStatsA = () => import('@/admin/AdminStatsA.vue')

// Login
const Login = () => import('@/views/Login.vue')

// Auth composable
import { useAuth } from '@/composables/useAuth'

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
  },

  // 🔐 LOGIN
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  // -------------------------
  // 📌 RUTAS PANEL ADMIN
  // -------------------------
  {
    path: '/admin/stats/nac',
    name: 'AdminStatsNac',
    component: AdminStatsNac
  },
  {
    path: '/admin/stats/arag',
    name: 'AdminStatsA',
    component: AdminStatsA
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔐 PROTECCIÓN DE RUTAS ADMIN
router.beforeEach((to, from, next) => {
  const { isLoggedIn, isAdmin } = useAuth()

  if (to.path.startsWith('/admin')) {
    if (!isLoggedIn() || !isAdmin()) {
      return next('/login')
    }
  }

  next()
})

export default router
