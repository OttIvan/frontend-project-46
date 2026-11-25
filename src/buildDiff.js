import _ from 'lodash';

const buildDiff = (before, after) => {
  const keys = _.sortBy(_.union(Object.keys(before), Object.keys(after)));

  return keys.map((key) => {
    if (!Object.hasOwn(before, key)) {
      return { key, type: 'added', value: after[key] };
    }

    if (!Object.hasOwn(after, key)) {
      return { key, type: 'removed', value: before[key] };
    }

    const oldValue = before[key];
    const newValue = after[key];

    if (_.isPlainObject(oldValue) && _.isPlainObject(newValue)) {
      return { key, type: 'nested', children: buildDiff(oldValue, newValue) };
    }

    if (_.isEqual(oldValue, newValue)) {
      return { key, type: 'unchanged', value: oldValue };
    }

    return { key, type: 'changed', oldValue, newValue };
  });
};

export default buildDiff;
