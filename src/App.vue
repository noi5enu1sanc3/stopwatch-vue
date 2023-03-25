<script setup>
import { ref } from 'vue';

import StopWatch from './components/StopWatch.vue';
import AddButton from './components/ui/AddButton.vue';

const INITIAL_STOPWATCH_COUNT = 4;

const stopwatches = ref([]);

for (let i = 0; i < INITIAL_STOPWATCH_COUNT; i++) {
  stopwatches.value.push({});
}

const addStopwatch = () => stopwatches.value.push({});
</script>

<template>
  <main class="main">
    <TransitionGroup name="list" tag="ul" class="stopwatches-list">
      <li v-for="(stopwatch, index) in stopwatches" :key="`w_${index + 1}`">
        <StopWatch />
      </li>
      <AddButton @click="addStopwatch" />
    </TransitionGroup>
  </main>
</template>

<style lang="scss">
.main {
  display: flex;
  justify-content: center;
  padding: 70px 0 80px;
}
ul {
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
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
