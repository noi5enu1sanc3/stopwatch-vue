<script setup>
import HelloWorld from './components/HelloWorld.vue';
import StopWatch from './components/StopWatch.vue';
import AddButton from './components/AddButton.vue';

import { ref, reactive } from 'vue';

const INITIAL_STOPWATCH_COUNT = 4;
const INITIAL_STOPWATCH = {
  isRunning: false,
  isReset: true
};

const stopwatches = reactive([]);

for (let i = 0; i < INITIAL_STOPWATCH_COUNT; i++) {
  stopwatches.push(INITIAL_STOPWATCH);
}
</script>

<template>
  <main class="main">
    <ul class="stopwatches-list">
      <li v-for="(stopwatch, index) in stopwatches" :key="`w_${index + 1}`">
        <StopWatch />
      </li>
      <AddButton @click="stopwatches.push(INITIAL_STOPWATCH)" />
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
