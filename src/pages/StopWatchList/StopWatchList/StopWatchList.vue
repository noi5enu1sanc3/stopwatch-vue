<script setup>
import { ref } from 'vue';

import { StopWatch } from '../../../widgets/stopwatch';
import { AddButton } from '../../../shared/ui';

import * as idHelper from '../utils/getId';
import * as constants from '../utils/constants';

const stopwatches = ref([idHelper.getId(constants.STOPWATCH_ID_PREFIX)]);

const addStopwatch = () => {
  const stopwatchId = idHelper.getId(constants.STOPWATCH_ID_PREFIX);
  stopwatches.value.push(stopwatchId);
};

const buttonId = idHelper.getId(constants.BUTTON_ID_PREFIX);
</script>

<template>
  <TransitionGroup name="list" tag="ul" class="stopwatches-list">
    <li v-for="id in stopwatches" :key="id">
      <StopWatch />
    </li>
    <li :key="buttonId">
      <AddButton :on-click="addStopwatch" />
    </li>
  </TransitionGroup>
</template>

<style lang="scss">
@import '../../../assets/styles/mixins';
ul {
  display: grid;
  width: fit-content;
  column-gap: $gap-column;
  row-gap: $gap-row;
  margin-bottom: $gap-row;

  @include for-size(phone) {
    grid-template-columns: 1fr;
  }
  @include for-size(tablet) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include for-size(desktop) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
