<template>
  <div class="team-container">
    <h1>{{ title }}</h1>

    <div v-if="loading">Cargando plantilla...</div>
    <div v-else-if="error">{{ error }}</div>

    <div v-else class="players-grid">
      <playerCard 
        v-for="player in players" 
        :key="player.id" 
        :player="player" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePlayers } from '../composables/usePlayers'
import playerCard from '../components/playerCard.vue'

const route = useRoute()
const { players, loading, error, fetchPlayers } = usePlayers()

const title = computed(() => {
  return route.params.type === 'JugadoresA' ? 'Nacional A1' : 'Nacional A2'
})

const loadData = () => {
  const type = route.params.type as 'JugadoresA' | 'JugadoresNac'
  if (type) fetchPlayers(type)
}

onMounted(loadData)
watch(() => route.params.type, loadData)
</script>