<script setup>
import { STOP_BUTTON_TEXT } from '../utils/constants';
const props = defineProps({
  isRunning: {
    type: Boolean,
    default: false
  },
  isReset: {
    type: Boolean,
    default: true
  },
  onClick: {
    type: Function,
    default: () => undefined
  }
});
</script>

<template>
  <button
    class="stop-button"
    :class="{
      'stop-button_running': props.isRunning,
      'stop-button_enabled': !props.isReset
    }"
    :disabled="isReset"
    :aria-label="STOP_BUTTON_TEXT"
    @click="props.onClick"
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
  transition: background-color 0.3s ease, transform 0.3s ease;
  &_enabled:hover {
    transform: scale(1.1);
  }
  &_running {
    background-color: $primary;
  }
}
</style>
