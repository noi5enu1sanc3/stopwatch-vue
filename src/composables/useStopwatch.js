import { ref } from 'vue';

export function useStopwatch() {
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  const isRunning = ref(false);

  let start = 0;
  let elapsed = 0;
  let currentTime = 0;
  let intervalId;

  const updateTime = () => {
    elapsed = Date.now() - start;

    seconds.value = Math.floor((elapsed / 1000) % 60);
    minutes.value = Math.floor((elapsed / 1000 / 60) % 60);
    hours.value = Math.floor((elapsed / 1000 / 60 / 60) % 60);
  };

  const handleReset = () => {
    isRunning.value = false;
    clearInterval(intervalId);
    start = 0;
    elapsed = 0;
    seconds.value = 0;
    minutes.value = 0;
    hours.value = 0;
  };

  const handleToggleRunning = () => {
    if (!isRunning.value) {
      isRunning.value = true; //is updating through value right??
      start = Date.now() - elapsed;
      intervalId = setInterval(updateTime, 75);
    } else {
      isRunning.value = false;
      elapsed = Date.now() - start;
      clearInterval(intervalId);
    }
  };

  return {
    hours,
    minutes,
    seconds,
    isRunning,
    handleToggleRunning,
    handleReset
  };
}
