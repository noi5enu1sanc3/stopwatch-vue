<script setup>
import { PLAY_BUTTON_TEXT, PAUSE_BUTTON_TEXT } from '../utils/constants';
const props = defineProps({
  isRunning: {
    type: Boolean,
    default: false
  }
});
</script>
<template>
  <button
    class="play-pause-button play-pause-button_type_start"
    :class="{ 'play-pause-button_type_pause': props.isRunning }"
    :aria-label="props.isRunning ? PAUSE_BUTTON_TEXT : PLAY_BUTTON_TEXT"
  >
    <span
      class="play-pause-button__element play-pause-button__element_type_before"
      :class="{ 'play-pause-button__element_running': props.isRunning }"
    />
    <span
      class="play-pause-button__element play-pause-button__element_type_after"
      :class="{ 'play-pause-button__element_running': props.isRunning }"
    />
  </button>
</template>

<style lang="scss">
.play-pause-button {
  background-color: transparent;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  position: relative;
  &__element {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: $primary-dark;
    position: absolute;
    top: 0;
    left: 0;
    transition: clip-path 0.3s ease, background-color 0.3s ease;
    &_running {
      background-color: $primary;
    }
  }
  &_type_start &__element_type_before {
    clip-path: polygon(0 0, 50% 25%, 50% 75%, 0% 100%);
  }
  &_type_start &__element_type_after {
    clip-path: polygon(50% 25%, 100% 50%, 100% 50%, 50% 75%);
  }
  &_type_pause &__element_type_before {
    clip-path: polygon(0 0, 30% 0, 30% 100%, 0% 100%);
  }
  &_type_pause &__element_type_after {
    clip-path: polygon(70% 0, 100% 0, 100% 100%, 70% 100%);
  }
}
</style>
