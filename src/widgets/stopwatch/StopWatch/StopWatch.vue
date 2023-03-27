<script setup>
import { useStopwatch } from '../composables/useStopwatch';
import * as formatter from '../utils/formatTime';
import { PlayPauseButton, StopButton } from '../../../shared/ui';

const {
  hours,
  minutes,
  seconds,
  isRunning,
  isReset,
  handleToggleRunning,
  handleReset
} = useStopwatch();
</script>

<template>
  <div class="stopwatch" :class="{ stopwatch_running: isRunning }">
    <div class="stopwatch__display">
      <span class="stopwatch__value">{{
        formatter.getString(hours, minutes, seconds)
      }}</span>
    </div>
    <div class="stopwatch__controls">
      <PlayPauseButton
        :is-running="isRunning"
        :on-click="handleToggleRunning"
      />
      <StopButton
        :is-running="isRunning"
        :is-reset="isReset"
        :on-click="handleReset"
      />
    </div>
  </div>
</template>

<style lang="scss">
.stopwatch {
  width: 225px;
  height: 120px;
  border: 1px solid $primary-dark;
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
    cursor: default;
    transition: all 0.3s ease-in;
  }
  &__controls {
    height: 50%;
    display: flex;
    gap: $gap-column;
    justify-content: center;
    align-items: center;
  }
  &_running {
    border: none;
    box-shadow: 0px 0px 2px $primary;
  }
  &_running * {
    color: $primary;
    border-color: $primary;
  }
}
</style>
