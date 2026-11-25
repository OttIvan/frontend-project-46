import _ from 'lodash';

const indentSize = 4;
const indent = (depth) => ' '.repeat(depth * indentSize);

const renderBlock = (lines, depth) => ['{', ...lines, `${indent(depth)}}`].join('\n');

const renderValue = (value, depth) => {
  if (Array.isArray(value)) {
    return JSON.stringify(value);
  }

  if (!_.isPlainObject(value)) {
    return String(value);
  }

  const entryDepth = depth + 1;
  const lines = Object.entries(value).map(
    ([key, entry]) => `${indent(entryDepth)}${key}: ${renderValue(entry, entryDepth)}`,
  );

  return renderBlock(lines, depth);
};

const renderDiff = (nodes, depth = 0) => {
  const entryDepth = depth + 1;
  const markerIndent = ' '.repeat(entryDepth * indentSize - 2);
  const lines = nodes.flatMap(({ key, type, value, children, oldValue, newValue }) => {
    const renderLine = (marker, content) => `${markerIndent}${marker} ${key}: ${content}`;

    switch (type) {
      case 'added':
        return renderLine('+', renderValue(value, entryDepth));
      case 'removed':
        return renderLine('-', renderValue(value, entryDepth));
      case 'unchanged':
        return renderLine(' ', renderValue(value, entryDepth));
      case 'nested':
        return renderLine(' ', renderDiff(children, entryDepth));
      case 'changed':
        return [
          renderLine('-', renderValue(oldValue, entryDepth)),
          renderLine('+', renderValue(newValue, entryDepth)),
        ];
      default:
        throw new Error(`Unknown diff node type: ${type}`);
    }
  });

  return renderBlock(lines, depth);
};

export default renderDiff;
