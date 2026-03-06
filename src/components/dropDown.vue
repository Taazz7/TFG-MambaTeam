<template>
  <div class="dropdown">
    <label v-if="label" class="dropdown__label">{{ label }}</label>
    <div class="dropdown__wrapper">
      <select 
        :value="modelValue" 
        @change="$emit('update:modelValue', $event.target.value)"
        class="dropdown__select"
      >
        <option 
          v-for="option in options" 
          :key="option.value" 
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <span class="dropdown__arrow">▼</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    required: true
  },
  options: {
    type: Array,
    required: true,
    // Formato: [{ value: 'id', label: 'Nombre' }]
  },
  label: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
</style>