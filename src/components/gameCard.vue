<template>
  <div class="card">
    <router-link :to="link">
      <img :src="image" :alt="alt" class="card__img">
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Game card'
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
// Los estilos están en _cards.scss
</style>