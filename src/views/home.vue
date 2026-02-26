<template>
  <div>
    <Slider :images="sliderImages" />

    <main class="games">
      <h2 class="games__title">Nuestros Equipos:</h2>

      <div class="cards">
        <GameCard
          v-for="(game, index) in upcomingGames"
          :key="index"
          :image="game.image"
          :alt="game.alt"
          :link="game.link"
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Solución a los errores de import: extensión .vue y rutas relativas
import Slider from '../components/slider.vue'
import GameCard from '../components/gameCard.vue'

const sliderImages = ref(['/img/slider1.jpg', '/img/slider2.jpg', '/img/slider3.jpg'])

const upcomingGames = ref([
  {
    image: '/img/a1.png',
    alt: 'Nacional A1',
    link: '/equipo/JugadoresA' // Usamos el nombre del endpoint como parámetro
  },
  {
    image: '/img/a2fem.png',
    alt: 'Nacional A2 Femenino',
    link: '/equipo/JugadoresNac'
  }
])
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
</style>