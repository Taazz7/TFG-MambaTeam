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

.dropdown {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  &__label {
    font-size: $font-size-base;
    font-weight: 600;
    color: $color-primary;
    text-align: center;
  }

  &__wrapper {
    position: relative;
    width: 100%;
  }

  &__select {
    width: 100%;
    padding: $spacing-sm $spacing-lg $spacing-sm $spacing-sm;
    font-size: $font-size-base;
    font-family: $font-family-base;
    color: $color-dark;
    background-color: white;
    border: 2px solid $color-primary;
    border-radius: 8px;
    cursor: pointer;
    appearance: none;
    @include transition(all);

    &:hover {
      border-color: darken($color-primary, 10%);
      box-shadow: 0 2px 8px rgba($color-primary, 0.2);
    }

    &:focus {
      outline: none;
      border-color: darken($color-primary, 15%);
      box-shadow: 0 0 0 3px rgba($color-primary, 0.1);
    }

    option {
      padding: $spacing-xs;
    }
  }

  &__arrow {
    position: absolute;
    right: $spacing-sm;
    top: 50%;
    transform: translateY(-50%);
    color: $color-primary;
    pointer-events: none;
    font-size: 0.8rem;
  }
}

@include responsive(tablet) {
  .dropdown {
    &__select {
      font-size: $font-size-lg;
      padding: $spacing-md $spacing-xl $spacing-md $spacing-md;
    }
  }
}
</style>