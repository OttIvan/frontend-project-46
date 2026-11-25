import plain from './plain.js';
import stylish from './stylish.js';

const formatDiff = (diff, format) => {
  if (format === 'stylish') {
    return stylish(diff);
  }

  if (format === 'plain') {
    return plain(diff);
  }

  throw new Error(`Unsupported output format: ${format}`);
};

export default formatDiff;
