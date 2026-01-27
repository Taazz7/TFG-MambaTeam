<template>
  <div>
    <!-- SLIDER -->
    <Slider :images="sliderImages" />

    <!-- GAME CARDS -->
    <main class="games">
      <h2 class="games__title">Próximos partidos:</h2>

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

<script setup>
import { ref } from 'vue'
import Slider from '@/components/Slider.vue'
import GameCard from '@/components/GameCard.vue'

const sliderImages = ref([
  '/img/slider1.jpg',
  '/img/slider2.jpg',
  '/img/slider3.jpg'
])

const upcomingGames = ref([
  {
    image: '/img/a1.png',
    alt: 'A1',
    link: '/equipo/nacA1Masc'
  },
  {
    image: '/img/a2fem.png',
    alt: 'A2 Femenino',
    link: '/equipo/nacA2Fem'
  },
  {
    image: '/img/a1.png',
    alt: '3a Aragón',
    link: '/equipo/3Arag'
  },
  {
    image: '/img/3a.png',
    alt: '3a División',
    link: '/equipo/3Arag'
  },
  {
    image: '/img/a1.png',
    alt: 'A1',
    link: '/equipo/nacA1Masc'
  }
])
</script>

<style lang="scss" scoped>
@import '@/styles/_cards.scss';
</style>