<template>
  <div>
    <h2 class="Subtitulo">{{ teamData.name }}</h2>
    <h2 class="Subtitulo">Record: {{ teamData.record }}</h2>
    
    <div class="cards-container">
      <PlayerCard
        v-for="player in teamData.players"
        :key="player.id"
        :player-id="player.id"
        :player-image="player.image"
        :player-name="player.name"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import PlayerCard from '@/components/PlayerCard.vue'

const route = useRoute()
const props = defineProps({
  categoria: {
    type: String,
    default: 'nacA1Masc'
  }
})

// Datos de equipos (esto debería venir de una API)
const teams = {
  nacA1Masc: {
    name: 'Nacional A1 Masculino',
    record: '9V 3D',
    players: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Jugador ${i + 1}`,
      image: `/img/${i + 1}.png`
    }))
  },
  nacA2Masc: {
    name: 'Nacional A2 Masculino',
    record: '4V 6D',
    players: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Jugador ${i + 1}`,
      image: `/img/${i + 1}.png`
    }))
  },
  nacA2Fem: {
    name: 'Nacional A2 Femenino',
    record: '13V 0D',
    players: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Jugador ${i + 1}`,
      image: `/img/${i + 1}.png`
    }))
  },
  '2Arag': {
    name: '2ª Aragonesa',
    record: '7V 5D',
    players: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Jugador ${i + 1}`,
      image: `/img/${i + 1}.png`
    }))
  },
  '3Arag': {
    name: '3ª Aragonesa',
    record: '9V 1D',
    players: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Jugador ${i + 1}`,
      image: `/img/${i + 1}.png`
    }))
  }
}

const currentCategory = computed(() => props.categoria || route.params.categoria || 'nacA1Masc')
const teamData = computed(() => teams[currentCategory.value] || teams.nacA1Masc)

// Actualizar cuando cambia la categoría
watch(() => route.params.categoria, (newCategory) => {
  console.log('Categoría cambiada a:', newCategory)
})
</script>

<style lang="scss" scoped>
@import '@/src/styles/main.scss';
</style>