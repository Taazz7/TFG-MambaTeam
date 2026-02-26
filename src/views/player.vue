<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
// Importamos la función correcta que definimos en api.ts
import { apiFetch } from '../services/api';

const route = useRoute()
const playerId = Number(route.params.id)

// Definimos una interfaz rápida para tener autocompletado y evitar el "any"
interface Player {
  nombre: string;
  apellidos: string;
  fotoUrl?: string;
  edad: number;
  posicion: string;
  dorsal: number;
  equipo?: {
    nombre: string;
  };
}

const player = ref<Player | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    loading.value = true
    error.value = null
    
    // CORRECCIÓN AQUÍ: 
    // Usamos apiFetch directamente pasándole el endpoint.
    // Ajusta '/Jugadores/' si en tu Swagger el nombre es distinto (ej. /Players/)
    player.value = await apiFetch<Player>(`/Jugadores/${playerId}`)
    
  } catch (err: any) {
    console.error(err)
    error.value = err.message || 'Error al cargar el jugador'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="player-page">
    <div v-if="loading" class="loading">Cargando jugador...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <div v-else-if="player" class="player-card">
      <h1>{{ player.nombre }} {{ player.apellidos }}</h1>

      <img
        :src="player.fotoUrl || '/default-player.png'"
        alt="Foto del jugador"
        class="player-photo"
      />

      <div class="info">
        <p><strong>Edad:</strong> {{ player.edad }}</p>
        <p><strong>Posición:</strong> {{ player.posicion }}</p>
        <p><strong>Dorsal:</strong> {{ player.dorsal }}</p>
        <p v-if="player.equipo"><strong>Equipo:</strong> {{ player.equipo.nombre }}</p>
      </div>

      <router-link to="/">Volver al inicio</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>