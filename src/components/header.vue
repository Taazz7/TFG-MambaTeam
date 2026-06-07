<template>
  <header class="header">
    <div class="header__container">
      <div class="header__brand">
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="Logo Mamba Team" class="header__logo">
        </router-link>
        <h1 class="header__title">Mamba Team</h1>
      </div>

      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link class="btn btn--primary" to="/">Home</router-link>
          </li>
          <li class="nav__item">
            <router-link class="btn btn--primary" to="/equipo/nacA1Masc">Equipos</router-link>
          </li>
          <li class="nav__item">
            <router-link class="btn btn--primary" to="/jugador">Jugadores</router-link>
          </li>
          <li class="nav__item">
            <router-link class="btn btn--primary" to="/formularioJugador">Nuevo Jugador</router-link>
          </li>
          <li class="nav__item">
            <router-link class="btn btn--primary" to="/formularioPatrocinador">Nuevo Patrocinador</router-link>
          </li>

          <!-- 🔐 LOGIN / ADMIN -->
          <li class="nav__item" v-if="!isLoggedIn()">
            <button class="btn btn--primary" @click="goLogin">Login</button>
          </li>

          <li class="nav__item" v-if="isLoggedIn() && isAdmin()">
            <button class="btn btn--primary" @click="goAdmin">Administración</button>
          </li>

          <li class="nav__item" v-if="isLoggedIn()">
            <button class="btn btn--primary" @click="logout">Salir</button>
          </li>

        </ul>
      </nav>

    </div>
  </header>
</template>

<script setup>
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const { isLoggedIn, isAdmin, logout } = useAuth()
const router = useRouter()

const goLogin = () => router.push('/login')
const goAdmin = () => router.push('/admin/stats')
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

</style>
