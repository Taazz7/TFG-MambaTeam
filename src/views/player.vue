<template>
  <main class="main">
    <section class="player">
      <div class="player-header">
        <Dropdown
          v-model="selectedPlayerId"
          :options="playerOptions"
          label="Selecciona un jugador:"
        />
      </div>

      <h2 class="player__title">{{ playerData.name }}</h2>
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
import { useRoute, useRouter } from 'vue-router'
import Dropdown from '@/components/Dropdown.vue'

const route = useRoute()
const router = useRouter()

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
      { label: '% TIROS LIBRES POR PARTIDO', value: '72.6' },
      { label: '% TIROS 2PTS POR PARTIDO', value: '20.5' },
      { label: '% TIROS 3PTS POR PARTIDO', value: '32.1' }
    ]
  },
  2: {
    name: 'Pau Rodríguez',
    team: '2 ARAGONESA',
    photo: '/img/1.png',
    position: 'Alero',
    stats: [
      { label: 'PUNTOS POR PARTIDO', value: '18.5' },
      { label: 'TIROS LIBRES POR PARTIDO', value: '5.3' },
      { label: '% TIROS LIBRES POR PARTIDO', value: '4.2' },
      { label: 'TIROS DE 2PTS POR PARTIDO', value: '22:15' },
      { label: 'TIROS DE 3PTS POR PARTIDO', value: '16.8' }
    ]
  },
  3: {
    name: 'Marc Sánchez',
    team: 'NACIONAL A1',
    photo: '/img/2.png',
    position: 'Escolta',
    stats: [
      { label: 'PUNTOS POR PARTIDO', value: '19.2' },
      { label: 'REBOTES POR PARTIDO', value: '4.8' },
      { label: 'ASISTENCIAS POR PARTIDO', value: '6.5' },
      { label: '% TIROS LIBRES POR PARTIDO', value: '78.3' },
      { label: '% TIROS 2PTS POR PARTIDO', value: '45.6' },
      { label: '% TIROS 3PTS POR PARTIDO', value: '38.9' }
    ]
  },
  4: {
    name: 'David Martínez',
    team: 'NACIONAL A2 FEMENINO',
    photo: '/img/3.png',
    position: 'Pivot',
    stats: [
      { label: 'PUNTOS POR PARTIDO', value: '15.7' },
      { label: 'REBOTES POR PARTIDO', value: '11.3' },
      { label: 'ASISTENCIAS POR PARTIDO', value: '2.9' },
      { label: '% TIROS LIBRES POR PARTIDO', value: '68.4' },
      { label: '% TIROS 2PTS POR PARTIDO', value: '52.1' },
      { label: '% TIROS 3PTS POR PARTIDO', value: '28.5' }
    ]
  },
  5: {
    name: 'Álex Fernández',
    team: '3 ARAGONESA',
    photo: '/img/4.png',
    position: 'Alero',
    stats: [
      { label: 'PUNTOS POR PARTIDO', value: '21.4' },
      { label: 'TIROS LIBRES POR PARTIDO', value: '6.2' },
      { label: '% TIROS LIBRES POR PARTIDO', value: '81.5' },
      { label: 'TIROS DE 2PTS POR PARTIDO', value: '8.3' },
      { label: 'TIROS DE 3PTS POR PARTIDO', value: '4.7' }
    ]
  }
}

// Opciones para el dropdown
const playerOptions = computed(() => 
  Object.entries(playersDatabase).map(([id, player]) => ({
    value: id,
    label: `${player.name} - ${player.team}`
  }))
)

const selectedPlayerId = ref(String(props.id || route.params.id || 1))
const currentPlayerId = computed(() => selectedPlayerId.value)
const playerData = computed(() => playersDatabase[currentPlayerId.value] || playersDatabase[1])

// Actualizar la URL cuando cambia la selección
watch(selectedPlayerId, (newId) => {
  router.push(`/jugador/${newId}`)
})

// Actualizar cuando cambia el ID en la URL
watch(() => route.params.id, (newId) => {
  if (newId && newId !== selectedPlayerId.value) {
    selectedPlayerId.value = String(newId)
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.player-header {
  padding: $spacing-xl $spacing-sm $spacing-lg;
  display: flex;
  justify-content: center;
}
</style>