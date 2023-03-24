<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="stopwatch">
    <div class="stopwatch__display">
      <span class="stopwatch__value stopwatch__value_hours"></span>
      <span class="stopwatch__value stopwatch__value_minutes"></span>
      <span class="stopwatch__value stopwatch__value_seconds"></span>
    </div>
    <div class="stopwatch__controls">
      <button class="stopwatch__button stopwatch__button_start" />
      <button class="stopwatch__button stopwatch__button_stop" />
    </div>
  </div>
</template>

<style lang="scss">
.stopwatch {
  width: 225px;
  height: 120px;
  background-color: $bg-grey;
  &__display {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid $primary-dark;
    height: 50%;
  }
  &__value {
    color: $primary-dark;
  }
  &__controls {
    height: 50%;
    display: flex;
    gap: $gap-column;
    justify-content: center;
    align-items: center;
  }
  &__button {
    background-color: $primary-dark;
    width: 20px;
    height: 20px;
    border: none;
    outline: none;
  }
}
</style>
