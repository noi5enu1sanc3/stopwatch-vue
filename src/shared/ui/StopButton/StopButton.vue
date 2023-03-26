<script setup>
const props = defineProps({
  isRunning: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <button
    class="stop-button"
    :class="{ 'stop-button_running': props.isRunning }"
    :disabled="!props.isRunning"
    aria-label="Stop"
  />
</template>

<style lang="scss">
.stop-button {
  background-color: $primary-dark;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  position: relative;
  transition: background-color 0.3s ease;
  &_running {
    background-color: $primary;
  }
}
</style>
