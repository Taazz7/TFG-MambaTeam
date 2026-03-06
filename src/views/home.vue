<template>
  <div>
    <Slider :images="sliderImages" />

    <main class="games">
      <h2 class="games__title">Nuestros Equipos:</h2>

      <div v-if="loading" class="loading">Cargando equipos...</div>
      <div v-else-if="error" class="error">{{ error }}</div>

      <div v-else class="cards">
        <GameCard
          v-for="(team, index) in teams"
          :key="team.id"
          :image="getTeamImage(index)" 
          :alt="team.nombre"
          :link="'/equipo/' + team.id" 
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Slider from '../components/slider.vue'
import GameCard from '../components/GameCard.vue'
import { useTeams } from '../composables/useTeams'

const { teams, loading, error, fetchTeams } = useTeams()

const sliderImages = ref([
  '/img/slider1.jpg',
  '/img/slider2.jpg',
  '/img/slider3.jpg'
])

const categoryImages = [
  '/img/nacA1.png',
  '/img/nacA2F.png',
  '/img/nacA2M.png',
  '/img/segunda.png',
  '/img/tercera.png'
]

const getTeamImage = (index: number) => {
  return categoryImages[index % categoryImages.length]
}

onMounted(async () => {
  await fetchTeams()
})
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.loading, .error {
  text-align: center;
  padding: 2rem;
}
.error { color: red; }

</style>