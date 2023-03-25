<script setup>
import StopWatch from './components/StopWatch.vue';
import AddButton from './components/AddButton.vue';

import { ref } from 'vue';

const INITIAL_STOPWATCH_COUNT = 4;

const stopwatches = ref([]);

for (let i = 0; i < INITIAL_STOPWATCH_COUNT; i++) {
  stopwatches.value.push({});
}

const addStopwatch = () => stopwatches.value.push({});
</script>

<template>
  <main class="main">
    <ul class="stopwatches-list">
      <li v-for="(stopwatch, index) in stopwatches" :key="`w_${index + 1}`">
        <StopWatch />
      </li>
      <AddButton @click="addStopwatch" />
    </ul>
  </main>
</template>

<style lang="scss">
.main {
  display: flex;
  justify-content: center;
  padding: 70px 0 80px;
}
.stopwatches-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(3, 1fr);
  column-gap: $gap-column;
  row-gap: $gap-row;
  margin-bottom: $gap-row;
}
</style>
