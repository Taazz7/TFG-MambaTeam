<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { api } from '../services/api'

const route = useRoute()
const playerId = Number(route.params.id)

const player = ref<any>(null)
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    loading.value = true
    player.value = await api.getPlayerById(playerId)
  } catch (err: any) {
    error.value = err.message || 'Error al cargar el jugador'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="player-page">
    <div v-if="loading">Cargando jugador...</div>
    <div v-else-if="error">{{ error }}</div>

    <div v-else class="player-card">
      <h1>{{ player.nombre }} {{ player.apellidos }}</h1>

      <img
        :src="player.fotoUrl || '/default-player.png'"
        alt="Foto del jugador"
        class="player-photo"
      />

      <p><strong>Edad:</strong> {{ player.edad }}</p>
      <p><strong>Posición:</strong> {{ player.posicion }}</p>
      <p><strong>Dorsal:</strong> {{ player.dorsal }}</p>
      <p><strong>Equipo:</strong> {{ player.equipo?.nombre }}</p>

      <!-- Añade aquí más campos según tu API -->
    </div>
  </div>
</template>

<style scoped>
.player-page {
  padding: 20px;
}

.player-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

.player-photo {
  width: 200px;
  border-radius: 10px;
}
</style>
