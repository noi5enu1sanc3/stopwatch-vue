const getString = (hrs, mins, secs) => {
  return `${hrs > 0 ? hrs + ':' : ''}${mins > 0 ? mins + ':' : ''}${secs}`;
};

export { getString };
