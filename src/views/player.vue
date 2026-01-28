<template>
  <main class="main">
    <section class="player">
      <h2 class="player__title">{{ playerData.name }}</h2> <!-- Comprobar id para diferenciar entre Nac y Arag -->
      <h4 class="player__team">{{ playerData.team }}</h4>

      <div class="player__content">
        
        <!-- Foto y Posición -->
        <div class="player__left">
          <img 
            :src="playerData.photo" 
            :alt="playerData.name" 
            class="player__photo"
          >
          <div class="player__position">
            {{ playerData.position }}
          </div>
        </div>

        <!-- Estadísticas -->
        <div class="player__right">
          
          <div 
            v-for="(stat, index) in playerData.stats" 
            :key="index" 
            class="player__stat"
          >
          <!-- Modificar segun Nac o Arag -->
            <span class="player__stat-label">{{ stat.label }}:</span>
            <span class="player__stat-value">{{ stat.value }}</span>
          </div>

        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps({
  id: {
    type: [String, Number],
    default: 1
  }
})

// Datos de jugadores (esto debería venir de una API)
const playersDatabase = {
  1: {
    name: 'Jorge García',
    team: 'NACIONAL A1',
    photo: '/img/4-removebg-preview.png',
    position: 'Base',
    stats: [
      { label: 'PUNTOS POR PARTIDO', value: '23.3' },
      { label: 'REBOTES POR PARTIDO', value: '7.9' },
      { label: 'ASISTENCIAS POR PARTIDO', value: '8.1' },
      { label: 'MINUTOS POR PARTIDO', value: '24:37' },
      { label: 'VALORACIÓN POR PARTIDO', value: '20.5' }
    ]
  },
  2: {
    name: 'Carlos Martínez',
    team: 'NACIONAL A1',
    photo: '/img/1.png',
    position: 'Alero',
    stats: [
      { label: 'PUNTOS POR PARTIDO', value: '18.5' },
      { label: 'REBOTES POR PARTIDO', value: '5.3' },
      { label: 'ASISTENCIAS POR PARTIDO', value: '4.2' },
      { label: 'MINUTOS POR PARTIDO', value: '22:15' },
      { label: 'VALORACIÓN POR PARTIDO', value: '16.8' }
    ]
  }
}

const currentPlayerId = computed(() => props.id || route.params.id || 1)
const playerData = computed(() => playersDatabase[currentPlayerId.value] || playersDatabase[1])

// Actualizar cuando cambia el ID del jugador
watch(() => route.params.id, (newId) => {
  console.log('Jugador cambiado a ID:', newId)
})
</script>

<style lang="scss" scoped>
@import '../src/styles/main.scss';
</style>