import stylish from './stylish.js';

const formatDiff = (diff, format) => {
  if (format === 'stylish') {
    return stylish(diff);
  }

  throw new Error(`Unsupported output format: ${format}`);
};

export default formatDiff;
