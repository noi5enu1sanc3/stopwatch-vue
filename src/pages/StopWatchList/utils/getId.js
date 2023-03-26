import { v4 as uuidv4 } from 'uuid';

const getId = (prefix) => {
  const uniqueId = uuidv4();
  return `${prefix}_${uniqueId}`;
};

export { getId };
