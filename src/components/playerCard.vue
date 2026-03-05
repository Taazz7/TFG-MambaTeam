<template>
  <div class="card">
    <router-link :to="`/jugador/${shortCategory}-${playerId}`">
      <img :src="playerImage" :alt="playerName" />
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  playerId: {
    type: [String, Number],
    required: true
  },
  playerCategory: {
    type: String,
    required: true
  },
  playerImage: {
    type: String,
    required: true
  },
  playerName: {
    type: String,
    default: 'Jugador'
  }
})

// Creamos una propiedad computada para simplificar el nombre de la categoría
// Si es una de las 3 primeras del mapa (Nacional), devolvemos 'Nac', si no 'A'
const shortCategory = computed(() => {
  const nacCategories = ['nacA1Masc', 'nacA2Fem', 'nacA2Masc']
  return nacCategories.includes(props.playerCategory) ? 'Nac' : 'A'
})
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
</style>