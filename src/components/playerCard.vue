<template>
  <div class="card">
    <router-link :to="`/jugador/${playerId}`">
      <img :src="playerImage" :alt="playerName" />
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  playerId: {
    type: [String, Number],  // COMPROBAR ESE STRING O NUMBER
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
</script>

<style lang="scss" scoped>
@import '@/src/styles/main.scss';
</style>