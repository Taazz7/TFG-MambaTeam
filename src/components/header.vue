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
            <router-link class="nav__link" to="/">Home</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/equipo/nacA1Masc">Equipos</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/jugador">Jugadores</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/formularioJugador">Nuevo Jugador</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/formularioPatrocinador">Nuevo Patrocinador</router-link>
          </li>          
        </ul>
      </nav>

    </div>
  </header>
</template>

<script setup>
// No necesita lógica adicional por ahora
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
</style>