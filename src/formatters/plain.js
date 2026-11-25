const formatValue = (value) => {
  if (value !== null && typeof value === 'object') {
    return '[complex value]';
  }

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  return String(value);
};

const renderChanges = (nodes, parentPath = []) =>
  nodes.flatMap(({ key, type, value, children, oldValue, newValue }) => {
    const path = [...parentPath, key];
    const property = `Property '${path.join('.')}'`;

    switch (type) {
      case 'nested':
        return renderChanges(children, path);
      case 'added':
        return `${property} was added with value: ${formatValue(value)}`;
      case 'removed':
        return `${property} was removed`;
      case 'changed':
        return `${property} was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`;
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown diff node type: ${type}`);
    }
  });

const plain = (diff) => renderChanges(diff).join('\n');

export default plain;
