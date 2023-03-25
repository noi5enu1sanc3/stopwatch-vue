<script setup>
import { useStopwatch } from '../composables/useStopwatch';
import * as formatter from '../utils/formatTime';

const { hours, minutes, seconds, isRunning, handleToggleRunning, handleReset } =
  useStopwatch();
</script>

<template>
  <div class="stopwatch" :class="{ stopwatch_running: isRunning }">
    <div class="stopwatch__display">
      <span class="stopwatch__value">{{
        formatter.getString(hours, minutes, seconds)
      }}</span>
    </div>
    <div class="stopwatch__controls">
      <button
        class="stopwatch__button stopwatch__button_type_start"
        :class="{ stopwatch__button_type_pause: isRunning }"
        @click="handleToggleRunning"
      >
        <span
          class="stopwatch__button-element stopwatch__button-element-before"
        />
        <span
          class="stopwatch__button-element stopwatch__button-element-after"
        />
      </button>
      <button
        class="stopwatch__button stopwatch__button_type_stop"
        @click="handleReset"
      />
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
    transition: all 0.3s ease-in;
  }
  &__value {
    color: $primary-dark;
    font-size: $fs-default;
    line-height: $lh-default;
    transition: all 0.3s ease-in;
  }
  &__controls {
    height: 50%;
    display: flex;
    gap: $gap-column;
    justify-content: center;
    align-items: center;
  }
  &__button {
    background-color: transparent;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: none;
    outline: none;
    position: relative;
    &-element {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: $primary-dark;
      position: absolute;
      top: 0;
      left: 0;
      transition: clip-path 0.3s ease, background-color 0.3s ease;
    }
  }
  &__button_type_start &__button-element-before {
    clip-path: polygon(0 0, 50% 25%, 50% 75%, 0% 100%);
  }
  &__button_type_start &__button-element-after {
    clip-path: polygon(50% 25%, 100% 50%, 100% 50%, 50% 75%);
  }
  &__button_type_pause &__button-element-before {
    clip-path: polygon(0 0, 30% 0, 30% 100%, 0% 100%);
  }
  &__button_type_pause &__button-element-after {
    clip-path: polygon(70% 0, 100% 0, 100% 100%, 70% 100%);
  }
  &__button_type_stop {
    background-color: $primary-dark;
    transition: background-color 0.3s ease;
  }
  &_running * {
    color: $primary;
    border-color: $primary;
  }
  &_running &__button_type_stop {
    background-color: $primary;
  }
  &_running &__button-element {
    background-color: $primary;
  }
}
</style>
