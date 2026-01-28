<template>
  <div class="slider">
    <button class="slider__btn slider__btn--prev" @click="previousSlide" aria-label="Anterior">
      ❮
    </button>

    <div class="slider__content" :style="sliderStyle">
      <img
        v-for="(image, index) in allImages"
        :key="`slide-${index}`"
        :src="image"
        class="slider__img"
        :alt="`Slide ${index}`"
      >
    </div>

    <button class="slider__btn slider__btn--next" @click="nextSlide" aria-label="Siguiente">
      ❯
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  autoSlideInterval: {
    type: Number,
    default: 4000
  }
})

const currentIndex = ref(1) // Empezamos en 1 porque el primer slide es el clon del último
const transitioning = ref(false)

// Clonamos el primer y último slide para el efecto infinito
const allImages = computed(() => {
  const lastImage = props.images[props.images.length - 1]
  const firstImage = props.images[0]
  return [lastImage, ...props.images, firstImage]
})

const sliderStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
  transition: transitioning.value ? 'transform 0.6s ease' : 'none'
}))

const moveToSlide = (index) => {
  if (transitioning.value) return
  
  transitioning.value = true
  currentIndex.value = index
  
  setTimeout(() => {
    transitioning.value = false
    
    // Si estamos en el clon del primer slide, saltamos al original sin transición
    if (currentIndex.value === allImages.value.length - 1) {
      currentIndex.value = 1
    }
    
    // Si estamos en el clon del último slide, saltamos al original sin transición
    if (currentIndex.value === 0) {
      currentIndex.value = allImages.value.length - 2
    }
  }, 600)
}

const nextSlide = () => {
  moveToSlide(currentIndex.value + 1)
}

const previousSlide = () => {
  moveToSlide(currentIndex.value - 1)
}

// Auto-slide
let autoSlideTimer = null

const startAutoSlide = () => {
  autoSlideTimer = setInterval(() => {
    nextSlide()
  }, props.autoSlideInterval)
}

const stopAutoSlide = () => {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer)
  }
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<style lang="scss" scoped>
@import '@/src/styles/main.scss';
</style>