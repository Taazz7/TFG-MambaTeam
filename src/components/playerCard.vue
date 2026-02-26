<script setup lang="ts">
import type { Player } from '../composables/usePlayers';

// Definimos que el componente recibe un objeto 'player' completo
defineProps<{
  player: Player
}>()
</script>

<template>
  <div class="player-card">
    <img 
      :src="player.fotoUrl || '/img/default-player.png'" 
      alt="Foto jugador" 
      class="player-card__img" 
    />
    <div class="player-card__info">
      <h3>{{ player.nombre }} {{ player.apellidos }}</h3>
      <p>Dorsal: {{ player.dorsal }} | {{ player.posicion }}</p>
      <router-link :to="`/player/${player.id}`" class="btn">Ver Perfil</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Tus estilos aquí */
</style>