const getHrsFromMs = (ms) => {
  return Math.floor((ms / 1000 / 60 / 60) % 60);
};

const getMinsFromMs = (ms) => {
  return Math.floor((ms / 1000 / 60) % 60);
};

const getSecsFromMs = (ms) => {
  return Math.floor((ms / 1000) % 60);
};

export { getHrsFromMs, getMinsFromMs, getSecsFromMs };
