import { ref } from 'vue';
import * as converter from '../utils/convertMs';

export function useStopwatch() {
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  const isRunning = ref(false);
  const isReset = ref(true);

  let start = 0;
  let elapsed = 0;
  let intervalId;

  const updateTime = () => {
    elapsed = Date.now() - start;

    seconds.value = converter.getSecsFromMs(elapsed);
    minutes.value = converter.getMinsFromMs(elapsed);
    hours.value = converter.getHrsFromMs(elapsed);
  };

  const handleReset = () => {
    isRunning.value = false;
    isReset.value = true;
    clearInterval(intervalId);
    start = 0;
    elapsed = 0;
    seconds.value = 0;
    minutes.value = 0;
    hours.value = 0;
  };

  const handleToggleRunning = () => {
    if (!isRunning.value) {
      isRunning.value = true;
      isReset.value = false;
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
    isReset,
    handleToggleRunning,
    handleReset
  };
}
