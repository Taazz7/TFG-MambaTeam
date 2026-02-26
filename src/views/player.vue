<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { apiFetch } from '../services/api'; // Importamos apiFetch, no api
import type { Player } from '../composables/usePlayers';

const route = useRoute()
const playerId = Number(route.params.id)

const player = ref<Player | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    loading.value = true
    // IMPORTANTE: Aquí asumo que buscas en JugadoresA, ajusta si es dinámico
    player.value = await apiFetch<Player>(`/api/JugadoresA/${playerId}`)
  } catch (err: any) {
    error.value = 'Error al cargar el detalle del jugador'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div v-if="player" class="player-detail">
    <h1>{{ player.nombre }} {{ player.apellidos }}</h1>
    </div>
</template>