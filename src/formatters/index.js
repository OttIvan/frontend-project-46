import json from './json.js';
import plain from './plain.js';
import stylish from './stylish.js';

const formatDiff = (diff, format) => {
  if (format === 'stylish') {
    return stylish(diff);
  }

  if (format === 'plain') {
    return plain(diff);
  }

  if (format === 'json') {
    return json(diff);
  }

  throw new Error(`Unsupported output format: ${format}`);
};

export default formatDiff;
